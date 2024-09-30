"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1303],
  {
    3856: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => a,
          contentTitle: () => s,
          default: () => g,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => c,
        });
      var i = n(4848),
        o = n(8453);
      const r = { sidebar_position: 5 },
        s = "Migration Guide",
        d = {
          id: "migration-guide",
          title: "Migration Guide",
          description: "This is Migration Guide page.",
          source: "@site/docs/migration-guide.md",
          sourceDirName: ".",
          slug: "/migration-guide",
          permalink: "/docs/migration-guide",
          draft: !1,
          unlisted: !1,
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/docs/migration-guide.md",
          tags: [],
          version: "current",
          sidebarPosition: 5,
          frontMatter: { sidebar_position: 5 },
          sidebar: "tutorialSidebar",
          previous: { title: "Button", permalink: "/docs/component/button" },
          next: { title: "Troubleshooting", permalink: "/docs/troubleshooting" },
        },
        a = {},
        c = [];
      function u(t) {
        const e = { h1: "h1", header: "header", p: "p", strong: "strong", ...(0, o.R)(), ...t.components };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(e.header, {
              children: (0, i.jsx)(e.h1, { id: "migration-guide", children: "Migration Guide" }),
            }),
            "\n",
            (0, i.jsxs)(e.p, {
              children: ["This is ", (0, i.jsx)(e.strong, { children: "Migration Guide" }), " page."],
            }),
          ],
        });
      }
      function g(t = {}) {
        const { wrapper: e } = { ...(0, o.R)(), ...t.components };
        return e ? (0, i.jsx)(e, { ...t, children: (0, i.jsx)(u, { ...t }) }) : u(t);
      }
    },
    8453: (t, e, n) => {
      n.d(e, { R: () => s, x: () => d });
      var i = n(6540);
      const o = {},
        r = i.createContext(o);
      function s(t) {
        const e = i.useContext(r);
        return i.useMemo(
          function () {
            return "function" == typeof t ? t(e) : { ...e, ...t };
          },
          [e, t]
        );
      }
      function d(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? "function" == typeof t.components
              ? t.components(o)
              : t.components || o
            : s(t.components)),
          i.createElement(r.Provider, { value: e }, t.children)
        );
      }
    },
  },
]);
