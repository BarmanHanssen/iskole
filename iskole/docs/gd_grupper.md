---
id: gd_grupper
title: Grupper
sidebar_label: Grupper
---
Gruppefag er undervisningsgrupper som samler et utvalg av elever fra flere klasser, gjerne også fra flere trinn. Elever kan tildeles gruppefag uavhengig av hvilken klasse eleven tilhører. Eksempelvis kan en elev på klassetrinn 1 også kunne velge et gruppefag som er registrert på klassetrinn 2. Typisk vil et gruppefags elever komme fra flere klasser, men en gruppe kan ha elever fra bare en klasse.

Aktuelle gruppefag skolen kan tilby er registrert fra menyvalget _Fag>Gruppefag_. 

Her skal vi fastsette hvilke av disse gruppefag som skal tilbys årets elever.  Dette markeres ved at gruppefaget tildeles et gruppenummer.

For at et fag skal bli valgbart for årets elever må det opprettes en gruppe og denne gruppen gis et gruppenummer, se kolonnen  
<del>![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/6b69ae31-53bd-489e-ad7a-0e895f064bd5)</del><mark>_#_</mark>.
Bare fag med gruppenummer vises i [Time- og fagfordeling>Gruppefag](../tf_gruppefag) og bare disse gruppene kan tildeles elevene.

:::tip Tips
<del>For å få alle gruppene som alt er registrert med gruppenr øverst/nederst i skjermbildet, trykk på gulmerket ikon.</del> <mark>For å få alle gruppefagene som alt har gruppenr øverst/nederst i tabellen, klikk på kolonneoverskriften _#_.</mark>
:::

## Oversikt over gruppefag
<div class="nytt-bilde">

![Grupper-oversikten med filterfeltet og tabellen over gruppef](/img/gd_grupper_oversikt.png 'Grupper-oversikten med filterfeltet og tabellen over gruppef')

</div>

<mark>Feltet over tabellen filtrerer på trinn, fag, fagnavn og fagkode. Knappene i kolonnen _Valg_ gjelder gruppefaget på raden: pluss legger til en gruppe, blyanten endrer blokkid og søppelbøtta sletter en gruppe. Blyanten og søppelbøtta er grå til faget har minst én gruppe.</mark>


## Opprett ny gruppe
Når ny gruppe skal opprettes, klikk på +-ikonet<mark> i kolonnen _Valg_ på gruppefaget. Dialogen _Legg til gruppe i …_ vises. Velg gruppenr og eventuelt blokkid, og trykk _Lagre_.</mark><del>:</del> 

<div class="nytt-bilde">

![Dialogen Legg til gruppe i AP3: M-P med feltene Velg gruppen](/img/gd_grupper_legg_til.png 'Dialogen Legg til gruppe i AP3: M-P med feltene Velg gruppen')

</div>

##### Velg gruppenr
Grupper som skal kunne igangsettes dette skoleåret markeres ved å gi faget et gruppenr. Uten gruppenummer vil faget ikke vises under <del>_Time- og fagfordeling>Grupper_</del> <mark>[Time- og fagfordeling > Gruppefag](/docs/tf_gruppefag)</mark>, og elever kan heller ikke velge faget. Et fag kan ha flere grupper, eksempelvis på grunn av mange elever. <mark>Listen viser gruppenumrene som er ledige i faget (1–9 og a–z). Det første ledige er valgt på forhånd.</mark>

##### Velg blokkid
Dersom man har besluttet at enkelte fagkombinasjoner skal undervises på samme tid, kan dette registreres her. Fag med samme blokkid <del>(gitt som et tall)</del> skal undervises parallelt. Dette innebærer at en lærer ikke tildeles to fag med samme blokkid (se <del>_Timefordeling>Gruppefag_</del> <mark>[Time- og fagfordeling > Gruppefag](/docs/tf_gruppefag#registrere-lærer-i-gruppefag)</mark>). Tilsvarende kan en elev ikke velge/tildeles to gruppefag med samme blokkid. <mark>Blokkid velges fra listen over blokkene som finnes for skoleåret. Tomt felt betyr at gruppen ikke hører til noen blokk.</mark>

Blokkid kan også settes/endres <del>_Timeplan>Blokk_</del> <mark>under _Blokkfag_ i [Timeplan > Blokk](/docs/timeplan_definer_blokknr#blokkfag)</mark>. 

:::tip Tips til timeplanlegger
Dersom blokkid-en timeplanlegges (se <del>_Timeplan>Grupper_</del> <mark>[Timeplan > Blokk](/docs/timeplan_definer_blokknr)</mark>), kan gruppefag med blokkid timeplanlegges med et museklikk<mark> i [Timeplan > Grupper](/docs/timeplan_blokknr_gruppefag)</mark>!
:::

:::tip La elevene velge neste års programfag.
Elevene kan selv velge neste års programfag, i så fall må ***blokkid*** defineres. Se [Veiledning for oppsett av programfag for neste skoleår](../valg_programfag) for detaljer.
:::

## Endre blokkid <span class="ny">NY</span> {#endre-blokkid}
Blyanten i kolonnen _Valg_ åpner _Endre blokkid …_ med én linje per gruppe i faget. Velg blokkid for hver gruppe (tomt felt betyr ingen blokk) og trykk _Lagre endring_.

<div class="nytt-bilde">

![Dialogen Endre blokkid AP3: M-P med gruppe 1 og 2 og blokkid](/img/gd_grupper_endre_blokkid.png 'Dialogen Endre blokkid AP3: M-P med gruppe 1 og 2 og blokkid')

</div>

:::info Merk
Når blokkid endres her, sjekkes det ikke om en lærer eller en elev da får to grupper med samme blokkid. Kontroller lærerne under [Time- og fagfordeling > Gruppefag](/docs/tf_gruppefag) etterpå.
:::

## Slette en gruppe <span class="ny">NY</span> {#slette-en-gruppe}
Søppelbøtta i kolonnen _Valg_ åpner _Slett gruppe i …_. Velg gruppenr og trykk _Slett_. Gruppen slettes med en gang. Elevene i gruppen mister gruppen, og lærerne og de timeplanlagte timene i gruppen slettes også. Selve gruppefaget blir stående, og slettes eventuelt under [Fag](/docs/gd_fag).

Gruppen kan ikke slettes når det er ført fravær på timer i gruppen. Meldingen sier hvor mange timer det gjelder. Slett timene i _Timeplan_ først. <mark>Den kan heller ikke slettes når elever i gruppen har karakterer eller er meldt opp til eksamen i faget, eller når gruppen er registrert mot SDIR. Da får du en melding om hva som stopper slettingen.</mark>

## Litt om kolonnene i skjermbildet
<div class="fjernet">

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/d6a80ad7-6744-403e-8211-fcb36ee70830)

</div>

Fagene er de samme som en finner under menyvalget _Fag>Gruppefag_.   

<del>![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/6b69ae31-53bd-489e-ad7a-0e895f064bd5)</del> <mark>_Trinn_ er utdanningsprogram og trinn, og _Fag_ er fagets kortnavn. _#_ viser gruppenumrene i faget.</mark> Bare fag som har en verdi (tall eller bokstav) skal tilbys/være valgbare dette skoleåret.

_Fagnavn, Uketimer, Fagkode, Omfang, Prosent_ hentes fra _Grunnlagsdata>Fag_. <mark>_Prosent_ er det samme som _Tilsvarer stillingsprosent_ der.</mark>

_Elever_ viser antallet elever som allerede har valgt faget<mark>, summert over alle gruppene</mark>. Når gruppen opprettes fra dette menyvalget, er tallet selvsagt null. 

_Gruppenr:Blokkid_: Dersom blokkid er innført vises kombinasjonen gruppenr:blokkid. Dersom flere grupper i faget kommer de i rekkefølge. Ved å sortere på kolonnen (klikk på kolonnen), vil fag som skal timeplanlegges parallelt (altså med samme blokkid) komme etter hverandre.
