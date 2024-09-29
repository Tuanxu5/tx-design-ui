"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9325],
  {
    1180: (t, e, s) => {
      s.r(e),
        s.d(e, {
          assets: () => c,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => l,
        });
      var o = s(4848),
        n = s(8453);
      const r = { slug: "mdx-blog-post", title: "MDX Blog Post", authors: ["slorber"], tags: ["docusaurus"] },
        a = void 0,
        i = {
          permalink: "/https://docs-tx-design.pages.dev/blog/mdx-blog-post",
          editUrl: "https://github.com/Tuanxu5/tx-design-ui/tree/master/docs/blog/2021-08-01-mdx-blog-post.mdx",
          source: "@site/blog/2021-08-01-mdx-blog-post.mdx",
          title: "MDX Blog Post",
          description: "Blog posts support Docusaurus Markdown features, such as MDX.",
          date: "2021-08-01T00:00:00.000Z",
          tags: [
            {
              inline: !1,
              label: "Docusaurus",
              permalink: "/https://docs-tx-design.pages.dev/blog/tags/docusaurus",
              description: "Docusaurus tag description",
            },
          ],
          readingTime: 0.235,
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
          ],
          frontMatter: { slug: "mdx-blog-post", title: "MDX Blog Post", authors: ["slorber"], tags: ["docusaurus"] },
          unlisted: !1,
          prevItem: { title: "Welcome", permalink: "/https://docs-tx-design.pages.dev/blog/welcome" },
          nextItem: { title: "Long Blog Post", permalink: "/https://docs-tx-design.pages.dev/blog/long-blog-post" },
        },
        c = { authorsImageUrls: [void 0] },
        l = [];
      function u(t) {
        const e = {
          a: "a",
          admonition: "admonition",
          code: "code",
          p: "p",
          pre: "pre",
          ...(0, n.R)(),
          ...t.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(e.p, {
              children: [
                "Blog posts support ",
                (0, o.jsx)(e.a, {
                  href: "https://docusaurus.io/docs/markdown-features",
                  children: "Docusaurus Markdown features",
                }),
                ", such as ",
                (0, o.jsx)(e.a, { href: "https://mdxjs.com/", children: "MDX" }),
                ".",
              ],
            }),
            "\n",
            (0, o.jsx)(e.admonition, {
              type: "tip",
              children: (0, o.jsx)(e.p, { children: "Use the power of React to create interactive blog posts." }),
            }),
            "\n",
            "\n",
            (0, o.jsx)(e.p, { children: "For example, use JSX to create an interactive button:" }),
            "\n",
            (0, o.jsx)(e.pre, {
              children: (0, o.jsx)(e.code, {
                className: "language-js",
                children: '<button onClick={() => alert("button clicked!")}>Click me!</button>\n',
              }),
            }),
            "\n",
            (0, o.jsx)("button", { onClick: () => alert("button clicked!"), children: "Click me!" }),
          ],
        });
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, n.R)(), ...t.components };
        return e ? (0, o.jsx)(e, { ...t, children: (0, o.jsx)(u, { ...t }) }) : u(t);
      }
    },
    8453: (t, e, s) => {
      s.d(e, { R: () => a, x: () => i });
      var o = s(6540);
      const n = {},
        r = o.createContext(n);
      function a(t) {
        const e = o.useContext(r);
        return o.useMemo(
          function () {
            return "function" == typeof t ? t(e) : { ...e, ...t };
          },
          [e, t]
        );
      }
      function i(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? "function" == typeof t.components
              ? t.components(n)
              : t.components || n
            : a(t.components)),
          o.createElement(r.Provider, { value: e }, t.children)
        );
      }
    },
  },
]);