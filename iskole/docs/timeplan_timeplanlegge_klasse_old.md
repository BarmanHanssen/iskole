---
id: timeplan_timeplanlegge_klasse_old
title: Klasser (Gammel iSkole)
sidebar_label: Klasser
---

:::warning Gammel versjon 
Denne siden dokumenterer forrige versjon av iSkole.
:::

Benevnelsen klassefag, obligatorisk fag og fellesfag er synonyme betegnelser. Vi benytter oftes klassefag. 

Timeplanen for klassefag skal inneholde all organisert undervisning i  alle klassefag til klassen. Eventuell endring av fagsammensetningen gjøres fra _Grunnlagsdata>Fag>Klassefag_. 

Noen elever kan være fritatt i ett eller flere klassefag. Slike unntak får ingen innvirkning for legging av klassens timeplan. 
Derimot kan elev fra annen klasse som følger undervisningen i et fag i klassen skape begrensninger. Denne elevens timeplan kan allerede være være timeplanlagt, og medføre kollisjoner når timeplanen legges.

Dersom elevene i klassen kan velge fag utover det som hele klassen er satt opp med, klassifiserer vi slike fag som gruppefag. Gruppefag gir naturlig nok begrensninger for oppsettet av klassens timeplan. Timeplanen for klassefag kan ikke kollidere med et gruppefag som en elev i klassen har valgt. Det er av den grunn naturlig først å fastsette når gruppefagene skal ha sine timer før en starter med timeplanleggingen av klassefagene. Vi henviser til egne avsnitt om gruppefag for hvordan dette kan håndteres. Trykk på ?-ikonet oppe i høyre hjørne, der finner du lenken til dokumentasjon for timeplanlegging.

:::tip Tips
Når timeplan for nytt skoleår skal legges, bør en velge første uke i skoleåret som utgangspunkt. Når alle klassene er timeplanlagt, kan man kopiere timeplanen for alle klassene fremover, se menyvalget _Kopiering_. Det er også mulig bare å kopiere den ene klassens timeplan fremover. Det kan ta noe tid, da omfattende kontroller må utføres før kopieringen av en enkelt klasse kan finne sted.
:::
 
:::note Merk
Dersom et fag har tolærer, kan timeplanlegging av timene til tolærer først plassers etter at faget er timeplanlagt i klassen. Alternativt kan dette gjøres fra eget menyvalg, se _Tolærere_.
:::

![bilde](https://user-images.githubusercontent.com/80097133/199968729-afd9263f-f419-46f6-a972-38fc4bd21e46.png)

Skjermen for timeplanlegger er inndelt i fire separate deler (_Fag, Timeplan klasse, Timeplan lærer, Vis timeplan for disse ansatte_) som viser forskjellige deler av datasettet en timeplanlegger må forholde seg til. Sluttresultatet blir timeplanen for en valgt klasse (her ST1A) i en valgt uke (her 2022-34).

## Fag
Her vises alle fag som klassen er satt opp med (fra _Grunnlagsdata>Klasse_), og med faglærerne i det enkelte fag (se _Time- og fagfordeling>Klassefag_). 
Fag uten lærer skiller seg ut ved at de ikke er tildelt fargekode. Dersom det står MODERKL under overskriften Type, er elevene fra en annen klasse gjest i faget. Slike fag anbefales å timeplanlegge før en tar KLFAG da faget også involverer elevene i gjesteklassen.


**+Legg til**: Dersom et fag mangler, kan det legges til her. (Vanligvis er alle fag på plass før en tenker på å timeplanlegge! Fagsammensetningen hentes fra _Grunnlagsdata>Fag_.)

##### Kopier: Man kan kopierer timeplanen for denne uken frem i tid. Se eget avsnitt om kopiering nederst på siden.

- Man kan endre antall timer for et fag i denne uken (via blyant-ikonet bak faget). 
- Dersom faget ikke skal ha timer i denne uken, reduseres timetallet til null. 
- Dersom noen fag allerede er timeplanlagt, vises antallet timeplanlagte timer i kolonnen _TP-lagt_. 
- En timeplanlagt time kan fjernes fra timeplanen ved å høyreklikke på timen. Da justeres _Gjenstår i faget_.
- Det er mulig å legge til fag direkte herfra (se _+Legg til_). Forutsetningen er at faget er tilgjengelig (Se på klassen fra _Grunnlagsdata>Fag_).

Under listen med fag finner man en nedtrekkslisten _Rom_. Her vises alle rom som er registrert fra _Grunnlagsdata>Rom_. Merk at dersom klassen har fått tildelt rom fra _Grunnlagsdata>Klasse_, vil klassens rom være forhåndsvalgt når klassefagene timeplanlegges. Det er mulig å endre rom. Før timen lagres, vil systemet kontrollere at valgte rom er ledig. Det også mulig å utsette valg av rom, altså la timen stå registrert uten rom.

## Timeplan klasse (her: ST1A)
Fargekoder:
- Grønn: Timen er ledig, og kan timeplanlegges.
- Gul: Timen alt er blokkert av gruppefag, men det kan det være mulig å legge klassefaget dersom læreren er ledig. Vil medføre kollisjon for en eller flere av    klassens elever.
- Blå:  Timen er timeplanlagt. Kan fjernes fra timeplanen ved å høyre-klikke på timen (gjelder ikke gruppefag).
- Rosa: Når en velger _Fag_, vil valgte fags timeplan markeres med denne fargen.
- Hvit: Timen kan ikke benyttes. Mulig årsak kan være 1: Læreren er opptatt. 2: Elev i klassen opptatt med undervisning i klassefag i annen klasse. 3: Elev fra annen klasse er elev i dette faget, og er alt opptatt med undervisning i fag i sin klasse.

Noen timer er markert med grønn farge. Det er alle timene som kan timeplanlegges i denne uken, uten å kollidere mot andre fag i klassen, eller mot timer i andre fag som faglærer i faget allerede har fått tildelt. 

Vi ser at de to første timene på fredag er uten fargemarkering. Det skyldes at læreren som har det utvalgte faget vi ser på (ENG), allerede er opptatt med annen undervisning (ID1G ENG). 

Ut fra dette skjønner en umiddelbart at det er en god ide å  ha faglærerne på plass før en timeplanlegge en hel klasse.

:::note  Merk
Noen timer på klassens timeplan kan være hvite. Det betyr at disse timene ikke kan benyttes for det valgte faget, tiltross for at læreren er ledig. Dette kan skyldes at en, eller flere, elever alt er opptatt i timen med et klassefag som tas i en annen klasse. Gå til Mine sider>Timeplan>Elevtimeplan, bruk filter _Klasse_, og velg første elev. Du får da frem timeplanen til eleven. Bruk pil-tast på elevlisten til å bla fremover til du finner elev som er timeplanlagt på blokkerte tidspunkt. En annen mulighet: En elev fra en annen klasse følger faget. Gå til Elevadmin.>Rapporter>Faglister, der finner du alle elevene i faget.
:::

## Timeplan lærer
Når en velger et Fag som har fått tildelt lærer, vises automatisk timeplanen til valgte lærer i dette skjermbildet med den fargekoden som faget er tildelt. Timeplanen for klassen oppfriskes også, og allerede lagte timer i valgte fag markeres med rosa farge. Ledige timer i klassens timeplan hvor læreren alt er opptatt med annen undervisning blir blanket ut. Se timeplanen på torsdag i skjermbildet ovenfor!

## Vis timeplanen til disse ansatte
Ofte kan det være greit å ha oversikt over timeplanen til andre lærere enn bare den som nå har fokus. Ekstra-lærernes timeplanen vises da sammen med timeplanen til faglæreren i skjermbildet Timeplan lærer.

## Timeplanlegge klasse>Kopier

Alle øverst i skjermbildet finner vi valget _Kopier_. Her kan en kopiere timeplanen for denne klassen frem i tid. Når man legger ny timeplan for neste skoleår er det unødvendig å benytte dette valget!

Vanligste måte å kopiere timeplan på, er fra menyvalget _Kopiering_. Kopieringen gjøres typisk når hele timeplanen for skolen er ferdigstilt, altså etter at samtlige klasse- og gruppefag, og tolærerfag, er timeplanlagt, og hvor fagene er registrert med lærer og rom. Da tas den ferdige timeplan for hele skolen og kopieres fremover til et fritt valg antall uker (ofte: hele skoleåret). 

Å kopiere timeplanen for en separat klasse kan være påkrevd dersom man endrer timeplan for en klasse ut i skoleåret. Timeplanen kan i prinsippet endres fra uke til uke. Timeplanen for en annen klasse frem i tid kan være ulik den som gjelder for denne uken. Å kopiere en enkelt klasses timeplan krever derfor omfattende kontroller for å fastslå at timeplanen kan implementeres uten at klassens nye timeplan kommer i konflikt med timeplanen til de andre klassene. Dersom kollisjon(er) avdekkes, finner kopiering ikke sted.

Sammenfattet: På et hvilket som helst tidspunkt under timeplanleggingen kan resultatet kopieres fremover, uke for uker. Dersom det gjøres endringer på en allerede gjeldende timeplan, og endringen skal gjelde for mere enn uken hvor en gjør korrigeringen, har man to valgmuligheter: Enten bare å kopiere klassen hvor endringen skjedde, eller ved å kopiere skolens timeplan for denne uken fra menyvalget _Kopiering_. Merk at dersom det bare er snakk om at et fag skal skifte faglærer, uten endring av timene på timeplanen, så gjøres dette fra _Time- og fagfordeling>Klassefag_. Der kan man endre faglærer for de ukene dette måtte være aktuelt.
 