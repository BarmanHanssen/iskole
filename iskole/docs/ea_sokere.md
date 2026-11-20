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

:::info Nytt høsten 2026
Søkerportalen og Søkere-bildet ble fornyet 14. oktober og 17. november 2026.
[Nytt i søkerportalen](/blog/ny_sokerportal) gir en samlet oversikt over
endringene.
:::

## Oversikten

![Søkerlisten](/img/soker_oversikt.png 'Søkerlisten')

:::tip Skoleår
Husk på å velge riktig skoleår, når man arbeider med søkere gjelder dette ofte neste skoleår.
:::
Listen med søkere er komprimert slik at mye
informasjon får plass uten sidescrolling — flere kolonner har en primær-
og en sekundærlinje:

- **Program** — kode og navn samlet («BABAT1 – Bygg- og anleggsteknikk»). Avviker tilbudt program fra
søkerens 1. valg vises dette på linje 2.
- **Inntak** — opptatte plasser av konsesjonen (se under).
- **Søker** — navn med fødselsdato, kjønn og alder på linjen under. Et flagg-ikon
  markerer fortrinnsrett (når skolen bruker det), og en blå
  **«Tidl. elev»-merkelapp** viser at søkeren har vært elev ved skolen
  før — hold musen over for å se hvilke skoleår.
- **Status** — gjeldende status, med samme farger som statusstripen.
- **Opprettet** — når søknaden ble sendt inn — og **Endret** — siste
  statusendring.
- **Poeng, Klasse**, (etter skolens oppsett) **Internat/Hybel**, og
  **Fylke** sist — fylket har særlig betydning for skoler med botilbud.

E-post, telefon og merknader vises ikke i listen — de finnes i
detaljpanelet og i _Rapport egendefinert_.

De ulike statusene har fargede filterknapper over listen, med antall søkere som har denne statusen. Etter statusfiltrene ligger **egenskapsfiltre** med egen, nøytral stil:
**Fortrinnsrett**, **Tidligere elev**, **Søsken** og (for hybelskoler)
**Hybel** — med antall. De kan kombineres med program, søk og statusfilter,
og er nyttige for å prioritere i inntaket. **Søsken** viser søkere som har
søsken blant søkerne eller elevene ved skolen. Knappen **Bilder til
vurdering** vises når det finnes bilder skolen må se på, se
[Bilder til vurdering](#bilder-til-vurdering).
 
![Egenskapsfiltre](/img/soker_egenskapsfiltre.png 'Egenskapsfiltre — «Tidligere elev» aktivt')

**Statusstripen** rett under filtrene viser hvor mange søknader som står i
hver status. Klikk på en status for å filtrere listen til bare de
søknadene — klikk igjen for å slå av. Telleren til høyre viser alltid
«X av Y søkere» når et filter er aktivt.

![Filtrert liste](/img/soker_filter.png 'Filtrert på status')

**Søkefeltet** filtrerer mens du skriver, på navn, fødselsnummer, e-post,
telefon og foreldre. Knappene **1. valg** og **Tilbud** avgrenser lista til
ett utdanningsprogram: programmet søkeren har som førstevalg, eller
programmet i skolens tilbud.

**Sortering**-velgeren ved siden av søkefeltet sorterer listen: standard
(program), **Opprettet** (eldste eller nyeste først) eller **sist
endret**. Opprettet-sorteringen er laget for grunnskole-inntak, der
søkerne ikke rangeres og tidspunktet søknaden kom inn er avgjørende.

![Sortering](/img/soker_sortering.png 'Sorteringsvalgene')

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

### Inntak-fanen

**Inntak**-fanen gir fugleperspektivet på inntaket — tallene bak
Inntak-merkene, samlet per program. Øverst står nøkkeltallene for hele
skolen: **Søkere**, **Plasser**, **Inntatt**, **I prosess**, **Ledig** —
og, når det gjelder, antall **fulle programmer** og programmer **uten
plasstall**.

![Inntak-fanen](/img/soker_inntak_fane.png 'Inntak — nøkkeltall og programtabell')

Tellingen er den samme som Inntak-kolonnen og overbookingsvakten bruker:

- **Inntatt** — elever som står i programmets klasser.
- **I prosess** — aktive tilbud (tilbud gitt, akseptert, kontrakt) som
  ennå ikke er plassert.
- **Ledig** — plasser − inntatt − i prosess.

Tabellen under viser det samme per program, med fargebånd når et program
er fullt eller nærmer seg. Programradene kan utvides for å se søkerne som
teller med. Merk at søkere plasseres i klasse med programkoden de fikk
tilbud på — endres elevens programkode senere, frigjøres plassen på
tilbudsprogrammet.

Fanene øverst gir i tillegg:

- **Søknader, ikke sendt** — påbegynte søknader som søkeren ikke har
  fullført. Her følger skolen opp søkere som har stoppet underveis, se
  [Søknader, ikke sendt](#søknader-ikke-sendt).
- **Interessenter** — personer som har meldt interesse for skolen uten å
  søke (vises bare hvis skolen bruker interessent-funksjonen), se
  [Interessenter](#interessenter).
- **Rapport egendefinert** — tabellrapport over alle søkere der du selv
  velger hvilke kolonner som skal med (kolonnevelger), og kan eksportere
  til Excel. **Født** (fødselsdato) er standardkolonne; fødselsnummeret
  kan velges inn ved behov. Kolonnene **Signering søker** og **Signering
  forelder** viser status for Posten-signeringen. Rapporten viser også når
  søknaden ble **opprettet**, med klokkeslett, og **foreldrenes adresse**.
- **Foreldrekoblinger** — kontrolliste over foreldre som bør sees på, se
  [Foreldrekoblinger](#foreldrekoblinger) under.


## Søkeren i detalj

Klikk på en rad, og detaljpanelet trekkes opp fra bunnen. Alt om søkeren
står samlet på én flate, delt i fliser: **Søker**, **Søknad**,
**Vurdering**, **Foreldre**, **Behandling**, **Vedlegg** og
**Spørsmål/svar**. Tallet i overskriften på flisa viser antallet (foreldre,
statusendringer, vedlegg og svar).

![Detaljpanelet](/img/soker_detalj.png 'Søkerlista med detaljpanelet under')

Knappene oppe til høyre i panelet:

- **Personalia** — laster ned søkerens opplysninger som PDF.
- **Endre status** og **Flere handlinger** — se
  [Arbeidsflyt: endre status](#arbeidsflyt-endre-status) og
  [Flere handlinger](#flere-handlinger).
- **Vis lista til venstre** — legger søkerlista ved siden av detaljene, så
  du kan gå fra søker til søker uten å miste oversikten. **Vis lista over**
  legger den tilbake.
- **Maksimer** — gir panelet hele flaten. **Gjenopprett** går tilbake.
- **Lukk** — lukker panelet.

Delelinjen mellom liste og panel kan dras for å endre fordelingen.

![Lista til venstre](/img/soker_liste_venstre.png 'Søkerlista til venstre for detaljene')

### Søker, Søknad og Vurdering

- **Søker** — portrett (bildet søkeren har lastet opp som vedlegg av typen
  «Portrettbilde»), fødselsdato og -nummer, målform, adresse, e-post, mobil
  og siste innlogging i søkerportalen. Har søkeren levert passkopi til
  søknaden ved skolen, viser linja **Pass** passnummer, nasjonalitet og
  utløpsdato, med lenken **Vis passkopi**. Er passet gått ut, står merket
  **Utløpt**. Venter passkopien på skolens kontroll, står det på linja, se
  [Bilder til vurdering](#bilder-til-vurdering).
- **Søknad** — programønskene i prioritert rekkefølge. Ønsket som
  tilsvarer skolens tilbud er markert med **Tilbud**-merke, og når tilbud
  er sendt vises dato og svarfrist. Nederst: flagg for lest reglement og
  (avhengig av skolens oppsett) fortrinnsrett, internat og hybel, samt
  knapper for inntaksbrev og kontrakter (PDF) når de finnes.
- **Vurdering** — poengsum, poeng fra karakterer, rettstype, merknad fra
  søkeren og skolens egen merknad. Bruker skolen digital signering, vises
  nederst to merker: **Signering søker** og **Forelder** med status for
  signeringen hos Posten (for eksempel «Signert», «Venter på signatur»,
  «Utløpt», «Reservert mot digital signering» eller «Avvist»).

Har søkeren søsken blant søkerne eller elevene ved skolen, vises flisa
**Søsken** med navn, status og **Vis søknad**.

### Foreldre

Flisa **Foreldre** har én linje per forelder (**forelder 1** og
**forelder 2**) med navn, e-post og telefon. Et merke viser hvordan
forelderen er knyttet til søkeren, for eksempel **ID-porten**.

- **Klikk på navnet** (pila foran) for å brette ut fødselsdato, adresse, om
  forelderen har **e-varsel**, og knappene **Sperr**, **Opphev sperre** og
  **Slett**.
- **Blyanten** åpner forelderen for redigering.

Se [Foreldre og koblinger](#foreldre-og-koblinger) under. Som med
personalia låses foreldrene når søkeren er plassert i klasse; foreldrene
redigeres da på eleven.

![Foreldre](/img/soker_foreldre.png 'Foreldre — forelder 1 brettet ut')

### Behandling

Flisa **Behandling** viser statushistorikken som en tidslinje, nyeste
først: hvert steg med tidspunkt og hvem som gjorde endringen. De sju siste
stegene vises, og **Vis alle** henter resten.

Steg med pil til høyre har en melding. **Klikk på steget** for å se emne,
mottakere, vedlegg, tekst og om e-posten ble levert til hver mottaker. Kom
en e-post ikke fram, står det et merke på steget. Står en adresse som
**blokkert**, kan mottakeren ikke nås på e-post (adressen har tidligere
feilet eller blitt markert som søppelpost) — be om ny adresse eller varsle
på annen måte.

![Behandling](/img/soker_behandling.png 'Behandling som tidslinje')

### Vedlegg

Flisa **Vedlegg** lister dokumentene søkeren har lastet opp
(karakterutskrifter, vitnemål, passkopi osv.). Skolen kan **laste ned**,
**laste opp** egne vedlegg (med dokumenttype), **slette** (med
bekreftelse — kopier i elevmappen påvirkes ikke) og **arkivere
enkeltvedlegg til elevmappen** når søkeren er plassert i klasse.

Krever skolen vedlegg som søkeren ikke har levert, står det øverst i
flisa: **Obligatoriske vedlegg mangler**, med navnet på vedleggene. Hvilke
vedlegg som er obligatoriske, velger skolen under
[Grunnlagsdata › Søkerportal › Vedleggstyper](gd_sokerportal.md#vedleggstyper).

![Vedlegg](/img/soker_vedlegg.png 'Vedlegg — et obligatorisk vedlegg mangler')

**Fagvalg** og **Spørsmål/svar** viser søkerens valg og svar fra
søknaden.

## Foreldre og koblinger

I den nye søkerportalen kan en forelder logge inn med ID-porten og bli
**koblet** til barnet sitt. En koblet forelder ser søknaden i portalen,
og foreldre til grunnskolesøkere kan søke for barnet. Søkere til
videregående søker selv; foreldrene deres inviteres, bekrefter med
ID-porten og signerer avtalen sammen med søkeren når søkeren er under 18 år.

### Merkene på forelderen

På linja står et kort merke, for eksempel **ID-porten**. Når forelderen er
brettet ut (klikk på navnet), viser merket hvor opplysningene kommer fra:

- **Grønt** (lenke-ikon) — forelderen er koblet, for eksempel «Koblet ved
  innlogging med ID-porten», «Koblet av skolen med fødselsnummer» eller
  «Koblet ved godtatt invitasjon», med dato for koblingen.
- **Grått** — forelderen er oppgitt, men ikke koblet, for eksempel
  «Oppgitt av søkeren», «Hentet fra iSkole (elevens foresatte)»,
  «Registrert av skolen» eller «Overført fra gammel søkerportal».
- **Gult** (forbuds-ikon) — «Sperret – kobles ikke ved innlogging».

Et blått merke **Relasjon ikke kontrollert** betyr at forelderen selv
registrerte barnet med ID-porten — skolen bør kontrollere at personen
faktisk er forelder. Et gult merke **Ikke koblet: navnet stemmer ikke med
fødselsnummeret** betyr at fødselsnummeret hører til en person med et
annet navn.

### Redigere og koble

Blyanten åpner forelderen for redigering (navn, fødselsnummer, e-post,
telefon, adresse og e-varsel). Lagrer du et gyldig fødselsnummer på en
forelder som ikke er koblet, kobles forelderen til søkeren og får se
søknaden. Forelderen blir likevel ikke koblet hvis navnet ikke stemmer med
fødselsnummeret, hvis forelderen er under 20 år, eller hvis plassen er
sperret — da lagres opplysningene med beskjed om hvorfor.

For en forelder som er koblet, er fødselsnummeret låst. Endringer lagres
på forelderens egen profil, gjelder alle barna og logges. Er
fødselsnummeret feil, må forelderen sperres eller slettes først.

Når søkeren er under 18 år, er **e-varsel** alltid på for forelder 1.

### Slett, Sperr og Opphev sperre

Knappene ligger under forelderen når den er brettet ut (klikk på navnet).
Alle krever bekreftelse, og handlingen logges med ditt navn.

- **Slett** — sletter forelderen fra søknaden. For en koblet forelder
  beholdes forelderens egen profil; logger forelderen inn igjen og oppgir
  barnet, kan koblingen opprettes på nytt. Bruk **Sperr** hvis det skal
  hindres.
- **Sperr** (bare for koblede foreldre) — fjerner koblingen, slik at
  forelderen ikke lenger ser søknaden og ikke selv kan knytte seg til
  barnet igjen. Opplysningene står igjen slik de er. En sperret forelder
  får ingen meldinger om søknaden. Blir søkeren plassert i klasse, legges
  forelderen inn på eleven uten tilgang til å logge inn i iSkole.
- **Opphev sperre** — fjerner sperren. Er fødselsnummeret kjent, kobles
  forelderen igjen med en gang; ellers kobles forelderen neste gang
  forelderen logger inn med ID-porten.

:::caution Sperring av forelder 1
Er søkeren under 18 år og skolen bruker digital signering, signerer
forelder 1 avtalen om skoleplass. Så lenge forelder 1 er sperret, kan
avtalen ikke signeres. Dialogen varsler om det før du sperrer.
:::

### Hvem får meldinger fra skolen

Når skolen endrer status eller sender en melding, vises mottakerne med
adresse, og de kan velges av og på enkeltvis. Slik settes kryssene:

- Er søkeren **under 18 år**, er **forelder 1** alltid mottaker, uansett
  e-varsel.
- Andre foreldre er mottakere når de har krysset av for **e-varsel**.
- En forelder **uten e-varsel** står likevel i mottakerlista, uten kryss
  og med merket **Har ikke krysset av for e-varsel**. Krysser du av, får
  forelderen meldingen. Da er det skolen som har valgt det.
- En forelder som er **sperret**, står ikke i lista og får ingen meldinger.

Det samme gjelder SMS, for skoler med SMS-avtale. Sender du til mange på én
gang, velges mottakerne per rolle (søkeren, forelder 1, forelder 2), med
ett eget kryss: **Send også til foreldre som ikke har krysset av for
e-varsel**.

![Mottakere](/img/soker_melding_dialog.png 'Send melding — forelder 2 har ikke krysset av for e-varsel')

### Foreldrekoblinger

Fanen **Foreldrekoblinger** øverst er en kontrolliste over foreldre som
bør sees på: koblinger som ble stoppet eller avvist ved innlogging,
sperrede plasser, foreldre som registrerte barnet selv (relasjonen er ikke
kontrollert), navn som ikke stemmer med fødselsnummeret, og koblede
foreldre uten adresse (inntaksbrevet trenger den). Listen viser årsak,
søker, forelder, kilde og tidspunkt. **Vis søker** åpner søkeren, og
**Oppdater** henter listen på nytt.

## Bilder til vurdering

Portrettbilder og passkopier blir kontrollert automatisk når søkeren laster
dem opp. Finner kontrollen noe, får søkeren beskjed og kan velge et annet
bilde eller bruke bildet likevel. Bilder som er brukt likevel, samles under
filterknappen **Bilder til vurdering** over søkerlista. Knappen vises bare
når det finnes bilder å vurdere.

![Bilder til vurdering](/img/soker_bilder_vurdering.png 'Bilder til vurdering — fødselsdatoen i passet er ikke søkerens')

Velg en linje til venstre. Bildet vises til høyre, med det bildekontrollen
fant.

- **Bildet er OK** — godtar bildet, og saken lukkes.
- **Må byttes** — markerer bildet og åpner **Send melding**, så du kan be
  søkeren om et nytt. Saken står som «Venter på nytt bilde» til søkeren har
  lastet opp et nytt bilde av samme type. Imens kan du bruke **Send
  påminnelse** eller **Bildet er OK likevel**.

For **passkopier** gjelder i tillegg:

- Er **fødselsdatoen i passet** en annen enn søkerens, blir passkopien
  merket. Personkortet viser da «Venter på skolens kontroll», og passet
  skrives ikke til eleven før skolen har godkjent kopien.
- Velger du **Må byttes**, ser søkeren det på passlinja i portalen og kan
  laste opp en ny passkopi.
- Har skolen godkjent passkopien, kan ikke søkeren fjerne passet selv, bare
  bytte kopien.

Søkerens side av dette står i
[Søknad › Dokumenter](sp_soknad.md#kopi-av-bildesiden-i-passet).

## Arbeidsflyt: endre status

Søknadsbehandlingen drives av statusendringer. **Endre status**-knappen i
detaljpanelets topplinje viser handlingene som er lovlige fra søknadens
gjeldende status — med handlingsnavn som sier hva du gjør, ikke bare hvor
søknaden havner. Anbefalt neste steg er merket med ★.

![Endre status](/img/soker_endre_status.png 'Endre status — lovlige handlinger')

Eksempel: en søknad som står i «Søknad komplett — venter på inntaksmøte»
tilbyr **Gi tilbud om skoleplass** (★), **Sett på venteliste**,
**Avvis søkeren**, **Fortsett behandling** og **Søknad trukket**.

Bekreftelsesdialogen har en varslingsseksjon: huk av **Send e-post til
søkeren og foreldre med e-varsel**, så fylles emnet og meldingsteksten
ut automatisk — teksten hentes fra skolens statustekst (Grunnlagsdata →
Søkerportal) og kan redigeres i riktekst-editoren før sending.
Mottakerne vises med adresse og kan velges av og på enkeltvis, og
skolens egen adresse ligger klar i **Kopi til**-feltet så dere får
kontrollkopi av det som sendes. Har skolen brevmal for
statusen (inntaksbrev, avslagsbrev eller ventelistebrev i Grunnlagsdata),
kan **brevet legges ved e-posten** — det flettes for hver enkelt søker,
med skolens standardvedlegg og eventuelle PDF-vedlegg samlet i én fil.
**Forhåndsvis brevet** viser nøyaktig hva søkeren får. PDF-vedlegg kan
legges ved e-posten — dra dem inn eller klikk i vedleggsfeltet (bare PDF
godtas). For statuser
som krever varsling er avhukingen forhåndsvalgt. E-posten sendes i
bakgrunnen kort tid etter statusendringen, og innholdet lagres under
Behandling slik at dere alltid kan se hva som ble sendt. Det samme
gjelder bulk-handlinger — da får alle de valgte søkerne samme melding,
og mottakervalget gjøres per rolle (søkeren, forelder 1, forelder 2).
Hvilke foreldre som er mottakere, står under
[Hvem får meldinger fra skolen](#hvem-får-meldinger-fra-skolen).

![Statusendring med varsling](/img/soker_varsling_dialog.png 'Gi tilbud — brev og varsling')

Skulle en kollega ha endret søknaden mens du så på den, stoppes
endringen trygt med beskjed om å laste siden på nytt — ingenting
overskrives i stillhet.

## Redigere søkerens opplysninger

Flisene **Søker**, **Søknad** og **Vurdering** har en blyant oppe til
høyre. Klikk den, endre feltene, og bekreft med **Lagre** (eller
**Avbryt**). Resten av panelet er fortsatt lesbart mens du redigerer.

### Personalia

![Rediger personalia](/img/soker_person_rediger.png 'Rediger personalia')

Fornavn, etternavn, fødselsdato, fødselsnummer og e-post.
Fødselsnummeret kontrolleres (gyldighet og at ingen annen søker har samme
nummer). Når søkeren er **plassert i klasse**, er personalia låst — kortet
viser en hengelås, og opplysningene redigeres da på eleven i stedet.

Endrer du navn, e-post eller fødselsnummer, fjernes bekreftelsen søkeren
har gitt for det feltet. E-post og fødselsnummer bekreftes igjen når
søkeren logger inn med e-postlenke eller ID-porten.

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

### Sett status — angre og gjenopprette

**Sett status** er den administrative nødutgangen når noe er gjort feil
eller en søknad skal gjenopprettes: den setter søknaden til en status du
velger fritt, uavhengig av de vanlige overgangene — for eksempel tilbake
fra «Trukket av søker» til venteliste, eller fra avslag til nytt tilbud.

![Sett status](/img/soker_sett_status.png 'Sett status — fritt statusvalg')

Handlingen går i to trinn: velg ny status, og bekreft deretter i den
vanlige statusendringsdialogen — med samme varslingsseksjon, så søker og
foresatte kan få beskjed også når statusen settes administrativt.
Sikkerhetsnettene gjelder fortsatt: endringer gjort av andre i mellomtiden
stopper handlingen, konsesjonsvakten slår inn hvis et tilbud ville
overbooket et fullt program, og endringen logges med ditt navn i
Behandling-fanen — historikken beholdes alltid. Sett status gjøres bevisst
bare på én søker om gangen, aldri i bulk.

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

**Gi tilbud om skoleplass**, **Avvis søkeren** og **Sett på venteliste** er
statushandlingene som kan kjøres i bulk. De øvrige statushandlingene vises
nedtonet — de krever individuell vurdering og gjøres per søker fra
detaljpanelet. I tillegg finnes **Plasser i klasse** (se under) og **Send
melding**, som sender e-post til de valgte søkerne uten å endre status.

**Avvis søkeren** kan brukes på søknader med status Under behandling,
Søknad sendt til skolen, Søknad komplett og Venteliste. Det er nyttig når
skolen er full og alle på ventelista skal ha avslag.

Når du velger en handling, går siden i bulk-modus: listen viser bare
**kandidatene** — søknadene som lovlig kan få handlingen — og du krysser
av hvem som skal med. Filtrene (program, søk) virker som normalt, så du
kan for eksempel avgrense til ett program før du velger alle.

![Bulk: gi tilbud](/img/soker_bulk_tilbud.png 'Bulk — kandidater valgt')

For grunnskoler, der søkerne ikke rangeres og tidspunktet søknaden kom
inn er avgjørende, finnes en snarvei: med programfilter valgt viser
banneret **«Velg de N første»** — den krysser av de eldste søknadene
(fortrinnsrett først, deretter opprettet-tidspunkt) inntil de ledige
plassene er fylt. Kontroller utvalget og trykk Kjør.

![Velg de N første](/img/soker_bulk_forste.png 'Bulk — «Velg de N første» fyller ledige plasser')

**Kjør** åpner en oppsummering før noe skjer:

![Bekreft bulk](/img/soker_bulk_bekreft.png 'Bekreftelse før kjøring')

I oppsummeringen velger du om søkerne skal varsles på e-post (og SMS,
for skoler med SMS-avtale). Alle de valgte får samme melding, og
mottakerne velges per rolle, se
[Hvem får meldinger fra skolen](#hvem-får-meldinger-fra-skolen). Hver
endring logges med ditt navn i statushistorikken.

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

## Oppfølging før søknaden er sendt

Fanene **Søknader, ikke sendt** og **Interessenter** er laget for å følge
opp dem som ikke har søkt ennå.

### Søknader, ikke sendt

Fanen viser påbegynte søknader som søkeren ikke har sendt. Lista viser
søkeren, programmet, kontaktinformasjon til søkeren og foreldrene, når
søknaden ble opprettet, når søkeren sist var innlogget, og skolens merknad.

![Søknader, ikke sendt](/img/soker_ikke_sendt.png 'Søknader, ikke sendt — med detaljpanelet')

Klikk på en rad for å åpne detaljpanelet, som for sendte søknader:

- **Oppfølging** — skolens merknad. Skriv ned hva som er avtalt med
  søkeren, så oppfølgingen er loggført.
- **Endre opplysninger** — blyanten på flisene retter e-post, telefon og
  andre opplysninger om søkeren og foreldrene, for eksempel når dere
  snakker med søkeren på telefon og adressen viser seg å være feil.
- **Send inn for søkeren** — sender søknaden på vegne av søkeren. Søknaden
  får status «Søknad sendt til skolen» og flyttes til Søknader, og søkeren
  får kvitteringen «Søknad mottatt». Mangler noe i søknaden, viser dialogen
  hva. Da kan du rette det først, eller velge **Send inn likevel**.
  Reglement og vilkår godtar søkeren selv når et tilbud aksepteres.

![Send inn for søkeren](/img/soker_send_inn.png 'Send inn for søkeren')

Over lista:

- **Eksporter Excel** gir lista slik den står i fanen.
- **Kopier-ikonet** på hver linje kopierer e-postadressene på linja, til
  søkeren og foreldrene, så du kan skrive til dem fra ditt eget
  e-postprogram. En sperret forelder er ikke med.
- **Slett søknad** sletter den valgte søknaden. Slettingen bekreftes med
  søkerens fødselsdato, og søkeren med alle opplysninger fjernes permanent.

### Interessenter

Fanen viser personer som har meldt interesse for skolen uten å søke, og
vises bare hvis skolen bruker interessent-funksjonen. Lista viser ønskede
program, kontaktinformasjon, merknaden fra interessenten, skolens merknad,
og om interessenten senere har registrert en søknad (grønn markering).

![Interessenter](/img/soker_interessenter.png 'Interessenter')

- **Endre** — åpner **Endre interessent**, der du retter navn, e-post og
  mobil, og skriver **Skolens merknad**.
- **Registrer som søker** — oppretter en søknad med ønskene fra
  interessentlista, med status «Under behandling av skolen». Søkeren logger
  inn med ID-porten. Knappen er av når interessenten allerede har en søknad.
- **Slett interessent** — fjerner interessenten fra lista. En søknad
  interessenten har registrert, påvirkes ikke.
- **Eksporter Excel** og **kopier-ikonet** virker som i Søknader, ikke
  sendt.

![Endre interessent](/img/soker_interessent_endre.png 'Endre interessent')

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
