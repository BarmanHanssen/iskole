---
id: timeplan_blokknr_klassefag
title: Blokknr klasse
sidebar_label: Blokknr klasse
---

Hensikten med dette valget:

- Å blokkere for timeplanlegging av klassefag i enkelte timer

For klasser hvor elevene ikke kan velge grupppefag: Det kan være ønskelig å markere at en time ikke skal kunne brukes til undervisning.

For klasser hvor elevene kan velge, eller har valgt, gruppefag:
Når timeplanen for klassefagene legges, må man vite når elevene er opptatt med gruppefag. Grunnen er at timene for gruppefag hvor det er elever fra klassen, vil blokkerer for klassefag. 

:::note Merk Blokknr registrert under _Tildelt blokknr_ blokkerer absolutt for timeplanlegging av klassefag i denne klassen. Kan benyttes for eksempel for å legge inn en felles fritime for alle elever i en klasse. Eksempelvis kan man legge inn midt-timen (spisetid?) slik at ikke alle skolens klasser har samme tid for midt-timen. Dette kan gjøres, selv om klassen ikke har gruppefag. :::

### Dersom elevene i klassen kan velge gruppefag

Dersom man benytter følgende opplegg, behøver man ikke å blokkere noen timer:

1. Elevene har valgt gruppefag. (Fra _Elevadmin>Fag>Gruppefag_, eller i kombinasjon med at elevene selv har valgt gruppefag.)
2. Gruppefagene har fått tildelt blokknummer. (Fra _Blokknr gruppefag_)
3. Blokknumrene er timeplanlagt (Fra _Timeplanlegge blokknr_)

Dersom disse tre registreringene er på plass, er alt klart for timeplanlegging av klassefagene for klassen. 

Grunnen er at nå foreligger alle data som trengs for å hindre at timeplanleggingen av klassefag kommer i konflikt med elevens valg av gruppefag. Hvilke timer hvor elevene (minst en elev!) skal ha gruppefag, blir markert på klassens timeplan (se _Timeplanlegge klasse_), og vil blokkere for timeplanlegging av  klassefag.
Når så klassefagene er timeplanlagt, er timeplanen komplett for både for lærere og elever.

## Blokk tildelt klasse for uken
Dersom ikke alt er på plass vedrørende punkt 1 til 3 ovenfor, men man ønsker å timeplanlegge klassefagene i en klasse hvor elevene kan velge gruppefag:
Det kan være greit å markere, før klassefagene plasseres, hvilke timer man ønsker å avsette til gruppefag for klassen. Dette må da være bestemt før elevene kan velge gruppefag. Timene i gruppefag skal elevene kunne følge, og i disse timene kan ikke klassefag timeplanenlegges.

Dersom blokknumrene er timeplanlagt (punkt 3), innebærer det at man har bestemt timeplanen for blokkfagene. Gjør da følgende:
- Velg klasse
- Flytt over fra _Ledige blokknr_ til _Tildelte blokknr_ for de timene som skal blokkere for klassefag.
- Bekreft valget med Lagre 

![image](https://user-images.githubusercontent.com/80097133/119110333-51dca080-ba22-11eb-8894-2298090e2502.png)

## Etterord
Når punktene 1 til 3 er på plass, er valget med _Tildelte blokknr_ overflødig hva angår gruppefag. Under overskriften _Minste utvalg av blokknummer_ vil det listes opp hvilke blokknr som er aktuelle for klassen ut fra elevenes valg av gruppefag. Bak hvert blokknr som listes opp finns det altså gruppefag som minst en elev i klassen har valgt. 
Dersom man nå trykker på _Benytt minste utvalg_, vil systemet selv overføre disse blokknumrene til _Tildelte blokknr_. 

Når man timeplanlegger klassefag, vil systemet automatisk kontrollere både mot  _Minste utvalg av blokknummer_, og mot _Tildelte blokknr_.
