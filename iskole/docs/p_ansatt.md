---
id: p_ansatt
title: Ansatt
sidebar_label: Ansatt
---
Personer som skal kunne få tilgang til iSkole må være registrert i systemet. Man er enten registrert som elev, eller som ansatt. Her er første skjermbilde for ansatte:

![bilde](https://user-images.githubusercontent.com/80097133/123929313-02798080-d98f-11eb-9601-310e7a029cf1.png)

- _Vis aktive_ lister alle som ikke er registrert med sluttet-dato før dagens dato.
- _Vis alle_ tar også med de som har sluttet.

Dersom ny person skal registreres, trykker man på _+Ny asatt..._

![bilde](https://user-images.githubusercontent.com/80097133/123949930-70c83e00-d9a3-11eb-8e38-004a8565d7f8.png)

- Brukernavn (kort): Hver bruker må ha et internt brukernavn på maksimalt 5 tegn. Prøv de to første bokstaver i for- og etternavn. Brukernavnet må være unikt, og kommer blant annet frem på timeplaner. Kan endres senere, men to ansatte ved skolen kan altså ikke ha likt brukernavn.
- Født og Personnr: Dersom den nye ansatte har personnummeret, anbefales sterkt at dette registreres ved innføringen her. Det er mulig å benytte fiktivt personnummer, eksempelvis 99999. _Vil kunne medføre ekstra arbeid dersom en benytter fiktivt nummer, og det senere viser seg at personen alt var registrert fra annen skole._
- Fornavn og Etternavn: Kan ikke stå blankt!

:::note Merk
Når fødselsdato og personnummer er inntastet, vil systemet sjekke om det finns en registrering med disse data. Dersom personen har vært elev, eller ansatt, ved en annen skole som bruker iSkole, vil for- og etternavn automtisk fylles ut.
:::

Nå er tilstrekkelig data om personen registrert, og vedkommende kan få tilgang som bruker av iSkole, dog med meget begrenset tilgang.

Neste trinn er å legge inn flere data for den nytilsatte:

![bilde](https://user-images.githubusercontent.com/80097133/124095958-72a10880-da5a-11eb-8d6f-58c3de6bf309.png)

### Ansatt
- Kortnavn på timeplan: Kan endres. Kontrolleres mot andre ansatte, da to personer på skolen ikke kan ha likt kortnavn.
- Født og Persnr: Kan endres, men kun gyldige personnummer godtas samt midlertidige personnummer i serien 990xx. 
- Brukernavn: Alterantivt brukernavn for å kunne logge inn på iSkole. Se menyvalget _Brukernavn_ for generering av brukernavn. Ansatte kan også bruke fødselsnummer eller epost som brukernavn.
- Ansattnr: Opprettes automatisk ved registrering, brukes internt, og kan ikke endres.
- Kontaktopplysninger/Pårørende: Vi anbefaler minimum å registrere e-post til den ansatte. Den trengs blant annet dersom den ansatte har glemt/ikke har fått passord for å kunne logge seg på iSkole.

:::note Merk
Det er viktig å få registrert sluttet-dato når den foreligger. Etter denne dato vil den ansatte ikke lengre kunne logge seg på iSkole.
:::


### Diverse
- Begyntte: Registreringsdatoen legges inn automatisk. Kan endres.
- Sluttet: Står blank ved registrering. Bør registreres straks den er klar. Etter sluttet-datoen har den ansatte ikke tilgang til iSkole.
- Utgår fra jubileumslisten: Fra _Personal>Rappoter>Jubileum_ får man oversikt hvem som runder 30-, 40 år osv. Noen ønsker ikke noen oppmerksomhet ved slike anledninger. Huker en av her, kommer vedkommende ikke med på denne listen.
- Avdeling: Større skoler kan ha nytte av å knytte ansatte til en, eller flere, avdelinger. Fra _Grunnlagsdata>Skole_ kan en registrere avdelinger.

### Ansettelse og ansiennitet
- Pedagogisk ansatt: Hukes av dersom vedkommende skal kunne ha undervisningsoppdrag. Fra _Time- og fagfordeling_ kan bare pedagogisk ansatte registreres som faglærer. 
- Prosent: Deltidsansatte har mindre enn 100 % stilling. Fra _Time- og fagfordeling>Stillingsstørrelser_ fremkommer avviket mellom stillingsstørrelsen og registrerte pålagte oppgaver (undervisning og annet).

### Undervisningsfag

Disse legges automatisk til ut fra tidligere undervisning i faget, sortert på fagkode. Merk at man manuelt kan legge til , endre og slette fag fra listen. _Gyldig til_ er hentet fra fagkoderegisteret. Fag som er utgått, markeres med rød farge, og kan slettes.
 
 ![bilde](https://user-images.githubusercontent.com/80097133/146923256-e37bbe42-72a8-4425-b64c-7e01c789c3b1.png)


### Passord

Man har anledning til å gi ansatte nytt passord herfra. Man kan enten la iSkole generere et passord, eller skrive inn et nytt passord selv. Det nye passordet kan da sendes til den ansatte på e-post. 
Ønsker man å slå på tofaktorautentisering ved innlogging, så må man generere en kode som den ansatte kan legge inn i en kodegenerator som f.eks. Google Authenticator på sin telefon. Koden kan enten tastes inn på telefonen, eller avleses av QR-koden som kommer frem på skjermen etter man har trykket på knappen _Generer kode_. Ønsker man siden å slå av kravet om tofaktorautentisering, så kan man slette koden ved å trykke på knappen _Slett kode_.




