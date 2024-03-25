---
id: timeplan_definer_blokknr
title: Blokk
sidebar_label: Blokk
---

:::info Ny versjon av iSkole
Vi har endret oppbyggingen av timeplane på iSkole, les mer om dette [her](https://dokumentasjon.iskole.net/blog/timeplan). Dokumentasjon av gammel løsning finner du [her](https://dokumentasjon.iskole.net/docs/timeplan_definer_blokknr_old). 
:::

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


