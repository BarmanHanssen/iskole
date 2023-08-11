---
id: tf_gruppefag
title: Gruppefag
sidebar_label: Gruppefag
---

## Gruppefag
Her registreres hvilke grupper som skolen i år skal sette i gang. 

![bilde](https://user-images.githubusercontent.com/80097133/146365313-b46949b5-61f8-4b6a-aa46-de3c23f80f12.png)

Alle fag som er registrert fra _Grunnlagsdata>Gruppefag_ kommer med her. 
I utgangspunktet er fagene merket med blå farge i kolonnen # hvilket betyr at faget ikke er utvalgt i år. For å opprette en gruppe klikker man på faget, deretter på ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/e6ed7e2b-11a6-4cc0-80a8-dc60d13077ec)
Når et fag velges vil blåfargen bli erstattet med tallet 1 (valgbart), noe som indikerer at en gruppe i faget opprettes. 
Her er ID1: ekspandert (idrettsfag, vg1)
Vi ser her at det er regisrtert hele tre grupper i ID1: BI. Hver gruppe har også registrert lærer. Man kan variere lærer uke for uke. Det gjøres ved å ekspandere gruppen. Læreren som står registrert på første linje blir automatisk satt opp som lærer for hele skoleåret, men det kan altså modifieress ved å sette inn annen lærer i utvalgte uker. Læreren som er oppført på første linje er fagansvarlig, og er den som skal føre inn termin/standpunkt-karakteren i faget.

:::note Merk 
Ressursfordelingen for faget ( se _Grunnlagsdata>Fag_. Årstime/Årsramme gir ressursen) gis til faglæreren som står oppført på første linje. Skal ressursen fordeles, må det korrigeres fra _Andre ressurser_. 
:::

### Elevant
Når ny gruppe registreres, vil  elevantallet  være null. Når elevene legges inn, fra _Elevadmin.>Fag_, og/eller ved at elevene selv velger fag, vil tallet avspeile hvor mange elever som er registrert i faget.

### Uketimer
Uketimer, registrert fra _Grunnlagsdata>Fag_, er gjerne fast gjennom hele skoleåret. Men timeplanlegger kan justere det på ukesbasis når timeplanen legges.

### Årstimer
Fastsatt gjennom fagplanen, hentes fra fagkoderegisteret. Timeplanlegger må påse at faget får nok undervisningstid ut fra lagt timeplan.

### %
Angir leseprosenten i faget, beregenet ut fra årstimer/årsramme registert på faget (fra _Grunnlagsdata>Fag_).

### Lærer
Kortnavn som identifiserer lærerens hele navn. Brukes blant annet på timeplanen.

### Blokkid (vises ikke på figuren)
Fag med likt blokkid timeplanlegges parallelt. Kan legges inn senere, og gjør det raskere å timeplanlegge gruppefagene. Se _Timeplan>Definer blokknr_.

### Ekspander et fag

Vi får da frem alle ukene i planperioden, se eksemplet:

![bilde](https://user-images.githubusercontent.com/80097133/146524656-64eb5121-788b-4d1a-916b-7f502f94f63a.png)

Når en legger til en ny gruppe og gruppens lærer, blir læreren satt som lærer i hele planperioden. Dersom det i løpet av planperioden må sette inn en ny lærer (velg _Endre gruppe_), blir opprinnelig lærer likevel stående urørt, altså ikke erstatet med ny lærer eksempelvis i uke 34. Skjer lærerbyttet i uke 34, og skal gjelde ut skoleåret, må en gjøre endringen fra det ekspanderte bildet. Man markerer uke 34, holdlder Shift-tasten ned når siste uke i planperrioden markeres, Da kan ny lærer settes inn for hele perioden. 

:::note Merk
Dersom det er et vikariat (altså begrenset periode med annen lærer), kan menyvalget _Vikar i fag_ være et bedre alterntiv.
:::

![bilde](https://user-images.githubusercontent.com/80097133/195068769-d4313ffe-b00b-47eb-8992-c21182c4d81a.png)

Dersom undervisningen i faget skal styrkes med ekstra lærer(e), legges det inn her. Tolærer-ordningen kan gjelde for en begrenset periode, det blir synliggjort på timeplanen. Her føres opp uketimer, og totalt timer for hele planperioden. Det er timeplanlegger som skal fordele årstimene på fagets timeplan. Tolærertimene kan av timeplanlegger bare plasseres der faget har ordinær undervisning.

Alternativt kan en legge til/endre tolærer fra menyvalget _Tolærerfag_.

![bilde](https://user-images.githubusercontent.com/80097133/146531536-c97961e5-415e-45dd-9727-5373c4f01c46.png)




