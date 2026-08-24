---
id: timeplan_timeplanlegge_klasse
title: Klasser
sidebar_label: Klasser
---

:::info Viktigste endringer (ny side)
Klasser-siden er bygget om med ny kalender, men beholder oppsettet du
kjenner: klassens fag og lærere til venstre, ukens timeplan til høyre.

- **Samme farger som før**: blå = klassefag, grønn = ledig, lysegrønn =
  gruppefag, rosa = valgt fag, lilla = gjesteklasse. Timer uten lærer har
  oransje kant.
- **Klikk legger timen rett inn**: velg fag eller lærer i listen og klikk
  på et ledig (grønt) felt — ingen bekreftelsesdialog. Feilklikk rettes
  like raskt ved å klikke timen og slette den.
- **Klikk legger læreren på timen**: med en lærer valgt legger ett klikk
  på en av fagets timer læreren rett på timeplanen. Står læreren alt på
  timen, åpnes endringsdialogen i stedet.
- **Handlingslinje**: når et fag eller en lærer er valgt, vises
  handlingene med tekst over timeplanen — Juster timetall, Bytt rom,
  Legg til lærer, Kopier og Tøm uke på faget; Legg på fagets timer,
  Juster timetall og Fjern på læreren.
- **Kollisjoner varsles tidlig**: med en lærer valgt får fagets timer der
  læreren er opptatt **skravering**, og grå felt viser «Lærer opptatt» /
  «Rom opptatt» / «Opptatt» presist. Databasen kontrollerer uansett alt
  ved lagring.
- **Kopier-fanen er borte** — kopieringen ligger nå i verktøylinjen (hele
  uka eller enkeltdager) og på fagraden (ett fag).
- **Time- og fagfordelingen ett klikk unna**: «Legg til lærer» åpner
  Time- og fagfordeling i ny fane, ferdig stilt på faget med dialogen
  for å legge til lærer åpen.
- **Forrige versjon**: knappen i verktøylinjen åpner den gamle utgaven av
  siden, som beholdes i en overgangsperiode.
:::

Timeplanen for klassefag skal inneholde all organisert undervisning i
alle klassefag til klassen. Endring av fagsammensetningen i en klasse
gjøres fra _Grunnlagsdata>Klassefag_, og lærere legges til faget fra
_Time- og fagfordeling>Klassefag_ (knappen **Legg til lærer** tar deg
rett dit).

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
Elevkollisjoner blir varslet, men kan tillates. Rom- og lærerkollisjoner er ikke tillat. 
:::

![Klasser med valgt fag](/img/tp_klasser_hovedbilde.png)

### Fagliste og valg
Velg klasse og uke i verktøylinjen — pilknappene går til forrige/neste
uke. Faglisten til venstre viser klassens fag med lærerne sine under
(↳). Telleren på hver rad viser fremdriften, for eksempel **5 av 6**
timeplanlagte uketimer; oransje tall betyr at linjen mangler timer, og
et gult merke viser timer som står uten lærer. Fag med gjesteklasse har
gjestene som merkelapp på raden.

Klikk på en rad for å velge fag eller lærer. Da fremheves fagets timer
i rosa i kalenderen (rød kant = valgt lærer står på timen, oransje kant
= timen mangler lærer), ledige felt vises i grønt, og handlingslinjen
med de tilgjengelige operasjonene dukker opp over timeplanen. Trykk
`Esc` for å nullstille valget.

Øye-knappen i verktøylinjen viser/skjuler lærere som står med 0 timer i
valgt uke.

### Timeplanlegge
Klikk på et grønt, ledig felt — timen legges rett inn. Rommet hentes
fra romvelgeren i verktøylinjen, som er forhåndsstilt til klassens eget
rom (fra _Grunnlagsdata>Klasser_). Velger du et annet rom, viser
kalenderen med en gang hvilke tider rommet er opptatt («Rom opptatt»).

Planlegger du fra en **lærerlinje**, legges timen på faget og læreren
samtidig. Elevkollisjoner varsles med hvem og hva som kolliderer, og
kan tillates; lærer- og romkollisjoner avvises med forklaring.

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
Klikk på et dempet felt (gruppefag, gjesteklasse eller annet klassefag)
med et fag eller en lærer valgt: en dialog viser hvilke av fagets
elever som har undervisningen, med klassens elever og gjester hver for
seg. Har faget (og valgt lærer) ledig kvote, tilbyr dialogen
**Planlegg likevel** — fagets time legges i tidsrommet med tillatt
elevkollisjon.

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

![Valgt lærer med lærerens timeplan nederst](/img/tp_klasser_laererlinje.png)

## Kopiering
Klikk på kopieringsikonet i verktøylinjen for å kopiere klassens
timeplan til andre uker. Alle skoledager er forhåndsvalgt (= hele uka);
fjern dager for å kopiere enkeltdager. Velg mål-uker i listen — bare
fremtidige uker med skoledager tilbys. Kopieringen kontrollerer først
lærer-, rom- og elevkollisjoner i mål-ukene og viser funnene; elevene
kan tillates («Kopier likevel»), lærer- og romkollisjoner stopper
kopieringen.

Kopi-knappen på **fagraden** kopierer bare det ene fagets uke.

![Kopiering av klassens timeplan](/img/tp_klasser_kopiering.png)

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

:::info Forrige versjon
Den gamle utgaven av Klasser-siden er tilgjengelig via **Forrige
versjon**-knappen i verktøylinjen i en overgangsperiode. Ny
funksjonalitet kommer kun i den nye siden.
:::
