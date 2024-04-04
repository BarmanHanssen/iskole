---
id: timeplan_definer_blokknr
title: Blokk
sidebar_label: Blokk
---

:::info Ny versjon av iSkole
Vi har endret oppbyggingen av timeplane på iSkole, les mer om dette [her](https://dokumentasjon.iskole.net/blog/timeplan). Dokumentasjon av gammel løsning finner du [her](https://dokumentasjon.iskole.net/docs/timeplan_definer_blokknr_old). 
:::

Når undervisning i et fag har elever fra ulike klasser anbefales det å dele undervisningen i gruppefag. Også ved oppdeling av en klasse i flere grupper i samme fag, anbefales det å benytte gruppefag.

Hvis skolen ikke har gruppefag vil all undervisning i fag foregå i klasser. En elev kan bare tilhøre en klasse. All undervisning foregår i klassen gjennom klassens klassefag. Da er det ikke mer å gjøre her, og man kan gå til neste menyvalg som da vil være _Klasser_ for å timeplanlegge klassefagene.

Timeplanen for gruppefag bør ikke kollidere med timeplanen for klassefagene for elever som har både gruppe- og klassefag. Og siden et gruppefag kan ha elever fra flere klasser, kanskje fra mer enn et årstrinn, så kan det være utfordrende å legge skolens timeplanen i en 30 timers uke.

:::info Kollisjoner
iSkole vil vise og varsle om eventuelle kollisjoner. Det er mulig å tillate kollisjoner for elever.
:::

For å raskere å kunne timeplanlegge gruppefagene, tar vi utgangspunkt i at flere grupper skal undervises parallelt. Vi klassifiserer grupper som undervises parallelt med en blokkid. Og når eksempelvis fagene har fem uketimer felles tilkjennegis dette med fem blokknr.

Gruppefag med like blokknumre skal undervises parallelt. Med utgangspunkt i fagenes blokkid og blokknummer vil timeplanleggingen av gruppefagene gå greit.

Vi ser nærmere på hvordan vi kan planlegge timeplanen for gruppefagene allerede før gruppene og elevene er klargjorte.

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
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/6ede1793-1488-4224-96a5-16578f297ccd)
Valget er begrenset av timer med blokknr som alt er lagt inn, og som ikke allerede er i bruk av annen blokkid. Hvis vi her hadde valgt blokkid 1 eller 2 ville vi kunnet endre på oppsettet som alt er registrert.

#### Trinn
Dersom elevene gis tilgang til selv å velge gruppefag, vil kombinasjonen blokkid og trinn regulere hvilke fag som er valgbare. En elev vil bare kunne velg et fag fra fag med lik blokkid, forutsatt at eleven går på angitt klassetrinn. Men timeplanlegger er i utgangspunktet ikke bundet av dette oppsettet!

### Blokkfag
Velges _Blokkfag_ og _+ Legg blokkid til fag_ fås dette skjermbilde:
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/98616fe9-c9d5-4dcd-826a-72565749569f)

Her vises alle fag som alt har fått tildelt blokkid, og vi kan føye til gruppefag som ikke alt er utvalgt. Huk av for fag, og velg hvilke blokkid som skal benyttes, og avslutt med _Lagre_.

### Blokktider klasse
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/3128651d-a41a-42e8-97ac-71beda745e03)

Når elevene er registrert i sine respetive grupper vil en her få oversikt over timene hvor minst en av elevene har et gruppefag på sin timeplan. Av skjermbildet fremgår det at 7 timer dekker klassens behov for klassens elevers valg av gruppefag. Men om gruppefagene hadde beslaglagt 25 timer, og klassens klassefag krevde 15 timer, ville timeplanen legges over 40 timer. Det er selvsagt mulig, men da ville det bli mange fritimer underveis og en lang skoledag for den enkelte elev.


