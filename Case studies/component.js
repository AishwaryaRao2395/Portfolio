const mc = () => Promise.resolve().then(() => hc), { Fragment: Jn, jsx: r, jsxs: s } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Ba(e) {
  const t = e?.props?._fgT, a = typeof t == "function" || typeof t == "string" || typeof t == "object" && t !== null && "$$typeof" in t;
  return globalThis.__GLOBALS__.React.isValidElement(e) && a;
}
function Pt(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function Ga(e) {
  const { _fgT: t, _fgS: a, _fgB: n, _fgD: i, ...o } = e.props;
  return globalThis.__GLOBALS__.React.createElement(t, {
    ...o,
    key: e.key
  }, o.children);
}
function Xt(e) {
  return Ba(e) ? Ga(e) : Pt(e) ? e.props.children : e;
}
const kt = globalThis.__GLOBALS__.React.Children, nt = {
  map(e, t, a) {
    return kt.map(e, (n, i) => {
      const o = Xt(n);
      return Pt(n) ? null : t.call(a, o, i);
    });
  },
  forEach(e, t, a) {
    kt.forEach(e, (n, i) => {
      if (Pt(n))
        return;
      const o = Xt(n);
      t.call(a, o, i);
    });
  },
  count(e) {
    let t = 0;
    return kt.forEach(e, (a) => {
      Pt(a) || t++;
    }), t;
  },
  toArray(e) {
    const t = [];
    return kt.forEach(e, (a) => {
      Pt(a) || t.push(Xt(a));
    }), t;
  },
  only(e) {
    const t = kt.only(e);
    return Xt(t);
  }
}, ur = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function Qn(e) {
  if (e == null || typeof e != "object") return e;
  const t = Object.keys(e);
  let a = !1;
  for (let i = 0; i < ur.length; i++)
    if (ur[i] in e) {
      a = !0;
      break;
    }
  if (!a) return e;
  const n = {};
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    ur.indexOf(o) === -1 && (n[o] = e[o]);
  }
  return n;
}
const aa = globalThis.__GLOBALS__.React.cloneElement, or = (e, ...t) => {
  if (Ba(e)) {
    const a = Ga(e), n = t[0];
    return n != null && typeof n == "object" && (t = [
      Qn(n),
      ...t.slice(1)
    ]), aa(a, ...t);
  }
  return aa(e, ...t);
}, Zn = {
  ...globalThis.__GLOBALS__.React,
  Children: nt,
  cloneElement: or
}, { Component: $a, createContext: Re, createElement: U, createFactory: ei, createRef: ti, forwardRef: Ye, Fragment: it, isValidElement: Tt, lazy: ri, memo: Wa, Profiler: ai, PureComponent: ni, startTransition: Dt, StrictMode: ii, Suspense: oi, use: si, useCallback: pt, useContext: K, useDebugValue: li, useDeferredValue: di, useEffect: Ve, useId: ci, useImperativeHandle: hi, useInsertionEffect: mi, useLayoutEffect: Er, useMemo: _e, useReducer: ui, useRef: zt, useState: Te, useSyncExternalStore: fi, useTransition: gi, version: pi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: bi } = globalThis.__GLOBALS__.React, yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: nt,
  Component: $a,
  Fragment: it,
  Profiler: ai,
  PureComponent: ni,
  StrictMode: ii,
  Suspense: oi,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: bi,
  cloneElement: or,
  createContext: Re,
  createElement: U,
  createFactory: ei,
  createRef: ti,
  default: Zn,
  forwardRef: Ye,
  isValidElement: Tt,
  lazy: ri,
  memo: Wa,
  startTransition: Dt,
  use: si,
  useCallback: pt,
  useContext: K,
  useDebugValue: li,
  useDeferredValue: di,
  useEffect: Ve,
  useId: ci,
  useImperativeHandle: hi,
  useInsertionEffect: mi,
  useLayoutEffect: Er,
  useMemo: _e,
  useReducer: ui,
  useRef: zt,
  useState: Te,
  useSyncExternalStore: fi,
  useTransition: gi,
  version: pi
}, Symbol.toStringTag, { value: "Module" }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Ha = (e) => {
  throw TypeError(e);
}, vi = (e, t, a) => t.has(e) || Ha("Cannot " + a), fr = (e, t, a) => (vi(e, t, "read from private field"), a ? a.call(e) : t.get(e)), xi = (e, t, a) => t.has(e) ? Ha("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), na = "popstate";
function wi(e = {}) {
  function t(n, i) {
    let { pathname: o, search: l, hash: d } = n.location;
    return Mt(
      "",
      { pathname: o, search: l, hash: d },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function a(n, i) {
    return typeof i == "string" ? i : Me(i);
  }
  return ki(
    t,
    a,
    null,
    e
  );
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function he(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Ni() {
  return Math.random().toString(36).substring(2, 10);
}
function ia(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Mt(e, t, a = null, n) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? qe(t) : t,
    state: a,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || Ni()
  };
}
function Me({
  pathname: e = "/",
  search: t = "",
  hash: a = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a), e;
}
function qe(e) {
  let t = {};
  if (e) {
    let a = e.indexOf("#");
    a >= 0 && (t.hash = e.substring(a), e = e.substring(0, a));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substring(n), e = e.substring(0, n)), e && (t.pathname = e);
  }
  return t;
}
function ki(e, t, a, n = {}) {
  let { window: i = document.defaultView, v5Compat: o = !1 } = n, l = i.history, d = "POP", c = null, m = g();
  m == null && (m = 0, l.replaceState({ ...l.state, idx: m }, ""));
  function g() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    d = "POP";
    let S = g(), P = S == null ? null : S - m;
    m = S, c && c({ action: d, location: N.location, delta: P });
  }
  function v(S, P) {
    d = "PUSH";
    let L = Mt(N.location, S, P);
    m = g() + 1;
    let O = ia(L, m), X = N.createHref(L);
    try {
      l.pushState(O, "", X);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError")
        throw $;
      i.location.assign(X);
    }
    o && c && c({ action: d, location: N.location, delta: 1 });
  }
  function y(S, P) {
    d = "REPLACE";
    let L = Mt(N.location, S, P);
    m = g();
    let O = ia(L, m), X = N.createHref(L);
    l.replaceState(O, "", X), o && c && c({ action: d, location: N.location, delta: 0 });
  }
  function w(S) {
    return Va(S);
  }
  let N = {
    get action() {
      return d;
    },
    get location() {
      return e(i, l);
    },
    listen(S) {
      if (c)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(na, f), c = S, () => {
        i.removeEventListener(na, f), c = null;
      };
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: w,
    encodeLocation(S) {
      let P = w(S);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: v,
    replace: y,
    go(S) {
      return l.go(S);
    }
  };
  return N;
}
function Va(e, t = !1) {
  let a = "http://localhost";
  typeof window < "u" && (a = window.location.origin !== "null" ? window.location.origin : window.location.href), G(a, "No window.location.(origin|href) available to create URL");
  let n = typeof e == "string" ? e : Me(e);
  return n = n.replace(/ $/, "%20"), !t && n.startsWith("//") && (n = a + n), new URL(n, a);
}
var At, oa = class {
  /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */
  constructor(e) {
    if (xi(this, At, /* @__PURE__ */ new Map()), e)
      for (let [t, a] of e)
        this.set(t, a);
  }
  /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */
  get(e) {
    if (fr(this, At).has(e))
      return fr(this, At).get(e);
    if (e.defaultValue !== void 0)
      return e.defaultValue;
    throw new Error("No value found for context");
  }
  /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */
  set(e, t) {
    fr(this, At).set(e, t);
  }
};
At = /* @__PURE__ */ new WeakMap();
var Ri = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function Li(e) {
  return Ri.has(
    e
  );
}
var Si = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function _i(e) {
  return Si.has(
    e
  );
}
function Pi(e) {
  return e.index === !0;
}
function Ot(e, t, a = [], n = {}, i = !1) {
  return e.map((o, l) => {
    let d = [...a, String(l)], c = typeof o.id == "string" ? o.id : d.join("-");
    if (G(
      o.index !== !0 || !o.children,
      "Cannot specify children on an index route"
    ), G(
      i || !n[c],
      `Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`
    ), Pi(o)) {
      let m = {
        ...o,
        id: c
      };
      return n[c] = sa(
        m,
        t(m)
      ), m;
    } else {
      let m = {
        ...o,
        id: c,
        children: void 0
      };
      return n[c] = sa(
        m,
        t(m)
      ), o.children && (m.children = Ot(
        o.children,
        t,
        d,
        n,
        i
      )), m;
    }
  });
}
function sa(e, t) {
  return Object.assign(e, {
    ...t,
    ...typeof t.lazy == "object" && t.lazy != null ? {
      lazy: {
        ...e.lazy,
        ...t.lazy
      }
    } : {}
  });
}
function We(e, t, a = "/") {
  return Et(e, t, a, !1);
}
function Et(e, t, a, n) {
  let i = typeof t == "string" ? qe(t) : t, o = Pe(i.pathname || "/", a);
  if (o == null)
    return null;
  let l = Ka(e);
  Ei(l);
  let d = null;
  for (let c = 0; d == null && c < l.length; ++c) {
    let m = Bi(o);
    d = Ui(
      l[c],
      m,
      n
    );
  }
  return d;
}
function Ai(e, t) {
  let { route: a, pathname: n, params: i } = e;
  return {
    id: a.id,
    pathname: n,
    params: i,
    data: t[a.id],
    loaderData: t[a.id],
    handle: a.handle
  };
}
function Ka(e, t = [], a = [], n = "", i = !1) {
  let o = (l, d, c = i, m) => {
    let g = {
      relativePath: m === void 0 ? l.path || "" : m,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: d,
      route: l
    };
    if (g.relativePath.startsWith("/")) {
      if (!g.relativePath.startsWith(n) && c)
        return;
      G(
        g.relativePath.startsWith(n),
        `Absolute route path "${g.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), g.relativePath = g.relativePath.slice(n.length);
    }
    let f = De([n, g.relativePath]), v = a.concat(g);
    l.children && l.children.length > 0 && (G(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      l.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${f}".`
    ), Ka(
      l.children,
      t,
      v,
      f,
      c
    )), !(l.path == null && !l.index) && t.push({
      path: f,
      score: ji(f, l.index),
      routesMeta: v
    });
  };
  return e.forEach((l, d) => {
    if (l.path === "" || !l.path?.includes("?"))
      o(l, d);
    else
      for (let c of Ya(l.path))
        o(l, d, !0, c);
  }), t;
}
function Ya(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [a, ...n] = t, i = a.endsWith("?"), o = a.replace(/\?$/, "");
  if (n.length === 0)
    return i ? [o, ""] : [o];
  let l = Ya(n.join("/")), d = [];
  return d.push(
    ...l.map(
      (c) => c === "" ? o : [o, c].join("/")
    )
  ), i && d.push(...l), d.map(
    (c) => e.startsWith("/") && c === "" ? "/" : c
  );
}
function Ei(e) {
  e.sort(
    (t, a) => t.score !== a.score ? a.score - t.score : zi(
      t.routesMeta.map((n) => n.childrenIndex),
      a.routesMeta.map((n) => n.childrenIndex)
    )
  );
}
var Ci = /^:[\w-]+$/, Ti = 3, Di = 2, Mi = 1, Oi = 10, Ii = -2, la = (e) => e === "*";
function ji(e, t) {
  let a = e.split("/"), n = a.length;
  return a.some(la) && (n += Ii), t && (n += Di), a.filter((i) => !la(i)).reduce(
    (i, o) => i + (Ci.test(o) ? Ti : o === "" ? Mi : Oi),
    n
  );
}
function zi(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ui(e, t, a = !1) {
  let { routesMeta: n } = e, i = {}, o = "/", l = [];
  for (let d = 0; d < n.length; ++d) {
    let c = n[d], m = d === n.length - 1, g = o === "/" ? t : t.slice(o.length) || "/", f = ir(
      { path: c.relativePath, caseSensitive: c.caseSensitive, end: m },
      g
    ), v = c.route;
    if (!f && m && a && !n[n.length - 1].route.index && (f = ir(
      {
        path: c.relativePath,
        caseSensitive: c.caseSensitive,
        end: !1
      },
      g
    )), !f)
      return null;
    Object.assign(i, f.params), l.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: De([o, f.pathname]),
      pathnameBase: Wi(
        De([o, f.pathnameBase])
      ),
      route: v
    }), f.pathnameBase !== "/" && (o = De([o, f.pathnameBase]));
  }
  return l;
}
function ir(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, n] = Fi(
    e.path,
    e.caseSensitive,
    e.end
  ), i = t.match(a);
  if (!i) return null;
  let o = i[0], l = o.replace(/(.)\/+$/, "$1"), d = i.slice(1);
  return {
    params: n.reduce(
      (m, { paramName: g, isOptional: f }, v) => {
        if (g === "*") {
          let w = d[v] || "";
          l = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
        }
        const y = d[v];
        return f && !y ? m[g] = void 0 : m[g] = (y || "").replace(/%2F/g, "/"), m;
      },
      {}
    ),
    pathname: o,
    pathnameBase: l,
    pattern: e
  };
}
function Fi(e, t = !1, a = !0) {
  he(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let n = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (l, d, c) => (n.push({ paramName: d, isOptional: c != null }), c ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (n.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), n];
}
function Bi(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return he(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function Pe(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let a = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(a);
  return n && n !== "/" ? null : e.slice(a) || "/";
}
function Gi({
  basename: e,
  pathname: t
}) {
  return t === "/" ? e : De([e, t]);
}
var qa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Cr = (e) => qa.test(e);
function $i(e, t = "/") {
  let {
    pathname: a,
    search: n = "",
    hash: i = ""
  } = typeof e == "string" ? qe(e) : e, o;
  return a ? (a = a.replace(/\/\/+/g, "/"), a.startsWith("/") ? o = da(a.substring(1), "/") : o = da(a, t)) : o = t, {
    pathname: o,
    search: Hi(n),
    hash: Vi(i)
  };
}
function da(e, t) {
  let a = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? a.length > 1 && a.pop() : i !== "." && a.push(i);
  }), a.length > 1 ? a.join("/") : "/";
}
function gr(e, t, a, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    n
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Xa(e) {
  return e.filter(
    (t, a) => a === 0 || t.route.path && t.route.path.length > 0
  );
}
function Tr(e) {
  let t = Xa(e);
  return t.map(
    (a, n) => n === t.length - 1 ? a.pathname : a.pathnameBase
  );
}
function Dr(e, t, a, n = !1) {
  let i;
  typeof e == "string" ? i = qe(e) : (i = { ...e }, G(
    !i.pathname || !i.pathname.includes("?"),
    gr("?", "pathname", "search", i)
  ), G(
    !i.pathname || !i.pathname.includes("#"),
    gr("#", "pathname", "hash", i)
  ), G(
    !i.search || !i.search.includes("#"),
    gr("#", "search", "hash", i)
  ));
  let o = e === "" || i.pathname === "", l = o ? "/" : i.pathname, d;
  if (l == null)
    d = a;
  else {
    let f = t.length - 1;
    if (!n && l.startsWith("..")) {
      let v = l.split("/");
      for (; v[0] === ".."; )
        v.shift(), f -= 1;
      i.pathname = v.join("/");
    }
    d = f >= 0 ? t[f] : "/";
  }
  let c = $i(i, d), m = l && l !== "/" && l.endsWith("/"), g = (o || l === ".") && a.endsWith("/");
  return !c.pathname.endsWith("/") && (m || g) && (c.pathname += "/"), c;
}
var De = (e) => e.join("/").replace(/\/\/+/g, "/"), Wi = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Hi = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Vi = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Ut = class {
  constructor(e, t, a, n = !1) {
    this.status = e, this.statusText = t || "", this.internal = n, a instanceof Error ? (this.data = a.toString(), this.error = a) : this.data = a;
  }
};
function It(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Ft(e) {
  return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Ja = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Qa(e, t) {
  let a = e;
  if (typeof a != "string" || !qa.test(a))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: a
    };
  let n = a, i = !1;
  if (Ja)
    try {
      let o = new URL(window.location.href), l = a.startsWith("//") ? new URL(o.protocol + a) : new URL(a), d = Pe(l.pathname, t);
      l.origin === o.origin && d != null ? a = d + l.search + l.hash : i = !0;
    } catch {
      he(
        !1,
        `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: n,
    isExternal: i,
    to: a
  };
}
var Ke = Symbol("Uninstrumented");
function Ki(e, t) {
  let a = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  e.forEach(
    (i) => i({
      id: t.id,
      index: t.index,
      path: t.path,
      instrument(o) {
        let l = Object.keys(a);
        for (let d of l)
          o[d] && a[d].push(o[d]);
      }
    })
  );
  let n = {};
  if (typeof t.lazy == "function" && a.lazy.length > 0) {
    let i = ft(a.lazy, t.lazy, () => {
    });
    i && (n.lazy = i);
  }
  if (typeof t.lazy == "object") {
    let i = t.lazy;
    ["middleware", "loader", "action"].forEach((o) => {
      let l = i[o], d = a[`lazy.${o}`];
      if (typeof l == "function" && d.length > 0) {
        let c = ft(d, l, () => {
        });
        c && (n.lazy = Object.assign(n.lazy || {}, {
          [o]: c
        }));
      }
    });
  }
  return ["loader", "action"].forEach((i) => {
    let o = t[i];
    if (typeof o == "function" && a[i].length > 0) {
      let l = o[Ke] ?? o, d = ft(
        a[i],
        l,
        (...c) => ca(c[0])
      );
      d && (i === "loader" && l.hydrate === !0 && (d.hydrate = !0), d[Ke] = l, n[i] = d);
    }
  }), t.middleware && t.middleware.length > 0 && a.middleware.length > 0 && (n.middleware = t.middleware.map((i) => {
    let o = i[Ke] ?? i, l = ft(
      a.middleware,
      o,
      (...d) => ca(d[0])
    );
    return l ? (l[Ke] = o, l) : i;
  })), n;
}
function Yi(e, t) {
  let a = {
    navigate: [],
    fetch: []
  };
  if (t.forEach(
    (n) => n({
      instrument(i) {
        let o = Object.keys(i);
        for (let l of o)
          i[l] && a[l].push(i[l]);
      }
    })
  ), a.navigate.length > 0) {
    let n = e.navigate[Ke] ?? e.navigate, i = ft(
      a.navigate,
      n,
      (...o) => {
        let [l, d] = o;
        return {
          to: typeof l == "number" || typeof l == "string" ? l : l ? Me(l) : ".",
          ...ha(e, d ?? {})
        };
      }
    );
    i && (i[Ke] = n, e.navigate = i);
  }
  if (a.fetch.length > 0) {
    let n = e.fetch[Ke] ?? e.fetch, i = ft(a.fetch, n, (...o) => {
      let [l, , d, c] = o;
      return {
        href: d ?? ".",
        fetcherKey: l,
        ...ha(e, c ?? {})
      };
    });
    i && (i[Ke] = n, e.fetch = i);
  }
  return e;
}
function ft(e, t, a) {
  return e.length === 0 ? null : async (...n) => {
    let i = await Za(
      e,
      a(...n),
      () => t(...n),
      e.length - 1
    );
    if (i.type === "error")
      throw i.value;
    return i.value;
  };
}
async function Za(e, t, a, n) {
  let i = e[n], o;
  if (i) {
    let l, d = async () => (l ? console.error("You cannot call instrumented handlers more than once") : l = Za(e, t, a, n - 1), o = await l, G(o, "Expected a result"), o.type === "error" && o.value instanceof Error ? { status: "error", error: o.value } : { status: "success", error: void 0 });
    try {
      await i(d, t);
    } catch (c) {
      console.error("An instrumentation function threw an error:", c);
    }
    l || await d(), await l;
  } else
    try {
      o = { type: "success", value: await a() };
    } catch (l) {
      o = { type: "error", value: l };
    }
  return o || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function ca(e) {
  let { request: t, context: a, params: n, unstable_pattern: i } = e;
  return {
    request: qi(t),
    params: { ...n },
    unstable_pattern: i,
    context: Xi(a)
  };
}
function ha(e, t) {
  return {
    currentUrl: Me(e.state.location),
    ..."formMethod" in t ? { formMethod: t.formMethod } : {},
    ..."formEncType" in t ? { formEncType: t.formEncType } : {},
    ..."formData" in t ? { formData: t.formData } : {},
    ..."body" in t ? { body: t.body } : {}
  };
}
function qi(e) {
  return {
    method: e.method,
    url: e.url,
    headers: {
      get: (...t) => e.headers.get(...t)
    }
  };
}
function Xi(e) {
  if (Qi(e)) {
    let t = { ...e };
    return Object.freeze(t), t;
  } else
    return {
      get: (t) => e.get(t)
    };
}
var Ji = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Qi(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Ji;
}
var en = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], Zi = new Set(
  en
), eo = [
  "GET",
  ...en
], to = new Set(eo), tn = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), ro = /* @__PURE__ */ new Set([307, 308]), pr = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, ao = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Rt = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, no = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), rn = "remix-router-transitions", an = Symbol("ResetLoaderData");
function io(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, a = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
  G(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let n = e.hydrationRouteProperties || [], i = e.mapRouteProperties || no, o = i;
  if (e.unstable_instrumentations) {
    let h = e.unstable_instrumentations;
    o = (u) => ({
      ...i(u),
      ...Ki(
        h.map((p) => p.route).filter(Boolean),
        u
      )
    });
  }
  let l = {}, d = Ot(
    e.routes,
    o,
    void 0,
    l
  ), c, m = e.basename || "/";
  m.startsWith("/") || (m = `/${m}`);
  let g = e.dataStrategy || ho, f = {
    ...e.future
  }, v = null, y = /* @__PURE__ */ new Set(), w = null, N = null, S = null, P = e.hydrationData != null, L = We(d, e.history.location, m), O = !1, X = null, $;
  if (L == null && !e.patchRoutesOnNavigation) {
    let h = Se(404, {
      pathname: e.history.location.pathname
    }), { matches: u, route: p } = Jt(d);
    $ = !0, L = u, X = { [p.id]: h };
  } else if (L && !e.hydrationData && Ht(
    L,
    d,
    e.history.location.pathname
  ).active && (L = null), L)
    if (L.some((h) => h.route.lazy))
      $ = !1;
    else if (!L.some((h) => Mr(h.route)))
      $ = !0;
    else {
      let h = e.hydrationData ? e.hydrationData.loaderData : null, u = e.hydrationData ? e.hydrationData.errors : null;
      if (u) {
        let p = L.findIndex(
          (x) => u[x.route.id] !== void 0
        );
        $ = L.slice(0, p + 1).every(
          (x) => !kr(x.route, h, u)
        );
      } else
        $ = L.every(
          (p) => !kr(p.route, h, u)
        );
    }
  else {
    $ = !1, L = [];
    let h = Ht(
      null,
      d,
      e.history.location.pathname
    );
    h.active && h.matches && (O = !0, L = h.matches);
  }
  let J, b = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: L,
    initialized: $,
    navigation: pr,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || X,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, k = "POP", F = null, te = !1, Q, ne = !1, we = /* @__PURE__ */ new Map(), ie = null, W = !1, H = !1, ce = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Map(), le = 0, pe = -1, Ne = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new Map(), oe, Be = null;
  function lt() {
    if (v = e.history.listen(
      ({ action: h, location: u, delta: p }) => {
        if (oe) {
          oe(), oe = void 0;
          return;
        }
        he(
          Ee.size === 0 || p != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let x = Qr({
          currentLocation: b.location,
          nextLocation: u,
          historyAction: h
        });
        if (x && p != null) {
          let R = new Promise((D) => {
            oe = D;
          });
          e.history.go(p * -1), Wt(x, {
            state: "blocked",
            location: u,
            proceed() {
              Wt(x, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: u
              }), R.then(() => e.history.go(p));
            },
            reset() {
              let D = new Map(b.blockers);
              D.set(x, Rt), de({ blockers: D });
            }
          }), F?.resolve(), F = null;
          return;
        }
        return Je(h, u);
      }
    ), a) {
      Ao(t, we);
      let h = () => Eo(t, we);
      t.addEventListener("pagehide", h), ie = () => t.removeEventListener("pagehide", h);
    }
    return b.initialized || Je("POP", b.location, {
      initialHydration: !0
    }), J;
  }
  function dt() {
    v && v(), ie && ie(), y.clear(), Q && Q.abort(), b.fetchers.forEach((h, u) => cr(u)), b.blockers.forEach((h, u) => Jr(u));
  }
  function vt(h) {
    return y.add(h), () => y.delete(h);
  }
  function de(h, u = {}) {
    h.matches && (h.matches = h.matches.map((R) => {
      let D = l[R.route.id], A = R.route;
      return A.element !== D.element || A.errorElement !== D.errorElement || A.hydrateFallbackElement !== D.hydrateFallbackElement ? {
        ...R,
        route: D
      } : R;
    })), b = {
      ...b,
      ...h
    };
    let p = [], x = [];
    b.fetchers.forEach((R, D) => {
      R.state === "idle" && (fe.has(D) ? p.push(D) : x.push(D));
    }), fe.forEach((R) => {
      !b.fetchers.has(R) && !_.has(R) && p.push(R);
    }), [...y].forEach(
      (R) => R(b, {
        deletedFetchers: p,
        newErrors: h.errors ?? null,
        viewTransitionOpts: u.viewTransitionOpts,
        flushSync: u.flushSync === !0
      })
    ), p.forEach((R) => cr(R)), x.forEach((R) => b.fetchers.delete(R));
  }
  function ct(h, u, { flushSync: p } = {}) {
    let x = b.actionData != null && b.navigation.formMethod != null && ve(b.navigation.formMethod) && b.navigation.state === "loading" && h.state?._isRedirect !== !0, R;
    u.actionData ? Object.keys(u.actionData).length > 0 ? R = u.actionData : R = null : x ? R = b.actionData : R = null;
    let D = u.loaderData ? wa(
      b.loaderData,
      u.loaderData,
      u.matches || [],
      u.errors
    ) : b.loaderData, A = b.blockers;
    A.size > 0 && (A = new Map(A), A.forEach((z, I) => A.set(I, Rt)));
    let T = W ? !1 : ea(h, u.matches || b.matches), M = te === !0 || b.navigation.formMethod != null && ve(b.navigation.formMethod) && h.state?._isRedirect !== !0;
    c && (d = c, c = void 0), W || k === "POP" || (k === "PUSH" ? e.history.push(h, h.state) : k === "REPLACE" && e.history.replace(h, h.state));
    let j;
    if (k === "POP") {
      let z = we.get(b.location.pathname);
      z && z.has(h.pathname) ? j = {
        currentLocation: b.location,
        nextLocation: h
      } : we.has(h.pathname) && (j = {
        currentLocation: h,
        nextLocation: b.location
      });
    } else if (ne) {
      let z = we.get(b.location.pathname);
      z ? z.add(h.pathname) : (z = /* @__PURE__ */ new Set([h.pathname]), we.set(b.location.pathname, z)), j = {
        currentLocation: b.location,
        nextLocation: h
      };
    }
    de(
      {
        ...u,
        // matches, errors, fetchers go through as-is
        actionData: R,
        loaderData: D,
        historyAction: k,
        location: h,
        initialized: !0,
        navigation: pr,
        revalidation: "idle",
        restoreScrollPosition: T,
        preventScrollReset: M,
        blockers: A
      },
      {
        viewTransitionOpts: j,
        flushSync: p === !0
      }
    ), k = "POP", te = !1, ne = !1, W = !1, H = !1, F?.resolve(), F = null, Be?.resolve(), Be = null;
  }
  async function Wr(h, u) {
    if (F?.resolve(), F = null, typeof h == "number") {
      F || (F = La());
      let q = F.promise;
      return e.history.go(h), q;
    }
    let p = Nr(
      b.location,
      b.matches,
      m,
      h,
      u?.fromRouteId,
      u?.relative
    ), { path: x, submission: R, error: D } = ma(
      !1,
      p,
      u
    ), A = b.location, T = Mt(b.location, x, u && u.state);
    T = {
      ...T,
      ...e.history.encodeLocation(T)
    };
    let M = u && u.replace != null ? u.replace : void 0, j = "PUSH";
    M === !0 ? j = "REPLACE" : M === !1 || R != null && ve(R.formMethod) && R.formAction === b.location.pathname + b.location.search && (j = "REPLACE");
    let z = u && "preventScrollReset" in u ? u.preventScrollReset === !0 : void 0, I = (u && u.flushSync) === !0, Y = Qr({
      currentLocation: A,
      nextLocation: T,
      historyAction: j
    });
    if (Y) {
      Wt(Y, {
        state: "blocked",
        location: T,
        proceed() {
          Wt(Y, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: T
          }), Wr(h, u);
        },
        reset() {
          let q = new Map(b.blockers);
          q.set(Y, Rt), de({ blockers: q });
        }
      });
      return;
    }
    await Je(j, T, {
      submission: R,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: D,
      preventScrollReset: z,
      replace: u && u.replace,
      enableViewTransition: u && u.viewTransition,
      flushSync: I,
      callSiteDefaultShouldRevalidate: u && u.unstable_defaultShouldRevalidate
    });
  }
  function In() {
    Be || (Be = La()), dr(), de({ revalidation: "loading" });
    let h = Be.promise;
    return b.navigation.state === "submitting" ? h : b.navigation.state === "idle" ? (Je(b.historyAction, b.location, {
      startUninterruptedRevalidation: !0
    }), h) : (Je(
      k || b.historyAction,
      b.navigation.location,
      {
        overrideNavigation: b.navigation,
        // Proxy through any rending view transition
        enableViewTransition: ne === !0
      }
    ), h);
  }
  async function Je(h, u, p) {
    Q && Q.abort(), Q = null, k = h, W = (p && p.startUninterruptedRevalidation) === !0, Kn(b.location, b.matches), te = (p && p.preventScrollReset) === !0, ne = (p && p.enableViewTransition) === !0;
    let x = c || d, R = p && p.overrideNavigation, D = p?.initialHydration && b.matches && b.matches.length > 0 && !O ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      b.matches
    ) : We(x, u, m), A = (p && p.flushSync) === !0;
    if (D && b.initialized && !H && vo(b.location, u) && !(p && p.submission && ve(p.submission.formMethod))) {
      ct(u, { matches: D }, { flushSync: A });
      return;
    }
    let T = Ht(D, x, u.pathname);
    if (T.active && T.matches && (D = T.matches), !D) {
      let { error: ge, notFoundMatches: xe, route: ee } = hr(
        u.pathname
      );
      ct(
        u,
        {
          matches: xe,
          loaderData: {},
          errors: {
            [ee.id]: ge
          }
        },
        { flushSync: A }
      );
      return;
    }
    Q = new AbortController();
    let M = ut(
      e.history,
      u,
      Q.signal,
      p && p.submission
    ), j = e.getContext ? await e.getContext() : new oa(), z;
    if (p && p.pendingError)
      z = [
        He(D).route.id,
        { type: "error", error: p.pendingError }
      ];
    else if (p && p.submission && ve(p.submission.formMethod)) {
      let ge = await jn(
        M,
        u,
        p.submission,
        D,
        j,
        T.active,
        p && p.initialHydration === !0,
        { replace: p.replace, flushSync: A }
      );
      if (ge.shortCircuited)
        return;
      if (ge.pendingActionResult) {
        let [xe, ee] = ge.pendingActionResult;
        if (ke(ee) && It(ee.error) && ee.error.status === 404) {
          Q = null, ct(u, {
            matches: ge.matches,
            loaderData: {},
            errors: {
              [xe]: ee.error
            }
          });
          return;
        }
      }
      D = ge.matches || D, z = ge.pendingActionResult, R = br(u, p.submission), A = !1, T.active = !1, M = ut(
        e.history,
        M.url,
        M.signal
      );
    }
    let {
      shortCircuited: I,
      matches: Y,
      loaderData: q,
      errors: be
    } = await zn(
      M,
      u,
      D,
      j,
      T.active,
      R,
      p && p.submission,
      p && p.fetcherSubmission,
      p && p.replace,
      p && p.initialHydration === !0,
      A,
      z,
      p && p.callSiteDefaultShouldRevalidate
    );
    I || (Q = null, ct(u, {
      matches: Y || D,
      ...Na(z),
      loaderData: q,
      errors: be
    }));
  }
  async function jn(h, u, p, x, R, D, A, T = {}) {
    dr();
    let M = _o(u, p);
    if (de({ navigation: M }, { flushSync: T.flushSync === !0 }), D) {
      let I = await Vt(
        x,
        u.pathname,
        h.signal
      );
      if (I.type === "aborted")
        return { shortCircuited: !0 };
      if (I.type === "error") {
        if (I.partialMatches.length === 0) {
          let { matches: q, route: be } = Jt(d);
          return {
            matches: q,
            pendingActionResult: [
              be.id,
              {
                type: "error",
                error: I.error
              }
            ]
          };
        }
        let Y = He(I.partialMatches).route.id;
        return {
          matches: I.partialMatches,
          pendingActionResult: [
            Y,
            {
              type: "error",
              error: I.error
            }
          ]
        };
      } else if (I.matches)
        x = I.matches;
      else {
        let { notFoundMatches: Y, error: q, route: be } = hr(
          u.pathname
        );
        return {
          matches: Y,
          pendingActionResult: [
            be.id,
            {
              type: "error",
              error: q
            }
          ]
        };
      }
    }
    let j, z = rr(x, u);
    if (!z.route.action && !z.route.lazy)
      j = {
        type: "error",
        error: Se(405, {
          method: h.method,
          pathname: u.pathname,
          routeId: z.route.id
        })
      };
    else {
      let I = gt(
        o,
        l,
        h,
        x,
        z,
        A ? [] : n,
        R
      ), Y = await xt(
        h,
        I,
        R,
        null
      );
      if (j = Y[z.route.id], !j) {
        for (let q of x)
          if (Y[q.route.id]) {
            j = Y[q.route.id];
            break;
          }
      }
      if (h.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (at(j)) {
      let I;
      return T && T.replace != null ? I = T.replace : I = ya(
        j.response.headers.get("Location"),
        new URL(h.url),
        m,
        e.history
      ) === b.location.pathname + b.location.search, await Qe(h, j, !0, {
        submission: p,
        replace: I
      }), { shortCircuited: !0 };
    }
    if (ke(j)) {
      let I = He(x, z.route.id);
      return (T && T.replace) !== !0 && (k = "PUSH"), {
        matches: x,
        pendingActionResult: [
          I.route.id,
          j,
          z.route.id
        ]
      };
    }
    return {
      matches: x,
      pendingActionResult: [z.route.id, j]
    };
  }
  async function zn(h, u, p, x, R, D, A, T, M, j, z, I, Y) {
    let q = D || br(u, A), be = A || T || Ra(q), ge = !W && !j;
    if (R) {
      if (ge) {
        let ye = Hr(I);
        de(
          {
            navigation: q,
            ...ye !== void 0 ? { actionData: ye } : {}
          },
          {
            flushSync: z
          }
        );
      }
      let V = await Vt(
        p,
        u.pathname,
        h.signal
      );
      if (V.type === "aborted")
        return { shortCircuited: !0 };
      if (V.type === "error") {
        if (V.partialMatches.length === 0) {
          let { matches: ht, route: tt } = Jt(d);
          return {
            matches: ht,
            loaderData: {},
            errors: {
              [tt.id]: V.error
            }
          };
        }
        let ye = He(V.partialMatches).route.id;
        return {
          matches: V.partialMatches,
          loaderData: {},
          errors: {
            [ye]: V.error
          }
        };
      } else if (V.matches)
        p = V.matches;
      else {
        let { error: ye, notFoundMatches: ht, route: tt } = hr(
          u.pathname
        );
        return {
          matches: ht,
          loaderData: {},
          errors: {
            [tt.id]: ye
          }
        };
      }
    }
    let xe = c || d, { dsMatches: ee, revalidatingFetchers: Le } = ua(
      h,
      x,
      o,
      l,
      e.history,
      b,
      p,
      be,
      u,
      j ? [] : n,
      j === !0,
      H,
      ce,
      fe,
      Z,
      ue,
      xe,
      m,
      e.patchRoutesOnNavigation != null,
      I,
      Y
    );
    if (pe = ++le, !e.dataStrategy && !ee.some((V) => V.shouldLoad) && !ee.some(
      (V) => V.route.middleware && V.route.middleware.length > 0
    ) && Le.length === 0) {
      let V = qr();
      return ct(
        u,
        {
          matches: p,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: I && ke(I[1]) ? { [I[0]]: I[1].error } : null,
          ...Na(I),
          ...V ? { fetchers: new Map(b.fetchers) } : {}
        },
        { flushSync: z }
      ), { shortCircuited: !0 };
    }
    if (ge) {
      let V = {};
      if (!R) {
        V.navigation = q;
        let ye = Hr(I);
        ye !== void 0 && (V.actionData = ye);
      }
      Le.length > 0 && (V.fetchers = Un(Le)), de(V, { flushSync: z });
    }
    Le.forEach((V) => {
      ze(V.key), V.controller && _.set(V.key, V.controller);
    });
    let Ze = () => Le.forEach((V) => ze(V.key));
    Q && Q.signal.addEventListener(
      "abort",
      Ze
    );
    let { loaderResults: wt, fetcherResults: Ge } = await Vr(
      ee,
      Le,
      h,
      x
    );
    if (h.signal.aborted)
      return { shortCircuited: !0 };
    Q && Q.signal.removeEventListener(
      "abort",
      Ze
    ), Le.forEach((V) => _.delete(V.key));
    let Ce = Qt(wt);
    if (Ce)
      return await Qe(h, Ce.result, !0, {
        replace: M
      }), { shortCircuited: !0 };
    if (Ce = Qt(Ge), Ce)
      return ue.add(Ce.key), await Qe(h, Ce.result, !0, {
        replace: M
      }), { shortCircuited: !0 };
    let { loaderData: mr, errors: Nt } = xa(
      b,
      p,
      wt,
      I,
      Le,
      Ge
    );
    j && b.errors && (Nt = { ...b.errors, ...Nt });
    let et = qr(), Kt = Xr(pe), Yt = et || Kt || Le.length > 0;
    return {
      matches: p,
      loaderData: mr,
      errors: Nt,
      ...Yt ? { fetchers: new Map(b.fetchers) } : {}
    };
  }
  function Hr(h) {
    if (h && !ke(h[1]))
      return {
        [h[0]]: h[1].data
      };
    if (b.actionData)
      return Object.keys(b.actionData).length === 0 ? null : b.actionData;
  }
  function Un(h) {
    return h.forEach((u) => {
      let p = b.fetchers.get(u.key), x = Lt(
        void 0,
        p ? p.data : void 0
      );
      b.fetchers.set(u.key, x);
    }), new Map(b.fetchers);
  }
  async function Fn(h, u, p, x) {
    ze(h);
    let R = (x && x.flushSync) === !0, D = c || d, A = Nr(
      b.location,
      b.matches,
      m,
      p,
      u,
      x?.relative
    ), T = We(D, A, m), M = Ht(T, D, A);
    if (M.active && M.matches && (T = M.matches), !T) {
      je(
        h,
        u,
        Se(404, { pathname: A }),
        { flushSync: R }
      );
      return;
    }
    let { path: j, submission: z, error: I } = ma(
      !0,
      A,
      x
    );
    if (I) {
      je(h, u, I, { flushSync: R });
      return;
    }
    let Y = e.getContext ? await e.getContext() : new oa(), q = (x && x.preventScrollReset) === !0;
    if (z && ve(z.formMethod)) {
      await Bn(
        h,
        u,
        j,
        T,
        Y,
        M.active,
        R,
        q,
        z,
        x && x.unstable_defaultShouldRevalidate
      );
      return;
    }
    Z.set(h, { routeId: u, path: j }), await Gn(
      h,
      u,
      j,
      T,
      Y,
      M.active,
      R,
      q,
      z
    );
  }
  async function Bn(h, u, p, x, R, D, A, T, M, j) {
    dr(), Z.delete(h);
    let z = b.fetchers.get(h);
    Ie(h, Po(M, z), {
      flushSync: A
    });
    let I = new AbortController(), Y = ut(
      e.history,
      p,
      I.signal,
      M
    );
    if (D) {
      let se = await Vt(
        x,
        new URL(Y.url).pathname,
        Y.signal,
        h
      );
      if (se.type === "aborted")
        return;
      if (se.type === "error") {
        je(h, u, se.error, { flushSync: A });
        return;
      } else if (se.matches)
        x = se.matches;
      else {
        je(
          h,
          u,
          Se(404, { pathname: p }),
          { flushSync: A }
        );
        return;
      }
    }
    let q = rr(x, p);
    if (!q.route.action && !q.route.lazy) {
      let se = Se(405, {
        method: M.formMethod,
        pathname: p,
        routeId: u
      });
      je(h, u, se, { flushSync: A });
      return;
    }
    _.set(h, I);
    let be = le, ge = gt(
      o,
      l,
      Y,
      x,
      q,
      n,
      R
    ), xe = await xt(
      Y,
      ge,
      R,
      h
    ), ee = xe[q.route.id];
    if (!ee) {
      for (let se of ge)
        if (xe[se.route.id]) {
          ee = xe[se.route.id];
          break;
        }
    }
    if (Y.signal.aborted) {
      _.get(h) === I && _.delete(h);
      return;
    }
    if (fe.has(h)) {
      if (at(ee) || ke(ee)) {
        Ie(h, Fe(void 0));
        return;
      }
    } else {
      if (at(ee))
        if (_.delete(h), pe > be) {
          Ie(h, Fe(void 0));
          return;
        } else
          return ue.add(h), Ie(h, Lt(M)), Qe(Y, ee, !1, {
            fetcherSubmission: M,
            preventScrollReset: T
          });
      if (ke(ee)) {
        je(h, u, ee.error);
        return;
      }
    }
    let Le = b.navigation.location || b.location, Ze = ut(
      e.history,
      Le,
      I.signal
    ), wt = c || d, Ge = b.navigation.state !== "idle" ? We(wt, b.navigation.location, m) : b.matches;
    G(Ge, "Didn't find any matches after fetcher action");
    let Ce = ++le;
    Ne.set(h, Ce);
    let mr = Lt(M, ee.data);
    b.fetchers.set(h, mr);
    let { dsMatches: Nt, revalidatingFetchers: et } = ua(
      Ze,
      R,
      o,
      l,
      e.history,
      b,
      Ge,
      M,
      Le,
      n,
      !1,
      H,
      ce,
      fe,
      Z,
      ue,
      wt,
      m,
      e.patchRoutesOnNavigation != null,
      [q.route.id, ee],
      j
    );
    et.filter((se) => se.key !== h).forEach((se) => {
      let qt = se.key, ra = b.fetchers.get(qt), Xn = Lt(
        void 0,
        ra ? ra.data : void 0
      );
      b.fetchers.set(qt, Xn), ze(qt), se.controller && _.set(qt, se.controller);
    }), de({ fetchers: new Map(b.fetchers) });
    let Kt = () => et.forEach((se) => ze(se.key));
    I.signal.addEventListener(
      "abort",
      Kt
    );
    let { loaderResults: Yt, fetcherResults: V } = await Vr(
      Nt,
      et,
      Ze,
      R
    );
    if (I.signal.aborted)
      return;
    if (I.signal.removeEventListener(
      "abort",
      Kt
    ), Ne.delete(h), _.delete(h), et.forEach((se) => _.delete(se.key)), b.fetchers.has(h)) {
      let se = Fe(ee.data);
      b.fetchers.set(h, se);
    }
    let ye = Qt(Yt);
    if (ye)
      return Qe(
        Ze,
        ye.result,
        !1,
        { preventScrollReset: T }
      );
    if (ye = Qt(V), ye)
      return ue.add(ye.key), Qe(
        Ze,
        ye.result,
        !1,
        { preventScrollReset: T }
      );
    let { loaderData: ht, errors: tt } = xa(
      b,
      Ge,
      Yt,
      void 0,
      et,
      V
    );
    Xr(Ce), b.navigation.state === "loading" && Ce > pe ? (G(k, "Expected pending action"), Q && Q.abort(), ct(b.navigation.location, {
      matches: Ge,
      loaderData: ht,
      errors: tt,
      fetchers: new Map(b.fetchers)
    })) : (de({
      errors: tt,
      loaderData: wa(
        b.loaderData,
        ht,
        Ge,
        tt
      ),
      fetchers: new Map(b.fetchers)
    }), H = !1);
  }
  async function Gn(h, u, p, x, R, D, A, T, M) {
    let j = b.fetchers.get(h);
    Ie(
      h,
      Lt(
        M,
        j ? j.data : void 0
      ),
      { flushSync: A }
    );
    let z = new AbortController(), I = ut(
      e.history,
      p,
      z.signal
    );
    if (D) {
      let ee = await Vt(
        x,
        new URL(I.url).pathname,
        I.signal,
        h
      );
      if (ee.type === "aborted")
        return;
      if (ee.type === "error") {
        je(h, u, ee.error, { flushSync: A });
        return;
      } else if (ee.matches)
        x = ee.matches;
      else {
        je(
          h,
          u,
          Se(404, { pathname: p }),
          { flushSync: A }
        );
        return;
      }
    }
    let Y = rr(x, p);
    _.set(h, z);
    let q = le, be = gt(
      o,
      l,
      I,
      x,
      Y,
      n,
      R
    ), xe = (await xt(
      I,
      be,
      R,
      h
    ))[Y.route.id];
    if (_.get(h) === z && _.delete(h), !I.signal.aborted) {
      if (fe.has(h)) {
        Ie(h, Fe(void 0));
        return;
      }
      if (at(xe))
        if (pe > q) {
          Ie(h, Fe(void 0));
          return;
        } else {
          ue.add(h), await Qe(I, xe, !1, {
            preventScrollReset: T
          });
          return;
        }
      if (ke(xe)) {
        je(h, u, xe.error);
        return;
      }
      Ie(h, Fe(xe.data));
    }
  }
  async function Qe(h, u, p, {
    submission: x,
    fetcherSubmission: R,
    preventScrollReset: D,
    replace: A
  } = {}) {
    p || (F?.resolve(), F = null), u.response.headers.has("X-Remix-Revalidate") && (H = !0);
    let T = u.response.headers.get("Location");
    G(T, "Expected a Location header on the redirect Response"), T = ya(
      T,
      new URL(h.url),
      m,
      e.history
    );
    let M = Mt(b.location, T, {
      _isRedirect: !0
    });
    if (a) {
      let be = !1;
      if (u.response.headers.has("X-Remix-Reload-Document"))
        be = !0;
      else if (Cr(T)) {
        const ge = Va(T, !0);
        be = // Hard reload if it's an absolute URL to a new origin
        ge.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        Pe(ge.pathname, m) == null;
      }
      if (be) {
        A ? t.location.replace(T) : t.location.assign(T);
        return;
      }
    }
    Q = null;
    let j = A === !0 || u.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: z, formAction: I, formEncType: Y } = b.navigation;
    !x && !R && z && I && Y && (x = Ra(b.navigation));
    let q = x || R;
    if (ro.has(u.response.status) && q && ve(q.formMethod))
      await Je(j, M, {
        submission: {
          ...q,
          formAction: T
        },
        // Preserve these flags across redirects
        preventScrollReset: D || te,
        enableViewTransition: p ? ne : void 0
      });
    else {
      let be = br(
        M,
        x
      );
      await Je(j, M, {
        overrideNavigation: be,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: R,
        // Preserve these flags across redirects
        preventScrollReset: D || te,
        enableViewTransition: p ? ne : void 0
      });
    }
  }
  async function xt(h, u, p, x) {
    let R, D = {};
    try {
      R = await uo(
        g,
        h,
        u,
        x,
        p,
        !1
      );
    } catch (A) {
      return u.filter((T) => T.shouldLoad).forEach((T) => {
        D[T.route.id] = {
          type: "error",
          error: A
        };
      }), D;
    }
    if (h.signal.aborted)
      return D;
    if (!ve(h.method))
      for (let A of u) {
        if (R[A.route.id]?.type === "error")
          break;
        !R.hasOwnProperty(A.route.id) && !b.loaderData.hasOwnProperty(A.route.id) && (!b.errors || !b.errors.hasOwnProperty(A.route.id)) && A.shouldCallHandler() && (R[A.route.id] = {
          type: "error",
          result: new Error(
            `No result returned from dataStrategy for route ${A.route.id}`
          )
        });
      }
    for (let [A, T] of Object.entries(R))
      if (ko(T)) {
        let M = T.result;
        D[A] = {
          type: "redirect",
          response: bo(
            M,
            h,
            A,
            u,
            m
          )
        };
      } else
        D[A] = await po(T);
    return D;
  }
  async function Vr(h, u, p, x) {
    let R = xt(
      p,
      h,
      x,
      null
    ), D = Promise.all(
      u.map(async (M) => {
        if (M.matches && M.match && M.request && M.controller) {
          let z = (await xt(
            M.request,
            M.matches,
            x,
            M.key
          ))[M.match.route.id];
          return { [M.key]: z };
        } else
          return Promise.resolve({
            [M.key]: {
              type: "error",
              error: Se(404, {
                pathname: M.path
              })
            }
          });
      })
    ), A = await R, T = (await D).reduce(
      (M, j) => Object.assign(M, j),
      {}
    );
    return {
      loaderResults: A,
      fetcherResults: T
    };
  }
  function dr() {
    H = !0, Z.forEach((h, u) => {
      _.has(u) && ce.add(u), ze(u);
    });
  }
  function Ie(h, u, p = {}) {
    b.fetchers.set(h, u), de(
      { fetchers: new Map(b.fetchers) },
      { flushSync: (p && p.flushSync) === !0 }
    );
  }
  function je(h, u, p, x = {}) {
    let R = He(b.matches, u);
    cr(h), de(
      {
        errors: {
          [R.route.id]: p
        },
        fetchers: new Map(b.fetchers)
      },
      { flushSync: (x && x.flushSync) === !0 }
    );
  }
  function Kr(h) {
    return re.set(h, (re.get(h) || 0) + 1), fe.has(h) && fe.delete(h), b.fetchers.get(h) || ao;
  }
  function $n(h, u) {
    ze(h, u?.reason), Ie(h, Fe(null));
  }
  function cr(h) {
    let u = b.fetchers.get(h);
    _.has(h) && !(u && u.state === "loading" && Ne.has(h)) && ze(h), Z.delete(h), Ne.delete(h), ue.delete(h), fe.delete(h), ce.delete(h), b.fetchers.delete(h);
  }
  function Wn(h) {
    let u = (re.get(h) || 0) - 1;
    u <= 0 ? (re.delete(h), fe.add(h)) : re.set(h, u), de({ fetchers: new Map(b.fetchers) });
  }
  function ze(h, u) {
    let p = _.get(h);
    p && (p.abort(u), _.delete(h));
  }
  function Yr(h) {
    for (let u of h) {
      let p = Kr(u), x = Fe(p.data);
      b.fetchers.set(u, x);
    }
  }
  function qr() {
    let h = [], u = !1;
    for (let p of ue) {
      let x = b.fetchers.get(p);
      G(x, `Expected fetcher: ${p}`), x.state === "loading" && (ue.delete(p), h.push(p), u = !0);
    }
    return Yr(h), u;
  }
  function Xr(h) {
    let u = [];
    for (let [p, x] of Ne)
      if (x < h) {
        let R = b.fetchers.get(p);
        G(R, `Expected fetcher: ${p}`), R.state === "loading" && (ze(p), Ne.delete(p), u.push(p));
      }
    return Yr(u), u.length > 0;
  }
  function Hn(h, u) {
    let p = b.blockers.get(h) || Rt;
    return Ee.get(h) !== u && Ee.set(h, u), p;
  }
  function Jr(h) {
    b.blockers.delete(h), Ee.delete(h);
  }
  function Wt(h, u) {
    let p = b.blockers.get(h) || Rt;
    G(
      p.state === "unblocked" && u.state === "blocked" || p.state === "blocked" && u.state === "blocked" || p.state === "blocked" && u.state === "proceeding" || p.state === "blocked" && u.state === "unblocked" || p.state === "proceeding" && u.state === "unblocked",
      `Invalid blocker state transition: ${p.state} -> ${u.state}`
    );
    let x = new Map(b.blockers);
    x.set(h, u), de({ blockers: x });
  }
  function Qr({
    currentLocation: h,
    nextLocation: u,
    historyAction: p
  }) {
    if (Ee.size === 0)
      return;
    Ee.size > 1 && he(!1, "A router only supports one blocker at a time");
    let x = Array.from(Ee.entries()), [R, D] = x[x.length - 1], A = b.blockers.get(R);
    if (!(A && A.state === "proceeding") && D({ currentLocation: h, nextLocation: u, historyAction: p }))
      return R;
  }
  function hr(h) {
    let u = Se(404, { pathname: h }), p = c || d, { matches: x, route: R } = Jt(p);
    return { notFoundMatches: x, route: R, error: u };
  }
  function Vn(h, u, p) {
    if (w = h, S = u, N = p || null, !P && b.navigation === pr) {
      P = !0;
      let x = ea(b.location, b.matches);
      x != null && de({ restoreScrollPosition: x });
    }
    return () => {
      w = null, S = null, N = null;
    };
  }
  function Zr(h, u) {
    return N && N(
      h,
      u.map((x) => Ai(x, b.loaderData))
    ) || h.key;
  }
  function Kn(h, u) {
    if (w && S) {
      let p = Zr(h, u);
      w[p] = S();
    }
  }
  function ea(h, u) {
    if (w) {
      let p = Zr(h, u), x = w[p];
      if (typeof x == "number")
        return x;
    }
    return null;
  }
  function Ht(h, u, p) {
    if (e.patchRoutesOnNavigation)
      if (h) {
        if (Object.keys(h[0].params).length > 0)
          return { active: !0, matches: Et(
            u,
            p,
            m,
            !0
          ) };
      } else
        return { active: !0, matches: Et(
          u,
          p,
          m,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function Vt(h, u, p, x) {
    if (!e.patchRoutesOnNavigation)
      return { type: "success", matches: h };
    let R = h;
    for (; ; ) {
      let D = c == null, A = c || d, T = l;
      try {
        await e.patchRoutesOnNavigation({
          signal: p,
          path: u,
          matches: R,
          fetcherKey: x,
          patch: (z, I) => {
            p.aborted || fa(
              z,
              I,
              A,
              T,
              o,
              !1
            );
          }
        });
      } catch (z) {
        return { type: "error", error: z, partialMatches: R };
      } finally {
        D && !p.aborted && (d = [...d]);
      }
      if (p.aborted)
        return { type: "aborted" };
      let M = We(A, u, m), j = null;
      if (M) {
        if (Object.keys(M[0].params).length === 0)
          return { type: "success", matches: M };
        if (j = Et(
          A,
          u,
          m,
          !0
        ), !(j && R.length < j.length && ta(
          R,
          j.slice(0, R.length)
        )))
          return { type: "success", matches: M };
      }
      if (j || (j = Et(
        A,
        u,
        m,
        !0
      )), !j || ta(R, j))
        return { type: "success", matches: null };
      R = j;
    }
  }
  function ta(h, u) {
    return h.length === u.length && h.every((p, x) => p.route.id === u[x].route.id);
  }
  function Yn(h) {
    l = {}, c = Ot(
      h,
      o,
      void 0,
      l
    );
  }
  function qn(h, u, p = !1) {
    let x = c == null;
    fa(
      h,
      u,
      c || d,
      l,
      o,
      p
    ), x && (d = [...d], de({}));
  }
  return J = {
    get basename() {
      return m;
    },
    get future() {
      return f;
    },
    get state() {
      return b;
    },
    get routes() {
      return d;
    },
    get window() {
      return t;
    },
    initialize: lt,
    subscribe: vt,
    enableScrollRestoration: Vn,
    navigate: Wr,
    fetch: Fn,
    revalidate: In,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (h) => e.history.createHref(h),
    encodeLocation: (h) => e.history.encodeLocation(h),
    getFetcher: Kr,
    resetFetcher: $n,
    deleteFetcher: Wn,
    dispose: dt,
    getBlocker: Hn,
    deleteBlocker: Jr,
    patchRoutes: qn,
    _internalFetchControllers: _,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: Yn,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(h) {
      de(h);
    }
  }, e.unstable_instrumentations && (J = Yi(
    J,
    e.unstable_instrumentations.map((h) => h.router).filter(Boolean)
  )), J;
}
function oo(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function Nr(e, t, a, n, i, o) {
  let l, d;
  if (i) {
    l = [];
    for (let m of t)
      if (l.push(m), m.route.id === i) {
        d = m;
        break;
      }
  } else
    l = t, d = t[t.length - 1];
  let c = Dr(
    n || ".",
    Tr(l),
    Pe(e.pathname, a) || e.pathname,
    o === "path"
  );
  if (n == null && (c.search = e.search, c.hash = e.hash), (n == null || n === "" || n === ".") && d) {
    let m = Ir(c.search);
    if (d.route.index && !m)
      c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
    else if (!d.route.index && m) {
      let g = new URLSearchParams(c.search), f = g.getAll("index");
      g.delete("index"), f.filter((y) => y).forEach((y) => g.append("index", y));
      let v = g.toString();
      c.search = v ? `?${v}` : "";
    }
  }
  return a !== "/" && (c.pathname = Gi({ basename: a, pathname: c.pathname })), Me(c);
}
function ma(e, t, a) {
  if (!a || !oo(a))
    return { path: t };
  if (a.formMethod && !So(a.formMethod))
    return {
      path: t,
      error: Se(405, { method: a.formMethod })
    };
  let n = () => ({
    path: t,
    error: Se(400, { type: "invalid-body" })
  }), o = (a.formMethod || "get").toUpperCase(), l = cn(t);
  if (a.body !== void 0) {
    if (a.formEncType === "text/plain") {
      if (!ve(o))
        return n();
      let f = typeof a.body == "string" ? a.body : a.body instanceof FormData || a.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(a.body.entries()).reduce(
          (v, [y, w]) => `${v}${y}=${w}
`,
          ""
        )
      ) : String(a.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: l,
          formEncType: a.formEncType,
          formData: void 0,
          json: void 0,
          text: f
        }
      };
    } else if (a.formEncType === "application/json") {
      if (!ve(o))
        return n();
      try {
        let f = typeof a.body == "string" ? JSON.parse(a.body) : a.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: l,
            formEncType: a.formEncType,
            formData: void 0,
            json: f,
            text: void 0
          }
        };
      } catch {
        return n();
      }
    }
  }
  G(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let d, c;
  if (a.formData)
    d = Lr(a.formData), c = a.formData;
  else if (a.body instanceof FormData)
    d = Lr(a.body), c = a.body;
  else if (a.body instanceof URLSearchParams)
    d = a.body, c = va(d);
  else if (a.body == null)
    d = new URLSearchParams(), c = new FormData();
  else
    try {
      d = new URLSearchParams(a.body), c = va(d);
    } catch {
      return n();
    }
  let m = {
    formMethod: o,
    formAction: l,
    formEncType: a && a.formEncType || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0
  };
  if (ve(m.formMethod))
    return { path: t, submission: m };
  let g = qe(t);
  return e && g.search && Ir(g.search) && d.append("index", ""), g.search = `?${d}`, { path: Me(g), submission: m };
}
function ua(e, t, a, n, i, o, l, d, c, m, g, f, v, y, w, N, S, P, L, O, X) {
  let $ = O ? ke(O[1]) ? O[1].error : O[1].data : void 0, J = i.createURL(o.location), b = i.createURL(c), k;
  if (g && o.errors) {
    let W = Object.keys(o.errors)[0];
    k = l.findIndex((H) => H.route.id === W);
  } else if (O && ke(O[1])) {
    let W = O[0];
    k = l.findIndex((H) => H.route.id === W) - 1;
  }
  let F = O ? O[1].statusCode : void 0, te = F && F >= 400, Q = {
    currentUrl: J,
    currentParams: o.matches[0]?.params || {},
    nextUrl: b,
    nextParams: l[0].params,
    ...d,
    actionResult: $,
    actionStatus: F
  }, ne = Ft(l), we = l.map((W, H) => {
    let { route: ce } = W, _ = null;
    if (k != null && H > k ? _ = !1 : ce.lazy ? _ = !0 : Mr(ce) ? g ? _ = kr(
      ce,
      o.loaderData,
      o.errors
    ) : so(o.loaderData, o.matches[H], W) && (_ = !0) : _ = !1, _ !== null)
      return Rr(
        a,
        n,
        e,
        ne,
        W,
        m,
        t,
        _
      );
    let le = !1;
    typeof X == "boolean" ? le = X : te ? le = !1 : (f || J.pathname + J.search === b.pathname + b.search || J.search !== b.search || lo(o.matches[H], W)) && (le = !0);
    let pe = {
      ...Q,
      defaultShouldRevalidate: le
    }, Ne = Ct(W, pe);
    return Rr(
      a,
      n,
      e,
      ne,
      W,
      m,
      t,
      Ne,
      pe,
      X
    );
  }), ie = [];
  return w.forEach((W, H) => {
    if (g || !l.some((re) => re.route.id === W.routeId) || y.has(H))
      return;
    let ce = o.fetchers.get(H), _ = ce && ce.state !== "idle" && ce.data === void 0, le = We(S, W.path, P);
    if (!le) {
      if (L && _)
        return;
      ie.push({
        key: H,
        routeId: W.routeId,
        path: W.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (N.has(H))
      return;
    let pe = rr(le, W.path), Ne = new AbortController(), ue = ut(
      i,
      W.path,
      Ne.signal
    ), Z = null;
    if (v.has(H))
      v.delete(H), Z = gt(
        a,
        n,
        ue,
        le,
        pe,
        m,
        t
      );
    else if (_)
      f && (Z = gt(
        a,
        n,
        ue,
        le,
        pe,
        m,
        t
      ));
    else {
      let re;
      typeof X == "boolean" ? re = X : te ? re = !1 : re = f;
      let fe = {
        ...Q,
        defaultShouldRevalidate: re
      };
      Ct(pe, fe) && (Z = gt(
        a,
        n,
        ue,
        le,
        pe,
        m,
        t,
        fe
      ));
    }
    Z && ie.push({
      key: H,
      routeId: W.routeId,
      path: W.path,
      matches: Z,
      match: pe,
      request: ue,
      controller: Ne
    });
  }), { dsMatches: we, revalidatingFetchers: ie };
}
function Mr(e) {
  return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function kr(e, t, a) {
  if (e.lazy)
    return !0;
  if (!Mr(e))
    return !1;
  let n = t != null && e.id in t, i = a != null && a[e.id] !== void 0;
  return !n && i ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !n && !i;
}
function so(e, t, a) {
  let n = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    a.route.id !== t.route.id
  ), i = !e.hasOwnProperty(a.route.id);
  return n || i;
}
function lo(e, t) {
  let a = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    a != null && a.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function Ct(e, t) {
  if (e.route.shouldRevalidate) {
    let a = e.route.shouldRevalidate(t);
    if (typeof a == "boolean")
      return a;
  }
  return t.defaultShouldRevalidate;
}
function fa(e, t, a, n, i, o) {
  let l;
  if (e) {
    let m = n[e];
    G(
      m,
      `No route found to patch children into: routeId = ${e}`
    ), m.children || (m.children = []), l = m.children;
  } else
    l = a;
  let d = [], c = [];
  if (t.forEach((m) => {
    let g = l.find(
      (f) => nn(m, f)
    );
    g ? c.push({ existingRoute: g, newRoute: m }) : d.push(m);
  }), d.length > 0) {
    let m = Ot(
      d,
      i,
      [e || "_", "patch", String(l?.length || "0")],
      n
    );
    l.push(...m);
  }
  if (o && c.length > 0)
    for (let m = 0; m < c.length; m++) {
      let { existingRoute: g, newRoute: f } = c[m], v = g, [y] = Ot(
        [f],
        i,
        [],
        // Doesn't matter for mutated routes since they already have an id
        {},
        // Don't touch the manifest here since we're updating in place
        !0
      );
      Object.assign(v, {
        element: y.element ? y.element : v.element,
        errorElement: y.errorElement ? y.errorElement : v.errorElement,
        hydrateFallbackElement: y.hydrateFallbackElement ? y.hydrateFallbackElement : v.hydrateFallbackElement
      });
    }
}
function nn(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every(
    (a, n) => t.children?.some((i) => nn(a, i))
  ) : !1;
}
var ga = /* @__PURE__ */ new WeakMap(), on = ({
  key: e,
  route: t,
  manifest: a,
  mapRouteProperties: n
}) => {
  let i = a[t.id];
  if (G(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object")
    return;
  let o = i.lazy[e];
  if (!o)
    return;
  let l = ga.get(i);
  l || (l = {}, ga.set(i, l));
  let d = l[e];
  if (d)
    return d;
  let c = (async () => {
    let m = Li(e), f = i[e] !== void 0 && e !== "hasErrorBoundary";
    if (m)
      he(
        !m,
        "Route property " + e + " is not a supported lazy route property. This property will be ignored."
      ), l[e] = Promise.resolve();
    else if (f)
      he(
        !1,
        `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`
      );
    else {
      let v = await o();
      v != null && (Object.assign(i, { [e]: v }), Object.assign(i, n(i)));
    }
    typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((v) => v === void 0) && (i.lazy = void 0));
  })();
  return l[e] = c, c;
}, pa = /* @__PURE__ */ new WeakMap();
function co(e, t, a, n, i) {
  let o = a[e.id];
  if (G(o, "No route found in manifest"), !e.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof e.lazy == "function") {
    let g = pa.get(o);
    if (g)
      return {
        lazyRoutePromise: g,
        lazyHandlerPromise: g
      };
    let f = (async () => {
      G(
        typeof e.lazy == "function",
        "No lazy route function found"
      );
      let v = await e.lazy(), y = {};
      for (let w in v) {
        let N = v[w];
        if (N === void 0)
          continue;
        let S = _i(w), L = o[w] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        w !== "hasErrorBoundary";
        S ? he(
          !S,
          "Route property " + w + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : L ? he(
          !L,
          `Route "${o.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`
        ) : y[w] = N;
      }
      Object.assign(o, y), Object.assign(o, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...n(o),
        lazy: void 0
      });
    })();
    return pa.set(o, f), f.catch(() => {
    }), {
      lazyRoutePromise: f,
      lazyHandlerPromise: f
    };
  }
  let l = Object.keys(e.lazy), d = [], c;
  for (let g of l) {
    if (i && i.includes(g))
      continue;
    let f = on({
      key: g,
      route: e,
      manifest: a,
      mapRouteProperties: n
    });
    f && (d.push(f), g === t && (c = f));
  }
  let m = d.length > 0 ? Promise.all(d).then(() => {
  }) : void 0;
  return m?.catch(() => {
  }), c?.catch(() => {
  }), {
    lazyRoutePromise: m,
    lazyHandlerPromise: c
  };
}
async function ba(e) {
  let t = e.matches.filter((i) => i.shouldLoad), a = {};
  return (await Promise.all(t.map((i) => i.resolve()))).forEach((i, o) => {
    a[t[o].route.id] = i;
  }), a;
}
async function ho(e) {
  return e.matches.some((t) => t.route.middleware) ? sn(e, () => ba(e)) : ba(e);
}
function sn(e, t) {
  return mo(
    e,
    t,
    (n) => {
      if (Lo(n))
        throw n;
      return n;
    },
    wo,
    a
  );
  function a(n, i, o) {
    if (o)
      return Promise.resolve(
        Object.assign(o.value, {
          [i]: { type: "error", result: n }
        })
      );
    {
      let { matches: l } = e, d = Math.min(
        // Throwing route
        Math.max(
          l.findIndex((m) => m.route.id === i),
          0
        ),
        // or the shallowest route that needs to load data
        Math.max(
          l.findIndex((m) => m.shouldCallHandler()),
          0
        )
      ), c = He(
        l,
        l[d].route.id
      ).route.id;
      return Promise.resolve({
        [c]: { type: "error", result: n }
      });
    }
  }
}
async function mo(e, t, a, n, i) {
  let { matches: o, request: l, params: d, context: c, unstable_pattern: m } = e, g = o.flatMap(
    (v) => v.route.middleware ? v.route.middleware.map((y) => [v.route.id, y]) : []
  );
  return await ln(
    {
      request: l,
      params: d,
      context: c,
      unstable_pattern: m
    },
    g,
    t,
    a,
    n,
    i
  );
}
async function ln(e, t, a, n, i, o, l = 0) {
  let { request: d } = e;
  if (d.signal.aborted)
    throw d.signal.reason ?? new Error(`Request aborted: ${d.method} ${d.url}`);
  let c = t[l];
  if (!c)
    return await a();
  let [m, g] = c, f, v = async () => {
    if (f)
      throw new Error("You may only call `next()` once per middleware");
    try {
      return f = { value: await ln(
        e,
        t,
        a,
        n,
        i,
        o,
        l + 1
      ) }, f.value;
    } catch (y) {
      return f = { value: await o(y, m, f) }, f.value;
    }
  };
  try {
    let y = await g(e, v), w = y != null ? n(y) : void 0;
    return i(w) ? w : f ? w ?? f.value : (f = { value: await v() }, f.value);
  } catch (y) {
    return await o(y, m, f);
  }
}
function dn(e, t, a, n, i) {
  let o = on({
    key: "middleware",
    route: n.route,
    manifest: t,
    mapRouteProperties: e
  }), l = co(
    n.route,
    ve(a.method) ? "action" : "loader",
    t,
    e,
    i
  );
  return {
    middleware: o,
    route: l.lazyRoutePromise,
    handler: l.lazyHandlerPromise
  };
}
function Rr(e, t, a, n, i, o, l, d, c = null, m) {
  let g = !1, f = dn(
    e,
    t,
    a,
    i,
    o
  );
  return {
    ...i,
    _lazyPromises: f,
    shouldLoad: d,
    shouldRevalidateArgs: c,
    shouldCallHandler(v) {
      return g = !0, c ? typeof m == "boolean" ? Ct(i, {
        ...c,
        defaultShouldRevalidate: m
      }) : typeof v == "boolean" ? Ct(i, {
        ...c,
        defaultShouldRevalidate: v
      }) : Ct(i, c) : d;
    },
    resolve(v) {
      let { lazy: y, loader: w, middleware: N } = i.route, S = g || d || v && !ve(a.method) && (y || w), P = N && N.length > 0 && !w && !y;
      return S && (ve(a.method) || !P) ? fo({
        request: a,
        unstable_pattern: n,
        match: i,
        lazyHandlerPromise: f?.handler,
        lazyRoutePromise: f?.route,
        handlerOverride: v,
        scopedContext: l
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function gt(e, t, a, n, i, o, l, d = null) {
  return n.map((c) => c.route.id !== i.route.id ? {
    ...c,
    shouldLoad: !1,
    shouldRevalidateArgs: d,
    shouldCallHandler: () => !1,
    _lazyPromises: dn(
      e,
      t,
      a,
      c,
      o
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : Rr(
    e,
    t,
    a,
    Ft(n),
    c,
    o,
    l,
    !0,
    d
  ));
}
async function uo(e, t, a, n, i, o) {
  a.some((m) => m._lazyPromises?.middleware) && await Promise.all(a.map((m) => m._lazyPromises?.middleware));
  let l = {
    request: t,
    unstable_pattern: Ft(a),
    params: a[0].params,
    context: i,
    matches: a
  }, c = await e({
    ...l,
    fetcherKey: n,
    runClientMiddleware: (m) => {
      let g = l;
      return sn(g, () => m({
        ...g,
        fetcherKey: n,
        runClientMiddleware: () => {
          throw new Error(
            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
          );
        }
      }));
    }
  });
  try {
    await Promise.all(
      a.flatMap((m) => [
        m._lazyPromises?.handler,
        m._lazyPromises?.route
      ])
    );
  } catch {
  }
  return c;
}
async function fo({
  request: e,
  unstable_pattern: t,
  match: a,
  lazyHandlerPromise: n,
  lazyRoutePromise: i,
  handlerOverride: o,
  scopedContext: l
}) {
  let d, c, m = ve(e.method), g = m ? "action" : "loader", f = (v) => {
    let y, w = new Promise((P, L) => y = L);
    c = () => y(), e.signal.addEventListener("abort", c);
    let N = (P) => typeof v != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${a.route.id}]`
      )
    ) : v(
      {
        request: e,
        unstable_pattern: t,
        params: a.params,
        context: l
      },
      ...P !== void 0 ? [P] : []
    ), S = (async () => {
      try {
        return { type: "data", result: await (o ? o((L) => N(L)) : N()) };
      } catch (P) {
        return { type: "error", result: P };
      }
    })();
    return Promise.race([S, w]);
  };
  try {
    let v = m ? a.route.action : a.route.loader;
    if (n || i)
      if (v) {
        let y, [w] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          f(v).catch((N) => {
            y = N;
          }),
          // Ensure all lazy route promises are resolved before continuing
          n,
          i
        ]);
        if (y !== void 0)
          throw y;
        d = w;
      } else {
        await n;
        let y = m ? a.route.action : a.route.loader;
        if (y)
          [d] = await Promise.all([f(y), i]);
        else if (g === "action") {
          let w = new URL(e.url), N = w.pathname + w.search;
          throw Se(405, {
            method: e.method,
            pathname: N,
            routeId: a.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (v)
      d = await f(v);
    else {
      let y = new URL(e.url), w = y.pathname + y.search;
      throw Se(404, {
        pathname: w
      });
    }
  } catch (v) {
    return { type: "error", result: v };
  } finally {
    c && e.signal.removeEventListener("abort", c);
  }
  return d;
}
async function go(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function po(e) {
  let { result: t, type: a } = e;
  if (Or(t)) {
    let n;
    try {
      n = await go(t);
    } catch (i) {
      return { type: "error", error: i };
    }
    return a === "error" ? {
      type: "error",
      error: new Ut(t.status, t.statusText, n),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: "data",
      data: n,
      statusCode: t.status,
      headers: t.headers
    };
  }
  return a === "error" ? ka(t) ? t.data instanceof Error ? {
    type: "error",
    error: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: xo(t),
    statusCode: It(t) ? t.status : void 0,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: t,
    statusCode: It(t) ? t.status : void 0
  } : ka(t) ? {
    type: "data",
    data: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : { type: "data", data: t };
}
function bo(e, t, a, n, i) {
  let o = e.headers.get("Location");
  if (G(
    o,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !Cr(o)) {
    let l = n.slice(
      0,
      n.findIndex((d) => d.route.id === a) + 1
    );
    o = Nr(
      new URL(t.url),
      l,
      i,
      o
    ), e.headers.set("Location", o);
  }
  return e;
}
function ya(e, t, a, n) {
  let i = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  if (Cr(e)) {
    let o = e, l = o.startsWith("//") ? new URL(t.protocol + o) : new URL(o);
    if (i.includes(l.protocol))
      throw new Error("Invalid redirect location");
    let d = Pe(l.pathname, a) != null;
    if (l.origin === t.origin && d)
      return l.pathname + l.search + l.hash;
  }
  try {
    let o = n.createURL(e);
    if (i.includes(o.protocol))
      throw new Error("Invalid redirect location");
  } catch {
  }
  return e;
}
function ut(e, t, a, n) {
  let i = e.createURL(cn(t)).toString(), o = { signal: a };
  if (n && ve(n.formMethod)) {
    let { formMethod: l, formEncType: d } = n;
    o.method = l.toUpperCase(), d === "application/json" ? (o.headers = new Headers({ "Content-Type": d }), o.body = JSON.stringify(n.json)) : d === "text/plain" ? o.body = n.text : d === "application/x-www-form-urlencoded" && n.formData ? o.body = Lr(n.formData) : o.body = n.formData;
  }
  return new Request(i, o);
}
function Lr(e) {
  let t = new URLSearchParams();
  for (let [a, n] of e.entries())
    t.append(a, typeof n == "string" ? n : n.name);
  return t;
}
function va(e) {
  let t = new FormData();
  for (let [a, n] of e.entries())
    t.append(a, n);
  return t;
}
function yo(e, t, a, n = !1, i = !1) {
  let o = {}, l = null, d, c = !1, m = {}, g = a && ke(a[1]) ? a[1].error : void 0;
  return e.forEach((f) => {
    if (!(f.route.id in t))
      return;
    let v = f.route.id, y = t[v];
    if (G(
      !at(y),
      "Cannot handle redirect results in processLoaderData"
    ), ke(y)) {
      let w = y.error;
      if (g !== void 0 && (w = g, g = void 0), l = l || {}, i)
        l[v] = w;
      else {
        let N = He(e, v);
        l[N.route.id] == null && (l[N.route.id] = w);
      }
      n || (o[v] = an), c || (c = !0, d = It(y.error) ? y.error.status : 500), y.headers && (m[v] = y.headers);
    } else
      o[v] = y.data, y.statusCode && y.statusCode !== 200 && !c && (d = y.statusCode), y.headers && (m[v] = y.headers);
  }), g !== void 0 && a && (l = { [a[0]]: g }, a[2] && (o[a[2]] = void 0)), {
    loaderData: o,
    errors: l,
    statusCode: d || 200,
    loaderHeaders: m
  };
}
function xa(e, t, a, n, i, o) {
  let { loaderData: l, errors: d } = yo(
    t,
    a,
    n
  );
  return i.filter((c) => !c.matches || c.matches.some((m) => m.shouldLoad)).forEach((c) => {
    let { key: m, match: g, controller: f } = c;
    if (f && f.signal.aborted)
      return;
    let v = o[m];
    if (G(v, "Did not find corresponding fetcher result"), ke(v)) {
      let y = He(e.matches, g?.route.id);
      d && d[y.route.id] || (d = {
        ...d,
        [y.route.id]: v.error
      }), e.fetchers.delete(m);
    } else if (at(v))
      G(!1, "Unhandled fetcher revalidation redirect");
    else {
      let y = Fe(v.data);
      e.fetchers.set(m, y);
    }
  }), { loaderData: l, errors: d };
}
function wa(e, t, a, n) {
  let i = Object.entries(t).filter(([, o]) => o !== an).reduce((o, [l, d]) => (o[l] = d, o), {});
  for (let o of a) {
    let l = o.route.id;
    if (!t.hasOwnProperty(l) && e.hasOwnProperty(l) && o.route.loader && (i[l] = e[l]), n && n.hasOwnProperty(l))
      break;
  }
  return i;
}
function Na(e) {
  return e ? ke(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function He(e, t) {
  return (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e]).reverse().find((n) => n.route.hasErrorBoundary === !0) || e[0];
}
function Jt(e) {
  let t = e.length === 1 ? e[0] : e.find((a) => a.index || !a.path || a.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }
    ],
    route: t
  };
}
function Se(e, {
  pathname: t,
  routeId: a,
  method: n,
  type: i,
  message: o
} = {}) {
  let l = "Unknown Server Error", d = "Unknown @remix-run/router error";
  return e === 400 ? (l = "Bad Request", n && t && a ? d = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.` : i === "invalid-body" && (d = "Unable to encode submission body")) : e === 403 ? (l = "Forbidden", d = `Route "${a}" does not match URL "${t}"`) : e === 404 ? (l = "Not Found", d = `No route matches URL "${t}"`) : e === 405 && (l = "Method Not Allowed", n && t && a ? d = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.` : n && (d = `Invalid request method "${n.toUpperCase()}"`)), new Ut(
    e || 500,
    l,
    new Error(d),
    !0
  );
}
function Qt(e) {
  let t = Object.entries(e);
  for (let a = t.length - 1; a >= 0; a--) {
    let [n, i] = t[a];
    if (at(i))
      return { key: n, result: i };
  }
}
function cn(e) {
  let t = typeof e == "string" ? qe(e) : e;
  return Me({ ...t, hash: "" });
}
function vo(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function xo(e) {
  return new Ut(
    e.init?.status ?? 500,
    e.init?.statusText ?? "Internal Server Error",
    e.data
  );
}
function wo(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, a]) => typeof t == "string" && No(a)
  );
}
function No(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function ko(e) {
  return Or(e.result) && tn.has(e.result.status);
}
function ke(e) {
  return e.type === "error";
}
function at(e) {
  return (e && e.type) === "redirect";
}
function ka(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function Or(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function Ro(e) {
  return tn.has(e);
}
function Lo(e) {
  return Or(e) && Ro(e.status) && e.headers.has("Location");
}
function So(e) {
  return to.has(e.toUpperCase());
}
function ve(e) {
  return Zi.has(e.toUpperCase());
}
function Ir(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function rr(e, t) {
  let a = typeof t == "string" ? qe(t).search : t.search;
  if (e[e.length - 1].route.index && Ir(a || ""))
    return e[e.length - 1];
  let n = Xa(e);
  return n[n.length - 1];
}
function Ra(e) {
  let { formMethod: t, formAction: a, formEncType: n, text: i, formData: o, json: l } = e;
  if (!(!t || !a || !n)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: i
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: n,
        formData: o,
        json: void 0,
        text: void 0
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: a,
        formEncType: n,
        formData: void 0,
        json: l,
        text: void 0
      };
  }
}
function br(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function _o(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function Lt(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Po(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function Fe(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function Ao(e, t) {
  try {
    let a = e.sessionStorage.getItem(
      rn
    );
    if (a) {
      let n = JSON.parse(a);
      for (let [i, o] of Object.entries(n || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {
  }
}
function Eo(e, t) {
  if (t.size > 0) {
    let a = {};
    for (let [n, i] of t)
      a[n] = [...i];
    try {
      e.sessionStorage.setItem(
        rn,
        JSON.stringify(a)
      );
    } catch (n) {
      he(
        !1,
        `Failed to save applied view transitions in sessionStorage (${n}).`
      );
    }
  }
}
function La() {
  let e, t, a = new Promise((n, i) => {
    e = async (o) => {
      n(o);
      try {
        await a;
      } catch {
      }
    }, t = async (o) => {
      i(o);
      try {
        await a;
      } catch {
      }
    };
  });
  return {
    promise: a,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: t
  };
}
var ot = Re(null);
ot.displayName = "DataRouter";
var Bt = Re(null);
Bt.displayName = "DataRouterState";
var hn = Re(!1);
function Co() {
  return K(hn);
}
var jr = Re({
  isTransitioning: !1
});
jr.displayName = "ViewTransition";
var mn = Re(
  /* @__PURE__ */ new Map()
);
mn.displayName = "Fetchers";
var To = Re(null);
To.displayName = "Await";
var Ae = Re(
  null
);
Ae.displayName = "Navigation";
var sr = Re(
  null
);
sr.displayName = "Location";
var Oe = Re({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Oe.displayName = "Route";
var zr = Re(null);
zr.displayName = "RouteError";
var un = "REACT_ROUTER_ERROR", Do = "REDIRECT", Mo = "ROUTE_ERROR_RESPONSE";
function Oo(e) {
  if (e.startsWith(`${un}:${Do}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
        return t;
    } catch {
    }
}
function Io(e) {
  if (e.startsWith(
    `${un}:${Mo}:{`
  ))
    try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
        return new Ut(
          t.status,
          t.statusText,
          t.data
        );
    } catch {
    }
}
function jo(e, { relative: t } = {}) {
  G(
    Gt(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: n } = K(Ae), { hash: i, pathname: o, search: l } = $t(e, { relative: t }), d = o;
  return a !== "/" && (d = o === "/" ? a : De([a, o])), n.createHref({ pathname: d, search: l, hash: i });
}
function Gt() {
  return K(sr) != null;
}
function Xe() {
  return G(
    Gt(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), K(sr).location;
}
var fn = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function gn(e) {
  K(Ae).static || Er(e);
}
function zo() {
  let { isDataRoute: e } = K(Oe);
  return e ? Zo() : Uo();
}
function Uo() {
  G(
    Gt(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = K(ot), { basename: t, navigator: a } = K(Ae), { matches: n } = K(Oe), { pathname: i } = Xe(), o = JSON.stringify(Tr(n)), l = zt(!1);
  return gn(() => {
    l.current = !0;
  }), pt(
    (c, m = {}) => {
      if (he(l.current, fn), !l.current) return;
      if (typeof c == "number") {
        a.go(c);
        return;
      }
      let g = Dr(
        c,
        JSON.parse(o),
        i,
        m.relative === "path"
      );
      e == null && t !== "/" && (g.pathname = g.pathname === "/" ? t : De([t, g.pathname])), (m.replace ? a.replace : a.push)(
        g,
        m.state,
        m
      );
    },
    [
      t,
      a,
      o,
      i,
      e
    ]
  );
}
var Fo = Re(null);
function Bo(e) {
  let t = K(Oe).outlet;
  return _e(
    () => t && /* @__PURE__ */ U(Fo.Provider, { value: e }, t),
    [t, e]
  );
}
function $t(e, { relative: t } = {}) {
  let { matches: a } = K(Oe), { pathname: n } = Xe(), i = JSON.stringify(Tr(a));
  return _e(
    () => Dr(
      e,
      JSON.parse(i),
      n,
      t === "path"
    ),
    [e, i, n, t]
  );
}
function Go(e, t, a, n, i) {
  G(
    Gt(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = K(Ae), { matches: l } = K(Oe), d = l[l.length - 1], c = d ? d.params : {}, m = d ? d.pathname : "/", g = d ? d.pathnameBase : "/", f = d && d.route;
  {
    let L = f && f.path || "";
    bn(
      m,
      !f || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`
    );
  }
  let v = Xe(), y;
  y = v;
  let w = y.pathname || "/", N = w;
  if (g !== "/") {
    let L = g.replace(/^\//, "").split("/");
    N = "/" + w.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let S = We(e, { pathname: N });
  return he(
    f || S != null,
    `No routes matched location "${y.pathname}${y.search}${y.hash}" `
  ), he(
    S == null || S[S.length - 1].route.element !== void 0 || S[S.length - 1].route.Component !== void 0 || S[S.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), Ko(
    S && S.map(
      (L) => Object.assign({}, L, {
        params: Object.assign({}, c, L.params),
        pathname: De([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            L.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : L.pathname
        ]),
        pathnameBase: L.pathnameBase === "/" ? g : De([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            L.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : L.pathnameBase
        ])
      })
    ),
    l,
    a,
    n,
    i
  );
}
function $o() {
  let e = Qo(), t = It(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), a = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", i = { padding: "0.5rem", backgroundColor: n }, o = { padding: "2px 4px", backgroundColor: n }, l = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), l = /* @__PURE__ */ U(it, null, /* @__PURE__ */ U("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ U("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ U("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ U("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ U(it, null, /* @__PURE__ */ U("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ U("h3", { style: { fontStyle: "italic" } }, t), a ? /* @__PURE__ */ U("pre", { style: i }, a) : null, l);
}
var Wo = /* @__PURE__ */ U($o, null), pn = class extends $a {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const a = Io(e.digest);
      a && (e = a);
    }
    let t = e !== void 0 ? /* @__PURE__ */ U(Oe.Provider, { value: this.props.routeContext }, /* @__PURE__ */ U(
      zr.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ U(Ho, { error: e }, t) : t;
  }
};
pn.contextType = hn;
var yr = /* @__PURE__ */ new WeakMap();
function Ho({
  children: e,
  error: t
}) {
  let { basename: a } = K(Ae);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let n = Oo(t.digest);
    if (n) {
      let i = yr.get(t);
      if (i) throw i;
      let o = Qa(n.location, a);
      if (Ja && !yr.get(t))
        if (o.isExternal || n.reloadDocument)
          window.location.href = o.absoluteURL || o.to;
        else {
          const l = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(o.to, {
              replace: n.replace
            })
          );
          throw yr.set(t, l), l;
        }
      return /* @__PURE__ */ U(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${o.absoluteURL || o.to}`
        }
      );
    }
  }
  return e;
}
function Vo({ routeContext: e, match: t, children: a }) {
  let n = K(ot);
  return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ U(Oe.Provider, { value: e }, a);
}
function Ko(e, t = [], a = null, n = null, i = null) {
  if (e == null) {
    if (!a)
      return null;
    if (a.errors)
      e = a.matches;
    else if (t.length === 0 && !a.initialized && a.matches.length > 0)
      e = a.matches;
    else
      return null;
  }
  let o = e, l = a?.errors;
  if (l != null) {
    let g = o.findIndex(
      (f) => f.route.id && l?.[f.route.id] !== void 0
    );
    G(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        l
      ).join(",")}`
    ), o = o.slice(
      0,
      Math.min(o.length, g + 1)
    );
  }
  let d = !1, c = -1;
  if (a)
    for (let g = 0; g < o.length; g++) {
      let f = o[g];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = g), f.route.id) {
        let { loaderData: v, errors: y } = a, w = f.route.loader && !v.hasOwnProperty(f.route.id) && (!y || y[f.route.id] === void 0);
        if (f.route.lazy || w) {
          d = !0, c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
          break;
        }
      }
    }
  let m = a && n ? (g, f) => {
    n(g, {
      location: a.location,
      params: a.matches?.[0]?.params ?? {},
      unstable_pattern: Ft(a.matches),
      errorInfo: f
    });
  } : void 0;
  return o.reduceRight(
    (g, f, v) => {
      let y, w = !1, N = null, S = null;
      a && (y = l && f.route.id ? l[f.route.id] : void 0, N = f.route.errorElement || Wo, d && (c < 0 && v === 0 ? (bn(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), w = !0, S = null) : c === v && (w = !0, S = f.route.hydrateFallbackElement || null)));
      let P = t.concat(o.slice(0, v + 1)), L = () => {
        let O;
        return y ? O = N : w ? O = S : f.route.Component ? O = /* @__PURE__ */ U(f.route.Component, null) : f.route.element ? O = f.route.element : O = g, /* @__PURE__ */ U(
          Vo,
          {
            match: f,
            routeContext: {
              outlet: g,
              matches: P,
              isDataRoute: a != null
            },
            children: O
          }
        );
      };
      return a && (f.route.ErrorBoundary || f.route.errorElement || v === 0) ? /* @__PURE__ */ U(
        pn,
        {
          location: a.location,
          revalidation: a.revalidation,
          component: N,
          error: y,
          children: L(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: m
        }
      ) : L();
    },
    null
  );
}
function Ur(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Yo(e) {
  let t = K(ot);
  return G(t, Ur(e)), t;
}
function qo(e) {
  let t = K(Bt);
  return G(t, Ur(e)), t;
}
function Xo(e) {
  let t = K(Oe);
  return G(t, Ur(e)), t;
}
function Fr(e) {
  let t = Xo(e), a = t.matches[t.matches.length - 1];
  return G(
    a.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), a.route.id;
}
function Jo() {
  return Fr(
    "useRouteId"
    /* UseRouteId */
  );
}
function Qo() {
  let e = K(zr), t = qo(
    "useRouteError"
    /* UseRouteError */
  ), a = Fr(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[a];
}
function Zo() {
  let { router: e } = Yo(
    "useNavigate"
    /* UseNavigateStable */
  ), t = Fr(
    "useNavigate"
    /* UseNavigateStable */
  ), a = zt(!1);
  return gn(() => {
    a.current = !0;
  }), pt(
    async (i, o = {}) => {
      he(a.current, fn), a.current && (typeof i == "number" ? await e.navigate(i) : await e.navigate(i, { fromRouteId: t, ...o }));
    },
    [e, t]
  );
}
var Sa = {};
function bn(e, t, a) {
  !t && !Sa[e] && (Sa[e] = !0, he(!1, a));
}
var _a = {};
function Pa(e, t) {
  !e && !_a[t] && (_a[t] = !0, console.warn(t));
}
var es = "useOptimistic", Aa = yi[es], ts = () => {
};
function rs(e) {
  return Aa ? Aa(e) : [e, ts];
}
function as(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && (e.element && he(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(t, {
    element: U(e.Component),
    Component: void 0
  })), e.HydrateFallback && (e.hydrateFallbackElement && he(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(t, {
    hydrateFallbackElement: U(e.HydrateFallback),
    HydrateFallback: void 0
  })), e.ErrorBoundary && (e.errorElement && he(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(t, {
    errorElement: U(e.ErrorBoundary),
    ErrorBoundary: void 0
  })), t;
}
var ns = [
  "HydrateFallback",
  "hydrateFallbackElement"
], is = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, t) => {
      this.resolve = (a) => {
        this.status === "pending" && (this.status = "resolved", e(a));
      }, this.reject = (a) => {
        this.status === "pending" && (this.status = "rejected", t(a));
      };
    });
  }
};
function os({
  router: e,
  flushSync: t,
  onError: a,
  unstable_useTransitions: n
}) {
  n = Co() || n;
  let [o, l] = Te(e.state), [d, c] = rs(o), [m, g] = Te(), [f, v] = Te({
    isTransitioning: !1
  }), [y, w] = Te(), [N, S] = Te(), [P, L] = Te(), O = zt(/* @__PURE__ */ new Map()), X = pt(
    (k, { deletedFetchers: F, newErrors: te, flushSync: Q, viewTransitionOpts: ne }) => {
      te && a && Object.values(te).forEach(
        (ie) => a(ie, {
          location: k.location,
          params: k.matches[0]?.params ?? {},
          unstable_pattern: Ft(k.matches)
        })
      ), k.fetchers.forEach((ie, W) => {
        ie.data !== void 0 && O.current.set(W, ie.data);
      }), F.forEach((ie) => O.current.delete(ie)), Pa(
        Q === !1 || t != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let we = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
      if (Pa(
        ne == null || we,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !ne || !we) {
        t && Q ? t(() => l(k)) : n === !1 ? l(k) : Dt(() => {
          n === !0 && c((ie) => Ea(ie, k)), l(k);
        });
        return;
      }
      if (t && Q) {
        t(() => {
          N && (y?.resolve(), N.skipTransition()), v({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: ne.currentLocation,
            nextLocation: ne.nextLocation
          });
        });
        let ie = e.window.document.startViewTransition(() => {
          t(() => l(k));
        });
        ie.finished.finally(() => {
          t(() => {
            w(void 0), S(void 0), g(void 0), v({ isTransitioning: !1 });
          });
        }), t(() => S(ie));
        return;
      }
      N ? (y?.resolve(), N.skipTransition(), L({
        state: k,
        currentLocation: ne.currentLocation,
        nextLocation: ne.nextLocation
      })) : (g(k), v({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: ne.currentLocation,
        nextLocation: ne.nextLocation
      }));
    },
    [
      e.window,
      t,
      N,
      y,
      n,
      c,
      a
    ]
  );
  Er(() => e.subscribe(X), [e, X]), Ve(() => {
    f.isTransitioning && !f.flushSync && w(new is());
  }, [f]), Ve(() => {
    if (y && m && e.window) {
      let k = m, F = y.promise, te = e.window.document.startViewTransition(async () => {
        n === !1 ? l(k) : Dt(() => {
          n === !0 && c((Q) => Ea(Q, k)), l(k);
        }), await F;
      });
      te.finished.finally(() => {
        w(void 0), S(void 0), g(void 0), v({ isTransitioning: !1 });
      }), S(te);
    }
  }, [
    m,
    y,
    e.window,
    n,
    c
  ]), Ve(() => {
    y && m && d.location.key === m.location.key && y.resolve();
  }, [y, N, d.location, m]), Ve(() => {
    !f.isTransitioning && P && (g(P.state), v({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: P.currentLocation,
      nextLocation: P.nextLocation
    }), L(void 0));
  }, [f.isTransitioning, P]);
  let $ = _e(() => ({
    createHref: e.createHref,
    encodeLocation: e.encodeLocation,
    go: (k) => e.navigate(k),
    push: (k, F, te) => e.navigate(k, {
      state: F,
      preventScrollReset: te?.preventScrollReset
    }),
    replace: (k, F, te) => e.navigate(k, {
      replace: !0,
      state: F,
      preventScrollReset: te?.preventScrollReset
    })
  }), [e]), J = e.basename || "/", b = _e(
    () => ({
      router: e,
      navigator: $,
      static: !1,
      basename: J,
      onError: a
    }),
    [e, $, J, a]
  );
  return /* @__PURE__ */ U(it, null, /* @__PURE__ */ U(ot.Provider, { value: b }, /* @__PURE__ */ U(Bt.Provider, { value: d }, /* @__PURE__ */ U(mn.Provider, { value: O.current }, /* @__PURE__ */ U(jr.Provider, { value: f }, /* @__PURE__ */ U(
    cs,
    {
      basename: J,
      location: d.location,
      navigationType: d.historyAction,
      navigator: $,
      unstable_useTransitions: n
    },
    /* @__PURE__ */ U(
      ss,
      {
        routes: e.routes,
        future: e.future,
        state: d,
        onError: a
      }
    )
  ))))), null);
}
function Ea(e, t) {
  return {
    // Don't surface "current location specific" stuff mid-navigation
    // (historyAction, location, matches, loaderData, errors, initialized,
    // restoreScroll, preventScrollReset, blockers, etc.)
    ...e,
    // Only surface "pending/in-flight stuff"
    // (navigation, revalidation, actionData, fetchers, )
    navigation: t.navigation.state !== "idle" ? t.navigation : e.navigation,
    revalidation: t.revalidation !== "idle" ? t.revalidation : e.revalidation,
    actionData: t.navigation.state !== "submitting" ? t.actionData : e.actionData,
    fetchers: t.fetchers
  };
}
var ss = Wa(ls);
function ls({
  routes: e,
  future: t,
  state: a,
  onError: n
}) {
  return Go(e, void 0, a, n, t);
}
function ds(e) {
  return Bo(e.context);
}
function cs({
  basename: e = "/",
  children: t = null,
  location: a,
  navigationType: n = "POP",
  navigator: i,
  static: o = !1,
  unstable_useTransitions: l
}) {
  G(
    !Gt(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let d = e.replace(/^\/*/, "/"), c = _e(
    () => ({
      basename: d,
      navigator: i,
      static: o,
      unstable_useTransitions: l,
      future: {}
    }),
    [d, i, o, l]
  );
  typeof a == "string" && (a = qe(a));
  let {
    pathname: m = "/",
    search: g = "",
    hash: f = "",
    state: v = null,
    key: y = "default"
  } = a, w = _e(() => {
    let N = Pe(m, d);
    return N == null ? null : {
      location: {
        pathname: N,
        search: g,
        hash: f,
        state: v,
        key: y
      },
      navigationType: n
    };
  }, [d, m, g, f, v, y, n]);
  return he(
    w != null,
    `<Router basename="${d}"> is not able to match the URL "${m}${g}${f}" because it does not start with the basename, so the <Router> won't render anything.`
  ), w == null ? null : /* @__PURE__ */ U(Ae.Provider, { value: c }, /* @__PURE__ */ U(sr.Provider, { children: t, value: w }));
}
var ar = "get", nr = "application/x-www-form-urlencoded";
function lr(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function hs(e) {
  return lr(e) && e.tagName.toLowerCase() === "button";
}
function ms(e) {
  return lr(e) && e.tagName.toLowerCase() === "form";
}
function us(e) {
  return lr(e) && e.tagName.toLowerCase() === "input";
}
function fs(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function gs(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !fs(e);
}
var Zt = null;
function ps() {
  if (Zt === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Zt = !1;
    } catch {
      Zt = !0;
    }
  return Zt;
}
var bs = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function vr(e) {
  return e != null && !bs.has(e) ? (he(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nr}"`
  ), null) : e;
}
function ys(e, t) {
  let a, n, i, o, l;
  if (ms(e)) {
    let d = e.getAttribute("action");
    n = d ? Pe(d, t) : null, a = e.getAttribute("method") || ar, i = vr(e.getAttribute("enctype")) || nr, o = new FormData(e);
  } else if (hs(e) || us(e) && (e.type === "submit" || e.type === "image")) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let c = e.getAttribute("formaction") || d.getAttribute("action");
    if (n = c ? Pe(c, t) : null, a = e.getAttribute("formmethod") || d.getAttribute("method") || ar, i = vr(e.getAttribute("formenctype")) || vr(d.getAttribute("enctype")) || nr, o = new FormData(d, e), !ps()) {
      let { name: m, type: g, value: f } = e;
      if (g === "image") {
        let v = m ? `${m}.` : "";
        o.append(`${v}x`, "0"), o.append(`${v}y`, "0");
      } else m && o.append(m, f);
    }
  } else {
    if (lr(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    a = ar, n = null, i = nr, l = e;
  }
  return o && i === "text/plain" && (l = o, o = void 0), { action: n, method: a.toLowerCase(), encType: i, formData: o, body: l };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Br(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function vs(e, t, a, n) {
  let i = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return a ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${n}` : i.pathname = `${i.pathname}.${n}` : i.pathname === "/" ? i.pathname = `_root.${n}` : t && Pe(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${n}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${n}`, i;
}
async function xs(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let a = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = a, a;
  } catch (a) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(a), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function ws(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Ns(e, t, a) {
  let n = await Promise.all(
    e.map(async (i) => {
      let o = t.routes[i.route.id];
      if (o) {
        let l = await xs(o, a);
        return l.links ? l.links() : [];
      }
      return [];
    })
  );
  return Ss(
    n.flat(1).filter(ws).filter((i) => i.rel === "stylesheet" || i.rel === "preload").map(
      (i) => i.rel === "stylesheet" ? { ...i, rel: "prefetch", as: "style" } : { ...i, rel: "prefetch" }
    )
  );
}
function Ca(e, t, a, n, i, o) {
  let l = (c, m) => a[m] ? c.route.id !== a[m].route.id : !0, d = (c, m) => (
    // param change, /users/123 -> /users/456
    a[m].pathname !== c.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    a[m].route.path?.endsWith("*") && a[m].params["*"] !== c.params["*"]
  );
  return o === "assets" ? t.filter(
    (c, m) => l(c, m) || d(c, m)
  ) : o === "data" ? t.filter((c, m) => {
    let g = n.routes[c.route.id];
    if (!g || !g.hasLoader)
      return !1;
    if (l(c, m) || d(c, m))
      return !0;
    if (c.route.shouldRevalidate) {
      let f = c.route.shouldRevalidate({
        currentUrl: new URL(
          i.pathname + i.search + i.hash,
          window.origin
        ),
        currentParams: a[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: c.params,
        defaultShouldRevalidate: !0
      });
      if (typeof f == "boolean")
        return f;
    }
    return !0;
  }) : [];
}
function ks(e, t, { includeHydrateFallback: a } = {}) {
  return Rs(
    e.map((n) => {
      let i = t.routes[n.route.id];
      if (!i) return [];
      let o = [i.module];
      return i.clientActionModule && (o = o.concat(i.clientActionModule)), i.clientLoaderModule && (o = o.concat(i.clientLoaderModule)), a && i.hydrateFallbackModule && (o = o.concat(i.hydrateFallbackModule)), i.imports && (o = o.concat(i.imports)), o;
    }).flat(1)
  );
}
function Rs(e) {
  return [...new Set(e)];
}
function Ls(e) {
  let t = {}, a = Object.keys(e).sort();
  for (let n of a)
    t[n] = e[n];
  return t;
}
function Ss(e, t) {
  let a = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((n, i) => {
    let o = JSON.stringify(Ls(i));
    return a.has(o) || (a.add(o), n.push({ key: o, link: i })), n;
  }, []);
}
function yn() {
  let e = K(ot);
  return Br(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function _s() {
  let e = K(Bt);
  return Br(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Gr = Re(void 0);
Gr.displayName = "FrameworkContext";
function vn() {
  let e = K(Gr);
  return Br(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Ps(e, t) {
  let a = K(Gr), [n, i] = Te(!1), [o, l] = Te(!1), { onFocus: d, onBlur: c, onMouseEnter: m, onMouseLeave: g, onTouchStart: f } = t, v = zt(null);
  Ve(() => {
    if (e === "render" && l(!0), e === "viewport") {
      let N = (P) => {
        P.forEach((L) => {
          l(L.isIntersecting);
        });
      }, S = new IntersectionObserver(N, { threshold: 0.5 });
      return v.current && S.observe(v.current), () => {
        S.disconnect();
      };
    }
  }, [e]), Ve(() => {
    if (n) {
      let N = setTimeout(() => {
        l(!0);
      }, 100);
      return () => {
        clearTimeout(N);
      };
    }
  }, [n]);
  let y = () => {
    i(!0);
  }, w = () => {
    i(!1), l(!1);
  };
  return a ? e !== "intent" ? [o, v, {}] : [
    o,
    v,
    {
      onFocus: St(d, y),
      onBlur: St(c, w),
      onMouseEnter: St(m, y),
      onMouseLeave: St(g, w),
      onTouchStart: St(f, y)
    }
  ] : [!1, v, {}];
}
function St(e, t) {
  return (a) => {
    e && e(a), a.defaultPrevented || t(a);
  };
}
function As({ page: e, ...t }) {
  let { router: a } = yn(), n = _e(
    () => We(a.routes, e, a.basename),
    [a.routes, e, a.basename]
  );
  return n ? /* @__PURE__ */ U(Cs, { page: e, matches: n, ...t }) : null;
}
function Es(e) {
  let { manifest: t, routeModules: a } = vn(), [n, i] = Te([]);
  return Ve(() => {
    let o = !1;
    return Ns(e, t, a).then(
      (l) => {
        o || i(l);
      }
    ), () => {
      o = !0;
    };
  }, [e, t, a]), n;
}
function Cs({
  page: e,
  matches: t,
  ...a
}) {
  let n = Xe(), { future: i, manifest: o, routeModules: l } = vn(), { basename: d } = yn(), { loaderData: c, matches: m } = _s(), g = _e(
    () => Ca(
      e,
      t,
      m,
      o,
      n,
      "data"
    ),
    [e, t, m, o, n]
  ), f = _e(
    () => Ca(
      e,
      t,
      m,
      o,
      n,
      "assets"
    ),
    [e, t, m, o, n]
  ), v = _e(() => {
    if (e === n.pathname + n.search + n.hash)
      return [];
    let N = /* @__PURE__ */ new Set(), S = !1;
    if (t.forEach((L) => {
      let O = o.routes[L.route.id];
      !O || !O.hasLoader || (!g.some((X) => X.route.id === L.route.id) && L.route.id in c && l[L.route.id]?.shouldRevalidate || O.hasClientLoader ? S = !0 : N.add(L.route.id));
    }), N.size === 0)
      return [];
    let P = vs(
      e,
      d,
      i.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return S && N.size > 0 && P.searchParams.set(
      "_routes",
      t.filter((L) => N.has(L.route.id)).map((L) => L.route.id).join(",")
    ), [P.pathname + P.search];
  }, [
    d,
    i.unstable_trailingSlashAwareDataRequests,
    c,
    n,
    o,
    g,
    t,
    e,
    l
  ]), y = _e(
    () => ks(f, o),
    [f, o]
  ), w = Es(f);
  return /* @__PURE__ */ U(it, null, v.map((N) => /* @__PURE__ */ U("link", { key: N, rel: "prefetch", as: "fetch", href: N, ...a })), y.map((N) => /* @__PURE__ */ U("link", { key: N, rel: "modulepreload", href: N, ...a })), w.map(({ key: N, link: S }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ U(
      "link",
      {
        key: N,
        nonce: a.nonce,
        ...S,
        crossOrigin: S.crossOrigin ?? a.crossOrigin
      }
    )
  )));
}
function Ts(...e) {
  return (t) => {
    e.forEach((a) => {
      typeof a == "function" ? a(t) : a != null && (a.current = t);
    });
  };
}
var Ds = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Ds && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function Ms(e, t) {
  return io({
    basename: t?.basename,
    getContext: t?.getContext,
    future: t?.future,
    history: wi({ window: t?.window }),
    hydrationData: Os(),
    routes: e,
    mapRouteProperties: as,
    hydrationRouteProperties: ns,
    dataStrategy: t?.dataStrategy,
    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
    window: t?.window,
    unstable_instrumentations: t?.unstable_instrumentations
  }).initialize();
}
function Os() {
  let e = window?.__staticRouterHydrationData;
  return e && e.errors && (e = {
    ...e,
    errors: Is(e.errors)
  }), e;
}
function Is(e) {
  if (!e) return null;
  let t = Object.entries(e), a = {};
  for (let [n, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      a[n] = new Ut(
        i.status,
        i.statusText,
        i.data,
        i.internal === !0
      );
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let l = new o(i.message);
            l.stack = "", a[n] = l;
          } catch {
          }
      }
      if (a[n] == null) {
        let o = new Error(i.message);
        o.stack = "", a[n] = o;
      }
    } else
      a[n] = i;
  return a;
}
var xn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, jt = Ye(
  function({
    onClick: t,
    discover: a = "render",
    prefetch: n = "none",
    relative: i,
    reloadDocument: o,
    replace: l,
    state: d,
    target: c,
    to: m,
    preventScrollReset: g,
    viewTransition: f,
    unstable_defaultShouldRevalidate: v,
    ...y
  }, w) {
    let { basename: N, unstable_useTransitions: S } = K(Ae), P = typeof m == "string" && xn.test(m), L = Qa(m, N);
    m = L.to;
    let O = jo(m, { relative: i }), [X, $, J] = Ps(
      n,
      y
    ), b = Fs(m, {
      replace: l,
      state: d,
      target: c,
      preventScrollReset: g,
      relative: i,
      viewTransition: f,
      unstable_defaultShouldRevalidate: v,
      unstable_useTransitions: S
    });
    function k(te) {
      t && t(te), te.defaultPrevented || b(te);
    }
    let F = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ U(
        "a",
        {
          ...y,
          ...J,
          href: L.absoluteURL || O,
          onClick: L.isExternal || o ? t : k,
          ref: Ts(w, $),
          target: c,
          "data-discover": !P && a === "render" ? "true" : void 0
        }
      )
    );
    return X && !P ? /* @__PURE__ */ U(it, null, F, /* @__PURE__ */ U(As, { page: O })) : F;
  }
);
jt.displayName = "Link";
var js = Ye(
  function({
    "aria-current": t = "page",
    caseSensitive: a = !1,
    className: n = "",
    end: i = !1,
    style: o,
    to: l,
    viewTransition: d,
    children: c,
    ...m
  }, g) {
    let f = $t(l, { relative: m.relative }), v = Xe(), y = K(Bt), { navigator: w, basename: N } = K(Ae), S = y != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Hs(f) && d === !0, P = w.encodeLocation ? w.encodeLocation(f).pathname : f.pathname, L = v.pathname, O = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    a || (L = L.toLowerCase(), O = O ? O.toLowerCase() : null, P = P.toLowerCase()), O && N && (O = Pe(O, N) || O);
    const X = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
    let $ = L === P || !i && L.startsWith(P) && L.charAt(X) === "/", J = O != null && (O === P || !i && O.startsWith(P) && O.charAt(P.length) === "/"), b = {
      isActive: $,
      isPending: J,
      isTransitioning: S
    }, k = $ ? t : void 0, F;
    typeof n == "function" ? F = n(b) : F = [
      n,
      $ ? "active" : null,
      J ? "pending" : null,
      S ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let te = typeof o == "function" ? o(b) : o;
    return /* @__PURE__ */ U(
      jt,
      {
        ...m,
        "aria-current": k,
        className: F,
        ref: g,
        style: te,
        to: l,
        viewTransition: d
      },
      typeof c == "function" ? c(b) : c
    );
  }
);
js.displayName = "NavLink";
var zs = Ye(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: a,
    reloadDocument: n,
    replace: i,
    state: o,
    method: l = ar,
    action: d,
    onSubmit: c,
    relative: m,
    preventScrollReset: g,
    viewTransition: f,
    unstable_defaultShouldRevalidate: v,
    ...y
  }, w) => {
    let { unstable_useTransitions: N } = K(Ae), S = $s(), P = Ws(d, { relative: m }), L = l.toLowerCase() === "get" ? "get" : "post", O = typeof d == "string" && xn.test(d);
    return /* @__PURE__ */ U(
      "form",
      {
        ref: w,
        method: L,
        action: P,
        onSubmit: n ? c : ($) => {
          if (c && c($), $.defaultPrevented) return;
          $.preventDefault();
          let J = $.nativeEvent.submitter, b = J?.getAttribute("formmethod") || l, k = () => S(J || $.currentTarget, {
            fetcherKey: t,
            method: b,
            navigate: a,
            replace: i,
            state: o,
            relative: m,
            preventScrollReset: g,
            viewTransition: f,
            unstable_defaultShouldRevalidate: v
          });
          N && a !== !1 ? Dt(() => k()) : k();
        },
        ...y,
        "data-discover": !O && e === "render" ? "true" : void 0
      }
    );
  }
);
zs.displayName = "Form";
function Us(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wn(e) {
  let t = K(ot);
  return G(t, Us(e)), t;
}
function Fs(e, {
  target: t,
  replace: a,
  state: n,
  preventScrollReset: i,
  relative: o,
  viewTransition: l,
  unstable_defaultShouldRevalidate: d,
  unstable_useTransitions: c
} = {}) {
  let m = zo(), g = Xe(), f = $t(e, { relative: o });
  return pt(
    (v) => {
      if (gs(v, t)) {
        v.preventDefault();
        let y = a !== void 0 ? a : Me(g) === Me(f), w = () => m(e, {
          replace: y,
          state: n,
          preventScrollReset: i,
          relative: o,
          viewTransition: l,
          unstable_defaultShouldRevalidate: d
        });
        c ? Dt(() => w()) : w();
      }
    },
    [
      g,
      m,
      f,
      a,
      n,
      t,
      e,
      i,
      o,
      l,
      d,
      c
    ]
  );
}
var Bs = 0, Gs = () => `__${String(++Bs)}__`;
function $s() {
  let { router: e } = wn(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = K(Ae), a = Jo(), n = e.fetch, i = e.navigate;
  return pt(
    async (o, l = {}) => {
      let { action: d, method: c, encType: m, formData: g, body: f } = ys(
        o,
        t
      );
      if (l.navigate === !1) {
        let v = l.fetcherKey || Gs();
        await n(v, a, l.action || d, {
          unstable_defaultShouldRevalidate: l.unstable_defaultShouldRevalidate,
          preventScrollReset: l.preventScrollReset,
          formData: g,
          body: f,
          formMethod: l.method || c,
          formEncType: l.encType || m,
          flushSync: l.flushSync
        });
      } else
        await i(l.action || d, {
          unstable_defaultShouldRevalidate: l.unstable_defaultShouldRevalidate,
          preventScrollReset: l.preventScrollReset,
          formData: g,
          body: f,
          formMethod: l.method || c,
          formEncType: l.encType || m,
          replace: l.replace,
          state: l.state,
          fromRouteId: a,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition
        });
    },
    [n, i, t, a]
  );
}
function Ws(e, { relative: t } = {}) {
  let { basename: a } = K(Ae), n = K(Oe);
  G(n, "useFormAction must be used inside a RouteContext");
  let [i] = n.matches.slice(-1), o = { ...$t(e || ".", { relative: t }) }, l = Xe();
  if (e == null) {
    o.search = l.search;
    let d = new URLSearchParams(o.search), c = d.getAll("index");
    if (c.some((g) => g === "")) {
      d.delete("index"), c.filter((f) => f).forEach((f) => d.append("index", f));
      let g = d.toString();
      o.search = g ? `?${g}` : "";
    }
  }
  return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (o.pathname = o.pathname === "/" ? a : De([a, o.pathname])), Me(o);
}
function Hs(e, { relative: t } = {}) {
  let a = K(jr);
  G(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = wn(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), i = $t(e, { relative: t });
  if (!a.isTransitioning)
    return !1;
  let o = Pe(a.currentLocation.pathname, n) || a.currentLocation.pathname, l = Pe(a.nextLocation.pathname, n) || a.nextLocation.pathname;
  return ir(i.pathname, l) != null || ir(i.pathname, o) != null;
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ks = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), Ta = (e) => {
  const t = Ks(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Nn = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ys = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = Ye(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: o,
    iconNode: l,
    ...d
  }, c) => U(
    "svg",
    {
      ref: c,
      ...Ys,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(a) * 24 / Number(t) : a,
      className: Nn("lucide", i),
      ...d
    },
    [
      ...l.map(([m, g]) => U(m, g)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (e, t) => {
  const a = Ye(
    ({ className: n, ...i }, o) => U(qs, {
      ref: o,
      iconNode: t,
      className: Nn(
        `lucide-${Vs(Ta(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return a.displayName = Ta(e), a;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Js = st("arrow-right", Xs);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], Zs = st("chart-line", Qs);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], tl = st("chevron-right", el);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], al = st("layers", rl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
], il = st("plane", nl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], sl = st("shield", ol);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
], dl = st("sparkles", ll), Da = globalThis.__GLOBALS__.getAssetURL("a7cff90ec7913351f33a290665197049e5997cea.png");
function cl() {
  const t = Xe().pathname === "/";
  return /* @__PURE__ */ s("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50", children: [
    /* @__PURE__ */ r("nav", { className: "border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50", children: /* @__PURE__ */ r("div", { className: "max-w-7xl mx-auto px-6 py-5", children: /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ s(jt, { to: "/", className: "flex items-center gap-3 hover:opacity-80 transition-opacity", children: [
        /* @__PURE__ */ r(
          "img",
          {
            src: Da,
            alt: "AG Logo",
            className: "w-12 h-12 rounded-lg shadow-md"
          }
        ),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("div", { className: "font-bold text-gray-900 text-lg", children: "Aishwarya Gondlyala" }),
          /* @__PURE__ */ r("div", { className: "text-xs text-gray-500 font-medium", children: "Product Designer | UX Strategist | Design Lead" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-6", children: t ? /* @__PURE__ */ s("div", { className: "flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-lg", children: [
        /* @__PURE__ */ r("div", { className: "w-2 h-2 bg-red-600 rounded-full animate-pulse" }),
        /* @__PURE__ */ r("span", { className: "text-xs font-semibold text-red-800", children: "5 Detailed Case Studies" })
      ] }) : /* @__PURE__ */ s(
        jt,
        {
          to: "/",
          className: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all",
          children: [
            /* @__PURE__ */ r("span", { children: "All Case Studies" }),
            /* @__PURE__ */ r(tl, { className: "w-4 h-4" })
          ]
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ r("main", { children: /* @__PURE__ */ r(ds, {}) }),
    /* @__PURE__ */ r("footer", { className: "border-t bg-white mt-32", children: /* @__PURE__ */ r("div", { className: "max-w-7xl mx-auto px-6 py-10", children: /* @__PURE__ */ s("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ r(
          "img",
          {
            src: Da,
            alt: "AG Logo",
            className: "w-10 h-10 rounded-lg"
          }
        ),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("div", { className: "font-bold text-gray-900", children: "Aishwarya Gondlyala" }),
          /* @__PURE__ */ r("div", { className: "text-sm text-gray-600", children: "Product Designer" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "text-sm text-gray-500", children: "© 2024 Aishwarya Gondlyala · Product Design Portfolio" })
    ] }) }) })
  ] });
}
const hl = [
  {
    title: "Digital Payments Platform",
    description: "Mobile-first payments, KYC-driven access, wallet and utility flows",
    tags: ["Fintech", "Mobile UX", "KYC Flows"],
    path: "/digital-payments",
    icon: dl,
    type: "Mobile App",
    color: "blue"
  },
  {
    title: "Studio Project Operations System",
    description: "Workflow system for projects, shoots, deliverables, and payments",
    tags: ["Workflow Design", "Dashboard UX"],
    path: "/studio-operations",
    icon: al,
    type: "Web Platform",
    color: "purple"
  },
  {
    title: "Decentralized Interchain Platform",
    description: "Governance, staking, portfolio visibility, and transfer flows",
    tags: ["Web3 Product", "Dashboard UX"],
    path: "/decentralized-platform",
    icon: Zs,
    type: "Web3 Platform",
    color: "indigo"
  },
  {
    title: "Data Governance Platform",
    description: "Enterprise platform for policies, access, audit, and governance workflows",
    tags: ["Enterprise SaaS", "Governance UX"],
    path: "/data-governance",
    icon: sl,
    type: "Enterprise SaaS",
    color: "emerald"
  },
  {
    title: "Ground Operations Intelligence Platform",
    description: "Monitoring and operations dashboards for airport fleet intelligence",
    tags: ["Operations Intelligence", "Dashboard"],
    path: "/ground-operations",
    icon: il,
    type: "Operations Platform",
    color: "orange"
  }
], ml = {
  blue: "group-hover:text-red-600 group-hover:border-red-600",
  purple: "group-hover:text-red-600 group-hover:border-red-600",
  indigo: "group-hover:text-red-600 group-hover:border-red-600",
  emerald: "group-hover:text-red-600 group-hover:border-red-600",
  orange: "group-hover:text-red-600 group-hover:border-red-600"
};
function ul() {
  return /* @__PURE__ */ r("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50", children: /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ r("div", { className: "mb-32", children: /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight", children: "Product Designer | UX Strategist | Design Lead" }),
        /* @__PURE__ */ s("p", { className: "text-lg text-gray-600 leading-relaxed", children: [
          "I design products that turn complex systems into structured, understandable experiences. My work spans ",
          /* @__PURE__ */ r("span", { className: "font-semibold text-gray-900", children: "fintech" }),
          ", ",
          /* @__PURE__ */ r("span", { className: "font-semibold text-gray-900", children: "enterprise SaaS" }),
          ", ",
          /* @__PURE__ */ r("span", { className: "font-semibold text-gray-900", children: "operational intelligence" }),
          ", and ",
          /* @__PURE__ */ r("span", { className: "font-semibold text-gray-900", children: "Web3" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-6", children: [
        /* @__PURE__ */ s("div", { className: "bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all", children: [
          /* @__PURE__ */ r("div", { className: "text-4xl font-bold text-gray-900 mb-2", children: "15+" }),
          /* @__PURE__ */ r("div", { className: "text-sm text-gray-600", children: "Total Projects" })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all", children: [
          /* @__PURE__ */ r("div", { className: "text-4xl font-bold text-gray-900 mb-2", children: "100+" }),
          /* @__PURE__ */ r("div", { className: "text-sm text-gray-600", children: "Screens Designed" })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all", children: [
          /* @__PURE__ */ r("div", { className: "text-4xl font-bold text-gray-900 mb-2", children: "5+" }),
          /* @__PURE__ */ r("div", { className: "text-sm text-gray-600", children: "Teams Led" })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all", children: [
          /* @__PURE__ */ r("div", { className: "text-4xl font-bold text-gray-900 mb-2", children: "6+" }),
          /* @__PURE__ */ r("div", { className: "text-sm text-gray-600", children: "Years Experience" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ s("div", { className: "relative mb-24", children: [
      /* @__PURE__ */ r("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ r("div", { className: "w-full border-t border-gray-200" }) }),
      /* @__PURE__ */ r("div", { className: "relative flex justify-center", children: /* @__PURE__ */ r("div", { className: "bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4", children: /* @__PURE__ */ s("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ r("div", { className: "w-2 h-2 rounded-full bg-red-600" }),
        /* @__PURE__ */ r("div", { className: "w-2 h-2 rounded-full bg-gray-900" }),
        /* @__PURE__ */ r("div", { className: "w-2 h-2 rounded-full bg-red-600" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ s("div", { className: "mb-16", children: [
      /* @__PURE__ */ s("div", { className: "mb-10", children: [
        /* @__PURE__ */ r("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Featured Work" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "5 selected case studies from 15+ projects" })
      ] }),
      /* @__PURE__ */ r("div", { className: "space-y-3", children: hl.map((e, t) => {
        const a = e.icon;
        return /* @__PURE__ */ r(
          jt,
          {
            to: e.path,
            className: "group block bg-white border-l-4 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg",
            children: /* @__PURE__ */ s("div", { className: "p-6 flex items-center gap-6", children: [
              /* @__PURE__ */ r("div", { className: "text-2xl font-bold text-gray-300 group-hover:text-gray-900 transition-colors w-8 flex-shrink-0", children: String(t + 1).padStart(2, "0") }),
              /* @__PURE__ */ r("div", { className: "flex-shrink-0", children: /* @__PURE__ */ r("div", { className: `w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center transition-all ${ml[e.color]}`, children: /* @__PURE__ */ r(a, { className: "w-5 h-5 text-gray-400 group-hover:text-current transition-colors" }) }) }),
              /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ s("div", { className: "flex items-baseline gap-3 mb-1", children: [
                  /* @__PURE__ */ r("h3", { className: "text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors", children: e.title }),
                  /* @__PURE__ */ r("span", { className: "text-xs text-gray-500 font-medium flex-shrink-0", children: e.type })
                ] }),
                /* @__PURE__ */ r("p", { className: "text-sm text-gray-600", children: e.description })
              ] }),
              /* @__PURE__ */ r("div", { className: "hidden lg:flex flex-wrap gap-2 flex-shrink-0 max-w-xs", children: e.tags.map((n, i) => /* @__PURE__ */ r(
                "span",
                {
                  className: "px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs",
                  children: n
                },
                i
              )) }),
              /* @__PURE__ */ r("div", { className: "flex-shrink-0", children: /* @__PURE__ */ r(Js, { className: "w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" }) })
            ] })
          },
          t
        );
      }) })
    ] })
  ] }) });
}
function Ma(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function fl(...e) {
  return (t) => {
    let a = !1;
    const n = e.map((i) => {
      const o = Ma(i, t);
      return !a && typeof o == "function" && (a = !0), o;
    });
    if (a)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const o = n[i];
          typeof o == "function" ? o() : Ma(e[i], null);
        }
      };
  };
}
var kn = Ye((e, t) => {
  const { children: a, ...n } = e, i = nt.toArray(a), o = i.find(pl);
  if (o) {
    const l = o.props.children, d = i.map((c) => c === o ? nt.count(l) > 1 ? nt.only(null) : Tt(l) ? l.props.children : null : c);
    return /* @__PURE__ */ r(Sr, { ...n, ref: t, children: Tt(l) ? or(l, void 0, d) : null });
  }
  return /* @__PURE__ */ r(Sr, { ...n, ref: t, children: a });
});
kn.displayName = "Slot";
var Sr = Ye((e, t) => {
  const { children: a, ...n } = e;
  if (Tt(a)) {
    const i = yl(a), o = bl(n, a.props);
    return a.type !== it && (o.ref = t ? fl(t, i) : i), or(a, o);
  }
  return nt.count(a) > 1 ? nt.only(null) : null;
});
Sr.displayName = "SlotClone";
var gl = ({ children: e }) => /* @__PURE__ */ r(Jn, { children: e });
function pl(e) {
  return Tt(e) && e.type === gl;
}
function bl(e, t) {
  const a = { ...t };
  for (const n in t) {
    const i = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? i && o ? a[n] = (...d) => {
      o(...d), i(...d);
    } : i && (a[n] = i) : n === "style" ? a[n] = { ...i, ...o } : n === "className" && (a[n] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...a };
}
function yl(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, a = t && "isReactWarning" in t && t.isReactWarning;
  return a ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, a = t && "isReactWarning" in t && t.isReactWarning, a ? e.props.ref : e.props.ref || e.ref);
}
function Rn(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (a = Rn(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function Ln() {
  for (var e, t, a = 0, n = "", i = arguments.length; a < i; a++) (e = arguments[a]) && (t = Rn(e)) && (n && (n += " "), n += t);
  return n;
}
const Oa = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ia = Ln, vl = (e, t) => (a) => {
  var n;
  if (t?.variants == null) return Ia(e, a?.class, a?.className);
  const { variants: i, defaultVariants: o } = t, l = Object.keys(i).map((m) => {
    const g = a?.[m], f = o?.[m];
    if (g === null) return null;
    const v = Oa(g) || Oa(f);
    return i[m][v];
  }), d = a && Object.entries(a).reduce((m, g) => {
    let [f, v] = g;
    return v === void 0 || (m[f] = v), m;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((m, g) => {
    let { class: f, className: v, ...y } = g;
    return Object.entries(y).every((w) => {
      let [N, S] = w;
      return Array.isArray(S) ? S.includes({
        ...o,
        ...d
      }[N]) : {
        ...o,
        ...d
      }[N] === S;
    }) ? [
      ...m,
      f,
      v
    ] : m;
  }, []);
  return Ia(e, l, c, a?.class, a?.className);
}, $r = "-", xl = (e) => {
  const t = Nl(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (l) => {
      const d = l.split($r);
      return d[0] === "" && d.length !== 1 && d.shift(), Sn(d, t) || wl(l);
    },
    getConflictingClassGroupIds: (l, d) => {
      const c = a[l] || [];
      return d && n[l] ? [...c, ...n[l]] : c;
    }
  };
}, Sn = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), i = n ? Sn(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join($r);
  return t.validators.find(({
    validator: l
  }) => l(o))?.classGroupId;
}, ja = /^\[(.+)\]$/, wl = (e) => {
  if (ja.test(e)) {
    const t = ja.exec(e)[1], a = t?.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Nl = (e) => {
  const {
    theme: t,
    classGroups: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in a)
    _r(a[i], n, i, t);
  return n;
}, _r = (e, t, a, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : za(t, i);
      o.classGroupId = a;
      return;
    }
    if (typeof i == "function") {
      if (kl(i)) {
        _r(i(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: a
      });
      return;
    }
    Object.entries(i).forEach(([o, l]) => {
      _r(l, za(t, o), a, n);
    });
  });
}, za = (e, t) => {
  let a = e;
  return t.split($r).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, kl = (e) => e.isThemeGetter, Rl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (o, l) => {
    a.set(o, l), t++, t > e && (t = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let l = a.get(o);
      if (l !== void 0)
        return l;
      if ((l = n.get(o)) !== void 0)
        return i(o, l), l;
    },
    set(o, l) {
      a.has(o) ? a.set(o, l) : i(o, l);
    }
  };
}, Pr = "!", Ar = ":", Ll = Ar.length, Sl = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: a
  } = e;
  let n = (i) => {
    const o = [];
    let l = 0, d = 0, c = 0, m;
    for (let w = 0; w < i.length; w++) {
      let N = i[w];
      if (l === 0 && d === 0) {
        if (N === Ar) {
          o.push(i.slice(c, w)), c = w + Ll;
          continue;
        }
        if (N === "/") {
          m = w;
          continue;
        }
      }
      N === "[" ? l++ : N === "]" ? l-- : N === "(" ? d++ : N === ")" && d--;
    }
    const g = o.length === 0 ? i : i.substring(c), f = _l(g), v = f !== g, y = m && m > c ? m - c : void 0;
    return {
      modifiers: o,
      hasImportantModifier: v,
      baseClassName: f,
      maybePostfixModifierPosition: y
    };
  };
  if (t) {
    const i = t + Ar, o = n;
    n = (l) => l.startsWith(i) ? o(l.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: l,
      maybePostfixModifierPosition: void 0
    };
  }
  if (a) {
    const i = n;
    n = (o) => a({
      className: o,
      parseClassName: i
    });
  }
  return n;
}, _l = (e) => e.endsWith(Pr) ? e.substring(0, e.length - 1) : e.startsWith(Pr) ? e.substring(1) : e, Pl = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const i = [];
    let o = [];
    return n.forEach((l) => {
      l[0] === "[" || t[l] ? (i.push(...o.sort(), l), o = []) : o.push(l);
    }), i.push(...o.sort()), i;
  };
}, Al = (e) => ({
  cache: Rl(e.cacheSize),
  parseClassName: Sl(e),
  sortModifiers: Pl(e),
  ...xl(e)
}), El = /\s+/, Cl = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: o
  } = t, l = [], d = e.trim().split(El);
  let c = "";
  for (let m = d.length - 1; m >= 0; m -= 1) {
    const g = d[m], {
      isExternal: f,
      modifiers: v,
      hasImportantModifier: y,
      baseClassName: w,
      maybePostfixModifierPosition: N
    } = a(g);
    if (f) {
      c = g + (c.length > 0 ? " " + c : c);
      continue;
    }
    let S = !!N, P = n(S ? w.substring(0, N) : w);
    if (!P) {
      if (!S) {
        c = g + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (P = n(w), !P) {
        c = g + (c.length > 0 ? " " + c : c);
        continue;
      }
      S = !1;
    }
    const L = o(v).join(":"), O = y ? L + Pr : L, X = O + P;
    if (l.includes(X))
      continue;
    l.push(X);
    const $ = i(P, S);
    for (let J = 0; J < $.length; ++J) {
      const b = $[J];
      l.push(O + b);
    }
    c = g + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Tl() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = _n(t)) && (n && (n += " "), n += a);
  return n;
}
const _n = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = _n(e[n])) && (a && (a += " "), a += t);
  return a;
};
function Dl(e, ...t) {
  let a, n, i, o = l;
  function l(c) {
    const m = t.reduce((g, f) => f(g), e());
    return a = Al(m), n = a.cache.get, i = a.cache.set, o = d, d(c);
  }
  function d(c) {
    const m = n(c);
    if (m)
      return m;
    const g = Cl(c, a);
    return i(c, g), g;
  }
  return function() {
    return o(Tl.apply(null, arguments));
  };
}
const me = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, Pn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, An = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ml = /^\d+\/\d+$/, Ol = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Il = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, zl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ul = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, mt = (e) => Ml.test(e), B = (e) => !!e && !Number.isNaN(Number(e)), $e = (e) => !!e && Number.isInteger(Number(e)), xr = (e) => e.endsWith("%") && B(e.slice(0, -1)), Ue = (e) => Ol.test(e), Fl = () => !0, Bl = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Il.test(e) && !jl.test(e)
), En = () => !1, Gl = (e) => zl.test(e), $l = (e) => Ul.test(e), Wl = (e) => !E(e) && !C(e), Hl = (e) => bt(e, Dn, En), E = (e) => Pn.test(e), rt = (e) => bt(e, Mn, Bl), wr = (e) => bt(e, Xl, B), Ua = (e) => bt(e, Cn, En), Vl = (e) => bt(e, Tn, $l), er = (e) => bt(e, On, Gl), C = (e) => An.test(e), _t = (e) => yt(e, Mn), Kl = (e) => yt(e, Jl), Fa = (e) => yt(e, Cn), Yl = (e) => yt(e, Dn), ql = (e) => yt(e, Tn), tr = (e) => yt(e, On, !0), bt = (e, t, a) => {
  const n = Pn.exec(e);
  return n ? n[1] ? t(n[1]) : a(n[2]) : !1;
}, yt = (e, t, a = !1) => {
  const n = An.exec(e);
  return n ? n[1] ? t(n[1]) : a : !1;
}, Cn = (e) => e === "position" || e === "percentage", Tn = (e) => e === "image" || e === "url", Dn = (e) => e === "length" || e === "size" || e === "bg-size", Mn = (e) => e === "length", Xl = (e) => e === "number", Jl = (e) => e === "family-name", On = (e) => e === "shadow", Ql = () => {
  const e = me("color"), t = me("font"), a = me("text"), n = me("font-weight"), i = me("tracking"), o = me("leading"), l = me("breakpoint"), d = me("container"), c = me("spacing"), m = me("radius"), g = me("shadow"), f = me("inset-shadow"), v = me("text-shadow"), y = me("drop-shadow"), w = me("blur"), N = me("perspective"), S = me("aspect"), P = me("ease"), L = me("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], $ = () => [...X(), C, E], J = () => ["auto", "hidden", "clip", "visible", "scroll"], b = () => ["auto", "contain", "none"], k = () => [C, E, c], F = () => [mt, "full", "auto", ...k()], te = () => [$e, "none", "subgrid", C, E], Q = () => ["auto", {
    span: ["full", $e, C, E]
  }, $e, C, E], ne = () => [$e, "auto", C, E], we = () => ["auto", "min", "max", "fr", C, E], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ...k()], ce = () => [mt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], _ = () => [e, C, E], le = () => [...X(), Fa, Ua, {
    position: [C, E]
  }], pe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Ne = () => ["auto", "cover", "contain", Yl, Hl, {
    size: [C, E]
  }], ue = () => [xr, _t, rt], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    C,
    E
  ], re = () => ["", B, _t, rt], fe = () => ["solid", "dashed", "dotted", "double"], Ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], oe = () => [B, xr, Fa, Ua], Be = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    C,
    E
  ], lt = () => ["none", B, C, E], dt = () => ["none", B, C, E], vt = () => [B, C, E], de = () => [mt, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ue],
      breakpoint: [Ue],
      color: [Fl],
      container: [Ue],
      "drop-shadow": [Ue],
      ease: ["in", "out", "in-out"],
      font: [Wl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ue],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ue],
      shadow: [Ue],
      spacing: ["px", B],
      text: [Ue],
      "text-shadow": [Ue],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", mt, E, C, S]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [B, E, C, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: $()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: J()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": J()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": J()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: b()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": b()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": b()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: F()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: F()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [$e, "auto", C, E]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [mt, "full", "auto", d, ...k()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [B, mt, "auto", "initial", "none", E]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", B, C, E]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", B, C, E]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [$e, "first", "last", "none", C, E]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": te()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Q()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ne()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ne()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": te()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Q()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ne()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ne()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": we()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": we()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: k()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": k()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": k()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ie(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ie()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ie()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: k()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: k()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: k()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: k()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: k()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: k()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: k()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: k()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: k()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: H()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: H()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: H()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: H()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: H()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: H()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: H()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: H()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: H()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": k()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": k()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: ce()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...ce()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...ce()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...ce()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...ce()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...ce()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...ce()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, _t, rt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, C, wr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", xr, E]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Kl, E, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [i, C, E]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [B, "none", C, wr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...k()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", C, E]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", C, E]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: _()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: _()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...fe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [B, "from-font", "auto", C, rt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: _()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [B, "auto", C, E]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", C, E]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", C, E]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: le()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: pe()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Ne()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, $e, C, E],
          radial: ["", C, E],
          conic: [$e, C, E]
        }, ql, Vl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: _()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ue()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ue()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ue()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: _()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: _()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Z()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Z()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Z()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Z()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Z()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Z()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Z()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Z()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Z()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Z()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Z()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Z()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Z()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Z()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Z()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: re()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": re()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": re()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": re()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": re()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": re()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": re()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": re()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": re()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": re()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": re()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...fe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...fe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: _()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": _()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": _()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": _()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": _()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": _()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": _()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": _()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": _()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: _()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...fe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [B, C, E]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", B, _t, rt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: _()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          tr,
          er
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: _()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, tr, er]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": _()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: re()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: _()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [B, rt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": _()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": re()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": _()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", v, tr, er]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": _()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [B, C, E]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ee()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [B]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": oe()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": oe()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": _()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": oe()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": oe()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": _()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": oe()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": oe()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": _()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": oe()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": oe()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": _()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": oe()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": oe()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": _()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": oe()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": oe()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": _()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": oe()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": oe()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": _()
      }],
      "mask-image-radial": [{
        "mask-radial": [C, E]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": oe()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": oe()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": _()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": X()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [B]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": oe()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": oe()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": _()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: le()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: pe()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Ne()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", C, E]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          C,
          E
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Be()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [B, C, E]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [B, C, E]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          tr,
          er
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": _()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", B, C, E]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [B, C, E]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", B, C, E]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B, C, E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", B, C, E]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          C,
          E
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Be()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [B, C, E]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [B, C, E]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", B, C, E]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [B, C, E]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", B, C, E]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [B, C, E]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B, C, E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", B, C, E]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": k()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": k()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": k()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", C, E]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [B, "initial", C, E]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", P, C, E]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [B, C, E]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", L, C, E]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [N, C, E]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": $()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: lt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": lt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": lt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": lt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: dt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": dt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": dt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": dt()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: vt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": vt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": vt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [C, E, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: $()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: de()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": de()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": de()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": de()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: _()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: _()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C, E]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", C, E]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ..._()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [B, _t, rt, wr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ..._()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Zl = /* @__PURE__ */ Dl(Ql);
function ed(...e) {
  return Zl(Ln(e));
}
const td = vl(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ae({
  className: e,
  variant: t,
  asChild: a = !1,
  ...n
}) {
  return /* @__PURE__ */ r(
    a ? kn : "span",
    {
      "data-slot": "badge",
      className: ed(td({ variant: t }), e),
      ...n
    }
  );
}
const rd = globalThis.__GLOBALS__.getAssetURL("0be4bf41d35d039a039c5eb3cb5ca48c7783e4f6.png"), ad = globalThis.__GLOBALS__.getAssetURL("ec1d6cf1f2dea769ce45f72a6abe26f5672aa600.png"), nd = globalThis.__GLOBALS__.getAssetURL("018885779f90a7cbd583505678438009b91aaf85.png"), id = globalThis.__GLOBALS__.getAssetURL("829ae8fea135415787511ed5f9d7518eb3157b42.png"), od = globalThis.__GLOBALS__.getAssetURL("294cd531458be001e8f1065eef044ded21b85780.png"), sd = globalThis.__GLOBALS__.getAssetURL("e66b735a1281897d9ea73369a989f6a48b549c22.png"), ld = globalThis.__GLOBALS__.getAssetURL("e7b0db0b9417c90251ad9d74858463722ff03f5f.png"), dd = globalThis.__GLOBALS__.getAssetURL("26e746c0ed4f73103ce8794ff0fd806a957d5fbf.png"), cd = globalThis.__GLOBALS__.getAssetURL("e06300c724c25c738bcd330c3b5fb228e96542f0.png"), hd = globalThis.__GLOBALS__.getAssetURL("a6b2031e2cf12a812e9393748fea43a535adc9fc.png"), md = globalThis.__GLOBALS__.getAssetURL("85a4638f7aa17fcf93b3b9ee1a6d924d0220fcfd.png"), ud = globalThis.__GLOBALS__.getAssetURL("3a9784709f9303f53df7daafdef8a0f1d49ca143.png"), fd = globalThis.__GLOBALS__.getAssetURL("2e663df5355e425bd39558beff6134099a9edf75.png"), gd = globalThis.__GLOBALS__.getAssetURL("4ec58bc4400fe2a84f6390b2af52ddf0667f66a8.png"), pd = globalThis.__GLOBALS__.getAssetURL("6501c77168573e0d3d9d6373b7e320baf1ed3786.png"), bd = globalThis.__GLOBALS__.getAssetURL("630ce776a6e553e777967d483f01ce1d97d020f3.png"), yd = globalThis.__GLOBALS__.getAssetURL("e0688cd5151ee9a77d96f30b941aaab226f9ff97.png");
function vd() {
  return /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ s("div", { className: "mb-12", children: [
      /* @__PURE__ */ r("h1", { className: "text-5xl font-bold text-gray-900 mb-6", children: "Digital Payments Platform" }),
      /* @__PURE__ */ r("p", { className: "text-xl text-gray-600 leading-relaxed mb-6", children: "A mobile digital payments concept designed around trust, verification, and progressive access to financial features." }),
      /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Fintech" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Mobile UX" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "KYC Flows" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Wallet Design" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Payments Journey" })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-lg font-semibold text-gray-900 mb-3", children: "High-Level Summary" }),
      /* @__PURE__ */ r("p", { className: "text-gray-700 leading-relaxed", children: "In this project, I explored a mobile-first digital payments experience that combines onboarding, KYC verification, wallet access, utility payments, transaction history, and support into one product journey. The core idea I focused on was progressive unlock: helping users begin with limited but meaningful functionality and gain access to more features as trust and verification milestones are completed." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "My Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product and experience design" })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Problem" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Making regulated payment flows feel simple without hiding compliance rules." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Approach" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Used KYC-led progressive access to structure onboarding, wallet, and payment journeys." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Outcome" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "A clearer mobile payments concept where restrictions feel guided rather than blocking." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Project Overview" }),
      /* @__PURE__ */ s("div", { className: "prose prose-lg max-w-none text-gray-600 space-y-4", children: [
        /* @__PURE__ */ r("p", { children: "Financial products have to balance speed and simplicity with security, trust, and compliance. In many payment apps, users only discover restrictions after they attempt something, which creates confusion and friction. In this project, I explored a different approach: building the entire experience around access states from the beginning so that the product feels honest, guided, and predictable." }),
        /* @__PURE__ */ r("p", { children: "I focused on how a user moves from first-time onboarding into a broader payment ecosystem. Instead of treating compliance as a separate technical layer, I made it a visible part of the user journey." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "The Problem" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "A payments product needs to let users feel progress quickly, but it also needs to respect regulated financial workflows. That creates a difficult product challenge. If users are blocked too early, the app feels empty. If too many features are exposed too soon, the experience loses credibility. I wanted to solve for that middle space where the app is useful from day one but still reflects real eligibility and trust requirements." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Design Direction" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-6", children: "I structured the app around three major user states:" }),
      /* @__PURE__ */ s("ul", { className: "space-y-3 text-gray-600", children: [
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "Pre-KYC users with limited access and guided onboarding." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "Users who have completed Video KYC and can access wallet-related functionality." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "Fully approved users who can use a wider set of payment and account features." })
        ] })
      ] }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mt-6", children: "This state-based structure became the backbone of the product. It allowed me to make the interface change meaningfully depending on user status, rather than simply locking buttons without explanation." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Onboarding Experience" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "The onboarding flow introduces users to the ePayhub platform through a welcoming, trust-building journey that emphasizes simplicity, security, and accessibility." }),
      /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Card Options" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Physical and virtual cards introduction" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: rd, alt: "Physical and virtual card options", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Seamless Payments" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Credit card to bank account transfers" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: ad, alt: "Seamless payments from card to bank", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Bank Level Security" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Advanced encryption and biometric auth" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: nd, alt: "Bank level security features", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Registration" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Account setup with name and mobile number" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: id, alt: "Get started registration form", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Wallet & KYC Flows" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "Progressive verification journey from language selection to video KYC, authentication, and wallet activation with transparent limit management." }),
      /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "My Wallet" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Wallet balance with transaction history" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: ud, alt: "My wallet main screen", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Wallet Limits" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "KYC-based limits and beneficiary management" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: fd, alt: "Wallet limits screen", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Language Preference" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Language selection for Video KYC" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: gd, alt: "Language preference selection", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Video KYC" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Live video verification call interface" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: pd, alt: "Video KYC call screen", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Partial KYC Complete" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Available features and upgrade path" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: bd, alt: "Partial KYC completion screen", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Authenticate Aadhaar" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "DigiLocker authentication for KYC" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: yd, alt: "Aadhaar authentication via DigiLocker", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Experience Architecture" }),
      /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Core User Flows" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Welcome and registration flow" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "OTP/contact onboarding" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "KYC method selection and submission" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Wallet access and add-money journey" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Utility and recharge payment flows" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Transaction history and support" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Product Behavior" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Access rules are visible and explainable" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Restrictions are paired with next-step guidance" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Useful actions remain available even before full approval" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Wallet and payments become stronger value layers over time" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "App Experience & User Journeys" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "Complete visual walkthrough showcasing the dashboard, payment flows, transaction management, and key user interactions." }),
      /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Home Dashboard" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Wallet balance with payment categories" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: od, alt: "Home dashboard", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Recharge Plans" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Browse mobile recharge options" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: sd, alt: "Recharge plans", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Beneficiary Details" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Rent payment bank details" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: ld, alt: "Beneficiary details", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Payment Method" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Card payment for utility bills" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: dd, alt: "Payment method", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Payment Success" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Success confirmation with transaction ID" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: cd, alt: "Payment success", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Payment Failed" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Error handling with retry option" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: hd, alt: "Payment failed", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-3 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 text-sm", children: "Payment Confirmation" }),
            /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 mt-1", children: "Detailed transaction breakdown and status" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ r("img", { src: md, alt: "Payment confirmation details", className: "w-full max-w-[280px] rounded-lg shadow-lg" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "What I Was Solving" }),
      /* @__PURE__ */ s("ul", { className: "space-y-3 text-gray-600", children: [
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to design a regulated payments experience without making it feel bureaucratic." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to make pre-verification users feel included in the product instead of blocked by it." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to connect onboarding, KYC, wallet, and payments into one consistent logic system." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to turn restrictions into understandable progression rather than abrupt failure states." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Why This Case Study Matters" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "This project shows my ability to design around business rules, compliance requirements, and user trust at the same time. It reflects how I think about progressive enablement, product clarity, and the challenge of building useful experiences under real-world constraints." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6 pt-12 border-t border-gray-200", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product and experience design" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Focus" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "KYC states, wallet behavior, payments architecture" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Type" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Mobile fintech product concept" })
      ] })
    ] })
  ] });
}
const xd = globalThis.__GLOBALS__.getAssetURL("5a0209f587c9663e6dbbe7b72b4a9dcb3d099d6d.png"), wd = globalThis.__GLOBALS__.getAssetURL("8ae93da91a928dfef59ccda417f9b0ed4ba91398.png"), Nd = globalThis.__GLOBALS__.getAssetURL("ce583502ad4b6c351d8d095b1829c59f2b1dad2b.png"), kd = globalThis.__GLOBALS__.getAssetURL("f63b97280fdd3936a998248b719bd606768d22ff.png"), Rd = globalThis.__GLOBALS__.getAssetURL("ebdb188a7ce3008f3ae7ced4ec5bda4129195198.png"), Ld = globalThis.__GLOBALS__.getAssetURL("b10f2578a387fdc3812a629347b6f281aa8a03fc.png"), Sd = globalThis.__GLOBALS__.getAssetURL("c07379a51ef97699ed1012d6c4257dbcf80fe425.png"), _d = globalThis.__GLOBALS__.getAssetURL("bcfb77456cba5f9b4e646a72dec5079a1841665d.png"), Pd = globalThis.__GLOBALS__.getAssetURL("8ae69742dfbefd742f03a2aa4a932a6fe6111ffb.png");
function Ad() {
  return /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ s("div", { className: "mb-12", children: [
      /* @__PURE__ */ r("h1", { className: "text-5xl font-bold text-gray-900 mb-6", children: "Studio Project Operations System" }),
      /* @__PURE__ */ r("p", { className: "text-xl text-gray-600 leading-relaxed mb-6", children: "A workflow-driven project and shoot management system for photography studios, built inside a broader studio business platform." }),
      /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Workflow Design" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Dashboard UX" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Service Business Tools" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Project Planning" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Operations Design" })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-lg font-semibold text-gray-900 mb-3", children: "High-Level Summary" }),
      /* @__PURE__ */ r("p", { className: "text-gray-700 leading-relaxed", children: "In this project, I worked on the project-operations layer of a business platform for photographers and studios. My focus was on helping a studio create a new project, break it into multiple shoot events, plan deliverables, and keep client payments visible inside one connected workflow. Instead of treating projects like generic task lists, I approached the experience as a studio-specific operating system built around how photography work actually happens." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "My Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product and workflow experience design" })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Problem" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Generic project tools do not match multi-event studio workflows with shoots, payments, and deliverables." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Approach" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Designed a workflow-first system spanning project setup, shoots planning, and operational tracking." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Outcome" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "A more structured studio operations flow from booking to execution and delivery." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Project Overview" }),
      /* @__PURE__ */ s("div", { className: "prose prose-lg max-w-none text-gray-600 space-y-4", children: [
        /* @__PURE__ */ r("p", { children: "Photography and wedding studios do not operate like standard teams using generic project software. A single client project can include multiple events, multiple photographers, multiple deliverables, and staggered payment milestones. Most traditional project tools are not designed for that type of workflow, which means studios often end up stitching together spreadsheets, calendars, chats, and finance trackers." }),
        /* @__PURE__ */ r("p", { children: "I saw the wider product as a business operating system for studios, with modules for projects, proposals, galleries, forms, templates, finances, team workflows, and account settings. The project management system sits at the center of that ecosystem and acts as the execution layer of the product." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "The Problem" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: 'The core problem here was not simply "how do we list projects." The real problem was how to turn booked client work into a structured, trackable operational flow. Studios need a way to move from intake and quoting into execution while keeping all the important moving parts connected: event dates, shoot assignments, deliverables, expenses, and payments.' })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Design Direction" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-6", children: 'My design direction centered on a workflow-first system. Instead of building isolated screens for "project list" and "shoot details," the experience was designed as a connected journey:' }),
      /* @__PURE__ */ s("ul", { className: "space-y-3 text-gray-600", children: [
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "1." }),
          /* @__PURE__ */ r("span", { children: "Create the project: define the core project and client details" })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "2." }),
          /* @__PURE__ */ r("span", { children: "Set up the shoots: add photoshoots with date, photographer, and location" })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "3." }),
          /* @__PURE__ */ r("span", { children: "Define deliverables: specify what needs to be produced" })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "4." }),
          /* @__PURE__ */ r("span", { children: "Track delivery and payments: ensure timely fulfillment and payment processing" })
        ] })
      ] }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mt-6", children: "This is what gives the project real product depth. It is not just a management UI; it is a studio operations workflow." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "What I Designed" }),
      /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Primary Surfaces" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Projects dashboard" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "New Project multi-step creation flow" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Shoots management screen" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Shoot event detail drawer" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Project-level progress and reminders panel" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Operational Logic" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Multi-event project planning" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Status-based filtering (overdue, unscheduled, upcoming)" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Crew assignment and role mapping" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Deliverables planning" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Client payment visibility inside project flow" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Project Creation Flow" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "The project creation flow is designed as a guided 4-step journey that progressively captures all essential information while suggesting helpful defaults and common patterns." }),
      /* @__PURE__ */ s("div", { className: "space-y-8", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Step 1: Project Details" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Define the core project, package price, and client information" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4", children: /* @__PURE__ */ r("img", { src: Sd, alt: "Project creation - project details step", className: "w-full rounded-lg shadow-sm" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Step 2: Shoot Events" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Break down the project into multiple shoot events with suggested event types" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4", children: /* @__PURE__ */ r("img", { src: _d, alt: "Project creation - shoots planning step", className: "w-full rounded-lg shadow-sm" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Step 3: Deliverables" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Plan deliverables with quantities, due dates, and costs. Smart suggestions help speed up planning" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4", children: /* @__PURE__ */ r("img", { src: Pd, alt: "Project creation - deliverables step", className: "w-full rounded-lg shadow-sm" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Projects Dashboard" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "The projects dashboard provides operational visibility across all studio work. High-level metrics for shoots, payments, and deliverables help teams understand capacity and priorities at a glance, while the projects list enables quick navigation to specific work." }),
      /* @__PURE__ */ s("div", { className: "space-y-8", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Overview View" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Dashboard showing shoots, client payments, and deliverables metrics" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4", children: /* @__PURE__ */ r("img", { src: xd, alt: "Projects dashboard overview", className: "w-full rounded-lg shadow-sm" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Project Detail Panel" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Side panel showing project reminders, shoot progress, payments, and deliverables" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4", children: /* @__PURE__ */ r("img", { src: wd, alt: "Projects dashboard with detail panel", className: "w-full rounded-lg shadow-sm" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Shoots Management" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "The shoots view organizes all project events in one place, with status-based filtering, crew visibility, and detailed event panels for managing assignments, timing, and notes." }),
      /* @__PURE__ */ s("div", { className: "space-y-8", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "All Events Grid" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Grid view showing all shoots with status indicators and crew assignments" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4", children: /* @__PURE__ */ r("img", { src: Nd, alt: "Shoots grid view with all events", className: "w-full rounded-lg shadow-sm" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Shoot Detail: Couple Shoot" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Side panel showing event details, crew assignments, and notes" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4", children: /* @__PURE__ */ r("img", { src: kd, alt: "Shoot detail panel for couple shoot", className: "w-full rounded-lg shadow-sm" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Shoot Detail: Cocktail Party" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Event panel with crew roster showing multiple photographers and roles" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4", children: /* @__PURE__ */ r("img", { src: Rd, alt: "Shoot detail panel for cocktail party", className: "w-full rounded-lg shadow-sm" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "New Shoot State" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Empty state for newly created shoot events ready to be configured" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4", children: /* @__PURE__ */ r("img", { src: Ld, alt: "Untitled shoot detail panel", className: "w-full rounded-lg shadow-sm" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "What I Was Solving" }),
      /* @__PURE__ */ s("ul", { className: "space-y-3 text-gray-600", children: [
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to design a project system that matches the real workflow of a photography studio." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to connect project creation with execution planning instead of separating them." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to make multi-event shoots easier to organize, assign, and track." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to surface financial and delivery progress alongside production progress." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to turn complex client work into a repeatable operational process." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Why This Case Study Matters" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "This project demonstrates my ability to design for a highly specific business domain rather than relying on generic SaaS patterns. It shows that I can map real operational workflows, identify what actually matters to the user, and build product structure around how work truly happens." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mt-4", children: "It also highlights my strength in workflow design. The value of this project is not only in the UI, but in how the product turns a studio's messy real-world operations into a trackable, usable, and scalable system." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6 pt-12 border-t border-gray-200", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product and workflow experience design" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Focus" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Project setup, shoots planning, studio operations, workflow dashboards" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Type" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Vertical SaaS workflow system for photographers and studios" })
      ] })
    ] })
  ] });
}
const Ed = globalThis.__GLOBALS__.getAssetURL("944d288d5dc2a2289dc01f657f1d354826f18a51.png"), Cd = globalThis.__GLOBALS__.getAssetURL("b08a0326b47b58c79a8174ff5b70dcc121233921.png"), Td = globalThis.__GLOBALS__.getAssetURL("f6ccb04a2bab9c7bd6a03fda45bf4f7cf92aa043.png"), Dd = globalThis.__GLOBALS__.getAssetURL("d4ca0b3abf4e91e19676b24e35a515c897544cbf.png"), Md = globalThis.__GLOBALS__.getAssetURL("5c8421fb62e2d92b803c434e8c862f82ad803f36.png"), Od = globalThis.__GLOBALS__.getAssetURL("54bd10ba0223d1c18901b1b115b01bff981d1b5f.png"), Id = globalThis.__GLOBALS__.getAssetURL("5416816af0db22c85af80d9aee564bf8d3351c15.png");
function jd() {
  return /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ s("div", { className: "mb-12", children: [
      /* @__PURE__ */ r("h1", { className: "text-5xl font-bold text-gray-900 mb-6", children: "Decentralized Interchain Platform" }),
      /* @__PURE__ */ r("p", { className: "text-xl text-gray-600 leading-relaxed mb-6", children: "A decentralized interchain interface platform designed to make governance, staking, and asset transfers more structured and usable." }),
      /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Web3 Product Design" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Dashboard UX" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Governance Flows" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Design System" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Cross-chain Experience" })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-lg font-semibold text-gray-900 mb-3", children: "High-Level Summary" }),
      /* @__PURE__ */ r("p", { className: "text-gray-700 leading-relaxed", children: "In this project, I designed a decentralized interchain dashboard concept that brings together portfolio visibility, staking, governance participation, and token transfers into one unified experience. My goal was to make crypto-native actions feel more intentional and easier to navigate by combining dashboard clarity with deeper proposal-reading and decision-making flows." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "My Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product, dashboard, and design system work" })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Problem" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Web3 flows often feel fragmented, technical, and difficult to trust for mainstream users." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Approach" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Unified governance, staking, transfers, and portfolio visibility inside one dashboard system." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Outcome" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "A clearer participation platform that turns protocol actions into more product-like journeys." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Project Overview" }),
      /* @__PURE__ */ s("div", { className: "prose prose-lg max-w-none text-gray-600 space-y-4", children: [
        /* @__PURE__ */ r("p", { children: "Web3 products often ask users to switch between multiple contexts just to understand what they hold, what they can do next, and how participation actually works. In this concept, I designed a more complete product surface where users can monitor assets, take action, and engage with governance from one place instead of jumping across disconnected tools." }),
        /* @__PURE__ */ r("p", { children: "Based on the project material and screens, I organized the platform around four core workflows: overview, transfers, staking, and governance. That combination makes the product feel less like a wallet utility and more like a participation platform for an interchain ecosystem." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "The Problem" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "Interchain and governance-heavy crypto platforms are often built around protocol capability rather than user clarity. Users are asked to understand balances, token behavior, proposals, voting, and movement across networks with very little structure. That creates friction, uncertainty, and a steep learning curve, especially for people who are not deeply technical." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mt-4", children: "The challenge here was to design an interface that could hold multiple Web3 workflows at once without overwhelming the user, while still preserving the seriousness and complexity of on-chain participation." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Product Structure" }),
      /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Core Areas" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Overview with available balance and asset distribution" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Transfers with a guided single-transfer flow" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Staking as a participation and earning layer" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Governance proposals, proposal detail, and voting" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Recent transaction activity and side-panel summaries" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Supporting Design Decisions" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Persistent left-side navigation for orientation across modules" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Card-based dashboard patterns for balances, actions, and summaries" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Proposal detail screens that encourage informed voting" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Design system consistency across overview, governance, and transaction flows" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Design Evolution" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "One of the strongest aspects of this project is the visible design progression from low-fi wireframes to higher fidelity interface systems. In the early wireframes, I explored different dashboard arrangements, right-rail information blocks, navigation placement, and ways of dividing primary and secondary content. I started with layout logic and information architecture before committing to a final style direction." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mt-4", children: "In the mid-fi and final screens, that structure becomes more resolved. I moved the platform into a dark, high-contrast visual language with purple gradients, rounded components, compact data groupings, and a strong left navigation rail. That direction gives the product a premium and systems-oriented feel, which is especially useful in Web3 where trust and clarity are often weak." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Platform Experience" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "Complete interface walkthrough showing the dashboard, governance flows, staking, transfers, and wallet connection experience." }),
      /* @__PURE__ */ s("div", { className: "space-y-8", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Connect Wallet" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Wallet connection interface featuring geometric branding and a streamlined onboarding flow that introduces users to the platform" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Od, alt: "Connect wallet screen", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Dashboard Overview" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Main portfolio dashboard displaying asset holdings, balances, recent transaction activity, and account overview in a dark-themed interface" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Cd, alt: "Dashboard with asset information", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Single Transfer" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Token transfer interface with clear input fields for recipient address and amount, emphasizing transaction safety and confirmation" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Ed, alt: "Single transfer screen", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Token Swap" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Swap interface for exchanging tokens with slippage tolerance controls and live price impact visibility" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Id, alt: "Token swap screen", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Staking Management" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Staking dashboard showing delegations, unbonding periods, validator information, and rewards tracking in a unified view" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Td, alt: "Staking screen with validators", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Governance Proposals" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Governance hub displaying active and past proposals with voting status, filters, and quick access to proposal details" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Dd, alt: "Governance proposals list", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Proposal Detail & Voting" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Detailed proposal view with full description, voting distribution, and integrated voting interface for casting decisions" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Md, alt: "Proposal detail with voting options", className: "w-full rounded" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "What I Was Solving" }),
      /* @__PURE__ */ s("ul", { className: "space-y-3 text-gray-600", children: [
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to make decentralized product flows feel more structured and less intimidating." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to hold portfolio visibility, governance, staking, and transfers inside one coherent system." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to design governance participation as a readable, decision-oriented experience." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to evolve the product from wireframes to a more mature visual and system layer." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Why This Case Study Matters" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "This project demonstrates my ability to work in technically dense, emerging product categories without losing sight of usability. It reflects how I approach complex systems by first solving layout and structure, then refining interaction logic, and finally building a stronger visual and system layer that can support multiple product modules." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mt-4", children: "It also shows range across the design process: early wireframing, iterative refinement, high-fidelity dashboard work, and system-level thinking through design system articulation." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6 pt-12 border-t border-gray-200", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product, dashboard, and design system work" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Focus" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Web3 UX, governance flows, interchain actions, system consistency" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Type" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Decentralized interchain platform concept" })
      ] })
    ] })
  ] });
}
const zd = globalThis.__GLOBALS__.getAssetURL("cc59ed9a2200f9cffd98dbb874212b3e6fe08947.png"), Ud = globalThis.__GLOBALS__.getAssetURL("f318d5ba0a12823cb970d51bed9096bf9b68b95a.png"), Fd = globalThis.__GLOBALS__.getAssetURL("850ce1c92c13641b10c5762e09db7b508a6d291a.png"), Bd = globalThis.__GLOBALS__.getAssetURL("c3b4157ef1b58159d1f2047dc25e6682900a4a17.png"), Gd = globalThis.__GLOBALS__.getAssetURL("7b9a39a3a9a2cfc32c0985696971f2f097c6124b.png"), $d = globalThis.__GLOBALS__.getAssetURL("92212efb63ec83c59a8a3eea82f53bcf23296030.png"), Wd = globalThis.__GLOBALS__.getAssetURL("1e3746fbbbe3e5c3a53fb1cd0ea1b8646a4914f4.png"), Hd = globalThis.__GLOBALS__.getAssetURL("3e7d88b009a7c54fabad96e26518c72eb50c5e76.png"), Vd = globalThis.__GLOBALS__.getAssetURL("72bf9247255e3ac2887bd59536fa8490b925045d.png"), Kd = globalThis.__GLOBALS__.getAssetURL("ee14c944415184787b4d7c172d4894f26c4d1b52.png"), Yd = globalThis.__GLOBALS__.getAssetURL("d3b9ccf78ce3247c54e96d7bafe7698902863cc2.png"), qd = globalThis.__GLOBALS__.getAssetURL("f907222f62f532c467b34cfb74a4ee93dad8feee.png");
function Xd() {
  return /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ s("div", { className: "mb-12", children: [
      /* @__PURE__ */ r("h1", { className: "text-5xl font-bold text-gray-900 mb-6", children: "Data Governance Platform" }),
      /* @__PURE__ */ r("p", { className: "text-xl text-gray-600 leading-relaxed mb-6", children: "A multi-module enterprise platform for managing datasets, policies, user access, audit trails, and compliance workflows." }),
      /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Enterprise SaaS" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Governance UX" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Access Control" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Policy Design" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Admin Systems" })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-lg font-semibold text-gray-900 mb-3", children: "High-Level Summary" }),
      /* @__PURE__ */ r("p", { className: "text-gray-700 leading-relaxed", children: "In this project, I worked on an internal enterprise platform designed to centralize governance work across datasets, policies, access permissions, auditability, and compliance. My focus was on helping multiple admin-heavy workflows feel coherent inside one system while still supporting the depth needed for governance operations and AI-assisted decision-making." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "My Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product and experience design" })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Problem" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Governance work is often fragmented across tools, making policy and access decisions harder to manage." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Approach" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Structured the platform around datasets, policies, access, audit, and simulation workflows." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Outcome" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "A more operational governance product with clearer relationships across modules and decisions." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Project Overview" }),
      /* @__PURE__ */ s("div", { className: "prose prose-lg max-w-none text-gray-600 space-y-4", children: [
        /* @__PURE__ */ r("p", { children: "Data governance work is often fragmented across tools and teams. Data catalogs sit in one place, access approvals live in another, and policy documentation or compliance evidence is handled somewhere else entirely. That fragmentation creates operational overhead and weakens visibility across the organization." }),
        /* @__PURE__ */ r("p", { children: "In this project, I explored a unified product that gives governance teams one system to organize data assets, manage policies, control access, simulate impact, and review audit data." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "The Problem" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "Enterprise governance products are difficult to design because they must support dense workflows with strong relationships between modules. Policies affect datasets. Access affects users and groups. Audit logs validate whether governance rules are actually working. When the product does not make those relationships clear, teams lose confidence and spend too much time navigating complexity instead of making decisions." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Platform Architecture" }),
      /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Main Modules" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Dashboard" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Catalogues and datasets" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Policies and simulations" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "User and group management" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "User access and permission controls" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Audit and compliance" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Key Capabilities" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Create and map governance policies" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Review policy impact before activation" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Manage module-level and dataset-level access" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Track violations, compliance posture, and audit events" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Use AI assistants for discovery and policy support" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Design Approach" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-4", children: "I treated the catalog and dataset layer as the foundation of the platform. If users cannot understand what data exists and how it is organized, the rest of governance becomes abstract. That is why the product appears to invest strongly in catalogues, dataset details, connected assets, and library-style views." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-4", children: "On top of that foundation sits the policy layer. Policies are not just forms here; they are operational rules that can be created, mapped, previewed, edited, and simulated. This is one of the strongest ideas in the product because it supports safer governance changes. Instead of making policy changes irreversible or invisible, I designed a way to understand downstream impact before taking action." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-4", children: "Access management is another major pillar. I included users, groups, invitations, user details, permission levels, and access review behaviors. This matters because governance is not just about rules in theory. It is about who can do what, under which conditions, and how those decisions are maintained over time." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "Audit and compliance workflows give the platform accountability. Rather than ending at configuration, I extended the system into logs, access evidence, violations, and compliance reporting. That turns the platform into a control surface instead of a setup-only tool." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "AI-Assisted Workflows" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "The AI layer adds another dimension. I positioned AI as a workflow assistant for tasks like policy creation, catalog assistance, search, and schema conflict handling. That is an effective use of AI in enterprise software because it supports complex work rather than trying to replace structured governance logic." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Platform Experience" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "Complete walkthrough of the governance platform showing AI assistants, compliance monitoring, catalogue management, policy creation and simulation, user access controls, and audit tracking features." }),
      /* @__PURE__ */ s("div", { className: "space-y-8", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "AI Assistant Modal" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Entry point for AI-powered governance operations with specialized agents for catalogue management, dataset search, policy creation, and user access management" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: zd, alt: "AI Assistant modal with governance agents", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Compliance & Admin Dashboard" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Executive governance dashboard providing a comprehensive overview of governance health, risk assessment heatmap across catalogues, active incidents and violations, approval backlogs, policy coverage gaps, and high-risk access patterns" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: Ud, alt: "Compliance and admin dashboard with risk heatmap and metrics", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Add New Catalogue" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Multi-step wizard for connecting external data catalogue providers to the governance platform with live configuration preview" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: Fd, alt: "Add catalogue wizard with provider selection", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "AI Catalogue Assistant - Conversational Setup" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Natural language interface for catalogue setup where AI guides users through configuration with real-time preview and option to switch to traditional wizard mode" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: Bd, alt: "AI conversational catalogue setup interface", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Data Catalogue Overview" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Centralized view of all connected data sources showing sync status, dataset counts, and health indicators with search and filtering capabilities" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: Gd, alt: "Data catalogue overview with multiple connected sources", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Dataset Marketplace" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Internal dataset discovery interface where users can browse and search available datasets with metadata including tags, access levels, and source providers" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: $d, alt: "Dataset marketplace with searchable data catalog", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "User Management" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Comprehensive user directory with detailed employee information and quick actions for connecting systems, defining roles, and creating groups" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: Wd, alt: "User management with detailed employee information", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "User Access Management" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Superadmin control panel for managing granular module-level permissions across dataset management, policy management, and user administration" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: Hd, alt: "User access management with permission controls", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Create Policy with AI" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "AI-powered policy creation where users describe governance rules in plain language and receive structured policy definitions with live preview" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: Vd, alt: "AI policy creation with natural language input", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Policy Preview with Detailed Impact Analysis" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Comprehensive policy review interface showing SARA breakdown of affected subjects, actions, resources, and risk assessment before activation" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: Kd, alt: "Policy preview with SARA breakdown and impact analysis", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Policy Simulation & Testing" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Interactive node-based visualization for testing policy impact across user groups, roles, and resources before production deployment with compliance scoring" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: Yd, alt: "Policy simulation with node graph and impact metrics", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Audit, Compliance & Monitoring" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Real-time governance tracking showing policy violations, access requests, system events, and detailed audit logs with severity levels and results" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: qd, alt: "Audit and compliance monitoring with detailed event logs", className: "w-full rounded border border-gray-200" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "What I Was Solving" }),
      /* @__PURE__ */ s("ul", { className: "space-y-3 text-gray-600", children: [
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to turn a dense enterprise governance problem into a structured product experience." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to make relationships between datasets, policies, users, and audit trails easier to understand." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to design admin interfaces that support both routine management and high-stakes decisions." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to integrate AI into enterprise workflows in a useful, non-gimmicky way." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Why This Case Study Matters" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "This project demonstrates my ability to work on complex enterprise systems where information architecture, operational clarity, and cross-module thinking matter more than isolated screens. It shows how I approach products that need to support administrative rigor, decision-making, and long-term system usability." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6 pt-12 border-t border-gray-200", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product and experience design" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Focus" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Admin flows, policies, permissions, audit visibility" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Type" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Enterprise governance platform" })
      ] })
    ] })
  ] });
}
const Jd = globalThis.__GLOBALS__.getAssetURL("47de891823451c65f0e06a55e2436c9dd6934de6.png"), Qd = globalThis.__GLOBALS__.getAssetURL("808a4d2c5eab791e3ca3aaf387cd3b8892d75dce.png"), Zd = globalThis.__GLOBALS__.getAssetURL("160f55818f03f26e1014a112921aba96ea08b5eb.png"), ec = globalThis.__GLOBALS__.getAssetURL("f0f4a19a48de2030584f452a2f890ba7f7535e30.png"), tc = globalThis.__GLOBALS__.getAssetURL("51362915d98b318d8a74f62019101efef170d3fd.png"), rc = globalThis.__GLOBALS__.getAssetURL("22f7bb99f7e326fa99b74e121ac1488cb018c5c3.png"), ac = globalThis.__GLOBALS__.getAssetURL("cd1822c56d759f03a3c39222e0338bc16cd2c8dc.png"), nc = globalThis.__GLOBALS__.getAssetURL("59bf5c1daf679b142184edf6165e56acc9f711b8.png"), ic = globalThis.__GLOBALS__.getAssetURL("70ca825f5faae2b5a1a5fe7e316387c236b9aab7.png"), oc = globalThis.__GLOBALS__.getAssetURL("382a6f84789cfa80fddc249f3a114374564fb065.png"), sc = globalThis.__GLOBALS__.getAssetURL("ae513cf23b919cfb0b70e3e2cd36a6be9dd9fd01.png");
function lc() {
  return /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ s("div", { className: "mb-12", children: [
      /* @__PURE__ */ r("h1", { className: "text-5xl font-bold text-gray-900 mb-6", children: "Ground Operations Intelligence Platform" }),
      /* @__PURE__ */ r("p", { className: "text-xl text-gray-600 leading-relaxed mb-6", children: "A two-part dashboard system for airport ground support operations, combining live monitoring with fleet health and operational analytics." }),
      /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Operations Intelligence" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Dashboard Design" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Map Monitoring" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Fleet Analytics" }),
        /* @__PURE__ */ r(ae, { variant: "secondary", children: "Operational UX" })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-lg font-semibold text-gray-900 mb-3", children: "High-Level Summary" }),
      /* @__PURE__ */ r("p", { className: "text-gray-700 leading-relaxed", children: "In this project, I designed a two-part dashboard system: one for live monitoring and one for operations analytics. Together, they create a platform for managing airport ground support assets in real time while also improving long-term fleet health, maintenance strategy, utilization, and SLA performance across multiple airport locations." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "My Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product and dashboard experience design" })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Problem" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Operations teams need both live visibility and long-term planning tools for distributed airport assets." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Approach" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Separated real-time monitoring from fleet analytics while keeping both inside one operational system." })
      ] }),
      /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-3", children: "Outcome" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "A dual-dashboard platform that supports faster response and better operational optimization." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Project Overview" }),
      /* @__PURE__ */ s("div", { className: "prose prose-lg max-w-none text-gray-600 space-y-4", children: [
        /* @__PURE__ */ r("p", { children: "Ground support operations at airports involve a large network of vehicles and equipment operating under strict timing pressure. Pushback tractors, GPUs, baggage loaders, ambulifts, fuel bowsers, service vehicles, and other support assets all influence turnaround reliability. When visibility is weak, teams struggle to respond quickly. When planning is weak, the same failures, delays, and inefficiencies repeat." }),
        /* @__PURE__ */ r("p", { children: "In this project, I designed for both of those needs at once: immediate operational awareness and longer-term operational optimization." })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "The Problem" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "Operations teams typically need different interfaces for different decision horizons. Live teams need to know what is happening now, where it is happening, and which assets need action. Managers and planning teams need to know which equipment classes are failing, which airports are under stress, where resources are wasted, and what changes would improve reliability. The challenge here was to support both perspectives without forcing them into one overloaded dashboard." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Design Direction" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-6", children: "I approached the product as a connected dashboard ecosystem with two distinct jobs:" }),
      /* @__PURE__ */ s("ul", { className: "space-y-3 text-gray-600", children: [
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "1." }),
          /* @__PURE__ */ r("span", { children: "A monitoring dashboard for real-time situational awareness and control-room style response." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "2." }),
          /* @__PURE__ */ r("span", { children: "An operations dashboard for maintenance, utilization, cost, and performance analysis." })
        ] })
      ] }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mt-6", children: "This separation lets each dashboard optimize for a different user mindset while still contributing to the same operational system." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "System Structure" }),
      /* @__PURE__ */ s("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Monitoring Dashboard" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Airport-based live maps" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Asset location and status awareness" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Alert handling and acknowledgement" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Geofences and monitoring zones" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Filtering by type, activity, maintenance, and battery or fuel state" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-4", children: "Operations Dashboard" }),
          /* @__PURE__ */ s("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Fleet health overview" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "SLA performance tracking" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Cost and maintenance analysis" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Utilization and inefficiency insights" })
            ] }),
            /* @__PURE__ */ s("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ r("span", { className: "text-red-600", children: "→" }),
              /* @__PURE__ */ r("span", { children: "Recommendations for predictive maintenance and smart redeployment" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Monitoring Dashboard" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-4", children: "I designed the monitoring dashboard to behave like a control-room interface. It uses a map-based foundation so users can understand assets in operational context rather than through abstract rows or isolated metrics. That is especially important in airport environments where location affects both urgency and response." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-4", children: "The product supports multiple airports and different operational zones, including service roads, emergency services, cargo operations, terminal operations, passenger services, and fuel operations. These zones are not just decorative overlays. I used them to structure monitoring logic and make alerts more meaningful because they can be understood spatially." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "The alert model was also carefully considered. Alerts can be tied to asset IDs, alert types, acknowledgement states, and status filters. That means the interface is not just broadcasting noise. It is enabling teams to isolate, review, and act on meaningful events." })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Monitoring Dashboard Interface" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "The monitoring dashboard brings real-time asset visibility, alert management, search capabilities, and multi-scale map views together in a control-room style interface." }),
      /* @__PURE__ */ s("div", { className: "space-y-8", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Main Monitoring View with Alerts Panel" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Central control room interface showing live map view with asset locations, fleet health overview, active alerts panel, and quick filter controls" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Jd, alt: "Main monitoring view with alerts panel", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Asset Search & Filtering" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Real-time search interface for locating specific assets with comprehensive details including operational status and maintenance indicators" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Qd, alt: "Asset search and filtering interface", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Vehicle Diagnostics" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Detailed diagnostics panel displaying asset health metrics, system alerts, and actionable maintenance recommendations" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: Zd, alt: "Vehicle diagnostics interface", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Geofence Drawing" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Interactive map tool for creating custom geofences and monitoring zones across airport operational areas" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: ec, alt: "Geofence drawing interface", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Geofence Configuration" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Configuration panel for defining geofence parameters, alert triggers, and zone-specific monitoring rules" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: tc, alt: "Geofence configuration interface", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Asset Filtering" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Advanced filtering controls for narrowing asset views by type, operational status, maintenance state, and location zones" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: rc, alt: "Asset filtering interface", className: "w-full rounded" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Vehicle Detail Monitoring View" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Map-based detail view showing individual asset information with operational metrics, alert status, and quick action access" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-900", children: /* @__PURE__ */ r("img", { src: sc, alt: "Vehicle detail popup on monitoring map showing asset status and alerts", className: "w-full rounded" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Operations Dashboard" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-4", children: "In the operations dashboard, I moved up a level from incident response to operational intelligence. It looks across time, asset categories, and airports to show recurring failure patterns, maintenance categories, cost movement, SLA adherence, and equipment utilization quality." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-4", children: "The product includes views for fleet health, SLA performance, maintenance insights, cost analysis, and operational efficiency. The language used in the interface suggests a strong grounding in operational reality: engine failures, hydraulic issues, electrical system stress, underused equipment, overutilized categories, and airport-by-airport comparisons." }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: 'The concept becomes especially strong when it moves beyond diagnosis into recommendations. Instead of stopping at "what is wrong," I used the dashboard to suggest intervention models such as predictive maintenance, resource redeployment, and AI-driven allocation. That turns the interface into a decision-support tool rather than a passive reporting layer.' })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-16", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Operations Dashboard Interface" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed mb-8", children: "The operations dashboard provides fleet-wide analytics, performance insights, and AI-driven recommendations across multiple airport locations with conversational search capabilities." }),
      /* @__PURE__ */ s("div", { className: "space-y-8", children: [
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Operations Dashboard Home" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Main analytics hub with AI-powered conversational search, quick insights navigation, and critical operational KPIs for fleet performance monitoring" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: ac, alt: "Operations dashboard home with Quick Insights and KPIs", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Airport Location Selector" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Geographic selector for filtering analytics by specific airports or viewing aggregated data across all locations" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: nc, alt: "Airport location selector with India map", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Fleet Health Insights" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Comprehensive fleet health analysis showing operational status, breakdown frequencies, utilization patterns, and optimization recommendations" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: ic, alt: "Fleet health insights showing breakdown analysis and utilization patterns", className: "w-full rounded border border-gray-200" }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "bg-white border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border-b border-gray-200", children: [
            /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900", children: "Fleet Availability Analysis" }),
            /* @__PURE__ */ r("p", { className: "text-sm text-gray-600 mt-1", children: "Time-series availability tracking with breakdown analysis, utilization trends, and strategic redistribution recommendations for improved fleet management" })
          ] }),
          /* @__PURE__ */ r("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ r("img", { src: oc, alt: "Fleet availability analysis with time-series data and strategic recommendations", className: "w-full rounded border border-gray-200" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "What I Was Solving" }),
      /* @__PURE__ */ s("ul", { className: "space-y-3 text-gray-600", children: [
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to support both real-time response and longer-term operational planning in one product ecosystem." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to make map-based interfaces actionable rather than visually overwhelming." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to connect asset-level monitoring with network-level operational patterns." })
        ] }),
        /* @__PURE__ */ s("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ r("span", { className: "text-red-600 font-semibold", children: "•" }),
          /* @__PURE__ */ r("span", { children: "How to design dashboards that help teams act, prioritize, and improve over time." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "mb-12", children: [
      /* @__PURE__ */ r("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Why This Case Study Matters" }),
      /* @__PURE__ */ r("p", { className: "text-gray-600 leading-relaxed", children: "This project demonstrates my ability to design operational systems where clarity, urgency, and layered decision-making matter. It shows how I think about real-time products, geospatial monitoring, analytics workflows, and the relationship between tactical and strategic dashboard design." })
    ] }),
    /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6 pt-12 border-t border-gray-200", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Role" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Product and dashboard experience design" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Focus" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Operational visibility, fleet intelligence, map and analytics UX" })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("h3", { className: "font-semibold text-gray-900 mb-2", children: "Type" }),
        /* @__PURE__ */ r("p", { className: "text-gray-600", children: "Airport ground operations platform" })
      ] })
    ] })
  ] });
}
const dc = Ms([
  {
    path: "/",
    Component: cl,
    children: [
      { index: !0, Component: ul },
      { path: "digital-payments", Component: vd },
      { path: "studio-operations", Component: Ad },
      { path: "decentralized-platform", Component: jd },
      { path: "data-governance", Component: Xd },
      { path: "ground-operations", Component: lc }
    ]
  }
]);
function cc() {
  return /* @__PURE__ */ r(os, { router: dc });
}
const hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cc
}, Symbol.toStringTag, { value: "Module" }));
export {
  mc as Code0_8
};
