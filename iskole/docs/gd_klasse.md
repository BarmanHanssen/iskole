---
id: gd_klasse
title: Klasser
sidebar_label: Klasser
---

Når _Klassetrinn_ er registrert (se _Utdanning_), kan man her spesifisere hvilke klasser skolen skal ha på klassetrinnet, og deretter hvilke _Fag_ som skal knyttes til den enkelte klasse. For store skoler vil det kunne være flere klasser på hvert klassetrinn. 

Eksempel fra skole hvor fagene allerede er lagt til:
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/1aaa3b62-1a8d-4066-83d6-dc9f3e81a79d)


:::tip Tips
Kolonnene _(Er Gjest i klasse)_ og _Har gjesteklasse_ blir omtalt under menyvalget _Gjesteklasser_.
:::

## Legg til klasse
Klikk på knappen _Legg til..._. Følgende skjermbilde vises:

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/ba556c8b-4d5c-45d0-8e04-3ae0e64dc51b)

- _Klassetrinn_: Nedtrekkslisten henter data fra menyvalget _Utdanningsprogram_.
- _Klasseid_: Her velges en bokstav eller tall. Sammentrekking av  _Klassetrinn_ og _Klasseid_ gir navnet på denne klassen (se kolonnen _Klasse_). 
- _Velg programkode_: Her får man opp en omfattende liste som dekker både grunnskole og videregående skole. Man kan filtrere ved skrive inn tekst, eksempelvis:
![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/c8f40fe2-4a4c-4161-9d7e-41e1aa988e58)
- _Dokumentasjonstype_: Vitnemål gjelder som regel for fagene i avgangsklassene. (Flere muligheter på elevnivå, eksempelvis kompetansebevis eller karakterutskrift.)
- _Rom_: Dersom klassens stort sett benytter et bestemt klasserom kan det markeres her. Letter arbeidet for timeplanlegger, da dette rommet er forhåndsvalgt. Men timeplanlegger står fritt til å velge annet rom.
- _Maksimalt elevantall_: Kan noteres, men klassen kan ha flere elever.
- _Klassen inngår i eksport til læringsplattform_: Dersom skolen også benytter eksempelvis ItsLearning, avhukes det her.
- _Kostnadssted_: Brukes i hovedsak i budsjett-sammenheng. Ta gjerne kontakt dersom skolen din ønsker nærmere orientering om dette.
- _Tilgjengelige fag_: Når ny klasse er lagt inn kommer alle fag som er lagt inn for klassetrinnet fra menyvalget _Fag_ frem. Aktuelle fag for klassen flyttes over fra _Tilgjengelige fag_ til _Valgte fag_.

Når utfyllingen er gjort, trykkes _Lagre_.

## Endre klasse
Alle opplysninger, med unntak av klasseid, kan endres ved å klikke på knappen _Endre..._. Tilsvarende bilde som ved opprettelse av ny klasse vil vises.

:::tip Dersom klassen skal ha et fag som ikke står i listen under _Tilgjengelige fag (Uketimer:)_, må faget registreres fra menyvalget _Fag_. 

Etter at faget er opprettet klikk på ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/eb9dcc07-e0a4-4db0-b891-c1bda5658efc) for å få plassert faget i klassen.

_Antall elever_: Kolonnen viser elever som alt er tatt inn i den enkelte klasse. Når ny klasse legges inn, er tallet lik null.
:::
:::caution Advarsel
Hvis man tar ut et fag av klassen etter skolestart, så vil alle elevene i klassen miste faget, og faget mister læreren fra time- og fagfordelingen, og timeplanlagte timer blir slettet. Men før sletting finner sted, får en opp beskjed om hva som står på spill, og man kan avbryte slettingen...
:::

## Slette en klasse
Sletting av en klasse har store konsekvenser. Dersom klassen slettes går følgende tapt:
1. Klassens timeplan slettes
1. Lærerne som underviser i klassen mister ressursene

Ved sletting vil man få overstående advarsel og man må bekrefte med navnet til klassen at klassen virkelig skal slettes.

:::warning Merk
Det er ikke mulig å slette klasser som har elever registrert. Disse elevene må først flyttes eller slettes.
:::