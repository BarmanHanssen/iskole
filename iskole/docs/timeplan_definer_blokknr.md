---
id: timeplan_definer_blokknr
title: Blokk
sidebar_label: Blokk
---

:::info Ny versjon av iSkole
Vi har endret oppbyggingen av timeplane på iSkole, les mer om dette [her](https://dokumentasjon.iskole.net/blog/timeplan). Dokumentasjon av gammel løsning finner du [her](https://dokumentasjon.iskole.net/docs/timeplan_definer_blokknr_old). 
:::

Når et fag kan ha elever fra ulike klasser, skal faget klassifiseres som gruppefag. Også derom elevene i én klasse deles i flere grupper i et fag, skal faget klassifiseres som gruppefag.

Hvis skolen ikke har gruppefag vil all undervisning i fag foregå i klasser. En elev kan bare tilhøre en klasse. All undervisning foregår i klassen gjennom klassens klassefag. Da er det ikke mer å gjøre her, og man kan gå til neste menyvalg som da vil være _Klasser_ for å timeplanlegge klassefagene.

Timeplanen for gruppefag skal ikke kollidere med timeplanen for klassefagene for elever som har både gruppe- og klassefag. Og siden et gruppefag kan ha elever fra flere klasser, kanskje fra mer enn et årstrinn, så kan det være utfordrende å legge skolens timeplanen innenfor en 30 timers uke.

:::info Kollisjoner
iSkole vil vise og varsle om eventuelle kollisjoner på timeplanen. Det er mulig å tillate kollisjoner for elever.
:::

Dersom flere grupper skal undervises parallelt vil timeplanlegging gå raskere dersom grupper som skal timeplanelegges parallelt gis sammen blokkid. Dersom eksempelvis fagene med blokkid 1 har fem uketimer felles tilkjennegis dette med å knytte fem blokknr til blokkid 1. Et blokknummer kan bare brukes til til en bestemt blokkid. Blokknummer forteller i utgangspunktet ikke når timen skal avholdes, men to blokknummer skal ikke kunne overlappe hverandre.

Gruppefag med like blokknumre skal undervises parallelt. Med utgangspunkt i fagenes blokkid og blokknummer vil timeplanleggingen av gruppefagene gå greit.

Vi ser nærmere på hvordan vi kan planlegge timeplanen for gruppefagene allerede før lærere og elever er registrerrt.

### Blokkskjema
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/a668553f-4000-401c-b3d9-75c7d8320a66)

Typisk kan skolen bestemme at maksimalt 25 uketimer kan benyttes for timeplanlegging av gruppefag. Med blokkskjema avsetter vi plass på timeplanen for disse 25 timene hvor grupppefagene kan plasseres. Se på skjermbildet. For å plassere blokknr 16, klikk først på raden til blokknr 16, og deretter på grønnfarget time. Timen skifter farge og markeres med tallet 16. For å slette et allerede utplassert blokknr klikkes det på timen med gitt blokknr i skjemaet til høyre. Tildeling av _Blokkid_ skjer fra _Gruppering av timer til valg_.

### Gruppering av timer til valg
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/e845edce-c4e5-4a27-8de8-9ba7f822401a)

#### Blokkid
Blokkid er en samling av blokknr, som har til hensikt å effektivisere timeplanleggingen av gruppefag. Fagene tildeles blokkid fra _Grunnlagsdata > Grupper_. De fagene som skal gå parallelt tildeles samme blokkid. Man kan benytte inntil 10 blokker.

#### Blokknr
Gruppefag som skal gå parallelt markeres med lik blokkid. Hvor timene er tenkt plassert på timeplanen angis med blokknr. Blokknr trengs ikke som her å være fortløpende. Eneste krav er at et blokknr bare kan være registrert til en blokkid. Her er altså blokknr 1 til 10 allerede båndlagt og kan ikke gjenbrukes.

Hvis man ønsker å timeplanlegge fag med blokkid 3 fås følgende skjermbilde:
![image](/img/tp_blokknr_gruppering.png)
Valget er begrenset av timer med blokknr som alt er lagt inn, og som ikke allerede er i bruk av annen blokkid. Hvis vi her hadde valgt blokkid 1 eller 2 ville vi kunnet endre på oppsettet som alt er registrert.

#### Trinn
Dersom elevene gis tilgang til selv å velge gruppefag, vil kombinasjonen blokkid og trinn regulere hvilke fag som er valgbare. En elev vil bare kunne velg et fag fra fag med lik blokkid, forutsatt at eleven går på angitt klassetrinn. Men timeplanlegger er i utgangspunktet ikke bundet av dette oppsettet!

### Blokkfag
Velges _Blokkfag_ og _+ Legg blokkid til fag_ fås dette skjermbilde:
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/98616fe9-c9d5-4dcd-826a-72565749569f)

Her vises alle fag som alt har fått tildelt blokkid, og vi kan føye til gruppefag som ikke alt er utvalgt. Huk av for fag, og velg hvilke blokkid som skal benyttes, og avslutt med _Lagre_.

### Blokktider klasse
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/3128651d-a41a-42e8-97ac-71beda745e03)

Når elevene er registrert i sine respektive grupper vil en her få oversikt over timene hvor minst en av elevene har et gruppefag på sin timeplan. Av skjermbildet fremgår det at 7 timer dekker klassens behov for  elevenes valg av gruppefag. Om gruppefagene hadde beslaglagt 25 timer, og klassens klassefag krevde 15 timer, ville timeplanen legges over 40 timer. Det er selvsagt mulig, men da ville det bli mange fritimer underveis og en lang skoledag for noen elever.
