---
id: ms_tilgang
title: Tilgang
sidebar_label: Tilgang
---

Dette menyvalget er tilgjengelig for alle ansatte som er registrert. Men når en ansatt blir registrert med sluttet-dato, vil vedkommende etter slutte-datoen ikke få tilgang til iSkole. Kun rektor og administrator kan øke eller minske den enkeltes rettigheter utover det som automatisk blir tildelt. 
Arkfanene _Brukere_ og _Romreservering_ er ikke synlig for andre enn rektor og administrator.

## Nøkkelpersoner
Nøkkelpersonene kan endres av rektor, administrator og skoleeier. Unntak er rektor som bare kan endres av skoleeier, og administrator som bare kan endres av skoleeier og rektor.
- Rektor har alle rettigheter når det gjelder innsyn og bruk av systemet.
- Administrator har i hovedsak de samme rettigheter som rektor, men kan ikke endre elevers karakterer.
- Karakteransvarlig, og rektor, kan rette en innført karakter for et fag etter at standunkt/eksamenskarakter er satt. Rettingen blir loggført, slik at en i ettertid kan se hva som er endret.
- Kontaktperson for iSkole er vanligvis den som har best kjennskap til iSkoles virkemåte og derfor er den som kan gi råd og veiledning. Vedkommende er også den som kan hendvende seg til leverandøren angående feil/mangler og ønsker vedrørende bruk av iSkole. Viktigste kanal er support@barman-hanssen.no
- NVBkontakt er den som har ansvaret for at vitnemål blir overført til Norsk vitnemåls database. Gjelder bare vitnemål for videregående skole.
- Eksamensansvarlig har med oppsett av såvel muntlige som skrftilige eksamenspartier.
- PASansvarlig har ansvaret for at oppsatte eksamenspartier blir overført til PAS.

## Funksjoner
Her vises oversikt over tilleggs-funkjoner/moduler tilknyttet iSkole, og om tilvalget medfører ekstra kostnader. Når det avhukes for en tilleggs-funkson, eksempelvis for internat, vil _Internat_ tilføyes som arkfane på _mine sider_, og  denne programvaren blir da tilgjengelig.

![image](https://github.com/BarmanHanssen/iskole/assets/80097133/9f4428c7-2662-47d4-900c-e8c068ee48da)

## Brukergrupper
_Navn_ og _Beskrivelse_ sier det meste om de 25 definerte gruppene. Fra _Grupperettigheter_ fås detaljert oversikt over hvilke menyvalg den enkelte brukergruppe får tilgang til.

:::info Merk
Rektor og rektors stedfortreder kan gi den enkelte ansatte tilgang til det enkelte menyvalg uavhengig av brukergruppe.
:::

![bilde](/img/ms_tilgang_brukergrupper.png 'Brukergrupper')

_Ansatt_: For å kunne få tilgang til denne modulen av iSkole må personen være registreret fra _Personal>Ansatt_. Tilgangen er tidsbegrenset til datoene gitt mellom _Begynte_ og _Sluttet_.

For ansatte hvor det er avhuket med _Pedagogisk ansatt_ tildeles noen rettigheter automatisk utfra pålagte oppgaver. Eksempelvis: Tildeles undervisning (fra _Time- og fagfordeling_) fås rettigheter til _Faglærer_ og _Fraværsfører_. I de fleste tilfeller skal pedagogisk ansatte ikke ha flere rettigheter. Eventuelt utvidede rettigheter kan tildeles av rektor/administrator, se under _Brukere_.

_Kontor_: Denne gruppen gis tilgang til utvalgte deler av menyvalget _Elevadmin._ Ingen automatisk tilgang til denne gruppen!

Mer detaljert oversikt over hvilken tilgang som tildeles når en bruker tildeles en brukergruppe fås fra _Grupperettigheter_.

## Grupperettigheter
Velg en brukergruppe fra nedtrekkslisten. Man får da en oversikt hvilke menyvalg som da blir tilgjengelig, og hvilke rettigheter som tildeles. For brukergruppen _faglærer_ fås dette skjermbilde:

![bilde](https://user-images.githubusercontent.com/80097133/200294342-2027015e-3de2-4835-8f9e-c5e4e6bf9b1a.png)


## Brukere
Oversikt viser hvilke rettigheter alle nåværende ansatte er tildelt.

![bilde](/img/ms_tilgang_brukere.png 'Brukere')

Rektor/administrator kan redigere rettigheter til ansatte. Dersom ingen brukergruppe(r) gir ønsket tilgang, kan rektor gi brukeren tilgang til spesifikke menyvalg.

## Karakterer
Rektor/administrator fastsetter tidsintervallet hvor faglærerne skal innføre termin- og standpunktkarer, og når elevene gis innsyn til sine resultater.

![bilde](https://user-images.githubusercontent.com/80097133/200297678-8da74f9f-67d1-4cbb-93fa-201d573cdf58.png)

#### Avvikende publiseringsdatoer for klasser
Det er mulig å gi elevene i en klasse en publiseringsdato som avviker fra oppsettet ovenfor. Når datoen er satt, vil datoen også vises for klassens elever.


## Elevers valg av gruppefag
Skolen kan åpne for at årets elever på vg1 og vg2 som skal forsette skolegangen neste skoleår kan få velge valgfagene allerede inneværende skoleår (typisk i januar/februar). 
Her registreres tidrommet elevene kan gjøre sine valg, altså fra og med dato og frem til og med siste dag.

Før valget kan foretas fra iSkole må følgende være på plass:
- Neste år skoleår er opprettet (se _Grunnlagsdata>Skoleår_).  
- Det opprettes grupper i de aktuelle valgfagene (se _Grunnlagsdata>Fag_ og _Grunnlagsdata>Grupper_).
- Aktuell elever som skal kunne velge fag er flyttet opp til neste års planperiode (se _Elevadmin.>Oppflytting_).

For nærmere orientering om strukturering av gruppene til valg, se _Timeplan>Blokk_, spesielt under overskriften _Trinn_.

## Stenging
Det er rektor og administrator som kan stenge tilgangen til iSkole, og som kan åpne tilgangen igjen.

![bilde](https://user-images.githubusercontent.com/80097133/192467223-6f45b2a9-0f96-41f1-90d0-846080d23389.png)

#### Stenging av iSkole
Stengingen, og åpning, foretas av rektor eller administrator. Ved forøk på å logge inn, vil det gis beskjed om at iSkole er stengt. I tidsrommet hvor iSkole er stengt, er det bare rektor og administrator som kan logge seg på.

#### Tilgang til Mine sider i skoleåret
I starten (og gjerne før start) av skoleåret er det ofte ønskelig at timeplanleggeren får legge timeplanen ferdig før den vises, og at neste års elever ikke får innsyn i hvilken klasse og lærere som de skal forhole seg til. 

_Timeplanen er synlig i hele planperioden for de ansatte_

Det kan være greit for timeplanlegger å få arbeide uforstyrret til timeplanen er feriglagt. For å skjerme timeplanlegger kan en her sette en dato senere enn 1. august. De ansatte får da ikke tilgang til iSkole før denne datoene.

_iSkole er synlig for eleene fra_

Elevene har i utgsngspunktet tilgang til iSkole hele skoleåret hvor de er registrert som elev, altså helt frem til til skoleårets slutt som i utgangspunktet er 31. juli. Dersom eleven slutter før skoleårets slutt, mistes tilgangen. Dersom en ønsker at elevene  ikke får tilgang til neste skoleår fra 1. august kan en sette inn en senere dato her.

## Romreservering
Dersom andre enn timeplanlegger skal kunne reservere et rom, kan en her angi hvilke rom som kan reserveres av utvalgte ansatte. Dersom man gir en lærer en slik rettighet, kan vedkommende reservere et rom til en time hvor læreren allerede er båndlagt med undervisning i et annet rom. Ekstrarommet vil vises på lærerens timeplan, og på rommets timeplan. Se _Mine sider>Timeplan>Romtimeplan_ under fanene _Mine reserveringer_ og _Rom som du kan reservere_. 

:::info Merk
Dette er eneste mulighet for at en lærer skal kunne reservere mer enn et rom når læreren har en undervisningstime.
:::

## Bulleteng
En effektiv måte for å publisere meldinger til alle aktive brukere av iSkole! Dersom en ny melding legges ut, vil den vises straks en bruker logger seg på iSkole. Altså vil alle brukere få frem meldingen en gang, uten noe ekstra museklikk. Redaktøren bestemmer hvor lenge meldingen skal ligge ute. En melding kan publiseres bare til ansatte, eller til både elever og ansatte.

#### Opprett redaktør
Dersom du er redaktør vises dette  skjermbilde:

![bilde](https://user-images.githubusercontent.com/80097133/153401777-2046ff7a-0323-4fd9-a724-477c0e0c62fd.png)

Klikk _Legg til_ for å oppprette en ny redaktør. Merk at også en elev kan få redaktørstatus (feks elvevrådsleder). 

## Foreldre

Skolen kan begrense foreldres innsyn i dataene til sine barn. Her kan aldersgrensen innsnevres for spesifikke data.
For enkeltelever er det mulig å utvide, eller innsvevre, retten. Se  _Elevadmin.>Elev_ under _Forelder 1_ og _Forelder 2_.

![bilde](https://user-images.githubusercontent.com/80097133/192475976-666930c5-c7f8-4d37-9ef7-426c40971938.png)

