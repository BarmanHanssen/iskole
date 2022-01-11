---
id: gd_oppslagsdata
title: Oppslagsdata
sidebar_label: Oppslagsdata
---
Her er samlet en gruppe tabeller, de fleste kommer fra Utdanningsdirektoratet. Innholdet er definert av UDIR, og kan ikke endres av brukerne av iSkole. Tabellene innholdet data som etterspørres og benyttes av iSkole.

Registeret ble først utarbeidet for videregående skole. Men nå inneholder det også data for grunnskolen, og for Steinerskolen. 

For å begrense hva som vises, kan en legge inn filter i raden over navnet på kolonnene.

#### _Utdaningsprogram_

Merk at grunnskolen bare er representert med en kode, GS, mens videregående skole har et finmasket kodeverk for å angi innholdet i utdanningen. Teksten herfra benyttes ved utskrift av blant annet av kompetansebevis og vitnemål. Kompetansebevis og vitnemål kan også utskrives med engelsk tekst.

:::note Tips
Dersom ingen av tekstene er dekkende, kan man benytte --
:::

![bilde](https://user-images.githubusercontent.com/80097133/148767105-e055bd1a-2d0d-49d2-af6d-eeb5be250ce6.png)

#### _Programområde_

Når en ny klasse opprettes, fra menyvalget _Klasse_, etterspørres _Programkode_. Koden som kan legges inn må hentes fra tabellen som her heter _Programområde_. Hver kode er knyttet til ett, og bare ett, _Utdanningsprogram_, som automatisk følger med på lasset. Utgåtte koder er røde.

#### _Programområder-standpunkt_

#### _Fagkoderegister_

![bilde](https://user-images.githubusercontent.com/80097133/148937507-67d7138e-6e9a-4962-9418-539a230a6f48.png)

Alle fag som er godkjent av UDIR er samlet i denne tabellen. Den inneholder mer enn 17 00 rader! Fagkodene som er utgått per dags dato er markert med rød farge. På udir.no finner man fagplaner mm for hvert fag. Vet du navnet på faget, men ikke fagkode, skriv da inn første del av navnet i feltet over _Fagnavn_.

#### _Vurderingsform_

Her vises godkjente koder for hva som er grunnlaget for karakteren som settes på fagene som skal utskrives på kompetansebevis/vitnemål. Merk at her er også tysk medtatt, men vi ingen offisielle fagnavn på tysk i fagkoderegisteret.

#### _Fagmarknader_

Kodeverket gjelder for videregående skoler. Udir har en gruppe merknader som skal kunne brukes ved utskrift av kompetansebevis/vitnemål. Disse FAM-kodene skal benyttes på elevnivå, se _Elevadmin>Karakterdokumentasjon_ og _Elevadmin>Karakterer/FAM_. Utgåtte fagmerknader vises også, men da med rød skrift.

#### _Ekskluderende fag_

Noen fag, typisk norskfaget, tas over flere år. Men på kompetansebevis/vitnemål skal bare fagkoden på høyeste nivå, ofte på vg3-nivå, tas med.  Andre fag som tas over flere år, typisk fysikk/kjemi/engelsk, har ikke dette opplegget, da de kan avsluttes uten å ta høyeste nivå. Denne tabellen fås ikke fra Udir, så det er vi som må legge til nye fagkombinasjoner når det skjer endringer. Dette kan skje ved at bruker av iSkole gir beskjed til oss, eksempelvis via support@barman-hanssen.no. Når slike fakoder er lagt inn, vil utskrift av kompetansebevis/vitnemål automatisk sløyfe fagene på underliggende nivå.

#### _Toterminsfag_
Noen fag,eksempelvis norsk, skal først dokumenteres på kompetansebevis/vitnemål, da med standpunkt og/eller eksamensvurdering. Slike fag skal da ha termin 2-karakter på årstrinn før avgangsårstrinnet. Dette kunne skape forvinklinger før denne tabellen var på plass og kunne holde orden! Nå tillater iSkole at bare termin 2-vurdering kan settes for fag som er listet opp her. For alle andre fag vil det være standpunkt-vurdering som gjelder.

#### _Sum omfang_

Fag som går over flere år, eksempelvis norsk, har egen fagkode for hvert årstrinn. Årstimetallet forteller omfanget av undervisning for faget det året faget tas.
Da oppstår et problem ved utskrift av kompetansebevis/vitnemål, noe som løses her. Nemlig at på utskriften skal timetallet vise summen av timer over flere år, og ikke timetallet som hører til fagkoden, altså årets timetall. Også denne tabellen oppdateres av oss. Dersom noe ikke stemmer, gi beskjed til oss, eksempelvis via support@barman-hanssen.no!
