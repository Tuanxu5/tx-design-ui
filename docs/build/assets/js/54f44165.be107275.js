"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7924],
  {
    7200: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => c,
          contentTitle: () => o,
          default: () => p,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => l,
        });
      var n = a(4848),
        r = a(8453);
      const s = { sidebar_position: 2 },
        o = "Installation",
        i = {
          id: "getting-started/installation",
          title: "Installation",
          description: "Add Markdown or React files to src/pages to create a standalone page:",
          source: "@site/docs/getting-started/installation.md",
          sourceDirName: "getting-started",
          slug: "/getting-started/installation",
          permalink: "/docs/getting-started/installation",
          draft: !1,
          unlisted: !1,
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/docs/getting-started/installation.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: { title: "Overview", permalink: "/docs/getting-started/overview" },
          next: { title: "Component", permalink: "/docs/category/component" },
        },
        c = {},
        l = [
          { value: "Create your first React Page", id: "create-your-first-react-page", level: 2 },
          { value: "Create your first Markdown Page", id: "create-your-first-markdown-page", level: 2 },
        ];
      function d(e) {
        const t = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          header: "header",
          li: "li",
          p: "p",
          pre: "pre",
          strong: "strong",
          ul: "ul",
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.header, { children: (0, n.jsx)(t.h1, { id: "installation", children: "Installation" }) }),
            "\n",
            (0, n.jsxs)(t.p, {
              children: [
                "Add ",
                (0, n.jsx)(t.strong, { children: "Markdown or React" }),
                " files to ",
                (0, n.jsx)(t.code, { children: "src/pages" }),
                " to create a ",
                (0, n.jsx)(t.strong, { children: "standalone page" }),
                ":",
              ],
            }),
            "\n",
            (0, n.jsxs)(t.ul, {
              children: [
                "\n",
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, { children: "src/pages/index.js" }),
                    " \u2192 ",
                    (0, n.jsx)(t.code, { children: "localhost:3000/" }),
                  ],
                }),
                "\n",
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, { children: "src/pages/foo.md" }),
                    " \u2192 ",
                    (0, n.jsx)(t.code, { children: "localhost:3000/foo" }),
                  ],
                }),
                "\n",
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, { children: "src/pages/foo/bar.js" }),
                    " \u2192 ",
                    (0, n.jsx)(t.code, { children: "localhost:3000/foo/bar" }),
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "create-your-first-react-page", children: "Create your first React Page" }),
            "\n",
            (0, n.jsxs)(t.p, {
              children: ["Create a file at ", (0, n.jsx)(t.code, { children: "src/pages/my-react-page.js" }), ":"],
            }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-jsx",
                metastring: 'title="src/pages/my-react-page.js"',
                children:
                  'import React from "react";\nimport Layout from "@theme/Layout";\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n',
              }),
            }),
            "\n",
            (0, n.jsxs)(t.p, {
              children: [
                "A new page is now available at ",
                (0, n.jsx)(t.a, {
                  href: "http://localhost:3000/my-react-page",
                  children: "http://localhost:3000/my-react-page",
                }),
                ".",
              ],
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "create-your-first-markdown-page", children: "Create your first Markdown Page" }),
            "\n",
            (0, n.jsxs)(t.p, {
              children: ["Create a file at ", (0, n.jsx)(t.code, { children: "src/pages/my-markdown-page.md" }), ":"],
            }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-mdx",
                metastring: 'title="src/pages/my-markdown-page.md"',
                children: "# My Markdown page\n\nThis is a Markdown page\n",
              }),
            }),
            "\n",
            (0, n.jsxs)(t.p, {
              children: [
                "A new page is now available at ",
                (0, n.jsx)(t.a, {
                  href: "http://localhost:3000/my-markdown-page",
                  children: "http://localhost:3000/my-markdown-page",
                }),
                ".",
              ],
            }),
          ],
        });
      }
      function p(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components };
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(d, { ...e }) }) : d(e);
      }
    },
    8453: (e, t, a) => {
      a.d(t, { R: () => o, x: () => i });
      var n = a(6540);
      const r = {},
        s = n.createContext(r);
      function o(e) {
        const t = n.useContext(s);
        return n.useMemo(
          function () {
            return "function" == typeof e ? e(t) : { ...t, ...e };
          },
          [t, e]
        );
      }
      function i(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : o(e.components)),
          n.createElement(s.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
