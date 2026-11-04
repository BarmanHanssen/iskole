---
id: gd_fagklasse
title: Gjesteklasser
sidebar_label: Gjesteklasser
---
Det er mulig å slå sammen to, eller flere klasser, for felles undervisning i et bestemt fag. Altså at elevene fra flere klasser har felles undervisning i en klasse.

Dersom elevene skal grupperes på annen måte, altså ikke sammenslåing av hele klasser, benytter vi gruppefag. Gruppefagregistreres under menyvalget [Fag](/docs/gd_fag), og gruppene opprettes under [Grupper](/docs/gd_grupper).

Fellesfaget kan bare ligge i en klasse da en elev bare kan følge et bestemt fag i en gruppe/klasse. Klassen hvor undervisningen skal foregå (omtales som moderklassen) blir "eier" av faget. Klassene med de øvrige elevene kaller vi for **gjesteklasser**. 

**Eksempel:** To klasser (A og B) har kroppsøving sammen i A-klassen. Da er faget registrert i A-klassen, og skal under menyvalget _Klasser_ ikke finnes blant B-klassens fag.

Gjesteklassene kan være fra andre trinn og andre utdanningsprogram enn moderklassen. Elevene i gjesteklassene får faget, og følger moderklassens timeplan og lærer i faget.

![Gjesteklasser-oversikten med knapperaden, filterfeltet og ta](/img/gd_fagklasse_oversikt.png 'Gjesteklasser-oversikten med knapperaden, filterfeltet og ta')

:::tip Tips
ST1B skal være gjesteklasse i ST1A i faget GEO, men klasse ST1B finnes ikke i listen over tilgjengelige gjesteklasser. Grunnen vil da være at ST1B har GEO (eller et annet fag med samme fagkode) som et av sine klassefag. Fra menyvalget [Klasser](/docs/gd_klasse) fjernes klassefaget GEO i ST1B. Da vil klassen kunne bli gjest i ST1A. For fag uten karakter (fagkode 999999, for eksempel klassens time) er det fag med samme kortnavn som stenger.
:::

## Oversikten {#oversikten}
Hver rad er ett fag i en moderklasse. _Klassefag_ viser moderklassen og fagets kortnavn (for eksempel _AP3D HIS_), og _Gjesteklasser_ viser klassene som er gjester i faget. Feltet over tabellen filtrerer på begge kolonnene. Klikk på en rad for å velge den. Da blir knappene _Endre gjesteklasser..._ og _Slett..._ tilgjengelige.

De samme opplysningene står i kolonnene _Fag (Er gjest i klasse)_ og _Har gjesteklasser_ under [Klasser](/docs/gd_klasse#oversikten).

## Legg til gjesteklasser {#legg-til-gjesteklasser}
1. Klikk _Legg til..._.
1. Velg moderklassen under _Klasse_ og faget under _Fag_. Fagene i listen er klassefagene moderklassen har fra [Klasser](/docs/gd_klasse).
1. Under _Velg gjesteklasser_ står klassene som kan bli gjester, i listen _Tilgjengelige_. Huk av klassene (eller _Velg alle_) og flytt dem til _Valgte_ med den grønne pilen. Den røde pilen flytter dem tilbake.
1. Trykk _Lagre_.

![Dialogen Endre gjesteklasser for AP3D HIS med listene Tilgje](/img/gd_fagklasse_dialog.png 'Dialogen Endre gjesteklasser for AP3D HIS med listene Tilgje')

Når en gjesteklasse lagres, får alle elevene i klassen faget.

Før en ny gjesteklasse lagres, sjekkes timeplanen fra i dag og framover: Har elevene i gjesteklassen andre timer (klassefag eller gruppefag) samtidig med fagets timer i moderklassen, lagres ingenting, og du får meldingen _ST1B ville fått kollisjon på timeplanen - avbryter lagring!_ (med den aktuelle klassen).

Minst én klasse må stå under _Valgte_. Ellers får du meldingen _Det må velges minst en gjesteklasse for å lagre._

## Endre gjesteklasser {#endre-gjesteklasser}
Velg raden og klikk _Endre gjesteklasser..._. Klasse og fag ligger fast; bare gjesteklassene kan endres. Flytt klasser mellom _Tilgjengelige_ og _Valgte_ og trykk _Lagre_.

En klasse som flyttes tilbake til _Tilgjengelige_, er ikke lenger gjest, og elevene i den klassen mister faget. Har noen av elevene karakter, eksamen eller fravær i faget, lagres ingenting, og meldingen sier hvilken gjesteklasse det gjelder.

## Slette gjesteklasser {#slette-gjesteklasser}
Velg raden, klikk _Slett..._ og bekreft med _Ja_. Da fjernes alle gjesteklassene i faget på én gang, og elevene i gjesteklassene mister faget. Selve faget blir stående i moderklassen. Har elever i en av gjesteklassene karakter, eksamen eller fravær i faget, slettes ingenting, og meldingen sier hvilken gjesteklasse det gjelder.

Skal bare noen av gjesteklassene ut, bruker du _Endre gjesteklasser..._.
