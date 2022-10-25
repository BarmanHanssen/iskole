---
id: timeplan_definer_blokknr
title: Blokk
sidebar_label: Blokk
---
Når undervisning i et fag har elever fra ulike klasser, klassifiseres faget som gruppefag. Merk at dersom klassens elever i et klassensfag deles i flere grupper, kan også dette faget klassifiseres som gruppefag.

Begrunnelsen for å innføre blokknummer var et ønske om en mer abstrakt måte å angi en undervisningstime på. Eksempelvis skal to grupper ha fem timer undervisning per uke og undervises parallelt. Vi gir da gruppene like blokknumre. At gruppene har like blokknumre forteller at fagene skal undervises parallelt. 
<!--I utgangspunktet sier det ikke hvor timene skal plasseres på timeplanen.  Det kan bestemmes på et senere tidspunkt (se _Timeplanlegge blokknr._).-->

Dersom skolen ikke har gruppefag, kan man sette antall blokknr til 0. Uten gruppefag skal all undervisning i fag foregå i klassen med alle elevene samlet, og fagene er klassifisert som klassefag. Da er det ikke mer å gjøre her, og man kan gå til neste menyvalg som da vil være _Klasser_ for å timeplanlegge klassefagene.

## Blokknr og timeplanlegging av blokknr

Dersom skolen skal ha gruppefag, må man legge inn blokknr som skal angi hvor fagene skal plasseres på timeplanen. Registreringen av aktuelle gruppefag skjer fra _Grunnlagsdata>Fag_. Hvilke gruppefag som skal benyttes inneværende skoleår registreres fra _Time- og fagfordeling>Gruppefag_, og må være utført før elevene kan velge gruppefag. Men man kan klargjøre oppsettet her uten at gruppefagene og elevene er på plass.

![image](https://user-images.githubusercontent.com/10975905/197776611-e8eb1673-e9e3-4415-b7cf-d04f723eac6a.png)

Vi registrer hvordan vi har tenkt å sette opp timeplanen for gruppefagene, uten nødvendigvis ennå å ha oversikt over hvilke grupper som skal igangsettes. Vi skal fastsette et rammeverk som gjør det enkelt å gruppere fag som skal undervises parallelt. Når undervisningen eksakt skal finne sted gjøres fra menyvalget _Timeplanlegge blokknr_.

### _* Antall timer til valg (blokknr)_
Gruppefagene har typisk fem undervisningstimer per uke. Vanlig oppsett for videregående skoler er at man planlegger for opptil 35 uketimer til undervisning. Herav planlegges det gjerne å avsette 25 til 30 timer per uke  til undervisning i gruppefag.
<!--
, hvilket tilsvarer 5 eller 6 Id-er (hvor hvert fag typisk tildeles en Id, og hvor hver Id legger beslag på 5 blokknr, altså 5 timer). Timetallet settes til minimum _Antall blokid_ x 5, og kan oppjusteres ved behov. 
-->

## Gruppering av timer til valg
Det er mulig å benytte gruppefag, og timeplanlegging av disse, uten å benytte ID, eller koplingen mellom ID og blokknr. Men det anbefales å benytte denne muligheten, da det gir bedre oversikt, og letter arbeidet videre.

- ID: Fag med lik ID skal ha lik timeplan. Altså kan en elev bare velge gruppefag med ulike ID-er.
- Blokkknr: Her spesifiseres timene, før timeplanen er bestemt. Et bestemt blokknr kan bare benyttes en gang.
- Trinn: Benyttes i forbindelse når elevene selv velger gruppefag.

Gruppefagene kan knyttes til en ID fra _Time- og fagfordeling>Gruppefag_, begrenset til de registrerte ID-er som er lagt inn her. Dersom elevene selv skal kunne få velge gruppefag for neste skoleår: Se _Mine sider>Tilgang>Elevers valg av gruppefag_.

![image](https://user-images.githubusercontent.com/10975905/197776780-a6dfc862-a550-447f-b5f5-1cd948644e9d.png)

### ID
Identifikator som gjør det enkelt å gruppere fag som skal ha lik timeplan. Bør tas i bruk, da den letter arbeidet med å ferdigstille timeplanen. ID kan legges inn på faget fra _Time- og fagfordeling>Gruppefag_.

### Blokknr
Dersom man benytter fortløpende nummerering av blokknr gir det god visuell oversikt når gruppefagene tildeles blokknr fra _Blokknr gruppefag_. Vanligvis har gruppefagene 5 timer per uke. Fag med mindre enn 5 timer kan ligge i en blokk med 5 timer, hvilke bloknr som skal benyttes bestemmes fra _Blokknr gruppefag_. Dersom noen fag har mer enn 5 timer, kan de overskytende timer også plasseres fra _Blokknr gruppefag_. 

:::note Tips
Dersom gruppene gis ID fra _Time- og fagfordeling>Gruppefag_ (anbefales!), vil plassering av blokknumrene på fagene (fra _Blokknr gruppefag_) gå raskt. Blokknumrene kan da plasseres på hvert fag ut fra fagets ID.
:::
 
### Trinn 
Benyttes når elevene selv skal velge gruppefag for neste skoleår. For at elevene skal kunne velge gruppefag for neste skoleår kreves følgende: 
- Neste års planperiode er opprettet. (Se _Grunnlagsdata>Planperiode_)
- Gruppefagene som skal kunne velges er opprettet i neste års planperiode, og tildeldelt ID. (Se _Time- og fagfordeling>Gruppefag_)
- Årets elever som skal kunne velge gruppefag må flyttes opp til neste planperiode. (Se _Elevadmin.>Oppflytting_)
- Det er åpnet et tidsintervall fra årets planperiode for når valget kan finne sted. (Se _Mine sider>Tilgang>Elevers valg av gruppefag_)

Det er typisk årets vg1- og vg2-elever som er aktuelle kandidater til å velge gruppefag for neste skoleår. De blir da henholdsvis vg2- og vg3-elever og kan velge fag registrert med ulik ID. Men neste års vg2-elever kan eksempelvis bare velge fag med ID hvor det er huket av for _Trinn 2_.

Merk at også registrert gruppefag uten ID kommer opp på elevens valgsliste, og fagene kan da velges fritt uten noen begrensning. Da må en etter valget foretar en analyse for å sette opp hvilke fag som kan timeplanelegges parallelt, og deretter eventuelt legge inn ID på fagene. Se spesielt avsnittet _De enkelte elevs valgmuligheter_ som du finner under menyvalget _Emner>Timeplanlegging_ i venstre marg.

Se figuren ovenfor: Eksempelvis kan neste års vg2-elever (trinn 2) bare kunne velge to gruppefag, nemlig et fag som har ID=4, og et fag som har ID=5. Vg3-elevene har her hele 5 grupper fag å velge mellom!


## Blokknr for klasse

Dersom skolen benytter både klassefag og gruppefag:
Hva skal timeplanlegges først, klasse- eller gruppe-fagene? Timeplanlegger bestemmer selv rekkefølgen, her er litt bakgrunnstoff.

### Dersom klassefagene timeplanlegges først 

Hensikten med dette valget:

- Å markere at en time i valgt klasse ikke skal/kan brukes til timeplanlegging av et klassefag. Vanligvis for å avsette tid for gruppefag, men også for andre formål.

Markeringen kan altså gjøres ved hjelp av blokknummer.

Det kan være greit å ha bestemt hvor gruppefagene skal timeplanlegges, endog før gruppefagene er satt opp, og alså før elevene har valgt gruppefag. Da kan aktuelle gruppefag plasseres i ettertid der vi har avsatt tid for disse. Dersom tidene alt er bestemt, kan konflikt og endringer på klassetimeplanen unngås. Og gruppene kan sømløst få sin timeplan når gruppene, med elever, er på plass.

### Dersom gruppefagene timeplanlegges først 

:::note Merk
Dersom elevenes valg av gruppefag er gjennomført, og i tillegg følgende er på plass: 
- Blokknumrene er timeplanlagt (fra _Timeplanlegge blokknr_).
- Gruppefagenes blokknr er registert (fra _Blokknr gruppefag_).

Da vil timene som elevene i en klasse skal følge i sine gruppefag automatisk være blokkert for timeplanlegging av klassefag!
:::

Dersom det er praktisk mulig, vil vi anbefale at elevers valg av gruppefag er gjennomført, og at gruppefagene blir timeplanlagtfør før klassens timeplan legges. 

Dersom dette er på plass, er valget med _Tildelte blokknr_ overflødig hva angår gruppefagenes plassering. Under overskriften _Minste utvalg av blokknummer_ vil det listes opp hvilke blokknr som er aktuelle for klassen ut fra elevenes valg av gruppefag. Blokknummrene som listes opp her vil altså automatisk blokkere for timeplanlegging av klassefag.

- I tillegg til timene som gruppefagene vil legge beslag på, kan en fra _Blokknummer tildelt klasse for uken_ velge ekstra timer hvor klassefag ikke kan timeplanlegges. Se skjermbildet nedenfor hvor ytterligere to blokknumre for klasse ID1C er valgt.

### Blokknummer tildelt klasse for uken
Dersom skolen har gruppefag, men elevenes valg av gruppefagene ikke er fullført, og man ønsker å starte timeplanlegging av klassefagene:

Det kan være greit å markere hvilke timer som ikke kan timeplanenlegges med klassefag. Markeringen gir da mulig åpning for å plassere gruppefagene her.

Gjør da følgende:
- Velg klasse
- Flytt over fra _Ledige blokknr_ til _Tildelte blokknr_ for de timene som skal blokkere for klassefag.
- Bekreft valget med _Lagre_.

![bilde](https://user-images.githubusercontent.com/10975905/197775926-51fd018b-53c5-4764-acd3-2c75cf2acfd3.png)

For at blokkeringen skal vises når timeplanlegging av klassefag av klassefag finner sted, må som nevnt _Timeplanllegge blokknr_ være fullført.

### Etterord

Dersom elevene har valgt gruppefag, og gruppefagene har fått tildelt blokknumme: Under _Minste utvalg av blokknummer_  listes da opp blokknumrene som inngår i elevenes valg av gruppefag.

Når klassefag timeplanlegges, vil systemet automatisk kontrollere både mot  _Minste utvalg av blokknummer_, og mot _Tildelte blokknr_. Klassefag kan altså ikke timeplanlegges i disse timene.
