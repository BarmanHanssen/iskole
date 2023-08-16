---
id: tf_gruppefag
title: Gruppefag
sidebar_label: Gruppefag
---

Her registreres hvilke grupper som skolen i år skal sette i gang. 

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/3cb02c74-b401-4917-838a-df6f115ffb52)

 
Alle fag som er registrert fra _Grunnlagsdata>Gruppefag_ kommer med her. 
I utgangspunktet er fagene merket med blå farge i kolonnen # hvilket betyr at faget ikke er utvalgt i år. 

Når skolen har besluttet hvilke grupper som skal sette opp, kan man registrere alle grupper,  uten å legge inn andre data.

For å opprette en gruppe klikker man på faget, eksempelvis ST2 BIO, deretter på ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/e6ed7e2b-11a6-4cc0-80a8-dc60d13077ec)
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/8c6982bb-864f-40fe-ab0a-f2aacd68132e)

Trykker man her direkte på Ok er gruppen opprettet.

Når et fag velges vil blåfargen bli erstattet med tallet 1 (standardverdi). Vi kan altså opprette samtlig gruppefag som skal benyttes uten å gi noen tilleggsopplysninger. 

Vi ser nå på hva som kan legges inn, og hva som automatisk følger med av data for det enkelte gruppefag.

:::note Merk 
Ressursfordelingen for faget ( se _Grunnlagsdata>Fag_. Årstime/Årsramme gir ressursen) gis til faglæreren som står oppført på første linje. Skal ressursen fordeles, må det korrigeres fra _Andre ressurser_. 
:::
### # (gruppenr)
Dersom mer en en gruppe i et fag blir opprettet, må de silles ved gruppenummer. Vanligvis benyttes 1 og 2 dersom 2 grupper i faget opprettes. 

### Elevant
Når ny gruppe registreres, vil  elevantallet  være null. Dersom skjermbildet tas opp senere, etter at elevene er plassert fra _Elevadmin.>Fag_, og/eller etter at elevene selv har valg gruppe, vil tallet avspeile hvor mange elever som er registrert i faget.

### Uketimer
Uketimer, registrert fra _Grunnlagsdata>Fag_, er gjerne fast gjennom hele skoleåret. Men timeplanlegger kan justere det på ukesbasis når timeplanen legges.

### Årstimer
Totalt antall timer som skal timeplanlegges. Det er timeplanmlegger som må påse at faget får nok undervisningstid ut fra ferdiglagt timeplan. Årstimer kan avvike fra fagets omfang. Fagets _Omfang_ er fastsatt i fagplanen, og er angitt i klokketimer. Dersom skolen har timelengde som ikke er på 60 minutter, vil timer på timeplanen (årstimer) avvike fra fagets omfang. Det fins rapporter som summerer timer for hvert timeplanlagte fag, og gir svaret i klokketimer. 

### %
Angir leseprosenten i faget, beregenet ut fra brøken årstimer/årsramme. Verdien på årstimer og årsramme er registert på faget, se _Grunnlagsdata>Fag_.

### Lærer
Kortnavn som identifiserer lærerens hele navn. Brukes blant annet på timeplanen.

### Uke
Omtales til slutt.

### Fagkode og omfang
Offiselle koder, benyttes på karakterutskrifter. Untak for fagkode 999999 som et fag, eller del av et annet fag, som skal timeplanlegges. 

### Kostnadssted
Kan benyttes dersom skolen også bruker iSkole til f.eks budsjettering/regnskap.

### Blokkid (vises ikke på figuren)
Fag med likt blokkid timeplanlegges parallelt. iSkole vil forhindre at fag med lik blokkid får samme lærer.

Dersom skolen også lar elevene selv velge gruppe, kan en elev ikke velge to fag med samme blokkid.


## Ekspander et fag

Vi får da frem alle ukene i planperioden, se eksemplet:

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/30b601ba-5d4c-41b7-8ac6-379a3fd27845)



Når en legger til en ny gruppe og gruppens lærer, blir læreren satt som lærer i hele planperioden. Dersom det i løpet av skoleåret må sette inn en ny lærer (velg _Endre gruppe_), registreres endringen her. Anta at lærerbyttet skjer i uke 34, og skal gjelde ut skoleåret. Man markerer uke 34, holdlder Shift-tasten ned  og marker siste uke for læreren. Merk at fagansvarlig (første linje) ikke endres automatisk, selv om lærerskiftet gjelder for resten av skoleåret.

:::note Merk
Dersom det er et vikariat (altså begrenset periode med annen lærer), kan menyvalget _Vikar i fag_ være et bedre alterntiv.
:::

![bilde](https://user-images.githubusercontent.com/80097133/195068769-d4313ffe-b00b-47eb-8992-c21182c4d81a.png)

Dersom undervisningen i faget skal styrkes med ekstra lærer(e), legges det inn her. Tolærer-ordningen kan gjelde for en begrenset periode, det blir synliggjort på timeplanen. Her føres opp uketimer (kan endres av timeplanlegger), og totalt timer for hele planperioden. Det er timeplanlegger som skal fordele årstimene på fagets timeplan. Tolærertimene kan av timeplanlegger bare plasseres der faget alt er timeplanlagt.

Alternativt kan en legge til/endre tolærer fra menyvalget _Tolærerfag_.

![bilde](https://user-images.githubusercontent.com/80097133/146531536-c97961e5-415e-45dd-9727-5373c4f01c46.png)





