---
id: timeplan_rapporter
title: Rapporter
sidebar_label: Rapporter
---
 
Rapportene som kan tas ut henter data hovedsakelig fra det som er lagt inn via menyvalgene fra _Timeplan_, samt det som er registrert som elevenes valg av gruppefag.

De fleste rapportene kan tas ut både i pdf-format og som regneark. _Blokktimer klasse_ og _Matrise gruppefag_ finnes bare som pdf, og _Elevkollisjoner_ bare som regneark. Regneark er beste valg dersom man ønsker å kunne redigere resultat, eksempelvis sortere innholdet på egen hånd.

Rapportene gjelder skoleåret som er valgt i nedtrekkslisten øverst i skjermbildet. Hver rapport har sin egen fane. Gjør utvalget i fanen, og klikk _Vis rapport_ med pdf- eller regnearkikonet. Rapporten åpnes i en ny fane i nettleseren.

## Blokktimer klasse
<img width="925" height="303" alt="image" src="https://github.com/user-attachments/assets/7d82617e-95ec-47c1-a3bd-0baa30537b9c" />

Rapporten viser dager og timer hvor noen av klassens elever har undervisning i gruppefag. Velg uke i nedtrekkslisten _Uke_ før du klikker _Vis rapport_. Rapporten gjelder den valgte uken. Datagrunnlaget er hentet fra hva som er lagret som elevens gruppefag (se _Elevadmin.>Fag_) og hva som er timeplanlagt av gruppefag (se _Timeplan>Grupper_). Tallene i parentes viser hvor mange av klassens elever som deltar i hver av timene, eventuelt elever fra andre klasser er ikke medregnet. Rapporten viser ikke om det er et eller flere gruppefag som inngår. Eksempel: Elevene i klassen er delt i matematikk (praktisk/teoretisk). Dersom gruppene undervises parallelt i en time, vil tallet vise summen av elevene, uten henvisning til at det er to gruppers elever som inngår.
Men på klassens timeplan (se _Mine sider>Timeplan>Klassetimeplan_) vil det fremgå hvilke grupper som inngår i hver av timene.

## Matrise gruppefag {#matrise-gruppefag}
Vi kan her få oversikt over alle gruppefag med elever som har valgt faget. Og hvilke andre gruppefag hver av disse elevene også har valgt. 

Slik gjør du det:

1. Velg ett eller flere klassetrinn i _Velg klassetrinn_. Klassetrinnet er utdanningsprogram og trinn, for eksempel _ST1_. _Velg alle_ tar med alle klassetrinnene, _Fjern alle_ tømmer utvalget.
1. Klikk _Forhåndsvisning_. Matrisen vises i skjermbildet.
1. Klikk _Vis rapport_ for å få matrisen som pdf (_Konfliktmatrise for gruppefag_). Pdf-filen lastes ned.

![Matrise gruppefag](/img/tp_rapporter_matrise.png 'Matrise gruppefag med elevene i ST2: SP2 1')

Tallet på diagonalen viser hvor mange elever som har valgt faget. Tallet der en rad og en kolonne krysser hverandre, viser hvor mange elever som har valgt begge fagene. Klikk på et tall for å få navnene på elevene i et eget vindu. Holder du musepekeren over et tall en liten stund, vises navnene også i en boble.

Merk at fagene med tallene markeres både vannrett og loddrett. 

Felt uten tall betyr at ingen elever går i begge grupper. Det betyr at disse gruppene kan timeplanlegges samtidig uten at noen av elevene får kollisjon på sin timeplan av den grunn. Men da vil timeplan for elevene i disse klasser bli utvidet...

## Sum undervisning {#sum-undervisning}

Under _Tidsrom_ angis perioden rapportene gjelder. Som standard er det hele skoleåret (1. august til 31. juli). Fanen har tre rapporter:

- _Vis rapport for fag_: timer til undervisning ifølge læreplanene, og hvor mange timer som er timeplanlagt i hvert fag. Beskrevet under.
- _Vis rapport for elever_: summerer undervisningen for hver elev i hvert av fagene eleven har.
- _Timelister_: timelister for alle lærerne i alle fag i perioden.

For de to første må du velge ett eller flere utdanningsprogram i _Velg utdanningsprogram_ (eller klikke _Velg alle_). Bare utdanningsprogram som har timeplanlagte timer i skoleåret står i listen.

![Sum undervisning](/img/tp_rapporter_sum_undervisning.png 'Fanen Sum undervisning')

Rapporten for fag summerer timer som er timeplanlagt fra _Grupper_ og _Klasser_ under menyvalget _Timeplan_. Timene telles opp uavhengig av om faget er registrert med eller uten elever eller lærer. 

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/ca2d7b33-21d1-4d72-a794-f4dbd0befcf3)

Se skjermbildet ovenfor. Her står gruppen ST1:FR1 1 uten elever og uten timeplan. Gruppen er tydeligvis ikke igangsatt, og burde kanskje vært fjernet fra Grunnlagsdata>Grupper?

**_Omfanget_** er gitt via fagkoden. Fag med fagkode 999999 skal ikke være med på kompetansebevis eller vitnemål og har omfang=0.
**_Timer_** er sum timeplanlagte klokketimer.
**_Avlyst/Fradrag_** er korrigeringer faglærer gjør i løpet av skoleåret. 
**_Sum_** består da av _Timer_ minus (_Avlyst_ + _Fradrag_).
**_Avvik_** er _Sum_ minus _Omfang_.

Dersom noen fag er delt (altså har komponenter), vises en oversikt helt til slutt:

![bilde](https://github.com/user-attachments/assets/ef6aef86-366f-496b-b772-c25d33dc08ee)

Eieren av faget har offisiell fagkode, og komponentene har fagkode 999999. Se _Grunnlagsdata>Fag_ for nærmere forklaring.

## Timeplanlagte timer uten rom
Fanen heter _Timer uten rom_. Rapporten lister alle fag som ikke har blitt tildelt rom i alle timeplanlagte timer i faget, fra og med dagens uke og fram i tid. 

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/c22ca718-f2a1-4d5e-a504-77b105b451ef)

## Timeplanlagte timer uten lærer
Fanen heter _Timer uten lærer_.

![bilde](https://github.com/user-attachments/assets/6b7a0be4-84ae-45e0-9702-2008717a853b)

Merk at denne rapporten bare gir mening når den tas ut i inneværende skoleår. I eksemplet ovenfor er vi i skoleåret 2024-25, og utskrift planlegges tatt ut i uke 25. Her vises timer i fag som er timeplanlagt uten lærer fra og med uke 25 og ut skoleåret. Sluttdato er bestemt ut fra siste skoledag i følge skoleruten. (Se _Mine sider>Skolerute_.)

## Prøver
Her fås oversikt over alle prøver som er registrert, forutsatt at publiseringsdatoen ikke setter stopp for visningen.
Det er faglærer som registrerer prøver i sine fag. Faglærer får oversikt over prøver i sine fag fra _Mine sider>Vurderinger_.  

Velg ett eller flere utdanningsprogram i _Velg utdanningsprogram_ (eller _Velg alle_), og velg _Sortering_: _Fagkode, dato_ eller _Dato, fagkode_. Velg deretter rapport.

![Prøver](/img/tp_rapporter_prover.png 'Fanen Prøver')

Som det fremgår av skjermbildet har man sorteringsalternativ.

#### Heldagsprøver
Her fås prøver som er lagt inn med varighet på en dag, eller mer.

#### Prøveoversikt
Her fås alle prøver som er registrert, også heldagsprøver.

## Elevkollisjoner {#elevkollisjoner}
I utgangspunktet skal timeplanen legges slik at det ikke forekommer kollisjoner på en elevs timeplan.
Det er imidlertid åpnet for å kunne timeplanlegge med kollisjoner på elevens timeplan. Det er timeplanlegger som eventuelt kan godkjenne en kollisjon. Rapporten viser dato og tid og hvilke fag på elevens timeplan som er timeplanlagt på samme tid. Dersom kollisjon må det avtales med eleven hvilket fag som skal følges.

Velg ett utdanningsprogram i _Velg utdanningsprogram_. Klikk _Forhåndsvisning_ for å se kollisjonene i skjermbildet: klasse, elevens navn, dato og de to fagene (med klokkeslett) som går samtidig. Antallet kollisjoner står i overskriften. _Last ned rapport_ gir den samme listen som regneark.

![Elevkollisjoner](/img/tp_rapporter_elevkollisjoner.png 'Elevkollisjoner i LA')
