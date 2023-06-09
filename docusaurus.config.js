// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tilmann / Plassmann - UPC Commentary',
  tagline: '',
  url: 'http://www.tilmannplassmann.de/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'prgrphnrtr', // Usually your GitHub org/user name.
  projectName: 'mUPCK', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/prgrphnrtr/mPublic/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/m-Siebels/mPublic/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // WICHTIG
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
          alt: 'Logo',
          src: 'img/prider.png',
        },
        items: [
          {
            type: "doc",
            docId: 'Legal Documents/index',
            position: 'left',
            label: 'Legal Documents',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          // {
          //   type: 'search',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legal',
            items: [
              {
                label: 'Kontakt',
                to: 'kontakt',
              },
              {
                label: 'Impressum',
                to: 'legal',
              },
            ],
          },
          {
            title: 'Find Us',
            items: [

              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/wtcp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wtcp',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matthias Siebels. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      announcementBar: {
        id: 'support_me',
        content:
          'The UPC will go live on 1 June 2023!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      themes: 
        ['@docusaurus/theme-live-codeblock'],

    }),
};

module.exports = config;
