---
id: ms_iop
title: IOP
sidebar_label: IOP
---

## Generelt
iSkole kan benyttes for å håndtere hele søknadsprosessen i forbindelse med IOP. Løsningen sikrer at kun lærere som har behov for tilgang til elevens IOP har tilgang til denne. For å redusere antall IOP-dokumenter som kan komme på avveie er det i utgangspunktet kun IOP-ansvarlige som har mulighet til å laste ned IOP-dokumenter fra iSkole, men det er mulig å tillate nedlasting for flere på det enkelte dokument. Lærerne både leser og skriver alt som har med IOPen direkte i iSkole. Kort beskrivelse av oppgaveflyten:
1. Skolen oppretter elevens søknad om IOP. Dette inkluderer fagene det søkes om og vedlegg som dokumenterer behovet for IOP.
2. Eleven, eller foresatte til elever som ikke er myndige, godkjenner søknaden ved å logge inn på iSkole.
3. Skolen oppretter en felles søknad for skolen og legger til de elevene som denne søknaden skal omfatte. Skolen laster ned en PDF med alle elevenes IOP-søknader inkludert vedlegg.
4. Skolen mottar vedtak fra fylket/kommunen og registrerer om søknaden er innvilget eller avslått.
5. Basert på vedtak om IOP registreres elevstatus Spesialundervisning.
6. Skolen oppretter IOP-del 1. Kartlegging, mål med opplæringen, fagene osv.
7. Faglærerne fyller inn kompetansemålene i de ulike fagene. (IOP del 2)
8. Elever og foreldre gis tilgang til IOPen.
9. Faglærerne skriver inn vurdering 1. halvår/årsvurdering.
10. Skolen skriver årsrapport og sender denne til fylket/kommunen.

:::info Merk
Det er mulig kun å benytte deler av den beskrevne flyten. F.eks. kan man gå direkte til punkt 5 og kun registrere vedtaket og gjøre IOP-dokumentasjonen på iSkole.
:::

![IOP – elevliste](/img/ms_iop_elevliste.png 'Elevliste med IOP')

## Roller og tilganger
I IOP-behandlingen skilles det i hovedsak mellom IOP-ansvarlig og faglærere. IOP-ansvarlig har full tilgang til alle funksjoner. De oppretter søknader og IOP og bestemmer når faglærerne og elever/foreldre skal få tilgang til elevens IOP. Rollen som IOP-administrator tildeles av rektor eller administrator fra _Mine sider > Tilgang_, ved å legge personen til brukergruppen _IOP ansvarlig_ i arkfanen _Brukergrupper_. Tilgang til elevens IOP tildeles automatisk til alle lærere som har eleven i minst ett fag. Eleven trenger ikke å ha IOP i faglærerens fag for at faglæreren skal få tilgang. Faglærer har ikke mulighet til å laste ned dokumenter, med unntak av dokumenter IOP-administratoren har gjort synlig for faglærere. Faglærere har kun leserettighet på elevens IOP del 1. For IOP del 2 har man leserettighet på alle fag. For egne fag har man også skriverettighet.

:::tip Faglærere
Faglærere kan hoppe til avsnittet for [Elevens IOP](#elev_iop).
:::

## Opprett søknad for elev
### Legg til ny elevsøknad om IOP
Ny elev registreres ved å klikke _Legg til elevsøknad_. Et dialogvindu viser alle elever ved skolen som ikke er registrert med en IOP allerede. Du kan søke etter eleven du ønsker å legge til ved å benytte filteret over tabellen. Klikk på _Legg til_ bak eleven for å registrere søknad for denne eleven.

### Fyll inn informasjon til søknaden {#fyll-inn-informasjon-til-søknaden}

Søknaden har disse delene. Klikk _Endre_ på en del for å fylle den ut, og _Lagre_ når du er ferdig.

- **Sakkyndig vurdering** – navnet på PPT-tjenesten og datoen for den sakkyndige vurderingen.
- **Elevens mål med opplæringen** – _Studiekompetanse_, _Yrkeskompetanse (fag-/svennebrev)_ eller _Sluttkompetanse på et lavere nivå_.
- **Tilrådning om individuelt tilrettelagt opplæring** – fagene det søkes om. Klikk _Legg til_, velg faget og fyll ut mål og innhold, omfang, organisering og om faget skal vurderes med karakter. Med pilene endrer du rekkefølgen på fagene.
- **Annet** og **Begrunnelse** – fritekst.
- **IOP-dokumenter som er vedlegg til årets søknad** – klikk _Legg til_ og velg et dokument som allerede er knyttet til elevens IOP, eller klikk _Last opp fil_ for å laste opp et nytt. Dokumentet blir en del av søknaden som sendes til fylket/kommunen. Det må være i PDF-format for å flettes inn med resten av søknaden. Dokumenter som lastes opp til søknaden, blir også tilgjengelige under _IOP-dokumenter_ på elevens IOP.
- **Inkluder forrige års IOP som vedlegg til søknaden** – kryss av hvis fjorårets IOP skal følge med søknaden.

:::info Merk
Listen over fag inneholder alle fag eleven er registrert med i _Elevadmin > Fag_.
:::

:::info Merk
Dokumentene må være i PDF-format.
:::

![IOP-søknad](/img/ms_iop_soknad.png 'Elevens IOP-søknad')

### Status for IOP-søknad
1. **Registrert** Skolen har opprettet søknaden.
2. **Venter på godkjenning** Skolen har gjort søknaden tilgjengelig for elev og foreldre og venter på at søknaden skal godkjennes.
3. **Godkjent** Eleven/foreldrene har godkjent at skolen sender søknaden.
4. **Under behandling** Elevens søknad er knyttet til skolens søknad som er sendt til fylke/kommune. Statusen settes automatisk når eleven legges til en skolesøknad.
5. **Innvilget/avslått** Frem til man registrerer innvilget eller avslått vises begge alternativer. Når dette er registrert vil kun _Innvilget_ eller _Avslått_
vises.

### Endre på søknaden
Hvis man senere vil endre på søknaden klikker man på blyanten i kolonnen _Behandle søknad_ i tabellen _Elever_. Kun IOP-ansvarlige ser denne kolonnen.

### Slette søknaden {#slette-søknaden}
Så lenge søknaden har status _Registrert_ eller _Venter på godkjenning_, kan IOP-ansvarlig slette den med søppelbøtta i kolonnen _Behandle søknad_. All IOP-informasjon om eleven slettes. For å bekrefte må du skrive inn elevens etternavn.

### Godkjenning fra elev og foreldre
Når søknaden er ferdig utfylt kan søknaden gjøres tilgjengelig for eleven og foreldrene ved at skolen klikker på knappen _Publiser_under _Status_ øverst på elevens søknad. Eleven eller foreldrene til umyndige elever må godkjenne at søknad om IOP sendes til fylket/kommunen. Det er ikke mulig å legge elevens søknad til skolens søknad før godkjenningen er gjort.

:::info Merk

Det er mulig å gjøre endringer i søknaden også etter at den er publisert og godkjent. Eleven og foreldrene får ikke beskjed om endringer, så gjør søknaden ferdig før du publiserer den.
:::

### Godkjenning/avslag fra fylket/kommunen
Når skolen får tilbake vedtaket registreres eventuell godkjenning eller avslagmed knappene _Innvilget_ eller _Avslått_ under _Status_ på elevens søknad. Knappene vises når søknaden har status _Under behandling_. Før dette må det sendes en samlet søknad fra skolen til fylke/kommune. Se [Opprett søknad for skolen](#soknad_skole).

## Opprett søknad for skolen {#soknad_skole}
Valgene beskrevet i dette kapittelet vises ved å klikke på _Administrer skolens søknader_. De søknadene som er blitt godkjent av elever eller foreldre kan legges til skolens samlede søknad. Dersom skolen skal søke til flere fylker / kommuner kan det opprettes en søknad til hvert fylke/kommune.

:::info Merk

Elevens søknad kan også lastes ned enkeltvis med knappen _Last ned søknaden_ under _Status_ på elevens søknad. Knappen vises når søknaden har status _Under behandling_ eller senere, altså etter at eleven er lagt til en søknad for skolen.
:::

### Legg til skolesøknad
Etter å ha klikket _Administrer skolens søknader_, klikk _Legg til_ over tabellen _Skolens IOP-søknader_. Gi søknaden et navn i feltet _Merknad_, f.eks. _Buskerud fylkeskommune_, og klikk _Lagre_.

### Legg elever til søknaden
Klikk på søknaden du ønsker å knytte elever til. Klikk deretter knappen _Legg til elevsøknad_. Et dialogvindu viser alle eleversom har godkjent at skolen sender IOP-søknad og som ikke allerede er tilknyttet søknaden. Klikk _Legg til_ bak elevens navn for å legge eleven til skolens søknad. Tips: Du kan søke etter elever i filteret over listen.

### Skrive ut søknadene med vedlegg
I tabellen med skolens IOP-søknader, klikk_Vis søknad_ på raden til søknaden du ønsker å skrive ut. En PDF-fil blir lastet ned til din maskin. Denne inneholder alle tilknyttede søknader og eventuelle vedlegg. Når søknaden er skrevet ut og sendt til fylket/kommunen kan du registrere dato i feltet _Sendt_ (klikk blyanten på raden). 

:::tip Tips
Du kan laste ned søknaden så mange ganger du måtte ønske, så du kan trygt slette eventuelle nedlastinger på din maskin. Hvis du vil gjøre endringer kan du gjøre ønskede endringer og laste ned søknaden på nytt. Når søknaden er sendt kan du sette inn datoen i feltet _Sendt_. Det er ikkemulig å legge til/fjerne elever fra søknaden når dato er satt.
:::

## Elevens IOP {#elev_iop}
For å jobbe med elevens IOP klikker du på øyet i kolonnen _Vis_ helt til venstre på raden til eleven.
Beskrivelse av skjermbildet:
- **IOP-Dokumenter** er dokumenter skolen har lastet opp. Faglærere ser bare dokumentene som er gjort synlige for faglærere.
- **IOP del 1 - Elevnavn** Opprette/endre IOP-del 1 og visning/endring av IOPens status.
- **Logg** viser logg hvor skolen kan legge inn fritekst.
- **IOP del 2 -Elevnavn**Fagene som er lagt til i IOP del 1, inkl. status for lærerens arbeid.
- **Vedlegg til kompetansebevis** Opplysningene som registreres her vil være grunnlaget for vedlegget som skal følge elevens kompetansebevis.

:::tip Tips
I stedet for å gå tilbake til elevlisten for å velge en ny elev kan man velge elever fra nedtrekklisten på toppen av siden.
:::

![IOP for eleven](/img/ms_iop_elev.png 'Elevens IOP')

### IOP-Dokumenter
Dokumentene kan deles i to kategorier, dokumenter som er lastet opp til iSkole og dokumenter som genereres av iSkole basert på data som skolen har registrert.
#### Dokumenter lastet opp til iSkole.
Disse dokumentene vises i tabellen. IOP-ansvarlig avgjør hvilke dokumenter som skal være synlig for faglærere. Dokumentets tittel og synlighet kan angis ved opplasting (_Legg til_) eller senere endres ved å klikke på ... i kolonnen _Valg_ og velge _Endre_. Faglærere vil kun ha valget _Last ned_.
##### Slette dokumenter
IOP-ansvarlig har en kolonne _Valg_ til høyre i tabellen. Klikk på ... og velg _Slett_. En dialog vil vises og man må bekrefte at man virkelig ønsker å slette dokumentet. 

:::info Merk
Dersom dokumentet er knyttet til elevens IOP-søknad, må man først gå til søknaden og fjerne dokumentet fra søknaden.
:::

#### Dokumenter som genereres av iSkole.
IOP-ansvarlig laster ned disse dokumentene med knappene _IOP_, _Vurdering 1. halvår_ og _Årsrapport_ øverst i _IOP-dokumenter_.
- **IOP** Inneholder overordnet mål for IOP ([se IOP del 1](#iop_del_1)), overordnet plan for de enkelte fag, samt kompetansemål, læringsmål og innhold for hvert enkelt fag.
- **Vurdering 1. halvår** Inneholder vurdering av elevens utvikling og elevens videre utviklingsmuligheter i det enkelte fag.
- **Årsrapport** Inneholder overordnet oversikt over opplæringen eleven har fått i de ulike fag, overordnet vurdering av undervisningen som er gitt, behov for videre IOP, samt årsvurderingen i det enkelte fag.

### IOP del 1 {#iop_del_1}
Før man har opprettet IOP del 1 vises en stor knapp _Opprett IOP del 1_. Når man klikker på denne knappen og IOP del 1 blir opprettet vises publiseringsstatusen for IOPen, samt knapper for å vise og endre IOP del 1 (_Vis IOP del 1_) og for å skrive årsrapport (_Endre årsrapport_).

#### Publiseringsstatus
1. Under utarbeidelse -IOP del 1 og fagene i del 2 vises bare for IOP-ansvarlig
2. Publisert faglærere -IOPen vises for faglærerne, og de kan starte sitt arbeid med IOP del 2.
3. Publisert elev og foreldre - IOP-dokumenter, IOP del 1 og kompetansemål, læringsmål og innhold i del 2 vises for eleven og foreldrene.
4. Publisert vurdering 1. halvår - Vurderingen som faglærerne legger inn på hvert fagblir synlig for eleven og foreldrene.
5. Publisert årsrapport. - Årsrapporten med vurderinger blir synlig for eleven og foreldrene.

:::tip Tips
Man kan hoppe direkte til en publiseringsstatus ved å klikke på den, eller gå ett steg om gangen med knappene _Forrige_ og _Neste_
:::

#### Vis IOP del 1
Her fyller IOP-ansvarlig ut overordnet informasjon om IOPen.
-Inngår IOPen i en helhetlig individuell plan (IP) etter helselovgivningen?
- Grunnlagsdokumenter
- Skolens pedagogiske kartlegging, faglig/sosialt
- Mål med opplæringen (Studiekompetanse, yrkeskompetanse eller grunnkompetanse)
- Langsiktig plan for opplæringen. (Hvilke år skal eleven ta de ulike skoletrinnene?)
- Eventuell utvidelse av opplæringstiden på bakgrunn av ny sakkyndig vurdering
-Individuelt tilrettelagt opplæring dette opplæringsåret. (Fag med Innhold, omfang og organisering)
- Rammefaktorer
- Samarbeidspartnere, interne og eksterne
- Annet
- Tidspunkt for evaluering av gjennomført opplæring og elevens utvikling

:::info Fag fra søknaden
Så lenge det ikke er lagt til noen fag kan fagene hentes fra søknaden med knappen _Hent fag fra IOP-søknad_. Etter overføring fra søknaden kan de endres ellerslettes iht. elevens vedtak. Når et fag legges til i IOP del 1, får eleven automatisk fagstatus _Spesialundervisning_ i faget.
:::

#### Årsrapport {#årsrapport}
IOP-ansvarlig skriver årsrapporten med knappen _Endre årsrapport_. Her vurderer skolen arbeidsmetodene og organiseringen som er brukt, om eleven fortsatt har behov for individuelt tilrettelagt opplæring, om det er behov for ny sakkyndig vurdering, og om noe bør endres. Årsrapporten lastes ned med knappen _Årsrapport_ under _IOP-dokumenter_, og blir synlig for eleven og foreldrene når IOPen har status _Publisert årsrapport_.

### Logg
I loggen kan man notere oppdukkende hendelser. Det kan være dokumentasjon på tiltak skolen har gjort etter utfordringer eleven har møtt på. Hverlogglinje består avett fritekstfelt. Etter lagring vises dato for når logglinjen ble opprettet og hvem som opprettet den. Dersom teksten endres vil dato for siste endring vises under _Sist endret_. Navnet vil være til den som skrev teksten eller sist endret den. Loggen viser også tidligere skoleår. Kryss av for _Vis kun årets logg_ for å skjule dem.

### IOP del 2
IOP del to er den delen av IOPen som faglærernevil arbeide med gjennom hele skoleåret. I starten av skoleåret legger faglæreren inn kompetansemålene med tilhørende læringsmål og innhold. Videre gjennom året skrives vurdering for 1. halvår og til slutt en årsvurdering.

Tabellen viser elevens fag. Kolonnene _Mål_, _1. h.å._ og _Års_ viser om læreren er ferdig med kompetansemål, vurdering 1. halvår og årsvurdering. Klikk på øyet i kolonnen _Vis_ for å se hva som er planlagt for faget i IOP del 1 (innhold, omfang, organisering, vurdering og nødvendig kompetanse).

:::info Merk
For at fagene skal vises i del 2 må de først være lagt til i del 1.
:::

#### Kompetansemål
IOP-ansvarlig har skriverettigheter på alle fag i del 2, men det er lagt opp til at denne delen skal behandles av faglæreren. Faglæreren sammen med eventuelle tolærere har skriverettigheter til sine fag og leserettighet på de øvrige fagene. For å legge til kompetansemål klikk på faglinjen ogderetter _Legg til_ i fanen _Kompetansemål_ under listen med fag. Hver kompetansemållinje består av _Kompetansemål_, _Læringsmål_ og _Innhold_. Vi anbefaler å legge inn ett og ett kompetansemål, da blir senere visning av mål og innhold mer oversiktlig. Når man anser seg ferdig med kompetansemålene i faget, klikk på _Ferdig_. Dette vil være nyttig for egen del, men spesielt for IOP-ansvarlig som skal avgjøre om IOPen er klar for å publiseres for elev og foreldre. Med _Ikke ferdig_ fjerner du markeringen igjen.

#### Vurdering 1. halvår.
Klikk på faget, velg deretter fanen _Vurdering 1. halvår_ i arkfanen under tabellen med fag. Klikk så _Rediger_ ytterst til høyre. Vurderingen består av to tekstfelt _Vurdering av elevens utvikling_ og _Vurdering av elevens videre utviklingsmuligheter_. Husk å lagreetter at vurderingen er skrevet inn. Når du mener innholdet kan publiseres til eleven, klikk på _Ferdig_.

#### Årsvurdering
Klikk på faget, velg deretter fanen _Årsvurdering_ i arkfanen under tabellen med fag. Ellers samme felter og funksjonalitet som _Vurdering 1. halvår_.

:::info Merk
Markeringen _Ferdig_ er ment som en indikator på at innholdet kan publiseres til elev og foreldre. Det er fortsatt mulig å gjøre endringer. F.eks. kan vurderingen publiseres så snart man har gjort første vurdering og deretter kontinuerlig oppdatere vurderingen underveis i skoleåret.
:::

### Vedlegg til kompetansebevis
Innholdet i vedlegg til kompetansebevis legges inn av IOP-ansvarlig. Hvert fag som skal med i vedlegget legges til ved å klikke _Legg til_. Angi omfang (heltall), fag/emne, år og vurdering, klikk _Lagre_. Fagene vises i vedlegget i den rekkefølgen de har blitt lagt inn, benytt pilene dersom du ønsker å endre denne rekkefølgen. Du kan slette et fag ved å klikke på søppelbøtten, eller endre det ved å dobbeltklikke eller å klikke på blyanten. Dersom vurderingen er lang og du ønsker å se hele teksten, klikk på > til venstre i kolonnen _Vis_. Ved å klikke på knappen_Forhåndsvis vedlegget_ kan du laste ned en kladd som viser hvordan vedlegget vil bli seende ut.
