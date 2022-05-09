---
id: timeplan_definer_blokknr
title: Definer blokknr
sidebar_label: Definer blokknr
---
Når undervisning i et fag har elever fra ulike klasser, klassifiseres faget som gruppefag. Merk at dersom klassens elever i et klassensfag deles i flere grupper, skal også dette faget klassifiseres som gruppefag.

Dersom man ut fra det ovenstående ikke har behov gruppefag, skal man ikke å avhuke for _Bruker blokkskjema_. Uten gruppefag skal all undervisning i fag foregå i klassen med alle elevene samlet, og fagene er klassifisert som klassefag. Da er det ikke mer å gjøre her, og man kan gå til neste menyvalg som da vil være _Timeplanlegge klasse_.

## Blokkskjema

Dersom skolen skal ha gruppefag, må man huke av for _Bruker blokkskjema_. Registreringen av aktuelle gruppefag skjer fra _Grunnlagsdata>Fag_. Hvilke gruppefag som skal benyttes inneværende skoleår registreres fra _Time- og fagfordeling>Gruppefag_, og må være utført før elevene kan velge gruppefag. Men man kan klargjøre oppsettet her uten at gruppefagene og elevene er på plass.


![image](https://user-images.githubusercontent.com/80097133/118969549-775ba280-b96d-11eb-875d-2cb24fbd8dd7.png)

Vi registrer hvordan vi har tenkt å sette opp timeplanen for gruppefagene, uten nødvendigvis ennå å ha oversikt over hvilke grupper som skal igangsettes. Vi skal fastsette et rammeverk som gjør det enkelt å gruppere fag som skal undervises parallelt. Når undervisningen eksakt skal finne sted gjøres fra menyvalget _Timeplanlegge blokknr_.

### _* Antall timer til valg (blokknr)_
Gruppefagene har typisk fem undervisningstimer per uke. Vanlig oppsett for videregående skoler er at man planlegger for opptil 35 uketimer til undervisning. Herav planlegges det gjerne å avsette 25 til 30 timer per uke  til undervisning av gruppefag, hvilket tilsvarer 5 eller 6 Id-er (hvor hvert fag typisk tildeles en Id, og hvor hver Id legger beslag på 5 blokknr, altså 5 timer). Timetallet settes til minimum _Antall blokid_ x 5, og kan oppjusteres ved behov.

## Gruppering av timer til valg
Det er mulig å benytte gruppefag, og timeplanlegging av disse, uten å benytte ID, eller koplingen mellom ID og blokknr. Men det anbefales å benytte denne muligheten, da det gir bedre oversiikt, og letter arbeidet videre.

Vi grupperer på to måter:
- ID: Fag med lik ID skal ha lik timeplan. Altså kan en elev bare velge gruppefag med ulike ID-er.
- Blokkknr: Her spesifiseres timene, før timeplanen er bestemt. Et bestemt blokknr kan bare benyttes en gang.

Gruppefagene kan knyttes til en ID fra _Time- og fagfordeling>Gruppefag_, begrenset til de registrerte ID-er som er lagt inn her. Dersom elevene selv skal kunne få velge gruppefag for neste skoleår: Se _Mine sider>Tilgang>Elevers valg av programfag_.

### Blokknr
Dersom man benytte fortløpende nummerering av Blokknr gir det  god visuell oversikt når gruppefagene tildeles Blokknr. Vanligvis har gruppefagene 5 timer per uke. Fag med mindre enn 5 timer kan ligge i en blokk med 5 timer, hvilke bloknr som skal benyttes bestemmes av timeplanlegger (registreres fra _Blokknr gruppefag_). Dersom noen fag har mer enn 5 timer, kan de overskytende timer plasseres manuelt fra _Blokknr gruppefag_. 

:::note Tips
Dersom gruppene gis ID fra _Time- og fagfordeling>Gruppefag_ (anbefales!), vil plassering av blokknumrene på fagene (fra _Blokknr gruppefag_) gå raskt. Blokknumrene kan da plasseres på hvert fag ut fra fagets ID.
:::
 
### Trinn 
Benyttes dersom elevene selv skal kunne velge gruppefag for neste skoleår. For at elevene skal kunne valge gruppefag for neste skoleår kreves følgende: 
- Neste års planperiode er opprettet. (Se Grunnlagsdata>Planperiode)
- Gruppefagene som skal kunne velges er opprettet i neste års planperiode, og tildeldelt ID. (Se Time- og fagfordeling>Gruppefag)
- Årets elever som skal kunne velge gruppefag må flyttes opp til neste planperiode. (Se Elevadmin.>Oppflytting)
- Det er åpnet et tidsintervall fra årets planperiode for når valget kan finne sted. (Se Mine sider>Tilgang>Elevers valg av gruppefag)

Det er altså årets vg1- og vg2-elever som er aktuelle kandidater til å velge gruppefag for neste skoleår. De blir da henholdsvis vg2- og vg3-elever og kan velge fag registrert med ID, og kan kun velge fag med ulik ID. 

Se figuren ovenfor: Eksempelvis kan neste års vg2-elever (trinn 2) bare kunne velge to gruppefag, nemlig et fag som har ID=4, og et fag som har ID=5. Vg3-elevene har her hele 5 grupper fag å velge mellom!
