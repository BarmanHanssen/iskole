---
id: timeplan_rapporter
title: Rapporter
sidebar_label: Rapporter
---

Rapportene som kan tas ut henter data hovedsakelig fra det som er lagt  inn via meny-valgene fra _Timeplan_, samt det som er registring som elevenes valg av gruppefag.

Alle rapporter kan tas ut i pdf-format, og noen utvalgte også som regneark. Regneark er beste valg dersom man ønsker å kunne redigere resultat, eksempelvis sortere innholdet på egen hånd.

## Blokktimer klasse
<img width="1055" height="505" alt="image" src="https://github.com/user-attachments/assets/34250e43-11ed-4a69-9152-4e915522eb7b" /> Rapporten viser dager og timer hvor noen av klassens elever har undervisning i gruppefag. Datagrunnlaget er hentet fra hva som er lagret som elevens gruppefag (se _Elevadmin.>Fag_) og hva som er timeplanlagt av gruppefag (se_Timeplan>Gruppper_). Tallene i parentes viser hvor mange av klassens elever som er deltar i hver av timene, eventuelt elever fra andre klasser er ikke medregnet. Rapporten viser ikke om det er et eller flere gruppefag som ligger til grunn for antallet. Eksempel: Elevene i klassen er delt i matematikk (praktisk/teoretisk). Dersom gruppene undervises parallelt i en time, vil tallet vise summen av elevene, uten henvisning til at det er to gruppers elever som inngår.
Men på klassens timeplan (se _Mine sider>Timeplan>Klassetimeplan_) vil det fremgå hvilke grupper som inngår i hver av timene.

## Matrise gruppefag
Velg nå _Forhåndsvisning_ av alle klassetrinn som har elever med gruppefag. Vi får da en komplett oversikt over alle gruppefag med hvem som har valgt det enkelte gruppefag, og hvilke andre gruppefag hver av disse elevene også har valgt. 

![bilde](https://github.com/user-attachments/assets/fc4724ac-f048-4af3-9a59-c3de2ec433b6)

I skjermbildet ovenfor har vi klikket på tallet 19. Vi får da navnet på de 19 elevene som har valgt ST1:MAP 1. Vi ser at blant disse 19 har 4 også har valgt ST1:SPB 1 og 6 har også valgt ST1:TY2 1. Klikker vi deretter på tallet 6, får vi altså ikke frem navnene på alle som har ST1:TY2 1, vi får kun frem de 6 elevene som også har valgt ST1:MAP 1.
Merk at fagene med tallene markeres både vannrett og loddrett. 

Felt uten tall betyr at ingen elever går i begge grupper. Det betyr at disse gruppene kan timeplanlegges likt med ST1:MAP 1 uten at noen av elevene i ST1:MAP 1 får kollisjon på sin timeplan av den grunn.

## Sum undervisning

Utgangspunktet er fagene som er registrert under _Klassefag_ og _Gruppefag_ fra  menyvalget _Time og fagfordeling_.
Rapporten summerer timer som er timeplanlagt fra _Grupper_ og _Klasser_ under menyvalget _Timeplan_. Timene telles opp uavhengig av om timen er registrert med eller uten elever eller lærer. 

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/ca2d7b33-21d1-4d72-a794-f4dbd0befcf3)


Se skjermbildet ovenfor. Her står gruppen ST1:FR1 1 uten elever og uten timeplan. Gruppen er tydeligvis ikke igangsatt, og burde vært fjernet fra Grunnlagsdata>Grupper!

**_Omfanget_** er gitt via fagkoden. Fag med fagkode 999999 skal ikke være med på kompentansebevis eller vitnemål og har omfang=0.
**_Timer_** er sum timeplangte klokketimer.
**_Avlyst/Fradrag_** er korrigeringer faglærer gjør i løpet av skoleåret. 
**_Sum_** betår da av  _Timer_ minus (_Avlyst_ + _Fradrag_).
**_Avvik_** er _Sum_ minus _Omfang_.

Dersom noen fag er delt, vises en oversikt helt til slutt:

![bilde](https://github.com/user-attachments/assets/ef6aef86-366f-496b-b772-c25d33dc08ee)

Eieren av faget har offisiell fagkode, og komponentene har fagkode 999999. Se _Grunnlagsdata>Fag_ for nærmere forklaring.

## Timeplanlagte timer uten rom
Rapporten lister alle fag som ikke har blitt tildelt rom i alle timeplanlagte timer i faget,  fra og med dagens uke og fram i tid. 

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/c22ca718-f2a1-4d5e-a504-77b105b451ef)


## Timeplanlagte timer uten lærer
![bilde](https://github.com/user-attachments/assets/6b7a0be4-84ae-45e0-9702-2008717a853b)

Merk at denne rapporten bare gir mening når den tas ut i inneværende skoleår. I eksemplet ovenfor er vi i skoleåret 2024-25, og utskrift planlegges tatt ut i uke 25. Resultatet fanger opp eventuelle timer i fag som  er timeplanlgt uten lærer fra om med uke 25 og ut skoleåret. Sluttdato er bestemt ut fra siste skoledag i følge skoleruten. (Se _Mine sider>Skolerute_.)

## Prøver
Her fås oversikt over alle prøver som er registrert, forutsatt at publiseringsdatoen ikke setter stopp for visningen.
Det er faglærer som registrerer prøver i sine fag. Faglærer får oversikt over prøver i sine fag fra _Mine sider>Vurderinger_.  

#### Prøveoversikt
Her fås alle prøver som er registrert, også heldagsprøver.

#### Heldagsprøver
Her fås prøver som er lagt inn med varighet på en dag, eller mer.

## Elevkollisjoner
I utgangspunktet skal timeplanen legges slik at det ikke forkommer kollisjoner, eksempelvis på lærers eller elevs timeplan.
Det er imidlertid åpnet for å kunne timeplanlegge med kollisjoner på elevens timeplan. Det er timeplanlegger som må godkjenne dette. Rapporten viser dato og tid og hvilke fag på elevens timeplan som er timeplanlagt på samme tid. Dersom kollisjon må det avtales med eleven hvilket fag som skal følges.
