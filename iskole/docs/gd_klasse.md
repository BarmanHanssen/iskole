---
id: gd_klasse
title: Klasser
sidebar_label: Klasser
---

Når _Klassetrinn_ er registrert (se _Utdanning_), kan man her spesifisere hvilke klasser skolen skal ha på klassetrinnet, og deretter hvilke _Fag_ som skal knyttes til den enkelte klasse. For store skoler vil det kunne være flere klasser på hvert klassetrinn. 

Eksempel fra skole hvor fagene allerede er lagt til:
<div class="nytt-bilde">

![Klasser-oversikten med knapperaden, filterfeltet og tabellen](/img/gd_klasse_oversikt.png 'Klasser-oversikten med knapperaden, filterfeltet og tabellen')

</div>


:::tip Tips
<del>Kolonnene _(Er Gjest i klasse)_ og _Har gjesteklasse_ blir omtalt under menyvalget _Gjesteklasser_.</del> <mark>Kolonnene er forklart under [Oversikten](#oversikten). Hvordan en klasse blir gjest i en annen klasse i ett fag, står under [Gjesteklasser](/docs/gd_fagklasse).</mark>
:::

## Oversikten <span class="ny">NY</span> {#oversikten}
Tabellen viser alle klassene i valgt skoleår. Feltet over tabellen filtrerer på klasse, programkode, programnavn, dokumentasjonstype og rom. Klikk på en klasse for å velge den. Da blir knappene _Endre..._ og _Slett..._ tilgjengelige.

De fleste kolonnene viser feltene fra dialogen, se [Legg til klasse](#legg-til-klasse). I tillegg:

- _Antall elever_: Elevene som er i klassen nå. Elever som har sluttet, telles ikke med. Når ny klasse legges inn, er tallet null.
- _Fag (Er gjest i klasse)_: Klassens egne fag. I parentes står fagene klassen er gjest i hos en annen klasse, for eksempel _(AP3D KLT)_.
- _Har gjesteklasser_: Fag der andre klasser er gjester i denne klassen, skrevet som _fag:gjesteklasse_, for eksempel _KLT:LA1A_.

## Legg til klasse
Klikk på knappen _Legg til..._. Følgende skjermbilde vises:

<div class="nytt-bilde">

![Dialogen for en klasse (Endre klasse, LA1B) med feltene og l](/img/gd_klasse_dialog.png 'Dialogen for en klasse (Endre klasse, LA1B) med feltene og l')

</div>

- _Klassetrinn_: Nedtrekkslisten henter data fra menyvalget <del>_Utdanningsprogram_</del> <mark>_Utdanning_</mark>.
- _Klasseid_: Her velges en bokstav eller tall. <mark>Bare id-er som er ledige på klassetrinnet vises (A–Z, Æ, Ø og 1–9).</mark> Sammentrekking av  _Klassetrinn_ og _Klasseid_ gir navnet på denne klassen (se kolonnen _Klasse_). 
- _Velg programkode_: <mark>Knappen åpner dialogen _Velg programkode_.</mark> Her får man opp en omfattende liste som dekker både grunnskole og videregående skole<mark>, med programområdene som gjelder for skoleåret</mark>. Man kan filtrere ved å skrive inn tekst<del>, eksempelvis:</del><mark>. Klikk på programmet og trykk _OK_. Det valgte programmet står da i feltet _Program_, og blyanten ved siden av lar deg velge et annet. Kolonnen _Status_ viser om programområdet er _Aktivt_ eller _Utgått_.</mark>

<div class="fjernet">

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/c8f40fe2-4a4c-4161-9d7e-41e1aa988e58)

</div>

- _Dokumentasjonstype_: Vitnemål gjelder som regel for fagene i avgangsklassene. (Flere muligheter på elevnivå, eksempelvis kompetansebevis eller karakterutskrift.) <mark>Valgene er _Annen opplæring_, _Kompetansebevis_, _Fagbrev_ og _Vitnemål_. Når en klasse med _Vitnemål_ lagres, får elevene i klassen avgangsår lik våren i skoleåret (for 2026-27 blir det 2027). Avgangsåret vises under [Elevadmin > Elev](/docs/ea_elev).</mark>
- _Rom_: Dersom klassen stort sett benytter et bestemt klasserom kan det markeres her. Letter arbeidet for timeplanlegger, da dette rommet er forhåndsvalgt. Men timeplanlegger står fritt til å velge annet rom.
- _Maksimalt elevantall_: Kan noteres, men klassen kan ha flere elever.
- _Klassen inngår i eksport til læringsplattform_: Dersom skolen også benytter eksempelvis ItsLearning, avhukes det her. <mark>Feltet er avhuket når du legger til en ny klasse.</mark>
- <mark>_Fagskoleklasse_: Huk av når klassen er en klasse for fagskolestudenter. Fagskoleklasser sendes ikke til VIGO.</mark>
- _Kostnadssted_: Brukes i hovedsak i budsjett-sammenheng. Ta gjerne kontakt dersom skolen din ønsker nærmere orientering om dette.
- _Tilgjengelige fag_: Når ny klasse er lagt inn kommer alle fag som er lagt inn for klassetrinnet fra menyvalget _Fag_ frem. Aktuelle fag for klassen flyttes over fra _Tilgjengelige fag_ til _Valgte fag_. <mark>Listene fylles når klassetrinn og klasseid er valgt. Huk av fagene (eller _Velg alle_) og flytt dem med den grønne pilen mot høyre. Den røde pilen flytter fag tilbake. Tallet bak _Uketimer_ i overskriften er summen av uketimene i listen.</mark>

Når utfyllingen er gjort, trykkes _Lagre_.

<mark>Fagene du legger til, legges også inn på alle elevene i klassen. Klassen kan ikke ha to fag med samme fagkode. Prøver du, stopper lagringen med meldingen _Det finnes alt et fag for klassen med samme fagkode_. Fag uten karakter (fagkode 999999) er unntatt.</mark>

## Endre klasse
<mark>Klikk på klassen i oversikten og deretter på knappen _Endre..._.</mark> Alle opplysninger, med unntak av <mark>klassetrinn og</mark> klasseid, kan endres<del> ved å klikke på knappen _Endre..._</del>. Tilsvarende bilde som ved opprettelse av ny klasse vil vises.

:::tip Tips
Dersom klassen skal ha et fag som ikke står i listen under _Tilgjengelige fag (Uketimer:)_, må faget registreres fra menyvalget _Fag_. 

Etter at faget er opprettet<del> klikk på ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/eb9dcc07-e0a4-4db0-b891-c1bda5658efc)</del><mark>, åpner du klassen med _Endre..._ og flytter faget over til _Valgte fag_ med den grønne pilen</mark> for å få plassert faget i klassen.

<del>_Antall elever_: Kolonnen viser elever som alt er tatt inn i den enkelte klasse. Når ny klasse legges inn, er tallet lik null.</del>
:::
:::caution Advarsel
Hvis man tar ut et fag av klassen etter skolestart, så vil alle elevene i klassen miste faget, og faget mister læreren fra time- og fagfordelingen, og timeplanlagte timer blir slettet. <del>Men før sletting finner sted, får en opp beskjed om hva som står på spill, og man kan avbryte slettingen...</del> <mark>Har faget gjesteklasser, forsvinner også de (se [Gjesteklasser](/docs/gd_fagklasse)). Endringen skjer når du trykker _Lagre_, uten egen advarsel. Ombestemmer du deg før det, trykker du _Avbryt_.</mark>

<mark>Faget kan ikke tas ut når det er ført karakterer i faget på elever i klassen, når elever er meldt opp til eksamen i det, eller når det er ført fravær på fagets timer. Da stopper lagringen med en melding om dette.</mark>
:::

## Slette en klasse
Sletting av en klasse har store konsekvenser. Dersom klassen slettes går følgende tapt:
1. Klassens timeplan slettes
1. Lærerne som underviser i klassen mister ressursene

Ved sletting vil man få overstående advarsel og man må bekrefte med navnet til klassen at klassen virkelig skal slettes. <mark>Velg klassen i oversikten, klikk _Slett..._, skriv klassenavnet (for eksempel _LA1B_) i feltet og trykk _Ja_.</mark>

:::warning Merk
Det er ikke mulig å slette klasser som har elever registrert. Disse elevene må først flyttes eller slettes. <mark>Det gjelder også elever som har sluttet i klassen, selv om _Antall elever_ viser 0.</mark>

<mark>Klassen kan heller ikke slettes når det er ført fravær på timer i klassens timeplan. Meldingen sier hvor mange timer det gjelder. Slett timene i _Timeplan_ først.</mark>
:::
