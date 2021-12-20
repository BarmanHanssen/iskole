---
id: tf_klassefag
title: Klassefag
sidebar_label: Klassefag
---

## Klassefag
Her registreres hvem som skal undervise fagene i en klasse. Registreringen skjer klassevis. Læreren som står på toppen er ansvarlig faglærer. Vedkommende blir automatisk satt opp som lærer for hele skoleåret, det vil si for alle ukene. Men man kan variere lærer for uke for uke. Læreren som står registrert på første linje er fagansvarlig, og er den som fører inn terminkarakteren i faget.

**Klasse** Ekspander en klasse ved å klikke på pilen. Alle fagene for denne klassen vil vises. Læreren er det eneste som kan endres. 

![image](https://user-images.githubusercontent.com/80097133/118616156-b9e07c00-b7c1-11eb-9ff7-8487ba6fe9bd.png)

**Fag** Fagsammensetningen for klassen bestemmes fra _Grunnlagsdata -> Klasse_ og kan bare endres derfra. Ekspander faget for å få frem alle ukene.

**Fagkode** Dersom fagkoden er forskjellig fra 999999, skal faget ha vurdering
og utskrives på vitnemål eller kompetansebevis.

**Fagnavn** brukes ved utskrift av timeplanen. Teksten kan være forskjellig fra det offisielle navnet som er bestemt ut fra _Fagkode_. Den offisielle navnet kommer på kompetansebevis og/eller vitnemål. Navnet for timeplanen kan endres fra _Grunnlagsdata>Fag_.

### Endre lærer
Første gang et fag får tildelt lærer, vil læreren som velges automatisk få tildelt undervisning i hele planperioden.
Hvis man senere gjør en endring av faglæreren, så vil ikke iSkole sette
den nye læreren inn i ukene hvor det allerede er regsitret en lærer. Et fag kan skifte faglærer i løpet av skoleåret. Gjør da følgende:
- Ekspander faget ved å klikke på pilen først på linja.
- Marker alle ukene som skal ha ny faglærer. For å markere flere uker i en serie, klikk på første uke, hold inne «shift» og klikk på siste uke. For å markere flere enkeltuker, klikk på uken mens du holder inne «ctrl»-tasten.
- Klikk _Endre lærer_.
- Velg læreren fra nedtrekkslista. Hvis det er markert i avkrystningsboksen _Vis kun lærere som har fagkoden - hvis ingen er knyttet til faget vises alle_, så vil kun lærere som har fått registrert fagkoden vises såfremt det finnes noen lærere med den aktuelle fagkoden. Hvis det ikke finnes noen fylles listen med alle lærerne ved skolen. Se _Personal -> Ansatt_ og arkfanen _Undervisningsfag_ for å redigere fag til en lærer.
- Trykk på _OK_.

Når klassens timeplanen vises, hentes læreren ut fra timeplanens ukenummer slik det er registrert her.

:::note Merk
Det er ikke mulig å registrere et fag på læreren dersom det vil medfører kollisjon på lærerens allerede lagte timeplan.
:::
:::note Merk 2
Ressursfordelingen for faget gis til faglæreren som står oppført på første linje. Skal ressursen fordeles, må det korrigeres fra _Andre ressurser_ ved å legge inn et fradrag for læreren som står oppført som fagansvarlig, og legge til denne ressursen til læreren som underviser.
:::

### Legg til tolærer
Dersom et fag skal ha mer enn en lærer, kan en legge til ekstra lærer(e) her. Her skal man også oppgi hvor uketimetallet, og antll årstimer. Disse timene kan bare plasseres på timeplanen der faget er timeplanlagt, så den saken må vente til faget timeplanlegges.

:::note Merk
Tolærerfag har et eget menyvalg. Du må inntil videre inn der for å slette en tolærer...
:::

