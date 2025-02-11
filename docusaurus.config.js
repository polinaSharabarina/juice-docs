// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Juice',
  tagline: 'Application Documentation',
  url: 'https://juice-labs.github.io',

  baseUrl: '/juice-docs/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://app.juicelabs.co/Juice@64px.png',
  organizationName: 'Juice Labs', // Usually your GitHub org/user name.
  projectName: 'juice-docs', // Usually your repo name.

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
          alt: 'Juice Logo',
          src: 'img/juice-logo.png',
          srcDark: 'img/juice-logo.png'
        },
        items: [
          {
            href: 'https://juice-labs.github.io/juice-docs/docs/juice/intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://juicelabs.co',
            label: 'Juice',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Juice Labs`,
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
