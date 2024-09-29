"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1220],
  {
    5088: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => d,
          metadata: () => t,
          toc: () => a,
        });
      var o = s(4848),
        r = s(8453);
      const d = { sidebar_position: 1 },
        i = "Manage Docs Versions",
        t = {
          id: "component/manage-docs-versions",
          title: "Manage Docs Versions",
          description: "Docusaurus can manage multiple versions of your docs.",
          source: "@site/docs/component/manage-docs-versions.md",
          sourceDirName: "component",
          slug: "/component/manage-docs-versions",
          permalink: "/https://docs-tx-design.pages.dev/docs/component/manage-docs-versions",
          draft: !1,
          unlisted: !1,
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/docs/component/manage-docs-versions.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: { title: "Button", permalink: "/https://docs-tx-design.pages.dev/docs/component/button" },
          next: {
            title: "Translate your site",
            permalink: "/https://docs-tx-design.pages.dev/docs/component/translate-your-site",
          },
        },
        c = {},
        a = [
          { value: "Create a docs version", id: "create-a-docs-version", level: 2 },
          { value: "Add a Version Dropdown", id: "add-a-version-dropdown", level: 2 },
          { value: "Update an existing version", id: "update-an-existing-version", level: 2 },
        ];
      function l(e) {
        const n = {
          code: "code",
          h1: "h1",
          h2: "h2",
          header: "header",
          img: "img",
          li: "li",
          p: "p",
          pre: "pre",
          strong: "strong",
          ul: "ul",
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(n.header, {
              children: (0, o.jsx)(n.h1, { id: "manage-docs-versions", children: "Manage Docs Versions" }),
            }),
            "\n",
            (0, o.jsx)(n.p, { children: "Docusaurus can manage multiple versions of your docs." }),
            "\n",
            (0, o.jsx)(n.h2, { id: "create-a-docs-version", children: "Create a docs version" }),
            "\n",
            (0, o.jsx)(n.p, { children: "Release a version 1.0 of your project:" }),
            "\n",
            (0, o.jsx)(n.pre, {
              children: (0, o.jsx)(n.code, {
                className: "language-bash",
                children: "npm run docusaurus docs:version 1.0\n",
              }),
            }),
            "\n",
            (0, o.jsxs)(n.p, {
              children: [
                "The ",
                (0, o.jsx)(n.code, { children: "docs" }),
                " folder is copied into ",
                (0, o.jsx)(n.code, { children: "versioned_docs/version-1.0" }),
                " and ",
                (0, o.jsx)(n.code, { children: "versions.json" }),
                " is created.",
              ],
            }),
            "\n",
            (0, o.jsx)(n.p, { children: "Your docs now have 2 versions:" }),
            "\n",
            (0, o.jsxs)(n.ul, {
              children: [
                "\n",
                (0, o.jsxs)(n.li, {
                  children: [
                    (0, o.jsx)(n.code, { children: "1.0" }),
                    " at ",
                    (0, o.jsx)(n.code, { children: "http://localhost:3000/docs/" }),
                    " for the version 1.0 docs",
                  ],
                }),
                "\n",
                (0, o.jsxs)(n.li, {
                  children: [
                    (0, o.jsx)(n.code, { children: "current" }),
                    " at ",
                    (0, o.jsx)(n.code, { children: "http://localhost:3000/docs/next/" }),
                    " for the ",
                    (0, o.jsx)(n.strong, { children: "upcoming, unreleased docs" }),
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, o.jsx)(n.h2, { id: "add-a-version-dropdown", children: "Add a Version Dropdown" }),
            "\n",
            (0, o.jsx)(n.p, { children: "To navigate seamlessly across versions, add a version dropdown." }),
            "\n",
            (0, o.jsxs)(n.p, {
              children: ["Modify the ", (0, o.jsx)(n.code, { children: "docusaurus.config.js" }), " file:"],
            }),
            "\n",
            (0, o.jsx)(n.pre, {
              children: (0, o.jsx)(n.code, {
                className: "language-js",
                metastring: 'title="docusaurus.config.js"',
                children:
                  'export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: "docsVersionDropdown",\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n',
              }),
            }),
            "\n",
            (0, o.jsx)(n.p, { children: "The docs version dropdown appears in your navbar:" }),
            "\n",
            (0, o.jsx)(n.p, {
              children: (0, o.jsx)(n.img, {
                alt: "Docs Version Dropdown",
                src: s(2529).A + "",
                width: "370",
                height: "302",
              }),
            }),
            "\n",
            (0, o.jsx)(n.h2, { id: "update-an-existing-version", children: "Update an existing version" }),
            "\n",
            (0, o.jsx)(n.p, { children: "It is possible to edit versioned docs in their respective folder:" }),
            "\n",
            (0, o.jsxs)(n.ul, {
              children: [
                "\n",
                (0, o.jsxs)(n.li, {
                  children: [
                    (0, o.jsx)(n.code, { children: "versioned_docs/version-1.0/hello.md" }),
                    " updates ",
                    (0, o.jsx)(n.code, { children: "http://localhost:3000/docs/hello" }),
                  ],
                }),
                "\n",
                (0, o.jsxs)(n.li, {
                  children: [
                    (0, o.jsx)(n.code, { children: "docs/hello.md" }),
                    " updates ",
                    (0, o.jsx)(n.code, { children: "http://localhost:3000/docs/next/hello" }),
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components };
        return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
      }
    },
    2529: (e, n, s) => {
      s.d(n, { A: () => o });
      const o = s.p + "assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png";
    },
    8453: (e, n, s) => {
      s.d(n, { R: () => i, x: () => t });
      var o = s(6540);
      const r = {},
        d = o.createContext(r);
      function i(e) {
        const n = o.useContext(d);
        return o.useMemo(
          function () {
            return "function" == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function t(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          o.createElement(d.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
