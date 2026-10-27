---
id: timeplan_definer_blokknr
title: Blokk
sidebar_label: Blokk 
---
Dersom skolens elever kan velge fag som ikke inngår i klassens fagsammensetning, kaller vi de valgbare fagene for gruppefag. Det er naturlig å timeplanlegge gruppefagene og klassefagene hver for seg. Uansett fremgangsmåte skal timeplanen legges uten kollisjon mellom elevens klasse- og gruppefag. 

Vi ser her hvordan vi kan forenkle timeplanleggingen av gruppefag dersom fag samles i en blokk. Utgangspunktet blir da: En blokk inneholder minst ett gruppefag. En elev kan bare velge et fag fra hver blokk. Og en lærer kan bare tildeles et fag fra hver blokk. Vi navngir hver blokk med et nummer som vi kaller blokkid.

### Hvorfor benytte blokkid?
Man innsnevrer elevers og læreres valg av gruppefag.
- Valget begrenses ved at det ikke er mulig for en elev å velge to fag med samme blokkid.
- En lærer kan ikke tildeles to fag med samme blokkid.
- Og to fag med samme blokkid kan ikke timeplanlegges til samme tid. 

Tilleggsgevinst:
- Dersom et blokkid er timeplanlagt, kan timeplanleggingen av et fag med denne blokkid gjøres med ett museklikk. 

Timeplanlegging av gruppefag kan gjøres uten å benytte (eller ta hensyn til) timeplanen for et blokkid. (Anbefales ikke!)

Blokkid, med eller uten timeplan for hver blokk, er en mal for timeplanlegging av gruppefag. En endring av malen har ingen innvirkning på timeplanen for et gruppefag som alt er timeplanlagt.

Det er forhåndsdefinert 10 blokker. Vanligvis benytter en videregående skole 5 til 7 blokker.

:::info Merk
Det er først når et blokkid er timeplanlagt at vi kan høste gevinsten ved timeplanlegging av gruppefagene i blokken.
:::

Eksempel:

![Blokk](/img/tp_blokk.png 'Blokkid 2 valgt i fanen Blokk')

Anta at blokkid=2 skal timeplanlegges med fem uketimer. Vi ønsker å plassere en dobbelt-time på mandag og onsdag, og en time på fredag. Da starter vi slik:
- Klikker på _Blokkid_ 2 i tabellen til venstre
- Klikk på timene på timeplanen.

I bildet over er blokkid 2 valgt og har fått dobbelttimen på mandag.  Onsdag og fredag gjenstår. Blokkid 1 er allerede timeplanlagt med to dobbeltimer og én time til. 

Kalenderen viser én vanlig skoleuke med skolens timer; lørdag og søndag vises bare når skolen har timer der. En time uten blokkid er merket **Tildel**, og en time som er plassert i en blokk, får blokkens farge og nummer.

- **Plassere**: velg blokkid i tabellen til venstre og klikk på en time merket _Tildel_. Har du ikke valgt blokkid, får du beskjed om å gjøre det først.
- **Slette**: klikk på en plassert blokktime og bekreft med _Ja, slett_.
- **Finne igjen en blokk**: hold musepekeren over en rad i blokkid-tabellen, så markeres blokkens timer i kalenderen.

#### Trinn
Dersom trinn er lagt inn begrenser det ikke direkte timeplanleggers arbeid.

Men dersom trinn innføres vil det begrense elevens valgmuligheter. En elev kan bare velge gruppefag fra en blokk hvor elevens klassetrinn inngår. 
Timeplanlegger vil uansett få melding dersom en elev får kollisjon på sin timeplan.

Trinn legges inn med **Rediger trinn for blokkid** over blokkid-tabellen: kryss av trinn 1, 2 og/eller 3 for hver blokkid og avslutt med _Lagre_ (eller _Avbryt_). Mens du redigerer trinn, kan du ikke plassere eller slette blokktimer. Knappen vises bare for skoler med videregående opplæring.

:::info Merk
Dersom elevene selv skal kunne velge gruppefag for neste skoleår er fremgangsmåten slik:
- Neste skoleår må opprettes, se _Grunnlagsdata>Skoleår_. Valgbare grupper må opprettes, gjerne med blokkid og trinn .
- Aktuelle elever i år må flyttes opp til neste skoleår, se _Elevadmin.>Oppflytting_
- Det må åpnes for når årets elever skal kunne få velge av gruppefag for neste skoleår, se _Mine sider>Tilgang>Elevers valg av gruppefag_.
:::

### Tidskjema {#tidskjema}
Har skolen flere tidskjemaer (egne sett med start- og sluttider, se [_Timer_](/docs/timeplan_time#tidskjema)), vises nedtrekket **Tidskjema** over kalenderen i fanen _Blokk_. Timene merket _Tildel_ hentes fra valgt tidskjema, mens timer som alt er plassert i en blokk, vises uansett hvilket skjema som er valgt. Valget huskes i nettleseren og gjelder også de andre timeplanvinduene (Timer, Reserver, Grupper og Klasser).

### Blokkfag
Alle fag som er tildelt blokkid vises her. Blokkid kan registreres på fagene allerede når gruppefag opprettes fra _Grunnlagsdata>Grupper_.
Her kan en legge til/endre oppsettet av hvilke fag som skal ha blokkid. 

Velges _Blokkfag_ og _+ Legg blokkid til fag_ fås dette skjermbilde:

![Blokkfag](/img/tp_blokk_blokkfag.png 'Legg blokkid til fag')

Velg ett eller flere fag i _Velg fag_ (bare fag som ikke har blokkid, tilbys), velg blokkid i _Velg blokkid_ og avslutt med _Lagre_.

I tabellen endrer blyanten blokkid for ett fag, og papirkurven tar blokkid bort fra faget med en gang, uten bekreftelse. Holder du musepekeren over en blokkid, vises blokkens timer (blokknr, dag og tid). Blokkid kan også settes fra [_Grupper_](/docs/timeplan_blokknr_gruppefag) med **Blokk**-knappen på faglinjen.

### Blokktider klasse

Her fås en nyttig oversikt når elevens valg av gruppefag er registrert, og gruppefagene er timeplanlagt. Velg klasse og uke øverst (pilene går til forrige/neste uke). Tabellen viser dag, tid, antall elever i klassen og gruppefaget.

![Blokktider klasse](/img/tp_blokk_blokktider_klasse.png 'Blokktider for klassen AP3D i uke 43')

Her vises timer hvor minst en av elevene i klassen har et gruppefag på sin timeplan. Av skjermbildet fremgår det at 9 timer dekker klassens timeplan for gruppefag. Klassefag kan ikke timeplanlegges her. Dersom klassen AP3D har klassefag som krever 23 timer undervisning, vil klassens timeplan totalt dekke 32 timer når klassefagene er ferdig timeplanlagt. Men elevens timeplan kan ha færre timer avhengig av valg av gruppefag.
