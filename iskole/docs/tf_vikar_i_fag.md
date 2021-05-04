---
id: tf_klassefag
title: Klassefag
sidebar_label: Klassefag
---

## Klassefag
Her registreres hvem som skal undervise fagene i en klasse. Registreringen skjer klassevis. Man kan variere lærer for hver uke, og den læreren som står registrert på første linje trenger ikke engang undervise i faget. Læreren som
står på toppen er den som anses som ansvarlig faglærer. 

**Klasse** Ekspander en klasse ved å klikke på pilen. Alle fagene for denne klassen vil vises. Læreren er det eneste som kan endres. 

**Fag** Fagsammensetningen for klassen bestemmes fra _Grunnlagsdata -> Klasse_ og kan bare endres derfra.

**Fagkode** Dersom fagkoden er forskjellig fra 999999, skal faget ha vurdering
og utskrives på vitnemål eller kompetansebevis.

**Fagnavn** brukes ved utskrift av timeplanen. Teksten kan være forskjellig
fra den offisielle som er bestemt ut fra _Fagkode_.


### Endre
Første gang et fag får tildelt lærer, vil læreren som settes som ansvarlig
faglærer (første linje) automatisk få tildelt undervisning i hele planperioden.
Hvis man senere gjør en endring av ansvarlig faglærer, så vil ikke iSkole sette
denne læreren inn i undervisningsukene hvis det er lagt inn minst én lærer
for minst én uke. Et fag kan noen ganger skifte faglærer i undervisning i
løpet av skoleåret. For å skifte lærer ut skoleåret gjør en følgende:
- Ekspander faget ved å klikke på pilen først på linja.
- Marker alle ukene som skal ha ny faglærer. For å markere flere uker i en serie, klikk på første uke, hold inne «shift» og klikk på siste uke. For å markere flere enkeltuker, klikk på uken mens du holder inne «ctrl».
- Klikk _Endre_.
- Velg læreren fra nedtrekkslista. Hvis det er markert i avkrystningsboksen _Vis kun lærere som har fagkoden - hvis ingen er knyttet til faget vises alle_, så vil kun lærere som har fått registrert fagkoden vises såfremt det finnes
noen lærere med den aktuelle fagkoden. Hvis det ikke finnes noen fylles listen med alle lærerne ved skolen. Se _Personal -> Ansatt_ og arkfanen _Undervisningsfag_ for å redigere fag til en lærer.
- Trykk på _OK_.

Når timeplanen vises, hentes læreren ut fra timeplanens ukenummer.

:::note Merk
Dersom faget som tilordnes en lærer er timeplanlagt, sjekkes det om det blir kollisjon mot lærerens timeplan. Det er ikke mulig å registrere faget på læreren i uker som medfører kollisjon på lærerens timeplan.
:::
:::note Merk 2
Ressursfordelingen for faget gis til faglæreren som står oppført på første linje. Skal ressursen fordeles, må korrigerringen gjøres fra Annen ressurs.
:::
