---
slug: ny_grupper
title: Ny timeplanlegging av gruppefag
author: Thomas Hannestad
author_title: Programmerer
author_url: https://github.com/thomashannestad
author_image_url: https://avatars.githubusercontent.com/u/10975904?s=400&u=3da50813df75e4f3afb48e241aba5457756c51a7&v=4
tags: [timeplan]
---

Grupper-siden i Timeplan er bygget om fra bunnen av. Den gamle todelingen —
fagtabell øverst og timeplan nederst — er erstattet av én sammenhengende
ukematrise der alle fagene, lærerne og timene deres vises samtidig. Målet er
færre klikk, bedre oversikt og ærligere tilbakemeldinger når noe kolliderer.

<!-- truncate -->

![Ukematrisen](/img/tp_grupper_matrise.png)

## Alt i ett bilde

Hver rad i matrisen er ett gruppefag, med fagets lærere som egne rader
under. Telleren til høyre viser fremdriften — **3 av 5** betyr at tre av
fagets fem uketimer er planlagt, og oransje tall betyr at noe mangler.
Chipen **Kun ikke ferdig** filtrerer til fagene som gjenstår, og søkefeltet
avgrenser til bestemte fag eller lærere mens du skriver.

Med øye-knappen kan du i tillegg vise **annen undervisning**: elevenes
klassefag og øvrige gruppefag på faglinjen, og lærerens øvrige timer,
vikartimer og reservasjoner på lærerlinjen — dempet, så det ikke stjeler
oppmerksomhet. Dette er informasjonen som før krevde at man valgte raden og
så på timeplanen under.

## Fra klikk-og-bekreft til rett inn

Klikk hvor som helst på en rad for å velge linjen. Da vises **ledige
timer** som grønne, stiplede felt direkte på linjen — og ett klikk legger
timen rett inn, med rommet fra romvelgeren. Ingen bekreftelsesdialog:
er du uenig, klikker du timen og sletter eller justerer den like raskt.

Er du vant til å legge timer via blokkid, finnes **Blokk**-knappen
fortsatt: den åpner blokkens tider for uken med kollisjonsmerker per tid,
og planlegger alle valgte i én operasjon.

## Kjenner du igjen disse oppgavene?

For deg som kommer fra den gamle siden — slik gjøres de vante oppgavene nå:

| Før | Nå |
|---|---|
| Velge fag i tabellen, se timeplanen under | Klikk på raden — ledige timer og handlinger kommer direkte på linjen. Timeplanen kan vises under ved å klikke på knappen **Kalender** |
| Shift-klikk for å markere flere timer, endre rom | **Bytt rom** åpner en liste over fagets timer — kryss av og bytt rom på alle under ett |
| «Flere valg»-meny på en time | Klikk timen — én dialog for tid, rom, lærere og sletting |
| Dra-og-slipp uten kontroll | Dra timen — ny tid bekreftes og kan finjusteres før lagring |
| Legge lærer på timer én og én | **Legg på fagets timer** legger læreren på fagets timer i én operasjon |


## Tilpass visningen

- **Zoom**: fem nivåer, fra hele uken i ett blikk til brede kolonner med
  kvartersruter.
- **Dagvis visning**: dagene nedover med én dags timeakse — hele uken uten
  sidescroll, nyttig på mindre skjermer.
- **Kalender**: valgt linje som dagsøyler nederst, for deg som vil beholde
  det gamle kalenderformatet ved siden av matrisen.

Valgene huskes mens du arbeider, og vinduet mellom matrise og kalender
justeres med et håndtak.

## Hjelp underveis

Hele siden er dokumentert i detalj — trykk hjelp-knappen inne på
Grupper-siden, eller les [dokumentasjonen for Grupper](/docs/timeplan_blokknr_gruppefag).
