// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const github = "https://github.com/turtlepaw/docs.trtle.xyz";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Horizon open-source docs',
  tagline: 'Documentation for Horizon\'s open-source projects.',
  url: 'https://docs.trtle.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'turtlepaw', // Usually your GitHub org/user name.
  projectName: 'docs.trtle.xyz', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: `${github}/edit/master/docs/`
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
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
        title: 'Horizon Documenation',
        logo: {
          alt: 'Horizon Logo',
          src: 'img/icon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'packages/intro',
            position: 'left',
            label: 'Packages',
          },
          {
            type: 'doc',
            docId: 'bot-docs/intro',
            position: 'left',
            label: 'Bot Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: github,
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/BMBUcJvV4Q',
            label: 'Discord',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Packages',
                to: '/pacakges/intro',
              },
              {
                label: "Bot Docs",
                to: '/bot-docs/intro',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/BMBUcJvV4Q',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: github,
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 Turtlepaw's Workshop. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
