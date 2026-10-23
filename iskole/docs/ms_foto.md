---
id: ms_foto
title: Foto
sidebar_label: Foto
---

Menyvalget _Foto_ finnes både under _Elevadmin_ (bilder av elever) og under _Personal_ (bilder av ansatte), og virker likt begge steder. Det er tilgjengelig for rektor/administrator og brukergruppen _Bildeansvarlig_, og dessuten for _Kontor - elevadministrasjon_ under _Elevadmin_ og _Kontor - personaladministrasjon_ under _Personal_.

Inntak av bilder fra fotograf gjøres i to trinn, i fanene _Eksport_ og _Import_.

## Eksport {#eksport}
_Eksport_ av en datafil til fotografen slik at denne kan gi bildene riktig navn (ansattnummer eller elevnummer). 

- **Ansatte** (_Personal > Foto_): Klikk _Last ned ansattliste_. Du får tekstfila _Ansattliste for fotograf.txt_ med ansattnummer, fødselsdato, etternavn og fornavn for hver ansatt.
- **Elever** (_Elevadmin > Foto_): Velg klasser (alle er valgt på forhånd), og huk eventuelt av for _Kun elever uten bilde_. Velg så hvilke kolonner fila skal ha. _Standard_ gir klasse, elevnummer, navn og om eleven har bilde fra før, som er det fotografen trenger. Ber fotografen om mer, for eksempel telefon og e-post til foresatte, huker du av for det. Valget huskes til neste gang. Klikk _Last ned elevliste_ for å få fila _Elevliste for fotograf.csv_.

![Eksport til fotograf](/img/ms_foto_eksport.png 'Elevlister til fotograf')

## Import {#import}
Fotografen må gi Peder Aas sitt bilde navnet 20022134 osv. Filnavnet (uten .jpg eller .png) skal altså være ansattnummeret eller elevnummeret, slik det står i fila fra eksporten. Dersom man har mange bilder som under ett skal legges inn, er dette en grei fremgangsmåte. Når bildefilen er klar, kan alle bildene importeres samlet. 

Gå til fanen _Import_, og velg eller slipp fila i feltet _Velg fil_. Ett enkelt bilde (JPG eller PNG) lastes opp med _Last opp bilde_. Flere bilder pakkes i én zip-fil og lastes opp med _Last opp fil_. Bruker du WinZip, må bildene pakkes til .zip, ikke .zipx.

Når opplastingen er ferdig, vises en logg over filene. Bilder merket grønt er lagret. Bilder merket rødt ble ikke lagret, som oftest fordi filnavnet ikke stemmer med et ansatt- eller elevnummer. Rett navnene, pakk disse bildene i en ny zip-fil og last opp på nytt. De grønne trenger du ikke ta med.

![Import av bilder](/img/ms_foto_import.png 'Opplasting av portrettbilder')

## Enkeltbilder {#enkeltbilder}
Dersom noen få bilder skal legges inn, gjøres det enklere fra menyvalget _Ansatt_ under _Personal_, eller _Elev_ under _Elevadmin_. Der er det ikke noe krav om et spesifikt navn på bildefilen, og et bilde kan dras og slippes direkte på den ansatte eller eleven etter at du har klikket _Rediger_. Se [Elev](ea_elev.md) og [Ansatt](p_ansatt.md).

Elevene kan også laste opp bilde av seg selv under _Personalia_ i elevenes iSkole. Kontaktlæreren godkjenner eller avviser bildet under _Mine sider > Elever_, i fanen _Elevbilder til godkjenning_.
