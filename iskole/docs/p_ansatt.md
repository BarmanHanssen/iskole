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
- Funksjonstillegg: Funksjonstilleggene er rene kronetillegg begrunnet i en funksjon den ansatte har. Funksjonstilleggene må ikke forveksles med andre prosenttillegg som man legger inn i time- og fagfordelingen.

### Undervisningsfag

Disse legges automatisk til ut fra tidligere undervisning i faget, sortert på fagkode. Merk at man manuelt kan legge til , endre og slette fag fra listen. _Gyldig til_ er hentet fra fagkoderegisteret. Fag som er utgått, markeres med rød farge, og kan slettes.
 
 ![bilde](https://user-images.githubusercontent.com/80097133/146923256-e37bbe42-72a8-4425-b64c-7e01c789c3b1.png)


### Passord

En ansatt med regisrert epostadresse selv kan få tilsendt passord. Det gjøres fra startsiden, via lenken _Glemt passord?_

Ønsker man å slå på tofaktorautentisering ved innlogging, så må man generere en kode som den ansatte kan legge inn i en kodegenerator som f.eks. Google Authenticator på sin telefon. Koden kan enten tastes inn på telefonen, eller avleses av QR-koden som kommer frem på skjermen etter man har trykket på knappen _Generer kode_. Ønsker man siden å slå av kravet om tofaktorautentisering, så kan man slette koden ved å trykke på knappen _Slett kode_.

![bilde](https://user-images.githubusercontent.com/80097133/201087969-47897163-5243-4344-8f9d-218bf1b9b77d.png)

# ---------------- Ny versjon, kommer snart... ----------------


![image](https://github.com/user-attachments/assets/0f84cf29-2db9-458a-878d-9fb48eb5289a)

### Ansatt

Velges Ansatt, får vi frem oversikt over alle ansatte som er registrert ved skolen. Søkerfeltet begrenser effektiv hva som vises.

![image](https://github.com/user-attachments/assets/222d614f-2ff1-451d-ad3b-c4b0f19b48c9)

Dersom ny ansatt skal registreres starter vi her:
![image](https://github.com/user-attachments/assets/96fca24a-8326-4373-a26e-eac0cfaac6a9)

Her må alt fylles ut for å få lagret dataene.
- _Brukernavn (kort)_: Bynytte blant annet på timeplanen. Maks tre tegn, ofte en (eller to) bokstaver fra fornavn og to (eller en) bokstav fra etternavnet. Kortnavnet blir kontrollert mot allerede kortnavn i bruk ved skolen slik at kortnavnet er unikt. Kan endres dersom nytt kortnavn er unikt./
- _Fødselsdata_ må fylles inn, årstallet skal ha fire siffer.
- _Personnr_: Her kontrolleres at det er et riktig norsk personnummer. Dersom vedkommende mangler personnummer, kan en midlertidig registrere et femsifret nummer som starter med tallet 9. Det anbefales få få registrert riktig personnummer så raskt som mulig. Etterregistrering kan i noen tilfeller medføre komplikasjoner.

:::note Merk
Når fødselsdato og personnummer er inntastet, vil systemet sjekke om det finns en registrering med dette fødselsnummer. Dersom personen har vært elev, eller ansatt, ved en skole som bruker iSkole, vil for- og etternavn automtisk fylles ut.
:::

- Fornavn/Etternavn må selvsagt også registreres, og kan endres.

Da er første del av dataene lagt inn, men flere data må på plass før den nyansatte kan gis oppdrag, og for selv å  kunne bruke av iSkole.

Klikk på ![image](https://github.com/user-attachments/assets/7dae50c6-0c7b-4133-a0f1-5251518ad852)

Finn frem til den nytilsatte, og klikk på _Rediger_. Da fås dette bilde:

![image](https://github.com/user-attachments/assets/394cfa0f-081d-4c98-8f72-d1fbcebfc272)

Vi anbefaler minimum å fylle inn disse feltene i det grønne delen:
- E-post arbeid
- Mobil

Under _Ansettelse og ansiennitet_ anbefaler minimum å fylle inn disse feltene:
- Startdato (vedkommende får ikke tilgang til iSkole før denne datoen.)
- Sluttdato (dersom denne er kjent da vedkommende mister tilgang til iSkole etter denne datoen.)
- Pedagogisk ansatt (hukes av dersom vedkommende skal kunne tildeles undervisningsoppdrag.)

Under _Undervisningsfag_:

Her kan man _+Legge til..._ fagkoder som vedkommende har kompetanse i som lærer. (Begrenser ikke oppdrag læreren kan pålegges. Tabellen fylles atomatisk opp med fag som læreren får tildelt fra _Time- og fagfordeling_, og kan eventuelt justeres senere.)

### Fravær

![image](https://github.com/user-attachments/assets/ff5407fb-88b2-480c-95e5-d4b03af34552)

Her kan den ansatte selv registrere fravær. I tillegg til dato og valgte grunn for fraværet er det merknadsfelt for utfyllende begrunnelse.

### Grupper
![image](https://github.com/user-attachments/assets/24a5eacd-245c-4da5-8624-a39390ccf394)

Her kan man opprette grupper med navgitte ansatte som leder og gruppemedlemmer. Fra menyvalget _Rapporter_ kan man ta ut lister inneholder alle gruppene med medlemmer. 

### Foto
Velg _Eksport_ for å laste ned Ansattlister for fotograf:

![image](https://github.com/user-attachments/assets/080f062f-de66-49e9-b47e-009dd4081329)

Fotografen må gi Peder Aas sitt bilde navnet 20022134 osv. Dersom man har mange bilder som under ett skal legges inn, er dette en grei fremgangsmåte. Når bildefilen er klar, kan alle bildene importeres samlet.

Dersom noen få bilder skal legges inn, gjøres det enkelere fra menyvalget _Ansatt_, se veiledinger der. Det er der ikke noe krav om spesift navn på bildefilen.










