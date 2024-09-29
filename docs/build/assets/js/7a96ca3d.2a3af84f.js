"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3271],
  {
    3863: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => l,
          contentTitle: () => o,
          default: () => u,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => a,
        });
      var r = s(4848),
        n = s(8453);
      const i = { sidebar_position: 1 },
        o = "Overview",
        d = {
          id: "getting-started/overview",
          title: "Overview",
          description: "Docusaurus is a static-site-generator (also called Jamstack).",
          source: "@site/docs/getting-started/overview.md",
          sourceDirName: "getting-started",
          slug: "/getting-started/overview",
          permalink: "/docs/getting-started/overview",
          draft: !1,
          unlisted: !1,
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/docs/getting-started/overview.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: { title: "Getting Started", permalink: "/docs/category/getting-started" },
          next: { title: "Installation", permalink: "/docs/getting-started/installation" },
        },
        l = {},
        a = [
          { value: "Build your site", id: "build-your-site", level: 2 },
          { value: "Deploy your site", id: "deploy-your-site", level: 2 },
        ];
      function c(e) {
        const t = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          header: "header",
          p: "p",
          pre: "pre",
          strong: "strong",
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(t.header, { children: (0, r.jsx)(t.h1, { id: "overview", children: "Overview" }) }),
            "\n",
            (0, r.jsxs)(t.p, {
              children: [
                "Docusaurus is a ",
                (0, r.jsx)(t.strong, { children: "static-site-generator" }),
                " (also called ",
                (0, r.jsx)(t.strong, {
                  children: (0, r.jsx)(t.a, { href: "https://jamstack.org/", children: "Jamstack" }),
                }),
                ").",
              ],
            }),
            "\n",
            (0, r.jsxs)(t.p, {
              children: [
                "It builds your site as simple ",
                (0, r.jsx)(t.strong, { children: "static HTML, JavaScript and CSS files" }),
                ".",
              ],
            }),
            "\n",
            (0, r.jsx)(t.h2, { id: "build-your-site", children: "Build your site" }),
            "\n",
            (0, r.jsxs)(t.p, {
              children: ["Build your site ", (0, r.jsx)(t.strong, { children: "for production" }), ":"],
            }),
            "\n",
            (0, r.jsx)(t.pre, {
              children: (0, r.jsx)(t.code, { className: "language-bash", children: "npm run build\n" }),
            }),
            "\n",
            (0, r.jsxs)(t.p, {
              children: [
                "The static files are generated in the ",
                (0, r.jsx)(t.code, { children: "build" }),
                " folder.",
              ],
            }),
            "\n",
            (0, r.jsx)(t.h2, { id: "deploy-your-site", children: "Deploy your site" }),
            "\n",
            (0, r.jsx)(t.p, { children: "Test your production build locally:" }),
            "\n",
            (0, r.jsx)(t.pre, {
              children: (0, r.jsx)(t.code, { className: "language-bash", children: "npm run serve\n" }),
            }),
            "\n",
            (0, r.jsxs)(t.p, {
              children: [
                "The ",
                (0, r.jsx)(t.code, { children: "build" }),
                " folder is now served at ",
                (0, r.jsx)(t.a, { href: "http://localhost:3000/", children: "http://localhost:3000/" }),
                ".",
              ],
            }),
            "\n",
            (0, r.jsxs)(t.p, {
              children: [
                "You can now deploy the ",
                (0, r.jsx)(t.code, { children: "build" }),
                " folder ",
                (0, r.jsx)(t.strong, { children: "almost anywhere" }),
                " easily, ",
                (0, r.jsx)(t.strong, { children: "for free" }),
                " or very small cost (read the ",
                (0, r.jsx)(t.strong, {
                  children: (0, r.jsx)(t.a, {
                    href: "https://docusaurus.io/docs/deployment",
                    children: "Deployment Guide",
                  }),
                }),
                ").",
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: t } = { ...(0, n.R)(), ...e.components };
        return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
      }
    },
    8453: (e, t, s) => {
      s.d(t, { R: () => o, x: () => d });
      var r = s(6540);
      const n = {},
        i = r.createContext(n);
      function o(e) {
        const t = r.useContext(i);
        return r.useMemo(
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
              ? e.components(n)
              : e.components || n
            : o(e.components)),
          r.createElement(i.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
