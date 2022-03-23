---
id: timeplan_definer_blokknr
title: Definer blokknr
sidebar_label: Definer blokknr
---
Dersom skolen har fag hvor elever fra ulike klasser er sammen for undervisning i faget, klassifiseres slike fag som gruppefag. Merk at dersom klassens elever deles i flere grupper i samme fag, benyttes også gruppefag.

Dersom man ut fra det ovenstående ikke har behov gruppefag, skal man ikke å avhuke for _Bruker blokkskjema_. Uten gruppefag skal all undervisning i fag foregå i klassen med alle elevene samlet, og fagene er klassifisert som klassefag. Da er det ikke mer å gjøre her, og man kan gå til neste menyvalg som da vil være Timeplanlegg klasse!

## Blokkskjema

Dersom skolen skal ha gruppefag, må man huke av for _Bruker blokkskjema_. Registreringen av aktuelle gruppefag skjer fra _Grunnlagsdata>Fag_. Hvilke gruppefag som skal benyttes inneværende skoleår registreres fra _Time- og fagfordeling>Gruppefag_, og må være utført før elevene kan velge gruppefag. Men man kan klargjøre oppsettet her uten at gruppefagene og elevene er på plass.


![image](https://user-images.githubusercontent.com/80097133/118969549-775ba280-b96d-11eb-875d-2cb24fbd8dd7.png)

Det vi registrer her er hvordan vi har tenkt å sette opp timeplanen for gruppefagene, uten nødvendigvis ennå å ha full oversikt over hvilke grupper som skal igangsettes. Det vi skal fastsette er et rammeverk som gjør det enkelt å gruppere fag som skal undervises parallelt. Når undervisningen eksakt skal finne sted gjøres fra menyvalget _Timeplanlegge blokknr_.

### _* Antall timer til valg (blokknr)_
Gruppefagene har typisk fem undervisningstimer per uke. Vanlig oppsett for videregående skoler er at man planlegger for 35 uketimer til undervisning. Herav planlegges det å bruke 25 til 30 timer per uke  til undervisning av gruppefag, hvilket tilsvarer 5 eller 6 Id-er (hvor hvert fag typisk tildeles en Id, og hvor hver Id legger beslag på 5 blokknr, altså 5 timer). Maksimalt kan antall timer til gruppefag være lik antall timer som er satt opp fra valget Time. Timetallet settes til minimum _Antall blokid_ x 5, og kan oppjusteres ved behov.

## Gruppering av timer til valg

### Antall blokk id
Vi anbefaler at en benytter en fortløpende nummerering av Blokknr. Det gir bedre visuell oversikt når gruppefagene for tildelt Blokknr. 
Fag som skal gå parallelt (ha lik timeplan) markeres ved at de har samme Id (Id for faget registreres fra _Time- og fagfordeling>Gruppefag_). Vanligvis har gruppefagene 5 timer per uke. Fag med mindre enn 5 timer kan ligge i en slik blokk, hvilke bloknr som skal benyttes bestemmes av timeplanlegger (registreres fra _Blokknr gruppefag_). Dersom noen fag har mer enn 5 timer, kan de overskytende timer plasseres fritt. 

:::note Merk
Et blokknummer representerer en spesifikk tidfestet time. Det innebærer at to forskjelllige blokknummer ikke kan ha samme start- og slutt-tid på samme dag. Et fag med tre timer kan være plasert med blokkid=1. At faget bare skal ha tre timer spesifiseres nå vi setter inn _Blokknr gruppefag_. Tilsvarende kan et fag med 7 timer ha 5 timer definert ut fra en bestemt blokkid. De to resterende timer gis blokknr direkte fra _Blokknr gruppefag_. De to siste timene kan da ha blokknr som ikke finnes innenfor noen id.
:::

:::note Tips
Dersom gruppene gis ID fra _Time- og fagfordeling>Gruppefag_ (anbefales!), vil plassering av blokknumrene på fagene (fra _Blokknr gruppefag_) gå raskt. Blokknumrene kan plasseres på hvert fag ut fra fagets ID.
:::

### Trinn 
Benyttes dersom elevene selv skal kunne velge gruppefag for neste skoleår. Se figuren ovenfor: Eksempelvis kan vg1-elever (trinn 1) bare velge fag som fra _Time- og fagfordeling>Gruppefag_ er markert med id=6. Kan stå blankt hvilket betyr at fag med Id lik 6 ikke vil være valgbar for elevene som selv kan velge gruppefag. 
