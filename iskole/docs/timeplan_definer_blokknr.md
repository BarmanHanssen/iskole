---
id: timeplan_definer_blokknr
title: Blokk
sidebar_label: Blokk
---
Når undervisning i et fag har elever fra ulike klasser, klassifiseres faget som gruppefag. Merk at dersom klassens elever i et klassensfag deles i flere grupper, bør også dette faget klassifiseres som gruppefag.

Dersom skolen ikke har gruppefag, kan man sette antall blokknr til 0. Uten gruppefag skal all undervisning i fag foregå i klassen med alle elevene samlet, og fagene er klassifisert som klassefag. Da er det ikke mer å gjøre her, og man kan gå til neste menyvalg som da vil være _Klasser_ for å timeplanlegge klassefagene.

Gruppefag med samme blokknummer skal undervises på samme tid. Eksempelvis vil to gruppefag med fem timer undervisning per uke og undervises parallelt. At gruppene har like blokknumre forteller altså at fagene skal undervises parallelt. Bruk av blokknummer viser hvilke gruppefag som undervises på samme tid, allerede før timeplanleggingen er gjennomført. Med utgangspunkt i fagenes blokknummer vil timeplanleggingen av gruppefagene kunne gå raskere.
 
:::note Merk
En detaljert gjennomgang av bruken av gruppefag finner du i dokumentasjonen _Timeplanlegging_. Den finner du oppe i høyre hjørne:

![bilde](https://user-images.githubusercontent.com/80097133/199449947-e7edc076-9c3f-4b02-be9f-b9eccc3cf605.png)
:::

## Blokknr

Dersom skolen skal ha gruppefag, må man legge inn blokknr som skal angi hvor fagene skal plasseres på timeplanen. Registreringen av aktuelle gruppefag skjer fra _Grunnlagsdata>Fag_. Hvilke gruppefag som skal benyttes inneværende skoleår registreres fra _Time- og fagfordeling>Gruppefag_, og gruppene må selvsagt være registrert før elevenes valg av gruppefag kan registreres. Men man kan klargjøre oppsettet før registrering av gruppefagen er på plass.

![image](https://user-images.githubusercontent.com/10975905/197776611-e8eb1673-e9e3-4415-b7cf-d04f723eac6a.png)

Vi kan altså registre hvordan vi har tenkt å sette opp timeplanen for gruppefagene, uten nødvendigvis ennå å ha oversikt over hvilke grupper som skal igangsettes. Vi skal fastsette et rammeverk som gjør det enkelt å gruppere fag som skal undervises parallelt. Når undervisningen eksakt skal finne sted gjøres fra menyvalget _Timeplanlegge blokknr_.

### _* Antall timer til valg (blokknr)_
Gruppefagene har typisk fem undervisningstimer per uke. Vanlig oppsett for videregående skoler er at man planlegger for opptil 35 uketimer til undervisning. Herav planlegges det gjerne å avsette 25 til 30 timer per årstrinn til undervisning i gruppefag. 
<!--
, hvilket tilsvarer 5 eller 6 Id-er hvor hvert fag typisk tildeles en Id (blokkindikator), og hvor hver Id legger beslag på 5 blokknr, altså 5 timer. Timetallet settes til minimum _Antall blokid_ x 5, og kan oppjusteres ved behov. 
-->
Vi viser nok en gang til dokumentasjonen _Timeplanlegging_ for mer detaljert informasjon om gruppefag og bruken av blokknummer.

### Timeplanlegging av blokknr

Innføring av blokknummer gir oss mer abstrakt måte å angi en undervisningstime på. Eksempelvis gis to grupper den samme nummerserie på fem blokknummer. At gruppene har like blokknumre forteller oss at fagene skal undervises parallelt. I utgangspunktet sier det ikke hvor timene skal plasseres på timeplanen. Det er nå først at dette skal bestemmes!

To blokknummer bør altså ikke overlappe hverandre i tid, det ville kunne medføre kollisjon på timeplanen (noe systemet automatisk vil avdekke).

Når blokknummer legges på et fag, så hentes start- og slutt-tid for timen ut fra tabellen i _Timer_. Endrer man etterpå tabellen Timer, vil dette ikke berøre timene for fag som alt er tildelt blokknummer. Tabellen _Timer_ er altså en mal som bestemer dag og start-/slutt på en undervisningstime. Når blokknummeret blir lagret på et fag, overføres altså dag og start-/slutt til timen, og koplingen mot tabellen _Timer_ opphører. Det betyr at dersom vi i ettertid gjør endringer i tabellen _Timer_, så påvirker ikke dette allerede blokknumre som er plassert på gruppefag. Det sier seg selv at innholdet i tabellen _Timer_ ikke bør endres etter at fagene har fått tildelt blokknumre. Skal endringen kunne skje for et allerede plassert blokknummer i et fag, og blokknummeret får endret dag/tid, må blokknummer på faget fjernes, og så legges inn på nytt.

Ser man på eksempel på ferdiglagt timeplan for blokknr vist over, så ser vi at man har valgt å legge blokknumrene i rekkefølge. Det medfører at man lettere kan koble blokknummeret mot timen, men samtidig blir det et mere fragmentert blokkskjema når man timeplanlegger gruppene i _Timeplan>Grupper_. Alternativt kan man legge blokknummer i bolker slik at f.eks. blokknr 1-5 er spredt på timeplanen, men samler de fagene som har disse fem blokknumrene i _Timeplan>Grupper_.

<!--
![image](https://user-images.githubusercontent.com/80097133/113118295-9bbdbd00-920f-11eb-89ba-3031a26731f9.png)
Her tilhører blokknr 1 til 5 fag hjemmehørende under Id=1 (se _Timeplan>Definer blokknr_). Vi ser at hvert av fagene er tildelt to dobbel-timer (mandag og fredag) og en enkel-time onsdag. 
-->


## Gruppering av timer til valg
Det er mulig å benytte gruppefag, og timeplanlegging av disse, uten å benytte ID, eller koplingen mellom ID og blokknr. Men det anbefales å benytte denne muligheten, da det gir bedre oversikt, og letter arbeidet videre.

- ID: Fag med lik ID skal ha lik timeplan. Altså kan en elev bare velge gruppefag med ulike ID-er.
- Blokkknr: Her spesifiseres timene, før timeplanen er bestemt. Et bestemt blokknr kan bare benyttes en gang.
- Trinn: Benyttes i forbindelse når elevene selv skal velge gruppefag for neste skoleår.

Gruppefagene kan knyttes til en ID fra _Time- og fagfordeling>Gruppefag_. En lærer kan ikke undervise to grupper med lik ID. Dersom elevene selv skal kunne få velge gruppefag for neste skoleår: Se _Mine sider>Tilgang>Elevers valg av gruppefag_.

![image](https://user-images.githubusercontent.com/10975905/197777147-27e94fe2-eeca-4023-a492-34e6f93b7669.png)

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

Før en starter timeplanleggingen av klassefagene: Klikk ikonet Legg til... under overskriften Blokknummer tildelt klassen for uken.
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

## --------------------------------------------------------------------------
# _Her følger dokumentasjonen for ny versjon av iSkole, som snart kommer!_

Når undervisning i et fag har elever fra ulike klasser, klassifiseres faget som gruppefag. Merk at dersom klassens elever i et klassensfag deles i flere grupper, bør også dette faget klassifiseres som gruppefag.

Dersom skolen ikke har gruppefag vil all undervisning i fag foregå i klasser. En elev kan bare tilhøre en klasse. All undervisning foregår i klassen gjennom klassens klassefag. Da er det ikke mer å gjøre her, og man kan gå til neste menyvalg som da vil være _Klasser_ for å timeplanlegge klassefagene.

Timeplanen for gruppefag kan ikke kollidere med timeplanen for klassefagene for elever som har både gruppe- og klassefag. Og siden et gruppefag kan ha elever fra flere klasser, kanskje fra mer enn et årstrinn, så gir det store utfordringer for å kunne legge skolens timeplanen innen eksempelvis en 30 timers uke.

For å raskere å kunne timeplanlegge gruppefagene, tar vi utgangspunkt i at flere grupper skal undervises parallelt. Vi klassifiserer grupper som undervises parallelt med en blokkid. Og når eksempelvis fagene har fem uketimer felles tilkjennevis dette med fem blokknr.

Gruppefag med like blokknumre skal undervises parallelt. Med utgangspunkt i fagenes blokkid og blokknummer vil timeplanleggingen av gruppefagene gå greit.

Vi ser nærmere på hvordan vi kan planlegger timeplanen for gruppefagene allerede før gruppene og elevene er klargjorte.

## Blokkskjema
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/a668553f-4000-401c-b3d9-75c7d8320a66)

Typisk kan skolen bestemme at maksimalt 25 uketimer kan benyttes for timeplanlegging av gruppefag. Med blokkskjema avsetter vi plass på timeplanen for disse 25 timene hvor grupppefagene kan plasseres. Se på skjermbildet. Hvor den 16. timen her skal plasseres registreres ved først klikke på _Dag_ nr 16, og deretter på grønnfarget time som da markeres med tallet 16. For å slette en allerede utplassert blokknr klikkes det på timen med gitt blokknr i skjemaet til høyre. Tildeling av _Blokkid_ skjer fra _Gruppering av timer til valg_.

## Gruppering av timer til valg
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/e845edce-c4e5-4a27-8de8-9ba7f822401a)

#### Blokkid
Vi har avsatt plass for 10 blokkid. Dersom eksempelvis hvert gruppefag er på 5 timer, trenger vi bare å benytte de fem første.

#### Blokknr
Gruppefag som skal gå parallelt markeres med likt blokkid. Hvor timene er tenkt plassert på timeplanen angis med blokknr. Blokknr trengs ikke som her å være fortløpende. Eneste krav er at et blokknr bare kan være registrert til et blokkid. Her er altså blokknr 1 til 10 allerede båndlagt og kan ikke gjenbrukes.

Dersom en ønsker å timeplanlegge fag med blokkid 3 fås følgende skjermbilde:
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/6ede1793-1488-4224-96a5-16578f297ccd)
Valget er begrenset av timer med blokknr som alt er lagt inn, og som ikke allerede er i bruk av annen blokkid. Dersom vi her hadde valgt blokkid 1 eller 2 ville vi kunnet endre på oppsettet som alt er registrert.

#### Trinn
Dersom elevene gis tilgang til selv å velge gruppefag, vil kombinasjonen blokkid og trinn regulere hvilke fag som er valgbare. En elev vil bare kunne velg et fag fra fag med lik blokkid, forutsatt at eleven går på angitt klassetrinn. Men timeplanlegger er i utgangspunktet ikke bundet av dette oppsettet!

## Blokkfag
Velges _Blokkfag_ og _+ Legg blokkid til fag_ fås dette skjermbilde:
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/98616fe9-c9d5-4dcd-826a-72565749569f)

Her vises alle fag som alt har fått tildelt blokkid, og vi kan føye til gruppefag som ikke alt er utvalgt. Huk av for fag, og velg hvilke blokkid som skal benyttes, og avslutt med _Lagre_.

## Blokktider klasse
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/3128651d-a41a-42e8-97ac-71beda745e03)

Når elevene er registrert i sine respetive grupper vil en her få oversikt over timene hvor minst en av elevene har et gruppefag på sin timeplan. Av skjermbildet fremgår det at 7 timer dekker klassens behov for klassens elevers valg av gruppefag. Men dersom gruppefagene hadde beslaglagt 25 timer, og dersom klassens klassefag krevde 15 timer, vil timeplanen legges over 40 timer. Det er selvsagt mulig, men da ville de bli mange fritimer underveis over en lang skoledag for den enkelte elev...
Det vil også være mulig å blokkere for timeplanlegging av klassefag for time som ikke er blokkert via elevenes valg av grupppefag. Eksempelvis for å sikre felles fritme for alle elevene i klassen.


