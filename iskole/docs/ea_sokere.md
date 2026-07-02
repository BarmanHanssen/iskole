---
id: ea_sokere
title: Søkere
sidebar_label: Søkere
---

Søkere-bildet i Elevadmin er skolens arbeidsflate for å behandle søknader
fra søkerportalen: følge opp nye søknader, vurdere og komplettere dem, gi
tilbud, håndtere svar — og til slutt plassere søkere som har akseptert i
klasse, slik at de blir elever.

Alt arbeid med **én søker** gjøres i detaljpanelet nederst; verktøylinjen
over tabellen brukes til å filtrere listen og til **bulk-handlinger** på
mange søkere samtidig.

## Oversikten

![Søkerlisten](/img/soker_oversikt.png 'Søkerlisten')

Øverst til høyre velger du skoleår. Listen viser alle søknader for valgt
skole og skoleår, med program, navn, fødselsdato, gjeldende status (med
farge), når statusen sist ble endret, antall plasser på tilbudet, hvor
mange som er tatt inn, samt klasse (for søkere som allerede er plassert)
og hybel.

**Statusstripen** rett under filtrene viser hvor mange søknader som står i
hver status. Klikk på en status for å filtrere listen til bare de
søknadene — klikk igjen for å slå av. Telleren til høyre viser alltid
«X av Y søkere» når et filter er aktivt.

![Filtrert liste](/img/soker_filter.png 'Filtrert på status')

**Program**-nedtrekket avgrenser til ett utdanningsprogram, og **Søk på
navn** filtrerer mens du skriver (fornavn eller etternavn).

### Inntak-kolonnen

**Inntak** hører til programmet og viser **opptatte plasser av
konsesjonen**: elever som er tatt inn *pluss* aktive tilbud som ennå ikke
er besvart eller plassert. Merket blir gult når programmet nærmer seg
fullt (fra 80 %) og rødt når alle plassene er tildelt.

![Inntak-kolonnen](/img/soker_inntak.png 'Inntak — opptatt av konsesjon')

Systemet håndhever konsesjonen: når alle plassene er tildelt, avvises nye
tilbud — både enkeltvis og i bulk — med beskjed om hvor mange som er
inntatt eller har aktivt tilbud. Plasser frigjøres når tilbud avslås,
søknader trekkes eller søkere avvises.

Fanene øverst gir i tillegg:

- **Søknader, ikke sendt** — påbegynte søknader som søkeren ikke har
  fullført. Nyttig for å følge opp søkere som har stoppet underveis.
- **Interessenter** — personer som har meldt interesse for skolen uten å
  søke (vises bare hvis skolen bruker interessent-funksjonen).
- **Rapport egendefinert** — tabellrapport over alle søkere der du selv
  velger hvilke kolonner som skal med (kolonnevelger), og kan eksportere
  til Excel.

## Søkeren i detalj

Klikk på en rad, og detaljpanelet trekkes opp fra bunnen. Delelinjen
mellom liste og panel kan dras for å endre fordelingen, og panelet kan
maksimeres med pil-knappen oppe til høyre. Fanene viser antall der det
er innhold (foresatte, statusendringer, vedlegg, spørsmål/svar).

![Detaljpanelet](/img/soker_detalj.png 'Detaljpanelet med kortene')

**Søker**-fanen er delt i tre kort:

- **Person** — portrett (bildet søkeren har lastet opp som vedlegg av
  typen «Portrettbilde»), fødselsdato og -nummer, målform, adresse,
  e-post, mobil og siste innlogging i søkerportalen.
- **Søknad** — programønskene i prioritert rekkefølge. Ønsket som
  tilsvarer skolens tilbud er markert med **Tilbud**-merke, og når tilbud
  er sendt vises dato og svarfrist. Nederst: flagg for lest reglement og
  (avhengig av skolens oppsett) fortrinnsrett, internat og hybel, samt
  knapper for inntaksbrev og kontrakter (PDF) når de finnes.
- **Vurdering** — poengsum, poeng fra karakterer, rettstype, merknad fra
  søkeren og skolens egen merknad.

**Behandling**-fanen viser hele statushistorikken for søknaden — hvert
steg med tidspunkt og hvem som gjorde endringen. Rader med e-postvarsel
kan åpnes for å se hva som ble sendt.

![Statushistorikk](/img/soker_behandling.png 'Behandling — statushistorikk')

**Vedlegg**-fanen lister dokumentene søkeren har lastet opp
(karakterutskrifter, legeerklæringer osv.) med nedlasting, og **Fagvalg**
og **Spørsmål/svar** viser søkerens valg og svar fra søknaden.

## Arbeidsflyt: endre status

Søknadsbehandlingen drives av statusendringer. **Endre status**-knappen i
detaljpanelets topplinje viser handlingene som er lovlige fra søknadens
gjeldende status — med handlingsnavn som sier hva du gjør, ikke bare hvor
søknaden havner. Anbefalt neste steg er merket med ★.

![Endre status](/img/soker_endre_status.png 'Endre status — lovlige handlinger')

Eksempel: en søknad som står i «Søknad komplett — venter på inntaksmøte»
tilbyr **Gi tilbud om skoleplass** (★), **Sett på venteliste**,
**Avvis søkeren**, **Fortsett behandling** og **Søknad trukket**.

Noen handlinger åpner en e-postdialog slik at søkeren (og eventuelt
foresatte) varsles om utfallet; teksten kan tilpasses før sending.

Skulle en kollega ha endret søknaden mens du så på den, stoppes
endringen trygt med beskjed om å laste siden på nytt — ingenting
overskrives i stillhet.

## Redigere søkerens opplysninger

Hvert kort i Søker-fanen har en blyant oppe til høyre. Klikk den, endre
feltene, og bekreft med **Lagre** (eller **Avbryt**). Resten av panelet
er fortsatt lesbart mens du redigerer.

### Personalia

![Rediger personalia](/img/soker_person_rediger.png 'Rediger personalia')

Fornavn, etternavn, fødselsdato, fødselsnummer og e-post.
Fødselsnummeret kontrolleres (gyldighet og at ingen annen søker har samme
nummer). Når søkeren er **plassert i klasse**, er personalia låst — kortet
viser en hengelås, og opplysningene redigeres da på eleven i stedet.

### Søknad

![Rediger søknad](/img/soker_soknad_rediger.png 'Rediger søknad')

Her endrer du **skolens tilbud** (hvilket program/trinn tilbudet gjelder,
fra listen over skolens søkertilbud), **planlagt start- og sluttdato**
(for søkere som skal begynne utenom ordinær skolestart) og flaggene
**fortrinnsrett**, **internatplass** og **hybelplass** (feltene vises i
henhold til skolens oppsett). Søkerens egne programønsker endres ikke av
skolen.

### Vurdering

![Rediger vurdering](/img/soker_vurdering_rediger.png 'Rediger vurdering')

Poengsum, poeng fra karakterer, rettstype (U — ungdomsrett, V —
voksenrett, F — fullføringsrett, I — ikke rett) og skolens merknad.
Vurderingen kan redigeres også etter at søkeren er plassert.

## Flere handlinger

Ved siden av **Endre status** ligger **Flere handlinger** — menyen for de
tunge operasjonene på én søker. Valgene er bare aktive når de er lovlige
for søkerens tilstand.

![Flere handlinger](/img/soker_flere_handlinger.png 'Flere handlinger-menyen')

### Plasser i klasse (én søker)

For en søker med akseptert plass som ennå ikke er plassert: velg klasse og
eventuelt **Kopier søknadsvedlegg til elevmappen**, akkurat som i
bulk-varianten (se under) — men for denne ene søkeren.

![Plasser i klasse — én søker](/img/soker_plasser_dialog.png 'Plasser i klasse')

### Slett søknad

Sletter søknaden med hele behandlingshistorikken. Er dette søkerens eneste
søknad, slettes også søkeren med opplastede dokumenter og foresatte —
handlingen kan ikke angres. Som sperre mot feilklikk må du bekrefte med
**søkerens fødselsdato**; stemmer den ikke, avvises slettingen. En søker
som er plassert i klasse kan ikke slettes.

![Slett søknad](/img/soker_slett_dialog.png 'Slett søknad med fødselsdato-bekreftelse')

## Bulk-handlinger

**Bulk-handling**-knappen over tabellen brukes når mange søknader skal
behandles under ett — typisk etter inntaksmøtet.

![Bulk-menyen](/img/soker_bulk_meny.png 'Bulk-handlinger')

**Gi tilbud om skoleplass** og **Sett på venteliste** er de to
statushandlingene som kan kjøres i bulk. De øvrige handlingene vises
nedtonet — de krever individuell vurdering og gjøres per søker fra
detaljpanelet. I tillegg finnes **Plasser i klasse** (se under).

Når du velger en handling, går siden i bulk-modus: listen viser bare
**kandidatene** — søknadene som lovlig kan få handlingen — og du krysser
av hvem som skal med. Filtrene (program, søk) virker som normalt, så du
kan for eksempel avgrense til ett program før du velger alle.

![Bulk: gi tilbud](/img/soker_bulk_tilbud.png 'Bulk — kandidater valgt')

**Kjør** åpner en oppsummering før noe skjer:

![Bekreft bulk](/img/soker_bulk_bekreft.png 'Bekreftelse før kjøring')

Merk at bulk-kjøring i denne versjonen **ikke** sender e-post/SMS eller
brev — varsling og brev håndteres separat. Hver endring logges med ditt
navn i statushistorikken.

Etterpå vises resultatet per søker. Søknader som var endret av andre i
mellomtiden hoppes trygt over og rapporteres — de andre påvirkes ikke.

![Bulk-resultat](/img/soker_bulk_resultat.png 'Resultat per søker')

### Plasser i klasse

Søkere som har **akseptert plassen** skal inn i en klasse — det er
plasseringen som gjør søkeren til elev. Velg **Plasser i klasse** i
bulk-menyen: kandidatene er søkere med akseptert plass som ikke allerede
er plassert. Typisk filtrerer du på program og setter alle i samme
klasse.

![Plasser i klasse](/img/soker_bulk_klasse.png 'Plasser i klasse')

Velg klasse i nedtrekket, og huk eventuelt av **Kopier søknadsvedlegg til
elevmappen** hvis dokumentene fra søknaden skal følge eleven. Ved
plassering opprettes eleven med personalia, foresatte, fagvalg, bilde og
eventuelle allergier/passopplysninger fra søknaden, og eleven meldes inn
i klassens fag.

Søknadsstatusen endres **ikke** ved plassering — plasserte søkere
kjennetegnes ved at **Klasse**-kolonnen i listen er fylt ut.

## Statusoversikt

| Status | Betyr |
|---|---|
| Søknad sendt til skolen | Ny søknad fra søkerportalen — klar for behandling |
| Søknad mottatt av skolen / Under behandling | Skolen har startet behandlingen |
| Venter på søker | Skolen venter på dokumentasjon eller svar fra søkeren |
| Søknad komplett — venter på inntaksmøte | Alt er på plass; avgjøres i inntaksmøtet |
| Tilbud gitt | Søkeren har fått tilbud, med svarfrist |
| Akseptert av søker | Søkeren har takket ja — klar for klasseplassering |
| Venteliste | Søkeren står på venteliste og kan senere få tilbud |
| Avslått av skolen / Tilbud avslått av søker / Trukket av søker | Avsluttede løp |
| Kontrakt sendt / Kontrakt signert / Betalt 1. avdrag | Brukes av skoler med kontrakt/skolepenger |
| Oppsagt | Søkeren har sagt opp plassen etter å ha akseptert — plassen frigjøres i inntakstellingen |
| Gjenåpnet av skolen | En avsluttet søknad er tatt opp igjen |

Fargene i listen følger samme logikk overalt: grønt for positive
utfall, blått for pågående arbeid, gult for venting, rødt for avsluttet.
