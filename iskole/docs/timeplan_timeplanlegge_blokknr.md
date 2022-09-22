---
id: timeplan_timeplanlegge_blokknr
title: Timeplanlegge blokknr
sidebar_label: Timeplanlegge blokknr
---

Begrunnelsen for å innføre blokknummer var et ønske om en mer abstrakt måte å angi en undervisningstime på. Eksempelvis skal to grupper få den samme nummerserie på fem blokknummer. At gruppene skal ha like blokknumre forteller bare at fagene skal undervises parallelt. I utgangspunktet sier det ikke hvor timene skal plasseres på timeplanen. Det er nå først at dette skal bestemmes!

To blokknummer bør altså ikke overlappe hverandre i tid, det ville kunne medføre kollisjon på timeplanen (noe systemet automatisk vil avdekke).

Når blokknummer legges på et fag, så hentes start- og slutt-tid for timen ut fra tabellen i _Time_. Endrer man etterpå tabellen Time, vil dette ikke berøre timene for fag som alt er tildelt blokknummer. Tabellen _Time_ er altså en mal som gjør det enkelt å besteme dag og start-/slutt på en undervisningstime. Når blokknummeret blir lagret på et fag, overføres altså dag og start-/slutt til timen, og koplingen mot tabellen opphører. Det betyr at dersom det i ettertid gjøres endringer i tabellen _Time_, så påvirker ikke dette allerede blokknumre som er plassert på gruppefag. Det sier seg selv at innholdet i tabellen _Time_ ikke bør endres etter at fagene har fått tildelt blokknumre. Skal endringen kunne skje for et allerede plassert blokknummer i et fag, og blokknummeret får endret dag/tid, må blokknummer på faget fjernes, og så legges inn på nytt.

Eksempel på ferdiglagt timeplan for blokknr:

![image](https://user-images.githubusercontent.com/80097133/113118295-9bbdbd00-920f-11eb-89ba-3031a26731f9.png)

Her tilhører blokknr 1 til 5 fag hjemmehørende under Id=1 (se _Timeplan>Definer blokknr_). Vi ser at hvert av fagene er tildelt to dobbel-timer (mandag og fredag) og en enkel-time onsdag. 
