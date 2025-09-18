---
id: eks_oppmelding
title: Eksamenspartier
sidebar_label: Eksamenspartier
---

Her registreres eksamenspartiene som skal avholdes ved skolen. Først registreres et eksamensparti, deretter hvilke eksamenskandidater som skal oppmeldes. Ved å velge et eksamensparti vises listen med kandidater i den nederste tabellen.


![Eksamenspartier](/img/eks_eksamenspartier.png 'Eksamenspartier')

## Innledende arbeid
iSkole er integrert med PAS, dermed kan partier og kandidater i sentralgitte eksamener lastes opp til PAS. Planleggingen av partier og kandidater bør derfor gjøres på iSkole slik at dere etter sensuren kan hente resultatene fra UDIR og få disse lagrert direkte på elevene.

Før dere oppretter partier på iSkole, klikk på knappen _PAS_ og velg _Importer eksamensplan_. Eksamensplanen inneholder dato for når eksamen skal avholdes. Importen kan ta noe tid, etter innhenting får dere en bekreftelse på antall planer som er importert.

:::caution Merk
Henting av planer og oppmelding til PAS forutsetter at skolen har registert det organisasjonsnummeret de benytter på PAS under _Grunnlagsdata > Skole > Organisasjon_. Dersom skolen har annet organisasjonsnummer for PAS enn de ellers benytter, så kan dette registreres i feltet _Organisasjonsnummer PAS_. I tillegg må dere registrere i PAS-portalen at dere benytter iSkole som skoleadministrativt system.
:::

## Legg til eksamensparti
Ved å klikke på _Legg til..._ vises en dialog med fag. Denne listen inneholder fag fra eksamensplanen som skolen underviser i. Dersom dere ønsker andre fag kan dere fjerne markeringen _Vis kun skolens fag_ og/eller _Vis kun eksamensplan_. Filteret kan søke på hele eller deler av fagkode og fagnavn. Dersom det velges et fag fra eksamensplanen fyller vi automatisk inn eksamensform og dato. For andre fag kan dere velge å sette dato nå, eller om dere ønsker å registrere dette senere, eksamensform må velges. Fag fra eksamensplanen med forberedelse vil automatisk få forberedelsen lagt inn. Når dere klikker på _Gå videre_ får dere frem dialogen som er den samme som ved endring av partiet.

## Endre eksamensparti
Det kan knyttes en rekke informasjon til partiet. Tidspunkt, sted, eksaminator, sensor, merknad, eksamenstype og forberedelse. 

![Eksamenspartier](/img/eks_endre_parti.png 'Eksamensparti endre')




## Kandidater
Nedre del av skjermbildet omhandler kandidater, her legges de til partiet, kan oppføres med tilrettelegging, program, karakterstatus og oppmøte.

### Legg til kandidater
Etter å ha valgt et parti kan man klikke _Legg til..._ i nedre del av vinduet. Listen med elever som vises vil som standard være elever som har undervisning i partiets fagkode og som ikke allerede er oppmeldt til eksamen på denne fagkode. Dersom partiet er muntlig eksamen med egen fagkode, så viser vi elevene som har den skriftlige fagkoden. Ved å klikke på _Alle elever_ kan man søke opp alle skolens elever, untatt de som allerede er oppmeldt. Marker én eller flere elever og klikk _OK_. Tabellen støtter markering i serie ved å hode shift-tasten inne mellom første og siste markering.

### Slett kandidat
Marker kandidaten som skal slettes og klikk _Slett_.

:::caution Merk
Hvis kandidaten er eksportert til PAS må den slettes også der. Vi planlegger å få på plass automatisk sletting fra PAS før utgangen av 2025.
:::

### Endre
Valget endre består av undervalgene _Karakter, Tilrettelagt, Program og Karakterstatus_.

#### Karakter
For partier med lokal sensur føres karakteren inn her. 

#### Tilrettelagt
Dersom kandidaten trenger tilrettelegging på eksamen kan dette registreres her. Dette gjelder ekstra tid, egen PC, eget rom, opplest tekst, eller annet (fritekst).

#### Program
Dersom kandidaten skal ha et annet programområde enn det de har som elev kan dette registreres her. Dette gjelder i hovedsak NUS-eksamen.

#### Karakterstaus
Dersom kandidaten har Ny, utsatt eller særskilt prøve registreres dette her.

### Oppmøtestatus
Ved oppmelding av kandidater til et parti vil verdien for oppmøte stå blank. Når eksamenskarakter innføres, settes oppmøte automatisk til avlagt. Før eksamenskarakter er innsatt, kan man markere alle som ikke møtte til eksamen med verdien _Ikke dokumentert fravær_. Senere kan verdien endres til _Dokumentert fravær_ for dem det gjelder. Setter man oppmøtestatus til noe annet enn avlagt, så vil karakteren bli satt til IM for ikke møtt eller -- hvis eksamen ble avlyst. Hvis dette gjøres med en feiltagelse må karakteren settes tilbake til riktig karakter hvis den allerede var satt, eller til * hvis karakteren ikke er kjent ennå. Karakterer redigeres fra _Endre... > Karakter..._

:::info Oppmøtestatuser
Det finnes fire oppmøtestatuser:
1. Avlagt - Karakter kan settes
1. Ikke dokumentert fravær - Karakter IM settes automatisk
1. Dokumentert fravær - Karakter IM settes automatisk
1. Eksamen avlyst - Karakteren -- settes automatisk
:::

:::tip Merk
For eksamenspartier som administreres via PAS, vil oppmøtestatus være ferdig utfylt og automatisk bli overført sammen med karakterene.
:::
