---
id: timeplan_blokknr_gruppefag
title: Grupper
sidebar_label: Grupper
---

![Ukematrisen](/img/tp_grupper_matrise.png 'Ukematrisen')

### Ukematrisen
Velg uke øverst til høyre — pilknappene går til forrige/neste uke. Hver rad
viser ett gruppefag med lærerne sine under (↳). Telleren til høyre på raden
viser fremdriften, for eksempel **2 av 5** timeplanlagte uketimer; oransje
tall betyr at linjen mangler timer. Pilen foran fagnavnet bretter
lærerlinjene inn og ut; innbrettingen står seg mens du jobber.

Fagene hentes fra _Time- og fagfordeling>Gruppefag_. Allerede timeplanlagte
timer vises med romnummer. En time i faget uten lærer vises oransje.
Forstørrelsesglassene i verktøylinjen zoomer matrisen i fem nivåer — på de
mest kompakte får du hele uken i ett blikk, mot at romnummer kan klippes.

Kalender-knappen med retningspil bytter til **dagvis visning**: dagene
legges nedover med fag- og lærerradene gjentatt per dag, og timeaksen viser
én dags timer i full bredde — hele uken uten sidescroll. Nyttig på liten
skjerm; valget huskes så lenge
nettleserfanen er åpen (det samme gjelder zoomnivået).

Et gruppefag har vanligvis én lærer, men full fleksibilitet er ivaretatt:
faget kan timeplanlegges uten lærer, med én eller med flere lærere — og
flere lærere kan dele timer eller fordele dem ulikt fra uke til uke.

### Fargene i matrisen {#fargene-i-matrisen}
Fargeforklaringen står under verktøylinjen:

- **Time med lærer** (blå) og **Time uten lærer** (oransje): fagets
  planlagte timer, med romnummer. Lærerens egne timer på lærerlinjen er blå.
- **Elevenes klassefag** (lilla) og **Elevenes andre gruppefag** (grå):
  dempede felt på faglinjen som viser når gruppens elever har annen
  undervisning. På en lærerlinje viser de samme fargene lærerens øvrige
  undervisning i klasse- og gruppefag.
- **Vikartime** (gul) og **Reservasjon** (brun): lærerens vikartimer og
  reservasjoner, dempet på lærerlinjen.
- **Ledig (velg en linje)** (grønn stiplet): ledige timer på valgt linje —
  klikk for å planlegge.
- **Legg til (lærer)** (oransje stiplet): fagets timer som valgt lærer kan
  legges på.

Hold musepekeren over et felt for detaljer: tid, rom og hvem det gjelder.
Et ledig felt viser også om timen hører til en blokk.

### Søk og filter
Skriv i søkefeltet for å avgrense til bestemte fag eller lærere (listen
filtreres mens du skriver). Chipen **Kun ikke ferdig** viser bare fag som
mangler timer — tallet på chipen forteller hvor mange. Øye-knappen
**Annen undervisning** viser/skjuler de dempede markeringene av elevenes og
lærernes øvrige aktiviteter. Markeringene hentes etter timene, og kan
dukke opp et øyeblikk etter at matrisen er tegnet.

Har skolen timer som ligger utenfor ukens vanlige skoledag og som
ingen bruker (for eksempel en sen kveldstime én dag), holdes de utenfor
matrisen så den ikke blir unødig bred. Da dukker knappen **Vis alle
rammer** opp i verktøylinjen; den tar dem med igjen.

### Tidskjema {#tidskjema}
Har skolen flere tidskjemaer (egne sett med start- og sluttider, se
[_Timer_](/docs/timeplan_time#tidskjema)), vises nedtrekket **Tidskjema**
ved ukevelgeren. De grønne ledige feltene følger timene i valgt tidskjema —
bytt skjema når en gruppe følger et annet timeoppsett enn skolens standard.
Timer som alt er planlagt, vises uansett hvilket skjema som er valgt.
Valget huskes i nettleseren og gjelder også de andre timeplanvinduene
(Timer, Reserver, Blokk og Klasser).

![Valgt linje med ledige timer](/img/tp_grupper_valgt_linje.png 'Valgt linje med ledige timer')

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
2. **Handlingsraden** dukker opp over matrisen: på en faglinje Blokk, Kopier uke,
Juster timetall, Bytt rom, Kalender og Tøm uke; på en lærerlinje Legg på
   fagets timer, Blokk, Juster timetall, Kalender og Fjern. De samme
   handlingene ligger som ikoner på selve raden. **Kalender** åpner
   valgt linje som dagsøyler nederst, hvis du heller vil se den i
   kalenderformat; størrelsen justeres med håndtaket.
3. **Romvelgeren** ved siden av _Valgt_-merket stiller seg på
   fagets rom (fra _Time- og fagfordeling_) eller husker forrige valg.
_Valgt_-merket viser også fagets navn.

Klikk på et ledig felt — timen legges rett inn med rommet fra romvelgeren.
Feilklikk rettes like raskt: klikk timen og slett eller juster den.
Romvelgeren gjelder bare nye timer: legges en lærer på en time som
finnes fra før, beholder timen sitt rom. Rommet på eksisterende timer endrer
du i **Endre time** eller med **Bytt rom**.
Kollisjoner kontrolleres alltid ved lagring:

- **Elevkollisjon**: du får se hvem og hva som kolliderer, og kan avbryte
  eller tillate kollisjonen.
- **Romkollisjon**: du får vite hvem som har rommet, og kan avbryte, velge
  annet rom (åpner en romvelger med ledige rom for tidsrommet) eller
**overta rommet**. Overtar du rommet, står timen som hadde det, uten
  rom etterpå. Er rommet **reservert** (under _Reserver_), kan det ikke
  overtas — velg et annet rom, eller rydd reservasjonen først.

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
klokkeslettene manuelt. Det er timene på faglinjen som kan dras — også
til en annen dag i uken, men ikke over på en annen linje.

### Lærer på fagets timer
På en lærerlinje gir **Legg på fagets timer** en liste over fagets timer som
læreren ikke har og er ledig til. Timene er forhåndsvalgt opp til lærerens
timetall — har læreren likt timetall som faget, er alle valgt. Fjern
læreren fra en enkelt time i Endre time-dialogen, eller fra hele uken med
**Fjern**.

### Juster timetall og tøm uke {#juster-timetall-og-tøm-uke}
**Juster timetall** endrer uketimene for faget — og på en lærerlinje også
for læreren — i valgt uke. Timetallet kan ikke settes lavere enn det som
alt er planlagt. **Tøm uke** på faglinjen sletter alle fagets timer i uken,
også lærerne på dem, etter at du har bekreftet.

### Blokkid: alle timene i én operasjon
Er faget knyttet til en blokkid (_Time- og fagfordeling>Gruppefag_) med
timeplanlagte blokktider (_Blokk_), åpner **Blokk**-knappen en planlegger
med blokkens tider for uken: allerede planlagte timer har hake, kollisjoner
er merket per tid, og kollisjonfrie tider er forhåndsvalgt opp til fagets
kvote. Velg rom, kryss av og planlegg alle med ett klikk — resultatet vises
ærlig («4 av 5 planlagt») med forklaring på det som eventuelt stoppet.
Fag uten blokkid kan tildeles en direkte i samme dialog.
Tider med elevkollisjon planlegges bare når _Tillat elevkollisjoner
ved planlegging_ er krysset av.

![Blokkid-planleggeren](/img/tp_grupper_blokk.png)

:::info Merk
Etter å ha ferdigstilt timeplanen for gruppefagene i første skoleuke, vil
det være naturlig å timeplanlegge også klassefagene for samme skoleuke.
Deretter kan man kopiere resultatet til resten av skoleåret. Justeringer
senere kan selvsagt gjøres, systemet vil til enhver tid avdekke dersom
kollisjoner oppstår (gjelder lærer, elev og rom).
:::

## Kopiering av timeplanen for gruppefag
Klikk på kopieringsikonet i verktøylinjen (eller **Kopier uke** på
en faglinje). Velg hvilke fag som skal
kopieres (står du på en linje, er faget forhåndsvalgt) og hvilke uker det
skal kopieres til — bare fremtidige uker med skoledager tilbys. Fag og
uker velges i to lister side om side; boksen øverst i hver liste velger
alle/ingen. Kopieringen kontrollerer kollisjoner mot allerede lagte
timer i mottaksukene — fag som stopper på lærer- eller romkollisjon listes
med forklaring, og elevkollisjoner kan tillates med egen avkryssing.

![Kopiering av gruppefag](/img/tp_grupper_kopiering.png 'Kopiering av gruppefag')

:::info Merk
Vi anbefaler at skolens timeplan ferdigstilles både for gruppe- og
klassefag, eksempelvis i første skoleuke. Da kan skolens timeplan kopieres
samlet fremover i tid fra _Timeplan>Kopiering_.
:::
