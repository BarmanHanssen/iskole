---
id: gd_planperiode
title: Skoleår
sidebar_label: Skoleår
---

Innledningsvis fås en oversikt over alle skoleår hvor skolen allerede har benyttet iSkole. For hvert skoleår vises halvårsskillet (siste skoledag i 1. halvår) og antall skoledager for hele året og for hvert halvår. Aktivitetsdager telles som skoledager, planleggingsdager gjør det ikke. Skoleåret du arbeider i, er uthevet.

![Skoleår-oversikten med knappene Legg til... og Slett... og t](/img/gd_planperiode_oversikt.png 'Skoleår-oversikten med knappene Legg til... og Slett... og t')

Dersom iSkole har vært brukt tidligere skoleår, vil en dra nytte av det når nytt skoleår skal planlegges.

## Bytte skoleår {#bytte-skoleår}
Skoleåret du arbeider i, velges i nedtrekkslisten øverst til høyre. Valget gjelder alle menyvalgene i Grunnlagsdata, og skjermbildet du står i, lastes på nytt for det valgte året. Arbeider du i et annet skoleår enn inneværende, står _Ikke inneværende skoleår_ ved siden av listen, med en lenke tilbake til inneværende år.

Å klikke på et skoleår i tabellen bytter ikke skoleår. Det markerer bare raden, for eksempel før sletting.

## Opprett nytt skoleår
Klikk _Legg til..._ når nytt skoleår skal legges inn. Da vises en veiviser i fire steg: _Skoleår_, _Feriedager_, _Kopier_ og _Oppsummering_. Gå fram og tilbake med _Neste_ og _Forrige_, eller avbryt med _Avbryt_ i første steg.

### Skoleår
Her tastes inn året skoleåret starter (feltet _Nytt skoleår starter høsten_), eksempelvis 2025 for skoleåret 2025-26. _Neste_ kan ikke klikkes før det står et gyldig årstall med fire siffer i feltet. 
Et skoleår starter 1. august og varer frem til 31. juli. Eksempelvis vil en heltidsansatt avlønnes mellom disse datoer, og elever som tas inn får i utgangspunktet tilgang til iSkole innenfor dette tidsrommet. 

### Feriedager
Rammene for skoleåret, ferie og halvårsskille. iSkole foreslår datoer som du kan endre: skolestart 15. august, skoleslutt 20. juni, høstferie i uke 40, juleferie fra 21. desember til 3. januar, vinterferie i uke 8, påskeferie rundt påske og halvårsskille 10. januar.

#### Til skoleruten
![Steg 2 Feriedager i veiviseren med skolestart, skoleslutt, f](/img/gd_planperiode_feriedager.png 'Steg 2 Feriedager i veiviseren med skolestart, skoleslutt, f')
Her registreres elevenes første og siste skoledag, samt planlagte fridager. 

Skoleruten bygges opp fra disse datoene: alle dagene i en ferie, fra og med første til og med siste dag, blir fridager. Det samme blir lørdager og søndager, dagene før skolestart og etter skoleslutt, 1. mai, 17. mai, Kristi himmelfartsdag og 2. pinsedag. Skolestart er første skoledag. De øvrige dagene blir skoledager. Planleggingsdager legges inn etterpå under [Skolerute](/docs/gd_skolerute).

#### Halvårsskille
Halvårsskille markerer overgangen fra 1.- til 2.halvår. Etter denne datoen får elevene vurderingen for 2. halvår. Skillet har også betydning for summeringen av fravær innenfor halvårene. Feltet heter _Siste skoledag 1. halvår_. Halvårsskillet kan endres senere under [Skolerute](/docs/gd_skolerute#halvarsskille).

### Kopier {#kopier}

![Steg 3 Kopier med valget Et eksisterende skoleår, skoleårsne](/img/gd_planperiode_kopier.png 'Steg 3 Kopier med valget Et eksisterende skoleår, skoleårsne')

For skoler som alt har tatt iSkole i bruk velges forrige skoleår. Da kan data om klasser og fag gjenbrukes. Dersom man stort sett har samme oppsett for valgfagene, hukkes det av for _Kopier grupper (ikke timeplan og lærer)_. Andre ressurser kan være faste tillegg for enkelte lærere, eksempelvis ressurs for rektor. Justering av gruppene gjøres senere fra menyvalget [Grunnlagsdata > Grupper](/docs/gd_grupper), lærerne settes på fra [Time- og fagfordeling > Gruppefag](/docs/tf_gruppefag), og for andre ressurser fra _Time- og fagfordeling>Andre ressurser_.

Under _Baser det nye skoleåret på_ velger du _Et eksisterende skoleår (anbefales)_ og hvilket skoleår det skal kopieres fra. Skoleåret du arbeider i, er forhåndsvalgt. Velger du _Legg kun inn det nye skoleåret_, kopieres ingenting.

Når du kopierer fra et skoleår, følger dette med:

- utdanningsprogram og klassetrinn
- klassene med fagene sine (bare fag som elever hadde eller fikk karakter i året det kopieres fra) og gjesteklassene
- gruppefagene, og gruppene hvis du har huket av for _Kopier grupper_
- tidskjemaene og timene (se _Timeplan > Timer_)
- andre ressurser, hvis du har huket av for _Kopier andre ressurser_
- søkerportalens tilbud og aktive spørsmål, med frister flyttet ett år fram

Timeplanen, lærerne i fagene og elevene følger ikke med.

:::danger Viktig
Baser **alltid** neste skoleår på et tidligere skoleår. Eneste unntak er hvis du er **helt** sikker på at du ønsker å begynne helt fra start med skolens klasse og fagstruktur.
:::

### Oppsummering

Oppsummeringen viser datoene og valgene fra de foregående stegene. Dersom alt ser greit ut gjenstår bare å klikke på _Opprett nytt skoleår_. Finnes skoleåret fra før, får du beskjed om det, og ingenting blir lagret. Det nye skoleåret kan straks velges i nedtrekkslisten øverst til høyre.

## Slette skoleår {#slette-skoleår}
Klikk på skoleåret i tabellen og deretter på _Slett..._. I dialogen skriver du inn skoleåret, for eksempel 2027-28, og klikker _Ja_. Alle data for skoleåret slettes, og slettingen kan ikke avbrytes når den først er startet.

Et skoleår kan ikke slettes når det er registrert karakterer eller søkere i det.

![Dialogen Bekreft sletting av skoleår med advarselen og felte](/img/gd_planperiode_slett.png 'Dialogen Bekreft sletting av skoleår med advarselen og felte')

## Redigere skoleår {#redigere-skoleår}

Et skoleår kan ikke endres her. Halvårsskillet, fridager og planleggingsdager endres under [Skolerute](/docs/gd_skolerute).
