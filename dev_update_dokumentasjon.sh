#!/bin/bash
# =============================================================================
# dev_update_dokumentasjon.sh — legg arbeidskopien av dokumentasjonen ut på
# https://dev.iskole.net/dokumentasjon/ for gjennomlesing (før push til GitHub
# Pages). Bygger med iskole/docusaurus.dev.config.js: dev-adresse, bare norsk,
# noindex og et banner som forklarer endringsmarkeringen.
#
#   bash dev_update_dokumentasjon.sh
#
# Samme mønster som dev_update_<app>.sh i JET-repoene (IDporten-GW-ORDS/
# infrastructure/jet-deploy/mal.sh): katalog → dokumentasjon_releases/<stempel>
# → atomisk bytte av symlinken dokumentasjon → røyktest → behold 10 releases.
#
# NB: docusaurus build skriver om iskole/.docusaurus/. En `docusaurus start`
# som kjører samtidig, svarer «Page Not Found» etterpå — start den på nytt.
#
# Rollback/fjerning på noden:
#   cd /var/www/iskole.net/html && ls dokumentasjon_releases
#   sudo ln -sfn dokumentasjon_releases/<stempel> dokumentasjon.new && sudo mv -Tf dokumentasjon.new dokumentasjon
#   (helt bort: sudo rm dokumentasjon && sudo rm -rf dokumentasjon_releases)
# =============================================================================
set -euo pipefail

APP="dokumentasjon"
REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
SITE="$REPO_DIR/iskole"
BASTION="opc@158.179.62.12"
read -r -a NODER <<< "${NODER:-10.0.4.76}"
BEHOLD=10

GIT_SHA=$(git -C "$REPO_DIR" rev-parse --short HEAD)
GIT_DIRTY=""
git -C "$REPO_DIR" diff --quiet HEAD -- || GIT_DIRTY="-dirty"
STAMP="$(date '+%Y_%m_%d_%H%M')_${GIT_SHA}${GIT_DIRTY}"

UT="$(mktemp -d)/site"
echo "── bygger ($STAMP) → $UT"
( cd "$SITE" && ./node_modules/.bin/docusaurus build --config docusaurus.dev.config.js --out-dir "$UT" 2>&1 ) \
  | grep -v -i 'browserslist\|update-db\|regularly' | tail -5
[[ -f "$UT/index.html" ]] || { echo "Bygget ga ingen index.html — avbryter." >&2; exit 1; }

for NODE in "${NODER[@]}"; do
  echo "── $APP → $NODE ($STAMP)"
  OPPLASTING="/home/opc/${APP}_${STAMP}.d"
  rsync -a --delete -e "ssh -J $BASTION" "$UT/" "opc@$NODE:$OPPLASTING/"
  ssh -J "$BASTION" "opc@$NODE" \
    "APP='$APP' STAMP='$STAMP' OPPLASTING='$OPPLASTING' BEHOLD='$BEHOLD' bash -s" <<'REMOTE'
set -euo pipefail
WEBROOT="/var/www/iskole.net/html"
RELEASES="${WEBROOT}/${APP}_releases"
LENKE="${WEBROOT}/${APP}"
sudo mkdir -p "$RELEASES"

NY="${RELEASES}/${STAMP}"
sudo rm -rf "$NY"; sudo mkdir -p "$NY"
sudo rsync -a "$OPPLASTING/" "$NY/"
rm -rf "$OPPLASTING"
sudo restorecon -R "$NY" 2>/dev/null || true

sudo ln -sfn "$NY" "${LENKE}.new"
sudo mv -Tf "${LENKE}.new" "$LENKE"
mkdir -p /home/opc/update_history
echo "$(date '+%F %T') ${APP} ${STAMP}" >> /home/opc/update_history/update_history.txt

kode=$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:8080/${APP}/")
[[ "$kode" == "200" ]] && echo "  røyktest /${APP}/ → $kode" \
  || echo "  ADVARSEL: røyktest /${APP}/ → $kode" >&2

AKTIV=$(basename "$(readlink -f "$LENKE")")
cd "$RELEASES"
{ ls -1 | sort | head -n -"$BEHOLD" | grep -vxF "$AKTIV" || true; } | xargs -r sudo rm -rf
echo "  aktiv: ${APP}_releases/${AKTIV}"
REMOTE
done
rm -rf "$(dirname "$UT")"
echo "Ferdig: https://dev.iskole.net/${APP}/  ($STAMP)"
