---
id: ea_elev
title: Elev
sidebar_label: Elev
---
## Innledning
For å bli definert som elev ved skolen et bestemt skoleår, må eleven være registrert med minimum fødselsnummer og navn, og være plassert i en klasse.

:::info Merk
Alle fag som skal på kompetansebevis/vitnemål til en elev må registreres på skoleåret faget tas. Desom fag tatt ved annen skole et skoleår eleven ikke var elev her, må eleven først plasseres i klasse. Deretter kan faget knyttes til eleven, det utføres fra Elevadmin.>Karakterdokumentasjon.
:::

Alternativer for å få inn elever til nytt skoleår kan være

- Inntak via Inntaksportalen til iSkole (anbefales)
- Oppflytting fra forrige skoleår (ved nytt skoleår)
- Inntak via fylkets inntakssystem (gjelder videregående elever)
- Via data fra annen skole som benytter iSkole (se nedenfor)
- Ved å hente data fra egen skole ved overgang til iSkole (gjelder nye skoler)

I tillegg kan selvsagt elevdata tastes inn manuelt.

### Registrere ny elev

![image](https://user-images.githubusercontent.com/80097133/121346113-fbc69300-c925-11eb-92ea-4cf69f1da3bb.png)

Etter trykk på _+Ny..._ kan registrering av ny elev starte ut fra følgende skjermbilde:

![image](https://user-images.githubusercontent.com/80097133/121347490-8b207600-c927-11eb-9b0b-93ef1ea91e18.png)

Såfremt eleven har kjent personnummer, anbefales sterkt å taste inn elevens fødselsnummer. Dersom ikke personnummeret ikke er kjent, benytt eksempelvis 99001, 99002 osv. som personnummer, og man huker da av for _Midlertidig personnummer_. Dette kan erstattes senere når nummeret blir tilgjengelig. 

:::info Merk
Dersom midlertidig personnummer benyttes, eventuell også fiktiv fødselsdato, er det to forhold som kan skape problemer/merarbeid:
- Eleven blir lagt inn på nytt, men da registrert med "ekte" personnummer
- Eleven er allerede registrert i iSkole med "ekte" personnummer, eksempelvis fra en annen skole
:::

Problemet nevnt ovenfor skyldes at vi da får en dobbeltregistrering av eleven, og grad av oppryddingsarbeidet vil avhenge hvor mye annet som er registrert på eleven med "midlertidig personnummer" før dobbletregistreringen oppdages.  

Når gyldig fødselsnummer er registrert vil _Fornavn_ og _Etternavn_ kunne fremkomme automatisk. Det betyr i såfall at eleven alt er registrert i databasen til iSkole. Da gjenstår det bare å plassere eleven i en klasse før en trykker på _Lagre_. Da vises følgende skjermbilde:
 
![image](https://user-images.githubusercontent.com/80097133/121496236-8ec10500-c9da-11eb-8b3e-fd1d925c17d9.png)

#### Tilknytting til skolen
- Begynt settes default til registreringsdatoen. Helt OK at datoen er før skolestart, men ikke før planperiodens start.
- Sluttet settes default til 31. juli, og endres bare dersom eleven slutter før siste skoledag. Merk at eleven mister tilgangen til iSkole straks etter denne datoen er passert.
- Klasse er allerede lagt inn, men kan endres. Eleven får automatisk tildelt klassens fag.
- Elevstatus settes default til E, men kan endres.
- Rettstype settes default til blank, se nedtrekksliste for alternativer.

#### Utdanning
- Programkode og Bevistype er fastsatt fra Grunnlagsdata>Klasse, men kan her endres på individnivå.
- Fullførtkode skal ikke endres før ved skoleslutt.
- Fremmedspråk gs angis for elver som ikke har norsk som morsmål.

#### Merknad
Merknad er bare synlig herfra for den skolen som legger inn merknaden. Bytter eleven skole, er den ikke synlig på den nye skolen.

#### Foreldre 1 og Foreldre 2
Fram til eleven er myndig, har foreldre innsyn i data til sine barn. Dersom foreldres fødselsnummer registreres, kan det også benyttes som brukernavn ved innlogging til iSkole.
Data herfra benyttes også for skolens kommunikasjon med elevens foresatte. Vanligvis bare interessant til eleven har nådd myndighetsalder. 
- E-varsel: Varsel til eleven, feks ved stort fravær, sendes også til foresatte som e-post.
- Tilgang iSkole: Foresatte får tilgang til alle data knyttet til eleven så lenge eleven er elev ved skolen. Tilgangen stoppes ved myndighetsalderen til eleven, dersom ikke annen variant eksplisitt er valgt.

#### Søsken
Dersom flere elever til foresatte, kan disse registreres her. For oversikt over registrerte søsken, se _Elevadmin.>Rapporter>Navnelister>Søsken_.

#### Elevadresse
Dersom elevens adresse ikke er identisk med Forelder 1, kan riktig adresse innføres her.

#### Portrettbilde
Kan legge inn bilde fra _Last opp_. Dersom fotograf tar bilde for hele skolen, se _Mine sider>Foto_ for alternativ innlasting av bilde.

### Slett elev
Normalt sletter man ikke en elev, men setter i stedet sluttdato. Ved feilregistrering, at eleven ikke startet eller av andre grunner ønsker å slette eleven er dette mulig med knappen _Slett_. iSkole vil gjennomføre følgende kontroll før sletting.
1. Har eleven fått karakterer dette skoleåret? **Nei**: Eleven slettes fra dette skoleåret. **Ja**: Sletting avbrytes og sluttdato må benyttes.
2. Har eleven karakterer andre skoleår? 
3. Har eleven andre roller på iSkole? (Elev annen skole, forelder, ansatt)

Hvis nei i punkt 2 og 3, så vil personen slettes helt fra iSkole.
