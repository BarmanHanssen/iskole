---
id: gd_oppslagsdata
title: Oppslagsdata
sidebar_label: Oppslagsdata
---
Tabellene kommer fra Utdanningsdirektoratet (UDIR) og kan ikke endres av brukerne av iSkole. 

Tabellene innholdet data som benyttes i iSkole. Tabellene dekker videregående skole, fagskolen, grunnskolen, Steinerskolen og Montesorriskolen. 

For å begrense hva som vises, kan en legge inn filter. Da vises rader som inneholder filteret i en eller flere av kolonnene som vises.

#### _Utdaningsprogram_

Merk at grunnskolen bare er representert med en kode, GS, mens videregående skole har et finmasket kodeverk for å angi innholdet i utdanningen. Teksten herfra benyttes ved utskrift av blant annet av kompetansebevis og vitnemål. Kompetansebevis og vitnemål kan også utskrives med engelsk tekst.

:::tip Tips
Dersom ingen av tekstene er dekkende, kan man benytte --
:::

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/41bb7ad9-7f46-4c52-ba17-03b6fc125300)

#### _Programområde_

Når en ny klasse opprettes, fra menyvalget _Klasse_, etterspørres _Programkode_. Koden som kan legges inn må hentes fra tabellen som her heter _Programområde_. Hver kode er knyttet til ett, og bare ett, _Utdanningsprogram_, som automatisk følger med på lasset. Utgåtte koder er røde.

#### _Programområder-standpunkt_

#### _Fagkoderegister_

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/8c014ee7-77ef-4576-8747-911cf39a8db5)

##### Tips: Mangler en fagkode? Påse at skolens fagkoderegister er oppdatert! På udir.no finner man fagplaner mm for hvert enkelt fag som er oppført i tabellen.

Alle fag som er godkjent av UDIR er samlet i denne tabellen. Den inneholder mer enn 18 000 rader! Fagkodene som er utgått per dags dato er markert med rød farge.  Vet du navnet på faget, men ikke fagkoden, skriv da inn første del av navnet i feltet over _Fagnavn_.


#### _Vurderingsform_

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/87b9716c-4d15-49e8-9f65-af1b2f88fb0a)

Her vises kodene som benyttes for de enkelte vurderingsalternativ som er definert. Vurderingsformen (gitt med en eller to bokstaver) tas med på kompetansebevis og vitnemål.

#### _Fagmarknader_

Udir har en gruppe merknader som skal kunne brukes ved utskrift av kompetansebevis/vitnemål. Disse FAM-kodene skal benyttes på elevnivå, se _Elevadmin>Karakterdokumentasjon_ og _Elevadmin>Karakterer/FAM_. Utgåtte fagmerknader vises også, men da med rød skrift.

#### _Ekskluderende fag_

Noen fag, typisk norskfaget, tas over flere år. Men på kompetansebevis/vitnemål skal bare fagkoden på høyeste nivå, ofte på vg3-nivå, tas med.  Andre fag som tas over flere år, typisk fysikk/kjemi/engelsk, har ikke dette opplegget, da de kan avsluttes uten å ta høyeste nivå. Denne tabellen fås ikke fra Udir, så det er vi som må legge til nye fagkombinasjoner når det skjer endringer. Dette kan skje ved at bruker av iSkole gir beskjed til oss, eksempelvis via support@barman-hanssen.no. Når slike fakoder er lagt inn, vil utskrift av kompetansebevis/vitnemål automatisk sløyfe fagene på underliggende nivå.

#### _Toterminsfag_
Ved skoleårets slutt skal elevens fagkarakter innføres enten som standpunkt-, eller som 2. halvårs-karakter, altså ikke begge deler. Regelen er at standpunkt bare settes når faget avsluttes. Norsk og kroppsøving er eksempler på fag hvor det kunne være lett å føre feil. Denne tabellen holder orden! Nå tillater iSkole at termin 2-vurdering bare kan settes for fag som er listet opp her. For alle andre fag vil det være standpunkt-vurdering som gjelder.

#### _Sum omfang_

Fag som går over flere år, eksempelvis norsk, har egen fagkode for hvert årstrinn. Årstimetallet forteller omfanget av undervisning for faget det året faget tas. Da oppstår et problem ved utskrift av kompetansebevis/vitnemål, noe som løses her. Noen fag, som norsk, skal bare faget tatt på høyeste nivå tas med på utskriften. Da skal timetallet summert frem til avslutning i faget fremkomme, altså ikke avslutningsårets timetall.

Denne tabellen oppdateres av oss. Dersom et slikt fag ikke ligger inne her, så gi beskjed til oss, eksempelvis via support@barman-hanssen.no!
