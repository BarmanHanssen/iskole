---
id: tf_klassefag
title: Klassefag
sidebar_label: Klassefag
---
  
## Generelt
Her registreres hvem som skal være lærer(e) i det enkelte fag, og hvilken ressurs som tilkommer den enkelte lærer. Dersom flere lærere i et fag er det timeplanlegger som fastsetter fordelingen av timene (se _Timeplan>KLasser_).

Klassens fag er registrert fra _Grunnlagsdata>Klasse_. Endring i fagsammensetningen for en klasse må gjøress derfra. 

Her knyttes lærer(e) til et klassefag. Dersom man i tillegg til undervisningsressursen til læreren også registrere ressursbruk for eventuelt andre tjenester (menyvalget _Andre ressurser_) kan man kontrollere at læreren får en stillingsstørrelse som tilsvarer tilsettings-kontrakten (se _Rapporter>Stillingsoversikt_).

Time- og fagfordelingen planlegges gjerne på vårparten for skoleåret som starter til høsten. På den tid er antall elever i klassene og i gruppefagene ikke kjent, eller i beste fall usikre. Men fra skoleårets start vil en få oversikt over reelt elevtall i det enkelte fag. Resultatet blir vist som klokketimer, og tar høyde for at undervisningstimene kan ha varierende lengde.

## Klasser og fag

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/618410a6-0d9c-4df6-a363-41f3fa566d86)

Tabellen er todelt. Fagene,som vises på hvit bakgrunn, er registrert fra  _Grunnlagsdata>Klasser_. Endring av klassens fagsammensetning må gjøres derfra. Endring av verdiene for fagnavn, fagkode, omfang, ressurs, uketimer og årstimer gjøres fra _Grunnlagsdata>Fag_.

På lyseblå bakgrunn vises lærerne som skal undervise i fagene.

## Registrere faglærer
Eksempel: Skal registrere lærer i kroppsøving i klasse AD3D. Klikker på ikonet
 ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/9feb80ca-5ba0-468b-ab8a-887bdafbe040) og får da frem følgende skjema:

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/ce8e4480-5c8f-4957-bb10-82f02d7ad683)

Vi velger Peder Aas, og beholder default-verdiene slik de er. Etter lagring får vi dette reultatet:

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/9bd451ee-9151-47cb-a635-51c7d7563220)

Nå kommer AP3D KRØ på to linjer. For Peder kan vi endre verdiene som er lagt inn (klikk blyant-ikonet), eller fjerne Peder som lærer. Ikonet for å slette virker kun på fag som har fått registrert lærer. Det er bare mulig å slette læreren, faget blir stående.

Et fag vil kunne være registrert med flere lærere. Eksempelvis skal en lærer som slutter ikke slettes når ny lærer innføres. Og enkelte fag kan kreve flere lærere i noen timer. Hvilke lærer(e) som er knyttet til den enkelte time vil fremgå av timeplanen. Dersom faget skal ha en ekstra lærer benytter vi på nytt ikonet ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/9feb80ca-5ba0-468b-ab8a-887bdafbe040). 
Dersom flere lærere må fagets ressurs fordeles.

## Tabellens kolonner

#### Lærer
 Vanligvis har hvert fag en lærer, og læreren får da fagets ressurs slik den vises for faget i den hvite delen av tabellen.
 Vi ser at det første faget har to lærere. Ekspanderer vi AP3D HIS får vi frem detaljene:
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/1043bd68-1862-4e8f-9b9b-686eb91fbc5b)

Vi ser her at Jan-Erik er fagansvarlig (uthevet navn) og at fagets 140 årstimer skal fordeles (56+84) mellom lærerne. Bare 3 timer er foreløpig plassert på timeplanen. For å endre årstimetallet, ressursen og uketimer for lærer: klikk på blyant-ikonet for lærerens navn.

:::tip Faget er timeplanlagt for hele året med Peder som lærer. Men så slutter Peder og Berit skal overta som lærer fra nyttår og ut skoleåret. Gjør da følgende:
- Legg til Berit som lærer i faget, men slett ikke Peder selv om han skal slutte. Ressursen til Berit må også tilpasses hennes inntreden i faget
- Klikk deretter på blyant-ikonet for Peder under kolonnen _Uketimer_. DU får frem en tabell med alle årets uker, et utsnitt av tabellen vises her:
  
  ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/3a5a8855-c2a6-4573-9806-115a594d3d84)

  Finn Berit, og huk av ukene hvor Berit overtar timene til Peder, og avslutt med _Bytt lærer for valgte uker_. Dersom dette ikke medfører kollisjon for undervisning Berit allerede har, blir fagets timeplan er oppdatert.
:::
 
#### Uketimer
Dette tallet er utgangspunktet for timeplanlegger. Når timeplanen legges (fra _Timeplan>Klasser_), kan timeplanlegger justere tallet på ukebasis.

#### Ressurs, årstimer,timeplanlagt
Dersom faget har flere lærere vises summen av tildelt _Ressurs_, _Årstimer_ og _Timeplanlagt_ for alle lærerne på første linje. Verdiene for den enkelte lærer kommer bak lærerens navn. 

Skolen kan dokumentere undevisningstilbud med henvisning til _Årstimer_ gitt på blå bakgrunn. Antall årstimer skal da motsvare fagets omfang som står på hvit bakgrunn. Dersom fagets årstimer på hvit bakgrunn er lavere enn summen av tallene for faget på blå bakgrunn må avviket kunne dokumenteres på annen måte.

Når timepllanen er ferdiglagt, skal timeplanlagte timer være likt med årstimer. Timeplanlagte timer blir beregnet ut fra hva som timeplalagt når denne tabellen vises.

#### Fagansvarlig
Det kan kun være én fagansvarlig lærer i faget, og denne blir da vist med navnet i fet skrift i kolonnen for lærer. Dersom flere lærer i faget kan en gjøre endring.

#### Funksjon
Kan her markere at læreren er eksempelvis assistent eller tolærer. Man kan legge til ny tekst for funksjonen, eksempelvis sluttet/start-dato for undervisningen i faget.

#### Karaktertilgang
Hvis man ønsker at flere enn den fagansvarlige skal ha tilgang til å føre terminkarakterer i faget, må det avhukes, se _Karaktertilgang_. 

#### Tilrettelagt
For intern informasjon for skolen. Feltet har ingen videre funksjon på iSkole og informasjonen blir ikke med i noen rapportering.

#### Elever 
Viser hvor mange elever som er registrert i faget på visningsdatoen. Vanligvis er alle elevene i klassen registrert i alle klassens fag.

### Endre uketimer for lærer
Ved å klikke på blyanten bak lærerens uketimer får man frem en tabell med alle ukene i skoleåret. Her kan man for den enkelte uke justere lærerens uketimer, eksempelvis ingen timer etter nyttår. Det er ikke mulig å justere lavere enn det som er timeplanlagt for læreren, da må man først slette timer fra lærerens timeplan. Under tabellen har man to valg som gjelder for de ukene man markerer i tabellen, _Slett timeplanen valgte uker_ og _Bytt lærer for valgte uker_. Merk at timeplanlegger også  kan justere tallet opp eller ned når timeplanen legges.

![uketimer](/img/tp_klasse_uketimer.png)

#### Slett timeplanen valgte uker
Denne knappen vil slette timeplanen til den valgte læreren for de ukene som er avkrysset i tabellen.

#### Bytt lærer for valgte uker
Denne funksjonen er nyttig dersom man ønsker at en annen lærer skal overta timeplanen til den valgte læreren én eller flere uker. Marker ukene det gjelder, velg læreren du ønsker skal overta og klikk _Bytt lærer for valgte uker_. iSkole vil nå kontrollere om denne læreren har mulighet til å overta. Hvis mulig vil byttet bli gjennomført, hvis ikke vises en tabell med kollisjonene som forhindrer byttet. Hvis den nye læreren ikke allerede er registrert i faget blir læreren lagt til og får det antall uketimer som var timeplanlagt for læreren som hadde faget tidligere. Uketimene til læreren som har gitt fra seg timeplanen sin blir nedjustert til 0 for de valgte ukene.

Eksempel på kollisjon ved bytte av lærer.
![uketimer](/img/tp_klasse_bytte_laerer.png)
