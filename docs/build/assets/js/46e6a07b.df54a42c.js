"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6144],
  {
    2467: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => c,
        });
      var s = t(4848),
        o = t(8453);
      const r = { sidebar_position: 2 },
        i = "Translate your site",
        a = {
          id: "component/translate-your-site",
          title: "Translate your site",
          description: "Let's translate docs/getting-started/overview.md to French.",
          source: "@site/docs/component/translate-your-site.md",
          sourceDirName: "component",
          slug: "/component/translate-your-site",
          permalink: "/https://docs-tx-design.pages.dev/docs/component/translate-your-site",
          draft: !1,
          unlisted: !1,
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/docs/component/translate-your-site.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Manage Docs Versions",
            permalink: "/https://docs-tx-design.pages.dev/docs/component/manage-docs-versions",
          },
          next: { title: "Migration Guide", permalink: "/https://docs-tx-design.pages.dev/docs/migration-guide" },
        },
        d = {},
        c = [
          { value: "Configure i18n", id: "configure-i18n", level: 2 },
          { value: "Translate a doc", id: "translate-a-doc", level: 2 },
          { value: "Start your localized site", id: "start-your-localized-site", level: 2 },
          { value: "Add a Locale Dropdown", id: "add-a-locale-dropdown", level: 2 },
          { value: "Build your localized site", id: "build-your-localized-site", level: 2 },
        ];
      function l(e) {
        const n = {
          a: "a",
          admonition: "admonition",
          code: "code",
          h1: "h1",
          h2: "h2",
          header: "header",
          img: "img",
          p: "p",
          pre: "pre",
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, {
              children: (0, s.jsx)(n.h1, { id: "translate-your-site", children: "Translate your site" }),
            }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: [
                "Let's translate ",
                (0, s.jsx)(n.code, { children: "docs/getting-started/overview.md" }),
                " to French.",
              ],
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "configure-i18n", children: "Configure i18n" }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: [
                "Modify ",
                (0, s.jsx)(n.code, { children: "docusaurus.config.js" }),
                " to add support for the ",
                (0, s.jsx)(n.code, { children: "fr" }),
                " locale:",
              ],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-js",
                metastring: 'title="docusaurus.config.js"',
                children:
                  'export default {\n  i18n: {\n    defaultLocale: "en",\n    locales: ["en", "fr"],\n  },\n};\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "translate-a-doc", children: "Translate a doc" }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: [
                "Copy the ",
                (0, s.jsx)(n.code, { children: "docs/getting-started/overview.md" }),
                " file to the ",
                (0, s.jsx)(n.code, { children: "i18n/fr" }),
                " folder:",
              ],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-bash",
                children:
                  "mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/getting-started/overview.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n",
              }),
            }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: [
                "Translate ",
                (0, s.jsx)(n.code, { children: "i18n/fr/docusaurus-plugin-content-docs/current/intro.md" }),
                " in French.",
              ],
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "start-your-localized-site", children: "Start your localized site" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Start your site on the French locale:" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, { className: "language-bash", children: "npm run start -- --locale fr\n" }),
            }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: [
                "Your localized site is accessible at ",
                (0, s.jsx)(n.a, { href: "http://localhost:3000/fr/", children: "http://localhost:3000/fr/" }),
                " and the ",
                (0, s.jsx)(n.code, { children: "Getting Started" }),
                " page is translated.",
              ],
            }),
            "\n",
            (0, s.jsx)(n.admonition, {
              type: "caution",
              children: (0, s.jsx)(n.p, { children: "In development, you can only use one locale at a time." }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "add-a-locale-dropdown", children: "Add a Locale Dropdown" }),
            "\n",
            (0, s.jsx)(n.p, { children: "To navigate seamlessly across languages, add a locale dropdown." }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: ["Modify the ", (0, s.jsx)(n.code, { children: "docusaurus.config.js" }), " file:"],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-js",
                metastring: 'title="docusaurus.config.js"',
                children:
                  'export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: "localeDropdown",\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.p, { children: "The locale dropdown now appears in your navbar:" }),
            "\n",
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.img, { alt: "Locale Dropdown", src: t(8192).A + "", width: "370", height: "302" }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "build-your-localized-site", children: "Build your localized site" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Build your site for a specific locale:" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, { className: "language-bash", children: "npm run build -- --locale fr\n" }),
            }),
            "\n",
            (0, s.jsx)(n.p, { children: "Or build your site to include all the locales at once:" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, { className: "language-bash", children: "npm run build\n" }),
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, o.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
      }
    },
    8192: (e, n, t) => {
      t.d(n, { A: () => s });
      const s = t.p + "assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png";
    },
    8453: (e, n, t) => {
      t.d(n, { R: () => i, x: () => a });
      var s = t(6540);
      const o = {},
        r = s.createContext(o);
      function i(e) {
        const n = s.useContext(r);
        return s.useMemo(
          function () {
            return "function" == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          s.createElement(r.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);