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

Time- og fagfordelingen planlegges gjerne på vårparten for skoleåret som starter til høsten. På den tid er antall elever i klassene, og i gruppefagene ikke kjent, eller i beste fall usikre. Når vi likevel viser tallene her, er det med tanke at på at når neste skoleår er startet, vil en herfra få oppdatert oversikt over reelt elevtall, og ikke minst hvor mang timer som er timeplanlagt i det enkelte fag og for den enkelte lærer i faget (et faget kan ha flere lærere). Resultatet blir vist som klokketimer, og tar altså høyde for at undervisningstimene kan ha varierende lengde.

### Klasser og fag

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/50506353-1838-4b4a-ac01-ce4abbc59eb3)

Tabellen er todelt. Fagene,som vises på hvit bakgrunn, er registrert fra  _Grunnlagsdata>Klasser_. Eventuell endring av klasser og klassens fagsammensetning må gjøres derfra. Endring av verdiene for fagnavn, fagkode, omfang, ressurs, uketimer og årstimer gjøres fra _Grunnlagsdata>Fag_.

På lyseblå bakgrunn vise lærene som skal undervise i fagene.

### Vi ser på den lyseblå delen av tabellen:
Det er her vi kan legge inn faglærerne i det enkelte fag. Klikk på ikonet ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/9feb80ca-5ba0-468b-ab8a-887bdafbe040), og du får frem følgende skjema:
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/d2f4701a-cfb8-412f-a6ca-c71b31ad259f)


#### Legg til lærer
Nedtrekkslisten kan vise alle tilsatte som er registrert som pedagoger (se _Personal>Ansatt_). Vanligvis har hvert fag en lærer, og læreren får da fagets ressurs slik det er lagt inn fra _Grunnlagsdata>Fag_. Men det er mulig  overstyre disse verdier her, det er mest aktuelt når flere lærere deler på undervisningen i faget. Eksempelvis at faget skal styrkes ved at to (eller flere) lærere er tilstede i noen timer, eksempelvis når klassen er i svømmehallen (funksjon som assistent?), eller når en elev har ekstra lærer (funksjon som toærer), eller at et fem-timers fag deles slik at en lærer har tre timer, og den andre to timer i hele, eller deler av skoleåret. Annet eksempel: En lærer slutter i skoleåret, ny lærer overtar. Da legges ny lærer til. Dersom lærer som slutter, alt har gjennomført undervisning i faget, slettes ikke læreren herfra. I motsatt fall mistes dokumentasjonen om lærerens undervisning i faget, og disse timene blir stående oppført uten lærer.

For å gjøre endringer klikker du på raden som skal endres. Raden ekspanderes og fagets lærere vil vises. 
![image](/img/tf_klassefag_laerere.png)

Ikonet for å slette virker kun på fag som har fått registrert lærer. Det er bare mulig å slette læreren, faget blir stående.

#### Ressurs, årstimer,timeplanlagt
Dersom faget har flere lærere vises summen av tildelt Ressurs og Årstimer for alle lærerne. Timeplanlagte timer i faget gjelder for selve faget, og er upåvirket av hvor mange lærere som er involvert i de enkelte timene.
For fag med fagkoder forskjellig fra 999999: Skolen kan dokumentere undevisningstilbud med henvisning til Årstimer da timetallet er klokketimer. Antall Årstimer skal da motsvare fagets Omfang. Eventuelt må  for få årstimer kunne dokumenteres på annen måte.

#### Funksjon
Kan her markere at læreren er eksempelvis assistent eller tolærer. Man kan legge til ny tekst for funksjonen, eksempelvis sluttet/start-dato for undervisningen i faget.
#### Karaktertilgang
Standardverdien er Ja. Dersom flere lærere dekker faget, kan Nei også være aktuell verdi.
#### Elever 
Viser hvor mange elever som er registrert i faget på visningsdatoen. Vanligvis er alle elevene i klassen registrert i alle klassens fag.

-------------------------------------------------------------------------
