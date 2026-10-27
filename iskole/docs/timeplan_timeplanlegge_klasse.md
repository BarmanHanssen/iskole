---
id: timeplan_timeplanlegge_klasse
title: Klasser
sidebar_label: Klasser
---

Timeplanen for klassefag skal inneholde all organisert undervisning i
alle klassefag til klassen. Endring av fagsammensetningen i en klasse
gjøres fra _Grunnlagsdata>Klassefag_, og lærere legges til faget fra
_Time- og fagfordeling>Klassefag_ (knappen **Legg til lærer** tar deg
rett dit: Time- og fagfordeling åpnes i en ny fane, stilt på faget
og med dialogen for å legge til lærer åpen).

Noen elever kan være fritatt i ett eller flere klassefag. Slike unntak
får ingen innvirkning for legging av klassens timeplan.

Dersom elevene i klassen kan velge fag utover det som hele klassen er
satt opp med, klassifiserer vi slike valgfrie fag som gruppefag.
Gruppefag gir naturlig nok begrensninger for oppsettet av klassens
timeplan: timeplanen for elevens gruppefag skal ikke kollidere med
elevens klassefag. Det er derfor naturlig å timeplanlegge gruppefagene
først, men rekkefølgen bestemmer timeplanlegger — systemet avdekker
kollisjoner uansett.

:::info Kollisjoner
Elevkollisjoner blir varslet, men kan tillates. Lærerkollisjoner er ikke tillatt. Er rommet opptatt av en annen time, kan du overta det eller velge et annet rom; et reservert rom kan ikke overtas.
:::

![Klasser med valgt fag](/img/tp_klasser_hovedbilde.png 'Klasser med valgt fag')

### Fagliste og valg
Velg klasse og uke i verktøylinjen — pilknappene går til forrige/neste
uke. Klassen du sist valgte, står der neste gang du åpner
Klasser. Faglisten til venstre viser klassens fag med lærerne sine under
(↳). Telleren på hver rad viser fremdriften, for eksempel **5 av 6**
timeplanlagte uketimer; oransje tall betyr at linjen mangler timer, og
et gult merke viser timer som står uten lærer. Fag med gjesteklasse har
gjestene som merkelapp på raden.

Klikk på en rad for å velge fag eller lærer. Da fremheves fagets timer
i rosa i kalenderen (rød kant = valgt lærer står på timen, oransje kant
= timen mangler lærer), ledige felt vises i grønt, og handlingslinjen
med de tilgjengelige operasjonene dukker opp over timeplanen: på et
fag Juster timetall, Bytt rom, Legg til lærer, Kopier og Tøm uke; på en
lærer Legg på fagets timer, Juster timetall og Fjern. Trykk
`Esc` for å nullstille valget. Klikker du på et klassefag i
kalenderen uten at noe er valgt, velges faget i listen.

Hver time i kalenderen viser fag og rom, og på linje to tid og
lærernes kortnavn. Hold musepekeren over en time for detaljer.

Øye-knappen i verktøylinjen viser/skjuler lærere som står med 0 timer i
valgt uke. Knappeteksten forteller hva som gjelder: _Viser lærere
uten timer_ eller _Skjuler lærere uten timer_.

### Fargene {#fargene}
Fargeforklaringen står under verktøylinjen: grønn = ledig, rosa =
valgt fag, blå = klassefag, lysegrønn = gruppefag, lilla = gjesteklasse og
grå = opptatt. Timer uten lærer har oransje kant. Et grått felt forteller
hva som er opptatt: «Lærer opptatt», «Rom opptatt» eller «Elever opptatt».
Med en lærer valgt er fagets timer der læreren er opptatt, skravert. Alt
kontrolleres uansett på nytt når timen lagres.

### Tidskjema {#tidskjema}
Har skolen flere tidskjemaer (egne sett med start- og sluttider, se
[_Timer_](/docs/timeplan_time#tidskjema)), vises nedtrekket **Tidskjema**
ved ukevelgeren. De grønne ledige feltene følger timene i valgt tidskjema —
bytt skjema når klassen følger et annet timeoppsett enn skolens standard.
Timer som alt er planlagt, vises uansett hvilket skjema som er valgt.
Valget huskes i nettleseren og gjelder også de andre timeplanvinduene
(Timer, Reserver, Blokk og Grupper).

### Timeplanlegge
Klikk på et grønt, ledig felt — timen legges rett inn. Rommet hentes
fra romvelgeren i verktøylinjen, som er forhåndsstilt til klassens eget
rom (fra _Grunnlagsdata>Klasser_). Velger du et annet rom, viser
kalenderen med en gang hvilke tider rommet er opptatt («Rom opptatt»).

Planlegger du fra en **lærerlinje**, legges timen på faget og læreren
samtidig. Elevkollisjoner varsles med hvem og hva som kolliderer, og
kan tillates;
lærerkollisjoner avvises med forklaring.

Er rommet opptatt av en annen time, får du vite hvem som har det. Du
kan da velge **Annet rom** (eller «(uten rom)») og **Planlegg med dette
rommet**, eller **Overta rommet** — timen som hadde rommet, står uten rom
etterpå. Du kan også klikke rett på et grått «Rom opptatt»-felt for å
planlegge der og overta rommet. Er rommet **reservert** (under _Reserver_),
kan det ikke overtas: velg et annet rom, eller rydd reservasjonen
først.

Har skolen timer som ligger utenfor ukens vanlige skoledag og som
ingen bruker (for eksempel en sen kveldstime én dag), holdes de utenfor
kalenderen. Da dukker knappen **Vis alle rammer** opp i verktøylinjen; den
tar dem med igjen.

### Lærer på timen
Med en lærer valgt i listen:

- **Klikk på en av fagets timer** læreren ikke står på — læreren legges
  rett på timen. Timer der læreren er opptatt med annen undervisning
  (også vikartimer) er skravert, og kalenderen nederst viser lærerens
  fulle timeplan.
- **Legg på fagets timer** åpner en liste over fagets timer uten
  læreren, forhåndsvalgt opp til lærerens timetall. Timer der læreren
  er opptatt er merket «lærer opptatt» og kan ikke velges.
- **Fjern** viser lærerens timer i faget denne uken, alle
  forhåndsmarkert — kryss vekk de som skal beholdes og bekreft. Timene
  består; kun læreren fjernes.

Timetallet for både fag og lærer justeres med **Juster timetall**
(gjelder valgt uke).

### Endre, flytte og slette timer
Klikk på en av fagets timer (med faglinjen valgt, eller en time valgt
lærer står på) for å åpne **Endre time**-dialogen: juster start- og
sluttid, bytt rom, se og fjern lærere på timen, eller slett timen. Har
timen fraværsregistreringer, får du varsel.

Timer kan også **dras** til nytt tidspunkt innen samme dag — den nye
tiden bekreftes i dialogen før lagring. Skal timen til en annen dag,
slettes den og legges på nytt med et klikk på riktig dag.

### Elevenes andre undervisning
Klikk på et dempet felt (gruppefag, gjesteklasse, annet klassefag eller
et grått **Elever opptatt**-felt) med et fag eller en lærer valgt: en
dialog viser hvilke av fagets elever som har undervisningen, med
klassens elever og gjester hver for seg. Grå «Elever opptatt»-felt
betyr at noen av fagets elever følger undervisning i en annen klasse i
tidsrommet — tallet i parentes er hvor mange — og dialogen viser hvem
og hvilket fag. Har faget (og valgt lærer) ledig kvote, tilbyr dialogen
**Planlegg likevel** — fagets time legges i tidsrommet med tillatt
elevkollisjon. Dekker feltet flere skoletimer, krysser du av hvilke av
dem som skal planlegges. Er en lærer valgt, legges læreren på timene;
med faglinjen valgt planlegges de uten lærer. Mangler kvoten, forklarer
dialogen hvorfor knappen ikke vises.

### Bytt rom på flere timer
**Bytt rom** på faglinjen lister fagets timer i uken. Velg nytt rom —
listen avdekker med en gang timene rommet er opptatt i; disse kan ikke
velges. Kryss av og bytt rom på alle valgte i én operasjon.

### Vis timeplanen for disse ansatte
Kalenderen nederst åpnes automatisk når en lærer velges, og viser
lærerens fulle timeplan — alle fag, vikartimer og reservasjoner —
farget per lærer. Flere ansatte kan legges til i velgeren, og skillet
mellom øvre og nedre kalender justeres med håndtaket. Lukker du den,
holder den seg lukket til du åpner den igjen.

![Valgt lærer med lærerens timeplan nederst](/img/tp_klasser_laererlinje.png 'Valgt lærer med lærerens timeplan nederst')

## Kopiering
Klikk på kopieringsikonet i verktøylinjen for å kopiere klassens
timeplan til andre uker. Alle skoledager er forhåndsvalgt (= hele uka);
fjern dager for å kopiere enkeltdager. Velg mål-uker i listen — bare
 uker med skoledager etter
uka du kopierer fra tilbys. Kopieringen kontrollerer først
lærer-, rom- og elevkollisjoner i mål-ukene og viser funnene; elevene
kan tillates («Kopier likevel»), lærer- og romkollisjoner stopper
kopieringen.

Kopi-knappen på **fagraden** kopierer bare det ene fagets uke. Her
vises ingen kollisjoner på forhånd, og alle kollisjoner — også for elever —
stopper fagkopieringen med forklaring.

![Kopiering av klassens timeplan](/img/tp_klasser_kopiering.png 'Kopiering av klassens timeplan')

## Tøm uke
**Tøm uke** på fagraden sletter fagets timer i valgt uke (lærerne
følger timene). Søppelbøtten i verktøylinjen tømmer hele klassens
timeplan for uken — begge bekrefter med antall timer først, og kan ikke
angres.

:::tip Tips
Når alle klassefag og gruppefag er timeplanlagt, eksempelvis for første
skoleuke, kan man kopiere timeplanen for klasse- og gruppefag samlet,
se menyvalget _Kopiering_. Det er fullt mulig å kopiere bare en enkelt
klasses timeplan (eller et gruppefag) herfra, men kontrollene må da
utføres mot alle allerede lagte timeplaner — kopieringen gjennomføres
ikke dersom lærer- eller romkollisjoner avdekkes.
:::

