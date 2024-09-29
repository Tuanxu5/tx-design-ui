"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3694],
  {
    1615: (t, e, s) => {
      s.r(e),
        s.d(e, {
          assets: () => g,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => l,
          metadata: () => a,
          toc: () => r,
        });
      var o = s(4848),
        n = s(8453);
      const l = { slug: "long-blog-post", title: "Long Blog Post", authors: "yangshun", tags: ["hello", "docusaurus"] },
        i = void 0,
        a = {
          permalink: "/https://docs-tx-design.pages.dev/blog/long-blog-post",
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/blog/2019-05-29-long-blog-post.md",
          source: "@site/blog/2019-05-29-long-blog-post.md",
          title: "Long Blog Post",
          description: "This is the summary of a very long blog post,",
          date: "2019-05-29T00:00:00.000Z",
          tags: [
            {
              inline: !1,
              label: "Hello",
              permalink: "/https://docs-tx-design.pages.dev/blog/tags/hello",
              description: "Hello tag description",
            },
            {
              inline: !1,
              label: "Docusaurus",
              permalink: "/https://docs-tx-design.pages.dev/blog/tags/docusaurus",
              description: "Docusaurus tag description",
            },
          ],
          readingTime: 2.06,
          hasTruncateMarker: !0,
          authors: [
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
            slug: "long-blog-post",
            title: "Long Blog Post",
            authors: "yangshun",
            tags: ["hello", "docusaurus"],
          },
          unlisted: !1,
          prevItem: { title: "MDX Blog Post", permalink: "/https://docs-tx-design.pages.dev/blog/mdx-blog-post" },
          nextItem: { title: "First Blog Post", permalink: "/https://docs-tx-design.pages.dev/blog/first-blog-post" },
        },
        g = { authorsImageUrls: [void 0] },
        r = [];
      function c(t) {
        const e = { code: "code", p: "p", ...(0, n.R)(), ...t.components };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(e.p, { children: "This is the summary of a very long blog post," }),
            "\n",
            (0, o.jsxs)(e.p, {
              children: [
                "Use a ",
                (0, o.jsx)(e.code, { children: "\x3c!--" }),
                " ",
                (0, o.jsx)(e.code, { children: "truncate" }),
                " ",
                (0, o.jsx)(e.code, { children: "--\x3e" }),
                " comment to limit blog post size in the list view.",
              ],
            }),
          ],
        });
      }
      function u(t = {}) {
        const { wrapper: e } = { ...(0, n.R)(), ...t.components };
        return e ? (0, o.jsx)(e, { ...t, children: (0, o.jsx)(c, { ...t }) }) : c(t);
      }
    },
    8453: (t, e, s) => {
      s.d(e, { R: () => i, x: () => a });
      var o = s(6540);
      const n = {},
        l = o.createContext(n);
      function i(t) {
        const e = o.useContext(l);
        return o.useMemo(
          function () {
            return "function" == typeof t ? t(e) : { ...e, ...t };
          },
          [e, t]
        );
      }
      function a(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? "function" == typeof t.components
              ? t.components(n)
              : t.components || n
            : i(t.components)),
          o.createElement(l.Provider, { value: e }, t.children)
        );
      }
    },
  },
]);
