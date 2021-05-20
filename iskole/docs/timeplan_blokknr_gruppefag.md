---
id: timeplan_blokknr_gruppefag
title: Blokknr gruppefag
sidebar_label: Blokknr gruppefag
---

## Innledning
Skjermbildet viser hvordan fagene er gruppert i forhold til hverandre. Gruppefag med lik timeplan har like blokknumre. Hvilken dag og time hvert blokknummer skal ha, registreres fra menyvalget _Timeplanlegge blokknr_.

Hvert blokknummer representerer altså en bestemt dag og time på timeplanen. Men blokkskjemaet kan settes opp før man har bestemt hvilken dag
og time det enkelte blokknummer skal tildeles. 
Vi velger først hvilken uke vi skal legge inn blokknr for, første skoleuke anbefales. Det er komplisert, og derfor sjeldent aktuelt, å endre på oppsettet som gjøres her. Det innebærer at når man har ferdigstilt registrering i første skoleuke, så kopierer man resultatet til resten av skoleåret. Justeringer senere kan selvsagt gjøres, da systemet til enhver tid vil kontrollere at ikke kollisjoner oppstår.

Eksempel hvor blokknumrene er lagt inn på gruppefag:
![image](https://user-images.githubusercontent.com/80097133/118975143-f81d9d00-b973-11eb-85e2-40dfb2a2bcef.png)

## Registrering av blokknr på gruppefag
Når man markerer et fag, vil fagets navn, faglærer, timer (for denne uken) og rom vises under tabellen med alle gruppefagene. Velger nå ST3:ESA 1 fra skjermbildet ovenfor:

![image](https://user-images.githubusercontent.com/80097133/118976457-513a0080-b975-11eb-80d5-79a9b382adae.png)

Timetallet er det mulig å endre. Det er hentet fra _Grunnlagsdata>Fag_ og kan endres også derfra. 
Rom Z107 er også hentet fra _Grunnlagsdata>Fag_ og vil bli foreslått når Romnr skal utfylles, og er her blitt eerstattet med Y202.
Dersom faget er gitt ID fra _Time- og fagfordeling>Gruppefag_, vil alle fem timene kunne få innført sine respektive blokknr med et museklikk. Dersom faget ID ikke er innført, må en legge inn blokknr time for time. 
Når man tryykker på _Lagre_, vil systemet sjekke at valget av blokknr og rom ikke medfører kollisjon mot allerede timeplanlagte aktiviteter.

:::note Merk
Det kan være aktuelt å gjøre endringer for en eller flere uker. Eksempel: I løpet av skoleåret skal et fag ha flere timer en periode, og færre timer en annen periode ("ploging"). Færre timer kan en fremskaffe ved ikke fylle ut blokknr for timer som skal utgå. For å kunne legge til ekstra timer må man øke timetallet og legge inn blokknr og rom på ekstratimene.
:::

- Registrere blokknr og romnr

Dersom faget har ID (registreres fra Definer blokkr, og fra Time- og fagfordeling>Gruppefag) kan alle blokknr for faget plasseres med et tastetrykk.
Dersom faget har et foretrukket rom (registrert fra Grunnlagsdata>Fag>Gruppefag), foreslås dette rommet.
Dersom en må gjøre dette manuelt, vil det rommet en ført forslår følge med videre, men det kan endres underveis. Dersom blokknr er i rekkefølge: Legg inn det førstee blokknr for faget, videre kan førstevalget i nedtrekksliste benyttes: "<+1>"

Systemet vil sjekke at foreslåtte blokknr ikke kommer i konflikt med annen aktivtet for læreren. Dersom elever er registrert i gruppefag, gjøres også sjekk mot deres timeplan. Også romvalget kontrollleres.

- Endre blokknr

Et valgt blokknr kan når som helst byttes ut med et annet. Nytt blokknr kontrolleres på vanig måte (se ovenfor) før det kan lagres.
Dersom noen av timene skal utgår for en uke: Fjern blokknr for aktuelle timer.
Dersom faget skal utgå for en uke: Endre Timer til 0 (null).

Ingenting lagres før du trykker Lagre!
