"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9013],
  {
    4343: (t, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => d,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => u,
        });
      var n = o(4848),
        s = o(8453);
      const r = { sidebar_position: 6 },
        i = "Troubleshooting",
        c = {
          id: "troubleshooting",
          title: "Troubleshooting",
          description: "This is Troubleshooting page.",
          source: "@site/docs/troubleshooting.md",
          sourceDirName: ".",
          slug: "/troubleshooting",
          permalink: "/https://docs-tx-design.pages.dev/docs/troubleshooting",
          draft: !1,
          unlisted: !1,
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/docs/troubleshooting.md",
          tags: [],
          version: "current",
          sidebarPosition: 6,
          frontMatter: { sidebar_position: 6 },
          sidebar: "tutorialSidebar",
          previous: { title: "Migration Guide", permalink: "/https://docs-tx-design.pages.dev/docs/migration-guide" },
        },
        d = {},
        u = [];
      function a(t) {
        const e = { h1: "h1", header: "header", p: "p", strong: "strong", ...(0, s.R)(), ...t.components };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(e.header, {
              children: (0, n.jsx)(e.h1, { id: "troubleshooting", children: "Troubleshooting" }),
            }),
            "\n",
            (0, n.jsxs)(e.p, {
              children: ["This is ", (0, n.jsx)(e.strong, { children: "Troubleshooting" }), " page."],
            }),
          ],
        });
      }
      function l(t = {}) {
        const { wrapper: e } = { ...(0, s.R)(), ...t.components };
        return e ? (0, n.jsx)(e, { ...t, children: (0, n.jsx)(a, { ...t }) }) : a(t);
      }
    },
    8453: (t, e, o) => {
      o.d(e, { R: () => i, x: () => c });
      var n = o(6540);
      const s = {},
        r = n.createContext(s);
      function i(t) {
        const e = n.useContext(r);
        return n.useMemo(
          function () {
            return "function" == typeof t ? t(e) : { ...e, ...t };
          },
          [e, t]
        );
      }
      function c(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? "function" == typeof t.components
              ? t.components(s)
              : t.components || s
            : i(t.components)),
          n.createElement(r.Provider, { value: e }, t.children)
        );
      }
    },
  },
]);
