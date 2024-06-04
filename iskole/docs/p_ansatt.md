---
id: p_ansatt
title: Ansatt
sidebar_label: Ansatt
---
Her er første skjermbilde for ansatte:

![bilde](https://user-images.githubusercontent.com/80097133/123929313-02798080-d98f-11eb-9601-310e7a029cf1.png)

- _Vis aktive_ lister alle som ikke er registrert med sluttet-dato før dagens dato.
- _Vis alle_ tar også med de som har sluttet.

Dersom ny person skal registreres, trykker man på _+Ny asatt..._

![bilde](https://user-images.githubusercontent.com/80097133/123949930-70c83e00-d9a3-11eb-8e38-004a8565d7f8.png)

- Brukernavn (kort): Hver bruker må ha et internt brukernavn på maksimalt 5 tegn. Vanligvis benyttes tre tegn som er forbundet med for- og etternavn. Brukernavn (kort) må være unikt, og kommer blant annet frem på timeplaner. Kan endres senere, men to ansatte ved skolen kan altså ikke ha likt brukernavn.
- Født og Personnr: Dersom den nye ansatte har personnummeret, anbefales sterkt at dette registreres ved innføringen her. Det er mulig å benytte fiktivt personnummer, eksempelvis 99999. Det vil kunne medføre ekstra arbeid dersom en benytter fiktivt nummer, og det senere viser seg at personen alt var registrert fra annen skole.
- Fornavn og Etternavn: Kan ikke stå blankt!

:::note Merk
Når fødselsdato og personnummer er inntastet, vil systemet sjekke om det finns en registrering med dette fødselsnummer. Dersom personen har vært elev, eller ansatt, ved en skole som bruker iSkole, vil for- og etternavn automtisk fylles ut.
:::

Neste trinn er å legge inn flere data for den nytilsatte:

![bilde](https://user-images.githubusercontent.com/80097133/124095958-72a10880-da5a-11eb-8d6f-58c3de6bf309.png)

### Ansatt
- Kortnavn på timeplan: Kan endres. Kontrolleres mot andre ansatte, da to personer på skolen ikke kan ha likt kortnavn.
- Født og Persnr: Kan endres, men kun gyldige personnummer godtas samt midlertidige personnummer i serien 990xx. 
- Brukernavn: Ansatte kan alltid benytte fødselsnummer eller epost som brukernavn. Alterantivt kan en her legge til et ekstra brukernavn for å kunne logge inn på iSkole. Det sjekkes at det alternative brukernavnet er unikt i databasen til iSkole.
- Ansattnr: Opprettes automatisk ved registrering, brukes internt, og kan ikke endres.
- Kontaktopplysninger/Pårørende: Vi anbefaler minimum å registrere e-post til den ansatte. Den trengs blant annet dersom den ansatte har glemt passord for å logge seg på iSkole.

:::note Merk
Det er viktig å få registrert sluttet-dato når den foreligger. Etter denne dato vil den ansatte ikke lengre kunne logge seg på iSkole.
:::


### Diverse
- Begyntte: Registreringsdatoen legges inn automatisk. Kan endres.
- Sluttet: Står blank ved registrering. Bør registreres straks den er klar. Etter sluttet-datoen har den ansatte ikke tilgang til iSkole.
- Utgår fra jubileumslisten: Fra _Personal>Rappoter>Jubileum_ får man oversikt hvem som runder 30-, 40 år osv. Noen ønsker ikke oppmerksomhet ved slike anledninger. Huker en av her, kommer vedkommende ikke med på denne listen.
- Avdeling: Større skoler kan ha nytte av å knytte ansatte til en, eller flere, avdelinger. Fra _Grunnlagsdata>Skole_ kan en registrere avdelinger.

### Ansettelse og ansiennitet
- Pedagogisk ansatt: Hukes av dersom vedkommende skal kunne ha undervisningsoppdrag. Fra _Time- og fagfordeling_ kan bare pedagogisk ansatte registreres som faglærer. 
- Prosent: Deltidsansatte har mindre enn 100 % stilling. Fra _Time- og fagfordeling>Stillingsstørrelser_ fremkommer avviket mellom stillingsstørrelsen og registrerte pålagte oppgaver (undervisning og annet).

### Undervisningsfag

Disse legges automatisk til ut fra tidligere undervisning i faget, sortert på fagkode. Merk at man manuelt kan legge til , endre og slette fag fra listen. _Gyldig til_ er hentet fra fagkoderegisteret. Fag som er utgått, markeres med rød farge, og kan slettes.
 
 ![bilde](https://user-images.githubusercontent.com/80097133/146923256-e37bbe42-72a8-4425-b64c-7e01c789c3b1.png)


### Passord

En ansatt med regisrert epostadresse selv kan få tilsendt passord. Det gjøres fra startsiden, via lenken _Glemt passord?_

Ønsker man å slå på tofaktorautentisering ved innlogging, så må man generere en kode som den ansatte kan legge inn i en kodegenerator som f.eks. Google Authenticator på sin telefon. Koden kan enten tastes inn på telefonen, eller avleses av QR-koden som kommer frem på skjermen etter man har trykket på knappen _Generer kode_. Ønsker man siden å slå av kravet om tofaktorautentisering, så kan man slette koden ved å trykke på knappen _Slett kode_.

![bilde](https://user-images.githubusercontent.com/80097133/201087969-47897163-5243-4344-8f9d-218bf1b9b77d.png)






