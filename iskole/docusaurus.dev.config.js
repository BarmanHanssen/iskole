// Bygg for gjennomlesing på https://dev.iskole.net/dokumentasjon/ — brukes av
// ../dev_update_dokumentasjon.sh. Samme oppsett som docusaurus.config.js, men
// med dev-adresse, bare norsk, noindex (holdes utenfor søkemotorer) og et
// banner som forklarer endringsmarkeringen. GitHub Pages-bygget (deploy.yml)
// bruker docusaurus.config.js og påvirkes ikke av denne fila.
import base from './docusaurus.config.js';

export default {
  ...base,
  url: 'https://dev.iskole.net',
  baseUrl: '/dokumentasjon/',
  noIndex: true,
  i18n: { ...base.i18n, locales: ['no'] },
  themeConfig: {
    ...base.themeConfig,
    announcementBar: {
      id: 'gjennomgang',
      content:
        '<b>Utkast til gjennomlesing – ikke publisert.</b> ' +
        '<span style="background:#1a8870;color:#fff;padding:0 .4em;border-radius:3px;font-weight:700">NY</span> og ' +
        '<span style="background:#b35c00;color:#fff;padding:0 .4em;border-radius:3px;font-weight:700">ENDRET</span> merker seksjoner, ' +
        '<mark style="background:#fff3b0">gul bakgrunn</mark> er ny eller endret tekst, ' +
        '<del style="color:#9b1c1c">gjennomstreket</del> foreslås fjernet, og nye skjermbilder har grønn stiplet ramme.',
      backgroundColor: '#fffbe6',
      textColor: '#1c1e21',
      isCloseable: false,
    },
  },
};
