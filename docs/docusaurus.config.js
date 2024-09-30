import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "Tx UI",
  tagline: "tx design ui",
  favicon: "img/favicon.svg",
  url: "https://docs-tx-design.pages.dev",
  baseUrl: "/",
  organizationName: "Tuanxu5",
  projectName: "tx-design-ui",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Design UI",
      logo: {
        alt: "An enterprise-class UI design language and React components implementation",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/docs/getting-started/overview",
          position: "right",
          label: "Tutorial",
        },
        {
          to: "https://github.com/Tuanxu5/tx-design-ui",
          label: "GitHub",
          position: "right",
        },
        {
          to: "https://storybook-tx-design.pages.dev",
          label: "Storybook",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: "https://github.com/facebook/docusaurus/issues/3526",
              label: "Help Us Translate",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
