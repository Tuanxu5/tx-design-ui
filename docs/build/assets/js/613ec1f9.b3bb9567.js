"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1303],
  {
    3856: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => a,
          contentTitle: () => r,
          default: () => g,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => c,
        });
      var n = i(4848),
        o = i(8453);
      const s = { sidebar_position: 5 },
        r = "Migration Guide",
        d = {
          id: "migration-guide",
          title: "Migration Guide",
          description: "This is Migration Guide page.",
          source: "@site/docs/migration-guide.md",
          sourceDirName: ".",
          slug: "/migration-guide",
          permalink: "/https://docs-tx-design.pages.dev/docs/migration-guide",
          draft: !1,
          unlisted: !1,
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/docs/migration-guide.md",
          tags: [],
          version: "current",
          sidebarPosition: 5,
          frontMatter: { sidebar_position: 5 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Translate your site",
            permalink: "/https://docs-tx-design.pages.dev/docs/component/translate-your-site",
          },
          next: { title: "Troubleshooting", permalink: "/https://docs-tx-design.pages.dev/docs/troubleshooting" },
        },
        a = {},
        c = [];
      function u(e) {
        const t = { h1: "h1", header: "header", p: "p", strong: "strong", ...(0, o.R)(), ...e.components };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.header, {
              children: (0, n.jsx)(t.h1, { id: "migration-guide", children: "Migration Guide" }),
            }),
            "\n",
            (0, n.jsxs)(t.p, {
              children: ["This is ", (0, n.jsx)(t.strong, { children: "Migration Guide" }), " page."],
            }),
          ],
        });
      }
      function g(e = {}) {
        const { wrapper: t } = { ...(0, o.R)(), ...e.components };
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(u, { ...e }) }) : u(e);
      }
    },
    8453: (e, t, i) => {
      i.d(t, { R: () => r, x: () => d });
      var n = i(6540);
      const o = {},
        s = n.createContext(o);
      function r(e) {
        const t = n.useContext(s);
        return n.useMemo(
          function () {
            return "function" == typeof e ? e(t) : { ...t, ...e };
          },
          [t, e]
        );
      }
      function d(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(o)
              : e.components || o
            : r(e.components)),
          n.createElement(s.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
