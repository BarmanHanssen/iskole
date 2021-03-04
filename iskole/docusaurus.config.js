module.exports = {
  title: 'iSkole - skoleadministrativt system',
  tagline: 'Dokumentasjon består av to deler. Den første delen dokumenterer hvert enkelt menyvalg på iSkole, den andre delen er basert på emner og forteller hvordan man utfører ulike oppgaver.',
  url: 'https://barmanhanssen.github.io/',
  baseUrl: '/iskole/',
  favicon: 'img/favicon.ico',
  organizationName: 'BarmanHanssen', // Usually your GitHub org/user name.
  projectName: 'iskole', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'iSkole',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Dokumentasjon',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentasjon',
          items: [
            {
              label: 'Timeplanlegger',
              to: 'docs/timeplan_klasse',
            },
            {
              label: 'iSkole - Elev',
              to: 'docs/elev',
            }
            ,
            {
              label: 'iSkole - Plagiatkontroll',
              to: 'docs/plagiatkontroll',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/iSkole-124411920983708',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Barman Hanssen AS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/BarmanHanssen/iskole/tree/master/iskole/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
