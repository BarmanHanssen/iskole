"use strict";(self.webpackChunkiskole=self.webpackChunkiskole||[]).push([[5109],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return u}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var k=n.createContext({}),p=function(e){var r=n.useContext(k),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(k.Provider,{value:r},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,k=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=p(t),f=a,u=g["".concat(k,".").concat(f)]||g[f]||m[f]||l;return t?n.createElement(u,i(i({ref:r},s),{},{components:t})):n.createElement(u,i({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var k in r)hasOwnProperty.call(r,k)&&(o[k]=r[k]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},411:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return k},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return g}});var n=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"timeplan_blokknr_gruppefag",title:"Grupper",sidebar_label:"Grupper"},k=void 0,p={unversionedId:"timeplan_blokknr_gruppefag",id:"timeplan_blokknr_gruppefag",title:"Grupper",description:"Innledning",source:"@site/docs/timeplan_blokknr_gruppefag.md",sourceDirName:".",slug:"/timeplan_blokknr_gruppefag",permalink:"/docs/timeplan_blokknr_gruppefag",draft:!1,editUrl:"https://github.com/BarmanHanssen/iskole/tree/master/iskole/docs/timeplan_blokknr_gruppefag.md",tags:[],version:"current",frontMatter:{id:"timeplan_blokknr_gruppefag",title:"Grupper",sidebar_label:"Grupper"},sidebar:"someSidebar",previous:{title:"Blokk",permalink:"/docs/timeplan_definer_blokknr"},next:{title:"Klasser",permalink:"/docs/timeplan_timeplanlegge_klasse"}},s={},g=[{value:"Innledning",id:"innledning",level:2},{value:"Registrering av blokknr p\xe5 gruppefag",id:"registrering-av-blokknr-p\xe5-gruppefag",level:2},{value:"Endre blokknr",id:"endre-blokknr",level:2}],m={toc:g},f="wrapper";function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"innledning"},"Innledning"),(0,l.kt)("admonition",{title:"Merk",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Blokknummeret m\xe5 v\xe6re timeplanlagt fra ",(0,l.kt)("em",{parentName:"p"},"Blokk>Timeplan blokknr")," f\xf8r blokknr kan reigstreres p\xe5 gruppefag. F\xf8r gruppefagene er timeplanlagt, kan man imidlertid reservere tider for gruppefagene p\xe5 klassens timeplan fra ",(0,l.kt)("em",{parentName:"p"},"Blokk>Blokknr klasse"),". P\xe5 den m\xe5ten kan en timeplanlegge klassefagene f\xf8r gruppefagene, men da kun utenom timene som en har reservert for gruppefagene.")),(0,l.kt)("p",null,"Skjermbildet viser hvordan fagene er gruppert i forhold til hverandre. Gruppefag med lik timeplan har like blokknumre. "),(0,l.kt)("p",null,"Hvert blokknummer representerer alts\xe5 en bestemt time p\xe5 timeplanen. Vi velger f\xf8rst hvilken uke vi skal legge inn blokknr for, f\xf8rste skoleuke anbefales. N\xe5r hele timeplanen er ferdig lagt vil det kunne v\xe6re komplisert, og derfor sjeldent aktuelt, \xe5 endre p\xe5 oppsettet som gj\xf8res for gruppefagene. Etter \xe5 ha ferdigstilt registrering i f\xf8rste skoleuke, kan man s\xe5 kopierer resultatet til resten av skole\xe5ret. Justeringer senere kan selvsagt gj\xf8res, da systemet til enhver tid vil kontrollere at ikke kollisjoner oppst\xe5r."),(0,l.kt)("p",null,"Eksempel hvor blokknumrene er lagt inn p\xe5 gruppefag:\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80097133/199228418-89ba38be-ca9c-4f20-80e2-2f32aafd69af.png",alt:"bilde"})),(0,l.kt)("h2",{id:"registrering-av-blokknr-p\xe5-gruppefag"},"Registrering av blokknr p\xe5 gruppefag"),(0,l.kt)("p",null,"N\xe5r man markerer et fag, vil fagets navn, fagl\xe6rer, timer (for denne uken) og rom vises under tabellen med alle gruppefagene. Velges LA1: AG1 1 fra skjermbildet ovenfor, kommer f\xf8lgende frem under tabellen med fag:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80097133/199229735-5201c5d7-3aca-4aad-8a00-f6b6ea7abc31.png",alt:"bilde"})),(0,l.kt)("p",null,"Timetallet (her: ",(0,l.kt)("em",{parentName:"p"},"Timer 3"),") er det mulig \xe5 endre for denne uken. Det er hentet fra ",(0,l.kt)("em",{parentName:"p"},"Grunnlagsdata>Fag")," og kan endres ogs\xe5 derfra. "),(0,l.kt)("p",null,"Blokknr: Dag og tid for et blokknummer m\xe5 v\xe6re registrert fra menyvalget ",(0,l.kt)("em",{parentName:"p"},"Time")," f\xf8r det kan innsettes her. Dersom det gj\xf8res endringer p\xe5 dag og/eller tid p\xe5 et blokknummer fra menyvalget ",(0,l.kt)("em",{parentName:"p"},"Time")," etter at gruppefaget ble timeplangt, vil endringen ikke avspeiles her. Dersom endringen skal gjelde for dette faget, m\xe5 man velge blokknumret p\xe5 nytt fra nedtrekkslisten. Nedtrekkslisten representerer til enhver tid  gjeldende dag/tid for hvert blokknummer."),(0,l.kt)("p",null,"Romnr: Nedtrekkslisten henter rom registrert fra ",(0,l.kt)("em",{parentName:"p"},"Grunnlagsdata>Rom"),". Dersom faget har et foretrukket rom, kan det registreres p\xe5 faget fra ",(0,l.kt)("em",{parentName:"p"},"Grunnlagsdata>Fag"),", og vil i s\xe5 fall fremkomme  automtisk."),(0,l.kt)("p",null,"Dersom man n\xe5 skal registrere blokknr p\xe5 et nytt gruppefag, vil skjermbildet bli slik:\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80097133/191739144-f83d8a36-f805-45f0-acc4-44f6f88d93ee.png",alt:"bilde"})),(0,l.kt)("p",null,"Velg Romnr for f\xf8rste blokknr. Dette rommet tas automatisk med videre som f\xf8rstevalg. "),(0,l.kt)("p",null,"Dersom faget er gitt ID fra ",(0,l.kt)("em",{parentName:"p"},"Time- og fagfordeling>Gruppefag")," (anbefales, kan etterregistreres!), og tabellen med ID og blokknr er lagt inn fra ",(0,l.kt)("em",{parentName:"p"},"Definer blokknr"),", vil alle timene innf\xf8res med sine respektive blokknr, og valgte romnr, med et museklikk. Dersom en m\xe5 gj\xf8re dette manuelt, og dersom blokknr er i rekkef\xf8lge: Legg inn det f\xf8rste blokknr for faget, videre kan f\xf8rstevalget i nedtrekksliste benyttes: \xab+1\xbb"),(0,l.kt)("p",null,"N\xe5r man trykker p\xe5 ",(0,l.kt)("em",{parentName:"p"},"Lagre"),", vil iSkole f\xf8rst sjekke at blokknumrene er timeplanlagt, og deretter at foresl\xe5tte blokknr ikke kommer i konflikt med annen aktivtet for fagets l\xe6rer. Dersom elever er registrert i gruppefag, gj\xf8res ogs\xe5 sjekk mot deres timeplan. Ogs\xe5 romvalget kontrollleres. Dersom ingen kollisjoner p\xe5vises, vil blokknumrene for faget lagres. Da er faget ferdig timeplanlagt, og vil n\xe5 vises p\xe5 fagl\xe6rers, og alle fagets elevers timeplan."),(0,l.kt)("admonition",{title:"Merk",type:"note"},(0,l.kt)("p",{parentName:"admonition"},'Det kan i ettertid v\xe6re aktuelt \xe5 gj\xf8re endringer for en eller flere uker. Eksempel: I l\xf8pet av skole\xe5ret skal et fag ha flere timer en periode, og f\xe6rre timer en annen periode ("ploging"). Dersom f\xe6rre timer kan en fjerne blokknr for timer som skal utg\xe5. For \xe5 legge til ekstra timer m\xe5 man \xf8ke timetallet og legge inn blokknr og rom p\xe5 ekstratimene.')),(0,l.kt)("h2",{id:"endre-blokknr"},"Endre blokknr"),(0,l.kt)("p",null,"Et valgt blokknr kan n\xe5r som helst byttes ut med et annet. Nytt blokknr kontrolleres og vil avdekke kollisjoner for involverte elever og fagl\xe6rer. Kollisjon for l\xe6rer godtas ikke, men timeplanlegger kan tillate kollisjon p\xe5 elevs timeplan.\nIngenting lagres f\xf8r det trykkes ",(0,l.kt)("em",{parentName:"p"},"Lagre"),"!"))}u.isMDXComponent=!0}}]);