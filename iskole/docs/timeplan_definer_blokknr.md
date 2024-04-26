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

:::important 
Timeplanlegging av gruppefagene kan gjøres uten å benytte (eller ta hensyn til) blokkid. Men timeplanleggingen av fag med blokkid kan gå vesentlig raskere ved at alle timene for faget kan legges under ett.
:::

Timeplanen for gruppefag skal ikke kollidere med timeplanen for klassefagene for elever som har både gruppe- og klassefag. Og siden et gruppefag kan ha elever fra flere klasser, kanskje fra mer enn et årstrinn, så kan det være utfordrende å legge skolens timeplanen innenfor en 30 timers uke.

:::info Kollisjoner
iSkole vil vise og varsle om eventuelle kollisjoner på timeplanen. Det er mulig å tillate kollisjoner for elever.
:::

Fagets blokkid registreres fra _Grunnlagsdata>Grupper_. Her kan fags blokkid endres/nytt fag legges til fra menyvalget _Blokkfag_.

Vi går nå et skritt videre med fag som er gitt/skal ha blokkid. Først spesifiseres hvor mange timer som fagene med gitt blokkid skal kunne legge beslag på. Vi benevner hver time med et blokknummer, og vi skal nå spesifisere hvor disse timene tenkes plassert på timeplanen. Selve timeplanleggingen av gruppene gjøres fra menyvalget _Grupper_, det er der en henter ut gevinsten av de forberedelsene vi gjør her.

Et blokknummer kan bare brukes til til en bestemt blokkid. Anta at vi eksempelvis benytter tilsammen 4 blokkid-er og at hvert av fagene skal ha fem uketimer. Da trenger vi 4*5=20 blokknummer siden hvert blokknummer representerer en undervisningstime.

Vi skal nå fastsette hvilken time på timeplanen hvert blokknummer representerer.

Gruppefag med like blokknumre skal altså undervises parallelt. Med utgangspunkt i fagenes blokkid og blokknummer vil timeplanleggingen av gruppefagene gå greit når vi kommer til  _Timeplan>Grupper_.

### Blokkskjema
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/28adb64a-612f-4396-b22d-94547fc60e61)

Eksempelvis skal skolen avsette 20 uketimer for timeplanlegging av gruppefagene som har fått blokkid. Da starter vi med å sette _Antall timer til valg (blokknr)_ til 20. Vi avsetter nå plass på timeplanen for disse 20 timene. Se på skjermbildet. 

Eksempel:
Anta at vi allerede har besluttet at fagene med blokkid=1 skal timeplanlegges med fem uketimer, og at vi ønsker å plassere en dobbel-timer på mandag og onsdag og en time på fredag. Da plasserer vi dobbeltimen på mandag slik:
- Klikker på _Blokknr_ 1 (Tallet en markeres og linjen farges grønn)
- Klikk på timen mandag 12-13:00

Skjermbildet er da endret:

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/6dddf0a7-d1f1-42c1-b759-38a134d59e07)

Tilsvarende legges de øvrige fire timene inn. Merk at disse timene bare er markert md _Blokknr_, ikke med blokkid=1 som nevnt innledningsvis. 
Etter å ha passert de fire planlagte timene som nevnt innledningsvis fås dette skjermbilde:

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/75c759e7-72c8-4d12-8c26-e8371d0bdb12)

Vi kan nå gå videre for å knytte disse blokknr til blokkid 1. Se da på

### Gruppering av timer til valg
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/e845edce-c4e5-4a27-8de8-9ba7f822401a)
Her redigeres hvilke blokknummer som det enkelte blokkid skal tilhøre. Dette viser inndirekte hvordan vi planlegger timeplanen for gruppefagene som har blokkid.

#### Blokkid
Fagene tildeles blokkid fra _Grunnlagsdata > Grupper_, eller fra fanen _Blokkfag_.   Man kan benytte inntil 10 blokker.
Fag som skal gå parallelt tildeles samme blokkid. Hvert blokkid har en samling av blokknummer. Antall blokknummer til et blokkid viser hvor mange uketimer faget er tildelt. Dette gjøres for å kunne effektivisere timeplanleggingen av gruppefag (se _Timeplan>Grupper_). 

#### Blokknr
Hvor timene til de enkelte blokkid-er er tenkt plassert på timeplanen angis med blokknummer. Eneste krav er at et blokknr bare kan være registrert til et blokkid. 

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
