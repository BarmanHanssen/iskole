---
id: gd_oppslagsdata
title: Oppslagsdata
sidebar_label: Oppslagsdata
---
Tabellene kommer fra Utdanningsdirektoratet (UDIR) og kan ikke endres av brukerne av iSkole. 

Tabellene inneholder data som benyttes i iSkole. Tabellene dekker videregående skole, fagskolen, grunnskolen, Steinerskolen og Montessoriskolen. 

<mark>Hver tabell ligger i sin egen fane: _Utdanningsprogram_, _Programområde_, _Fagkoderegister_, _Vurderingsform_, _Fagmerknader_, _Ekskluderende fag_, _Toterminsfag_ og _Sum omfang_. Fanene som ikke får plass, finner du under de tre prikkene til høyre.</mark>

For å begrense hva som vises, kan en legge inn filter. Da vises rader som inneholder filteret i en eller flere av kolonnene som vises. <mark>Skriver du flere ord, må alle ordene finnes i raden. Fagkoderegisteret har egne søkefelt, se [Fagkoderegister](#fagkoderegister).</mark>

## Utdanningsprogram

Merk at grunnskolen bare er representert med en kode, GS, mens videregående skole har et finmasket kodeverk for å angi innholdet i utdanningen. Teksten herfra benyttes ved utskrift av blant annet kompetansebevis og vitnemål. Kompetansebevis og vitnemål kan også utskrives med engelsk tekst.

:::tip Tips
Dersom ingen av tekstene er dekkende, kan man benytte --
:::

<div class="nytt-bilde">

![Oppslagsdata med fanene, filterfeltet og tabellen Utdannings](/img/gd_oppslagsdata_utdanningsprogram.png 'Oppslagsdata med fanene, filterfeltet og tabellen Utdannings')

</div>

## Programområde

Når en ny klasse opprettes, fra menyvalget <del>_Klasse_</del> <mark>[_Klasser_](/docs/gd_klasse)</mark>, etterspørres _Programkode_. Koden som kan legges inn må hentes fra tabellen som her heter _Programområde_. Hver kode er knyttet til ett, og bare ett, _Utdanningsprogram_, som automatisk følger med på lasset. <del>Utgåtte koder er røde.</del> <mark>Tabellen viser også årstimer og hvilken periode koden er gyldig i. Utgåtte koder er skjult. Huk av for _Vis utgåtte programmer_ for å se dem, med rød skrift.</mark>

<!-- ## Programområder-standpunkt -->

## Fagkoderegister <span class="endret">ENDRET</span> {#fagkoderegister}

<div class="nytt-bilde">

![Fanen Fagkoderegister med Sist oppdatert, knappen Oppdater f](/img/gd_oppslagsdata_fagkoderegister.png 'Fanen Fagkoderegister med Sist oppdatert, knappen Oppdater f')

</div>

:::tip Tips
Mangler en fagkode? Påse at skolens fagkoderegister er oppdatert! <mark>Se [Oppdater fagkoderegisteret](#oppdater-fagkoderegisteret).</mark> På udir.no finner man fagplaner mm for hvert enkelt fag som er oppført i tabellen.
:::

Alle fag som er godkjent av UDIR er samlet i denne tabellen. <del>Den inneholder mer enn 18 000 rader! Fagkodene som er utgått per dags dato er markert med rød farge. Vet du navnet på faget, men ikke fagkoden, skriv da inn første del av navnet i feltet over _Fagnavn_.</del>

<mark>Skriv i _Søk fagkode..._ og/eller _Søk navn..._ og klikk _Søk_. Det holder å skrive en del av koden eller navnet, og navnesøket gjelder alle språkene. _Nullstill søk_ viser hele registeret igjen. Fagkoder som er gått ut, er ikke med. Huk av for _Vis utgåtte fagkoder_ for å ta dem med.</mark>

### Oppdater fagkoderegisteret <span class="ny">NY</span> {#oppdater-fagkoderegisteret}
Fagkoderegisteret er felles for alle skolene i iSkole. _Sist oppdatert_ viser når nye og endrede fagkoder sist ble hentet fra Udir. Klikk _Oppdater fagkoderegister_ for å hente fagkodene som er kommet til eller endret hos Udir siden da. Det kan ta litt tid hvis det er lenge siden sist. Knappen viser _Oppdaterer..._ så lenge det pågår. Til slutt får du vite hvor mange fagkoder som ble lagt til eller endret, og eventuelt hvilke som ikke kunne oppdateres.

## Vurderingsform

<div class="fjernet">

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/87b9716c-4d15-49e8-9f65-af1b2f88fb0a)

</div>

Her vises kodene som benyttes for de enkelte vurderingsalternativ som er definert. Vurderingsformen (gitt med en eller to bokstaver) tas med på kompetansebevis og vitnemål.

## Fagmerknader

Udir har en gruppe merknader som skal kunne brukes ved utskrift av kompetansebevis/vitnemål. Disse FAM-kodene skal benyttes på elevnivå, se _Elevadmin>Karakterdokumentasjon_ og _Elevadmin>Karakterer/FAM_. Utgåtte fagmerknader vises også<del>, men da med rød skrift</del>.

## Ekskluderende fag

Noen fag, typisk norskfaget, tas over flere år. Men på kompetansebevis/vitnemål skal bare fagkoden på høyeste nivå, ofte på vg3-nivå, tas med.  Andre fag som tas over flere år, typisk fysikk/kjemi/engelsk, har ikke dette opplegget, da de kan avsluttes uten å ta høyeste nivå. Denne tabellen fås ikke fra Udir, så det er vi som må legge til nye fagkombinasjoner når det skjer endringer. Dette kan skje ved at bruker av iSkole gir beskjed til oss, eksempelvis via support@barman-hanssen.no. Når slike fagkoder er lagt inn, vil utskrift av kompetansebevis/vitnemål automatisk sløyfe fagene på underliggende nivå. <mark>Hver rad er et par: fagkoden i venstre kolonne gjør at fagkoden i høyre kolonne ikke tas med. Filteret søker også i fagnavnene.</mark>

## Toterminsfag
Ved skoleårets slutt skal elevens fagkarakter innføres enten som standpunkt-, eller som 2. halvårs-karakter, altså ikke begge deler. Regelen er at standpunkt bare settes når faget avsluttes. Norsk og kroppsøving er eksempler på fag hvor det kunne være lett å føre feil. Denne tabellen holder orden! Nå tillater iSkole at termin 2-vurdering bare kan settes for fag som er listet opp her. For alle andre fag vil det være standpunkt-vurdering som gjelder.

## Sum omfang

Fag som går over flere år, eksempelvis norsk, har egen fagkode for hvert årstrinn. Årstimetallet forteller omfanget av undervisning for faget det året faget tas. Da oppstår et problem ved utskrift av kompetansebevis/vitnemål, noe som løses her. Noen fag, som norsk, skal bare faget tatt på høyeste nivå tas med på utskriften. Da skal timetallet summert frem til avslutning i faget fremkomme, altså ikke avslutningsårets timetall.

Denne tabellen oppdateres av oss. Dersom et slikt fag ikke ligger inne her, så gi beskjed til oss, eksempelvis via support@barman-hanssen.no!
