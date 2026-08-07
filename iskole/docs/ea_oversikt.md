---
id: ea_oversikt
title: Oversikt
sidebar_label: Oversikt
---

Elevadmin er skolens arbeidsflate for elevadministrasjon: søkerbehandling,
elevopplysninger, fag og karakterer, dokumentasjon (vitnemål og
kompetansebevis), VIGO-rapportering og en rekke støttefunksjoner.

Denne dokumentasjonen beskriver **den nye versjonen** av Elevadmin. Den er en
fullstendig fornyelse av skjermbildene, med mange små og store forbedringer —
men oppgavene og begrepene er de samme som før, så det meste vil kjennes
igjen.

## Om oppdateringen

Den nye versjonen kjører **parallelt med den eksisterende**. Selv om noen
ting gjøres på en litt annen måte, er den underliggende arkitekturen den
samme: dataene lagres i samme database på samme sted. Du kan derfor trygt
veksle mellom ny og gammel versjon om hverandre — ingenting må «synkroniseres»,
og ingenting går tapt.

Menyvalgene i den nye versjonen gjøres tilgjengelige etter hvert som de er
ferdig utviklet. Et menyvalg du ikke finner i ny versjon, gjør du inntil
videre i den gamle.

## Felles grep i den nye versjonen

Noen ting går igjen i alle skjermbildene:

- **Skoleårsvelgeren** øverst gjelder hele Elevadmin: alle menyvalg viser
  data for skoleåret du har valgt. Arbeider du i et annet skoleår enn
  skolens gjeldende, får du et tydelig varsel — det er normalt, for
  eksempel når du behandler søkere til neste skoleår.
- **Elevsøket** er inngangen til alt arbeid med enkeltelever: søk opp
  eleven (fritekst eller avansert søk), og velg. Sider som
  karakterdokumentasjon og VIGO-fagloggen husker søket ditt, slik at du kan
  bytte elev direkte fra en nedtrekksliste uten å gå tilbake.
- **Mørk modus** kan slås av og på med bryteren øverst til høyre.
- **Byttes skole eller skoleår**, lastes siden du står på med de nye
  dataene automatisk.

## Menyvalg som ikke er videreført

Noen menyvalg fra den gamle versjonen er bevisst ikke tatt med videre —
enten fordi oppgaven løses bedre et annet sted, eller fordi den har fått ny
form:

| Gammelt menyvalg | Hvor gjøres dette nå |
|---|---|
| **Mappe** | [Elevmappen i Mine sider](/docs/ms_elevmappe). |
| **Fravær/orden/atferd** | Føres av kontakt- og faglærerne i Mine sider — se [Fravær](/docs/ms_fravaer) og [Orden/atferd](/docs/ms_orden_atferd). |
| **NVB-overføring** | Egen **fane på Vitnemål**-siden, sammen med kontroll og generering. |
| **Permisjon** | Heter nå **[Søknader](/docs/ea_soknader)** og rommer mer: både permisjon og tilrettelagt eksamen. |
| **Vitnemål fagskole** og **Reform 94** | Foreløpig i gammel versjon. |

![Startsiden i ny Elevadmin](/img/ea_startside.png 'Startsiden med menyvalg-kortene')
