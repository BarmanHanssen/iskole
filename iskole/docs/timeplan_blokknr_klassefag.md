---
id: timeplan_blokknr_klassefag
title: Blokknr klasse
sidebar_label: Blokknr klasse
---

Hensikten med dette valget:

- For klasser hvor elevene ikke kan velge grupppefag: Markere at en time ikke skal kunne brukes til timeplanlegging av  klassefag.

- For klasser hvor elevene kan velge gruppefag: I tillegg til timene som gruppefagene legger beslag på, kan en herfra markere ekstra timer hvor klassefag ikke kan timeplanlegges. 

:::note Tips 
Blokknr registrert under _Tildelt blokknr_ blokkerer absolutt for timeplanlegging av klassefag i denne klassen. Kan benyttes for eksempel for å legge inn en felles fritime for alle elever i en klasse. Eksempelvis kan man legge inn midt-timen (spisetid?) slik at ikke alle skolens klasser har samme tid for midt-timen. Dette kan gjøres, selv om klassen ikke har gruppefag. 
:::

### Dersom elevene i klassen kan velge gruppefag

Dersom man benytter følgende opplegg, behøver man ikke å blokkere noen timer for å få plassert gruppefagene:

1. Elevene har valgt gruppefag. (Fra _Elevadmin>Fag>Gruppefag_, eller i kombinasjon med at elevene selv har valgt gruppefag.)
2. Blokknumrene er timeplanlagt (Fra _Timeplanlegge blokknr_)
3. Gruppefagene har fått tildelt blokknummer. (Fra _Blokknr gruppefag_)

Dersom disse tre registreringene er på plass, vil timeplanlegging av klassefag kunne finne sted uten å komme i konflikt med elevenes valg av gruppefag.

Timer hvor elevene (minst en elev!) skal ha gruppefag, blir da markert på klassens timeplan (se _Timeplanlegge klasse_), og vil blokkere for timeplanlegging av  klassefag. Når så klassefagene er timeplanlagt, er timeplanen komplett for både for lærere og elever.

## Blokk tildelt klasse for uken
Dersom ikke alt er på plass vedrørende punkt 1 til 3 ovenfor, men man ønsker å timeplanlegge klassefagene i en klasse hvor elevene kan velge gruppefag:
Det kan være greit å markere, før klassefagene plasseres, hvilke timer man ønsker å avsette til gruppefag for klassen. Dette bør være bestemt før elevene kan velge gruppefag. Timene i gruppefag skal elevene kunne følge, og i disse timene kan da klassefag ikke timeplanenlegges.

Dersom blokknumrene er timeplanlagt (punkt 2), innebærer det at man har bestemt hvor gruppefagene skal timeplanlegges. Gjør da følgende:
- Velg klasse
- Flytt over fra _Ledige blokknr_ til _Tildelte blokknr_ for de timene som skal blokkere for klassefag.
- Bekreft valget med Lagre 

![image](https://user-images.githubusercontent.com/80097133/119110333-51dca080-ba22-11eb-8894-2298090e2502.png)

## Etterord
Når punktene 1 til 3 er på plass, er valget med _Tildelte blokknr_ overflødig hva angår gruppefagenes plassering. Under overskriften _Minste utvalg av blokknummer_ vil det listes opp hvilke blokknr som er aktuelle for klassen ut fra elevenes valg av gruppefag. Bak hvert blokknr som listes opp finns det altså gruppefag som minst en elev i klassen har valgt. 
Valget _Benytt minste utvalg_, som overfører disse blokknumrene til _Tildelte blokknr_ for klassen, kan en trygt ignorere! 

Oppsummert: Når man timeplanlegger klassefag, vil systemet automatisk kontrollere både mot  _Minste utvalg av blokknummer_, og mot _Tildelte blokknr_.
