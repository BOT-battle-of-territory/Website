// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BOT Website",
  tagline: "The Official BOT Website",
  favicon: "img/logo.ico",

  // Set the production url of your site here
  url: "https://BOT-Game.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BOT-battle-of-territory", // Usually your GitHub org/user name.
  projectName: "Website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/bot.jpg",
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/bot.jpg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "How To Play",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            to: "https://github.com/BOT-battle-of-territory",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "How to play",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                to: "https://github.com/BOT-battle-of-territory",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Credits",
                to: "/blog/credits",
              },
              {
                label: "Download",
                to: "https://play.google.com/store/apps/details?id=com.dts.freefiremax",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BOT. Built by Rohith M.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
