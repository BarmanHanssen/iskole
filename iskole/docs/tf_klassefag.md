---
id: tf_klassefag
title: Klassefag
sidebar_label: Klassefag
---


_Gjeldende versjon av iSkole:_ (Nederst gis innblikk i ny versjon som er under utvikling.)

![bilde](https://user-images.githubusercontent.com/80097133/194847356-b7d4dbfc-e497-41b2-8a63-c26e44735d7b.png)

Nå vises alle klassefagene som ble lagt inn fra _Grunnlagsdata>Klasse_, og hvem som er registrert som fagansvarlig for det enkelte klassefag.

:::note Merk 
Ressursfordelingen for faget ( se _Grunnlagsdata>Fag_. Årstime/Årsramme gir ressursen) gis til faglæreren som står oppført på første linje. Skal ressursen fordeles, må det korrigeres fra _Andre ressurser_ ved et fratrekk for fagansvarlig og tilsvarende tillegg for de(n) andre. 
:::

**Fag**

Her har vi eksandert faget HIS. Da vises alle ukene i skoleåret. Når faglærer først legges inn, blir vedkommende automatisk plassert som lærer for alle ukene. Dersom læreren eksempelvis slutter til jul, og fra januar erstattes av ny lærer: Da endrer vi læreren ved å benytte ikonet _Endre lærer..._ Deretter må vi også endre navnet på alle ukene etter jul, men ikke ukene før jul. Da beholder vi altså historikken for faget. Annet eksempel: Lærer skal ha permisjon en eller flere uker. Da kan erstatningslærer legges inn kun i permisjonstiden. (Alternativt kan _Vikar i fag_ benyttes dersom ikke alle timene på ukesbasis skal dekkes av en lærer.)

![bilde](https://user-images.githubusercontent.com/80097133/194849763-ea89a63c-0410-41bf-9c59-a15a66244a05.png)

**Fagkode** 

Dersom fagkoden er 999999, skal faget ikke ha vurdering. Men faget (kanskje en komponent av annet fag?) skal timeplanlegges på ordinær måte.

**Fagnavn (timeplan)** 

Brukes ved utskrift av timeplanen og er hentet fra _Grunnlagsdata>Fag_ se _Timeplandata_. Teksten kan være forskjellig fra det offisielle navnet som er bestemt ut fra tabellen som fås frem fra _Grunnlagsdata>Fagkode_. Den offisielle navnet kommer på kompetansebevis og vitnemål.

![bilde](https://user-images.githubusercontent.com/80097133/194848385-1667bdf4-40a3-487e-ab71-280159ff262a.png)

Første gang et fag får tildelt lærer, vil læreren som velges automatisk få tildelt undervisning i hele planperioden.
Hvis man senere gjør en endring av faglæreren, så vil ikke iSkole sette
den nye læreren inn i ukene hvor det allerede er regsitret en lærer. Et fag kan skifte faglærer i løpet av skoleåret. Gjør da følgende:
- Ekspander faget ved å klikke på pilen først på linja.
- Marker alle ukene som skal ha ny faglærer. For å markere flere uker i en serie, klikk på første uke, hold inne «shift» og klikk på siste uke. For å markere flere enkeltuker, klikk på uken mens du holder inne «ctrl»-tasten.
- Klikk _Endre lærer_.
- Velg læreren fra nedtrekkslista. Hvis det er markert i avkrystningsboksen _Vis kun lærere som har fagkoden_ , så vil kun lærere som tidligere har hatt faget vises. Hvis det ikke finnes noen fylles listen med alle lærerne ved skolen. Se _Personal -> Ansatt_ og arkfanen _Undervisningsfag_ for å redigere fag til en lærer. Kun ansatte hvor det er avhuket for _Pedagogisk ansatt_ kommer med på nedtrekkslisten.
- Trykk på _OK_.

Når klassens timeplanen vises, hentes læreren ut fra timeplanens ukenummer slik det er registrert her.

:::note Merk
Det er ikke mulig å registrere et fag på læreren dersom det vil medfører kollisjon på lærerens allerede lagte timeplan.
:::
:::note Merk 2
Ressursfordelingen for faget gis til faglæreren som står oppført på første linje. Skal ressursen fordeles, må det korrigeres fra _Andre ressurser_ ved å legge inn et fradrag for læreren som står oppført som fagansvarlig, og legge til denne ressursen til læreren som underviser.
:::


![bilde](https://user-images.githubusercontent.com/80097133/194858834-62731284-434c-4ba9-8688-cf11fbba31a6.png)


Dersom et fag skal ha mer enn en lærer, kan en legge til ekstra lærer(e) her. Her skal man også oppgi uketimetallet, og antall årstimer. Tolærer har sine timer på samme tidspunkt som fageet, men kanskje ikke i alle ukene i skoleåret. Disse timene kan kan først plasseres på timeplanen når faget timeplanlegges.
:::note Merk
Tolærerfag har et eget menyvalg. Du må inntil videre inn der for å slette en tolærer.
:::

## --------------------------------------------------------------------------
# _Her følger dokumentasjonen for ny versjon av iSkole, som snart kommer!_

## Generelt
Her kan en legge inn data som knytter sammen fag og lærer for all undervisning som planlegges iverksatt for dette skoleåret. Dette vil være grunnlaget for timeplanlegger. Dersom man i tillegg legger til relevant ressursbruk for andre tjenester (menyvalget _Andre ressurser_) vil i sum disse data være et godt grunnlag for videre budsjetteringsarbeid. Eksempelvis kontrollere at den enkelte lærer får en stillingsstørrelse som tilsvarer tilsettings-kontrakten (se _Rapporter>Stillingsoversikt_). Og ressurs for den enkelte klasse, og for valgfagene (registrert fra _Gruppefag_.).

Time- og fagfordelingen planlegges gjerne på vårparten for skoleåret som starter til høsten. På den tid er antall elever i klassene, og i gruppefagene ikke kjent, eller i beste fall usikre. Når vi likevel viser tallene her, er det med tanke at på at når neste skoleår er startet, vil en herfra få oppdatert oversikt over reelt elevtall, og ikke minst hvor mang timer som er timeplanlagt i det enkelte fag og for den enkelte lærer i faget (et faget kan ha flere lærere). Resultatet blir vist som klokketimer, og tar altså høyde for at undervisningstimene kan ha varierende lengde.

### Klasser og fag

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/50506353-1838-4b4a-ac01-ce4abbc59eb3)

Tabellen er todelt. Fagene,som vises på hvit bakgrunn, er registrert fra  _Grunnlagsdata>Klasser_. Eventuell endring av klasser og klassens fagsammensetning må gjøres derfra. Endring av verdiene for fagnavn, fagkode, omfang, ressurs, uketimer og årstimer gjøres fra _Grunnlagsdata_>Fag_.

Lærere som skal undervise i fagene vises til høyre for fagene på lyseblå bakgrunn

### Vi ser på den lyseblå delen av tabellen:
Det er her vi kan legge inn faglærerne i det enkelte fag. Klikk på ikonet ![image](https://github.com/BarmanHanssen/iskole/assets/80097133/9feb80ca-5ba0-468b-ab8a-887bdafbe040), og du får frem følgende skjema:
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/d2f4701a-cfb8-412f-a6ca-c71b31ad259f)


#### Legg til lærer
Nedtrekkslisten kan vise alle tilsatte som er registrert som pedagoger (se _Personal>Ansatt_). Vanligvis har hvert fag en lærer, og læreren får da fagets ressurs slik det er lagt inn fra _Grunnlagsdata>Fag_. Men det er mulig  overstyre disse verdier her, det er mest aktuelt når flere lærere deler på undervisningen i faget. Eksempelvis at faget skal styrkes ved at to (eller flere) lærere er tilstede i noen timer, eksempelvis når klassen er i svømmehallen (funksjon som assistent?), eller når en elev har ekstra lærer (funksjon som toærer), eller at et fem-timers fag deles slik at en lærer har tre timer, og den andre to timer i hele, eller deler av skoleåret. Annet eksempel: En lærer slutter i skoleåret, ny lærer overtar. Da legges ny lærer til. Dersom lærer som slutter, alt har gjennomført undervisning i faget, slettes ikke læreren herfra. I motsatt fall mistes dokumentasjonen om lærerens undervisning i faget, og timene blir stående oppført uten lærer.

For å gjøre endringer på lagrede data klikkes det på gult ikon:
![image](https://github.com/BarmanHanssen/iskole/assets/80097133/b4c4bd4c-3496-4550-9dc9-99c4244c3932)

Ikonet for å slette virker kun på fag som har fått registrert lærer. Det er bare mulig å slette læreren, faget blir stående.


#### Fag, Fagnavn, Fagkode, Omfang
Datagrunnlaget for fagene kan bare endres fra _Grunnlagssdata>Fag_. Omfanget er hentet fra fagets fagplan og angir hvor mange klokketimer som skal benyttes til undervisning. Skolen skal kunne dokumentere at det er gitt et undevisningstilbud som fullt ut dekker dette timetallet. Timeplanen for hele skoleåret er her en vesentlig del av den dokumentasjonen.
#### Prosent fag/lærer
Prosent fag er registrert fra _Grunnlagsdata>Fag_. Prosent fag angir fagets leseprosent. Prosent lærer: Vanligvis lik Prosent fag. Men dersom en lærer ikke dekker undervisningen alene, kan prosenten for læreren justeres her. 
#### Uketimer fag/lærer
Timetallet er utgangspunktet for timeplanlegger. Kan justeres både opp og ned på ukesbasis under timeplanleggingen. 
#### Årstimer fag/lærer
Vi anbefaler at en benytter klokketimer (dvs fagets omfang) når fagets årstimer fastsettes. Dersom en lærer dekker et fag alene, tildeles læreren fagets årstimer.
Antall årstimer for faget registreres av skolen selv (fra _Grunnlagsdata>Fag_).  Dersom skolen benytter 45 min timer, skal tallet her tilsvare Omfang*4/3. Dersom flere lærere står for undervisningen i faget må Årstimer for den enkelte lærer justeres.
#### Timeplanlagt fag/lærer
Summen av allerede timeplanlagte timer i faget vises her. Dersom flere lærere deler faget, vil den enkelte lærere kunne ha færre timer på sin timeplan. Før timeplanen er lagt vil tallet null vises her. Når timeplanen er lagt for hele skoleåret skal fagets timeplanlagte timer tilsvare fagets omfang. Og summen av timeplanlagte timer for fagets lærere skal minst være lik fagets timeplan dersom alle timeplanlgte timer har registreret (minst) en lærer.
#### Funksjon
Kan her markere at læreren er eksempelvis assistent eller tolærer. Man kan legge til ny tekst for funksjonen, eksempelvis sluttet/start-dato for undervisningen i faget.
#### Karaktertilgang
Standardverdien er Ja. Dersom flere lærere dekker faget, kan Nei også være aktuell verdi.
#### Elever 
Viser hvor mange elever som er registrert i faget på visningsdatoen. Vanligvis er alle elevene i klassen registrert i alle klassens fag.

-------------------------------------------------------------------------
