// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Z by HP AI & Data Science Solutions',
  tagline: 'Application Documentation & Downloads',
  url: 'https://zdocs.datascience.hp.com',

  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zbyhp_black.ico',
  organizationName: 'HP Inc.', // Usually your GitHub org/user name.
  projectName: 'ez-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Z by HP Logo',
          src: 'img/zhp-black.png',
          srcDark: 'img/zhp-white.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://www.hp.com/us-en/workstations/industries/data-science.html',
            label: 'Z by HP',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} HP Development Company, L.P.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  themes: [
  ]
};

module.exports = config;
