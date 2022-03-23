---
id: timeplan_timeplanlegge_klasse
title: Timeplanlegge klasse
sidebar_label: Timeplanlegge klasse
---

Benevnelsen klassefag, obligatorisk fag og fellesfag er synonyme betegnelser. Vi benytter oftes klassefag.

Timeplanen for klassefag skal inneholde all organisert undervisning i  alle klassefag til klassen. Endring av fagsammensetningen gjøres fra _Grunnlagsdata>Fag>Klassefag_. 

Noen elever kan være fritatt i ett eller flere klassefag. Slike unntak får ingen innvirkning for legging av klassens timeplan. 
Derimot kan elev fra annen klasse som følger undervisningen i et fag i klassen skape begrensninger. Denne elevens timeplan kan allerede være være timeplanlagt, og medføre kollisjoner når timeplanen legges.

Dersom elevene i klassen kan velge fag utover det som hele klassen er satt opp med, klassifiserer vi slike fag som gruppefag. Gruppefag gir naturlig nok begrensninger for oppsettet av klassens timeplan. Timeplanen for klassefag kan ikke kollidere med et gruppefag som en elev i klassen har valgt. Det er av den grunn naturlig først å fastsette når gruppefagene skal ha sine timer før en starter med timeplanleggingen av klassefagene. Vi henviser til egne avsnitt om gruppefag for hvordan dette kan håndteres. Trykk på ?-ikonet oppe i høyre hjørne, der finner du lenken til dokumentasjon for timeplanlegging.

:::tip Tips
Når timeplan for nytt skoleår skal legges, bør en velge første uke i skoleåret som utgangspunkt. Når alle klassene er timeplanlagt, kan man kopiere timeplanen for alle klassene fremover, se menyvalget _Kopiering_. Det er også mulig bare å kopiere den ene klassens timeplan fremover. Det kan teknisk ta noe tid, da omfattende kontroller må utføres før kopieringen av en enkelt klasse kan finne sted.
:::

![Timeplanlegge klasse][tp_klasse_oversikt]

[tp_klasse_oversikt]: https://barmanhanssen.github.io/iskole/img/tp_klasse_oversikt.png 'Timeplanlegge klasse oversikt.'

Skjermen for timeplanlegger er inndelt i fire separate deler (Fag, Timeplan klasse, Timeplan lærer, Vis timeplan for disse ansatte) som viser forskjellige deler av datasettet en timeplanlegger må forholde seg til. Sluttresultatet blir timeplanen for en angitt klasse (her ST1A) i en valgt uke (her 2020-09).

## Fag
Her vises alle fag som klassen er satt opp med (fra _Grunnlagsdata>Fag>Klassefag_), og med faglærerne i det enkelte fag (se _Time- og fagfordeling>Klassefag_). Fag uten lærer skiller seg ut ved at de ikke er tildelt fargekode. Dersom det står MODERKL under overskriften Type, er elevene fra en annen klasse gjest i faget. Slike fag anbefales å timeplanlegge før en tar KLFAG.

- Man kan endre antall timer for et fag i denne uken (via blyant-ikonet bak faget). 
- Dersom faget ikke skal ha timer i denne uken, reduseres timetallet til null. 
- Dersom noen fag allerede er timeplanlagt, vises antallet timeplanlagte timer i kolonnen _TP-lagt_. Se på faget NAT, som skal ha 6 timer, hvorav 2 timer er lagt på tirsdag. Vi ser da at 4 timer _Gjenstår i faget_. 
- En timeplanlagt time kan fjernes fra timeplanen ved å høyreklikke på timen. Da justeres _Gjenstår i faget_.
- Det er mulig å legge til fag direkte herfra (se _+Legg til_). Forutsetningen er at faget er tilgjengelig (Se på klassen fra Grunnlagsdata>Fag_, klikk på _Endre_).

Under listen med fag finner man en nedtrekkslisten _Rom_. Her vises alle rom som er registrert fra _Grunnlagsdata>Rom_. Merk at dersom klassen har fått tildelt rom fra _Grunnlagsdata>Klasse_, vil klassens rom være forhåndsvalgt når klassefagene timeplanlegges. Det er mulig å endre rom. Før timen lagres, vil systemet kontrollere at valgte rom er ledig. Det også mulig å utsette valg av rom, altså la timen stå registrert uten rom.

## Timeplan klasse ST1A
Fargekoder:
- Grønn: Timen er ledig, og kan timeplanlegges.
- Blå:  Timen er timeplanlagt. Kan fjernes fra timeplanen ved å høyre-klikke på timen.
- Rosa: Når en velger _Fag_, vil valgte fags timeplan markeres med denne fargen.
- Hvit: Timen kan ikke benyttes. Mulig årsak: Elev i klassen opptatt med undervisning i annen klasse, eller elev fra annen klasse er elev i dette faget.

Her vises hvilke timer som alt er plassert, her to timer i NAT, og en time i ENG (mandag kl 8:15). Videre ser vi at faget ENG er markert under Fag. Det har fått tildelt en rosa farge, og denne fargen tas med når timene i faget plasseres. Det blir dermed lett å få oversikten som trengs for å fordele timene over ukens dager.

Dersom man ønsker en dobbel-time på mandag, klikker man på timen i dette vinduet. Timen plasseres, og vinduet for Fag og for Timeplan lærer oppdateres. Tilsvarende plasseres øvrige timer i faget helt til _Gjenstår_ viser tallet null. 

Noen timer er markert med grønn farge. Det er alle timene som kan timeplanlegges i denne uken, uten å kollidere mot andre fag i klassen, eller mot timer i andre fag som faglærer i faget allerede har fått tildelt. 

Vi ser at hele torsdag, med unntak av første time, er uten fargemarkering. Det skyldes at læreren som har det utvalgte faget vi ser på (ENG), allerede er opptatt med annen undervisning den dagen. Faget ENG kan derfor bare få en time på torsdag med denne faglærer. Dersom klassen skal ha mer enn en time ENG på torsdag, må en allerede lagt time på torsdag for denne læreren frigis.

Ut fra dette skjønner en umiddelbart at det ikke er en god ide å timeplanlegge en hel klasse før faglærerne er på plass
:::note  Merk
Noen timer på klassens timeplan kan være hvite. Det betyr at disse timene ikke kan benyttes for det valgte faget, tiltross for at læreren er ledig. Dette kan skyldes at en, eller flere, elever alt er opptatt i timen med et klassefag som tas i en annen klasse. Gå til Mine sider>Timeplan>Elevtimeplan, bruk filter _Klasse_, og velg første elev. Du får da frem timeplanen til eleven. Bruk pil-tast på elevlisten til å bla fremover til du finner elev som er timeplanlagt på blokkerte tidspunkt. En annen mulighet: En elev fra en annen klasse følger faget. Gå til Elevadmin.>Rapporter>Faglister, der finner du alle elevene i faget.
:::

## Timeplan lærer
Når en velger et Fag som har fått tildelt lærer, vises automatisk timeplanen til denne læreren i dette skjermbildet. Timeplanen for klassen oppfriskes også, da allerede lagte timer i valgte fag markeres med fagets fargen fra Fag. Ledige timer i klassens timeplan hvor læreren alt er opptatt med annen undervisning, og som derfor ikke kan benyttes i klassen i faget som nå skal timeplanlegges, blir blanket ut tilsvarende som for timene på torsdag i skjermbildet ovenfor.

## Vis timeplanen til disse ansatte
I noen tilfeller kan det være greit å ha oversikt over timeplanen til flere lærere enn bare den som nå har fokus. De utvalgte ekstra-lærerne timeplanen vises da sammen med timeplanen til faglæreren i skjermbildet til Timeplan lærer.

## Timeplanlegge klasse>Kopier

Alle øverst i skjermbildet finner vi valget _Kopier_. Her kan en kopiere timeplanen for denne klassen frem i tid. Når man legger ny timeplan for neste skoleår er det unødvendig å benytte dette valget!

Vanligste måte å kopiere timeplan på, er fra menyvalget Timeplan>Kopier. Kopieringen gjøres typisk når hele timeplanen for skolen er ferdigstilt, altså at samtlige klasse- og gruppefag er timeplanlagt, og hvor alle fag er registrert med lærer og rom. Da tas den ferdige timeplan for hele skolen og kopieres fremover til et fritt valg antall uker (ofte: hele skoleåret). Vær oppmerkasom på at ved å kopiere en timeplanen fremover i tid, erstatter tidligere versjonener som  måtte være lagt ut.

Å kopiere timeplanen for en separat klasse kan være påkrevd dersom man endrer timeplan i en klasse ut i skoleåret. Timeplanen kan i prinsippet endres fra uke til uke. Timeplanen for en annen klasse frem i tid kan være ulik den som gjelder for denne uken. Å kopiere en enkelt klasses timeplan krever frem i tid krever derfor omfattende kontroller for å fastslå at timeplanen kan implementeres uten at klassens nye timeplan kommer i konflikt med timeplanen til de andre klassene. Dersom kollisjon(er) avdekkes, blir kopiering avbrutt.

Sammenfattet: På et hvilket som helst tidspunkt under timeplanleggingen kan resultatet kopieres fremover til angitte uker. Dersom det blir ønskelig, eller påkrevd, å gjøre endringer i en allerede gjeldende timeplan, og endringen skal gjelde for mere enn uken hvor en gjør korrigeringen, da har man behov for å få den nye timeplanen distribuert. Man har da to valgmuligheter: Enten bare å kopiere klassen hvor endringen skjedde, eller ved å kopiere skolens timeplan for denne uken fra valget Timeplan>Kopiering. Merk at dersom det bare er snakk om at et fag skal skifte faglærer, men uten endring av timene på timeplanen, så gjøres dette fra Time- og fagfordeling>Klassefag. Der kan man endre faglærer for de ukene dette måtte være aktuelt.
