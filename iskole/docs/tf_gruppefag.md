---
id: tf_gruppefag
title: Gruppefag
sidebar_label: Gruppefag
---

## Generelt
Hvilke grupper som tilbys dette skoleåret er satt opp fra _Grunnlagsdata>Grupper_. Bare grupper som har fått gruppenummer der, vises her (se [Grupper](/docs/gd_grupper)).
Her registreres faglærerne i valgfagene, og deres tilhørende undervisningsressurs.

Gruppefag virker på samme måte som [Klassefag](/docs/tf_klassefag): å legge til, endre og slette lærer, justere uketimer for enkeltuker og bytte lærer for flere uker gjøres likt. Denne siden beskriver det som er spesielt for gruppefag.

## Kolonnene i tabellen for gruppefagene
Strukturen er den samme som for klassefagene. Men gruppefagene har en ekstra kolonne, _Blokkid_. Se _Grunnlagsdata>Grupper_ for registrering/endring.

![Gruppefag](/img/tf_gruppefag_oversikt.png 'Gruppefag sortert på blokkid, LA1: ENG 1 med lærerne')

Det som skiller seg fra klassefagene:

- _Fag_ viser studieretning og trinn, fagets kortnavn og gruppenummeret. _AP3: M-P 2_ er gruppe 2 i faget M-P på AP, trinn 3.
- _Blokkid_ er blokken gruppen hører til, se under.
- _Elever_ (kolonnen helt til høyre) viser hvor mange elever som er med i gruppen. Elevene velger gruppefag selv, eller får dem tildelt fra [Elevadmin>Fag](/docs/ea_fag#gruppefag).

Dersom skolen har planen klar for hvilke fag som skal timeplanlegges parallelt, er blokkid måten å stadfeste dette på. Grupper med lik blokkid skal i utgangspunktet ha lik timeplan. Det innebærer at en faglærer ikke kan ha to grupper med samme blokkid, og tilsvarende for en elev. Blokkid kan settes før en har timeplanlagt gruppene. Med blokkid på plass kan en hindre feilregistrering av faglærer, og elevens valg av gruppefag. Timeplanlegger vil også raskere kunne få på plass timeplanen for gruppene dersom blokkid er timeplanlagt (se _Timeplan>Blokk_).

Dersom man sorterer på kolonnen _Blokkid_ (klikk på ikonet) vil fag med likt blokkid komme etter hverandre.

## Registrere lærer i gruppefag {#registrere-lærer-i-gruppefag}

Klikk på ikonet _Legg til lærer_ (person med pluss) i kolonnen _Lærer_ på gruppen. Dialogen er den samme som for klassefag, se [Registrere faglærer](/docs/tf_klassefag#registrere-faglærer). Lærerne i gruppen ser du ved å klikke på pilen foran gruppen.

- **Lærerlisten** viser i utgangspunktet bare lærere som har fagets fagkode (registrert under [Personal>Ansatt>Undervisningsfag](/docs/p_ansatt#undervisningsfag), eller som alt underviser i fagkoden). Lærere som alt er med i gruppen, vises ikke. Er listen tom, fjerner du haken i _Vis kun lærere som har fagkoden_. Da vises alle skolens pedagogisk ansatte.
- **Blokkid stopper dobbeltbooking.** Har gruppen en blokkid, og læreren alt har en annen gruppe med samme blokkid, blir læreren ikke lagret. Du får meldingen _Læreren har allerede et fag med samme blokkid - kan ikke lagre!_ Velg en annen lærer, eller endre blokkid under [Grunnlagsdata>Grupper](/docs/gd_grupper) eller [Timeplan>Blokk](/docs/timeplan_definer_blokknr).
- **Fagansvarlig**: Hver gruppe har én fagansvarlig, se [Fagansvarlig](/docs/tf_klassefag#fagansvarlig).

## Endre uketimer og bytte lærer {#endre-uketimer-og-bytte-lærer}

Blyanten i kolonnen _Uketimer_ på lærerlinjen åpner _Endre uketimer for …_ med alle ukene i skoleåret. Her justerer du timene uke for uke, sletter timeplanen for valgte uker eller bytter lærer for valgte uker, på samme måte som for klassefag. Se [Endre uketimer for lærer](/docs/tf_klassefag#endre-uketimer-for-lærer) og [Bytt lærer for valgte uker](/docs/tf_klassefag#bytt-lærer-for-valgte-uker).

Skal byttet bare gjelde én uke, gjør du det fra _Timeplan>Grupper_, se [Bytte av lærer i fag](/docs/timeplanlegging#bytte-av-lærer-i-fag).

