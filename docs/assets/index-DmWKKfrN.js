const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/index-UPD-JUdK.js", "assets/index-Cgf9ZD8P.css"])
) => i.map((i) => d[i]);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
const xt = "modulepreload",
  bt = function (t) {
    return "/davecook88/" + t;
  },
  Pe = {},
  Qe = function (e, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      let a = function (u) {
        return Promise.all(
          u.map((h) =>
            Promise.resolve(h).then(
              (c) => ({ status: "fulfilled", value: c }),
              (c) => ({ status: "rejected", reason: c })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"),
        d =
          (l == null ? void 0 : l.nonce) ||
          (l == null ? void 0 : l.getAttribute("nonce"));
      s = a(
        n.map((u) => {
          if (((u = bt(u)), u in Pe)) return;
          Pe[u] = !0;
          const h = u.endsWith(".css"),
            c = h ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${u}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = h ? "stylesheet" : xt),
            h || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = u),
            d && f.setAttribute("nonce", d),
            document.head.appendChild(f),
            h)
          )
            return new Promise((_, p) => {
              f.addEventListener("load", _),
                f.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${u}`))
                );
            });
        })
      );
    }
    function o(a) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = a), window.dispatchEvent(l), !l.defaultPrevented))
        throw a;
    }
    return s.then((a) => {
      for (const l of a || []) l.status === "rejected" && o(l.reason);
      return e().catch(o);
    });
  };
var le,
  m,
  Xe,
  R,
  Ee,
  Ze,
  et,
  tt,
  ge,
  fe,
  _e,
  nt,
  q = {},
  rt = [],
  wt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  K = Array.isArray;
function C(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function ve(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function T(t, e, n) {
  var r,
    s,
    o,
    a = {};
  for (o in e)
    o == "key" ? (r = e[o]) : o == "ref" ? (s = e[o]) : (a[o] = e[o]);
  if (
    (arguments.length > 2 &&
      (a.children = arguments.length > 3 ? le.call(arguments, 2) : n),
    typeof t == "function" && t.defaultProps != null)
  )
    for (o in t.defaultProps) a[o] === void 0 && (a[o] = t.defaultProps[o]);
  return ne(t, a, r, s, null);
}
function ne(t, e, n, r, s) {
  var o = {
    type: t,
    props: e,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: s ?? ++Xe,
    __i: -1,
    __u: 0,
  };
  return s == null && m.vnode != null && m.vnode(o), o;
}
function L(t) {
  return t.children;
}
function M(t, e) {
  (this.props = t), (this.context = e);
}
function O(t, e) {
  if (e == null) return t.__ ? O(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? O(t) : null;
}
function it(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return it(t);
  }
}
function me(t) {
  ((!t.__d && (t.__d = !0) && R.push(t) && !ie.__r++) ||
    Ee != m.debounceRendering) &&
    ((Ee = m.debounceRendering) || Ze)(ie);
}
function ie() {
  for (var t, e, n, r, s, o, a, l = 1; R.length; )
    R.length > l && R.sort(et),
      (t = R.shift()),
      (l = R.length),
      t.__d &&
        ((n = void 0),
        (s = (r = (e = t).__v).__e),
        (o = []),
        (a = []),
        e.__P &&
          (((n = C({}, r)).__v = r.__v + 1),
          m.vnode && m.vnode(n),
          ye(
            e.__P,
            n,
            r,
            e.__n,
            e.__P.namespaceURI,
            32 & r.__u ? [s] : null,
            o,
            s ?? O(r),
            !!(32 & r.__u),
            a
          ),
          (n.__v = r.__v),
          (n.__.__k[n.__i] = n),
          at(o, n, a),
          n.__e != s && it(n)));
  ie.__r = 0;
}
function st(t, e, n, r, s, o, a, l, d, u, h) {
  var c,
    f,
    _,
    p,
    x,
    v,
    g = (r && r.__k) || rt,
    y = e.length;
  for (d = kt(n, e, g, d, y), c = 0; c < y; c++)
    (_ = n.__k[c]) != null &&
      ((f = _.__i == -1 ? q : g[_.__i] || q),
      (_.__i = c),
      (v = ye(t, _, f, s, o, a, l, d, u, h)),
      (p = _.__e),
      _.ref &&
        f.ref != _.ref &&
        (f.ref && xe(f.ref, null, _), h.push(_.ref, _.__c || p, _)),
      x == null && p != null && (x = p),
      4 & _.__u || f.__k === _.__k
        ? (d = ot(_, d, t))
        : typeof _.type == "function" && v !== void 0
        ? (d = v)
        : p && (d = p.nextSibling),
      (_.__u &= -7));
  return (n.__e = x), d;
}
function kt(t, e, n, r, s) {
  var o,
    a,
    l,
    d,
    u,
    h = n.length,
    c = h,
    f = 0;
  for (t.__k = new Array(s), o = 0; o < s; o++)
    (a = e[o]) != null && typeof a != "boolean" && typeof a != "function"
      ? ((d = o + f),
        ((a = t.__k[o] =
          typeof a == "string" ||
          typeof a == "number" ||
          typeof a == "bigint" ||
          a.constructor == String
            ? ne(null, a, null, null, null)
            : K(a)
            ? ne(L, { children: a }, null, null, null)
            : a.constructor == null && a.__b > 0
            ? ne(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
            : a).__ = t),
        (a.__b = t.__b + 1),
        (l = null),
        (u = a.__i = St(a, n, d, c)) != -1 && (c--, (l = n[u]) && (l.__u |= 2)),
        l == null || l.__v == null
          ? (u == -1 && (s > h ? f-- : s < h && f++),
            typeof a.type != "function" && (a.__u |= 4))
          : u != d &&
            (u == d - 1
              ? f--
              : u == d + 1
              ? f++
              : (u > d ? f-- : f++, (a.__u |= 4))))
      : (t.__k[o] = null);
  if (c)
    for (o = 0; o < h; o++)
      (l = n[o]) != null &&
        (2 & l.__u) == 0 &&
        (l.__e == r && (r = O(l)), ct(l, l));
  return r;
}
function ot(t, e, n) {
  var r, s;
  if (typeof t.type == "function") {
    for (r = t.__k, s = 0; r && s < r.length; s++)
      r[s] && ((r[s].__ = t), (e = ot(r[s], e, n)));
    return e;
  }
  t.__e != e &&
    (e && t.type && !n.contains(e) && (e = O(t)),
    n.insertBefore(t.__e, e || null),
    (e = t.__e));
  do e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function se(t, e) {
  return (
    (e = e || []),
    t == null ||
      typeof t == "boolean" ||
      (K(t)
        ? t.some(function (n) {
            se(n, e);
          })
        : e.push(t)),
    e
  );
}
function St(t, e, n, r) {
  var s,
    o,
    a = t.key,
    l = t.type,
    d = e[n];
  if (
    (d === null && t.key == null) ||
    (d && a == d.key && l == d.type && (2 & d.__u) == 0)
  )
    return n;
  if (r > (d != null && (2 & d.__u) == 0 ? 1 : 0))
    for (s = n - 1, o = n + 1; s >= 0 || o < e.length; ) {
      if (s >= 0) {
        if ((d = e[s]) && (2 & d.__u) == 0 && a == d.key && l == d.type)
          return s;
        s--;
      }
      if (o < e.length) {
        if ((d = e[o]) && (2 & d.__u) == 0 && a == d.key && l == d.type)
          return o;
        o++;
      }
    }
  return -1;
}
function Ce(t, e, n) {
  e[0] == "-"
    ? t.setProperty(e, n ?? "")
    : (t[e] =
        n == null ? "" : typeof n != "number" || wt.test(e) ? n : n + "px");
}
function Q(t, e, n, r, s) {
  var o, a;
  e: if (e == "style")
    if (typeof n == "string") t.style.cssText = n;
    else {
      if ((typeof r == "string" && (t.style.cssText = r = ""), r))
        for (e in r) (n && e in n) || Ce(t.style, e, "");
      if (n) for (e in n) (r && n[e] == r[e]) || Ce(t.style, e, n[e]);
    }
  else if (e[0] == "o" && e[1] == "n")
    (o = e != (e = e.replace(tt, "$1"))),
      (a = e.toLowerCase()),
      (e =
        a in t || e == "onFocusOut" || e == "onFocusIn"
          ? a.slice(2)
          : e.slice(2)),
      t.l || (t.l = {}),
      (t.l[e + o] = n),
      n
        ? r
          ? (n.u = r.u)
          : ((n.u = ge), t.addEventListener(e, o ? _e : fe, o))
        : t.removeEventListener(e, o ? _e : fe, o);
  else {
    if (s == "http://www.w3.org/2000/svg")
      e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e != "width" &&
      e != "height" &&
      e != "href" &&
      e != "list" &&
      e != "form" &&
      e != "tabIndex" &&
      e != "download" &&
      e != "rowSpan" &&
      e != "colSpan" &&
      e != "role" &&
      e != "popover" &&
      e in t
    )
      try {
        t[e] = n ?? "";
        break e;
      } catch {}
    typeof n == "function" ||
      (n == null || (n === !1 && e[4] != "-")
        ? t.removeAttribute(e)
        : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function Me(t) {
  return function (e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e.t == null) e.t = ge++;
      else if (e.t < n.u) return;
      return n(m.event ? m.event(e) : e);
    }
  };
}
function ye(t, e, n, r, s, o, a, l, d, u) {
  var h,
    c,
    f,
    _,
    p,
    x,
    v,
    g,
    y,
    j,
    A,
    J,
    $,
    Ne,
    Y,
    B,
    de,
    P = e.type;
  if (e.constructor != null) return null;
  128 & n.__u && ((d = !!(32 & n.__u)), (o = [(l = e.__e = n.__e)])),
    (h = m.__b) && h(e);
  e: if (typeof P == "function")
    try {
      if (
        ((g = e.props),
        (y = "prototype" in P && P.prototype.render),
        (j = (h = P.contextType) && r[h.__c]),
        (A = h ? (j ? j.props.value : h.__) : r),
        n.__c
          ? (v = (c = e.__c = n.__c).__ = c.__E)
          : (y
              ? (e.__c = c = new P(g, A))
              : ((e.__c = c = new M(g, A)),
                (c.constructor = P),
                (c.render = Pt)),
            j && j.sub(c),
            (c.props = g),
            c.state || (c.state = {}),
            (c.context = A),
            (c.__n = r),
            (f = c.__d = !0),
            (c.__h = []),
            (c._sb = [])),
        y && c.__s == null && (c.__s = c.state),
        y &&
          P.getDerivedStateFromProps != null &&
          (c.__s == c.state && (c.__s = C({}, c.__s)),
          C(c.__s, P.getDerivedStateFromProps(g, c.__s))),
        (_ = c.props),
        (p = c.state),
        (c.__v = e),
        f)
      )
        y &&
          P.getDerivedStateFromProps == null &&
          c.componentWillMount != null &&
          c.componentWillMount(),
          y && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (
          (y &&
            P.getDerivedStateFromProps == null &&
            g !== _ &&
            c.componentWillReceiveProps != null &&
            c.componentWillReceiveProps(g, A),
          (!c.__e &&
            c.shouldComponentUpdate != null &&
            c.shouldComponentUpdate(g, c.__s, A) === !1) ||
            e.__v == n.__v)
        ) {
          for (
            e.__v != n.__v && ((c.props = g), (c.state = c.__s), (c.__d = !1)),
              e.__e = n.__e,
              e.__k = n.__k,
              e.__k.some(function (D) {
                D && (D.__ = e);
              }),
              J = 0;
            J < c._sb.length;
            J++
          )
            c.__h.push(c._sb[J]);
          (c._sb = []), c.__h.length && a.push(c);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, A),
          y &&
            c.componentDidUpdate != null &&
            c.__h.push(function () {
              c.componentDidUpdate(_, p, x);
            });
      }
      if (
        ((c.context = A),
        (c.props = g),
        (c.__P = t),
        (c.__e = !1),
        ($ = m.__r),
        (Ne = 0),
        y)
      ) {
        for (
          c.state = c.__s,
            c.__d = !1,
            $ && $(e),
            h = c.render(c.props, c.state, c.context),
            Y = 0;
          Y < c._sb.length;
          Y++
        )
          c.__h.push(c._sb[Y]);
        c._sb = [];
      } else
        do
          (c.__d = !1),
            $ && $(e),
            (h = c.render(c.props, c.state, c.context)),
            (c.state = c.__s);
        while (c.__d && ++Ne < 25);
      (c.state = c.__s),
        c.getChildContext != null && (r = C(C({}, r), c.getChildContext())),
        y &&
          !f &&
          c.getSnapshotBeforeUpdate != null &&
          (x = c.getSnapshotBeforeUpdate(_, p)),
        (B = h),
        h != null &&
          h.type === L &&
          h.key == null &&
          (B = lt(h.props.children)),
        (l = st(t, K(B) ? B : [B], e, n, r, s, o, a, l, d, u)),
        (c.base = e.__e),
        (e.__u &= -161),
        c.__h.length && a.push(c),
        v && (c.__E = c.__ = null);
    } catch (D) {
      if (((e.__v = null), d || o != null))
        if (D.then) {
          for (e.__u |= d ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; )
            l = l.nextSibling;
          (o[o.indexOf(l)] = null), (e.__e = l);
        } else for (de = o.length; de--; ) ve(o[de]);
      else (e.__e = n.__e), (e.__k = n.__k);
      m.__e(D, e, n);
    }
  else
    o == null && e.__v == n.__v
      ? ((e.__k = n.__k), (e.__e = n.__e))
      : (l = e.__e = Nt(n.__e, e, n, r, s, o, a, d, u));
  return (h = m.diffed) && h(e), 128 & e.__u ? void 0 : l;
}
function at(t, e, n) {
  for (var r = 0; r < n.length; r++) xe(n[r], n[++r], n[++r]);
  m.__c && m.__c(e, t),
    t.some(function (s) {
      try {
        (t = s.__h),
          (s.__h = []),
          t.some(function (o) {
            o.call(s);
          });
      } catch (o) {
        m.__e(o, s.__v);
      }
    });
}
function lt(t) {
  return typeof t != "object" || t == null || (t.__b && t.__b > 0)
    ? t
    : K(t)
    ? t.map(lt)
    : C({}, t);
}
function Nt(t, e, n, r, s, o, a, l, d) {
  var u,
    h,
    c,
    f,
    _,
    p,
    x,
    v = n.props,
    g = e.props,
    y = e.type;
  if (
    (y == "svg"
      ? (s = "http://www.w3.org/2000/svg")
      : y == "math"
      ? (s = "http://www.w3.org/1998/Math/MathML")
      : s || (s = "http://www.w3.org/1999/xhtml"),
    o != null)
  ) {
    for (u = 0; u < o.length; u++)
      if (
        (_ = o[u]) &&
        "setAttribute" in _ == !!y &&
        (y ? _.localName == y : _.nodeType == 3)
      ) {
        (t = _), (o[u] = null);
        break;
      }
  }
  if (t == null) {
    if (y == null) return document.createTextNode(g);
    (t = document.createElementNS(s, y, g.is && g)),
      l && (m.__m && m.__m(e, o), (l = !1)),
      (o = null);
  }
  if (y == null) v === g || (l && t.data == g) || (t.data = g);
  else {
    if (((o = o && le.call(t.childNodes)), (v = n.props || q), !l && o != null))
      for (v = {}, u = 0; u < t.attributes.length; u++)
        v[(_ = t.attributes[u]).name] = _.value;
    for (u in v)
      if (((_ = v[u]), u != "children")) {
        if (u == "dangerouslySetInnerHTML") c = _;
        else if (!(u in g)) {
          if (
            (u == "value" && "defaultValue" in g) ||
            (u == "checked" && "defaultChecked" in g)
          )
            continue;
          Q(t, u, null, _, s);
        }
      }
    for (u in g)
      (_ = g[u]),
        u == "children"
          ? (f = _)
          : u == "dangerouslySetInnerHTML"
          ? (h = _)
          : u == "value"
          ? (p = _)
          : u == "checked"
          ? (x = _)
          : (l && typeof _ != "function") || v[u] === _ || Q(t, u, _, v[u], s);
    if (h)
      l ||
        (c && (h.__html == c.__html || h.__html == t.innerHTML)) ||
        (t.innerHTML = h.__html),
        (e.__k = []);
    else if (
      (c && (t.innerHTML = ""),
      st(
        e.type == "template" ? t.content : t,
        K(f) ? f : [f],
        e,
        n,
        r,
        y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        o,
        a,
        o ? o[0] : n.__k && O(n, 0),
        l,
        d
      ),
      o != null)
    )
      for (u = o.length; u--; ) ve(o[u]);
    l ||
      ((u = "value"),
      y == "progress" && p == null
        ? t.removeAttribute("value")
        : p != null &&
          (p !== t[u] ||
            (y == "progress" && !p) ||
            (y == "option" && p != v[u])) &&
          Q(t, u, p, v[u], s),
      (u = "checked"),
      x != null && x != t[u] && Q(t, u, x, v[u], s));
  }
  return t;
}
function xe(t, e, n) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), (r && e == null) || (t.__u = t(e));
    } else t.current = e;
  } catch (s) {
    m.__e(s, n);
  }
}
function ct(t, e, n) {
  var r, s;
  if (
    (m.unmount && m.unmount(t),
    (r = t.ref) && ((r.current && r.current != t.__e) || xe(r, null, e)),
    (r = t.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        m.__e(o, e);
      }
    r.base = r.__P = null;
  }
  if ((r = t.__k))
    for (s = 0; s < r.length; s++)
      r[s] && ct(r[s], e, n || typeof t.type != "function");
  n || ve(t.__e), (t.__c = t.__ = t.__e = void 0);
}
function Pt(t, e, n) {
  return this.constructor(t, n);
}
function oe(t, e, n) {
  var r, s, o, a;
  e == document && (e = document.documentElement),
    m.__ && m.__(t, e),
    (s = (r = typeof n == "function") ? null : (n && n.__k) || e.__k),
    (o = []),
    (a = []),
    ye(
      e,
      (t = ((!r && n) || e).__k = T(L, null, [t])),
      s || q,
      q,
      e.namespaceURI,
      !r && n ? [n] : s ? null : e.firstChild ? le.call(e.childNodes) : null,
      o,
      !r && n ? n : s ? s.__e : e.firstChild,
      r,
      a
    ),
    at(o, t, a);
}
function dt(t, e) {
  oe(t, e, dt);
}
function ut(t) {
  function e(n) {
    var r, s;
    return (
      this.getChildContext ||
        ((r = new Set()),
        ((s = {})[e.__c] = this),
        (this.getChildContext = function () {
          return s;
        }),
        (this.componentWillUnmount = function () {
          r = null;
        }),
        (this.shouldComponentUpdate = function (o) {
          this.props.value != o.value &&
            r.forEach(function (a) {
              (a.__e = !0), me(a);
            });
        }),
        (this.sub = function (o) {
          r.add(o);
          var a = o.componentWillUnmount;
          o.componentWillUnmount = function () {
            r && r.delete(o), a && a.call(o);
          };
        })),
      n.children
    );
  }
  return (
    (e.__c = "__cC" + nt++),
    (e.__ = t),
    (e.Provider =
      e.__l =
      (e.Consumer = function (n, r) {
        return n.children(r);
      }).contextType =
        e),
    e
  );
}
(le = rt.slice),
  (m = {
    __e: function (t, e, n, r) {
      for (var s, o, a; (e = e.__); )
        if ((s = e.__c) && !s.__)
          try {
            if (
              ((o = s.constructor) &&
                o.getDerivedStateFromError != null &&
                (s.setState(o.getDerivedStateFromError(t)), (a = s.__d)),
              s.componentDidCatch != null &&
                (s.componentDidCatch(t, r || {}), (a = s.__d)),
              a)
            )
              return (s.__E = s);
          } catch (l) {
            t = l;
          }
      throw t;
    },
  }),
  (Xe = 0),
  (M.prototype.setState = function (t, e) {
    var n;
    (n =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = C({}, this.state))),
      typeof t == "function" && (t = t(C({}, n), this.props)),
      t && C(n, t),
      t != null && this.__v && (e && this._sb.push(e), me(this));
  }),
  (M.prototype.forceUpdate = function (t) {
    this.__v && ((this.__e = !0), t && this.__h.push(t), me(this));
  }),
  (M.prototype.render = L),
  (R = []),
  (Ze =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (et = function (t, e) {
    return t.__v.__b - e.__v.__b;
  }),
  (ie.__r = 0),
  (tt = /(PointerCapture)$|Capture$/i),
  (ge = 0),
  (fe = Me(!1)),
  (_e = Me(!0)),
  (nt = 0);
var Et = 0;
function i(t, e, n, r, s, o) {
  e || (e = {});
  var a,
    l,
    d = e;
  if ("ref" in d)
    for (l in ((d = {}), e)) l == "ref" ? (a = e[l]) : (d[l] = e[l]);
  var u = {
    type: t,
    props: d,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Et,
    __i: -1,
    __u: 0,
    __source: s,
    __self: o,
  };
  if (typeof t == "function" && (a = t.defaultProps))
    for (l in a) d[l] === void 0 && (d[l] = a[l]);
  return m.vnode && m.vnode(u), u;
}
var H,
  b,
  ue,
  Ae,
  ae = 0,
  ht = [],
  w = m,
  Le = w.__b,
  Ie = w.__r,
  Re = w.diffed,
  Te = w.__c,
  Oe = w.unmount,
  He = w.__;
function ce(t, e) {
  w.__h && w.__h(b, t, ae || e), (ae = 0);
  var n = b.__H || (b.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function N(t) {
  return (ae = 1), be(_t, t);
}
function be(t, e, n) {
  var r = ce(H++, 2);
  if (
    ((r.t = t),
    !r.__c &&
      ((r.__ = [
        n ? n(e) : _t(void 0, e),
        function (l) {
          var d = r.__N ? r.__N[0] : r.__[0],
            u = r.t(d, l);
          d !== u && ((r.__N = [u, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = b),
      !b.__f))
  ) {
    var s = function (l, d, u) {
      if (!r.__c.__H) return !0;
      var h = r.__c.__H.__.filter(function (f) {
        return !!f.__c;
      });
      if (
        h.every(function (f) {
          return !f.__N;
        })
      )
        return !o || o.call(this, l, d, u);
      var c = r.__c.props !== l;
      return (
        h.forEach(function (f) {
          if (f.__N) {
            var _ = f.__[0];
            (f.__ = f.__N), (f.__N = void 0), _ !== f.__[0] && (c = !0);
          }
        }),
        (o && o.call(this, l, d, u)) || c
      );
    };
    b.__f = !0;
    var o = b.shouldComponentUpdate,
      a = b.componentWillUpdate;
    (b.componentWillUpdate = function (l, d, u) {
      if (this.__e) {
        var h = o;
        (o = void 0), s(l, d, u), (o = h);
      }
      a && a.call(this, l, d, u);
    }),
      (b.shouldComponentUpdate = s);
  }
  return r.__N || r.__;
}
function E(t, e) {
  var n = ce(H++, 3);
  !w.__s && we(n.__H, e) && ((n.__ = t), (n.u = e), b.__H.__h.push(n));
}
function Ct(t, e) {
  var n = ce(H++, 4);
  !w.__s && we(n.__H, e) && ((n.__ = t), (n.u = e), b.__h.push(n));
}
function V(t) {
  return (
    (ae = 5),
    ft(function () {
      return { current: t };
    }, [])
  );
}
function ft(t, e) {
  var n = ce(H++, 7);
  return we(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)), n.__;
}
function Mt() {
  for (var t; (t = ht.shift()); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(re), t.__H.__h.forEach(pe), (t.__H.__h = []);
      } catch (e) {
        (t.__H.__h = []), w.__e(e, t.__v);
      }
}
(w.__b = function (t) {
  (b = null), Le && Le(t);
}),
  (w.__ = function (t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), He && He(t, e);
  }),
  (w.__r = function (t) {
    Ie && Ie(t), (H = 0);
    var e = (b = t.__c).__H;
    e &&
      (ue === b
        ? ((e.__h = []),
          (b.__h = []),
          e.__.forEach(function (n) {
            n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
          }))
        : (e.__h.forEach(re), e.__h.forEach(pe), (e.__h = []), (H = 0))),
      (ue = b);
  }),
  (w.diffed = function (t) {
    Re && Re(t);
    var e = t.__c;
    e &&
      e.__H &&
      (e.__H.__h.length &&
        ((ht.push(e) !== 1 && Ae === w.requestAnimationFrame) ||
          ((Ae = w.requestAnimationFrame) || At)(Mt)),
      e.__H.__.forEach(function (n) {
        n.u && (n.__H = n.u), (n.u = void 0);
      })),
      (ue = b = null);
  }),
  (w.__c = function (t, e) {
    e.some(function (n) {
      try {
        n.__h.forEach(re),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || pe(r);
          }));
      } catch (r) {
        e.some(function (s) {
          s.__h && (s.__h = []);
        }),
          (e = []),
          w.__e(r, n.__v);
      }
    }),
      Te && Te(t, e);
  }),
  (w.unmount = function (t) {
    Oe && Oe(t);
    var e,
      n = t.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (r) {
        try {
          re(r);
        } catch (s) {
          e = s;
        }
      }),
      (n.__H = void 0),
      e && w.__e(e, n.__v));
  });
var Ue = typeof requestAnimationFrame == "function";
function At(t) {
  var e,
    n = function () {
      clearTimeout(r), Ue && cancelAnimationFrame(e), setTimeout(t);
    },
    r = setTimeout(n, 35);
  Ue && (e = requestAnimationFrame(n));
}
function re(t) {
  var e = b,
    n = t.__c;
  typeof n == "function" && ((t.__c = void 0), n()), (b = e);
}
function pe(t) {
  var e = b;
  (t.__c = t.__()), (b = e);
}
function we(t, e) {
  return (
    !t ||
    t.length !== e.length ||
    e.some(function (n, r) {
      return n !== t[r];
    })
  );
}
function _t(t, e) {
  return typeof e == "function" ? e(t) : e;
}
let I, W;
const Lt = (t, e) => {
  if (((I = void 0), e && e.type === "click")) {
    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0)
      return t;
    const n = e.composedPath().find((s) => s.nodeName == "A" && s.href),
      r = n && n.getAttribute("href");
    if (
      !n ||
      n.origin != location.origin ||
      /^#/.test(r) ||
      !/^(_?self)?$/i.test(n.target) ||
      (W && (typeof W == "string" ? !r.startsWith(W) : !W.test(r)))
    )
      return t;
    (I = !0), e.preventDefault(), (e = n.href.replace(location.origin, ""));
  } else
    typeof e == "string"
      ? (I = !0)
      : e && e.url
      ? ((I = !e.replace), (e = e.url))
      : (e = location.pathname + location.search);
  return (
    I === !0
      ? history.pushState(null, "", e)
      : I === !1 && history.replaceState(null, "", e),
    e
  );
};
function ke(t) {
  const [e, n] = be(Lt, t.url || location.pathname + location.search);
  t.scope && (W = t.scope);
  const r = I === !0,
    s = ft(() => {
      const o = new URL(e, location.origin),
        a = o.pathname.replace(/\/+$/g, "") || "/";
      return {
        url: e,
        path: a,
        query: Object.fromEntries(o.searchParams),
        route: (l, d) => n({ url: l, replace: d }),
        wasPush: r,
      };
    }, [e]);
  return (
    Ct(
      () => (
        addEventListener("click", n),
        addEventListener("popstate", n),
        () => {
          removeEventListener("click", n), removeEventListener("popstate", n);
        }
      ),
      []
    ),
    T(ke.ctx.Provider, { value: s }, t.children)
  );
}
Promise.resolve();
ke.ctx = ut({});
ut({});
const je = m.__b;
m.__b = (t) => {
  t.type &&
    t.type._forwarded &&
    t.ref &&
    ((t.props.ref = t.ref), (t.ref = null)),
    je && je(t);
};
const $e = m.__e;
m.__e = (t, e, n) => {
  if (t && t.then) {
    let r = e;
    for (; (r = r.__); )
      if (r.__c && r.__c.__c)
        return (
          e.__e == null &&
            ((e.__c.__z = [n.__e]), (e.__e = n.__e), (e.__k = n.__k)),
          e.__k || (e.__k = []),
          r.__c.__c(t, e)
        );
  }
  $e && $e(t, e, n);
};
let Be;
function It(t, e) {
  if (typeof window > "u") return;
  let n = document.querySelector("script[type=isodata]");
  (e = e || (n && n.parentNode) || document.body),
    !Be && n ? dt(t, e) : oe(t, e),
    (Be = !0);
}
function Rt(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function De(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function Fe(t, e) {
  (this.props = t), (this.context = e);
}
((Fe.prototype = new M()).isPureReactComponent = !0),
  (Fe.prototype.shouldComponentUpdate = function (t, e) {
    return De(this.props, t) || De(this.state, e);
  });
var We = m.__b;
m.__b = function (t) {
  t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
    We && We(t);
};
var Tt = m.__e;
m.__e = function (t, e, n, r) {
  if (t.then) {
    for (var s, o = e; (o = o.__); )
      if ((s = o.__c) && s.__c)
        return e.__e == null && ((e.__e = n.__e), (e.__k = n.__k)), s.__c(t, e);
  }
  Tt(t, e, n, r);
};
var ze = m.unmount;
function mt(t, e, n) {
  return (
    t &&
      (t.__c &&
        t.__c.__H &&
        (t.__c.__H.__.forEach(function (r) {
          typeof r.__c == "function" && r.__c();
        }),
        (t.__c.__H = null)),
      (t = Rt({}, t)).__c != null &&
        (t.__c.__P === n && (t.__c.__P = e), (t.__c.__e = !0), (t.__c = null)),
      (t.__k =
        t.__k &&
        t.__k.map(function (r) {
          return mt(r, e, n);
        }))),
    t
  );
}
function pt(t, e, n) {
  return (
    t &&
      n &&
      ((t.__v = null),
      (t.__k =
        t.__k &&
        t.__k.map(function (r) {
          return pt(r, e, n);
        })),
      t.__c &&
        t.__c.__P === e &&
        (t.__e && n.appendChild(t.__e), (t.__c.__e = !0), (t.__c.__P = n))),
    t
  );
}
function z() {
  (this.__u = 0), (this.o = null), (this.__b = null);
}
function gt(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function vt(t) {
  var e, n, r;
  function s(o) {
    if (
      (e ||
        (e = t()).then(
          function (a) {
            n = a.default || a;
          },
          function (a) {
            r = a;
          }
        ),
      r)
    )
      throw r;
    if (!n) throw e;
    return T(n, o);
  }
  return (s.displayName = "Lazy"), (s.__f = !0), s;
}
function X() {
  (this.i = null), (this.l = null);
}
(m.unmount = function (t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), ze && ze(t);
}),
  ((z.prototype = new M()).__c = function (t, e) {
    var n = e.__c,
      r = this;
    r.o == null && (r.o = []), r.o.push(n);
    var s = gt(r.__v),
      o = !1,
      a = function () {
        o || ((o = !0), (n.__R = null), s ? s(l) : l());
      };
    n.__R = a;
    var l = function () {
      if (!--r.__u) {
        if (r.state.__a) {
          var d = r.state.__a;
          r.__v.__k[0] = pt(d, d.__c.__P, d.__c.__O);
        }
        var u;
        for (r.setState({ __a: (r.__b = null) }); (u = r.o.pop()); )
          u.forceUpdate();
      }
    };
    r.__u++ || 32 & e.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
      t.then(a, a);
  }),
  (z.prototype.componentWillUnmount = function () {
    this.o = [];
  }),
  (z.prototype.render = function (t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = mt(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var s = e.__a && T(L, null, t.fallback);
    return s && (s.__u &= -33), [T(L, null, e.__a ? null : t.children), s];
  });
var Ge = function (t, e, n) {
  if (
    (++n[1] === n[0] && t.l.delete(e),
    t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
  )
    for (n = t.i; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      t.i = n = n[2];
    }
};
function Ot(t) {
  return (
    (this.getChildContext = function () {
      return t.context;
    }),
    t.children
  );
}
function Ht(t) {
  var e = this,
    n = t.h;
  if (
    ((e.componentWillUnmount = function () {
      oe(null, e.v), (e.v = null), (e.h = null);
    }),
    e.h && e.h !== n && e.componentWillUnmount(),
    !e.v)
  ) {
    for (var r = e.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    (e.h = n),
      (e.v = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        __k: { __m: r.__m },
        contains: function () {
          return !0;
        },
        insertBefore: function (s, o) {
          this.childNodes.push(s), e.h.insertBefore(s, o);
        },
        removeChild: function (s) {
          this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1),
            e.h.removeChild(s);
        },
      });
  }
  oe(T(Ot, { context: e.context }, t.__v), e.v);
}
function Ut(t, e) {
  var n = T(Ht, { __v: t, h: e });
  return (n.containerInfo = e), n;
}
((X.prototype = new M()).__a = function (t) {
  var e = this,
    n = gt(e.__v),
    r = e.l.get(t);
  return (
    r[0]++,
    function (s) {
      var o = function () {
        e.props.revealOrder ? (r.push(s), Ge(e, t, r)) : s();
      };
      n ? n(o) : o();
    }
  );
}),
  (X.prototype.render = function (t) {
    (this.i = null), (this.l = new Map());
    var e = se(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; ) this.l.set(e[n], (this.i = [1, 0, this.i]));
    return t.children;
  }),
  (X.prototype.componentDidUpdate = X.prototype.componentDidMount =
    function () {
      var t = this;
      this.l.forEach(function (e, n) {
        Ge(t, n, e);
      });
    });
var jt =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  $t =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Bt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Dt = /[A-Z0-9]/g,
  Ft = typeof document < "u",
  Wt = function (t) {
    return (
      typeof Symbol < "u" && typeof Symbol() == "symbol"
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(t);
  };
(M.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (t) {
    Object.defineProperty(M.prototype, t, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + t];
      },
      set: function (e) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          value: e,
        });
      },
    });
  });
var qe = m.event;
function zt() {}
function Gt() {
  return this.cancelBubble;
}
function qt() {
  return this.defaultPrevented;
}
m.event = function (t) {
  return (
    qe && (t = qe(t)),
    (t.persist = zt),
    (t.isPropagationStopped = Gt),
    (t.isDefaultPrevented = qt),
    (t.nativeEvent = t)
  );
};
var Vt = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Ve = m.vnode;
m.vnode = function (t) {
  typeof t.type == "string" &&
    (function (e) {
      var n = e.props,
        r = e.type,
        s = {},
        o = r.indexOf("-") === -1;
      for (var a in n) {
        var l = n[a];
        if (
          !(
            (a === "value" && "defaultValue" in n && l == null) ||
            (Ft && a === "children" && r === "noscript") ||
            a === "class" ||
            a === "className"
          )
        ) {
          var d = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null
            ? (a = "value")
            : a === "download" && l === !0
            ? (l = "")
            : d === "translate" && l === "no"
            ? (l = !1)
            : d[0] === "o" && d[1] === "n"
            ? d === "ondoubleclick"
              ? (a = "ondblclick")
              : d !== "onchange" ||
                (r !== "input" && r !== "textarea") ||
                Wt(n.type)
              ? d === "onfocus"
                ? (a = "onfocusin")
                : d === "onblur"
                ? (a = "onfocusout")
                : Bt.test(a) && (a = d)
              : (d = a = "oninput")
            : o && $t.test(a)
            ? (a = a.replace(Dt, "-$&").toLowerCase())
            : l === null && (l = void 0),
            d === "oninput" && s[(a = d)] && (a = "oninputCapture"),
            (s[a] = l);
        }
      }
      r == "select" &&
        s.multiple &&
        Array.isArray(s.value) &&
        (s.value = se(n.children).forEach(function (u) {
          u.props.selected = s.value.indexOf(u.props.value) != -1;
        })),
        r == "select" &&
          s.defaultValue != null &&
          (s.value = se(n.children).forEach(function (u) {
            u.props.selected = s.multiple
              ? s.defaultValue.indexOf(u.props.value) != -1
              : s.defaultValue == u.props.value;
          })),
        n.class && !n.className
          ? ((s.class = n.class), Object.defineProperty(s, "className", Vt))
          : ((n.className && !n.class) || (n.class && n.className)) &&
            (s.class = s.className = n.className),
        (e.props = s);
    })(t),
    (t.$$typeof = jt),
    Ve && Ve(t);
};
var Ke = m.__r;
m.__r = function (t) {
  Ke && Ke(t), t.__c;
};
var Je = m.diffed;
m.diffed = function (t) {
  Je && Je(t);
  var e = t.props,
    n = t.__e;
  n != null &&
    t.type === "textarea" &&
    "value" in e &&
    e.value !== n.value &&
    (n.value = e.value == null ? "" : e.value);
};
const U = { PAGE: "p", HOME_VIEW: "v" },
  G = (t) =>
    typeof window > "u"
      ? null
      : new URLSearchParams(window.location.search).get(t) ?? null;
function Se(t) {
  const [e, n] = N(() => G(t));
  return (
    E(() => {
      n(G(t));
      const r = () => {
        n(G(t));
      };
      return (
        window.addEventListener("popstate", r),
        window.addEventListener("urlchange", r),
        () => {
          window.removeEventListener("popstate", r),
            window.removeEventListener("urlchange", r);
        }
      );
    }, [t]),
    e
  );
}
function Kt(t, e) {
  const n = new URL(window.location.href);
  n.searchParams.set(t, e),
    window.history.pushState({}, "", n.toString()),
    window.dispatchEvent(new CustomEvent("urlchange"));
}
const k = {
    BUTTONS: "buttons",
    ABOUT_ME: "about-me",
    PROJECTS: "projects",
    RESUME: "resume",
    CONTACT: "contact",
  },
  Z = ({ ...t }) =>
    i("button", {
      className:
        `
      btn
      glass-effect
      glass-highlight
      shimmer-hover
      text-gray-200
      font-sans
      font-semibold
      uppercase
      text-lg
      md:text-xl
      py-5
      px-6
      w-full
      rounded-xl
      cursor-pointer
      hover:text-white
      transition-all
      duration-300
      ease-in-out
      tracking-wide
      shadow-lg` + (t.className || ""),
      ...t,
      children: t.children,
    }),
  Jt = ({ redirect: t }) => {
    const [e, n] = N(!1);
    return (
      E(() => {
        const r = setTimeout(() => {
          n(!0);
        }, 350);
        return () => clearTimeout(r);
      }, []),
      i("div", {
        className: "w-full h-full flex flex-col items-center justify-center",
        children: i("div", {
          className: `
        flex
        flex-col
        items-center
        justify-center
        gap-5
        p-6
        w-full
        md:w-2/5
        transition-all
        duration-300
        ease-in-out
        ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `,
          children: [
            i(Z, { onClick: () => t(k.ABOUT_ME), children: "About Me" }),
            i(Z, { onClick: () => t(k.PROJECTS), children: "Projects" }),
            i(Z, { onClick: () => t(k.RESUME), children: "Resume" }),
            i(Z, { onClick: () => t(k.CONTACT), children: "Contact" }),
          ],
        }),
      })
    );
  },
  ee = ({ children: t, onBackClick: e }) => {
    const [n, r] = N(!1);
    return (
      E(() => {
        r(!0);
      }, []),
      i("div", {
        className: `text-sans relative w-full max-h-full rounded-3xl z-20 transition-all duration-500 ease-out transform ${
          n ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`,
        children: i("div", {
          className:
            "md:max-h-[85vh] relative z-10 glass-effect glass-highlight rounded-3xl p-4 md:p-6 flex-col gap-4 justify-left overflow-scroll mt-4 md:mt-6",
          children: [
            i("button", {
              onClick: e,
              className:
                "text-accent-500 mb-4 font-mono cursor-pointer hover:scale-105 transition-transform",
              children: "<--- BACK",
            }),
            i("div", {
              className: "text-gray-400 font-sans h-full",
              children: t,
            }),
          ],
        }),
      })
    );
  },
  he = new Date("1988-07-11"),
  Yt = [
    {
      label: "Age:",
      value: () => {
        const t = new Date();
        let e = t.getFullYear() - he.getFullYear();
        const n = t.getMonth() - he.getMonth();
        return (
          (n < 0 || (n === 0 && t.getDate() < he.getDate())) && e--,
          e.toString()
        );
      },
      isLink: !1,
      icon: null,
      link: null,
    },
    {
      label: "From:",
      value: () => "Stourbridge, UK 🇬🇧",
      isLink: !0,
      icon: null,
      link: "https://www.google.com/maps/place/Stourbridge,+UK",
    },
    {
      label: "Location:",
      value: () => "Tula de Allende, MX 🇲🇽",
      isLink: !0,
      icon: null,
      link: "https://www.google.com/maps/place/Tula+de+Allende,+Hgo.,+Mexico",
    },
  ],
  Qt = () =>
    i("div", {
      className:
        "bg-primary-900/80 md:py-4 mx-auto flex-col gap-6 rounded-xl p-6",
      children: i("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
        children: [
          i("div", {
            className: "md:col-span-1 glass-effect rounded-xl p-6",
            children: [
              i("h3", {
                className: "text-xl font-bold text-accent-500 mb-4",
                children: "Details",
              }),
              i("table", {
                className: "font-mono text-accent-200 w-full text-left",
                children: i("tbody", {
                  children: Yt.map((t) =>
                    i(
                      "tr",
                      {
                        className: "border-b border-primary-700",
                        children: [
                          i("td", {
                            className: "py-3 text-accent-600",
                            children: t.label,
                          }),
                          i("td", {
                            className: "py-3",
                            children: t.isLink
                              ? i("a", {
                                  href: t.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "hover:underline hover:text-accent-400 transition-colors duration-200",
                                  children: t.value(),
                                })
                              : t.value(),
                          }),
                        ],
                      },
                      t.label
                    )
                  ),
                }),
              }),
            ],
          }),
          i("div", {
            className: "md:col-span-2",
            children: [
              i("h3", {
                className: "text-xl font-bold text-accent-500 mb-4",
                children: "About Me",
              }),
              i("div", {
                className: "space-y-4",
                children: [
                  i("p", {
                    className: "text-primary-100 text-lg leading-relaxed",
                    children:
                      "I am a British software engineer and language enthusiast living and working remotely from central Mexico.",
                  }),
                  i("p", {
                    className: "text-primary-200 text-lg leading-relaxed",
                    children:
                      "My formal education is in foreign languages and language teaching. As I was working in schools and universities in the UK, Japan, Vietnam, Colombia, and Mexico, I became frustrated with the repetitive and laborious administrative tasks that took away from the joy of teaching and learning. Thinking that there must be a better way lead me into the world of software development, first via VBA in Excel, then Google Apps Script, and beyond.",
                  }),
                  i("p", {
                    className: "text-primary-200 text-lg leading-relaxed",
                    children:
                      "I discovered a love for building software and an aptitude for problem solving which has driven my career ever since.",
                  }),
                  i("p", {
                    className: "text-primary-200 text-lg leading-relaxed",
                    children:
                      "During the pandemic, I found myself between jobs and stuck in a small apartment in Hanoi's strict lockdown. Making the most of unexpected circumstances, I began my career as a freelance developer, building API integrations for businesses all around the world.",
                  }),
                  i("p", {
                    className: "text-primary-200 text-lg leading-relaxed",
                    children:
                      "Pretty soon, it became clear that the demand for my skills wouldn't leave me much time for teaching languages anymore.",
                  }),
                  i("p", {
                    className: "text-primary-200 text-lg leading-relaxed",
                    children:
                      "I consider myself extremely lucky to have been able to turn what started off as a few fun projects into a long and successful career in software development.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
var S = ((t) => (
  (t.REACT = "React"),
  (t.NODEJS = "Node.js"),
  (t.POSTGRESQL = "PostgreSQL"),
  (t.DOCKER = "Docker"),
  (t.TYPESCRIPT = "TypeScript"),
  (t.JAVASCRIPT = "JavaScript"),
  (t.PYTHON = "Python"),
  (t.AWS = "AWS"),
  (t.GCP = "GCP"),
  (t.AZURE = "Azure"),
  (t.REDIS = "Redis"),
  (t.MONGODB = "MongoDB"),
  (t.EXPRESS = "Express"),
  (t.NGINX = "Nginx"),
  (t.VITE = "Vite"),
  (t.TAILWIND = "Tailwind CSS"),
  (t.SASS = "Sass"),
  (t.HTML = "HTML5"),
  (t.CSS = "CSS3"),
  (t.GIT = "Git"),
  (t.GITHUB = "GitHub"),
  (t.JEST = "Jest"),
  (t.CYPRESS = "Cypress"),
  (t.STORYBOOK = "Storybook"),
  (t.FIGMA = "Figma"),
  (t.CHAKRA = "Chakra UI"),
  (t.MATERIALUI = "Material UI"),
  (t.NEXTJS = "Next.js"),
  (t.VERCEL = "Vercel"),
  (t.NETLIFY = "Netlify"),
  (t.FIREBASE = "Firebase"),
  (t.GRAPHQL = "GraphQL"),
  (t.APOLLO = "Apollo"),
  (t.PRISMA = "Prisma"),
  (t.STRAPI = "Strapi"),
  (t.WORDPRESS = "WordPress"),
  (t.JIRA = "Jira"),
  (t.SLACK = "Slack"),
  (t.ZENDESK = "Zendesk"),
  (t.TRELLO = "Trello"),
  (t.BITBUCKET = "Bitbucket"),
  (t.DOCKERHUB = "Docker Hub"),
  (t.KUBERNETES = "Kubernetes"),
  (t.SENTRY = "Sentry"),
  (t.RUST = "Rust"),
  (t.GO = "Go"),
  (t.PHP = "PHP"),
  (t.RUBY = "Ruby"),
  (t.SWIFT = "Swift"),
  (t.JAVA = "Java"),
  t
))(S || {});
const Xt = [
    {
      name: "React",
      label: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      label: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PostgreSQL",
      label: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Docker",
      label: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "TypeScript",
      label: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Chakra UI",
      label: "Chakra UI",
      logo: "https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-icon.svg",
    },
    {
      name: "Python",
      label: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Express",
      label: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      name: "GraphQL",
      label: "GraphQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    {
      name: "AWS",
      label: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "Kubernetes",
      label: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "PHP",
      label: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "WordPress",
      label: "WordPress",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    },
    {
      name: "Jest",
      label: "Jest",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Next.js",
      label: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
  ],
  Zt = {
    name: "Miruni",
    url: "https://miruni.io",
    dates: "2022 - Present",
    description: `Miruni enables stakeholders to submit website edit requests directly from the site, making it easy to provide clear feedback with screenshots and context. AI-powered analysis generates actionable suggestions for each request, allowing updates to be applied instantly with a single click—no more endless email chains or delays.

As the sole developer, I designed, built, deployed, and maintained Miruni’s entire platform, including the WordPress plugin, backend services, and automation systems. The project required building and integrating multiple independent apps, ensuring seamless workflows and reliability for high-volume, enterprise-grade use.`,
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/davecook88/davecook88/refs/heads/main/public/screenshots/miruni/full-page-details.png",
        alt: "Smart edit details page",
        description:
          "When a Wordpress admin reviews an edit request, this screen displays the AI suggestions generated, a before and after comparison of the webpage, the chat element for discussion, and the option to approve or reject the changes.",
      },
      {
        src: "https://raw.githubusercontent.com/davecook88/davecook88/refs/heads/main/public/screenshots/miruni/full-page-summary.png",
        alt: "Smart edit list page",
        description:
          "This page provides an overview of all edit requests, showing the status of each request, the date submitted, and the ability to filter by status or date range. It allows administrators to quickly assess pending requests.",
      },
    ],
    technologies: [
      { name: S.REACT, category: "Frontend" },
      { name: S.NEXTJS, category: "Frontend" },
      { name: S.TYPESCRIPT, category: "Frontend" },
      { name: S.CHAKRA, category: "Frontend" },
      { name: S.NODEJS, category: "Backend" },
      { name: S.PYTHON, category: "Backend" },
      { name: S.EXPRESS, category: "Backend" },
      { name: S.POSTGRESQL, category: "Database" },
      { name: S.GRAPHQL, category: "API" },
      { name: S.AWS, category: "Cloud" },
      { name: S.KUBERNETES, category: "Cloud" },
      { name: S.PHP, category: "Backend" },
      { name: S.WORDPRESS, category: "CMS" },
      { name: S.JEST, category: "Testing" },
      { name: S.DOCKER, category: "DevOps" },
    ],
  },
  en = ({ open: t, onClose: e, children: n }) => {
    const r = V(null);
    return (
      E(() => {
        if (!t) return;
        const s = (o) => {
          o.key === "Escape" && e();
        };
        return (
          document.addEventListener("keydown", s),
          () => document.removeEventListener("keydown", s)
        );
      }, [t, e]),
      E(() => {
        if (!t) return;
        const s = document.body.style.overflow;
        return (
          (document.body.style.overflow = "hidden"),
          () => {
            document.body.style.overflow = s;
          }
        );
      }, [t]),
      t
        ? Ut(
            i("div", {
              ref: r,
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/70",
              onClick: e,
              children: n,
            }),
            document.body
          )
        : null
    );
  },
  Ye = ({
    src: t,
    alt: e = "Full page screenshot",
    description: n,
    active: r = !1,
  }) => {
    const [s, o] = N(!1),
      a = V(null),
      [l, d] = N(!0);
    return (
      E(() => {
        if (!r || !l || s) return;
        const c = a.current;
        if (!c) return;
        let f;
        const _ = () => {
          c &&
            c.scrollTop + c.clientHeight < c.scrollHeight &&
            ((c.scrollTop += 1), (f = requestAnimationFrame(_)));
        };
        return (f = requestAnimationFrame(_)), () => cancelAnimationFrame(f);
      }, [l, s, r]),
      i(L, {
        children: [
          i("div", {
            ref: a,
            className: `relative w-full max-w-md h-36 rounded-lg shadow-lg border border-gray-200 transition ${
              r
                ? "overflow-y-scroll cursor-pointer hover:scale-105"
                : "overflow-hidden grayscale opacity-60 cursor-not-allowed"
            }`,
            onClick: r ? () => o(!0) : void 0,
            onMouseEnter: () => r && d(!1),
            onMouseLeave: () => r && d(!0),
            title: r ? "Click to enlarge" : void 0,
            style: { scrollBehavior: "smooth" },
            children: [
              i("img", {
                src: t,
                alt: e,
                className: "w-full h-auto",
                draggable: !1,
              }),
              r &&
                i("div", {
                  className:
                    "sticky bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded w-max",
                  children: "Click to enlarge",
                }),
              !r &&
                i("div", {
                  className:
                    "absolute inset-0 bg-gray-900/30 rounded-lg pointer-events-none",
                }),
            ],
          }),
          i(en, {
            open: s && r,
            onClose: () => o(!1),
            children: i("div", {
              className:
                "rounded-lg shadow-xl max-h-[90vh] max-w-4xl w-full overflow-y-auto p-4 relative glass-effect flex flex-col",
              onClick: (c) => c.stopPropagation(),
              children: [
                i("div", {
                  className:
                    "sticky top-2 right-2 text-gray-400 hover:text-white text-2xl font-bold w-full flex justify-end z-20",
                  children: i("button", {
                    className: "cursor-pointer",
                    onClick: () => o(!1),
                    "aria-label": "Close",
                    children: "×",
                  }),
                }),
                n &&
                  i("div", {
                    className:
                      "my-4 text-gray-400 text-base border-b pb-3 bg-black z-10 top-0",
                    children: n,
                  }),
                i("img", {
                  src: t,
                  alt: e,
                  className: "w-full h-auto",
                  draggable: !1,
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  tn = ({ screenshots: t }) => {
    const [e, n] = N(0),
      r = t.length,
      s = 380,
      o = 75;
    return i("div", {
      className: "w-full flex flex-col items-center gap-8 relative",
      style: { minHeight: 240 },
      children: [
        i("div", {
          className: "relative flex items-center justify-center w-full",
          children: [
            t.length > 0 &&
              i("div", {
                className: "opacity-0",
                style: { width: s, maxWidth: "90vw" },
                "aria-hidden": "true",
                children: i(Ye, { ...t[e], active: !0 }),
              }),
            t.map((a, l) => {
              const d = l === e,
                u = l < e,
                h = l > e;
              let c = d ? 30 : h ? 20 + (r - l) : 10 + l,
                f = 0,
                _ = 1,
                p = "",
                x = 1,
                v = "0 8px 32px rgba(0,0,0,0.18)";
              return (
                u
                  ? ((f = -1 * (e - l) * o),
                    (_ = 0.92 + 0.02 * l),
                    (p = "blur-[2px]"),
                    (x = 0.7),
                    (v = "0 2px 8px rgba(0,0,0,0.10)"))
                  : h &&
                    ((f = (l - e) * o),
                    (_ = 0.92 + 0.02 * (r - l)),
                    (p = "blur-[2px]"),
                    (x = 0.7),
                    (v = "0 2px 8px rgba(0,0,0,0.10)")),
                i(
                  "div",
                  {
                    className: `absolute left-1/2 top-0 transition-all duration-300 ease-in-out w-full md:w-4/6 ${p}`,
                    style: {
                      zIndex: c,
                      transform: `translateX(-50%) translateX(${f}px) scale(${_})`,
                      opacity: x,
                      cursor: d ? "default" : "pointer",
                      boxShadow: v,
                      pointerEvents: "auto",
                      maxWidth: "90vw",
                    },
                    onClick: () => !d && n(l),
                    tabIndex: d ? -1 : 0,
                    "aria-label": d
                      ? `Active screenshot ${l + 1}`
                      : `Go to screenshot ${l + 1}`,
                    children: [
                      i(Ye, { ...a, active: d }),
                      !d &&
                        i("div", {
                          className:
                            "absolute inset-0 rounded-lg border-2 border-blue-300 opacity-0 hover:opacity-60 transition",
                        }),
                    ],
                  },
                  l
                )
              );
            }),
          ],
        }),
        i("div", {
          className: "flex gap-2 ",
          children: t.map((a, l) =>
            i(
              "button",
              {
                className: `w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  l === e
                    ? "bg-accent-500 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-blue-300"
                }`,
                onClick: () => n(l),
                "aria-label": `Go to screenshot ${l + 1}`,
              },
              l
            )
          ),
        }),
      ],
    });
  },
  nn = ({ project: t }) => {
    const {
        name: e,
        dates: n,
        description: r,
        screenshots: s,
        url: o,
        technologies: a,
      } = t,
      l = a.reduce((d, u) => {
        const h = u.category || "Other";
        return d[h] || (d[h] = []), d[h].push(u), d;
      }, {});
    return i("div", {
      className: "project-summary glass-effect rounded-xl shadow-lg p-6 mb-8",
      children: [
        i("div", {
          className:
            "flex flex-col md:flex-row justify-between items-start md:items-center mb-4",
          children: [
            i("a", {
              href: o,
              target: "_blank",
              rel: "noopener noreferrer",
              children: i("h2", {
                className:
                  "text-2xl font-bold hover:text-accent-400 cursor-pointer transition-colors",
                children: e,
              }),
            }),
            i("span", {
              className:
                "text-sm text-accent-500 bg-accent-900/30 px-3 py-1 rounded-full mt-2 md:mt-0",
              children: n,
            }),
          ],
        }),
        i("div", {
          className: "mb-6",
          children: r
            .split(
              `

`
            )
            .map((d, u) =>
              i(
                "p",
                {
                  className: "mb-4 text-primary-200 leading-relaxed",
                  children: d,
                },
                u
              )
            ),
        }),
        i("div", {
          className: "mb-8",
          children: [
            i("h3", {
              className: "text-lg font-semibold text-accent-500 mb-3",
              children: "Screenshots",
            }),
            i("div", {
              className: "screenshots",
              children: i(tn, { screenshots: s }),
            }),
          ],
        }),
        i("div", {
          className: "technologies",
          children: [
            i("h3", {
              className: "text-lg font-semibold text-accent-500 mb-3",
              children: "Technologies",
            }),
            i("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
              children: Object.entries(l).map(([d, u]) =>
                i(
                  "div",
                  {
                    className:
                      "technology-category glass-effect rounded-lg p-4",
                    children: [
                      i("h4", {
                        className:
                          "text-md font-semibold mb-3 text-center text-accent-400 border-b border-primary-700 pb-2",
                        children: d,
                      }),
                      i("ul", {
                        className: "grid grid-cols-3 gap-3",
                        children: u.map((h, c) => {
                          const f = Xt.find((_) => _.name === h.name);
                          return i(
                            "li",
                            {
                              className:
                                "flex flex-col items-center justify-center text-xs",
                              title: f ? f.label : h.name,
                              children: [
                                f && f.logo
                                  ? i("img", {
                                      src: f.logo,
                                      alt: f.label,
                                      className:
                                        "w-10 h-10 mb-1 object-contain",
                                    })
                                  : i("div", {
                                      className:
                                        "w-10 h-10 mb-1 rounded-full bg-primary-700 flex items-center justify-center",
                                      children: i("span", {
                                        className: "text-xs",
                                        children: h.name.charAt(0),
                                      }),
                                    }),
                                i("span", {
                                  className:
                                    "truncate text-center w-full text-primary-300",
                                  children: f ? f.label : h.name,
                                }),
                              ],
                            },
                            c
                          );
                        }),
                      }),
                    ],
                  },
                  d
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  rn = [Zt],
  sn = () =>
    i("section", { children: rn.map((t) => i(nn, { project: t }, t.name)) }),
  F = ({ title: t, children: e }) =>
    i("section", {
      className: "mb-12",
      children: [
        i("h2", {
          className:
            "text-2xl md:text-3xl font-bold text-accent-500 pb-2 mb-6 relative inline-block",
          children: [
            t,
            i("span", {
              className:
                "absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 rounded-full",
            }),
          ],
        }),
        e,
      ],
    }),
  te = ({
    title: t,
    company: e,
    period: n,
    location: r,
    description: s,
    achievements: o,
  }) =>
    i("div", {
      className: "glass-effect rounded-xl p-6 mb-6",
      children: [
        i("div", {
          className:
            "flex flex-col md:flex-row md:justify-between md:items-baseline mb-2",
          children: [
            i("h3", {
              className: "text-xl font-bold text-primary-100",
              children: t,
            }),
            i("div", {
              className:
                "flex flex-col md:flex-row md:items-baseline md:space-x-4",
              children: [
                i("p", {
                  className: "text-sm text-accent-500 font-medium",
                  children: n,
                }),
                i("p", { className: "text-sm text-accent-600", children: r }),
              ],
            }),
          ],
        }),
        i("h4", {
          className: "text-lg font-semibold text-accent-400 mb-3",
          children: e,
        }),
        i("p", {
          className: "mb-4 text-primary-300 leading-relaxed",
          children: s,
        }),
        i("div", {
          children: [
            i("h5", {
              className: "font-semibold text-accent-500 mb-2",
              children: "Key Achievements:",
            }),
            i("ul", {
              className:
                "list-disc list-inside space-y-2 text-primary-200 ml-4",
              children: o.map((a, l) =>
                i("li", { className: "pl-2", children: a }, l)
              ),
            }),
          ],
        }),
      ],
    }),
  on = ({ children: t }) =>
    i("div", {
      className:
        "bg-accent-900/40 text-accent-300 text-sm font-medium px-3 py-1 rounded-full hover:bg-accent-800 transition-colors duration-200",
      children: t,
    }),
  an = {
    "Back End": [
      "Python",
      "Flask",
      "FastAPI",
      "Strawberry (GraphQL)",
      "SQLModel (SQLAlchemy Wrapper)",
      "Node.JS",
      "Express",
      "Apollo",
      "Postgraphile",
    ],
    "Front End": [
      "Typescript",
      "NextJS",
      "React",
      "Apollo",
      "Redux",
      "Zustand",
      "Tailwind-UI",
      "Material-UI",
      "ChakraUI",
    ],
    Architecture: [
      "Apollo",
      "PostgresQL",
      "DynamoDB",
      "Firebase",
      "Google Apps Script",
      "Chrome Extensions",
      "Slack Apps",
      "NX (Monorepo)",
    ],
    DevOps: [
      "GCP",
      "AWS",
      "Heroku",
      "Github Actions",
      "Helm",
      "Kubernetes",
      "Terraform",
    ],
  },
  ln = () =>
    i("div", {
      className: "w-full h-full p-4 md:p-8 text-primary-200",
      children: [
        i("header", {
          className: "text-center mb-12",
          children: [
            i("h1", {
              className:
                "text-4xl md:text-5xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-300 mb-2 uppercase tracking-wide",
              children: "Dave Cook",
            }),
            i("p", {
              className:
                "text-xl md:text-2xl text-primary-100 font-mono font-semibold",
              children: "Senior Full Stack Engineer",
            }),
            i("div", {
              className:
                "flex justify-center gap-4 mt-4 text-sm text-accent-500",
              children: [
                i("span", {
                  className: "flex items-center",
                  children: [
                    i("svg", {
                      className: "w-4 h-4 mr-1",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: i("path", {
                        fillRule: "evenodd",
                        d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                        clipRule: "evenodd",
                      }),
                    }),
                    "Tula de Allende, MX",
                  ],
                }),
                i("span", {
                  className: "flex items-center",
                  children: [
                    i("svg", {
                      className: "w-4 h-4 mr-1",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: [
                        i("path", {
                          d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z",
                        }),
                        i("path", {
                          d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
                        }),
                      ],
                    }),
                    "{EMAIL_ADDRESS}",
                  ],
                }),
              ],
            }),
          ],
        }),
        i(F, {
          title: "Skills",
          children: i("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: Object.entries(an).map(([t, e]) =>
              i(
                "div",
                {
                  className: "glass-effect rounded-xl p-5",
                  children: [
                    i("h3", {
                      className:
                        "font-bold text-lg text-accent-500 mb-4 pb-2 border-b border-primary-700",
                      children: t,
                    }),
                    i("div", {
                      className: "flex flex-wrap gap-2",
                      children: e.map((n) => i(on, { children: n }, n)),
                    }),
                  ],
                },
                t
              )
            ),
          }),
        }),
        i(F, {
          title: "Software Development Experience",
          children: i("div", {
            className: "space-y-8",
            children: [
              i(te, {
                title: "Senior Fullstack Engineer",
                company: "Miruni.io",
                period: "Jun 2023 - Present",
                location: "Remote",
                description:
                  "Principal full-stack developer in a small team of a productivity SaaS startup. In a team of varying size but mainly limited to 2-3 developers, I was the only engineer responsible for managing every aspect of the application.",
                achievements: [
                  "Designed and implemented integrations with Zapier, Slack, and Jira.",
                  "Managed graphql backend using the Postgraphile framework, requiring business logic to be managed at the database level (Postgres) using stored procedures and row level security for implementing a granular permissions system.",
                  "Ensured efficiency at scale by analyzing Postgres query plans and identifying opportunities for improvement.",
                  "Implemented detailed event tracking systems using Newrelic and Posthog to gain insight on the user experience and to identify pain points.",
                  "Managed CI/CD pipelines using Github Actions, Terraform, and Helm to ensure smooth deployment to AWS AppRunner, Lambda, and EKS Kubernetes depending on the development environment.",
                  "Improved page load times dramatically by investigating client side React rendering, identifying inefficiencies and taking advantage of dynamic and lazy loading to improve user experience.",
                ],
              }),
              i(te, {
                title: "Senior Fullstack Engineer",
                company: "Turn Technologies",
                period: "2022 - Jun 2023",
                location: "Remote",
                description:
                  "Following excellent feedback in my previous position, I was invited to act as the sole-backend engineer in creating the new, AI-powered product, Advise. As the product grew, I was the principal backend engineer in a small team.",
                achievements: [
                  "Developed framework for moving to backend microservice infrastructure within upcoming products. My template app is used by at least 3 products within Turn Technologies.",
                  "Created CI/CD flow using Github actions and Heroku.",
                  "Ensured 80%+ test coverage across repos using Jest and Pytest frameworks.",
                  "Created and maintained backend service which received and stored data generated by the Data Science team and served it to the front end via graphQL.",
                  "Designed and implemented a centralized authentication system which processed Auth0 validation and could be used by various products.",
                  "Instigated transition to Typescript in front-end repositories.",
                  "Synchronized with DevOps team on transferring infrastructure from Heroku to AWS EC2 instances managed by Jenkins.",
                  "Implemented Figma designs in React front end, including Google Maps API integration with custom datalayer overlay.",
                ],
              }),
              i(te, {
                title: "Senior Engineering Support",
                company: "Turn Technologies",
                period: "2021 - mid 2022",
                location: "Remote",
                description:
                  "Provided timely support and hot fixes for bugs in production applications.",
                achievements: [
                  "Added functionality to internal admin apps to improve support efficiency (Flask-Admin).",
                  "Created efficiency-boosting tools for support staff (Google Apps Script).",
                  "Main developer for Turn integrations with Lever & Rippling ATS external APIs.",
                ],
              }),
              i(te, {
                title: "Freelance Integrations Developer",
                company: "Independent",
                period: "2018 - 2021",
                location: "Remote",
                description:
                  "Successful freelance business as a freelance developer and automations specialist, acting as a long-term on-call resource and consultant to international businesses. Solving business needs for technical and non-technical clients using appropriate technologies and tools for the task at hand.",
                achievements: [
                  "Created Zapier custom apps (Node.js) for Airtable, Monday.com, Basecamp, TrackHS, ClickUp, Dropbox, Zoom, Squarespace, Smartsheets, Shopify, among many others.",
                  "Custom Google Chrome extensions for increasing productivity (eg custom buttons to make changes in Copper CRM from GMail's UI).",
                  "Independently developed booking app for contracting firm using Firebase Functions as a backend, and a react frontend and integrations with Google Calendar and Google forms.",
                ],
              }),
            ],
          }),
        }),
        i(F, {
          title: "Other Work Experience",
          children: i("div", {
            className: "space-y-4",
            children: [
              i("div", {
                className: "glass-effect rounded-xl p-5",
                children: [
                  i("h3", {
                    className: "font-bold text-lg text-accent-500",
                    children: "Head of ESL Department",
                  }),
                  i("p", {
                    className: "text-primary-300",
                    children: "Vinschool, Hanoi, Vietnam (2018-2019)",
                  }),
                ],
              }),
              i("div", {
                className: "glass-effect rounded-xl p-5",
                children: [
                  i("h3", {
                    className: "font-bold text-lg text-accent-500",
                    children: "English Teacher",
                  }),
                  i("p", {
                    className: "text-primary-300",
                    children: "Colegio Álamos, Querétaro, Mexico (2016-2018)",
                  }),
                ],
              }),
              i("div", {
                className: "glass-effect rounded-xl p-5",
                children: [
                  i("h3", {
                    className: "font-bold text-lg text-accent-500",
                    children: "ALT Teacher",
                  }),
                  i("p", {
                    className: "text-primary-300",
                    children: "Kagoshima, Japan (2015-2016)",
                  }),
                ],
              }),
            ],
          }),
        }),
        i("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8",
          children: [
            i(F, {
              title: "Education",
              children: i("div", {
                className: "space-y-4",
                children: [
                  i("div", {
                    className: "glass-effect rounded-xl p-5",
                    children: [
                      i("h3", {
                        className: "font-bold text-lg text-accent-500",
                        children: "MA TESOL",
                      }),
                      i("p", {
                        className: "text-primary-300",
                        children: "University of Birmingham",
                      }),
                    ],
                  }),
                  i("div", {
                    className: "glass-effect rounded-xl p-5",
                    children: [
                      i("h3", {
                        className: "font-bold text-lg text-accent-500",
                        children: "BA European Languages",
                      }),
                      i("p", {
                        className: "text-primary-300",
                        children: "University of Aberystwyth",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            i(F, {
              title: "Languages",
              children: i("div", {
                className: "space-y-4",
                children: [
                  i("div", {
                    className: "glass-effect rounded-xl p-5",
                    children: [
                      i("h3", {
                        className: "font-bold text-lg text-accent-500",
                        children: "English",
                      }),
                      i("p", {
                        className: "text-primary-300",
                        children: "Native Speaker",
                      }),
                    ],
                  }),
                  i("div", {
                    className: "glass-effect rounded-xl p-5",
                    children: [
                      i("h3", {
                        className: "font-bold text-lg text-accent-500",
                        children: "Spanish",
                      }),
                      i("p", {
                        className: "text-primary-300",
                        children: "Fluent",
                      }),
                    ],
                  }),
                  i("div", {
                    className: "glass-effect rounded-xl p-5",
                    children: [
                      i("h3", {
                        className: "font-bold text-lg text-accent-500",
                        children: "French",
                      }),
                      i("p", {
                        className: "text-primary-300",
                        children: "Intermediate",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  cn = "https://formspree.io/f/xjvjlqeg",
  yt = (t) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t).toLowerCase()),
  dn = (t, e, n) => {
    const r = {};
    return (
      t.trim() || (r.name = "Name is required."),
      e.trim()
        ? yt(e.trim()) || (r.email = "Invalid email address.")
        : (r.email = "Email is required."),
      n.trim() || (r.message = "Message is required."),
      Object.keys(r).length > 0 ? r : null
    );
  },
  un = () => {
    const [t, e] = N({}),
      [n, r] = N(!1),
      s = V(null),
      o = (l) => {
        const { name: d, value: u } = l.target;
        let h = "";
        d === "name" && !u.trim() && (h = "Name is required."),
          d === "email" &&
            (u.trim()
              ? yt(u.trim()) || (h = "Invalid email address.")
              : (h = "Email is required.")),
          d === "message" && !u.trim() && (h = "Message is required."),
          e((c) => ({ ...c, [d]: h }));
      };
    return i("section", {
      className: "h-full",
      children: i("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: [
          i("div", {
            className: "glass-effect rounded-xl p-6",
            children: [
              i("h2", {
                className: "text-2xl font-bold text-accent-500 mb-4",
                children: "Get in Touch",
              }),
              i("p", {
                className: "text-primary-200 mb-6",
                children:
                  "Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form or through my social media profiles.",
              }),
              i("div", {
                className: "space-y-4",
                children: [
                  i("div", {
                    className: "flex items-start",
                    children: [
                      i("svg", {
                        className: "w-6 h-6 text-accent-500 mr-3 mt-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: i("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                        }),
                      }),
                      i("div", {
                        children: [
                          i("h3", {
                            className: "font-semibold text-accent-400",
                            children: "Email",
                          }),
                          i("p", {
                            className: "text-primary-200",
                            children: "{EMAIL_ADDRESS}",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i("div", {
                    className: "flex items-start",
                    children: [
                      i("svg", {
                        className: "w-6 h-6 text-accent-500 mr-3 mt-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [
                          i("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                          }),
                          i("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                          }),
                        ],
                      }),
                      i("div", {
                        children: [
                          i("h3", {
                            className: "font-semibold text-accent-400",
                            children: "Location",
                          }),
                          i("p", {
                            className: "text-primary-200",
                            children: "Tula de Allende, Mexico",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: "glass-effect rounded-xl p-6",
            children: [
              i("h2", {
                className: "text-2xl font-bold text-accent-500 mb-4",
                children: "Send a Message",
              }),
              i("form", {
                className: "",
                onSubmit: async (l) => {
                  var _, p, x;
                  l.preventDefault();
                  const d = l.currentTarget,
                    u =
                      (_ = d.elements.namedItem("name")) == null
                        ? void 0
                        : _.value.trim(),
                    h =
                      (p = d.elements.namedItem("email")) == null
                        ? void 0
                        : p.value.trim(),
                    c =
                      (x = d.elements.namedItem("message")) == null
                        ? void 0
                        : x.value.trim(),
                    f = dn(u, h, c) || {};
                  if ((e(f), !Object.values(f).some(Boolean))) {
                    r(!0);
                    try {
                      (
                        await fetch(cn, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            name: u,
                            email: h,
                            message: c,
                          }),
                        })
                      ).ok
                        ? (alert("Message sent successfully!"),
                          d.reset(),
                          e({}))
                        : alert("Failed to send message. Please try again.");
                    } catch {
                      alert("Failed to send message. Please try again.");
                    } finally {
                      r(!1);
                    }
                  }
                },
                noValidate: !0,
                ref: s,
                children: [
                  i("div", {
                    className: "mb-4",
                    children: [
                      i("input", {
                        type: "text",
                        name: "name",
                        className: `w-full p-3 rounded-lg bg-primary-800/50 border ${
                          t.name ? "border-error-500" : "border-primary-700"
                        } focus:outline-none focus:ring-2 focus:ring-accent-500`,
                        placeholder: "Your Name",
                        required: !0,
                        onBlur: o,
                      }),
                      t.name &&
                        i("div", {
                          className: "text-error-500 text-sm mt-1",
                          children: t.name,
                        }),
                    ],
                  }),
                  i("div", {
                    className: "mb-4",
                    children: [
                      i("input", {
                        type: "email",
                        name: "email",
                        className: `w-full p-3 rounded-lg bg-primary-800/50 border ${
                          t.email ? "border-error-500" : "border-primary-700"
                        } focus:outline-none focus:ring-2 focus:ring-accent-500`,
                        placeholder: "Your Email",
                        required: !0,
                        onBlur: o,
                      }),
                      t.email &&
                        i("div", {
                          className: "text-error-500 text-sm mt-1",
                          children: t.email,
                        }),
                    ],
                  }),
                  i("div", {
                    className: "mb-4",
                    children: [
                      i("textarea", {
                        name: "message",
                        className: `w-full p-3 rounded-lg bg-primary-800/50 border ${
                          t.message ? "border-error-500" : "border-primary-700"
                        } focus:outline-none focus:ring-2 focus:ring-accent-500`,
                        rows: 5,
                        placeholder: "Your Message",
                        required: !0,
                        onBlur: o,
                      }),
                      t.message &&
                        i("div", {
                          className: "text-error-500 text-sm mt-1",
                          children: t.message,
                        }),
                    ],
                  }),
                  i("div", {
                    className: "w-full flex justify-end",
                    children: i("button", {
                      type: "submit",
                      disabled: n || Object.keys(t).length > 0,
                      className: `px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        n || Object.keys(t).length > 0
                          ? "bg-primary-700 text-primary-400 cursor-not-allowed"
                          : "bg-accent-600 text-white hover:bg-accent-500 shimmer-hover"
                      }`,
                      children: n ? "Sending..." : "Send Message",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  hn = () => {
    const [, t] = be((r) => r + 1, 0),
      e = (r) => {
        Kt(U.HOME_VIEW, r), t(0);
      };
    switch (
      (E(() => {
        const r = () => {
          t(0);
        };
        return (
          window.addEventListener("popstate", r),
          () => {
            window.removeEventListener("popstate", r);
          }
        );
      }, []),
      Se(U.HOME_VIEW) || k.BUTTONS)
    ) {
      case k.BUTTONS:
        return i(Jt, { redirect: e });
      case k.ABOUT_ME:
        return i(ee, { onBackClick: () => e(k.BUTTONS), children: i(Qt, {}) });
      case k.PROJECTS:
        return i(ee, { onBackClick: () => e(k.BUTTONS), children: i(sn, {}) });
      case k.RESUME:
        return i(ee, { onBackClick: () => e(k.BUTTONS), children: i(ln, {}) });
      case k.CONTACT:
        return i(ee, { onBackClick: () => e(k.BUTTONS), children: i(un, {}) });
    }
  },
  fn = () =>
    i(L, {
      children: [
        i("a", {
          href: "mailto:dave@mamalon.dev",
          class: "hover:text-white transition",
          "aria-label": "Email",
          target: "_blank",
          rel: "noopener noreferrer",
          children: i("svg", {
            width: "22",
            height: "22",
            fill: "none",
            viewBox: "0 0 22 22",
            children: i("path", {
              d: "M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.6 6.2L19.6 6H4.4Zm15.6 2.1-7.4 6.05a1 1 0 0 1-1.2 0L4 8.1V17.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V8.1Z",
              fill: "currentColor",
            }),
          }),
        }),
        i("a", {
          href: "https://www.linkedin.com/in/david-cook-a1549ba2/",
          class: "hover:text-white transition",
          "aria-label": "LinkedIn",
          target: "_blank",
          rel: "noopener noreferrer",
          children: i("svg", {
            width: "19",
            height: "19",
            fill: "none",
            viewBox: "0 0 382 382",
            children: i("path", {
              d: `M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z`,
              fill: "currentColor",
            }),
          }),
        }),
        i("a", {
          href: "https://github.com/davecook88",
          class: "hover:text-white transition",
          "aria-label": "GitHub",
          target: "_blank",
          rel: "noopener noreferrer",
          children: i("svg", {
            width: "22",
            height: "22",
            fill: "none",
            viewBox: "0 0 24 24",
            children: i("path", {
              d: "M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z",
              fill: "currentColor",
            }),
          }),
        }),
      ],
    }),
  _n = ({ className: t = "" }) => {
    const n = (Se(U.HOME_VIEW) || k.BUTTONS) !== k.BUTTONS;
    return i("div", {
      className:
        "w-max font-sans flex items-center transition-all duration-300 ease-in-out h-full",
      children: i("div", {
        className: "flex flex-col h-full text-white",
        children: [
          i("div", {
            className: "text-sans text-left animate-fade-in flex-grow",
            children: i("div", {
              children: "Hi I'm Dave Cook and I'm a full-stack developer.",
            }),
          }),
          !n &&
            i("div", {
              className: "w-full p-4 flex items-center justify-between mt-auto",
              children: i(fn, {}),
            }),
        ],
      }),
    });
  };
function mn() {
  const t = Se(U.HOME_VIEW),
    [e, n] = N(!1),
    [r, s] = N(!1);
  return (
    E(() => {
      const o = () => {
        const l = !!t && t !== k.BUTTONS;
        l !== e &&
          (s(!0),
          setTimeout(() => {
            n(l), s(!1);
          }, 300));
      };
      o();
      const a = () => {
        o();
      };
      return (
        window.addEventListener("popstate", a),
        () => {
          window.removeEventListener("popstate", a);
        }
      );
    }, [t, e]),
    i("div", {
      class: "home w-full min-h-screen transition-all duration-300 ease-in-out",
      children: i("div", {
        class: `flex flex-wrap w-full text-gray-400 transition-all duration-300 ease-in-out ${
          e ? "md:h-min" : "h-screen md:h-screen"
        }`,
        children: [
          i("div", {
            class:
              "md:basis-2/6 min-w-0 md:w-1/3 tracking-tight p-4 transition-all duration-300 ease-in-out",
            children: i(_n, {}),
          }),
          i("div", {
            class: `${
              e
                ? "w-full min-w-0 md:w-full md:h-auto"
                : "w-full min-w-0 md:w-2/3 md:h-full flex items-center"
            } transition-all duration-300 ease-in-out ${
              r ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`,
            children: !r && i(hn, {}),
          }),
        ],
      }),
    })
  );
}
class pn {
  constructor(e, n) {
    (this.nodes = []),
      (this.energyParticles = []),
      (this.mouse = { x: 0, y: 0 }),
      (this.isRunning = !0),
      (this.time = 0),
      (this.canvas = e),
      (this.ctx = e.getContext("2d")),
      (this.config = n),
      this.init();
  }
  init() {
    this.resize(), this.createNodes(), this.bindEvents(), this.animate();
  }
  resize() {
    const { width: e, height: n } = this.canvas.getBoundingClientRect();
    (this.canvas.width = e), (this.canvas.height = n);
  }
  createNodes() {
    this.nodes = [];
    const e = ["hub", "processor", "sensor", "memory"];
    for (let n = 0; n < this.config.nodeCount; n++) {
      const r = e[Math.floor(Math.random() * e.length)],
        s = Math.floor(Math.random() * this.config.colors.clusters.length);
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.config.nodeSpeed,
        vy: (Math.random() - 0.5) * this.config.nodeSpeed,
        size: this.config.nodeSize + Math.random() * 2,
        connections: [],
        type: r,
        energy: Math.random() * 100,
        age: 0,
        cluster: s,
        pulsePhase: Math.random() * Math.PI * 2,
        growthCooldown: 0,
      });
    }
  }
  bindEvents() {
    (this.handleResize = () => {
      this.resize(), this.createNodes();
    }),
      (this.handleMouseMove = (e) => {
        const n = this.canvas.getBoundingClientRect();
        (this.mouse.x = e.clientX - n.left), (this.mouse.y = e.clientY - n.top);
      }),
      window.addEventListener("resize", this.handleResize),
      this.canvas.addEventListener("mousemove", this.handleMouseMove);
  }
  updateNodes() {
    (this.time += 0.016),
      this.nodes.forEach((e) => {
        (e.age += 0.016),
          (e.pulsePhase += 0.05),
          (e.growthCooldown = Math.max(0, e.growthCooldown - 0.016));
        const n = this.getClusterCenter(e.cluster);
        Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)) > 100 &&
          ((e.vx += (n.x - e.x) * 1e-4), (e.vy += (n.y - e.y) * 1e-4)),
          (e.x += e.vx),
          (e.y += e.vy),
          (e.x < 0 || e.x > this.canvas.width) &&
            ((e.vx *= -0.8),
            (e.x = Math.max(0, Math.min(this.canvas.width, e.x))),
            (e.energy = Math.max(0, e.energy - 5))),
          (e.y < 0 || e.y > this.canvas.height) &&
            ((e.vy *= -0.8),
            (e.y = Math.max(0, Math.min(this.canvas.height, e.y))),
            (e.energy = Math.max(0, e.energy - 5))),
          e.type === "hub" &&
            e.energy > 80 &&
            e.growthCooldown <= 0 &&
            this.nodes.length < this.config.maxNodes &&
            Math.random() < this.config.growthRate &&
            this.spawnNewNode(e),
          (e.connections = []);
      });
  }
  getClusterCenter(e) {
    const n = this.nodes.filter((o) => o.cluster === e);
    if (n.length === 0)
      return { x: this.canvas.width / 2, y: this.canvas.height / 2 };
    const r = n.reduce((o, a) => o + a.x, 0) / n.length,
      s = n.reduce((o, a) => o + a.y, 0) / n.length;
    return { x: r, y: s };
  }
  spawnNewNode(e) {
    const n = Math.random() * Math.PI * 2,
      r = 50 + Math.random() * 30,
      s = ["processor", "sensor", "memory"],
      o = {
        x: e.x + Math.cos(n) * r,
        y: e.y + Math.sin(n) * r,
        vx: (Math.random() - 0.5) * this.config.nodeSpeed * 0.5,
        vy: (Math.random() - 0.5) * this.config.nodeSpeed * 0.5,
        size: this.config.nodeSize * 0.8,
        connections: [],
        type: s[Math.floor(Math.random() * s.length)],
        energy: 30,
        age: 0,
        cluster: e.cluster,
        pulsePhase: Math.random() * Math.PI * 2,
        growthCooldown: 0,
      };
    (o.x = Math.max(20, Math.min(this.canvas.width - 20, o.x))),
      (o.y = Math.max(20, Math.min(this.canvas.height - 20, o.y))),
      this.nodes.push(o),
      (e.energy -= 30),
      (e.growthCooldown = 5);
  }
  findConnections() {
    for (let e = 0; e < this.nodes.length; e++) {
      const n = this.nodes[e];
      for (let r = e + 1; r < this.nodes.length; r++) {
        const s = this.nodes[r],
          o = Math.sqrt(Math.pow(n.x - s.x, 2) + Math.pow(n.y - s.y, 2));
        if (
          o < this.config.connectionDistance &&
          n.connections.length < this.config.maxConnections &&
          s.connections.length < this.config.maxConnections
        ) {
          const a = 1 - o / this.config.connectionDistance,
            l = Math.random() * a;
          n.connections.push({
            node: s,
            distance: o,
            strength: a,
            energyFlow: l,
          }),
            s.connections.push({
              node: n,
              distance: o,
              strength: a,
              energyFlow: l,
            });
        }
      }
    }
  }
  updateEnergyParticles() {
    this.energyParticles.length < this.config.energyParticleCount &&
      this.nodes.forEach((e) => {
        if (e.connections.length > 0 && Math.random() < 0.02) {
          const n =
            e.connections[Math.floor(Math.random() * e.connections.length)];
          this.energyParticles.push({
            x: e.x,
            y: e.y,
            targetX: n.node.x,
            targetY: n.node.y,
            progress: 0,
            connection: n,
            speed: 0.02 + Math.random() * 0.03,
            size: 1 + Math.random() * 2,
          });
        }
      }),
      (this.energyParticles = this.energyParticles.filter(
        (e) => (
          (e.progress += e.speed),
          e.progress >= 1
            ? ((e.connection.node.energy = Math.min(
                100,
                e.connection.node.energy + 2
              )),
              !1)
            : ((e.x = e.x + (e.targetX - e.x) * e.speed),
              (e.y = e.y + (e.targetY - e.y) * e.speed),
              !0)
        )
      ));
  }
  drawConnections() {
    this.nodes.forEach((e) => {
      e.connections.forEach((n) => {
        const r = this.config.connectionOpacity * n.strength,
          s = Math.sin(this.time * 2 + n.energyFlow * 10) * 0.3 + 0.7,
          o = 1 + n.strength * 2 * s;
        if (
          Math.min(
            Math.sqrt(
              Math.pow(this.mouse.x - e.x, 2) + Math.pow(this.mouse.y - e.y, 2)
            ),
            Math.sqrt(
              Math.pow(this.mouse.x - n.node.x, 2) +
                Math.pow(this.mouse.y - n.node.y, 2)
            )
          ) < this.config.mouseRadius
        )
          (this.ctx.strokeStyle = this.config.colors.highlight),
            (this.ctx.globalAlpha = r * 1.5),
            (this.ctx.lineWidth = o * 1.5);
        else {
          const d =
            this.config.colors.clusters[e.cluster] ||
            this.config.colors.connections;
          (this.ctx.strokeStyle = d),
            (this.ctx.globalAlpha = r * s),
            (this.ctx.lineWidth = o);
        }
        const l = this.ctx.createLinearGradient(e.x, e.y, n.node.x, n.node.y);
        l.addColorStop(0, this.ctx.strokeStyle),
          l.addColorStop(0.5, this.config.colors.energy),
          l.addColorStop(1, this.ctx.strokeStyle),
          (this.ctx.strokeStyle = l),
          this.ctx.beginPath(),
          this.ctx.moveTo(e.x, e.y),
          this.ctx.lineTo(n.node.x, n.node.y),
          this.ctx.stroke();
      });
    }),
      (this.ctx.globalAlpha = 1),
      (this.ctx.lineWidth = 1);
  }
  drawNodes() {
    this.nodes.forEach((e) => {
      const n = Math.sqrt(
        Math.pow(this.mouse.x - e.x, 2) + Math.pow(this.mouse.y - e.y, 2)
      );
      let r = e.size,
        s = this.config.colors.clusters[e.cluster] || this.config.colors.nodes,
        o = this.config.nodeOpacity;
      n < this.config.mouseRadius &&
        ((r *= 1.5), (s = this.config.colors.highlight), (o = 1));
      const a = Math.sin(e.pulsePhase + this.time * 3) * 0.2 + 0.8,
        l = e.energy / 100;
      switch (e.type) {
        case "hub":
          (r *= 1.4),
            (this.ctx.strokeStyle = s),
            (this.ctx.globalAlpha = o * 0.5),
            (this.ctx.lineWidth = 2),
            this.ctx.beginPath(),
            this.ctx.arc(e.x, e.y, r * 1.5 * a, 0, Math.PI * 2),
            this.ctx.stroke();
          break;
        case "processor":
          (this.ctx.fillStyle = s), (this.ctx.globalAlpha = o * l);
          const d = r * a;
          this.ctx.fillRect(e.x - d, e.y - d, d * 2, d * 2);
          const u = this.ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, r);
          u.addColorStop(0, this.config.colors.energy),
            u.addColorStop(1, "transparent"),
            (this.ctx.fillStyle = u),
            (this.ctx.globalAlpha = o * 0.3),
            this.ctx.beginPath(),
            this.ctx.arc(e.x, e.y, r * 2, 0, Math.PI * 2),
            this.ctx.fill();
          return;
        case "sensor":
          (this.ctx.fillStyle = s),
            (this.ctx.globalAlpha = o * l),
            this.ctx.beginPath(),
            this.ctx.moveTo(e.x, e.y - r * a),
            this.ctx.lineTo(e.x - r * a * 0.866, e.y + r * a * 0.5),
            this.ctx.lineTo(e.x + r * a * 0.866, e.y + r * a * 0.5),
            this.ctx.closePath(),
            this.ctx.fill();
          return;
        case "memory":
          (this.ctx.fillStyle = s),
            (this.ctx.globalAlpha = o * l),
            this.ctx.beginPath();
          for (let h = 0; h < 6; h++) {
            const c = (h * Math.PI) / 3,
              f = e.x + Math.cos(c) * r * a,
              _ = e.y + Math.sin(c) * r * a;
            h === 0 ? this.ctx.moveTo(f, _) : this.ctx.lineTo(f, _);
          }
          this.ctx.closePath(), this.ctx.fill();
          return;
      }
      if (
        ((this.ctx.fillStyle = s),
        (this.ctx.globalAlpha = o * l),
        this.ctx.beginPath(),
        this.ctx.arc(e.x, e.y, r * a, 0, Math.PI * 2),
        this.ctx.fill(),
        e.energy > 50)
      ) {
        const d = this.ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, r * 1.5);
        d.addColorStop(0, this.config.colors.energy),
          d.addColorStop(1, "transparent"),
          (this.ctx.fillStyle = d),
          (this.ctx.globalAlpha = (e.energy / 100) * 0.3),
          this.ctx.beginPath(),
          this.ctx.arc(e.x, e.y, r * 1.5, 0, Math.PI * 2),
          this.ctx.fill();
      }
    }),
      (this.ctx.globalAlpha = 1);
  }
  drawEnergyParticles() {
    this.energyParticles.forEach((e) => {
      const n = 1 - e.progress;
      (this.ctx.fillStyle = this.config.colors.energy),
        (this.ctx.globalAlpha = n * 0.8),
        this.ctx.beginPath(),
        this.ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2),
        this.ctx.fill();
    }),
      (this.ctx.globalAlpha = 1);
  }
  animate() {
    this.isRunning &&
      (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
      this.updateNodes(),
      this.findConnections(),
      this.updateEnergyParticles(),
      this.drawConnections(),
      this.drawNodes(),
      this.drawEnergyParticles(),
      requestAnimationFrame(() => this.animate()));
  }
  destroy() {
    (this.isRunning = !1),
      window.removeEventListener("resize", this.handleResize),
      this.canvas.removeEventListener("mousemove", this.handleMouseMove);
  }
}
const gn = ({
    nodeCount: t = 50,
    maxConnections: e = 4,
    connectionDistance: n = 120,
    nodeSpeed: r = 0.1,
    nodeSize: s = 3,
    connectionOpacity: o = 0.7,
    nodeOpacity: a = 0.9,
    mouseRadius: l = 120,
    energyParticleCount: d = 20,
    growthRate: u = 0.001,
    maxNodes: h = 200,
    colors: c = {
      nodes: "#667eea",
      connections: "#764ba2",
      highlight: "#ffffff",
      energy: "#00ffff",
      clusters: [
        "#667eea",
        "#f093fb",
        "#4facfe",
        "#43e97b",
        "#fa709a",
        "#ffecd2",
      ],
    },
    className: f = "",
    style: _ = {},
  }) => {
    const p = V(null),
      x = V(null);
    return (
      E(() => {
        const v = p.current;
        if (!v) return;
        const g = {
          nodeCount: t,
          maxConnections: e,
          connectionDistance: n,
          nodeSpeed: r,
          nodeSize: s,
          connectionOpacity: o,
          nodeOpacity: a,
          mouseRadius: l,
          energyParticleCount: d,
          growthRate: u,
          maxNodes: h,
          colors: c,
        };
        return (
          (x.current = new pn(v, g)),
          () => {
            x.current && x.current.destroy();
          }
        );
      }, [t, e, n, r, s, o, a, l, d, u, h, c]),
      i("canvas", {
        ref: p,
        className: f,
        style: { display: "fixed", width: "100%", height: "100%", ..._ },
      })
    );
  },
  vn = vt(() =>
    Qe(() => import("./index-UPD-JUdK.js"), __vite__mapDeps([0, 1])).then(
      (t) => ({ default: t.AboutMe })
    )
  ),
  yn = vt(() =>
    Qe(() => import("./_404-Dkn09-7R.js"), []).then((t) => ({
      default: t.NotFound,
    }))
  ),
  xn = "/davecook88/";
function bn() {
  const [t, e] = N("home");
  return (
    E(() => {
      e(G(U.PAGE) || "home");
      const r = () => {
        e(G(U.PAGE) || "home");
      };
      return (
        window.addEventListener("popstate", r),
        () => {
          window.removeEventListener("popstate", r);
        }
      );
    }, []),
    (() => {
      switch (t) {
        case "about-me":
          return i(z, {
            fallback: i("div", { children: "Loading..." }),
            children: i(vn, {}),
          });
        case "404":
          return i(z, {
            fallback: i("div", { children: "Loading..." }),
            children: i(yn, {}),
          });
        case "home":
        default:
          return i(mn, {});
      }
    })()
  );
}
function wn() {
  return i(ke, {
    scope: xn,
    children: [
      i("div", {
        class: "fixed inset-0 max-h-dvh pointer-events-none z-[-1]",
        children: i(gn, {
          nodeCount: 60,
          maxConnections: 5,
          connectionDistance: 140,
          nodeSpeed: 0.001,
          nodeSize: 4,
          connectionOpacity: 0.8,
          nodeOpacity: 0.9,
          mouseRadius: 1,
          energyParticleCount: 25,
          growthRate: 8e-4,
          maxNodes: 20,
          colors: {
            nodes: "#ffffff",
            connections: "#ffffff",
            highlight: "#ffffff",
            energy: "#0891b2",
            clusters: [
              "#64748b",
              "#475569",
              "#334155",
              "#1e293b",
              "#06b6d4",
              "#0891b2",
            ],
          },
        }),
      }),
      i("main", {
        class: "container-lg mx-auto z-10 pointer-events-auto",
        children: i(bn, {}),
      }),
    ],
  });
}
typeof window < "u" && It(i(wn, {}), document.getElementById("app"));
export { i as u };
