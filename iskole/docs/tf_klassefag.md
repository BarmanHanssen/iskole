---
id: tf_klassefag
title: Klassefag
sidebar_label: Klassefag
---
   
## Generelt
 
Eventuell endring i klassenes fagsammensetningen må gjøres fra [_Grunnlagsdata > Klasser_](/docs/gd_klasse). Fagets omfang, uketimer, årstimer og årsramme registreres under [_Grunnlagsdata > Fag_](/docs/gd_fag). 

Her registreres hvem som skal være lærer(e) i det enkelte fag, og hvilken ressurs som skal tilkomme den enkelte lærer. Dersom flere lærere i et fag er det timeplanlegger som fastsetter fordelingen av timene (se [_Timeplan > Klasser_](/docs/timeplan_timeplanlegge_klasse#lærer-på-timen)).

Tips: Dersom man i tillegg til undervisningsressursen til læreren også registrerer ressurs for eventuelt andre tjenester (menyvalget _Andre ressurser_) kan man kontrollere at læreren får en stillingsstørrelse som tilsvarer tilsettings-kontrakten (se [_Stillingsstørrelser_](/docs/tf_stillingsstorrelser) og _Rapporter>Stillingsoversikt_).
Stillingsstørrelsen er registrert som _Prosent_ fra _Personell>Ansatte_.

Time- og fagfordelingen planlegges gjerne på vårparten for skoleåret som starter til høsten. På den tid er antall elever i klassene og i gruppefagene ikke kjent, eller i beste fall usikre. Men fra skoleårets start vil en herfra få oversikt over reelt elevtall i det enkelte fag. 

Antall timer timeplanlegger alt har plassert på timeplanen vises også. Resultatet blir vist som klokketimer, og tar høyde for at undervisningstimene kan ha varierende lengde.

Klikker du _Legg til lærer_ på et fag i _Timeplan > Klasser_, åpnes Klassefag i en ny fane med vinduet _Legg til lærer_ for det faget.

## Klasser og fag {#klasser-og-fag}

![Klassefag](/img/tf_klassefag_oversikt.png 'Klassefag filtrert på NOR')

Tabellen er todelt. Fagene som vises på hvit bakgrunn kan ikke endres herfra, de er registrert fra _Grunnlagsdata > Fag_ og _Grunnlagsdata > Klasser_. 

På lyseblå bakgrunn vises data for lærerne som skal undervise i fagene.

Hver linje er ett fag i en klasse, for eksempel _AP3D NOR_ (klassen og fagets kortnavn). I kolonnen _Lærer_ står kortnavnene til lærerne i faget. Klikk på linjen, eller på pilen foran faget, for å vise lærerne, én linje per lærer.

- Søkefeltet øverst filtrerer på fag, fagnavn, fagkode, lærer (navn eller kortnavn) og funksjon. Trykk Enter eller klikk forstørrelsesglasset; krysset tømmer feltet. Treffer søket en lærer eller en funksjon, vises faget med lærerne som passer, og lærerlinjene er åpnet med en gang.
- Kolonnene _Fag_, _Fagnavn_, _Fagkode_, _Omfang_ og _Elever_ kan sorteres ved å klikke på overskriften.
- _Årstimer_ i den hvite delen er grønn når den er lik _Omfang_, ellers oransje.
- _Ressurs_ på fagets linje i den lyseblå delen er grønn når lærernes ressurs til sammen er lik fagets ressurs, ellers oransje. På en lærerlinje blir ressursen oransje hvis læreren har mer enn fagets ressurs.
- Forklaringen under tabellen viser hva ikonene gjør: legge til en lærer i faget, endre læreren og slette læreren fra faget (faget slettes ikke).

## Registrere faglærer {#registrere-faglærer}
Eksempel: Skal registrere lærer i engelsk i klasse LA1B. Klikker på ikonet
 med person og pluss (_Legg til lærer..._) i kolonnen _Lærer_ og får da frem følgende skjema:

![Legg til lærer](/img/tf_klassefag_legg_til_laerer.png 'Legg til lærer i LA1B ENG')

Feltene i vinduet:

- _Lærer_: Listen viser pedagogisk ansatte som ikke allerede står i faget. Med _Vis kun lærere som har fagkoden_ krysset av vises bare lærere som har fagkoden som undervisningsfag (se [_Personal > Ansatt_](/docs/p_ansatt#undervisningsfag)), eller som underviser i samme fagkode i en annen klasse eller gruppe. Finner du ikke læreren, fjerner du krysset.
- _Årstimer_, _Prosent_ og _Uketimer_ er forhåndsutfylt med fagets verdier, som også står i parentes. Endrer du årstimene, regnes prosenten ut på nytt. Uketimene legges inn for alle ukene i skoleåret som har skoledager.
- _Funksjon/stilling_, _Fagansvarlig_, _Tilrettelagt_ og _Karaktertilgang_: se [Tabellens kolonner](#tabellens-kolonner). _Karaktertilgang_ er krysset av fra start, og den første læreren i et fag blir automatisk fagansvarlig.

Vi velger Gunnhild Kongsmor. Hun skal være eneste lærer i faget hele skoleåret, så vi beholder de forhåndsutfylte verdiene slik de er. Klikk _Lagre_.

Etter lagring står læreren på en egen linje under faget. For læreren kan vi endre verdiene som er lagt inn (klikk blyant-ikonet), eller fjerne læreren som lærer. Ikonet for å slette virker kun på fag som har fått registrert lærer. Det er bare mulig å slette læreren, faget blir stående.

Et fag vil kunne være registrert med flere lærere. Eksempelvis skal en lærer som slutter ikke slettes når ny lærer innføres (se [Når en lærer slutter](#når-en-lærer-slutter)). Og enkelte fag kan kreve flere lærere i noen timer. Hvilke lærer(e) som er knyttet til den enkelte time vil fremgå av timeplanen. Dersom faget skal ha en ekstra lærer benytter vi på nytt ikonet med person og pluss. 
Dersom flere lærere må fagets ressurs fordeles. Juster _Årstimer_ og _Prosent_ for hver lærer slik at summen blir lik fagets ressurs; da blir _Ressurs_ på fagets linje grønn.

### Endre lærer {#endre-lærer}
Blyanten foran lærerens navn åpner vinduet _Endre lærer_. Her endres årstimer (i klokketimer), prosent, uketimer, funksjon og avkrysningene _Fagansvarlig_, _Tilrettelagt_ og _Karaktertilgang_. Selve læreren kan ikke byttes her; bruk [_Bytt lærer for valgte uker_](#bytt-lærer-for-valgte-uker).

:::info Merk
_Uketimer_ i dette vinduet endrer bare tallet i tabellen. Uketimene som allerede er lagt inn for hver uke, endres ikke, og det er dem timeplanleggeren ser. Skal lærerens uketimer endres, bruk blyanten i kolonnen _Uketimer_ (se [Endre uketimer for lærer](#endre-uketimer-for-lærer)). Der endres timene én uke om gangen.
:::

### Slette lærer {#slette-lærer}
Søppelbøtta foran lærerens navn sletter læreren fra faget, etter at du har bekreftet med _Ja_. Er læreren fagansvarlig, blir læreren med flest uketimer ny fagansvarlig.

:::warning
Når en lærer slettes, fjernes læreren også fra alle fagets timer i hele skoleåret, også ukene som er gått. Timene blir stående i timeplanen. Skal læreren slutte eller ha permisjon, bruk heller [_Bytt lærer for valgte uker_](#bytt-lærer-for-valgte-uker).
:::

## Tabellens kolonner

#### Lærer
Vanligvis har hvert fag en lærer, og læreren får da fagets ressurs slik den vises for faget i den hvite delen av tabellen.
På fagets linje står kortnavnene til alle lærerne i faget. Ekspanderer vi AP3D NOR, får vi frem detaljene:

![Lærerne i faget](/img/tf_klassefag_laerere.png 'AP3D NOR med tre lærere')

Den fagansvarlige læreren har navnet i fet skrift. På fagets linje står summen av lærernes ressurs og årstimer.

For å endre årstimetallet, ressursen og uketimer for lærer: klikk på blyant-ikonet for lærerens navn (se [Endre lærer](#endre-lærer)). 

 

Skal en lærer slutte eller ha permisjon, se [Når en lærer slutter](#når-en-lærer-slutter).
 
#### Uketimer
Dette tallet er utgangspunktet for timeplanlegger. Når timeplanen legges (fra _Timeplan>Klasser_), kan timeplanlegger justere tallet på ukebasis. Blyanten foran lærerens uketimer åpner alle ukene i skoleåret, se [Endre uketimer for lærer](#endre-uketimer-for-lærer).

#### Ressurs, årstimer,timeplanlagt
Dersom faget har flere lærere vises summen av tildelt _Ressurs_ og _Årstimer_ for alle lærerne, og fagets timeplanlagte timer, på første linje. Verdiene for den enkelte lærer kommer bak lærerens navn. 

_Ressurs_ er stillingsprosenten læreren får for faget, og den regnes med i [_Stillingsstørrelser_](/docs/tf_stillingsstorrelser). _Årstimer_ og _Timeplanlagt_ vises i klokketimer, og bare timer på skoledager telles som timeplanlagt.

Skolen kan dokumentere undervisningstilbud med henvisning til _Årstimer_ gitt på blå bakgrunn. Antall årstimer skal da motsvare fagets omfang som står på hvit bakgrunn. Dersom fagets årstimer på hvit bakgrunn er lavere enn summen av tallene for faget på blå bakgrunn må avviket kunne dokumenteres på annen måte.

Når timeplanen er ferdiglagt, skal timeplanlagte timer være likt med årstimer. Timeplanlagte timer blir beregnet ut fra hva som timeplanlagt når denne tabellen vises.

#### Fagansvarlig {#fagansvarlig}
Det kan kun være én fagansvarlig lærer i faget, og denne blir da vist med navnet i fet skrift i kolonnen for lærer. Den første læreren som legges til i faget, blir automatisk fagansvarlig. Har faget flere lærere, flytter du fagansvaret ved å krysse av _Fagansvarlig_ hos en annen lærer (blyanten foran navnet). Når _Fagansvarlig_ krysses av, krysses også _Karaktertilgang_ av.

#### Funksjon
Kan her markere at læreren er eksempelvis assistent eller tolærer. Man kan legge til ny tekst for funksjonen, eksempelvis sluttet/start-dato for undervisningen i faget. Velg _Legg til ny funksjon_ øverst i listen _Funksjon/stilling_ (i vinduene _Legg til lærer_ og _Endre lærer_), skriv teksten og klikk _Lagre_. Ligner teksten på en funksjon som finnes fra før, foreslås den (_Mente du en av disse?_). Funksjonene gjelder for skoleåret.

#### Karaktertilgang
Hvis man ønsker at flere enn den fagansvarlige skal ha tilgang til å føre terminkarakterer i faget, må det avhukes. _Karaktertilgang_ er krysset av fra start når en lærer legges til; fjern krysset for lærere som ikke skal føre karakterer, for eksempel en assistent. Karakterene føres under [_Mine sider > Karakterer_](/docs/ms_karakterer).

#### Tilrettelagt
For intern informasjon for skolen. Feltet har ingen videre funksjon på iSkole og informasjonen blir ikke med i noen rapportering.

#### Elever 
Viser hvor mange elever som er registrert i faget. Vanligvis er alle elevene i klassen registrert i alle klassens fag.

### Endre uketimer for lærer {#endre-uketimer-for-lærer}
Ved å klikke på blyanten foran lærerens uketimer får man frem en tabell med alle ukene i skoleåret. Vinduet _Endre uketimer for …_ har fag og lærer i tittelen, og viser for hver uke fagets og lærerens uketimer og hvor mange timer som er timeplanlagt (antall timer, ikke klokketimer). Her kan man for den enkelte uke justere fagets og lærerens uketimer, eksempelvis ingen timer etter nyttår (se [Justere timer for én uke](#justere-timer-for-én-uke)). Det er ikke mulig å justere lavere enn det som er timeplanlagt for læreren, da må man først slette timer fra lærerens timeplan. Under tabellen har man to valg som gjelder for de ukene man markerer i tabellen, _Slett timeplanen for de valgte ukene_ og _Bytt lærer for valgte uker_. Merk at timeplanlegger også kan justere tallet opp eller ned når timeplanen legges (_Juster timetall_ i [_Timeplan > Klasser_](/docs/timeplan_timeplanlegge_klasse#lærer-på-timen)).

![Endre uketimer](/img/tf_klassefag_uketimer.png 'Endre uketimer, to uker valgt og ny lærer')

#### Justere timer for én uke {#justere-timer-for-én-uke}
Blyanten foran uken åpner vinduet _Justèr timer uke …_. Til venstre står fagets uketimer og timeplanlagte timer den uken, til høyre lærerens. Skriv nytt tall i _Justèr timer_ og klikk _Lagre_.

- Fagets timer kan ikke settes lavere enn det som er timeplanlagt i faget den uken, og ikke lavere enn en annen lærer i faget har den uken.
- Lærerens timer kan ikke settes lavere enn det som er timeplanlagt for læreren, og ikke høyere enn fagets timer.

#### Slett timeplanen for de valgte ukene {#slett-timeplanen-valgte-uker}
Denne knappen vil slette timeplanen til den valgte læreren for de ukene som er avkrysset i tabellen. Læreren tas bort fra fagets timer i ukene, og lærerens uketimer settes til 0. Timene blir stående i klassens timeplan, med eventuelle andre lærere eller uten lærer.

:::warning
Det kommer ikke noe spørsmål om bekreftelse. Sjekk at det er riktige uker som er krysset av før du klikker.
:::

#### Bytt lærer for valgte uker {#bytt-lærer-for-valgte-uker}
Denne funksjonen er nyttig dersom man ønsker at en annen lærer skal overta timeplanen til den valgte læreren én eller flere uker. Marker ukene det gjelder, velg læreren du ønsker skal overta i listen _Lærer_ og klikk _Bytt lærer for valgte uker_. Listen viser bare lærere som ikke allerede står i faget, og med _Vis kun lærere som har fagkoden_ krysset av bare lærere som har fagkoden (se [Registrere faglærer](#registrere-faglærer)).

iSkole vil nå kontrollere om denne læreren har mulighet til å overta, altså om læreren har andre klassefag, gruppefag eller reservasjoner på samme tid. Hvis mulig vil byttet bli gjennomført, hvis ikke vises en tabell med kollisjonene som forhindrer byttet. Da byttes ingen av ukene. Klikk _Tilbake til tabellen_, fjern krysset for ukene med kollisjon (eller velg en annen lærer), og prøv igjen.

Når byttet gjennomføres, legges den nye læreren på timene der den forrige læreren sto i de valgte ukene. Læreren legges også til i faget, med samme årstimer, ressurs, funksjon og karaktertilgang som læreren som hadde timene, og får uketimene i de valgte ukene (de andre ukene står med 0). Uketimene til læreren som har gitt fra seg timeplanen sin blir nedjustert til 0 for de valgte ukene. Hvem som er fagansvarlig, endres ikke.

:::info Merk
Etter byttet står begge lærerne med samme ressurs og årstimer. Juster dem for begge lærerne med blyanten foran navnet, slik at summen stemmer med fagets.
:::

Eksempel på kollisjon ved bytte av lærer.

![Kollisjoner ved bytte](/img/tf_klassefag_bytte_kollisjon.png 'Kollisjoner hindrer bytte av lærer')

### Når en lærer slutter {#når-en-lærer-slutter}
Faget er timeplanlagt for hele året med Peder som lærer. Men så slutter Peder, og Berit skal overta som lærer fra nyttår og ut skoleåret. Gjør da følgende:

1. Klikk på blyanten i kolonnen _Uketimer_ for Peder.
1. Kryss av ukene fra nyttår og ut skoleåret.
1. Velg Berit i listen _Lærer_, og klikk _Bytt lærer for valgte uker_. Berit legges til i faget og overtar Peders timer i disse ukene. Ikke legg til Berit i faget først: lærere som allerede står i faget, vises ikke i listen.
1. Juster ressurs og årstimer for både Peder og Berit (blyanten foran navnet), og flytt eventuelt fagansvaret til Berit.

Tilsvarende må andre fag til Peder gis ny lærer.

Ikke slett Peder. Da fjernes han fra alle timene i hele skoleåret, også ukene før nyttår.

Skal byttet bare gjelde én uke, kan det også gjøres fra _Timeplan_, se [Bytte av lærer i fag](/docs/timeplanlegging#bytte-av-lærer-i-fag).
