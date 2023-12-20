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

## ---------------------------------------------------------------------------
# _Her følger dokumentasjonen for ny versjon av iSkole, som snart kommer!_

## Generelt
Her kan en legge inn data som knytter sammen fag og lærer for all undervisning som planlegges iverksatt for dette skoleåret. Dette vil være grunnlaget for timeplanlegger. I tillegg kan en legge til relevant ressursbruk for andre tjenester. I sum kan disse data være et godt grunnlag for videre budsjetteringsarbeid. Eksempelvis kontrollere at den enkelte lærer får en stillingsstørrelse som tilsvarer tilsettings-kontrakten. Og ressurs for den enkelte klasse, og for valgfagene (registrert som gruppefag).

### Klassefag
Valgbare fag til en klasse er registrert fra _Grunnlagsdata>Fag_.

### Klasser
Klassene, med fag, registreres og endres fra  _Grunnlagsdata>Klasser_. Eventuell endring av klasser og klassens fagsammensetning må gjøres derfra.

Her registreres hvem som skal undervise. Læreren som står registrert på første linje er fagansvarlig, og er den som fører inn terminkarakteren i faget. Vedkommende blir automatisk satt opp som lærer for hele skoleåret, det vil si for alle ukene. Men man kan variere lærer uke for uke, uavhengig av hvem som er fagansvarlig.

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/d9bf182e-e62e-4325-9fc6-6dd81f795993)

### Vi ser på detaljene:

#### Valg
Første ikonet benyttes når ny lærer skal registreres. Det er mulig å registrere flere lærere på samme fag. Eksempelvis kan to lærere dele faget dersom de skal dele på undervisningn, enten for en kortere eller lengre periode. Eller at faget skal styrkes ved at to (eller flere) lærere er tiltede i noen timer, eksempelvis når klassen er i svømmehallen (assistent?), eller når en elev har ekstra lærer (ofte klassifisert som toærer). Når timeplanen legges,vil timeplanlegger vil forholde seg til dette grunnlaget, og må kontrollere at timene blir fordelt over skoleåret slik denne oversikten viser.
Ikonet for å slette virker kunn på fag som har fått registrert lærer. Det er bare læreren som slettes, faget blir stående.
#### Fag, Fagnavn, Fagkode, Omfang
Datagrunnlaget for fagene som fremkommer er registrert, og kan bare endres, fra _Grunnlagssdata>Fag_. Omfanget er hentet fra fagets fagplan og angir hvor mange klokketimer som skal benyttes til undervisning.
#### Prosent fag/lærer
Prosent fag registreres fra _Grunnlagsdata>Fag_. Prosent fag angir fagets leseprosent. Prosent lærer: Vanligvis lik Prosent fag. Men dersom en lærer ikke dekker undervisningen alene, kan prosenten for læreren justeres her. 
#### Uketimer fag/lærer
Timetallet er utgangspunktet for timeplanlegger. Kan justeres både opp og ned av timeplanlegger på ukesbasis. For skoleåret skal summen av alle timeplanlagte timer være likt fagets omfang.
#### Årstimer fag/lærer
Antall undervisningstimer for faget registreres av skolen selv.  Dersom skolen benytter 45 min timer, skal tallet her tilsvare Omfang*4/3. Dersom flere lærere står for undervisningen i faget må Årstimer for den enkelte lærer justeres.
#### Timeplanlagt fag/lærer
Summen av allerede timeplanlagte timer i faget vises her. Dersom flere lærere deler faget, vil den enkelte lærere ha færre timer på sin timeplan. Før timeplanen er lagt vil tallet null vises her.
#### Funksjon
Kan her markere at læreren er eksempelvis assistent eller tolærer. Man kan legge til ny tekst for funksjonen.
#### Karaktertilgang
Standardverdien er Ja, kan endres til Nei.
#### Elever 
Viser hvor mange elever som alt er registrert i faget. Vanligvis er alle elevene i klassen registrert i alle klassens fag.
-------------------------------------------------------------------------
