---
slug: timeplan
title: Omlegging av timeplanverktøyet
author: Thomas Hannestad
author_title: Programmerer
author_url: https://github.com/thomashannestad
author_image_url: https://avatars.githubusercontent.com/u/10975904?s=400&u=3da50813df75e4f3afb48e241aba5457756c51a7&v=4
tags: [timeplan]
---


# Innledning
Modulene for time- og fagfordeling og timeplan kommer i løpet av kort tid ut med samme type utseende som _Mine sider_ og _Grunnlagsdata_. Skjermbildene blir mer responsive og tilpasset forskjellige skjermstørrelser. Vi har
her sammenfattet noen av de viktigste endringene i forbindelse med denne fornyelsen. Etter KL06 ble innført, gikk man bort fra skoletimer og over til klokketimer. 

# Time- og fagfordelingen
## Klassefag og gruppefag
Den største endringen er at man kan legge flere lærere på en faggruppe slik at de kan dele faget. Eksempelvis kan man i store fag som YFF-fag på ni timer, la en lærer ha fire timer og en annen fem timer. Som en følge av
denne endringen, så er tolærerordningen slik vi kjenner den fra før nå sterkt forenklet. Der man tidligere opprettet tolærere, legger man nå til flere lærere til samme undervisningstime direkte. Der man før hadde en hovedlærer som hadde hele faget og hvor man kunne legge til tolærere der hvor faget hadde fått tildelt timer, så kan man nå legge flere lærere på faget og timeplanlegge dem der man ønsker det. Det forenkler også time- og fagfordelingen hvor man tidligere måtte benytte komponenter for å dele et fag mellom flere lærere der ikke en av dem hadde hele faget. Man setter opp årstimer og årsramme på fagene som før i grunnlagsdata, men nytt er det at man kan justere prosenten når man legger lærere på faget. På denne måten kan man tilpasse ressursen f.eks. etter elevantallet i faggruppen, eller av andre grunner. Man kan således beholde ressursen for hele året om man underviser kun en del av skoleåret. F.eks. i et fag som har 20% undervisningsressurs om man har det hele året, kan man nå justere ned til halve om det planlegges at læreren kun skal ha faget frem til jul. Time- og fagfordeleren får en god oversikt over alle fag som undervises ved skolen. Alle fagene listes i en tabell som inneholder data om faget og dets ressurs, samt hvilke lærere som underviser og hvilken ressurs de utløser. Hvis et fag har flere lærere, så vil man se brukernavnene til dem og summen deres ressurser utgjør. Slik får man raskt oversikt over hvilke fag som man har styrket undervisning i. Ved å brette ut faget, vil man få se ressursene til hver enkelt lærer i faget. Om man har flere lærere som skal undervise i et fag kan man sette en av dem som fagansvarlig i faget. Den fagansvarlige har f.eks. tilgang til å føre fravær i faget uavhengig om denne er satt opp med undervisning. De øvrige lærerne i faget får føre fravær for de ukene de underviser.

## Andre ressurser
Her har vi nå fokus på oversikten og lister alle som har fått tilleggsressurser i en tabell. Faste ressurser som er utløst f.eks. ved at en lærer er kontaktlærer vises, men kan ikke redigeres. Andre ressurser kan man legge til og redigere. 

## Stillingssørrelser
Nytt er her at vi har lagt til kolonnen Beskjeftigelse % (gitt) i tillegg til den som er beregnet. Dette følger av at man kan justere ressursen som en lærer tildeles i et fag i forhold til hva som er gitt av årstimer og årsramme. Som enda en følge så får vi nå også vist avviket i to kolonner, én for gitt i tillegg til den som tar utgangspunkt i hva som er beregnet. Visningen av undervisningsressursene har fått flere kolonner og av plasshensyn er begge detaljvisningene lagt inn under oversiktstabellen.

# Timeplan
Alt som før gjaldt tolærere er nå inkludert i selve timeplanleggingen av gruppe- eller klassefaget. Skjermbildet for å timeplanlegge tolærere har derfor blitt overflødig og menyvalget er tatt ut.

## Timer
Fastsettelsen av timene er lagt inn i en timeplanvisning. Man kan klikke i timeplanen på en time og få et forslag til tider. Disse kan man justere og man kan som før angi at timen skal gjelde for hele uken.

## Reserveringer
Funksjonaliteten er den samme som før, men med det nye utseendet.

## Blokk
Timeplanleggingen av blokknumrene har fått et løft og ligner hvordan man timeplanlegger en klasse. Listen av blokknr er til venstre i skjermbildet og timeplanen for blokknumrene vises i en timeplanvisning med tidene og blokknumrene i timene. Seriene med blokknr som lagt inn under en blokkid vil ha samme bakgrunnsfarge slik at man raskt ser de forskjellige blokkene. Gruppering av timer til valg er også forbedret visuelt og funksjonelt ved
at man ikke har noen begrensning for hvor mange blokknr man vi legge inn i en blokk. Fanen Blokkfag er ny og gir såvel en oversikt over hvilke blokkid'er som er tildelt grupper, også muligheten til å legge inn eller endre blokkid for grupper.

## Grupper
Tidligere benyttet vi blokkskjemaet som begrensning for når skolen ønsker å timeplanlegge gruppefagene. I den nye versjonen benyttes blokkskjemaet i hovedsak til å fylle blokkid’er. Etter man har timeplanlagt et gruppefag,
så er faget koblet fra blokknummeret. Denne endringen er gjort for at man skal kunne endre start- og sluttid for de timeplanlagte gruppefagtimene om man ønsker det. Slik får man samme frihet for gruppefagene som man har
hatt for klassefagene. Siden vi har fristilt de timeplanlagte gruppefagene fra blokkskjemaet så var det ikke lenger hensiktsmessig å ha en oversiktsvisning av gruppefagene med blokknr som tidsangivelse av fagene. Vi har derfor byttet ut kolonnene med blokknr med en tidslinje. Slik vil fremdeles gruppefag som er timeplanlagt i parallell ligge under hverandre, men nå er det dager og klokkeslett som angir kolonnene. Vi har også lagt inn mere informasjon i faglisten hvor man nå i tillegg til faget også ser hvor mange timer faget skal ha denne uken, hvor mange timer som faget er timeplanlagt, hvem som er lærer i faget, hvor mange timer læreren skal ha og hvor mange timer læreren har fått timeplanlagt. I fag med mere enn en lærer, så kommer disse under hverandre slik at man om ønskelig enkelt kan gjøre seg ferdig med timeplanleggingen for alle lærerne i faget før man går videre til neste fag. Ved å klikke på en timeplanlagt time i timeplanen vil man som tidligere få frem detaljer om timen og muligheten for å gjøre endringer. Det er også lagt inn funksjonalitet i timeplanen til faget slik at man kan trekke i et fag i enten øvre eller nedre del med musepekeren for å endre start- eller sluttidspunkt for timen. Det er også mulig å flytte en time ved å trykke på den og dra den til en ny ledig time på timeplanen.

## Klasser
Også i skjermbildet for timeplanlegging av klassefag vil nå fag med flere lærere komme i samme liste av klassens fag. Vi har også her forenklet timeplanleggingen av tolærere ved at alt gjøres i samme timeplan. Det er lagt
inn samme redigeringsmuligheter for timeplanlagte fag her som for gruppefagene.

## Vikarer
Man kan velge flere timer før man velger lærer og på denne måten finne lærere som har ledig til å ta flere vikartimer for en gitt lærer. Skjermbildet er som de andre skjermbildene responsivt og således forbedret i forhold til visning på mobiltelefoner.

## Kopiering
Tabellen over skoleuker har fått et ekstre felt som viser hvor mange skoledager det er i hver uke. Ellers kan man kopiere som før.