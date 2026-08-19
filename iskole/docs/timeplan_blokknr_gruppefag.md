---
id: timeplan_blokknr_gruppefag
title: Grupper
sidebar_label: Grupper
--- 

:::info Viktigste endringer (ny side)
Grupper-siden er bygget om til én sammenhengende ukematrise:

- **Alt i ett bilde**: fagene og lærerne deres er rader i en tidslinje for valgt
  uke — den gamle todelingen (tabell øverst, timeplan nederst) er borte.
  Ønsker du fortsatt kalenderformat, åpner **Kalender**-knappen valgt linje
  som dagsøyler nederst (størrelsen justeres med håndtaket).
- **Klikk hvor som helst på en rad** for å velge linjen. Da vises ledige
  timer (grønn stiplet) direkte på linjen, og handlingsknappene dukker opp.
  Klikk på et ledig felt legger timen **rett inn** — ingen
  bekreftelsesdialog, så du kan trykke deg raskt gjennom uken.
- **Zoom**: forstørrelsesglassene i verktøylinjen veksler mellom fem
  nivåer — fra ekstra kompakt ukesoversikt (romnummer kan klippes) til
  brede kolonner med kvartersruter.
- **Dagvis visning**: kalender-knappen med retningspil legger dagene
  nedover med én dags timeakse bortover — hele uken uten sidescroll,
  nyttig på liten skjerm.
- **Elevkollisjoner er ikke lenger en blindvei**: klikk på elevenes
  dempede undervisning viser hvem det gjelder, med mulighet til å
  planlegge likevel; på lærerlinjen vises ledig-feltet når *læreren* kan,
  og elevkollisjonen varsles ved klikk.
- **Bytt rom på flere timer**: velg fagets timer i en liste og sett nytt
  rom på alle under ett — opptatte rom avdekkes i listen.
- **Andres undervisning kan vises**: elevenes klassefag/øvrige gruppefag på
  faglinjen, lærerens øvrige undervisning, vikartimer og reservasjoner på
  lærerlinjen — dempet, og kan skrus av/på med øye-knappen.
- **Rom**: timen får rommet fra romvelgeren i verktøylinjen — forhåndsstilt
  til fagets rom (fra _Time- og fagfordeling_), og den husker siste valg.
  Opptatt rom stopper ikke forsøket — du får varsel ved lagring med valgene
  *bytt rom* eller *overta rommet*.
- **Lærer på time**: «Legg til»-merker viser fagets timer læreren kan legges
  på, og «Legg på fagets timer» legger læreren på flere timer i
  én operasjon.
- **Flytting og endring**: timer kan dras til ny tid — den nye tiden
  bekreftes og kan finjusteres i en dialog før lagring.
- **Fargene er nye**: blå = planlagt time med lærer, oransje = time uten
  lærer, gul = vikartime. (Tidligere rød markering for manglende lærer er
  nå oransje, og tellerne viser fremdrift per linje.)
:::

![Ukematrisen](/img/tp_grupper_matrise.png)

### Ukematrisen
Velg uke øverst til høyre — pilknappene går til forrige/neste uke. Hver rad
viser ett gruppefag med lærerne sine under (↳). Telleren til høyre på raden
viser fremdriften, for eksempel **2 av 5** timeplanlagte uketimer; oransje
tall betyr at linjen mangler timer.

Fagene hentes fra _Time- og fagfordeling>Gruppefag_. Allerede timeplanlagte
timer vises med romnummer. En time i faget uten lærer vises oransje.
Forstørrelsesglassene i verktøylinjen zoomer matrisen i fem nivåer — på de
mest kompakte får du hele uken i ett blikk, mot at romnummer kan klippes.

Kalender-knappen med retningspil bytter til **dagvis visning**: dagene
legges nedover med fag- og lærerradene gjentatt per dag, og timeaksen viser
én dags timer i full bredde — hele uken uten sidescroll. Nyttig på liten
skjerm; valget huskes til neste gang.

Et gruppefag har vanligvis én lærer, men full fleksibilitet er ivaretatt:
faget kan timeplanlegges uten lærer, med én eller med flere lærere — og
flere lærere kan dele timer eller fordele dem ulikt fra uke til uke.

### Søk og filter
Skriv i søkefeltet for å avgrense til bestemte fag eller lærere (listen
filtreres mens du skriver). Chipen **Kun ikke ferdig** viser bare fag som
mangler timer — tallet på chipen forteller hvor mange. Øye-knappen
**Annen undervisning** viser/skjuler de dempede markeringene av elevenes og
lærernes øvrige aktiviteter.

![Valgt linje med ledige timer](/img/tp_grupper_valgt_linje.png)

### Velge linje og timeplanlegge
Klikk på en rad (navnet, en tom rute eller en markering) for å velge
linjen. Da skjer tre ting:

1. **Ledige timer** vises som grønne, stiplede felt på linjen. På
   *faglinjen* er de beregnet ut fra skolens rammetimer minus alt elevene
   og faget er opptatt med. På en *lærerlinje* vises feltet når **læreren**
   er ledig — også om elevene har annen undervisning da; klikket varsler i
   så fall om elevkollisjonen, som kan tillates (se under). Vises kun når
   linjen har ledig kvote; er faget ferdig timeplanlagt, må timetallet
   økes først (**Juster timetall**).
2. **Handlingsraden** dukker opp over matrisen: Blokk, Kopier uke,
   Juster timetall, Bytt rom, Kalender og Tøm uke (fag) / Fjern og Legg på
   fagets timer (lærer). De samme handlingene ligger som ikoner på selve
   raden.
3. **Romvelgeren** stiller seg på fagets rom (fra _Time- og fagfordeling_)
   eller husker forrige valg.

Klikk på et ledig felt — timen legges rett inn med rommet fra romvelgeren.
Feilklikk rettes like raskt: klikk timen og slett eller juster den.
Kollisjoner kontrolleres alltid ved lagring:

- **Elevkollisjon**: du får se hvem og hva som kolliderer, og kan avbryte
  eller tillate kollisjonen.
- **Romkollisjon**: du får vite hvem som har rommet, og kan avbryte, velge
  annet rom (åpner en romvelger med ledige rom for tidsrommet) eller
  **overta rommet**.

Planlegger du på en **lærerlinje**, legges timen på faget og læreren
samtidig. Oransje stiplede **Legg til**-felt viser fagets eksisterende timer
som læreren kan legges på (en time uten denne læreren — samme farge som
«time uten lærer», stiplet fordi den ikke er lagt ennå).

Trykk `Esc` for å nullstille valget.

### Elevenes andre undervisning — se hvem, og planlegg likevel
Klikk på et av de dempede feltene for elevenes klassefag eller andre
gruppefag på en valgt faglinje: en dialog viser **hvilke elever fra
gruppen** som har undervisningen, gruppert per fag og tidsrom.

Har faget ledig kvote, tilbyr dialogen også **Planlegg likevel**: fagets
time legges i tidsrommet med tillatt elevkollisjon — nyttig når gruppen
*skal* gå på tvers av annen undervisning. Lærere legges aldri på ved slik
planlegging; de legges til etterpå på vanlig måte.

### Bytt rom på flere timer
**Bytt rom** på faglinjen åpner en liste over fagets timer i uken. Velg
nytt rom øverst — listen avdekker med en gang hvilke timer rommet er
opptatt i («rom opptatt»): de står umarkert, og må velges aktivt hvis du
vil overta rommet. Kryss av timene (radklikk holder — og øverste boks
velger alle/ingen) og bytt rom på alle valgte i én operasjon. Resultatet
rapporteres ærlig hvis noe stoppet.

### Endre, flytte og slette timer
Klikk på en planlagt time for å åpne **Endre time**-dialogen: juster start-
og sluttid, bytt rom (timens eget rom og ledige rom vises), se og fjern
lærere på timen, eller slett timen. Har timen fraværsregistreringer, får du
varsel — de følger timen ved endring og slettes sammen med den.

Timer kan også **dras** til nytt tidspunkt eller strekkes/krympes i endene.
Den nye tiden bekreftes i dialogen før lagring, så du kan finjustere
klokkeslettene manuelt.

### Lærer på fagets timer
På en lærerlinje gir **Legg på fagets timer** en liste over fagets timer som
læreren ikke har og er ledig til. Timene er forhåndsvalgt opp til lærerens
timetall — har læreren likt timetall som faget, er alle valgt. Fjern
læreren fra en enkelt time i Endre time-dialogen, eller fra hele uken med
**Fjern**.

### Blokkid: alle timene i én operasjon
Er faget knyttet til en blokkid (_Time- og fagfordeling>Gruppefag_) med
timeplanlagte blokktider (_Blokk_), åpner **Blokk**-knappen en planlegger
med blokkens tider for uken: allerede planlagte timer har hake, kollisjoner
er merket per tid, og kollisjonfrie tider er forhåndsvalgt opp til fagets
kvote. Velg rom, kryss av og planlegg alle med ett klikk — resultatet vises
ærlig («4 av 5 planlagt») med forklaring på det som eventuelt stoppet.
Fag uten blokkid kan tildeles en direkte i samme dialog.

![Blokkid-planleggeren](/img/tp_grupper_blokk.png)

:::info Merk
Etter å ha ferdigstilt timeplanen for gruppefagene i første skoleuke, vil
det være naturlig å timeplanlegge også klassefagene for samme skoleuke.
Deretter kan man kopiere resultatet til resten av skoleåret. Justeringer
senere kan selvsagt gjøres, systemet vil til enhver tid avdekke dersom
kollisjoner oppstår (gjelder lærer, elev og rom).
:::

## Kopiering av timeplanen for gruppefag
Klikk på kopieringsikonet i verktøylinjen. Velg hvilke fag som skal
kopieres (står du på en linje, er faget forhåndsvalgt) og hvilke uker det
skal kopieres til — bare fremtidige uker med skoledager tilbys. Kopieringen kontrollerer kollisjoner mot allerede lagte
timer i mottaksukene — fag som stopper på lærer- eller romkollisjon listes
med forklaring, og elevkollisjoner kan tillates med egen avkryssing.

![Kopiering av gruppefag](/img/tp_grupper_kopiering.png)

:::info Merk
Vi anbefaler at skolens timeplan ferdigstilles både for gruppe- og
klassefag, eksempelvis i første skoleuke. Da kan skolens timeplan kopieres
samlet fremover i tid fra _Timeplan>Kopiering_.
:::
