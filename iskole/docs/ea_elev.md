---
id: ea_elev
title: Elev
sidebar_label: Elev
---
## Innledning
For å bli definert som elev ved skolen et bestemt skoleår, må eleven være registrert med minimum fødselsnummer og navn, og være plassert i en klasse.

:::info Merk
Alle fag som skal på kompetansebevis/vitnemål til en elev må registreres på skoleåret faget tas. Dersom fag tatt ved annen skole et skoleår eleven ikke var elev her, må eleven først plasseres i klasse. Deretter kan faget knyttes til eleven, det utføres fra Elevadmin.>Karakterdokumentasjon.
:::

Alternativer for å få inn elever til nytt skoleår kan være

- Inntak via Inntaksportalen til iSkole (anbefales)
- Oppflytting fra forrige skoleår (ved nytt skoleår)
- Inntak via fylkets inntakssystem (gjelder videregående elever)
- Via data fra annen skole som benytter iSkole (se nedenfor)
- Ved å hente data fra egen skole ved overgang til iSkole (gjelder nye skoler)

I tillegg kan selvsagt elevdata tastes inn manuelt.

## Finn eleven

Menyvalget **Elev** åpner elevsøket. Søk opp eleven — med fritekst på navn,
klasse, fødselsnummer, e-post, telefon eller foresatt — og velg raden for å
åpne elevsiden. Fjerner du krysset *Kun årets elever*, kan du også søke på
tvers av skoleår med fødselsnummer eller navn.

### Registrere ny elev

Fra elevsøket trykker du **Legg til ny elev…**:

![Legg til ny elev](/img/ea_elev_ny.png 'Legg til ny elev — fødselsdatoen utledes av fødselsnummeret')

- **Fødselsnr land** angir formatet: norsk fødselsnr/D-nummer, svensk
  fødselsnr — eller *Midlertidig fødselsnr* dersom nummeret ikke er kjent.
- Når hele fødselsnummeret er tastet, **utledes fødselsdatoen automatisk**.
  Er personen allerede registrert i iSkole (for eksempel fra en annen
  skole), hentes også navnet inn automatisk.
- Velg **klasse** og trykk *Lagre* — eleven opprettes, får automatisk
  klassens fag, og elevsiden åpnes.

:::info Merk
Brukes midlertidig fødselsnummer, er det to forhold som kan skape
merarbeid senere: eleven kan bli lagt inn på nytt med «ekte» nummer, eller
eleven finnes allerede i iSkole med «ekte» nummer. Begge deler gir
dobbeltregistrering som må ryddes opp i. Registrer derfor ekte
fødselsnummer så snart det er kjent — det gjøres fra blyanten ved
*Fødselsnr* på elevsiden.
:::

## Elevsiden

![Elevsiden](/img/ea_elev_persondata.png 'Elevsiden: persondata, skolegang og utdanning, og fanene under Annet')

Øverst vises elevens portrettbilde, navn, klasse og program, med
persondataene i fire kolonner:

- **Personlig** — navn, fødselsdato, fødselsnummer, elevnr, brukernavn,
  målform og morsmål.
- **Kontakt** — e-postadresser, telefon og e-varsel.
- **Forelder 1** og **Forelder 2** — navn, adresse, telefon, e-post,
  e-varsel og tilgang til iSkole.
- **Merknad** — fritekst. Merknaden er bare synlig for skolen som legger
  den inn; bytter eleven skole, følger den ikke med.

### Rediger personalia

**Rediger**-knappen gjør alle feltene redigerbare i samme bilde:

![Rediger personalia](/img/ea_elev_rediger.png 'Rediger-modus: alle felter i ett bilde, og nytt profilbilde kan droppes rett på')

- **Nytt profilbilde** droppes (eller velges) i feltet ved siden av
  avataren, og lastes opp når du trykker *Lagre*. Skal fotografens bilder
  lastes opp samlet for hele skolen, gjøres det fra *Elevadmin > Foto*.
- **Fødselsdato** og **fødselsnummer** endres via blyantene — de er
  sjeldne operasjoner med egne bekreftelsesdialoger.
- **Forelders fødselsnummer** kobles via blyanten i forelder-kolonnen. For
  norske nummer utledes fødselsdatoen automatisk, og finnes forelderen
  allerede i personregisteret, hentes navn og kontaktinfo derfra.

### Foreldre

Fram til eleven er myndig har foreldre innsyn i data om sine barn. Dersom
forelderens fødselsnummer registreres, kan det også benyttes som
brukernavn ved innlogging til iSkole. Data herfra brukes i skolens
kommunikasjon med foresatte.

- **E-varsel**: varsler til eleven, for eksempel ved stort fravær, sendes
  også til foresatte på e-post.
- **Tilgang iSkole**: foresatte har tilgang til elevens data så lenge
  eleven går på skolen. Tilgangen stoppes ved myndighetsalder, dersom ikke
  en annen variant eksplisitt er valgt.

## Skolegang og utdanning

- **Startdato** settes som standard til registreringsdatoen. Det er greit
  at datoen er før skolestart, men ikke før planperiodens start.
- **Sluttdato** settes som standard til 31. juli, og endres bare dersom
  eleven slutter før siste skoledag. Merk at eleven mister tilgangen til
  iSkole straks datoen er passert.
- **Klasse** kan endres — eleven får automatisk klassens fag.
- **Elevstatus** settes som standard til E, men kan endres.
- **Rettstype** settes som standard til blank, se nedtrekkslisten for
  alternativer.
- **Program** og **bevistype** er fastsatt fra *Grunnlagsdata > Klasse*,
  men kan endres på individnivå her.
- **Fullførtkode** skal ikke endres før ved skoleslutt.
- **Fremmedspråk (GS)** angis for elever som ikke har norsk som morsmål.
  Her ligger også avkrysningene for *fritatt sidemål* og *vedtak om
  særskilt språkopplæring*.

## Annet

Nederst på elevsiden ligger fanene for øvrige registreringer:

- **Allergier** — matallergier fra allergiregisteret, pluss fritekstfeltet
  *Andre allergier*.
- **Hybel** og **Internat** — botilbud knyttet til eleven.
- **Bank og betaling** — kontonummer og betalingsinformasjon.
- **Passinformasjon** — for skoler som registrerer dette, for eksempel
  ved studieturer.
- **Søsken** — dersom foresatte har flere elever ved skolen, registreres
  søskenkoblingen her. For samlet oversikt, se
  *Elevadmin > Rapporter > Navnelister > Søsken*.

## Slett elev

Normalt sletter man ikke en elev, men setter i stedet sluttdato. Ved
feilregistrering, eller om eleven aldri startet, kan **Slett…**-knappen
benyttes. iSkole kontrollerer før sletting:

1. Har eleven fått karakterer dette skoleåret? **Nei**: eleven slettes fra
   dette skoleåret. **Ja**: slettingen avbrytes, og sluttdato må benyttes.
2. Har eleven karakterer fra andre skoleår?
3. Har eleven andre roller i iSkole? (Elev ved annen skole, forelder,
   ansatt.)
