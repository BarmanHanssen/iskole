---
slug: ny_sokerportal
title: Nytt i søkerportalen
author: Thomas Hannestad
author_title: Systemarkitekt
author_url: https://github.com/thomashannestad
author_image_url: https://avatars.githubusercontent.com/u/10975904?s=400&u=3da50813df75e4f3afb48e241aba5457756c51a7&v=4
tags: [søkerportal]
---

Søkerportalen har fått et større løft denne høsten. Søkerne logger inn med ID-porten, foreldre søker
for barna sine til grunnskolen. I forbindelse med at elevadmin ble fornyet har *Søkere* i elevadmin har fått nytt
utseende og flere nye funksjoner.

<!-- truncate -->

Den nye portalen ble tatt i bruk 14. oktober, og 17. november kom en ny runde
med endringer. Her er en samlet oversikt over hva som er nytt, og hva skolen
bør se over før søknadene begynner å komme.

## For søkerne og foreldrene

### Innlogging med ID-porten

Søkerne logger inn med **ID-porten** (BankID, MinID og så videre). Brukernavn
og passord brukes ikke lenger.


- **Første gang** oppretter søkeren en konto. Fødselsnummeret er bekreftet av
  ID-porten, og navnet hentes derfra. Søkeren ser over navnet og legger inn
  e-post og telefon.
- Søkeren må ha **norsk fødselsnummer eller D-nummer**.
- **Har søkeren ikke ID-porten,** registrerer skolen søkeren med **Legg til ›
  Ny søker…** i Elevadmin. Søkeren logger da inn med en **innloggingslenke på
  e-post**.

Se [Innlogging og registrering](/docs/sp_registrering).

### Foreldre søker for barn til grunnskolen

Foreldre søker skoleplass i **grunnskolen** for sine barn.

- Forelderen logger inn **som seg selv** med ID-porten og velger hvem det
  søkes for på siden **Hvem søker du for?**. Et nytt barn registreres med
  fødselsnummer og navn.
- **Den andre forelderen** kan inviteres på e-post og bekrefter med ID-porten.
- Har skolen registrert fødselsnummeret til en forelder, blir forelderen
  **koblet til barnet** ved første innlogging.

![Siden «Hvem søker du for?» med forelderen selv og barna](/img/sp_hvem_soker_du_for.png)

Søkere til **videregående** søker selv, som før. Foreldrene kan følge
søknaden. Er søkeren under 18 år og skolen bruker digital signering, signerer
forelder 1 avtalen om skoleplass sammen med søkeren.

Se [Søke for barn](/docs/sp_foreldre).

### Dokumentene skolen krever, står i søknaden

Under **Dokumenter** i søknaden står **Dokumenter du må levere**, med én linje
for hvert dokument skolen krever. Linja viser om dokumentet mangler eller er
levert, og har sin egen opplasting.

![Dokumenter du må levere, med én linje per dokument](/img/sp_dokumenter.png)

- Dokumenter skolen krever i selve søknaden (fase 1), må være lastet opp før søknaden
  kan sendes.
- Et tilbud kan ikke aksepteres før alle obligatoriske dokumenter er levert.
  Søkeren får beskjed om hvilke som mangler.

### Pass leveres som passkopi

Portalen spør ikke lenger om pass på Personalia. Krever skolen pass, laster
søkeren opp **Kopi av bildesiden i passet** under Dokumenter.

- Passnummer, nasjonalitet og utløpsdato **leses fra bildet**, og søkeren
  kontrollerer dem. Kan bildet ikke leses, fyller søkeren ut feltene selv.
- **Har ikke pass** kan fortsatt velges.
- Har søkeren lastet opp pass før, kan det samme passet brukes i en ny søknad.
- Er feil pass lastet opp, kan søkeren bytte passkopien eller velge **Fjern
  passet**.


## Vedlegg - obligatorisk, fase og trinn

Under **Grunnlagsdata › Søkerportal › Vedleggstyper** velger skolen som før
hvilke dokumenttyper søkerne kan laste opp. Nytt er at hver type kan stilles
inn. Velg typen og klikk **Endre…**:

![Vedleggstyper med kolonnene Obligatorisk, Fase og Gjelder for trinn](/img/gd_sokerportal_vedleggstyper.png)

- **Obligatorisk:** kryss av for at vedlegget må leveres av søkerne.
- **Fase:** i fase 1 etterspørres vedlegget i søknaden. I fase 2 etterspørres
  det først når søkeren har fått tilbud.
- **Gjelder for trinn:** uten valg gjelder vedlegget alle søkere. Velger du
  trinn, vises det bare for søkere til de trinnene.

![Dialogen Endre vedleggstype](/img/gd_sokerportal_vedlegg_endre.png)

Slik virker reglene:

- Et obligatorisk vedlegg i **fase 1** må være lastet opp før søknaden kan
  sendes.
- **Alle** obligatoriske vedlegg må være lastet opp før et tilbud kan
  aksepteres.
- Innstillingene gjelder skolen for alle skoleår.

To ting til om vedlegg:

- **Vitnemål** er ny vedleggstype. Legg den til under Vedleggstyper hvis dere
  vil bruke den.
- **Pass:** skoler som spurte om pass tidligere, har fått passkopien som
  obligatorisk vedlegg i fase 2. Dere kan selv
  flytte passkopien til fase 1.

**Spørsmålene** til søkerne har fase på samme måte, og de kan ha svartype:
fritekst, tall, dato, e-postadresse, kontonummer, nedtrekksliste eller
flervalg. Når dere oppretter et nytt skoleår, følger svartypen og valgene nå
med på kopien.

## Søkere i Elevadmin

### Alt om søkeren på én flate

Detaljpanelet viser nå **Søker**, **Søknad**, **Vurdering**, **Foreldre**,
**Behandling**, **Vedlegg** og **Spørsmål/svar** samlet på én flate i stedet
for i faner.

![Søkerlista med detaljpanelet under, der alt om søkeren står samlet](/img/soker_detalj.png)

- Knappen oppe til høyre i panelet, **Vis lista til venstre**, legger
  søkerlista ved siden av detaljene. **Vis lista over** legger den tilbake.
- **Behandling** vises som en tidslinje. Klikk på et steg for å se meldingen
  som ble sendt.
- **Foreldre:** klikk på navnet for å brette ut fødselsdato, adresse og
  knappene **Sperr** og **Slett**. Blyanten åpner forelderen for redigering.
- **Vedlegg** viser hvilke obligatoriske vedlegg som mangler.
- Personkortet viser **passet**, når passkopien hører til søknaden ved skolen.

### Bilder til vurdering

Portrettbilder og passkopier blir kontrollert automatisk når søkeren laster
dem opp. Bilder kontrollen har merket, og som søkeren likevel har valgt å
bruke, samles under filterknappen **Bilder til vurdering**.

![Bilder til vurdering med en passkopi der fødselsdatoen ikke stemmer](/img/soker_bilder_vurdering.png)

- Velg **Bildet er OK** eller **Må byttes** for hvert bilde.
- Er **fødselsdatoen i passet** en annen enn søkerens, blir passkopien merket.
  Passet går ikke videre til eleven før skolen har godkjent kopien.
- Velger du **Må byttes** på en passkopi, ser søkeren det i portalen og kan
  laste opp en ny.
- Har skolen godkjent passkopien, kan ikke søkeren fjerne passet selv, bare
  bytte kopien.

### Søknader som ikke er sendt, og interessenter

Fanene **Søknader, ikke sendt** og **Interessenter** er laget for oppfølging:

![Søknader, ikke sendt, med knappen Send inn for søkeren](/img/soker_ikke_sendt.png)

- **Merknad fra skolen:** skriv ned hva som er avtalt, så oppfølgingen er
  loggført.
- **Endre opplysninger:** rett e-post, telefon og andre opplysninger, for
  eksempel når dere snakker med søkeren på telefon og adressen viser seg å
  være feil. For en interessent bruker du **Endre interessent**.
- **Send inn for søkeren:** søknaden får status «Søknad sendt til skolen» og
  flyttes til Søknader, og søkeren får kvitteringen «Søknad mottatt». Mangler
  noe i søknaden, sier dialogen hva, og du kan rette det først eller sende inn
  likevel. Reglement og vilkår godtar søkeren selv når et tilbud aksepteres.
- **Eksporter Excel** gir lista i fanen du står i.
- Ikonet på hver linje **kopierer e-postadressen**, så du kan skrive til
  søkeren fra ditt eget e-postprogram.

### Avslag til mange på én gang

**Bulk-handling › Avvis søkeren** kan nå brukes på søknader med status Under
behandling, Søknad sendt til skolen, Søknad komplett og Venteliste. Det er
nyttig når skolen er full og alle på ventelista skal ha avslag. Du velger
hvem som skal med, og om søkerne skal varsles på e-post.

### Meldinger til foreldrene

Slik avgjøres det hvem som får e-post og SMS fra skolen:

- Er søkeren **under 18 år**, er forelder 1 alltid mottaker, uansett
  e-varsel.
- Andre foreldre får meldinger når de har krysset av for **e-varsel**.
- En forelder **uten e-varsel** står nå likevel i mottakerlista, uten kryss
  og med merket _Har ikke krysset av for e-varsel_. Krysser du av, får
  forelderen meldingen. Når du sender til mange, er det ett eget kryss:
  _Send også til foreldre som ikke har krysset av for e-varsel_.
- En forelder som er **sperret**, får ingen meldinger og ser ikke søknaden.
  Blir søkeren plassert i klasse, legges forelderen inn på eleven uten
  tilgang til å logge inn. Sperrer dere forelder 1 til en søker under 18 år,
  kan avtalen ikke signeres før sperren er opphevet.

![Send melding: forelder 2 står uten kryss, med merket Har ikke krysset av for e-varsel](/img/soker_melding_dialog.png)

Se [Foreldre og koblinger](/docs/ea_sokere#foreldre-og-koblinger).

### Rapport egendefinert

Rapporten har fått to nye opplysninger: når søknaden ble **opprettet**, med
klokkeslett, og **foreldrenes adresse**.

## Dette bør skolen se over nå

1. **Vedleggstyper:** hvilke vedlegg skal være obligatoriske, i hvilken fase,
   og for hvilke trinn?
2. **Spørsmål** for det nye skoleåret: har de riktig svartype og fase?
