---
id: gd_sokerportal
title: Søkerportal
sidebar_label: Søkerportal
---
Søkerportalen ble introdusert i 2014 og brukes av et stigende antall skoler.

Ved bruk av søkerportalen vil skolen forenkle, og derigjennom spare tid, ved behandlingen av søkere. Alle skoler kan kostnadsfritt teste ut søkerportalen. Portalen medfører kostnader først etter at søkeren gjennom søkerportalen blir tatt opp og registrert som elev ved skolen. Altså vil en skole med 1000 søkere hvor kun 100 blir tatt opp faktureres for 100. 

**Skolen henviser til portalen fra sin hjemmeside**. Adressen til skolens søkerportal står under fanen [Innstillinger](#innstillinger).

Søkerportalen lar søkeren selv fylle inn nødvendige data, og legge ved dokumentasjon. Ved innvilgelse av skoleplass skal da eleven være plassert i en klasse, og klar for skolestart med tilgang til iSkole.

For å kunne ta i bruk søkerportalen må skolen legge oversikt over hva skolen tilbyr, og hva som en potensiell søker må legge inn som dokumentasjon om seg selv.

Her følger en detaljert beskrivelse av hvordan søkerportalen implementeres. 

Menyvalget har sju faner. _Tilbud_ og _Spørsmål_ gjelder skoleåret som er valgt øverst på siden. De andre fanene gjelder skolen for alle skoleår.

Slik kommer skolen i gang:

1. Kryss av for _Søkerportal_ og/eller _Interessentportal_ under [Innstillinger](#innstillinger), og fyll ut resten av fanen.
2. Legg inn periode og tilbud for skoleåret under [Tilbud](#tilbud).
3. Velg [vedleggstyper](#vedleggstyper), legg inn eventuelle [spørsmål](#spørsmål) og skriv [tekstene til søkerne](#tekst-til-søkere).
4. Lenk til adressen til søkerportalen fra skolens hjemmeside.

## Innstillinger {#innstillinger}

![Fanen Innstillinger med seksjonene Portaler, Kontakt og lenk](/img/gd_sokerportal_innstillinger.png 'Fanen Innstillinger med seksjonene Portaler, Kontakt og lenk')

Innstillingene gjelder skolen for alle skoleår. Fanen er delt i seksjoner, og
alt lagres samlet med _Lagre_ nederst på siden.

### Portaler

For å kunne ta portalen i bruk, må man huke av for minst en av boksene.

- **_Søkerportal_**: fullversjonen av søkerportalen, der søkeren selv fullfører
  søknadsprosessen og laster opp dokumentasjonen skolen krever. Under
  avkrysningen står _Adressen til søkerportalen_, som skolen lenker til fra
  hjemmesiden. Avkrysningen krever at funksjonen _Søkerportal_ er slått på under
[Mine sider › Tilgang › Funksjoner](/docs/ms_tilgang#funksjoner). Er den ikke
  det, kan portalen ikke slås på, men en portal som allerede er i bruk, kan
  slås av.
- **_Interessentportal_**: potensielle søkere legger inn opplysninger om seg
  selv, slik at skolen kan kontakte dem og hjelpe dem med en søknad (se
[Meld interesse](/docs/sp_interessent)). _Adressen til interessentportalen_
  vises når avkrysningen er lagret.

### Kontakt og lenker

- **_E-post_**: skolens kontaktadresse for søkerne. Den brukes som avsender og
  kopimottaker når skolen sender e-post til søkerne, og det er hit skolens egne
  e-postvarsler går (se _Varsling og signering_ under).
- **_Lenke til skolens reglement for inntak_** og **_Lenke til skolens vilkår for
  søknad om skoleplass_**: dokumenter på skolens hjemmeside som redegjør for
  søknadsprosessen, blant annet hva som kreves av dokumentasjon. Er lenkene fylt
  ut, må søkeren krysse av for å ha lest og akseptert reglementet og vilkårene
  før søknaden kan sendes.

### Søknaden

- **_Heltid_**: søkerne kan bare søke for hele skoleåret. Uten avkrysning kan
  søkeren oppgi start- og sluttdato for skoleplassen.
- **_Fortrinnsrett_**: søkerne kan krysse av for at de søker med fortrinnsrett.
_Dag_ og _Måned_ er fristen for å søke med fortrinnsrett. Fristen vises for
  søkeren.
- **_Internatplass_** og **_Hybel_**: søkerne kan krysse av for at de ønsker
  internatplass eller hybel.
- **_Skolepenger_**: skolen krever skolepenger fra elevene.

### Krav til søkeren

- **_Fødselsnummer foreldre_**: søkere under 18 år må oppgi fødselsnummeret til
  foreldrene.
- **_Krev mobilnummer av søkere til videregående_**: søkeren må oppgi
  mobilnummer. Kravet gjelder ikke søknader til grunnskolen, som sendes av en
  forelder.
- **_Krev adresse og postnummer_**: søkeren må oppgi adresse og postnummer før
  søknaden kan sendes.

### Spørsmål til søkeren

- **_Spør om matallergi_**: søkeren får spørsmål om matallergier når tilbudet om
  skoleplass aksepteres.
- **_Spør om passinformasjon_**: søkeren får spørsmål om pass under
  personalia.

Skolens egne spørsmål legges inn under fanen [Spørsmål](#spørsmål).

### Varsling og signering

- **_Skolen ønsker å motta e-postvarsel ved statusendring på søknader_**: skolen
  får e-post til adressen under _Kontakt og lenker_ når en søker sender
  søknaden, laster opp dokumenter, trekker søknaden eller aksepterer eller
  avslår et tilbud.
- **_La søkerne signere inntaksbrevet elektronisk (BankID)_**: søkeren signerer
  inntaksbrevet med BankID når tilbudet aksepteres. For søkere under 18 år må
  også forelder 1 signere. Se [Digital signering](/docs/sp_behandling#digital-signering).

## Tekst til søkere {#tekst-til-søkere}

![Fanen Tekst til søkere, underfanen Informasjon til søker, me](/img/gd_sokerportal_tekst_til_sokere.png 'Fanen Tekst til søkere, underfanen Informasjon til søker, me')

Fanen har to underfaner, og tekstene gjelder skolen for alle skoleår. Klikk
_Rediger tekst_ under en tekst for å endre den i en tekstbehandler, og klikk
_Lagre endringer_.

**_Informasjon til søker_**: tekstene vises øverst på hver side i
søkerportalen. Her kan dere gi informasjon og føringer til søkerne.

_Personalia_: Søkerens navn, fødselsdata og epost må selvsagt inngå. Fullstendig liste over skolens krav legges inn her.

_Søknad_: Her spesifiserer skolen saksgangen for søknadene. Vanligvis behandles søknadene etter søknadsfristen, og søknader sendt etter fristen behandles fortløpende.

_Dokumenter_: Her presiseres hvilke dokumenter som skal vedlegges søknaden. 
Vitnemål og karakterer for inneværende skoleår må leveres skolen seinest ved skolestart. Merk at dersom søkeren allerede er elev ved skolen, eller kommer fra annen skole hvor iSkole benyttes, bortfaller dette kravet.

_Interessenter_: vises over skjemaet der potensielle søkere melder interesse.

**_Ekstratekst i statusmeldinger_**: tekstene settes inn i e-posten til søkeren
når søknaden får ny status i [Elevadmin › Søkere](/docs/ea_sokere#arbeidsflyt-endre-status),
og kan endres der før e-posten sendes. Det finnes én tekst for hver av
statusene _Venter på søker_, _Tilbud gitt_, _Avslått av skolen_, _Betalt 1.
avdrag_, _Gjenåpent av skolen_, _Søknad komplett – venter på inntaksmøte_,
_Venteliste_ og _Oppsagt_. Er teksten tom, sendes e-posten uten ekstratekst.

## Tilbud {#tilbud}

Her legger skolen inn hva skolen kan tilby av linjer og fag for kommende skoleår. Alt på fanen gjelder skoleåret som er valgt øverst på siden.

![Fanen Tilbud med periode og svarfrist, tabellen over tilbud ](/img/gd_sokerportal_tilbud.png 'Fanen Tilbud med periode og svarfrist, tabellen over tilbud ')

### Periode og svarfrist

_Periode hvor søknader kan opprettes_ er fra- og tildato, med klokkeslett, for
når søkerne kan opprette nye søknader til skoleåret. Er perioden ikke lagt inn,
kan søknader opprettes fra 1. januar året skoleåret begynner til 1. mai året
det slutter.

_Svarfrist for gitt tilbud_ er hvor mange dager (0–90) søkeren har på å svare
på et tilbud. Fristen regnes fra dagen søknaden får status _Tilbud gitt_.

Periode og svarfrist lagres hver for seg med _Lagre_ ved siden av feltene.

### Tilbud for valgt skoleår

Tabellen viser programmene og trinnene skolen tar imot søknader til, med antall
plasser, søknadsfrist og siste inntak. Søkeren ser søknadsfristen og siste
inntak for hvert program. Etter siste inntak vises programmet i rødt i
søkerportalen og kan ikke velges.

- _Legg til barneskole_ og _Legg ungdomsskole_ legger inn 1.–7. eller 8.–10.
  trinn med 28 plasser, søknadsfrist 1. mars og siste inntak 20. august, begge
  året skoleåret begynner. Trinn som allerede ligger inne, legges ikke inn på
  nytt. Søknader til grunnskolen sendes av en forelder (se
[Søke for barn](/docs/sp_foreldre)).
- _Legg vg1..._, _Legg vg2..._, _Legg vg3..._ og _Legg fagskole..._ åpner en
  dialog der du velger program fra lista og angir antall plasser (standard 30).
Lista kan filtreres på programkode og navn, og _Vis kun grunnkoder_ viser bare
  grunnkodene. Søknadsfristen settes til 1. mars året skoleåret begynner og siste
  inntak til 1. juni året etter. Begge kan endres etterpå.
- Blyanten åpner linjen for redigering av teksten (_Klassetrinn_), plasser,
  søknadsfrist og siste inntak. Programkoden kan ikke endres.
- Søppelbøtta sletter tilbudet med en gang, uten å spørre først.

### Programfag til valg

Klikk på et tilbud i tabellen over for å se programfagene søkerne kan velge
mellom på det. _Legg til fag..._ viser fagene som ligger i en blokk i skolens
grupper for skoleåret (se blokkid under [Grupper](/docs/gd_grupper)). Klikk
_Legg til_ ved hvert fag. Dialogen står åpen til du klikker _Lukk_. Søkeren
velger ett fag i hver blokk. Søppelbøtta fjerner et fag fra lista.

## Brevmaler {#brevmaler}

Her legger skolen inn sine egne brev som Word-maler (docx) med flettefelt, for
eksempel inntaksbrev, avslagsbrev eller ventelistebrev. Brevene velges når
søknaden får ny status i [Elevadmin › Søkere](/docs/ea_sokere#arbeidsflyt-endre-status),
og flettes med opplysningene om hver søker. Malene gjelder skolen for alle
skoleår.

![Fanen Brevmaler med lista over skolens maler og knappene Sor](/img/gd_sokerportal_brevmaler.png 'Fanen Brevmaler med lista over skolens maler og knappene Sor')

### Lage en mal

Skriv brevet i Word, og sett inn flettefelt der opplysninger om søkeren skal
stå, for eksempel `{Fornavn}`. _Tilgjengelige felt_ viser alle feltene iSkole
har data for. _Kopier_ kopierer ett felt, og _Eksporter til tekstfil_ laster ned
hele lista. Feltet må skrives med krøllparenteser og nøyaktig samme store og
små bokstaver som i lista.

Klikk _Ny mal_ og velg docx-fila. Fyll ut _Filnavn_ og _Beskrivelse_, og velg
under _Gjelder status_:

- én status: malen foreslås automatisk når søknaden settes til den statusen,
  for eksempel inntaksbrevet ved _Tilbud gitt_.
- _(Alle statuser)_: malen kan velges ved alle statusendringer, for eksempel
  som standardvedlegg.

_Felt med data fra iSkole_ viser flettefeltene som ble funnet i fila.
Inneholder malen felt iSkole ikke har data for, listes de under _Ugyldige felt_,
med forslag til retting når feilen er åpenbar (feil store og små bokstaver
eller et internt feltnavn). Malen kan ikke lagres før feltene er rettet i
Word-fila og fila er lastet opp på nytt.

### Malene i lista

Lista viser filnavn, beskrivelse, flettefeltene i malen, hvilken status den
gjelder og når den sist ble endret. Knappene på hver mal:

- _Forhåndsvis_ fletter malen med opplysningene om en av skolens søkere og
  åpner brevet som PDF.
- _Rediger_ endrer beskrivelse og status. Vil du endre selve brevet, laster du
  opp en ny fil. Filnavnet kan ikke endres.
- _Last ned_ laster ned Word-fila.
- _Slett mal_ sletter malen etter at du har bekreftet det.

_Sortering_ bestemmer rekkefølgen når flere brev velges ved samme
statusendring. Brevene settes sammen i én fil, med brevene for statusen først
og deretter brevene som gjelder alle statuser. Knappen er aktiv når skolen har
minst to maler.

## Spørsmål {#spørsmål}

Her nedtegnes det som forventes at søkeren skal gi av opplysninger for å kunne bli tilbudt opptak som elev for kommende skoleår. Spørsmålene gjelder skoleåret som er valgt øverst på siden.

![Fanen Spørsmål med et spørsmål valgt, og eksklusjonene for d](/img/gd_sokerportal_sporsmal.png 'Fanen Spørsmål med et spørsmål valgt, og eksklusjonene for d')

Tabellen viser hvert spørsmål med beskrivelse, om det er aktivt og
obligatorisk, svartype, fase og hvor mange søkere som har svart. Inaktive
spørsmål vises i rødt. Feltet over tabellen filtrerer lista.

Klikk _Legg til..._ for et nytt spørsmål, eller velg et spørsmål og klikk
_Endre..._:

- _Spørsmål_ (inntil 200 tegn) og _Beskrivelse_ (inntil 2000 tegn). Når noen
  har svart på spørsmålet, kan ikke spørsmålet og beskrivelsen endres.
- _Angi om spørsmålet vises for søkerne_ (aktivt) og _Angi om spørsmålet må
  besvares av søkerne_ (obligatorisk).
- _Fase_: I fase 1 stilles spørsmålet når søknaden er opprettet, og et
  obligatorisk spørsmål må besvares før søknaden kan sendes. I fase 2 stilles
  spørsmålet når søkeren har fått tilbud, og et obligatorisk spørsmål må
  besvares før tilbudet aksepteres.
- _Svartype_: _Fritekst_, _Tall_, _Dato_, _E-postadresse_, _Kontonummer_,
_Nedtrekksliste (ett valg)_ eller _Flervalg (avkrysning)_. Søkerportalen viser
  et felt av riktig type og sjekker svaret. For nedtrekksliste og flervalg
  skriver du alternativene, ett per linje (minst to).

![Dialogen Legg til spørsmål utfylt med svartypen Nedtrekkslis](/img/gd_sokerportal_sporsmal_dialog.png 'Dialogen Legg til spørsmål utfylt med svartypen Nedtrekkslis')

_Aktiver_ og _Deaktiver_ viser eller skjuler det valgte spørsmålet for søkerne
uten å slette det. _Slett..._ sletter spørsmålet. Dialogen sier hvor mange svar
som slettes sammen med det.

### Spørsmål ekskludert fra program og trinn

Et spørsmål kan holdes utenfor søknader til bestemte program. Velg spørsmålet i
tabellen over, klikk _Legg til..._ under _Spørsmål ekskludert fra program og
trinn_ og velg ett eller flere program. Tabellen viser hvilke program hvert
spørsmål ikke stilles for. _Slett..._ fjerner alle eksklusjonene for spørsmålet
som er valgt i denne tabellen, uten å spørre først.

## Vedleggstyper {#vedleggstyper}

Her velger skolen hvilke typer dokumenter søkerne kan laste opp, for eksempel
karakterutskrifter, portrettbilde eller dokumentasjon på behov for
tilrettelegging. Søkeren velger dokumenttype fra denne lista når et dokument
lastes opp. Lista gjelder skolen for alle skoleår.

Klikk _Legg til..._, velg én eller flere typer og klikk _Lagre_. Lista i
dialogen viser bare typene som ikke allerede er valgt. Velg en type i tabellen
og klikk _Slett_ for å fjerne den. Den fjernes uten å spørre først.

Eksempel på hva som kan legges inn her:

![Fanen Vedleggstyper med skolens valgte dokumenttyper](/img/gd_sokerportal_vedleggstyper.png 'Fanen Vedleggstyper med skolens valgte dokumenttyper')

## Historikk {#historikk}

Tabellen viser hvor mange søkere og interessenter skolen har hatt for hvert
skoleår, og om søkerdataene for skoleåret er slettet, når og av hvem.

Når inntaket for et skoleår er ferdig, kan søkerne og interessentene slettes.
Velg skoleåret, klikk _Slett søker- og interessentdata..._ og skriv inn
skoleåret for å bekrefte. Antallet beholdes i tabellen, sammen med datoen og
navnet på den som slettet. Et skoleår som allerede er slettet, kan ikke velges.

:::danger Slett ikke for tidlig
Etter slettingen kan du ikke lenger slå opp søkerne, og vedlegg som ikke er
tatt over til elevmappen, er borte. Slett ikke søkerne i et skoleår før
inntaket er helt ferdig.
:::

![Fanen Historikk med antall søkere og interessenter per skole](/img/gd_sokerportal_historikk.png 'Fanen Historikk med antall søkere og interessenter per skole')
