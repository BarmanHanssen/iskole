---
id: ea_elev
title: Elev
sidebar_label: Elev
---
## Innledning
For å bli definert som elev ved skolen et bestemt skoleår, må eleven være registrert med minimum fødselsnummer og navn, og være plassert i en klasse.

Alternativer for å få inn elever til nytt skoleår kan være

- Inntak via Inntaksportalen til iSkole (anbefales)
- Oppflytting fra forrige skoleår (ved nytt skoleår)
- Inntak via fylket inntaksystem (gjelder videregående elever)
- Via data fra annen skole som benytter iSkole (se nedenfor)
- Ved å hente data fra egen skole ved overgang til iSkole (gjelder nye skoler)

I tillegg kan selvsagt elevdata tastes inn manuelt.

### Registrere ny elev

![image](https://user-images.githubusercontent.com/80097133/121346113-fbc69300-c925-11eb-92ea-4cf69f1da3bb.png)

Etter trykk på _+Ny..._ kan registrering av ny elev starte ut fra følgende skjermbilde:

![image](https://user-images.githubusercontent.com/80097133/121347490-8b207600-c927-11eb-9b0b-93ef1ea91e18.png)

Såfremt eleven har kjent personnummer, anbefales sterkt å taste inn elevens fødselsnummer. Dersom ikke personnummeret ikke er kjent, benytt eksempelvis 999999 som personnummer, og man huker da av for _Midlertidig personnummer_. Dette kan erstattes senere når nummeret blir tilgjenngelig. 

::: note Merk
Dersom midlertidig personnummer benyttes, eventuell også fiktiv fødselsdato, er det to forhold som kan skape problemer/merarbeid:
- Eleven blir lagt inn på nytt, men da registrert med "ekte" personnummer
- Eleven er allerede registrert i iSkole med "ekte" personnummer, eksempelvis fra en annen skole
:::

Problemet nevnt ovenfor skyldes at vi da får en dobbeltregistrering av eleven, og grad av oppryddingsarbeidet vil avhenge hvor mye annet som er registrert på eleven med "midlertidig personnummer" før dobbletregistreringen oppdages.  

Når gyldig fødselsnummer er registrert vil _Fornavn_ og _Etternavn_ kunne fremkomme automatisk. Det betyr i såfall at eleven alt er registrert i databasen til iSkole. Da gjenstår det bare å plassere eleven i en klasse før en trykker på _Lagre_. Da vises følgende skjermbilde:
 
![image](https://user-images.githubusercontent.com/80097133/121494656-3b9a8280-c9d9-11eb-969f-cac699fb46a4.png)

#### Tilknytting til skolen
- Begynt settes default til registreringsdatoen. Helt OK at datoen er før skolestart, men ikke før planperiodens start.
- Sluttet settes default til 31. juli, og endres bare dersom eleven slutter før siste skoledag. Merk at eleven mister tilgangen til iSkole straks etter denne datoen er passert.
- Klasse er allerede lagt inn, men kan endres. Eleven får automatisk tildelt klassens fag.
- Elevstatus settes default til E, men kan endres.
- Rettstype settes default til blank, se nedtrekksliste for alternativer.

#### Utdanning
- Programkode: Klikk på blyant-ikonet for alternativene
