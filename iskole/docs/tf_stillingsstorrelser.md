---
id: tf_stillingsstorrelser
title: Stillingsstørrelser
sidebar_label: Stillingsstørrelser
---
Ved ansettelse blir stillingsstørrelsen registrert fra _Personal>Ansatt_, i feltet _Prosent_ under _Ansettelse_ (se [Ansettelse og ansiennitet](/docs/p_ansatt#ansettelse-og-ansiennitet)), hvor 100 % betegner heltidsstilling. Her vises den som _Stilling %_.

Hvilken oppgaver den enkelte lærer skal ha, vil avtales og gjelder for et skoleår. For undervisning vil de enkelte fag vektlegges ut fra brøken årstimer/årsramme, registrert fra _Grunnlagsdata>Fag_. Dersom flere lærere deler undervisningen i et fag, fordeles stillingsprosenten mellom de involverte lærere.

Hvilke fag læreren skal undervise i registreres fra menyvalgene _Time- og fagfordeling>Klassefag_ og _Time- og fagfordeling>Gruppefag_. 

Kontaktlærer registreres fra _Elevadmin.>Kontaktlærer_ og utløser også en ressurs som automatisk plasseres under _Andre ressurser_.

Ressurs som ikke er knyttet til undervisning, registreres på den enkelte lærer fra _Time- og fagfordeling>Andre ressurser_. 

Summen av ressurs til undervisning og annen ressurs vises her som _Beskjeftigelse %_. Vikartimer som ikke utbetales, regnes også med (se [Timeplan>Vikarer](/docs/timeplan_vikar_i_fag)). Vikartimer som utbetales, er ikke med.

Kolonnen _Avvik %_ viser beskjeftigelsesprosent minus stillingsprosent. Et positivt tall betyr at læreren har fått mer enn stillingen sin, et negativt tall at læreren har fått mindre.

Her vises en oversikt over skolens lærerne: 

![Stillingsstørrelser](/img/tf_stillingsstorrelser_oversikt.png 'Oversikt sortert på beskjeftigelse')

Bare ansatte som har fått undervisning, vikartimer eller annen ressurs i det valgte skoleåret, er med i oversikten. Du kan filtrere på etternavn, fornavn eller avdeling, og sortere ved å klikke på kolonneoverskriftene. Siden viser bare tall. Endringer gjør du i menyvalgene over.

#### Ved å velge en lærer vil man få frem beskjeftigelsens komponenter:

![Ressurser for én ansatt](/img/tf_stillingsstorrelser_laerer.png 'Undervisningsressurser og andre ressurser for Peder Aas')

Under oversikten kommer to tabeller for læreren du klikker på:

- _Undervisningsressurser for …_ viser hvert fag med _Rolle_ (_Lærer_, eller _Vikar_ for vikartimer som ikke utbetales), _Prosent_, _Årstimer_, _Timeplanlagt_, _Omfang_, _Fagkode_ og eventuell _Funksjon_. Med _Skjul vikartimer_ tar du vikarlinjene bort fra tabellen.
- _Andre ressurser for …_ viser kontaktlærerressursen og ressursene fra [Andre ressurser](/docs/tf_andre_ressurser).

Dersom timeplanleggingen alt er startet, vil _Timeplanlagt_ vise status for klasse- og gruppe-fagstimene til læreren. (Vikartimer kan tilkomme i løpet av skoleåret.)

:::info Merk
For valgt person er summen av _Prosent_ fra _Undervisningsressurser_ og _Andre ressurser_ lik _Beskjeftigelse %_ fra _Oversikt_, så lenge _Skjul vikartimer_ ikke er huket av.
:::
