---
id: tf_klassefag
title: Klassefag
sidebar_label: Klassefag
---

:::info Ny versjon av iSkole
Vi har endret oppbyggingen av timeplane på iSkole, les mer om dette [her](https://dokumentasjon.iskole.net/blog/timeplan). Dokumentasjon av gammel løsning finner du [her](https://dokumentasjon.iskole.net/docs/tf_klassefag_old). 
:::

## Generelt
Her kan en legge inn data som knytter sammen fag og lærer for all undervisning som planlegges iverksatt for dette skoleåret. Dette vil være grunnlaget for timeplanlegger. Dersom man i tillegg legger til relevant ressursbruk for andre tjenester (menyvalget _Andre ressurser_) vil i sum disse data være et godt grunnlag for videre budsjetteringsarbeid. Eksempelvis kontrollere at den enkelte lærer får en stillingsstørrelse som tilsvarer tilsettings-kontrakten (se _Rapporter>Stillingsoversikt_). Og ressurs for den enkelte klasse, og for valgfagene (registrert fra _Gruppefag_.).

Time- og fagfordelingen planlegges gjerne på vårparten for skoleåret som starter til høsten. På den tid er antall elever i klassene og i gruppefagene ikke kjent, eller i beste fall usikre. Når vi likevel viser tallene her, er det med tanke på at når neste skoleår har startet, vil en herfra få oppdatert oversikt over reelt elevtall, og ikke minst hvor mang timer som er timeplanlagt i det enkelte fag og for den enkelte lærer i faget (et faget kan ha flere lærere). Resultatet blir vist som klokketimer, og tar altså høyde for at undervisningstimene kan ha varierende lengde.

## Klasser og fag

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/618410a6-0d9c-4df6-a363-41f3fa566d86)

Tabellen er todelt. Fagene,som vises på hvit bakgrunn, er registrert fra  _Grunnlagsdata>Klasser_. Eventuell endring av klasser og klassens fagsammensetning må gjøres derfra. Endring av verdiene for fagnavn, fagkode, omfang, ressurs, uketimer og årstimer gjøres fra _Grunnlagsdata>Fag_.

På lyseblå bakgrunn vises lærerne som skal undervise i fagene.

## Vi ser på den lyseblå delen av tabellen
Det er her vi legger inn faglærerne i det enkelte fag. For å registrere lærer i kroppsøving i klasse AD3D:
Klikk på ikonet ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/9feb80ca-5ba0-468b-ab8a-887bdafbe040) for å få frem følgende skjema:

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/ce8e4480-5c8f-4957-bb10-82f02d7ad683)

Nedtrekkslisten _Lærer_ kan vise alle som er registrert som pedagoger (se _Personal>Ansatt_). Vi velger Peder Aas, og beholder default-verdiene slik de er. Etter lagring får vi dette reultatet:

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/9bd451ee-9151-47cb-a635-51c7d7563220)

Nå kommer AP3D KRØ på to linjer. For Peder kan vi endre verdiene som er lagt inn (klikk blyant-ikonet), eller fjerne Peder som lærer. Ikonet for å slette virker kun på fag som har fått registrert lærer. Det er bare mulig å slette læreren, faget blir stående.

Dersom faget skal ha en ekstra lærer benytter vi på nytt ikonet  ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/9feb80ca-5ba0-468b-ab8a-887bdafbe040)

## Tabellens kolonner

### Lærer
 Vanligvis har hvert fag en lærer, og læreren får da fagets ressurs slik det vises her (se  _Grunnlagsdata>Fag_).

#### Ressurs, årstimer,timeplanlagt
Dersom faget har flere lærere vises summen av tildelt _Ressurs_ og _Årstimer_ for alle lærerne. Timeplanlagte timer i faget gjelder for selve faget, og er upåvirket av hvor mange lærere som er involvert i de enkelte timene.
For fag med fagkoder forskjellig fra 999999: Skolen kan dokumentere undevisningstilbud med henvisning til _Årstimer_ da timetallet er klokketimer. Antall årstimer skal da motsvare fagets omfang. Eventuelt må for få årstimer kunne dokumenteres på annen måte.

#### Fagansvarlig
Det kan kun være én fagansvarlig lærer i faget, og denne blir da vist med navnet i fet skrift i kolonnen for lærer. Hvis man vil bytte fagansvarlig kan man markere det i skjermbildet for redigering av den læreren som skal overta som fagansvarlig. Ved lagring vil da den tidligere fagansvarlige automatisk miste rollen som fagansvarlig.

#### Funksjon
Kan her markere at læreren er eksempelvis assistent eller tolærer. Man kan legge til ny tekst for funksjonen, eksempelvis sluttet/start-dato for undervisningen i faget.

#### Karaktertilgang
Hvis man ønsker at flere enn den fagansvarlige skal ha tilgang til å føre karakterer i faget, kan man merke av det i feltet for karaktertilgang. 

#### Tilrettelagt
For intern informasjon for skolen. Feltet har ingen videre funksjon på iSkole og informasjonen blir ikke med i noen rapportering.

#### Elever 
Viser hvor mange elever som er registrert i faget på visningsdatoen. Vanligvis er alle elevene i klassen registrert i alle klassens fag.

### Endre uketimer for lærer
Ved å klikke på blyanten bak lærerens uketimer får man frem en tabell med alle ukene med oversikt over antall uketimer som er tildelt fag og lærer og hvor mange timer som er timeplanlagt. Her kan man for den enkelte uke justere ned lærerens uketimer. Det er ikke mulig å justere lavere enn det som er timeplanlagt for læreren, da må man først slette timer fra lærerens timeplan. Under tabellen har man to valg som gjelder for de ukene man markerer i tabellen, _Slett timeplanen valgte uker_ og _Bytt lærer for valgte uker_.

![uketimer](/img/tp_klasse_uketimer.png)

#### Slett timeplanen valgte uker
Denne knappen vil slette timeplanen til den valgte læreren for de ukene som er avkrysset i tabellen.

#### Bytt lærer for valgte uker
Denne funksjonen er nyttig dersom man ønsker at en annen lærer skal overta timeplanen til den valgte læreren én eller flere uker. Marker ukene det gjelder, velg læreren du ønsker skal overta og klikk _Bytt lærer for valgte uker_. iSkole vil nå kontrollere om denne læreren har mulighet til å overta. Hvis mulig vil byttet bli gjennomført, hvis ikke vises en tabell med kollisjonene som forhindrer byttet. Hvis den nye læreren ikke allerede er registrert i faget blir læreren lagt til og får det antall uketimer som var timeplanlagt for læreren som hadde faget tidligere. Uketimene til læreren som har gitt fra seg timeplanen sin blir nedjustert til 0 for de valgte ukene.

Eksempel på kollisjon ved bytte av lærer.
![uketimer](/img/tp_klasse_bytte_laerer.png)
