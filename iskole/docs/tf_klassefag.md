---
id: tf_klassefag
title: Klassefag
sidebar_label: Klassefag
---

## Klassefag
Her registreres hvem som skal undervise i en klasse. Læreren som står registrert på første linje er fagansvarlig, og er den som fører inn terminkarakteren i faget. Vedkommende blir automatisk satt opp som lærer for hele skoleåret, det vil si for alle ukene. Men man kan variere lærer uke for uke, uavhengig av hvem som er fagansvarlig.

Skjermbilde ved oppstart:

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/4d5fd320-734d-46c2-9bbe-d9899d9904c8)





I eksemplet har vi ekspandert klasse ST3A:

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
  
