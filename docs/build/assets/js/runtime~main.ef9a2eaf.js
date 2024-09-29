(() => {
  "use strict";
  var e,
    a,
    t,
    c,
    r,
    d = {},
    f = {};
  function o(e) {
    var a = f[e];
    if (void 0 !== a) return a.exports;
    var t = (f[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(t.exports, t, t.exports, o), (t.loaded = !0), t.exports;
  }
  (o.m = d),
    (o.c = f),
    (e = []),
    (o.O = (a, t, c, r) => {
      if (!t) {
        var d = 1 / 0;
        for (i = 0; i < e.length; i++) {
          (t = e[i][0]), (c = e[i][1]), (r = e[i][2]);
          for (var f = !0, b = 0; b < t.length; b++)
            (!1 & r || d >= r) && Object.keys(o.O).every(e => o.O[e](t[b]))
              ? t.splice(b--, 1)
              : ((f = !1), r < d && (d = r));
          if (f) {
            e.splice(i--, 1);
            var n = c();
            void 0 !== n && (a = n);
          }
        }
        return a;
      }
      r = r || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > r; i--) e[i] = e[i - 1];
      e[i] = [t, c, r];
    }),
    (o.n = e => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return o.d(a, { a: a }), a;
    }),
    (t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (o.t = function (e, c) {
      if ((1 & c && (e = this(e)), 8 & c)) return e;
      if ("object" == typeof e && e) {
        if (4 & c && e.__esModule) return e;
        if (16 & c && "function" == typeof e.then) return e;
      }
      var r = Object.create(null);
      o.r(r);
      var d = {};
      a = a || [null, t({}), t([]), t(t)];
      for (var f = 2 & c && e; "object" == typeof f && !~a.indexOf(f); f = t(f))
        Object.getOwnPropertyNames(f).forEach(a => (d[a] = () => e[a]));
      return (d.default = () => e), o.d(r, d), r;
    }),
    (o.d = (e, a) => {
      for (var t in a) o.o(a, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
    }),
    (o.f = {}),
    (o.e = e => Promise.all(Object.keys(o.f).reduce((a, t) => (o.f[t](e, a), a), []))),
    (o.u = e =>
      "assets/js/" +
      ({
        867: "33fc5bb8",
        1220: "530d3363",
        1235: "a7456010",
        1303: "613ec1f9",
        1903: "acecf23e",
        1972: "73664a40",
        2155: "5345a2ca",
        2634: "c4f5d8e4",
        2711: "9e4087bc",
        2761: "7d65e3ac",
        3249: "ccc49370",
        3271: "7a96ca3d",
        3637: "f4f34a3a",
        3694: "8717b14a",
        4134: "393be207",
        4212: "621db11d",
        4590: "9638926b",
        4795: "92f9e7fd",
        4813: "6875c492",
        4865: "dcb62de0",
        4908: "dc2dd6d0",
        5109: "372a99bc",
        5557: "d9f32620",
        5742: "aba21aa0",
        5862: "553c9f13",
        6061: "1f391b9e",
        6144: "46e6a07b",
        6362: "52376de7",
        6374: "64ff73d9",
        6443: "fdf1cda3",
        6783: "3d2862d3",
        6969: "14eb3368",
        7098: "a7bd4aaa",
        7194: "10710271",
        7472: "814f3328",
        7643: "a6aa9e1f",
        7924: "54f44165",
        8209: "01a85c17",
        8401: "17896441",
        8609: "925b3f96",
        8737: "7661071f",
        9013: "9d9f8394",
        9048: "a94703ab",
        9325: "59362658",
        9328: "e273c56f",
        9476: "c6c12d9e",
        9647: "5e95c892",
        9858: "36994c47",
      }[e] || e) +
      "." +
      {
        867: "2786388f",
        1220: "09770787",
        1235: "5f9bbb01",
        1303: "b3bb9567",
        1538: "2dd4ee2b",
        1903: "d8a28ea1",
        1972: "76959d95",
        2155: "17f91b12",
        2237: "fe867cfb",
        2634: "c2d256f4",
        2711: "9b70b1ae",
        2761: "7ff8c079",
        3249: "38b48d43",
        3271: "a78a9f48",
        3347: "f55d662a",
        3637: "79e19112",
        3694: "875fde9e",
        4134: "5a0d0d8c",
        4212: "153cb352",
        4590: "1a6dd464",
        4795: "aeaaf3e7",
        4813: "6e2e074a",
        4865: "0607aec8",
        4908: "ade0be13",
        5109: "8e6e5f01",
        5557: "f861742d",
        5742: "ed09cce9",
        5862: "5ae44e95",
        6061: "6f467a80",
        6144: "df54a42c",
        6362: "6416da44",
        6374: "45cde4a4",
        6443: "31be607d",
        6783: "ebd82d1c",
        6969: "b3f9dfc9",
        7098: "300507f7",
        7194: "99713717",
        7472: "1036c5cd",
        7643: "103cb339",
        7924: "f52a17ee",
        8209: "5c1a76a0",
        8401: "06e50056",
        8609: "f3c87a19",
        8737: "6321cfe3",
        9013: "842431e4",
        9048: "34ab1074",
        9325: "97cda337",
        9328: "ff7cdcfd",
        9476: "0535814c",
        9647: "3d1fe17f",
        9858: "337a7516",
      }[e] +
      ".js"),
    (o.miniCssF = e => {}),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (c = {}),
    (r = "docs:"),
    (o.l = (e, a, t, d) => {
      if (c[e]) c[e].push(a);
      else {
        var f, b;
        if (void 0 !== t)
          for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
            var u = n[i];
            if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == r + t) {
              f = u;
              break;
            }
          }
        f ||
          ((b = !0),
          ((f = document.createElement("script")).charset = "utf-8"),
          (f.timeout = 120),
          o.nc && f.setAttribute("nonce", o.nc),
          f.setAttribute("data-webpack", r + t),
          (f.src = e)),
          (c[e] = [a]);
        var l = (a, t) => {
            (f.onerror = f.onload = null), clearTimeout(s);
            var r = c[e];
            if ((delete c[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach(e => e(t)), a)) return a(t);
          },
          s = setTimeout(l.bind(null, void 0, { type: "timeout", target: f }), 12e4);
        (f.onerror = l.bind(null, f.onerror)), (f.onload = l.bind(null, f.onload)), b && document.head.appendChild(f);
      }
    }),
    (o.r = e => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.p = "/https://docs-tx-design.pages.dev/"),
    (o.gca = function (e) {
      return (
        (e =
          {
            10710271: "7194",
            17896441: "8401",
            59362658: "9325",
            "33fc5bb8": "867",
            "530d3363": "1220",
            a7456010: "1235",
            "613ec1f9": "1303",
            acecf23e: "1903",
            "73664a40": "1972",
            "5345a2ca": "2155",
            c4f5d8e4: "2634",
            "9e4087bc": "2711",
            "7d65e3ac": "2761",
            ccc49370: "3249",
            "7a96ca3d": "3271",
            f4f34a3a: "3637",
            "8717b14a": "3694",
            "393be207": "4134",
            "621db11d": "4212",
            "9638926b": "4590",
            "92f9e7fd": "4795",
            "6875c492": "4813",
            dcb62de0: "4865",
            dc2dd6d0: "4908",
            "372a99bc": "5109",
            d9f32620: "5557",
            aba21aa0: "5742",
            "553c9f13": "5862",
            "1f391b9e": "6061",
            "46e6a07b": "6144",
            "52376de7": "6362",
            "64ff73d9": "6374",
            fdf1cda3: "6443",
            "3d2862d3": "6783",
            "14eb3368": "6969",
            a7bd4aaa: "7098",
            "814f3328": "7472",
            a6aa9e1f: "7643",
            "54f44165": "7924",
            "01a85c17": "8209",
            "925b3f96": "8609",
            "7661071f": "8737",
            "9d9f8394": "9013",
            a94703ab: "9048",
            e273c56f: "9328",
            c6c12d9e: "9476",
            "5e95c892": "9647",
            "36994c47": "9858",
          }[e] || e),
        o.p + o.u(e)
      );
    }),
    (() => {
      var e = { 5354: 0, 1869: 0 };
      (o.f.j = (a, t) => {
        var c = o.o(e, a) ? e[a] : void 0;
        if (0 !== c)
          if (c) t.push(c[2]);
          else if (/^(1869|5354)$/.test(a)) e[a] = 0;
          else {
            var r = new Promise((t, r) => (c = e[a] = [t, r]));
            t.push((c[2] = r));
            var d = o.p + o.u(a),
              f = new Error();
            o.l(
              d,
              t => {
                if (o.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var r = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  (f.message = "Loading chunk " + a + " failed.\n(" + r + ": " + d + ")"),
                    (f.name = "ChunkLoadError"),
                    (f.type = r),
                    (f.request = d),
                    c[1](f);
                }
              },
              "chunk-" + a,
              a
            );
          }
      }),
        (o.O.j = a => 0 === e[a]);
      var a = (a, t) => {
          var c,
            r,
            d = t[0],
            f = t[1],
            b = t[2],
            n = 0;
          if (d.some(a => 0 !== e[a])) {
            for (c in f) o.o(f, c) && (o.m[c] = f[c]);
            if (b) var i = b(o);
          }
          for (a && a(t); n < d.length; n++) (r = d[n]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return o.O(i);
        },
        t = (self.webpackChunkdocs = self.webpackChunkdocs || []);
      t.forEach(a.bind(null, 0)), (t.push = a.bind(null, t.push.bind(t)));
    })();
})();
