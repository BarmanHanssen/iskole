export default {
  markdown: {
    format: 'detect',
  },
  title: 'iSkole - skoleadministrativt system',
  tagline: 'Dokumentasjon består av to deler. Den første delen dokumenterer hvert enkelt menyvalg på iSkole, den andre delen er basert på emner og forteller hvordan man utfører ulike oppgaver.',
  url: 'https://dokumentasjon.iskole.net/',
  baseUrl: '/',
  trailingSlash: true,
  favicon: 'img/iskole.ico',
  organizationName: 'BarmanHanssen',
  projectName: 'iskole',
  themeConfig: {
    navbar: {
      title: 'iSkole',
      logo: {
        alt: 'Logo',
        src: 'img/iskole-512.png',
      },
      items: [
        {
          to: 'docs/oversikt',
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
              label: 'Timeplanlegging',
              to: 'docs/timeplanlegging',
            },
            {
              label: 'iSkole - Elev',
              to: 'docs/elev',
            },
            {
              label: 'iSkole - Plagiatkontroll',
              to: 'docs/plagiatkontroll',
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
    docsearch: {
      appId: 'O8KNJW4BLE',
      apiKey: '758bd3ca41360f2f878c7feb9955ad0a',
      indexName: 'dokumentasjon_iskole_net_o8knjw4ble_pages',
      contextualSearch: false,
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '521E4BFAFDA37CAA',
      },
    },
  ],
  plugins: ['@docsearch/docusaurus-adapter'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/BarmanHanssen/iskole/tree/master/iskole/',
        },
        blog: {
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};
