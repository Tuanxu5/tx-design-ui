"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8609],
  {
    5026: (t, s, e) => {
      e.r(s),
        e.d(s, {
          assets: () => l,
          contentTitle: () => i,
          default: () => c,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => u,
        });
      var o = e(4848),
        n = e(8453);
      const r = {
          slug: "first-blog-post",
          title: "First Blog Post",
          authors: ["slorber", "yangshun"],
          tags: ["hola", "docusaurus"],
        },
        i = void 0,
        a = {
          permalink: "/https://docs-tx-design.pages.dev/blog/first-blog-post",
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/blog/2019-05-28-first-blog-post.md",
          source: "@site/blog/2019-05-28-first-blog-post.md",
          title: "First Blog Post",
          description: "Lorem ipsum dolor sit amet...",
          date: "2019-05-28T00:00:00.000Z",
          tags: [
            {
              inline: !1,
              label: "Hola",
              permalink: "/https://docs-tx-design.pages.dev/blog/tags/hola",
              description: "Hola tag description",
            },
            {
              inline: !1,
              label: "Docusaurus",
              permalink: "/https://docs-tx-design.pages.dev/blog/tags/docusaurus",
              description: "Docusaurus tag description",
            },
          ],
          readingTime: 0.135,
          hasTruncateMarker: !0,
          authors: [
            {
              name: "S\xe9bastien Lorber",
              title: "Docusaurus maintainer",
              url: "https://sebastienlorber.com",
              page: { permalink: "/https://docs-tx-design.pages.dev/blog/authors/all-sebastien-lorber-articles" },
              socials: {
                x: "https://x.com/sebastienlorber",
                linkedin: "https://www.linkedin.com/in/sebastienlorber/",
                github: "https://github.com/slorber",
                newsletter: "https://thisweekinreact.com",
              },
              imageURL: "https://github.com/slorber.png",
              key: "slorber",
            },
            {
              name: "Yangshun Tay",
              title: "Front End Engineer @ Facebook",
              url: "https://github.com/yangshun",
              page: { permalink: "/https://docs-tx-design.pages.dev/blog/authors/yangshun" },
              socials: { x: "https://x.com/yangshunz", github: "https://github.com/yangshun" },
              imageURL: "https://github.com/yangshun.png",
              key: "yangshun",
            },
          ],
          frontMatter: {
            slug: "first-blog-post",
            title: "First Blog Post",
            authors: ["slorber", "yangshun"],
            tags: ["hola", "docusaurus"],
          },
          unlisted: !1,
          prevItem: { title: "Long Blog Post", permalink: "/https://docs-tx-design.pages.dev/blog/long-blog-post" },
        },
        l = { authorsImageUrls: [void 0, void 0] },
        u = [];
      function g(t) {
        const s = { p: "p", ...(0, n.R)(), ...t.components };
        return (0, o.jsx)(s.p, { children: "Lorem ipsum dolor sit amet..." });
      }
      function c(t = {}) {
        const { wrapper: s } = { ...(0, n.R)(), ...t.components };
        return s ? (0, o.jsx)(s, { ...t, children: (0, o.jsx)(g, { ...t }) }) : g(t);
      }
    },
    8453: (t, s, e) => {
      e.d(s, { R: () => i, x: () => a });
      var o = e(6540);
      const n = {},
        r = o.createContext(n);
      function i(t) {
        const s = o.useContext(r);
        return o.useMemo(
          function () {
            return "function" == typeof t ? t(s) : { ...s, ...t };
          },
          [s, t]
        );
      }
      function a(t) {
        let s;
        return (
          (s = t.disableParentContext
            ? "function" == typeof t.components
              ? t.components(n)
              : t.components || n
            : i(t.components)),
          o.createElement(r.Provider, { value: s }, t.children)
        );
      }
    },
  },
]);
