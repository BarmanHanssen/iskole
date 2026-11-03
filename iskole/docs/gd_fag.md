---
id: gd_fag
title: Fag
sidebar_label: Fag
---
## Generelt

Kort fortalt representerer klassefag de undervisningsgruppene der alle klassens elever undervises sammen, mens gruppefag er undervisningsgrupper på tvers av klasser. Alle fag som skal tilordnes en klasse (se menyvalget _Klasser_) må først være registrert her som _Klassefag_. Undervisningsgruppene i de ulike gruppefagene som registreres her opprettes fra menyvalget _Grupper_. Der kan det opprettes flere grupper for hvert gruppefag dersom mange elever skal følge faget.

![image](/img/gd_fagstruktur.png)
:::info Merk 
Klassefaget ST2 NOR er her tildelt klassene ST2A og ST2B. Gruppefagene tildeles ikke til noen klasse, de identifiseres her med gruppenr 1 og 2.
:::

<mark>Skjermbildet har fanene _Klassefag_, _Gruppefag_, _Fag med flere komponenter_, _999999-fag, ikke komponent_, _Oversikt_ og _Utgåtte fagkoder_. Hver fane har et filterfelt over tabellen: skriv inn deler av for eksempel navn, trinn eller fagkode, så viser tabellen bare radene som passer.</mark>

### Sletting av fag
Registrering/endring av fag er knyttet til skoleåret som er valgt. Ved nytt skoleår kan det være greit å slette fag som en vet ikke vil bli brukt. Å slette et fag for dette skoleåret, har ingen innvirkning på andre skoleårs datagrunnlag.

### Fag og fagkoder
Klasse- og gruppefag skal ha en fagkode. Alle fag som skal timeplanlegges, og som skal kunne tilbys elevene, må være registrert her. Men faget blir ikke tilgjengelig for timeplanlegger, eller elev, før det blir registrert under menyvalget _Klasser_ og/eller _Grupper_. 

Med denne todelingen av fag (i klasse- og gruppefag) kan hver elev få registrert akkurat sine fag. Og med elevenes fagvalg på plass har timeplanlegger full kontroll på at timeplanen kan legges uten kollisjon på elevens timeplan.

### Slik ser oversikten over klassefag ut

<div class="nytt-bilde">

![Fanen Klassefag med fanene øverst, knapperaden (Legg til...,](/img/gd_fag_klassefag.png 'Fanen Klassefag med fanene øverst, knapperaden (Legg til...,')

</div>

<mark>Klikk på et fag i tabellen for å markere det. Knappene _Endre..._ og _Slett..._ gjelder det markerte faget. Fanen _Gruppefag_ ser lik ut og virker på samme måte.</mark>

:::tip Tips
Har du _Fagkode_ markert med rød farge, velg da _Utgåtte fagkoder_ for å oppdatere, se omtale nederst på siden. <mark>Rød farge betyr at datoen i _Gyldig t.o.m._ er passert.</mark>
:::

## Opprette et fag
Prosessen for å legge inn klasse- og gruppefag er svært lik, her vises hvordan man legger inn et klassefag.

Klikk på _Legg til..._

<div class="fjernet">

![image](https://github.com/user-attachments/assets/91144dc5-613a-4a7d-9b14-e89e56e60907)

</div>

Følgende skjermbilde vises:

<div class="nytt-bilde">

![Fagdialogen (Endre klassefag for AP 3 KRØ) med panelene Time](/img/gd_fag_dialog.png 'Fagdialogen (Endre klassefag for AP 3 KRØ) med panelene Time')

</div>

### Timeplandata
- _Trinn_: Valget er begrenset av hva som alt er registrert fra menyvalget _Utdanning_. <mark>Listen viser utdanningsprogram og trinn, for eksempel _AP 3_.</mark>
- _Navn (kort)_: <del>Tre tegn som</del> <mark>Kort navn, gjerne på tre tegn, som</mark> blant annet benyttes på timeplanen. Eksempel: NOR for faget norsk, kan brukes på alle trinn selv om faginnhold/fagkode er ulikt. <mark>Kortnavnet gjøres om til store bokstaver, kan ikke inneholde spesialtegn (som + & / ( ) ? * @) og må være unikt på trinnet.</mark>
- _Navn_: Brukes internt i timeplansammenheng. Merk at offisielt navn er gitt via fagkoden fra Udir. Offisielt navn benyttes på karakterutskrifter etc.
- <del>_Timer per uke_</del> <mark>_Uketimer_</mark>: Skoleåret er på 38 uker. Ut fra hvert fags omfang (gitt fra fagkoden) fastsettes hvor mange timer per uke som må timeplanlegges for å nå fagets omfang. Uketimetallet må ta hensyn til om timelengden er 45 eller 60 minutter. Timeplanlegger kan imidlertid justere timetallet opp eller ned på ukebasis slik at total undervisning i løpet av skoleåret blir i samsvar med fagets omfang. <mark>Uketimetallet kan ikke være over 99.</mark>
- _Rom_: Noe fag, eksempelvis kroppsøving, krever spesialrom. Da kan det være greit å knytte rommet til faget her. Det innebærer at timeplanlegger får dette rommet som førstevalg. Romvalget kan endres under timeplanleggingen. <mark>Velg _&lt;ingen&gt;_ når faget ikke skal ha et fast rom.</mark>

Når timeplan er lagt for hele skoleåret kan rapporten _Timeplan>Rapporter>Sum undervisning_ tas ut for kontroll. Her blir samtlige timeplanlagte timer i faget summert ut fra hver times lengde, resultatet vises i klokketimer og kan da sammenliknes med fagets omfang. 

### Karakterdokumentasjon
- _Fagkode_: Alle fag i grunnskolen og i videregående skole som skal dokumenteres via kompetansebevis eller vitnemål,  har en egen fagkode. Fagets fagkode (og fagplan med mere) er bestemt av Udir, og iSkole har alle fagene liggende klare for bruk. <del>Trykk _Endre fagkode_, så får du opp en overveldende lang liste! For å begrense innholdet i nedtrekkslisten: Tast inn navnet på faget, eller fagkoden (eller deler av navn eller del av fagkoden).</del> Unntaket er koden 999999 som vi bruker for fag som skal på timeplanen, men ikke skal tas med på vitnemål eller kompetansebevis. Slike fag kan være en komponent av et fag som har UDIR-fagkode. Mer om komponenter nedenfor. <mark>Et nytt fag får fagkoden 999999 (_&lt;Fag uten karakter&gt;_) til du velger en annen med _Endre fagkode_, se [Velg fagkode](#velg-fagkode).</mark>
- <mark>_Omfang_ og _Omfang vitnemål_: Hentes fra fagkoden og kan ikke endres her, med unntak av _Omfang_ for steinerskolene (se under). _Omfang_ er timetallet (klokketimer) for faget på trinnet. _Omfang vitnemål_ er det samlede omfanget når faget går over flere trinn. Kroppsøving har for eksempel omfang 56 på hvert trinn og 168 på vitnemålet.</mark>
- <mark>_Komponent av_: Vises bare når fagkoden er 999999. Her velger du hvilket fag på samme trinn faget er en komponent av, se [Fag med flere komponenter](#fag-med-flere-komponenter).</mark>

:::info Merk 
Fagkoder for Steinerskolene har RS i posisjon <del>3 og 4, altså xxRSxxx</del> <mark>4 og 5, altså xxxRSxx</mark>. Steinerskolene kan endre omfanget på sine fag. Det kan ingen andre skoler gjøre. <mark>For en fagkode med RS kan _Omfang_ endres i fagdialogen, og endringen lagres med _Lagre_. Omfanget gjelder alle fag med samme fagkode på trinnet ved skolen, også i andre skoleår.</mark>
:::

### Velg fagkode <span class="ny">NY</span> {#velg-fagkode}
_Endre fagkode_ åpner dialogen _Velg fagkode_ med fagkoderegisteret. Skriv hele eller deler av fagkoden i _Søk fagkode..._ og/eller navnet i _Søk navn..._, og trykk _Søk_ (eller Enter). _Nullstill søk_ tømmer søkefeltene og viser hele registeret igjen. Når du endrer et fag som alt har en fagkode, er søket fylt ut med de fire første tegnene i fagkoden, slik at beslektede koder vises.

Tabellen viser fagkode, fagnavn, gyldighetsperiode, omfang og omfang på vitnemål. <mark>Fagkoder som er gått ut (datoen i _Gyldig t.o.m._ er passert), vises bare når _Vis utgåtte fagkoder_ er krysset av, og står da med rød skrift. Koder som går ut senere, vises alltid.</mark> Klikk på fagkoden du vil bruke, og trykk _Velg_. Fagkoden blir lagret først når du trykker _Lagre_ i fagdialogen.

<div class="nytt-bilde">

![Dialogen Velg fagkode åpnet fra Endre klassefag (AP 3 KRØ): ](/img/gd_fag_velg_fagkode.png 'Dialogen Velg fagkode åpnet fra Endre klassefag (AP 3 KRØ): ')

</div>

### Ressurs til faglærer
- _Årstimer/Årsramme_: Brøken årstimer/årsramme gir fagets stillingsstørrelse. Den er gjerne et resultat av forhandlinger mellom fagforening og skolen, og registres for hvert fag. Nå brukes fortrinnsvis klokketimer, ikke antall 45-minutters timer, som måltall for årstimene. Da vil årstimer være fagets omfang slik det fremgår av fagets fagkode. Brøken årstimer/årsramme*100 angir fagets stillingsstørrelse i prosent av hel stilling.
- <mark>_Timelengde årstimer og årsramme_: Velg _45 minutter_ eller _60 minutter_ etter hvilken timelengde årstimer og årsramme er oppgitt i (eller _Ikke bestemt_). Årstimer og årsramme må være oppgitt i samme timelengde. Med timelengden kan iSkole beregne ressursen for vikartimene i faget. Endrer du timelengden mellom 45 og 60 minutter på et fag som har lærere, regnes lærernes årstimer i faget om til den nye timelengden.</mark>
- Lærer som er oppført som fagansvarlig (se _Time- og fagfordeling>Klassefag/Gruppefag_) får automatisk ressursen for faget.
- Dersom flere lærere deler på undervisningen i faget, kan ressursen fordeles mellom de involverte lærere. Omfordeling/justering av ressurs for lærer i fag gjøres fra _Time- og fagfordeling_.

### Elever
- <del>_Elever kan føre tilstedeværelse_</del> <mark>_Kan føre tilstedeværelse_</mark>: Huker en av for dette kan elevene i faget selv markere tilstedeværelse i timeplanlagte timer i faget. Uten avhuking er det bare lærer/kontaktlærer som kan gjøre dette. Kan endres frem og tilbake i løpet av skoleåret.

Husk å klikke på _Lagre_.

:::info Fagkode
Elever som tas inn i en klasse, får fagkoden knyttet til fagene i klassen, tilsvarende for elevens valgte gruppefag. <del>Endres fagkoden i faget herfra etter elevopptaket, vil det ikke endre fagkoden for allerede opptatte elever i faget.</del> <mark>Endres fagkoden i faget herfra etter elevopptaket, får elevene i faget som har den gamle fagkoden, den nye. Elever som har en annen fagkode enn faget, beholder sin. Har en av elevene den nye fagkoden fra før i et annet fag, stopper lagringen med en melding om dette.</mark> (Men for en elev i et fag kan fagkoden, både for klasse- og gruppefag, endres fra _Elevadmin>Karakterdokumentasjon_). 
:::

## Endre et fag
<mark>Marker faget i tabellen og</mark> klikk på _Endre..._

<div class="fjernet">

![image](https://github.com/user-attachments/assets/b4813538-caeb-451d-9993-b574a424acfd)

</div>

Bildet for endring er det samme som når man legger til et fag. Alt kan endres, unntatt _Utdanningsprogram,Trinn_ og _Navn (kort)_. <mark>Et fag som har komponenter, kan ikke få fagkoden 999999.</mark>


## Slette et fag <span class="endret">ENDRET</span> {#slette-et-fag}
<mark>Marker faget i tabellen og</mark> klikk på _Slett..._

<div class="nytt-bilde">

![Bekreftelsen etter Slett... for klassefaget AP3 NO2: spørsmå](/img/gd_fag_slett.png 'Bekreftelsen etter Slett... for klassefaget AP3 NO2: spørsmå')

</div>

Etter å ha valgt fag som skal slettes må man bekrefte at faget skal slettes. <mark>Bekreftelsen viser skoleåret, antall elever i faget og om faget er timeplanlagt og har karakterer. Svarer du _Ja_, forsvinner faget også fra klassene eller gruppene og fra timeplanen.</mark>

Fag hvor det allerede er satt karakter på en elev kan ikke slettes<mark>, og heller ikke fag der elever er meldt opp til eksamen. Er det ført fravær på timer i faget, får du melding om hvor mange timer det gjelder, og faget kan ikke slettes før timene er slettet i _Timeplan_.</mark>

## Noen av kolonnene vedrørende tabellen for klasse- og gruppefag
<div class="nytt-bilde">

![Klassefag-tabellen skrollet mot høyre: Komponent av, Omfang,](/img/gd_fag_kolonner.png 'Klassefag-tabellen skrollet mot høyre: Komponent av, Omfang,')

</div>
#### Omfang
Omfanget er bestemt fra fagkoden til faget og kan ikke endres<mark>, unntatt for steinerskolene</mark>. <del>Unntak: Fag med fagkode 999999, her legges omfanget inn manuelt.</del> <mark>Fag med fagkode 999999 har omfang 0.</mark>

#### Årstimer
<del>Årstimer settes automatisk likt med omfanget til fagets fagkode og er da angitt i klokketimer.</del> <mark>Årstimer fylles inn i fagdialogen. Oppgis de i klokketimer, er årstimer det samme som fagets omfang.</mark>

#### Årsramme 
Brøken Årstimer/Årsramme*100 gir fagets stillingsstørrelse. Altså hva faglærer får godskrevet for å undervise i faget.

#### Tilsvarer stillingsprosent
Beregnes ut fra årstimer delt på årsramme, multiplisert med 100. (Krever at årsrammen ikke er null.)

####  Elever
I det et nytt fag registreres her, kan selvsagt ingen elever være knyttet til faget. Elevene kommer først når klassefaget er plassert i en klasse (fra menyvalget _Klasser_), og elever er tatt inn i klassen. Tilsvarende må det være registrert en gruppe i faget (fra menyvalget _Grupper_), før elever kan knyttes til gruppefaget.
Når elevene er registrert vil tallene her vise status for det enkelte fag. <mark>Elever som har sluttet, telles ikke med.</mark> Dersom det viser seg at et fag ikke har elever når skoleåret starter, kan det muligens være fornuftig å slette faget?

## Fag med flere komponenter
#### Eksempel 1: Kan være aktuelt for klassefag med stort omfang.
Faget deles slik at hver del skal kunne ha alle elevene i klassen, men med egen lærer i hver del. Enkel og grei løsning for slike klassefag! Kan alternativt løses ved at faget er satt opp med flere lærere, men at disse fordeler ukens undervisningstimer slik at hver time bare har en lærer.

#### Eksempel 2: Kan være aktuelt for gruppefag. 
Typisk eksempel: En språkgruppe i spansk opprettes for elever med ulik forhåndskompetanse. De undervises noen timer samlet, her er faget registrert med fagkoden til majoriteten av elevene (se _Grunnlagsdata>Fag_. At noen elever skal ha en annen fagkode enn majoriteten, legges inn fra _Elevadmin.>Karakterer_). I andre timer er de delt ut fra forhåndskompetanse. Dette løses ved å registrere en komponent til faget. Komponenten har fagkoden 999999, og knyttes altså til den opprinnelige spansk-gruppen. Det opprettes to grupper for komponenten (se _Grunnlagsdata>Grupper_). I gruppe 1 kan elevene med størst forhåndskompetanse registreres, og de resterende i gruppe 2. De to gruppene skal undervises på samme tid.

#### Eksempel 3: Kan være aktuelt for klassefag hvor noen elever skal ha egen støttelærer (IOP?).
- Dersom elevene det gjelder har egen støttelærere i noen, eller alle timene i faget, og er sammen med klassen i alle fagets timer: Løses uten bruk av komponenter! Bruk ekstralærer i disse timene! Om ønskelig kan ekstra rom båndlegges som alternativt benyttes i disse timene. 

- Dersom elevene det gjelder har egne støttelærere, men er sammen med klassen i noen av fagets timer og har noen timer adskilt: Faget fjernes som klassefag og flyttes til gruppefag. Gruppefaget tildeles alle elevene i klassen og timeplanlegges der alle er samlet. Det opprettes en komponent til faget (se Grunnlagsdata>Fag), og to grupper for komponenten (se _Grunnlagsdata>Grupper_).  Elevene uten støttelærer plasseres i gruppe 1, de øvrige i gruppe 2. Gruppene kan da timeplanlegges separat.

<div class="nytt-bilde">

![Fanen Fag med flere komponenter: AP3 NOR (NOR1270) med kompo](/img/gd_fag_komponenter.png 'Fanen Fag med flere komponenter: AP3 NOR (NOR1270) med kompo')

</div>
 
Det er bare fag med fagkode 999999 som kan være komponent til et fag med fagkode forskjellig fra 999999. 

Her fås en oversikt over fag som alt har en komponent. For elever i komponentfaget vil eksempelvis ført fravær i komponentfaget bli slått sammen med fraværet i faget som eier komponenten. <mark>Fanen _Fag med flere komponenter_ viser hvert fag med fagkode og uketimer, og komponentene med navn og uketimer.</mark>

<del>For å få registrert en komponent, registreres først et fag med fagkode 999999, deretter klikkes _Endre_.</del> <mark>Komponenten registreres som et eget fag med fagkode 999999 på samme trinn som faget den hører til. Velg faget i _Komponent av_, enten når du legger til komponenten eller senere med _Endre..._</mark> Eksempel:

<div class="nytt-bilde">

![Endre klassefag for AP 3 NO2 (fagkode 999999) med nedtrekket](/img/gd_fag_komponent_av.png 'Endre klassefag for AP 3 NO2 (fagkode 999999) med nedtrekket')

</div>

Nedtrekkslisten viser da alle fag som <del>NOX</del> <mark>NO2</mark> kan være en komponent av. Utvalget er begrenset til alle fag på trinnet (her AP 3, altså trinn 3) som alt er registrert, og som har fagkode forskjellig fra 999999<mark>. Et klassefag kan bare være komponent av et klassefag, og et gruppefag av et gruppefag</mark>. Her er det nok NOR som er tiltenkt eierskapet. 

## 999999-fag, ikke komponent

<div class="fjernet">

![bilde](https://github.com/BarmanHanssen/iskole/assets/80097133/330f9328-f603-48e3-a2e6-80b388df43ff)

</div>

<mark>Fanen viser klasse- og gruppefagene med fagkode 999999 som ikke er komponent av et annet fag, med antall elever.</mark> Disse fag kan timeplanlegges på vanlig måte. De fremkommer ikke direkte på karakterdokumentasjonen, og er heller ikke med på diverse oversikter, f.eks til <del>Wis</del> <mark>VIGO</mark>. 

## Oversikt
Her vises alle fag som er registrert, men fokusert på gyldighet, og registrert elevtall på hvert fag. <del>Fag med rød skrift er gått ut på dato, og må gis ny fagkode.</del> <mark>Fag med en dato i _Gyldig t.o.m._ står øverst, og de må etter hvert gis ny fagkode. I kolonnen _Fag_ står klassefag med mellomrom og gruppefag med kolon, for eksempel _AP3 NOR_ (klassefag) og _LA3:ØXD_ (gruppefag).</mark> Merk at en fagkode kan være registrert både som klasse- og gruppefag, og på flere årstrinn, det er ok. Men en elev tillates ikke å få registrert to fag med samme fagkode i dette skoleåret. Dersom oversikten tas frem etter skolestart, vil _Elevantall_ vise hvor mange elever som er registrert med faget. <mark>Her telles også elever som har sluttet.</mark> Når nytt fag legges til, er selvsagt elevtallet null.

## Utgåtte fagkoder <span class="endret">ENDRET</span> {#utgåtte-fagkoder}

Ved opprettelse av neste skoleår er det naturlig å kopiere grunnlagsdata fra inneværende skoleår. Det kan hende at en fagkode fra i år er gått ut på dato neste skoleår. En slik fagkode vil markeres med rød farge, noe som indikerer at den må skiftes ut. <mark>Rød farge kommer når datoen i _Gyldig t.o.m._ er passert. Udir oppgir også hvilket semester en fagkode sist kan undervises, og listen under bygger på det, så en fagkode kan stå her før den blir rød.</mark>

<del>Velges _Utgåtte fagkoder_ får vi frem en liste over både klasse- og gruppefag som er gått ut på dato. Fagets utgåtte fagkode kan da automatisk erstattes av ny fagkode dersom ny fagkode er kjent.</del>

<mark>Slik gjør du det:</mark>

1. <mark>Velg fanen _Utgåtte fagkoder_ og klikk _Kjør kontroll mot UDIR_. iSkole henter oppdaterte opplysninger fra Udir om alle fagkodene skolen bruker i skoleåret, med kompetansemålene. Det kan ta litt tid. Meldingen til slutt viser hvor mange fagkoder som ble oppdatert.</mark>
2. <mark>Tabellen viser klasse- og gruppefagene (_Type_ KL og GR) med en fagkode som ikke kan undervises ut det valgte skoleåret (se _Undervist sist_, der H = høst og V = vår). _Type_ KLU og GRU er fag der fagkoden fortsatt gjelder, men Udir har en ny kode som kan tas i bruk. Linjer uten dato i _Gyldig t.o.m._ står i oransje. Under _Eksisterende fagkode_ står fagets fagkode i dag, under _Ny fagkode_ koden fra Udir som erstatter den.</mark>
3. <mark>Marker linjene som skal få ny fagkode (hold Ctrl/Cmd eller Shift for å velge flere) og klikk _Sett inn ny fagkode for valgte linjer_. Faget og elevene i faget som har den gamle fagkoden, får den nye. Går det ikke for en linje, beholder faget den gamle koden og blir stående i lista, og meldingen viser hvilke linjer som feilet.</mark>

<mark>Linjer uten ny fagkode kan ikke oppdateres herfra. Velg da fagkode selv med _Endre..._ i fanen _Klassefag_ eller _Gruppefag_.</mark>

<!-- BILDE: gd_fag_utgaatte_fagkoder.png | ny | Fanen Utgåtte fagkoder med knappene Kjør kontroll mot UDIR og Sett inn ny fagkode for valgte linjer, filterfeltet og tabellen med Eksisterende fagkode / Ny fagkode (LA3 ØXD, LBR3013, undervist sist V26) -->
