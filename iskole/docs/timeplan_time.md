---
id: timeplan_time
title: Timer
sidebar_label: Timer
---

En time på timeplanen er bestemt ved at vi angir når timen starter, og når den slutter. 

En timeplan har tradisjonelt inneholdt 6 timer per dag over 5 ukedager. Vanligvis har timelengden vært 45 minutter, og alle dagene har hatt samme oppsett hva angår når timene starter og slutter. Da har vi et mønster på timene som gjør det lettere for alle som har bruk for timeplanen.

Men det er enkelt å lage et annet oppsett. For grunnskolen kan 1. time på mandag for barnetrinnet ha annen starttid enn for ungdomstrinnet. Timelengden kan også være forskjellig. En slik timeplan kan bli krevende for timeplanlegger dersom det er slik at timer kan overlappe hverandre. Skolen kan derfor ha flere sett med timer, såkalte tidskjemaer, for eksempel ett for barnetrinnet og ett for ungdomstrinnet. Se [Tidskjema](#tidskjema).

:::info Merk
Timeoppsettet er en mal. Når en time timeplanlegges, får timen start- og sluttiden fra gjeldende mal. Dersom malen endres, vil det ikke påvirke timer som alt er timeplanlagt, men når nye timer timeplanlegges, vil alltid gjeldende mal benyttes. Det samme gjelder når du sletter en time her: timer som alt er timeplanlagt på det tidspunktet, blir stående. Timen kan bare ikke velges når nye timer skal timeplanlegges.

En allerede timeplanlagt time i et fag kan gis endret start- og/eller sluttid. Eksempelvis kan en dobbelt-time med friminutt mellom timene gjøres om slik at friminuttet fjernes, eller en time kan forlenges inn i en midt-time. Dette gjøres ved å klikke på timen fra _Timeplan>Klasser_ eller _Timeplan>Grupper_.
:::

## For skoler som har samme timeoppsett for alle klassene
Klokkeslettene for timene som legges inn her vil følge alle fag som timeplanlegges. Dersom noen timer overlapper vil timeplanlegger varsles dersom dette vil gi kollisjon på lærers- eller elevs timeplan. Da holder det med ett tidskjema, Standard.

## For skoler som har avvikende timeoppsett
Eksempelvis kan en skole som har både barne- og ungdomsstrinnet ha forskjellig timelengde og/eller forskjellig start-tider på noen (eller alle) timene.

Dette løses enklest med ett tidskjema for hvert trinn. Legg barnetrinnets tider i ett tidskjema og ungdomstrinnets i et annet, og velg riktig tidskjema når du timeplanlegger klassene og gruppene på hvert trinn. Da kan begge trinnene timeplanlegges parallelt, du får bare tilbud om tidene som gjelder for trinnet, og tidene ligger klare hvis timeplanen må endres senere i skoleåret. Se [Tidskjema](#tidskjema).

## Før en endrer oppsettet med timenes plassering/lengde
Timene og timelengden som lagres her er altså en mal som benyttes når en legger timeplanen. 

Det er også mulig å endre start- og sluttid for en timeplanlagt time fra _Timeplan>Klasser_ og _Timeplan>Grupper_. Dersom man øker timelengden på en time på timeplanen slik at den overlapper med en annen time, så kan det selvsagt medføre en kollisjon for lærer eller elev, men det vil systemet avdekke.

Her vises et eksempel på en mal. Ved å klikke på en time kan man gjøre endring på start- og slutt-tiden for timen, eller slette timen. Se [Legge inn, endre og slette timer](#legge-inn-endre-og-slette-timer).

![Timer](/img/tp_timer_kalender.png 'Timer med tidskjemaet Standard timeoppsett')

## Legge inn, endre og slette timer {#legge-inn-endre-og-slette-timer}
Kalenderen viser én uke med timene i valgt tidskjema. Det er ukedagene som teller, ikke datoene: en time som ligger på mandag, gjelder alle mandager i skoleåret.

- **Legge til:** Klikk _Legg til time..._, velg dag og skriv start- og sluttid (for eksempel 0815 og 0900). Huk av for _Hele uken (mandag–fredag)_ for å legge den samme timen inn på alle ukedagene på én gang. Du kan også dra med musen over et tomt felt i kalenderen, så er dag og tider fylt ut på forhånd.
- **Endre:** Klikk på timen og rett start- eller sluttiden. Du kan også dra timen til et nytt klokkeslett, eller dra i kanten for å endre lengden. Drar du innenfor samme dag, lagres endringen med en gang.
- **Flytte eller kopiere til en annen dag:** Klikk på timen og velg en annen dag. _Lagre_ flytter timen (du må bekrefte), mens _Kopier_ lager en ny time på den valgte dagen og lar den opprinnelige stå. Drar du timen over til en annen dag, blir du også bedt om å bekrefte flyttingen.
- **Slette:** Klikk på timen, velg _Slett_ og bekreft med _Ja, slett_. Er det plassert et blokknr på timen (se [Blokk](/docs/timeplan_definer_blokknr)), forsvinner også det.

To timer samme dag kan ikke ha nøyaktig samme start- og sluttid i samme tidskjema. Klokkeslett kan skrives som 0815, 815 eller 08:15.

## Tidskjema {#tidskjema}
Et tidskjema er et eget sett med timer (start- og sluttider) for skoleåret. Alle skoler har tidskjemaet _Standard_, og for mange skoler er det nok. Trenger noen klasser andre tider enn resten av skolen, kan skolen legge til flere tidskjemaer, for eksempel

- ett for barnetrinnet og ett for ungdomstrinnet, eller for avdelinger med ulike ringetider
- egne tider for prøveuker eller kortdager.

Et tidskjema er ikke knyttet til bestemte klasser eller trinn. Det bestemmer bare hvilke ledige timer du får tilbud om når du timeplanlegger, og du velger selv hvilket tidskjema du bruker. Timer som alt er timeplanlagt, har sine egne klokkeslett og vises uansett hvilket tidskjema som er valgt. Kontrollen av kollisjoner for lærere, elever og rom bruker klokkeslettene, så den virker også mellom timer fra ulike tidskjemaer.

![Tidskjemaet Barnetrinnet](/img/tp_timer_tidskjema.png 'Timer med tidskjemaet Barnetrinnet valgt')

### Velge tidskjema
Når skolen har mer enn ett tidskjema, vises nedtrekket _Tidskjema_ i _Timer_, _Grupper_, _Klasser_, _Reserver_ og _Blokk_. I _Timer_ er det timene i valgt tidskjema du ser og endrer. I de andre vinduene bestemmer tidskjemaet hvilke ledige timer som vises.

Sist valgte tidskjema huskes i nettleseren for hver skole og hvert skoleår, og valget er felles for vinduene: velger du _Barnetrinnet_ i _Klasser_, er det også valgt når du åpner _Reserver_. Bruker du en annen nettleser eller PC, starter du på _Standard_. Finnes ikke tidskjemaet lenger, brukes _Standard_.

### Opprette et tidskjema
Klikk _Legg til tidskjema..._ og gi tidskjemaet et navn, for eksempel _Ungdomstrinnet_ eller _Prøveuke_. Navnet må være unikt i skoleåret. Det nye tidskjemaet er tomt og blir valgt med en gang, så du kan legge inn timene (se [Legge inn, endre og slette timer](#legge-inn-endre-og-slette-timer)).

### Gi nytt navn
Velg tidskjemaet og klikk på blyanten. Også _Standard_ kan få et annet navn. Blyanten og søppelbøtta vises bare når skolen har mer enn ett tidskjema.

### Slette et tidskjema
Velg tidskjemaet og klikk på søppelbøtta. Før noe slettes, får du se hva som forsvinner, og må bekrefte med _Ja, slett_.

:::caution Dette slettes sammen med tidskjemaet
- alle timene i tidskjemaet
- blokknr som er plassert på disse timene, og dermed koblingen til blokkid (se [Blokk](/docs/timeplan_definer_blokknr))

Timer som allerede er timeplanlagt, og reservasjoner har egne tider og berøres ikke. Tidskjemaet _Standard_ kan ikke slettes.
:::

Når et nytt skoleår opprettes som kopi av et tidligere skoleår, følger tidskjemaene og timene med.
