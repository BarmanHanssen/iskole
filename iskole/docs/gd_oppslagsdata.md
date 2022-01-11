---
id: gd_oppslagsdata
title: Oppslagsdata
sidebar_label: Oppslagsdata
---
Her er samlet en gruppe tabeller fra Utdanningsdirektoratet. Innholdet er definert av UDIR, og kan ikke endres fra iSkole. Tabellene innholdet data som etterspørres og benyttes av iSkole.Fagkoderegisteret er tabellen med flest rader, her finner mer enn 17 000 rader.

Registeret ble først utarbeidet for videregående skole. Men nå inneholder det også data for grunnskolen, og for Steinerskolen. 

For å begrense hva som vises, kan en legge inn filter i raden over navnet på kolonnene.

#### _Utdaningsprogram_

Merk at grunnskolen bare er representert med en kode, GS, mens videregående skole har et finmasket kodeverk for å angi innholdet i utdanningen. Teksten herfra benyttes ved utskrift av blant annet av kompetansebevis og vitnemål. Kompetansebevis og vitnemål kan også utskrives med engelsk tekst.

:::note Tips
Dersom ingen av tekstene er dekkende, kan man benytte --
:::

![bilde](https://user-images.githubusercontent.com/80097133/148767105-e055bd1a-2d0d-49d2-af6d-eeb5be250ce6.png)

#### _Programområde_

Teksten herfra benyttes ved utskrift av blant annet av kompetansebevis og vitnemål. Når en klasse opprettes, fra menyvalget _Klasse_, etterspørres _Programkode_. Koden som kan legges inn må hentes fra denne tabellen. Hver kode er knyttet til ett _Utdanningsprogram_ som automatisk følger med på lasset. Utgåtte koder er røde.

#### _Programområder-standpunkt_

#### _Fagkoderegister_

![bilde](https://user-images.githubusercontent.com/80097133/148937507-67d7138e-6e9a-4962-9418-539a230a6f48.png)

Alle fag som er godkjent av UDIR er samlet i denne tabellen. Den inneholder mer enn 17 00 rader. Fagkodene som er utgått per dags dato er markert med rød farge. På udir.no finner man fagplaner mm for hvert fag. Vet du navnet på faget, men ikke fagkode, skriv da inn første del av navnet i feltet over _Fagnavn_.

#### _Vurderingsform_

Her vises godkjente koder for hva som er grunnlaget for karakteren som settes på fagene som skal utskrives på kompetansebevis/vitnemål. Merk at her er også tysk medtatt, men vi ingen offisielle fagnavn på tysk i fagkoderegiisterer.

#### _Fagmarknader_

Fagmerknader, fastsatt av UIR,  som kan benyttes på kompetansebevis/vitnemål for videregående skoler.

#### _Ekskluderende fag_

#### _Toterminsfag_

#### _Sum omfang_




Arkfanen "Fagmerknader" viser alle FAM-kodene. Kodeverket gjelder for videregående skoler. Udir har en gruppe merknader som skal kunne brukes ved utskrift av vitnemål/Kompetansebevis. Her vises oversikten over gjeldende koder. Disse FAM-kodene kan benyttes på elevnivå, se Elevadmin>Karakterdokumentasjon og Elevadmin>Karakterer/FAM. Utgåtte fagmerknader vises også, men da med rødskrift.

