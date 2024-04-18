var ek = Object.defineProperty;
var tk = (e, n, t) => n in e ? ek(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var lu = (e, n, t) => (tk(e, typeof n != "symbol" ? n + "" : n, t), t);
import { j as o, u as Pu, a as ue, b as Te, H as st, c as la, S as Cs, d as ft, F as nk, e as Ct, R as At, f as On, g as sn, h as rk, i as ak, B as Ye, k as sk, l as ik, m as Ki, n as ok, E as lk, o as Ak, p as dp, q as ck, N as xe, M as It, r as Sn, s as uk, t as En, v as Hl, w as fk, T as ja, I as Qt, P as hp, x as dk, y as pp, z as nt, A as ct, C as hk, D as pk, G as tA, J as zu, K as mp, L as mk, O as dt, Q as yt, U as Re, V as gk, W as qn, X as Xi, Y as tt, Z as Na, _ as mt, $ as gp, a0 as vk, a1 as wk, a2 as vp, a3 as xk, a4 as kk, a5 as wp, a6 as hh, a7 as xp, a8 as Et, a9 as ua, aa as bk, ab as Ha, ac as kp, ad as Or, ae as Vn, af as nA, ag as Qr, ah as xu, ai as yk, aj as ph, ak as mh, al as Kt, am as bp, an as Ek, ao as Qs, ap as Nr, aq as jr, ar as Ds, as as Hr, at as Ba, au as Mk, av as yp, aw as Sk, ax as Bl, ay as Wi, az as Ik, aA as Ul, aB as Jk, aC as it, aD as Tk, aE as Ep, aF as qi, aG as Es, aH as Lr, aI as Ck, aJ as ot, aK as lt, aL as _e, aM as ge, aN as ke, aO as $e, aP as Dk, aQ as Ci, aR as Mp, aS as Sp, aT as Rk, aU as jk, aV as Ok, aW as Qk, aX as Nk, aY as Hk, aZ as Bk, a_ as ku, a$ as Uk, b0 as Lk, b1 as Pk, b2 as zk, b3 as Ip, b4 as Jp, b5 as Aa, b6 as Yk, b7 as Yi, b8 as Yu, b9 as Tp, ba as gh, bb as Cp, bc as Fk, bd as Vi, be as Fu, bf as Zk, bg as Gk, bh as Dp, bi as Kk, bj as Xk, bk as Wk, bl as bu, bm as qk, bn as zn, bo as Bi, bp as Zu, bq as Vk, br as _k, bs as Rp, bt as $k, bu as eb, bv as tb, bw as nb, bx as vh, by as wh, bz as rb, bA as xh, bB as ab, bC as sb, bD as ib, bE as rA, bF as Ll, bG as yu, bH as ob, bI as lb, bJ as jp, bK as Ab, bL as Op, bM as cb, bN as ub, bO as fb, bP as db, bQ as xs, bR as kh, bS as bh, bT as hb, bU as pb, bV as mb, bW as gb } from "./index-9800de73.mjs";
const Qp = ({ children: e, ...n }) => /* @__PURE__ */ o.jsx("div", { className: "flex h-full w-full flex-col px-5", ...n, children: /* @__PURE__ */ o.jsx("div", { className: "h-full w-full overflow-hidden rounded-t-[4px] shadow-sm", children: e }) }), Np = ({ children: e, ...n }) => /* @__PURE__ */ o.jsx("div", { className: "flex h-[775px] w-[380px] flex-col rounded-3xl bg-white p-2 shadow-xl dark:bg-grey-900", ...n, children: /* @__PURE__ */ o.jsx("div", { className: "w-100 h-100 grow overflow-auto rounded-2xl border border-grey-100 dark:border-grey-950", children: e }) }), vb = ({ title: e, label: n, value: t, onChange: a, disabled: s, error: l, hint: A, checked: f, separator: u }) => {
  const d = Pu(), [h, m] = ue(f);
  Te(() => {
    m(f);
  }, [f]);
  const v = (k) => {
    const b = k.target.checked;
    m(b), a(b);
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsxs("div", { className: `flex flex-col gap-1 ${u && "pb-2"}`, children: [
      e && /* @__PURE__ */ o.jsx(st, { grey: !0, level: 6, children: e }),
      /* @__PURE__ */ o.jsxs("label", { className: `flex cursor-pointer items-start ${e && "-mb-1 mt-1"}`, htmlFor: d, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            checked: h,
            className: "relative float-left mt-[3px] h-4 w-4 appearance-none border-2 border-solid border-grey-200 bg-grey-200 outline-none checked:border-black checked:bg-black checked:after:absolute checked:after:-mt-px checked:after:ml-[3px] checked:after:block checked:after:h-[11px] checked:after:w-[6px] checked:after:rotate-45 checked:after:border-[2px] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer focus:shadow-none focus:transition-[border-color_0.2s] dark:border-grey-800 dark:bg-grey-800 dark:checked:border-green dark:checked:bg-green",
            disabled: s,
            id: d,
            type: "checkbox",
            value: t,
            onChange: v
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: `ml-2 flex flex-col ${A && "mb-2"}`, children: [
          /* @__PURE__ */ o.jsx("span", { className: `inline-block text-[1.425rem] dark:text-white ${A && "-mb-1"}`, children: n }),
          A && /* @__PURE__ */ o.jsx(la, { color: l ? "red" : "", children: A })
        ] })
      ] })
    ] }),
    (u || l) && /* @__PURE__ */ o.jsx(Cs, { className: l ? "border-red" : "" })
  ] });
}, Eu = ({
  title: e,
  checkboxes: n,
  hint: t,
  error: a
}) => /* @__PURE__ */ o.jsxs("div", { children: [
  e && /* @__PURE__ */ o.jsx(st, { grey: !0, level: 6, children: e }),
  /* @__PURE__ */ o.jsx("div", { className: "mt-2 flex flex-col gap-1", children: n == null ? void 0 : n.map(({ key: s, ...l }) => /* @__PURE__ */ o.jsx(vb, { ...l }, s)) }),
  /* @__PURE__ */ o.jsx("div", { className: `flex flex-col ${t && "mb-2"}`, children: t && /* @__PURE__ */ o.jsx(la, { color: a ? "red" : "", children: t }) })
] }), wb = ({ hex: e, value: n, title: t, size: a = "md", isSelected: s, onSelect: l }) => {
  const A = Ct(null), f = (h) => {
    h.preventDefault(), l(n !== void 0 ? n : e);
  }, u = e.length === 4 && e[3] === "0" || e.length === 8 && e.slice(6) === "00";
  let d = "h-5 w-5";
  switch (a) {
    case "lg":
      d = "w-6 h-6";
      break;
  }
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: A,
      className: ft(
        "relative flex shrink-0 cursor-pointer items-center rounded-full border border-grey-200 dark:border-grey-800",
        d,
        s && "outline outline-2 outline-green"
      ),
      style: { backgroundColor: e },
      title: t,
      type: "button",
      onClick: f,
      children: u && /* @__PURE__ */ o.jsx("div", { className: "absolute left-0 top-0 z-10 w-[136%] origin-left rotate-45 border-b border-b-red" })
    }
  );
}, Gu = ({ title: e, value: n, swatches: t, swatchSize: a = "md", onSwatchChange: s, onTogglePicker: l, isExpanded: A, picker: f = !0, containerClassName: u }) => {
  let d = t.find((h) => h.value === n || h.hex === n);
  return A && (d = void 0), u = ft(
    "flex flex-col gap-3"
  ), /* @__PURE__ */ o.jsxs("div", { className: u, children: [
    e && /* @__PURE__ */ o.jsx(st, { useLabelTag: !0, children: e }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ o.jsx("div", { className: "flex items-center gap-1", children: t.map(({ customContent: h, ...m }) => h ? /* @__PURE__ */ o.jsx(nk, { children: h }, m.title) : /* @__PURE__ */ o.jsx(wb, { isSelected: (d == null ? void 0 : d.title) === m.title, size: a, onSelect: s, ...m }, m.title)) }),
      f && /* @__PURE__ */ o.jsxs("button", { "aria-label": "Pick color", className: "relative h-6 w-6 cursor-pointer rounded-full border border-grey-200 dark:border-grey-800", type: "button", onClick: l, children: [
        /* @__PURE__ */ o.jsx("div", { className: "absolute inset-0 rounded-full bg-[conic-gradient(hsl(360,100%,50%),hsl(315,100%,50%),hsl(270,100%,50%),hsl(225,100%,50%),hsl(180,100%,50%),hsl(135,100%,50%),hsl(90,100%,50%),hsl(45,100%,50%),hsl(0,100%,50%))]" }),
        n && !d && /* @__PURE__ */ o.jsx("div", { className: "absolute inset-[3px] overflow-hidden rounded-full border border-white dark:border-grey-950", style: { backgroundColor: n }, children: n === "transparent" && /* @__PURE__ */ o.jsx("div", { className: "absolute left-[3px] top-[3px] z-10 w-[136%] origin-left rotate-45 border-b border-b-red" }) })
      ] })
    ] })
  ] });
};
function Ns() {
  return (Ns = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }).apply(this, arguments);
}
function aA(e, n) {
  if (e == null)
    return {};
  var t, a, s = {}, l = Object.keys(e);
  for (a = 0; a < l.length; a++)
    n.indexOf(t = l[a]) >= 0 || (s[t] = e[t]);
  return s;
}
function Fi(e) {
  var n = Ct(e), t = Ct(function(a) {
    n.current && n.current(a);
  });
  return n.current = e, t.current;
}
var Zi = function(e, n, t) {
  return n === void 0 && (n = 0), t === void 0 && (t = 1), e > t ? t : e < n ? n : e;
}, Ui = function(e) {
  return "touches" in e;
}, Mu = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, yh = function(e, n, t) {
  var a = e.getBoundingClientRect(), s = Ui(n) ? function(l, A) {
    for (var f = 0; f < l.length; f++)
      if (l[f].identifier === A)
        return l[f];
    return l[0];
  }(n.touches, t) : n;
  return { left: Zi((s.pageX - (a.left + Mu(e).pageXOffset)) / a.width), top: Zi((s.pageY - (a.top + Mu(e).pageYOffset)) / a.height) };
}, Eh = function(e) {
  !Ui(e) && e.preventDefault();
}, Hp = At.memo(function(e) {
  var n = e.onMove, t = e.onKey, a = aA(e, ["onMove", "onKey"]), s = Ct(null), l = Fi(n), A = Fi(t), f = Ct(null), u = Ct(!1), d = On(function() {
    var k = function(S) {
      Eh(S), (Ui(S) ? S.touches.length > 0 : S.buttons > 0) && s.current ? l(yh(s.current, S, f.current)) : y(!1);
    }, b = function() {
      return y(!1);
    };
    function y(S) {
      var T = u.current, Q = Mu(s.current), B = S ? Q.addEventListener : Q.removeEventListener;
      B(T ? "touchmove" : "mousemove", k), B(T ? "touchend" : "mouseup", b);
    }
    return [function(S) {
      var T = S.nativeEvent, Q = s.current;
      if (Q && (Eh(T), !function(K, $) {
        return $ && !Ui(K);
      }(T, u.current) && Q)) {
        if (Ui(T)) {
          u.current = !0;
          var B = T.changedTouches || [];
          B.length && (f.current = B[0].identifier);
        }
        Q.focus(), l(yh(Q, T, f.current)), y(!0);
      }
    }, function(S) {
      var T = S.which || S.keyCode;
      T < 37 || T > 40 || (S.preventDefault(), A({ left: T === 39 ? 0.05 : T === 37 ? -0.05 : 0, top: T === 40 ? 0.05 : T === 38 ? -0.05 : 0 }));
    }, y];
  }, [A, l]), h = d[0], m = d[1], v = d[2];
  return Te(function() {
    return v;
  }, [v]), At.createElement("div", Ns({}, a, { onTouchStart: h, onMouseDown: h, className: "react-colorful__interactive", ref: s, onKeyDown: m, tabIndex: 0, role: "slider" }));
}), Ku = function(e) {
  return e.filter(Boolean).join(" ");
}, Bp = function(e) {
  var n = e.color, t = e.left, a = e.top, s = a === void 0 ? 0.5 : a, l = Ku(["react-colorful__pointer", e.className]);
  return At.createElement("div", { className: l, style: { top: 100 * s + "%", left: 100 * t + "%" } }, At.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: n } }));
}, cn = function(e, n, t) {
  return n === void 0 && (n = 0), t === void 0 && (t = Math.pow(10, n)), Math.round(t * e) / t;
}, xb = function(e) {
  return Mb(Su(e));
}, Su = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? cn(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? cn(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, kb = function(e) {
  return Eb(yb(e));
}, bb = function(e) {
  var n = e.s, t = e.v, a = e.a, s = (200 - n) * t / 100;
  return { h: cn(e.h), s: cn(s > 0 && s < 200 ? n * t / 100 / (s <= 100 ? s : 200 - s) * 100 : 0), l: cn(s / 2), a: cn(a, 2) };
}, Iu = function(e) {
  var n = bb(e);
  return "hsl(" + n.h + ", " + n.s + "%, " + n.l + "%)";
}, yb = function(e) {
  var n = e.h, t = e.s, a = e.v, s = e.a;
  n = n / 360 * 6, t /= 100, a /= 100;
  var l = Math.floor(n), A = a * (1 - t), f = a * (1 - (n - l) * t), u = a * (1 - (1 - n + l) * t), d = l % 6;
  return { r: cn(255 * [a, f, A, A, u, a][d]), g: cn(255 * [u, a, a, f, A, A][d]), b: cn(255 * [A, A, u, a, a, f][d]), a: cn(s, 2) };
}, Cl = function(e) {
  var n = e.toString(16);
  return n.length < 2 ? "0" + n : n;
}, Eb = function(e) {
  var n = e.r, t = e.g, a = e.b, s = e.a, l = s < 1 ? Cl(cn(255 * s)) : "";
  return "#" + Cl(n) + Cl(t) + Cl(a) + l;
}, Mb = function(e) {
  var n = e.r, t = e.g, a = e.b, s = e.a, l = Math.max(n, t, a), A = l - Math.min(n, t, a), f = A ? l === n ? (t - a) / A : l === t ? 2 + (a - n) / A : 4 + (n - t) / A : 0;
  return { h: cn(60 * (f < 0 ? f + 6 : f)), s: cn(l ? A / l * 100 : 0), v: cn(l / 255 * 100), a: s };
}, Sb = At.memo(function(e) {
  var n = e.hue, t = e.onChange, a = Ku(["react-colorful__hue", e.className]);
  return At.createElement("div", { className: a }, At.createElement(Hp, { onMove: function(s) {
    t({ h: 360 * s.left });
  }, onKey: function(s) {
    t({ h: Zi(n + 360 * s.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": cn(n), "aria-valuemax": "360", "aria-valuemin": "0" }, At.createElement(Bp, { className: "react-colorful__hue-pointer", left: n / 360, color: Iu({ h: n, s: 100, v: 100, a: 1 }) })));
}), Ib = At.memo(function(e) {
  var n = e.hsva, t = e.onChange, a = { backgroundColor: Iu({ h: n.h, s: 100, v: 100, a: 1 }) };
  return At.createElement("div", { className: "react-colorful__saturation", style: a }, At.createElement(Hp, { onMove: function(s) {
    t({ s: 100 * s.left, v: 100 - 100 * s.top });
  }, onKey: function(s) {
    t({ s: Zi(n.s + 100 * s.left, 0, 100), v: Zi(n.v - 100 * s.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + cn(n.s) + "%, Brightness " + cn(n.v) + "%" }, At.createElement(Bp, { className: "react-colorful__saturation-pointer", top: 1 - n.v / 100, left: n.s / 100, color: Iu(n) })));
}), Up = function(e, n) {
  if (e === n)
    return !0;
  for (var t in e)
    if (e[t] !== n[t])
      return !1;
  return !0;
}, Jb = function(e, n) {
  return e.toLowerCase() === n.toLowerCase() || Up(Su(e), Su(n));
};
function Tb(e, n, t) {
  var a = Fi(t), s = ue(function() {
    return e.toHsva(n);
  }), l = s[0], A = s[1], f = Ct({ color: n, hsva: l });
  Te(function() {
    if (!e.equal(n, f.current.color)) {
      var d = e.toHsva(n);
      f.current = { hsva: d, color: n }, A(d);
    }
  }, [n, e]), Te(function() {
    var d;
    Up(l, f.current.hsva) || e.equal(d = e.fromHsva(l), f.current.color) || (f.current = { hsva: l, color: d }, a(d));
  }, [l, e, a]);
  var u = sn(function(d) {
    A(function(h) {
      return Object.assign({}, h, d);
    });
  }, []);
  return [l, u];
}
var Cb = typeof window < "u" ? rk : Te, Db = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Mh = /* @__PURE__ */ new Map(), Rb = function(e) {
  Cb(function() {
    var n = e.current ? e.current.ownerDocument : document;
    if (n !== void 0 && !Mh.has(n)) {
      var t = n.createElement("style");
      t.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Mh.set(n, t);
      var a = Db();
      a && t.setAttribute("nonce", a), n.head.appendChild(t);
    }
  }, []);
}, jb = function(e) {
  var n = e.className, t = e.colorModel, a = e.color, s = a === void 0 ? t.defaultColor : a, l = e.onChange, A = aA(e, ["className", "colorModel", "color", "onChange"]), f = Ct(null);
  Rb(f);
  var u = Tb(t, s, l), d = u[0], h = u[1], m = Ku(["react-colorful", n]);
  return At.createElement("div", Ns({}, A, { ref: f, className: m }), At.createElement(Ib, { hsva: d, onChange: h }), At.createElement(Sb, { hue: d.h, onChange: h, className: "react-colorful__last-control" }));
}, Ob = { defaultColor: "000", toHsva: xb, fromHsva: function(e) {
  return kb({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: Jb }, Qb = function(e) {
  return At.createElement(jb, Ns({}, e, { colorModel: Ob }));
}, Nb = /^#?([0-9A-F]{3,8})$/i, Hb = function(e) {
  var n = e.color, t = n === void 0 ? "" : n, a = e.onChange, s = e.onBlur, l = e.escape, A = e.validate, f = e.format, u = e.process, d = aA(e, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]), h = ue(function() {
    return l(t);
  }), m = h[0], v = h[1], k = Fi(a), b = Fi(s), y = sn(function(T) {
    var Q = l(T.target.value);
    v(Q), A(Q) && k(u ? u(Q) : Q);
  }, [l, u, A, k]), S = sn(function(T) {
    A(T.target.value) || v(l(t)), b(T);
  }, [t, l, A, b]);
  return Te(function() {
    v(l(t));
  }, [t, l]), At.createElement("input", Ns({}, d, { value: f ? f(m) : m, spellCheck: "false", onChange: y, onBlur: S }));
}, Sh = function(e) {
  return "#" + e;
}, Bb = function(e) {
  var n = e.prefixed, t = e.alpha, a = aA(e, ["prefixed", "alpha"]), s = sn(function(A) {
    return A.replace(/([^0-9A-F]+)/gi, "").substring(0, t ? 8 : 6);
  }, [t]), l = sn(function(A) {
    return function(f, u) {
      var d = Nb.exec(f), h = d ? d[1].length : 0;
      return h === 3 || h === 6 || !!u && h === 4 || !!u && h === 8;
    }(A, t);
  }, [t]);
  return At.createElement(Hb, Ns({}, a, { escape: s, format: n ? Sh : void 0, process: Sh, validate: l }));
};
const Lp = ({ hexValue: e, eyedropper: n, clearButtonValue: t, containerClassName: a, onChange: s }) => {
  const l = Ct(null), A = sn((v) => {
    var k, b, y;
    v.stopPropagation();
    const S = (k = l.current) == null ? void 0 : k.querySelector("input");
    v.target !== S && ((y = (b = l.current) == null ? void 0 : b.querySelector("input")) == null || y.focus(), v.preventDefault());
  }, []), f = Ct(!1), u = sn(() => {
    var v, k;
    f.current = !1, (k = (v = l.current) == null ? void 0 : v.querySelector("input")) == null || k.focus(), document.removeEventListener("mouseup", u), document.removeEventListener("touchend", u);
  }, []), d = sn(() => {
    f.current = !0, document.addEventListener("mouseup", u), document.addEventListener("touchend", u);
  }, [u]), h = sn((v) => {
    if (v.preventDefault(), !window.EyeDropper)
      return;
    f.current = !0, document.body.style.setProperty("pointer-events", "none"), new window.EyeDropper().open().then((b) => s == null ? void 0 : s(b.sRGBHex)).finally(() => {
      var b, y;
      f.current = !1, document.body.style.removeProperty("pointer-events"), (y = (b = l.current) == null ? void 0 : b.querySelector("input")) == null || y.focus();
    });
  }, [s]);
  Te(() => {
    var v, k;
    (k = (v = l.current) == null ? void 0 : v.querySelector("input")) == null || k.focus();
  }, []);
  const m = sn(() => {
    var v, k;
    (k = (v = l.current) == null ? void 0 : v.querySelector("input")) == null || k.focus();
  }, []);
  return a = ft(
    "mt-2",
    a
  ), /* @__PURE__ */ o.jsxs("div", { className: a, onMouseDown: A, onTouchStart: A, children: [
    /* @__PURE__ */ o.jsx(Qb, { className: "w-full", color: e || "#ffffff", onChange: s, onMouseDown: d, onTouchStart: d }),
    /* @__PURE__ */ o.jsxs("div", { className: "mt-3 flex gap-2", children: [
      /* @__PURE__ */ o.jsxs("div", { ref: l, className: "peer relative order-2 flex h-10 w-full items-center", onClick: m, children: [
        /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 top-[9px] z-10 ml-1 mr-2 text-grey-700", children: "#" }),
        /* @__PURE__ */ o.jsx(Bb, { "aria-label": "Color value", className: "z-[1] w-full rounded-md border border-transparent bg-grey-150 p-2 pl-6 transition-all hover:bg-grey-100 focus:border-green focus:bg-white focus:shadow-[0_0_0_1px_rgba(48,207,67,1)] dark:bg-grey-900 dark:text-white dark:focus:bg-grey-925", color: e, onChange: s }),
        n && !!window.EyeDropper && /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "absolute inset-y-0 right-3 z-50 my-auto h-4 w-4 p-[1px]",
            type: "button",
            onClick: h,
            children: /* @__PURE__ */ o.jsx(ak, { className: "h-full w-full" })
          }
        )
      ] }),
      t !== void 0 && /* @__PURE__ */ o.jsx(Ye, { color: "grey", value: "Clear", onClick: () => s == null ? void 0 : s(t) })
    ] })
  ] });
}, Ub = sk({
  colorPickers: []
}), Ih = (e) => e.length === 4 ? e.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3") : e, Li = ({ testId: e, title: n, direction: t, value: a, hint: s, error: l, eyedropper: A, clearButtonValue: f, onChange: u, swatches: d = [], alwaysOpen: h = !1, debounceMs: m }) => {
  const [v, k] = ue(!1), [b, y] = ue(a), S = ik(Ub), T = Pu();
  Te(() => {
    y((Y) => Ih(Y || "") === a ? Y : a);
  }, [a]), Te(() => (S.colorPickers.push({ id: T, setExpanded: k }), () => {
    S.colorPickers = S.colorPickers.filter((Y) => Y.id !== T);
  }), [S, T]), Te(() => {
    if (v) {
      S.colorPickers.filter((V) => V.id !== T).forEach((V) => V.setExpanded(!1));
      const Y = () => {
        k(!1);
      };
      return document.addEventListener("click", Y), () => {
        document.removeEventListener("click", Y);
      };
    }
  }, [S, T, v]);
  const Q = On(() => u && m ? Ki(u, m) : u, [m, u]), B = (Y) => {
    y(Y), Q == null || Q(Y ? Ih(Y) : null);
  };
  let K = /* @__PURE__ */ o.jsx(
    Gu,
    {
      isExpanded: v,
      swatches: d,
      value: b,
      onSwatchChange: (Y) => {
        B(Y), k(!1);
      },
      onTogglePicker: () => !h && k(!v)
    }
  );
  n && (K = /* @__PURE__ */ o.jsxs("div", { className: ft("flex w-full cursor-pointer items-start first:mt-0 dark:text-white", t === "rtl" && "flex-row-reverse"), children: [
    /* @__PURE__ */ o.jsx("div", { className: "shrink-0", children: K }),
    /* @__PURE__ */ o.jsxs("div", { className: ft("flex-1", t === "rtl" ? "pr-2" : "pl-2", s ? "mt-[-2px]" : "mt-[1px]"), onClick: () => !h && k(!v), children: [
      n,
      s && /* @__PURE__ */ o.jsx("div", { className: `text-xs ${l ? "text-red" : "text-grey-700"}`, children: s })
    ] })
  ] }));
  const $ = d.find((Y) => Y.value === b);
  return /* @__PURE__ */ o.jsxs("div", { className: "mt-2 flex-col", "data-testid": e, onClick: (Y) => Y.stopPropagation(), children: [
    K,
    (h || v) && /* @__PURE__ */ o.jsx(Lp, { clearButtonValue: f, eyedropper: A, hexValue: ($ == null ? void 0 : $.hex) || b || void 0, onChange: B })
  ] });
}, Lb = function(e) {
  let n = "pending", t;
  const a = e().then(
    (l) => {
      n = "success", t = l;
    },
    (l) => {
      n = "error", t = l;
    }
  );
  return { read: () => {
    switch (n) {
      case "pending":
        throw a;
      case "error":
        throw t;
      default:
        return t;
    }
  } };
}, Pb = ({
  editor: e,
  value: n,
  onChange: t,
  onBlur: a,
  placeholder: s,
  nodes: l,
  emojiPicker: A = !0
}) => {
  const f = sn((b) => {
    var y;
    try {
      dp({
        error: b,
        tags: { lexical: !0 },
        contexts: {
          koenig: {
            version: (y = window["@tryghost/koenig-lexical"]) == null ? void 0 : y.version
          }
        }
      });
    } catch (S) {
      console.error(S);
    }
    console.error(b);
  }, []), { setFocusState: u } = ck(), d = () => {
    a && a(), u(!1);
  }, h = () => {
    u(!0);
  }, m = On(() => new Proxy({}, {
    get: (b, y) => e.read()[y]
  }), [e]), v = {
    DEFAULT_NODES: m.DEFAULT_TRANSFORMERS,
    BASIC_NODES: m.BASIC_TRANSFORMERS,
    MINIMAL_NODES: m.MINIMAL_TRANSFORMERS
  }, k = (b) => {
    const S = new DOMParser().parseFromString(b, "text/html");
    S.querySelectorAll("*").forEach((Q) => {
      Q.style.removeProperty("white-space"), Q.getAttribute("style") || Q.removeAttribute("style");
    }), S.body.innerHTML !== n && (t == null || t(S.body.innerHTML));
  };
  return /* @__PURE__ */ o.jsx(
    m.KoenigComposer,
    {
      nodes: m[l || "DEFAULT_NODES"],
      onError: f,
      children: /* @__PURE__ */ o.jsxs(
        m.KoenigComposableEditor,
        {
          className: "koenig-lexical koenig-lexical-editor-input",
          darkMode: !1,
          isSnippetsEnabled: !1,
          markdownTransformers: v[l || "DEFAULT_NODES"],
          placeholderClassName: "koenig-lexical-editor-input-placeholder line-clamp-1",
          placeholderText: s,
          singleParagraph: !0,
          onBlur: d,
          onFocus: h,
          children: [
            /* @__PURE__ */ o.jsx(m.HtmlOutputPlugin, { html: n, setHtml: k }),
            A ? /* @__PURE__ */ o.jsx(m.EmojiPickerPlugin, {}) : null
          ]
        }
      )
    }
  );
}, zb = ({
  className: e,
  ...n
}) => {
  const { fetchKoenigLexical: t } = ok(), a = On(() => Lb(t), [t]);
  return /* @__PURE__ */ o.jsx("div", { className: e || "w-full", children: /* @__PURE__ */ o.jsx("div", { className: "koenig-react-editor w-full [&_*]:!font-inherit [&_*]:!text-inherit", children: /* @__PURE__ */ o.jsx(lk, { name: "editor", children: /* @__PURE__ */ o.jsx(Ak, { fallback: /* @__PURE__ */ o.jsx("p", { className: "koenig-react-editor-loading", children: "Loading editor..." }), children: /* @__PURE__ */ o.jsx(Pb, { ...n, editor: a }) }) }) }) });
}, Xu = ({
  title: e,
  hideTitle: n,
  error: t,
  hint: a,
  value: s,
  clearBg: l = !1,
  className: A = "",
  containerClassName: f = "",
  hintClassName: u = "",
  unstyled: d = !1,
  ...h
}) => {
  const m = d ? "" : ft(
    "flex min-h-[32px] items-center rounded-md border border-transparent py-1.5 md:min-h-[36px]",
    l ? "bg-transparent" : "bg-grey-150 px-3 dark:bg-grey-900",
    t ? "border-red" : "transition-all hover:bg-grey-100 has-[:focus]:border-green has-[:focus]:bg-white has-[:focus]:shadow-[0_0_0_1px_rgba(48,207,67,1)] dark:selection:bg-[rgba(88,101,116,0.99)] dark:hover:bg-grey-925 dark:has-[:focus]:bg-grey-950",
    e && !n && !l && "mt-2",
    A
  );
  return /* @__PURE__ */ o.jsxs("div", { className: `flex flex-col ${f}`, children: [
    e && /* @__PURE__ */ o.jsx(st, { className: n ? "sr-only" : "", grey: !0, useLabelTag: !0, children: e }),
    /* @__PURE__ */ o.jsx("div", { className: m, children: /* @__PURE__ */ o.jsx(zb, { ...h, value: s }) }),
    a && /* @__PURE__ */ o.jsx(la, { className: u, color: t ? "red" : "", children: a })
  ] });
}, Wu = ({ id: e, title: n, options: t, onSelect: a, error: s, hint: l, selectedOption: A, separator: f }) => {
  const u = (d) => {
    a(d.target.value);
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsxs("div", { className: `flex flex-col gap-2 ${f && "pb-2"}`, children: [
      n && /* @__PURE__ */ o.jsx(st, { level: 6, children: n }),
      t.map((d) => /* @__PURE__ */ o.jsxs("label", { className: `flex cursor-pointer items-start ${n && "-mb-1 mt-1"}`, htmlFor: d.value, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            checked: A === d.value,
            className: "relative float-left mt-[3px] h-4 w-4 min-w-[16px] appearance-none rounded-full border-2 border-solid border-grey-300 after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-green checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-green checked:after:bg-green checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:outline-none focus:ring-0 checked:focus:border-green dark:border-grey-800 dark:text-white dark:checked:border-green dark:checked:after:border-green dark:checked:after:bg-green dark:checked:focus:border-green",
            id: d.value,
            name: e,
            type: "radio",
            value: d.value,
            onChange: u
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: `ml-2 flex flex-col ${d.hint && "mb-2"}`, children: [
          /* @__PURE__ */ o.jsx("span", { className: `inline-block text-md dark:text-white ${d.hint && "-mb-1"}`, children: d.label }),
          d.hint && /* @__PURE__ */ o.jsx(la, { children: d.hint })
        ] })
      ] }, d.value)),
      l && /* @__PURE__ */ o.jsx(la, { color: s ? "red" : "", children: l })
    ] }),
    (f || s) && /* @__PURE__ */ o.jsx(Cs, { className: s ? "border-red" : "" })
  ] });
}, Pl = ({ children: e, gap: n = "md", className: t }) => {
  let a = "gap-3";
  switch (n) {
    case "sm":
      a = "gap-2";
      break;
    case "md":
      a = "gap-3";
      break;
    case "lg":
      a = "gap-4";
      break;
  }
  return t = ft(
    "flex flex-col gap-3",
    a,
    t
  ), /* @__PURE__ */ o.jsx("div", { className: t, children: e });
}, Yb = ({
  title: e = "Upgrade your plan",
  prompt: n,
  okLabel: t = "Upgrade",
  formSheet: a = !1,
  onOk: s
}) => /* @__PURE__ */ o.jsx(
  It,
  {
    backDropClick: !1,
    formSheet: a,
    okColor: "green",
    okLabel: t,
    testId: "limit-modal",
    title: e,
    width: 540,
    onOk: s,
    children: /* @__PURE__ */ o.jsx("div", { className: "py-4 leading-9", children: n })
  }
), _i = xe.create(Yb), qu = ({ heading: e, children: n, className: t }) => (t = ft(
  "w-full p-[8vmin] pt-5",
  t
), /* @__PURE__ */ o.jsxs("div", { className: t, children: [
  e && /* @__PURE__ */ o.jsx(st, { className: "mb-8", children: e }),
  n
] })), sA = ({
  items: e,
  backIcon: n = !1,
  snapBackIcon: t = !0,
  onBack: a,
  containerClassName: s,
  itemClassName: l,
  activeItemClassName: A,
  separatorClassName: f
}) => {
  const u = e.length;
  let d = 0;
  return s = ft(
    "flex items-center gap-2 text-sm",
    s
  ), A = ft(
    "font-bold",
    A
  ), l = ft(
    "text-sm",
    l
  ), /* @__PURE__ */ o.jsxs("div", { className: s, children: [
    n && /* @__PURE__ */ o.jsx(Ye, { className: t ? "mr-1" : "mr-6", icon: "arrow-left", iconColorClass: "dark:text-white", size: "sm", link: !0, onClick: a }),
    e.map((h) => {
      const m = d === u - 1 ? /* @__PURE__ */ o.jsx("span", { className: A, children: h.label }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `${l} ${h.onClick && "-mx-1 cursor-pointer rounded-sm px-1 py-px hover:bg-grey-100 dark:hover:bg-grey-900"}`,
            type: "button",
            onClick: h.onClick,
            children: h.label
          },
          `bc-${d}`
        ),
        /* @__PURE__ */ o.jsx("span", { className: f, children: "/" })
      ] });
      return d = d + 1, m;
    })
  ] });
}, Hs = ({
  testId: e,
  title: n,
  titleHeadingLevel: t = 4,
  size: a = "full",
  width: s,
  height: l,
  sidebar: A = "",
  preview: f,
  dirty: u = !1,
  cancelLabel: d = "Cancel",
  okLabel: h = "OK",
  okColor: m = "black",
  previewToolbar: v = !0,
  leftToolbar: k = !0,
  rightToolbar: b = !0,
  deviceSelector: y = !0,
  siteLink: S,
  previewToolbarURLs: T,
  previewBgColor: Q = "grey",
  selectedURL: B,
  previewToolbarTabs: K,
  previewToolbarBreadcrumbs: $,
  buttonsDisabled: Y,
  sidebarButtons: V,
  sidebarHeader: re,
  sidebarPadding: le = !0,
  sidebarContentClasses: ne,
  enableCMDS: ae = !0,
  backDropClick: j,
  onCancel: _,
  onOk: F,
  afterClose: W,
  onSelectURL: H,
  onSelectDesktopView: Z,
  onSelectMobileView: pe,
  onBreadcrumbsBack: Me
}) => {
  const G = Sn(), { setGlobalDirtyState: Ie } = uk();
  Te(() => {
    Ie(u);
  }, [u, Ie]), Te(() => {
    if (F) {
      const Ne = (Mt) => {
        (Mt.metaKey || Mt.ctrlKey) && Mt.key === "s" && (Mt.preventDefault(), F());
      };
      if (ae)
        return window.addEventListener("keydown", Ne), () => {
          window.removeEventListener("keydown", Ne);
        };
    }
  });
  const [be, Ee] = ue("desktop");
  if (be === "mobile" && y ? f = /* @__PURE__ */ o.jsx(Np, { "data-testid": "preview-mobile", children: f }) : be === "desktop" && y && (f = /* @__PURE__ */ o.jsx(Qp, { "data-testid": "preview-desktop", children: f })), v) {
    let Ne = /* @__PURE__ */ o.jsx(o.Fragment, {});
    T ? Ne = /* @__PURE__ */ o.jsx(
      En,
      {
        options: T,
        selectedOption: T.find((Xe) => Xe.value === B),
        onSelect: (Xe) => Xe && (H == null ? void 0 : H(Xe.value))
      }
    ) : K ? Ne = /* @__PURE__ */ o.jsx(
      ja,
      {
        border: !1,
        selectedTab: B,
        tabs: K,
        width: "wide",
        onTabChange: H
      }
    ) : $ && (Ne = /* @__PURE__ */ o.jsx(
      sA,
      {
        activeItemClassName: "hidden md:!block md:!visible",
        containerClassName: "whitespace-nowrap",
        itemClassName: "hidden md:!block md:!visible",
        items: $,
        separatorClassName: "hidden md:!block md:!visible",
        backIcon: !0,
        onBack: Me
      }
    ));
    const Mt = "text-black dark:text-green", Xt = "text-grey-500 dark:text-grey-600", qe = [
      {
        icon: "laptop",
        label: "Desktop",
        hideLabel: !0,
        link: !0,
        size: "sm",
        iconColorClass: be === "desktop" ? Mt : Xt,
        onClick: Z || (() => {
          Ee("desktop");
        })
      },
      {
        icon: "mobile",
        label: "Mobile",
        hideLabel: !0,
        link: !0,
        size: "sm",
        iconColorClass: be === "mobile" ? Mt : Xt,
        onClick: pe || (() => {
          Ee("mobile");
        })
      }
    ], Le = y && /* @__PURE__ */ o.jsx(
      Hl,
      {
        buttons: qe
      }
    );
    let ee = "";
    Q === "grey" ? ee = "bg-grey-50 dark:bg-black" : Q === "greygradient" && (ee = "bg-gradient-to-tr from-white to-[#f9f9fa] dark:from-grey-950 dark:to-black");
    const Se = ft(
      "min-w-100 absolute inset-y-0 left-0 right-[400px] flex w-full grow flex-col overflow-y-auto",
      ee
    );
    let Qe;
    S && (Qe = /* @__PURE__ */ o.jsx("div", { className: "ml-3 border-l border-grey-400 dark:border-grey-800", children: /* @__PURE__ */ o.jsxs("a", { className: "ml-3 flex items-center gap-1 text-sm", href: S, rel: "noopener noreferrer", target: "_blank", children: [
      "View site ",
      /* @__PURE__ */ o.jsx(Qt, { name: "arrow-top-right", size: "xs" })
    ] }) })), f = /* @__PURE__ */ o.jsxs("div", { className: Se, children: [
      v && /* @__PURE__ */ o.jsxs("header", { className: "relative flex h-[74px] shrink-0 items-center justify-center px-3 py-5", "data-testid": "design-toolbar", children: [
        k && /* @__PURE__ */ o.jsx("div", { className: "absolute left-5 flex h-full items-center", children: Ne }),
        b && /* @__PURE__ */ o.jsxs("div", { className: "absolute right-5 flex h-full items-center", children: [
          Le,
          Qe
        ] })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "flex grow items-center justify-center text-sm text-grey-400", children: f })
    ] });
  }
  const de = [];
  return V || (de.push({
    key: "cancel-modal",
    label: d,
    onClick: _ || (() => {
      fk(u, () => {
        G.remove(), W == null || W();
      });
    }),
    disabled: Y
  }), de.push({
    key: "ok-modal",
    label: h,
    color: m,
    onClick: F,
    disabled: Y
  })), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: W,
      animate: !1,
      backDropClick: j,
      dirty: u,
      footer: !1,
      height: l,
      padding: !1,
      size: a,
      testId: e,
      title: "",
      width: s,
      hideXOnMobile: !0,
      children: /* @__PURE__ */ o.jsxs("div", { className: "flex h-full grow", children: [
        /* @__PURE__ */ o.jsx("div", { className: `relative hidden grow flex-col [@media(min-width:801px)]:!visible [@media(min-width:801px)]:!flex ${Q === "grey" ? "bg-grey-50" : "bg-white dark:bg-black"}`, children: f }),
        A && /* @__PURE__ */ o.jsxs("div", { className: "relative flex h-full w-full flex-col border-l border-grey-100 dark:border-grey-900 [@media(min-width:801px)]:w-auto [@media(min-width:801px)]:basis-[400px]", children: [
          re || /* @__PURE__ */ o.jsxs("div", { className: "flex max-h-[82px] items-center justify-between gap-3 px-7 py-6", children: [
            /* @__PURE__ */ o.jsx(st, { level: t, children: n }),
            V || /* @__PURE__ */ o.jsx(Hl, { buttons: de })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: `${re ? "" : "absolute inset-x-0 bottom-0 top-[74px] grow"} ${le && "p-7 pt-0"} flex flex-col justify-between overflow-y-auto ${ne && ne}`, children: A })
        ] })
      ] })
    }
  );
}, Fb = ({ offset: e, onTrigger: n }) => {
  const t = Ct(null);
  return Te(() => {
    const a = new IntersectionObserver((s) => {
      s[0].intersectionRatio <= 0 || n();
    });
    return t.current && a.observe(t.current), () => a.disconnect();
  }, [n]), /* @__PURE__ */ o.jsx("div", { ref: t, className: "absolute w-full", style: { bottom: e } });
}, Pp = ({
  trigger: e,
  triggerButtonProps: n,
  items: t,
  position: a = "left"
}) => (e || (e = /* @__PURE__ */ o.jsx(Ye, { icon: "ellipsis", label: "Menu", hideLabel: !0, ...n })), /* @__PURE__ */ o.jsx(hp, { position: a, trigger: e, closeOnItemClick: !0, children: /* @__PURE__ */ o.jsx("div", { className: "flex min-w-[160px] flex-col justify-stretch py-1", role: "none", children: t.map((s) => /* @__PURE__ */ o.jsx("button", { className: "mx-1 block cursor-pointer rounded-[2.5px] px-4 py-1.5 text-left text-sm hover:bg-grey-100 dark:hover:bg-grey-800", type: "button", onClick: s.onClick, children: s.label }, s.id)) }) })), Au = ({
  className: e,
  children: n,
  colSpan: t,
  sticky: a = !1,
  ...s
}) => {
  const l = ft(
    "!py-2 !pl-0 !pr-6 text-left align-top",
    a && "sticky top-0 bg-white",
    s.onClick && "hover:cursor-pointer",
    e
  );
  return /* @__PURE__ */ o.jsx("th", { className: l, colSpan: t, ...s, children: /* @__PURE__ */ o.jsx(st, { className: "whitespace-nowrap", level: 6, children: n }) });
}, zp = ({
  left: e,
  center: n,
  right: t,
  sticky: a = !0,
  containerClassName: s,
  children: l
}) => {
  const A = ft(
    "z-50 h-22 min-h-[92px] p-8 px-6 tablet:px-12",
    !l && "flex items-center justify-between gap-3",
    a && "sticky top-0",
    s
  );
  if (!l) {
    if (e) {
      const f = ft(
        "flex flex-auto items-center",
        t && n && "basis-1/3",
        !t && n && "basis-1/2"
      );
      e = /* @__PURE__ */ o.jsx("div", { className: f, children: e });
    }
    if (n) {
      const f = ft(
        "flex flex-auto items-center justify-center",
        e && t && "basis-1/3",
        (e && !t || !e && t) && "basis-1/2"
      );
      n = /* @__PURE__ */ o.jsx("div", { className: f, children: n });
    }
    if (t) {
      const f = ft(
        "flex flex-auto items-center justify-end",
        e && n && "basis-1/3",
        !e && n && "basis-1/2"
      );
      t = /* @__PURE__ */ o.jsx("div", { className: f, children: t });
    }
  }
  return /* @__PURE__ */ o.jsx("div", { className: A, children: l || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    e,
    n,
    t
  ] }) });
}, Yp = ({ items: e, setItems: n, blank: t, canAddNewItem: a }) => {
  const [s, l] = ue(e.map((v, k) => ({ item: v, id: k.toString() }))), [A, f] = ue(t);
  return Te(() => {
    const v = s.map(({ item: k }) => k);
    a(A) && v.push(A), JSON.stringify(v) !== JSON.stringify(e) && n(v);
  }, [s, A, e, n, a]), {
    items: s,
    updateItem: (v, k) => {
      const b = s.map((y) => y.id === v ? { ...y, item: k } : y);
      l(b), n(b.map((y) => y.item));
    },
    addItem: () => {
      if (a(A)) {
        const v = s.reduce((b, y) => Math.max(b, parseInt(y.id)), 0), k = s.concat({ item: A, id: (v + 1).toString() });
        l(k), n(k.map((b) => b.item)), f(t);
      }
    },
    removeItem: (v) => {
      const k = s.filter((b) => b.id !== v);
      l(k), n(k.map((b) => b.item));
    },
    moveItem: (v, k) => {
      if (v !== k) {
        const b = s.findIndex((T) => T.id === v), y = k ? s.findIndex((T) => T.id === k) : 0, S = dk(s, b, y);
        l(S), n(S.map((T) => T.item));
      }
    },
    newItem: A,
    setNewItem: f
  };
}, Zb = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var Fp = Zb;
const Gb = "2.0.0", Zp = 256, Kb = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Xb = 16, Wb = Zp - 6, qb = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Gp = {
  MAX_LENGTH: Zp,
  MAX_SAFE_COMPONENT_LENGTH: Xb,
  MAX_SAFE_BUILD_LENGTH: Wb,
  MAX_SAFE_INTEGER: Kb,
  RELEASE_TYPES: qb,
  SEMVER_SPEC_VERSION: Gb,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
}, Ju = { exports: {} };
(function(e, n) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: t,
    MAX_SAFE_BUILD_LENGTH: a,
    MAX_LENGTH: s
  } = Gp, l = Fp;
  n = e.exports = {};
  const A = n.re = [], f = n.safeRe = [], u = n.src = [], d = n.t = {};
  let h = 0;
  const m = "[a-zA-Z0-9-]", v = [
    ["\\s", 1],
    ["\\d", s],
    [m, a]
  ], k = (y) => {
    for (const [S, T] of v)
      y = y.split(`${S}*`).join(`${S}{0,${T}}`).split(`${S}+`).join(`${S}{1,${T}}`);
    return y;
  }, b = (y, S, T) => {
    const Q = k(S), B = h++;
    l(y, B, S), d[y] = B, u[B] = S, A[B] = new RegExp(S, T ? "g" : void 0), f[B] = new RegExp(Q, T ? "g" : void 0);
  };
  b("NUMERICIDENTIFIER", "0|[1-9]\\d*"), b("NUMERICIDENTIFIERLOOSE", "\\d+"), b("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), b("MAINVERSION", `(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})`), b("MAINVERSIONLOOSE", `(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})`), b("PRERELEASEIDENTIFIER", `(?:${u[d.NUMERICIDENTIFIER]}|${u[d.NONNUMERICIDENTIFIER]})`), b("PRERELEASEIDENTIFIERLOOSE", `(?:${u[d.NUMERICIDENTIFIERLOOSE]}|${u[d.NONNUMERICIDENTIFIER]})`), b("PRERELEASE", `(?:-(${u[d.PRERELEASEIDENTIFIER]}(?:\\.${u[d.PRERELEASEIDENTIFIER]})*))`), b("PRERELEASELOOSE", `(?:-?(${u[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[d.PRERELEASEIDENTIFIERLOOSE]})*))`), b("BUILDIDENTIFIER", `${m}+`), b("BUILD", `(?:\\+(${u[d.BUILDIDENTIFIER]}(?:\\.${u[d.BUILDIDENTIFIER]})*))`), b("FULLPLAIN", `v?${u[d.MAINVERSION]}${u[d.PRERELEASE]}?${u[d.BUILD]}?`), b("FULL", `^${u[d.FULLPLAIN]}$`), b("LOOSEPLAIN", `[v=\\s]*${u[d.MAINVERSIONLOOSE]}${u[d.PRERELEASELOOSE]}?${u[d.BUILD]}?`), b("LOOSE", `^${u[d.LOOSEPLAIN]}$`), b("GTLT", "((?:<|>)?=?)"), b("XRANGEIDENTIFIERLOOSE", `${u[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), b("XRANGEIDENTIFIER", `${u[d.NUMERICIDENTIFIER]}|x|X|\\*`), b("XRANGEPLAIN", `[v=\\s]*(${u[d.XRANGEIDENTIFIER]})(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:${u[d.PRERELEASE]})?${u[d.BUILD]}?)?)?`), b("XRANGEPLAINLOOSE", `[v=\\s]*(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:${u[d.PRERELEASELOOSE]})?${u[d.BUILD]}?)?)?`), b("XRANGE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAIN]}$`), b("XRANGELOOSE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAINLOOSE]}$`), b("COERCE", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`), b("COERCERTL", u[d.COERCE], !0), b("LONETILDE", "(?:~>?)"), b("TILDETRIM", `(\\s*)${u[d.LONETILDE]}\\s+`, !0), n.tildeTrimReplace = "$1~", b("TILDE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAIN]}$`), b("TILDELOOSE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAINLOOSE]}$`), b("LONECARET", "(?:\\^)"), b("CARETTRIM", `(\\s*)${u[d.LONECARET]}\\s+`, !0), n.caretTrimReplace = "$1^", b("CARET", `^${u[d.LONECARET]}${u[d.XRANGEPLAIN]}$`), b("CARETLOOSE", `^${u[d.LONECARET]}${u[d.XRANGEPLAINLOOSE]}$`), b("COMPARATORLOOSE", `^${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]})$|^$`), b("COMPARATOR", `^${u[d.GTLT]}\\s*(${u[d.FULLPLAIN]})$|^$`), b("COMPARATORTRIM", `(\\s*)${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]}|${u[d.XRANGEPLAIN]})`, !0), n.comparatorTrimReplace = "$1$2$3", b("HYPHENRANGE", `^\\s*(${u[d.XRANGEPLAIN]})\\s+-\\s+(${u[d.XRANGEPLAIN]})\\s*$`), b("HYPHENRANGELOOSE", `^\\s*(${u[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[d.XRANGEPLAINLOOSE]})\\s*$`), b("STAR", "(<|>)?=?\\s*\\*"), b("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), b("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Ju, Ju.exports);
var Vb = Ju.exports;
const _b = Object.freeze({ loose: !0 }), $b = Object.freeze({}), ey = (e) => e ? typeof e != "object" ? _b : e : $b;
var ty = ey;
const Jh = /^[0-9]+$/, Kp = (e, n) => {
  const t = Jh.test(e), a = Jh.test(n);
  return t && a && (e = +e, n = +n), e === n ? 0 : t && !a ? -1 : a && !t ? 1 : e < n ? -1 : 1;
}, ny = (e, n) => Kp(n, e);
var ry = {
  compareIdentifiers: Kp,
  rcompareIdentifiers: ny
};
const Dl = Fp, { MAX_LENGTH: Th, MAX_SAFE_INTEGER: Rl } = Gp, { safeRe: Ch, t: Dh } = Vb, ay = ty, { compareIdentifiers: ks } = ry;
let sy = class hr {
  constructor(n, t) {
    if (t = ay(t), n instanceof hr) {
      if (n.loose === !!t.loose && n.includePrerelease === !!t.includePrerelease)
        return n;
      n = n.version;
    } else if (typeof n != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof n}".`);
    if (n.length > Th)
      throw new TypeError(
        `version is longer than ${Th} characters`
      );
    Dl("SemVer", n, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
    const a = n.trim().match(t.loose ? Ch[Dh.LOOSE] : Ch[Dh.FULL]);
    if (!a)
      throw new TypeError(`Invalid Version: ${n}`);
    if (this.raw = n, this.major = +a[1], this.minor = +a[2], this.patch = +a[3], this.major > Rl || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Rl || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Rl || this.patch < 0)
      throw new TypeError("Invalid patch version");
    a[4] ? this.prerelease = a[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const l = +s;
        if (l >= 0 && l < Rl)
          return l;
      }
      return s;
    }) : this.prerelease = [], this.build = a[5] ? a[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(n) {
    if (Dl("SemVer.compare", this.version, this.options, n), !(n instanceof hr)) {
      if (typeof n == "string" && n === this.version)
        return 0;
      n = new hr(n, this.options);
    }
    return n.version === this.version ? 0 : this.compareMain(n) || this.comparePre(n);
  }
  compareMain(n) {
    return n instanceof hr || (n = new hr(n, this.options)), ks(this.major, n.major) || ks(this.minor, n.minor) || ks(this.patch, n.patch);
  }
  comparePre(n) {
    if (n instanceof hr || (n = new hr(n, this.options)), this.prerelease.length && !n.prerelease.length)
      return -1;
    if (!this.prerelease.length && n.prerelease.length)
      return 1;
    if (!this.prerelease.length && !n.prerelease.length)
      return 0;
    let t = 0;
    do {
      const a = this.prerelease[t], s = n.prerelease[t];
      if (Dl("prerelease compare", t, a, s), a === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (a === void 0)
        return -1;
      if (a === s)
        continue;
      return ks(a, s);
    } while (++t);
  }
  compareBuild(n) {
    n instanceof hr || (n = new hr(n, this.options));
    let t = 0;
    do {
      const a = this.build[t], s = n.build[t];
      if (Dl("prerelease compare", t, a, s), a === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (a === void 0)
        return -1;
      if (a === s)
        continue;
      return ks(a, s);
    } while (++t);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(n, t, a) {
    switch (n) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, a);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, a);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", t, a), this.inc("pre", t, a);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", t, a), this.inc("pre", t, a);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const s = Number(a) ? 1 : 0;
        if (!t && a === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [s];
        else {
          let l = this.prerelease.length;
          for (; --l >= 0; )
            typeof this.prerelease[l] == "number" && (this.prerelease[l]++, l = -2);
          if (l === -1) {
            if (t === this.prerelease.join(".") && a === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(s);
          }
        }
        if (t) {
          let l = [t, s];
          a === !1 && (l = [t]), ks(this.prerelease[0], t) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = l) : this.prerelease = l;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${n}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var iy = sy;
const Rh = iy, oy = (e, n, t = !1) => {
  if (e instanceof Rh)
    return e;
  try {
    return new Rh(e, n);
  } catch (a) {
    if (!t)
      return null;
    throw a;
  }
};
var ly = oy;
const Ay = /* @__PURE__ */ pp(ly);
function jh(e) {
  var t;
  if (e.includes("-pre."))
    try {
      const a = Ay(e, { includePrerelease: !0 });
      return a && ((t = a.build) != null && t[0]) ? `https://github.com/TryGhost/Ghost/commit/${a.build[0]}` : "";
    } catch {
      return "";
    }
  return `https://github.com/TryGhost/Ghost/releases/tag/v${e.replace("+moya", "")}`;
}
function cy(e, n) {
  var a;
  const t = !!((a = e.match) != null && a.call(e, /production/i));
  return !!(t && n !== "mysql8" || !t && n === "mysql5");
}
const uy = xe.create(({}) => {
  const { updateRoute: e } = nt();
  let t = ct().config;
  const a = hk();
  function s() {
    return (/* @__PURE__ */ new Date()).getFullYear();
  }
  function l() {
    return !!t.enableDeveloperExperiments;
  }
  function A() {
    var u;
    return !((u = t.hostSettings) != null && u.siteId);
  }
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        e("");
      },
      cancelLabel: "",
      footer: /* @__PURE__ */ o.jsx(o.Fragment, {}),
      topRightContent: "close",
      width: 540,
      children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-4 pb-7 text-sm", children: [
        /* @__PURE__ */ o.jsx(pk, { className: "h-auto w-[120px] dark:invert" }),
        /* @__PURE__ */ o.jsxs("div", { className: "mt-3 flex flex-col gap-1.5", children: [
          (a == null ? void 0 : a.message) && /* @__PURE__ */ o.jsxs("div", { className: "gh-prose-links mb-4 rounded-sm border border-green p-5", children: [
            /* @__PURE__ */ o.jsx("strong", { children: "Update available!" }),
            /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: a.message } })
          ] }),
          jh(t.version) && /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("strong", { children: "Version:" }),
            " ",
            /* @__PURE__ */ o.jsx("a", { className: "text-green", href: jh(t.version), rel: "noopener noreferrer", target: "_blank", children: t.version })
          ] }) || /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("strong", { children: "Version:" }),
            " ",
            t.version
          ] }),
          A() && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: "Environment:" }),
              " ",
              t.environment
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: "Database:" }),
              " ",
              t.database
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: "Mail:" }),
              " ",
              t.mail ? t.mail : "Native"
            ] })
          ] }),
          l() && /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("strong", { children: "Developer experiments:" }),
            " Enabled"
          ] }),
          A() && cy(t.environment, t.database) && /* @__PURE__ */ o.jsxs("div", { className: "text-red-500 dark:text-red-400", children: [
            "You are running an unsupported database in production. Please ",
            /* @__PURE__ */ o.jsx("a", { href: "https://ghost.org/docs/faq/supported-databases/", rel: "noopener noreferrer", target: "_blank", children: "upgrade to MySQL 8" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(Cs, {}),
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ o.jsxs("a", { className: "flex items-center gap-2 hover:text-grey-900 dark:hover:text-grey-400", href: "https://ghost.org/docs/", rel: "noopener noreferrer", target: "_blank", children: [
            /* @__PURE__ */ o.jsx(Qt, { name: "book-open", size: "sm" }),
            " User documentation"
          ] }),
          /* @__PURE__ */ o.jsxs("a", { className: "flex items-center gap-2 hover:text-grey-900 dark:hover:text-grey-400", href: "https://forum.ghost.org/", rel: "noopener noreferrer", target: "_blank", children: [
            /* @__PURE__ */ o.jsx(Qt, { name: "question-circle", size: "sm" }),
            " Get help with Ghost"
          ] }),
          /* @__PURE__ */ o.jsxs("a", { className: "flex items-center gap-2 hover:text-grey-900 dark:hover:text-grey-400", href: "https://ghost.org/docs/contributing/", rel: "noopener noreferrer", target: "_blank", children: [
            /* @__PURE__ */ o.jsx(Qt, { name: "angle-brackets", size: "sm" }),
            " Get involved"
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(Cs, {}),
        /* @__PURE__ */ o.jsxs("p", { className: "max-w-[460px] text-xs", children: [
          "Copyright © 2013 – ",
          s(),
          " Ghost Foundation, released under the ",
          /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://github.com/TryGhost/Ghost/blob/main/LICENSE", rel: "noopener noreferrer", target: "_blank", children: "MIT license" }),
          ". ",
          /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://ghost.org/", rel: "noopener noreferrer", target: "_blank", children: "Ghost" }),
          " is a registered trademark of ",
          /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://ghost.org/trademark/", rel: "noopener noreferrer", target: "_blank", children: "Ghost Foundation Ltd" }),
          "."
        ] })
      ] })
    }
  );
}), fy = "MembersResponseType", Vu = tA({
  dataType: fy,
  path: "/members/"
}), dy = import("./index-683c80f8.mjs").then((e) => e.i);
class Xp extends Error {
  constructor({ errorType: t, errorDetails: a, message: s }) {
    super(s);
    lu(this, "errorType");
    lu(this, "errorDetails");
    this.errorType = t, this.errorDetails = a;
  }
}
class hy extends Xp {
  constructor(n) {
    super(Object.assign({ errorType: "IncorrectUsageError" }, n));
  }
}
class Ua extends Xp {
  constructor(n) {
    super(Object.assign({ errorType: "HostLimitError" }, n));
  }
}
const Bs = () => {
  var h, m;
  const { config: e } = ct(), [n, t] = ue(null);
  Te(() => {
    dy.then((v) => t(() => v.default));
  }, []);
  const { users: a, contributorUsers: s, invites: l, isLoading: A } = zu(), { refetch: f } = Vu({
    searchParams: { limit: "1" },
    enabled: !1
  }), { refetch: u } = mp({
    searchParams: { filter: "status:active", limit: "1" },
    enabled: !1
  }), d = On(() => {
    var v, k, b, y;
    return ((k = (v = e.hostSettings) == null ? void 0 : v.billing) == null ? void 0 : k.enabled) === !0 && ((y = (b = e.hostSettings) == null ? void 0 : b.billing) != null && y.url) ? e.hostSettings.billing.url : "https://ghost.org/help/";
  }, [(h = e.hostSettings) == null ? void 0 : h.billing]);
  return On(() => {
    var b;
    if (!n || !((b = e.hostSettings) != null && b.limits) || A)
      return;
    const v = { ...e.hostSettings.limits }, k = new n();
    return v.staff && (v.staff.currentCountQuery = async () => {
      const y = a.filter((T) => T.status !== "inactive" && !s.includes(T)), S = l.filter((T) => T.role !== "Contributor");
      return y.length + S.length;
    }), v.members && (v.members.currentCountQuery = async () => {
      var S, T;
      const { data: y } = await f();
      return ((T = (S = y == null ? void 0 : y.meta) == null ? void 0 : S.pagination) == null ? void 0 : T.total) || 0;
    }), v.newsletters && (v.newsletters.currentCountQuery = async () => {
      var S;
      const { data: { pages: y } = { pages: [] } } = await u();
      return ((S = y[0].meta) == null ? void 0 : S.pagination.total) || 0;
    }), k.loadLimits({
      limits: v,
      helpLink: d,
      errors: {
        HostLimitError: Ua,
        IncorrectUsageError: hy
      }
    }), {
      isLimited: (y) => k.isLimited(y),
      checkWouldGoOverLimit: (y) => k.checkWouldGoOverLimit(y),
      errorIfWouldGoOverLimit: (y, S = {}) => k.errorIfWouldGoOverLimit(y, S),
      errorIfIsOverLimit: (y) => k.errorIfIsOverLimit(y)
    };
  }, [n, (m = e.hostSettings) == null ? void 0 : m.limits, s, f, u, d, l, A, a]);
}, py = () => {
  const e = Sn(), { updateRoute: n } = nt(), [t, a] = ue(""), [s, l] = ue({ name: "" }), { mutateAsync: A } = mk(), f = Bs(), u = dt();
  return Te(() => {
    f != null && f.isLimited("customIntegrations") && f.errorIfWouldGoOverLimit("customIntegrations").catch((d) => {
      d instanceof Ua && (xe.show(_i, {
        prompt: d.message || "Your current plan doesn't support more custom integrations.",
        onOk: () => n({ route: "/pro", isExternal: !0 })
      }), e.remove(), n("integrations"));
    });
  }, [f, e, n]), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        n("integrations");
      },
      okColor: "black",
      okLabel: "Add",
      size: "sm",
      testId: "add-integration-modal",
      title: "Add integration",
      onOk: async () => {
        if (!t) {
          l({ name: "Name is required" });
          return;
        }
        try {
          const d = await A({ name: t });
          e.remove(), n({ route: `integrations/${d.integrations[0].id}` });
        } catch (d) {
          u(d);
        }
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "mt-5", children: /* @__PURE__ */ o.jsx(
        yt,
        {
          marginBottom: !1,
          marginTop: !1,
          children: /* @__PURE__ */ o.jsx(
            Re,
            {
              autoFocus: !0,
              error: !!s.name,
              hint: s.name,
              placeholder: "Custom integration",
              title: "Name",
              value: t,
              onChange: (d) => a(d.target.value),
              onInput: () => {
                s.name && l({ name: "" });
              }
            }
          )
        }
      ) })
    }
  );
}, my = xe.create(py), gy = () => {
  var k, b;
  const e = Sn(), { updateRoute: n } = nt(), t = dt(), { data: a } = Vu({
    searchParams: { filter: "newsletters.status:active+email_disabled:0", limit: "1", page: "1", include: "newsletters,labels" }
  }), { mutateAsync: s } = gk(), { formState: l, updateForm: A, saveState: f, handleSave: u, errors: d, clearError: h } = qn({
    initialState: {
      name: "",
      description: "",
      optInExistingSubscribers: !0
    },
    onSave: async () => {
      const y = await s({
        name: l.name,
        description: l.description,
        opt_in_existing: l.optInExistingSubscribers,
        feedback_enabled: !0
      });
      n({ route: `newsletters/${y.newsletters[0].id}` });
    },
    onSaveError: t,
    onValidate: () => {
      const y = {};
      return l.name || (y.name = "Name is required"), y;
    }
  }), m = Bs();
  Te(() => {
    m == null || m.errorIfWouldGoOverLimit("newsletters").catch((y) => {
      if (y instanceof Ua)
        xe.show(_i, {
          prompt: y.message || "Your current plan doesn't support more newsletters.",
          onOk: () => n({ route: "/pro", isExternal: !0 })
        }), e.remove(), n("newsletters");
      else
        throw y;
    });
  }, [m, e, n]);
  const v = (k = a == null ? void 0 : a.meta) == null ? void 0 : k.pagination.total;
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        n("newsletters");
      },
      backDropClick: !1,
      okColor: "black",
      okLabel: "Create",
      okLoading: f === "saving",
      size: "sm",
      testId: "add-newsletter-modal",
      title: "Create newsletter",
      onOk: async () => {
        Xi.remove(), await u() ? e.remove() : tt({
          type: "pageError",
          message: "Can't save newsletter, please double check that you've filled all mandatory fields."
        });
      },
      children: /* @__PURE__ */ o.jsxs(
        yt,
        {
          marginBottom: !1,
          marginTop: !0,
          children: [
            /* @__PURE__ */ o.jsx(
              Re,
              {
                autoFocus: !0,
                error: !!d.name,
                hint: d.name,
                placeholder: "Weekly roundup",
                title: "Name",
                value: l.name,
                onChange: (y) => A((S) => ({ ...S, name: y.target.value })),
                onKeyDown: () => h("name")
              }
            ),
            /* @__PURE__ */ o.jsx(
              Na,
              {
                title: "Description",
                value: l.description,
                onChange: (y) => A((S) => ({ ...S, description: y.target.value }))
              }
            ),
            /* @__PURE__ */ o.jsx(
              mt,
              {
                checked: l.optInExistingSubscribers,
                direction: "rtl",
                hint: l.optInExistingSubscribers ? `This newsletter will be available to all members. Your ${v === void 0 ? "" : gp(v)} existing subscriber${((b = a == null ? void 0 : a.meta) == null ? void 0 : b.pagination.total) === 1 ? "" : "s"} will also be opted-in to receive it.` : "The newsletter will be available to all new members. Existing members won’t be subscribed, but may visit their account area to opt-in to future emails.",
                label: "Opt-in existing subscribers",
                labelStyle: "heading",
                onChange: (y) => A((S) => ({ ...S, optInExistingSubscribers: y.target.checked }))
              }
            )
          ]
        }
      )
    }
  );
}, vy = xe.create(gy);
function wy(e, n = {}) {
  window.plausible = window.plausible || function() {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  }, window.plausible(e, { props: n }), window.posthog && window.posthog.capture(e, n);
}
const xy = ({ recommendation: e, animate: n }) => {
  const t = Sn(), { updateRoute: a, route: s } = nt(), { mutateAsync: l } = vk(), A = dt(), { formState: f, updateForm: u, handleSave: d, saveState: h, errors: m, clearError: v, setErrors: k } = qn({
    initialState: {
      ...e
    },
    onSave: async (T) => {
      await l(T), t.remove(), tt({
        message: "Successfully added a recommendation",
        type: "success"
      }), wy("Recommendation Added", {
        oneClickSubscribe: T.one_click_subscribe
      }), a("recommendations");
    },
    onSaveError: A,
    onValidate: (T) => {
      const Q = wk(T);
      return Object.keys(Q).length !== 0 && tt({
        type: "pageError",
        message: "Can't add recommendation, please double check that you've filled all mandatory fields correctly."
      }), Q;
    }
  });
  let b = "Add", y = !1;
  h === "saving" ? y = !0 : h === "saved" && (b = "Added");
  let S = {
    label: "Back",
    icon: "arrow-left",
    iconColorClass: "text-black dark:text-white",
    link: !0,
    size: "sm",
    onClick: () => {
      h !== "saving" && (t.remove(), xe.show(Wp, {
        pathName: s,
        animate: !1,
        recommendation: {
          ...f
        }
      }));
    }
  };
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        a("recommendations");
      },
      animate: n ?? !0,
      backDropClick: !1,
      cancelLabel: "Cancel",
      dirty: !0,
      leftButtonProps: S,
      okColor: "black",
      okLabel: b,
      okLoading: y,
      size: "sm",
      testId: "add-recommendation-modal",
      title: "Add recommendation",
      stickyFooter: !0,
      onCancel: () => {
        h !== "saving" && (t.remove(), a("recommendations"));
      },
      onOk: async () => {
        if (h !== "saving") {
          vp();
          try {
            await d({ force: !0 });
          } catch {
            tt({
              type: "pageError",
              message: "Something went wrong when adding this recommendation, please try again."
            });
          }
        }
      },
      children: /* @__PURE__ */ o.jsx(xk, { clearError: v, errors: m, formState: f, setErrors: k, showURL: !1, updateForm: u })
    }
  );
}, ky = xe.create(xy), Oh = (e) => wp(e).save || "", by = function(e, n) {
  try {
    new URL(n).hostname.includes(".") ? delete e.url : e.url = "Enter a valid URL";
  } catch {
    e.url = "Enter a valid URL";
  }
  return e;
}, yy = ({ searchParams: e, recommendation: n, animate: t }) => {
  const [a, s] = ue(!1), l = Sn(), { updateRoute: A } = nt(), { mutateAsync: f } = kk(), u = n ? "" : (e == null ? void 0 : e.get("url")) ?? "", { save: d } = u ? wp(u) : { save: "" }, h = At.useRef(!1), [m, v] = At.useState(!!d), { formState: k, updateForm: b, handleSave: y, errors: S, saveState: T, clearError: Q } = qn({
    initialState: n ?? {
      title: "",
      url: d || "",
      description: "",
      excerpt: null,
      featured_image: null,
      favicon: null,
      one_click_subscribe: !1
    },
    onSave: async () => {
      let K;
      K = new URL(k.url);
      const $ = K.hostname.replace("www.", ""), Y = {
        ...k,
        url: K.toString()
      }, { recommendations: V = [] } = await f(K);
      if (!V || V.length === 0)
        return;
      const re = V[0];
      if (re.id)
        throw new hh("A recommendation with this URL already exists.");
      Y.title = re.title ?? $, Y.excerpt = re.excerpt ?? Y.excerpt, Y.featured_image = re.featured_image ?? Y.featured_image ?? null, Y.favicon = re.favicon ?? Y.favicon ?? null, Y.one_click_subscribe = re.one_click_subscribe ?? Y.one_click_subscribe ?? !1, Y.description = Y.excerpt || null, l.remove(), xe.show(ky, {
        animate: !1,
        recommendation: Y
      });
    },
    onValidate: () => {
      const K = {};
      return by(K, k.url), m && v(Object.keys(K).length === 0), K;
    }
  }), B = At.useCallback(async () => {
    if (T !== "saving") {
      vp();
      try {
        if (await y({ force: !0 }))
          return;
      } catch (K) {
        const $ = K instanceof hh ? K.message : "Something went wrong while checking this URL, please try again.";
        tt({
          type: "pageError",
          message: $
        });
      }
      m && v(!1);
    }
  }, [y, T, m, v]);
  return At.useEffect(() => {
    m && !h.current && (h.current = !0, B());
  }, [m, B]), Te(() => {
    a && (B(), s(!1));
  }, [k]), m ? /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        A("recommendations");
      },
      animate: t ?? !0,
      backDropClick: !1,
      footer: !1,
      header: !1,
      size: "sm",
      children: /* @__PURE__ */ o.jsx("div", { className: "flex flex-col items-center justify-center p-8", children: /* @__PURE__ */ o.jsx(xp, {}) })
    }
  ) : /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        A("recommendations");
      },
      animate: t ?? !0,
      backDropClick: !1,
      okColor: "black",
      okLabel: "Next",
      okLoading: T === "saving",
      size: "sm",
      testId: "add-recommendation-modal",
      title: "Add recommendation",
      onOk: B,
      children: [
        /* @__PURE__ */ o.jsxs("p", { className: "mt-4", children: [
          "You can recommend ",
          /* @__PURE__ */ o.jsx("strong", { children: "any site" }),
          " your audience will find valuable, not just those published on Ghost."
        ] }),
        /* @__PURE__ */ o.jsx(
          yt,
          {
            marginBottom: !1,
            marginTop: !0,
            children: /* @__PURE__ */ o.jsx(
              Re,
              {
                autoFocus: !0,
                error: !!S.url,
                hint: S.url || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  "Need inspiration? ",
                  /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://www.ghost.org/explore", rel: "noopener noreferrer", target: "_blank", children: "Explore thousands of sites" }),
                  " to recommend"
                ] }),
                placeholder: "https://www.example.com",
                title: "URL",
                value: k.url,
                onBlur: () => {
                  const K = Oh(k.url);
                  b(($) => ({ ...$, url: K }));
                },
                onChange: (K) => {
                  Q == null || Q("url"), b(($) => ({ ...$, url: K.target.value }));
                },
                onKeyDown: (K) => {
                  K.key === "Enter" && (K.preventDefault(), b(($) => ({ ...$, url: Oh(k.url) })), s(!0));
                }
              }
            )
          }
        )
      ]
    }
  );
}, Wp = xe.create(yy), Us = ({
  icon: e,
  title: n,
  detail: t,
  extra: a
}) => /* @__PURE__ */ o.jsxs("div", { className: "-mx-8 -mt-8 flex flex-col gap-4 bg-grey-75 p-8 dark:bg-grey-950 md:flex-row", children: [
  /* @__PURE__ */ o.jsx("div", { className: "h-14 w-14", children: e }),
  /* @__PURE__ */ o.jsxs("div", { className: "mt-1.5 flex min-w-0 flex-1 flex-col", children: [
    /* @__PURE__ */ o.jsx("h3", { children: n }),
    /* @__PURE__ */ o.jsx("div", { children: t }),
    a && /* @__PURE__ */ o.jsx("div", { className: "mt-4", children: a })
  ] })
] }), Ey = xe.create(() => {
  const { updateRoute: e } = nt(), { settings: n } = ct(), [t] = Et(n, ["amp"]), [a] = Et(n, ["amp_gtag_id"]), s = xe.useModal(), [l, A] = ue(!1), [f, u] = ue(""), { mutateAsync: d } = ua(), h = dt();
  Te(() => {
    A(t || !1), u(a || null);
  }, [t, a]);
  const m = async () => {
    const v = [
      { key: "amp", value: l },
      { key: "amp_gtag_id", value: f }
    ];
    try {
      await d(v);
    } catch (k) {
      h(k);
    }
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      dirty: l !== t || f !== a,
      okColor: "black",
      okLabel: "Save & close",
      testId: "amp-modal",
      title: "",
      onOk: async () => {
        await m(), s.remove(), e("integrations");
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Accelerated Mobile Pages",
            icon: /* @__PURE__ */ o.jsx(bk, { className: "h-14 w-14" }),
            title: "AMP"
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(yt, { marginBottom: !1, title: "AMP configuration", grouped: !0, children: [
          /* @__PURE__ */ o.jsx(
            mt,
            {
              checked: l,
              direction: "rtl",
              hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                "Google AMP is ",
                /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://en.m.wikipedia.org/wiki/Accelerated_Mobile_Pages", rel: "noopener noreferrer", target: "_blank", children: "being retired" }),
                " — this feature will be removed in Ghost 6.0"
              ] }),
              label: "Enable AMP",
              onChange: (v) => {
                A(v.target.checked);
              }
            }
          ),
          l && /* @__PURE__ */ o.jsx(
            Re,
            {
              hint: "Tracks AMP traffic in Google Analytics",
              placeholder: "UA-XXXXXXX-X",
              title: "Google Analytics Tracking ID",
              value: f || "",
              onChange: (v) => {
                u(v.target.value);
              }
            }
          )
        ] }) })
      ]
    }
  );
});
function My(e, n) {
  let t;
  return function(...s) {
    const l = () => {
      clearTimeout(t), e(...s);
    };
    clearTimeout(t), t = setTimeout(l, n);
  };
}
const _u = ({ generateContent: e, className: n, height: t, width: a, parentClassName: s, testId: l, addDelay: A = !1 }) => {
  const [f, u] = ue(0), d = [Ct(null), Ct(null)], [h, m] = ue(0);
  return Te(() => {
    const v = f === 0 ? 1 : 0, k = d[v].current;
    if (k) {
      e(k);
      const b = () => {
        A ? setTimeout(() => {
          u(v);
        }, 500) : u(v);
      };
      return k.addEventListener("load", b), () => {
        k.removeEventListener("load", b);
      };
    }
  }, [e]), Te(() => {
    var b;
    const v = d[f].current, k = My(() => {
      var y;
      m(((y = v == null ? void 0 : v.contentWindow) == null ? void 0 : y.scrollY) || 0);
    }, 250);
    return (b = v == null ? void 0 : v.contentWindow) == null || b.addEventListener("scroll", k), () => {
      var y;
      (y = v == null ? void 0 : v.contentWindow) == null || y.removeEventListener("scroll", k);
    };
  }, [f, d]), Te(() => {
    var k;
    const v = d[f].current;
    if (v)
      try {
        (k = v.contentWindow) == null || k.scrollTo(0, h);
      } catch (b) {
        dp(b);
      }
  }, [h, f, d]), /* @__PURE__ */ o.jsxs("div", { className: s, "data-testid": l, children: [
    /* @__PURE__ */ o.jsx(
      "iframe",
      {
        ref: d[0],
        className: `${n} ${f !== 0 ? "z-10 opacity-0" : "z-20 opacity-100"}`,
        "data-visible": f === 0,
        frameBorder: "0",
        height: t,
        title: "Buffered Preview 1",
        width: a
      }
    ),
    /* @__PURE__ */ o.jsx(
      "iframe",
      {
        ref: d[1],
        className: `${n} ${f !== 1 ? "z-10 opacity-0" : "z-20 opacity-100"}`,
        "data-visible": f === 1,
        frameBorder: "0",
        height: t,
        title: "Buffered Preview 2",
        width: a
      }
    )
  ] });
}, Sy = (e, n, t) => {
  const a = new URLSearchParams();
  return a.append("announcement_bg", e || "accent"), a.append("announcement", n || ""), t && t.length > 0 && a.append("announcement_vis", (t == null ? void 0 : t.join(",")) || ""), a.toString();
}, Iy = ({ announcementBackgroundColor: e, announcementContent: n, url: t, visibility: a }) => {
  const s = On(() => a, [a == null ? void 0 : a.join(",")]), l = sn((A) => {
    t && fetch(t, {
      method: "POST",
      headers: {
        "Content-Type": "text/html;charset=utf-8",
        "x-ghost-preview": Sy(
          e,
          n,
          s
        ),
        Accept: "text/plain"
      },
      mode: "cors",
      credentials: "include"
    }).then((f) => f.text()).then((f) => {
      var y, S, T;
      const u = "html { pointer-events: none; }", h = new DOMParser().parseFromString(f, "text/html"), m = h.querySelector("style"), v = m.innerHTML;
      m.innerHTML = `${v}

${u}`;
      let b = (h.doctype ? new XMLSerializer().serializeToString(h.doctype) : "") + h.documentElement.outerHTML;
      (y = A.contentDocument) == null || y.open(), (S = A.contentDocument) == null || S.write(b), (T = A.contentDocument) == null || T.close();
    }).catch(() => {
    });
  }, [e, n, t, s]);
  return /* @__PURE__ */ o.jsx(
    _u,
    {
      addDelay: !0,
      className: "absolute h-[110%] w-[110%] origin-top-left scale-[.90909] bg-white max-[1600px]:h-[130%] max-[1600px]:w-[130%] max-[1600px]:scale-[.76923]",
      generateContent: l,
      height: "100%",
      parentClassName: "relative h-full w-full",
      testId: "announcement-bar-preview-iframe",
      width: "100%"
    }
  );
}, Jy = ({
  announcementContent: e,
  announcementTextHandler: n,
  accentColor: t,
  announcementBackgroundColor: a,
  toggleColorSwatch: s,
  toggleVisibility: l,
  visibility: A = [],
  paidMembersEnabled: f,
  onBlur: u
}) => {
  const d = [
    {
      label: "Logged out visitors",
      onChange: (h) => {
        l("visitors", h);
      },
      value: "visitors",
      checked: A.includes("visitors")
    },
    {
      label: "Free members",
      onChange: (h) => {
        l("free_members", h);
      },
      value: "free_members",
      checked: A.includes("free_members")
    },
    ...f ? [{
      label: "Paid members",
      onChange: (h) => {
        l("paid_members", h);
      },
      value: "paid_members",
      checked: A.includes("paid_members")
    }] : []
  ];
  return /* @__PURE__ */ o.jsxs(yt, { children: [
    /* @__PURE__ */ o.jsx(
      Xu,
      {
        nodes: "MINIMAL_NODES",
        placeholder: "Highlight breaking news, offers or updates",
        title: "Announcement",
        value: e,
        onBlur: u,
        onChange: n
      }
    ),
    /* @__PURE__ */ o.jsx(
      Gu,
      {
        isExpanded: !1,
        picker: !1,
        swatches: [
          {
            hex: "#08090c",
            title: "Dark",
            value: "dark"
          },
          {
            hex: "#ffffff",
            title: "Light",
            value: "light"
          },
          {
            hex: t || "#ffdd00",
            title: "Accent",
            value: "accent"
          }
        ],
        swatchSize: "lg",
        title: "Background color",
        value: a,
        onSwatchChange: (h) => {
          h !== null && s(h);
        },
        onTogglePicker: () => {
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      Eu,
      {
        checkboxes: d,
        title: "Visibility"
      }
    )
  ] });
}, Ty = () => {
  const { siteData: e } = ct(), { localSettings: n, updateSetting: t, handleSave: a, okProps: s } = Ha({ savingDelay: 500 }), [l] = Et(n, ["announcement_content"]), [A] = Et(n, ["accent_color"]), [f] = Et(n, ["announcement_background"]), [u] = Et(n, ["announcement_visibility"]), [d] = Et(n, ["paid_members_enabled"]), h = JSON.parse((u == null ? void 0 : u.toString()) || "[]"), { updateRoute: m } = nt(), [v, k] = ue("homepage"), b = (V) => {
    t("announcement_background", V);
  }, y = (V, re) => {
    const le = h.indexOf(V);
    le === -1 && re ? h.push(V) : h.splice(le, 1), t("announcement_visibility", JSON.stringify(h));
  }, S = Ct(
    Ki((V) => {
      t("announcement_content", V);
    }, 500)
  ), T = /* @__PURE__ */ o.jsx(
    Jy,
    {
      accentColor: A,
      announcementBackgroundColor: f,
      announcementContent: l,
      announcementTextHandler: (V) => {
        S.current(V);
      },
      paidMembersEnabled: d,
      toggleColorSwatch: b,
      toggleVisibility: y,
      visibility: u,
      onBlur: () => {
      }
    }
  ), { data: { posts: [Q] } = { posts: [] } } = kp({
    searchParams: {
      filter: "status:published",
      order: "published_at DESC",
      limit: "1",
      fields: "id,url"
    }
  });
  let B = [];
  Q && (B = [
    { id: "homepage", title: "Homepage" },
    { id: "post", title: "Post" }
  ]);
  const K = (V) => {
    B.length && k(V);
  };
  let $ = Or(e);
  switch (v) {
    case "homepage":
      $ = Or(e);
      break;
    case "post":
      $ = Q.url;
      break;
  }
  const Y = /* @__PURE__ */ o.jsx(
    Iy,
    {
      announcementBackgroundColor: f,
      announcementContent: l,
      url: $,
      visibility: h
    }
  );
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        m("announcement-bar");
      },
      buttonsDisabled: s.disabled,
      cancelLabel: "Close",
      deviceSelector: !0,
      dirty: !1,
      okColor: s.color,
      okLabel: s.label || "Save",
      preview: Y,
      previewBgColor: "greygradient",
      previewToolbarTabs: B,
      selectedURL: v,
      sidebar: T,
      testId: "announcement-bar-modal",
      title: "Announcement",
      titleHeadingLevel: 5,
      onOk: async () => {
        await a({ fakeWhenUnchanged: !0 }) || tt({
          type: "pageError",
          message: "An error occurred while saving your changes. Please try again."
        });
      },
      onSelectURL: K
    }
  );
}, Cy = xe.create(Ty), Dy = ({ label: e, text: n = "", hint: t, onRegenerate: a }) => {
  const [s, l] = ue(!1), A = () => {
    navigator.clipboard.writeText(n), l(!0), setTimeout(() => l(!1), 2e3);
  }, f = ft(
    "group/api-keys relative -mt-1 mb-1 w-full overflow-hidden border-b border-transparent py-2 hover:border-grey-300 dark:hover:border-grey-600"
  );
  return /* @__PURE__ */ o.jsxs("div", { className: "mb-3 grid grid-cols-1", children: [
    e && /* @__PURE__ */ o.jsx(st, { level: 6, grey: !0, children: e }),
    /* @__PURE__ */ o.jsxs("div", { className: f, children: [
      /* @__PURE__ */ o.jsx("span", { children: n }),
      t,
      /* @__PURE__ */ o.jsxs("div", { className: "visible absolute right-0 top-1/2 flex translate-y-[-50%] gap-1 bg-white pl-1 text-sm group-hover/api-keys:visible dark:bg-black md:invisible", children: [
        a && /* @__PURE__ */ o.jsx(Ye, { color: "outline", label: "Regenerate", size: "sm", onClick: a }),
        /* @__PURE__ */ o.jsx(Ye, { color: "outline", label: s ? "Copied" : "Copy", size: "sm", onClick: A })
      ] })
    ] })
  ] });
}, $u = ({ keys: e }) => /* @__PURE__ */ o.jsx("div", { "data-testid": "api-keys", children: e.map((n) => /* @__PURE__ */ o.jsx(Dy, { ...n }, n.label)) }), Tu = [
  {
    label: "Global",
    options: [{ value: "site.changed", label: "Site changed (rebuild)" }]
  },
  {
    label: "Posts",
    options: [
      { value: "post.added", label: "Post created" },
      { value: "post.deleted", label: "Post deleted" },
      { value: "post.edited", label: "Post updated" },
      { value: "post.published", label: "Post published" },
      { value: "post.published.edited", label: "Published post updated" },
      { value: "post.unpublished", label: "Post unpublished" },
      { value: "post.scheduled", label: "Post scheduled" },
      { value: "post.unscheduled", label: "Post unscheduled" },
      { value: "post.tag.attached", label: "Tag added to post" },
      { value: "post.tag.detached", label: "Tag removed from post" }
    ]
  },
  {
    label: "Pages",
    options: [
      { value: "page.added", label: "Page created" },
      { value: "page.deleted", label: "Page deleted" },
      { value: "page.edited", label: "Page updated" },
      { value: "page.published", label: "Page published" },
      { value: "page.published.edited", label: "Published page updated" },
      { value: "page.unpublished", label: "Page unpublished" },
      { value: "page.tag.attached", label: "Tag added to page" },
      { value: "page.tag.detached", label: "Tag removed from page" }
    ]
  },
  {
    label: "Tags",
    options: [
      { value: "tag.added", label: "Tag created" },
      { value: "tag.edited", label: "Tag updated" },
      { value: "tag.deleted", label: "Tag deleted" }
    ]
  },
  {
    label: "Members",
    options: [
      { value: "member.added", label: "Member added" },
      { value: "member.edited", label: "Member updated" },
      { value: "member.deleted", label: "Member deleted" }
    ]
  }
], Ry = (e) => {
  const n = Tu.flatMap(({ options: t }) => t).find((t) => t.value === e);
  return n == null ? void 0 : n.label;
}, jy = Vn({
  method: "POST",
  path: () => "/webhooks/",
  body: (e) => ({ webhooks: [e] }),
  updateQueries: {
    dataType: nA,
    emberUpdateType: "createOrUpdate",
    update: (e, n) => n && {
      ...n,
      integrations: n.integrations.map((t) => {
        const a = e.webhooks[0];
        return a.integration_id === t.id ? { ...t, webhooks: [...t.webhooks || [], a] } : t;
      })
    }
  }
}), Oy = Vn({
  method: "PUT",
  path: (e) => `/webhooks/${e.id}/`,
  body: (e) => ({ webhooks: [e] }),
  updateQueries: {
    dataType: nA,
    emberUpdateType: "createOrUpdate",
    update: (e, n) => n && {
      ...n,
      integrations: n.integrations.map((t) => {
        var a;
        return {
          ...t,
          webhooks: (a = t.webhooks) == null ? void 0 : a.map((s) => s.id === e.webhooks[0].id ? e.webhooks[0] : s)
        };
      })
    }
  }
}), Qy = Vn({
  method: "DELETE",
  path: (e) => `/webhooks/${e}/`,
  updateQueries: {
    dataType: nA,
    emberUpdateType: "createOrUpdate",
    update: (e, n, t) => ({
      ...n,
      integrations: n.integrations.map((a) => {
        var s;
        return {
          ...a,
          webhooks: (s = a.webhooks) == null ? void 0 : s.filter((l) => l.id !== t)
        };
      })
    })
  }
}), Ny = ({ webhook: e, integrationId: n }) => {
  const t = Sn(), { mutateAsync: a } = jy(), { mutateAsync: s } = Oy(), l = dt(), { formState: A, updateForm: f, handleSave: u, errors: d, clearError: h } = qn({
    initialState: e || {},
    onSave: async () => {
      A.id ? await s(A) : await a({ ...A, integration_id: n });
    },
    onSaveError: l,
    onValidate: () => {
      const m = {};
      return A.name || (m.name = "Enter a name"), A.event || (m.event = "Select an event"), A.target_url || (m.target_url = "Enter a target URL"), A.target_url && !Qr.isURL(A.target_url) && (m.target_url = "Enter a valid URL"), m;
    }
  });
  return /* @__PURE__ */ o.jsx(
    It,
    {
      okColor: "black",
      okLabel: e ? "Update" : "Add",
      size: "sm",
      testId: "webhook-modal",
      title: "Add webhook",
      formSheet: !0,
      onOk: async () => {
        xu.remove(), await u() ? t.remove() : tt({
          type: "pageError",
          message: "Can't save webhook, please double check that you've filled all mandatory fields."
        });
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "mt-5", children: /* @__PURE__ */ o.jsxs(
        yt,
        {
          marginBottom: !1,
          marginTop: !1,
          children: [
            /* @__PURE__ */ o.jsx(
              Re,
              {
                error: !!d.name,
                hint: d.name,
                placeholder: "Custom webhook",
                title: "Name",
                value: A.name,
                onChange: (m) => f((v) => ({ ...v, name: m.target.value })),
                onKeyDown: () => h("name")
              }
            ),
            /* @__PURE__ */ o.jsx(
              En,
              {
                error: !!d.event,
                hint: d.event,
                options: Tu,
                prompt: "Select an event",
                selectedOption: Tu.flatMap((m) => m.options).find((m) => m.value === A.event),
                testId: "event-select",
                title: "Event",
                hideTitle: !0,
                onSelect: (m) => {
                  f((v) => ({ ...v, event: m == null ? void 0 : m.value })), h("event");
                }
              }
            ),
            /* @__PURE__ */ o.jsx(
              Re,
              {
                error: !!d.target_url,
                hint: d.target_url,
                placeholder: "https://example.com",
                title: "Target URL",
                type: "url",
                value: A.target_url,
                onChange: (m) => f((v) => ({ ...v, target_url: m.target.value })),
                onKeyDown: () => h("target_url")
              }
            ),
            /* @__PURE__ */ o.jsx(
              Re,
              {
                placeholder: "https://example.com",
                title: "Secret",
                value: A.secret || void 0,
                onChange: (m) => f((v) => ({ ...v, secret: m.target.value }))
              }
            )
          ]
        }
      ) })
    }
  );
}, Qh = xe.create(Ny), Hy = ({ integration: e }) => {
  var s, l, A;
  const { mutateAsync: n } = Qy(), t = dt(), a = (f) => {
    xe.show(Kt, {
      title: "Are you sure?",
      prompt: "Deleting this webhook may prevent the integration from functioning.",
      okColor: "red",
      okLabel: "Delete Webhook",
      onOk: async (u) => {
        try {
          await n(f), u == null || u.remove(), tt({
            message: "Webhook deleted",
            type: "success"
          });
        } catch (d) {
          t(d);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsxs(yk, { children: [
      /* @__PURE__ */ o.jsxs(ph, { bgOnHover: !1, children: [
        /* @__PURE__ */ o.jsxs(Au, { children: [
          ((s = e.webhooks) == null ? void 0 : s.length) || 0,
          " ",
          ((l = e.webhooks) == null ? void 0 : l.length) === 1 ? "webhook" : "webhooks"
        ] }),
        /* @__PURE__ */ o.jsx(Au, { children: "Last triggered" }),
        /* @__PURE__ */ o.jsx(Au, {})
      ] }),
      (A = e.webhooks) == null ? void 0 : A.map((f) => /* @__PURE__ */ o.jsxs(
        ph,
        {
          action: /* @__PURE__ */ o.jsx(Ye, { color: "red", label: "Delete", link: !0, onClick: (u) => {
            u == null || u.stopPropagation(), a(f.id);
          } }),
          hideActions: !0,
          onClick: () => {
            xe.show(Qh, {
              webhook: f,
              integrationId: e.id
            });
          },
          children: [
            /* @__PURE__ */ o.jsxs(mh, { className: "w-1/2", children: [
              /* @__PURE__ */ o.jsx("div", { className: "text-sm font-semibold", children: f.name }),
              /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-[max-content_1fr] gap-x-1 text-xs leading-snug", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-grey-600", children: "Event:" }),
                /* @__PURE__ */ o.jsx("span", { children: Ry(f.event) }),
                /* @__PURE__ */ o.jsx("span", { className: "text-grey-600", children: "URL:" }),
                /* @__PURE__ */ o.jsx("span", { children: f.target_url })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(mh, { className: "w-1/2 text-sm", children: f.last_triggered_at && new Date(f.last_triggered_at).toLocaleString("default", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit"
            }) })
          ]
        }
      ))
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "mt-5", children: /* @__PURE__ */ o.jsx(
      Ye,
      {
        color: "green",
        icon: "add",
        iconColorClass: "text-green",
        label: "Add webhook",
        size: "sm",
        link: !0,
        onClick: () => {
          xe.show(Qh, {
            integrationId: e.id
          });
        }
      }
    ) })
  ] });
}, qp = Vn({
  method: "POST",
  path: ({ integrationId: e, apiKeyId: n }) => `/integrations/${e}/api_key/${n}/refresh/`,
  body: ({ integrationId: e }) => ({ integrations: [{ id: e }] }),
  updateQueries: {
    emberUpdateType: "createOrUpdate",
    dataType: nA,
    update: (e, n) => n && {
      ...n,
      integrations: n.integrations.map((t) => e.integrations.find(({ id: s }) => s === t.id) || t)
    }
  }
}), By = ({ integration: e }) => {
  var $, Y;
  const n = Sn(), { updateRoute: t } = nt(), { mutateAsync: a } = Ek(), { mutateAsync: s } = qp(), { mutateAsync: l } = Qs(), A = dt(), { formState: f, updateForm: u, handleSave: d, saveState: h, errors: m, clearError: v, okProps: k } = qn({
    initialState: e,
    savingDelay: 500,
    savedDelay: 500,
    onSave: async () => {
      await a(f);
    },
    onSavedStateReset: () => {
      n.remove(), t("integrations");
    },
    onSaveError: A,
    onValidate: () => {
      const V = {};
      return f.name || (V.name = "Name is required."), V;
    }
  }), b = ($ = e.api_keys) == null ? void 0 : $.find((V) => V.type === "admin"), y = (Y = e.api_keys) == null ? void 0 : Y.find((V) => V.type === "content"), [S, T] = ue(!1), [Q, B] = ue(!1);
  Te(() => {
    e.type !== "custom" && (n.remove(), t("integrations"));
  }, [e.type, n, t]);
  const K = (V, re) => {
    re(!1);
    const le = V.type === "content" ? "Content" : "Admin";
    xe.show(Kt, {
      title: `Regenerate ${le} API Key`,
      prompt: `You can regenerate ${le} API Key any time, but any scripts or applications using it will need to be updated.`,
      okLabel: `Regenerate ${le} API Key`,
      onOk: async (ne) => {
        try {
          await s({ integrationId: e.id, apiKeyId: V.id }), re(!0), ne == null || ne.remove();
        } catch (ae) {
          A(ae);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        t("integrations");
      },
      buttonsDisabled: k.disabled,
      dirty: h === "unsaved",
      okColor: k.color,
      okLabel: k.label || "Save & close",
      size: "md",
      testId: "custom-integration-modal",
      title: f.name,
      stickyFooter: !0,
      onOk: async () => {
        Xi.remove(), await d({ fakeWhenUnchanged: !0 }) || tt({
          type: "pageError",
          message: "Can't save integration, please double check that you've filled all mandatory fields."
        });
      },
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "mt-7 flex w-full flex-col gap-7 md:flex-row", children: [
          /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(
            Nr,
            {
              height: "100px",
              id: "custom-integration-icon",
              imageURL: f.icon_image || void 0,
              width: "100px",
              onDelete: () => u((V) => ({ ...V, icon_image: null })),
              onUpload: async (V) => {
                try {
                  const re = jr(await l({ file: V }));
                  u((le) => ({ ...le, icon_image: re }));
                } catch (re) {
                  A(re);
                }
              },
              children: "Upload icon"
            }
          ) }),
          /* @__PURE__ */ o.jsx("div", { className: "flex grow flex-col", children: /* @__PURE__ */ o.jsxs(yt, { children: [
            /* @__PURE__ */ o.jsx(
              Re,
              {
                error: !!m.name,
                hint: m.name,
                title: "Title",
                value: f.name,
                onChange: (V) => u((re) => ({ ...re, name: V.target.value })),
                onKeyDown: () => v("name")
              }
            ),
            /* @__PURE__ */ o.jsx(Re, { title: "Description", value: f.description || "", onChange: (V) => u((re) => ({ ...re, description: V.target.value })) }),
            /* @__PURE__ */ o.jsx($u, { keys: [
              {
                label: "Content API key",
                text: y == null ? void 0 : y.secret,
                hint: Q ? /* @__PURE__ */ o.jsx("div", { className: "text-green", children: "Content API Key was successfully regenerated" }) : void 0,
                onRegenerate: () => y && K(y, B)
              },
              {
                label: "Admin API key",
                text: b == null ? void 0 : b.secret,
                hint: S ? /* @__PURE__ */ o.jsx("div", { className: "text-green", children: "Admin API Key was successfully regenerated" }) : void 0,
                onRegenerate: () => b && K(b, T)
              },
              {
                label: "API URL",
                text: window.location.origin + Ds().subdir
              }
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(Hy, { integration: e }) })
      ]
    }
  );
}, Uy = ({ params: e }) => {
  const { data: { integrations: n } = {} } = bp(), t = n == null ? void 0 : n.find(({ id: a }) => a === (e == null ? void 0 : e.id));
  return t ? /* @__PURE__ */ o.jsx(By, { integration: t }) : null;
}, Ly = xe.create(Uy), Py = null, ef = "CustomThemeSettingsResponseType", zy = ef, Yy = tA({
  dataType: ef,
  path: "/custom_theme_settings/"
}), Fy = Vn({
  method: "PUT",
  path: () => "/custom_theme_settings/",
  body: (e) => ({ custom_theme_settings: e }),
  updateQueries: {
    emberUpdateType: "skip",
    dataType: ef,
    update: (e) => e
  }
}), $i = "ThemesResponseType", Vp = tA({
  dataType: $i,
  path: "/themes/"
}), tf = Vn({
  method: "PUT",
  path: (e) => `/themes/${e}/activate/`,
  updateQueries: {
    dataType: $i,
    emberUpdateType: "createOrUpdate",
    update: (e, n) => ({
      ...n,
      themes: n.themes.map((t) => {
        const a = e.themes.find(({ name: s }) => s === t.name);
        return a || { ...t, active: !1 };
      })
    })
  },
  invalidateQueries: {
    dataType: zy
  }
}), Zy = Vn({
  method: "DELETE",
  path: (e) => `/themes/${e}/`,
  updateQueries: {
    dataType: $i,
    emberUpdateType: "delete",
    update: (e, n, t) => ({
      ...n,
      themes: n.themes.filter((a) => a.name !== t)
    })
  }
}), Gy = Vn({
  method: "POST",
  path: () => "/themes/install/",
  searchParams: (e) => ({ source: "github", ref: e }),
  updateQueries: {
    dataType: $i,
    emberUpdateType: "createOrUpdate",
    // Assume that all invite queries should include this new one
    update: (e, n) => n && {
      ...n,
      themes: [
        ...n.themes,
        ...e.themes
      ]
    }
  }
}), Ky = Vn({
  method: "POST",
  path: () => "/themes/upload/",
  body: ({ file: e }) => {
    const n = new FormData();
    return n.append("file", e), n;
  },
  updateQueries: {
    dataType: $i,
    emberUpdateType: "createOrUpdate",
    // Assume that all invite queries should include this new one
    update: (e, n) => n && {
      ...n,
      themes: [
        ...n.themes,
        ...e.themes
      ]
    }
  }
});
function nf(e) {
  return e.active;
}
function rf(e) {
  return e.name.toLowerCase() === "source";
}
function af(e) {
  return e.name.toLowerCase() === "casper";
}
function Cu(e) {
  return rf(e) || af(e);
}
function Xy(e) {
  return !rf(e) && !af(e) && !nf(e);
}
function Wy(e) {
  var t, a;
  let n = ((t = e.package) == null ? void 0 : t.name) || e.name;
  return rf(e) ? n += " (default)" : af(e) ? n += " (legacy)" : ((a = e.package) == null ? void 0 : a.name) !== e.name && (n = /* @__PURE__ */ o.jsxs("span", { className: "text-sm md:text-base", children: [
    n,
    " ",
    /* @__PURE__ */ o.jsxs("span", { className: "text-grey-600", children: [
      "(",
      e.name,
      ")"
    ] })
  ] })), nf(e) && (n = /* @__PURE__ */ o.jsxs("span", { className: "text-sm font-bold md:text-base", children: [
    n,
    " — ",
    /* @__PURE__ */ o.jsx("span", { className: "text-green", children: " Active" })
  ] })), n;
}
function qy(e) {
  var n;
  return ((n = e.package) == null ? void 0 : n.version) || "1.0";
}
const Vy = ({
  theme: e
}) => {
  const { mutateAsync: n } = tf(), { mutateAsync: t } = Zy(), a = dt(), s = async () => {
    try {
      await n(e.name), tt({
        type: "success",
        message: /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("span", { className: "capitalize", children: e.name }),
          " is now your active theme."
        ] })
      });
    } catch (h) {
      a(h);
    }
  }, l = async () => {
    const { apiRoot: h } = Ds();
    Mk(`${h}/themes/${e.name}/download`);
  }, A = async () => {
    xe.show(Kt, {
      title: "Are you sure you want to delete this?",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "You are about to delete ",
        /* @__PURE__ */ o.jsxs("strong", { children: [
          '"',
          e.name,
          '".'
        ] }),
        " This is permanent! We warned you, k? Maybe download",
        " ",
        /* @__PURE__ */ o.jsx(
          "span",
          {
            className: "cursor-pointer text-green-500",
            onClick: () => {
              l();
            },
            children: "your theme before continuing"
          }
        )
      ] }),
      okLabel: "Delete",
      okRunningLabel: "Deleting",
      okColor: "red",
      onOk: async (h) => {
        try {
          await t(e.name), h == null || h.remove();
        } catch (m) {
          a(m);
        }
      }
    });
  };
  let f = [];
  nf(e) || f.push(
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        className: "ml-2",
        color: "green",
        label: "Activate",
        link: !0,
        onClick: s
      },
      "activate"
    )
  );
  let u = [
    {
      id: "download",
      label: "Download",
      onClick: l
    }
  ];
  Xy(e) && u.push({
    id: "delete",
    label: "Delete",
    onClick: A
  });
  const d = {
    iconColorClass: "text-base",
    size: "sm"
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "-mr-3 flex items-center gap-4", children: [
    f,
    /* @__PURE__ */ o.jsx(Pp, { items: u, position: "left", triggerButtonProps: d })
  ] });
}, _y = ({
  themes: e
}) => (e.sort((n, t) => {
  var a, s;
  return n.active && !t.active ? -1 : !n.active && t.active ? 1 : (a = n.package) != null && a.name && ((s = t.package) != null && s.name) ? n.package.name.localeCompare(t.package.name) : n.name.localeCompare(t.name);
}), /* @__PURE__ */ o.jsx(Hr, { pageTitle: "Installed themes", children: e.map((n) => {
  const t = Wy(n), a = qy(n);
  return /* @__PURE__ */ o.jsx(
    Ba,
    {
      action: /* @__PURE__ */ o.jsx(Vy, { theme: n }),
      detail: a,
      id: `theme-${n.name}`,
      separator: !1,
      testId: "theme-list-item",
      title: t
    },
    n.name
  );
}) })), $y = ({ themes: e }) => /* @__PURE__ */ o.jsx(qu, { children: /* @__PURE__ */ o.jsx(_y, { themes: e }) }), eE = ({ problem: e }) => {
  const [n, t] = ue(!1), a = () => {
    t(!n);
  };
  return /* @__PURE__ */ o.jsx(
    Ba,
    {
      title: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: `${e.level === "error" ? "before:bg-red" : "before:bg-yellow"} relative px-4 text-sm before:absolute before:left-0 before:top-1.5 before:block before:h-2 before:w-2 before:rounded-full before:content-['']`, children: [
          e != null && e.fatal ? /* @__PURE__ */ o.jsx("strong", { children: "Fatal: " }) : /* @__PURE__ */ o.jsx("strong", { children: e.level === "error" ? "Error: " : "Warning: " }),
          /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: e.rule } }),
          /* @__PURE__ */ o.jsx("div", { className: "absolute -right-4 top-1", children: /* @__PURE__ */ o.jsx(Ye, { color: "green", icon: n ? "chevron-down" : "chevron-right", iconColorClass: "text-grey-700", size: "sm", link: !0, onClick: () => a() }) })
        ] }),
        n ? /* @__PURE__ */ o.jsxs("div", { className: "mt-2 px-4 text-[13px] leading-8", children: [
          /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: e.details }, className: "mb-4" }),
          /* @__PURE__ */ o.jsx(st, { level: 6, children: "Affected files:" }),
          /* @__PURE__ */ o.jsx("ul", { className: "mt-1", children: e.failures.map((s) => /* @__PURE__ */ o.jsxs("li", { children: [
            /* @__PURE__ */ o.jsx("code", { children: s.ref }),
            s.message ? `: ${s.message}` : ""
          ] })) })
        ] }) : null
      ] }),
      hideActions: !0,
      separator: !0
    }
  );
}, tE = ({ title: e, prompt: n, fatalErrors: t, onRetry: a }) => {
  let s = null;
  return t && (s = /* @__PURE__ */ o.jsx("div", { className: "mt-10", children: /* @__PURE__ */ o.jsx(Hr, { title: "Errors", children: t == null ? void 0 : t.map((l) => {
    var A, f;
    return (f = (A = l == null ? void 0 : l.details) == null ? void 0 : A.errors) == null ? void 0 : f.map((u) => /* @__PURE__ */ o.jsx(eE, { problem: u }));
  }) }) })), /* @__PURE__ */ o.jsx(
    yp,
    {
      cancelLabel: "Close",
      okColor: "black",
      okLabel: "Retry",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n,
        s
      ] }),
      title: e,
      onOk: a
    }
  );
}, nE = xe.create(tE), rE = "data:image/png;base64,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", aE = 3e3, Nh = (e) => e.variants && e.variants.length > 0, cu = (e) => {
  const n = [{
    category: e.category,
    previewUrl: e.previewUrl,
    image: e.image
  }];
  return e.variants && e.variants.length > 0 && n.push(...e.variants), n;
}, sE = ({
  onSelectTheme: e
}) => {
  const { adminRoot: n } = Ds(), t = Sk(), [a, s] = ue(null), [l, A] = ue(0), f = (u) => {
    s(u), A(
      u !== null && Nh(u) && cu(u).length > 1 ? 1 : 0
    );
  };
  return Te(() => {
    if (a === null)
      return;
    const u = setInterval(() => {
      A((l + 1) % (cu(a).length || 0));
    }, aE);
    return () => clearInterval(u);
  }, [a, l]), /* @__PURE__ */ o.jsxs(qu, { heading: "Themes", children: [
    /* @__PURE__ */ o.jsx("div", { className: "mt-[6vmin] grid grid-cols-1 gap-[6vmin] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4", children: t.map((u) => {
      const d = Nh(u), h = cu(u), m = a === u;
      return /* @__PURE__ */ o.jsxs("button", { className: "flex cursor-pointer flex-col gap-3 text-left", type: "button", onClick: () => {
        e == null || e(u);
      }, children: [
        /* @__PURE__ */ o.jsx("div", { className: "relative w-full bg-grey-100 shadow-md transition-all duration-500 hover:scale-[1.05]", onMouseEnter: () => f(u), onMouseLeave: () => f(null), children: d ? /* @__PURE__ */ o.jsx(o.Fragment, { children: h.map((v, k) => /* @__PURE__ */ o.jsx(
          "img",
          {
            alt: `${u.name} Theme - ${v.category}`,
            className: ft("h-full w-full object-contain opacity-0 transition-opacity duration-500", {
              "opacity-100": k === l && m || !m && k === 0,
              relative: k === l,
              absolute: k !== l,
              "left-0": k !== l,
              "top-0": k !== l
            }),
            src: Bl(v.image, n)
          },
          `theme-variant-${v.category.toLowerCase()}`
        )) }) : /* @__PURE__ */ o.jsx(
          "img",
          {
            alt: `${u.name} Theme`,
            className: "h-full w-full object-contain",
            src: Bl(u.image, n)
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative mt-3", children: [
          /* @__PURE__ */ o.jsx(st, { level: 4, children: u.name }),
          d ? h.map((v, k) => /* @__PURE__ */ o.jsx("span", { className: ft("absolute left-0 translate-y-px text-sm text-grey-700 opacity-0", {
            "opacity-100": k === l && m || !m && k === 0
          }), children: v.category })) : /* @__PURE__ */ o.jsx("span", { className: "text-sm text-grey-700", children: u.category })
        ] })
      ] }, u.name);
    }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "mx-[-8vmin] mb-[-8vmin] mt-[8vmin] bg-black px-[8vmin] py-16 text-center text-lg text-white", style: {
      background: `#15171a url(${rE}) 100% 100% / 35vw no-repeat`
    }, children: [
      "Find and buy third-party, premium themes from independent developers in the ",
      /* @__PURE__ */ o.jsx("a", { className: "inline-block font-semibold text-lime", href: "https://ghost.org/themes/", rel: "noopener noreferrer", target: "_blank", children: "Ghost Marketplace →" })
    ] })
  ] });
}, Hh = ({ problem: e }) => {
  const [n, t] = ue(!1);
  return /* @__PURE__ */ o.jsx(
    Ba,
    {
      title: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: `${e.level === "error" ? "before:bg-red" : "before:bg-yellow"} relative px-4 text-sm before:absolute before:left-0 before:top-1.5 before:block before:h-2 before:w-2 before:rounded-full before:content-['']`, children: [
          /* @__PURE__ */ o.jsx("strong", { children: e.level === "error" ? "Error: " : "Warning: " }),
          /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: e.rule } }),
          /* @__PURE__ */ o.jsx("div", { className: "absolute -right-4 top-1", children: /* @__PURE__ */ o.jsx(Ye, { color: "green", icon: n ? "chevron-down" : "chevron-right", iconColorClass: "text-grey-700", size: "sm", link: !0, onClick: () => t(!n) }) })
        ] }),
        n ? /* @__PURE__ */ o.jsxs("div", { className: "mt-2 px-4 text-[13px] leading-8", children: [
          /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: e.details }, className: "mb-4" }),
          /* @__PURE__ */ o.jsx(st, { level: 6, children: "Affected files:" }),
          /* @__PURE__ */ o.jsx("ul", { className: "mt-1", children: e.failures.map((a) => /* @__PURE__ */ o.jsxs("li", { children: [
            /* @__PURE__ */ o.jsx("code", { children: a.ref }),
            a.message ? `: ${a.message}` : ""
          ] })) })
        ] }) : null
      ] }),
      hideActions: !0,
      separator: !0
    }
  );
}, iE = ({ title: e, prompt: n, installedTheme: t, onActivate: a }) => {
  var d, h, m;
  const { mutateAsync: s } = tf(), l = dt();
  let A = null;
  t && t.gscan_errors && (A = /* @__PURE__ */ o.jsx("div", { className: "mt-6", children: /* @__PURE__ */ o.jsx(Hr, { hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    "Highly recommended to fix, functionality ",
    /* @__PURE__ */ o.jsx("strong", { children: "could" }),
    " be restricted"
  ] }), title: "Errors", children: (d = t.gscan_errors) == null ? void 0 : d.map((v) => /* @__PURE__ */ o.jsx(Hh, { problem: v })) }) }));
  let f = null;
  t && t.warnings && (f = /* @__PURE__ */ o.jsx("div", { className: "mt-10", children: /* @__PURE__ */ o.jsx(Hr, { title: "Warnings", children: (h = t.warnings) == null ? void 0 : h.map((v) => /* @__PURE__ */ o.jsx(Hh, { problem: v })) }) }));
  let u = `Activate${(m = t.gscan_errors) != null && m.length ? " with errors" : ""}`;
  return t.active && (u = "OK"), /* @__PURE__ */ o.jsx(
    yp,
    {
      cancelLabel: "Close",
      okColor: "black",
      okLabel: u,
      okRunningLabel: "Activating...",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        n,
        A,
        f
      ] }),
      title: e,
      onOk: async (v) => {
        if (!t.active)
          try {
            const b = (await s(t.name)).themes[0];
            tt({
              type: "success",
              message: /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("span", { className: "capitalize", children: b.name }),
                " is now your active theme."
              ] })
            });
          } catch (k) {
            l(k);
          }
        a == null || a(), v == null || v.remove();
      }
    }
  );
}, _p = xe.create(iE), Bh = (e) => e.variants && e.variants.length > 0, Uh = (e) => {
  const n = [{
    image: e.image,
    category: e.category,
    previewUrl: e.previewUrl
  }];
  return e.variants && e.variants.length > 0 && n.push(...e.variants), n;
}, Lh = (e) => e.category.toLowerCase(), oE = ({
  selectedTheme: e,
  isInstalling: n,
  installedTheme: t,
  onBack: a,
  onClose: s,
  onInstall: l
}) => {
  var S;
  const [A, f] = ue("desktop"), [u, d] = ue(void 0);
  if (!e)
    return null;
  let h = e.previewUrl;
  const m = Uh(e).map((T) => ({
    label: T.category,
    value: Lh(T)
  }));
  Bh(e) && (u === void 0 && d(m[0]), h = ((S = Uh(e).find((T) => Lh(T) === (u == null ? void 0 : u.value))) == null ? void 0 : S.previewUrl) || h);
  let v = `Install ${e.name}`;
  n ? v = "Installing..." : Cu(e) && !(t != null && t.active) ? v = `Activate ${e.name}` : t && (v = `Update ${e.name}`);
  const k = () => {
    t && !Cu(e) ? xe.show(Kt, {
      title: "Overwrite theme",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "This will overwrite your existing version of ",
        e.name,
        t != null && t.active ? ", which is your active theme" : "",
        ". All custom changes will be lost."
      ] }),
      okLabel: "Overwrite",
      okRunningLabel: "Installing...",
      cancelLabel: "Cancel",
      okColor: "red",
      onOk: async (T) => {
        await (l == null ? void 0 : l()), T == null || T.remove();
      }
    }) : l == null || l();
  }, b = /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ o.jsx(
      sA,
      {
        activeItemClassName: "hidden md:!block md:!visible",
        containerClassName: "whitespace-nowrap",
        itemClassName: "hidden md:!block md:!visible",
        items: [
          { label: "Design", onClick: s },
          { label: "Change theme", onClick: a },
          { label: e.name }
        ],
        separatorClassName: "hidden md:!block md:!visible",
        backIcon: !0,
        onBack: a
      }
    ),
    Bh(e) ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("span", { className: "hidden md:!visible md:!block", children: "–" }),
      /* @__PURE__ */ o.jsx(
        En,
        {
          border: !1,
          containerClassName: "text-sm font-bold",
          controlClasses: { menu: "w-24" },
          fullWidth: !1,
          options: m,
          selectedOption: u,
          clearBg: !0,
          onSelect: (T) => {
            d(T || void 0);
          }
        }
      )
    ] }) : null
  ] }), y = /* @__PURE__ */ o.jsxs("div", { className: "flex justify-end gap-8", children: [
    /* @__PURE__ */ o.jsx(
      Hl,
      {
        buttons: [
          {
            icon: "laptop",
            iconColorClass: A === "desktop" ? "text-black dark:text-green" : "text-grey-500 dark:text-grey-600",
            link: !0,
            size: "sm",
            onClick: () => {
              f("desktop");
            }
          },
          {
            icon: "mobile",
            iconColorClass: A === "mobile" ? "text-black dark:text-green" : "text-grey-500 dark:text-grey-600",
            link: !0,
            size: "sm",
            onClick: () => {
              f("mobile");
            }
          }
        ]
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        color: "green",
        disabled: n,
        label: n ? "Installing..." : v,
        onClick: k
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: "absolute inset-0 z-[100]", children: [
    /* @__PURE__ */ o.jsx(zp, { containerClassName: "bg-grey-50 dark:bg-black z-[100]", left: b, right: y, sticky: !1 }),
    /* @__PURE__ */ o.jsx("div", { className: "flex h-[calc(100%-74px)] grow flex-col items-center justify-center bg-grey-50 dark:bg-black", children: A === "desktop" ? /* @__PURE__ */ o.jsx(Qp, { children: /* @__PURE__ */ o.jsx(
      "iframe",
      {
        className: "h-full w-full",
        src: h,
        title: "Theme preview"
      }
    ) }) : /* @__PURE__ */ o.jsx(Np, { children: /* @__PURE__ */ o.jsx(
      "iframe",
      {
        className: "h-full w-full",
        src: h,
        title: "Theme preview"
      }
    ) }) })
  ] });
}, lE = ({ onUpload: e }) => {
  const n = Sn();
  return /* @__PURE__ */ o.jsx("div", { className: "-mb-6", children: /* @__PURE__ */ o.jsx(
    Ik,
    {
      id: "theme-upload",
      onUpload: (t) => {
        n.remove(), e(t);
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "cursor-pointer bg-grey-75 p-10 text-center dark:bg-grey-950", children: "Click to select or drag & drop zip file" })
    }
  ) });
}, AE = ({
  currentTab: e,
  setCurrentTab: n,
  themes: t
}) => {
  const { updateRoute: a } = nt(), { mutateAsync: s } = Ky(), l = Bs(), A = dt(), f = Wi().getParam("ref"), [u, d] = ue(), [h, m] = ue(!1);
  Te(() => {
    l ? l.errorIfWouldGoOverLimit("customThemes", { value: "." }).then(() => d({ enabled: !0 })).catch((Q) => {
      Q instanceof Ua && d({ enabled: !1, error: Q.message });
    }) : d({ enabled: !0 });
  }, [l]);
  const v = () => {
    a(f ? `design/edit?ref=${f}` : "design/edit");
  }, k = async (Q) => {
    const B = Q == null ? void 0 : Q.name.replace(/\.zip$/, ""), K = t.map(($) => $.name);
    K.includes(B) ? xe.show(Kt, {
      title: "Overwrite theme",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "The theme ",
        /* @__PURE__ */ o.jsx("strong", { children: B }),
        " already exists. Do you want to overwrite it?"
      ] }),
      okLabel: "Overwrite",
      cancelLabel: "Cancel",
      okRunningLabel: "Overwriting...",
      okColor: "red",
      onOk: async ($) => {
        m(!0);
        const Y = K.indexOf(B);
        t.splice(Y, 1), await b({ file: Q, onActivate: v }), m(!1), n("installed"), $ == null || $.remove();
      }
    }) : (n("installed"), b({ file: Q, onActivate: v }));
  }, b = async ({
    file: Q,
    onActivate: B
  }) => {
    var le, ne, ae, j, _;
    let K, $ = null;
    try {
      m(!0), K = await s({ file: Q }), m(!1);
    } catch (F) {
      m(!1), F instanceof Ul && ((le = F.response) == null ? void 0 : le.status) === 422 && ((ne = F.data) != null && ne.errors) ? $ = F.data.errors : A(F);
    }
    if ($ && !K) {
      let F = "Invalid Theme", W = /* @__PURE__ */ o.jsx(o.Fragment, { children: "This theme is invalid and cannot be activated. Fix the following errors and re-upload the theme" });
      xe.show(nE, {
        title: F,
        prompt: W,
        fatalErrors: $,
        onRetry: async (H) => {
          H == null || H.remove(), S();
        }
      });
    }
    if (!K)
      return;
    const Y = K.themes[0];
    let V = "Upload successful", re = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("strong", { children: Y.name }),
      " uploaded successfully."
    ] });
    if (Y.active || (re = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      re,
      " ",
      "Do you want to activate it now?"
    ] })), (ae = Y == null ? void 0 : Y.gscan_errors) != null && ae.length || (j = Y.warnings) != null && j.length) {
      const F = (_ = Y == null ? void 0 : Y.gscan_errors) == null ? void 0 : _.length;
      V = `Upload successful with ${F ? "errors" : "warnings"}`, re = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "The theme ",
        /* @__PURE__ */ o.jsxs("strong", { children: [
          '"',
          Y.name,
          '"'
        ] }),
        " was installed successfully but we detected some ",
        F ? "errors" : "warnings",
        "."
      ] }), Y.active || (re = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        re,
        "You are still able to activate and use the theme but it is recommended to fix these ",
        F ? "errors" : "warnings",
        " before you do so."
      ] }));
    }
    xe.show(_p, {
      title: V,
      prompt: re,
      installedTheme: Y,
      onActivate: B
    });
  }, y = /* @__PURE__ */ o.jsx(
    sA,
    {
      activeItemClassName: "hidden md:!block md:!visible",
      itemClassName: "hidden md:!block md:!visible",
      items: [
        { label: "Design", onClick: v },
        { label: "Change theme" }
      ],
      separatorClassName: "hidden md:!block md:!visible",
      backIcon: !0,
      onBack: v
    }
  ), S = () => {
    u != null && u.enabled ? xe.show(Kt, {
      title: "Upload theme",
      prompt: /* @__PURE__ */ o.jsx(lE, { onUpload: k }),
      okLabel: "",
      formSheet: !1
    }) : xe.show(_i, {
      title: "Upgrade to enable custom themes",
      prompt: (u == null ? void 0 : u.error) || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "Your current plan only supports official themes. You can install them from the ",
        /* @__PURE__ */ o.jsx("a", { href: "https://ghost.org/marketplace/", children: "Ghost theme marketplace" }),
        "."
      ] }),
      onOk: () => a({ route: "/pro", isExternal: !0 })
    });
  }, T = /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-14", children: [
    /* @__PURE__ */ o.jsx("div", { className: "hidden md:!visible md:!block", children: /* @__PURE__ */ o.jsx(
      ja,
      {
        border: !1,
        selectedTab: e,
        tabs: [
          { id: "official", title: "Official themes" },
          { id: "installed", title: "Installed" }
        ],
        onTabChange: (Q) => {
          n(Q);
        }
      }
    ) }),
    /* @__PURE__ */ o.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ o.jsx(Ye, { color: "black", label: "Upload theme", loading: h, onClick: S }) })
  ] });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(zp, { containerClassName: "bg-white dark:bg-black", left: y, right: T }),
    /* @__PURE__ */ o.jsx("div", { className: "px-[8vmin] md:hidden", children: /* @__PURE__ */ o.jsx(
      ja,
      {
        border: !1,
        selectedTab: e,
        tabs: [
          { id: "official", title: "Official themes" },
          { id: "installed", title: "Installed" }
        ],
        onTabChange: (Q) => {
          n(Q);
        }
      }
    ) })
  ] });
}, cE = ({
  currentTab: e,
  onSelectTheme: n,
  themes: t
}) => {
  switch (e) {
    case "official":
      return /* @__PURE__ */ o.jsx(sE, { onSelectTheme: n });
    case "installed":
      return /* @__PURE__ */ o.jsx($y, { themes: t });
  }
  return null;
}, Ph = ({ source: e, themeRef: n }) => {
  const [t, a] = ue("official"), [s, l] = ue(null), [A, f] = ue("desktop"), [u, d] = ue(!1), [h, m] = ue(!1), { updateRoute: v } = nt(), k = Wi().getParam("ref"), b = Sn(), { data: { themes: y } = {} } = Vp(), { mutateAsync: S } = Gy(), { mutateAsync: T } = tf(), Q = dt(), B = (Y) => {
    l(Y);
  };
  if (Te(() => {
    if (e && n && !h) {
      const Y = n.split("/")[1];
      let V = "Install Theme";
      const re = (y == null ? void 0 : y.map((_) => _.name)) || [];
      let le = re.includes(Y.toLowerCase());
      const ne = re.indexOf(Y.toLowerCase()), ae = y == null ? void 0 : y[ne];
      let j = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "By clicking below, ",
        /* @__PURE__ */ o.jsx("strong", { children: Y }),
        " will automatically be activated as the theme for your site.",
        le && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("br", {}),
          /* @__PURE__ */ o.jsx("br", {}),
          "This will overwrite your existing version of ",
          /* @__PURE__ */ o.jsx("strong", { children: "Liebling" }),
          ae != null && ae.active ? " which is your active theme" : "",
          ". All custom changes will be lost."
        ] })
      ] });
      xe.show(Kt, {
        title: V,
        prompt: j,
        okLabel: "Install",
        cancelLabel: "Cancel",
        okRunningLabel: "Installing...",
        okColor: "black",
        onOk: async (_) => {
          let F;
          m(!0);
          try {
            le && y && y.splice(ne, 1), F = await S(n), F != null && F.themes[0] && (await T(F.themes[0].name), tt({
              type: "success",
              message: /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("span", { className: "capitalize", children: F.themes[0].name }),
                " is now your active theme."
              ] })
            })), _ == null || _.remove(), v(k ? `design/edit?ref=${k}` : "design/edit");
          } catch (W) {
            Q(W);
          }
        }
      });
    }
  }, [n, e, S, Q, T, v, y, h, k]), !y)
    return;
  let K, $;
  return s && (K = y.find((Y) => Y.name.toLowerCase() === s.name.toLowerCase()), $ = async () => {
    var re, le, ne;
    let Y = "Success", V = /* @__PURE__ */ o.jsx(o.Fragment, {});
    if (Cu(s))
      Y = "Activate theme", V = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "By clicking below, ",
        /* @__PURE__ */ o.jsx("strong", { children: s.name }),
        " will automatically be activated as the theme for your site."
      ] });
    else {
      d(!0);
      let ae;
      try {
        ae = await S(s.ref);
      } catch (_) {
        Q(_);
      } finally {
        d(!1);
      }
      if (!ae)
        return;
      const j = ae.themes[0];
      if (Y = "Success", V = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("strong", { children: j.name }),
        " has been successfully installed."
      ] }), j.active || (V = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        V,
        " ",
        "Do you want to activate it now?"
      ] })), (re = j.gscan_errors) != null && re.length || (le = j.warnings) != null && le.length) {
        const _ = (ne = j.gscan_errors) == null ? void 0 : ne.length;
        Y = `Installed with ${_ ? "errors" : "warnings"}`, V = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          "The theme ",
          /* @__PURE__ */ o.jsxs("strong", { children: [
            '"',
            j.name,
            '"'
          ] }),
          " was installed successfully but we detected some ",
          _ ? "errors" : "warnings",
          "."
        ] }), j.active || (V = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          V,
          "You are still able to activate and use the theme but it is recommended to contact the theme developer fix these ",
          _ ? "errors" : "warnings",
          " before you do so."
        ] }));
      }
      K = j;
    }
    xe.show(_p, {
      title: Y,
      prompt: V,
      installedTheme: K,
      onActivate: () => {
        v(k ? `design/edit?ref=${k}` : "design/edit");
      }
    });
  }), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        v(k ? `design/edit?ref=${k}` : "design/edit");
      },
      animate: !1,
      cancelLabel: "",
      footer: !1,
      padding: !1,
      size: "full",
      testId: "theme-modal",
      title: "",
      scrolling: !0,
      onCancel: () => {
        b.remove(), v("");
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "flex h-full justify-between", children: /* @__PURE__ */ o.jsxs("div", { className: "grow", children: [
        s && /* @__PURE__ */ o.jsx(
          oE,
          {
            installedTheme: K,
            isInstalling: u,
            selectedTheme: s,
            onBack: () => {
              l(null);
            },
            onClose: () => {
              v("design/edit");
            },
            onInstall: $
          }
        ),
        /* @__PURE__ */ o.jsx(
          AE,
          {
            currentTab: t,
            modal: b,
            previewMode: A,
            selectedTheme: s,
            setCurrentTab: a,
            setPreviewMode: f,
            setSelectedTheme: l,
            themes: y
          }
        ),
        !s && /* @__PURE__ */ o.jsx(
          cE,
          {
            currentTab: t,
            themes: y,
            onSelectTheme: B
          }
        )
      ] }) })
    }
  );
};
const uE = ({ children: e, to: n, classNames: t }) => {
  const a = n || document.body;
  if (!a)
    return /* @__PURE__ */ o.jsx(o.Fragment, { children: e });
  const s = (l) => {
    l.stopPropagation();
  };
  return Jk(
    /* @__PURE__ */ o.jsx("div", { className: t, onMouseDown: s, children: /* @__PURE__ */ o.jsx("div", { children: e }) }),
    a
  );
};
var fE = Object.defineProperty, dE = (e, n, t) => n in e ? fE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, jt = (e, n, t) => (dE(e, typeof n != "symbol" ? n + "" : n, t), t), $p = { exports: {} }, Di = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zh;
function hE() {
  if (zh)
    return Di;
  zh = 1;
  var e = At, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(f, u, d) {
    var h, m = {}, v = null, k = null;
    d !== void 0 && (v = "" + d), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (k = u.ref);
    for (h in u)
      a.call(u, h) && !l.hasOwnProperty(h) && (m[h] = u[h]);
    if (f && f.defaultProps)
      for (h in u = f.defaultProps, u)
        m[h] === void 0 && (m[h] = u[h]);
    return { $$typeof: n, type: f, key: v, ref: k, props: m, _owner: s.current };
  }
  return Di.Fragment = t, Di.jsx = A, Di.jsxs = A, Di;
}
$p.exports = hE();
var Be = $p.exports;
class pE {
  constructor(n = 3) {
    jt(this, "columnCount"), jt(this, "columns", []), jt(this, "columnHeights"), this.columnCount = n, this.columns = [[]], this.columnHeights = null;
  }
  reset() {
    let n = [], t = [];
    for (let a = 0; a < this.columnCount; a += 1)
      n[a] = [], t[a] = 0;
    this.columns = n, this.columnHeights = t;
  }
  addColumns() {
    for (let n = 0; n < this.columnCount; n++)
      this.columns.push([]), this.columnHeights.push(0);
  }
  addPhotoToColumns(n) {
    this.columns || this.reset();
    let t = Math.min(...this.columnHeights), a = this.columnHeights.indexOf(t);
    this.columnHeights[a] += 300 * n.ratio, this.columns[a].push(n);
  }
  getColumns() {
    return this.columns;
  }
  changeColumnCount(n) {
    n !== this.columnCount && (this.columnCount = n, this.reset());
  }
}
const mE = (e) => /* @__PURE__ */ it("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ it("path", { d: "M20 5.5l-8 8-8-8m-3.5 13h23", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, fill: "none" })), gE = (e) => /* @__PURE__ */ it("svg", { viewBox: "0 0 32 32", ...e }, /* @__PURE__ */ it("path", { d: "M17.4 29c-.8.8-2 .8-2.8 0L2.3 16.2C-.8 13.1-.8 8 2.3 4.8c3.1-3.1 8.2-3.1 11.3 0L16 7.6l2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4L17.4 29z" })), vE = {
  heart: gE,
  download: mE
}, uu = ({ icon: e, label: n, ...t }) => {
  let a = null;
  return e && (a = vE[e]), /* @__PURE__ */ Be.jsxs(
    "a",
    {
      className: "text-grey-700 flex h-8 shrink-0 cursor-pointer items-center rounded-md bg-white px-3 py-2 font-sans text-sm font-medium leading-6 opacity-90 transition-all ease-in-out hover:opacity-100",
      onClick: (s) => s.stopPropagation(),
      ...t,
      children: [
        e && a && /* @__PURE__ */ Be.jsx(a, { className: `size-4 ${e === "heart" ? "fill-red" : ""} stroke-[3px] ${n && "mr-1"}` }),
        n && /* @__PURE__ */ Be.jsx("span", { children: n })
      ]
    }
  );
}, em = ({ payload: e, srcUrl: n, links: t, likes: a, user: s, alt: l, urls: A, height: f, width: u, zoomed: d, insertImage: h, selectImg: m }) => {
  const v = (k) => {
    k.stopPropagation(), m(d ? null : e);
  };
  return /* @__PURE__ */ Be.jsxs(
    "div",
    {
      className: `bg-grey-100 relative mb-6 block ${d ? "h-full w-[max-content] cursor-zoom-out" : "w-full cursor-zoom-in"}`,
      "data-kg-unsplash-gallery-item": !0,
      onClick: v,
      children: [
        /* @__PURE__ */ Be.jsx(
          "img",
          {
            alt: l,
            className: `${d ? "h-full w-auto object-contain" : "block h-auto"}`,
            height: f,
            loading: "lazy",
            src: n,
            width: u,
            "data-kg-unsplash-gallery-img": !0
          }
        ),
        /* @__PURE__ */ Be.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/5 to-black/30 p-5 opacity-0 transition-all ease-in-out hover:opacity-100", children: [
          /* @__PURE__ */ Be.jsxs("div", { className: "flex items-center justify-end gap-3", children: [
            /* @__PURE__ */ Be.jsx(
              uu,
              {
                "data-kg-button": "unsplash-like",
                href: `${t.html}/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit`,
                icon: "heart",
                label: a.toString(),
                rel: "noopener noreferrer",
                target: "_blank"
              }
            ),
            /* @__PURE__ */ Be.jsx(
              uu,
              {
                "data-kg-button": "unsplash-download",
                href: `${t.download}/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit&amp;force=true`,
                icon: "download"
              }
            )
          ] }),
          /* @__PURE__ */ Be.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ Be.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ Be.jsx("img", { alt: "author", className: "mr-2 size-8 rounded-full", src: s.profile_image.medium }),
              /* @__PURE__ */ Be.jsx("div", { className: "mr-2 truncate font-sans text-sm font-medium text-white", children: s.name })
            ] }),
            /* @__PURE__ */ Be.jsx(uu, { label: "Insert image", "data-kg-unsplash-insert-button": !0, onClick: (k) => {
              k.stopPropagation(), h({
                src: A.regular.replace(/&w=1080/, "&w=2000"),
                caption: `<span>Photo by <a href="${s.links.html}">${s.name}</a> / <a href="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit">Unsplash</a></span>`,
                height: f,
                width: u,
                alt: l,
                links: t
              });
            } })
          ] })
        ] })
      ]
    }
  );
}, wE = ({ payload: e, insertImage: n, selectImg: t, zoomed: a }) => /* @__PURE__ */ Be.jsx("div", { className: "flex h-full grow basis-0 justify-center", "data-kg-unsplash-zoomed": !0, onClick: () => t(null), children: /* @__PURE__ */ Be.jsx(
  em,
  {
    alt: e.alt_description,
    height: e.height,
    insertImage: n,
    likes: e.likes,
    links: e.links,
    payload: e,
    selectImg: t,
    srcUrl: e.urls.regular,
    urls: e.urls,
    user: e.user,
    width: e.width,
    zoomed: a
  }
) }), xE = () => /* @__PURE__ */ Be.jsx("div", { className: "absolute inset-y-0 left-0 flex w-full items-center justify-center overflow-hidden pb-[8vh]", "data-kg-loader": !0, children: /* @__PURE__ */ Be.jsx("div", { className: "animate-spin before:bg-grey-800 relative inline-block size-[50px] rounded-full border border-black/10 before:z-10 before:mt-[7px] before:block before:size-[7px] before:rounded-full" }) }), kE = (e) => /* @__PURE__ */ Be.jsx("div", { className: "mr-6 flex grow basis-0 flex-col justify-start last-of-type:mr-0", children: e.children }), bE = (e) => e != null && e.columns ? e == null ? void 0 : e.columns.map((n, t) => (
  // eslint-disable-next-line react/no-array-index-key
  /* @__PURE__ */ Be.jsx(kE, { children: n.map((a) => /* @__PURE__ */ Be.jsx(
    em,
    {
      alt: a.alt_description,
      height: a.height,
      insertImage: e == null ? void 0 : e.insertImage,
      likes: a.likes,
      links: a.links,
      payload: a,
      selectImg: e == null ? void 0 : e.selectImg,
      srcUrl: a.urls.regular,
      urls: a.urls,
      user: a.user,
      width: a.width,
      zoomed: (e == null ? void 0 : e.zoomed) || null
    },
    a.id
  )) }, t)
)) : null, fu = (e) => /* @__PURE__ */ Be.jsx("div", { className: "relative h-full overflow-hidden", "data-kg-unsplash-gallery": !0, children: /* @__PURE__ */ Be.jsxs("div", { ref: e.galleryRef, className: `flex size-full justify-center overflow-auto px-20 ${e != null && e.zoomed ? "pb-10" : ""}`, "data-kg-unsplash-gallery-scrollref": !0, children: [
  e.children,
  (e == null ? void 0 : e.isLoading) && /* @__PURE__ */ Be.jsx(xE, {})
] }) }), yE = ({
  zoomed: e,
  error: n,
  galleryRef: t,
  isLoading: a,
  dataset: s,
  selectImg: l,
  insertImage: A
}) => e ? /* @__PURE__ */ Be.jsx(
  fu,
  {
    galleryRef: t,
    zoomed: e,
    children: /* @__PURE__ */ Be.jsx(
      wE,
      {
        alt: e.alt_description,
        height: e.height,
        insertImage: A,
        likes: e.likes,
        links: e.links,
        payload: e,
        selectImg: l,
        srcUrl: e.urls.regular,
        urls: e.urls,
        user: e.user,
        width: e.width,
        zoomed: e
      }
    )
  }
) : n ? /* @__PURE__ */ Be.jsx(
  fu,
  {
    galleryRef: t,
    zoomed: e,
    children: /* @__PURE__ */ Be.jsxs("div", { className: "flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ Be.jsx("h1", { className: "mb-4 text-2xl font-bold", children: "Error" }),
      /* @__PURE__ */ Be.jsx("p", { className: "text-lg font-medium", children: n })
    ] })
  }
) : /* @__PURE__ */ Be.jsx(
  fu,
  {
    galleryRef: t,
    isLoading: a,
    zoomed: e,
    children: /* @__PURE__ */ Be.jsx(
      bE,
      {
        columns: s,
        insertImage: A,
        selectImg: l,
        zoomed: e
      }
    )
  }
), EE = (e) => /* @__PURE__ */ it("svg", { xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ it("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M.75 23.249l22.5-22.5M23.25 23.249L.75.749" })), ME = (e) => /* @__PURE__ */ it("svg", { xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ it("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M1.472 13.357a9.063 9.063 0 1 0 16.682-7.09 9.063 9.063 0 1 0-16.682 7.09Zm14.749 2.863 7.029 7.03" })), SE = (e) => /* @__PURE__ */ it("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 122.43 122.41", ...e }, /* @__PURE__ */ it("path", { d: "M83.86 54.15v34.13H38.57V54.15H0v68.26h122.43V54.15H83.86zM38.57 0h45.3v34.13h-45.3z" })), IE = ({ closeModal: e, handleSearch: n, children: t }) => /* @__PURE__ */ Be.jsxs(Be.Fragment, { children: [
  /* @__PURE__ */ Be.jsx("div", { className: "fixed inset-0 z-40 h-[100vh] bg-black opacity-60" }),
  /* @__PURE__ */ Be.jsxs("div", { className: "not-kg-prose fixed inset-8 z-50 overflow-hidden rounded bg-white shadow-xl", "data-kg-modal": "unsplash", children: [
    /* @__PURE__ */ Be.jsx("button", { className: "absolute right-6 top-6 cursor-pointer", type: "button", children: /* @__PURE__ */ Be.jsx(
      EE,
      {
        className: "text-grey-400 size-4 stroke-2",
        "data-kg-modal-close-button": !0,
        onClick: () => e()
      }
    ) }),
    /* @__PURE__ */ Be.jsxs("div", { className: "flex h-full flex-col", children: [
      /* @__PURE__ */ Be.jsxs("header", { className: "flex shrink-0 items-center justify-between px-20 py-10", children: [
        /* @__PURE__ */ Be.jsxs("h1", { className: "flex items-center gap-2 font-sans text-3xl font-bold text-black", children: [
          /* @__PURE__ */ Be.jsx(SE, { className: "mb-1" }),
          "Unsplash"
        ] }),
        /* @__PURE__ */ Be.jsxs("div", { className: "relative w-full max-w-sm", children: [
          /* @__PURE__ */ Be.jsx(ME, { className: "text-grey-700 absolute left-4 top-1/2 size-4 -translate-y-2" }),
          /* @__PURE__ */ Be.jsx("input", { className: "border-grey-300 focus:border-grey-400 h-10 w-full rounded-full border border-solid pl-10 pr-8 font-sans text-md font-normal text-black focus-visible:outline-none", placeholder: "Search free high-resolution photos", autoFocus: !0, "data-kg-unsplash-search": !0, onChange: n })
        ] })
      ] }),
      t
    ] })
  ] })
] }), JE = [
  {
    id: "TA5hw14Coh4",
    slug: "a-person-standing-on-a-sand-dune-in-the-desert-TA5hw14Coh4",
    alternative_slugs: {
      en: "a-person-standing-on-a-sand-dune-in-the-desert-TA5hw14Coh4"
    },
    created_at: "2024-02-07T22:39:36Z",
    updated_at: "2024-03-07T23:46:14Z",
    promoted_at: null,
    width: 8640,
    height: 5760,
    color: "#8c5940",
    blur_hash: "LKD]brE2IUr?Lgwci_NaDjR*ofoe",
    description: "NEOM will be home to one of the world’s largest nature reserves: a 25,000 sq km stretch of wilderness, encompassing two deserts divided by a mountain range. | NEOM, Saudi Arabia",
    alt_description: "a person standing on a sand dune in the desert",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1707345512638-997d31a10eaa"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-standing-on-a-sand-dune-in-the-desert-TA5hw14Coh4",
      html: "https://unsplash.com/photos/a-person-standing-on-a-sand-dune-in-the-desert-TA5hw14Coh4",
      download: "https://unsplash.com/photos/TA5hw14Coh4/download?ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/TA5hw14Coh4/download?ixid=M3wxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 226,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "UArA9A02Kvk",
    slug: "a-black-and-white-photo-of-a-man-with-his-head-in-his-hands-UArA9A02Kvk",
    alternative_slugs: {
      en: "a-black-and-white-photo-of-a-man-with-his-head-in-his-hands-UArA9A02Kvk"
    },
    created_at: "2024-03-05T15:48:31Z",
    updated_at: "2024-03-11T06:59:25Z",
    promoted_at: "2024-03-11T06:59:25Z",
    width: 2160,
    height: 2700,
    color: "#262626",
    blur_hash: "L78;S$~p00oLD%D%IVay9F9ZIUay",
    description: null,
    alt_description: "a black and white photo of a man with his head in his hands",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709653688483-fc2b356c1f36"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-black-and-white-photo-of-a-man-with-his-head-in-his-hands-UArA9A02Kvk",
      html: "https://unsplash.com/photos/a-black-and-white-photo-of-a-man-with-his-head-in-his-hands-UArA9A02Kvk",
      download: "https://unsplash.com/photos/UArA9A02Kvk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/UArA9A02Kvk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDJ8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 20,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "gwWL9kMcm2g",
      updated_at: "2024-03-11T10:14:07Z",
      username: "nickandreka",
      name: "Nick Andréka",
      first_name: "Nick",
      last_name: "Andréka",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/nickandreka",
        html: "https://unsplash.com/@nickandreka",
        photos: "https://api.unsplash.com/users/nickandreka/photos",
        likes: "https://api.unsplash.com/users/nickandreka/likes",
        portfolio: "https://api.unsplash.com/users/nickandreka/portfolio",
        following: "https://api.unsplash.com/users/nickandreka/following",
        followers: "https://api.unsplash.com/users/nickandreka/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1698854198608-989031a5ccdeimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1698854198608-989031a5ccdeimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1698854198608-989031a5ccdeimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "andreka.art",
      total_collections: 0,
      total_likes: 8,
      total_photos: 35,
      total_promoted_photos: 19,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "andreka.art",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "QX_7m4Lh2qg",
    slug: "a-black-and-white-photo-of-a-lighthouse-QX_7m4Lh2qg",
    alternative_slugs: {
      en: "a-black-and-white-photo-of-a-lighthouse-QX_7m4Lh2qg"
    },
    created_at: "2024-03-10T16:46:33Z",
    updated_at: "2024-03-11T06:59:11Z",
    promoted_at: "2024-03-11T06:59:11Z",
    width: 4e3,
    height: 5751,
    color: "#f3f3f3",
    blur_hash: "LAQJiu~X-;9G-:?cIURj~qD%00xt",
    description: null,
    alt_description: "a black and white photo of a lighthouse",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710088912041-34d1767d376a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710088912041-34d1767d376a"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-black-and-white-photo-of-a-lighthouse-QX_7m4Lh2qg",
      html: "https://unsplash.com/photos/a-black-and-white-photo-of-a-lighthouse-QX_7m4Lh2qg",
      download: "https://unsplash.com/photos/QX_7m4Lh2qg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/QX_7m4Lh2qg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDN8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 21,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "ue6QWAAHoIQ",
      updated_at: "2024-03-11T08:53:54Z",
      username: "huzhewseh",
      name: "Volodymyr M",
      first_name: "Volodymyr",
      last_name: "M",
      twitter_username: "huzhewseh",
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/huzhewseh",
        html: "https://unsplash.com/@huzhewseh",
        photos: "https://api.unsplash.com/users/huzhewseh/photos",
        likes: "https://api.unsplash.com/users/huzhewseh/likes",
        portfolio: "https://api.unsplash.com/users/huzhewseh/portfolio",
        following: "https://api.unsplash.com/users/huzhewseh/following",
        followers: "https://api.unsplash.com/users/huzhewseh/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1663221970918-58b1620c49c9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1663221970918-58b1620c49c9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1663221970918-58b1620c49c9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "huzhewseh",
      total_collections: 0,
      total_likes: 0,
      total_photos: 18,
      total_promoted_photos: 3,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "huzhewseh",
        portfolio_url: null,
        twitter_username: "huzhewseh",
        paypal_email: null
      }
    }
  },
  {
    id: "fMNP7XVcct0",
    slug: "a-woman-standing-in-a-dark-room-with-her-eyes-closed-fMNP7XVcct0",
    alternative_slugs: {
      en: "a-woman-standing-in-a-dark-room-with-her-eyes-closed-fMNP7XVcct0"
    },
    created_at: "2024-03-09T08:40:07Z",
    updated_at: "2024-03-11T06:58:58Z",
    promoted_at: "2024-03-11T06:58:58Z",
    width: 3264,
    height: 4928,
    color: "#262626",
    blur_hash: "L35hY|xu00D%-;xuIUD%00j[?bWB",
    description: null,
    alt_description: "a woman standing in a dark room with her eyes closed",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709973540503-77d699279634?ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709973540503-77d699279634?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709973540503-77d699279634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709973540503-77d699279634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709973540503-77d699279634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709973540503-77d699279634"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-woman-standing-in-a-dark-room-with-her-eyes-closed-fMNP7XVcct0",
      html: "https://unsplash.com/photos/a-woman-standing-in-a-dark-room-with-her-eyes-closed-fMNP7XVcct0",
      download: "https://unsplash.com/photos/fMNP7XVcct0/download?ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/fMNP7XVcct0/download?ixid=M3wxMTc3M3wwfDF8YWxsfDR8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 7,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "lSlibqdw_c8",
      updated_at: "2024-03-11T08:54:13Z",
      username: "vitaliyshev89",
      name: "Vitaliy Shevchenko",
      first_name: "Vitaliy",
      last_name: "Shevchenko",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: "Kharkiv, Ukraine",
      links: {
        self: "https://api.unsplash.com/users/vitaliyshev89",
        html: "https://unsplash.com/@vitaliyshev89",
        photos: "https://api.unsplash.com/users/vitaliyshev89/photos",
        likes: "https://api.unsplash.com/users/vitaliyshev89/likes",
        portfolio: "https://api.unsplash.com/users/vitaliyshev89/portfolio",
        following: "https://api.unsplash.com/users/vitaliyshev89/following",
        followers: "https://api.unsplash.com/users/vitaliyshev89/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1652271342920-31eebbc2c3d0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1652271342920-31eebbc2c3d0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1652271342920-31eebbc2c3d0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 1,
      total_photos: 205,
      total_promoted_photos: 29,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "b4kKyX0BQvc",
    slug: "a-train-station-with-a-train-on-the-tracks-b4kKyX0BQvc",
    alternative_slugs: {
      en: "a-train-station-with-a-train-on-the-tracks-b4kKyX0BQvc"
    },
    created_at: "2024-03-08T21:58:28Z",
    updated_at: "2024-03-11T06:57:35Z",
    promoted_at: "2024-03-11T06:57:27Z",
    width: 6e3,
    height: 4e3,
    color: "#0c2626",
    blur_hash: "LSDJS6kD9Zxu~qkDM|xaS%j]xaV@",
    description: 'Stunning metro train station "Elbbrücken" in Hamburg, Germany during sunset',
    alt_description: "a train station with a train on the tracks",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709934645859-f1ed8d3a4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709934645859-f1ed8d3a4954"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-train-station-with-a-train-on-the-tracks-b4kKyX0BQvc",
      html: "https://unsplash.com/photos/a-train-station-with-a-train-on-the-tracks-b4kKyX0BQvc",
      download: "https://unsplash.com/photos/b4kKyX0BQvc/download?ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/b4kKyX0BQvc/download?ixid=M3wxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 8,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "street-photography": {
        status: "approved",
        approved_on: "2024-03-11T06:57:35Z"
      }
    },
    user: {
      id: "TffftDPlBPk",
      updated_at: "2024-03-11T06:59:04Z",
      username: "christianlue",
      name: "Christian Lue",
      first_name: "Christian",
      last_name: "Lue",
      twitter_username: "chrrischii",
      portfolio_url: null,
      bio: null,
      location: "Frankfurt / Berlin",
      links: {
        self: "https://api.unsplash.com/users/christianlue",
        html: "https://unsplash.com/@christianlue",
        photos: "https://api.unsplash.com/users/christianlue/photos",
        likes: "https://api.unsplash.com/users/christianlue/likes",
        portfolio: "https://api.unsplash.com/users/christianlue/portfolio",
        following: "https://api.unsplash.com/users/christianlue/following",
        followers: "https://api.unsplash.com/users/christianlue/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1581889127238-ea4aa40e8cb4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1581889127238-ea4aa40e8cb4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1581889127238-ea4aa40e8cb4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 7,
      total_likes: 15,
      total_photos: 571,
      total_promoted_photos: 103,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: "chrrischii",
        paypal_email: null
      }
    }
  },
  {
    id: "9633dHhioC8",
    slug: "a-person-walking-through-a-canyon-in-the-desert-9633dHhioC8",
    alternative_slugs: {
      en: "a-person-walking-through-a-canyon-in-the-desert-9633dHhioC8"
    },
    created_at: "2023-04-28T15:30:26Z",
    updated_at: "2024-03-10T10:46:58Z",
    promoted_at: "2023-05-13T12:02:35Z",
    width: 8316,
    height: 5544,
    color: "#734026",
    blur_hash: "LVHdd89G57-o.9IBsSR-~pD*M{xt",
    description: "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
    alt_description: "a person walking through a canyon in the desert",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682695795255-b236b1f1267d"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-walking-through-a-canyon-in-the-desert-9633dHhioC8",
      html: "https://unsplash.com/photos/a-person-walking-through-a-canyon-in-the-desert-9633dHhioC8",
      download: "https://unsplash.com/photos/9633dHhioC8/download?ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/9633dHhioC8/download?ixid=M3wxMTc3M3wxfDF8YWxsfDZ8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 631,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515595&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515798&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
      ],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "4PmYYBFhwFM",
    slug: "a-close-up-of-a-car-door-with-the-word-budder-on-it-4PmYYBFhwFM",
    alternative_slugs: {
      en: "a-close-up-of-a-car-door-with-the-word-budder-on-it-4PmYYBFhwFM"
    },
    created_at: "2024-03-09T18:40:37Z",
    updated_at: "2024-03-11T06:57:23Z",
    promoted_at: "2024-03-11T06:57:23Z",
    width: 5248,
    height: 7872,
    color: "#a6a6a6",
    blur_hash: "LHDA40%MbGxu%L?bt7of_N%gIBRj",
    description: null,
    alt_description: "a close up of a car door with the word budder on it",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710009439657-c0dfdc051a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710009439657-c0dfdc051a28"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-close-up-of-a-car-door-with-the-word-budder-on-it-4PmYYBFhwFM",
      html: "https://unsplash.com/photos/a-close-up-of-a-car-door-with-the-word-budder-on-it-4PmYYBFhwFM",
      download: "https://unsplash.com/photos/4PmYYBFhwFM/download?ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/4PmYYBFhwFM/download?ixid=M3wxMTc3M3wwfDF8YWxsfDd8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 5,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "Xz7_QPPM2So",
      updated_at: "2024-03-11T08:27:09Z",
      username: "tiago_f_ferreira",
      name: "Tiago Ferreira",
      first_name: "Tiago",
      last_name: "Ferreira",
      twitter_username: null,
      portfolio_url: "https://tiagoferreira765.wixsite.com/photographyandmusic",
      bio: `Photography - a hobby, a passion.\r
Planet earth 🌎, a creative space to enjoy.`,
      location: "Lisboa, Portugal",
      links: {
        self: "https://api.unsplash.com/users/tiago_f_ferreira",
        html: "https://unsplash.com/@tiago_f_ferreira",
        photos: "https://api.unsplash.com/users/tiago_f_ferreira/photos",
        likes: "https://api.unsplash.com/users/tiago_f_ferreira/likes",
        portfolio: "https://api.unsplash.com/users/tiago_f_ferreira/portfolio",
        following: "https://api.unsplash.com/users/tiago_f_ferreira/following",
        followers: "https://api.unsplash.com/users/tiago_f_ferreira/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1595844391672-cdf854039843image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1595844391672-cdf854039843image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1595844391672-cdf854039843image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "tiago_f_ferreira",
      total_collections: 1,
      total_likes: 144,
      total_photos: 205,
      total_promoted_photos: 8,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "tiago_f_ferreira",
        portfolio_url: "https://tiagoferreira765.wixsite.com/photographyandmusic",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "BUhVFtY-890",
    slug: "a-close-up-of-a-bird-with-a-red-head-BUhVFtY-890",
    alternative_slugs: {
      en: "a-close-up-of-a-bird-with-a-red-head-BUhVFtY-890"
    },
    created_at: "2024-03-09T10:03:28Z",
    updated_at: "2024-03-11T06:57:20Z",
    promoted_at: "2024-03-11T06:57:20Z",
    width: 3511,
    height: 2231,
    color: "#262626",
    blur_hash: "L24epEWB0eMx$*t8OEV@RPj]baay",
    description: null,
    alt_description: "a close up of a bird with a red head",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709978601970-036e92662b46?ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709978601970-036e92662b46?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709978601970-036e92662b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709978601970-036e92662b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709978601970-036e92662b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709978601970-036e92662b46"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-close-up-of-a-bird-with-a-red-head-BUhVFtY-890",
      html: "https://unsplash.com/photos/a-close-up-of-a-bird-with-a-red-head-BUhVFtY-890",
      download: "https://unsplash.com/photos/BUhVFtY-890/download?ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/BUhVFtY-890/download?ixid=M3wxMTc3M3wwfDF8YWxsfDh8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 8,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "textures-patterns": {
        status: "rejected"
      },
      spring: {
        status: "rejected"
      },
      "earth-hour": {
        status: "approved",
        approved_on: "2024-03-10T12:31:10Z"
      },
      health: {
        status: "unevaluated"
      },
      animals: {
        status: "unevaluated"
      },
      film: {
        status: "unevaluated"
      },
      travel: {
        status: "unevaluated"
      },
      nature: {
        status: "unevaluated"
      },
      wallpapers: {
        status: "unevaluated"
      }
    },
    user: {
      id: "3SCC0WcF-wA",
      updated_at: "2024-03-11T09:44:02Z",
      username: "refargotohp",
      name: "refargotohp",
      first_name: "refargotohp",
      last_name: null,
      twitter_username: null,
      portfolio_url: null,
      bio: "Hello 👋🏼 My name is Pavel, and I am a photographer. I enjoy the photo in any of its manifestations. Sequential shooting, street, studio, portraiture - it's all me. Waiting for you on my social networks - @refargotohp",
      location: null,
      links: {
        self: "https://api.unsplash.com/users/refargotohp",
        html: "https://unsplash.com/@refargotohp",
        photos: "https://api.unsplash.com/users/refargotohp/photos",
        likes: "https://api.unsplash.com/users/refargotohp/likes",
        portfolio: "https://api.unsplash.com/users/refargotohp/portfolio",
        following: "https://api.unsplash.com/users/refargotohp/following",
        followers: "https://api.unsplash.com/users/refargotohp/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1653036388874-dab6bdb375bcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1653036388874-dab6bdb375bcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1653036388874-dab6bdb375bcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "refargotohp",
      total_collections: 1,
      total_likes: 86,
      total_photos: 132,
      total_promoted_photos: 61,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "refargotohp",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "99clkpyauJI",
    slug: "there-are-bottles-of-beer-on-a-shelf-in-front-of-a-window-99clkpyauJI",
    alternative_slugs: {
      en: "there-are-bottles-of-beer-on-a-shelf-in-front-of-a-window-99clkpyauJI"
    },
    created_at: "2024-03-10T00:15:28Z",
    updated_at: "2024-03-11T06:56:32Z",
    promoted_at: "2024-03-11T06:56:32Z",
    width: 4299,
    height: 3448,
    color: "#f3f3f3",
    blur_hash: "LjJuGn?bM{xu~qoKRPM{9FM{t6M_",
    description: null,
    alt_description: "there are bottles of beer on a shelf in front of a window",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710029721414-9e2125e155c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710029721414-9e2125e155c3"
    },
    links: {
      self: "https://api.unsplash.com/photos/there-are-bottles-of-beer-on-a-shelf-in-front-of-a-window-99clkpyauJI",
      html: "https://unsplash.com/photos/there-are-bottles-of-beer-on-a-shelf-in-front-of-a-window-99clkpyauJI",
      download: "https://unsplash.com/photos/99clkpyauJI/download?ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA",
      download_location: "https://api.unsplash.com/photos/99clkpyauJI/download?ixid=M3wxMTc3M3wwfDF8YWxsfDl8fHx8fHwyfHwxNzEwMTUzMjA1fA"
    },
    likes: 2,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      film: {
        status: "approved",
        approved_on: "2024-03-10T16:39:06Z"
      }
    },
    user: {
      id: "TPCcwPbQzmY",
      updated_at: "2024-03-11T06:59:01Z",
      username: "suzm4film",
      name: "szm 4",
      first_name: "szm",
      last_name: "4",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: "Japan",
      links: {
        self: "https://api.unsplash.com/users/suzm4film",
        html: "https://unsplash.com/@suzm4film",
        photos: "https://api.unsplash.com/users/suzm4film/photos",
        likes: "https://api.unsplash.com/users/suzm4film/likes",
        portfolio: "https://api.unsplash.com/users/suzm4film/portfolio",
        following: "https://api.unsplash.com/users/suzm4film/following",
        followers: "https://api.unsplash.com/users/suzm4film/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1632890829763-5c518f873dee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1632890829763-5c518f873dee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1632890829763-5c518f873dee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 0,
      total_photos: 189,
      total_promoted_photos: 19,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "Lbt-cZyOUM4",
    slug: "an-old-fashioned-typewriter-sitting-on-a-table-in-front-of-a-window-Lbt-cZyOUM4",
    alternative_slugs: {
      en: "an-old-fashioned-typewriter-sitting-on-a-table-in-front-of-a-window-Lbt-cZyOUM4"
    },
    created_at: "2024-03-09T16:58:57Z",
    updated_at: "2024-03-11T06:57:06Z",
    promoted_at: "2024-03-11T06:55:38Z",
    width: 5783,
    height: 3848,
    color: "#0c2626",
    blur_hash: "LkG[.y01Ri-:?bM{RjofM{xuRkWB",
    description: null,
    alt_description: "an old fashioned typewriter sitting on a table in front of a window",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710003364549-de37d4ed3413"
    },
    links: {
      self: "https://api.unsplash.com/photos/an-old-fashioned-typewriter-sitting-on-a-table-in-front-of-a-window-Lbt-cZyOUM4",
      html: "https://unsplash.com/photos/an-old-fashioned-typewriter-sitting-on-a-table-in-front-of-a-window-Lbt-cZyOUM4",
      download: "https://unsplash.com/photos/Lbt-cZyOUM4/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/Lbt-cZyOUM4/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEwfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 3,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "8D4VFtkiIuw",
      updated_at: "2024-03-11T07:28:57Z",
      username: "tama66",
      name: "Peter Herrmann",
      first_name: "Peter",
      last_name: "Herrmann",
      twitter_username: null,
      portfolio_url: null,
      bio: "Everything... but not boring! Instagram@Tiefstapler66",
      location: "Leverkusen/Germany",
      links: {
        self: "https://api.unsplash.com/users/tama66",
        html: "https://unsplash.com/@tama66",
        photos: "https://api.unsplash.com/users/tama66/photos",
        likes: "https://api.unsplash.com/users/tama66/likes",
        portfolio: "https://api.unsplash.com/users/tama66/portfolio",
        following: "https://api.unsplash.com/users/tama66/following",
        followers: "https://api.unsplash.com/users/tama66/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1611475141936-383e23c6cc6dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1611475141936-383e23c6cc6dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1611475141936-383e23c6cc6dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "tiefstapler66",
      total_collections: 1,
      total_likes: 149,
      total_photos: 363,
      total_promoted_photos: 152,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "tiefstapler66",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "D1jr0Mevs-c",
    slug: "an-aerial-view-of-a-body-of-water-D1jr0Mevs-c",
    alternative_slugs: {
      en: "an-aerial-view-of-a-body-of-water-D1jr0Mevs-c"
    },
    created_at: "2024-02-07T22:34:15Z",
    updated_at: "2024-03-10T10:54:36Z",
    promoted_at: null,
    width: 5280,
    height: 2970,
    color: "#0c2626",
    blur_hash: "LH9[JL0i+HM{^}Ezw#R.b@n$nhbb",
    description: "The Islands of NEOM are home to kaleidoscopic-coloured coral reefs and an abundance of diverse marine life | Islands of NEOM – NEOM, Saudi Arabia",
    alt_description: "an aerial view of a body of water",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1707343843982-f8275f3994c5"
    },
    links: {
      self: "https://api.unsplash.com/photos/an-aerial-view-of-a-body-of-water-D1jr0Mevs-c",
      html: "https://unsplash.com/photos/an-aerial-view-of-a-body-of-water-D1jr0Mevs-c",
      download: "https://unsplash.com/photos/D1jr0Mevs-c/download?ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/D1jr0Mevs-c/download?ixid=M3wxMTc3M3wxfDF8YWxsfDExfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 308,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "0RBEUjWQBBA",
    slug: "a-woman-standing-under-a-cherry-blossom-tree-0RBEUjWQBBA",
    alternative_slugs: {
      en: "a-woman-standing-under-a-cherry-blossom-tree-0RBEUjWQBBA"
    },
    created_at: "2024-03-10T10:15:48Z",
    updated_at: "2024-03-11T06:55:22Z",
    promoted_at: "2024-03-11T06:55:22Z",
    width: 4672,
    height: 7008,
    color: "#262626",
    blur_hash: "LOG8o{t7WBWB~DofR*j@D%NGR%WB",
    description: null,
    alt_description: "a woman standing under a cherry blossom tree",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710065574765-a685385c6d9a"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-woman-standing-under-a-cherry-blossom-tree-0RBEUjWQBBA",
      html: "https://unsplash.com/photos/a-woman-standing-under-a-cherry-blossom-tree-0RBEUjWQBBA",
      download: "https://unsplash.com/photos/0RBEUjWQBBA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/0RBEUjWQBBA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 11,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "ePlndXHeIiM",
      updated_at: "2024-03-11T09:04:03Z",
      username: "lwdzl",
      name: "Jack Dong",
      first_name: "Jack",
      last_name: "Dong",
      twitter_username: null,
      portfolio_url: "https://www.xiaohongshu.com/user/profile/5f11b998000000000101d8d2?xhsshare=CopyLink&appuid=5f11b998000000000101d8d2&apptime=1696562673",
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/lwdzl",
        html: "https://unsplash.com/@lwdzl",
        photos: "https://api.unsplash.com/users/lwdzl/photos",
        likes: "https://api.unsplash.com/users/lwdzl/likes",
        portfolio: "https://api.unsplash.com/users/lwdzl/portfolio",
        following: "https://api.unsplash.com/users/lwdzl/following",
        followers: "https://api.unsplash.com/users/lwdzl/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 101,
      total_photos: 640,
      total_promoted_photos: 112,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: null,
        portfolio_url: "https://www.xiaohongshu.com/user/profile/5f11b998000000000101d8d2?xhsshare=CopyLink&appuid=5f11b998000000000101d8d2&apptime=1696562673",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "2IGDvJa2Bd0",
    slug: "a-path-in-the-middle-of-a-foggy-forest-2IGDvJa2Bd0",
    alternative_slugs: {
      en: "a-path-in-the-middle-of-a-foggy-forest-2IGDvJa2Bd0"
    },
    created_at: "2024-02-21T14:32:53Z",
    updated_at: "2024-03-11T06:54:06Z",
    promoted_at: "2024-03-11T06:54:06Z",
    width: 4672,
    height: 5840,
    color: "#f3f3f3",
    blur_hash: "L#Gv00ofD%ay~qoeM_ay%NafWVj[",
    description: null,
    alt_description: "a path in the middle of a foggy forest",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1708525736169-534ee3e24e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1708525736169-534ee3e24e99"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-path-in-the-middle-of-a-foggy-forest-2IGDvJa2Bd0",
      html: "https://unsplash.com/photos/a-path-in-the-middle-of-a-foggy-forest-2IGDvJa2Bd0",
      download: "https://unsplash.com/photos/2IGDvJa2Bd0/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/2IGDvJa2Bd0/download?ixid=M3wxMTc3M3wwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 11,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "zL5HAN1fnJw",
      updated_at: "2024-03-11T06:58:57Z",
      username: "viklukphotography",
      name: "Viktor Mischke",
      first_name: "Viktor",
      last_name: "Mischke",
      twitter_username: null,
      portfolio_url: "https://www.istockphoto.com/de/portfolio/snoviktor",
      bio: null,
      location: "Schloss Holte-Stukenbrock",
      links: {
        self: "https://api.unsplash.com/users/viklukphotography",
        html: "https://unsplash.com/@viklukphotography",
        photos: "https://api.unsplash.com/users/viklukphotography/photos",
        likes: "https://api.unsplash.com/users/viklukphotography/likes",
        portfolio: "https://api.unsplash.com/users/viklukphotography/portfolio",
        following: "https://api.unsplash.com/users/viklukphotography/following",
        followers: "https://api.unsplash.com/users/viklukphotography/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1646051425690-ed09fae6858fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1646051425690-ed09fae6858fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1646051425690-ed09fae6858fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "viktormischke",
      total_collections: 0,
      total_likes: 141,
      total_photos: 38,
      total_promoted_photos: 8,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "viktormischke",
        portfolio_url: "https://www.istockphoto.com/de/portfolio/snoviktor",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "PZfeP0uwBpQ",
    slug: "a-person-with-a-hat-on-their-head-in-a-field-PZfeP0uwBpQ",
    alternative_slugs: {
      en: "a-person-with-a-hat-on-their-head-in-a-field-PZfeP0uwBpQ"
    },
    created_at: "2024-02-24T10:57:49Z",
    updated_at: "2024-03-11T06:53:56Z",
    promoted_at: "2024-03-11T06:53:56Z",
    width: 2720,
    height: 4080,
    color: "#404026",
    blur_hash: "LIB:Tx%K56NGORbYxas:0KRj-poe",
    description: "A woman wearing a traditional coolie hat kneels in a field of green vegetables, carefully harvesting the crops.",
    alt_description: "a person with a hat on their head in a field",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1708771641703-0df3d179cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1708771641703-0df3d179cec3"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-with-a-hat-on-their-head-in-a-field-PZfeP0uwBpQ",
      html: "https://unsplash.com/photos/a-person-with-a-hat-on-their-head-in-a-field-PZfeP0uwBpQ",
      download: "https://unsplash.com/photos/PZfeP0uwBpQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/PZfeP0uwBpQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 2,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      people: {
        status: "rejected"
      },
      experimental: {
        status: "rejected"
      }
    },
    user: {
      id: "mWjiXj5vQuQ",
      updated_at: "2024-03-11T06:58:57Z",
      username: "chanwei_snap",
      name: "Chanwei",
      first_name: "Chanwei",
      last_name: null,
      twitter_username: null,
      portfolio_url: null,
      bio: `👋 Just a snap-happy amateur sharing my photos with you!\r
📍Instagram: @chanwei.snap\r
`,
      location: "Taipei, Taiwan",
      links: {
        self: "https://api.unsplash.com/users/chanwei_snap",
        html: "https://unsplash.com/@chanwei_snap",
        photos: "https://api.unsplash.com/users/chanwei_snap/photos",
        likes: "https://api.unsplash.com/users/chanwei_snap/likes",
        portfolio: "https://api.unsplash.com/users/chanwei_snap/portfolio",
        following: "https://api.unsplash.com/users/chanwei_snap/following",
        followers: "https://api.unsplash.com/users/chanwei_snap/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1705518610211-a929b876f4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1705518610211-a929b876f4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1705518610211-a929b876f4d5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "chanwei.snap",
      total_collections: 15,
      total_likes: 63,
      total_photos: 150,
      total_promoted_photos: 2,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "chanwei.snap",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "1JwHaWeSK9s",
    slug: "a-picture-of-some-white-flowers-on-a-white-background-1JwHaWeSK9s",
    alternative_slugs: {
      en: "a-picture-of-some-white-flowers-on-a-white-background-1JwHaWeSK9s"
    },
    created_at: "2024-03-10T11:33:51Z",
    updated_at: "2024-03-11T06:57:09Z",
    promoted_at: "2024-03-11T06:53:39Z",
    width: 3586,
    height: 3917,
    color: "#f3f3d9",
    blur_hash: "LIQ0T^j=_4%M%MxbM{M{_4jZITbH",
    description: "Title: Christmas eve Artist: Callowhill, James Publisher: L. Prang & Co. Name on Item: JC Date: [ca. 1861–1897] https://www.digitalcommonwealth.org/search/commonwealth:7w62f880r",
    alt_description: "a picture of some white flowers on a white background",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710069455079-2059d3cefe91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710069455079-2059d3cefe91"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-picture-of-some-white-flowers-on-a-white-background-1JwHaWeSK9s",
      html: "https://unsplash.com/photos/a-picture-of-some-white-flowers-on-a-white-background-1JwHaWeSK9s",
      download: "https://unsplash.com/photos/1JwHaWeSK9s/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/1JwHaWeSK9s/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE1fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 7,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "piFVWeoWxU8",
      updated_at: "2024-03-11T07:28:12Z",
      username: "bostonpubliclibrary",
      name: "Boston Public Library",
      first_name: "Boston",
      last_name: "Public Library",
      twitter_username: null,
      portfolio_url: "https://www.bpl.org/",
      bio: "Considered a pioneer of public library service in the United States, the Boston Public Library is among the three largest collections in the country and is committed to be ‘Free for All’.",
      location: "Boston, USA",
      links: {
        self: "https://api.unsplash.com/users/bostonpubliclibrary",
        html: "https://unsplash.com/@bostonpubliclibrary",
        photos: "https://api.unsplash.com/users/bostonpubliclibrary/photos",
        likes: "https://api.unsplash.com/users/bostonpubliclibrary/likes",
        portfolio: "https://api.unsplash.com/users/bostonpubliclibrary/portfolio",
        following: "https://api.unsplash.com/users/bostonpubliclibrary/following",
        followers: "https://api.unsplash.com/users/bostonpubliclibrary/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1579171056760-0293bb679901image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1579171056760-0293bb679901image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1579171056760-0293bb679901image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: null,
      total_collections: 6,
      total_likes: 0,
      total_photos: 510,
      total_promoted_photos: 62,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: null,
        portfolio_url: "https://www.bpl.org/",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "efzvMAIpfWY",
    slug: "a-couple-of-people-that-are-standing-in-the-dirt-efzvMAIpfWY",
    alternative_slugs: {
      en: "a-couple-of-people-that-are-standing-in-the-dirt-efzvMAIpfWY"
    },
    created_at: "2023-04-28T12:46:16Z",
    updated_at: "2024-03-11T09:48:19Z",
    promoted_at: null,
    width: 9504,
    height: 6336,
    color: "#c07359",
    blur_hash: "LELo7xNHxa~Bz:s9S4nO~VbwoLS~",
    description: "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
    alt_description: "a couple of people that are standing in the dirt",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682685797742-42c9987a2c34"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-couple-of-people-that-are-standing-in-the-dirt-efzvMAIpfWY",
      html: "https://unsplash.com/photos/a-couple-of-people-that-are-standing-in-the-dirt-efzvMAIpfWY",
      download: "https://unsplash.com/photos/efzvMAIpfWY/download?ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/efzvMAIpfWY/download?ixid=M3wxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 211,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515544&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515747&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
      ],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "j39-6Uto9QQ",
    slug: "a-forest-filled-with-lots-of-tall-trees-j39-6Uto9QQ",
    alternative_slugs: {
      en: "a-forest-filled-with-lots-of-tall-trees-j39-6Uto9QQ"
    },
    created_at: "2024-03-09T22:12:40Z",
    updated_at: "2024-03-11T07:57:13Z",
    promoted_at: "2024-03-11T06:51:56Z",
    width: 3759,
    height: 5639,
    color: "#26260c",
    blur_hash: "L79tDG?H4;IURu%MM{RP~oohIoIo",
    description: null,
    alt_description: "a forest filled with lots of tall trees",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710020339360-ce951881b835?ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710020339360-ce951881b835?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710020339360-ce951881b835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710020339360-ce951881b835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710020339360-ce951881b835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710020339360-ce951881b835"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-forest-filled-with-lots-of-tall-trees-j39-6Uto9QQ",
      html: "https://unsplash.com/photos/a-forest-filled-with-lots-of-tall-trees-j39-6Uto9QQ",
      download: "https://unsplash.com/photos/j39-6Uto9QQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/j39-6Uto9QQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE3fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 1,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "MarIhx6ztc0",
      updated_at: "2024-03-11T06:51:56Z",
      username: "brice_cooper18",
      name: "Brice Cooper",
      first_name: "Brice",
      last_name: "Cooper",
      twitter_username: null,
      portfolio_url: null,
      bio: "Always down for an adventure, capturing those adventures one photo at a time. Never stop exploring!",
      location: "Florida",
      links: {
        self: "https://api.unsplash.com/users/brice_cooper18",
        html: "https://unsplash.com/@brice_cooper18",
        photos: "https://api.unsplash.com/users/brice_cooper18/photos",
        likes: "https://api.unsplash.com/users/brice_cooper18/likes",
        portfolio: "https://api.unsplash.com/users/brice_cooper18/portfolio",
        following: "https://api.unsplash.com/users/brice_cooper18/following",
        followers: "https://api.unsplash.com/users/brice_cooper18/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1673045276376-91bb892b6e94image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1673045276376-91bb892b6e94image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1673045276376-91bb892b6e94image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "brice_cooper18",
      total_collections: 14,
      total_likes: 0,
      total_photos: 1467,
      total_promoted_photos: 51,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "brice_cooper18",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "oTE1p2Awp3I",
    slug: "a-couple-of-people-standing-on-top-of-a-cliff-next-to-the-ocean-oTE1p2Awp3I",
    alternative_slugs: {
      en: "a-couple-of-people-standing-on-top-of-a-cliff-next-to-the-ocean-oTE1p2Awp3I"
    },
    created_at: "2024-02-27T22:15:01Z",
    updated_at: "2024-03-11T06:51:52Z",
    promoted_at: "2024-03-11T06:51:52Z",
    width: 4e3,
    height: 5333,
    color: "#c0c0c0",
    blur_hash: "LLE:C[u5IooJ_N%gE1ax~ps8Vsoe",
    description: null,
    alt_description: "a couple of people standing on top of a cliff next to the ocean",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709071784840-cf3ecc434749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709071784840-cf3ecc434749"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-cliff-next-to-the-ocean-oTE1p2Awp3I",
      html: "https://unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-cliff-next-to-the-ocean-oTE1p2Awp3I",
      download: "https://unsplash.com/photos/oTE1p2Awp3I/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/oTE1p2Awp3I/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE4fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 8,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "khtnjqjzcq0",
      updated_at: "2024-03-11T06:51:53Z",
      username: "mitchorr",
      name: "Mitchell Orr",
      first_name: "Mitchell",
      last_name: "Orr",
      twitter_username: null,
      portfolio_url: "https://mitchorr.darkroom.tech/",
      bio: `If you feel you would like to support my work, any donations no matter how small, would be extremely helpful. \r
Thanks for looking!`,
      location: "Wirral",
      links: {
        self: "https://api.unsplash.com/users/mitchorr",
        html: "https://unsplash.com/@mitchorr",
        photos: "https://api.unsplash.com/users/mitchorr/photos",
        likes: "https://api.unsplash.com/users/mitchorr/likes",
        portfolio: "https://api.unsplash.com/users/mitchorr/portfolio",
        following: "https://api.unsplash.com/users/mitchorr/following",
        followers: "https://api.unsplash.com/users/mitchorr/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1687891061126-8858e815018fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1687891061126-8858e815018fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1687891061126-8858e815018fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "mitchorr1",
      total_collections: 0,
      total_likes: 41,
      total_photos: 358,
      total_promoted_photos: 118,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "mitchorr1",
        portfolio_url: "https://mitchorr.darkroom.tech/",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "ihmo0uRQ3jA",
    slug: "a-bed-sitting-in-a-bedroom-next-to-a-window-ihmo0uRQ3jA",
    alternative_slugs: {
      en: "a-bed-sitting-in-a-bedroom-next-to-a-window-ihmo0uRQ3jA"
    },
    created_at: "2024-02-24T20:00:04Z",
    updated_at: "2024-03-11T06:51:48Z",
    promoted_at: "2024-03-11T06:51:48Z",
    width: 4e3,
    height: 6e3,
    color: "#260c0c",
    blur_hash: "L78;b;?I4Xx?tcIUD+xt03oy-.M|",
    description: null,
    alt_description: "a bed sitting in a bedroom next to a window",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1708804309492-5ef3f3458c33"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-bed-sitting-in-a-bedroom-next-to-a-window-ihmo0uRQ3jA",
      html: "https://unsplash.com/photos/a-bed-sitting-in-a-bedroom-next-to-a-window-ihmo0uRQ3jA",
      download: "https://unsplash.com/photos/ihmo0uRQ3jA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/ihmo0uRQ3jA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDE5fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 20,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "Og5qBrDjufI",
      updated_at: "2024-03-11T06:51:49Z",
      username: "mariailves",
      name: "Maria Ilves",
      first_name: "Maria",
      last_name: "Ilves",
      twitter_username: null,
      portfolio_url: "http://www.mariailves.com",
      bio: null,
      location: "Ambleside",
      links: {
        self: "https://api.unsplash.com/users/mariailves",
        html: "https://unsplash.com/@mariailves",
        photos: "https://api.unsplash.com/users/mariailves/photos",
        likes: "https://api.unsplash.com/users/mariailves/likes",
        portfolio: "https://api.unsplash.com/users/mariailves/portfolio",
        following: "https://api.unsplash.com/users/mariailves/following",
        followers: "https://api.unsplash.com/users/mariailves/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1708802611867-ab4ff1564c8cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1708802611867-ab4ff1564c8cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1708802611867-ab4ff1564c8cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "mariailves_",
      total_collections: 0,
      total_likes: 0,
      total_photos: 38,
      total_promoted_photos: 4,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "mariailves_",
        portfolio_url: "http://www.mariailves.com",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "UvQtTVdFi9I",
    slug: "UvQtTVdFi9I",
    alternative_slugs: {
      en: "UvQtTVdFi9I"
    },
    created_at: "2016-08-12T16:12:25Z",
    updated_at: "2024-03-11T06:50:27Z",
    promoted_at: "2024-03-11T06:50:27Z",
    width: 3648,
    height: 5472,
    color: "#8ca673",
    blur_hash: "LGG9g4IAVax[.Zxus=kB9HtQ%LRj",
    description: null,
    alt_description: null,
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1471018289981-5d9f06e2bf45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1471018289981-5d9f06e2bf45"
    },
    links: {
      self: "https://api.unsplash.com/photos/UvQtTVdFi9I",
      html: "https://unsplash.com/photos/UvQtTVdFi9I",
      download: "https://unsplash.com/photos/UvQtTVdFi9I/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/UvQtTVdFi9I/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIwfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 60,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "dhG1THiRwtA",
      updated_at: "2024-03-11T06:50:28Z",
      username: "clarissemeyer",
      name: "Clarisse Meyer",
      first_name: "Clarisse",
      last_name: "Meyer",
      twitter_username: "claireymeyer",
      portfolio_url: "https://www.clarisserae.com",
      bio: `Photo | Video | Design - Southern California & Beyond\r
Instagram: @clarisse.rae`,
      location: "Orange County, CA",
      links: {
        self: "https://api.unsplash.com/users/clarissemeyer",
        html: "https://unsplash.com/@clarissemeyer",
        photos: "https://api.unsplash.com/users/clarissemeyer/photos",
        likes: "https://api.unsplash.com/users/clarissemeyer/likes",
        portfolio: "https://api.unsplash.com/users/clarissemeyer/portfolio",
        following: "https://api.unsplash.com/users/clarissemeyer/following",
        followers: "https://api.unsplash.com/users/clarissemeyer/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1470948329031-558b487bdf37?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1470948329031-558b487bdf37?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1470948329031-558b487bdf37?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "clarisse.rae",
      total_collections: 2,
      total_likes: 139,
      total_photos: 99,
      total_promoted_photos: 58,
      accepted_tos: !1,
      for_hire: !1,
      social: {
        instagram_username: "clarisse.rae",
        portfolio_url: "https://www.clarisserae.com",
        twitter_username: "claireymeyer",
        paypal_email: null
      }
    }
  },
  {
    id: "xQhP7RVgA3c",
    slug: "a-person-swimming-in-the-ocean-with-a-mountain-in-the-background-xQhP7RVgA3c",
    alternative_slugs: {
      en: "a-person-swimming-in-the-ocean-with-a-mountain-in-the-background-xQhP7RVgA3c"
    },
    created_at: "2024-02-07T22:34:15Z",
    updated_at: "2024-03-10T21:55:55Z",
    promoted_at: null,
    width: 7512,
    height: 5008,
    color: "#c0d9f3",
    blur_hash: "L?ENFxX9Rkaz.AR.WBjsx^a~oLa}",
    description: "NEOM is home to 2,000 different marine species, 600 of which are native to the Red Sea and cannot be found anywhere else in the world. | Islands of NEOM- NEOM, Saudi Arabia",
    alt_description: "a person swimming in the ocean with a mountain in the background",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1707343846292-56e4c6abf291"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-mountain-in-the-background-xQhP7RVgA3c",
      html: "https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-mountain-in-the-background-xQhP7RVgA3c",
      download: "https://unsplash.com/photos/xQhP7RVgA3c/download?ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/xQhP7RVgA3c/download?ixid=M3wxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 98,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "iswshBYbTBk",
    slug: "a-woman-riding-an-escalator-down-an-escalator-iswshBYbTBk",
    alternative_slugs: {
      en: "a-woman-riding-an-escalator-down-an-escalator-iswshBYbTBk"
    },
    created_at: "2024-02-27T19:26:10Z",
    updated_at: "2024-03-11T06:48:50Z",
    promoted_at: "2024-03-11T06:48:50Z",
    width: 3940,
    height: 2634,
    color: "#73a673",
    blur_hash: "LEDn~t%{y:WXDPVtH[jt8{o|VGk9",
    description: null,
    alt_description: "a woman riding an escalator down an escalator",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709061965707-9a89ffb23103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709061965707-9a89ffb23103"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-woman-riding-an-escalator-down-an-escalator-iswshBYbTBk",
      html: "https://unsplash.com/photos/a-woman-riding-an-escalator-down-an-escalator-iswshBYbTBk",
      download: "https://unsplash.com/photos/iswshBYbTBk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/iswshBYbTBk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 4,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      people: {
        status: "rejected"
      }
    },
    user: {
      id: "d-2o2yQwtxY",
      updated_at: "2024-03-11T06:48:59Z",
      username: "vitalymazur",
      name: "Vitalii Mazur",
      first_name: "Vitalii",
      last_name: "Mazur",
      twitter_username: "@madebyvitalii",
      portfolio_url: "https://www.behance.net/vitaliimazur",
      bio: `Life through photography 🌿 \r
Feel free to support me via PayPal (vitaly.mazur@icloud.com) if you like to use my shots. Also I'm available for a photoshoot in Toronto 📸🇨🇦`,
      location: "Toronto, Canada",
      links: {
        self: "https://api.unsplash.com/users/vitalymazur",
        html: "https://unsplash.com/@vitalymazur",
        photos: "https://api.unsplash.com/users/vitalymazur/photos",
        likes: "https://api.unsplash.com/users/vitalymazur/likes",
        portfolio: "https://api.unsplash.com/users/vitalymazur/portfolio",
        following: "https://api.unsplash.com/users/vitalymazur/following",
        followers: "https://api.unsplash.com/users/vitalymazur/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1708119387274-fad12c7d293b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1708119387274-fad12c7d293b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1708119387274-fad12c7d293b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "vitalymazur ",
      total_collections: 14,
      total_likes: 773,
      total_photos: 263,
      total_promoted_photos: 15,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "vitalymazur ",
        portfolio_url: "https://www.behance.net/vitaliimazur",
        twitter_username: "@madebyvitalii",
        paypal_email: null
      }
    }
  },
  {
    id: "uSNuKKh7wpA",
    slug: "a-picture-of-a-green-object-with-a-white-background-uSNuKKh7wpA",
    alternative_slugs: {
      en: "a-picture-of-a-green-object-with-a-white-background-uSNuKKh7wpA"
    },
    created_at: "2024-03-01T10:58:28Z",
    updated_at: "2024-03-11T06:48:07Z",
    promoted_at: "2024-03-11T06:48:07Z",
    width: 9600,
    height: 5400,
    color: "#d9d9d9",
    blur_hash: "LJLq]_WI_3%eo$xa?cRi~qobITM|",
    description: "Made in blender 4.0",
    alt_description: "a picture of a green object with a white background",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709290649154-54c725bd4484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709290649154-54c725bd4484"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-picture-of-a-green-object-with-a-white-background-uSNuKKh7wpA",
      html: "https://unsplash.com/photos/a-picture-of-a-green-object-with-a-white-background-uSNuKKh7wpA",
      download: "https://unsplash.com/photos/uSNuKKh7wpA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/uSNuKKh7wpA/download?ixid=M3wxMTc3M3wwfDF8YWxsfDIzfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 42,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "3d-renders": {
        status: "approved",
        approved_on: "2024-03-06T08:20:20Z"
      },
      experimental: {
        status: "approved",
        approved_on: "2024-03-06T07:38:30Z"
      }
    },
    user: {
      id: "5TCQxdaW0wE",
      updated_at: "2024-03-11T10:04:04Z",
      username: "theshubhamdhage",
      name: "Shubham Dhage",
      first_name: "Shubham",
      last_name: "Dhage",
      twitter_username: "theshubhamdhage",
      portfolio_url: "https://theshubhamdhage.com/",
      bio: "Creating things is my passion.",
      location: "Pune, India",
      links: {
        self: "https://api.unsplash.com/users/theshubhamdhage",
        html: "https://unsplash.com/@theshubhamdhage",
        photos: "https://api.unsplash.com/users/theshubhamdhage/photos",
        likes: "https://api.unsplash.com/users/theshubhamdhage/likes",
        portfolio: "https://api.unsplash.com/users/theshubhamdhage/portfolio",
        following: "https://api.unsplash.com/users/theshubhamdhage/following",
        followers: "https://api.unsplash.com/users/theshubhamdhage/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1702918491890-622aa47079a5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1702918491890-622aa47079a5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1702918491890-622aa47079a5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "theshubhamdhage",
      total_collections: 2,
      total_likes: 296,
      total_photos: 734,
      total_promoted_photos: 147,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "theshubhamdhage",
        portfolio_url: "https://theshubhamdhage.com/",
        twitter_username: "theshubhamdhage",
        paypal_email: null
      }
    }
  },
  {
    id: "7lN8MJPnlXs",
    slug: "a-close-up-of-a-pine-tree-with-lots-of-needles-7lN8MJPnlXs",
    alternative_slugs: {
      en: "a-close-up-of-a-pine-tree-with-lots-of-needles-7lN8MJPnlXs"
    },
    created_at: "2024-03-06T19:31:23Z",
    updated_at: "2024-03-11T06:47:23Z",
    promoted_at: "2024-03-11T06:47:23Z",
    width: 6720,
    height: 4480,
    color: "#26260c",
    blur_hash: "L05OKD},~lR7TJRj%d^$_0E49Is:",
    description: null,
    alt_description: "a close up of a pine tree with lots of needles",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709753422610-39ed7ddf9e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709753422610-39ed7ddf9e08"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-close-up-of-a-pine-tree-with-lots-of-needles-7lN8MJPnlXs",
      html: "https://unsplash.com/photos/a-close-up-of-a-pine-tree-with-lots-of-needles-7lN8MJPnlXs",
      download: "https://unsplash.com/photos/7lN8MJPnlXs/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/7lN8MJPnlXs/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI0fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 5,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "textures-patterns": {
        status: "approved",
        approved_on: "2024-03-11T06:47:18Z"
      }
    },
    user: {
      id: "gMFqynHNocY",
      updated_at: "2024-03-11T06:48:57Z",
      username: "blakecheekk",
      name: "Blake Cheek",
      first_name: "Blake",
      last_name: "Cheek",
      twitter_username: "blakecheekk",
      portfolio_url: "http://blakecheek.com",
      bio: "Photographer and Videographer. Lover of coffee and Jesus. ",
      location: "Atlanta, Ga",
      links: {
        self: "https://api.unsplash.com/users/blakecheekk",
        html: "https://unsplash.com/@blakecheekk",
        photos: "https://api.unsplash.com/users/blakecheekk/photos",
        likes: "https://api.unsplash.com/users/blakecheekk/likes",
        portfolio: "https://api.unsplash.com/users/blakecheekk/portfolio",
        following: "https://api.unsplash.com/users/blakecheekk/following",
        followers: "https://api.unsplash.com/users/blakecheekk/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1709746841716-156061dd4fe9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1709746841716-156061dd4fe9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1709746841716-156061dd4fe9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "blakecheekk",
      total_collections: 4,
      total_likes: 0,
      total_photos: 423,
      total_promoted_photos: 165,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "blakecheekk",
        portfolio_url: "http://blakecheek.com",
        twitter_username: "blakecheekk",
        paypal_email: null
      }
    }
  },
  {
    id: "Fw8vp9G6FtE",
    slug: "the-contents-of-a-backpack-laid-out-on-a-table-Fw8vp9G6FtE",
    alternative_slugs: {
      en: "the-contents-of-a-backpack-laid-out-on-a-table-Fw8vp9G6FtE"
    },
    created_at: "2024-03-10T00:43:31Z",
    updated_at: "2024-03-11T06:46:50Z",
    promoted_at: "2024-03-11T06:46:50Z",
    width: 6240,
    height: 4160,
    color: "#262626",
    blur_hash: "LIINNov{ae}=56I]eToaEmWC^iI;",
    description: null,
    alt_description: "the contents of a backpack laid out on a table",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710031407576-135a680d6e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710031407576-135a680d6e10"
    },
    links: {
      self: "https://api.unsplash.com/photos/the-contents-of-a-backpack-laid-out-on-a-table-Fw8vp9G6FtE",
      html: "https://unsplash.com/photos/the-contents-of-a-backpack-laid-out-on-a-table-Fw8vp9G6FtE",
      download: "https://unsplash.com/photos/Fw8vp9G6FtE/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/Fw8vp9G6FtE/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 4,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "UmKpkFAcSDE",
      updated_at: "2024-03-11T06:46:50Z",
      username: "taylorheeryphoto",
      name: "Taylor Heery",
      first_name: "Taylor",
      last_name: "Heery",
      twitter_username: "tahegri",
      portfolio_url: "http://www.taylorheery.com",
      bio: `VENMO: @taylorheeryphoto\r
Fujifilm fanatic.`,
      location: "Hendersonville, NC",
      links: {
        self: "https://api.unsplash.com/users/taylorheeryphoto",
        html: "https://unsplash.com/@taylorheeryphoto",
        photos: "https://api.unsplash.com/users/taylorheeryphoto/photos",
        likes: "https://api.unsplash.com/users/taylorheeryphoto/likes",
        portfolio: "https://api.unsplash.com/users/taylorheeryphoto/portfolio",
        following: "https://api.unsplash.com/users/taylorheeryphoto/following",
        followers: "https://api.unsplash.com/users/taylorheeryphoto/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1710031596049-549d947d2a3a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1710031596049-549d947d2a3a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1710031596049-549d947d2a3a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "taylorheeryphoto",
      total_collections: 0,
      total_likes: 107,
      total_photos: 520,
      total_promoted_photos: 209,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "taylorheeryphoto",
        portfolio_url: "http://www.taylorheery.com",
        twitter_username: "tahegri",
        paypal_email: null
      }
    }
  },
  {
    id: "e75CfMG0Sgo",
    slug: "a-person-with-a-backpack-looking-at-mountains-e75CfMG0Sgo",
    alternative_slugs: {
      en: "a-person-with-a-backpack-looking-at-mountains-e75CfMG0Sgo"
    },
    created_at: "2023-04-28T12:46:16Z",
    updated_at: "2024-03-10T11:50:20Z",
    promoted_at: null,
    width: 5429,
    height: 3619,
    color: "#a6c0d9",
    blur_hash: "LnHLYm%0IAi_?wn$ngj[OtRjs:f6",
    description: "Nature Reserve – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
    alt_description: "a person with a backpack looking at mountains",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1682685796002-e05458d61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682685796002-e05458d61f07"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-person-with-a-backpack-looking-at-mountains-e75CfMG0Sgo",
      html: "https://unsplash.com/photos/a-person-with-a-backpack-looking-at-mountains-e75CfMG0Sgo",
      download: "https://unsplash.com/photos/e75CfMG0Sgo/download?ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/e75CfMG0Sgo/download?ixid=M3wxMTc3M3wxfDF8YWxsfDI2fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 174,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515577&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515780&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
      ],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-11T08:54:08Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: !0,
        for_hire: !1,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2024-03-11T08:54:08Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 1,
      total_photos: 222,
      total_promoted_photos: 72,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
  {
    id: "jSjHcyHFOdQ",
    slug: "a-picture-of-a-green-plant-in-a-dark-room-jSjHcyHFOdQ",
    alternative_slugs: {
      en: "a-picture-of-a-green-plant-in-a-dark-room-jSjHcyHFOdQ"
    },
    created_at: "2024-02-08T15:36:25Z",
    updated_at: "2024-03-11T06:46:46Z",
    promoted_at: "2024-03-11T06:46:46Z",
    width: 8400,
    height: 5600,
    color: "#0c260c",
    blur_hash: "L44CLsVuD7pF.Po2R7R*-.oyX5My",
    description: null,
    alt_description: "a picture of a green plant in a dark room",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1707406543260-ed14bbd0d086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1707406543260-ed14bbd0d086"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-picture-of-a-green-plant-in-a-dark-room-jSjHcyHFOdQ",
      html: "https://unsplash.com/photos/a-picture-of-a-green-plant-in-a-dark-room-jSjHcyHFOdQ",
      download: "https://unsplash.com/photos/jSjHcyHFOdQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/jSjHcyHFOdQ/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI3fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 14,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "ogQykx6hk_c",
      updated_at: "2024-03-11T06:46:46Z",
      username: "pawel_czerwinski",
      name: "Pawel Czerwinski",
      first_name: "Pawel",
      last_name: "Czerwinski",
      twitter_username: "pm_cze",
      portfolio_url: "http://paypal.me/pmcze",
      bio: "Questions about how you can use the photos? help.unsplash.com/en/collections/1463188-unsplash-license 👍",
      location: "Poland",
      links: {
        self: "https://api.unsplash.com/users/pawel_czerwinski",
        html: "https://unsplash.com/@pawel_czerwinski",
        photos: "https://api.unsplash.com/users/pawel_czerwinski/photos",
        likes: "https://api.unsplash.com/users/pawel_czerwinski/likes",
        portfolio: "https://api.unsplash.com/users/pawel_czerwinski/portfolio",
        following: "https://api.unsplash.com/users/pawel_czerwinski/following",
        followers: "https://api.unsplash.com/users/pawel_czerwinski/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1592328433409-d9ce8a5333eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1592328433409-d9ce8a5333eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1592328433409-d9ce8a5333eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "pmcze",
      total_collections: 7,
      total_likes: 39154,
      total_photos: 2137,
      total_promoted_photos: 1760,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "pmcze",
        portfolio_url: "http://paypal.me/pmcze",
        twitter_username: "pm_cze",
        paypal_email: null
      }
    }
  },
  {
    id: "OfGHUYX0CCg",
    slug: "a-body-of-water-that-has-some-waves-on-it-OfGHUYX0CCg",
    alternative_slugs: {
      en: "a-body-of-water-that-has-some-waves-on-it-OfGHUYX0CCg"
    },
    created_at: "2024-03-06T14:06:51Z",
    updated_at: "2024-03-11T08:56:52Z",
    promoted_at: "2024-03-11T06:45:54Z",
    width: 8192,
    height: 5460,
    color: "#260c0c",
    blur_hash: "LUF{kg=cj@fQ}XxFS3azxFfjS2WW",
    description: null,
    alt_description: "a body of water that has some waves on it",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709733167477-25398ca709c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709733167477-25398ca709c0"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-body-of-water-that-has-some-waves-on-it-OfGHUYX0CCg",
      html: "https://unsplash.com/photos/a-body-of-water-that-has-some-waves-on-it-OfGHUYX0CCg",
      download: "https://unsplash.com/photos/OfGHUYX0CCg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/OfGHUYX0CCg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI4fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 16,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "earth-hour": {
        status: "approved",
        approved_on: "2024-03-07T09:43:45Z"
      }
    },
    user: {
      id: "uFFemR6e1vs",
      updated_at: "2024-03-11T06:48:56Z",
      username: "marcospradobr",
      name: "Marcos Paulo Prado",
      first_name: "Marcos Paulo",
      last_name: "Prado",
      twitter_username: null,
      portfolio_url: "https://www.instagram.com/eusoumarcosprado",
      bio: "People and commercial photographer based in Rio de Janeiro, Brasil",
      location: "Rio de Janeiro, Brazil",
      links: {
        self: "https://api.unsplash.com/users/marcospradobr",
        html: "https://unsplash.com/@marcospradobr",
        photos: "https://api.unsplash.com/users/marcospradobr/photos",
        likes: "https://api.unsplash.com/users/marcospradobr/likes",
        portfolio: "https://api.unsplash.com/users/marcospradobr/portfolio",
        following: "https://api.unsplash.com/users/marcospradobr/following",
        followers: "https://api.unsplash.com/users/marcospradobr/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1572910425876-25d44d080554image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1572910425876-25d44d080554image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1572910425876-25d44d080554image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "eusoumarcosprado",
      total_collections: 0,
      total_likes: 306,
      total_photos: 413,
      total_promoted_photos: 139,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "eusoumarcosprado",
        portfolio_url: "https://www.instagram.com/eusoumarcosprado",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "VKQpbzeWbrk",
    slug: "a-bouquet-of-orange-and-white-tulips-on-a-red-door-VKQpbzeWbrk",
    alternative_slugs: {
      en: "a-bouquet-of-orange-and-white-tulips-on-a-red-door-VKQpbzeWbrk"
    },
    created_at: "2024-03-09T21:24:04Z",
    updated_at: "2024-03-11T06:45:51Z",
    promoted_at: "2024-03-11T06:45:51Z",
    width: 2592,
    height: 3872,
    color: "#8c2626",
    blur_hash: "LFI2{Exr0gE}Dlo|=_W-5RE3O=xH",
    description: null,
    alt_description: "a bouquet of orange and white tulips on a red door",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1710018337941-58197591d55a?ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1710018337941-58197591d55a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1710018337941-58197591d55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1710018337941-58197591d55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1710018337941-58197591d55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710018337941-58197591d55a"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-bouquet-of-orange-and-white-tulips-on-a-red-door-VKQpbzeWbrk",
      html: "https://unsplash.com/photos/a-bouquet-of-orange-and-white-tulips-on-a-red-door-VKQpbzeWbrk",
      download: "https://unsplash.com/photos/VKQpbzeWbrk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/VKQpbzeWbrk/download?ixid=M3wxMTc3M3wwfDF8YWxsfDI5fHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 3,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "H8-Yyg-eX4A",
      updated_at: "2024-03-11T06:48:56Z",
      username: "jaelphotos",
      name: "Jael Coon",
      first_name: "Jael",
      last_name: "Coon",
      twitter_username: null,
      portfolio_url: "https://linktr.ee/jaelcoon",
      bio: "Coffee drinker, photographer, artist and chef/baker",
      location: "USA",
      links: {
        self: "https://api.unsplash.com/users/jaelphotos",
        html: "https://unsplash.com/@jaelphotos",
        photos: "https://api.unsplash.com/users/jaelphotos/photos",
        likes: "https://api.unsplash.com/users/jaelphotos/likes",
        portfolio: "https://api.unsplash.com/users/jaelphotos/portfolio",
        following: "https://api.unsplash.com/users/jaelphotos/following",
        followers: "https://api.unsplash.com/users/jaelphotos/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1693432710439-47b22b3f6a9eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1693432710439-47b22b3f6a9eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1693432710439-47b22b3f6a9eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "jaelcoon",
      total_collections: 51,
      total_likes: 0,
      total_photos: 230,
      total_promoted_photos: 3,
      accepted_tos: !0,
      for_hire: !1,
      social: {
        instagram_username: "jaelcoon",
        portfolio_url: "https://linktr.ee/jaelcoon",
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: "W6AqsLH6HOg",
    slug: "a-license-plate-on-the-back-of-a-car-W6AqsLH6HOg",
    alternative_slugs: {
      en: "a-license-plate-on-the-back-of-a-car-W6AqsLH6HOg"
    },
    created_at: "2024-03-06T06:59:15Z",
    updated_at: "2024-03-11T06:45:45Z",
    promoted_at: "2024-03-11T06:45:45Z",
    width: 6e3,
    height: 4e3,
    color: "#595959",
    blur_hash: "LYE_]gO?}qOsW--Ux]$%RPoeX9oz",
    description: null,
    alt_description: "a license plate on the back of a car",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1709708210553-490ba885fcf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709708210553-490ba885fcf6"
    },
    links: {
      self: "https://api.unsplash.com/photos/a-license-plate-on-the-back-of-a-car-W6AqsLH6HOg",
      html: "https://unsplash.com/photos/a-license-plate-on-the-back-of-a-car-W6AqsLH6HOg",
      download: "https://unsplash.com/photos/W6AqsLH6HOg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw",
      download_location: "https://api.unsplash.com/photos/W6AqsLH6HOg/download?ixid=M3wxMTc3M3wwfDF8YWxsfDMwfHx8fHx8Mnx8MTcxMDE1MzIwNXw"
    },
    likes: 3,
    liked_by_user: !1,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "VNV70zPYNto",
      updated_at: "2024-03-11T06:48:56Z",
      username: "venajeborec",
      name: "Václav Pechar",
      first_name: "Václav",
      last_name: "Pechar",
      twitter_username: null,
      portfolio_url: null,
      bio: `Photographer from South Bohemia ✌🏻\r
Be free to contact me to book a shoot 🙏🏻`,
      location: "Czech Republic - Písek",
      links: {
        self: "https://api.unsplash.com/users/venajeborec",
        html: "https://unsplash.com/@venajeborec",
        photos: "https://api.unsplash.com/users/venajeborec/photos",
        likes: "https://api.unsplash.com/users/venajeborec/likes",
        portfolio: "https://api.unsplash.com/users/venajeborec/portfolio",
        following: "https://api.unsplash.com/users/venajeborec/following",
        followers: "https://api.unsplash.com/users/venajeborec/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1687031143105-2420498da92eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1687031143105-2420498da92eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1687031143105-2420498da92eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "amazingvena",
      total_collections: 0,
      total_likes: 7,
      total_photos: 324,
      total_promoted_photos: 30,
      accepted_tos: !0,
      for_hire: !0,
      social: {
        instagram_username: "amazingvena",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null
      }
    }
  }
], TE = JE;
class CE {
  constructor() {
    jt(this, "photos", TE), jt(this, "PAGINATION", {}), jt(this, "REQUEST_IS_RUNNING", !1), jt(this, "SEARCH_IS_RUNNING", !1), jt(this, "LAST_REQUEST_URL", ""), jt(this, "ERROR", null), jt(this, "IS_LOADING", !1), jt(this, "currentPage", 1);
  }
  async fetchPhotos() {
    this.IS_LOADING = !0;
    const n = (this.currentPage - 1) * 30, t = this.currentPage * 30;
    return this.currentPage += 1, this.IS_LOADING = !1, this.photos.slice(n, t);
  }
  async fetchNextPage() {
    if (this.REQUEST_IS_RUNNING || this.SEARCH_IS_RUNNING)
      return null;
    const n = await this.fetchPhotos();
    return n.length > 0 ? n : null;
  }
  async searchPhotos(n) {
    this.SEARCH_IS_RUNNING = !0;
    const t = this.photos.filter(
      (a) => a.description && a.description.toLowerCase().includes(n.toLowerCase()) || a.alt_description && a.alt_description.toLowerCase().includes(n.toLowerCase())
    );
    return this.SEARCH_IS_RUNNING = !1, t;
  }
  searchIsRunning() {
    return this.SEARCH_IS_RUNNING;
  }
  triggerDownload(n) {
  }
}
class DE {
  constructor(n) {
    jt(this, "_provider"), this._provider = n;
  }
  async fetchPhotos() {
    return await this._provider.fetchPhotos();
  }
  async searchPhotos(n) {
    return await this._provider.searchPhotos(n);
  }
  async triggerDownload(n) {
    this._provider.triggerDownload(n);
  }
  async fetchNextPage() {
    return await this._provider.fetchNextPage() || null;
  }
  searchIsRunning() {
    return this._provider.searchIsRunning();
  }
}
class RE {
  constructor(n) {
    jt(this, "API_URL", "https://api.unsplash.com"), jt(this, "HEADERS"), jt(this, "ERROR", null), jt(this, "PAGINATION", {}), jt(this, "REQUEST_IS_RUNNING", !1), jt(this, "SEARCH_IS_RUNNING", !1), jt(this, "LAST_REQUEST_URL", ""), jt(this, "IS_LOADING", !1), this.HEADERS = n;
  }
  async makeRequest(n) {
    if (this.REQUEST_IS_RUNNING)
      return null;
    this.LAST_REQUEST_URL = n;
    const t = {
      method: "GET",
      headers: this.HEADERS
    };
    try {
      this.REQUEST_IS_RUNNING = !0, this.IS_LOADING = !0;
      const a = await fetch(n, t), s = await this.checkStatus(a);
      this.extractPagination(s);
      const l = await s.json();
      return "results" in l ? l.results : l;
    } catch (a) {
      return this.ERROR = a, null;
    } finally {
      this.REQUEST_IS_RUNNING = !1, this.IS_LOADING = !1;
    }
  }
  extractPagination(n) {
    let t = new RegExp('<(.*)>; rel="(.*)"'), a = [], s = {};
    for (let l of n.headers.entries())
      l[0] === "link" && a.push(l[1]);
    return a && a.toString().split(",").forEach((l) => {
      if (l) {
        let A = t.exec(l);
        A && (s[A[2]] = A[1]);
      }
    }), this.PAGINATION = s, n;
  }
  async fetchPhotos() {
    const n = `${this.API_URL}/photos?per_page=30`;
    return await this.makeRequest(n);
  }
  async fetchNextPage() {
    if (this.REQUEST_IS_RUNNING || this.SEARCH_IS_RUNNING)
      return null;
    if (this.PAGINATION.next) {
      const n = `${this.PAGINATION.next}`, t = await this.makeRequest(n);
      if (t)
        return t;
    }
    return null;
  }
  async searchPhotos(n) {
    const t = `${this.API_URL}/search/photos?query=${n}&per_page=30`;
    return await this.makeRequest(t) || [];
  }
  async triggerDownload(n) {
    n.links.download_location && await this.makeRequest(n.links.download_location);
  }
  async checkStatus(n) {
    if (n.status >= 200 && n.status < 300)
      return n;
    let t = "", a;
    const s = n.headers.get("content-type");
    if (s === "application/json")
      a = n.json().then((l) => l.errors[0]);
    else if (s === "text/xml")
      a = n.text();
    else
      throw new Error("Unsupported content type");
    return a.then((l) => {
      throw n.status === 403 && n.headers.get("x-ratelimit-remaining") === "0" && (t = "Unsplash API rate limit reached, please try again later."), t = t || l || `Error ${n.status}: Uh-oh! Trouble reaching the Unsplash API`, this.ERROR = t, new Error(t);
    });
  }
  searchIsRunning() {
    return this.SEARCH_IS_RUNNING;
  }
}
class jE {
  constructor(n, t) {
    jt(this, "photoUseCases"), jt(this, "masonryService"), jt(this, "photos", []), this.photoUseCases = n, this.masonryService = t;
  }
  async loadNew() {
    let n = await this.photoUseCases.fetchPhotos();
    this.photos = n, await this.layoutPhotos();
  }
  async layoutPhotos() {
    this.masonryService.reset(), this.photos.forEach((n) => {
      n.ratio = n.height / n.width, this.masonryService.addPhotoToColumns(n);
    });
  }
  getColumns() {
    return this.masonryService.getColumns();
  }
  async updateSearch(n) {
    let t = await this.photoUseCases.searchPhotos(n);
    this.photos = t, this.layoutPhotos();
  }
  async loadNextPage() {
    const n = await this.photoUseCases.fetchNextPage() || [];
    this.photos = [...this.photos, ...n], this.layoutPhotos();
  }
  clearPhotos() {
    this.photos = [];
  }
  triggerDownload(n) {
    this.photoUseCases.triggerDownload(n);
  }
  searchIsRunning() {
    return this.photoUseCases.searchIsRunning();
  }
}
const OE = ({ onClose: e, onImageInsert: n, unsplashProviderConfig: t }) => {
  const a = On(() => t ? new RE(t) : new CE(), [t]), s = On(() => new DE(a), [a]), l = On(() => new pE(3), []), A = On(() => new jE(s, l), [s, l]), f = Ct(null), [u, d] = ue(0), [h, m] = ue(0), [v, k] = ue(A.searchIsRunning() || !0), b = Ct(!1), [y, S] = ue(""), [T, Q] = ue(null), [B, K] = ue([]);
  At.useEffect(() => {
    f.current && T === null && h !== 0 && (f.current.scrollTop = h, m(0));
  }, [T, u, h]), At.useEffect(() => {
    const ae = (j) => {
      j.key === "Escape" && e();
    };
    return window.addEventListener("keydown", ae), () => {
      window.removeEventListener("keydown", ae);
    };
  }, [e]), At.useEffect(() => {
    const ae = f.current;
    if (!T)
      return ae && ae.addEventListener("scroll", () => {
        d(ae.scrollTop);
      }), () => {
        ae && ae.removeEventListener("scroll", () => {
          d(ae.scrollTop);
        });
      };
  }, [f, T]);
  const $ = At.useCallback(async () => {
    if (b.current === !1 || y.length === 0) {
      K([]), A.clearPhotos(), await A.loadNew();
      const ae = A.getColumns();
      K(ae || []), f.current && f.current.scrollTop !== 0 && (f.current.scrollTop = 0), k(!1);
    }
  }, [A, y]), Y = async (ae) => {
    const j = ae.target.value;
    j.length > 2 && (Q(null), S(j)), j.length === 0 && (S(""), b.current = !1, await $());
  }, V = At.useCallback(async () => {
    if (y) {
      k(!0), K([]), A.clearPhotos(), await A.updateSearch(y);
      const ae = A.getColumns();
      ae && K(ae), f.current && f.current.scrollTop !== 0 && (f.current.scrollTop = 0), k(!1);
    }
  }, [y, A]);
  At.useEffect(() => {
    const ae = setTimeout(async () => {
      y.length > 2 ? await V() : await $();
    }, 300);
    return () => {
      b.current = !0, clearTimeout(ae);
    };
  }, [y, V, $]);
  const re = At.useCallback(async () => {
    k(!0), await A.loadNextPage();
    const ae = A.getColumns();
    K(ae || []), k(!1);
  }, [A]);
  At.useEffect(() => {
    const ae = f.current;
    if (ae) {
      const j = async () => {
        T === null && ae.scrollTop + ae.clientHeight >= ae.scrollHeight - 1e3 && await re();
      };
      return ae.addEventListener("scroll", j), () => {
        ae.removeEventListener("scroll", j);
      };
    }
  }, [f, re, T]);
  const le = (ae) => {
    ae && (Q(ae), m(u)), ae === null && (Q(null), f.current && (f.current.scrollTop = h));
  };
  async function ne(ae) {
    ae.src && (A.triggerDownload(ae), n(ae));
  }
  return /* @__PURE__ */ Be.jsx(
    IE,
    {
      closeModal: e,
      handleSearch: Y,
      children: /* @__PURE__ */ Be.jsx(
        yE,
        {
          dataset: B,
          error: null,
          galleryRef: f,
          insertImage: ne,
          isLoading: v,
          selectImg: le,
          zoomed: T
        }
      )
    }
  );
}, QE = ({ unsplashProviderConfig: e, onClose: n, onImageInsert: t }) => /* @__PURE__ */ o.jsx(uE, { classNames: "admin-x-settings", children: /* @__PURE__ */ o.jsx(
  OE,
  {
    unsplashProviderConfig: e,
    onClose: n,
    onImageInsert: t
  }
) }), NE = ({ values: e, updateSetting: n }) => {
  const { mutateAsync: t } = Qs(), [a, s] = ue(e.description), { settings: l } = ct(), [A] = Et(l, ["unsplash"]), [f, u] = ue(!1), { unsplashConfig: d } = Tk(), h = dt(), m = Ct(
    Ki((k) => {
      n("description", k);
    }, 500)
  ), v = Ep();
  return /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(qi, { children: [
    /* @__PURE__ */ o.jsx(
      Re,
      {
        hint: "Used in your theme, meta data and search results",
        title: "Site description",
        value: a,
        onChange: (k) => {
          s(k.target.value), m.current(k.target.value);
        }
      },
      "site-description"
    ),
    /* @__PURE__ */ o.jsx(
      Li,
      {
        debounceMs: 200,
        direction: "rtl",
        title: /* @__PURE__ */ o.jsx(st, { className: "mt-[3px]", grey: !0, level: 6, children: "Accent color" }),
        value: e.accentColor,
        alwaysOpen: !0,
        onChange: (k) => n("accent_color", k)
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: `flex justify-between ${e.icon ? "items-start " : "items-end"}`, children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx(st, { grey: !!e.icon, level: 6, children: "Publication icon" }),
        /* @__PURE__ */ o.jsx(la, { className: "mr-5 max-w-[160px]", children: "A square, social icon, at least 60x60px" })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ o.jsx(
        Nr,
        {
          deleteButtonClassName: "!top-1 !right-1",
          editButtonClassName: "!top-1 !right-1",
          height: e.icon ? "66px" : "36px",
          id: "logo",
          imageBWCheckedBg: !0,
          imageURL: e.icon || "",
          width: e.icon ? "66px" : "150px",
          onDelete: () => n("icon", null),
          onUpload: async (k) => {
            try {
              n("icon", jr(await t({ file: k })));
            } catch (b) {
              h(b);
            }
          },
          children: "Upload icon"
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx(st, { className: "mb-2", grey: !!e.logo, level: 6, children: "Publication logo" }),
      /* @__PURE__ */ o.jsx(
        Nr,
        {
          deleteButtonClassName: "!top-1 !right-1",
          height: "80px",
          id: "site-logo",
          imageBWCheckedBg: !0,
          imageFit: "contain",
          imageURL: e.logo || "",
          onDelete: () => n("logo", null),
          onUpload: async (k) => {
            try {
              n("logo", jr(await t({ file: k })));
            } catch (b) {
              h(b);
            }
          },
          children: "Upload logo"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx(st, { className: "mb-2", grey: !!e.coverImage, level: 6, children: "Publication cover" }),
      /* @__PURE__ */ o.jsx(
        Nr,
        {
          deleteButtonClassName: "!top-1 !right-1",
          editButtonClassName: "!top-1 !right-10",
          height: "180px",
          id: "cover",
          imageURL: e.coverImage || "",
          openUnsplash: () => u(!0),
          pintura: {
            isEnabled: v.isEnabled,
            openEditor: async () => v.openEditor({
              image: e.coverImage || "",
              handleSave: async (k) => {
                try {
                  n("cover_image", jr(await t({ file: k })));
                } catch (b) {
                  h(b);
                }
              }
            })
          },
          unsplashButtonClassName: "!top-1 !right-1 z-50",
          unsplashEnabled: A,
          onDelete: () => n("cover_image", null),
          onUpload: async (k) => {
            try {
              n("cover_image", jr(await t({ file: k })));
            } catch (b) {
              h(b);
            }
          },
          children: "Upload cover"
        }
      ),
      f && d && A && /* @__PURE__ */ o.jsx(
        QE,
        {
          unsplashProviderConfig: d,
          onClose: () => {
            u(!1);
          },
          onImageInsert: (k) => {
            k.src && n("cover_image", k.src), u(!1);
          }
        }
      )
    ] })
  ] }) });
};
var sf = { exports: {} }, tm = { exports: {} };
(function(e, n) {
  //! mingo.js 2.5.3
  //! Copyright (c) 2020 Francis Asante
  //! MIT
  (function(t, a) {
    e.exports = a();
  })(Es, function() {
    function t(p) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(g) {
        return typeof g;
      } : t = function(g) {
        return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
      }, t(p);
    }
    function a(p, g) {
      if (!(p instanceof g))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(p, g) {
      for (var w = 0; w < g.length; w++) {
        var E = g[w];
        E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(p, E.key, E);
      }
    }
    function l(p, g, w) {
      return g && s(p.prototype, g), w && s(p, w), p;
    }
    function A(p, g) {
      return f(p) || u(p, g) || d(p, g) || m();
    }
    function f(p) {
      if (Array.isArray(p))
        return p;
    }
    function u(p, g) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(p)))) {
        var w = [], E = !0, C = !1, O = void 0;
        try {
          for (var z = p[Symbol.iterator](), X; !(E = (X = z.next()).done) && (w.push(X.value), !(g && w.length === g)); E = !0)
            ;
        } catch (fe) {
          C = !0, O = fe;
        } finally {
          try {
            !E && z.return != null && z.return();
          } finally {
            if (C)
              throw O;
          }
        }
        return w;
      }
    }
    function d(p, g) {
      if (p) {
        if (typeof p == "string")
          return h(p, g);
        var w = Object.prototype.toString.call(p).slice(8, -1);
        if (w === "Object" && p.constructor && (w = p.constructor.name), w === "Map" || w === "Set")
          return Array.from(w);
        if (w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))
          return h(p, g);
      }
    }
    function h(p, g) {
      (g == null || g > p.length) && (g = p.length);
      for (var w = 0, E = new Array(g); w < g; w++)
        E[w] = p[w];
      return E;
    }
    function m() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var v = "null", k = "undefined", b = "bool", y = "boolean", S = "number", T = "string", Q = "date", B = "regex", K = "regexp", $ = "array", Y = "object", V = "function", re = [v, k, y, S, T, Q, K], le = "expression", ne = "group", ae = "pipeline", j = "projection", _ = "query", F = function() {
    };
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
      value: function(g, w) {
        if (this == null)
          throw new TypeError('"this" is null or not defined');
        var E = Object(this), C = E.length >>> 0;
        if (C === 0)
          return !1;
        var O = w | 0, z = Math.max(O >= 0 ? O : C - Math.abs(O), 0);
        function X(fe, oe) {
          return fe === oe || typeof fe == "number" && typeof oe == "number" && isNaN(fe) && isNaN(oe);
        }
        for (; z < C; ) {
          if (X(E[z], g))
            return !0;
          z++;
        }
        return !1;
      }
    });
    var W = Array.prototype.push;
    function H(p, g) {
      p || xr(g);
    }
    function Z(p) {
      switch (G(p)) {
        case $:
          return p.map(Z);
        case Y:
          return Pr(p, Z);
        default:
          return p;
      }
    }
    function pe(p) {
      switch (G(p)) {
        case $:
          return un([], p);
        case Y:
          return Object.assign({}, p);
        default:
          return p;
      }
    }
    function Me(p) {
      return p === null ? "Null" : p === void 0 ? "Undefined" : p.constructor.name;
    }
    function G(p) {
      return Me(p).toLowerCase();
    }
    function Ie(p) {
      return G(p) === y;
    }
    function be(p) {
      return G(p) === T;
    }
    function Ee(p) {
      return G(p) === S;
    }
    var de = Array.isArray || function(p) {
      return !!p && p.constructor === Array;
    };
    function Ne(p) {
      return !!p && p.constructor === Object;
    }
    function Mt(p) {
      return p === Object(p);
    }
    function Xt(p) {
      return G(p) === Q;
    }
    function qe(p) {
      return G(p) === K;
    }
    function Le(p) {
      return G(p) === V;
    }
    function ee(p) {
      return p == null;
    }
    function Se(p) {
      return p === null;
    }
    function Qe(p) {
      return p === void 0;
    }
    function Xe(p, g) {
      return p.includes(g);
    }
    function xt(p, g) {
      return !Xe(p, g);
    }
    function Lt(p) {
      return !!p;
    }
    function Dt(p) {
      return ee(p) || de(p) && p.length === 0 || Ne(p) && rt(p).length === 0 || !p;
    }
    function tn(p) {
      return de(p) ? p : [p];
    }
    function Jt(p, g) {
      return p.hasOwnProperty(g);
    }
    function xr(p) {
      throw new Error(p);
    }
    var rt = Object.keys;
    function Pe(p, g, w) {
      if (g = g.bind(w), de(p))
        for (var E = 0, C = p.length; E < C && g(p[E], E, p) !== !1; E++)
          ;
      else
        for (var O in p)
          if (p.hasOwnProperty(O) && g(p[O], O, p) === !1)
            break;
    }
    function Pr(p, g, w) {
      g = g.bind(w);
      for (var E = {}, C = rt(p), O = 0; O < C.length; O++) {
        var z = C[O];
        E[z] = g(p[z], z);
      }
      return E;
    }
    function zr(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (p === F)
        return g;
      if (g === F)
        return p;
      var E = [p, g];
      if (!(E.every(Ne) || E.every(de)))
        throw Error("mismatched types. must both be array or object");
      if (w.flatten = w.flatten || !1, de(p))
        if (w.flatten) {
          for (var C = 0, O = 0; C < p.length && O < g.length; )
            p[C] = zr(p[C++], g[O++], w);
          for (; O < g.length; )
            p.push(g[O++]);
        } else
          W.apply(p, g);
      else
        Object.keys(g).forEach(function(z) {
          p.hasOwnProperty(z) ? p[z] = zr(p[z], g[z], w) : p[z] = g[z];
        });
      return p;
    }
    function nn(p, g, w) {
      return de(p) ? p.reduce(g, w) : (Pe(p, function(E, C) {
        return w = g(w, E, C, p);
      }), w);
    }
    function _n(p, g) {
      var w = g.map(Fn);
      return p.filter(function(E) {
        return Xe(w, Fn(E));
      });
    }
    function mA(p, g) {
      return un(un([], p), g.filter(xt.bind(null, p)));
    }
    function Yr(p) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, w = [];
      function E(C, O) {
        for (var z = 0, X = C.length; z < X; z++)
          de(C[z]) && (O > 0 || O < 0) ? E(C[z], Math.max(-1, O - 1)) : w.push(C[z]);
      }
      return E(p, g), w;
    }
    function Fr(p, g) {
      if (g < 1)
        return p;
      for (; g-- && de(p) && p.length === 1; )
        p = p[0];
      return p;
    }
    function sr(p, g) {
      for (var w = [p], E = [g]; w.length > 0; )
        if (p = w.pop(), g = E.pop(), p !== g) {
          var C = G(p);
          if (C !== G(g) || C === V)
            return !1;
          switch (C) {
            case $:
              if (p.length !== g.length)
                return !1;
              un(w, p), un(E, g);
              break;
            case Y:
              var O = rt(p), z = rt(g);
              if (O.length !== z.length)
                return !1;
              O.sort(), z.sort();
              for (var X = 0, fe = O.length; X < fe; X++) {
                var oe = O[X];
                if (oe !== z[X])
                  return !1;
                w.push(p[oe]), E.push(g[oe]);
              }
              break;
            default:
              if (ir(p) !== ir(g))
                return !1;
          }
        }
      return w.length === 0;
    }
    function ha(p) {
      var g = {}, w = [];
      return Pe(p, function(E) {
        var C = Fn(E);
        Jt(g, C) || (w.push(E), g[C] = 0);
      }), w;
    }
    function ir(p) {
      var g = G(p);
      switch (g) {
        case y:
        case S:
        case K:
          return p.toString();
        case T:
          return JSON.stringify(p);
        case Q:
          return p.toISOString();
        case v:
        case k:
          return g;
        case $:
          return "[" + p.map(ir) + "]";
        default:
          var w = g === Y ? "" : "".concat(Me(p)), E = rt(p);
          return E.sort(), "".concat(w, "{") + E.map(function(C) {
            return "".concat(ir(C), ":").concat(ir(p[C]));
          }) + "}";
      }
    }
    function Fn(p) {
      if (ee(p))
        return null;
      for (var g = 0, w = ir(p), E = w.length; E; )
        g = (g << 5) - g ^ w.charCodeAt(--E);
      return g >>> 0;
    }
    function pa(p, g) {
      return p < g ? -1 : p > g ? 1 : 0;
    }
    function za(p, g, w) {
      var E = [], C = [], O = {};
      if (w = w || pa, Dt(p))
        return p;
      for (var z = 0; z < p.length; z++) {
        var X = p[z], fe = g(X, z);
        ee(fe) ? C.push(X) : (O[fe] ? O[fe].push(X) : O[fe] = [X], E.push(fe));
      }
      E.sort(w);
      for (var oe = 0; oe < E.length; oe++)
        un(C, O[E[oe]]);
      return C;
    }
    function Ya(p, g) {
      var w = {
        keys: [],
        groups: []
      }, E = {};
      return Pe(p, function(C) {
        var O = g(C), z = Fn(O), X = -1;
        E[z] === void 0 && (X = w.keys.length, E[z] = X, w.keys.push(O), w.groups.push([])), X = E[z], w.groups[X].push(C);
      }), w;
    }
    function un(p, g) {
      return W.apply(p, g), p;
    }
    function zs(p, g) {
      for (var w = 0, E = p.length - 1; w <= E; ) {
        var C = Math.round(w + (E - w) / 2);
        if (g < p[C])
          E = C - 1;
        else if (g > p[C])
          w = C + 1;
        else
          return C;
      }
      return w;
    }
    function gA(p) {
      var g = this;
      return function(w) {
        return function() {
          for (var E = arguments.length, C = new Array(E), O = 0; O < E; O++)
            C[O] = arguments[O];
          var z = Fn(C);
          return Jt(w, z) || (w[z] = p.apply(g, C)), w[z];
        };
      }({
        /* storage */
      });
    }
    function Ys(p, g) {
      return Mt(p) ? p[g] : void 0;
    }
    function Qn(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, E = 0;
      w.meta = w.meta || !1;
      function C(O, z) {
        for (var X = O, fe = 0; fe < z.length; fe++) {
          var oe = z[fe], Ce = oe.match(/^\d+$/) === null;
          if (Ce && de(X)) {
            if (fe === 0 && E > 0)
              break;
            E += 1, z = z.slice(fe), X = nn(X, function(ve, at) {
              var Ge = C(at, z);
              return Ge !== void 0 && ve.push(Ge), ve;
            }, []);
            break;
          } else
            X = Ys(X, oe);
          if (X === void 0)
            break;
        }
        return X;
      }
      return p = Xe(re, G(p)) ? p : C(p, g.split(".")), w.meta ? {
        result: p,
        depth: E
      } : p;
    }
    function Zr(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      w.preserveMissingValues = w.preserveMissingValues || !1;
      var E = g.split("."), C = E[0], O = E.length === 1 || E.slice(1).join("."), z = C.match(/^\d+$/) !== null, X = E.length > 1, fe, oe;
      try {
        de(p) ? z ? (fe = Ys(p, Number(C)), X && (fe = Zr(fe, O, w)), fe = [fe]) : (fe = [], Pe(p, function(Ce) {
          oe = Zr(Ce, g, w), w.preserveMissingValues ? (oe === void 0 && (oe = F), fe.push(oe)) : oe !== void 0 && fe.push(oe);
        })) : (oe = Ys(p, C), X && (oe = Zr(oe, O, w)), H(oe !== void 0), fe = {}, fe[C] = oe);
      } catch {
        fe = void 0;
      }
      return fe;
    }
    function Fa(p) {
      if (de(p))
        for (var g = p.length - 1; g >= 0; g--)
          p[g] === F ? p.splice(g, 1) : Fa(p[g]);
      else if (Ne(p))
        for (var w in p)
          p.hasOwnProperty(w) && Fa(p[w]);
      return p;
    }
    function Fs(p, g, w) {
      var E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, C = g.split("."), O = C[0], z = C.length === 1 || C.slice(1).join(".");
      C.length === 1 ? w(p, O) : (E === !0 && ee(p[O]) && (p[O] = {}), Fs(p[O], z, w, E));
    }
    function Zs(p, g, w) {
      Fs(p, g, function(E, C) {
        E[C] = w;
      }, !0);
    }
    function Gs(p, g) {
      Fs(p, g, function(w, E) {
        de(w) && /^\d+$/.test(E) ? w.splice(parseInt(E), 1) : Ne(w) && delete w[E];
      });
    }
    function Ks(p) {
      return !!p && p[0] === "$";
    }
    function Xs(p) {
      if (Xe(re, G(p)))
        return qe(p) ? {
          $regex: p
        } : {
          $eq: p
        };
      if (Mt(p)) {
        var g = rt(p);
        if (!g.some(Ks))
          return {
            $eq: p
          };
        if (Xe(g, "$regex")) {
          var w = p.$regex, E = p.$options || "", C = "";
          be(w) && (C += w.ignoreCase || E.indexOf("i") >= 0 ? "i" : "", C += w.multiline || E.indexOf("m") >= 0 ? "m" : "", C += w.global || E.indexOf("g") >= 0 ? "g" : "", w = new RegExp(w, C)), p.$regex = w, delete p.$options;
        }
      }
      return p;
    }
    function Ws(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return ee(w) ? g < 0 ? (g = Math.max(0, p.length + g), w = p.length - g + 1) : (w = g, g = 0) : (g < 0 && (g = Math.max(0, p.length + g)), H(w > 0, "Invalid argument value for $slice operator. Limit must be a positive number"), w += g), p.slice(g, w);
    }
    function so(p, g) {
      var w = nn(p, function(z, X) {
        return z + X;
      }, 0), E = p.length || 1, C = g && 1 || 0, O = w / E;
      return Math.sqrt(nn(p, function(z, X) {
        return z + Math.pow(X - O, 2);
      }, 0) / (E - C));
    }
    function vA() {
      return {
        assert: H,
        clone: pe,
        cloneDeep: Z,
        each: Pe,
        err: xr,
        hashCode: Fn,
        getType: Me,
        has: Jt,
        includes: Xe.bind(null),
        isArray: de,
        isBoolean: Ie,
        isDate: Xt,
        isEmpty: Dt,
        isEqual: sr,
        isFunction: Le,
        isNil: ee,
        isNull: Se,
        isNumber: Ee,
        isObject: Ne,
        isRegExp: qe,
        isString: be,
        isUndefined: Qe,
        keys: rt,
        reduce: nn,
        resolve: Qn,
        resolveObj: Zr
      };
    }
    var Za = function() {
      return Object.assign({
        computeValue: ce,
        ops: Vs
      }, vA());
    }, io = {
      key: "_id"
    };
    function qs(p) {
      Object.assign(io, p || {});
    }
    var oo = {
      $$ROOT: function(g, w, E) {
        return E.root;
      },
      $$CURRENT: function(g, w, E) {
        return g;
      },
      $$REMOVE: function(g, w, E) {
      }
    }, lo = {
      $$KEEP: function(g) {
        return g;
      },
      $$PRUNE: function() {
      },
      $$DESCEND: function(g, w, E) {
        if (!Jt(w, "$cond"))
          return g;
        var C;
        return Pe(g, function(O, z) {
          Mt(O) && (de(O) ? (C = [], Pe(O, function(X) {
            Ne(X) && (X = Ka(X, w, E)), ee(X) || C.push(X);
          })) : C = Ka(O, w, E), ee(C) ? delete g[z] : g[z] = C);
        }), g;
      }
    }, Ao = rt(oo), co = rt(lo);
    function Gr() {
      return io.key;
    }
    function Vs() {
      var p = Array.prototype.slice.call(arguments);
      return nn(p, function(g, w) {
        return un(g, rt(Tt[w]));
      }, []);
    }
    function Ga(p, g, w) {
      if (Jt(Tt[ne], g))
        return Tt[ne][g](p, w);
      if (Ne(w)) {
        var E = {};
        return Pe(w, function(C, O) {
          if (E[O] = Ga(p, O, w[O]), Jt(Tt[ne], O))
            return E = E[O], H(rt(w).length === 1, "Invalid $group expression '" + JSON.stringify(w) + "'"), !1;
        }), E;
      }
    }
    function ce(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      if (E.root = E.root || p, Jt(Tt[le], w))
        return Tt[le][w](p, g, E);
      if (Jt(Tt[ne], w))
        return p = ce(p, g, null, E), H(de(p), w + " expression must resolve to an array"), Tt[ne][w](p, null, E);
      if (be(g) && g.length > 0 && g[0] === "$") {
        if (Xe(Ao, g))
          return oo[g](p, null, E);
        if (Xe(co, g))
          return g;
        var C = Ao.filter(function(z) {
          return g.indexOf(z + ".") === 0;
        });
        return C.length === 1 && (C = C[0], C === "$$ROOT" && (p = E.root), g = g.substr(C.length)), Qn(p, g.slice(1));
      }
      switch (G(g)) {
        case $:
          return g.map(function(z) {
            return ce(p, z);
          });
        case Y:
          var O = {};
          return Pe(g, function(z, X) {
            if (O[X] = ce(p, z, X, E), [le, ne].some(function(fe) {
              return Jt(Tt[fe], X);
            }))
              return H(rt(g).length === 1, "Invalid aggregation expression '" + JSON.stringify(g) + "'"), O = O[X], !1;
          }), O;
        default:
          return g;
      }
    }
    function Ka(p, g) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      w.root = w.root || p;
      var E = ce(p, g, null, w);
      return Xe(co, E) ? lo[E](p, g, w) : E;
    }
    function wA(p, g) {
      var w = ce(p, g);
      return w == null ? null : Math.abs(w);
    }
    function xA(p, g) {
      var w = ce(p, g), E = !1, C = nn(w, function(O, z) {
        return Xt(z) && (H(!E, "'$add' can only have one date value"), E = !0, z = z.getTime()), O += z, O;
      }, 0);
      return E ? new Date(C) : C;
    }
    function kA(p, g) {
      var w = ce(p, g);
      return ee(w) ? null : (H(Ee(w) || isNaN(w), "$ceil expression must resolve to a number."), Math.ceil(w));
    }
    function bA(p, g) {
      var w = ce(p, g);
      return w[0] / w[1];
    }
    function yA(p, g) {
      var w = ce(p, g);
      return ee(w) ? null : (H(Ee(w) || isNaN(w), "$exp expression must resolve to a number."), Math.exp(w));
    }
    function EA(p, g) {
      var w = ce(p, g);
      return ee(w) ? null : (H(Ee(w) || isNaN(w), "$floor expression must resolve to a number."), Math.floor(w));
    }
    function Xa(p, g) {
      var w = ce(p, g);
      return ee(w) ? null : (H(Ee(w) || isNaN(w), "$ln expression must resolve to a number."), Math.log(w));
    }
    function MA(p, g) {
      var w = ce(p, g), E = "$log expression must resolve to array(2) of numbers";
      return H(de(w) && w.length === 2, E), w.some(ee) ? null : (H(w.some(isNaN) || w.every(Ee), E), Math.log10(w[0]) / Math.log10(w[1]));
    }
    function Wa(p, g) {
      var w = ce(p, g);
      return ee(w) ? null : (H(Ee(w) || isNaN(w), "$log10 expression must resolve to a number."), Math.log10(w));
    }
    function SA(p, g) {
      var w = ce(p, g);
      return w[0] % w[1];
    }
    function IA(p, g) {
      var w = ce(p, g);
      return nn(w, function(E, C) {
        return E * C;
      }, 1);
    }
    function JA(p, g) {
      var w = ce(p, g);
      return H(de(w) && w.length === 2 && w.every(Ee), "$pow expression must resolve to array(2) of numbers"), H(!(w[0] === 0 && w[1] < 0), "$pow cannot raise 0 to a negative exponent"), Math.pow(w[0], w[1]);
    }
    function uo(p, g) {
      var w = ce(p, g), E = w[0], C = w[1];
      return ee(E) || isNaN(E) || Math.abs(E) === 1 / 0 ? E : (H(Ee(E), "$round expression must resolve to a number."), po(E, C, !0));
    }
    function fo(p, g) {
      var w = ce(p, g);
      return ee(w) ? null : (H(Ee(w) && w > 0 || isNaN(w), "$sqrt expression must resolve to non-negative number."), Math.sqrt(w));
    }
    function ho(p, g) {
      var w = ce(p, g);
      return w[0] - w[1];
    }
    function TA(p, g) {
      var w = ce(p, g), E = w[0], C = w[1];
      return ee(E) || isNaN(E) || Math.abs(E) === 1 / 0 ? E : (H(Ee(E), "$trunc expression must resolve to a number."), H(ee(C) || Ee(C) && C > -20 && C < 100, "$trunc expression has invalid place"), po(E, C, !1));
    }
    function po(p, g, w) {
      g = g || 0;
      var E = Math.abs(p) === p ? 1 : -1;
      p = Math.abs(p);
      var C = Math.trunc(p), O = p - C;
      if (g === 0) {
        var z = Math.trunc(10 * O);
        w && (C & 1) === 1 && z >= 5 && C++;
      } else if (g > 0) {
        var X = Math.pow(10, g), fe = Math.trunc(O * X), oe = Math.trunc(O * X * 10) % 10;
        w && oe > 5 && (fe += 1), C += fe / X;
      } else if (g < 0) {
        var Ce = Math.pow(10, -1 * g), ve = C % Ce;
        if (C = Math.max(0, C - ve), w && E === -1) {
          for (; ve > 10; )
            ve -= ve % 10;
          C > 0 && ve >= 5 && (C += Ce);
        }
      }
      return C * E;
    }
    function CA(p, g) {
      var w = ce(p, g);
      H(de(w) && w.length === 2, "$arrayElemAt expression must resolve to array(2)"), H(de(w[0]), "First operand to $arrayElemAt must resolve to an array"), H(Ee(w[1]), "Second operand to $arrayElemAt must resolve to an integer");
      var E = w[1];
      if (w = w[0], E < 0 && Math.abs(E) <= w.length)
        return w[E + w.length];
      if (E >= 0 && E < w.length)
        return w[E];
    }
    function DA(p, g) {
      var w = ce(p, g);
      return H(de(w), "$arrayToObject expression must resolve to an array"), nn(w, function(E, C) {
        return de(C) && C.length == 2 ? E[C[0]] = C[1] : (H(Ne(C) && Jt(C, "k") && Jt(C, "v"), "$arrayToObject expression is invalid."), E[C.k] = C.v), E;
      }, {});
    }
    function mo(p, g) {
      var w = ce(p, g, null);
      return H(de(w), "$concatArrays must resolve to an array"), w.some(ee) ? null : w.reduce(function(E, C) {
        return un(E, C);
      }, []);
    }
    function go(p, g) {
      var w = ce(p, g.input), E = g.as, C = g.cond;
      return H(de(w), "$filter 'input' expression must resolve to an array"), w.filter(function(O) {
        var z = {};
        return z["$" + E] = O, ce(z, C) === !0;
      });
    }
    function vo(p, g) {
      var w = ce(p, g[0]), E = ce(p, g[1]);
      return H(de(E), "$in second argument must be an array"), E.some(sr.bind(null, w));
    }
    function _s(p, g) {
      var w = ce(p, g);
      if (ee(w))
        return null;
      var E = w[0], C = w[1];
      if (ee(E))
        return null;
      H(de(E), "$indexOfArray expression must resolve to an array.");
      var O = w[2] || 0, z = w[3];
      return ee(z) && (z = E.length), O > z ? -1 : (H(O >= 0 && z >= 0, "$indexOfArray expression is invalid"), (O > 0 || z < E.length) && (E = E.slice(O, z)), E.findIndex(sr.bind(null, C)) + O);
    }
    function RA(p, g) {
      return de(ce(p, g[0]));
    }
    function wo(p, g) {
      var w = ce(p, g.input);
      H(de(w), "$map 'input' expression must resolve to an array");
      var E = g.as, C = g.in, O = "$" + E;
      return w.map(function(z) {
        return p[O] = z, ce(p, C);
      });
    }
    function qa(p, g) {
      var w = ce(p, g);
      H(Ne(w), "$objectToArray expression must resolve to an object");
      var E = [];
      return Pe(w, function(C, O) {
        return E.push({
          k: O,
          v: C
        });
      }), E;
    }
    function xo(p, g) {
      for (var w = ce(p, g), E = w[0], C = w[1], O = w[2] || 1, z = []; E < C && O > 0 || E > C && O < 0; )
        z.push(E), E += O;
      return z;
    }
    function jA(p, g) {
      var w = ce(p, g.input), E = ce(p, g.initialValue), C = g.in;
      return ee(w) ? null : (H(de(w), "$reduce 'input' expression must resolve to an array"), nn(w, function(O, z) {
        return ce({
          $value: O,
          $this: z
        }, C);
      }, E));
    }
    function ko(p, g) {
      var w = ce(p, g);
      if (ee(w))
        return null;
      H(de(w), "$reverseArray expression must resolve to an array");
      var E = [];
      return un(E, w), E.reverse(), E;
    }
    function bo(p, g) {
      var w = ce(p, g);
      return de(w) ? w.length : void 0;
    }
    function $s(p, g) {
      var w = ce(p, g);
      return Ws(w[0], w[1], w[2]);
    }
    function OA(p, g) {
      var w = ce(p, g.inputs), E = g.useLongestLength || !1;
      H(de(w), "'inputs' expression must resolve to an array"), H(Ie(E), "'useLongestLength' must be a boolean"), de(g.defaults) && H(Lt(E), "'useLongestLength' must be set to true to use 'defaults'");
      for (var C = 0, O = 0, z = w.length; O < z; O++) {
        var X = w[O];
        if (ee(X))
          return null;
        H(de(X), "'inputs' expression values must resolve to an array or null"), C = E ? Math.max(C, X.length) : Math.min(C || X.length, X.length);
      }
      for (var fe = [], oe = g.defaults || [], Ce = function(Ge) {
        var wt = w.map(function(Wt, Tn) {
          return ee(Wt[Ge]) ? oe[Tn] || null : Wt[Ge];
        });
        fe.push(wt);
      }, ve = 0; ve < C; ve++)
        Ce(ve);
      return fe;
    }
    function yo(p, g) {
      var w = ce(p, g);
      return de(w) ? nn(w, function(E, C) {
        return Object.assign(E, C);
      }, {}) : {};
    }
    function ei(p, g) {
      var w = ce(p, g);
      return Lt(w) && w.every(Lt);
    }
    function ti(p, g) {
      var w = ce(p, g);
      return Lt(w) && w.some(Lt);
    }
    function Kr(p, g) {
      return !ce(p, g[0]);
    }
    function pn(p) {
      return p instanceof _a ? p : new _a(p);
    }
    pn.isIterator = ni;
    function ni(p) {
      return !!p && t(p) === "object" && ri(p.next);
    }
    function ri(p) {
      return !!p && typeof p == "function";
    }
    function Eo(p, g) {
      var w = p.slice(g + 1);
      p.splice(g), Array.prototype.push.apply(p, w);
    }
    var Va = new Error(), ai = 1, si = 2, Mo = 3, So = 4;
    function QA(p, g, w) {
      var E = !1, C = -1, O = 0;
      return function(z) {
        z = z === w;
        try {
          e:
            for (; !E; ) {
              var X = p();
              C++;
              for (var fe = -1, oe = g.length, Ce = !1; ++fe < oe; ) {
                var ve = g[fe], at = ve.func, Ge = ve.type;
                switch (Ge) {
                  case ai:
                    X = at(X, C);
                    break;
                  case si:
                    if (!at(X, C))
                      continue e;
                    break;
                  case Mo:
                    --ve.func, ve.func || (Ce = !0);
                    break;
                  case So:
                    --ve.func, ve.func || Eo(g, fe);
                    continue e;
                  default:
                    break e;
                }
              }
              if (E = Ce, z)
                w[O++] = X;
              else
                return {
                  value: X,
                  done: !1
                };
            }
        } catch (wt) {
          if (wt !== Va)
            throw wt;
        }
        return E = !0, {
          done: !0
        };
      };
    }
    var _a = /* @__PURE__ */ function() {
      function p(g) {
        if (a(this, p), this.__iteratees = [], this.__first = !1, this.__done = !1, this.__buf = [], ri(g) && (g = {
          next: g
        }), ni(g)) {
          var w = g;
          g = function() {
            var X = w.next();
            if (X.done)
              throw Va;
            return X.value;
          };
        } else if (Array.isArray(g)) {
          var E = g, C = E.length, O = 0;
          g = function() {
            if (O < C)
              return E[O++];
            throw Va;
          };
        } else if (!ri(g))
          throw new Error("Source is not iterable. Must be Array, Function or Object{next:Function}");
        this.next = QA(g, this.__iteratees, this.__buf);
      }
      return l(p, [{
        key: "_validate",
        value: function() {
          if (this.__first)
            throw new Error("Cannot add iteratee/transform after `first()`");
        }
        /**
         * Add an iteratee to this lazy sequence
         * @param {Object} iteratee
         */
      }, {
        key: "_push",
        value: function(w) {
          return this._validate(), this.__iteratees.push(w), this;
        }
        // Iteratees methods
        /**
         * Transform each item in the sequence to a new value
         * @param {Function} f
         */
      }, {
        key: "map",
        value: function(w) {
          return this._push({
            type: ai,
            func: w
          });
        }
        /**
         * Select only items matching the given predicate
         * @param {Function} pred
         */
      }, {
        key: "filter",
        value: function(w) {
          return this._push({
            type: si,
            func: w
          });
        }
        /**
         * Take given numbe for values from sequence
         * @param {Number} n A number greater than 0
         */
      }, {
        key: "take",
        value: function(w) {
          return w > 0 ? this._push({
            type: Mo,
            func: w
          }) : this;
        }
        /**
         * Drop a number of values from the sequence
         * @param {Number} n Number of items to drop greater than 0
         */
      }, {
        key: "drop",
        value: function(w) {
          return w > 0 ? this._push({
            type: So,
            func: w
          }) : this;
        }
        // Transformations
        /**
         * Returns a new lazy object with results of the transformation
         * The entire sequence is realized.
         *
         * @param {Function} fn Tranform function of type (Array) => (Any)
         */
      }, {
        key: "transform",
        value: function(w) {
          this._validate();
          var E = this, C;
          return pn(function() {
            return C || (C = pn(w(E.value()))), C.next();
          });
        }
        /**
         * Mark this lazy object to return only the first result on `lazy.value()`.
         * No more iteratees or transformations can be added after this method is called.
         */
      }, {
        key: "first",
        value: function() {
          return this.take(1), this.__first = !0, this;
        }
        // Terminal methods
        /**
         * Returns the fully realized values of the iterators.
         * The return value will be an array unless `lazy.first()` was used.
         * The realized values are cached for subsequent calls
         */
      }, {
        key: "value",
        value: function() {
          return this.__done || (this.__done = this.next(this.__buf).done), this.__first ? this.__buf[0] : this.__buf;
        }
        /**
         * Execute the funcion for each value. Will stop when an execution returns false.
         * @param {Function} f
         * @returns {Boolean} false iff `f` return false for any execution, otherwise true
         */
      }, {
        key: "each",
        value: function(w) {
          for (; ; ) {
            var E = this.next();
            if (E.done)
              break;
            if (w(E.value) === !1)
              return !1;
          }
          return !0;
        }
        /**
         * Returns the reduction of sequence according the reducing function
         *
         * @param {*} f a reducing function
         * @param {*} init
         */
      }, {
        key: "reduce",
        value: function(w, E) {
          var C = this.next(), O = 0;
          for (E === void 0 && !C.done && (E = C.value, C = this.next(), O++); !C.done; )
            E = w(E, C.value, O++), C = this.next();
          return E;
        }
        /**
         * Returns the number of matched items in the sequence
         */
      }, {
        key: "size",
        value: function() {
          return this.reduce(function(w, E) {
            return ++w;
          }, 0);
        }
      }]), p;
    }();
    typeof Symbol == "function" && (_a.prototype[Symbol.iterator] = function() {
      return this;
    });
    var $a = /* @__PURE__ */ function() {
      function p(g, w) {
        a(this, p), this.__operators = g, this.__options = w;
      }
      return l(p, [{
        key: "stream",
        value: function(w, E) {
          var C = this;
          w = pn(w);
          var O = Tt[ae];
          return Dt(this.__operators) || Pe(this.__operators, function(z) {
            var X = rt(z);
            H(X.length === 1 && Xe(Vs(ae), X[0]), "invalid aggregation operator ".concat(X)), X = X[0], E && E instanceof Nn ? w = O[X].call(E, w, z[X], C.__options) : w = O[X](w, z[X], C.__options);
          }), w;
        }
        /**
         * Return the results of the aggregation as an array.
         * @param {*} collection
         * @param {*} query
         */
      }, {
        key: "run",
        value: function(w, E) {
          return this.stream(w, E).value();
        }
      }]), p;
    }();
    function Io(p, g, w) {
      return H(de(g), "Aggregation pipeline must be an array"), new $a(g, w).run(p);
    }
    var ii = /* @__PURE__ */ function() {
      function p(g, w, E) {
        a(this, p), this.__filterFn = w.test.bind(w), this.__query = w, this.__source = g, this.__projection = E || w.__projection, this.__operators = [], this.__result = null, this.__stack = [], this.__options = {};
      }
      return l(p, [{
        key: "_fetch",
        value: function() {
          return this.__result ? this.__result : (Ne(this.__projection) && this.__operators.push({
            $project: this.__projection
          }), this.__result = pn(this.__source).filter(this.__filterFn), this.__operators.length > 0 && (this.__result = new $a(this.__operators, this.__options).stream(this.__result, this.__query)), this.__result);
        }
        /**
         * Return remaining objects in the cursor as an array. This method exhausts the cursor
         * @returns {Array}
         */
      }, {
        key: "all",
        value: function() {
          return this._fetch().value();
        }
        /**
         * Returns the number of objects return in the cursor. This method exhausts the cursor
         * @returns {Number}
         */
      }, {
        key: "count",
        value: function() {
          return this.all().length;
        }
        /**
         * Returns a cursor that begins returning results only after passing or skipping a number of documents.
         * @param {Number} n the number of results to skip.
         * @return {Cursor} Returns the cursor, so you can chain this call.
         */
      }, {
        key: "skip",
        value: function(w) {
          return this.__operators.push({
            $skip: w
          }), this;
        }
        /**
         * Constrains the size of a cursor's result set.
         * @param {Number} n the number of results to limit to.
         * @return {Cursor} Returns the cursor, so you can chain this call.
         */
      }, {
        key: "limit",
        value: function(w) {
          return this.__operators.push({
            $limit: w
          }), this;
        }
        /**
         * Returns results ordered according to a sort specification.
         * @param {Object} modifier an object of key and values specifying the sort order. 1 for ascending and -1 for descending
         * @return {Cursor} Returns the cursor, so you can chain this call.
         */
      }, {
        key: "sort",
        value: function(w) {
          return this.__operators.push({
            $sort: w
          }), this;
        }
        /**
         * Specifies the collation for the cursor returned by the `mingo.Query.find`
         * @param {*} options
         */
      }, {
        key: "collation",
        value: function(w) {
          return this.__options.collation = w, this;
        }
        /**
         * Returns the next document in a cursor.
         * @returns {Object | Boolean}
         */
      }, {
        key: "next",
        value: function() {
          if (this.__stack) {
            if (this.__stack.length > 0)
              return this.__stack.pop();
            var w = this._fetch().next();
            if (!w.done)
              return w.value;
            this.__stack = null;
          }
        }
        /**
         * Returns true if the cursor has documents and can be iterated.
         * @returns {boolean}
         */
      }, {
        key: "hasNext",
        value: function() {
          if (!this.__stack)
            return !1;
          if (this.__stack.length > 0)
            return !0;
          var w = this._fetch().next();
          return w.done ? this.__stack = null : this.__stack.push(w.value), !!this.__stack;
        }
        /**
         * Applies a function to each document in a cursor and collects the return values in an array.
         * @param callback
         * @returns {Array}
         */
      }, {
        key: "map",
        value: function(w) {
          return this._fetch().map(w).value();
        }
        /**
         * Applies a JavaScript function for every document in a cursor.
         * @param callback
         */
      }, {
        key: "forEach",
        value: function(w) {
          this._fetch().each(w);
        }
      }]), p;
    }();
    typeof Symbol == "function" && (ii.prototype[Symbol.iterator] = function() {
      return this._fetch();
    });
    var Nn = /* @__PURE__ */ function() {
      function p(g, w) {
        a(this, p), this.__criteria = g, this.__projection = w || {}, this.__compiled = [], this._compile();
      }
      return l(p, [{
        key: "_compile",
        value: function() {
          var w = this;
          H(Ne(this.__criteria), "query criteria must be an object");
          var E;
          Pe(this.__criteria, function(C, O) {
            O === "$where" ? E = {
              field: O,
              expr: C
            } : O === "$expr" || Xe(["$and", "$or", "$nor"], O) ? w._processOperator(O, O, C) : (H(!Ks(O), "unknown top level operator: ".concat(O)), C = Xs(C), Pe(C, function(z, X) {
              w._processOperator(O, X, z);
            })), Ne(E) && w._processOperator(E.field, E.field, E.expr);
          });
        }
      }, {
        key: "_processOperator",
        value: function(w, E, C) {
          H(Jt(Tt[_], E), "invalid query operator ".concat(E, " detected")), this.__compiled.push(Tt[_][E](w, C));
        }
        /**
         * Checks if the object passes the query criteria. Returns true if so, false otherwise.
         * @param obj
         * @returns {boolean}
         */
      }, {
        key: "test",
        value: function(w) {
          for (var E = 0, C = this.__compiled.length; E < C; E++)
            if (!this.__compiled[E](w))
              return !1;
          return !0;
        }
        /**
         * Performs a query on a collection and returns a cursor object.
         * @param collection
         * @param projection
         * @returns {Cursor}
         */
      }, {
        key: "find",
        value: function(w, E) {
          return new ii(w, this, E);
        }
        /**
         * Remove matched documents from the collection returning the remainder
         * @param collection
         * @returns {Array}
         */
      }, {
        key: "remove",
        value: function(w) {
          var E = this;
          return nn(w, function(C, O) {
            return E.test(O) || C.push(O), C;
          }, []);
        }
      }]), p;
    }();
    function oi(p, g, w) {
      return new Nn(g).find(p, w);
    }
    function NA(p, g) {
      return new Nn(g).remove(p);
    }
    function li(p, g) {
      if (sr(p, g) || ee(p) && ee(g))
        return !0;
      if (de(p)) {
        var w = sr.bind(null, g);
        return p.some(w) || Yr(p, 1).some(w);
      }
      return !1;
    }
    function Jo(p, g) {
      return !li(p, g);
    }
    function To(p, g) {
      return ee(p) ? g.some(Se) : _n(tn(p), g).length > 0;
    }
    function Co(p, g) {
      return !To(p, g);
    }
    function kt(p, g) {
      return Xr(p, g, function(w, E) {
        return w < E;
      });
    }
    function gt(p, g) {
      return Xr(p, g, function(w, E) {
        return w <= E;
      });
    }
    function Do(p, g) {
      return Xr(p, g, function(w, E) {
        return w > E;
      });
    }
    function Ro(p, g) {
      return Xr(p, g, function(w, E) {
        return w >= E;
      });
    }
    function HA(p, g) {
      return tn(p).some(function(w) {
        return Ee(w) && de(g) && g.length === 2 && w % g[0] === g[1];
      });
    }
    function BA(p, g) {
      p = tn(p);
      var w = function(C) {
        return be(C) && !!C.match(g);
      };
      return p.some(w) || Yr(p, 1).some(w);
    }
    function UA(p, g) {
      return (g === !1 || g === 0) && p === void 0 || (g === !0 || g === 1) && p !== void 0;
    }
    function LA(p, g) {
      var w = !1;
      if (de(p) && de(g))
        for (var E = 0, C = g.length; E < C; E++)
          if (Ne(g[E]) && Xe(rt(g[E]), "$elemMatch"))
            w = w || Oo(p, g[E].$elemMatch);
          else
            return _n(g, p).length === C;
      return w;
    }
    function jo(p, g) {
      return de(p) && Ee(g) && p.length === g;
    }
    function Oo(p, g) {
      if (de(p) && !Dt(p)) {
        var w = function(fe) {
          return fe;
        }, E = g;
        rt(g).every(Ks) && (E = {
          temp: g
        }, w = function(fe) {
          return {
            temp: fe
          };
        });
        for (var C = new Nn(E), O = 0, z = p.length; O < z; O++)
          if (C.test(w(p[O])))
            return !0;
      }
      return !1;
    }
    function $t(p, g) {
      switch (g) {
        case 1:
        case "double":
          return Ee(p) && (p + "").indexOf(".") !== -1;
        case 2:
        case T:
          return be(p);
        case 3:
        case Y:
          return Ne(p);
        case 4:
        case $:
          return de(p);
        case 6:
        case k:
          return ee(p);
        case 8:
        case b:
          return Ie(p);
        case 9:
        case Q:
          return Xt(p);
        case 10:
        case v:
          return Se(p);
        case 11:
        case B:
          return qe(p);
        case 16:
        case "int":
          return Ee(p) && p <= 2147483647 && (p + "").indexOf(".") === -1;
        case 18:
        case "long":
          return Ee(p) && p > 2147483647 && p <= 9223372036854776e3 && (p + "").indexOf(".") === -1;
        case 19:
        case "decimal":
          return Ee(p);
        default:
          return !1;
      }
    }
    function Xr(p, g, w) {
      return tn(p).some(function(E) {
        return Me(E) === Me(g) && w(E, g);
      });
    }
    function mn(p) {
      return function(g, w) {
        var E = ce(g, w);
        return p(E[0], E[1]);
      };
    }
    var Qo = mn(li), Ai = mn(Jo), In = mn(Do), No = mn(kt), Ho = mn(Ro), Bo = mn(gt), Uo = mn(Co);
    function Lo(p, g) {
      var w = ce(p, g);
      return w[0] > w[1] ? 1 : w[0] < w[1] ? -1 : 0;
    }
    function Po(p, g) {
      var w, E, C, O = "$cond: invalid arguments";
      de(g) ? (H(g.length === 3, O), w = g[0], E = g[1], C = g[2]) : (H(Ne(g), O), w = g.if, E = g.then, C = g.else);
      var z = ce(p, w);
      return z ? ce(p, E) : ce(p, C);
    }
    function gn(p, g) {
      var w = "Invalid arguments for $switch operator";
      H(g.branches, w);
      var E = g.branches.find(function(C) {
        return H(C.case && C.then, w), ce(p, C.case);
      });
      return E ? ce(p, E.then) : (H(g.default, w), ce(p, g.default));
    }
    function PA(p, g) {
      H(de(g) && g.length === 2, "$ifNull expression must resolve to array(2)");
      var w = ce(p, g);
      return ee(w[0]) ? w[1] : w[0];
    }
    function vn(p, g) {
      var w = ce(p, g), E = new Date(w.getFullYear(), 0, 0), C = w - E, O = 1e3 * 60 * 60 * 24;
      return Math.round(C / O);
    }
    function zo(p, g) {
      var w = ce(p, g);
      return w.getDate();
    }
    function ci(p, g) {
      var w = ce(p, g);
      return w.getDay() + 1;
    }
    function $n(p, g) {
      var w = ce(p, g);
      return w.getFullYear();
    }
    function ma(p, g) {
      var w = ce(p, g);
      return w.getMonth() + 1;
    }
    function es(p, g) {
      var w = ce(p, g);
      w = /* @__PURE__ */ new Date(+w), w.setHours(0, 0, 0), w.setDate(w.getDate() + 4 - (w.getDay() || 7));
      var E = new Date(w.getFullYear(), 0, 1);
      return Math.floor(((w - E) / 864e5 + 1) / 7);
    }
    function bt(p, g) {
      var w = ce(p, g);
      return w.getUTCHours();
    }
    function er(p, g) {
      var w = ce(p, g);
      return w.getMinutes();
    }
    function ts(p, g) {
      var w = ce(p, g);
      return w.getSeconds();
    }
    function Yo(p, g) {
      var w = ce(p, g);
      return w.getMilliseconds();
    }
    var ui = {
      "%Y": [$n, 4],
      "%m": [ma, 2],
      "%d": [zo, 2],
      "%H": [bt, 2],
      "%M": [er, 2],
      "%S": [ts, 2],
      "%L": [Yo, 3],
      "%j": [vn, 3],
      "%w": [ci, 1],
      "%U": [es, 2],
      "%%": "%"
    };
    function zA(p, g) {
      for (var w = g.format, E = ce(p, g.date), C = w.match(/(%%|%Y|%m|%d|%H|%M|%S|%L|%j|%w|%U)/g), O = 0, z = C.length; O < z; O++) {
        var X = ui[C[O]], fe = X;
        if (de(X)) {
          var oe = X[0], Ce = X[1];
          fe = YA(oe(p, E), Ce);
        }
        w = w.replace(C[O], fe);
      }
      return w;
    }
    function YA(p, g) {
      return new Array(Math.max(g - String(p).length + 1, 0)).join("0") + p;
    }
    function FA(p, g) {
      return g;
    }
    function Fo(p, g) {
      var w = ce(p, g), E = ha(w[0]), C = ha(w[1]);
      return E.length === C.length && E.length === _n(E, C).length;
    }
    function ns(p, g) {
      var w = ce(p, g);
      return _n(w[0], w[1]);
    }
    function Wr(p, g) {
      var w = ce(p, g);
      return w[0].filter(xt.bind(null, w[1]));
    }
    function ZA(p, g) {
      var w = ce(p, g);
      return mA(w[0], w[1]);
    }
    function Zo(p, g) {
      var w = ce(p, g);
      return _n(w[0], w[1]).length === w[0].length;
    }
    function Go(p, g) {
      var w = ce(p, g)[0];
      return w.some(Lt);
    }
    function fi(p, g) {
      var w = ce(p, g)[0];
      return w.every(Lt);
    }
    function di(p, g) {
      var w = ce(p, g);
      return [null, void 0].some(Xe.bind(null, w)) ? null : w.join("");
    }
    function Ko(p, g) {
      var w = ce(p, g), E = "$indexOfBytes expression resolves to invalid an argument";
      if (ee(w[0]))
        return null;
      H(be(w[0]) && be(w[1]), E);
      var C = w[0], O = w[1], z = w[2], X = w[3], fe = ee(z) || Ee(z) && z >= 0 && Math.round(z) === z;
      if (fe = fe && (ee(X) || Ee(X) && X >= 0 && Math.round(X) === X), H(fe, E), z = z || 0, X = X || C.length, z > X)
        return -1;
      var oe = C.substring(z, X).indexOf(O);
      return oe > -1 ? oe + z : oe;
    }
    function GA(p, g) {
      var w = ce(p, g);
      return ee(w[0]) ? null : (H(w.every(be), "$split expression must result to array(2) of strings"), w[0].split(w[1]));
    }
    function hi(p, g) {
      return ~-encodeURI(ce(p, g)).split(/%..|./).length;
    }
    function pi(p, g) {
      return ce(p, g).length;
    }
    function KA(p, g) {
      var w = ce(p, g), E = w[0], C = w[1];
      return sr(E, C) || w.every(ee) ? 0 : (H(w.every(be), "$strcasecmp must resolve to array(2) of strings"), E = E.toUpperCase(), C = C.toUpperCase(), E > C && 1 || E < C && -1 || 0);
    }
    function Xo(p, g) {
      var w = ce(p, g), E = w[0], C = w[1], O = w[2];
      H(be(E) && Ee(C) && C >= 0 && Ee(O) && O >= 0, "$substrBytes: invalid arguments");
      for (var z = WA(E), X = [], fe = 0, oe = 0; oe < z.length; oe++)
        X.push(fe), fe += z[oe].length;
      var Ce = X.indexOf(C), ve = X.indexOf(C + O);
      return H(Ce > -1 && ve > -1, "$substrBytes: invalid range, start or end index is a UTF-8 continuation byte."), E.substring(Ce, ve);
    }
    function fn(p, g) {
      var w = ce(p, g), E = w[0], C = w[1], O = w[2];
      return be(E) ? C < 0 ? "" : O < 0 ? E.substr(C) : E.substr(C, O) : "";
    }
    function mi(p, g) {
      return fn(p, g);
    }
    function ga(p, g) {
      var w = ce(p, g);
      return Dt(w) ? "" : w.toLowerCase();
    }
    function Wo(p, g) {
      var w = ce(p, g);
      return Dt(w) ? "" : w.toUpperCase();
    }
    var qo = [192, 224, 240];
    function XA(p) {
      if (p < 128)
        return [p];
      for (var g = p < 2048 && 1 || p < 65536 && 2 || 3, w = qo[g - 1], E = [(p >> 6 * g) + w]; g > 0; )
        E.push(128 | p >> 6 * --g & 63);
      return E;
    }
    function WA(p) {
      for (var g = [], w = 0, E = p.length; w < E; w++)
        g.push(XA(p.codePointAt(w)));
      return g;
    }
    function qA(p, g) {
      var w = g.vars, E = g.in, C = rt(w);
      return Pe(C, function(O) {
        var z = ce(p, w[O]), X = "$" + O;
        p[X] = z;
      }), ce(p, E);
    }
    var VA = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $abs: wA,
      $add: xA,
      $ceil: kA,
      $divide: bA,
      $exp: yA,
      $floor: EA,
      $ln: Xa,
      $log: MA,
      $log10: Wa,
      $mod: SA,
      $multiply: IA,
      $pow: JA,
      $round: uo,
      $sqrt: fo,
      $subtract: ho,
      $trunc: TA,
      $arrayElemAt: CA,
      $arrayToObject: DA,
      $concatArrays: mo,
      $filter: go,
      $in: vo,
      $indexOfArray: _s,
      $isArray: RA,
      $map: wo,
      $objectToArray: qa,
      $range: xo,
      $reduce: jA,
      $reverseArray: ko,
      $size: bo,
      $slice: $s,
      $zip: OA,
      $mergeObjects: yo,
      $and: ei,
      $or: ti,
      $not: Kr,
      $eq: Qo,
      $ne: Ai,
      $gt: In,
      $lt: No,
      $gte: Ho,
      $lte: Bo,
      $nin: Uo,
      $cmp: Lo,
      $cond: Po,
      $switch: gn,
      $ifNull: PA,
      $dayOfYear: vn,
      $dayOfMonth: zo,
      $dayOfWeek: ci,
      $year: $n,
      $month: ma,
      $week: es,
      $hour: bt,
      $minute: er,
      $second: ts,
      $millisecond: Yo,
      $dateToString: zA,
      $literal: FA,
      $setEquals: Fo,
      $setIntersection: ns,
      $setDifference: Wr,
      $setUnion: ZA,
      $setIsSubset: Zo,
      $anyElementTrue: Go,
      $allElementsTrue: fi,
      $concat: di,
      $indexOfBytes: Ko,
      $split: GA,
      $strLenBytes: hi,
      $strLenCP: pi,
      $strcasecmp: KA,
      $substrBytes: Xo,
      $substr: fn,
      $substrCP: mi,
      $toLower: ga,
      $toUpper: Wo,
      $let: qA
    });
    function or(p, g) {
      return ee(g) ? p : p.map(function(w) {
        return ce(w, g);
      });
    }
    function qr(p, g) {
      return ha(or(p, g));
    }
    function _A(p, g) {
      var w = or(p, g).filter(Ee), E = nn(w, function(C, O) {
        return C + O;
      }, 0);
      return E / (w.length || 1);
    }
    function $A(p, g) {
      return p.length > 0 ? ce(p[0], g) : void 0;
    }
    function gi(p, g) {
      return p.length > 0 ? ce(p[p.length - 1], g) : void 0;
    }
    function Vo(p, g) {
      return nn(or(p, g), function(w, E) {
        return ee(w) || E > w ? E : w;
      }, void 0);
    }
    function lr(p, g) {
      return nn(p, function(w, E) {
        return Object.assign(w, ce(E, g));
      }, {});
    }
    function rs(p, g) {
      return nn(or(p, g), function(w, E) {
        return ee(w) || E < w ? E : w;
      }, void 0);
    }
    function ec(p, g) {
      return so(or(p, g).filter(Ee), !1);
    }
    function tc(p, g) {
      return so(or(p, g).filter(Ee), !0);
    }
    function nc(p, g) {
      return de(p) ? Ee(g) ? p.length * g : nn(or(p, g).filter(Ee), function(w, E) {
        return w + E;
      }, 0) : 0;
    }
    var Vr = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $addToSet: qr,
      $avg: _A,
      $first: $A,
      $last: gi,
      $max: Vo,
      $mergeObjects: lr,
      $min: rs,
      $push: or,
      $stdDevPop: ec,
      $stdDevSamp: tc,
      $sum: nc
    });
    function Jn(p, g, w) {
      var E = rt(g);
      return E.length === 0 ? p : p.map(function(C) {
        var O = Z(C);
        return Pe(E, function(z) {
          var X = ce(C, g[z]);
          Zs(O, z, X);
        }), O;
      });
    }
    var _o = Jn;
    function rc(p, g, w) {
      var E = g.boundaries, C = g.default, O = E[0], z = E[E.length - 1], X = g.output || {
        count: {
          $sum: 1
        }
      };
      H(E.length > 2, "$bucket 'boundaries' expression must have at least 3 elements");
      for (var fe = Me(O), oe = 0, Ce = E.length - 1; oe < Ce; oe++)
        H(fe === Me(E[oe + 1]), "$bucket 'boundaries' must all be of the same type"), H(E[oe] < E[oe + 1], "$bucket 'boundaries' must be sorted in ascending order");
      !ee(C) && Me(g.default) === Me(O) && H(O > g.default || z < g.default, "$bucket 'default' expression must be out of boundaries range");
      var ve = {};
      Pe(E, function(Ge) {
        return ve[Ge] = [];
      }), ee(C) || (ve[C] = []);
      var at = !1;
      return pn(function() {
        return at || (p.each(function(Ge) {
          var wt = ce(Ge, g.groupBy);
          if (ee(wt) || wt < O || wt >= z)
            H(!ee(C), "$bucket require a default for out of range values"), ve[C].push(Ge);
          else {
            H(wt >= O && wt < z, "$bucket 'groupBy' expression must resolve to a value in range of boundaries");
            var Wt = zs(E, wt), Tn = E[Math.max(0, Wt - 1)];
            ve[Tn].push(Ge);
          }
        }), E.pop(), ee(C) || E.push(C), at = pn(E).map(function(Ge) {
          var wt = Ga(ve[Ge], null, X);
          return Object.assign(wt, {
            _id: Ge
          });
        })), at.next();
      });
    }
    function ac(p, g, w) {
      var E = g.output || {
        count: {
          $sum: 1
        }
      }, C = g.groupBy, O = g.buckets;
      return H(O > 0, "The $bucketAuto 'buckets' field must be greater than 0, but found: " + O), p.transform(function(z) {
        for (var X = Math.max(1, Math.round(z.length / O)), fe = gA(ce), oe = {}, Ce = [], ve = za(z, function(xi) {
          var xa = fe(xi, C);
          return ee(xa) ? Ce.push(xi) : (oe[xa] || (oe[xa] = []), oe[xa].push(xi)), xa;
        }), at = Gr(), Ge = [], wt = 0, Wt = 0, Tn = ve.length; Wt < O && wt < Tn; Wt++) {
          for (var I = {}, Hn = [], wa = 0; wa < X && wt < Tn; wa++) {
            var qt = fe(ve[wt], C);
            if (ee(qt) && (qt = null), un(Hn, ee(qt) ? Ce : oe[qt]), wt += ee(qt) ? Ce.length : oe[qt].length, Jt(I, "min") || (I.min = qt), Ge.length > 0) {
              var Ke = Ge[Ge.length - 1];
              Ke[at].max = I.min;
            }
          }
          Wt == O - 1 && un(Hn, ve.slice(wt)), Ge.push(Object.assign(Ga(Hn, null, E), {
            _id: I
          }));
        }
        return Ge.length > 0 && (Ge[Ge.length - 1][at].max = fe(ve[ve.length - 1], C)), Ge;
      });
    }
    function sc(p, g, w) {
      return H(be(g) && g.trim() !== "" && g.indexOf(".") === -1 && g.trim()[0] !== "$", "Invalid expression value for $count"), pn(function() {
        var E = {};
        return E[g] = p.size(), {
          value: E,
          done: !1
        };
      }).first();
    }
    function ic(p, g, w) {
      return p.transform(function(E) {
        return [Pr(g, function(C) {
          return Io(E, C);
        })];
      });
    }
    function $o(p, g, w) {
      var E = Gr(), C = g[E];
      return p.transform(function(O) {
        var z = Ya(O, function(oe) {
          return ce(oe, C, C);
        });
        g = pe(g), delete g[E];
        var X = -1, fe = z.keys.length;
        return function() {
          if (++X === fe)
            return {
              done: !0
            };
          var oe = z.keys[X], Ce = {};
          return oe !== void 0 && (Ce[E] = oe), Pe(g, function(ve, at) {
            Ce[at] = Ga(z.groups[X], at, ve);
          }), {
            value: Ce,
            done: !1
          };
        };
      });
    }
    function _r(p, g, w) {
      return p.take(g);
    }
    function U(p, g, w) {
      var E = g.from, C = g.localField, O = g.foreignField, z = g.as;
      H(de(E) && be(O) && be(C) && be(z), "$lookup: invalid argument");
      var X = {};
      return Pe(E, function(fe) {
        var oe = Fn(Qn(fe, O));
        X[oe] = X[oe] || [], X[oe].push(fe);
      }), p.map(function(fe) {
        var oe = Fn(Qn(fe, C)), Ce = pe(fe);
        return Ce[z] = X[oe] || [], Ce;
      });
    }
    function te(p, g, w) {
      var E = new Nn(g);
      return p.filter(function(C) {
        return E.test(C);
      });
    }
    function q(p, g, w) {
      return H(de(g), "$out expression must be an array"), p.map(function(E) {
        return g.push(E), E;
      });
    }
    function we(p, g, w) {
      if (Dt(g))
        return p;
      var E = rt(g), C = !1, O = Gr();
      if (et(g), Xe(E, O)) {
        var z = g[O];
        (z === 0 || z === !1) && (E = E.filter(xt.bind(null, [O])), H(xt(E, O), "Must not contain collections id key"), C = Dt(E));
      } else
        E.push(O);
      return p.map(function(X) {
        return He(X, g, E, C);
      });
    }
    function He(p, g, w, E) {
      var C = Gr(), O = {}, z = !1, X = !1, fe = [];
      return E && fe.push(C), w.forEach(function(oe) {
        var Ce, ve = g[oe];
        if (oe !== C && Xe([0, !1], ve) && (X = !0), oe === C && Dt(ve))
          Ce = p[oe];
        else if (be(ve))
          Ce = ce(p, ve, oe);
        else if (!Xe([1, !0], ve))
          if (de(ve))
            Ce = ve.map(function(I) {
              var Hn = ce(p, I);
              return ee(Hn) ? null : Hn;
            });
          else if (Ne(ve)) {
            var at = rt(ve), Ge = at.length > 1 ? !1 : at[0];
            if (Xe(Vs(j), Ge)) {
              var wt = Tt[j];
              Ge === "$slice" ? tn(ve[Ge]).every(Ee) ? (Ce = wt[Ge](p, ve[Ge], oe), z = !0) : Ce = ce(p, ve, oe) : Ce = wt[Ge](p, ve[Ge], oe);
            } else if (Jt(p, oe)) {
              et(ve);
              var Wt = p[oe];
              Ce = de(Wt) ? Wt.map(function(I) {
                return He(I, ve, at, !1);
              }) : He(Wt, ve, at, !1);
            } else
              Ce = ce(p, ve, oe);
          } else {
            fe.push(oe);
            return;
          }
        var Tn = Zr(p, oe, {
          preserveMissingValues: !0
        });
        Tn !== void 0 && zr(O, Tn, {
          flatten: !0
        }), xt([0, 1, !1, !0], ve) && (Ce === void 0 ? Gs(O, oe) : Zs(O, oe, Ce));
      }), Fa(O), (z || X || E) && (O = Object.assign({}, p, O), fe.length > 0 && (O = Z(O), Pe(fe, function(oe) {
        return Gs(O, oe);
      }))), O;
    }
    function et(p) {
      var g = Gr(), w = [!1, !1];
      Pe(p, function(E, C) {
        C !== g && (E === 0 || E === !1 ? w[0] = !0 : (E === 1 || E === !0) && (w[1] = !0), H(!(w[0] && w[1]), "Projection cannot have a mix of inclusion and exclusion."));
      });
    }
    function Pt(p, g, w) {
      return p.map(function(E) {
        return Ka(Z(E), g);
      });
    }
    function vt(p, g, w) {
      return p.map(function(E) {
        return E = ce(E, g.newRoot), H(Ne(E), "$replaceRoot expression must return an object"), E;
      });
    }
    function vi(p, g, w) {
      var E = g.size;
      return H(Ee(E), "$sample size must be a positive integer"), p.transform(function(C) {
        var O = C.length, z = -1;
        return function() {
          if (++z === E)
            return {
              done: !0
            };
          var X = Math.floor(Math.random() * O);
          return {
            value: C[X],
            done: !1
          };
        };
      });
    }
    function oc(p, g, w) {
      return p.drop(g);
    }
    function wn(p, g, w) {
      if (Dt(g) || !Ne(g))
        return p;
      w = w || {};
      var E = pa, C = w.collation;
      return Ne(C) && be(C.locale) && (E = lc(C)), p.transform(function(O) {
        var z = rt(g);
        return Pe(z.reverse(), function(X) {
          var fe = Ya(O, function(ve) {
            return Qn(ve, X);
          }), oe = {}, Ce = za(fe.keys, function(ve, at) {
            return oe[ve] = at, ve;
          }, E);
          g[X] === -1 && Ce.reverse(), O = [], Pe(Ce, function(ve) {
            return un(O, fe.groups[oe[ve]]);
          });
        }), O;
      });
    }
    var as = {
      // Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.
      1: "base",
      //  Only strings that differ in base letters or accents and other diacritic marks compare as unequal.
      // Examples: a ≠ b, a ≠ á, a = A.
      2: "accent",
      // Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal.
      // Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A
      3: "variant"
      // case - Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.
    };
    function lc(p) {
      var g = {
        sensitivity: as[p.strength || 3],
        caseFirst: p.caseFirst === "off" ? "false" : p.caseFirst || "false",
        numeric: p.numericOrdering || !1,
        ignorePunctuation: p.alternate === "shifted"
      };
      (p.caseLevel || !1) === !0 && (g.sensitivity === "base" && (g.sensitivity = "case"), g.sensitivity === "accent" && (g.sensitivity = "variant"));
      var w = new Intl.Collator(p.locale, g);
      return function(E, C) {
        if (!be(E) || !be(C))
          return pa(E, C);
        var O = w.compare(E, C);
        return O < 0 ? -1 : O > 0 ? 1 : 0;
      };
    }
    function $r(p, g, w) {
      var E = {
        count: {
          $sum: 1
        }
      };
      return E[Gr()] = g, wn($o(p, E), {
        count: -1
      }, w);
    }
    function ss(p, g, w) {
      be(g) && (g = {
        path: g
      });
      var E = g.path.substr(1), C = g.includeArrayIndex || !1, O = g.preserveNullAndEmptyArrays || !1, z = function(oe, Ce) {
        return C !== !1 && (oe[C] = Ce), oe;
      }, X;
      return pn(function() {
        for (var fe = function() {
          if (pn.isIterator(X)) {
            var ve = X.next();
            if (!ve.done)
              return {
                v: ve
              };
          }
          var at = p.next();
          if (at.done)
            return {
              v: at
            };
          if (at = at.value, X = Qn(at, E), de(X))
            if (X.length === 0 && O === !0) {
              X = null;
              var Ge = Z(at);
              return Gs(Ge, E), {
                v: {
                  value: z(Ge, null),
                  done: !1
                }
              };
            } else
              X = pn(X).map(function(Wt, Tn) {
                var I = Z(at);
                return Zs(I, E, Wt), z(I, Tn);
              });
          else if (!Dt(X) || O === !0) {
            var wt = Z(at);
            return {
              v: {
                value: z(wt, null),
                done: !1
              }
            };
          }
        }; ; ) {
          var oe = fe();
          if (t(oe) === "object")
            return oe.v;
        }
      });
    }
    var is = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $addFields: Jn,
      $set: _o,
      $bucket: rc,
      $bucketAuto: ac,
      $count: sc,
      $facet: ic,
      $group: $o,
      $limit: _r,
      $lookup: U,
      $match: te,
      $out: q,
      $project: we,
      $redact: Pt,
      $replaceRoot: vt,
      $sample: vi,
      $skip: oc,
      $sort: wn,
      $sortByCount: $r,
      $unwind: ss
    });
    function ut(p, g, w) {
      xr("$ not implemented");
    }
    function Ac(p, g, w) {
      var E = Qn(p, w), C = new Nn(g);
      H(de(E), "$elemMatch: invalid argument");
      for (var O = 0; O < E.length; O++)
        if (C.test(E[O]))
          return [E[O]];
    }
    function el(p, g, w) {
      var E = Qn(p, w);
      return de(E) ? de(g) ? Ws(E, g[0], g[1]) : (H(Ee(g), "$slice: invalid arguments for projection"), Ws(E, g)) : E;
    }
    var os = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: ut,
      $elemMatch: Ac,
      $slice: el
    });
    function on(p) {
      return function(g, w) {
        return function(E) {
          var C = Qn(E, g, {
            meta: !0
          });
          return C = Fr(C.result, C.depth), p(C, w);
        };
      };
    }
    var cc = on(LA), uc = on(Oo), ls = on(li), Ar = on(UA), As = on(Do), tl = on(Ro), cs = on(To), nl = on(kt), rl = on(gt), us = on(HA), al = on(Jo), va = on(Co), kr = on(BA), fs = on(jo), fc = on($t);
    function dc(p, g) {
      H(de(g), "Invalid expression: $and expects value to be an Array");
      var w = [];
      return Pe(g, function(E) {
        return w.push(new Nn(E));
      }), function(E) {
        for (var C = 0; C < w.length; C++)
          if (!w[C].test(E))
            return !1;
        return !0;
      };
    }
    function sl(p, g) {
      H(de(g), "Invalid expression. $or expects value to be an Array");
      var w = [];
      return Pe(g, function(E) {
        return w.push(new Nn(E));
      }), function(E) {
        for (var C = 0; C < w.length; C++)
          if (w[C].test(E))
            return !0;
        return !1;
      };
    }
    function ds(p, g) {
      H(de(g), "Invalid expression. $nor expects value to be an Array");
      var w = sl("$or", g);
      return function(E) {
        return !w(E);
      };
    }
    function hs(p, g) {
      var w = {};
      w[p] = Xs(g);
      var E = new Nn(w);
      return function(C) {
        return !E.test(C);
      };
    }
    function wi(p, g) {
      return Le(g) || (g = new Function("return " + g + ";")), function(w) {
        return g.call(w) === !0;
      };
    }
    function hc(p, g) {
      return function(w) {
        return ce(w, g);
      };
    }
    var il = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $all: cc,
      $elemMatch: uc,
      $eq: ls,
      $exists: Ar,
      $gt: As,
      $gte: tl,
      $in: cs,
      $lt: nl,
      $lte: rl,
      $mod: us,
      $ne: al,
      $nin: va,
      $regex: kr,
      $size: fs,
      $type: fc,
      $and: dc,
      $or: sl,
      $nor: ds,
      $not: hs,
      $where: wi,
      $expr: hc
    }), Tt = {};
    Tt[le] = {}, Tt[ne] = {}, Tt[ae] = {}, Tt[j] = {}, Tt[_] = {};
    var pc = [[le, VA], [ne, Vr], [ae, is], [j, os], [_, il]];
    function zt() {
      Pe(pc, function(p) {
        var g = A(p, 2), w = g[0], E = g[1];
        Object.assign(Tt[w], E);
      });
    }
    function rn(p, g) {
      var w = g(Za());
      H(Jt(Tt, p), "Invalid operator class ".concat(p));
      var E = Tt[p];
      Pe(w, function(O, z) {
        H(/^\$[a-zA-Z0-9_]*$/.test(z), "Invalid operator name ".concat(z)), H(!Jt(E, z), "".concat(z, " already exists for '").concat(p, "' operators"));
      });
      var C = {};
      switch (p) {
        case _:
          Pe(w, function(O, z) {
            O = O.bind(w), C[z] = function(X, fe) {
              return function(oe) {
                var Ce = Qn(oe, X), ve = O(X, Ce, fe);
                return H(Ie(ve), "".concat(z, " must return a boolean")), ve;
              };
            };
          });
          break;
        case j:
          Pe(w, function(O, z) {
            O = O.bind(w), C[z] = function(X, fe, oe) {
              var Ce = Qn(X, oe);
              return O(oe, Ce, fe);
            };
          });
          break;
        default:
          Pe(w, function(O, z) {
            C[z] = function() {
              for (var X = arguments.length, fe = new Array(X), oe = 0; oe < X; oe++)
                fe[oe] = arguments[oe];
              return O.apply(w, fe);
            };
          });
      }
      Object.assign(Tt[p], C);
    }
    var mc = {
      /**
       * Runs a query and returns a cursor to the result
       * @param criteria
       * @param projection
       * @returns {Cursor}
       */
      query: function(g, w) {
        return new Nn(g).find(this.toJSON(), w);
      },
      /**
       * Runs the given aggregation operators on this collection
       * @params pipeline
       * @returns {Array}
       */
      aggregate: function(g) {
        return new $a(g).run(this.toJSON());
      }
    };
    zt();
    var gc = "2.5.3", ol = {
      _internal: Za,
      Aggregator: $a,
      CollectionMixin: mc,
      Cursor: ii,
      Lazy: pn,
      OP_EXPRESSION: le,
      OP_GROUP: ne,
      OP_PIPELINE: ae,
      OP_PROJECTION: j,
      OP_QUERY: _,
      Query: Nn,
      VERSION: gc,
      addOperators: rn,
      aggregate: Io,
      find: oi,
      remove: NA,
      setup: qs
    };
    return ol;
  });
})(tm);
var HE = tm.exports, of = {};
function BE(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zl = { exports: {} }, Yh = {};
zl.exports;
(function(e, n) {
  var t = function() {
    var a = function(ae, j, _, F) {
      for (_ = _ || {}, F = ae.length; F--; _[ae[F]] = j)
        ;
      return _;
    }, s = [1, 5], l = [1, 7], A = [1, 8], f = [1, 6, 10], u = [1, 9], d = [1, 6, 8, 10], h = [1, 24], m = [1, 25], v = [1, 26], k = [1, 27], b = [1, 28], y = [1, 29], S = [1, 30], T = [1, 17], Q = [1, 18], B = [1, 19], K = [21, 22, 23, 24, 25, 29, 30], $ = [1, 6, 8, 10, 18], Y = [1, 47], V = [6, 18], re = {
      trace: function() {
      },
      yy: {},
      symbols_: { error: 2, expressions: 3, expression: 4, andCondition: 5, OR: 6, filterExpr: 7, AND: 8, LPAREN: 9, RPAREN: 10, propExpr: 11, valueExpr: 12, PROP: 13, NOT: 14, REGEXPOP: 15, LBRACKET: 16, inExpr: 17, RBRACKET: 18, OP: 19, VALUE: 20, NULL: 21, TRUE: 22, FALSE: 23, NUMBER: 24, NOW: 25, DATEOP: 26, AMOUNT: 27, INTERVAL: 28, LITERAL: 29, STRING: 30, ADD: 31, SUB: 32, CONTAINS: 33, STARTSWITH: 34, ENDSWITH: 35, GT: 36, LT: 37, GTE: 38, LTE: 39, $accept: 0, $end: 1 },
      terminals_: { 2: "error", 6: "OR", 8: "AND", 9: "LPAREN", 10: "RPAREN", 13: "PROP", 14: "NOT", 16: "LBRACKET", 18: "RBRACKET", 21: "NULL", 22: "TRUE", 23: "FALSE", 24: "NUMBER", 25: "NOW", 27: "AMOUNT", 28: "INTERVAL", 29: "LITERAL", 30: "STRING", 31: "ADD", 32: "SUB", 33: "CONTAINS", 34: "STARTSWITH", 35: "ENDSWITH", 36: "GT", 37: "LT", 38: "GTE", 39: "LTE" },
      productions_: [0, [3, 1], [4, 1], [4, 3], [5, 1], [5, 3], [7, 3], [7, 2], [11, 1], [12, 2], [12, 1], [12, 4], [12, 3], [12, 2], [12, 1], [17, 3], [17, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 4], [20, 1], [20, 1], [26, 1], [26, 1], [15, 2], [15, 2], [15, 2], [19, 1], [19, 1], [19, 1], [19, 1], [19, 1]],
      performAction: function(j, _, F, W, H, Z, pe, Me) {
        var G = Z.length - 1;
        switch (H) {
          case 1:
            return W.debug("expression", Z[G]), W.debug("opt", Me), Z[G] && Z[G].yg ? Z[G].yg : Z[G];
          case 2:
            W.debug("andCondition", Z[G]), this.$ = Z[G];
            break;
          case 3:
            W.debug("expression OR andCondition", Z[G - 2], Z[G]), Z[G - 2] = Z[G - 2].$or ? Z[G - 2] : { $or: [W.ungroup(Z[G - 2])] }, Z[G - 2].$or.push(W.ungroup(Z[G])), this.$ = Z[G - 2];
            break;
          case 4:
            W.debug("filterExpr", Z[G]), this.$ = Z[G];
            break;
          case 5:
            W.debug("andCondition AND filterExpr", Z[G - 2], Z[G]), Z[G - 2] = Z[G - 2].$and ? Z[G - 2] : { $and: [W.ungroup(Z[G - 2])] }, Z[G - 2].$and.push(W.ungroup(Z[G])), this.$ = Z[G - 2];
            break;
          case 6:
            W.debug("LPAREN expression RPAREN", Z[G - 1]), this.$ = { yg: Z[G - 1] };
            break;
          case 7:
            this.$ = { [Z[G - 1]]: Z[G] };
            break;
          case 8:
            Z[G] = Z[G].replace(/:$/, ""), Z[G] = Me.aliases && Me.aliases[Z[G]] ? Me.aliases[Z[G]] : Z[G], this.$ = Z[G];
            break;
          case 9:
            this.$ = { $not: Z[G] };
            break;
          case 10:
            this.$ = { $regex: Z[G] };
            break;
          case 11:
            this.$ = { $nin: Z[G - 1] };
            break;
          case 12:
            this.$ = { $in: Z[G - 1] };
            break;
          case 13:
            this.$ = {}, this.$[Z[G - 1]] = Z[G];
            break;
          case 14:
            this.$ = Z[G];
            break;
          case 15:
            this.$.push(Z[G]);
            break;
          case 16:
            this.$ = [Z[G]];
            break;
          case 17:
            this.$ = null;
            break;
          case 18:
            this.$ = !0;
            break;
          case 19:
            this.$ = !1;
            break;
          case 20:
            this.$ = parseInt(j);
            break;
          case 21:
            this.$ = W.relDateToAbsolute(Z[G - 2], Z[G - 1], Z[G]);
            break;
          case 22:
            this.$ = W.unescape(Z[G]);
            break;
          case 23:
            Z[G] = Z[G].replace(/^'|'$/g, ""), this.$ = W.unescape(Z[G]);
            break;
          case 24:
            this.$ = "add";
            break;
          case 25:
            this.$ = "sub";
            break;
          case 26:
            Z[G] = Z[G].replace(/^'|'$/g, ""), Z[G] = W.unescape(Z[G]), this.$ = W.stringToRegExp(Z[G]);
            break;
          case 27:
            Z[G] = Z[G].replace(/^'|'$/g, ""), Z[G] = W.unescape(Z[G]), this.$ = W.stringToRegExp(Z[G], "^");
            break;
          case 28:
            Z[G] = Z[G].replace(/^'|'$/g, ""), Z[G] = W.unescape(Z[G]), this.$ = W.stringToRegExp(Z[G], "$");
            break;
          case 29:
            this.$ = "$ne";
            break;
          case 30:
            this.$ = "$gt";
            break;
          case 31:
            this.$ = "$lt";
            break;
          case 32:
            this.$ = "$gte";
            break;
          case 33:
            this.$ = "$lte";
            break;
        }
      },
      table: [{ 3: 1, 4: 2, 5: 3, 7: 4, 9: s, 11: 6, 13: l }, { 1: [3] }, { 1: [2, 1], 6: A }, a(f, [2, 2], { 8: u }), a(d, [2, 4]), { 4: 10, 5: 3, 7: 4, 9: s, 11: 6, 13: l }, { 12: 11, 14: [1, 12], 15: 13, 16: [1, 14], 19: 15, 20: 16, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S, 33: T, 34: Q, 35: B, 36: [1, 20], 37: [1, 21], 38: [1, 22], 39: [1, 23] }, a([14, 16, 21, 22, 23, 24, 25, 29, 30, 33, 34, 35, 36, 37, 38, 39], [2, 8]), { 5: 31, 7: 4, 9: s, 11: 6, 13: l }, { 7: 32, 9: s, 11: 6, 13: l }, { 6: A, 10: [1, 33] }, a(d, [2, 7]), a(K, [2, 29], { 15: 34, 16: [1, 35], 33: T, 34: Q, 35: B }), a(d, [2, 10]), { 17: 36, 20: 37, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S }, { 20: 38, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S }, a(d, [2, 14]), { 30: [1, 39] }, { 30: [1, 40] }, { 30: [1, 41] }, a(K, [2, 30]), a(K, [2, 31]), a(K, [2, 32]), a(K, [2, 33]), a($, [2, 17]), a($, [2, 18]), a($, [2, 19]), a($, [2, 20]), { 26: 42, 31: [1, 43], 32: [1, 44] }, a($, [2, 22]), a($, [2, 23]), a(f, [2, 3], { 8: u }), a(d, [2, 5]), a(d, [2, 6]), a(d, [2, 9]), { 17: 45, 20: 37, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S }, { 6: Y, 18: [1, 46] }, a(V, [2, 16]), a(d, [2, 13]), a(d, [2, 26]), a(d, [2, 27]), a(d, [2, 28]), { 27: [1, 48] }, { 27: [2, 24] }, { 27: [2, 25] }, { 6: Y, 18: [1, 49] }, a(d, [2, 12]), { 20: 50, 21: h, 22: m, 23: v, 24: k, 25: b, 29: y, 30: S }, { 28: [1, 51] }, a(d, [2, 11]), a(V, [2, 15]), a($, [2, 21])],
      defaultActions: { 43: [2, 24], 44: [2, 25] },
      parseError: function(j, _) {
        if (_.recoverable)
          this.trace(j);
        else {
          var F = new Error(j);
          throw F.hash = _, F;
        }
      },
      parse: function(j) {
        var _ = this, F = [0], W = [null], H = [], Z = this.table, pe = "", Me = 0, G = 0, Ie = 2, be = 1, Ee = H.slice.call(arguments, 1), de = Object.create(this.lexer), Ne = { yy: {} };
        for (var Mt in this.yy)
          Object.prototype.hasOwnProperty.call(this.yy, Mt) && (Ne.yy[Mt] = this.yy[Mt]);
        de.setInput(j, Ne.yy), Ne.yy.lexer = de, Ne.yy.parser = this, typeof de.yylloc > "u" && (de.yylloc = {});
        var Xt = de.yylloc;
        H.push(Xt);
        var qe = de.options && de.options.ranges;
        typeof Ne.yy.parseError == "function" ? this.parseError = Ne.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
        for (var Le = function() {
          var rt;
          return rt = de.lex() || be, typeof rt != "number" && (rt = _.symbols_[rt] || rt), rt;
        }, ee, Se, Qe, Xe, xt = {}, Lt, Dt, tn, Jt; ; ) {
          if (Se = F[F.length - 1], this.defaultActions[Se] ? Qe = this.defaultActions[Se] : ((ee === null || typeof ee > "u") && (ee = Le()), Qe = Z[Se] && Z[Se][ee]), typeof Qe > "u" || !Qe.length || !Qe[0]) {
            var xr = "";
            Jt = [];
            for (Lt in Z[Se])
              this.terminals_[Lt] && Lt > Ie && Jt.push("'" + this.terminals_[Lt] + "'");
            de.showPosition ? xr = "Parse error on line " + (Me + 1) + `:
` + de.showPosition() + `
Expecting ` + Jt.join(", ") + ", got '" + (this.terminals_[ee] || ee) + "'" : xr = "Parse error on line " + (Me + 1) + ": Unexpected " + (ee == be ? "end of input" : "'" + (this.terminals_[ee] || ee) + "'"), this.parseError(xr, {
              text: de.match,
              token: this.terminals_[ee] || ee,
              line: de.yylineno,
              loc: Xt,
              expected: Jt
            });
          }
          if (Qe[0] instanceof Array && Qe.length > 1)
            throw new Error("Parse Error: multiple actions possible at state: " + Se + ", token: " + ee);
          switch (Qe[0]) {
            case 1:
              F.push(ee), W.push(de.yytext), H.push(de.yylloc), F.push(Qe[1]), ee = null, G = de.yyleng, pe = de.yytext, Me = de.yylineno, Xt = de.yylloc;
              break;
            case 2:
              if (Dt = this.productions_[Qe[1]][1], xt.$ = W[W.length - Dt], xt._$ = {
                first_line: H[H.length - (Dt || 1)].first_line,
                last_line: H[H.length - 1].last_line,
                first_column: H[H.length - (Dt || 1)].first_column,
                last_column: H[H.length - 1].last_column
              }, qe && (xt._$.range = [
                H[H.length - (Dt || 1)].range[0],
                H[H.length - 1].range[1]
              ]), Xe = this.performAction.apply(xt, [
                pe,
                G,
                Me,
                Ne.yy,
                Qe[1],
                W,
                H
              ].concat(Ee)), typeof Xe < "u")
                return Xe;
              Dt && (F = F.slice(0, -1 * Dt * 2), W = W.slice(0, -1 * Dt), H = H.slice(0, -1 * Dt)), F.push(this.productions_[Qe[1]][0]), W.push(xt.$), H.push(xt._$), tn = Z[F[F.length - 2]][F[F.length - 1]], F.push(tn);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }
    };
    re.parseError = function(ae, j) {
      var _ = ae.split(`
`);
      throw _[0] = "Query Error: unexpected character in filter at char " + (j.loc.first_column + 1), new Error(_.join(`
`));
    };
    var le = function() {
      var ae = {
        EOF: 1,
        parseError: function(_, F) {
          if (this.yy.parser)
            this.yy.parser.parseError(_, F);
          else
            throw new Error(_);
        },
        // resets the lexer, sets new input
        setInput: function(j, _) {
          return this.yy = _ || this.yy || {}, this._input = j, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
        },
        // consumes and returns one char from the input
        input: function() {
          var j = this._input[0];
          this.yytext += j, this.yyleng++, this.offset++, this.match += j, this.matched += j;
          var _ = j.match(/(?:\r\n?|\n).*/g);
          return _ ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), j;
        },
        // unshifts one char (or a string) into the input
        unput: function(j) {
          var _ = j.length, F = j.split(/(?:\r\n?|\n)/g);
          this._input = j + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - _), this.offset -= _;
          var W = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), F.length - 1 && (this.yylineno -= F.length - 1);
          var H = this.yylloc.range;
          return this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: F ? (F.length === W.length ? this.yylloc.first_column : 0) + W[W.length - F.length].length - F[0].length : this.yylloc.first_column - _
          }, this.options.ranges && (this.yylloc.range = [H[0], H[0] + this.yyleng - _]), this.yyleng = this.yytext.length, this;
        },
        // When called from action, caches matched text and appends it on next action
        more: function() {
          return this._more = !0, this;
        },
        // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
        reject: function() {
          if (this.options.backtrack_lexer)
            this._backtrack = !0;
          else
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          return this;
        },
        // retain first n characters of the match
        less: function(j) {
          this.unput(this.match.slice(j));
        },
        // displays already matched input, i.e. for error messages
        pastInput: function() {
          var j = this.matched.substr(0, this.matched.length - this.match.length);
          return (j.length > 20 ? "..." : "") + j.substr(-20).replace(/\n/g, "");
        },
        // displays upcoming input, i.e. for error messages
        upcomingInput: function() {
          var j = this.match;
          return j.length < 20 && (j += this._input.substr(0, 20 - j.length)), (j.substr(0, 20) + (j.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        // displays the character position where the lexing error occurred, i.e. for error messages
        showPosition: function() {
          var j = this.pastInput(), _ = new Array(j.length + 1).join("-");
          return j + this.upcomingInput() + `
` + _ + "^";
        },
        // test the lexed token: return FALSE when not a match, otherwise return token
        test_match: function(j, _) {
          var F, W, H;
          if (this.options.backtrack_lexer && (H = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          }, this.options.ranges && (H.yylloc.range = this.yylloc.range.slice(0))), W = j[0].match(/(?:\r\n?|\n).*/g), W && (this.yylineno += W.length), this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: W ? W[W.length - 1].length - W[W.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + j[0].length
          }, this.yytext += j[0], this.match += j[0], this.matches = j, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(j[0].length), this.matched += j[0], F = this.performAction.call(this, this.yy, this, _, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), F)
            return F;
          if (this._backtrack) {
            for (var Z in H)
              this[Z] = H[Z];
            return !1;
          }
          return !1;
        },
        // return next match in input
        next: function() {
          if (this.done)
            return this.EOF;
          this._input || (this.done = !0);
          var j, _, F, W;
          this._more || (this.yytext = "", this.match = "");
          for (var H = this._currentRules(), Z = 0; Z < H.length; Z++)
            if (F = this._input.match(this.rules[H[Z]]), F && (!_ || F[0].length > _[0].length)) {
              if (_ = F, W = Z, this.options.backtrack_lexer) {
                if (j = this.test_match(F, H[Z]), j !== !1)
                  return j;
                if (this._backtrack) {
                  _ = !1;
                  continue;
                } else
                  return !1;
              } else if (!this.options.flex)
                break;
            }
          return _ ? (j = this.test_match(_, H[W]), j !== !1 ? j : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        },
        // return next match that has a token
        lex: function() {
          var _ = this.next();
          return _ || this.lex();
        },
        // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
        begin: function(_) {
          this.conditionStack.push(_);
        },
        // pop the previously active lexer condition state off the condition stack
        popState: function() {
          var _ = this.conditionStack.length - 1;
          return _ > 0 ? this.conditionStack.pop() : this.conditionStack[0];
        },
        // produce the lexer rule set which is active for the currently active lexer condition state
        _currentRules: function() {
          return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
        },
        // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
        topState: function(_) {
          return _ = this.conditionStack.length - 1 - Math.abs(_ || 0), _ >= 0 ? this.conditionStack[_] : "INITIAL";
        },
        // alias for begin(condition)
        pushState: function(_) {
          this.begin(_);
        },
        // return the number of states currently on the stack
        stateStackSize: function() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function(_, F, W, H) {
          switch (W) {
            case 0:
              break;
            case 1:
              return 21;
            case 2:
              return 22;
            case 3:
              return 23;
            case 4:
              return 13;
            case 5:
              return 24;
            case 6:
              return 16;
            case 7:
              return 18;
            case 8:
              return this.pushState("reldate"), 25;
            case 9:
              return 32;
            case 10:
              return 31;
            case 11:
              return 27;
            case 12:
              return this.popState(), 28;
            case 13:
              return 29;
            case 14:
              return 30;
            case 15:
              return 9;
            case 16:
              return 10;
            case 17:
              return 6;
            case 18:
              return 8;
            case 19:
              return 14;
            case 20:
              return 38;
            case 21:
              return 39;
            case 22:
              return 36;
            case 23:
              return 37;
            case 24:
              return 34;
            case 25:
              return 35;
            case 26:
              return 33;
          }
        },
        rules: [/^(?:\s+)/, /^(?:(?:null|NULL|Null)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:true|TRUE|True)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:false|FALSE|False)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:[a-zA-Z_][a-zA-Z0-9_\.]*[:])/, /^(?:[0-9]+(\.[0-9]+)?\b(?![\-]))/, /^(?:\[)/, /^(?:\])/, /^(?:now(?=[-+]\d+[dwMyhms](?:([\+\,\(\)\[\]])|$)))/, /^(?:-)/, /^(?:\+)/, /^(?:\d+)/, /^(?:[dwMyhms])/, /^(?:([^\s'"\+\,\(\)\>\<=\[\]\~\-])(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+)/, /^(?:['](\\['"]|[^'"])+?['])/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\+)/, /^(?:-)/, /^(?:>=)/, /^(?:<=)/, /^(?:>)/, /^(?:<)/, /^(?:~\^)/, /^(?:~\$)/, /^(?:~)/],
        conditions: { reldate: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], inclusive: !0 }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], inclusive: !0 } }
      };
      return ae.parseError = function(j, _) {
        var F = j.split(`
`), W, H;
        throw W = F[2].indexOf("^"), H = F[1].charAt(W), F[0] = 'Query Error: unrecognized text "' + H + '" in filter at char ' + (W + 1), Error(F.join(`
`));
      }, ae;
    }();
    re.lexer = le;
    function ne() {
      this.yy = {};
    }
    return ne.prototype = re, re.Parser = ne, new ne();
  }();
  typeof BE < "u" && (n.parser = t, n.Parser = t.Parser, n.parse = function() {
    return t.parse.apply(t, arguments);
  }, n.main = function(s) {
    s[1] || (console.log("Usage: " + s[0] + " FILE"), process.exit(1));
    var l = Yh.readFileSync(Yh.normalize(s[1]), "utf8");
    return n.parser.parse(l);
  }, require.main === e && n.main(process.argv.slice(1)));
})(zl, zl.exports);
var UE = zl.exports;
function he(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function R(e, n) {
  if (n.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + n.length + " present");
}
function L(e) {
  R(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || Lr(e) === "object" && n === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || n === "[object Number]" ? new Date(e) : ((typeof e == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function wr(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return isNaN(a) ? /* @__PURE__ */ new Date(NaN) : (a && t.setDate(t.getDate() + a), t);
}
function eo(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  if (isNaN(a))
    return /* @__PURE__ */ new Date(NaN);
  if (!a)
    return t;
  var s = t.getDate(), l = new Date(t.getTime());
  l.setMonth(t.getMonth() + a + 1, 0);
  var A = l.getDate();
  return s >= A ? l : (t.setFullYear(l.getFullYear(), l.getMonth(), s), t);
}
function Ms(e, n) {
  if (R(2, arguments), !n || Lr(n) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var t = n.years ? he(n.years) : 0, a = n.months ? he(n.months) : 0, s = n.weeks ? he(n.weeks) : 0, l = n.days ? he(n.days) : 0, A = n.hours ? he(n.hours) : 0, f = n.minutes ? he(n.minutes) : 0, u = n.seconds ? he(n.seconds) : 0, d = L(e), h = a || t ? eo(d, a + t * 12) : d, m = l || s ? wr(h, l + s * 7) : h, v = f + A * 60, k = u + v * 60, b = k * 1e3, y = new Date(m.getTime() + b);
  return y;
}
function Is(e) {
  R(1, arguments);
  var n = L(e), t = n.getDay();
  return t === 0 || t === 6;
}
function lf(e) {
  return R(1, arguments), L(e).getDay() === 0;
}
function nm(e) {
  return R(1, arguments), L(e).getDay() === 6;
}
function rm(e, n) {
  R(2, arguments);
  var t = L(e), a = Is(t), s = he(n);
  if (isNaN(s))
    return /* @__PURE__ */ new Date(NaN);
  var l = t.getHours(), A = s < 0 ? -1 : 1, f = he(s / 5);
  t.setDate(t.getDate() + f * 7);
  for (var u = Math.abs(s % 5); u > 0; )
    t.setDate(t.getDate() + A), Is(t) || (u -= 1);
  return a && Is(t) && s !== 0 && (nm(t) && t.setDate(t.getDate() + (A < 0 ? 2 : -1)), lf(t) && t.setDate(t.getDate() + (A < 0 ? 1 : -2))), t.setHours(l), t;
}
function to(e, n) {
  R(2, arguments);
  var t = L(e).getTime(), a = he(n);
  return new Date(t + a);
}
var LE = 36e5;
function Af(e, n) {
  R(2, arguments);
  var t = he(n);
  return to(e, t * LE);
}
var am = {};
function _t() {
  return am;
}
function PE(e) {
  am = e;
}
function Wn(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = L(e), k = v.getDay(), b = (k < m ? 7 : 0) + k - m;
  return v.setDate(v.getDate() - b), v.setHours(0, 0, 0, 0), v;
}
function Br(e) {
  return R(1, arguments), Wn(e, {
    weekStartsOn: 1
  });
}
function Oa(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Br(a), l = /* @__PURE__ */ new Date(0);
  l.setFullYear(t, 0, 4), l.setHours(0, 0, 0, 0);
  var A = Br(l);
  return n.getTime() >= s.getTime() ? t + 1 : n.getTime() >= A.getTime() ? t : t - 1;
}
function ca(e) {
  R(1, arguments);
  var n = Oa(e), t = /* @__PURE__ */ new Date(0);
  t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0);
  var a = Br(t);
  return a;
}
function Mn(e) {
  var n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function Rs(e) {
  R(1, arguments);
  var n = L(e);
  return n.setHours(0, 0, 0, 0), n;
}
var zE = 864e5;
function vr(e, n) {
  R(2, arguments);
  var t = Rs(e), a = Rs(n), s = t.getTime() - Mn(t), l = a.getTime() - Mn(a);
  return Math.round((s - l) / zE);
}
function sm(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = vr(t, ca(t)), l = /* @__PURE__ */ new Date(0);
  return l.setFullYear(a, 0, 4), l.setHours(0, 0, 0, 0), t = ca(l), t.setDate(t.getDate() + s), t;
}
function im(e, n) {
  R(2, arguments);
  var t = he(n);
  return sm(e, Oa(e) + t);
}
var YE = 6e4;
function cf(e, n) {
  R(2, arguments);
  var t = he(n);
  return to(e, t * YE);
}
function uf(e, n) {
  R(2, arguments);
  var t = he(n), a = t * 3;
  return eo(e, a);
}
function om(e, n) {
  R(2, arguments);
  var t = he(n);
  return to(e, t * 1e3);
}
function iA(e, n) {
  R(2, arguments);
  var t = he(n), a = t * 7;
  return wr(e, a);
}
function lm(e, n) {
  R(2, arguments);
  var t = he(n);
  return eo(e, t * 12);
}
function FE(e, n, t) {
  R(2, arguments);
  var a = L(e == null ? void 0 : e.start).getTime(), s = L(e == null ? void 0 : e.end).getTime(), l = L(n == null ? void 0 : n.start).getTime(), A = L(n == null ? void 0 : n.end).getTime();
  if (!(a <= s && l <= A))
    throw new RangeError("Invalid interval");
  return t != null && t.inclusive ? a <= A && l <= s : a < A && l < s;
}
function Am(e) {
  R(1, arguments);
  var n;
  if (e && typeof e.forEach == "function")
    n = e;
  else if (Lr(e) === "object" && e !== null)
    n = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var t;
  return n.forEach(function(a) {
    var s = L(a);
    (t === void 0 || t < s || isNaN(Number(s))) && (t = s);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function cm(e) {
  R(1, arguments);
  var n;
  if (e && typeof e.forEach == "function")
    n = e;
  else if (Lr(e) === "object" && e !== null)
    n = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var t;
  return n.forEach(function(a) {
    var s = L(a);
    (t === void 0 || t > s || isNaN(s.getDate())) && (t = s);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ZE(e, n) {
  var t = n.start, a = n.end;
  return R(2, arguments), cm([Am([e, t]), a]);
}
function GE(e, n) {
  R(2, arguments);
  var t = L(e);
  if (isNaN(Number(t)))
    return NaN;
  var a = t.getTime(), s;
  n == null ? s = [] : typeof n.forEach == "function" ? s = n : s = Array.prototype.slice.call(n);
  var l, A;
  return s.forEach(function(f, u) {
    var d = L(f);
    if (isNaN(Number(d))) {
      l = NaN, A = NaN;
      return;
    }
    var h = Math.abs(a - d.getTime());
    (l == null || h < Number(A)) && (l = u, A = h);
  }), l;
}
function KE(e, n) {
  R(2, arguments);
  var t = L(e);
  if (isNaN(Number(t)))
    return /* @__PURE__ */ new Date(NaN);
  var a = t.getTime(), s;
  n == null ? s = [] : typeof n.forEach == "function" ? s = n : s = Array.prototype.slice.call(n);
  var l, A;
  return s.forEach(function(f) {
    var u = L(f);
    if (isNaN(Number(u))) {
      l = /* @__PURE__ */ new Date(NaN), A = NaN;
      return;
    }
    var d = Math.abs(a - u.getTime());
    (l == null || d < Number(A)) && (l = u, A = d);
  }), l;
}
function ar(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = t.getTime() - a.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function XE(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = t.getTime() - a.getTime();
  return s > 0 ? -1 : s < 0 ? 1 : s;
}
var ff = 7, um = 365.2425, fm = Math.pow(10, 8) * 24 * 60 * 60 * 1e3, La = 6e4, Pa = 36e5, oA = 1e3, WE = -fm, df = 60, hf = 3, pf = 12, mf = 4, no = 3600, lA = 60, AA = no * 24, dm = AA * 7, gf = AA * um, vf = gf / 12, hm = vf * 3;
function qE(e) {
  R(1, arguments);
  var n = e / ff;
  return Math.floor(n);
}
function ro(e, n) {
  R(2, arguments);
  var t = Rs(e), a = Rs(n);
  return t.getTime() === a.getTime();
}
function pm(e) {
  return R(1, arguments), e instanceof Date || Lr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ur(e) {
  if (R(1, arguments), !pm(e) && typeof e != "number")
    return !1;
  var n = L(e);
  return !isNaN(Number(n));
}
function VE(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  if (!Ur(t) || !Ur(a))
    return NaN;
  var s = vr(t, a), l = s < 0 ? -1 : 1, A = he(s / 7), f = A * 5;
  for (a = wr(a, A * 7); !ro(t, a); )
    f += Is(a) ? 0 : l, a = wr(a, l);
  return f === 0 ? 0 : f;
}
function mm(e, n) {
  return R(2, arguments), Oa(e) - Oa(n);
}
var _E = 6048e5;
function $E(e, n) {
  R(2, arguments);
  var t = Br(e), a = Br(n), s = t.getTime() - Mn(t), l = a.getTime() - Mn(a);
  return Math.round((s - l) / _E);
}
function Yl(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = t.getFullYear() - a.getFullYear(), l = t.getMonth() - a.getMonth();
  return s * 12 + l;
}
function Du(e) {
  R(1, arguments);
  var n = L(e), t = Math.floor(n.getMonth() / 3) + 1;
  return t;
}
function Nl(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = t.getFullYear() - a.getFullYear(), l = Du(t) - Du(a);
  return s * 4 + l;
}
var e2 = 6048e5;
function Fl(e, n, t) {
  R(2, arguments);
  var a = Wn(e, t), s = Wn(n, t), l = a.getTime() - Mn(a), A = s.getTime() - Mn(s);
  return Math.round((l - A) / e2);
}
function Pi(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getFullYear() - a.getFullYear();
}
function Fh(e, n) {
  var t = e.getFullYear() - n.getFullYear() || e.getMonth() - n.getMonth() || e.getDate() - n.getDate() || e.getHours() - n.getHours() || e.getMinutes() - n.getMinutes() || e.getSeconds() - n.getSeconds() || e.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function wf(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = Fh(t, a), l = Math.abs(vr(t, a));
  t.setDate(t.getDate() - s * l);
  var A = +(Fh(t, a) === -s), f = s * (l - A);
  return f === 0 ? 0 : f;
}
function cA(e, n) {
  return R(2, arguments), L(e).getTime() - L(n).getTime();
}
var Zh = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(n) {
    return n < 0 ? Math.ceil(n) : Math.floor(n);
  }
  // Math.trunc is not supported by IE
}, t2 = "trunc";
function Ls(e) {
  return e ? Zh[e] : Zh[t2];
}
function Zl(e, n, t) {
  R(2, arguments);
  var a = cA(e, n) / Pa;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function gm(e, n) {
  R(2, arguments);
  var t = he(n);
  return im(e, -t);
}
function n2(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = ar(t, a), l = Math.abs(mm(t, a));
  t = gm(t, s * l);
  var A = +(ar(t, a) === -s), f = s * (l - A);
  return f === 0 ? 0 : f;
}
function Gl(e, n, t) {
  R(2, arguments);
  var a = cA(e, n) / La;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function xf(e) {
  R(1, arguments);
  var n = L(e);
  return n.setHours(23, 59, 59, 999), n;
}
function kf(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth();
  return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function vm(e) {
  R(1, arguments);
  var n = L(e);
  return xf(n).getTime() === kf(n).getTime();
}
function uA(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = ar(t, a), l = Math.abs(Yl(t, a)), A;
  if (l < 1)
    A = 0;
  else {
    t.getMonth() === 1 && t.getDate() > 27 && t.setDate(30), t.setMonth(t.getMonth() - s * l);
    var f = ar(t, a) === -s;
    vm(L(e)) && l === 1 && ar(e, a) === 1 && (f = !1), A = s * (l - Number(f));
  }
  return A === 0 ? 0 : A;
}
function r2(e, n, t) {
  R(2, arguments);
  var a = uA(e, n) / 3;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function Js(e, n, t) {
  R(2, arguments);
  var a = cA(e, n) / 1e3;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function a2(e, n, t) {
  R(2, arguments);
  var a = wf(e, n) / 7;
  return Ls(t == null ? void 0 : t.roundingMethod)(a);
}
function wm(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n), s = ar(t, a), l = Math.abs(Pi(t, a));
  t.setFullYear(1584), a.setFullYear(1584);
  var A = ar(t, a) === -s, f = s * (l - Number(A));
  return f === 0 ? 0 : f;
}
function xm(e, n) {
  var t;
  R(1, arguments);
  var a = e || {}, s = L(a.start), l = L(a.end), A = l.getTime();
  if (!(s.getTime() <= A))
    throw new RangeError("Invalid interval");
  var f = [], u = s;
  u.setHours(0, 0, 0, 0);
  var d = Number((t = n == null ? void 0 : n.step) !== null && t !== void 0 ? t : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; u.getTime() <= A; )
    f.push(L(u)), u.setDate(u.getDate() + d), u.setHours(0, 0, 0, 0);
  return f;
}
function s2(e, n) {
  var t;
  R(1, arguments);
  var a = e || {}, s = L(a.start), l = L(a.end), A = s.getTime(), f = l.getTime();
  if (!(A <= f))
    throw new RangeError("Invalid interval");
  var u = [], d = s;
  d.setMinutes(0, 0, 0);
  var h = Number((t = n == null ? void 0 : n.step) !== null && t !== void 0 ? t : 1);
  if (h < 1 || isNaN(h))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; d.getTime() <= f; )
    u.push(L(d)), d = Af(d, h);
  return u;
}
function Kl(e) {
  R(1, arguments);
  var n = L(e);
  return n.setSeconds(0, 0), n;
}
function i2(e, n) {
  var t;
  R(1, arguments);
  var a = Kl(L(e.start)), s = L(e.end), l = a.getTime(), A = s.getTime();
  if (l >= A)
    throw new RangeError("Invalid interval");
  var f = [], u = a, d = Number((t = n == null ? void 0 : n.step) !== null && t !== void 0 ? t : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number equal to or greater than 1");
  for (; u.getTime() <= A; )
    f.push(L(u)), u = cf(u, d);
  return f;
}
function o2(e) {
  R(1, arguments);
  var n = e || {}, t = L(n.start), a = L(n.end), s = a.getTime(), l = [];
  if (!(t.getTime() <= s))
    throw new RangeError("Invalid interval");
  var A = t;
  for (A.setHours(0, 0, 0, 0), A.setDate(1); A.getTime() <= s; )
    l.push(L(A)), A.setMonth(A.getMonth() + 1);
  return l;
}
function Gi(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth(), a = t - t % 3;
  return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
}
function l2(e) {
  R(1, arguments);
  var n = e || {}, t = L(n.start), a = L(n.end), s = a.getTime();
  if (!(t.getTime() <= s))
    throw new RangeError("Invalid interval");
  var l = Gi(t), A = Gi(a);
  s = A.getTime();
  for (var f = [], u = l; u.getTime() <= s; )
    f.push(L(u)), u = uf(u, 1);
  return f;
}
function A2(e, n) {
  R(1, arguments);
  var t = e || {}, a = L(t.start), s = L(t.end), l = s.getTime();
  if (!(a.getTime() <= l))
    throw new RangeError("Invalid interval");
  var A = Wn(a, n), f = Wn(s, n);
  A.setHours(15), f.setHours(15), l = f.getTime();
  for (var u = [], d = A; d.getTime() <= l; )
    d.setHours(0), u.push(L(d)), d = iA(d, 1), d.setHours(15);
  return u;
}
function bf(e) {
  R(1, arguments);
  for (var n = xm(e), t = [], a = 0; a < n.length; ) {
    var s = n[a++];
    Is(s) && (t.push(s), lf(s) && (a = a + 5));
  }
  return t;
}
function fA(e) {
  R(1, arguments);
  var n = L(e);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function c2(e) {
  R(1, arguments);
  var n = fA(e);
  if (isNaN(n.getTime()))
    throw new RangeError("The passed date is invalid");
  var t = kf(e);
  return bf({
    start: n,
    end: t
  });
}
function km(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear();
  return n.setFullYear(t + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function yf(e) {
  R(1, arguments);
  var n = L(e), t = /* @__PURE__ */ new Date(0);
  return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function u2(e) {
  R(1, arguments);
  var n = yf(e), t = km(e);
  return bf({
    start: n,
    end: t
  });
}
function f2(e) {
  R(1, arguments);
  var n = e || {}, t = L(n.start), a = L(n.end), s = a.getTime();
  if (!(t.getTime() <= s))
    throw new RangeError("Invalid interval");
  var l = [], A = t;
  for (A.setHours(0, 0, 0, 0), A.setMonth(0, 1); A.getTime() <= s; )
    l.push(L(A)), A.setFullYear(A.getFullYear() + 1);
  return l;
}
function d2(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = 9 + Math.floor(t / 10) * 10;
  return n.setFullYear(a, 11, 31), n.setHours(23, 59, 59, 999), n;
}
function h2(e) {
  R(1, arguments);
  var n = L(e);
  return n.setMinutes(59, 59, 999), n;
}
function bm(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = L(e), k = v.getDay(), b = (k < m ? -7 : 0) + 6 - (k - m);
  return v.setDate(v.getDate() + b), v.setHours(23, 59, 59, 999), v;
}
function p2(e) {
  return R(1, arguments), bm(e, {
    weekStartsOn: 1
  });
}
function m2(e) {
  R(1, arguments);
  var n = Oa(e), t = /* @__PURE__ */ new Date(0);
  t.setFullYear(n + 1, 0, 4), t.setHours(0, 0, 0, 0);
  var a = Br(t);
  return a.setMilliseconds(a.getMilliseconds() - 1), a;
}
function g2(e) {
  R(1, arguments);
  var n = L(e);
  return n.setSeconds(59, 999), n;
}
function v2(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth(), a = t - t % 3 + 3;
  return n.setMonth(a, 0), n.setHours(23, 59, 59, 999), n;
}
function w2(e) {
  R(1, arguments);
  var n = L(e);
  return n.setMilliseconds(999), n;
}
function x2() {
  return xf(Date.now());
}
function k2() {
  var e = /* @__PURE__ */ new Date(), n = e.getFullYear(), t = e.getMonth(), a = e.getDate(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(n, t, a + 1), s.setHours(23, 59, 59, 999), s;
}
function b2() {
  var e = /* @__PURE__ */ new Date(), n = e.getFullYear(), t = e.getMonth(), a = e.getDate(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(n, t, a - 1), s.setHours(23, 59, 59, 999), s;
}
function js(e, n) {
  R(2, arguments);
  var t = he(n);
  return to(e, -t);
}
var y2 = 864e5;
function E2(e) {
  R(1, arguments);
  var n = L(e), t = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var a = n.getTime(), s = t - a;
  return Math.floor(s / y2) + 1;
}
function Os(e) {
  R(1, arguments);
  var n = 1, t = L(e), a = t.getUTCDay(), s = (a < n ? 7 : 0) + a - n;
  return t.setUTCDate(t.getUTCDate() - s), t.setUTCHours(0, 0, 0, 0), t;
}
function ym(e) {
  R(1, arguments);
  var n = L(e), t = n.getUTCFullYear(), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(t + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Os(a), l = /* @__PURE__ */ new Date(0);
  l.setUTCFullYear(t, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var A = Os(l);
  return n.getTime() >= s.getTime() ? t + 1 : n.getTime() >= A.getTime() ? t : t - 1;
}
function M2(e) {
  R(1, arguments);
  var n = ym(e), t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(n, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var a = Os(t);
  return a;
}
var S2 = 6048e5;
function Em(e) {
  R(1, arguments);
  var n = L(e), t = Os(n).getTime() - M2(n).getTime();
  return Math.round(t / S2) + 1;
}
function Qa(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = L(e), k = v.getUTCDay(), b = (k < m ? 7 : 0) + k - m;
  return v.setUTCDate(v.getUTCDate() - b), v.setUTCHours(0, 0, 0, 0), v;
}
function Ef(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = L(e), m = h.getUTCFullYear(), v = _t(), k = he((t = (a = (s = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : v.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = v.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(k >= 1 && k <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(m + 1, 0, k), b.setUTCHours(0, 0, 0, 0);
  var y = Qa(b, n), S = /* @__PURE__ */ new Date(0);
  S.setUTCFullYear(m, 0, k), S.setUTCHours(0, 0, 0, 0);
  var T = Qa(S, n);
  return h.getTime() >= y.getTime() ? m + 1 : h.getTime() >= T.getTime() ? m : m - 1;
}
function I2(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : h.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), v = Ef(e, n), k = /* @__PURE__ */ new Date(0);
  k.setUTCFullYear(v, 0, m), k.setUTCHours(0, 0, 0, 0);
  var b = Qa(k, n);
  return b;
}
var J2 = 6048e5;
function Mm(e, n) {
  R(1, arguments);
  var t = L(e), a = Qa(t, n).getTime() - I2(t, n).getTime();
  return Math.round(a / J2) + 1;
}
function Je(e, n) {
  for (var t = e < 0 ? "-" : "", a = Math.abs(e).toString(); a.length < n; )
    a = "0" + a;
  return t + a;
}
var T2 = {
  // Year
  y: function(n, t) {
    var a = n.getUTCFullYear(), s = a > 0 ? a : 1 - a;
    return Je(t === "yy" ? s % 100 : s, t.length);
  },
  // Month
  M: function(n, t) {
    var a = n.getUTCMonth();
    return t === "M" ? String(a + 1) : Je(a + 1, 2);
  },
  // Day of the month
  d: function(n, t) {
    return Je(n.getUTCDate(), t.length);
  },
  // AM or PM
  a: function(n, t) {
    var a = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(n, t) {
    return Je(n.getUTCHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H: function(n, t) {
    return Je(n.getUTCHours(), t.length);
  },
  // Minute
  m: function(n, t) {
    return Je(n.getUTCMinutes(), t.length);
  },
  // Second
  s: function(n, t) {
    return Je(n.getUTCSeconds(), t.length);
  },
  // Fraction of second
  S: function(n, t) {
    var a = t.length, s = n.getUTCMilliseconds(), l = Math.floor(s * Math.pow(10, a - 3));
    return Je(l, t.length);
  }
};
const Dr = T2;
var bs = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, C2 = {
  // Era
  G: function(n, t, a) {
    var s = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(s, {
          width: "abbreviated"
        });
      case "GGGGG":
        return a.era(s, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return a.era(s, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(n, t, a) {
    if (t === "yo") {
      var s = n.getUTCFullYear(), l = s > 0 ? s : 1 - s;
      return a.ordinalNumber(l, {
        unit: "year"
      });
    }
    return Dr.y(n, t);
  },
  // Local week-numbering year
  Y: function(n, t, a, s) {
    var l = Ef(n, s), A = l > 0 ? l : 1 - l;
    if (t === "YY") {
      var f = A % 100;
      return Je(f, 2);
    }
    return t === "Yo" ? a.ordinalNumber(A, {
      unit: "year"
    }) : Je(A, t.length);
  },
  // ISO week-numbering year
  R: function(n, t) {
    var a = ym(n);
    return Je(a, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, t) {
    var a = n.getUTCFullYear();
    return Je(a, t.length);
  },
  // Quarter
  Q: function(n, t, a) {
    var s = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(s);
      case "QQ":
        return Je(s, 2);
      case "Qo":
        return a.ordinalNumber(s, {
          unit: "quarter"
        });
      case "QQQ":
        return a.quarter(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(s, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, t, a) {
    var s = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(s);
      case "qq":
        return Je(s, 2);
      case "qo":
        return a.ordinalNumber(s, {
          unit: "quarter"
        });
      case "qqq":
        return a.quarter(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(s, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, t, a) {
    var s = n.getUTCMonth();
    switch (t) {
      case "M":
      case "MM":
        return Dr.M(n, t);
      case "Mo":
        return a.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "MMM":
        return a.month(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return a.month(s, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(n, t, a) {
    var s = n.getUTCMonth();
    switch (t) {
      case "L":
        return String(s + 1);
      case "LL":
        return Je(s + 1, 2);
      case "Lo":
        return a.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "LLL":
        return a.month(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return a.month(s, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(n, t, a, s) {
    var l = Mm(n, s);
    return t === "wo" ? a.ordinalNumber(l, {
      unit: "week"
    }) : Je(l, t.length);
  },
  // ISO week of year
  I: function(n, t, a) {
    var s = Em(n);
    return t === "Io" ? a.ordinalNumber(s, {
      unit: "week"
    }) : Je(s, t.length);
  },
  // Day of the month
  d: function(n, t, a) {
    return t === "do" ? a.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : Dr.d(n, t);
  },
  // Day of year
  D: function(n, t, a) {
    var s = E2(n);
    return t === "Do" ? a.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : Je(s, t.length);
  },
  // Day of week
  E: function(n, t, a) {
    var s = n.getUTCDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return a.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(s, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return a.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, t, a, s) {
    var l = n.getUTCDay(), A = (l - s.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(A);
      case "ee":
        return Je(A, 2);
      case "eo":
        return a.ordinalNumber(A, {
          unit: "day"
        });
      case "eee":
        return a.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return a.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(l, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return a.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, t, a, s) {
    var l = n.getUTCDay(), A = (l - s.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(A);
      case "cc":
        return Je(A, t.length);
      case "co":
        return a.ordinalNumber(A, {
          unit: "day"
        });
      case "ccc":
        return a.day(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return a.day(l, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(l, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return a.day(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, t, a) {
    var s = n.getUTCDay(), l = s === 0 ? 7 : s;
    switch (t) {
      case "i":
        return String(l);
      case "ii":
        return Je(l, t.length);
      case "io":
        return a.ordinalNumber(l, {
          unit: "day"
        });
      case "iii":
        return a.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return a.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return a.day(s, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return a.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, t, a) {
    var s = n.getUTCHours(), l = s / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, t, a) {
    var s = n.getUTCHours(), l;
    switch (s === 12 ? l = bs.noon : s === 0 ? l = bs.midnight : l = s / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, t, a) {
    var s = n.getUTCHours(), l;
    switch (s >= 17 ? l = bs.evening : s >= 12 ? l = bs.afternoon : s >= 4 ? l = bs.morning : l = bs.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, t, a) {
    if (t === "ho") {
      var s = n.getUTCHours() % 12;
      return s === 0 && (s = 12), a.ordinalNumber(s, {
        unit: "hour"
      });
    }
    return Dr.h(n, t);
  },
  // Hour [0-23]
  H: function(n, t, a) {
    return t === "Ho" ? a.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : Dr.H(n, t);
  },
  // Hour [0-11]
  K: function(n, t, a) {
    var s = n.getUTCHours() % 12;
    return t === "Ko" ? a.ordinalNumber(s, {
      unit: "hour"
    }) : Je(s, t.length);
  },
  // Hour [1-24]
  k: function(n, t, a) {
    var s = n.getUTCHours();
    return s === 0 && (s = 24), t === "ko" ? a.ordinalNumber(s, {
      unit: "hour"
    }) : Je(s, t.length);
  },
  // Minute
  m: function(n, t, a) {
    return t === "mo" ? a.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : Dr.m(n, t);
  },
  // Second
  s: function(n, t, a) {
    return t === "so" ? a.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : Dr.s(n, t);
  },
  // Fraction of second
  S: function(n, t) {
    return Dr.S(n, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTimezoneOffset();
    if (A === 0)
      return "Z";
    switch (t) {
      case "X":
        return Kh(A);
      case "XXXX":
      case "XX":
        return Ca(A);
      case "XXXXX":
      case "XXX":
      default:
        return Ca(A, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTimezoneOffset();
    switch (t) {
      case "x":
        return Kh(A);
      case "xxxx":
      case "xx":
        return Ca(A);
      case "xxxxx":
      case "xxx":
      default:
        return Ca(A, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Gh(A, ":");
      case "OOOO":
      default:
        return "GMT" + Ca(A, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Gh(A, ":");
      case "zzzz":
      default:
        return "GMT" + Ca(A, ":");
    }
  },
  // Seconds timestamp
  t: function(n, t, a, s) {
    var l = s._originalDate || n, A = Math.floor(l.getTime() / 1e3);
    return Je(A, t.length);
  },
  // Milliseconds timestamp
  T: function(n, t, a, s) {
    var l = s._originalDate || n, A = l.getTime();
    return Je(A, t.length);
  }
};
function Gh(e, n) {
  var t = e > 0 ? "-" : "+", a = Math.abs(e), s = Math.floor(a / 60), l = a % 60;
  if (l === 0)
    return t + String(s);
  var A = n || "";
  return t + String(s) + A + Je(l, 2);
}
function Kh(e, n) {
  if (e % 60 === 0) {
    var t = e > 0 ? "-" : "+";
    return t + Je(Math.abs(e) / 60, 2);
  }
  return Ca(e, n);
}
function Ca(e, n) {
  var t = n || "", a = e > 0 ? "-" : "+", s = Math.abs(e), l = Je(Math.floor(s / 60), 2), A = Je(s % 60, 2);
  return a + l + t + A;
}
const D2 = C2;
var Xh = function(n, t) {
  switch (n) {
    case "P":
      return t.date({
        width: "short"
      });
    case "PP":
      return t.date({
        width: "medium"
      });
    case "PPP":
      return t.date({
        width: "long"
      });
    case "PPPP":
    default:
      return t.date({
        width: "full"
      });
  }
}, Sm = function(n, t) {
  switch (n) {
    case "p":
      return t.time({
        width: "short"
      });
    case "pp":
      return t.time({
        width: "medium"
      });
    case "ppp":
      return t.time({
        width: "long"
      });
    case "pppp":
    default:
      return t.time({
        width: "full"
      });
  }
}, R2 = function(n, t) {
  var a = n.match(/(P+)(p+)?/) || [], s = a[1], l = a[2];
  if (!l)
    return Xh(n, t);
  var A;
  switch (s) {
    case "P":
      A = t.dateTime({
        width: "short"
      });
      break;
    case "PP":
      A = t.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      A = t.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      A = t.dateTime({
        width: "full"
      });
      break;
  }
  return A.replace("{{date}}", Xh(s, t)).replace("{{time}}", Sm(l, t));
}, j2 = {
  p: Sm,
  P: R2
};
const Ru = j2;
var O2 = ["D", "DD"], Q2 = ["YY", "YYYY"];
function Im(e) {
  return O2.indexOf(e) !== -1;
}
function Jm(e) {
  return Q2.indexOf(e) !== -1;
}
function Xl(e, n, t) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var N2 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, H2 = function(n, t, a) {
  var s, l = N2[n];
  return typeof l == "string" ? s = l : t === 1 ? s = l.one : s = l.other.replace("{{count}}", t.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + s : s + " ago" : s;
};
const B2 = H2;
function du(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.width ? String(n.width) : e.defaultWidth, a = e.formats[t] || e.formats[e.defaultWidth];
    return a;
  };
}
var U2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, L2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, P2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, z2 = {
  date: du({
    formats: U2,
    defaultWidth: "full"
  }),
  time: du({
    formats: L2,
    defaultWidth: "full"
  }),
  dateTime: du({
    formats: P2,
    defaultWidth: "full"
  })
};
const Y2 = z2;
var F2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Z2 = function(n, t, a, s) {
  return F2[n];
};
const G2 = Z2;
function Ri(e) {
  return function(n, t) {
    var a = t != null && t.context ? String(t.context) : "standalone", s;
    if (a === "formatting" && e.formattingValues) {
      var l = e.defaultFormattingWidth || e.defaultWidth, A = t != null && t.width ? String(t.width) : l;
      s = e.formattingValues[A] || e.formattingValues[l];
    } else {
      var f = e.defaultWidth, u = t != null && t.width ? String(t.width) : e.defaultWidth;
      s = e.values[u] || e.values[f];
    }
    var d = e.argumentCallback ? e.argumentCallback(n) : n;
    return s[d];
  };
}
var K2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, X2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, W2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, q2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, V2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, _2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, $2 = function(n, t) {
  var a = Number(n), s = a % 100;
  if (s > 20 || s < 10)
    switch (s % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, e3 = {
  ordinalNumber: $2,
  era: Ri({
    values: K2,
    defaultWidth: "wide"
  }),
  quarter: Ri({
    values: X2,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: Ri({
    values: W2,
    defaultWidth: "wide"
  }),
  day: Ri({
    values: q2,
    defaultWidth: "wide"
  }),
  dayPeriod: Ri({
    values: V2,
    defaultWidth: "wide",
    formattingValues: _2,
    defaultFormattingWidth: "wide"
  })
};
const t3 = e3;
function ji(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.width, s = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], l = n.match(s);
    if (!l)
      return null;
    var A = l[0], f = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(f) ? r3(f, function(m) {
      return m.test(A);
    }) : n3(f, function(m) {
      return m.test(A);
    }), d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = t.valueCallback ? t.valueCallback(d) : d;
    var h = n.slice(A.length);
    return {
      value: d,
      rest: h
    };
  };
}
function n3(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t) && n(e[t]))
      return t;
}
function r3(e, n) {
  for (var t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function a3(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.match(e.matchPattern);
    if (!a)
      return null;
    var s = a[0], l = n.match(e.parsePattern);
    if (!l)
      return null;
    var A = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    A = t.valueCallback ? t.valueCallback(A) : A;
    var f = n.slice(s.length);
    return {
      value: A,
      rest: f
    };
  };
}
var s3 = /^(\d+)(th|st|nd|rd)?/i, i3 = /\d+/i, o3 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, l3 = {
  any: [/^b/i, /^(a|c)/i]
}, A3 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, c3 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, u3 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, f3 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, d3 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, h3 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, p3 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, m3 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, g3 = {
  ordinalNumber: a3({
    matchPattern: s3,
    parsePattern: i3,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: ji({
    matchPatterns: o3,
    defaultMatchWidth: "wide",
    parsePatterns: l3,
    defaultParseWidth: "any"
  }),
  quarter: ji({
    matchPatterns: A3,
    defaultMatchWidth: "wide",
    parsePatterns: c3,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: ji({
    matchPatterns: u3,
    defaultMatchWidth: "wide",
    parsePatterns: f3,
    defaultParseWidth: "any"
  }),
  day: ji({
    matchPatterns: d3,
    defaultMatchWidth: "wide",
    parsePatterns: h3,
    defaultParseWidth: "any"
  }),
  dayPeriod: ji({
    matchPatterns: p3,
    defaultMatchWidth: "any",
    parsePatterns: m3,
    defaultParseWidth: "any"
  })
};
const v3 = g3;
var w3 = {
  code: "en-US",
  formatDistance: B2,
  formatLong: Y2,
  formatRelative: G2,
  localize: t3,
  match: v3,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ps = w3;
var x3 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, k3 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, b3 = /^'([^]*?)'?$/, y3 = /''/g, E3 = /[a-zA-Z]/;
function Tm(e, n, t) {
  var a, s, l, A, f, u, d, h, m, v, k, b, y, S, T, Q, B, K;
  R(2, arguments);
  var $ = String(n), Y = _t(), V = (a = (s = t == null ? void 0 : t.locale) !== null && s !== void 0 ? s : Y.locale) !== null && a !== void 0 ? a : Ps, re = he((l = (A = (f = (u = t == null ? void 0 : t.firstWeekContainsDate) !== null && u !== void 0 ? u : t == null || (d = t.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && f !== void 0 ? f : Y.firstWeekContainsDate) !== null && A !== void 0 ? A : (m = Y.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && l !== void 0 ? l : 1);
  if (!(re >= 1 && re <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var le = he((k = (b = (y = (S = t == null ? void 0 : t.weekStartsOn) !== null && S !== void 0 ? S : t == null || (T = t.locale) === null || T === void 0 || (Q = T.options) === null || Q === void 0 ? void 0 : Q.weekStartsOn) !== null && y !== void 0 ? y : Y.weekStartsOn) !== null && b !== void 0 ? b : (B = Y.locale) === null || B === void 0 || (K = B.options) === null || K === void 0 ? void 0 : K.weekStartsOn) !== null && k !== void 0 ? k : 0);
  if (!(le >= 0 && le <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!V.localize)
    throw new RangeError("locale must contain localize property");
  if (!V.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var ne = L(e);
  if (!Ur(ne))
    throw new RangeError("Invalid time value");
  var ae = Mn(ne), j = js(ne, ae), _ = {
    firstWeekContainsDate: re,
    weekStartsOn: le,
    locale: V,
    _originalDate: ne
  }, F = $.match(k3).map(function(W) {
    var H = W[0];
    if (H === "p" || H === "P") {
      var Z = Ru[H];
      return Z(W, V.formatLong);
    }
    return W;
  }).join("").match(x3).map(function(W) {
    if (W === "''")
      return "'";
    var H = W[0];
    if (H === "'")
      return M3(W);
    var Z = D2[H];
    if (Z)
      return !(t != null && t.useAdditionalWeekYearTokens) && Jm(W) && Xl(W, n, String(e)), !(t != null && t.useAdditionalDayOfYearTokens) && Im(W) && Xl(W, n, String(e)), Z(j, W, V.localize, _);
    if (H.match(E3))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + H + "`");
    return W;
  }).join("");
  return F;
}
function M3(e) {
  var n = e.match(b3);
  return n ? n[1].replace(y3, "'") : e;
}
function ao(e, n) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var t in n)
    Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
  return e;
}
function Cm(e) {
  return ao({}, e);
}
var Wh = 1440, S3 = 2520, hu = 43200, I3 = 86400;
function Dm(e, n, t) {
  var a, s;
  R(2, arguments);
  var l = _t(), A = (a = (s = t == null ? void 0 : t.locale) !== null && s !== void 0 ? s : l.locale) !== null && a !== void 0 ? a : Ps;
  if (!A.formatDistance)
    throw new RangeError("locale must contain formatDistance property");
  var f = ar(e, n);
  if (isNaN(f))
    throw new RangeError("Invalid time value");
  var u = ao(Cm(t), {
    addSuffix: !!(t != null && t.addSuffix),
    comparison: f
  }), d, h;
  f > 0 ? (d = L(n), h = L(e)) : (d = L(e), h = L(n));
  var m = Js(h, d), v = (Mn(h) - Mn(d)) / 1e3, k = Math.round((m - v) / 60), b;
  if (k < 2)
    return t != null && t.includeSeconds ? m < 5 ? A.formatDistance("lessThanXSeconds", 5, u) : m < 10 ? A.formatDistance("lessThanXSeconds", 10, u) : m < 20 ? A.formatDistance("lessThanXSeconds", 20, u) : m < 40 ? A.formatDistance("halfAMinute", 0, u) : m < 60 ? A.formatDistance("lessThanXMinutes", 1, u) : A.formatDistance("xMinutes", 1, u) : k === 0 ? A.formatDistance("lessThanXMinutes", 1, u) : A.formatDistance("xMinutes", k, u);
  if (k < 45)
    return A.formatDistance("xMinutes", k, u);
  if (k < 90)
    return A.formatDistance("aboutXHours", 1, u);
  if (k < Wh) {
    var y = Math.round(k / 60);
    return A.formatDistance("aboutXHours", y, u);
  } else {
    if (k < S3)
      return A.formatDistance("xDays", 1, u);
    if (k < hu) {
      var S = Math.round(k / Wh);
      return A.formatDistance("xDays", S, u);
    } else if (k < I3)
      return b = Math.round(k / hu), A.formatDistance("aboutXMonths", b, u);
  }
  if (b = uA(h, d), b < 12) {
    var T = Math.round(k / hu);
    return A.formatDistance("xMonths", T, u);
  } else {
    var Q = b % 12, B = Math.floor(b / 12);
    return Q < 3 ? A.formatDistance("aboutXYears", B, u) : Q < 9 ? A.formatDistance("overXYears", B, u) : A.formatDistance("almostXYears", B + 1, u);
  }
}
var qh = 1e3 * 60, Wl = 60 * 24, Vh = Wl * 30, _h = Wl * 365;
function Rm(e, n, t) {
  var a, s, l;
  R(2, arguments);
  var A = _t(), f = (a = (s = t == null ? void 0 : t.locale) !== null && s !== void 0 ? s : A.locale) !== null && a !== void 0 ? a : Ps;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var u = ar(e, n);
  if (isNaN(u))
    throw new RangeError("Invalid time value");
  var d = ao(Cm(t), {
    addSuffix: !!(t != null && t.addSuffix),
    comparison: u
  }), h, m;
  u > 0 ? (h = L(n), m = L(e)) : (h = L(e), m = L(n));
  var v = String((l = t == null ? void 0 : t.roundingMethod) !== null && l !== void 0 ? l : "round"), k;
  if (v === "floor")
    k = Math.floor;
  else if (v === "ceil")
    k = Math.ceil;
  else if (v === "round")
    k = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var b = m.getTime() - h.getTime(), y = b / qh, S = Mn(m) - Mn(h), T = (b - S) / qh, Q = t == null ? void 0 : t.unit, B;
  if (Q ? B = String(Q) : y < 1 ? B = "second" : y < 60 ? B = "minute" : y < Wl ? B = "hour" : T < Vh ? B = "day" : T < _h ? B = "month" : B = "year", B === "second") {
    var K = k(b / 1e3);
    return f.formatDistance("xSeconds", K, d);
  } else if (B === "minute") {
    var $ = k(y);
    return f.formatDistance("xMinutes", $, d);
  } else if (B === "hour") {
    var Y = k(y / 60);
    return f.formatDistance("xHours", Y, d);
  } else if (B === "day") {
    var V = k(T / Wl);
    return f.formatDistance("xDays", V, d);
  } else if (B === "month") {
    var re = k(T / Vh);
    return re === 12 && Q !== "month" ? f.formatDistance("xYears", 1, d) : f.formatDistance("xMonths", re, d);
  } else if (B === "year") {
    var le = k(T / _h);
    return f.formatDistance("xYears", le, d);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function J3(e, n) {
  return R(1, arguments), Dm(e, Date.now(), n);
}
function T3(e, n) {
  return R(1, arguments), Rm(e, Date.now(), n);
}
var C3 = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
function D3(e, n) {
  var t, a, s, l, A;
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  var f = _t(), u = (t = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : f.locale) !== null && t !== void 0 ? t : Ps, d = (s = n == null ? void 0 : n.format) !== null && s !== void 0 ? s : C3, h = (l = n == null ? void 0 : n.zero) !== null && l !== void 0 ? l : !1, m = (A = n == null ? void 0 : n.delimiter) !== null && A !== void 0 ? A : " ";
  if (!u.formatDistance)
    return "";
  var v = d.reduce(function(k, b) {
    var y = "x".concat(b.replace(/(^.)/, function(T) {
      return T.toUpperCase();
    })), S = e[b];
    return typeof S == "number" && (h || e[b]) ? k.concat(u.formatDistance(y, S)) : k;
  }, []).join(m);
  return v;
}
function R3(e, n) {
  var t, a;
  R(1, arguments);
  var s = L(e);
  if (isNaN(s.getTime()))
    throw new RangeError("Invalid time value");
  var l = String((t = n == null ? void 0 : n.format) !== null && t !== void 0 ? t : "extended"), A = String((a = n == null ? void 0 : n.representation) !== null && a !== void 0 ? a : "complete");
  if (l !== "extended" && l !== "basic")
    throw new RangeError("format must be 'extended' or 'basic'");
  if (A !== "date" && A !== "time" && A !== "complete")
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  var f = "", u = "", d = l === "extended" ? "-" : "", h = l === "extended" ? ":" : "";
  if (A !== "time") {
    var m = Je(s.getDate(), 2), v = Je(s.getMonth() + 1, 2), k = Je(s.getFullYear(), 4);
    f = "".concat(k).concat(d).concat(v).concat(d).concat(m);
  }
  if (A !== "date") {
    var b = s.getTimezoneOffset();
    if (b !== 0) {
      var y = Math.abs(b), S = Je(Math.floor(y / 60), 2), T = Je(y % 60, 2), Q = b < 0 ? "+" : "-";
      u = "".concat(Q).concat(S, ":").concat(T);
    } else
      u = "Z";
    var B = Je(s.getHours(), 2), K = Je(s.getMinutes(), 2), $ = Je(s.getSeconds(), 2), Y = f === "" ? "" : "T", V = [B, K, $].join(h);
    f = "".concat(f).concat(Y).concat(V).concat(u);
  }
  return f;
}
function j3(e, n) {
  var t, a;
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  var s = L(e);
  if (!Ur(s))
    throw new RangeError("Invalid time value");
  var l = String((t = n == null ? void 0 : n.format) !== null && t !== void 0 ? t : "extended"), A = String((a = n == null ? void 0 : n.representation) !== null && a !== void 0 ? a : "complete");
  if (l !== "extended" && l !== "basic")
    throw new RangeError("format must be 'extended' or 'basic'");
  if (A !== "date" && A !== "time" && A !== "complete")
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  var f = "", u = l === "extended" ? "-" : "", d = l === "extended" ? ":" : "";
  if (A !== "time") {
    var h = Je(s.getDate(), 2), m = Je(s.getMonth() + 1, 2), v = Je(s.getFullYear(), 4);
    f = "".concat(v).concat(u).concat(m).concat(u).concat(h);
  }
  if (A !== "date") {
    var k = Je(s.getHours(), 2), b = Je(s.getMinutes(), 2), y = Je(s.getSeconds(), 2), S = f === "" ? "" : " ";
    f = "".concat(f).concat(S).concat(k).concat(d).concat(b).concat(d).concat(y);
  }
  return f;
}
function O3(e) {
  if (R(1, arguments), Lr(e) !== "object")
    throw new Error("Duration must be an object");
  var n = e.years, t = n === void 0 ? 0 : n, a = e.months, s = a === void 0 ? 0 : a, l = e.days, A = l === void 0 ? 0 : l, f = e.hours, u = f === void 0 ? 0 : f, d = e.minutes, h = d === void 0 ? 0 : d, m = e.seconds, v = m === void 0 ? 0 : m;
  return "P".concat(t, "Y").concat(s, "M").concat(A, "DT").concat(u, "H").concat(h, "M").concat(v, "S");
}
function Q3(e, n) {
  var t;
  if (arguments.length < 1)
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  var a = L(e);
  if (!Ur(a))
    throw new RangeError("Invalid time value");
  var s = Number((t = n == null ? void 0 : n.fractionDigits) !== null && t !== void 0 ? t : 0);
  if (!(s >= 0 && s <= 3))
    throw new RangeError("fractionDigits must be between 0 and 3 inclusively");
  var l = Je(a.getDate(), 2), A = Je(a.getMonth() + 1, 2), f = a.getFullYear(), u = Je(a.getHours(), 2), d = Je(a.getMinutes(), 2), h = Je(a.getSeconds(), 2), m = "";
  if (s > 0) {
    var v = a.getMilliseconds(), k = Math.floor(v * Math.pow(10, s - 3));
    m = "." + Je(k, s);
  }
  var b = "", y = a.getTimezoneOffset();
  if (y !== 0) {
    var S = Math.abs(y), T = Je(he(S / 60), 2), Q = Je(S % 60, 2), B = y < 0 ? "+" : "-";
    b = "".concat(B).concat(T, ":").concat(Q);
  } else
    b = "Z";
  return "".concat(f, "-").concat(A, "-").concat(l, "T").concat(u, ":").concat(d, ":").concat(h).concat(m).concat(b);
}
var N3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], H3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function B3(e) {
  if (arguments.length < 1)
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  var n = L(e);
  if (!Ur(n))
    throw new RangeError("Invalid time value");
  var t = N3[n.getUTCDay()], a = Je(n.getUTCDate(), 2), s = H3[n.getUTCMonth()], l = n.getUTCFullYear(), A = Je(n.getUTCHours(), 2), f = Je(n.getUTCMinutes(), 2), u = Je(n.getUTCSeconds(), 2);
  return "".concat(t, ", ").concat(a, " ").concat(s, " ").concat(l, " ").concat(A, ":").concat(f, ":").concat(u, " GMT");
}
function U3(e, n, t) {
  var a, s, l, A, f, u, d, h, m, v;
  R(2, arguments);
  var k = L(e), b = L(n), y = _t(), S = (a = (s = t == null ? void 0 : t.locale) !== null && s !== void 0 ? s : y.locale) !== null && a !== void 0 ? a : Ps, T = he((l = (A = (f = (u = t == null ? void 0 : t.weekStartsOn) !== null && u !== void 0 ? u : t == null || (d = t.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && f !== void 0 ? f : y.weekStartsOn) !== null && A !== void 0 ? A : (m = y.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && l !== void 0 ? l : 0);
  if (!S.localize)
    throw new RangeError("locale must contain localize property");
  if (!S.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!S.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var Q = vr(k, b);
  if (isNaN(Q))
    throw new RangeError("Invalid time value");
  var B;
  Q < -6 ? B = "other" : Q < -1 ? B = "lastWeek" : Q < 0 ? B = "yesterday" : Q < 1 ? B = "today" : Q < 2 ? B = "tomorrow" : Q < 7 ? B = "nextWeek" : B = "other";
  var K = js(k, Mn(k)), $ = js(b, Mn(b)), Y = S.formatRelative(B, K, $, {
    locale: S,
    weekStartsOn: T
  });
  return Tm(k, Y, {
    locale: S,
    weekStartsOn: T
  });
}
function L3(e) {
  R(1, arguments);
  var n = he(e);
  return L(n * 1e3);
}
function jm(e) {
  R(1, arguments);
  var n = L(e), t = n.getDate();
  return t;
}
function dA(e) {
  R(1, arguments);
  var n = L(e), t = n.getDay();
  return t;
}
function P3(e) {
  R(1, arguments);
  var n = L(e), t = vr(n, yf(n)), a = t + 1;
  return a;
}
function Om(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = n.getMonth(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(t, a + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function Qm(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear();
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}
function z3(e) {
  R(1, arguments);
  var n = L(e);
  return String(new Date(n)) === "Invalid Date" ? NaN : Qm(n) ? 366 : 365;
}
function Y3(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = Math.floor(t / 10) * 10;
  return a;
}
function F3() {
  return ao({}, _t());
}
function Z3(e) {
  R(1, arguments);
  var n = L(e), t = n.getHours();
  return t;
}
function Nm(e) {
  R(1, arguments);
  var n = L(e), t = n.getDay();
  return t === 0 && (t = 7), t;
}
var G3 = 6048e5;
function Hm(e) {
  R(1, arguments);
  var n = L(e), t = Br(n).getTime() - ca(n).getTime();
  return Math.round(t / G3) + 1;
}
var K3 = 6048e5;
function X3(e) {
  R(1, arguments);
  var n = ca(e), t = ca(iA(n, 60)), a = t.valueOf() - n.valueOf();
  return Math.round(a / K3);
}
function W3(e) {
  R(1, arguments);
  var n = L(e), t = n.getMilliseconds();
  return t;
}
function q3(e) {
  R(1, arguments);
  var n = L(e), t = n.getMinutes();
  return t;
}
function V3(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth();
  return t;
}
var _3 = 24 * 60 * 60 * 1e3;
function $3(e, n) {
  R(2, arguments);
  var t = e || {}, a = n || {}, s = L(t.start).getTime(), l = L(t.end).getTime(), A = L(a.start).getTime(), f = L(a.end).getTime();
  if (!(s <= l && A <= f))
    throw new RangeError("Invalid interval");
  var u = s < f && A < l;
  if (!u)
    return 0;
  var d = A < s ? s : A, h = f > l ? l : f, m = h - d;
  return Math.ceil(m / _3);
}
function eM(e) {
  R(1, arguments);
  var n = L(e), t = n.getSeconds();
  return t;
}
function Bm(e) {
  R(1, arguments);
  var n = L(e), t = n.getTime();
  return t;
}
function tM(e) {
  return R(1, arguments), Math.floor(Bm(e) / 1e3);
}
function Um(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = L(e), m = h.getFullYear(), v = _t(), k = he((t = (a = (s = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : v.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = v.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(k >= 1 && k <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = /* @__PURE__ */ new Date(0);
  b.setFullYear(m + 1, 0, k), b.setHours(0, 0, 0, 0);
  var y = Wn(b, n), S = /* @__PURE__ */ new Date(0);
  S.setFullYear(m, 0, k), S.setHours(0, 0, 0, 0);
  var T = Wn(S, n);
  return h.getTime() >= y.getTime() ? m + 1 : h.getTime() >= T.getTime() ? m : m - 1;
}
function ql(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : h.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), v = Um(e, n), k = /* @__PURE__ */ new Date(0);
  k.setFullYear(v, 0, m), k.setHours(0, 0, 0, 0);
  var b = Wn(k, n);
  return b;
}
var nM = 6048e5;
function Lm(e, n) {
  R(1, arguments);
  var t = L(e), a = Wn(t, n).getTime() - ql(t, n).getTime();
  return Math.round(a / nM) + 1;
}
function rM(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = jm(e);
  if (isNaN(v))
    return NaN;
  var k = dA(fA(e)), b = m - k;
  b <= 0 && (b += 7);
  var y = v - b;
  return Math.ceil(y / 7) + 1;
}
function Pm(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth();
  return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(0, 0, 0, 0), n;
}
function aM(e, n) {
  return R(1, arguments), Fl(Pm(e), fA(e), n) + 1;
}
function sM(e) {
  return R(1, arguments), L(e).getFullYear();
}
function iM(e) {
  return R(1, arguments), Math.floor(e * Pa);
}
function oM(e) {
  return R(1, arguments), Math.floor(e * df);
}
function lM(e) {
  return R(1, arguments), Math.floor(e * no);
}
function AM(e) {
  R(1, arguments);
  var n = L(e.start), t = L(e.end);
  if (isNaN(n.getTime()))
    throw new RangeError("Start Date is invalid");
  if (isNaN(t.getTime()))
    throw new RangeError("End Date is invalid");
  var a = {};
  a.years = Math.abs(wm(t, n));
  var s = ar(t, n), l = Ms(n, {
    years: s * a.years
  });
  a.months = Math.abs(uA(t, l));
  var A = Ms(l, {
    months: s * a.months
  });
  a.days = Math.abs(wf(t, A));
  var f = Ms(A, {
    days: s * a.days
  });
  a.hours = Math.abs(Zl(t, f));
  var u = Ms(f, {
    hours: s * a.hours
  });
  a.minutes = Math.abs(Gl(t, u));
  var d = Ms(u, {
    minutes: s * a.minutes
  });
  return a.seconds = Math.abs(Js(t, d)), a;
}
function cM(e, n, t) {
  var a;
  R(1, arguments);
  var s;
  return uM(n) ? s = n : t = n, new Intl.DateTimeFormat((a = t) === null || a === void 0 ? void 0 : a.locale, s).format(e);
}
function uM(e) {
  return e !== void 0 && !("locale" in e);
}
function fM(e, n, t) {
  R(2, arguments);
  var a = 0, s, l = L(e), A = L(n);
  if (t != null && t.unit)
    s = t == null ? void 0 : t.unit, s === "second" ? a = Js(l, A) : s === "minute" ? a = Gl(l, A) : s === "hour" ? a = Zl(l, A) : s === "day" ? a = vr(l, A) : s === "week" ? a = Fl(l, A) : s === "month" ? a = Yl(l, A) : s === "quarter" ? a = Nl(l, A) : s === "year" && (a = Pi(l, A));
  else {
    var f = Js(l, A);
    Math.abs(f) < lA ? (a = Js(l, A), s = "second") : Math.abs(f) < no ? (a = Gl(l, A), s = "minute") : Math.abs(f) < AA && Math.abs(vr(l, A)) < 1 ? (a = Zl(l, A), s = "hour") : Math.abs(f) < dm && (a = vr(l, A)) && Math.abs(a) < 7 ? s = "day" : Math.abs(f) < vf ? (a = Fl(l, A), s = "week") : Math.abs(f) < hm ? (a = Yl(l, A), s = "month") : Math.abs(f) < gf && Nl(l, A) < 4 ? (a = Nl(l, A), s = "quarter") : (a = Pi(l, A), s = "year");
  }
  var u = new Intl.RelativeTimeFormat(t == null ? void 0 : t.locale, {
    localeMatcher: t == null ? void 0 : t.localeMatcher,
    numeric: (t == null ? void 0 : t.numeric) || "auto",
    style: t == null ? void 0 : t.style
  });
  return u.format(a, s);
}
function dM(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getTime() > a.getTime();
}
function hM(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getTime() < a.getTime();
}
function pM(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getTime() === a.getTime();
}
function mM(e, n, t) {
  if (arguments.length < 3)
    throw new TypeError("3 argument required, but only " + arguments.length + " present");
  var a = new Date(e, n, t);
  return a.getFullYear() === e && a.getMonth() === n && a.getDate() === t;
}
function gM(e) {
  return R(1, arguments), L(e).getDate() === 1;
}
function vM(e) {
  return R(1, arguments), L(e).getDay() === 5;
}
function wM(e) {
  return R(1, arguments), L(e).getTime() > Date.now();
}
function $h(e, n) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = Ck(e)) || n && e && typeof e.length == "number") {
      t && (e = t);
      var a = 0, s = function() {
      };
      return {
        s,
        n: function() {
          return a >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[a++]
          };
        },
        e: function(d) {
          throw d;
        },
        f: s
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var l = !0, A = !1, f;
  return {
    s: function() {
      t = t.call(e);
    },
    n: function() {
      var d = t.next();
      return l = d.done, d;
    },
    e: function(d) {
      A = !0, f = d;
    },
    f: function() {
      try {
        !l && t.return != null && t.return();
      } finally {
        if (A)
          throw f;
      }
    }
  };
}
var xM = 10, zm = /* @__PURE__ */ function() {
  function e() {
    _e(this, e), ge(this, "priority", void 0), ge(this, "subPriority", 0);
  }
  return $e(e, [{
    key: "validate",
    value: function(t, a) {
      return !0;
    }
  }]), e;
}(), kM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t(a, s, l, A, f) {
    var u;
    return _e(this, t), u = n.call(this), u.value = a, u.validateValue = s, u.setValue = l, u.priority = A, f && (u.subPriority = f), u;
  }
  return $e(t, [{
    key: "validate",
    value: function(s, l) {
      return this.validateValue(s, this.value, l);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return this.setValue(s, l, this.value, A);
    }
  }]), t;
}(zm), bM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", xM), ge(ke(a), "subPriority", -1), a;
  }
  return $e(t, [{
    key: "set",
    value: function(s, l) {
      if (l.timestampIsSet)
        return s;
      var A = /* @__PURE__ */ new Date(0);
      return A.setFullYear(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()), A.setHours(s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()), A;
    }
  }]), t;
}(zm), ht = /* @__PURE__ */ function() {
  function e() {
    _e(this, e), ge(this, "incompatibleTokens", void 0), ge(this, "priority", void 0), ge(this, "subPriority", void 0);
  }
  return $e(e, [{
    key: "run",
    value: function(t, a, s, l) {
      var A = this.parse(t, a, s, l);
      return A ? {
        setter: new kM(A.value, this.validate, this.set, this.priority, this.subPriority),
        rest: A.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(t, a, s) {
      return !0;
    }
  }]), e;
}(), yM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 140), ge(ke(a), "incompatibleTokens", ["R", "u", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "G":
        case "GG":
        case "GGG":
          return A.era(s, {
            width: "abbreviated"
          }) || A.era(s, {
            width: "narrow"
          });
        case "GGGGG":
          return A.era(s, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return A.era(s, {
            width: "wide"
          }) || A.era(s, {
            width: "abbreviated"
          }) || A.era(s, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return l.era = A, s.setUTCFullYear(A, 0, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), Zt = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, pr = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Gt(e, n) {
  return e && {
    value: n(e.value),
    rest: e.rest
  };
}
function Ot(e, n) {
  var t = n.match(e);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function mr(e, n) {
  var t = n.match(e);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  var a = t[1] === "+" ? 1 : -1, s = t[2] ? parseInt(t[2], 10) : 0, l = t[3] ? parseInt(t[3], 10) : 0, A = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: a * (s * Pa + l * La + A * oA),
    rest: n.slice(t[0].length)
  };
}
function Ym(e) {
  return Ot(Zt.anyDigitsSigned, e);
}
function Bt(e, n) {
  switch (e) {
    case 1:
      return Ot(Zt.singleDigit, n);
    case 2:
      return Ot(Zt.twoDigits, n);
    case 3:
      return Ot(Zt.threeDigits, n);
    case 4:
      return Ot(Zt.fourDigits, n);
    default:
      return Ot(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function Vl(e, n) {
  switch (e) {
    case 1:
      return Ot(Zt.singleDigitSigned, n);
    case 2:
      return Ot(Zt.twoDigitsSigned, n);
    case 3:
      return Ot(Zt.threeDigitsSigned, n);
    case 4:
      return Ot(Zt.fourDigitsSigned, n);
    default:
      return Ot(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function Mf(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Fm(e, n) {
  var t = n > 0, a = t ? n : 1 - n, s;
  if (a <= 50)
    s = e || 100;
  else {
    var l = a + 50, A = Math.floor(l / 100) * 100, f = e >= l % 100;
    s = e + A - (f ? 100 : 0);
  }
  return t ? s : 1 - s;
}
function Zm(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
var EM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 130), ge(ke(a), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return {
          year: d,
          isTwoDigitYear: l === "yy"
        };
      };
      switch (l) {
        case "y":
          return Gt(Bt(4, s), f);
        case "yo":
          return Gt(A.ordinalNumber(s, {
            unit: "year"
          }), f);
        default:
          return Gt(Bt(l.length, s), f);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l.isTwoDigitYear || l.year > 0;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = s.getUTCFullYear();
      if (A.isTwoDigitYear) {
        var u = Fm(A.year, f);
        return s.setUTCFullYear(u, 0, 1), s.setUTCHours(0, 0, 0, 0), s;
      }
      var d = !("era" in l) || l.era === 1 ? A.year : 1 - A.year;
      return s.setUTCFullYear(d, 0, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), MM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 130), ge(ke(a), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return {
          year: d,
          isTwoDigitYear: l === "YY"
        };
      };
      switch (l) {
        case "Y":
          return Gt(Bt(4, s), f);
        case "Yo":
          return Gt(A.ordinalNumber(s, {
            unit: "year"
          }), f);
        default:
          return Gt(Bt(l.length, s), f);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l.isTwoDigitYear || l.year > 0;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      var u = Ef(s, f);
      if (A.isTwoDigitYear) {
        var d = Fm(A.year, u);
        return s.setUTCFullYear(d, 0, f.firstWeekContainsDate), s.setUTCHours(0, 0, 0, 0), Qa(s, f);
      }
      var h = !("era" in l) || l.era === 1 ? A.year : 1 - A.year;
      return s.setUTCFullYear(h, 0, f.firstWeekContainsDate), s.setUTCHours(0, 0, 0, 0), Qa(s, f);
    }
  }]), t;
}(ht), SM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 130), ge(ke(a), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l) {
      return Vl(l === "R" ? 4 : l.length, s);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = /* @__PURE__ */ new Date(0);
      return f.setUTCFullYear(A, 0, 4), f.setUTCHours(0, 0, 0, 0), Os(f);
    }
  }]), t;
}(ht), IM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 130), ge(ke(a), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l) {
      return Vl(l === "u" ? 4 : l.length, s);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCFullYear(A, 0, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), JM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 120), ge(ke(a), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "Q":
        case "QQ":
          return Bt(l.length, s);
        case "Qo":
          return A.ordinalNumber(s, {
            unit: "quarter"
          });
        case "QQQ":
          return A.quarter(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.quarter(s, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return A.quarter(s, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return A.quarter(s, {
            width: "wide",
            context: "formatting"
          }) || A.quarter(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.quarter(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 4;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth((A - 1) * 3, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), TM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 120), ge(ke(a), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "q":
        case "qq":
          return Bt(l.length, s);
        case "qo":
          return A.ordinalNumber(s, {
            unit: "quarter"
          });
        case "qqq":
          return A.quarter(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.quarter(s, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return A.quarter(s, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return A.quarter(s, {
            width: "wide",
            context: "standalone"
          }) || A.quarter(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.quarter(s, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 4;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth((A - 1) * 3, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), CM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), ge(ke(a), "priority", 110), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return d - 1;
      };
      switch (l) {
        case "M":
          return Gt(Ot(Zt.month, s), f);
        case "MM":
          return Gt(Bt(2, s), f);
        case "Mo":
          return Gt(A.ordinalNumber(s, {
            unit: "month"
          }), f);
        case "MMM":
          return A.month(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.month(s, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return A.month(s, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return A.month(s, {
            width: "wide",
            context: "formatting"
          }) || A.month(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.month(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 11;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth(A, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), DM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 110), ge(ke(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return d - 1;
      };
      switch (l) {
        case "L":
          return Gt(Ot(Zt.month, s), f);
        case "LL":
          return Gt(Bt(2, s), f);
        case "Lo":
          return Gt(A.ordinalNumber(s, {
            unit: "month"
          }), f);
        case "LLL":
          return A.month(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.month(s, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return A.month(s, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return A.month(s, {
            width: "wide",
            context: "standalone"
          }) || A.month(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.month(s, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 11;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth(A, 1), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht);
function RM(e, n, t) {
  R(2, arguments);
  var a = L(e), s = he(n), l = Mm(a, t) - s;
  return a.setUTCDate(a.getUTCDate() - l * 7), a;
}
var jM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 100), ge(ke(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "w":
          return Ot(Zt.week, s);
        case "wo":
          return A.ordinalNumber(s, {
            unit: "week"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 53;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      return Qa(RM(s, A, f), f);
    }
  }]), t;
}(ht);
function OM(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = Em(t) - a;
  return t.setUTCDate(t.getUTCDate() - s * 7), t;
}
var QM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 100), ge(ke(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "I":
          return Ot(Zt.week, s);
        case "Io":
          return A.ordinalNumber(s, {
            unit: "week"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 53;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return Os(OM(s, A));
    }
  }]), t;
}(ht), NM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], HM = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], BM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 90), ge(ke(a), "subPriority", 1), ge(ke(a), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "d":
          return Ot(Zt.date, s);
        case "do":
          return A.ordinalNumber(s, {
            unit: "date"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      var A = s.getUTCFullYear(), f = Zm(A), u = s.getUTCMonth();
      return f ? l >= 1 && l <= HM[u] : l >= 1 && l <= NM[u];
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCDate(A), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), UM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 90), ge(ke(a), "subpriority", 1), ge(ke(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "D":
        case "DD":
          return Ot(Zt.dayOfYear, s);
        case "Do":
          return A.ordinalNumber(s, {
            unit: "date"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      var A = s.getUTCFullYear(), f = Zm(A);
      return f ? l >= 1 && l <= 366 : l >= 1 && l <= 365;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMonth(0, A), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht);
function Sf(e, n, t) {
  var a, s, l, A, f, u, d, h;
  R(2, arguments);
  var m = _t(), v = he((a = (s = (l = (A = t == null ? void 0 : t.weekStartsOn) !== null && A !== void 0 ? A : t == null || (f = t.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && l !== void 0 ? l : m.weekStartsOn) !== null && s !== void 0 ? s : (d = m.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!(v >= 0 && v <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var k = L(e), b = he(n), y = k.getUTCDay(), S = b % 7, T = (S + 7) % 7, Q = (T < v ? 7 : 0) + b - y;
  return k.setUTCDate(k.getUTCDate() + Q), k;
}
var LM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 90), ge(ke(a), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "E":
        case "EE":
        case "EEE":
          return A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return A.day(s, {
            width: "wide",
            context: "formatting"
          }) || A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 6;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      return s = Sf(s, A, f), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), PM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 90), ge(ke(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A, f) {
      var u = function(h) {
        var m = Math.floor((h - 1) / 7) * 7;
        return (h + f.weekStartsOn + 6) % 7 + m;
      };
      switch (l) {
        case "e":
        case "ee":
          return Gt(Bt(l.length, s), u);
        case "eo":
          return Gt(A.ordinalNumber(s, {
            unit: "day"
          }), u);
        case "eee":
          return A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return A.day(s, {
            width: "wide",
            context: "formatting"
          }) || A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 6;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      return s = Sf(s, A, f), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), zM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 90), ge(ke(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A, f) {
      var u = function(h) {
        var m = Math.floor((h - 1) / 7) * 7;
        return (h + f.weekStartsOn + 6) % 7 + m;
      };
      switch (l) {
        case "c":
        case "cc":
          return Gt(Bt(l.length, s), u);
        case "co":
          return Gt(A.ordinalNumber(s, {
            unit: "day"
          }), u);
        case "ccc":
          return A.day(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.day(s, {
            width: "short",
            context: "standalone"
          }) || A.day(s, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return A.day(s, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return A.day(s, {
            width: "short",
            context: "standalone"
          }) || A.day(s, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return A.day(s, {
            width: "wide",
            context: "standalone"
          }) || A.day(s, {
            width: "abbreviated",
            context: "standalone"
          }) || A.day(s, {
            width: "short",
            context: "standalone"
          }) || A.day(s, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 6;
    }
  }, {
    key: "set",
    value: function(s, l, A, f) {
      return s = Sf(s, A, f), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht);
function YM(e, n) {
  R(2, arguments);
  var t = he(n);
  t % 7 === 0 && (t = t - 7);
  var a = 1, s = L(e), l = s.getUTCDay(), A = t % 7, f = (A + 7) % 7, u = (f < a ? 7 : 0) + t - l;
  return s.setUTCDate(s.getUTCDate() + u), s;
}
var FM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 90), ge(ke(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      var f = function(d) {
        return d === 0 ? 7 : d;
      };
      switch (l) {
        case "i":
        case "ii":
          return Bt(l.length, s);
        case "io":
          return A.ordinalNumber(s, {
            unit: "day"
          });
        case "iii":
          return Gt(A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          }), f);
        case "iiiii":
          return Gt(A.day(s, {
            width: "narrow",
            context: "formatting"
          }), f);
        case "iiiiii":
          return Gt(A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          }), f);
        case "iiii":
        default:
          return Gt(A.day(s, {
            width: "wide",
            context: "formatting"
          }) || A.day(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.day(s, {
            width: "short",
            context: "formatting"
          }) || A.day(s, {
            width: "narrow",
            context: "formatting"
          }), f);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 7;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s = YM(s, A), s.setUTCHours(0, 0, 0, 0), s;
    }
  }]), t;
}(ht), ZM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 80), ge(ke(a), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "a":
        case "aa":
        case "aaa":
          return A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return A.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCHours(Mf(A), 0, 0, 0), s;
    }
  }]), t;
}(ht), GM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 80), ge(ke(a), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "b":
        case "bb":
        case "bbb":
          return A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return A.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCHours(Mf(A), 0, 0, 0), s;
    }
  }]), t;
}(ht), KM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 80), ge(ke(a), "incompatibleTokens", ["a", "b", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "B":
        case "BB":
        case "BBB":
          return A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return A.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }) || A.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCHours(Mf(A), 0, 0, 0), s;
    }
  }]), t;
}(ht), XM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 70), ge(ke(a), "incompatibleTokens", ["H", "K", "k", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "h":
          return Ot(Zt.hour12h, s);
        case "ho":
          return A.ordinalNumber(s, {
            unit: "hour"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 12;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = s.getUTCHours() >= 12;
      return f && A < 12 ? s.setUTCHours(A + 12, 0, 0, 0) : !f && A === 12 ? s.setUTCHours(0, 0, 0, 0) : s.setUTCHours(A, 0, 0, 0), s;
    }
  }]), t;
}(ht), WM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 70), ge(ke(a), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "H":
          return Ot(Zt.hour23h, s);
        case "Ho":
          return A.ordinalNumber(s, {
            unit: "hour"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 23;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCHours(A, 0, 0, 0), s;
    }
  }]), t;
}(ht), qM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 70), ge(ke(a), "incompatibleTokens", ["h", "H", "k", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "K":
          return Ot(Zt.hour11h, s);
        case "Ko":
          return A.ordinalNumber(s, {
            unit: "hour"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 11;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = s.getUTCHours() >= 12;
      return f && A < 12 ? s.setUTCHours(A + 12, 0, 0, 0) : s.setUTCHours(A, 0, 0, 0), s;
    }
  }]), t;
}(ht), VM = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 70), ge(ke(a), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "k":
          return Ot(Zt.hour24h, s);
        case "ko":
          return A.ordinalNumber(s, {
            unit: "hour"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 1 && l <= 24;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      var f = A <= 24 ? A % 24 : A;
      return s.setUTCHours(f, 0, 0, 0), s;
    }
  }]), t;
}(ht), _M = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 60), ge(ke(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "m":
          return Ot(Zt.minute, s);
        case "mo":
          return A.ordinalNumber(s, {
            unit: "minute"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 59;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMinutes(A, 0, 0), s;
    }
  }]), t;
}(ht), $M = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 50), ge(ke(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l, A) {
      switch (l) {
        case "s":
          return Ot(Zt.second, s);
        case "so":
          return A.ordinalNumber(s, {
            unit: "second"
          });
        default:
          return Bt(l.length, s);
      }
    }
  }, {
    key: "validate",
    value: function(s, l) {
      return l >= 0 && l <= 59;
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCSeconds(A, 0), s;
    }
  }]), t;
}(ht), eS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 30), ge(ke(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l) {
      var A = function(u) {
        return Math.floor(u * Math.pow(10, -l.length + 3));
      };
      return Gt(Bt(l.length, s), A);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return s.setUTCMilliseconds(A), s;
    }
  }]), t;
}(ht), tS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 10), ge(ke(a), "incompatibleTokens", ["t", "T", "x"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l) {
      switch (l) {
        case "X":
          return mr(pr.basicOptionalMinutes, s);
        case "XX":
          return mr(pr.basic, s);
        case "XXXX":
          return mr(pr.basicOptionalSeconds, s);
        case "XXXXX":
          return mr(pr.extendedOptionalSeconds, s);
        case "XXX":
        default:
          return mr(pr.extended, s);
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return l.timestampIsSet ? s : new Date(s.getTime() - A);
    }
  }]), t;
}(ht), nS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 10), ge(ke(a), "incompatibleTokens", ["t", "T", "X"]), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s, l) {
      switch (l) {
        case "x":
          return mr(pr.basicOptionalMinutes, s);
        case "xx":
          return mr(pr.basic, s);
        case "xxxx":
          return mr(pr.basicOptionalSeconds, s);
        case "xxxxx":
          return mr(pr.extendedOptionalSeconds, s);
        case "xxx":
        default:
          return mr(pr.extended, s);
      }
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return l.timestampIsSet ? s : new Date(s.getTime() - A);
    }
  }]), t;
}(ht), rS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 40), ge(ke(a), "incompatibleTokens", "*"), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s) {
      return Ym(s);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return [new Date(A * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), t;
}(ht), aS = /* @__PURE__ */ function(e) {
  ot(t, e);
  var n = lt(t);
  function t() {
    var a;
    _e(this, t);
    for (var s = arguments.length, l = new Array(s), A = 0; A < s; A++)
      l[A] = arguments[A];
    return a = n.call.apply(n, [this].concat(l)), ge(ke(a), "priority", 20), ge(ke(a), "incompatibleTokens", "*"), a;
  }
  return $e(t, [{
    key: "parse",
    value: function(s) {
      return Ym(s);
    }
  }, {
    key: "set",
    value: function(s, l, A) {
      return [new Date(A), {
        timestampIsSet: !0
      }];
    }
  }]), t;
}(ht), sS = {
  G: new yM(),
  y: new EM(),
  Y: new MM(),
  R: new SM(),
  u: new IM(),
  Q: new JM(),
  q: new TM(),
  M: new CM(),
  L: new DM(),
  w: new jM(),
  I: new QM(),
  d: new BM(),
  D: new UM(),
  E: new LM(),
  e: new PM(),
  c: new zM(),
  i: new FM(),
  a: new ZM(),
  b: new GM(),
  B: new KM(),
  h: new XM(),
  H: new WM(),
  K: new qM(),
  k: new VM(),
  m: new _M(),
  s: new $M(),
  S: new eS(),
  X: new tS(),
  x: new nS(),
  t: new rS(),
  T: new aS()
}, iS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, oS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, lS = /^'([^]*?)'?$/, AS = /''/g, cS = /\S/, uS = /[a-zA-Z]/;
function Gm(e, n, t, a) {
  var s, l, A, f, u, d, h, m, v, k, b, y, S, T, Q, B, K, $;
  R(3, arguments);
  var Y = String(e), V = String(n), re = _t(), le = (s = (l = a == null ? void 0 : a.locale) !== null && l !== void 0 ? l : re.locale) !== null && s !== void 0 ? s : Ps;
  if (!le.match)
    throw new RangeError("locale must contain match property");
  var ne = he((A = (f = (u = (d = a == null ? void 0 : a.firstWeekContainsDate) !== null && d !== void 0 ? d : a == null || (h = a.locale) === null || h === void 0 || (m = h.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && u !== void 0 ? u : re.firstWeekContainsDate) !== null && f !== void 0 ? f : (v = re.locale) === null || v === void 0 || (k = v.options) === null || k === void 0 ? void 0 : k.firstWeekContainsDate) !== null && A !== void 0 ? A : 1);
  if (!(ne >= 1 && ne <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ae = he((b = (y = (S = (T = a == null ? void 0 : a.weekStartsOn) !== null && T !== void 0 ? T : a == null || (Q = a.locale) === null || Q === void 0 || (B = Q.options) === null || B === void 0 ? void 0 : B.weekStartsOn) !== null && S !== void 0 ? S : re.weekStartsOn) !== null && y !== void 0 ? y : (K = re.locale) === null || K === void 0 || ($ = K.options) === null || $ === void 0 ? void 0 : $.weekStartsOn) !== null && b !== void 0 ? b : 0);
  if (!(ae >= 0 && ae <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (V === "")
    return Y === "" ? L(t) : /* @__PURE__ */ new Date(NaN);
  var j = {
    firstWeekContainsDate: ne,
    weekStartsOn: ae,
    locale: le
  }, _ = [new bM()], F = V.match(oS).map(function(qe) {
    var Le = qe[0];
    if (Le in Ru) {
      var ee = Ru[Le];
      return ee(qe, le.formatLong);
    }
    return qe;
  }).join("").match(iS), W = [], H = $h(F), Z;
  try {
    var pe = function() {
      var Le = Z.value;
      !(a != null && a.useAdditionalWeekYearTokens) && Jm(Le) && Xl(Le, V, e), !(a != null && a.useAdditionalDayOfYearTokens) && Im(Le) && Xl(Le, V, e);
      var ee = Le[0], Se = sS[ee];
      if (Se) {
        var Qe = Se.incompatibleTokens;
        if (Array.isArray(Qe)) {
          var Xe = W.find(function(Lt) {
            return Qe.includes(Lt.token) || Lt.token === ee;
          });
          if (Xe)
            throw new RangeError("The format string mustn't contain `".concat(Xe.fullToken, "` and `").concat(Le, "` at the same time"));
        } else if (Se.incompatibleTokens === "*" && W.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(Le, "` and any other token at the same time"));
        W.push({
          token: ee,
          fullToken: Le
        });
        var xt = Se.run(Y, Le, le.match, j);
        if (!xt)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        _.push(xt.setter), Y = xt.rest;
      } else {
        if (ee.match(uS))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + ee + "`");
        if (Le === "''" ? Le = "'" : ee === "'" && (Le = fS(Le)), Y.indexOf(Le) === 0)
          Y = Y.slice(Le.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (H.s(); !(Z = H.n()).done; ) {
      var Me = pe();
      if (Lr(Me) === "object")
        return Me.v;
    }
  } catch (qe) {
    H.e(qe);
  } finally {
    H.f();
  }
  if (Y.length > 0 && cS.test(Y))
    return /* @__PURE__ */ new Date(NaN);
  var G = _.map(function(qe) {
    return qe.priority;
  }).sort(function(qe, Le) {
    return Le - qe;
  }).filter(function(qe, Le, ee) {
    return ee.indexOf(qe) === Le;
  }).map(function(qe) {
    return _.filter(function(Le) {
      return Le.priority === qe;
    }).sort(function(Le, ee) {
      return ee.subPriority - Le.subPriority;
    });
  }).map(function(qe) {
    return qe[0];
  }), Ie = L(t);
  if (isNaN(Ie.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var be = js(Ie, Mn(Ie)), Ee = {}, de = $h(G), Ne;
  try {
    for (de.s(); !(Ne = de.n()).done; ) {
      var Mt = Ne.value;
      if (!Mt.validate(be, j))
        return /* @__PURE__ */ new Date(NaN);
      var Xt = Mt.set(be, Ee, j);
      Array.isArray(Xt) ? (be = Xt[0], ao(Ee, Xt[1])) : be = Xt;
    }
  } catch (qe) {
    de.e(qe);
  } finally {
    de.f();
  }
  return be;
}
function fS(e) {
  return e.match(lS)[1].replace(AS, "'");
}
function dS(e, n, t) {
  return R(2, arguments), Ur(Gm(e, n, /* @__PURE__ */ new Date(), t));
}
function hS(e) {
  return R(1, arguments), L(e).getDay() === 1;
}
function pS(e) {
  return R(1, arguments), L(e).getTime() < Date.now();
}
function ju(e) {
  R(1, arguments);
  var n = L(e);
  return n.setMinutes(0, 0, 0), n;
}
function Km(e, n) {
  R(2, arguments);
  var t = ju(e), a = ju(n);
  return t.getTime() === a.getTime();
}
function If(e, n, t) {
  R(2, arguments);
  var a = Wn(e, t), s = Wn(n, t);
  return a.getTime() === s.getTime();
}
function Xm(e, n) {
  return R(2, arguments), If(e, n, {
    weekStartsOn: 1
  });
}
function mS(e, n) {
  R(2, arguments);
  var t = ca(e), a = ca(n);
  return t.getTime() === a.getTime();
}
function Wm(e, n) {
  R(2, arguments);
  var t = Kl(e), a = Kl(n);
  return t.getTime() === a.getTime();
}
function qm(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getFullYear() === a.getFullYear() && t.getMonth() === a.getMonth();
}
function Vm(e, n) {
  R(2, arguments);
  var t = Gi(e), a = Gi(n);
  return t.getTime() === a.getTime();
}
function Ou(e) {
  R(1, arguments);
  var n = L(e);
  return n.setMilliseconds(0), n;
}
function _m(e, n) {
  R(2, arguments);
  var t = Ou(e), a = Ou(n);
  return t.getTime() === a.getTime();
}
function $m(e, n) {
  R(2, arguments);
  var t = L(e), a = L(n);
  return t.getFullYear() === a.getFullYear();
}
function gS(e) {
  return R(1, arguments), Km(Date.now(), e);
}
function vS(e) {
  return R(1, arguments), Xm(e, Date.now());
}
function wS(e) {
  return R(1, arguments), Wm(Date.now(), e);
}
function xS(e) {
  return R(1, arguments), qm(Date.now(), e);
}
function kS(e) {
  return R(1, arguments), Vm(Date.now(), e);
}
function bS(e) {
  return R(1, arguments), _m(Date.now(), e);
}
function yS(e, n) {
  return R(1, arguments), If(e, Date.now(), n);
}
function ES(e) {
  return R(1, arguments), $m(e, Date.now());
}
function MS(e) {
  return R(1, arguments), L(e).getDay() === 4;
}
function SS(e) {
  return R(1, arguments), ro(e, Date.now());
}
function IS(e) {
  return R(1, arguments), ro(e, wr(Date.now(), 1));
}
function JS(e) {
  return R(1, arguments), L(e).getDay() === 2;
}
function TS(e) {
  return R(1, arguments), L(e).getDay() === 3;
}
function CS(e, n) {
  R(2, arguments);
  var t = L(e).getTime(), a = L(n.start).getTime(), s = L(n.end).getTime();
  if (!(a <= s))
    throw new RangeError("Invalid interval");
  return t >= a && t <= s;
}
function hA(e, n) {
  R(2, arguments);
  var t = he(n);
  return wr(e, -t);
}
function DS(e) {
  return R(1, arguments), ro(e, hA(Date.now(), 1));
}
function RS(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = 9 + Math.floor(t / 10) * 10;
  return n.setFullYear(a + 1, 0, 0), n.setHours(0, 0, 0, 0), n;
}
function eg(e, n) {
  var t, a, s, l, A, f, u, d;
  R(1, arguments);
  var h = _t(), m = he((t = (a = (s = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (A = n.locale) === null || A === void 0 || (f = A.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : h.weekStartsOn) !== null && a !== void 0 ? a : (u = h.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6");
  var v = L(e), k = v.getDay(), b = (k < m ? -7 : 0) + 6 - (k - m);
  return v.setHours(0, 0, 0, 0), v.setDate(v.getDate() + b), v;
}
function jS(e) {
  return R(1, arguments), eg(e, {
    weekStartsOn: 1
  });
}
function OS(e) {
  R(1, arguments);
  var n = Oa(e), t = /* @__PURE__ */ new Date(0);
  t.setFullYear(n + 1, 0, 4), t.setHours(0, 0, 0, 0);
  var a = Br(t);
  return a.setDate(a.getDate() - 1), a;
}
function QS(e) {
  R(1, arguments);
  var n = L(e), t = n.getMonth(), a = t - t % 3 + 3;
  return n.setMonth(a, 0), n.setHours(0, 0, 0, 0), n;
}
function NS(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear();
  return n.setFullYear(t + 1, 0, 0), n.setHours(0, 0, 0, 0), n;
}
var HS = /(\w)\1*|''|'(''|[^'])+('|$)|./g, BS = /^'([^]*?)'?$/, US = /''/g, LS = /[a-zA-Z]/;
function PS(e, n) {
  R(2, arguments);
  var t = L(e);
  if (!Ur(t))
    throw new RangeError("Invalid time value");
  var a = Mn(t), s = js(t, a), l = n.match(HS);
  if (!l)
    return "";
  var A = l.map(function(f) {
    if (f === "''")
      return "'";
    var u = f[0];
    if (u === "'")
      return zS(f);
    var d = Dr[u];
    if (d)
      return d(s, f);
    if (u.match(LS))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + u + "`");
    return f;
  }).join("");
  return A;
}
function zS(e) {
  var n = e.match(BS);
  return n ? n[1].replace(US, "'") : e;
}
var ep = 365.2425;
function YS(e) {
  var n = e.years, t = e.months, a = e.weeks, s = e.days, l = e.hours, A = e.minutes, f = e.seconds;
  R(1, arguments);
  var u = 0;
  n && (u += n * ep), t && (u += t * (ep / 12)), a && (u += a * 7), s && (u += s);
  var d = u * 24 * 60 * 60;
  return l && (d += l * 60 * 60), A && (d += A * 60), f && (d += f), Math.round(d * 1e3);
}
function FS(e) {
  R(1, arguments);
  var n = e / Pa;
  return Math.floor(n);
}
function ZS(e) {
  R(1, arguments);
  var n = e / La;
  return Math.floor(n);
}
function GS(e) {
  R(1, arguments);
  var n = e / oA;
  return Math.floor(n);
}
function KS(e) {
  R(1, arguments);
  var n = e / df;
  return Math.floor(n);
}
function XS(e) {
  return R(1, arguments), Math.floor(e * La);
}
function WS(e) {
  return R(1, arguments), Math.floor(e * lA);
}
function qS(e) {
  R(1, arguments);
  var n = e / hf;
  return Math.floor(n);
}
function VS(e) {
  R(1, arguments);
  var n = e / pf;
  return Math.floor(n);
}
function fa(e, n) {
  R(2, arguments);
  var t = n - dA(e);
  return t <= 0 && (t += 7), wr(e, t);
}
function _S(e) {
  return R(1, arguments), fa(e, 5);
}
function $S(e) {
  return R(1, arguments), fa(e, 1);
}
function eI(e) {
  return R(1, arguments), fa(e, 6);
}
function tI(e) {
  return R(1, arguments), fa(e, 0);
}
function nI(e) {
  return R(1, arguments), fa(e, 4);
}
function rI(e) {
  return R(1, arguments), fa(e, 2);
}
function aI(e) {
  return R(1, arguments), fa(e, 3);
}
function sI(e, n) {
  var t;
  R(1, arguments);
  var a = he((t = n == null ? void 0 : n.additionalDigits) !== null && t !== void 0 ? t : 2);
  if (a !== 2 && a !== 1 && a !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var s = AI(e), l;
  if (s.date) {
    var A = cI(s.date, a);
    l = uI(A.restDateString, A.year);
  }
  if (!l || isNaN(l.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var f = l.getTime(), u = 0, d;
  if (s.time && (u = fI(s.time), isNaN(u)))
    return /* @__PURE__ */ new Date(NaN);
  if (s.timezone) {
    if (d = dI(s.timezone), isNaN(d))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var h = new Date(f + u), m = /* @__PURE__ */ new Date(0);
    return m.setFullYear(h.getUTCFullYear(), h.getUTCMonth(), h.getUTCDate()), m.setHours(h.getUTCHours(), h.getUTCMinutes(), h.getUTCSeconds(), h.getUTCMilliseconds()), m;
  }
  return new Date(f + u + d);
}
var jl = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, iI = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, oI = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, lI = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function AI(e) {
  var n = {}, t = e.split(jl.dateTimeDelimiter), a;
  if (t.length > 2)
    return n;
  if (/:/.test(t[0]) ? a = t[0] : (n.date = t[0], a = t[1], jl.timeZoneDelimiter.test(n.date) && (n.date = e.split(jl.timeZoneDelimiter)[0], a = e.substr(n.date.length, e.length))), a) {
    var s = jl.timezone.exec(a);
    s ? (n.time = a.replace(s[1], ""), n.timezone = s[1]) : n.time = a;
  }
  return n;
}
function cI(e, n) {
  var t = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"), a = e.match(t);
  if (!a)
    return {
      year: NaN,
      restDateString: ""
    };
  var s = a[1] ? parseInt(a[1]) : null, l = a[2] ? parseInt(a[2]) : null;
  return {
    year: l === null ? s : l * 100,
    restDateString: e.slice((a[1] || a[2]).length)
  };
}
function uI(e, n) {
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  var t = e.match(iI);
  if (!t)
    return /* @__PURE__ */ new Date(NaN);
  var a = !!t[4], s = Oi(t[1]), l = Oi(t[2]) - 1, A = Oi(t[3]), f = Oi(t[4]), u = Oi(t[5]) - 1;
  if (a)
    return vI(n, f, u) ? hI(n, f, u) : /* @__PURE__ */ new Date(NaN);
  var d = /* @__PURE__ */ new Date(0);
  return !mI(n, l, A) || !gI(n, s) ? /* @__PURE__ */ new Date(NaN) : (d.setUTCFullYear(n, l, Math.max(s, A)), d);
}
function Oi(e) {
  return e ? parseInt(e) : 1;
}
function fI(e) {
  var n = e.match(oI);
  if (!n)
    return NaN;
  var t = pu(n[1]), a = pu(n[2]), s = pu(n[3]);
  return wI(t, a, s) ? t * Pa + a * La + s * 1e3 : NaN;
}
function pu(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function dI(e) {
  if (e === "Z")
    return 0;
  var n = e.match(lI);
  if (!n)
    return 0;
  var t = n[1] === "+" ? -1 : 1, a = parseInt(n[2]), s = n[3] && parseInt(n[3]) || 0;
  return xI(a, s) ? t * (a * Pa + s * La) : NaN;
}
function hI(e, n, t) {
  var a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(e, 0, 4);
  var s = a.getUTCDay() || 7, l = (n - 1) * 7 + t + 1 - s;
  return a.setUTCDate(a.getUTCDate() + l), a;
}
var pI = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function tg(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function mI(e, n, t) {
  return n >= 0 && n <= 11 && t >= 1 && t <= (pI[n] || (tg(e) ? 29 : 28));
}
function gI(e, n) {
  return n >= 1 && n <= (tg(e) ? 366 : 365);
}
function vI(e, n, t) {
  return n >= 1 && n <= 53 && t >= 0 && t <= 6;
}
function wI(e, n, t) {
  return e === 24 ? n === 0 && t === 0 : t >= 0 && t < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
}
function xI(e, n) {
  return n >= 0 && n <= 59;
}
function kI(e) {
  if (R(1, arguments), typeof e == "string") {
    var n = e.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
    return n ? new Date(Date.UTC(+n[1], +n[2] - 1, +n[3], +n[4] - (+n[9] || 0) * (n[8] == "-" ? -1 : 1), +n[5] - (+n[10] || 0) * (n[8] == "-" ? -1 : 1), +n[6], +((n[7] || "0") + "00").substring(0, 3))) : /* @__PURE__ */ new Date(NaN);
  }
  return L(e);
}
function da(e, n) {
  R(2, arguments);
  var t = dA(e) - n;
  return t <= 0 && (t += 7), hA(e, t);
}
function bI(e) {
  return R(1, arguments), da(e, 5);
}
function yI(e) {
  return R(1, arguments), da(e, 1);
}
function EI(e) {
  return R(1, arguments), da(e, 6);
}
function MI(e) {
  return R(1, arguments), da(e, 0);
}
function SI(e) {
  return R(1, arguments), da(e, 4);
}
function II(e) {
  return R(1, arguments), da(e, 2);
}
function JI(e) {
  return R(1, arguments), da(e, 3);
}
function TI(e) {
  return R(1, arguments), Math.floor(e * hf);
}
function CI(e) {
  R(1, arguments);
  var n = e / mf;
  return Math.floor(n);
}
function DI(e, n) {
  var t;
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only none provided present");
  var a = he((t = n == null ? void 0 : n.nearestTo) !== null && t !== void 0 ? t : 1);
  if (a < 1 || a > 30)
    throw new RangeError("`options.nearestTo` must be between 1 and 30");
  var s = L(e), l = s.getSeconds(), A = s.getMinutes() + l / 60, f = Ls(n == null ? void 0 : n.roundingMethod), u = f(A / a) * a, d = A % a, h = Math.round(d / a) * a;
  return new Date(s.getFullYear(), s.getMonth(), s.getDate(), s.getHours(), u + h);
}
function RI(e) {
  R(1, arguments);
  var n = e / no;
  return Math.floor(n);
}
function jI(e) {
  return R(1, arguments), e * oA;
}
function OI(e) {
  R(1, arguments);
  var n = e / lA;
  return Math.floor(n);
}
function Jf(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = t.getFullYear(), l = t.getDate(), A = /* @__PURE__ */ new Date(0);
  A.setFullYear(s, a, 15), A.setHours(0, 0, 0, 0);
  var f = Om(A);
  return t.setMonth(a, Math.min(l, f)), t;
}
function QI(e, n) {
  if (R(2, arguments), Lr(n) !== "object" || n === null)
    throw new RangeError("values parameter must be an object");
  var t = L(e);
  return isNaN(t.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.year != null && t.setFullYear(n.year), n.month != null && (t = Jf(t, n.month)), n.date != null && t.setDate(he(n.date)), n.hours != null && t.setHours(he(n.hours)), n.minutes != null && t.setMinutes(he(n.minutes)), n.seconds != null && t.setSeconds(he(n.seconds)), n.milliseconds != null && t.setMilliseconds(he(n.milliseconds)), t);
}
function NI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setDate(a), t;
}
function HI(e, n, t) {
  var a, s, l, A, f, u, d, h;
  R(2, arguments);
  var m = _t(), v = he((a = (s = (l = (A = t == null ? void 0 : t.weekStartsOn) !== null && A !== void 0 ? A : t == null || (f = t.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && l !== void 0 ? l : m.weekStartsOn) !== null && s !== void 0 ? s : (d = m.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!(v >= 0 && v <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var k = L(e), b = he(n), y = k.getDay(), S = b % 7, T = (S + 7) % 7, Q = 7 - v, B = b < 0 || b > 6 ? b - (y + Q) % 7 : (T + Q) % 7 - (y + Q) % 7;
  return wr(k, B);
}
function BI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setMonth(0), t.setDate(a), t;
}
function UI(e) {
  R(1, arguments);
  var n = {}, t = _t();
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
  for (var s in e)
    Object.prototype.hasOwnProperty.call(e, s) && (e[s] === void 0 ? delete n[s] : n[s] = e[s]);
  PE(n);
}
function LI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setHours(a), t;
}
function PI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = Nm(t), l = a - s;
  return wr(t, l);
}
function zI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = Hm(t) - a;
  return t.setDate(t.getDate() - s * 7), t;
}
function YI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setMilliseconds(a), t;
}
function FI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setMinutes(a), t;
}
function ZI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n), s = Math.floor(t.getMonth() / 3) + 1, l = a - s;
  return Jf(t, t.getMonth() + l * 3);
}
function GI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return t.setSeconds(a), t;
}
function KI(e, n, t) {
  R(2, arguments);
  var a = L(e), s = he(n), l = Lm(a, t) - s;
  return a.setDate(a.getDate() - l * 7), a;
}
function XI(e, n, t) {
  var a, s, l, A, f, u, d, h;
  R(2, arguments);
  var m = _t(), v = he((a = (s = (l = (A = t == null ? void 0 : t.firstWeekContainsDate) !== null && A !== void 0 ? A : t == null || (f = t.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && l !== void 0 ? l : m.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = m.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && a !== void 0 ? a : 1), k = L(e), b = he(n), y = vr(k, ql(k, t)), S = /* @__PURE__ */ new Date(0);
  return S.setFullYear(b, 0, v), S.setHours(0, 0, 0, 0), k = ql(S, t), k.setDate(k.getDate() + y), k;
}
function WI(e, n) {
  R(2, arguments);
  var t = L(e), a = he(n);
  return isNaN(t.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.setFullYear(a), t);
}
function qI(e) {
  R(1, arguments);
  var n = L(e), t = n.getFullYear(), a = Math.floor(t / 10) * 10;
  return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
}
function VI() {
  return Rs(Date.now());
}
function _I() {
  var e = /* @__PURE__ */ new Date(), n = e.getFullYear(), t = e.getMonth(), a = e.getDate(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(n, t, a + 1), s.setHours(0, 0, 0, 0), s;
}
function $I() {
  var e = /* @__PURE__ */ new Date(), n = e.getFullYear(), t = e.getMonth(), a = e.getDate(), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(n, t, a - 1), s.setHours(0, 0, 0, 0), s;
}
function ng(e, n) {
  R(2, arguments);
  var t = he(n);
  return eo(e, -t);
}
function e5(e, n) {
  if (R(2, arguments), !n || Lr(n) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var t = n.years ? he(n.years) : 0, a = n.months ? he(n.months) : 0, s = n.weeks ? he(n.weeks) : 0, l = n.days ? he(n.days) : 0, A = n.hours ? he(n.hours) : 0, f = n.minutes ? he(n.minutes) : 0, u = n.seconds ? he(n.seconds) : 0, d = ng(e, a + t * 12), h = hA(d, l + s * 7), m = f + A * 60, v = u + m * 60, k = v * 1e3, b = new Date(h.getTime() - k);
  return b;
}
function t5(e, n) {
  R(2, arguments);
  var t = he(n);
  return rm(e, -t);
}
function n5(e, n) {
  R(2, arguments);
  var t = he(n);
  return Af(e, -t);
}
function r5(e, n) {
  R(2, arguments);
  var t = he(n);
  return cf(e, -t);
}
function a5(e, n) {
  R(2, arguments);
  var t = he(n);
  return uf(e, -t);
}
function s5(e, n) {
  R(2, arguments);
  var t = he(n);
  return om(e, -t);
}
function i5(e, n) {
  R(2, arguments);
  var t = he(n);
  return iA(e, -t);
}
function o5(e, n) {
  R(2, arguments);
  var t = he(n);
  return lm(e, -t);
}
function l5(e) {
  return R(1, arguments), Math.floor(e * ff);
}
function A5(e) {
  return R(1, arguments), Math.floor(e * pf);
}
function c5(e) {
  return R(1, arguments), Math.floor(e * mf);
}
const u5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Ms,
  addBusinessDays: rm,
  addDays: wr,
  addHours: Af,
  addISOWeekYears: im,
  addMilliseconds: to,
  addMinutes: cf,
  addMonths: eo,
  addQuarters: uf,
  addSeconds: om,
  addWeeks: iA,
  addYears: lm,
  areIntervalsOverlapping: FE,
  clamp: ZE,
  closestIndexTo: GE,
  closestTo: KE,
  compareAsc: ar,
  compareDesc: XE,
  daysInWeek: ff,
  daysInYear: um,
  daysToWeeks: qE,
  differenceInBusinessDays: VE,
  differenceInCalendarDays: vr,
  differenceInCalendarISOWeekYears: mm,
  differenceInCalendarISOWeeks: $E,
  differenceInCalendarMonths: Yl,
  differenceInCalendarQuarters: Nl,
  differenceInCalendarWeeks: Fl,
  differenceInCalendarYears: Pi,
  differenceInDays: wf,
  differenceInHours: Zl,
  differenceInISOWeekYears: n2,
  differenceInMilliseconds: cA,
  differenceInMinutes: Gl,
  differenceInMonths: uA,
  differenceInQuarters: r2,
  differenceInSeconds: Js,
  differenceInWeeks: a2,
  differenceInYears: wm,
  eachDayOfInterval: xm,
  eachHourOfInterval: s2,
  eachMinuteOfInterval: i2,
  eachMonthOfInterval: o2,
  eachQuarterOfInterval: l2,
  eachWeekOfInterval: A2,
  eachWeekendOfInterval: bf,
  eachWeekendOfMonth: c2,
  eachWeekendOfYear: u2,
  eachYearOfInterval: f2,
  endOfDay: xf,
  endOfDecade: d2,
  endOfHour: h2,
  endOfISOWeek: p2,
  endOfISOWeekYear: m2,
  endOfMinute: g2,
  endOfMonth: kf,
  endOfQuarter: v2,
  endOfSecond: w2,
  endOfToday: x2,
  endOfTomorrow: k2,
  endOfWeek: bm,
  endOfYear: km,
  endOfYesterday: b2,
  format: Tm,
  formatDistance: Dm,
  formatDistanceStrict: Rm,
  formatDistanceToNow: J3,
  formatDistanceToNowStrict: T3,
  formatDuration: D3,
  formatISO: R3,
  formatISO9075: j3,
  formatISODuration: O3,
  formatRFC3339: Q3,
  formatRFC7231: B3,
  formatRelative: U3,
  fromUnixTime: L3,
  getDate: jm,
  getDay: dA,
  getDayOfYear: P3,
  getDaysInMonth: Om,
  getDaysInYear: z3,
  getDecade: Y3,
  getDefaultOptions: F3,
  getHours: Z3,
  getISODay: Nm,
  getISOWeek: Hm,
  getISOWeekYear: Oa,
  getISOWeeksInYear: X3,
  getMilliseconds: W3,
  getMinutes: q3,
  getMonth: V3,
  getOverlappingDaysInIntervals: $3,
  getQuarter: Du,
  getSeconds: eM,
  getTime: Bm,
  getUnixTime: tM,
  getWeek: Lm,
  getWeekOfMonth: rM,
  getWeekYear: Um,
  getWeeksInMonth: aM,
  getYear: sM,
  hoursToMilliseconds: iM,
  hoursToMinutes: oM,
  hoursToSeconds: lM,
  intervalToDuration: AM,
  intlFormat: cM,
  intlFormatDistance: fM,
  isAfter: dM,
  isBefore: hM,
  isDate: pm,
  isEqual: pM,
  isExists: mM,
  isFirstDayOfMonth: gM,
  isFriday: vM,
  isFuture: wM,
  isLastDayOfMonth: vm,
  isLeapYear: Qm,
  isMatch: dS,
  isMonday: hS,
  isPast: pS,
  isSameDay: ro,
  isSameHour: Km,
  isSameISOWeek: Xm,
  isSameISOWeekYear: mS,
  isSameMinute: Wm,
  isSameMonth: qm,
  isSameQuarter: Vm,
  isSameSecond: _m,
  isSameWeek: If,
  isSameYear: $m,
  isSaturday: nm,
  isSunday: lf,
  isThisHour: gS,
  isThisISOWeek: vS,
  isThisMinute: wS,
  isThisMonth: xS,
  isThisQuarter: kS,
  isThisSecond: bS,
  isThisWeek: yS,
  isThisYear: ES,
  isThursday: MS,
  isToday: SS,
  isTomorrow: IS,
  isTuesday: JS,
  isValid: Ur,
  isWednesday: TS,
  isWeekend: Is,
  isWithinInterval: CS,
  isYesterday: DS,
  lastDayOfDecade: RS,
  lastDayOfISOWeek: jS,
  lastDayOfISOWeekYear: OS,
  lastDayOfMonth: Pm,
  lastDayOfQuarter: QS,
  lastDayOfWeek: eg,
  lastDayOfYear: NS,
  lightFormat: PS,
  max: Am,
  maxTime: fm,
  milliseconds: YS,
  millisecondsInHour: Pa,
  millisecondsInMinute: La,
  millisecondsInSecond: oA,
  millisecondsToHours: FS,
  millisecondsToMinutes: ZS,
  millisecondsToSeconds: GS,
  min: cm,
  minTime: WE,
  minutesInHour: df,
  minutesToHours: KS,
  minutesToMilliseconds: XS,
  minutesToSeconds: WS,
  monthsInQuarter: hf,
  monthsInYear: pf,
  monthsToQuarters: qS,
  monthsToYears: VS,
  nextDay: fa,
  nextFriday: _S,
  nextMonday: $S,
  nextSaturday: eI,
  nextSunday: tI,
  nextThursday: nI,
  nextTuesday: rI,
  nextWednesday: aI,
  parse: Gm,
  parseISO: sI,
  parseJSON: kI,
  previousDay: da,
  previousFriday: bI,
  previousMonday: yI,
  previousSaturday: EI,
  previousSunday: MI,
  previousThursday: SI,
  previousTuesday: II,
  previousWednesday: JI,
  quartersInYear: mf,
  quartersToMonths: TI,
  quartersToYears: CI,
  roundToNearestMinutes: DI,
  secondsInDay: AA,
  secondsInHour: no,
  secondsInMinute: lA,
  secondsInMonth: vf,
  secondsInQuarter: hm,
  secondsInWeek: dm,
  secondsInYear: gf,
  secondsToHours: RI,
  secondsToMilliseconds: jI,
  secondsToMinutes: OI,
  set: QI,
  setDate: NI,
  setDay: HI,
  setDayOfYear: BI,
  setDefaultOptions: UI,
  setHours: LI,
  setISODay: PI,
  setISOWeek: zI,
  setISOWeekYear: sm,
  setMilliseconds: YI,
  setMinutes: FI,
  setMonth: Jf,
  setQuarter: ZI,
  setSeconds: GI,
  setWeek: KI,
  setWeekYear: XI,
  setYear: WI,
  startOfDay: Rs,
  startOfDecade: qI,
  startOfHour: ju,
  startOfISOWeek: Br,
  startOfISOWeekYear: ca,
  startOfMinute: Kl,
  startOfMonth: fA,
  startOfQuarter: Gi,
  startOfSecond: Ou,
  startOfToday: VI,
  startOfTomorrow: _I,
  startOfWeek: Wn,
  startOfWeekYear: ql,
  startOfYear: yf,
  startOfYesterday: $I,
  sub: e5,
  subBusinessDays: t5,
  subDays: hA,
  subHours: n5,
  subISOWeekYears: gm,
  subMilliseconds: js,
  subMinutes: r5,
  subMonths: ng,
  subQuarters: a5,
  subSeconds: s5,
  subWeeks: i5,
  subYears: o5,
  toDate: L,
  weeksToDays: l5,
  yearsToMonths: A5,
  yearsToQuarters: c5
}, Symbol.toStringTag, { value: "Module" })), f5 = /* @__PURE__ */ Dk(u5), { add: d5, sub: h5 } = f5, p5 = {
  add: d5,
  sub: h5
}, m5 = {
  d: "days",
  w: "weeks",
  M: "months",
  y: "years",
  h: "hours",
  m: "minutes",
  s: "seconds"
}, g5 = (e) => e.toISOString().replace("T", " ").replace(/\.[0-9]{3}Z/, "");
var v5 = {
  ungroup(e) {
    return e.yg ? e.yg : e;
  },
  unescape(e) {
    const n = new RegExp(`\\\\(['"])`, "g");
    return e.replace(n, "$1");
  },
  stringToRegExp(e, n) {
    let t = e.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
    return n === "^" ? t = "^" + t : n === "$" && (t = t + "$"), new RegExp(t, "i");
  },
  relDateToAbsolute(e, n, t) {
    const a = /* @__PURE__ */ new Date(), s = p5[e](a, { [m5[t]]: n });
    return g5(s);
  },
  debug() {
  }
};
const ia = UE.parser;
ia.yy = v5;
of.lex = (e) => {
  ia.lexer.setInput(e);
  let n = ia.lexer.lex();
  const t = [];
  for (; n !== ia.lexer.EOF; )
    t.push({ token: ia.terminals_[n], matched: ia.lexer.match }), n = ia.lexer.lex();
  return t;
};
of.parse = (e, n) => ia.parse(e, n || {});
var rg = of, _l = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
_l.exports;
(function(e, n) {
  (function() {
    var t, a = "4.17.21", s = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", A = "Expected a function", f = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", d = 500, h = "__lodash_placeholder__", m = 1, v = 2, k = 4, b = 1, y = 2, S = 1, T = 2, Q = 4, B = 8, K = 16, $ = 32, Y = 64, V = 128, re = 256, le = 512, ne = 30, ae = "...", j = 800, _ = 16, F = 1, W = 2, H = 3, Z = 1 / 0, pe = 9007199254740991, Me = 17976931348623157e292, G = 0 / 0, Ie = 4294967295, be = Ie - 1, Ee = Ie >>> 1, de = [
      ["ary", V],
      ["bind", S],
      ["bindKey", T],
      ["curry", B],
      ["curryRight", K],
      ["flip", le],
      ["partial", $],
      ["partialRight", Y],
      ["rearg", re]
    ], Ne = "[object Arguments]", Mt = "[object Array]", Xt = "[object AsyncFunction]", qe = "[object Boolean]", Le = "[object Date]", ee = "[object DOMException]", Se = "[object Error]", Qe = "[object Function]", Xe = "[object GeneratorFunction]", xt = "[object Map]", Lt = "[object Number]", Dt = "[object Null]", tn = "[object Object]", Jt = "[object Promise]", xr = "[object Proxy]", rt = "[object RegExp]", Pe = "[object Set]", Pr = "[object String]", zr = "[object Symbol]", nn = "[object Undefined]", _n = "[object WeakMap]", mA = "[object WeakSet]", Yr = "[object ArrayBuffer]", Fr = "[object DataView]", sr = "[object Float32Array]", ha = "[object Float64Array]", ir = "[object Int8Array]", Fn = "[object Int16Array]", pa = "[object Int32Array]", za = "[object Uint8Array]", Ya = "[object Uint8ClampedArray]", un = "[object Uint16Array]", zs = "[object Uint32Array]", gA = /\b__p \+= '';/g, Ys = /\b(__p \+=) '' \+/g, Qn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Zr = /&(?:amp|lt|gt|quot|#39);/g, Fa = /[&<>"']/g, Fs = RegExp(Zr.source), Zs = RegExp(Fa.source), Gs = /<%-([\s\S]+?)%>/g, Ks = /<%([\s\S]+?)%>/g, Xs = /<%=([\s\S]+?)%>/g, Ws = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, so = /^\w*$/, vA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Za = /[\\^$.*+?()[\]{}|]/g, io = RegExp(Za.source), qs = /^\s+/, oo = /\s/, lo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ao = /\{\n\/\* \[wrapped with (.+)\] \*/, co = /,? & /, Gr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Vs = /[()=,{}\[\]\/\s]/, Ga = /\\(\\)?/g, ce = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ka = /\w*$/, wA = /^[-+]0x[0-9a-f]+$/i, xA = /^0b[01]+$/i, kA = /^\[object .+?Constructor\]$/, bA = /^0o[0-7]+$/i, yA = /^(?:0|[1-9]\d*)$/, EA = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xa = /($^)/, MA = /['\n\r\u2028\u2029\\]/g, Wa = "\\ud800-\\udfff", SA = "\\u0300-\\u036f", IA = "\\ufe20-\\ufe2f", JA = "\\u20d0-\\u20ff", uo = SA + IA + JA, fo = "\\u2700-\\u27bf", ho = "a-z\\xdf-\\xf6\\xf8-\\xff", TA = "\\xac\\xb1\\xd7\\xf7", po = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", CA = "\\u2000-\\u206f", DA = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", mo = "A-Z\\xc0-\\xd6\\xd8-\\xde", go = "\\ufe0e\\ufe0f", vo = TA + po + CA + DA, _s = "['’]", RA = "[" + Wa + "]", wo = "[" + vo + "]", qa = "[" + uo + "]", xo = "\\d+", jA = "[" + fo + "]", ko = "[" + ho + "]", bo = "[^" + Wa + vo + xo + fo + ho + mo + "]", $s = "\\ud83c[\\udffb-\\udfff]", OA = "(?:" + qa + "|" + $s + ")", yo = "[^" + Wa + "]", ei = "(?:\\ud83c[\\udde6-\\uddff]){2}", ti = "[\\ud800-\\udbff][\\udc00-\\udfff]", Kr = "[" + mo + "]", pn = "\\u200d", ni = "(?:" + ko + "|" + bo + ")", ri = "(?:" + Kr + "|" + bo + ")", Eo = "(?:" + _s + "(?:d|ll|m|re|s|t|ve))?", Va = "(?:" + _s + "(?:D|LL|M|RE|S|T|VE))?", ai = OA + "?", si = "[" + go + "]?", Mo = "(?:" + pn + "(?:" + [yo, ei, ti].join("|") + ")" + si + ai + ")*", So = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", QA = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", _a = si + ai + Mo, $a = "(?:" + [jA, ei, ti].join("|") + ")" + _a, Io = "(?:" + [yo + qa + "?", qa, ei, ti, RA].join("|") + ")", ii = RegExp(_s, "g"), Nn = RegExp(qa, "g"), oi = RegExp($s + "(?=" + $s + ")|" + Io + _a, "g"), NA = RegExp([
      Kr + "?" + ko + "+" + Eo + "(?=" + [wo, Kr, "$"].join("|") + ")",
      ri + "+" + Va + "(?=" + [wo, Kr + ni, "$"].join("|") + ")",
      Kr + "?" + ni + "+" + Eo,
      Kr + "+" + Va,
      QA,
      So,
      xo,
      $a
    ].join("|"), "g"), li = RegExp("[" + pn + Wa + uo + go + "]"), Jo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, To = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Co = -1, kt = {};
    kt[sr] = kt[ha] = kt[ir] = kt[Fn] = kt[pa] = kt[za] = kt[Ya] = kt[un] = kt[zs] = !0, kt[Ne] = kt[Mt] = kt[Yr] = kt[qe] = kt[Fr] = kt[Le] = kt[Se] = kt[Qe] = kt[xt] = kt[Lt] = kt[tn] = kt[rt] = kt[Pe] = kt[Pr] = kt[_n] = !1;
    var gt = {};
    gt[Ne] = gt[Mt] = gt[Yr] = gt[Fr] = gt[qe] = gt[Le] = gt[sr] = gt[ha] = gt[ir] = gt[Fn] = gt[pa] = gt[xt] = gt[Lt] = gt[tn] = gt[rt] = gt[Pe] = gt[Pr] = gt[zr] = gt[za] = gt[Ya] = gt[un] = gt[zs] = !0, gt[Se] = gt[Qe] = gt[_n] = !1;
    var Do = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Ro = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, HA = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, BA = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, UA = parseFloat, LA = parseInt, jo = typeof Es == "object" && Es && Es.Object === Object && Es, Oo = typeof self == "object" && self && self.Object === Object && self, $t = jo || Oo || Function("return this")(), Xr = n && !n.nodeType && n, mn = Xr && !0 && e && !e.nodeType && e, Qo = mn && mn.exports === Xr, Ai = Qo && jo.process, In = function() {
      try {
        var U = mn && mn.require && mn.require("util").types;
        return U || Ai && Ai.binding && Ai.binding("util");
      } catch {
      }
    }(), No = In && In.isArrayBuffer, Ho = In && In.isDate, Bo = In && In.isMap, Uo = In && In.isRegExp, Lo = In && In.isSet, Po = In && In.isTypedArray;
    function gn(U, te, q) {
      switch (q.length) {
        case 0:
          return U.call(te);
        case 1:
          return U.call(te, q[0]);
        case 2:
          return U.call(te, q[0], q[1]);
        case 3:
          return U.call(te, q[0], q[1], q[2]);
      }
      return U.apply(te, q);
    }
    function PA(U, te, q, we) {
      for (var He = -1, et = U == null ? 0 : U.length; ++He < et; ) {
        var Pt = U[He];
        te(we, Pt, q(Pt), U);
      }
      return we;
    }
    function vn(U, te) {
      for (var q = -1, we = U == null ? 0 : U.length; ++q < we && te(U[q], q, U) !== !1; )
        ;
      return U;
    }
    function zo(U, te) {
      for (var q = U == null ? 0 : U.length; q-- && te(U[q], q, U) !== !1; )
        ;
      return U;
    }
    function ci(U, te) {
      for (var q = -1, we = U == null ? 0 : U.length; ++q < we; )
        if (!te(U[q], q, U))
          return !1;
      return !0;
    }
    function $n(U, te) {
      for (var q = -1, we = U == null ? 0 : U.length, He = 0, et = []; ++q < we; ) {
        var Pt = U[q];
        te(Pt, q, U) && (et[He++] = Pt);
      }
      return et;
    }
    function ma(U, te) {
      var q = U == null ? 0 : U.length;
      return !!q && Wr(U, te, 0) > -1;
    }
    function es(U, te, q) {
      for (var we = -1, He = U == null ? 0 : U.length; ++we < He; )
        if (q(te, U[we]))
          return !0;
      return !1;
    }
    function bt(U, te) {
      for (var q = -1, we = U == null ? 0 : U.length, He = Array(we); ++q < we; )
        He[q] = te(U[q], q, U);
      return He;
    }
    function er(U, te) {
      for (var q = -1, we = te.length, He = U.length; ++q < we; )
        U[He + q] = te[q];
      return U;
    }
    function ts(U, te, q, we) {
      var He = -1, et = U == null ? 0 : U.length;
      for (we && et && (q = U[++He]); ++He < et; )
        q = te(q, U[He], He, U);
      return q;
    }
    function Yo(U, te, q, we) {
      var He = U == null ? 0 : U.length;
      for (we && He && (q = U[--He]); He--; )
        q = te(q, U[He], He, U);
      return q;
    }
    function ui(U, te) {
      for (var q = -1, we = U == null ? 0 : U.length; ++q < we; )
        if (te(U[q], q, U))
          return !0;
      return !1;
    }
    var zA = fi("length");
    function YA(U) {
      return U.split("");
    }
    function FA(U) {
      return U.match(Gr) || [];
    }
    function Fo(U, te, q) {
      var we;
      return q(U, function(He, et, Pt) {
        if (te(He, et, Pt))
          return we = et, !1;
      }), we;
    }
    function ns(U, te, q, we) {
      for (var He = U.length, et = q + (we ? 1 : -1); we ? et-- : ++et < He; )
        if (te(U[et], et, U))
          return et;
      return -1;
    }
    function Wr(U, te, q) {
      return te === te ? tc(U, te, q) : ns(U, Zo, q);
    }
    function ZA(U, te, q, we) {
      for (var He = q - 1, et = U.length; ++He < et; )
        if (we(U[He], te))
          return He;
      return -1;
    }
    function Zo(U) {
      return U !== U;
    }
    function Go(U, te) {
      var q = U == null ? 0 : U.length;
      return q ? hi(U, te) / q : G;
    }
    function fi(U) {
      return function(te) {
        return te == null ? t : te[U];
      };
    }
    function di(U) {
      return function(te) {
        return U == null ? t : U[te];
      };
    }
    function Ko(U, te, q, we, He) {
      return He(U, function(et, Pt, vt) {
        q = we ? (we = !1, et) : te(q, et, Pt, vt);
      }), q;
    }
    function GA(U, te) {
      var q = U.length;
      for (U.sort(te); q--; )
        U[q] = U[q].value;
      return U;
    }
    function hi(U, te) {
      for (var q, we = -1, He = U.length; ++we < He; ) {
        var et = te(U[we]);
        et !== t && (q = q === t ? et : q + et);
      }
      return q;
    }
    function pi(U, te) {
      for (var q = -1, we = Array(U); ++q < U; )
        we[q] = te(q);
      return we;
    }
    function KA(U, te) {
      return bt(te, function(q) {
        return [q, U[q]];
      });
    }
    function Xo(U) {
      return U && U.slice(0, _o(U) + 1).replace(qs, "");
    }
    function fn(U) {
      return function(te) {
        return U(te);
      };
    }
    function mi(U, te) {
      return bt(te, function(q) {
        return U[q];
      });
    }
    function ga(U, te) {
      return U.has(te);
    }
    function Wo(U, te) {
      for (var q = -1, we = U.length; ++q < we && Wr(te, U[q], 0) > -1; )
        ;
      return q;
    }
    function qo(U, te) {
      for (var q = U.length; q-- && Wr(te, U[q], 0) > -1; )
        ;
      return q;
    }
    function XA(U, te) {
      for (var q = U.length, we = 0; q--; )
        U[q] === te && ++we;
      return we;
    }
    var WA = di(Do), qA = di(Ro);
    function VA(U) {
      return "\\" + BA[U];
    }
    function or(U, te) {
      return U == null ? t : U[te];
    }
    function qr(U) {
      return li.test(U);
    }
    function _A(U) {
      return Jo.test(U);
    }
    function $A(U) {
      for (var te, q = []; !(te = U.next()).done; )
        q.push(te.value);
      return q;
    }
    function gi(U) {
      var te = -1, q = Array(U.size);
      return U.forEach(function(we, He) {
        q[++te] = [He, we];
      }), q;
    }
    function Vo(U, te) {
      return function(q) {
        return U(te(q));
      };
    }
    function lr(U, te) {
      for (var q = -1, we = U.length, He = 0, et = []; ++q < we; ) {
        var Pt = U[q];
        (Pt === te || Pt === h) && (U[q] = h, et[He++] = q);
      }
      return et;
    }
    function rs(U) {
      var te = -1, q = Array(U.size);
      return U.forEach(function(we) {
        q[++te] = we;
      }), q;
    }
    function ec(U) {
      var te = -1, q = Array(U.size);
      return U.forEach(function(we) {
        q[++te] = [we, we];
      }), q;
    }
    function tc(U, te, q) {
      for (var we = q - 1, He = U.length; ++we < He; )
        if (U[we] === te)
          return we;
      return -1;
    }
    function nc(U, te, q) {
      for (var we = q + 1; we--; )
        if (U[we] === te)
          return we;
      return we;
    }
    function Vr(U) {
      return qr(U) ? ac(U) : zA(U);
    }
    function Jn(U) {
      return qr(U) ? sc(U) : YA(U);
    }
    function _o(U) {
      for (var te = U.length; te-- && oo.test(U.charAt(te)); )
        ;
      return te;
    }
    var rc = di(HA);
    function ac(U) {
      for (var te = oi.lastIndex = 0; oi.test(U); )
        ++te;
      return te;
    }
    function sc(U) {
      return U.match(oi) || [];
    }
    function ic(U) {
      return U.match(NA) || [];
    }
    var $o = function U(te) {
      te = te == null ? $t : _r.defaults($t.Object(), te, _r.pick($t, To));
      var q = te.Array, we = te.Date, He = te.Error, et = te.Function, Pt = te.Math, vt = te.Object, vi = te.RegExp, oc = te.String, wn = te.TypeError, as = q.prototype, lc = et.prototype, $r = vt.prototype, ss = te["__core-js_shared__"], is = lc.toString, ut = $r.hasOwnProperty, Ac = 0, el = function() {
        var r = /[^.]+$/.exec(ss && ss.keys && ss.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), os = $r.toString, on = is.call(vt), cc = $t._, uc = vi(
        "^" + is.call(ut).replace(Za, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ls = Qo ? te.Buffer : t, Ar = te.Symbol, As = te.Uint8Array, tl = ls ? ls.allocUnsafe : t, cs = Vo(vt.getPrototypeOf, vt), nl = vt.create, rl = $r.propertyIsEnumerable, us = as.splice, al = Ar ? Ar.isConcatSpreadable : t, va = Ar ? Ar.iterator : t, kr = Ar ? Ar.toStringTag : t, fs = function() {
        try {
          var r = Ma(vt, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), fc = te.clearTimeout !== $t.clearTimeout && te.clearTimeout, dc = we && we.now !== $t.Date.now && we.now, sl = te.setTimeout !== $t.setTimeout && te.setTimeout, ds = Pt.ceil, hs = Pt.floor, wi = vt.getOwnPropertySymbols, hc = ls ? ls.isBuffer : t, il = te.isFinite, Tt = as.join, pc = Vo(vt.keys, vt), zt = Pt.max, rn = Pt.min, mc = we.now, gc = te.parseInt, ol = Pt.random, p = as.reverse, g = Ma(te, "DataView"), w = Ma(te, "Map"), E = Ma(te, "Promise"), C = Ma(te, "Set"), O = Ma(te, "WeakMap"), z = Ma(vt, "create"), X = O && new O(), fe = {}, oe = Sa(g), Ce = Sa(w), ve = Sa(E), at = Sa(C), Ge = Sa(O), wt = Ar ? Ar.prototype : t, Wt = wt ? wt.valueOf : t, Tn = wt ? wt.toString : t;
      function I(r) {
        if (Nt(r) && !Ue(r) && !(r instanceof Ke)) {
          if (r instanceof qt)
            return r;
          if (ut.call(r, "__wrapped__"))
            return jd(r);
        }
        return new qt(r);
      }
      var Hn = function() {
        function r() {
        }
        return function(i) {
          if (!Rt(i))
            return {};
          if (nl)
            return nl(i);
          r.prototype = i;
          var c = new r();
          return r.prototype = t, c;
        };
      }();
      function wa() {
      }
      function qt(r, i) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = t;
      }
      I.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Gs,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ks,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Xs,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: I
        }
      }, I.prototype = wa.prototype, I.prototype.constructor = I, qt.prototype = Hn(wa.prototype), qt.prototype.constructor = qt;
      function Ke(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ie, this.__views__ = [];
      }
      function xi() {
        var r = new Ke(this.__wrapped__);
        return r.__actions__ = Cn(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = Cn(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = Cn(this.__views__), r;
      }
      function xa() {
        if (this.__filtered__) {
          var r = new Ke(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function pg() {
        var r = this.__wrapped__.value(), i = this.__dir__, c = Ue(r), x = i < 0, M = c ? r.length : 0, J = I0(0, M, this.__views__), D = J.start, N = J.end, P = N - D, se = x ? N : D - 1, ie = this.__iteratees__, Ae = ie.length, me = 0, ye = rn(P, this.__takeCount__);
        if (!c || !x && M == P && ye == P)
          return nd(r, this.__actions__);
        var je = [];
        e:
          for (; P-- && me < ye; ) {
            se += i;
            for (var Fe = -1, Oe = r[se]; ++Fe < Ae; ) {
              var We = ie[Fe], Ve = We.iteratee, Ln = We.type, bn = Ve(Oe);
              if (Ln == W)
                Oe = bn;
              else if (!bn) {
                if (Ln == F)
                  continue e;
                break e;
              }
            }
            je[me++] = Oe;
          }
        return je;
      }
      Ke.prototype = Hn(wa.prototype), Ke.prototype.constructor = Ke;
      function ka(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var x = r[i];
          this.set(x[0], x[1]);
        }
      }
      function mg() {
        this.__data__ = z ? z(null) : {}, this.size = 0;
      }
      function gg(r) {
        var i = this.has(r) && delete this.__data__[r];
        return this.size -= i ? 1 : 0, i;
      }
      function vg(r) {
        var i = this.__data__;
        if (z) {
          var c = i[r];
          return c === u ? t : c;
        }
        return ut.call(i, r) ? i[r] : t;
      }
      function wg(r) {
        var i = this.__data__;
        return z ? i[r] !== t : ut.call(i, r);
      }
      function xg(r, i) {
        var c = this.__data__;
        return this.size += this.has(r) ? 0 : 1, c[r] = z && i === t ? u : i, this;
      }
      ka.prototype.clear = mg, ka.prototype.delete = gg, ka.prototype.get = vg, ka.prototype.has = wg, ka.prototype.set = xg;
      function br(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var x = r[i];
          this.set(x[0], x[1]);
        }
      }
      function kg() {
        this.__data__ = [], this.size = 0;
      }
      function bg(r) {
        var i = this.__data__, c = ll(i, r);
        if (c < 0)
          return !1;
        var x = i.length - 1;
        return c == x ? i.pop() : us.call(i, c, 1), --this.size, !0;
      }
      function yg(r) {
        var i = this.__data__, c = ll(i, r);
        return c < 0 ? t : i[c][1];
      }
      function Eg(r) {
        return ll(this.__data__, r) > -1;
      }
      function Mg(r, i) {
        var c = this.__data__, x = ll(c, r);
        return x < 0 ? (++this.size, c.push([r, i])) : c[x][1] = i, this;
      }
      br.prototype.clear = kg, br.prototype.delete = bg, br.prototype.get = yg, br.prototype.has = Eg, br.prototype.set = Mg;
      function yr(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var x = r[i];
          this.set(x[0], x[1]);
        }
      }
      function Sg() {
        this.size = 0, this.__data__ = {
          hash: new ka(),
          map: new (w || br)(),
          string: new ka()
        };
      }
      function Ig(r) {
        var i = xl(this, r).delete(r);
        return this.size -= i ? 1 : 0, i;
      }
      function Jg(r) {
        return xl(this, r).get(r);
      }
      function Tg(r) {
        return xl(this, r).has(r);
      }
      function Cg(r, i) {
        var c = xl(this, r), x = c.size;
        return c.set(r, i), this.size += c.size == x ? 0 : 1, this;
      }
      yr.prototype.clear = Sg, yr.prototype.delete = Ig, yr.prototype.get = Jg, yr.prototype.has = Tg, yr.prototype.set = Cg;
      function ba(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.__data__ = new yr(); ++i < c; )
          this.add(r[i]);
      }
      function Dg(r) {
        return this.__data__.set(r, u), this;
      }
      function Rg(r) {
        return this.__data__.has(r);
      }
      ba.prototype.add = ba.prototype.push = Dg, ba.prototype.has = Rg;
      function tr(r) {
        var i = this.__data__ = new br(r);
        this.size = i.size;
      }
      function jg() {
        this.__data__ = new br(), this.size = 0;
      }
      function Og(r) {
        var i = this.__data__, c = i.delete(r);
        return this.size = i.size, c;
      }
      function Qg(r) {
        return this.__data__.get(r);
      }
      function Ng(r) {
        return this.__data__.has(r);
      }
      function Hg(r, i) {
        var c = this.__data__;
        if (c instanceof br) {
          var x = c.__data__;
          if (!w || x.length < s - 1)
            return x.push([r, i]), this.size = ++c.size, this;
          c = this.__data__ = new yr(x);
        }
        return c.set(r, i), this.size = c.size, this;
      }
      tr.prototype.clear = jg, tr.prototype.delete = Og, tr.prototype.get = Qg, tr.prototype.has = Ng, tr.prototype.set = Hg;
      function jf(r, i) {
        var c = Ue(r), x = !c && Ia(r), M = !c && !x && aa(r), J = !c && !x && !M && vs(r), D = c || x || M || J, N = D ? pi(r.length, oc) : [], P = N.length;
        for (var se in r)
          (i || ut.call(r, se)) && !(D && // Safari 9 has enumerable `arguments.length` in strict mode.
          (se == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          M && (se == "offset" || se == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          J && (se == "buffer" || se == "byteLength" || se == "byteOffset") || // Skip index properties.
          Ir(se, P))) && N.push(se);
        return N;
      }
      function Of(r) {
        var i = r.length;
        return i ? r[Jc(0, i - 1)] : t;
      }
      function Bg(r, i) {
        return kl(Cn(r), ya(i, 0, r.length));
      }
      function Ug(r) {
        return kl(Cn(r));
      }
      function vc(r, i, c) {
        (c !== t && !nr(r[i], c) || c === t && !(i in r)) && Er(r, i, c);
      }
      function ki(r, i, c) {
        var x = r[i];
        (!(ut.call(r, i) && nr(x, c)) || c === t && !(i in r)) && Er(r, i, c);
      }
      function ll(r, i) {
        for (var c = r.length; c--; )
          if (nr(r[c][0], i))
            return c;
        return -1;
      }
      function Lg(r, i, c, x) {
        return ea(r, function(M, J, D) {
          i(x, M, c(M), D);
        }), x;
      }
      function Qf(r, i) {
        return r && ur(i, an(i), r);
      }
      function Pg(r, i) {
        return r && ur(i, Rn(i), r);
      }
      function Er(r, i, c) {
        i == "__proto__" && fs ? fs(r, i, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : r[i] = c;
      }
      function wc(r, i) {
        for (var c = -1, x = i.length, M = q(x), J = r == null; ++c < x; )
          M[c] = J ? t : $c(r, i[c]);
        return M;
      }
      function ya(r, i, c) {
        return r === r && (c !== t && (r = r <= c ? r : c), i !== t && (r = r >= i ? r : i)), r;
      }
      function Zn(r, i, c, x, M, J) {
        var D, N = i & m, P = i & v, se = i & k;
        if (c && (D = M ? c(r, x, M, J) : c(r)), D !== t)
          return D;
        if (!Rt(r))
          return r;
        var ie = Ue(r);
        if (ie) {
          if (D = T0(r), !N)
            return Cn(r, D);
        } else {
          var Ae = dn(r), me = Ae == Qe || Ae == Xe;
          if (aa(r))
            return sd(r, N);
          if (Ae == tn || Ae == Ne || me && !M) {
            if (D = P || me ? {} : Ed(r), !N)
              return P ? v0(r, Pg(D, r)) : g0(r, Qf(D, r));
          } else {
            if (!gt[Ae])
              return M ? r : {};
            D = C0(r, Ae, N);
          }
        }
        J || (J = new tr());
        var ye = J.get(r);
        if (ye)
          return ye;
        J.set(r, D), $d(r) ? r.forEach(function(Oe) {
          D.add(Zn(Oe, i, c, Oe, r, J));
        }) : Vd(r) && r.forEach(function(Oe, We) {
          D.set(We, Zn(Oe, i, c, We, r, J));
        });
        var je = se ? P ? Uc : Bc : P ? Rn : an, Fe = ie ? t : je(r);
        return vn(Fe || r, function(Oe, We) {
          Fe && (We = Oe, Oe = r[We]), ki(D, We, Zn(Oe, i, c, We, r, J));
        }), D;
      }
      function zg(r) {
        var i = an(r);
        return function(c) {
          return Nf(c, r, i);
        };
      }
      function Nf(r, i, c) {
        var x = c.length;
        if (r == null)
          return !x;
        for (r = vt(r); x--; ) {
          var M = c[x], J = i[M], D = r[M];
          if (D === t && !(M in r) || !J(D))
            return !1;
        }
        return !0;
      }
      function Hf(r, i, c) {
        if (typeof r != "function")
          throw new wn(A);
        return Ji(function() {
          r.apply(t, c);
        }, i);
      }
      function bi(r, i, c, x) {
        var M = -1, J = ma, D = !0, N = r.length, P = [], se = i.length;
        if (!N)
          return P;
        c && (i = bt(i, fn(c))), x ? (J = es, D = !1) : i.length >= s && (J = ga, D = !1, i = new ba(i));
        e:
          for (; ++M < N; ) {
            var ie = r[M], Ae = c == null ? ie : c(ie);
            if (ie = x || ie !== 0 ? ie : 0, D && Ae === Ae) {
              for (var me = se; me--; )
                if (i[me] === Ae)
                  continue e;
              P.push(ie);
            } else
              J(i, Ae, x) || P.push(ie);
          }
        return P;
      }
      var ea = cd(cr), Bf = cd(kc, !0);
      function Yg(r, i) {
        var c = !0;
        return ea(r, function(x, M, J) {
          return c = !!i(x, M, J), c;
        }), c;
      }
      function Al(r, i, c) {
        for (var x = -1, M = r.length; ++x < M; ) {
          var J = r[x], D = i(J);
          if (D != null && (N === t ? D === D && !Un(D) : c(D, N)))
            var N = D, P = J;
        }
        return P;
      }
      function Fg(r, i, c, x) {
        var M = r.length;
        for (c = ze(c), c < 0 && (c = -c > M ? 0 : M + c), x = x === t || x > M ? M : ze(x), x < 0 && (x += M), x = c > x ? 0 : th(x); c < x; )
          r[c++] = i;
        return r;
      }
      function Uf(r, i) {
        var c = [];
        return ea(r, function(x, M, J) {
          i(x, M, J) && c.push(x);
        }), c;
      }
      function ln(r, i, c, x, M) {
        var J = -1, D = r.length;
        for (c || (c = R0), M || (M = []); ++J < D; ) {
          var N = r[J];
          i > 0 && c(N) ? i > 1 ? ln(N, i - 1, c, x, M) : er(M, N) : x || (M[M.length] = N);
        }
        return M;
      }
      var xc = ud(), Lf = ud(!0);
      function cr(r, i) {
        return r && xc(r, i, an);
      }
      function kc(r, i) {
        return r && Lf(r, i, an);
      }
      function cl(r, i) {
        return $n(i, function(c) {
          return Jr(r[c]);
        });
      }
      function Ea(r, i) {
        i = na(i, r);
        for (var c = 0, x = i.length; r != null && c < x; )
          r = r[fr(i[c++])];
        return c && c == x ? r : t;
      }
      function Pf(r, i, c) {
        var x = i(r);
        return Ue(r) ? x : er(x, c(r));
      }
      function xn(r) {
        return r == null ? r === t ? nn : Dt : kr && kr in vt(r) ? S0(r) : U0(r);
      }
      function bc(r, i) {
        return r > i;
      }
      function Zg(r, i) {
        return r != null && ut.call(r, i);
      }
      function Gg(r, i) {
        return r != null && i in vt(r);
      }
      function Kg(r, i, c) {
        return r >= rn(i, c) && r < zt(i, c);
      }
      function yc(r, i, c) {
        for (var x = c ? es : ma, M = r[0].length, J = r.length, D = J, N = q(J), P = 1 / 0, se = []; D--; ) {
          var ie = r[D];
          D && i && (ie = bt(ie, fn(i))), P = rn(ie.length, P), N[D] = !c && (i || M >= 120 && ie.length >= 120) ? new ba(D && ie) : t;
        }
        ie = r[0];
        var Ae = -1, me = N[0];
        e:
          for (; ++Ae < M && se.length < P; ) {
            var ye = ie[Ae], je = i ? i(ye) : ye;
            if (ye = c || ye !== 0 ? ye : 0, !(me ? ga(me, je) : x(se, je, c))) {
              for (D = J; --D; ) {
                var Fe = N[D];
                if (!(Fe ? ga(Fe, je) : x(r[D], je, c)))
                  continue e;
              }
              me && me.push(je), se.push(ye);
            }
          }
        return se;
      }
      function Xg(r, i, c, x) {
        return cr(r, function(M, J, D) {
          i(x, c(M), J, D);
        }), x;
      }
      function yi(r, i, c) {
        i = na(i, r), r = Jd(r, i);
        var x = r == null ? r : r[fr(Kn(i))];
        return x == null ? t : gn(x, r, c);
      }
      function zf(r) {
        return Nt(r) && xn(r) == Ne;
      }
      function Wg(r) {
        return Nt(r) && xn(r) == Yr;
      }
      function qg(r) {
        return Nt(r) && xn(r) == Le;
      }
      function Ei(r, i, c, x, M) {
        return r === i ? !0 : r == null || i == null || !Nt(r) && !Nt(i) ? r !== r && i !== i : Vg(r, i, c, x, Ei, M);
      }
      function Vg(r, i, c, x, M, J) {
        var D = Ue(r), N = Ue(i), P = D ? Mt : dn(r), se = N ? Mt : dn(i);
        P = P == Ne ? tn : P, se = se == Ne ? tn : se;
        var ie = P == tn, Ae = se == tn, me = P == se;
        if (me && aa(r)) {
          if (!aa(i))
            return !1;
          D = !0, ie = !1;
        }
        if (me && !ie)
          return J || (J = new tr()), D || vs(r) ? kd(r, i, c, x, M, J) : E0(r, i, P, c, x, M, J);
        if (!(c & b)) {
          var ye = ie && ut.call(r, "__wrapped__"), je = Ae && ut.call(i, "__wrapped__");
          if (ye || je) {
            var Fe = ye ? r.value() : r, Oe = je ? i.value() : i;
            return J || (J = new tr()), M(Fe, Oe, c, x, J);
          }
        }
        return me ? (J || (J = new tr()), M0(r, i, c, x, M, J)) : !1;
      }
      function _g(r) {
        return Nt(r) && dn(r) == xt;
      }
      function Ec(r, i, c, x) {
        var M = c.length, J = M, D = !x;
        if (r == null)
          return !J;
        for (r = vt(r); M--; ) {
          var N = c[M];
          if (D && N[2] ? N[1] !== r[N[0]] : !(N[0] in r))
            return !1;
        }
        for (; ++M < J; ) {
          N = c[M];
          var P = N[0], se = r[P], ie = N[1];
          if (D && N[2]) {
            if (se === t && !(P in r))
              return !1;
          } else {
            var Ae = new tr();
            if (x)
              var me = x(se, ie, P, r, i, Ae);
            if (!(me === t ? Ei(ie, se, b | y, x, Ae) : me))
              return !1;
          }
        }
        return !0;
      }
      function Yf(r) {
        if (!Rt(r) || O0(r))
          return !1;
        var i = Jr(r) ? uc : kA;
        return i.test(Sa(r));
      }
      function $g(r) {
        return Nt(r) && xn(r) == rt;
      }
      function e0(r) {
        return Nt(r) && dn(r) == Pe;
      }
      function t0(r) {
        return Nt(r) && Il(r.length) && !!kt[xn(r)];
      }
      function Ff(r) {
        return typeof r == "function" ? r : r == null ? jn : typeof r == "object" ? Ue(r) ? Kf(r[0], r[1]) : Gf(r) : fh(r);
      }
      function Mc(r) {
        if (!Ii(r))
          return pc(r);
        var i = [];
        for (var c in vt(r))
          ut.call(r, c) && c != "constructor" && i.push(c);
        return i;
      }
      function n0(r) {
        if (!Rt(r))
          return B0(r);
        var i = Ii(r), c = [];
        for (var x in r)
          x == "constructor" && (i || !ut.call(r, x)) || c.push(x);
        return c;
      }
      function Sc(r, i) {
        return r < i;
      }
      function Zf(r, i) {
        var c = -1, x = Dn(r) ? q(r.length) : [];
        return ea(r, function(M, J, D) {
          x[++c] = i(M, J, D);
        }), x;
      }
      function Gf(r) {
        var i = Pc(r);
        return i.length == 1 && i[0][2] ? Sd(i[0][0], i[0][1]) : function(c) {
          return c === r || Ec(c, r, i);
        };
      }
      function Kf(r, i) {
        return Yc(r) && Md(i) ? Sd(fr(r), i) : function(c) {
          var x = $c(c, r);
          return x === t && x === i ? eu(c, r) : Ei(i, x, b | y);
        };
      }
      function ul(r, i, c, x, M) {
        r !== i && xc(i, function(J, D) {
          if (M || (M = new tr()), Rt(J))
            r0(r, i, D, c, ul, x, M);
          else {
            var N = x ? x(Zc(r, D), J, D + "", r, i, M) : t;
            N === t && (N = J), vc(r, D, N);
          }
        }, Rn);
      }
      function r0(r, i, c, x, M, J, D) {
        var N = Zc(r, c), P = Zc(i, c), se = D.get(P);
        if (se) {
          vc(r, c, se);
          return;
        }
        var ie = J ? J(N, P, c + "", r, i, D) : t, Ae = ie === t;
        if (Ae) {
          var me = Ue(P), ye = !me && aa(P), je = !me && !ye && vs(P);
          ie = P, me || ye || je ? Ue(N) ? ie = N : Yt(N) ? ie = Cn(N) : ye ? (Ae = !1, ie = sd(P, !0)) : je ? (Ae = !1, ie = id(P, !0)) : ie = [] : Ti(P) || Ia(P) ? (ie = N, Ia(N) ? ie = nh(N) : (!Rt(N) || Jr(N)) && (ie = Ed(P))) : Ae = !1;
        }
        Ae && (D.set(P, ie), M(ie, P, x, J, D), D.delete(P)), vc(r, c, ie);
      }
      function Xf(r, i) {
        var c = r.length;
        if (c)
          return i += i < 0 ? c : 0, Ir(i, c) ? r[i] : t;
      }
      function Wf(r, i, c) {
        i.length ? i = bt(i, function(J) {
          return Ue(J) ? function(D) {
            return Ea(D, J.length === 1 ? J[0] : J);
          } : J;
        }) : i = [jn];
        var x = -1;
        i = bt(i, fn(De()));
        var M = Zf(r, function(J, D, N) {
          var P = bt(i, function(se) {
            return se(J);
          });
          return { criteria: P, index: ++x, value: J };
        });
        return GA(M, function(J, D) {
          return m0(J, D, c);
        });
      }
      function a0(r, i) {
        return qf(r, i, function(c, x) {
          return eu(r, x);
        });
      }
      function qf(r, i, c) {
        for (var x = -1, M = i.length, J = {}; ++x < M; ) {
          var D = i[x], N = Ea(r, D);
          c(N, D) && Mi(J, na(D, r), N);
        }
        return J;
      }
      function s0(r) {
        return function(i) {
          return Ea(i, r);
        };
      }
      function Ic(r, i, c, x) {
        var M = x ? ZA : Wr, J = -1, D = i.length, N = r;
        for (r === i && (i = Cn(i)), c && (N = bt(r, fn(c))); ++J < D; )
          for (var P = 0, se = i[J], ie = c ? c(se) : se; (P = M(N, ie, P, x)) > -1; )
            N !== r && us.call(N, P, 1), us.call(r, P, 1);
        return r;
      }
      function Vf(r, i) {
        for (var c = r ? i.length : 0, x = c - 1; c--; ) {
          var M = i[c];
          if (c == x || M !== J) {
            var J = M;
            Ir(M) ? us.call(r, M, 1) : Dc(r, M);
          }
        }
        return r;
      }
      function Jc(r, i) {
        return r + hs(ol() * (i - r + 1));
      }
      function i0(r, i, c, x) {
        for (var M = -1, J = zt(ds((i - r) / (c || 1)), 0), D = q(J); J--; )
          D[x ? J : ++M] = r, r += c;
        return D;
      }
      function Tc(r, i) {
        var c = "";
        if (!r || i < 1 || i > pe)
          return c;
        do
          i % 2 && (c += r), i = hs(i / 2), i && (r += r);
        while (i);
        return c;
      }
      function Ze(r, i) {
        return Gc(Id(r, i, jn), r + "");
      }
      function o0(r) {
        return Of(ws(r));
      }
      function l0(r, i) {
        var c = ws(r);
        return kl(c, ya(i, 0, c.length));
      }
      function Mi(r, i, c, x) {
        if (!Rt(r))
          return r;
        i = na(i, r);
        for (var M = -1, J = i.length, D = J - 1, N = r; N != null && ++M < J; ) {
          var P = fr(i[M]), se = c;
          if (P === "__proto__" || P === "constructor" || P === "prototype")
            return r;
          if (M != D) {
            var ie = N[P];
            se = x ? x(ie, P, N) : t, se === t && (se = Rt(ie) ? ie : Ir(i[M + 1]) ? [] : {});
          }
          ki(N, P, se), N = N[P];
        }
        return r;
      }
      var _f = X ? function(r, i) {
        return X.set(r, i), r;
      } : jn, A0 = fs ? function(r, i) {
        return fs(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: nu(i),
          writable: !0
        });
      } : jn;
      function c0(r) {
        return kl(ws(r));
      }
      function Gn(r, i, c) {
        var x = -1, M = r.length;
        i < 0 && (i = -i > M ? 0 : M + i), c = c > M ? M : c, c < 0 && (c += M), M = i > c ? 0 : c - i >>> 0, i >>>= 0;
        for (var J = q(M); ++x < M; )
          J[x] = r[x + i];
        return J;
      }
      function u0(r, i) {
        var c;
        return ea(r, function(x, M, J) {
          return c = i(x, M, J), !c;
        }), !!c;
      }
      function fl(r, i, c) {
        var x = 0, M = r == null ? x : r.length;
        if (typeof i == "number" && i === i && M <= Ee) {
          for (; x < M; ) {
            var J = x + M >>> 1, D = r[J];
            D !== null && !Un(D) && (c ? D <= i : D < i) ? x = J + 1 : M = J;
          }
          return M;
        }
        return Cc(r, i, jn, c);
      }
      function Cc(r, i, c, x) {
        var M = 0, J = r == null ? 0 : r.length;
        if (J === 0)
          return 0;
        i = c(i);
        for (var D = i !== i, N = i === null, P = Un(i), se = i === t; M < J; ) {
          var ie = hs((M + J) / 2), Ae = c(r[ie]), me = Ae !== t, ye = Ae === null, je = Ae === Ae, Fe = Un(Ae);
          if (D)
            var Oe = x || je;
          else
            se ? Oe = je && (x || me) : N ? Oe = je && me && (x || !ye) : P ? Oe = je && me && !ye && (x || !Fe) : ye || Fe ? Oe = !1 : Oe = x ? Ae <= i : Ae < i;
          Oe ? M = ie + 1 : J = ie;
        }
        return rn(J, be);
      }
      function $f(r, i) {
        for (var c = -1, x = r.length, M = 0, J = []; ++c < x; ) {
          var D = r[c], N = i ? i(D) : D;
          if (!c || !nr(N, P)) {
            var P = N;
            J[M++] = D === 0 ? 0 : D;
          }
        }
        return J;
      }
      function ed(r) {
        return typeof r == "number" ? r : Un(r) ? G : +r;
      }
      function Bn(r) {
        if (typeof r == "string")
          return r;
        if (Ue(r))
          return bt(r, Bn) + "";
        if (Un(r))
          return Tn ? Tn.call(r) : "";
        var i = r + "";
        return i == "0" && 1 / r == -Z ? "-0" : i;
      }
      function ta(r, i, c) {
        var x = -1, M = ma, J = r.length, D = !0, N = [], P = N;
        if (c)
          D = !1, M = es;
        else if (J >= s) {
          var se = i ? null : b0(r);
          if (se)
            return rs(se);
          D = !1, M = ga, P = new ba();
        } else
          P = i ? [] : N;
        e:
          for (; ++x < J; ) {
            var ie = r[x], Ae = i ? i(ie) : ie;
            if (ie = c || ie !== 0 ? ie : 0, D && Ae === Ae) {
              for (var me = P.length; me--; )
                if (P[me] === Ae)
                  continue e;
              i && P.push(Ae), N.push(ie);
            } else
              M(P, Ae, c) || (P !== N && P.push(Ae), N.push(ie));
          }
        return N;
      }
      function Dc(r, i) {
        return i = na(i, r), r = Jd(r, i), r == null || delete r[fr(Kn(i))];
      }
      function td(r, i, c, x) {
        return Mi(r, i, c(Ea(r, i)), x);
      }
      function dl(r, i, c, x) {
        for (var M = r.length, J = x ? M : -1; (x ? J-- : ++J < M) && i(r[J], J, r); )
          ;
        return c ? Gn(r, x ? 0 : J, x ? J + 1 : M) : Gn(r, x ? J + 1 : 0, x ? M : J);
      }
      function nd(r, i) {
        var c = r;
        return c instanceof Ke && (c = c.value()), ts(i, function(x, M) {
          return M.func.apply(M.thisArg, er([x], M.args));
        }, c);
      }
      function Rc(r, i, c) {
        var x = r.length;
        if (x < 2)
          return x ? ta(r[0]) : [];
        for (var M = -1, J = q(x); ++M < x; )
          for (var D = r[M], N = -1; ++N < x; )
            N != M && (J[M] = bi(J[M] || D, r[N], i, c));
        return ta(ln(J, 1), i, c);
      }
      function rd(r, i, c) {
        for (var x = -1, M = r.length, J = i.length, D = {}; ++x < M; ) {
          var N = x < J ? i[x] : t;
          c(D, r[x], N);
        }
        return D;
      }
      function jc(r) {
        return Yt(r) ? r : [];
      }
      function Oc(r) {
        return typeof r == "function" ? r : jn;
      }
      function na(r, i) {
        return Ue(r) ? r : Yc(r, i) ? [r] : Rd(pt(r));
      }
      var f0 = Ze;
      function ra(r, i, c) {
        var x = r.length;
        return c = c === t ? x : c, !i && c >= x ? r : Gn(r, i, c);
      }
      var ad = fc || function(r) {
        return $t.clearTimeout(r);
      };
      function sd(r, i) {
        if (i)
          return r.slice();
        var c = r.length, x = tl ? tl(c) : new r.constructor(c);
        return r.copy(x), x;
      }
      function Qc(r) {
        var i = new r.constructor(r.byteLength);
        return new As(i).set(new As(r)), i;
      }
      function d0(r, i) {
        var c = i ? Qc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.byteLength);
      }
      function h0(r) {
        var i = new r.constructor(r.source, Ka.exec(r));
        return i.lastIndex = r.lastIndex, i;
      }
      function p0(r) {
        return Wt ? vt(Wt.call(r)) : {};
      }
      function id(r, i) {
        var c = i ? Qc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.length);
      }
      function od(r, i) {
        if (r !== i) {
          var c = r !== t, x = r === null, M = r === r, J = Un(r), D = i !== t, N = i === null, P = i === i, se = Un(i);
          if (!N && !se && !J && r > i || J && D && P && !N && !se || x && D && P || !c && P || !M)
            return 1;
          if (!x && !J && !se && r < i || se && c && M && !x && !J || N && c && M || !D && M || !P)
            return -1;
        }
        return 0;
      }
      function m0(r, i, c) {
        for (var x = -1, M = r.criteria, J = i.criteria, D = M.length, N = c.length; ++x < D; ) {
          var P = od(M[x], J[x]);
          if (P) {
            if (x >= N)
              return P;
            var se = c[x];
            return P * (se == "desc" ? -1 : 1);
          }
        }
        return r.index - i.index;
      }
      function ld(r, i, c, x) {
        for (var M = -1, J = r.length, D = c.length, N = -1, P = i.length, se = zt(J - D, 0), ie = q(P + se), Ae = !x; ++N < P; )
          ie[N] = i[N];
        for (; ++M < D; )
          (Ae || M < J) && (ie[c[M]] = r[M]);
        for (; se--; )
          ie[N++] = r[M++];
        return ie;
      }
      function Ad(r, i, c, x) {
        for (var M = -1, J = r.length, D = -1, N = c.length, P = -1, se = i.length, ie = zt(J - N, 0), Ae = q(ie + se), me = !x; ++M < ie; )
          Ae[M] = r[M];
        for (var ye = M; ++P < se; )
          Ae[ye + P] = i[P];
        for (; ++D < N; )
          (me || M < J) && (Ae[ye + c[D]] = r[M++]);
        return Ae;
      }
      function Cn(r, i) {
        var c = -1, x = r.length;
        for (i || (i = q(x)); ++c < x; )
          i[c] = r[c];
        return i;
      }
      function ur(r, i, c, x) {
        var M = !c;
        c || (c = {});
        for (var J = -1, D = i.length; ++J < D; ) {
          var N = i[J], P = x ? x(c[N], r[N], N, c, r) : t;
          P === t && (P = r[N]), M ? Er(c, N, P) : ki(c, N, P);
        }
        return c;
      }
      function g0(r, i) {
        return ur(r, zc(r), i);
      }
      function v0(r, i) {
        return ur(r, bd(r), i);
      }
      function hl(r, i) {
        return function(c, x) {
          var M = Ue(c) ? PA : Lg, J = i ? i() : {};
          return M(c, r, De(x, 2), J);
        };
      }
      function ps(r) {
        return Ze(function(i, c) {
          var x = -1, M = c.length, J = M > 1 ? c[M - 1] : t, D = M > 2 ? c[2] : t;
          for (J = r.length > 3 && typeof J == "function" ? (M--, J) : t, D && kn(c[0], c[1], D) && (J = M < 3 ? t : J, M = 1), i = vt(i); ++x < M; ) {
            var N = c[x];
            N && r(i, N, x, J);
          }
          return i;
        });
      }
      function cd(r, i) {
        return function(c, x) {
          if (c == null)
            return c;
          if (!Dn(c))
            return r(c, x);
          for (var M = c.length, J = i ? M : -1, D = vt(c); (i ? J-- : ++J < M) && x(D[J], J, D) !== !1; )
            ;
          return c;
        };
      }
      function ud(r) {
        return function(i, c, x) {
          for (var M = -1, J = vt(i), D = x(i), N = D.length; N--; ) {
            var P = D[r ? N : ++M];
            if (c(J[P], P, J) === !1)
              break;
          }
          return i;
        };
      }
      function w0(r, i, c) {
        var x = i & S, M = Si(r);
        function J() {
          var D = this && this !== $t && this instanceof J ? M : r;
          return D.apply(x ? c : this, arguments);
        }
        return J;
      }
      function fd(r) {
        return function(i) {
          i = pt(i);
          var c = qr(i) ? Jn(i) : t, x = c ? c[0] : i.charAt(0), M = c ? ra(c, 1).join("") : i.slice(1);
          return x[r]() + M;
        };
      }
      function ms(r) {
        return function(i) {
          return ts(ch(Ah(i).replace(ii, "")), r, "");
        };
      }
      function Si(r) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new r();
            case 1:
              return new r(i[0]);
            case 2:
              return new r(i[0], i[1]);
            case 3:
              return new r(i[0], i[1], i[2]);
            case 4:
              return new r(i[0], i[1], i[2], i[3]);
            case 5:
              return new r(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new r(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new r(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var c = Hn(r.prototype), x = r.apply(c, i);
          return Rt(x) ? x : c;
        };
      }
      function x0(r, i, c) {
        var x = Si(r);
        function M() {
          for (var J = arguments.length, D = q(J), N = J, P = gs(M); N--; )
            D[N] = arguments[N];
          var se = J < 3 && D[0] !== P && D[J - 1] !== P ? [] : lr(D, P);
          if (J -= se.length, J < c)
            return gd(
              r,
              i,
              pl,
              M.placeholder,
              t,
              D,
              se,
              t,
              t,
              c - J
            );
          var ie = this && this !== $t && this instanceof M ? x : r;
          return gn(ie, this, D);
        }
        return M;
      }
      function dd(r) {
        return function(i, c, x) {
          var M = vt(i);
          if (!Dn(i)) {
            var J = De(c, 3);
            i = an(i), c = function(N) {
              return J(M[N], N, M);
            };
          }
          var D = r(i, c, x);
          return D > -1 ? M[J ? i[D] : D] : t;
        };
      }
      function hd(r) {
        return Sr(function(i) {
          var c = i.length, x = c, M = qt.prototype.thru;
          for (r && i.reverse(); x--; ) {
            var J = i[x];
            if (typeof J != "function")
              throw new wn(A);
            if (M && !D && wl(J) == "wrapper")
              var D = new qt([], !0);
          }
          for (x = D ? x : c; ++x < c; ) {
            J = i[x];
            var N = wl(J), P = N == "wrapper" ? Lc(J) : t;
            P && Fc(P[0]) && P[1] == (V | B | $ | re) && !P[4].length && P[9] == 1 ? D = D[wl(P[0])].apply(D, P[3]) : D = J.length == 1 && Fc(J) ? D[N]() : D.thru(J);
          }
          return function() {
            var se = arguments, ie = se[0];
            if (D && se.length == 1 && Ue(ie))
              return D.plant(ie).value();
            for (var Ae = 0, me = c ? i[Ae].apply(this, se) : ie; ++Ae < c; )
              me = i[Ae].call(this, me);
            return me;
          };
        });
      }
      function pl(r, i, c, x, M, J, D, N, P, se) {
        var ie = i & V, Ae = i & S, me = i & T, ye = i & (B | K), je = i & le, Fe = me ? t : Si(r);
        function Oe() {
          for (var We = arguments.length, Ve = q(We), Ln = We; Ln--; )
            Ve[Ln] = arguments[Ln];
          if (ye)
            var bn = gs(Oe), Pn = XA(Ve, bn);
          if (x && (Ve = ld(Ve, x, M, ye)), J && (Ve = Ad(Ve, J, D, ye)), We -= Pn, ye && We < se) {
            var Ft = lr(Ve, bn);
            return gd(
              r,
              i,
              pl,
              Oe.placeholder,
              c,
              Ve,
              Ft,
              N,
              P,
              se - We
            );
          }
          var rr = Ae ? c : this, Cr = me ? rr[r] : r;
          return We = Ve.length, N ? Ve = L0(Ve, N) : je && We > 1 && Ve.reverse(), ie && P < We && (Ve.length = P), this && this !== $t && this instanceof Oe && (Cr = Fe || Si(Cr)), Cr.apply(rr, Ve);
        }
        return Oe;
      }
      function pd(r, i) {
        return function(c, x) {
          return Xg(c, r, i(x), {});
        };
      }
      function ml(r, i) {
        return function(c, x) {
          var M;
          if (c === t && x === t)
            return i;
          if (c !== t && (M = c), x !== t) {
            if (M === t)
              return x;
            typeof c == "string" || typeof x == "string" ? (c = Bn(c), x = Bn(x)) : (c = ed(c), x = ed(x)), M = r(c, x);
          }
          return M;
        };
      }
      function Nc(r) {
        return Sr(function(i) {
          return i = bt(i, fn(De())), Ze(function(c) {
            var x = this;
            return r(i, function(M) {
              return gn(M, x, c);
            });
          });
        });
      }
      function gl(r, i) {
        i = i === t ? " " : Bn(i);
        var c = i.length;
        if (c < 2)
          return c ? Tc(i, r) : i;
        var x = Tc(i, ds(r / Vr(i)));
        return qr(i) ? ra(Jn(x), 0, r).join("") : x.slice(0, r);
      }
      function k0(r, i, c, x) {
        var M = i & S, J = Si(r);
        function D() {
          for (var N = -1, P = arguments.length, se = -1, ie = x.length, Ae = q(ie + P), me = this && this !== $t && this instanceof D ? J : r; ++se < ie; )
            Ae[se] = x[se];
          for (; P--; )
            Ae[se++] = arguments[++N];
          return gn(me, M ? c : this, Ae);
        }
        return D;
      }
      function md(r) {
        return function(i, c, x) {
          return x && typeof x != "number" && kn(i, c, x) && (c = x = t), i = Tr(i), c === t ? (c = i, i = 0) : c = Tr(c), x = x === t ? i < c ? 1 : -1 : Tr(x), i0(i, c, x, r);
        };
      }
      function vl(r) {
        return function(i, c) {
          return typeof i == "string" && typeof c == "string" || (i = Xn(i), c = Xn(c)), r(i, c);
        };
      }
      function gd(r, i, c, x, M, J, D, N, P, se) {
        var ie = i & B, Ae = ie ? D : t, me = ie ? t : D, ye = ie ? J : t, je = ie ? t : J;
        i |= ie ? $ : Y, i &= ~(ie ? Y : $), i & Q || (i &= ~(S | T));
        var Fe = [
          r,
          i,
          M,
          ye,
          Ae,
          je,
          me,
          N,
          P,
          se
        ], Oe = c.apply(t, Fe);
        return Fc(r) && Td(Oe, Fe), Oe.placeholder = x, Cd(Oe, r, i);
      }
      function Hc(r) {
        var i = Pt[r];
        return function(c, x) {
          if (c = Xn(c), x = x == null ? 0 : rn(ze(x), 292), x && il(c)) {
            var M = (pt(c) + "e").split("e"), J = i(M[0] + "e" + (+M[1] + x));
            return M = (pt(J) + "e").split("e"), +(M[0] + "e" + (+M[1] - x));
          }
          return i(c);
        };
      }
      var b0 = C && 1 / rs(new C([, -0]))[1] == Z ? function(r) {
        return new C(r);
      } : su;
      function vd(r) {
        return function(i) {
          var c = dn(i);
          return c == xt ? gi(i) : c == Pe ? ec(i) : KA(i, r(i));
        };
      }
      function Mr(r, i, c, x, M, J, D, N) {
        var P = i & T;
        if (!P && typeof r != "function")
          throw new wn(A);
        var se = x ? x.length : 0;
        if (se || (i &= ~($ | Y), x = M = t), D = D === t ? D : zt(ze(D), 0), N = N === t ? N : ze(N), se -= M ? M.length : 0, i & Y) {
          var ie = x, Ae = M;
          x = M = t;
        }
        var me = P ? t : Lc(r), ye = [
          r,
          i,
          c,
          x,
          M,
          ie,
          Ae,
          J,
          D,
          N
        ];
        if (me && H0(ye, me), r = ye[0], i = ye[1], c = ye[2], x = ye[3], M = ye[4], N = ye[9] = ye[9] === t ? P ? 0 : r.length : zt(ye[9] - se, 0), !N && i & (B | K) && (i &= ~(B | K)), !i || i == S)
          var je = w0(r, i, c);
        else
          i == B || i == K ? je = x0(r, i, N) : (i == $ || i == (S | $)) && !M.length ? je = k0(r, i, c, x) : je = pl.apply(t, ye);
        var Fe = me ? _f : Td;
        return Cd(Fe(je, ye), r, i);
      }
      function wd(r, i, c, x) {
        return r === t || nr(r, $r[c]) && !ut.call(x, c) ? i : r;
      }
      function xd(r, i, c, x, M, J) {
        return Rt(r) && Rt(i) && (J.set(i, r), ul(r, i, t, xd, J), J.delete(i)), r;
      }
      function y0(r) {
        return Ti(r) ? t : r;
      }
      function kd(r, i, c, x, M, J) {
        var D = c & b, N = r.length, P = i.length;
        if (N != P && !(D && P > N))
          return !1;
        var se = J.get(r), ie = J.get(i);
        if (se && ie)
          return se == i && ie == r;
        var Ae = -1, me = !0, ye = c & y ? new ba() : t;
        for (J.set(r, i), J.set(i, r); ++Ae < N; ) {
          var je = r[Ae], Fe = i[Ae];
          if (x)
            var Oe = D ? x(Fe, je, Ae, i, r, J) : x(je, Fe, Ae, r, i, J);
          if (Oe !== t) {
            if (Oe)
              continue;
            me = !1;
            break;
          }
          if (ye) {
            if (!ui(i, function(We, Ve) {
              if (!ga(ye, Ve) && (je === We || M(je, We, c, x, J)))
                return ye.push(Ve);
            })) {
              me = !1;
              break;
            }
          } else if (!(je === Fe || M(je, Fe, c, x, J))) {
            me = !1;
            break;
          }
        }
        return J.delete(r), J.delete(i), me;
      }
      function E0(r, i, c, x, M, J, D) {
        switch (c) {
          case Fr:
            if (r.byteLength != i.byteLength || r.byteOffset != i.byteOffset)
              return !1;
            r = r.buffer, i = i.buffer;
          case Yr:
            return !(r.byteLength != i.byteLength || !J(new As(r), new As(i)));
          case qe:
          case Le:
          case Lt:
            return nr(+r, +i);
          case Se:
            return r.name == i.name && r.message == i.message;
          case rt:
          case Pr:
            return r == i + "";
          case xt:
            var N = gi;
          case Pe:
            var P = x & b;
            if (N || (N = rs), r.size != i.size && !P)
              return !1;
            var se = D.get(r);
            if (se)
              return se == i;
            x |= y, D.set(r, i);
            var ie = kd(N(r), N(i), x, M, J, D);
            return D.delete(r), ie;
          case zr:
            if (Wt)
              return Wt.call(r) == Wt.call(i);
        }
        return !1;
      }
      function M0(r, i, c, x, M, J) {
        var D = c & b, N = Bc(r), P = N.length, se = Bc(i), ie = se.length;
        if (P != ie && !D)
          return !1;
        for (var Ae = P; Ae--; ) {
          var me = N[Ae];
          if (!(D ? me in i : ut.call(i, me)))
            return !1;
        }
        var ye = J.get(r), je = J.get(i);
        if (ye && je)
          return ye == i && je == r;
        var Fe = !0;
        J.set(r, i), J.set(i, r);
        for (var Oe = D; ++Ae < P; ) {
          me = N[Ae];
          var We = r[me], Ve = i[me];
          if (x)
            var Ln = D ? x(Ve, We, me, i, r, J) : x(We, Ve, me, r, i, J);
          if (!(Ln === t ? We === Ve || M(We, Ve, c, x, J) : Ln)) {
            Fe = !1;
            break;
          }
          Oe || (Oe = me == "constructor");
        }
        if (Fe && !Oe) {
          var bn = r.constructor, Pn = i.constructor;
          bn != Pn && "constructor" in r && "constructor" in i && !(typeof bn == "function" && bn instanceof bn && typeof Pn == "function" && Pn instanceof Pn) && (Fe = !1);
        }
        return J.delete(r), J.delete(i), Fe;
      }
      function Sr(r) {
        return Gc(Id(r, t, Nd), r + "");
      }
      function Bc(r) {
        return Pf(r, an, zc);
      }
      function Uc(r) {
        return Pf(r, Rn, bd);
      }
      var Lc = X ? function(r) {
        return X.get(r);
      } : su;
      function wl(r) {
        for (var i = r.name + "", c = fe[i], x = ut.call(fe, i) ? c.length : 0; x--; ) {
          var M = c[x], J = M.func;
          if (J == null || J == r)
            return M.name;
        }
        return i;
      }
      function gs(r) {
        var i = ut.call(I, "placeholder") ? I : r;
        return i.placeholder;
      }
      function De() {
        var r = I.iteratee || ru;
        return r = r === ru ? Ff : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function xl(r, i) {
        var c = r.__data__;
        return j0(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
      }
      function Pc(r) {
        for (var i = an(r), c = i.length; c--; ) {
          var x = i[c], M = r[x];
          i[c] = [x, M, Md(M)];
        }
        return i;
      }
      function Ma(r, i) {
        var c = or(r, i);
        return Yf(c) ? c : t;
      }
      function S0(r) {
        var i = ut.call(r, kr), c = r[kr];
        try {
          r[kr] = t;
          var x = !0;
        } catch {
        }
        var M = os.call(r);
        return x && (i ? r[kr] = c : delete r[kr]), M;
      }
      var zc = wi ? function(r) {
        return r == null ? [] : (r = vt(r), $n(wi(r), function(i) {
          return rl.call(r, i);
        }));
      } : iu, bd = wi ? function(r) {
        for (var i = []; r; )
          er(i, zc(r)), r = cs(r);
        return i;
      } : iu, dn = xn;
      (g && dn(new g(new ArrayBuffer(1))) != Fr || w && dn(new w()) != xt || E && dn(E.resolve()) != Jt || C && dn(new C()) != Pe || O && dn(new O()) != _n) && (dn = function(r) {
        var i = xn(r), c = i == tn ? r.constructor : t, x = c ? Sa(c) : "";
        if (x)
          switch (x) {
            case oe:
              return Fr;
            case Ce:
              return xt;
            case ve:
              return Jt;
            case at:
              return Pe;
            case Ge:
              return _n;
          }
        return i;
      });
      function I0(r, i, c) {
        for (var x = -1, M = c.length; ++x < M; ) {
          var J = c[x], D = J.size;
          switch (J.type) {
            case "drop":
              r += D;
              break;
            case "dropRight":
              i -= D;
              break;
            case "take":
              i = rn(i, r + D);
              break;
            case "takeRight":
              r = zt(r, i - D);
              break;
          }
        }
        return { start: r, end: i };
      }
      function J0(r) {
        var i = r.match(Ao);
        return i ? i[1].split(co) : [];
      }
      function yd(r, i, c) {
        i = na(i, r);
        for (var x = -1, M = i.length, J = !1; ++x < M; ) {
          var D = fr(i[x]);
          if (!(J = r != null && c(r, D)))
            break;
          r = r[D];
        }
        return J || ++x != M ? J : (M = r == null ? 0 : r.length, !!M && Il(M) && Ir(D, M) && (Ue(r) || Ia(r)));
      }
      function T0(r) {
        var i = r.length, c = new r.constructor(i);
        return i && typeof r[0] == "string" && ut.call(r, "index") && (c.index = r.index, c.input = r.input), c;
      }
      function Ed(r) {
        return typeof r.constructor == "function" && !Ii(r) ? Hn(cs(r)) : {};
      }
      function C0(r, i, c) {
        var x = r.constructor;
        switch (i) {
          case Yr:
            return Qc(r);
          case qe:
          case Le:
            return new x(+r);
          case Fr:
            return d0(r, c);
          case sr:
          case ha:
          case ir:
          case Fn:
          case pa:
          case za:
          case Ya:
          case un:
          case zs:
            return id(r, c);
          case xt:
            return new x();
          case Lt:
          case Pr:
            return new x(r);
          case rt:
            return h0(r);
          case Pe:
            return new x();
          case zr:
            return p0(r);
        }
      }
      function D0(r, i) {
        var c = i.length;
        if (!c)
          return r;
        var x = c - 1;
        return i[x] = (c > 1 ? "& " : "") + i[x], i = i.join(c > 2 ? ", " : " "), r.replace(lo, `{
/* [wrapped with ` + i + `] */
`);
      }
      function R0(r) {
        return Ue(r) || Ia(r) || !!(al && r && r[al]);
      }
      function Ir(r, i) {
        var c = typeof r;
        return i = i ?? pe, !!i && (c == "number" || c != "symbol" && yA.test(r)) && r > -1 && r % 1 == 0 && r < i;
      }
      function kn(r, i, c) {
        if (!Rt(c))
          return !1;
        var x = typeof i;
        return (x == "number" ? Dn(c) && Ir(i, c.length) : x == "string" && i in c) ? nr(c[i], r) : !1;
      }
      function Yc(r, i) {
        if (Ue(r))
          return !1;
        var c = typeof r;
        return c == "number" || c == "symbol" || c == "boolean" || r == null || Un(r) ? !0 : so.test(r) || !Ws.test(r) || i != null && r in vt(i);
      }
      function j0(r) {
        var i = typeof r;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null;
      }
      function Fc(r) {
        var i = wl(r), c = I[i];
        if (typeof c != "function" || !(i in Ke.prototype))
          return !1;
        if (r === c)
          return !0;
        var x = Lc(c);
        return !!x && r === x[0];
      }
      function O0(r) {
        return !!el && el in r;
      }
      var Q0 = ss ? Jr : ou;
      function Ii(r) {
        var i = r && r.constructor, c = typeof i == "function" && i.prototype || $r;
        return r === c;
      }
      function Md(r) {
        return r === r && !Rt(r);
      }
      function Sd(r, i) {
        return function(c) {
          return c == null ? !1 : c[r] === i && (i !== t || r in vt(c));
        };
      }
      function N0(r) {
        var i = Ml(r, function(x) {
          return c.size === d && c.clear(), x;
        }), c = i.cache;
        return i;
      }
      function H0(r, i) {
        var c = r[1], x = i[1], M = c | x, J = M < (S | T | V), D = x == V && c == B || x == V && c == re && r[7].length <= i[8] || x == (V | re) && i[7].length <= i[8] && c == B;
        if (!(J || D))
          return r;
        x & S && (r[2] = i[2], M |= c & S ? 0 : Q);
        var N = i[3];
        if (N) {
          var P = r[3];
          r[3] = P ? ld(P, N, i[4]) : N, r[4] = P ? lr(r[3], h) : i[4];
        }
        return N = i[5], N && (P = r[5], r[5] = P ? Ad(P, N, i[6]) : N, r[6] = P ? lr(r[5], h) : i[6]), N = i[7], N && (r[7] = N), x & V && (r[8] = r[8] == null ? i[8] : rn(r[8], i[8])), r[9] == null && (r[9] = i[9]), r[0] = i[0], r[1] = M, r;
      }
      function B0(r) {
        var i = [];
        if (r != null)
          for (var c in vt(r))
            i.push(c);
        return i;
      }
      function U0(r) {
        return os.call(r);
      }
      function Id(r, i, c) {
        return i = zt(i === t ? r.length - 1 : i, 0), function() {
          for (var x = arguments, M = -1, J = zt(x.length - i, 0), D = q(J); ++M < J; )
            D[M] = x[i + M];
          M = -1;
          for (var N = q(i + 1); ++M < i; )
            N[M] = x[M];
          return N[i] = c(D), gn(r, this, N);
        };
      }
      function Jd(r, i) {
        return i.length < 2 ? r : Ea(r, Gn(i, 0, -1));
      }
      function L0(r, i) {
        for (var c = r.length, x = rn(i.length, c), M = Cn(r); x--; ) {
          var J = i[x];
          r[x] = Ir(J, c) ? M[J] : t;
        }
        return r;
      }
      function Zc(r, i) {
        if (!(i === "constructor" && typeof r[i] == "function") && i != "__proto__")
          return r[i];
      }
      var Td = Dd(_f), Ji = sl || function(r, i) {
        return $t.setTimeout(r, i);
      }, Gc = Dd(A0);
      function Cd(r, i, c) {
        var x = i + "";
        return Gc(r, D0(x, P0(J0(x), c)));
      }
      function Dd(r) {
        var i = 0, c = 0;
        return function() {
          var x = mc(), M = _ - (x - c);
          if (c = x, M > 0) {
            if (++i >= j)
              return arguments[0];
          } else
            i = 0;
          return r.apply(t, arguments);
        };
      }
      function kl(r, i) {
        var c = -1, x = r.length, M = x - 1;
        for (i = i === t ? x : i; ++c < i; ) {
          var J = Jc(c, M), D = r[J];
          r[J] = r[c], r[c] = D;
        }
        return r.length = i, r;
      }
      var Rd = N0(function(r) {
        var i = [];
        return r.charCodeAt(0) === 46 && i.push(""), r.replace(vA, function(c, x, M, J) {
          i.push(M ? J.replace(Ga, "$1") : x || c);
        }), i;
      });
      function fr(r) {
        if (typeof r == "string" || Un(r))
          return r;
        var i = r + "";
        return i == "0" && 1 / r == -Z ? "-0" : i;
      }
      function Sa(r) {
        if (r != null) {
          try {
            return is.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function P0(r, i) {
        return vn(de, function(c) {
          var x = "_." + c[0];
          i & c[1] && !ma(r, x) && r.push(x);
        }), r.sort();
      }
      function jd(r) {
        if (r instanceof Ke)
          return r.clone();
        var i = new qt(r.__wrapped__, r.__chain__);
        return i.__actions__ = Cn(r.__actions__), i.__index__ = r.__index__, i.__values__ = r.__values__, i;
      }
      function z0(r, i, c) {
        (c ? kn(r, i, c) : i === t) ? i = 1 : i = zt(ze(i), 0);
        var x = r == null ? 0 : r.length;
        if (!x || i < 1)
          return [];
        for (var M = 0, J = 0, D = q(ds(x / i)); M < x; )
          D[J++] = Gn(r, M, M += i);
        return D;
      }
      function Y0(r) {
        for (var i = -1, c = r == null ? 0 : r.length, x = 0, M = []; ++i < c; ) {
          var J = r[i];
          J && (M[x++] = J);
        }
        return M;
      }
      function F0() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var i = q(r - 1), c = arguments[0], x = r; x--; )
          i[x - 1] = arguments[x];
        return er(Ue(c) ? Cn(c) : [c], ln(i, 1));
      }
      var Z0 = Ze(function(r, i) {
        return Yt(r) ? bi(r, ln(i, 1, Yt, !0)) : [];
      }), G0 = Ze(function(r, i) {
        var c = Kn(i);
        return Yt(c) && (c = t), Yt(r) ? bi(r, ln(i, 1, Yt, !0), De(c, 2)) : [];
      }), K0 = Ze(function(r, i) {
        var c = Kn(i);
        return Yt(c) && (c = t), Yt(r) ? bi(r, ln(i, 1, Yt, !0), t, c) : [];
      });
      function X0(r, i, c) {
        var x = r == null ? 0 : r.length;
        return x ? (i = c || i === t ? 1 : ze(i), Gn(r, i < 0 ? 0 : i, x)) : [];
      }
      function W0(r, i, c) {
        var x = r == null ? 0 : r.length;
        return x ? (i = c || i === t ? 1 : ze(i), i = x - i, Gn(r, 0, i < 0 ? 0 : i)) : [];
      }
      function q0(r, i) {
        return r && r.length ? dl(r, De(i, 3), !0, !0) : [];
      }
      function V0(r, i) {
        return r && r.length ? dl(r, De(i, 3), !0) : [];
      }
      function _0(r, i, c, x) {
        var M = r == null ? 0 : r.length;
        return M ? (c && typeof c != "number" && kn(r, i, c) && (c = 0, x = M), Fg(r, i, c, x)) : [];
      }
      function Od(r, i, c) {
        var x = r == null ? 0 : r.length;
        if (!x)
          return -1;
        var M = c == null ? 0 : ze(c);
        return M < 0 && (M = zt(x + M, 0)), ns(r, De(i, 3), M);
      }
      function Qd(r, i, c) {
        var x = r == null ? 0 : r.length;
        if (!x)
          return -1;
        var M = x - 1;
        return c !== t && (M = ze(c), M = c < 0 ? zt(x + M, 0) : rn(M, x - 1)), ns(r, De(i, 3), M, !0);
      }
      function Nd(r) {
        var i = r == null ? 0 : r.length;
        return i ? ln(r, 1) : [];
      }
      function $0(r) {
        var i = r == null ? 0 : r.length;
        return i ? ln(r, Z) : [];
      }
      function ev(r, i) {
        var c = r == null ? 0 : r.length;
        return c ? (i = i === t ? 1 : ze(i), ln(r, i)) : [];
      }
      function tv(r) {
        for (var i = -1, c = r == null ? 0 : r.length, x = {}; ++i < c; ) {
          var M = r[i];
          x[M[0]] = M[1];
        }
        return x;
      }
      function Hd(r) {
        return r && r.length ? r[0] : t;
      }
      function nv(r, i, c) {
        var x = r == null ? 0 : r.length;
        if (!x)
          return -1;
        var M = c == null ? 0 : ze(c);
        return M < 0 && (M = zt(x + M, 0)), Wr(r, i, M);
      }
      function rv(r) {
        var i = r == null ? 0 : r.length;
        return i ? Gn(r, 0, -1) : [];
      }
      var av = Ze(function(r) {
        var i = bt(r, jc);
        return i.length && i[0] === r[0] ? yc(i) : [];
      }), sv = Ze(function(r) {
        var i = Kn(r), c = bt(r, jc);
        return i === Kn(c) ? i = t : c.pop(), c.length && c[0] === r[0] ? yc(c, De(i, 2)) : [];
      }), iv = Ze(function(r) {
        var i = Kn(r), c = bt(r, jc);
        return i = typeof i == "function" ? i : t, i && c.pop(), c.length && c[0] === r[0] ? yc(c, t, i) : [];
      });
      function ov(r, i) {
        return r == null ? "" : Tt.call(r, i);
      }
      function Kn(r) {
        var i = r == null ? 0 : r.length;
        return i ? r[i - 1] : t;
      }
      function lv(r, i, c) {
        var x = r == null ? 0 : r.length;
        if (!x)
          return -1;
        var M = x;
        return c !== t && (M = ze(c), M = M < 0 ? zt(x + M, 0) : rn(M, x - 1)), i === i ? nc(r, i, M) : ns(r, Zo, M, !0);
      }
      function Av(r, i) {
        return r && r.length ? Xf(r, ze(i)) : t;
      }
      var cv = Ze(Bd);
      function Bd(r, i) {
        return r && r.length && i && i.length ? Ic(r, i) : r;
      }
      function uv(r, i, c) {
        return r && r.length && i && i.length ? Ic(r, i, De(c, 2)) : r;
      }
      function fv(r, i, c) {
        return r && r.length && i && i.length ? Ic(r, i, t, c) : r;
      }
      var dv = Sr(function(r, i) {
        var c = r == null ? 0 : r.length, x = wc(r, i);
        return Vf(r, bt(i, function(M) {
          return Ir(M, c) ? +M : M;
        }).sort(od)), x;
      });
      function hv(r, i) {
        var c = [];
        if (!(r && r.length))
          return c;
        var x = -1, M = [], J = r.length;
        for (i = De(i, 3); ++x < J; ) {
          var D = r[x];
          i(D, x, r) && (c.push(D), M.push(x));
        }
        return Vf(r, M), c;
      }
      function Kc(r) {
        return r == null ? r : p.call(r);
      }
      function pv(r, i, c) {
        var x = r == null ? 0 : r.length;
        return x ? (c && typeof c != "number" && kn(r, i, c) ? (i = 0, c = x) : (i = i == null ? 0 : ze(i), c = c === t ? x : ze(c)), Gn(r, i, c)) : [];
      }
      function mv(r, i) {
        return fl(r, i);
      }
      function gv(r, i, c) {
        return Cc(r, i, De(c, 2));
      }
      function vv(r, i) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var x = fl(r, i);
          if (x < c && nr(r[x], i))
            return x;
        }
        return -1;
      }
      function wv(r, i) {
        return fl(r, i, !0);
      }
      function xv(r, i, c) {
        return Cc(r, i, De(c, 2), !0);
      }
      function kv(r, i) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var x = fl(r, i, !0) - 1;
          if (nr(r[x], i))
            return x;
        }
        return -1;
      }
      function bv(r) {
        return r && r.length ? $f(r) : [];
      }
      function yv(r, i) {
        return r && r.length ? $f(r, De(i, 2)) : [];
      }
      function Ev(r) {
        var i = r == null ? 0 : r.length;
        return i ? Gn(r, 1, i) : [];
      }
      function Mv(r, i, c) {
        return r && r.length ? (i = c || i === t ? 1 : ze(i), Gn(r, 0, i < 0 ? 0 : i)) : [];
      }
      function Sv(r, i, c) {
        var x = r == null ? 0 : r.length;
        return x ? (i = c || i === t ? 1 : ze(i), i = x - i, Gn(r, i < 0 ? 0 : i, x)) : [];
      }
      function Iv(r, i) {
        return r && r.length ? dl(r, De(i, 3), !1, !0) : [];
      }
      function Jv(r, i) {
        return r && r.length ? dl(r, De(i, 3)) : [];
      }
      var Tv = Ze(function(r) {
        return ta(ln(r, 1, Yt, !0));
      }), Cv = Ze(function(r) {
        var i = Kn(r);
        return Yt(i) && (i = t), ta(ln(r, 1, Yt, !0), De(i, 2));
      }), Dv = Ze(function(r) {
        var i = Kn(r);
        return i = typeof i == "function" ? i : t, ta(ln(r, 1, Yt, !0), t, i);
      });
      function Rv(r) {
        return r && r.length ? ta(r) : [];
      }
      function jv(r, i) {
        return r && r.length ? ta(r, De(i, 2)) : [];
      }
      function Ov(r, i) {
        return i = typeof i == "function" ? i : t, r && r.length ? ta(r, t, i) : [];
      }
      function Xc(r) {
        if (!(r && r.length))
          return [];
        var i = 0;
        return r = $n(r, function(c) {
          if (Yt(c))
            return i = zt(c.length, i), !0;
        }), pi(i, function(c) {
          return bt(r, fi(c));
        });
      }
      function Ud(r, i) {
        if (!(r && r.length))
          return [];
        var c = Xc(r);
        return i == null ? c : bt(c, function(x) {
          return gn(i, t, x);
        });
      }
      var Qv = Ze(function(r, i) {
        return Yt(r) ? bi(r, i) : [];
      }), Nv = Ze(function(r) {
        return Rc($n(r, Yt));
      }), Hv = Ze(function(r) {
        var i = Kn(r);
        return Yt(i) && (i = t), Rc($n(r, Yt), De(i, 2));
      }), Bv = Ze(function(r) {
        var i = Kn(r);
        return i = typeof i == "function" ? i : t, Rc($n(r, Yt), t, i);
      }), Uv = Ze(Xc);
      function Lv(r, i) {
        return rd(r || [], i || [], ki);
      }
      function Pv(r, i) {
        return rd(r || [], i || [], Mi);
      }
      var zv = Ze(function(r) {
        var i = r.length, c = i > 1 ? r[i - 1] : t;
        return c = typeof c == "function" ? (r.pop(), c) : t, Ud(r, c);
      });
      function Ld(r) {
        var i = I(r);
        return i.__chain__ = !0, i;
      }
      function Yv(r, i) {
        return i(r), r;
      }
      function bl(r, i) {
        return i(r);
      }
      var Fv = Sr(function(r) {
        var i = r.length, c = i ? r[0] : 0, x = this.__wrapped__, M = function(J) {
          return wc(J, r);
        };
        return i > 1 || this.__actions__.length || !(x instanceof Ke) || !Ir(c) ? this.thru(M) : (x = x.slice(c, +c + (i ? 1 : 0)), x.__actions__.push({
          func: bl,
          args: [M],
          thisArg: t
        }), new qt(x, this.__chain__).thru(function(J) {
          return i && !J.length && J.push(t), J;
        }));
      });
      function Zv() {
        return Ld(this);
      }
      function Gv() {
        return new qt(this.value(), this.__chain__);
      }
      function Kv() {
        this.__values__ === t && (this.__values__ = eh(this.value()));
        var r = this.__index__ >= this.__values__.length, i = r ? t : this.__values__[this.__index__++];
        return { done: r, value: i };
      }
      function Xv() {
        return this;
      }
      function Wv(r) {
        for (var i, c = this; c instanceof wa; ) {
          var x = jd(c);
          x.__index__ = 0, x.__values__ = t, i ? M.__wrapped__ = x : i = x;
          var M = x;
          c = c.__wrapped__;
        }
        return M.__wrapped__ = r, i;
      }
      function qv() {
        var r = this.__wrapped__;
        if (r instanceof Ke) {
          var i = r;
          return this.__actions__.length && (i = new Ke(this)), i = i.reverse(), i.__actions__.push({
            func: bl,
            args: [Kc],
            thisArg: t
          }), new qt(i, this.__chain__);
        }
        return this.thru(Kc);
      }
      function Vv() {
        return nd(this.__wrapped__, this.__actions__);
      }
      var _v = hl(function(r, i, c) {
        ut.call(r, c) ? ++r[c] : Er(r, c, 1);
      });
      function $v(r, i, c) {
        var x = Ue(r) ? ci : Yg;
        return c && kn(r, i, c) && (i = t), x(r, De(i, 3));
      }
      function ew(r, i) {
        var c = Ue(r) ? $n : Uf;
        return c(r, De(i, 3));
      }
      var tw = dd(Od), nw = dd(Qd);
      function rw(r, i) {
        return ln(yl(r, i), 1);
      }
      function aw(r, i) {
        return ln(yl(r, i), Z);
      }
      function sw(r, i, c) {
        return c = c === t ? 1 : ze(c), ln(yl(r, i), c);
      }
      function Pd(r, i) {
        var c = Ue(r) ? vn : ea;
        return c(r, De(i, 3));
      }
      function zd(r, i) {
        var c = Ue(r) ? zo : Bf;
        return c(r, De(i, 3));
      }
      var iw = hl(function(r, i, c) {
        ut.call(r, c) ? r[c].push(i) : Er(r, c, [i]);
      });
      function ow(r, i, c, x) {
        r = Dn(r) ? r : ws(r), c = c && !x ? ze(c) : 0;
        var M = r.length;
        return c < 0 && (c = zt(M + c, 0)), Jl(r) ? c <= M && r.indexOf(i, c) > -1 : !!M && Wr(r, i, c) > -1;
      }
      var lw = Ze(function(r, i, c) {
        var x = -1, M = typeof i == "function", J = Dn(r) ? q(r.length) : [];
        return ea(r, function(D) {
          J[++x] = M ? gn(i, D, c) : yi(D, i, c);
        }), J;
      }), Aw = hl(function(r, i, c) {
        Er(r, c, i);
      });
      function yl(r, i) {
        var c = Ue(r) ? bt : Zf;
        return c(r, De(i, 3));
      }
      function cw(r, i, c, x) {
        return r == null ? [] : (Ue(i) || (i = i == null ? [] : [i]), c = x ? t : c, Ue(c) || (c = c == null ? [] : [c]), Wf(r, i, c));
      }
      var uw = hl(function(r, i, c) {
        r[c ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function fw(r, i, c) {
        var x = Ue(r) ? ts : Ko, M = arguments.length < 3;
        return x(r, De(i, 4), c, M, ea);
      }
      function dw(r, i, c) {
        var x = Ue(r) ? Yo : Ko, M = arguments.length < 3;
        return x(r, De(i, 4), c, M, Bf);
      }
      function hw(r, i) {
        var c = Ue(r) ? $n : Uf;
        return c(r, Sl(De(i, 3)));
      }
      function pw(r) {
        var i = Ue(r) ? Of : o0;
        return i(r);
      }
      function mw(r, i, c) {
        (c ? kn(r, i, c) : i === t) ? i = 1 : i = ze(i);
        var x = Ue(r) ? Bg : l0;
        return x(r, i);
      }
      function gw(r) {
        var i = Ue(r) ? Ug : c0;
        return i(r);
      }
      function vw(r) {
        if (r == null)
          return 0;
        if (Dn(r))
          return Jl(r) ? Vr(r) : r.length;
        var i = dn(r);
        return i == xt || i == Pe ? r.size : Mc(r).length;
      }
      function ww(r, i, c) {
        var x = Ue(r) ? ui : u0;
        return c && kn(r, i, c) && (i = t), x(r, De(i, 3));
      }
      var xw = Ze(function(r, i) {
        if (r == null)
          return [];
        var c = i.length;
        return c > 1 && kn(r, i[0], i[1]) ? i = [] : c > 2 && kn(i[0], i[1], i[2]) && (i = [i[0]]), Wf(r, ln(i, 1), []);
      }), El = dc || function() {
        return $t.Date.now();
      };
      function kw(r, i) {
        if (typeof i != "function")
          throw new wn(A);
        return r = ze(r), function() {
          if (--r < 1)
            return i.apply(this, arguments);
        };
      }
      function Yd(r, i, c) {
        return i = c ? t : i, i = r && i == null ? r.length : i, Mr(r, V, t, t, t, t, i);
      }
      function Fd(r, i) {
        var c;
        if (typeof i != "function")
          throw new wn(A);
        return r = ze(r), function() {
          return --r > 0 && (c = i.apply(this, arguments)), r <= 1 && (i = t), c;
        };
      }
      var Wc = Ze(function(r, i, c) {
        var x = S;
        if (c.length) {
          var M = lr(c, gs(Wc));
          x |= $;
        }
        return Mr(r, x, i, c, M);
      }), Zd = Ze(function(r, i, c) {
        var x = S | T;
        if (c.length) {
          var M = lr(c, gs(Zd));
          x |= $;
        }
        return Mr(i, x, r, c, M);
      });
      function Gd(r, i, c) {
        i = c ? t : i;
        var x = Mr(r, B, t, t, t, t, t, i);
        return x.placeholder = Gd.placeholder, x;
      }
      function Kd(r, i, c) {
        i = c ? t : i;
        var x = Mr(r, K, t, t, t, t, t, i);
        return x.placeholder = Kd.placeholder, x;
      }
      function Xd(r, i, c) {
        var x, M, J, D, N, P, se = 0, ie = !1, Ae = !1, me = !0;
        if (typeof r != "function")
          throw new wn(A);
        i = Xn(i) || 0, Rt(c) && (ie = !!c.leading, Ae = "maxWait" in c, J = Ae ? zt(Xn(c.maxWait) || 0, i) : J, me = "trailing" in c ? !!c.trailing : me);
        function ye(Ft) {
          var rr = x, Cr = M;
          return x = M = t, se = Ft, D = r.apply(Cr, rr), D;
        }
        function je(Ft) {
          return se = Ft, N = Ji(We, i), ie ? ye(Ft) : D;
        }
        function Fe(Ft) {
          var rr = Ft - P, Cr = Ft - se, dh = i - rr;
          return Ae ? rn(dh, J - Cr) : dh;
        }
        function Oe(Ft) {
          var rr = Ft - P, Cr = Ft - se;
          return P === t || rr >= i || rr < 0 || Ae && Cr >= J;
        }
        function We() {
          var Ft = El();
          if (Oe(Ft))
            return Ve(Ft);
          N = Ji(We, Fe(Ft));
        }
        function Ve(Ft) {
          return N = t, me && x ? ye(Ft) : (x = M = t, D);
        }
        function Ln() {
          N !== t && ad(N), se = 0, x = P = M = N = t;
        }
        function bn() {
          return N === t ? D : Ve(El());
        }
        function Pn() {
          var Ft = El(), rr = Oe(Ft);
          if (x = arguments, M = this, P = Ft, rr) {
            if (N === t)
              return je(P);
            if (Ae)
              return ad(N), N = Ji(We, i), ye(P);
          }
          return N === t && (N = Ji(We, i)), D;
        }
        return Pn.cancel = Ln, Pn.flush = bn, Pn;
      }
      var bw = Ze(function(r, i) {
        return Hf(r, 1, i);
      }), yw = Ze(function(r, i, c) {
        return Hf(r, Xn(i) || 0, c);
      });
      function Ew(r) {
        return Mr(r, le);
      }
      function Ml(r, i) {
        if (typeof r != "function" || i != null && typeof i != "function")
          throw new wn(A);
        var c = function() {
          var x = arguments, M = i ? i.apply(this, x) : x[0], J = c.cache;
          if (J.has(M))
            return J.get(M);
          var D = r.apply(this, x);
          return c.cache = J.set(M, D) || J, D;
        };
        return c.cache = new (Ml.Cache || yr)(), c;
      }
      Ml.Cache = yr;
      function Sl(r) {
        if (typeof r != "function")
          throw new wn(A);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, i[0]);
            case 2:
              return !r.call(this, i[0], i[1]);
            case 3:
              return !r.call(this, i[0], i[1], i[2]);
          }
          return !r.apply(this, i);
        };
      }
      function Mw(r) {
        return Fd(2, r);
      }
      var Sw = f0(function(r, i) {
        i = i.length == 1 && Ue(i[0]) ? bt(i[0], fn(De())) : bt(ln(i, 1), fn(De()));
        var c = i.length;
        return Ze(function(x) {
          for (var M = -1, J = rn(x.length, c); ++M < J; )
            x[M] = i[M].call(this, x[M]);
          return gn(r, this, x);
        });
      }), qc = Ze(function(r, i) {
        var c = lr(i, gs(qc));
        return Mr(r, $, t, i, c);
      }), Wd = Ze(function(r, i) {
        var c = lr(i, gs(Wd));
        return Mr(r, Y, t, i, c);
      }), Iw = Sr(function(r, i) {
        return Mr(r, re, t, t, t, i);
      });
      function Jw(r, i) {
        if (typeof r != "function")
          throw new wn(A);
        return i = i === t ? i : ze(i), Ze(r, i);
      }
      function Tw(r, i) {
        if (typeof r != "function")
          throw new wn(A);
        return i = i == null ? 0 : zt(ze(i), 0), Ze(function(c) {
          var x = c[i], M = ra(c, 0, i);
          return x && er(M, x), gn(r, this, M);
        });
      }
      function Cw(r, i, c) {
        var x = !0, M = !0;
        if (typeof r != "function")
          throw new wn(A);
        return Rt(c) && (x = "leading" in c ? !!c.leading : x, M = "trailing" in c ? !!c.trailing : M), Xd(r, i, {
          leading: x,
          maxWait: i,
          trailing: M
        });
      }
      function Dw(r) {
        return Yd(r, 1);
      }
      function Rw(r, i) {
        return qc(Oc(i), r);
      }
      function jw() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return Ue(r) ? r : [r];
      }
      function Ow(r) {
        return Zn(r, k);
      }
      function Qw(r, i) {
        return i = typeof i == "function" ? i : t, Zn(r, k, i);
      }
      function Nw(r) {
        return Zn(r, m | k);
      }
      function Hw(r, i) {
        return i = typeof i == "function" ? i : t, Zn(r, m | k, i);
      }
      function Bw(r, i) {
        return i == null || Nf(r, i, an(i));
      }
      function nr(r, i) {
        return r === i || r !== r && i !== i;
      }
      var Uw = vl(bc), Lw = vl(function(r, i) {
        return r >= i;
      }), Ia = zf(function() {
        return arguments;
      }()) ? zf : function(r) {
        return Nt(r) && ut.call(r, "callee") && !rl.call(r, "callee");
      }, Ue = q.isArray, Pw = No ? fn(No) : Wg;
      function Dn(r) {
        return r != null && Il(r.length) && !Jr(r);
      }
      function Yt(r) {
        return Nt(r) && Dn(r);
      }
      function zw(r) {
        return r === !0 || r === !1 || Nt(r) && xn(r) == qe;
      }
      var aa = hc || ou, Yw = Ho ? fn(Ho) : qg;
      function Fw(r) {
        return Nt(r) && r.nodeType === 1 && !Ti(r);
      }
      function Zw(r) {
        if (r == null)
          return !0;
        if (Dn(r) && (Ue(r) || typeof r == "string" || typeof r.splice == "function" || aa(r) || vs(r) || Ia(r)))
          return !r.length;
        var i = dn(r);
        if (i == xt || i == Pe)
          return !r.size;
        if (Ii(r))
          return !Mc(r).length;
        for (var c in r)
          if (ut.call(r, c))
            return !1;
        return !0;
      }
      function Gw(r, i) {
        return Ei(r, i);
      }
      function Kw(r, i, c) {
        c = typeof c == "function" ? c : t;
        var x = c ? c(r, i) : t;
        return x === t ? Ei(r, i, t, c) : !!x;
      }
      function Vc(r) {
        if (!Nt(r))
          return !1;
        var i = xn(r);
        return i == Se || i == ee || typeof r.message == "string" && typeof r.name == "string" && !Ti(r);
      }
      function Xw(r) {
        return typeof r == "number" && il(r);
      }
      function Jr(r) {
        if (!Rt(r))
          return !1;
        var i = xn(r);
        return i == Qe || i == Xe || i == Xt || i == xr;
      }
      function qd(r) {
        return typeof r == "number" && r == ze(r);
      }
      function Il(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= pe;
      }
      function Rt(r) {
        var i = typeof r;
        return r != null && (i == "object" || i == "function");
      }
      function Nt(r) {
        return r != null && typeof r == "object";
      }
      var Vd = Bo ? fn(Bo) : _g;
      function Ww(r, i) {
        return r === i || Ec(r, i, Pc(i));
      }
      function qw(r, i, c) {
        return c = typeof c == "function" ? c : t, Ec(r, i, Pc(i), c);
      }
      function Vw(r) {
        return _d(r) && r != +r;
      }
      function _w(r) {
        if (Q0(r))
          throw new He(l);
        return Yf(r);
      }
      function $w(r) {
        return r === null;
      }
      function ex(r) {
        return r == null;
      }
      function _d(r) {
        return typeof r == "number" || Nt(r) && xn(r) == Lt;
      }
      function Ti(r) {
        if (!Nt(r) || xn(r) != tn)
          return !1;
        var i = cs(r);
        if (i === null)
          return !0;
        var c = ut.call(i, "constructor") && i.constructor;
        return typeof c == "function" && c instanceof c && is.call(c) == on;
      }
      var _c = Uo ? fn(Uo) : $g;
      function tx(r) {
        return qd(r) && r >= -pe && r <= pe;
      }
      var $d = Lo ? fn(Lo) : e0;
      function Jl(r) {
        return typeof r == "string" || !Ue(r) && Nt(r) && xn(r) == Pr;
      }
      function Un(r) {
        return typeof r == "symbol" || Nt(r) && xn(r) == zr;
      }
      var vs = Po ? fn(Po) : t0;
      function nx(r) {
        return r === t;
      }
      function rx(r) {
        return Nt(r) && dn(r) == _n;
      }
      function ax(r) {
        return Nt(r) && xn(r) == mA;
      }
      var sx = vl(Sc), ix = vl(function(r, i) {
        return r <= i;
      });
      function eh(r) {
        if (!r)
          return [];
        if (Dn(r))
          return Jl(r) ? Jn(r) : Cn(r);
        if (va && r[va])
          return $A(r[va]());
        var i = dn(r), c = i == xt ? gi : i == Pe ? rs : ws;
        return c(r);
      }
      function Tr(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = Xn(r), r === Z || r === -Z) {
          var i = r < 0 ? -1 : 1;
          return i * Me;
        }
        return r === r ? r : 0;
      }
      function ze(r) {
        var i = Tr(r), c = i % 1;
        return i === i ? c ? i - c : i : 0;
      }
      function th(r) {
        return r ? ya(ze(r), 0, Ie) : 0;
      }
      function Xn(r) {
        if (typeof r == "number")
          return r;
        if (Un(r))
          return G;
        if (Rt(r)) {
          var i = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = Rt(i) ? i + "" : i;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = Xo(r);
        var c = xA.test(r);
        return c || bA.test(r) ? LA(r.slice(2), c ? 2 : 8) : wA.test(r) ? G : +r;
      }
      function nh(r) {
        return ur(r, Rn(r));
      }
      function ox(r) {
        return r ? ya(ze(r), -pe, pe) : r === 0 ? r : 0;
      }
      function pt(r) {
        return r == null ? "" : Bn(r);
      }
      var lx = ps(function(r, i) {
        if (Ii(i) || Dn(i)) {
          ur(i, an(i), r);
          return;
        }
        for (var c in i)
          ut.call(i, c) && ki(r, c, i[c]);
      }), rh = ps(function(r, i) {
        ur(i, Rn(i), r);
      }), Tl = ps(function(r, i, c, x) {
        ur(i, Rn(i), r, x);
      }), Ax = ps(function(r, i, c, x) {
        ur(i, an(i), r, x);
      }), cx = Sr(wc);
      function ux(r, i) {
        var c = Hn(r);
        return i == null ? c : Qf(c, i);
      }
      var fx = Ze(function(r, i) {
        r = vt(r);
        var c = -1, x = i.length, M = x > 2 ? i[2] : t;
        for (M && kn(i[0], i[1], M) && (x = 1); ++c < x; )
          for (var J = i[c], D = Rn(J), N = -1, P = D.length; ++N < P; ) {
            var se = D[N], ie = r[se];
            (ie === t || nr(ie, $r[se]) && !ut.call(r, se)) && (r[se] = J[se]);
          }
        return r;
      }), dx = Ze(function(r) {
        return r.push(t, xd), gn(ah, t, r);
      });
      function hx(r, i) {
        return Fo(r, De(i, 3), cr);
      }
      function px(r, i) {
        return Fo(r, De(i, 3), kc);
      }
      function mx(r, i) {
        return r == null ? r : xc(r, De(i, 3), Rn);
      }
      function gx(r, i) {
        return r == null ? r : Lf(r, De(i, 3), Rn);
      }
      function vx(r, i) {
        return r && cr(r, De(i, 3));
      }
      function wx(r, i) {
        return r && kc(r, De(i, 3));
      }
      function xx(r) {
        return r == null ? [] : cl(r, an(r));
      }
      function kx(r) {
        return r == null ? [] : cl(r, Rn(r));
      }
      function $c(r, i, c) {
        var x = r == null ? t : Ea(r, i);
        return x === t ? c : x;
      }
      function bx(r, i) {
        return r != null && yd(r, i, Zg);
      }
      function eu(r, i) {
        return r != null && yd(r, i, Gg);
      }
      var yx = pd(function(r, i, c) {
        i != null && typeof i.toString != "function" && (i = os.call(i)), r[i] = c;
      }, nu(jn)), Ex = pd(function(r, i, c) {
        i != null && typeof i.toString != "function" && (i = os.call(i)), ut.call(r, i) ? r[i].push(c) : r[i] = [c];
      }, De), Mx = Ze(yi);
      function an(r) {
        return Dn(r) ? jf(r) : Mc(r);
      }
      function Rn(r) {
        return Dn(r) ? jf(r, !0) : n0(r);
      }
      function Sx(r, i) {
        var c = {};
        return i = De(i, 3), cr(r, function(x, M, J) {
          Er(c, i(x, M, J), x);
        }), c;
      }
      function Ix(r, i) {
        var c = {};
        return i = De(i, 3), cr(r, function(x, M, J) {
          Er(c, M, i(x, M, J));
        }), c;
      }
      var Jx = ps(function(r, i, c) {
        ul(r, i, c);
      }), ah = ps(function(r, i, c, x) {
        ul(r, i, c, x);
      }), Tx = Sr(function(r, i) {
        var c = {};
        if (r == null)
          return c;
        var x = !1;
        i = bt(i, function(J) {
          return J = na(J, r), x || (x = J.length > 1), J;
        }), ur(r, Uc(r), c), x && (c = Zn(c, m | v | k, y0));
        for (var M = i.length; M--; )
          Dc(c, i[M]);
        return c;
      });
      function Cx(r, i) {
        return sh(r, Sl(De(i)));
      }
      var Dx = Sr(function(r, i) {
        return r == null ? {} : a0(r, i);
      });
      function sh(r, i) {
        if (r == null)
          return {};
        var c = bt(Uc(r), function(x) {
          return [x];
        });
        return i = De(i), qf(r, c, function(x, M) {
          return i(x, M[0]);
        });
      }
      function Rx(r, i, c) {
        i = na(i, r);
        var x = -1, M = i.length;
        for (M || (M = 1, r = t); ++x < M; ) {
          var J = r == null ? t : r[fr(i[x])];
          J === t && (x = M, J = c), r = Jr(J) ? J.call(r) : J;
        }
        return r;
      }
      function jx(r, i, c) {
        return r == null ? r : Mi(r, i, c);
      }
      function Ox(r, i, c, x) {
        return x = typeof x == "function" ? x : t, r == null ? r : Mi(r, i, c, x);
      }
      var ih = vd(an), oh = vd(Rn);
      function Qx(r, i, c) {
        var x = Ue(r), M = x || aa(r) || vs(r);
        if (i = De(i, 4), c == null) {
          var J = r && r.constructor;
          M ? c = x ? new J() : [] : Rt(r) ? c = Jr(J) ? Hn(cs(r)) : {} : c = {};
        }
        return (M ? vn : cr)(r, function(D, N, P) {
          return i(c, D, N, P);
        }), c;
      }
      function Nx(r, i) {
        return r == null ? !0 : Dc(r, i);
      }
      function Hx(r, i, c) {
        return r == null ? r : td(r, i, Oc(c));
      }
      function Bx(r, i, c, x) {
        return x = typeof x == "function" ? x : t, r == null ? r : td(r, i, Oc(c), x);
      }
      function ws(r) {
        return r == null ? [] : mi(r, an(r));
      }
      function Ux(r) {
        return r == null ? [] : mi(r, Rn(r));
      }
      function Lx(r, i, c) {
        return c === t && (c = i, i = t), c !== t && (c = Xn(c), c = c === c ? c : 0), i !== t && (i = Xn(i), i = i === i ? i : 0), ya(Xn(r), i, c);
      }
      function Px(r, i, c) {
        return i = Tr(i), c === t ? (c = i, i = 0) : c = Tr(c), r = Xn(r), Kg(r, i, c);
      }
      function zx(r, i, c) {
        if (c && typeof c != "boolean" && kn(r, i, c) && (i = c = t), c === t && (typeof i == "boolean" ? (c = i, i = t) : typeof r == "boolean" && (c = r, r = t)), r === t && i === t ? (r = 0, i = 1) : (r = Tr(r), i === t ? (i = r, r = 0) : i = Tr(i)), r > i) {
          var x = r;
          r = i, i = x;
        }
        if (c || r % 1 || i % 1) {
          var M = ol();
          return rn(r + M * (i - r + UA("1e-" + ((M + "").length - 1))), i);
        }
        return Jc(r, i);
      }
      var Yx = ms(function(r, i, c) {
        return i = i.toLowerCase(), r + (c ? lh(i) : i);
      });
      function lh(r) {
        return tu(pt(r).toLowerCase());
      }
      function Ah(r) {
        return r = pt(r), r && r.replace(EA, WA).replace(Nn, "");
      }
      function Fx(r, i, c) {
        r = pt(r), i = Bn(i);
        var x = r.length;
        c = c === t ? x : ya(ze(c), 0, x);
        var M = c;
        return c -= i.length, c >= 0 && r.slice(c, M) == i;
      }
      function Zx(r) {
        return r = pt(r), r && Zs.test(r) ? r.replace(Fa, qA) : r;
      }
      function Gx(r) {
        return r = pt(r), r && io.test(r) ? r.replace(Za, "\\$&") : r;
      }
      var Kx = ms(function(r, i, c) {
        return r + (c ? "-" : "") + i.toLowerCase();
      }), Xx = ms(function(r, i, c) {
        return r + (c ? " " : "") + i.toLowerCase();
      }), Wx = fd("toLowerCase");
      function qx(r, i, c) {
        r = pt(r), i = ze(i);
        var x = i ? Vr(r) : 0;
        if (!i || x >= i)
          return r;
        var M = (i - x) / 2;
        return gl(hs(M), c) + r + gl(ds(M), c);
      }
      function Vx(r, i, c) {
        r = pt(r), i = ze(i);
        var x = i ? Vr(r) : 0;
        return i && x < i ? r + gl(i - x, c) : r;
      }
      function _x(r, i, c) {
        r = pt(r), i = ze(i);
        var x = i ? Vr(r) : 0;
        return i && x < i ? gl(i - x, c) + r : r;
      }
      function $x(r, i, c) {
        return c || i == null ? i = 0 : i && (i = +i), gc(pt(r).replace(qs, ""), i || 0);
      }
      function e1(r, i, c) {
        return (c ? kn(r, i, c) : i === t) ? i = 1 : i = ze(i), Tc(pt(r), i);
      }
      function t1() {
        var r = arguments, i = pt(r[0]);
        return r.length < 3 ? i : i.replace(r[1], r[2]);
      }
      var n1 = ms(function(r, i, c) {
        return r + (c ? "_" : "") + i.toLowerCase();
      });
      function r1(r, i, c) {
        return c && typeof c != "number" && kn(r, i, c) && (i = c = t), c = c === t ? Ie : c >>> 0, c ? (r = pt(r), r && (typeof i == "string" || i != null && !_c(i)) && (i = Bn(i), !i && qr(r)) ? ra(Jn(r), 0, c) : r.split(i, c)) : [];
      }
      var a1 = ms(function(r, i, c) {
        return r + (c ? " " : "") + tu(i);
      });
      function s1(r, i, c) {
        return r = pt(r), c = c == null ? 0 : ya(ze(c), 0, r.length), i = Bn(i), r.slice(c, c + i.length) == i;
      }
      function i1(r, i, c) {
        var x = I.templateSettings;
        c && kn(r, i, c) && (i = t), r = pt(r), i = Tl({}, i, x, wd);
        var M = Tl({}, i.imports, x.imports, wd), J = an(M), D = mi(M, J), N, P, se = 0, ie = i.interpolate || Xa, Ae = "__p += '", me = vi(
          (i.escape || Xa).source + "|" + ie.source + "|" + (ie === Xs ? ce : Xa).source + "|" + (i.evaluate || Xa).source + "|$",
          "g"
        ), ye = "//# sourceURL=" + (ut.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Co + "]") + `
`;
        r.replace(me, function(Oe, We, Ve, Ln, bn, Pn) {
          return Ve || (Ve = Ln), Ae += r.slice(se, Pn).replace(MA, VA), We && (N = !0, Ae += `' +
__e(` + We + `) +
'`), bn && (P = !0, Ae += `';
` + bn + `;
__p += '`), Ve && (Ae += `' +
((__t = (` + Ve + `)) == null ? '' : __t) +
'`), se = Pn + Oe.length, Oe;
        }), Ae += `';
`;
        var je = ut.call(i, "variable") && i.variable;
        if (!je)
          Ae = `with (obj) {
` + Ae + `
}
`;
        else if (Vs.test(je))
          throw new He(f);
        Ae = (P ? Ae.replace(gA, "") : Ae).replace(Ys, "$1").replace(Qn, "$1;"), Ae = "function(" + (je || "obj") + `) {
` + (je ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (P ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Ae + `return __p
}`;
        var Fe = uh(function() {
          return et(J, ye + "return " + Ae).apply(t, D);
        });
        if (Fe.source = Ae, Vc(Fe))
          throw Fe;
        return Fe;
      }
      function o1(r) {
        return pt(r).toLowerCase();
      }
      function l1(r) {
        return pt(r).toUpperCase();
      }
      function A1(r, i, c) {
        if (r = pt(r), r && (c || i === t))
          return Xo(r);
        if (!r || !(i = Bn(i)))
          return r;
        var x = Jn(r), M = Jn(i), J = Wo(x, M), D = qo(x, M) + 1;
        return ra(x, J, D).join("");
      }
      function c1(r, i, c) {
        if (r = pt(r), r && (c || i === t))
          return r.slice(0, _o(r) + 1);
        if (!r || !(i = Bn(i)))
          return r;
        var x = Jn(r), M = qo(x, Jn(i)) + 1;
        return ra(x, 0, M).join("");
      }
      function u1(r, i, c) {
        if (r = pt(r), r && (c || i === t))
          return r.replace(qs, "");
        if (!r || !(i = Bn(i)))
          return r;
        var x = Jn(r), M = Wo(x, Jn(i));
        return ra(x, M).join("");
      }
      function f1(r, i) {
        var c = ne, x = ae;
        if (Rt(i)) {
          var M = "separator" in i ? i.separator : M;
          c = "length" in i ? ze(i.length) : c, x = "omission" in i ? Bn(i.omission) : x;
        }
        r = pt(r);
        var J = r.length;
        if (qr(r)) {
          var D = Jn(r);
          J = D.length;
        }
        if (c >= J)
          return r;
        var N = c - Vr(x);
        if (N < 1)
          return x;
        var P = D ? ra(D, 0, N).join("") : r.slice(0, N);
        if (M === t)
          return P + x;
        if (D && (N += P.length - N), _c(M)) {
          if (r.slice(N).search(M)) {
            var se, ie = P;
            for (M.global || (M = vi(M.source, pt(Ka.exec(M)) + "g")), M.lastIndex = 0; se = M.exec(ie); )
              var Ae = se.index;
            P = P.slice(0, Ae === t ? N : Ae);
          }
        } else if (r.indexOf(Bn(M), N) != N) {
          var me = P.lastIndexOf(M);
          me > -1 && (P = P.slice(0, me));
        }
        return P + x;
      }
      function d1(r) {
        return r = pt(r), r && Fs.test(r) ? r.replace(Zr, rc) : r;
      }
      var h1 = ms(function(r, i, c) {
        return r + (c ? " " : "") + i.toUpperCase();
      }), tu = fd("toUpperCase");
      function ch(r, i, c) {
        return r = pt(r), i = c ? t : i, i === t ? _A(r) ? ic(r) : FA(r) : r.match(i) || [];
      }
      var uh = Ze(function(r, i) {
        try {
          return gn(r, t, i);
        } catch (c) {
          return Vc(c) ? c : new He(c);
        }
      }), p1 = Sr(function(r, i) {
        return vn(i, function(c) {
          c = fr(c), Er(r, c, Wc(r[c], r));
        }), r;
      });
      function m1(r) {
        var i = r == null ? 0 : r.length, c = De();
        return r = i ? bt(r, function(x) {
          if (typeof x[1] != "function")
            throw new wn(A);
          return [c(x[0]), x[1]];
        }) : [], Ze(function(x) {
          for (var M = -1; ++M < i; ) {
            var J = r[M];
            if (gn(J[0], this, x))
              return gn(J[1], this, x);
          }
        });
      }
      function g1(r) {
        return zg(Zn(r, m));
      }
      function nu(r) {
        return function() {
          return r;
        };
      }
      function v1(r, i) {
        return r == null || r !== r ? i : r;
      }
      var w1 = hd(), x1 = hd(!0);
      function jn(r) {
        return r;
      }
      function ru(r) {
        return Ff(typeof r == "function" ? r : Zn(r, m));
      }
      function k1(r) {
        return Gf(Zn(r, m));
      }
      function b1(r, i) {
        return Kf(r, Zn(i, m));
      }
      var y1 = Ze(function(r, i) {
        return function(c) {
          return yi(c, r, i);
        };
      }), E1 = Ze(function(r, i) {
        return function(c) {
          return yi(r, c, i);
        };
      });
      function au(r, i, c) {
        var x = an(i), M = cl(i, x);
        c == null && !(Rt(i) && (M.length || !x.length)) && (c = i, i = r, r = this, M = cl(i, an(i)));
        var J = !(Rt(c) && "chain" in c) || !!c.chain, D = Jr(r);
        return vn(M, function(N) {
          var P = i[N];
          r[N] = P, D && (r.prototype[N] = function() {
            var se = this.__chain__;
            if (J || se) {
              var ie = r(this.__wrapped__), Ae = ie.__actions__ = Cn(this.__actions__);
              return Ae.push({ func: P, args: arguments, thisArg: r }), ie.__chain__ = se, ie;
            }
            return P.apply(r, er([this.value()], arguments));
          });
        }), r;
      }
      function M1() {
        return $t._ === this && ($t._ = cc), this;
      }
      function su() {
      }
      function S1(r) {
        return r = ze(r), Ze(function(i) {
          return Xf(i, r);
        });
      }
      var I1 = Nc(bt), J1 = Nc(ci), T1 = Nc(ui);
      function fh(r) {
        return Yc(r) ? fi(fr(r)) : s0(r);
      }
      function C1(r) {
        return function(i) {
          return r == null ? t : Ea(r, i);
        };
      }
      var D1 = md(), R1 = md(!0);
      function iu() {
        return [];
      }
      function ou() {
        return !1;
      }
      function j1() {
        return {};
      }
      function O1() {
        return "";
      }
      function Q1() {
        return !0;
      }
      function N1(r, i) {
        if (r = ze(r), r < 1 || r > pe)
          return [];
        var c = Ie, x = rn(r, Ie);
        i = De(i), r -= Ie;
        for (var M = pi(x, i); ++c < r; )
          i(c);
        return M;
      }
      function H1(r) {
        return Ue(r) ? bt(r, fr) : Un(r) ? [r] : Cn(Rd(pt(r)));
      }
      function B1(r) {
        var i = ++Ac;
        return pt(r) + i;
      }
      var U1 = ml(function(r, i) {
        return r + i;
      }, 0), L1 = Hc("ceil"), P1 = ml(function(r, i) {
        return r / i;
      }, 1), z1 = Hc("floor");
      function Y1(r) {
        return r && r.length ? Al(r, jn, bc) : t;
      }
      function F1(r, i) {
        return r && r.length ? Al(r, De(i, 2), bc) : t;
      }
      function Z1(r) {
        return Go(r, jn);
      }
      function G1(r, i) {
        return Go(r, De(i, 2));
      }
      function K1(r) {
        return r && r.length ? Al(r, jn, Sc) : t;
      }
      function X1(r, i) {
        return r && r.length ? Al(r, De(i, 2), Sc) : t;
      }
      var W1 = ml(function(r, i) {
        return r * i;
      }, 1), q1 = Hc("round"), V1 = ml(function(r, i) {
        return r - i;
      }, 0);
      function _1(r) {
        return r && r.length ? hi(r, jn) : 0;
      }
      function $1(r, i) {
        return r && r.length ? hi(r, De(i, 2)) : 0;
      }
      return I.after = kw, I.ary = Yd, I.assign = lx, I.assignIn = rh, I.assignInWith = Tl, I.assignWith = Ax, I.at = cx, I.before = Fd, I.bind = Wc, I.bindAll = p1, I.bindKey = Zd, I.castArray = jw, I.chain = Ld, I.chunk = z0, I.compact = Y0, I.concat = F0, I.cond = m1, I.conforms = g1, I.constant = nu, I.countBy = _v, I.create = ux, I.curry = Gd, I.curryRight = Kd, I.debounce = Xd, I.defaults = fx, I.defaultsDeep = dx, I.defer = bw, I.delay = yw, I.difference = Z0, I.differenceBy = G0, I.differenceWith = K0, I.drop = X0, I.dropRight = W0, I.dropRightWhile = q0, I.dropWhile = V0, I.fill = _0, I.filter = ew, I.flatMap = rw, I.flatMapDeep = aw, I.flatMapDepth = sw, I.flatten = Nd, I.flattenDeep = $0, I.flattenDepth = ev, I.flip = Ew, I.flow = w1, I.flowRight = x1, I.fromPairs = tv, I.functions = xx, I.functionsIn = kx, I.groupBy = iw, I.initial = rv, I.intersection = av, I.intersectionBy = sv, I.intersectionWith = iv, I.invert = yx, I.invertBy = Ex, I.invokeMap = lw, I.iteratee = ru, I.keyBy = Aw, I.keys = an, I.keysIn = Rn, I.map = yl, I.mapKeys = Sx, I.mapValues = Ix, I.matches = k1, I.matchesProperty = b1, I.memoize = Ml, I.merge = Jx, I.mergeWith = ah, I.method = y1, I.methodOf = E1, I.mixin = au, I.negate = Sl, I.nthArg = S1, I.omit = Tx, I.omitBy = Cx, I.once = Mw, I.orderBy = cw, I.over = I1, I.overArgs = Sw, I.overEvery = J1, I.overSome = T1, I.partial = qc, I.partialRight = Wd, I.partition = uw, I.pick = Dx, I.pickBy = sh, I.property = fh, I.propertyOf = C1, I.pull = cv, I.pullAll = Bd, I.pullAllBy = uv, I.pullAllWith = fv, I.pullAt = dv, I.range = D1, I.rangeRight = R1, I.rearg = Iw, I.reject = hw, I.remove = hv, I.rest = Jw, I.reverse = Kc, I.sampleSize = mw, I.set = jx, I.setWith = Ox, I.shuffle = gw, I.slice = pv, I.sortBy = xw, I.sortedUniq = bv, I.sortedUniqBy = yv, I.split = r1, I.spread = Tw, I.tail = Ev, I.take = Mv, I.takeRight = Sv, I.takeRightWhile = Iv, I.takeWhile = Jv, I.tap = Yv, I.throttle = Cw, I.thru = bl, I.toArray = eh, I.toPairs = ih, I.toPairsIn = oh, I.toPath = H1, I.toPlainObject = nh, I.transform = Qx, I.unary = Dw, I.union = Tv, I.unionBy = Cv, I.unionWith = Dv, I.uniq = Rv, I.uniqBy = jv, I.uniqWith = Ov, I.unset = Nx, I.unzip = Xc, I.unzipWith = Ud, I.update = Hx, I.updateWith = Bx, I.values = ws, I.valuesIn = Ux, I.without = Qv, I.words = ch, I.wrap = Rw, I.xor = Nv, I.xorBy = Hv, I.xorWith = Bv, I.zip = Uv, I.zipObject = Lv, I.zipObjectDeep = Pv, I.zipWith = zv, I.entries = ih, I.entriesIn = oh, I.extend = rh, I.extendWith = Tl, au(I, I), I.add = U1, I.attempt = uh, I.camelCase = Yx, I.capitalize = lh, I.ceil = L1, I.clamp = Lx, I.clone = Ow, I.cloneDeep = Nw, I.cloneDeepWith = Hw, I.cloneWith = Qw, I.conformsTo = Bw, I.deburr = Ah, I.defaultTo = v1, I.divide = P1, I.endsWith = Fx, I.eq = nr, I.escape = Zx, I.escapeRegExp = Gx, I.every = $v, I.find = tw, I.findIndex = Od, I.findKey = hx, I.findLast = nw, I.findLastIndex = Qd, I.findLastKey = px, I.floor = z1, I.forEach = Pd, I.forEachRight = zd, I.forIn = mx, I.forInRight = gx, I.forOwn = vx, I.forOwnRight = wx, I.get = $c, I.gt = Uw, I.gte = Lw, I.has = bx, I.hasIn = eu, I.head = Hd, I.identity = jn, I.includes = ow, I.indexOf = nv, I.inRange = Px, I.invoke = Mx, I.isArguments = Ia, I.isArray = Ue, I.isArrayBuffer = Pw, I.isArrayLike = Dn, I.isArrayLikeObject = Yt, I.isBoolean = zw, I.isBuffer = aa, I.isDate = Yw, I.isElement = Fw, I.isEmpty = Zw, I.isEqual = Gw, I.isEqualWith = Kw, I.isError = Vc, I.isFinite = Xw, I.isFunction = Jr, I.isInteger = qd, I.isLength = Il, I.isMap = Vd, I.isMatch = Ww, I.isMatchWith = qw, I.isNaN = Vw, I.isNative = _w, I.isNil = ex, I.isNull = $w, I.isNumber = _d, I.isObject = Rt, I.isObjectLike = Nt, I.isPlainObject = Ti, I.isRegExp = _c, I.isSafeInteger = tx, I.isSet = $d, I.isString = Jl, I.isSymbol = Un, I.isTypedArray = vs, I.isUndefined = nx, I.isWeakMap = rx, I.isWeakSet = ax, I.join = ov, I.kebabCase = Kx, I.last = Kn, I.lastIndexOf = lv, I.lowerCase = Xx, I.lowerFirst = Wx, I.lt = sx, I.lte = ix, I.max = Y1, I.maxBy = F1, I.mean = Z1, I.meanBy = G1, I.min = K1, I.minBy = X1, I.stubArray = iu, I.stubFalse = ou, I.stubObject = j1, I.stubString = O1, I.stubTrue = Q1, I.multiply = W1, I.nth = Av, I.noConflict = M1, I.noop = su, I.now = El, I.pad = qx, I.padEnd = Vx, I.padStart = _x, I.parseInt = $x, I.random = zx, I.reduce = fw, I.reduceRight = dw, I.repeat = e1, I.replace = t1, I.result = Rx, I.round = q1, I.runInContext = U, I.sample = pw, I.size = vw, I.snakeCase = n1, I.some = ww, I.sortedIndex = mv, I.sortedIndexBy = gv, I.sortedIndexOf = vv, I.sortedLastIndex = wv, I.sortedLastIndexBy = xv, I.sortedLastIndexOf = kv, I.startCase = a1, I.startsWith = s1, I.subtract = V1, I.sum = _1, I.sumBy = $1, I.template = i1, I.times = N1, I.toFinite = Tr, I.toInteger = ze, I.toLength = th, I.toLower = o1, I.toNumber = Xn, I.toSafeInteger = ox, I.toString = pt, I.toUpper = l1, I.trim = A1, I.trimEnd = c1, I.trimStart = u1, I.truncate = f1, I.unescape = d1, I.uniqueId = B1, I.upperCase = h1, I.upperFirst = tu, I.each = Pd, I.eachRight = zd, I.first = Hd, au(I, function() {
        var r = {};
        return cr(I, function(i, c) {
          ut.call(I.prototype, c) || (r[c] = i);
        }), r;
      }(), { chain: !1 }), I.VERSION = a, vn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        I[r].placeholder = I;
      }), vn(["drop", "take"], function(r, i) {
        Ke.prototype[r] = function(c) {
          c = c === t ? 1 : zt(ze(c), 0);
          var x = this.__filtered__ && !i ? new Ke(this) : this.clone();
          return x.__filtered__ ? x.__takeCount__ = rn(c, x.__takeCount__) : x.__views__.push({
            size: rn(c, Ie),
            type: r + (x.__dir__ < 0 ? "Right" : "")
          }), x;
        }, Ke.prototype[r + "Right"] = function(c) {
          return this.reverse()[r](c).reverse();
        };
      }), vn(["filter", "map", "takeWhile"], function(r, i) {
        var c = i + 1, x = c == F || c == H;
        Ke.prototype[r] = function(M) {
          var J = this.clone();
          return J.__iteratees__.push({
            iteratee: De(M, 3),
            type: c
          }), J.__filtered__ = J.__filtered__ || x, J;
        };
      }), vn(["head", "last"], function(r, i) {
        var c = "take" + (i ? "Right" : "");
        Ke.prototype[r] = function() {
          return this[c](1).value()[0];
        };
      }), vn(["initial", "tail"], function(r, i) {
        var c = "drop" + (i ? "" : "Right");
        Ke.prototype[r] = function() {
          return this.__filtered__ ? new Ke(this) : this[c](1);
        };
      }), Ke.prototype.compact = function() {
        return this.filter(jn);
      }, Ke.prototype.find = function(r) {
        return this.filter(r).head();
      }, Ke.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, Ke.prototype.invokeMap = Ze(function(r, i) {
        return typeof r == "function" ? new Ke(this) : this.map(function(c) {
          return yi(c, r, i);
        });
      }), Ke.prototype.reject = function(r) {
        return this.filter(Sl(De(r)));
      }, Ke.prototype.slice = function(r, i) {
        r = ze(r);
        var c = this;
        return c.__filtered__ && (r > 0 || i < 0) ? new Ke(c) : (r < 0 ? c = c.takeRight(-r) : r && (c = c.drop(r)), i !== t && (i = ze(i), c = i < 0 ? c.dropRight(-i) : c.take(i - r)), c);
      }, Ke.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, Ke.prototype.toArray = function() {
        return this.take(Ie);
      }, cr(Ke.prototype, function(r, i) {
        var c = /^(?:filter|find|map|reject)|While$/.test(i), x = /^(?:head|last)$/.test(i), M = I[x ? "take" + (i == "last" ? "Right" : "") : i], J = x || /^find/.test(i);
        M && (I.prototype[i] = function() {
          var D = this.__wrapped__, N = x ? [1] : arguments, P = D instanceof Ke, se = N[0], ie = P || Ue(D), Ae = function(We) {
            var Ve = M.apply(I, er([We], N));
            return x && me ? Ve[0] : Ve;
          };
          ie && c && typeof se == "function" && se.length != 1 && (P = ie = !1);
          var me = this.__chain__, ye = !!this.__actions__.length, je = J && !me, Fe = P && !ye;
          if (!J && ie) {
            D = Fe ? D : new Ke(this);
            var Oe = r.apply(D, N);
            return Oe.__actions__.push({ func: bl, args: [Ae], thisArg: t }), new qt(Oe, me);
          }
          return je && Fe ? r.apply(this, N) : (Oe = this.thru(Ae), je ? x ? Oe.value()[0] : Oe.value() : Oe);
        });
      }), vn(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var i = as[r], c = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", x = /^(?:pop|shift)$/.test(r);
        I.prototype[r] = function() {
          var M = arguments;
          if (x && !this.__chain__) {
            var J = this.value();
            return i.apply(Ue(J) ? J : [], M);
          }
          return this[c](function(D) {
            return i.apply(Ue(D) ? D : [], M);
          });
        };
      }), cr(Ke.prototype, function(r, i) {
        var c = I[i];
        if (c) {
          var x = c.name + "";
          ut.call(fe, x) || (fe[x] = []), fe[x].push({ name: i, func: c });
        }
      }), fe[pl(t, T).name] = [{
        name: "wrapper",
        func: t
      }], Ke.prototype.clone = xi, Ke.prototype.reverse = xa, Ke.prototype.value = pg, I.prototype.at = Fv, I.prototype.chain = Zv, I.prototype.commit = Gv, I.prototype.next = Kv, I.prototype.plant = Wv, I.prototype.reverse = qv, I.prototype.toJSON = I.prototype.valueOf = I.prototype.value = Vv, I.prototype.first = I.prototype.head, va && (I.prototype[va] = Xv), I;
    }, _r = $o();
    mn ? ((mn.exports = _r)._ = _r, Xr._ = _r) : $t._ = _r;
  }).call(Es);
})(_l, _l.exports);
var ag = _l.exports, Qu = { exports: {} }, mu, tp;
function w5() {
  if (tp)
    return mu;
  tp = 1;
  var e = 1e3, n = e * 60, t = n * 60, a = t * 24, s = a * 7, l = a * 365.25;
  mu = function(h, m) {
    m = m || {};
    var v = typeof h;
    if (v === "string" && h.length > 0)
      return A(h);
    if (v === "number" && isFinite(h))
      return m.long ? u(h) : f(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function A(h) {
    if (h = String(h), !(h.length > 100)) {
      var m = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        h
      );
      if (m) {
        var v = parseFloat(m[1]), k = (m[2] || "ms").toLowerCase();
        switch (k) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return v * l;
          case "weeks":
          case "week":
          case "w":
            return v * s;
          case "days":
          case "day":
          case "d":
            return v * a;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return v * t;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return v * n;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return v * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function f(h) {
    var m = Math.abs(h);
    return m >= a ? Math.round(h / a) + "d" : m >= t ? Math.round(h / t) + "h" : m >= n ? Math.round(h / n) + "m" : m >= e ? Math.round(h / e) + "s" : h + "ms";
  }
  function u(h) {
    var m = Math.abs(h);
    return m >= a ? d(h, m, a, "day") : m >= t ? d(h, m, t, "hour") : m >= n ? d(h, m, n, "minute") : m >= e ? d(h, m, e, "second") : h + " ms";
  }
  function d(h, m, v, k) {
    var b = m >= v * 1.5;
    return Math.round(h / v) + " " + k + (b ? "s" : "");
  }
  return mu;
}
function x5(e) {
  t.debug = t, t.default = t, t.coerce = u, t.disable = l, t.enable = s, t.enabled = A, t.humanize = w5(), t.destroy = d, Object.keys(e).forEach((h) => {
    t[h] = e[h];
  }), t.names = [], t.skips = [], t.formatters = {};
  function n(h) {
    let m = 0;
    for (let v = 0; v < h.length; v++)
      m = (m << 5) - m + h.charCodeAt(v), m |= 0;
    return t.colors[Math.abs(m) % t.colors.length];
  }
  t.selectColor = n;
  function t(h) {
    let m, v = null, k, b;
    function y(...S) {
      if (!y.enabled)
        return;
      const T = y, Q = Number(/* @__PURE__ */ new Date()), B = Q - (m || Q);
      T.diff = B, T.prev = m, T.curr = Q, m = Q, S[0] = t.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
      let K = 0;
      S[0] = S[0].replace(/%([a-zA-Z%])/g, (Y, V) => {
        if (Y === "%%")
          return "%";
        K++;
        const re = t.formatters[V];
        if (typeof re == "function") {
          const le = S[K];
          Y = re.call(T, le), S.splice(K, 1), K--;
        }
        return Y;
      }), t.formatArgs.call(T, S), (T.log || t.log).apply(T, S);
    }
    return y.namespace = h, y.useColors = t.useColors(), y.color = t.selectColor(h), y.extend = a, y.destroy = t.destroy, Object.defineProperty(y, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => v !== null ? v : (k !== t.namespaces && (k = t.namespaces, b = t.enabled(h)), b),
      set: (S) => {
        v = S;
      }
    }), typeof t.init == "function" && t.init(y), y;
  }
  function a(h, m) {
    const v = t(this.namespace + (typeof m > "u" ? ":" : m) + h);
    return v.log = this.log, v;
  }
  function s(h) {
    t.save(h), t.namespaces = h, t.names = [], t.skips = [];
    let m;
    const v = (typeof h == "string" ? h : "").split(/[\s,]+/), k = v.length;
    for (m = 0; m < k; m++)
      v[m] && (h = v[m].replace(/\*/g, ".*?"), h[0] === "-" ? t.skips.push(new RegExp("^" + h.slice(1) + "$")) : t.names.push(new RegExp("^" + h + "$")));
  }
  function l() {
    const h = [
      ...t.names.map(f),
      ...t.skips.map(f).map((m) => "-" + m)
    ].join(",");
    return t.enable(""), h;
  }
  function A(h) {
    if (h[h.length - 1] === "*")
      return !0;
    let m, v;
    for (m = 0, v = t.skips.length; m < v; m++)
      if (t.skips[m].test(h))
        return !1;
    for (m = 0, v = t.names.length; m < v; m++)
      if (t.names[m].test(h))
        return !0;
    return !1;
  }
  function f(h) {
    return h.toString().substring(2, h.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function u(h) {
    return h instanceof Error ? h.stack || h.message : h;
  }
  function d() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return t.enable(t.load()), t;
}
var k5 = x5;
(function(e, n) {
  n.formatArgs = a, n.save = s, n.load = l, n.useColors = t, n.storage = A(), n.destroy = (() => {
    let u = !1;
    return () => {
      u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), n.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function t() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function a(u) {
    if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const d = "color: " + this.color;
    u.splice(1, 0, d, "color: inherit");
    let h = 0, m = 0;
    u[0].replace(/%[a-zA-Z%]/g, (v) => {
      v !== "%%" && (h++, v === "%c" && (m = h));
    }), u.splice(m, 0, d);
  }
  n.log = console.debug || console.log || (() => {
  });
  function s(u) {
    try {
      u ? n.storage.setItem("debug", u) : n.storage.removeItem("debug");
    } catch {
    }
  }
  function l() {
    let u;
    try {
      u = n.storage.getItem("debug");
    } catch {
    }
    return !u && typeof process < "u" && "env" in process && (u = !1), u;
  }
  function A() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = k5(n);
  const { formatters: f } = e.exports;
  f.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (d) {
      return "[UnexpectedJSONParseError]: " + d.message;
    }
  };
})(Qu, Qu.exports);
var sg = Qu.exports;
const St = ag, Vt = sg("mongo-knex:converter"), yn = sg("mongo-knex:converter-extended"), b5 = [
  "$and",
  "$or"
], hn = {
  $eq: "=",
  $ne: "!=",
  $gt: ">",
  $gte: ">=",
  $lt: "<",
  $lte: "<=",
  $in: "in",
  $nin: "not in",
  $regex: "like",
  $not: "not like"
}, Da = "*", Tf = (e) => e.charAt(0) === "$", y5 = (e) => Tf(e) && St.includes(b5, e), gu = (e) => Tf(e) && St.includes(St.keys(hn), e), Qi = (e) => Tf(e) && St.includes(["$ne", "$nin"], e), np = (e) => St.includes([hn.$in, hn.$nin], e), ys = (e) => JSON.stringify(e, function(n, t) {
  return t instanceof RegExp ? t.toString() : t;
}), E5 = ({ source: e, ignoreCase: n }) => (e = e.replace(/\\([.*+?^${}()|[\]\\/])/g, "$1"), n && (e = e.toLowerCase()), e = e.replace(new RegExp(St.escapeRegExp(Da), "g"), Da + Da), e = e.replace(/%/g, Da + "%"), e = e.replace(/_/g, Da + "_"), e.startsWith("^") ? e = e.substring(1) + "%" : e.endsWith("$") ? e = "%" + e.substring(0, e.length - 1) : e = "%" + e + "%", { source: e, ignoreCase: n });
class M5 {
  /**
   *
   * @param {Object} options
   * @param {String} options.tableName
   *
   * @param {Object} config
   * @param {Object} config.relations structure:
   *  {[relation-name]}: {
   *      tableName: String (e.g. tags)
   *      tableNameAs: String (e.g. t, optional)
   *      type: String (e.g. manyToMany)
   *      joinTable: String (e.g.  posts_tags)
   *      joinFrom: String (e.g. post_id)
   *      joinTo: String (e.g. tag_id)
   *  }
   */
  constructor(n = {}, t = {}) {
    this.tableName = n.tableName, this.config = {}, Object.assign(this.config, { relations: {} }, t);
  }
  processWhereType(n, t, a) {
    return a === null ? (n === "$or" ? "orWhere" : "where") + (t === "$ne" ? "NotNull" : "Null") : n === "$or" ? "orWhere" : "andWhere";
  }
  /**
   * Determine if statement lives on parent table or if statement refers to a relation.
   */
  processStatement(n, t, a) {
    const [s, l] = n.split(".");
    if (l) {
      Vt(s, l);
      const A = s;
      let f = this.config.relations[A];
      return f ? {
        table: s,
        column: l,
        operator: t,
        value: a,
        config: f,
        isRelation: !0
      } : (f = St.find(this.config.relations, (u) => u.joinTable === A), f ? {
        joinTable: f.joinTable,
        table: f.tableName,
        column: l,
        operator: t,
        value: a,
        config: f,
        isRelation: !0
      } : {
        column: n,
        operator: t,
        value: a,
        isRelation: !1
      });
    }
    return {
      column: `${this.tableName}.${n}`,
      operator: t,
      value: a,
      isRelation: !1
    };
  }
  /**
   * We group the relations by a unique key.
   * Each grouping will create a sub query.
   *
   * Returns a group structure of following format:
   *  {
   *      "groupKey": {
   *          innerWhereStatements: [],
   *          joinFilterStatements: []
   *      }
   *  }
   */
  groupRelationStatements(n, t) {
    const a = {}, s = t === "$and" ? n.filter((l) => !l.joinTable) : n;
    if (St.each(s, (l, A) => {
      let f = Qi(l.operator);
      !f && a[l.table] && (f = St.find(a[l.table].innerWhereStatements, (d) => {
        if (d.column === l.column)
          return !0;
      }));
      let u = l.table;
      if (f && (u = `${l.table}_${A})}`, a[u]))
        throw new Error("Key collision detected");
      a[u] || (a[u] = {}, a[u].innerWhereStatements = []), a[u].innerWhereStatements.push(l);
    }), t === "$and") {
      const l = n.filter((A) => A.joinTable);
      St.each(Object.keys(a), (A) => {
        a[A].joinFilterStatements = l;
      });
    }
    return a;
  }
  /**
   * Build queries for relations.
   */
  buildRelationQuery(n, t, a) {
    Vt("(buildRelationQuery)"), yn.enabled && yn(`(buildRelationQuery) ${ys(t)}`);
    const s = this.groupRelationStatements(t, a);
    yn.enabled && yn(`(buildRelationQuery) grouped: ${ys(s)}`), St.each(Object.keys(s), (l) => {
      Vt(`(buildRelationQuery) build relation for ${l}`);
      const A = s[l].innerWhereStatements, f = A[0];
      if (f.config.type === "manyToMany")
        if (St.every(A.map((u) => u.operator), gu)) {
          const u = St.every(A.map((m) => m.operator), (m) => Qi(m)), d = u ? hn.$nin : hn.$in, h = ["whereNull", "whereNotNull"].includes(f.whereType) ? "andWhere" : ["orWhereNull", "orWhereNotNull"].includes(f.whereType) ? "orWhere" : f.whereType;
          n[h](`${this.tableName}.id`, d, function() {
            const m = s[l].joinFilterStatements;
            let v = f.config.tableName, k = `${f.config.tableName}.${f.config.joinToForeign || "id"}`;
            f.config.tableNameAs && (v = `${f.config.tableName} as ${f.config.tableNameAs}`, k = `${f.config.tableNameAs}.${f.config.joinToForeign || "id"}`);
            const b = f.config.joinType || "innerJoin", y = this.select(`${f.config.joinTable}.${f.config.joinFrom}`).from(`${f.config.joinTable}`)[b](v, function() {
              this.on(k, "=", `${f.config.joinTable}.${f.config.joinTo}`), St.each(m, (S) => {
                this.andOn(`${S.joinTable}.${S.column}`, hn[S.operator], S.value);
              });
            });
            return yn.enabled && Vt(`(buildRelationQuery) innerQB sql-pre: ${y.toSQL().sql}`), St.each(A, (S, T) => {
              Vt(`(buildRelationQuery) build relation where statements for ${T}`);
              const Q = `${S.joinTable || S.table}.${S.column}`;
              let B;
              u ? B = hn.$in : Qi(S.operator) ? B = hn.$nin : B = hn[S.operator];
              let K = S.value;
              np(B) && (K = St.isArray(S.value) ? S.value : [S.value]), y[S.whereType](Q, B, K);
            }), yn.enabled && Vt(`(buildRelationQuery) innerQB sql-post: ${y.toSQL().sql}`), y;
          });
        } else
          Vt(`one of ${l} group statements contains unknown operator`);
      else if (f.config.type === "oneToOne")
        if (St.every(A.map((u) => u.operator), gu)) {
          const u = St.every(A.map((v) => v.operator), (v) => Qi(v)), d = u ? hn.$nin : hn.$in, h = this.tableName, m = f.whereType === "orWhere" ? "orWhere" : "where";
          n[m](`${this.tableName}.id`, d, function() {
            const v = s[l].joinFilterStatements;
            let k = f.config.tableName, b = `${f.config.tableName}.${f.config.joinFrom}`;
            f.config.tableNameAs && (k = `${f.config.tableName} as ${f.config.tableNameAs}`, b = `${f.config.tableNameAs}.${f.config.joinFrom}`);
            const y = this.select(`${h}.id`).from(`${h}`).leftJoin(k, function() {
              this.on(b, "=", `${h}.id`), St.each(v, (S) => {
                this.andOn(`${S.joinTable}.${S.column}`, hn[S.operator], S.value);
              });
            });
            return St.each(A, (S, T) => {
              Vt(`(buildRelationQuery) build relation where statements for ${T}`);
              const Q = `${S.table}.${S.column}`;
              let B;
              u ? (B = hn.$in, S.value === null && (S.whereType = S.whereType === "whereNotNull" ? "whereNull" : "whereNotNull")) : Qi(S.operator) ? B = hn.$nin : B = hn[S.operator];
              let K = S.value;
              np(B) && (K = St.isArray(S.value) ? S.value : [S.value]), y[S.whereType](Q, B, K);
            }), yn.enabled && Vt(`(buildRelationQuery) innerQB sql-pre: ${y.toSQL().sql}`), y;
          });
        } else
          Vt(`one of ${l} group statements contains unknown operator`);
    });
  }
  /**
   * Determines if statement is a simple where comparison on the parent table or if the statement is a relation query.
   *
   * e.g.
   *
   * `where column = value`
   * `where column != value`
   * `where column > value`
   */
  buildComparison(n, t, a, s, l, A) {
    const f = hn[s] || "=", u = this.processStatement(a, s, l);
    let d = this.processWhereType(t, s, l);
    if (Vt(`(buildComparison) mode: ${t}, op: ${s}, isRelation: ${u.isRelation}, group: ${A}`), u.isRelation) {
      if (u.whereType = d, !A) {
        this.buildRelationQuery(n, [u], t);
        return;
      }
      Object.prototype.hasOwnProperty.call(n, "relations") || (n.relations = []), n.relations.push(u);
      return;
    }
    const h = u.column;
    if (s = u.operator, l = u.value, s === "$regex" || s === "$not") {
      const { source: m, ignoreCase: v } = E5(l);
      if (l = m, v) {
        d += "Raw", Vt(`(buildComparison) whereType: ${d}, statement: ${a}, op: ${s}, comp: ${f}, value: ${l} (REGEX/i)`), n[d](`lower(??) ${f} ? ESCAPE ?`, [h, l, Da]);
        return;
      }
      d += "Raw", Vt(`(buildComparison) whereType: ${d}, statement: ${a}, op: ${s}, comp: ${f}, value: ${l} (REGEX)`), n[d](`?? ${f} ? ESCAPE ?`, [h, l, Da]);
      return;
    }
    Vt(`(buildComparison) whereType: ${d}, statement: ${a}, op: ${s}, comp: ${f}, value: ${l}`), n[d](h, f, l);
  }
  /**
   * {author: 'carl'}
   */
  buildWhereClause(n, t, a, s, l) {
    if (Vt(`(buildWhereClause) mode: ${t}, statement: ${a}`), yn.enabled && yn(`(buildWhereClause) ${ys(s)}`), !St.isObject(s))
      return this.buildComparison(n, t, a, "$eq", s, l);
    St.forIn(s, (A, f) => {
      gu(f) ? this.buildComparison(n, t, a, f, A, l) : Vt("unknown operator");
    });
  }
  /**
   * {$and: [{author: 'carl'}, {status: 'draft'}]}}
   * {$and: {author: 'carl'}}
   * {$and: {author: { $in: [...] }}}
   */
  buildWhereGroup(n, t, a, s) {
    const l = this.processWhereType(t);
    Vt(`(buildWhereGroup) mode: ${a}, whereType: ${l}`), yn.enabled && yn(`(buildWhereGroup) ${ys(s)}`), n[l]((A) => {
      St.isArray(s) ? s.forEach((f) => this.buildQuery(A, a, f, !0)) : St.isObject(s) && this.buildQuery(A, a, s, !0), Object.prototype.hasOwnProperty.call(A, "relations") && (this.buildRelationQuery(A, A.relations, a), delete A.relations);
    });
  }
  buildQuery(n, t, a, s) {
    Vt(`(buildQuery) mode: ${t}`), yn.enabled && yn(`(buildQuery) ${ys(a)}`), St.forIn(a, (l, A) => {
      Vt(`(buildQuery) key: ${A}`), y5(A) ? this.buildWhereGroup(n, t, A, l) : this.buildWhereClause(n, t, A, l, s);
    });
  }
  /**
   * The converter receives sub query objects e.g. `qb.where('..', (qb) => {})`, which
   * we then pass around to our class methods. That's why we pass the parent `qb` object
   * around instead of remembering it as `this.qb`. There are multiple `qb` objects.
   */
  processJSON(n, t) {
    Vt("(processJSON)"), yn.enabled && yn(`(processJSON) ${ys(t)}`), this.buildQuery(n, "$and", t);
  }
}
var S5 = function(n, t, a) {
  return new M5({
    tableName: n._single.table
  }, a).processJSON(n, t), n;
}, I5 = S5;
const gr = ag, J5 = ["$and", "$or"], oa = (e, n) => Array.isArray(e) ? e.map((t) => oa(t, n)).filter((t) => !gr.isEmpty(t)) : gr.reduce(e, (t, a, s) => {
  let l;
  if (J5.includes(s)) {
    const A = oa(a, n);
    l = gr.isEmpty(A) ? null : {
      [s]: A
    };
  } else
    s === "yg" ? l = {
      [s]: oa(a, n)
    } : l = n(a, s);
  return gr.assign({}, t, l);
}, {}), ig = (e, n) => gr.isEmpty(e) ? n : gr.isEmpty(n) ? e : {
  $and: [e, n]
}, zi = (e, n) => gr.some(e, (t, a, s) => a === "$and" ? zi(s.$and, n) : a === "$or" ? zi(s.$or, n) : a !== n && gr.isObject(t) ? zi(t, n) : a === n), og = (e, n) => e && oa(e, function(t, a) {
  if (!n(a))
    return {
      [a]: t
    };
}), T5 = (...e) => {
  let n = {};
  return e.filter((t) => !!t).forEach((t) => {
    t && Object.keys(t).length > 0 && (t = og(t, (a) => zi(n, a)), t && (n = Object.keys(n).length > 0 ? ig(n, t) : t));
  }), n;
}, C5 = (e, n) => {
  const t = (a, s) => s.$and ? { $and: [
    a,
    ...s.$and
  ] } : { $and: [
    a,
    s
  ] };
  return oa(e, function(a, s) {
    const l = gr.find(n, { key: s });
    if (!l)
      return {
        [s]: a
      };
    let A = {
      [l.replacement]: a
    };
    return l.expansion ? t(A, l.expansion) : A;
  });
};
function rp(e, n) {
  const t = n.find(({ from: a }) => a === e);
  return t ? t.to : e;
}
function D5(e, n) {
  return Array.isArray(e) ? e.map(n) : n(e);
}
function lg(e) {
  return function(t) {
    return oa(t, function(a, s) {
      return s !== e.key.from ? {
        [s]: a
      } : typeof a != "object" ? {
        [e.key.to]: rp(a, e.values)
      } : {
        [e.key.to]: gr.reduce(a, (l, A, f) => Object.assign(l, {
          [f]: D5(A, (u) => rp(u, e.values))
        }), {})
      };
    });
  };
}
const R5 = (e, n) => oa(e, function(t, a) {
  return Object.keys(n).includes(a) ? n[a] ?? {} : {
    [a]: t
  };
});
function j5(...e) {
  return function(n) {
    for (const t of e)
      n = t(n);
    return n;
  };
}
function Ts(e) {
  if (!e)
    return [];
  const n = [];
  if (e.$and)
    for (const t of e.$and)
      for (const a of Ts(t))
        n.includes(a) || n.push(a);
  else if (e.$or)
    for (const t of e.$or)
      for (const a of Ts(t))
        n.includes(a) || n.push(a);
  else
    e.yg ? n.push(...Ts(e.yg)) : n.push(...Object.keys(e));
  return n;
}
function O5(e, n) {
  let t, a;
  if (typeof e != "object")
    return [t, a];
  if (e.$and) {
    for (const s of e.$and) {
      const l = Ts(s);
      let A = !1;
      for (const f of l)
        if (n.includes(f))
          A = !0;
        else if (A)
          throw new Error(`This filter is not supported because you cannot combine ${n.join(", ")} filters with other filters except at the root level in an AND.`);
      A ? t ? t.$and.push(s) : t = { $and: [s] } : a ? a.$and.push(s) : a = { $and: [s] };
    }
    t && t.$and.length === 1 && (t = t.$and[0]), a && a.$and.length === 1 && (a = a.$and[0]);
  } else if (e.$or) {
    let s = !1;
    for (const l of e.$or) {
      const A = Ts(l);
      for (const f of A)
        if (n.includes(f)) {
          s = !0;
          continue;
        } else if (s)
          throw new Error(`This filter is not supported because you cannot combine ${n.join(", ")} filters with other filters in an OR.`);
    }
    s ? t = e : a = e;
  } else {
    if (e.yg)
      return this.splitFilter(e.yg, n);
    {
      const s = Object.keys(e);
      for (const l of s)
        n.includes(l) ? t ? t[l] = e[l] : t = { [l]: e[l] } : a ? a[l] = e[l] : a = { [l]: e[l] };
    }
  }
  return [t, a];
}
function Q5(e) {
  const n = [];
  for (const t of Object.keys(e))
    e[t] && n.push({
      key: {
        from: t,
        to: e[t]
      },
      values: []
      // No mapping in values
    });
  return n.map((t) => lg(t));
}
var N5 = {
  mapKeyValues: lg,
  combineFilters: ig,
  findStatement: zi,
  rejectStatements: og,
  mergeFilters: T5,
  expandFilters: C5,
  mapQuery: oa,
  replaceFilters: R5,
  chainTransformers: j5,
  getUsedKeys: Ts,
  splitFilter: O5,
  mapKeys: Q5
}, Nu = N5;
const Ag = Nu, H5 = rg, cg = (e) => !e || Object.keys(e).length === 0 ? e : e.map((n) => {
  const t = Object.assign({}, n);
  return t.expansion && (t.expansion = H5.parse(n.expansion)), t;
}), B5 = (e, n) => {
  const t = cg(n);
  return Ag.expandFilters(e, t);
};
var U5 = {
  mergeFilters: Ag.mergeFilters,
  parseExpansions: cg,
  expandFilters: B5
};
const L5 = HE, Ol = rg, P5 = I5, ap = U5;
sf.exports = (e, n = {}) => {
  const t = {};
  return t.lex = () => Ol.lex(e), t.parse = function() {
    !this.filter && e && (this.filter = Ol.parse(e), n.transformer && (this.filter = n.transformer(this.filter)));
    let a, s;
    n.overrides && (a = Ol.parse(n.overrides)), n.defaults && (s = Ol.parse(n.defaults));
    let l = ap.mergeFilters(a, this.filter, s);
    return n.expansions && (l = ap.expandFilters(l, n.expansions)), l;
  }, t.queryJSON = function(a) {
    return this.query = this.query || new L5.Query(t.parse()), this.query.test(a);
  }, t.querySQL = (a) => P5(a, t.parse(), n), t.toString = () => e, t.toJSON = t.parse, t;
};
sf.exports.utils = {
  mapQuery: Nu.mapQuery,
  mapKeyValues: Nu.mapKeyValues
};
var z5 = sf.exports, Y5 = z5;
const F5 = /* @__PURE__ */ pp(Y5);
function ug(e, n) {
  return e.visibility ? F5(e.visibility).queryJSON(n) : !0;
}
function Z5({
  description: e,
  accentColor: n,
  icon: t,
  logo: a,
  coverImage: s,
  themeSettings: l
}) {
  if (!l)
    return;
  const A = l.reduce((d, { key: h, value: m }) => ({ ...d, [h]: m }), {}), f = new URLSearchParams();
  f.append("c", n), f.append("d", e), f.append("icon", t), f.append("logo", a), f.append("cover", s);
  const u = {};
  return l.forEach((d) => {
    u[d.key] = ug(d, A) ? d.value : Py;
  }), f.append("custom", JSON.stringify(u)), f.toString();
}
const G5 = ({ settings: e, url: n }) => {
  const t = Z5({ ...e }), a = sn((s) => {
    !n || !t || fetch(n, {
      method: "POST",
      headers: {
        "Content-Type": "text/html;charset=utf-8",
        "x-ghost-preview": t,
        Accept: "text/plain"
      },
      mode: "cors",
      credentials: "include"
    }).then((l) => l.text()).then((l) => {
      var k, b, y;
      const A = "html { pointer-events: none; }", u = new DOMParser().parseFromString(l, "text/html"), d = u.querySelector("style"), h = d == null ? void 0 : d.innerHTML;
      h ? d.innerHTML = `${h}

${A}` : u.head.innerHTML += `<style>${A}</style>`;
      let v = (u.doctype ? new XMLSerializer().serializeToString(u.doctype) : "") + u.documentElement.outerHTML;
      (k = s.contentDocument) == null || k.open(), (b = s.contentDocument) == null || b.write(v), (y = s.contentDocument) == null || y.close();
    });
  }, [t, n]);
  return /* @__PURE__ */ o.jsx(
    _u,
    {
      addDelay: !1,
      className: "absolute h-[110%] w-[110%] origin-top-left scale-[.90909] bg-white max-[1600px]:h-[130%] max-[1600px]:w-[130%] max-[1600px]:scale-[.76923]",
      generateContent: a,
      height: "100%",
      parentClassName: "relative h-full w-full",
      testId: "theme-preview",
      width: "100%"
    }
  );
}, K5 = ({ setting: e, setSetting: n }) => {
  const [t, a] = ue({});
  Te(() => {
    const d = e.value === null ? "" : String(e.value);
    a((h) => ({ ...h, [e.key]: d }));
  }, [e]);
  const s = (d) => {
    t[d] !== void 0 && n(t[d]);
  }, l = (d, h) => {
    a((m) => ({ ...m, [d]: h }));
  }, { mutateAsync: A } = Qs(), f = dt(), u = async (d) => {
    try {
      const h = jr(await A({ file: d }));
      n(h);
    } catch (h) {
      f(h);
    }
  };
  switch (e.type) {
    case "text":
      return /* @__PURE__ */ o.jsx(
        Re,
        {
          hint: e.description,
          title: Ci(e.key),
          value: t[e.key] || "",
          onBlur: () => s(e.key),
          onChange: (d) => l(e.key, d.target.value)
        }
      );
    case "boolean":
      return /* @__PURE__ */ o.jsx(
        mt,
        {
          checked: e.value,
          direction: "rtl",
          hint: e.description,
          label: Ci(e.key),
          onChange: (d) => n(d.target.checked)
        }
      );
    case "select":
      return /* @__PURE__ */ o.jsx(
        En,
        {
          hint: e.description,
          options: e.options.map((d) => ({ label: d, value: d })),
          selectedOption: { label: e.value, value: e.value },
          testId: `setting-select-${e.key}`,
          title: Ci(e.key),
          onSelect: (d) => n((d == null ? void 0 : d.value) || null)
        }
      );
    case "color":
      return /* @__PURE__ */ o.jsx(
        Li,
        {
          debounceMs: 200,
          direction: "rtl",
          hint: e.description,
          title: Ci(e.key),
          value: e.value || "",
          onChange: (d) => n(d)
        }
      );
    case "image":
      return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(st, { useLabelTag: !0, children: Ci(e.key) }),
        /* @__PURE__ */ o.jsx(
          Nr,
          {
            height: e.value ? "100px" : "32px",
            id: `custom-${e.key}`,
            imageURL: e.value || "",
            onDelete: () => n(null),
            onUpload: (d) => u(d),
            children: "Upload image"
          }
        ),
        e.description && /* @__PURE__ */ o.jsx(la, { children: e.description })
      ] });
  }
}, X5 = ({ settings: e, updateSetting: n }) => {
  const t = e.reduce((s, { key: l, value: A }) => ({ ...s, [l]: A }), {}), a = e.filter((s) => ug(s, t));
  return /* @__PURE__ */ o.jsx(qi, { className: "mt-7", children: a.map((s) => /* @__PURE__ */ o.jsx(K5, { setSetting: (l) => n({ ...s, value: l }), setting: s }, s.key)) });
}, W5 = ({
  brandSettings: e,
  themeSettingSections: n,
  updateBrandSetting: t,
  updateThemeSetting: a,
  onTabChange: s,
  handleSave: l
}) => {
  const { updateRoute: A } = nt(), [f, u] = ue("brand"), { data: { themes: d } = {} } = Vp(), h = Wi().getParam("ref"), m = d == null ? void 0 : d.find((b) => b.active), v = [
    {
      id: "brand",
      title: "Brand",
      contents: /* @__PURE__ */ o.jsx(NE, { updateSetting: t, values: e })
    },
    ...n.map(({ id: b, title: y, settings: S }) => ({
      id: b,
      title: y,
      contents: /* @__PURE__ */ o.jsx(X5, { settings: S, updateSetting: a })
    }))
  ], k = (b) => {
    u(b), s(b);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex h-full flex-col justify-between", children: [
    /* @__PURE__ */ o.jsx("div", { className: "p-7", "data-testid": "design-setting-tabs", children: /* @__PURE__ */ o.jsx(ja, { selectedTab: f, tabs: v, onTabChange: k }) }),
    /* @__PURE__ */ o.jsx(Mp, { height: 74, children: /* @__PURE__ */ o.jsx("div", { className: "w-full px-7", children: /* @__PURE__ */ o.jsxs("button", { className: "group flex w-full items-center justify-between text-sm font-medium opacity-80 transition-all hover:opacity-100", "data-testid": "change-theme", type: "button", onClick: async () => {
      await l(), A(h ? `design/change-theme?ref=${h}` : "design/change-theme");
    }, children: [
      /* @__PURE__ */ o.jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ o.jsx("div", { className: "font-semibold", children: "Change theme" }),
        /* @__PURE__ */ o.jsxs("div", { className: "font-sm text-grey-700", children: [
          "Current theme: ",
          m == null ? void 0 : m.name,
          " - v",
          m == null ? void 0 : m.package.version
        ] })
      ] }),
      /* @__PURE__ */ o.jsx(Qt, { className: "mr-2 transition-all group-hover:translate-x-2 dark:text-white", name: "chevron-right", size: "sm" })
    ] }) }) })
  ] });
}, q5 = () => {
  const { settings: e, siteData: n } = ct(), { mutateAsync: t } = ua(), { data: { posts: [a] } = { posts: [] } } = kp({
    searchParams: {
      filter: "status:published",
      order: "published_at DESC",
      limit: "1",
      fields: "id,url"
    }
  }), { data: s } = Yy(), { mutateAsync: l } = Fy(), A = dt(), [f, u] = ue("homepage"), { updateRoute: d } = nt(), h = Wi().getParam("ref"), {
    formState: m,
    saveState: v,
    handleSave: k,
    updateForm: b,
    setFormState: y,
    okProps: S
  } = qn({
    initialState: {
      settings: e,
      themeSettings: s ? s.custom_theme_settings : void 0
    },
    savingDelay: 500,
    onSave: async () => {
      var H;
      if ((H = m.themeSettings) != null && H.some((Z) => Z.dirty)) {
        const Z = await l(m.themeSettings);
        y((pe) => ({ ...pe, themeSettings: Z.custom_theme_settings }));
      }
      if (m.settings.some((Z) => Z.dirty)) {
        const { settings: Z } = await t(m.settings.filter((pe) => pe.dirty));
        y((pe) => ({ ...pe, settings: Z }));
      }
    },
    onSaveError: A
  });
  Te(() => {
    s && y((H) => ({ ...H, themeSettings: s.custom_theme_settings }));
  }, [y, s]);
  const T = (H, Z) => {
    b((pe) => ({ ...pe, settings: pe.settings.map((Me) => Me.key === H ? { ...Me, value: Z, dirty: !0 } : Me) }));
  }, Q = (H) => {
    b((Z) => {
      var pe;
      return { ...Z, themeSettings: (pe = Z.themeSettings) == null ? void 0 : pe.map((Me) => Me.key === H.key ? { ...H, dirty: !0 } : Me) };
    });
  }, [B, K, $, Y, V] = Et(m.settings, ["description", "accent_color", "icon", "logo", "cover_image"]), re = (m.themeSettings || []).reduce((H, Z) => {
    const pe = Z.group === "homepage" || Z.group === "post" ? Z.group : "site-wide";
    return {
      ...H,
      [pe]: (H[pe] || []).concat(Z)
    };
  }, {}), le = Object.entries(re).map(([H, Z]) => ({
    id: H,
    settings: Z || [],
    title: H === "site-wide" ? "Site wide" : H === "homepage" ? "Homepage" : "Post"
  }));
  let ne = [];
  a && (ne = [
    { id: "homepage", title: "Homepage" },
    { id: "post", title: "Post" }
  ]);
  const ae = (H) => {
    ne.length && u(H);
  }, j = (H) => {
    u(H === "post" && a ? "post" : "homepage");
  };
  let _ = Or(n);
  switch (f) {
    case "homepage":
      _ = Or(n);
      break;
    case "post":
      _ = a.url;
      break;
  }
  const F = /* @__PURE__ */ o.jsx(
    G5,
    {
      settings: {
        description: B,
        accentColor: K,
        icon: $,
        logo: Y,
        coverImage: V,
        themeSettings: m.themeSettings
      },
      url: _
    }
  ), W = /* @__PURE__ */ o.jsx(
    W5,
    {
      brandSettings: { description: B, accentColor: K, icon: $, logo: Y, coverImage: V },
      handleSave: k,
      themeSettingSections: le,
      updateBrandSetting: T,
      updateThemeSetting: Q,
      onTabChange: j
    }
  );
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        h === "setup" ? window.location.hash = "/dashboard/" : d("design");
      },
      buttonsDisabled: S.disabled,
      cancelLabel: "Close",
      defaultTab: "homepage",
      dirty: v === "unsaved",
      okColor: S.color,
      okLabel: S.label || "Save",
      preview: F,
      previewToolbarTabs: ne,
      selectedURL: f,
      sidebar: W,
      sidebarPadding: !1,
      siteLink: Or(n),
      size: "full",
      testId: "design-modal",
      title: "Design",
      onOk: async () => {
        await k({ fakeWhenUnchanged: !0 });
      },
      onSelectURL: ae
    }
  );
}, V5 = ({ pathName: e }) => {
  const n = Sn();
  if (e === "design/edit")
    return /* @__PURE__ */ o.jsx(q5, {});
  if (e === "design/change-theme")
    return /* @__PURE__ */ o.jsx(Ph, {});
  if (e === "design/change-theme/install") {
    const s = window.location.href.split("#")[1].split("?")[1], l = new URLSearchParams(s), A = l.get("ref") || null, f = l.get("source") || null;
    return /* @__PURE__ */ o.jsx(Ph, { source: f, themeRef: A });
  } else
    n.remove();
}, _5 = xe.create(V5), $5 = ({ html: e, style: n }) => {
  const t = (a) => {
    var A;
    const s = a.contentDocument || ((A = a.contentWindow) == null ? void 0 : A.document);
    if (!s)
      return;
    const l = `
            <html>
                <head>
                    <style>body, html {padding: 0; margin: 0; overflow: hidden;}</style>
                    <style>${n}</style>
                </head>
                <body>${e}</body>
            </html>
        `;
    s.open(), s.write(l), s.close();
  };
  return /* @__PURE__ */ o.jsx(
    _u,
    {
      className: "absolute h-full w-full overflow-hidden transition-opacity duration-500",
      generateContent: t,
      height: "100%",
      parentClassName: "relative h-full w-full",
      width: "100%"
    }
  );
}, e4 = ({
  selectedLayout: e,
  accentColor: n,
  handleColorToggle: t,
  selectedColor: a,
  selectedLabels: s,
  handleLabelClick: l,
  embedScript: A,
  handleLayoutSelect: f,
  handleCopyClick: u,
  customColor: d,
  setCustomColor: h,
  isCopied: m
}) => {
  const { loadData: v } = Sp({ path: "/labels/", filterKey: "name", responseKey: "labels" }), k = async (b, y) => {
    const S = await v(b);
    y(S.map((T) => ({ label: T.name, value: T.name })));
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex h-[calc(100vh-16vmin)] max-h-[645px] flex-col justify-between overflow-y-scroll border-l border-grey-200 p-6 pb-0 dark:border-grey-900", children: [
    /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx(st, { className: "mb-4", level: 4, children: "Embed signup form" }),
      /* @__PURE__ */ o.jsxs(yt, { children: [
        /* @__PURE__ */ o.jsx(
          Wu,
          {
            id: "embed-layout",
            options: [
              {
                label: "Branded",
                value: "all-in-one"
              },
              {
                label: "Minimal",
                value: "minimal"
              }
            ],
            selectedOption: e,
            title: "Layout",
            onSelect: (b) => {
              f(b);
            }
          }
        ),
        e === "all-in-one" && /* @__PURE__ */ o.jsx(
          Gu,
          {
            isExpanded: !1,
            swatches: [
              {
                hex: "#08090c",
                title: "Dark"
              },
              {
                hex: "#ffffff",
                title: "Light"
              },
              {
                hex: n || "#d74780",
                title: "Accent"
              }
            ],
            swatchSize: "lg",
            title: "Background color",
            value: a,
            onSwatchChange: (b) => {
              b && h && (t(b), h({ active: !1 }));
            },
            onTogglePicker: () => {
              h && h({ active: !0 });
            }
          }
        ),
        e === "all-in-one" && (d == null ? void 0 : d.active) && /* @__PURE__ */ o.jsx(
          Lp,
          {
            containerClassName: "!-mt-4",
            eyedropper: !1,
            hexValue: a || "#d74780",
            onChange: (b) => {
              h && b && (h({ active: !0 }), t(b));
            }
          }
        ),
        /* @__PURE__ */ o.jsx(
          Rk,
          {
            hint: "Will be applied to all members signing up via this form",
            loadOptions: Ki(k, 500),
            placeholder: "Pick one or more labels (optional)",
            title: "Labels at signup",
            values: s || [],
            async: !0,
            canCreate: !0,
            defaultOptions: !0,
            onChange: l
          }
        ),
        /* @__PURE__ */ o.jsx(
          Na,
          {
            className: "text-grey-800",
            clearBg: !1,
            fontStyle: "mono",
            hint: "Paste this code onto any website where you'd like your signup to appear.",
            title: "Embed code",
            value: `${A}`,
            onChange: () => {
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(Mp, { height: 74, children: /* @__PURE__ */ o.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ o.jsx(Ye, { color: m ? "green" : "black", label: m ? "Copied!" : "Copy code", onClick: u }) }) })
  ] });
};
function sp(e) {
  return e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "";
}
function Cf(e, n) {
  return n = { exports: {} }, e(n, n.exports), n.exports;
}
var Ni = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, t4 = function(n) {
  return !n || typeof n == "string" ? !1 : n instanceof Array || Array.isArray(n) || n.length >= 0 && (n.splice instanceof Function || Object.getOwnPropertyDescriptor(n, n.length - 1) && n.constructor.name !== "String");
}, Hi = Cf(function(e) {
  var n = Array.prototype.concat, t = Array.prototype.slice, a = e.exports = function(l) {
    for (var A = [], f = 0, u = l.length; f < u; f++) {
      var d = l[f];
      t4(d) ? A = n.call(A, t.call(d)) : A.push(d);
    }
    return A;
  };
  a.wrap = function(s) {
    return function() {
      return s(a(arguments));
    };
  };
}), Ra = Cf(function(e) {
  var n = Object.hasOwnProperty, t = /* @__PURE__ */ Object.create(null);
  for (var a in Ni)
    n.call(Ni, a) && (t[Ni[a]] = a);
  var s = e.exports = {
    to: {},
    get: {}
  };
  s.get = function(f) {
    var u = f.substring(0, 3).toLowerCase(), d, h;
    switch (u) {
      case "hsl":
        d = s.get.hsl(f), h = "hsl";
        break;
      case "hwb":
        d = s.get.hwb(f), h = "hwb";
        break;
      default:
        d = s.get.rgb(f), h = "rgb";
        break;
    }
    return d ? { model: h, value: d } : null;
  }, s.get.rgb = function(f) {
    if (!f)
      return null;
    var u = /^#([a-f0-9]{3,4})$/i, d = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, h = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, m = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, v = /^(\w+)$/, k = [0, 0, 0, 1], b, y, S;
    if (b = f.match(d)) {
      for (S = b[2], b = b[1], y = 0; y < 3; y++) {
        var T = y * 2;
        k[y] = parseInt(b.slice(T, T + 2), 16);
      }
      S && (k[3] = parseInt(S, 16) / 255);
    } else if (b = f.match(u)) {
      for (b = b[1], S = b[3], y = 0; y < 3; y++)
        k[y] = parseInt(b[y] + b[y], 16);
      S && (k[3] = parseInt(S + S, 16) / 255);
    } else if (b = f.match(h)) {
      for (y = 0; y < 3; y++)
        k[y] = parseInt(b[y + 1], 0);
      b[4] && (b[5] ? k[3] = parseFloat(b[4]) * 0.01 : k[3] = parseFloat(b[4]));
    } else if (b = f.match(m)) {
      for (y = 0; y < 3; y++)
        k[y] = Math.round(parseFloat(b[y + 1]) * 2.55);
      b[4] && (b[5] ? k[3] = parseFloat(b[4]) * 0.01 : k[3] = parseFloat(b[4]));
    } else
      return (b = f.match(v)) ? b[1] === "transparent" ? [0, 0, 0, 0] : n.call(Ni, b[1]) ? (k = Ni[b[1]], k[3] = 1, k) : null : null;
    for (y = 0; y < 3; y++)
      k[y] = l(k[y], 0, 255);
    return k[3] = l(k[3], 0, 1), k;
  }, s.get.hsl = function(f) {
    if (!f)
      return null;
    var u = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, d = f.match(u);
    if (d) {
      var h = parseFloat(d[4]), m = (parseFloat(d[1]) % 360 + 360) % 360, v = l(parseFloat(d[2]), 0, 100), k = l(parseFloat(d[3]), 0, 100), b = l(isNaN(h) ? 1 : h, 0, 1);
      return [m, v, k, b];
    }
    return null;
  }, s.get.hwb = function(f) {
    if (!f)
      return null;
    var u = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, d = f.match(u);
    if (d) {
      var h = parseFloat(d[4]), m = (parseFloat(d[1]) % 360 + 360) % 360, v = l(parseFloat(d[2]), 0, 100), k = l(parseFloat(d[3]), 0, 100), b = l(isNaN(h) ? 1 : h, 0, 1);
      return [m, v, k, b];
    }
    return null;
  }, s.to.hex = function() {
    var f = Hi(arguments);
    return "#" + A(f[0]) + A(f[1]) + A(f[2]) + (f[3] < 1 ? A(Math.round(f[3] * 255)) : "");
  }, s.to.rgb = function() {
    var f = Hi(arguments);
    return f.length < 4 || f[3] === 1 ? "rgb(" + Math.round(f[0]) + ", " + Math.round(f[1]) + ", " + Math.round(f[2]) + ")" : "rgba(" + Math.round(f[0]) + ", " + Math.round(f[1]) + ", " + Math.round(f[2]) + ", " + f[3] + ")";
  }, s.to.rgb.percent = function() {
    var f = Hi(arguments), u = Math.round(f[0] / 255 * 100), d = Math.round(f[1] / 255 * 100), h = Math.round(f[2] / 255 * 100);
    return f.length < 4 || f[3] === 1 ? "rgb(" + u + "%, " + d + "%, " + h + "%)" : "rgba(" + u + "%, " + d + "%, " + h + "%, " + f[3] + ")";
  }, s.to.hsl = function() {
    var f = Hi(arguments);
    return f.length < 4 || f[3] === 1 ? "hsl(" + f[0] + ", " + f[1] + "%, " + f[2] + "%)" : "hsla(" + f[0] + ", " + f[1] + "%, " + f[2] + "%, " + f[3] + ")";
  }, s.to.hwb = function() {
    var f = Hi(arguments), u = "";
    return f.length >= 4 && f[3] !== 1 && (u = ", " + f[3]), "hwb(" + f[0] + ", " + f[1] + "%, " + f[2] + "%" + u + ")";
  }, s.to.keyword = function(f) {
    return t[f.slice(0, 3)];
  };
  function l(f, u, d) {
    return Math.min(Math.max(u, f), d);
  }
  function A(f) {
    var u = Math.round(f).toString(16).toUpperCase();
    return u.length < 2 ? "0" + u : u;
  }
});
Ra.to;
Ra.get;
var Ja = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, Ut = Cf(function(e) {
  var n = {};
  for (var t in Ja)
    Ja.hasOwnProperty(t) && (n[Ja[t]] = t);
  var a = e.exports = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  for (var s in a)
    if (a.hasOwnProperty(s)) {
      if (!("channels" in a[s]))
        throw new Error("missing channels property: " + s);
      if (!("labels" in a[s]))
        throw new Error("missing channel labels property: " + s);
      if (a[s].labels.length !== a[s].channels)
        throw new Error("channel and label counts mismatch: " + s);
      var l = a[s].channels, A = a[s].labels;
      delete a[s].channels, delete a[s].labels, Object.defineProperty(a[s], "channels", { value: l }), Object.defineProperty(a[s], "labels", { value: A });
    }
  a.rgb.hsl = function(u) {
    var d = u[0] / 255, h = u[1] / 255, m = u[2] / 255, v = Math.min(d, h, m), k = Math.max(d, h, m), b = k - v, y, S, T;
    return k === v ? y = 0 : d === k ? y = (h - m) / b : h === k ? y = 2 + (m - d) / b : m === k && (y = 4 + (d - h) / b), y = Math.min(y * 60, 360), y < 0 && (y += 360), T = (v + k) / 2, k === v ? S = 0 : T <= 0.5 ? S = b / (k + v) : S = b / (2 - k - v), [y, S * 100, T * 100];
  }, a.rgb.hsv = function(u) {
    var d, h, m, v, k, b = u[0] / 255, y = u[1] / 255, S = u[2] / 255, T = Math.max(b, y, S), Q = T - Math.min(b, y, S), B = function(K) {
      return (T - K) / 6 / Q + 1 / 2;
    };
    return Q === 0 ? v = k = 0 : (k = Q / T, d = B(b), h = B(y), m = B(S), b === T ? v = m - h : y === T ? v = 1 / 3 + d - m : S === T && (v = 2 / 3 + h - d), v < 0 ? v += 1 : v > 1 && (v -= 1)), [
      v * 360,
      k * 100,
      T * 100
    ];
  }, a.rgb.hwb = function(u) {
    var d = u[0], h = u[1], m = u[2], v = a.rgb.hsl(u)[0], k = 1 / 255 * Math.min(d, Math.min(h, m));
    return m = 1 - 1 / 255 * Math.max(d, Math.max(h, m)), [v, k * 100, m * 100];
  }, a.rgb.cmyk = function(u) {
    var d = u[0] / 255, h = u[1] / 255, m = u[2] / 255, v, k, b, y;
    return y = Math.min(1 - d, 1 - h, 1 - m), v = (1 - d - y) / (1 - y) || 0, k = (1 - h - y) / (1 - y) || 0, b = (1 - m - y) / (1 - y) || 0, [v * 100, k * 100, b * 100, y * 100];
  };
  function f(u, d) {
    return Math.pow(u[0] - d[0], 2) + Math.pow(u[1] - d[1], 2) + Math.pow(u[2] - d[2], 2);
  }
  a.rgb.keyword = function(u) {
    var d = n[u];
    if (d)
      return d;
    var h = 1 / 0, m;
    for (var v in Ja)
      if (Ja.hasOwnProperty(v)) {
        var k = Ja[v], b = f(u, k);
        b < h && (h = b, m = v);
      }
    return m;
  }, a.keyword.rgb = function(u) {
    return Ja[u];
  }, a.rgb.xyz = function(u) {
    var d = u[0] / 255, h = u[1] / 255, m = u[2] / 255;
    d = d > 0.04045 ? Math.pow((d + 0.055) / 1.055, 2.4) : d / 12.92, h = h > 0.04045 ? Math.pow((h + 0.055) / 1.055, 2.4) : h / 12.92, m = m > 0.04045 ? Math.pow((m + 0.055) / 1.055, 2.4) : m / 12.92;
    var v = d * 0.4124 + h * 0.3576 + m * 0.1805, k = d * 0.2126 + h * 0.7152 + m * 0.0722, b = d * 0.0193 + h * 0.1192 + m * 0.9505;
    return [v * 100, k * 100, b * 100];
  }, a.rgb.lab = function(u) {
    var d = a.rgb.xyz(u), h = d[0], m = d[1], v = d[2], k, b, y;
    return h /= 95.047, m /= 100, v /= 108.883, h = h > 8856e-6 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116, m = m > 8856e-6 ? Math.pow(m, 1 / 3) : 7.787 * m + 16 / 116, v = v > 8856e-6 ? Math.pow(v, 1 / 3) : 7.787 * v + 16 / 116, k = 116 * m - 16, b = 500 * (h - m), y = 200 * (m - v), [k, b, y];
  }, a.hsl.rgb = function(u) {
    var d = u[0] / 360, h = u[1] / 100, m = u[2] / 100, v, k, b, y, S;
    if (h === 0)
      return S = m * 255, [S, S, S];
    m < 0.5 ? k = m * (1 + h) : k = m + h - m * h, v = 2 * m - k, y = [0, 0, 0];
    for (var T = 0; T < 3; T++)
      b = d + 1 / 3 * -(T - 1), b < 0 && b++, b > 1 && b--, 6 * b < 1 ? S = v + (k - v) * 6 * b : 2 * b < 1 ? S = k : 3 * b < 2 ? S = v + (k - v) * (2 / 3 - b) * 6 : S = v, y[T] = S * 255;
    return y;
  }, a.hsl.hsv = function(u) {
    var d = u[0], h = u[1] / 100, m = u[2] / 100, v = h, k = Math.max(m, 0.01), b, y;
    return m *= 2, h *= m <= 1 ? m : 2 - m, v *= k <= 1 ? k : 2 - k, y = (m + h) / 2, b = m === 0 ? 2 * v / (k + v) : 2 * h / (m + h), [d, b * 100, y * 100];
  }, a.hsv.rgb = function(u) {
    var d = u[0] / 60, h = u[1] / 100, m = u[2] / 100, v = Math.floor(d) % 6, k = d - Math.floor(d), b = 255 * m * (1 - h), y = 255 * m * (1 - h * k), S = 255 * m * (1 - h * (1 - k));
    switch (m *= 255, v) {
      case 0:
        return [m, S, b];
      case 1:
        return [y, m, b];
      case 2:
        return [b, m, S];
      case 3:
        return [b, y, m];
      case 4:
        return [S, b, m];
      case 5:
        return [m, b, y];
    }
  }, a.hsv.hsl = function(u) {
    var d = u[0], h = u[1] / 100, m = u[2] / 100, v = Math.max(m, 0.01), k, b, y;
    return y = (2 - h) * m, k = (2 - h) * v, b = h * v, b /= k <= 1 ? k : 2 - k, b = b || 0, y /= 2, [d, b * 100, y * 100];
  }, a.hwb.rgb = function(u) {
    var d = u[0] / 360, h = u[1] / 100, m = u[2] / 100, v = h + m, k, b, y, S;
    v > 1 && (h /= v, m /= v), k = Math.floor(6 * d), b = 1 - m, y = 6 * d - k, k & 1 && (y = 1 - y), S = h + y * (b - h);
    var T, Q, B;
    switch (k) {
      default:
      case 6:
      case 0:
        T = b, Q = S, B = h;
        break;
      case 1:
        T = S, Q = b, B = h;
        break;
      case 2:
        T = h, Q = b, B = S;
        break;
      case 3:
        T = h, Q = S, B = b;
        break;
      case 4:
        T = S, Q = h, B = b;
        break;
      case 5:
        T = b, Q = h, B = S;
        break;
    }
    return [T * 255, Q * 255, B * 255];
  }, a.cmyk.rgb = function(u) {
    var d = u[0] / 100, h = u[1] / 100, m = u[2] / 100, v = u[3] / 100, k, b, y;
    return k = 1 - Math.min(1, d * (1 - v) + v), b = 1 - Math.min(1, h * (1 - v) + v), y = 1 - Math.min(1, m * (1 - v) + v), [k * 255, b * 255, y * 255];
  }, a.xyz.rgb = function(u) {
    var d = u[0] / 100, h = u[1] / 100, m = u[2] / 100, v, k, b;
    return v = d * 3.2406 + h * -1.5372 + m * -0.4986, k = d * -0.9689 + h * 1.8758 + m * 0.0415, b = d * 0.0557 + h * -0.204 + m * 1.057, v = v > 31308e-7 ? 1.055 * Math.pow(v, 1 / 2.4) - 0.055 : v * 12.92, k = k > 31308e-7 ? 1.055 * Math.pow(k, 1 / 2.4) - 0.055 : k * 12.92, b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92, v = Math.min(Math.max(0, v), 1), k = Math.min(Math.max(0, k), 1), b = Math.min(Math.max(0, b), 1), [v * 255, k * 255, b * 255];
  }, a.xyz.lab = function(u) {
    var d = u[0], h = u[1], m = u[2], v, k, b;
    return d /= 95.047, h /= 100, m /= 108.883, d = d > 8856e-6 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116, h = h > 8856e-6 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116, m = m > 8856e-6 ? Math.pow(m, 1 / 3) : 7.787 * m + 16 / 116, v = 116 * h - 16, k = 500 * (d - h), b = 200 * (h - m), [v, k, b];
  }, a.lab.xyz = function(u) {
    var d = u[0], h = u[1], m = u[2], v, k, b;
    k = (d + 16) / 116, v = h / 500 + k, b = k - m / 200;
    var y = Math.pow(k, 3), S = Math.pow(v, 3), T = Math.pow(b, 3);
    return k = y > 8856e-6 ? y : (k - 16 / 116) / 7.787, v = S > 8856e-6 ? S : (v - 16 / 116) / 7.787, b = T > 8856e-6 ? T : (b - 16 / 116) / 7.787, v *= 95.047, k *= 100, b *= 108.883, [v, k, b];
  }, a.lab.lch = function(u) {
    var d = u[0], h = u[1], m = u[2], v, k, b;
    return v = Math.atan2(m, h), k = v * 360 / 2 / Math.PI, k < 0 && (k += 360), b = Math.sqrt(h * h + m * m), [d, b, k];
  }, a.lch.lab = function(u) {
    var d = u[0], h = u[1], m = u[2], v, k, b;
    return b = m / 360 * 2 * Math.PI, v = h * Math.cos(b), k = h * Math.sin(b), [d, v, k];
  }, a.rgb.ansi16 = function(u) {
    var d = u[0], h = u[1], m = u[2], v = 1 in arguments ? arguments[1] : a.rgb.hsv(u)[2];
    if (v = Math.round(v / 50), v === 0)
      return 30;
    var k = 30 + (Math.round(m / 255) << 2 | Math.round(h / 255) << 1 | Math.round(d / 255));
    return v === 2 && (k += 60), k;
  }, a.hsv.ansi16 = function(u) {
    return a.rgb.ansi16(a.hsv.rgb(u), u[2]);
  }, a.rgb.ansi256 = function(u) {
    var d = u[0], h = u[1], m = u[2];
    if (d === h && h === m)
      return d < 8 ? 16 : d > 248 ? 231 : Math.round((d - 8) / 247 * 24) + 232;
    var v = 16 + 36 * Math.round(d / 255 * 5) + 6 * Math.round(h / 255 * 5) + Math.round(m / 255 * 5);
    return v;
  }, a.ansi16.rgb = function(u) {
    var d = u % 10;
    if (d === 0 || d === 7)
      return u > 50 && (d += 3.5), d = d / 10.5 * 255, [d, d, d];
    var h = (~~(u > 50) + 1) * 0.5, m = (d & 1) * h * 255, v = (d >> 1 & 1) * h * 255, k = (d >> 2 & 1) * h * 255;
    return [m, v, k];
  }, a.ansi256.rgb = function(u) {
    if (u >= 232) {
      var d = (u - 232) * 10 + 8;
      return [d, d, d];
    }
    u -= 16;
    var h, m = Math.floor(u / 36) / 5 * 255, v = Math.floor((h = u % 36) / 6) / 5 * 255, k = h % 6 / 5 * 255;
    return [m, v, k];
  }, a.rgb.hex = function(u) {
    var d = ((Math.round(u[0]) & 255) << 16) + ((Math.round(u[1]) & 255) << 8) + (Math.round(u[2]) & 255), h = d.toString(16).toUpperCase();
    return "000000".substring(h.length) + h;
  }, a.hex.rgb = function(u) {
    var d = u.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!d)
      return [0, 0, 0];
    var h = d[0];
    d[0].length === 3 && (h = h.split("").map(function(y) {
      return y + y;
    }).join(""));
    var m = parseInt(h, 16), v = m >> 16 & 255, k = m >> 8 & 255, b = m & 255;
    return [v, k, b];
  }, a.rgb.hcg = function(u) {
    var d = u[0] / 255, h = u[1] / 255, m = u[2] / 255, v = Math.max(Math.max(d, h), m), k = Math.min(Math.min(d, h), m), b = v - k, y, S;
    return b < 1 ? y = k / (1 - b) : y = 0, b <= 0 ? S = 0 : v === d ? S = (h - m) / b % 6 : v === h ? S = 2 + (m - d) / b : S = 4 + (d - h) / b + 4, S /= 6, S %= 1, [S * 360, b * 100, y * 100];
  }, a.hsl.hcg = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = 1, v = 0;
    return h < 0.5 ? m = 2 * d * h : m = 2 * d * (1 - h), m < 1 && (v = (h - 0.5 * m) / (1 - m)), [u[0], m * 100, v * 100];
  }, a.hsv.hcg = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = d * h, v = 0;
    return m < 1 && (v = (h - m) / (1 - m)), [u[0], m * 100, v * 100];
  }, a.hcg.rgb = function(u) {
    var d = u[0] / 360, h = u[1] / 100, m = u[2] / 100;
    if (h === 0)
      return [m * 255, m * 255, m * 255];
    var v = [0, 0, 0], k = d % 1 * 6, b = k % 1, y = 1 - b, S = 0;
    switch (Math.floor(k)) {
      case 0:
        v[0] = 1, v[1] = b, v[2] = 0;
        break;
      case 1:
        v[0] = y, v[1] = 1, v[2] = 0;
        break;
      case 2:
        v[0] = 0, v[1] = 1, v[2] = b;
        break;
      case 3:
        v[0] = 0, v[1] = y, v[2] = 1;
        break;
      case 4:
        v[0] = b, v[1] = 0, v[2] = 1;
        break;
      default:
        v[0] = 1, v[1] = 0, v[2] = y;
    }
    return S = (1 - h) * m, [
      (h * v[0] + S) * 255,
      (h * v[1] + S) * 255,
      (h * v[2] + S) * 255
    ];
  }, a.hcg.hsv = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = d + h * (1 - d), v = 0;
    return m > 0 && (v = d / m), [u[0], v * 100, m * 100];
  }, a.hcg.hsl = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = h * (1 - d) + 0.5 * d, v = 0;
    return m > 0 && m < 0.5 ? v = d / (2 * m) : m >= 0.5 && m < 1 && (v = d / (2 * (1 - m))), [u[0], v * 100, m * 100];
  }, a.hcg.hwb = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = d + h * (1 - d);
    return [u[0], (m - d) * 100, (1 - m) * 100];
  }, a.hwb.hcg = function(u) {
    var d = u[1] / 100, h = u[2] / 100, m = 1 - h, v = m - d, k = 0;
    return v < 1 && (k = (m - v) / (1 - v)), [u[0], v * 100, k * 100];
  }, a.apple.rgb = function(u) {
    return [u[0] / 65535 * 255, u[1] / 65535 * 255, u[2] / 65535 * 255];
  }, a.rgb.apple = function(u) {
    return [u[0] / 255 * 65535, u[1] / 255 * 65535, u[2] / 255 * 65535];
  }, a.gray.rgb = function(u) {
    return [u[0] / 100 * 255, u[0] / 100 * 255, u[0] / 100 * 255];
  }, a.gray.hsl = a.gray.hsv = function(u) {
    return [0, 0, u[0]];
  }, a.gray.hwb = function(u) {
    return [0, 100, u[0]];
  }, a.gray.cmyk = function(u) {
    return [0, 0, 0, u[0]];
  }, a.gray.lab = function(u) {
    return [u[0], 0, 0];
  }, a.gray.hex = function(u) {
    var d = Math.round(u[0] / 100 * 255) & 255, h = (d << 16) + (d << 8) + d, m = h.toString(16).toUpperCase();
    return "000000".substring(m.length) + m;
  }, a.rgb.gray = function(u) {
    var d = (u[0] + u[1] + u[2]) / 3;
    return [d / 255 * 100];
  };
});
Ut.rgb;
Ut.hsl;
Ut.hsv;
Ut.hwb;
Ut.cmyk;
Ut.xyz;
Ut.lab;
Ut.lch;
Ut.hex;
Ut.keyword;
Ut.ansi16;
Ut.ansi256;
Ut.hcg;
Ut.apple;
Ut.gray;
function n4() {
  for (var e = {}, n = Object.keys(Ut), t = n.length, a = 0; a < t; a++)
    e[n[a]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return e;
}
function r4(e) {
  var n = n4(), t = [e];
  for (n[e].distance = 0; t.length; )
    for (var a = t.pop(), s = Object.keys(Ut[a]), l = s.length, A = 0; A < l; A++) {
      var f = s[A], u = n[f];
      u.distance === -1 && (u.distance = n[a].distance + 1, u.parent = a, t.unshift(f));
    }
  return n;
}
function a4(e, n) {
  return function(t) {
    return n(e(t));
  };
}
function s4(e, n) {
  for (var t = [n[e].parent, e], a = Ut[n[e].parent][e], s = n[e].parent; n[s].parent; )
    t.unshift(n[s].parent), a = a4(Ut[n[s].parent][s], a), s = n[s].parent;
  return a.conversion = t, a;
}
var i4 = function(e) {
  for (var n = r4(e), t = {}, a = Object.keys(n), s = a.length, l = 0; l < s; l++) {
    var A = a[l], f = n[A];
    f.parent !== null && (t[A] = s4(A, n));
  }
  return t;
}, Ss = {}, o4 = Object.keys(Ut);
function l4(e) {
  var n = function(t) {
    return t == null ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t));
  };
  return "conversion" in e && (n.conversion = e.conversion), n;
}
function A4(e) {
  var n = function(t) {
    if (t == null)
      return t;
    arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
    var a = e(t);
    if (typeof a == "object")
      for (var s = a.length, l = 0; l < s; l++)
        a[l] = Math.round(a[l]);
    return a;
  };
  return "conversion" in e && (n.conversion = e.conversion), n;
}
o4.forEach(function(e) {
  Ss[e] = {}, Object.defineProperty(Ss[e], "channels", { value: Ut[e].channels }), Object.defineProperty(Ss[e], "labels", { value: Ut[e].labels });
  var n = i4(e), t = Object.keys(n);
  t.forEach(function(a) {
    var s = n[a];
    Ss[e][a] = A4(s), Ss[e][a].raw = l4(s);
  });
});
var Yn = Ss, Df = [].slice, fg = [
  // to be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // gray conflicts with some method names, and has its own method defined.
  "gray",
  // shouldn't really be in color-convert either...
  "hex"
], Hu = {};
Object.keys(Yn).forEach(function(e) {
  Hu[Df.call(Yn[e].labels).sort().join("")] = e;
});
var $l = {};
function An(e, n) {
  if (!(this instanceof An))
    return new An(e, n);
  if (n && n in fg && (n = null), n && !(n in Yn))
    throw new Error("Unknown model: " + n);
  var t, a;
  if (e == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (e instanceof An)
    this.model = e.model, this.color = e.color.slice(), this.valpha = e.valpha;
  else if (typeof e == "string") {
    var s = Ra.get(e);
    if (s === null)
      throw new Error("Unable to parse color from string: " + e);
    this.model = s.model, a = Yn[this.model].channels, this.color = s.value.slice(0, a), this.valpha = typeof s.value[a] == "number" ? s.value[a] : 1;
  } else if (e.length) {
    this.model = n || "rgb", a = Yn[this.model].channels;
    var l = Df.call(e, 0, a);
    this.color = Bu(l, a), this.valpha = typeof e[a] == "number" ? e[a] : 1;
  } else if (typeof e == "number")
    e &= 16777215, this.model = "rgb", this.color = [
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    var A = Object.keys(e);
    "alpha" in e && (A.splice(A.indexOf("alpha"), 1), this.valpha = typeof e.alpha == "number" ? e.alpha : 0);
    var f = A.sort().join("");
    if (!(f in Hu))
      throw new Error("Unable to parse color from object: " + JSON.stringify(e));
    this.model = Hu[f];
    var u = Yn[this.model].labels, d = [];
    for (t = 0; t < u.length; t++)
      d.push(e[u[t]]);
    this.color = Bu(d);
  }
  if ($l[this.model])
    for (a = Yn[this.model].channels, t = 0; t < a; t++) {
      var h = $l[this.model][t];
      h && (this.color[t] = h(this.color[t]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
An.prototype = {
  toString: function() {
    return this.string();
  },
  toJSON: function() {
    return this[this.model]();
  },
  string: function(e) {
    var n = this.model in Ra.to ? this : this.rgb();
    n = n.round(typeof e == "number" ? e : 1);
    var t = n.valpha === 1 ? n.color : n.color.concat(this.valpha);
    return Ra.to[n.model](t);
  },
  percentString: function(e) {
    var n = this.rgb().round(typeof e == "number" ? e : 1), t = n.valpha === 1 ? n.color : n.color.concat(this.valpha);
    return Ra.to.rgb.percent(t);
  },
  array: function() {
    return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
  },
  object: function() {
    for (var e = {}, n = Yn[this.model].channels, t = Yn[this.model].labels, a = 0; a < n; a++)
      e[t[a]] = this.color[a];
    return this.valpha !== 1 && (e.alpha = this.valpha), e;
  },
  unitArray: function() {
    var e = this.rgb().color;
    return e[0] /= 255, e[1] /= 255, e[2] /= 255, this.valpha !== 1 && e.push(this.valpha), e;
  },
  unitObject: function() {
    var e = this.rgb().object();
    return e.r /= 255, e.g /= 255, e.b /= 255, this.valpha !== 1 && (e.alpha = this.valpha), e;
  },
  round: function(e) {
    return e = Math.max(e || 0, 0), new An(this.color.map(u4(e)).concat(this.valpha), this.model);
  },
  alpha: function(e) {
    return arguments.length ? new An(this.color.concat(Math.max(0, Math.min(1, e))), this.model) : this.valpha;
  },
  // rgb
  red: Ht("rgb", 0, en(255)),
  green: Ht("rgb", 1, en(255)),
  blue: Ht("rgb", 2, en(255)),
  hue: Ht(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(e) {
    return (e % 360 + 360) % 360;
  }),
  // eslint-disable-line brace-style
  saturationl: Ht("hsl", 1, en(100)),
  lightness: Ht("hsl", 2, en(100)),
  saturationv: Ht("hsv", 1, en(100)),
  value: Ht("hsv", 2, en(100)),
  chroma: Ht("hcg", 1, en(100)),
  gray: Ht("hcg", 2, en(100)),
  white: Ht("hwb", 1, en(100)),
  wblack: Ht("hwb", 2, en(100)),
  cyan: Ht("cmyk", 0, en(100)),
  magenta: Ht("cmyk", 1, en(100)),
  yellow: Ht("cmyk", 2, en(100)),
  black: Ht("cmyk", 3, en(100)),
  x: Ht("xyz", 0, en(100)),
  y: Ht("xyz", 1, en(100)),
  z: Ht("xyz", 2, en(100)),
  l: Ht("lab", 0, en(100)),
  a: Ht("lab", 1),
  b: Ht("lab", 2),
  keyword: function(e) {
    return arguments.length ? new An(e) : Yn[this.model].keyword(this.color);
  },
  hex: function(e) {
    return arguments.length ? new An(e) : Ra.to.hex(this.rgb().round().color);
  },
  rgbNumber: function() {
    var e = this.rgb().color;
    return (e[0] & 255) << 16 | (e[1] & 255) << 8 | e[2] & 255;
  },
  luminosity: function() {
    for (var e = this.rgb().color, n = [], t = 0; t < e.length; t++) {
      var a = e[t] / 255;
      n[t] = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
  },
  contrast: function(e) {
    var n = this.luminosity(), t = e.luminosity();
    return n > t ? (n + 0.05) / (t + 0.05) : (t + 0.05) / (n + 0.05);
  },
  level: function(e) {
    var n = this.contrast(e);
    return n >= 7.1 ? "AAA" : n >= 4.5 ? "AA" : "";
  },
  isDark: function() {
    var e = this.rgb().color, n = (e[0] * 299 + e[1] * 587 + e[2] * 114) / 1e3;
    return n < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  negate: function() {
    for (var e = this.rgb(), n = 0; n < 3; n++)
      e.color[n] = 255 - e.color[n];
    return e;
  },
  lighten: function(e) {
    var n = this.hsl();
    return n.color[2] += n.color[2] * e, n;
  },
  darken: function(e) {
    var n = this.hsl();
    return n.color[2] -= n.color[2] * e, n;
  },
  saturate: function(e) {
    var n = this.hsl();
    return n.color[1] += n.color[1] * e, n;
  },
  desaturate: function(e) {
    var n = this.hsl();
    return n.color[1] -= n.color[1] * e, n;
  },
  whiten: function(e) {
    var n = this.hwb();
    return n.color[1] += n.color[1] * e, n;
  },
  blacken: function(e) {
    var n = this.hwb();
    return n.color[2] += n.color[2] * e, n;
  },
  grayscale: function() {
    var e = this.rgb().color, n = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
    return An.rgb(n, n, n);
  },
  fade: function(e) {
    return this.alpha(this.valpha - this.valpha * e);
  },
  opaquer: function(e) {
    return this.alpha(this.valpha + this.valpha * e);
  },
  rotate: function(e) {
    var n = this.hsl(), t = n.color[0];
    return t = (t + e) % 360, t = t < 0 ? 360 + t : t, n.color[0] = t, n;
  },
  mix: function(e, n) {
    if (!e || !e.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e);
    var t = e.rgb(), a = this.rgb(), s = n === void 0 ? 0.5 : n, l = 2 * s - 1, A = t.alpha() - a.alpha(), f = ((l * A === -1 ? l : (l + A) / (1 + l * A)) + 1) / 2, u = 1 - f;
    return An.rgb(
      f * t.red() + u * a.red(),
      f * t.green() + u * a.green(),
      f * t.blue() + u * a.blue(),
      t.alpha() * s + a.alpha() * (1 - s)
    );
  }
};
Object.keys(Yn).forEach(function(e) {
  if (fg.indexOf(e) === -1) {
    var n = Yn[e].channels;
    An.prototype[e] = function() {
      if (this.model === e)
        return new An(this);
      if (arguments.length)
        return new An(arguments, e);
      var t = typeof arguments[n] == "number" ? n : this.valpha;
      return new An(f4(Yn[this.model][e].raw(this.color)).concat(t), e);
    }, An[e] = function(t) {
      return typeof t == "number" && (t = Bu(Df.call(arguments), n)), new An(t, e);
    };
  }
});
function c4(e, n) {
  return Number(e.toFixed(n));
}
function u4(e) {
  return function(n) {
    return c4(n, e);
  };
}
function Ht(e, n, t) {
  return e = Array.isArray(e) ? e : [e], e.forEach(function(a) {
    ($l[a] || ($l[a] = []))[n] = t;
  }), e = e[0], function(a) {
    var s;
    return arguments.length ? (t && (a = t(a)), s = this[e](), s.color[n] = a, s) : (s = this[e]().color[n], t && (s = t(s)), s);
  };
}
function en(e) {
  return function(n) {
    return Math.max(0, Math.min(e, n));
  };
}
function f4(e) {
  return Array.isArray(e) ? e : [e];
}
function Bu(e, n) {
  for (var t = 0; t < n; t++)
    typeof e[t] != "number" && (e[t] = 0);
  return e;
}
var vu = An;
function Rr(e) {
  const n = vu(e), t = vu({ r: 255, g: 255, b: 255 }), a = vu({ r: 0, g: 0, b: 0 });
  return n.red() * 0.299 + n.green() * 0.587 + n.b() * 0.114 >= 186 ? a : t;
}
const d4 = ({
  preview: e,
  config: n,
  settings: t,
  labels: a,
  backgroundColor: s,
  layout: l,
  i18nEnabled: A
}) => {
  const f = n.blogUrl, u = n.signupForm.url.replace("{version}", n.signupForm.version);
  let d = {
    site: f,
    "button-color": t.accentColor,
    "button-text-color": Rr(t.accentColor).hex()
  };
  A && t.locale && (d.locale = t.locale);
  for (const [y, S] of a.entries())
    d[`label-${y + 1}`] = S.name;
  let h = "min-height: 58px;max-width: 440px;margin: 0 auto;width: 100%";
  l === "all-in-one" && (t.icon && t.icon !== "" && (d.icon = t.icon.replace(/\/content\/images\//, "/content/images/size/w192h192/")), d.title = t.title, d.description = t.description, d["background-color"] = s, d["text-color"] = Rr(s).hex(), h = "height: 40vmin;min-height: 360px"), e && (l === "minimal" ? h = "min-height: 58px; max-width: 440px;width: 100%;position: absolute; left: 50%; top:50%; transform: translate(-50%, -50%);" : h = "height: 100vh");
  let m = "";
  const v = [
    "background-color",
    "text-color",
    "button-color",
    "button-text-color",
    "title",
    "description",
    "icon",
    "site",
    "locale"
  ], k = Object.keys(d).sort((y, S) => v.indexOf(y) - v.indexOf(S));
  for (const y of k) {
    const S = d[y];
    m += ` data-${y}="${sp(S)}"`;
  }
  const b = `<div style="${sp(h)}"><script src="${encodeURI(u)}"${m} async><\/script></div>`;
  return e && h === "minimal" ? `<div style="position: absolute; z-index: -1; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);background-size: 16px 16px;background-position: 0 0, 8px 8px;;"></div>${b}` : b;
}, h4 = xe.create(() => {
  let e = !1;
  const [n, t] = ue("#08090c"), [a, s] = ue([]), [l, A] = ue("all-in-one"), [f, u] = ue(""), [d, h] = ue(!1), { updateRoute: m } = nt(), { config: v } = ct(), { localSettings: k, siteData: b } = Ha(), [y, S, T, Q, B, K] = Et(k, ["accent_color", "title", "description", "locale", "labs", "icon"]), [$, Y] = ue({ active: !1 });
  B && (e = JSON.parse(B).i18n), Te(() => {
    var ae, j;
    if (!b)
      return;
    const ne = d4({
      preview: !0,
      config: {
        blogUrl: b.url,
        signupForm: {
          url: (ae = v == null ? void 0 : v.signupForm) == null ? void 0 : ae.url,
          version: (j = v == null ? void 0 : v.signupForm) == null ? void 0 : j.version
        }
      },
      settings: {
        accentColor: y || "#d74780",
        title: S || "",
        locale: Q || "en",
        icon: K || "",
        description: T || ""
      },
      labels: a.map(({ label: _ }) => ({ name: _ })),
      backgroundColor: n || "#08090c",
      layout: l,
      i18nEnabled: e
    });
    u(ne);
  }, [b, y, a, v, S, n, l, Q, e, K, T]);
  const V = async () => {
    try {
      await navigator.clipboard.writeText(f), h(!0), setTimeout(() => h(!1), 2e3);
    } catch (ne) {
      console.error("Failed to copy text: ", ne);
    }
  }, re = (ne) => {
    t(ne);
  }, le = (ne) => {
    if (ne != null && ne.length) {
      const ae = ne == null ? void 0 : ne.map(({ value: j }) => ({ label: j, value: j }));
      s(ae);
    } else
      s([]);
  };
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        m("embed-signup-form");
      },
      cancelLabel: "",
      footer: !1,
      height: 645,
      padding: !1,
      testId: "embed-signup-form",
      title: "",
      topRightContent: "close",
      width: 1120,
      children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-[5.2fr_2.8fr]", children: [
        /* @__PURE__ */ o.jsx(
          $5,
          {
            html: f,
            style: l
          }
        ),
        /* @__PURE__ */ o.jsx(
          e4,
          {
            accentColor: y,
            customColor: $,
            embedScript: f,
            handleColorToggle: re,
            handleCopyClick: V,
            handleLabelClick: le,
            handleLayoutSelect: A,
            isCopied: d,
            selectedColor: n,
            selectedLabels: a,
            selectedLayout: l,
            setCustomColor: Y
          }
        )
      ] })
    }
  );
}), p4 = xe.create(() => {
  const { updateRoute: e } = nt(), n = xe.useModal(), { settings: t } = ct(), { mutateAsync: a } = ua(), s = dt(), [l, A] = ue(""), [f, u] = ue(!1), [d] = Et(t, ["firstpromoter"]), [h] = Et(t, ["firstpromoter_id"]);
  Te(() => {
    u(d || !1), A(h || null);
  }, [d, h]);
  const m = async () => {
    await a([
      {
        key: "firstpromoter",
        value: f
      },
      {
        key: "firstpromoter_id",
        value: l
      }
    ]);
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      dirty: f !== d || l !== h,
      okColor: "black",
      okLabel: "Save & close",
      testId: "firstpromoter-modal",
      title: "",
      onOk: async () => {
        try {
          await m(), e("integrations"), n.remove();
        } catch (v) {
          s(v);
        }
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Launch your own member referral program",
            icon: /* @__PURE__ */ o.jsx(jk, { className: "-mt-2 h-14 w-14" }),
            title: "FirstPromoter"
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(yt, { marginBottom: !1, title: "FirstPromoter configuration", grouped: !0, children: [
          /* @__PURE__ */ o.jsx(
            mt,
            {
              checked: f,
              direction: "rtl",
              hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                "Enable ",
                /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://firstpromoter.com/?fpr=ghost&fp_sid=admin", rel: "noopener noreferrer", target: "_blank", children: "FirstPromoter" }),
                " for tracking referrals"
              ] }),
              label: "Enable FirstPromoter",
              onChange: (v) => {
                u(v.target.checked);
              }
            }
          ),
          f && /* @__PURE__ */ o.jsx(
            Re,
            {
              hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                "Affiliate and referral tracking, find your ID  ",
                /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://ghost.org/help/firstpromoter-id/", rel: "noopener noreferrer", target: "_blank", children: "here" })
              ] }),
              placeholder: "XXXXXXXX",
              title: "FirstPromoter account ID",
              value: l || "",
              onChange: (v) => {
                A(v.target.value);
              }
            }
          )
        ] }) })
      ]
    }
  );
}), m4 = "ActionsResponseType", g4 = Ok({
  dataType: m4,
  path: "/actions/",
  returnData: (e) => {
    const { pages: n } = e;
    let t = n.flatMap((l) => l.actions.map(
      ({ context: A, ...f }) => ({ ...f, context: JSON.parse(A) })
    ));
    t = t.reverse();
    let a = 1;
    t.forEach((l, A) => {
      const f = t[A + 1];
      f && l.resource_id === f.resource_id && l.event === f.event ? (l.skip = !0, a += 1) : a > 1 && (l.count = a, a = 1);
    });
    const s = n.at(-1).meta;
    return {
      actions: t.reverse(),
      meta: s,
      isEnd: s ? s.pagination.pages === s.pagination.page : !0
    };
  }
}), v4 = (e) => {
  var n, t;
  let a = e.resource_type;
  if (e.event !== "deleted")
    switch (e.resource_type) {
      case "page":
      case "post":
        return !e.resource || !e.resource.id ? void 0 : (a === "post" && (n = e.context) != null && n.type && (a = (t = e.context) == null ? void 0 : t.type), {
          isExternal: !0,
          route: `editor/${a}/${e.resource.id}`,
          models: [a, e.resource.id]
        });
      case "integration":
        return !e.resource || !e.resource.id ? void 0 : { route: `integrations/${e.resource.id}` };
      case "offer":
        return !e.resource || !e.resource.id ? void 0 : {
          isExternal: !0,
          route: `offers/${e.resource.id}`,
          models: [e.resource.id]
        };
      case "tag":
        return !e.resource || !e.resource.slug ? void 0 : {
          isExternal: !0,
          route: "tag",
          models: [e.resource.slug]
        };
      case "product":
        return { route: "tiers" };
      case "user":
        return !e.resource || !e.resource.slug ? void 0 : { route: `staff/${e.resource.slug}` };
    }
}, w4 = (e) => {
  var n, t, a, s, l, A, f;
  let u = e.resource_type;
  u === "api_key" ? u = "API key" : u === "setting" ? u = "settings" : u === "product" && (u = "tier"), u === "post" && (n = e.context) != null && n.type && (u = (t = e.context) == null ? void 0 : t.type);
  let d = e.event;
  return e.event === "edited" && (a = e.context) != null && a.action_name && (d = (s = e.context) == null ? void 0 : s.action_name), (l = e.context) != null && l.count && ((A = e.context) == null ? void 0 : A.count) > 1 ? `${(f = e.context) == null ? void 0 : f.count} ${u}s ${d}` : `${u.slice(0, 1).toUpperCase()}${u.slice(1)} ${d}`;
}, x4 = (e) => {
  var n, t, a, s;
  if (e.resource_type === "setting" && (n = e.context) != null && n.group && (t = e.context) != null && t.key)
    return {
      group: (a = e.context) == null ? void 0 : a.group,
      key: (s = e.context) == null ? void 0 : s.key
    };
}, ip = (e) => {
  var n, t;
  return typeof ((n = e.context) == null ? void 0 : n.count) == "number" && ((t = e.context) == null ? void 0 : t.count) > 1;
}, k4 = ({ action: e }) => {
  let n = "pen";
  switch (e.event) {
    case "added":
      n = "add";
      break;
    case "deleted":
      n = "trash";
      break;
  }
  return /* @__PURE__ */ o.jsx(Qt, { name: n, size: "xs" });
}, b4 = ({ action: e }) => {
  var n, t, a, s, l;
  return /* @__PURE__ */ o.jsxs("div", { className: "relative shrink-0", children: [
    /* @__PURE__ */ o.jsx(
      Nk,
      {
        bgColor: Hk(((n = e.actor) == null ? void 0 : n.name) || ((t = e.actor) == null ? void 0 : t.slug) || ""),
        image: ((a = e.actor) == null ? void 0 : a.image) ?? void 0,
        label: Bk(((s = e.actor) == null ? void 0 : s.name) || ((l = e.actor) == null ? void 0 : l.slug)),
        labelColor: "white",
        size: "md"
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "absolute -bottom-1 -right-1 flex items-center justify-center rounded-full border border-grey-100 bg-white p-1 shadow-sm dark:border-grey-900 dark:bg-black", children: /* @__PURE__ */ o.jsx(k4, { action: e }) })
  ] });
}, sa = ({ label: e, item: n, excludedItems: t, toggleItem: a }) => /* @__PURE__ */ o.jsx(
  mt,
  {
    checked: !t.includes(n),
    direction: "rtl",
    label: e,
    labelClasses: "text-sm",
    onChange: (s) => a(n, s.target.checked)
  }
), y4 = ({ excludedEvents: e, excludedResources: n, toggleEventType: t, toggleResourceType: a }) => {
  const { updateRoute: s } = nt(), l = Sp({ path: "/users/", filterKey: "name", responseKey: "users" }), A = async (h, m) => {
    const v = await l.loadData(h);
    m(v.map((k) => ({ label: k.name, value: k.id })));
  }, [f, u] = ue(), d = () => {
    u(null);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ o.jsx(hp, { position: "right", trigger: /* @__PURE__ */ o.jsx(Ye, { color: "outline", label: "Filter", size: "sm" }), children: /* @__PURE__ */ o.jsxs("div", { className: "flex w-[220px] flex-col gap-8 p-5", children: [
      /* @__PURE__ */ o.jsxs(Pl, { children: [
        /* @__PURE__ */ o.jsx(sa, { excludedItems: e, item: "added", label: "Added", toggleItem: t }),
        /* @__PURE__ */ o.jsx(sa, { excludedItems: e, item: "edited", label: "Edited", toggleItem: t }),
        /* @__PURE__ */ o.jsx(sa, { excludedItems: e, item: "deleted", label: "Deleted", toggleItem: t })
      ] }),
      /* @__PURE__ */ o.jsxs(Pl, { children: [
        /* @__PURE__ */ o.jsx(sa, { excludedItems: n, item: "post", label: "Posts", toggleItem: a }),
        /* @__PURE__ */ o.jsx(sa, { excludedItems: n, item: "page", label: "Pages", toggleItem: a }),
        /* @__PURE__ */ o.jsx(sa, { excludedItems: n, item: "tag", label: "Tags", toggleItem: a }),
        /* @__PURE__ */ o.jsx(sa, { excludedItems: n, item: "offer,product", label: "Tiers & offers", toggleItem: a }),
        /* @__PURE__ */ o.jsx(sa, { excludedItems: n, item: "api_key,integration,setting,user,webhook", label: "Settings & staff", toggleItem: a })
      ] })
    ] }) }),
    /* @__PURE__ */ o.jsx("div", { className: "w-[200px]", children: /* @__PURE__ */ o.jsx(
      En,
      {
        loadOptions: Ki(A, 500),
        placeholder: "Search staff",
        value: f,
        async: !0,
        defaultOptions: !0,
        isClearable: !0,
        onSelect: (h) => {
          h ? (u(h), s(`history/view/${h.value}`)) : (d(), s("history/view"));
        }
      }
    ) })
  ] });
}, E4 = ({ action: e }) => {
  var a, s, l, A, f, u, d, h;
  const { updateRoute: n } = nt(), t = x4(e);
  if (t) {
    const { group: m, key: v } = t;
    return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      m.slice(0, 1).toUpperCase(),
      m.slice(1),
      m !== v && /* @__PURE__ */ o.jsxs("span", { className: "text-xs", children: [
        " ",
        /* @__PURE__ */ o.jsxs("code", { className: "mb-1 bg-white text-grey-800 dark:bg-grey-900 dark:text-white", children: [
          "(",
          v,
          ")"
        ] })
      ] })
    ] });
  } else if ((a = e.resource) != null && a.title || (s = e.resource) != null && s.name || (l = e.context) != null && l.primary_name) {
    const m = v4(e);
    return m ? /* @__PURE__ */ o.jsx("a", { className: "cursor-pointer font-bold", onClick: (v) => {
      v.preventDefault(), n(m);
    }, children: ((A = e.resource) == null ? void 0 : A.title) || ((f = e.resource) == null ? void 0 : f.name) }) : /* @__PURE__ */ o.jsx(o.Fragment, { children: ((u = e.resource) == null ? void 0 : u.title) || ((d = e.resource) == null ? void 0 : d.name) || ((h = e.context) == null ? void 0 : h.primary_name) });
  } else
    return /* @__PURE__ */ o.jsx("span", { className: "text-grey-500", children: "(unknown)" });
}, M4 = (e) => {
  const t = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).formatToParts(e).reduce((a, { type: s, value: l }) => ({ ...a, [s]: l }), {});
  return `${t.year}-${t.month}-${t.day} ${t.hour}:${t.minute}:${t.second}`;
}, S4 = 200, I4 = xe.create(({ params: e }) => {
  const n = Sn(), { updateRoute: t } = nt(), [a, s] = ue([]), [l, A] = ue(["label"]), { data: f, fetchNextPage: u } = g4({
    searchParams: {
      include: "actor,resource",
      limit: S4.toString(),
      filter: [
        a.length && `event:-[${a.join(",")}]`,
        l.length && `resource_type:-[${l.join(",")}]`,
        (e == null ? void 0 : e.user) && `actor_id:'${e.user}'`
      ].filter(Boolean).join("+")
    },
    getNextPageParams: (m, v) => ({
      ...v,
      filter: [v.filter, m.actions.length && `created_at:<'${M4(new Date(m.actions[m.actions.length - 1].created_at))}'`].join("+")
    }),
    keepPreviousData: !0
  }), d = sn(() => {
    f != null && f.isEnd || u();
  }, [f == null ? void 0 : f.isEnd, u]), h = (m, v, k) => {
    m((b) => k ? b.concat(v) : b.filter((y) => y !== v));
  };
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        t("history");
      },
      cancelLabel: "",
      okLabel: "Close",
      scrolling: !0,
      size: "md",
      stickyFooter: !0,
      stickyHeader: !0,
      testId: "history-modal",
      title: "History",
      topRightContent: /* @__PURE__ */ o.jsx(
        y4,
        {
          excludedEvents: a,
          excludedResources: l,
          toggleEventType: (m, v) => h(s, m, !v),
          toggleResourceType: (m, v) => h(A, m, !v),
          userId: e == null ? void 0 : e.user
        }
      ),
      onOk: () => {
        n.remove(), t("history");
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "relative -mb-8 mt-6", children: /* @__PURE__ */ o.jsx(Hr, { hint: f != null && f.isEnd ? "End of history log" : void 0, children: f != null && f.actions ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(Fb, { offset: 250, onTrigger: d }),
        f == null ? void 0 : f.actions.map((m) => {
          var v, k;
          return !m.skip && /* @__PURE__ */ o.jsx(
            Ba,
            {
              avatar: /* @__PURE__ */ o.jsx(b4, { action: m }),
              detail: [
                new Date(m.created_at).toLocaleDateString("default", { year: "numeric", month: "short", day: "2-digit" }),
                new Date(m.created_at).toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
              ].join(" | "),
              title: /* @__PURE__ */ o.jsxs("div", { className: "text-sm", children: [
                w4(m),
                ip(m) ? "" : ": ",
                !ip(m) && /* @__PURE__ */ o.jsx(E4, { action: m }),
                m.count ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  " ",
                  m.count,
                  " times"
                ] }) : null,
                /* @__PURE__ */ o.jsxs("span", { children: [
                  " — by ",
                  ((v = m.actor) == null ? void 0 : v.name) || ((k = m.actor) == null ? void 0 : k.slug)
                ] })
              ] }),
              separator: !0
            }
          );
        })
      ] }) : /* @__PURE__ */ o.jsx(Qk, { children: "No entries found." }) }) })
    }
  );
}), J4 = xe.create(() => {
  var re, le;
  const e = xe.useModal(), n = ku(), t = ku({
    searchParams: { limit: "all", permissions: "assign" }
  }), a = Bs(), { updateRoute: s } = nt(), l = Ct(null), [A, f] = ue(""), [u, d] = ue(""), [h, m] = ue("contributor"), [v, k] = ue({}), { data: { users: b } = {} } = Uk(), { data: { invites: y } = {} } = Lk(), { mutateAsync: S } = Pk(), T = dt();
  if (Te(() => {
    l.current && l.current.focus();
  }, []), Te(() => {
    u === "saved" && setTimeout(() => {
      d("");
    }, 2e3);
  }, [u]), Te(() => {
    h !== "contributor" && (a != null && a.isLimited("staff")) ? a.errorIfWouldGoOverLimit("staff").then(() => {
      k((ne) => ({ ...ne, role: void 0 }));
    }).catch((ne) => {
      if (ne instanceof Ua) {
        k((ae) => ({ ...ae, role: ne.message }));
        return;
      } else
        throw ne;
    }) : k((ne) => ({ ...ne, role: void 0 }));
  }, [a, h]), !((re = n.data) != null && re.roles) || !((le = t.data) != null && le.roles))
    return null;
  const Q = n.data.roles, B = t.data.roles;
  let K = "Send invitation now";
  u === "saving" ? K = "Sending..." : u === "saved" ? K = "Invite sent!" : u === "error" && (K = "Retry");
  const $ = async () => {
    var ne, ae;
    if (u !== "saving") {
      if (!Qr.isEmail(A)) {
        k({
          email: "Please enter a valid email address."
        });
        return;
      }
      if (b != null && b.some(({ email: j }) => j === A)) {
        k({
          email: "A user with that email address already exists."
        });
        return;
      }
      if (y != null && y.some(({ email: j }) => j === A)) {
        k({
          email: "A user with that email address was already invited."
        });
        return;
      }
      if (!v.role) {
        d("saving");
        try {
          await S({
            email: A,
            roleId: Q.find(({ name: j }) => j.toLowerCase() === h.toLowerCase()).id
          }), d("saved"), tt({
            message: `Invitation successfully sent to ${A}`,
            type: "success"
          }), e.remove(), s("staff?tab=invited");
        } catch (j) {
          d("error");
          let _ = /* @__PURE__ */ o.jsxs("span", { children: [
            /* @__PURE__ */ o.jsx("strong", { children: "Your invitation failed to send." }),
            /* @__PURE__ */ o.jsx("br", {}),
            "If the problem persists, ",
            /* @__PURE__ */ o.jsxs("a", { href: "https://ghost.org/contact", children: [
              /* @__PURE__ */ o.jsx("u", { children: "contact support" }),
              "."
            ] }),
            "."
          ] });
          if (j instanceof zk) {
            let F = j.data;
            ((ae = (ne = F == null ? void 0 : F.errors) == null ? void 0 : ne[0]) == null ? void 0 : ae.type) === "EmailError" && (_ = /* @__PURE__ */ o.jsxs("span", { children: [
              /* @__PURE__ */ o.jsx("strong", { children: "Your invitation failed to send" }),
              /* @__PURE__ */ o.jsx("br", {}),
              "Please check your Mailgun configuration. If the problem persists, ",
              /* @__PURE__ */ o.jsxs("a", { href: "https://ghost.org/contact", children: [
                /* @__PURE__ */ o.jsx("u", { children: "contact support" }),
                "."
              ] })
            ] }));
          }
          tt({
            message: _,
            type: "neutral",
            icon: "warning"
          }), T(j, { withToast: !1 });
          return;
        }
      }
    }
  }, V = [
    {
      hint: "Can create and edit their own posts, but cannot publish. An Editor needs to approve and publish for them.",
      label: "Contributor",
      value: "contributor"
    },
    {
      hint: "A trusted user who can create, edit and publish their own posts, but can’t modify others.",
      label: "Author",
      value: "author"
    },
    {
      hint: "Can invite and manage other Authors and Contributors, as well as edit and publish any posts on the site.",
      label: "Editor",
      value: "editor"
    },
    {
      hint: "Trusted staff user who should be able to manage all content and users, as well as site settings and options.",
      label: "Administrator",
      value: "administrator"
    }
  ].filter((ne) => B.some((ae) => ae.name === ne.label));
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        s("staff");
      },
      cancelLabel: "",
      okLabel: K,
      testId: "invite-user-modal",
      title: "Invite a new staff user",
      width: 540,
      onOk: $,
      children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-6 py-4", children: [
        /* @__PURE__ */ o.jsx("p", { children: "Send an invitation for a new person to create a staff account on your site, and select a role that matches what you’d like them to be able to do." }),
        /* @__PURE__ */ o.jsx(
          Re,
          {
            error: !!v.email,
            hint: v.email,
            inputRef: l,
            placeholder: "jamie@example.com",
            title: "Email address",
            value: A,
            onChange: (ne) => {
              f(ne.target.value);
            },
            onKeyDown: () => k((ne) => ({ ...ne, email: void 0 }))
          }
        ),
        /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(
          Wu,
          {
            error: !!v.role,
            hint: v.role,
            id: "role",
            options: V,
            selectedOption: h,
            separator: !0,
            title: "Role",
            onSelect: (ne) => {
              m(ne);
            }
          }
        ) })
      ] })
    }
  );
}), op = ({ baseUrl: e, item: n, updateItem: t, clearError: a, labelPlaceholder: s, unstyled: l, textFieldClasses: A, action: f, className: u, ...d }) => /* @__PURE__ */ o.jsxs("div", { className: ft("flex w-full items-start gap-3", u), "data-testid": "navigation-item-editor", ...d, children: [
  /* @__PURE__ */ o.jsx("div", { className: "flex flex-1 pt-1", children: /* @__PURE__ */ o.jsx(
    Re,
    {
      className: A,
      containerClassName: "grow",
      error: !!n.errors.label,
      hint: n.errors.label,
      placeholder: s,
      title: "Label",
      unstyled: l,
      value: n.label,
      hideTitle: !0,
      onChange: (h) => t == null ? void 0 : t({ label: h.target.value }),
      onKeyDown: () => a == null ? void 0 : a("label")
    }
  ) }),
  /* @__PURE__ */ o.jsx("div", { className: "flex flex-1 pt-1", children: /* @__PURE__ */ o.jsx(
    Ip,
    {
      baseUrl: e,
      className: A,
      containerClassName: "grow",
      error: !!n.errors.url,
      hint: n.errors.url,
      title: "URL",
      unstyled: l,
      value: n.url,
      hideTitle: !0,
      onChange: (h) => t == null ? void 0 : t({ url: h || "" }),
      onKeyDown: () => a == null ? void 0 : a("url")
    }
  ) }),
  f
] }), lp = ({ baseUrl: e, navigation: n }) => /* @__PURE__ */ o.jsxs("div", { className: "w-full pt-2", children: [
  /* @__PURE__ */ o.jsx(
    Jp,
    {
      items: n.items,
      itemSeparator: !1,
      renderItem: (t) => /* @__PURE__ */ o.jsx(
        op,
        {
          action: /* @__PURE__ */ o.jsx(Ye, { className: "mt-1 self-center", icon: "trash", iconColorClass: "dark:text-white", size: "sm", onClick: () => n.removeItem(t.id) }),
          baseUrl: e,
          clearError: (a) => n.clearError(t.id, a),
          item: t,
          updateItem: (a) => n.updateItem(t.id, a)
        }
      ),
      onMove: n.moveItem
    }
  ),
  /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-grey-300 dark:text-grey-900 mt-1", name: "add", size: "sm" }),
    /* @__PURE__ */ o.jsx(
      op,
      {
        action: /* @__PURE__ */ o.jsx(Ye, { className: "mx-2 mt-1 self-center rounded bg-green p-1", "data-testid": "add-button", icon: "add", iconColorClass: "text-white", size: "sm", unstyled: !0, onClick: n.addItem }),
        baseUrl: e,
        className: "mt-1",
        clearError: (t) => n.clearError(n.newItem.id, t),
        "data-testid": "new-navigation-item",
        item: n.newItem,
        labelPlaceholder: "New item label",
        updateItem: n.setNewItem
      }
    )
  ] })
] }), Ap = ({ items: e, setItems: n }) => {
  const t = (v) => !!(v.label && !v.label.match(/^\s*$/) || v.url !== "/"), a = Yp({
    items: e.map((v) => ({ ...v, errors: {} })),
    setItems: (v) => n(v.map(({ url: k, label: b }) => ({ url: k, label: b }))),
    blank: { label: "", url: "/", errors: {} },
    canAddNewItem: t
  }), s = new RegExp(/^(\/|#|[a-zA-Z0-9-]+:)/), l = (v) => {
    const k = {};
    return (!v.label || v.label.match(/^\s*$/)) && (k.label = "You must specify a label"), (!v.url || v.url.match(/\s/) || !Qr.isURL(v.url, { require_protocol: !0 }) && !v.url.match(s)) && (k.url = "You must specify a valid URL or relative path"), k;
  }, A = (v, k) => {
    const b = a.items.find((y) => y.id === v);
    a.updateItem(v, { ...b.item, ...k });
  }, f = () => {
    const v = l(a.newItem);
    Object.values(v).some((k) => k) ? a.setNewItem({ ...a.newItem, errors: v }) : a.addItem();
  }, u = (v) => {
    a.removeItem(v);
  }, d = (v, k) => {
    a.moveItem(v, k);
  }, h = "new", m = (v, k) => {
    if (v === h)
      a.setNewItem({ ...a.newItem, errors: { ...a.newItem.errors, [k]: void 0 } });
    else {
      const b = a.items.find((y) => y.id === v).item;
      a.updateItem(v, { ...b, errors: { ...b.errors, [k]: void 0 } });
    }
  };
  return {
    items: a.items.map(({ item: v, id: k }) => ({ ...v, id: k })),
    updateItem: A,
    addItem: f,
    removeItem: u,
    moveItem: d,
    newItem: { ...a.newItem, id: h },
    setNewItem: (v) => a.setNewItem({ ...a.newItem, ...v }),
    clearError: m,
    validate: () => {
      let v = !0;
      if (a.items.forEach(({ item: k, id: b }) => {
        let y = l(k);
        Object.values(y).some((S) => S) && (v = !1, a.updateItem(b, { ...k, errors: y }));
      }), t(a.newItem)) {
        const k = l(a.newItem);
        Object.values(k).some((b) => b) && (v = !1, a.setNewItem({ ...a.newItem, errors: k }));
      }
      return v;
    }
  };
}, T4 = xe.create(() => {
  const e = Sn(), { updateRoute: n } = nt(), {
    localSettings: t,
    updateSetting: a,
    saveState: s,
    handleSave: l,
    siteData: A
  } = Ha(), [f, u] = Et(
    t,
    ["navigation", "secondary_navigation"]
  ).map((k) => JSON.parse(k || "[]")), d = Ap({
    items: f,
    setItems: (k) => {
      a("navigation", JSON.stringify(k));
    }
  }), h = Ap({
    items: u,
    setItems: (k) => a("secondary_navigation", JSON.stringify(k))
  }), [m, v] = ue("primary-nav");
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        n("navigation");
      },
      buttonsDisabled: s === "saving",
      dirty: t.some((k) => k.dirty),
      okLabel: s === "saving" ? "Saving..." : "OK",
      scrolling: !0,
      size: "lg",
      stickyFooter: !0,
      testId: "navigation-modal",
      title: "Navigation",
      onOk: async () => {
        d.validate() && h.validate() && (await l(), e.remove(), n("navigation"));
      },
      children: /* @__PURE__ */ o.jsx("div", { className: "mb-1 mt-6", children: /* @__PURE__ */ o.jsx(
        ja,
        {
          selectedTab: m,
          tabs: [
            {
              id: "primary-nav",
              title: "Primary",
              contents: /* @__PURE__ */ o.jsx(lp, { baseUrl: A.url, navigation: d })
            },
            {
              id: "secondary-nav",
              title: "Secondary",
              contents: /* @__PURE__ */ o.jsx(lp, { baseUrl: A.url, navigation: h })
            }
          ],
          onTabChange: v
        }
      ) })
    }
  );
  senderName: e,
  senderEmail: n,
  senderReplyTo: t,
  headerImage: a,
  headerIcon: s,
  headerTitle: l,
  headerSubtitle: A,
  showPostTitleSection: f,
  titleAlignment: u,
  titleFontCategory: d,
  bodyFontCategory: h,
  authorPlaceholder: m,
  showCommentCta: v,
  showFeatureImage: k,
  showFeedback: b,
  showLatestPosts: y,
  showSubscriptionDetails: S,
  siteTitle: T,
  footerContent: Q,
  showBadge: B,
  backgroundColor: K,
  borderColor: $,
  secondaryBorderColor: Y,
  textColor: V,
  secondaryTextColor: re,
  titleColor: le
}) => {
  const ne = s || l;
  ct();
  const ae = Aa("newEmailAddresses"), j = (/* @__PURE__ */ new Date()).toLocaleDateString("default", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }), _ = (/* @__PURE__ */ new Date()).getFullYear(), F = K && Rr(K).hex().toLowerCase() === "#ffffff";
  let W;
  return W = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("p", { className: "leading-normal", children: [
      /* @__PURE__ */ o.jsx("span", { className: "font-semibold text-grey-900", children: "From: " }),
      /* @__PURE__ */ o.jsxs("span", { children: [
        e,
        " (",
        n,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("p", { className: "leading-normal", children: [
      /* @__PURE__ */ o.jsx("span", { className: "font-semibold text-grey-900", children: "Reply-to: " }),
      t || n
    ] })
  ] }), /* @__PURE__ */ o.jsx("div", { className: "relative flex grow flex-col", children: /* @__PURE__ */ o.jsx("div", { className: "absolute inset-0 m-5 flex items-center justify-center", children: /* @__PURE__ */ o.jsxs("div", { className: "mx-auto my-0 flex max-h-full w-full max-w-[700px] flex-col overflow-hidden rounded-[4px] text-black shadow-sm", children: [
    /* @__PURE__ */ o.jsx("div", { className: "flex-column flex min-h-[77px] justify-center rounded-t-sm border-b border-grey-200 bg-white px-6 text-sm text-grey-700", children: W }),
    /* @__PURE__ */ o.jsx("div", { className: "overflow-y-auto p-4 text-sm", style: { backgroundColor: K }, children: /* @__PURE__ */ o.jsxs("div", { className: "border border-transparent px-16", style: { borderColor: $ }, children: [
      a && /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("img", { alt: "", className: "mt-6 block", src: a }) }),
      ne && /* @__PURE__ */ o.jsxs("div", { className: "border-b border-grey-200 py-12", style: { borderColor: Y }, children: [
        s && /* @__PURE__ */ o.jsx("img", { alt: "", className: "mx-auto mb-2 h-10 w-10", role: "presentation", src: s }),
        l && /* @__PURE__ */ o.jsx("h4", { className: "mb-1 text-center text-[1.6rem] font-bold uppercase leading-tight tracking-tight text-grey-900", style: { color: V }, children: l }),
        A && /* @__PURE__ */ o.jsx("h5", { className: "mb-1 text-center text-[1.4rem] font-normal leading-tight text-grey-600", style: { color: re }, children: A })
      ] }),
      f && /* @__PURE__ */ o.jsxs("div", { className: ft("flex flex-col pb-10 pt-12", u === "center" ? "items-center" : "items-start"), children: [
        /* @__PURE__ */ o.jsx("h2", { className: ft(
          "pb-4 text-5xl font-bold leading-supertight text-black",
          d === "serif" && "font-serif",
          u === "center" ? "text-center" : "text-left"
        ), style: { color: le }, children: "Your email newsletter" }),
        /* @__PURE__ */ o.jsxs("div", { className: ft(
          "flex w-full justify-between text-center text-sm leading-none tracking-[0.1px] text-grey-600",
          u === "center" ? "flex-col" : "flex-row"
        ), children: [
          /* @__PURE__ */ o.jsxs("p", { className: "pb-2", style: { color: re }, children: [
            "By ",
            m,
            /* @__PURE__ */ o.jsx("span", { className: "before:pl-0.5 before:pr-1 before:content-['•']", children: j })
          ] }),
          /* @__PURE__ */ o.jsx("p", { className: "pb-2 underline", style: { color: re }, children: /* @__PURE__ */ o.jsx("span", { children: "View in browser" }) })
        ] })
      ] }),
      k && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("div", { className: "h-[300px] w-full max-w-[600px] bg-grey-200 bg-cover bg-no-repeat", children: /* @__PURE__ */ o.jsx("img", { alt: "Feature", className: "min-h-full min-w-full shrink-0", src: C4 }) }),
        /* @__PURE__ */ o.jsx("div", { className: "mt-1 w-full max-w-[600px] pb-[30px] text-center text-[1.3rem] text-grey-600", style: { color: re }, children: "Feature image caption" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: ft("max-w-[600px] border-b border-grey-200 py-5 text-[1.6rem] leading-[1.7] text-black", h === "serif" && "font-serif"), style: { borderColor: Y }, children: [
        /* @__PURE__ */ o.jsx("p", { className: "mb-5", style: { color: V }, children: "This is what your content will look like when you send one of your posts as an email newsletter to your subscribers." }),
        /* @__PURE__ */ o.jsx("p", { className: "mb-5", style: { color: V }, children: "Over there on the left you'll see some settings that allow you to customize the look and feel of this template to make it perfectly suited to your brand. Email templates are exceptionally finnicky to make, but we've spent a long time optimising this one to make it work beautifully across devices, email clients and content types." }),
        /* @__PURE__ */ o.jsx("p", { className: "mb-5", style: { color: V }, children: "So, you can trust that every email you send with Ghost will look great and work well. Just like the rest of your site." })
      ] }),
      (b || v) && /* @__PURE__ */ o.jsx("div", { className: "grid gap-5 border-b border-grey-200 px-6 py-5", style: { borderColor: Y }, children: /* @__PURE__ */ o.jsxs("div", { className: "flex justify-center gap-3", children: [
        b && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { className: "pointer-events-none cursor-default whitespace-nowrap rounded-[2.2rem] bg-transparent font-semibold", type: "button", children: /* @__PURE__ */ o.jsxs("span", { className: "inline-flex items-center gap-2 px-[18px] py-[7px]", style: { color: V }, children: [
            /* @__PURE__ */ o.jsx(Qt, { colorClass: "", name: "thumbs-up", size: "md" }),
            /* @__PURE__ */ o.jsx("span", { children: "More like this" })
          ] }) }),
          /* @__PURE__ */ o.jsx("button", { className: "pointer-events-none cursor-default whitespace-nowrap rounded-[2.2rem] bg-transparent font-semibold", type: "button", children: /* @__PURE__ */ o.jsxs("span", { className: "inline-flex items-center gap-2 px-[18px] py-[7px]", style: { color: V }, children: [
            /* @__PURE__ */ o.jsx(Qt, { colorClass: "", name: "thumbs-down" }),
            /* @__PURE__ */ o.jsx("span", { children: "Less like this" })
          ] }) })
        ] }),
        v && /* @__PURE__ */ o.jsx("button", { className: "pointer-events-none cursor-default whitespace-nowrap rounded-[2.2rem] bg-transparent font-semibold", type: "button", children: /* @__PURE__ */ o.jsxs("span", { className: "inline-flex items-center gap-2 px-[18px] py-[7px]", style: { color: V }, children: [
          /* @__PURE__ */ o.jsx(Qt, { colorClass: "", name: "comment" }),
          /* @__PURE__ */ o.jsx("span", { children: "Comment" })
        ] }) })
      ] }) }),
      y && /* @__PURE__ */ o.jsxs("div", { className: "border-b border-grey-200 py-6", style: { borderColor: Y }, children: [
        /* @__PURE__ */ o.jsx("h3", { className: "mb-4 mt-2 pb-1 text-[1.2rem] font-semibold uppercase tracking-wide", style: { color: le }, children: "Keep reading" }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between gap-4 py-2", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h4", { className: "mb-1 mt-0.5 text-[1.9rem]", style: { color: V }, children: "The three latest posts published on your site" }),
            /* @__PURE__ */ o.jsx("p", { className: "m-0 text-base text-grey-600", style: { color: re }, children: "Posts sent as an email only will never be shown here." })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "aspect-square h-auto w-full max-w-[100px] bg-grey-200 bg-cover bg-no-repeat", children: /* @__PURE__ */ o.jsx("img", { alt: "Latest post", src: D4 }) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between gap-4 py-2", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h4", { className: "mb-1 mt-0.5 text-[1.9rem]", style: { color: V }, children: "Displayed at the bottom of each newsletter" }),
            /* @__PURE__ */ o.jsx("p", { className: "m-0 text-base text-grey-600", style: { color: re }, children: "Giving your readers one more place to discover your stories." })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "aspect-square h-auto w-full max-w-[100px] bg-grey-200 bg-cover bg-no-repeat", children: /* @__PURE__ */ o.jsx("img", { alt: "Latest post", src: R4 }) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between gap-4 py-2", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h4", { className: "mb-1 mt-0.5 text-[1.9rem]", style: { color: V }, children: "To keep your work front and center" }),
            /* @__PURE__ */ o.jsx("p", { className: "m-0 text-base text-grey-600", style: { color: re }, children: "Making sure that your audience stays engaged." })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "aspect-square h-auto w-full max-w-[100px] bg-grey-200 bg-cover bg-no-repeat", children: /* @__PURE__ */ o.jsx("img", { alt: "Latest post", src: j4 }) })
        ] })
      ] }),
      S && /* @__PURE__ */ o.jsxs("div", { className: "border-b border-grey-200 py-8", style: { borderColor: Y }, children: [
        /* @__PURE__ */ o.jsx("h4", { className: "mb-3 text-[1.2rem] uppercase tracking-wide", style: { color: le }, children: "Subscription details" }),
        /* @__PURE__ */ o.jsx("p", { className: "m-0 mb-4 text-base", style: { color: V }, children: "You are receiving this because you are a paid subscriber to The Local Host. Your subscription will renew on 17 Jul 2024." }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "shrink-0 text-base", children: [
            /* @__PURE__ */ o.jsx("p", { style: { color: V }, children: "Name: Jamie Larson" }),
            /* @__PURE__ */ o.jsx("p", { style: { color: V }, children: "Email: jamie@example.com" }),
            /* @__PURE__ */ o.jsx("p", { style: { color: V }, children: "Member since: 17 July 2023" })
          ] }),
          /* @__PURE__ */ o.jsx("span", { className: ft("w-full self-end whitespace-nowrap text-right text-base font-semibold", F ? "text-white underline" : "text-pink"), children: "Manage subscription →" })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center pt-10", children: [
        /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: Q || "" }, className: "text break-words px-8 py-3 text-center text-[1.3rem] leading-base text-grey-600", style: { color: re } }),
        /* @__PURE__ */ o.jsxs("div", { className: "px-8 pb-14 pt-3 text-center text-[1.3rem] text-grey-600", children: [
          /* @__PURE__ */ o.jsxs("span", { style: { color: re }, children: [
            T,
            " © ",
            _,
            " — "
          ] }),
          /* @__PURE__ */ o.jsx("span", { className: "pointer-events-none cursor-auto underline", style: { color: re }, children: "Unsubscribe" })
        ] }),
        B && /* @__PURE__ */ o.jsx("div", { className: "flex flex-col items-center pb-[40px] pt-[10px]", children: /* @__PURE__ */ o.jsxs("a", { className: "pointer-events-none inline-flex cursor-auto items-center px-2 py-1 text-[1.25rem] font-semibold tracking-tight text-grey-900", href: "https://ghost.org", children: [
          /* @__PURE__ */ o.jsx(Yk, { className: "mr-[6px] h-4 w-4" }),
          /* @__PURE__ */ o.jsx("span", { children: "Powered by Ghost" })
        ] }) })
      ] })
    ] }) })
  ] }) }) });
}, pA = (e, n, t) => Yi(n) && !Yu(n) && t ? t : e.sender_email || t || "", Uu = (e, n, t, a) => e.sender_reply_to === "newsletter" ? Yi(n) || n.labs.newEmailAddresses ? "" : pA(e, n, a) : e.sender_reply_to === "support" ? t || a || "" : e.sender_reply_to, Q4 = ({ newsletter: e }) => {
  const n = Aa("emailCustomization"), { currentUser: t, settings: a, siteData: s, config: l } = ct(), [A, f, u, d, h] = Et(a, ["title", "icon", "comments_enabled", "support_email_address", "default_email_address"]);
  let m = null;
  e.show_header_title ? m = A || null : e.show_header_name && (m = e.name);
  const v = e.show_header_title && e.show_header_name ? e.name : void 0, k = e.show_comment_cta && u !== "off", b = e.feedback_enabled && l.labs.audienceFeedback, y = () => {
    const Y = e.background_color;
    return /#([0-9a-f]{3}){1,2}$/i.test(Y) ? Y : Y === "dark" ? "#15212a" : "#ffffff";
  }, S = () => {
    const Y = e.border_color;
    return /#([0-9a-f]{3}){1,2}$/i.test(Y || "") ? Y : Y === "auto" ? Rr(y()).hex() : Y === "accent" ? s.accent_color : null;
  }, T = Rr(y()).alpha(0.12).toString(), Q = () => {
    const Y = e.title_color;
    return /#([0-9a-f]{3}){1,2}$/i.test(Y || "") ? Y : Y === "accent" ? s.accent_color : Rr(y()).hex();
  }, B = Rr(y()).hex(), K = Rr(y()).alpha(0.5).toString(), $ = n ? {
    backgroundColor: y(),
    borderColor: S() || void 0,
    secondaryBorderColor: T,
    titleColor: Q() || void 0,
    textColor: B,
    secondaryTextColor: K
  } : {};
  return /* @__PURE__ */ o.jsx(
    O4,
    {
      authorPlaceholder: t.name || t.email,
      backgroundColor: $.backgroundColor || "#ffffff",
      bodyFontCategory: e.body_font_category,
      footerContent: e.footer_content,
      headerIcon: e.show_header_icon ? f : void 0,
      headerImage: e.header_image,
      headerSubtitle: v,
      headerTitle: m,
      senderEmail: pA(e, l, h),
      senderName: e.sender_name || A,
      senderReplyTo: Uu(e, l, d, h),
      showBadge: e.show_badge,
      showCommentCta: k,
      showFeatureImage: e.show_feature_image,
      showFeedback: b,
      showLatestPosts: e.show_latest_posts,
      showPostTitleSection: e.show_post_title_section,
      showSubscriptionDetails: e.show_subscription_details,
      siteTitle: A,
      titleAlignment: e.title_alignment,
      titleFontCategory: e.title_font_category,
      ...$
    }
  );
}, N4 = ({ newsletter: e, updateNewsletter: n, errors: t, clearError: a }) => {
  const { settings: s, config: l } = ct(), [A, f] = Et(s, ["default_email_address", "support_email_address"]), u = Aa("newEmailAddresses"), [d, h] = ue(Uu(e, l, f, A) || "");
  let m = pA(e, l, A);
  const v = On(() => [
    { label: `Newsletter address (${m})`, value: "newsletter" },
    { label: `Support address (${f})`, value: "support" }
  ], [m, f]);
  Te(() => {
    !Yi(l) && !u && (v.find((S) => S.value === e.sender_reply_to) || n({ sender_reply_to: "newsletter" }));
  }, [l, v, n, e.sender_reply_to, u]);
  const k = sn((y) => {
    h(y.target.value), n({ sender_reply_to: y.target.value || "newsletter" });
  }, [n, h]);
  if (!Yi(l) && !u)
    return /* @__PURE__ */ o.jsx(
      En,
      {
        options: v,
        selectedOption: v.find((y) => y.value === e.sender_reply_to),
        title: "Reply-to email",
        onSelect: (y) => n({ sender_reply_to: y == null ? void 0 : y.value })
      }
    );
  const b = () => {
    const y = Uu(e, l, f, A) || "";
    h(y);
  };
  return /* @__PURE__ */ o.jsx(
    Re,
    {
      error: !!t.sender_reply_to,
      hint: t.sender_reply_to,
      placeholder: m || "",
      title: "Reply-to email",
      value: d,
      onBlur: b,
      onChange: k,
      onKeyDown: () => a("sender_reply_to")
    }
  );
}, H4 = ({ newsletter: e, onlyOne: n, updateNewsletter: t, validate: a, errors: s, clearError: l }) => {
  const { updateRoute: A } = nt(), { mutateAsync: f } = Tp(), u = Bs(), { settings: d, siteData: h, config: m } = ct(), [v, k] = Et(d, ["icon", "default_email_address", "support_email_address"]), { mutateAsync: b } = Qs(), [y, S] = ue("generalSettings"), T = Aa("emailCustomization"), { localSettings: Q } = Ha(), [B] = Et(Q, ["title"]), K = dt();
  let $ = pA(e, m, k);
  const Y = [
    { value: "serif", label: "Elegant serif", className: "font-serif" },
    { value: "sans_serif", label: "Clean sans-serif" }
  ], V = () => e.background_color === "dark" ? !0 : e.background_color === "light" ? !1 : Rr(e.background_color).hex().toLowerCase() === "#ffffff", re = async () => {
    if (e.status === "active")
      xe.show(Kt, {
        title: "Archive newsletter",
        prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsxs("p", { children: [
            "Your newsletter ",
            /* @__PURE__ */ o.jsx("strong", { children: e.name }),
            " will no longer be visible to members or available as an option when publishing new posts."
          ] }),
          /* @__PURE__ */ o.jsx("p", { children: "Existing posts previously sent as this newsletter will remain unchanged." })
        ] }),
        okLabel: "Archive",
        okColor: "red",
        onOk: async (j) => {
          try {
            await f({ ...e, status: "archived" }), j == null || j.remove(), tt({
              type: "success",
              message: "Newsletter archived successfully"
            });
          } catch (_) {
            K(_);
          }
        }
      });
    else {
      try {
        await (u == null ? void 0 : u.errorIfWouldGoOverLimit("newsletters"));
      } catch (j) {
        if (j instanceof Ua) {
          xe.show(_i, {
            prompt: j.message || "Your current plan doesn't support more newsletters.",
            onOk: () => A({ route: "/pro", isExternal: !0 })
          });
          return;
        } else
          throw j;
      }
      xe.show(Kt, {
        title: "Reactivate newsletter",
        prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          "Reactivating ",
          /* @__PURE__ */ o.jsx("strong", { children: e.name }),
          " will immediately make it visible to members and re-enable it as an option when publishing new posts."
        ] }),
        okLabel: "Reactivate",
        onOk: async (j) => {
          await f({ ...e, status: "active" }), j == null || j.remove(), tt({
            type: "success",
            message: "Newsletter reactivated successfully"
          });
        }
      });
    }
  }, le = () => {
    if (!Yi(m))
      return /* @__PURE__ */ o.jsx(
        Re,
        {
          error: !!s.sender_email,
          hint: s.sender_email,
          placeholder: $ || "",
          title: "Sender email address",
          value: e.sender_email || "",
          onChange: (j) => t({ sender_email: j.target.value }),
          onKeyDown: () => l("sender_email")
        }
      );
    if (Yu(m))
      return /* @__PURE__ */ o.jsx(
        Re,
        {
          error: !!s.sender_email,
          hint: s.sender_email,
          placeholder: k,
          title: "Sender email address",
          value: e.sender_email || "",
          onChange: (j) => {
            t({ sender_email: j.target.value });
          },
          onKeyDown: () => l("sender_email")
        }
      );
  }, ne = [
    {
      id: "generalSettings",
      title: "General",
      contents: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs(yt, { className: "mt-6", gap: "sm", margins: "lg", title: "Name and description", children: [
          /* @__PURE__ */ o.jsx(
            Re,
            {
              error: !!s.name,
              hint: s.name,
              placeholder: "Weekly Roundup",
              title: "Name",
              value: e.name || "",
              onChange: (j) => t({ name: j.target.value }),
              onKeyDown: () => l("name")
            }
          ),
          /* @__PURE__ */ o.jsx(Na, { rows: 2, title: "Description", value: e.description || "", onChange: (j) => t({ description: j.target.value }) })
        ] }),
        /* @__PURE__ */ o.jsxs(yt, { className: "mt-6", gap: "sm", margins: "lg", title: "Email info", children: [
          /* @__PURE__ */ o.jsx(Re, { placeholder: B, title: "Sender name", value: e.sender_name || "", onChange: (j) => t({ sender_name: j.target.value }) }),
          le(),
          /* @__PURE__ */ o.jsx(N4, { clearError: l, errors: s, newsletter: e, updateNewsletter: t, validate: a })
        ] }),
        /* @__PURE__ */ o.jsx(yt, { className: "mt-6", gap: "sm", margins: "lg", title: "Member settings", children: /* @__PURE__ */ o.jsx(
          mt,
          {
            checked: e.subscribe_on_signup,
            direction: "rtl",
            label: "Subscribe new members on signup",
            labelStyle: "value",
            onChange: (j) => t({ subscribe_on_signup: j.target.checked })
          }
        ) }),
        /* @__PURE__ */ o.jsx(Cs, {}),
        /* @__PURE__ */ o.jsxs("div", { className: "my-5 flex w-full items-start", children: [
          /* @__PURE__ */ o.jsx("span", { children: /* @__PURE__ */ o.jsx(Qt, { className: "mr-2 mt-[-1px]", colorClass: "text-red", name: "heart" }) }),
          /* @__PURE__ */ o.jsx(yt, { marginBottom: !1, children: /* @__PURE__ */ o.jsx(
            mt,
            {
              checked: e.show_badge,
              direction: "rtl",
              label: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm md:text-base", children: "Promote independent publishing" }),
                /* @__PURE__ */ o.jsx("span", { className: "text-[11px] leading-tight text-grey-700 md:text-xs md:leading-tight", children: "Show you’re a part of the indie publishing movement with a small badge in the footer" })
              ] }),
              labelStyle: "value",
              onChange: (j) => t({ show_badge: j.target.checked })
            }
          ) })
        ] }),
        /* @__PURE__ */ o.jsx(Cs, {}),
        /* @__PURE__ */ o.jsx("div", { className: "mb-5 mt-10", children: e.status === "active" ? !n && /* @__PURE__ */ o.jsx(Ye, { color: "red", label: "Archive newsletter", link: !0, onClick: re }) : /* @__PURE__ */ o.jsx(Ye, { color: "green", label: "Reactivate newsletter", link: !0, onClick: re }) })
      ] })
    },
    {
      id: "design",
      title: "Design",
      contents: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs(yt, { className: "mt-6", gap: "sm", margins: "lg", title: "Header", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(st, { className: "mb-2", level: 6, children: "Header image" }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "flex-column flex gap-1", children: [
              /* @__PURE__ */ o.jsx(
                Nr,
                {
                  deleteButtonClassName: "!top-1 !right-1",
                  height: e.header_image ? "66px" : "64px",
                  id: "logo",
                  imageURL: e.header_image || void 0,
                  onDelete: () => {
                    t({ header_image: null });
                  },
                  onUpload: async (j) => {
                    try {
                      const _ = jr(await b({ file: j }));
                      t({ header_image: _ });
                    } catch (_) {
                      K(_);
                    }
                  },
                  children: /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-grey-700 dark:text-grey-300", name: "picture" })
                }
              ),
              /* @__PURE__ */ o.jsx(la, { children: "1200x600, optional" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs(Pl, { children: [
            v && /* @__PURE__ */ o.jsx(
              mt,
              {
                checked: e.show_header_icon,
                direction: "rtl",
                label: "Publication icon",
                onChange: (j) => t({ show_header_icon: j.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              mt,
              {
                checked: e.show_header_title,
                direction: "rtl",
                label: "Publication title",
                onChange: (j) => t({ show_header_title: j.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              mt,
              {
                checked: e.show_header_name,
                direction: "rtl",
                label: "Newsletter name",
                onChange: (j) => t({ show_header_name: j.target.checked })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs(yt, { className: "mt-6", gap: "sm", margins: "lg", title: "Body", children: [
          T && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsx(
              Li,
              {
                direction: "rtl",
                swatches: [
                  {
                    hex: "#f0f0f0",
                    title: "Light grey"
                  },
                  {
                    hex: "#ffffff",
                    value: "light",
                    title: "White"
                  }
                ],
                title: "Background color",
                value: e.background_color || "light",
                onChange: (j) => t({ background_color: j })
              }
            ),
            /* @__PURE__ */ o.jsx(
              Li,
              {
                clearButtonValue: null,
                direction: "rtl",
                swatches: [
                  {
                    hex: h.accent_color,
                    value: "accent",
                    title: "Accent"
                  },
                  {
                    hex: V() ? "#ffffff" : "#000000",
                    value: "auto",
                    title: "Auto"
                  },
                  {
                    value: null,
                    title: "Transparent",
                    hex: "#00000000"
                  }
                ],
                title: "Border color",
                value: e.border_color,
                onChange: (j) => t({ border_color: j })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            mt,
            {
              checked: e.show_post_title_section,
              direction: "rtl",
              label: "Post title",
              labelStyle: "heading",
              onChange: (j) => t({ show_post_title_section: j.target.checked })
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: e.show_post_title_section ? "mt-[-16px] flex items-end" : "hidden", children: [
            /* @__PURE__ */ o.jsx("div", { className: "w-full pr-4", children: /* @__PURE__ */ o.jsx(
              En,
              {
                disabled: !e.show_post_title_section,
                options: Y,
                selectedOption: Y.find((j) => j.value === e.title_font_category),
                onSelect: (j) => t({ title_font_category: j == null ? void 0 : j.value })
              }
            ) }),
            /* @__PURE__ */ o.jsx(
              Hl,
              {
                buttons: [
                  {
                    icon: "align-left",
                    label: "Align left",
                    hideLabel: !0,
                    link: !1,
                    size: "sm",
                    color: (e.title_alignment === "left", "clear"),
                    iconColorClass: e.title_alignment === "left" ? "text-grey-900" : "text-grey-500",
                    onClick: () => t({ title_alignment: "left" }),
                    disabled: !e.show_post_title_section
                  },
                  {
                    icon: "align-center",
                    label: "Align center",
                    hideLabel: !0,
                    link: !1,
                    size: "sm",
                    color: (e.title_alignment === "center", "clear"),
                    iconColorClass: e.title_alignment === "center" ? "text-grey-900" : "text-grey-500",
                    onClick: () => t({ title_alignment: "center" }),
                    disabled: !e.show_post_title_section
                  }
                ],
                className: "mb-1 !gap-0"
              }
            )
          ] }),
          T && /* @__PURE__ */ o.jsx(
            Li,
            {
              direction: "rtl",
              swatches: [
                {
                  value: "accent",
                  title: "Accent",
                  hex: h.accent_color
                },
                {
                  value: null,
                  title: "Auto",
                  hex: V() ? "#ffffff" : "#000000"
                }
              ],
              title: "Heading color",
              value: e.title_color,
              onChange: (j) => t({ title_color: j })
            }
          ),
          /* @__PURE__ */ o.jsx(
            En,
            {
              options: Y,
              selectedOption: Y.find((j) => j.value === e.body_font_category),
              testId: "body-font-select",
              title: "Body style",
              onSelect: (j) => t({ body_font_category: j == null ? void 0 : j.value })
            }
          ),
          /* @__PURE__ */ o.jsx(
            mt,
            {
              checked: e.show_feature_image,
              direction: "rtl",
              label: "Feature image",
              onChange: (j) => t({ show_feature_image: j.target.checked })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs(yt, { className: "mt-6", gap: "sm", margins: "lg", title: "Footer", children: [
          /* @__PURE__ */ o.jsxs(Pl, { gap: "lg", children: [
            /* @__PURE__ */ o.jsx(
              mt,
              {
                checked: e.feedback_enabled,
                direction: "rtl",
                label: "Ask your readers for feedback",
                onChange: (j) => t({ feedback_enabled: j.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              mt,
              {
                checked: e.show_comment_cta,
                direction: "rtl",
                label: "Add a link to your comments",
                onChange: (j) => t({ show_comment_cta: j.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              mt,
              {
                checked: e.show_latest_posts,
                direction: "rtl",
                label: "Share your latest posts",
                onChange: (j) => t({ show_latest_posts: j.target.checked })
              }
            ),
            /* @__PURE__ */ o.jsx(
              mt,
              {
                checked: e.show_subscription_details,
                direction: "rtl",
                label: "Show subscription details",
                onChange: (j) => t({ show_subscription_details: j.target.checked })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            Xu,
            {
              hint: "Any extra information or legal text",
              nodes: "MINIMAL_NODES",
              placeholder: " ",
              title: "Email footer",
              value: e.footer_content || "",
              onChange: (j) => t({ footer_content: j })
            }
          )
        ] })
      ] })
    }
  ], ae = (j) => {
    S(j);
  };
  return /* @__PURE__ */ o.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ o.jsx("div", { className: "px-7 pb-7 pt-5", children: /* @__PURE__ */ o.jsx(ja, { selectedTab: y, tabs: ne, onTabChange: ae }) }) });
}, B4 = ({ newsletter: e, onlyOne: n }) => {
  const { config: t } = ct(), { mutateAsync: a } = Tp(), { updateRoute: s } = nt(), l = dt(), { formState: A, saveState: f, updateForm: u, setFormState: d, handleSave: h, validate: m, errors: v, clearError: k, okProps: b } = qn({
    initialState: e,
    savingDelay: 500,
    onSave: async () => {
      const { meta: { sent_email_verification: [Q] = [] } = {} } = await a(A);
      let B;
      Q && Q === "sender_email" ? B = /* @__PURE__ */ o.jsx("div", { children: "We‘ve sent a confirmation email to the new address." }) : Q && Q === "sender_reply_to" && (B = /* @__PURE__ */ o.jsx("div", { children: "We‘ve sent a confirmation email to the new address." })), B && tt({
        icon: "email",
        message: B,
        type: "neutral"
      });
    },
    onSaveError: l,
    onValidate: () => {
      const Q = {};
      return A.name || (Q.name = "Name is required"), A.sender_email && !Qr.isEmail(A.sender_email) ? Q.sender_email = "Invalid email" : A.sender_email && Yu(t) && A.sender_email.split("@")[1] !== gh(t) && (Q.sender_email = `Email must end with @${gh(t)}`), A.sender_reply_to && !Qr.isEmail(A.sender_reply_to) && !["newsletter", "support"].includes(A.sender_reply_to) && (Q.sender_reply_to = "Invalid email"), Q;
    }
  }), y = (Q) => {
    u((B) => ({ ...B, ...Q }));
  };
  Te(() => {
    d(() => e);
  }, [d, e]);
  const S = /* @__PURE__ */ o.jsx(Q4, { newsletter: A }), T = /* @__PURE__ */ o.jsx(H4, { clearError: k, errors: v, newsletter: A, onlyOne: n, updateNewsletter: y, validate: m });
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => s("newsletters"),
      buttonsDisabled: b.disabled,
      cancelLabel: "Close",
      deviceSelector: !1,
      dirty: f === "unsaved",
      okColor: b.color,
      okLabel: b.label || "Save",
      preview: S,
      previewBgColor: "grey",
      previewToolbar: !1,
      sidebar: T,
      sidebarPadding: !1,
      testId: "newsletter-modal",
      title: "Newsletter",
      onOk: async () => {
        await h({ fakeWhenUnchanged: !0 }) || tt({
          type: "pageError",
          message: "Can't save newsletter, please double check that you've filled all mandatory fields."
        });
      }
    }
  );
}, U4 = ({ params: e }) => {
  const { data: { newsletters: n, isEnd: t } = {}, fetchNextPage: a } = mp(), s = n == null ? void 0 : n.find(({ id: l }) => l === (e == null ? void 0 : e.id));
  return Te(() => {
    !s && !t && a();
  }, [a, t, s]), s ? /* @__PURE__ */ o.jsx(B4, { newsletter: s, onlyOne: n.length === 1 }) : null;
}, L4 = xe.create(U4), dg = ({ id: e }) => {
  const { updateRoute: n } = nt(), { data: { offers: t = [] } = {} } = Cp(e || ""), [a, s] = ue(), [l, A] = ue(""), { siteData: f } = ct();
  Te(() => {
    if (t.length > 0) {
      const y = t[0], S = `${Or(f)}${y == null ? void 0 : y.code}`;
      A(S), s(y);
    }
  }, [t, f]);
  const [u, d] = ue(!1), h = () => {
    let y = "";
    switch (a == null ? void 0 : a.type) {
      case "percent":
        y = (a == null ? void 0 : a.amount) + "% discount";
        break;
      case "fixed":
        y = gp(Fk(a == null ? void 0 : a.amount)) + " " + (a == null ? void 0 : a.currency) + " discount";
        break;
      case "trial":
        y = (a == null ? void 0 : a.amount) + " days free trial";
        break;
    }
    return `${encodeURIComponent((a == null ? void 0 : a.name) || "")} — Check out ${encodeURIComponent(y)} on:`;
  }, m = async () => {
    await navigator.clipboard.writeText(l), d(!0), setTimeout(() => d(!1), 2e3);
  }, v = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURI(l)}&text=${h()}`, "_blank");
  }, k = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(l)}`, "_blank");
  }, b = () => {
    window.open(`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(l)}&title=${h()}`, "_blank");
  };
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        n("offers");
      },
      animate: !1,
      backDropClick: !1,
      footer: !1,
      height: "full",
      size: "lg",
      testId: "offer-success-modal",
      topRightContent: "close",
      width: 1140,
      children: /* @__PURE__ */ o.jsxs("div", { className: "-mt-6 flex h-full flex-col items-center justify-center text-center", children: [
        /* @__PURE__ */ o.jsx("div", { className: "absolute left-6 top-5", children: /* @__PURE__ */ o.jsx(
          sA,
          {
            activeItemClassName: "hidden md:!block md:!visible",
            containerClassName: "whitespace-nowrap",
            itemClassName: "hidden md:!block md:!visible",
            items: [{ label: "Offers", onClick: () => {
              n("offers/edit");
            } }, { label: (a == null ? void 0 : a.name) || "" }],
            separatorClassName: "hidden md:!block md:!visible",
            backIcon: !0,
            onBack: () => {
              n("offers/edit");
            }
          }
        ) }),
        /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-grey-700 -mt-4", name: "tags-check", size: "xl" }),
        /* @__PURE__ */ o.jsx("h1", { className: "mt-6 text-4xl", children: "Your new offer is live!" }),
        /* @__PURE__ */ o.jsx("p", { className: "mt-3 max-w-[510px] text-[1.6rem]", children: "You can share the link anywhere. In your newsletter, social media, a podcast, or in-person. It all just works." }),
        /* @__PURE__ */ o.jsxs("div", { className: "mt-8 flex w-full max-w-md flex-col gap-8", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col-reverse gap-2", children: [
            /* @__PURE__ */ o.jsx(Re, { name: "offer-url", type: "url", value: l, disabled: !0 }),
            /* @__PURE__ */ o.jsx(Ye, { color: "green", label: u ? "Copied!" : "Copy link", fullWidth: !0, onClick: m })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: 'flex items-center gap-4 text-xs font-medium before:h-px before:grow before:bg-grey-300 before:content-[""] after:h-px after:grow after:bg-grey-300 after:content-[""] dark:before:bg-grey-800 dark:after:bg-grey-800', children: "OR" }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ o.jsx(Ye, { className: "h-8 border border-grey-300 dark:border-grey-800", icon: "twitter-x", iconColorClass: "w-[14px] h-[14px]", size: "sm", fullWidth: !0, onClick: v }),
            /* @__PURE__ */ o.jsx(Ye, { className: "h-8 border border-grey-300 dark:border-grey-800", icon: "facebook", size: "sm", fullWidth: !0, onClick: k }),
            /* @__PURE__ */ o.jsx(Ye, { className: "h-8 border border-grey-300 dark:border-grey-800", icon: "linkedin", size: "sm", fullWidth: !0, onClick: b })
          ] })
        ] })
      ] })
    }
  );
}, eA = ({ href: e, onDestroyed: n, selectedTab: t, portalParent: a }) => {
  t || (t = "signup");
  const s = Ct(null), [l, A] = ue(!1), [f, u] = ue(!0), d = sn(() => {
    setTimeout(() => {
      s.current && u(!1);
    }, 300);
  }, [s]);
  if (Te(() => {
    const v = (k) => {
      var y;
      if (!e)
        return;
      new URL(k.origin).origin === new URL(e).origin && ((y = k == null ? void 0 : k.data) == null ? void 0 : y.type) === "portal-preview-ready" && d();
    };
    return window.addEventListener("message", v, !0), () => {
      window.removeEventListener("message", v, !0), n == null || n();
    };
  }, [e, n, d, l]), !e)
    return null;
  let h = "mt-[-7%] flex h-screen items-center justify-center", m = "hidden";
  return a === "preview" ? (h = "absolute z-50 mt-[-7%] flex h-screen items-center justify-center", m = "invisible") : a === "offers" && (h = "absolute z-50 flex w-full h-full items-center justify-center", m = "invisible"), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    f && /* @__PURE__ */ o.jsx("div", { className: h, children: /* @__PURE__ */ o.jsx("span", { children: /* @__PURE__ */ o.jsx(xp, {}) }) }),
    /* @__PURE__ */ o.jsx(
      "iframe",
      {
        ref: s,
        className: !f && l ? "" : m,
        "data-testid": "portal-preview",
        height: "100%",
        src: e,
        title: "Portal Preview",
        width: "100%",
        onLoad: () => {
          A(!0);
        }
      }
    )
  ] });
}, hg = (e, n) => {
  const {
    disableBackground: t = !1,
    name: a,
    code: s,
    displayTitle: l = "",
    displayDescription: A = "",
    type: f,
    cadence: u,
    amount: d = 0,
    duration: h,
    durationInMonths: m,
    currency: v = "usd",
    status: k,
    tierId: b
  } = e;
  n = n.replace(/\/$/, "");
  const y = "/?v=modal-portal-offer#/portal/preview/offer", S = new URLSearchParams();
  return S.append("disableBackground", "false"), S.append("name", encodeURIComponent(a)), S.append("code", encodeURIComponent(s)), S.append("display_title", encodeURIComponent(l)), S.append("display_description", encodeURIComponent(A)), S.append("type", encodeURIComponent(f)), S.append("cadence", encodeURIComponent(u)), S.append("amount", encodeURIComponent(d)), S.append("duration", encodeURIComponent(h)), S.append("duration_in_months", encodeURIComponent(m)), S.append("currency", encodeURIComponent(v)), S.append("status", encodeURIComponent(k)), S.append("tier_id", encodeURIComponent(b)), t && S.append("disableBackground", "true"), `${n}${y}?${S.toString()}`;
}, P4 = (e) => {
  const n = [];
  return e.forEach((t) => {
    n.push({
      label: `${t.name} - Monthly`,
      value: `${t.id}-month-${t.currency}`
    }), n.push({
      label: `${t.name} - Yearly`,
      value: `${t.id}-year-${t.currency}`
    });
  }), n;
};
function z4(e) {
  return e.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
}
const cp = ({ type: e, checked: n, onClick: t }) => {
  const a = n ? "bg-black text-white dark:bg-white dark:text-black" : "border border-grey-300 dark:border-grey-800";
  return /* @__PURE__ */ o.jsx("button", { className: "text-left", type: "button", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ o.jsx("div", { className: `mt-0.5 flex h-4 w-4 items-center justify-center rounded-full ${a}`, children: n ? /* @__PURE__ */ o.jsx(Qt, { className: "w-[7px] stroke-[4]", name: "check", size: "custom" }) : null }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ o.jsx("span", { children: e.title }),
      /* @__PURE__ */ o.jsx("span", { className: "text-sm", children: e.description })
    ] })
  ] }) });
}, up = (e) => {
  const { fixedAmount: n = 0, percentAmount: t = 0, trialAmount: a = 0, amount: s = 0 } = e;
  switch (e.type) {
    case "fixed":
      return n * 100;
    case "percent":
      return t;
    case "trial":
      return a;
    default:
      return s;
  }
}, Y4 = ({
  tierOptions: e,
  handleTierChange: n,
  selectedTier: t,
  // handleTextInput,
  typeOptions: a,
  durationOptions: s,
  handleTypeChange: l,
  handleDurationChange: A,
  overrides: f,
  handleAmountTypeChange: u,
  handleNameInput: d,
  handleTextAreaInput: h,
  handleDisplayTitleInput: m,
  handleDurationInMonthsInput: v,
  handleAmountInput: k,
  handleCodeInput: b,
  clearError: y,
  errors: S,
  testId: T,
  handleTrialAmountInput: Q,
  amountOptions: B
}) => {
  var W, H, Z;
  const $ = (() => {
    var pe;
    return (pe = t == null ? void 0 : t.label) != null && pe.includes("Yearly") ? s.filter((Me) => Me.value !== "repeating") : s;
  })(), [Y, V] = ue(0), re = Y > 40 ? "text-red" : "text-green", { siteData: le } = ct(), [ne, ae] = ue(!1), j = Or(le), _ = `${j}${f.code.value}`, F = async () => {
    await navigator.clipboard.writeText(_), ae(!0), setTimeout(() => ae(!1), 2e3);
  };
  return /* @__PURE__ */ o.jsx("div", { className: "pt-7", "data-testId": T, children: /* @__PURE__ */ o.jsxs(yt, { children: [
    /* @__PURE__ */ o.jsxs("section", { children: [
      /* @__PURE__ */ o.jsx("h2", { className: "mb-4 text-lg", children: "General" }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ o.jsx(
          Re,
          {
            error: !!S.name,
            hint: S.name || /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ o.jsx("span", { children: "Visible to members on Stripe Checkout page" }),
              /* @__PURE__ */ o.jsxs("strong", { children: [
                /* @__PURE__ */ o.jsx("span", { className: `${re}`, children: Y }),
                " / 40"
              ] })
            ] }),
            maxLength: 40,
            placeholder: "Black Friday",
            title: "Offer name",
            onChange: (pe) => {
              d(pe), V(pe.target.value.length);
            },
            onKeyDown: () => y("name")
          }
        ),
        /* @__PURE__ */ o.jsx(
          Re,
          {
            error: !!S.displayTitle,
            hint: S.displayTitle,
            placeholder: "Black Friday Special",
            title: "Display title",
            value: f.displayTitle.value,
            onChange: (pe) => {
              m(pe);
            },
            onKeyDown: () => y("displayTitle")
          }
        ),
        /* @__PURE__ */ o.jsx(
          Na,
          {
            placeholder: "Take advantage of this limited-time offer.",
            title: "Display description",
            value: f.displayDescription,
            onChange: (pe) => {
              h(pe);
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("section", { className: "mt-4", children: [
      /* @__PURE__ */ o.jsx("h2", { className: "mb-4 text-lg", children: "Details" }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-4 rounded-md border border-grey-200 p-4 dark:border-grey-800", children: [
          /* @__PURE__ */ o.jsx(cp, { checked: f.type !== "trial", type: a[0], onClick: () => {
            l("percent");
          } }),
          /* @__PURE__ */ o.jsx(cp, { checked: f.type === "trial", type: a[1], onClick: () => {
            l("trial");
          } })
        ] }),
        /* @__PURE__ */ o.jsx(
          En,
          {
            options: e,
            selectedOption: t,
            testId: "tier-cadence-select-offers",
            title: "Tier — Cadence",
            onSelect: (pe) => {
              pe && n(pe);
            }
          }
        ),
        f.type !== "trial" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          " ",
          /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ o.jsx(
              Re,
              {
                error: !!S.amount,
                hint: S.amount,
                title: "Amount off",
                type: "number",
                value: f.type === "fixed" ? f.fixedAmount === 0 ? "" : (W = f.fixedAmount) == null ? void 0 : W.toString() : f.percentAmount === 0 ? "" : (H = f.percentAmount) == null ? void 0 : H.toString(),
                onChange: (pe) => {
                  k(pe);
                },
                onKeyDown: () => y("amount")
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: "absolute right-1.5 top-6 z-10", children: /* @__PURE__ */ o.jsx(
              En,
              {
                clearBg: !0,
                controlClasses: { menu: "w-20 right-0" },
                options: B,
                selectedOption: f.type === "percent" ? B[0] : B[1],
                testId: "amount-type-select-offers",
                onSelect: (pe) => {
                  u((pe == null ? void 0 : pe.value) || "");
                }
              }
            ) })
          ] }),
          /* @__PURE__ */ o.jsx(
            En,
            {
              options: $,
              selectedOption: $.find((pe) => pe.value === f.duration),
              testId: "duration-select-offers",
              title: "Duration",
              onSelect: (pe) => A((pe == null ? void 0 : pe.value) || "")
            }
          ),
          f.duration === "repeating" && /* @__PURE__ */ o.jsx(Re, { title: "Duration in months", type: "number", onChange: (pe) => {
            v(pe);
          } })
        ] }),
        f.type === "trial" && /* @__PURE__ */ o.jsx(
          Re,
          {
            error: !!S.amount,
            hint: S.amount,
            title: "Trial duration",
            type: "number",
            value: (Z = f.trialAmount) == null ? void 0 : Z.toString(),
            onChange: (pe) => {
              Q(pe);
            },
            onKeyDown: () => y("amount")
          }
        ),
        /* @__PURE__ */ o.jsx(
          Re,
          {
            error: !!S.code,
            hint: S.code || (f.code.value !== "" ? /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ o.jsxs("div", { children: [
                j,
                /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: f.code.value })
              ] }),
              /* @__PURE__ */ o.jsx("span", {}),
              /* @__PURE__ */ o.jsx(Ye, { className: "text-xs", color: "green", label: `${ne ? "Copied" : "Copy"}`, size: "sm", link: !0, onClick: F })
            ] }) : null),
            placeholder: "black-friday",
            title: "Offer code",
            value: f.code.value,
            onChange: (pe) => {
              b(pe);
            },
            onKeyDown: () => y("code")
          }
        )
      ] })
    ] })
  ] }) });
}, Ta = (e) => {
  const [n, t, a] = e.split("-");
  if (!n || !t || !a)
    throw new Error("Invalid input format. Expected format is: id-period-currency");
  return { id: n, period: t, currency: a };
}, F4 = () => {
  var Ie, be, Ee, de, Ne, Mt, Xt, qe, Le;
  const { siteData: e } = ct(), n = [
    { title: "Discount", description: "Offer a special reduced price", value: "percent" },
    { title: "Free trial", description: "Give free access for a limited time", value: "trial" }
  ], t = [
    { value: "once", label: "First-payment" },
    { value: "repeating", label: "Multiple-months" },
    { value: "forever", label: "Forever" }
  ], [a, s] = ue(""), { updateRoute: l } = nt(), { data: { tiers: A } = {} } = Vi(), f = Fu(A || []), u = P4(f), { mutateAsync: d } = Zk(), [h, m] = ue({
    tier: u[0] || {},
    dataset: {
      id: (Ie = u[0]) != null && Ie.value ? Ta((be = u[0]) == null ? void 0 : be.value).id : "",
      period: (Ee = u[0]) != null && Ee.value ? Ta((de = u[0]) == null ? void 0 : de.value).period : "",
      currency: (Ne = u[0]) != null && Ne.value ? Ta((Mt = u[0]) == null ? void 0 : Mt.value).currency : ""
    }
  }), { data: { offers: v = [] } = {} } = Gk(), { formState: k, updateForm: b, handleSave: y, saveState: S, okProps: T, validate: Q, errors: B, clearError: K } = qn({
    initialState: {
      disableBackground: !1,
      name: "",
      code: {
        isDirty: !1,
        value: ""
      },
      displayTitle: {
        isDirty: !1,
        value: ""
      },
      displayDescription: "",
      type: "percent",
      cadence: ((Xt = h == null ? void 0 : h.dataset) == null ? void 0 : Xt.period) || "",
      amount: 0,
      duration: "once",
      durationInMonths: 0,
      currency: ((qe = h == null ? void 0 : h.dataset) == null ? void 0 : qe.currency) || "USD",
      status: "active",
      tierId: ((Le = h == null ? void 0 : h.dataset) == null ? void 0 : Le.id) || "",
      trialAmount: 7,
      fixedAmount: 0,
      percentAmount: 0
    },
    onSave: async () => {
      const ee = {
        name: k.name,
        code: k.code.value,
        display_title: k.displayTitle.value,
        display_description: k.displayDescription,
        cadence: k.cadence,
        amount: up(k) || 0,
        duration: k.type === "trial" ? "trial" : k.duration,
        duration_in_months: Number(k.durationInMonths),
        currency: k.currency,
        status: k.status,
        tier: {
          id: k.tierId
        },
        type: k.type,
        currency_restriction: !1
      }, Se = await d(ee);
      Se && Se.offers && Se.offers.length > 0 && l(`offers/success/${Se.offers[0].id}`);
    },
    onSaveError: () => {
    },
    onValidate: () => {
      const ee = {};
      return !k.name && k.name.length === 0 && (ee.name = "Name is required"), !k.code.value && k.code.value.length === 0 && (ee.code = "Code is required"), !k.displayTitle.value && k.displayTitle.value.length === 0 && (ee.displayTitle = "Display title is required"), k.type === "percent" && k.percentAmount === 0 && (ee.amount = "Enter an amount greater than 0."), k.type === "percent" && (k.percentAmount < 0 || k.percentAmount > 100) && (ee.amount = "Amount must be between 0 and 100%."), (k.type === "fixed" && k.fixedAmount === 0 || k.type === "fixed" && k.fixedAmount < 1) && (ee.amount = "Enter an amount greater than 0."), k.type === "trial" && k.trialAmount === 0 && (ee.amount = "Enter an amount greater than 0."), k.type === "trial" && k.trialAmount < 1 && (ee.amount = "Free trial must be at least 1 day."), ee;
    },
    savingDelay: 500
  }), $ = [
    { value: "percent", label: "%" },
    { value: "fixed", label: k.currency }
  ], Y = (ee) => {
    m({
      tier: ee,
      dataset: Ta(ee.value)
    }), b((Se) => ({
      ...Se,
      cadence: Ta(ee.value).period,
      currency: Ta(ee.value).currency,
      tierId: Ta(ee.value).id
    }));
  }, V = (ee) => {
    b((Se) => ({
      ...Se,
      type: ee
    }));
  }, re = (ee) => {
    b((Se) => ({
      ...Se,
      type: ee === "percent" ? "percent" : "fixed"
    }));
  }, le = (ee) => {
    const Se = ee.target;
    k.type === "fixed" ? b((Qe) => ({
      ...Qe,
      fixedAmount: Number(Se.value)
    })) : k.type === "percent" ? b((Qe) => ({
      ...Qe,
      percentAmount: Number(Se.value)
    })) : b((Qe) => ({
      ...Qe,
      amount: Number(Se.value)
    }));
  }, ne = (ee) => {
    const Se = ee.target;
    b((Qe) => ({
      ...Qe,
      durationInMonths: Number(Se.value)
    }));
  }, ae = (ee) => {
    const Se = ee.target.value;
    b((Qe) => {
      let Xe = { ...Qe };
      return Xe.name = Se, Qe.code.isDirty || (K("code"), Xe.code = {
        ...Qe.code,
        value: z4(Se)
      }), Qe.displayTitle.isDirty || (K("displayTitle"), Xe.displayTitle = {
        ...Qe.displayTitle,
        value: Se
      }), Xe;
    });
  }, j = (ee) => {
    const Se = ee.target;
    b((Qe) => ({
      ...Qe,
      displayTitle: {
        ...Qe.displayTitle,
        isDirty: !0,
        value: Se.value
      }
    }));
  }, _ = (ee) => {
    const Se = ee.target;
    b((Qe) => ({
      ...Qe,
      displayDescription: Se.value
    }));
  }, F = (ee) => {
    const Se = ee.target;
    b((Qe) => ({
      ...Qe,
      trialAmount: Number(Se.value)
    }));
  }, W = (ee) => {
    b((Se) => ({
      ...Se,
      duration: ee
    }));
  }, H = (ee) => {
    const Se = ee.target;
    b((Qe) => ({
      ...Qe,
      code: {
        ...Qe.code,
        isDirty: !0,
        value: Se.value
      }
    }));
  }, Z = () => {
    v.length > 0 ? l("offers/edit") : l("offers");
  }, pe = On(() => {
    var ee;
    return {
      name: k.name || "",
      code: k.code.value || "",
      displayTitle: k.displayTitle.value || "",
      displayDescription: k.displayDescription || "",
      type: k.type || "percent",
      cadence: k.cadence || "month",
      amount: up(k) || 0,
      duration: k.type === "trial" ? "trial" : k.duration || "once",
      durationInMonths: k.durationInMonths || 0,
      currency: k.currency || "USD",
      status: k.status || "active",
      tierId: k.tierId || ((ee = f[0]) == null ? void 0 : ee.id)
    };
  }, [k, f]);
  Te(() => {
    const ee = hg(pe, e.url);
    s(ee);
  }, [k, e.url, k.type, pe]);
  const Me = /* @__PURE__ */ o.jsx(
    Y4,
    {
      amountOptions: $,
      clearError: K,
      durationOptions: t,
      errors: B,
      handleAmountInput: le,
      handleAmountTypeChange: re,
      handleCodeInput: H,
      handleDisplayTitleInput: j,
      handleDurationChange: W,
      handleDurationInMonthsInput: ne,
      handleNameInput: ae,
      handleTextAreaInput: _,
      handleTierChange: Y,
      handleTrialAmountInput: F,
      handleTypeChange: V,
      overrides: k,
      selectedTier: h.tier,
      testId: "add-offer-sidebar",
      tierOptions: u,
      typeOptions: n,
      validate: Q
    }
  ), G = /* @__PURE__ */ o.jsx(
    eA,
    {
      href: a || "",
      portalParent: "offers"
    }
  );
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        l("offers");
      },
      backDropClick: !1,
      cancelLabel: "Close",
      deviceSelector: !1,
      dirty: S === "unsaved",
      height: "full",
      okColor: T.color,
      okLabel: "Publish",
      preview: G,
      previewToolbar: !1,
      sidebar: Me,
      size: "lg",
      testId: "add-offer-modal",
      title: "Offer",
      width: 1140,
      onCancel: Z,
      onOk: async () => {
        if (Q(), !Object.values(B).every((Se) => !Se)) {
          tt({
            type: "pageError",
            message: "Can't save offer, please double check that you've filled all mandatory fields correctly"
          });
          return;
        }
        await y() || tt({
          type: "pageError",
          message: "Can't save offer, please double check that you've filled all mandatory fields."
        });
      }
    }
  );
};
function fp(e) {
  return new Date(e).toLocaleDateString("default", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
}
const Z4 = ({ clearError: e, errors: n, offer: t, updateOffer: a }) => {
  const { siteData: s } = ct(), [l, A] = ue(!1), f = dt(), { mutateAsync: u } = Dp(), [d, h] = ue((t == null ? void 0 : t.name.length) || 0), m = d > 40 ? "text-red" : "text-green", { updateRoute: v } = nt();
  Te(() => {
    t != null && t.name && h(t == null ? void 0 : t.name.length);
  }, [t == null ? void 0 : t.name]);
  const k = Or(s), b = `${k}${t == null ? void 0 : t.code}`, y = async () => {
    await navigator.clipboard.writeText(b), A(!0), setTimeout(() => A(!1), 2e3);
  }, S = async () => {
    (t == null ? void 0 : t.status) === "active" ? xe.show(Kt, {
      title: "Archive offer",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("p", { children: "New members will no longer be able to subscribe using this offer." }),
        /* @__PURE__ */ o.jsxs("p", { children: [
          "All members that previously redeemed ",
          /* @__PURE__ */ o.jsx("strong", { children: t == null ? void 0 : t.name }),
          " will remain unchanged."
        ] })
      ] }),
      okLabel: "Archive",
      okColor: "red",
      onOk: async (T) => {
        try {
          await u({ ...t, status: "archived" }), T == null || T.remove(), tt({
            type: "success",
            message: "Offer archived successfully"
          }), v("offers/edit");
        } catch (Q) {
          f(Q);
        }
      }
    }) : xe.show(Kt, {
      title: "Reactivate offer",
      prompt: /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("p", { children: [
        "Reactivating ",
        /* @__PURE__ */ o.jsx("strong", { children: t == null ? void 0 : t.name }),
        " will allow new members to subscribe using this offer. Existing members will remain unchanged."
      ] }) }),
      okLabel: "Reactivate",
      onOk: async (T) => {
        try {
          await u({ ...t, status: "active" }), T == null || T.remove(), tt({
            type: "success",
            message: "Offer reactivated successfully"
          }), v("offers/edit");
        } catch (Q) {
          f(Q);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex grow flex-col pt-2", children: [
    /* @__PURE__ */ o.jsxs(yt, { className: " grow", children: [
      /* @__PURE__ */ o.jsx("section", { children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-5 rounded-md border border-grey-300 p-4 pb-3.5 dark:border-grey-800", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-xs font-semibold leading-none text-grey-700", children: "Created on" }),
          /* @__PURE__ */ o.jsx("span", { children: fp(t != null && t.created_at ? t.created_at : "") })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-end justify-between", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-xs font-semibold leading-none text-grey-700", children: "Performance" }),
              /* @__PURE__ */ o.jsxs("span", { children: [
                t == null ? void 0 : t.redemption_count,
                " ",
                (t == null ? void 0 : t.redemption_count) === 1 ? "redemption" : "redemptions"
              ] })
            ] }),
            (t == null ? void 0 : t.redemption_count) > 0 && (t != null && t.last_redeemed) ? /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-xs font-semibold leading-none text-grey-700", children: "Last redemption" }),
              /* @__PURE__ */ o.jsx("span", { children: fp(t == null ? void 0 : t.last_redeemed) })
            ] }) : null
          ] }),
          (t == null ? void 0 : t.redemption_count) > 0 ? /* @__PURE__ */ o.jsx("a", { className: "font-semibold text-green", href: Kk(t == null ? void 0 : t.id), children: "See members →" }) : null
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsxs("section", { className: "mt-4", children: [
        /* @__PURE__ */ o.jsx("h2", { className: "mb-4 text-lg", children: "General" }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ o.jsx(
            Re,
            {
              error: !!n.name,
              hint: n.name || /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { children: "Visible to members on Stripe Checkout page" }),
                /* @__PURE__ */ o.jsxs("strong", { children: [
                  /* @__PURE__ */ o.jsx("span", { className: `${m}`, children: d }),
                  " / 40"
                ] })
              ] }),
              maxLength: 40,
              placeholder: "Black Friday",
              title: "Offer name",
              value: t == null ? void 0 : t.name,
              onChange: (T) => {
                h(T.target.value.length), a({ name: T.target.value });
              },
              onKeyDown: () => e("name")
            }
          ),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              error: !!n.displayTitle,
              hint: n.displayTitle,
              placeholder: "Black Friday Special",
              title: "Display title",
              value: t == null ? void 0 : t.display_title,
              onChange: (T) => a({ display_title: T.target.value }),
              onKeyDown: () => e("displayTitle")
            }
          ),
          /* @__PURE__ */ o.jsx(
            Na,
            {
              placeholder: "Take advantage of this limited-time offer.",
              title: "Display description",
              value: t == null ? void 0 : t.display_description,
              onChange: (T) => a({ display_description: T.target.value })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              error: !!n.code,
              hint: n.code || ((t == null ? void 0 : t.code) !== "" ? /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsxs("div", { children: [
                  k,
                  /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: t == null ? void 0 : t.code })
                ] }),
                /* @__PURE__ */ o.jsx("span", {}),
                /* @__PURE__ */ o.jsx(Ye, { className: "text-xs", color: "green", label: `${l ? "Copied" : "Copy"}`, size: "sm", link: !0, onClick: y })
              ] }) : null),
              placeholder: "black-friday",
              title: "Offer code",
              value: t == null ? void 0 : t.code,
              onChange: (T) => a({ code: T.target.value }),
              onKeyDown: () => e("code")
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "mb-2", children: (t == null ? void 0 : t.status) === "active" ? /* @__PURE__ */ o.jsx(Ye, { color: "red", label: "Archive offer", link: !0, onClick: S }) : /* @__PURE__ */ o.jsx(Ye, { color: "green", label: "Reactivate offer", link: !0, onClick: S }) })
  ] });
}, G4 = ({ id: e }) => {
  const { siteData: n } = ct(), { updateRoute: t } = nt(), a = dt(), { mutateAsync: s } = Dp(), [l, A] = ue(""), { data: { offers: f = [] } = {} } = Cp(e || ""), { formState: u, saveState: d, updateForm: h, setFormState: m, handleSave: v, validate: k, errors: b, clearError: y, okProps: S } = qn({
    initialState: f[0],
    savingDelay: 500,
    onSave: async () => {
      await s(u);
    },
    onSaveError: a,
    onValidate: () => {
      const K = {};
      return u != null && u.name || (K.name = "Name is required"), u != null && u.display_title || (K.displayTitle = "Display title is required"), u != null && u.code || (K.code = "Please enter a code"), K;
    }
  });
  Te(() => {
    m(() => f[0]);
  }, [m, f]);
  const T = (K) => {
    h(($) => ({ ...$, ...K }));
  }, Q = /* @__PURE__ */ o.jsx(
    Z4,
    {
      clearError: y,
      errors: b,
      offer: u,
      updateOffer: T,
      validate: k
    }
  );
  Te(() => {
    const K = {
      name: (u == null ? void 0 : u.name) || "",
      code: (u == null ? void 0 : u.code) || "",
      displayTitle: (u == null ? void 0 : u.display_title) || "",
      displayDescription: (u == null ? void 0 : u.display_description) || "",
      type: (u == null ? void 0 : u.type) || "",
      cadence: (u == null ? void 0 : u.cadence) || "",
      amount: u == null ? void 0 : u.amount,
      duration: (u == null ? void 0 : u.duration) || "",
      durationInMonths: (u == null ? void 0 : u.duration_in_months) || 0,
      currency: (u == null ? void 0 : u.currency) || "",
      status: (u == null ? void 0 : u.status) || "",
      tierId: (u == null ? void 0 : u.tier.id) || ""
    }, $ = hg(K, n.url);
    A($);
  }, [u, n]);
  const B = /* @__PURE__ */ o.jsx(
    eA,
    {
      href: l || "",
      portalParent: "offers"
    }
  );
  return f ? /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        t("offers");
      },
      backDropClick: !1,
      cancelLabel: "Close",
      deviceSelector: !1,
      dirty: d === "unsaved",
      height: "full",
      okColor: S.color,
      okLabel: S.label || "Save",
      preview: B,
      previewToolbar: !1,
      sidebar: Q,
      size: "lg",
      testId: "offer-update-modal",
      title: "Offer",
      width: 1140,
      onCancel: () => {
        sessionStorage.getItem("editOfferPageSource") === "offers" ? (sessionStorage.removeItem("editOfferPageSource"), t("offers")) : (sessionStorage.removeItem("editOfferPageSource"), t("offers/edit"));
      },
      onOk: async () => {
        await v({ fakeWhenUnchanged: !0 }) || tt({
          type: "pageError",
          message: "Can't save offer, please double check that you've filled all mandatory fields."
        });
      }
    }
  ) : null;
}, K4 = ({ route: e }) => {
  if (e === "offers/new")
    return /* @__PURE__ */ o.jsx(F4, {});
  if (e.startsWith("offers/edit/") && e.length > 12) {
    const n = e.split("/").pop();
    return /* @__PURE__ */ o.jsx(G4, { id: n || "" });
  } else if (e.startsWith("offers/success/") && e.length > 15) {
    const n = e.split("/").pop();
    return /* @__PURE__ */ o.jsx(dg, { id: n || "" });
  } else if (e === "offers/edit")
    return /* @__PURE__ */ o.jsx(Xk, {});
}, X4 = () => {
  const { route: e } = nt();
  return /* @__PURE__ */ o.jsx(K4, { route: e });
  method: "POST",
  path: () => "/files/upload/",
  body: ({ file: e }) => {
    const n = new FormData();
    return n.append("file", e), n;
  }
}), _4 = xe.create(() => {
  const { updateRoute: e } = nt(), n = xe.useModal(), [t, a] = ue(!1), [s, l] = ue({
    js: !1,
    css: !1
  }), { settings: A, config: f } = ct(), [u] = Et(A, ["pintura"]), { mutateAsync: d } = ua(), { mutateAsync: h } = V4(), m = dt();
  Te(() => {
    a(u || !1);
  }, [u]);
  const v = Ct(null), k = Ct(null), b = (S) => {
    var T, Q;
    S === "js" && ((T = v.current) == null || T.click()), S === "css" && ((Q = k.current) == null || Q.click());
  }, y = async (S, T) => {
    var Q, B;
    try {
      l((re) => ({ ...re, [T]: !0 }));
      const K = (B = (Q = S.target) == null ? void 0 : Q.files) == null ? void 0 : B[0];
      if (!K)
        return;
      const { files: $ } = await h({ file: K }), Y = $[0].url, V = [
        { key: `pintura_${T}_url`, value: Y }
      ];
      await d(V), l((re) => ({ ...re, [T]: !1 })), tt({
        type: "success",
        message: `Pintura ${T} uploaded successfully`
      });
    } catch (K) {
      l({ js: !1, css: !1 }), m(K);
    }
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      cancelLabel: "",
      okColor: "black",
      okLabel: "Save",
      testId: "pintura-modal",
      title: "",
      onOk: async () => {
        n.remove(), e("integrations"), await d([
          { key: "pintura", value: t }
        ]);
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Advanced image editing",
            icon: /* @__PURE__ */ o.jsx(Wk, { className: "h-12 w-12" }),
            title: "Pintura"
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: "mt-7", children: [
          !f.pintura && /* @__PURE__ */ o.jsxs("div", { className: "mb-7 flex flex-col items-stretch justify-between gap-4 rounded-sm bg-grey-75 p-4 dark:bg-grey-950 md:flex-row md:p-7", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "md:basis-1/2", children: [
              /* @__PURE__ */ o.jsx("p", { className: "mb-4 font-bold", children: "Add advanced image editing to Ghost, with Pintura" }),
              /* @__PURE__ */ o.jsx("p", { className: "mb-4 text-sm", children: "Pintura is a powerful JavaScript image editor that allows you to crop, rotate, annotate and modify images directly inside Ghost." }),
              /* @__PURE__ */ o.jsx("p", { className: "text-sm", children: "Try a demo, purchase a license, and download the required CSS/JS files from pqina.nl/pintura/ to activate this feature." })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "flex grow flex-col items-end justify-between gap-2 md:basis-1/2 md:gap-0", children: [
              /* @__PURE__ */ o.jsx("img", { alt: "Pintura screenshot", src: q4 }),
              /* @__PURE__ */ o.jsx("a", { className: "-mb-1 text-sm font-bold text-green", href: "https://pqina.nl/pintura/?ref=ghost.org", rel: "noopener noreferrer", target: "_blank", children: "Find out more →" })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs(yt, { marginBottom: !1, title: "Pintura configuration", grouped: !0, children: [
            /* @__PURE__ */ o.jsx(
              mt,
              {
                checked: t,
                direction: "rtl",
                hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  "Enable ",
                  /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://pqina.nl/pintura/?ref=ghost.org", rel: "noopener noreferrer", target: "_blank", children: "Pintura" }),
                  " for editing your images in Ghost"
                ] }),
                label: "Enable Pintura",
                onChange: (S) => {
                  a(S.target.checked);
                }
              }
            ),
            t && !f.pintura && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col justify-between gap-1 md:flex-row md:items-center", children: [
                /* @__PURE__ */ o.jsxs("div", { children: [
                  /* @__PURE__ */ o.jsx("div", { children: "Upload Pintura script" }),
                  /* @__PURE__ */ o.jsxs("div", { className: "text-xs text-grey-600", children: [
                    "Upload the ",
                    /* @__PURE__ */ o.jsx("code", { children: "pintura-umd.js" }),
                    " file from the Pintura package"
                  ] })
                ] }),
                /* @__PURE__ */ o.jsx("input", { ref: v, accept: ".js", type: "file", hidden: !0, onChange: async (S) => {
                  await y(S, "js");
                } }),
                /* @__PURE__ */ o.jsx(Ye, { color: "outline", disabled: s.js, label: "Upload", onClick: () => {
                  b("js");
                } })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col justify-between gap-1 md:flex-row md:items-center", children: [
                /* @__PURE__ */ o.jsxs("div", { children: [
                  /* @__PURE__ */ o.jsx("div", { children: "Upload Pintura styles" }),
                  /* @__PURE__ */ o.jsxs("div", { className: "text-xs text-grey-600", children: [
                    "Upload the ",
                    /* @__PURE__ */ o.jsx("code", { children: "pintura.css" }),
                    " file from the Pintura package"
                  ] })
                ] }),
                /* @__PURE__ */ o.jsx("input", { ref: k, accept: ".css", type: "file", hidden: !0, onChange: async (S) => {
                  await y(S, "css");
                } }),
                /* @__PURE__ */ o.jsx(Ye, { color: "outline", disabled: s.css, label: "Upload", onClick: () => {
                  b("css");
                } })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}), $4 = ({ updateSetting: e, errors: n, setError: t }) => {
  const { siteData: a, settings: s, config: l } = ct(), [A, f] = Et(s, ["members_support_address", "support_email_address"]), u = (f == null ? void 0 : f.toString()) || bu((A == null ? void 0 : A.toString()) || "", a, l), d = qk(a, l), [h, m] = ue(u), v = (k) => {
    let b = k.target.value;
    if (!b) {
      t("members_support_address", "Please enter an email address");
      return;
    }
    let y = d && b === `noreply@${d}` ? "noreply" : b;
    e("members_support_address", y), m(bu(y, a, l));
  };
  return Te(() => {
    m(u);
  }, [u]), /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsx(yt, { children: /* @__PURE__ */ o.jsx(
    Re,
    {
      error: !!n.members_support_address,
      hint: n.members_support_address,
      title: "Support email address",
      value: h,
      onBlur: v,
      onChange: (k) => m(k.target.value)
    }
  ) }) });
}, eJ = (e) => /* @__PURE__ */ it("svg", { width: 21, height: 24, viewBox: "0 0 21 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-1"), /* @__PURE__ */ it("path", { d: "M10.533 11.267a5.135 5.135 0 1 0-.001-10.27 5.135 5.135 0 0 0 .001 10.27zM1 23a9.531 9.531 0 0 1 16.274-6.741 9.532 9.532 0 0 1 2.793 6.74", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), tJ = (e) => /* @__PURE__ */ it("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-2"), /* @__PURE__ */ it("path", { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", d: "M12.5 2v20M2 12.5h20", fill: "none" })), nJ = (e) => /* @__PURE__ */ it("svg", { width: 25, height: 24, viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-3"), /* @__PURE__ */ it("path", { d: "M23.5 6v14.25a2.25 2.25 0 1 1-4.5 0V3c0-.398-.158-.78-.44-1.06a1.494 1.494 0 0 0-1.06-.44h-15c-.398 0-.78.158-1.06.44C1.157 2.22 1 2.601 1 3v17.25a2.25 2.25 0 0 0 2.25 2.25h18M4.75 15h10.5m-10.5 3h6", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ it("path", { d: "M14.5 5.25h-9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75z", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), rJ = (e) => /* @__PURE__ */ it("svg", { width: 24, height: 18, viewBox: "0 0 24 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-4"), /* @__PURE__ */ it("path", { d: "M21.75 1.5H2.25A1.5 1.5 0 0 0 .75 3v12a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5V3a1.5 1.5 0 0 0-1.5-1.5zm-6.063 5.475L19.5 10.5M8.313 6.975 4.5 10.5", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ it("path", { d: "m22.88 2.014-9.513 6.56a2.41 2.41 0 0 1-2.734 0L1.12 2.014", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), aJ = (e) => /* @__PURE__ */ it("svg", { width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ it("title", null, "portal-icon-5"), /* @__PURE__ */ it("path", { d: "M17.903 12.016a5.007 5.007 0 0 0-3.031-3.654m-3.835.038a5.002 5.002 0 0 0-2.879 5.85m2.282 3.046A4.975 4.975 0 0 0 13 18a4.99 4.99 0 0 0 4.12-2.167m-1.949 5.387a8.504 8.504 0 0 0 5.756-11.295m-2.316-3.31A8.474 8.474 0 0 0 13 4.5a8.461 8.461 0 0 0-5.608 2.113m-2.28 3.213a8.503 8.503 0 0 0 5.914 11.444", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ it("path", { d: "M8.924 24.29c1.273.46 2.645.71 4.076.71 5.52 0 10.17-3.727 11.57-8.803M6.712 2.777A11.994 11.994 0 0 0 1 13c0 3.545 1.537 6.731 3.982 8.928m19.867-10.839C23.933 5.369 18.977 1 13 1c-.69 0-1.367.058-2.025.17", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" })), wu = [
  {
    Component: eJ,
    value: "icon-1"
  },
  {
    Component: tJ,
    value: "icon-2"
  },
  {
    Component: nJ,
    value: "icon-3"
  },
  {
    Component: rJ,
    value: "icon-4"
  },
  {
    Component: aJ,
    value: "icon-5"
  }
], sJ = ({ localSettings: e, updateSetting: n }) => {
  var y, S;
  const { mutateAsync: t } = Qs(), a = dt(), [s, l, A, f] = Et(e, ["portal_button", "portal_button_style", "portal_button_icon", "portal_button_signup_text"]), u = A || wu[0].value, d = wu.map(({ value: T }) => T).includes(u), [h, m] = ue(d ? void 0 : u), v = async (T) => {
    try {
      const Q = jr(await t({ file: T }));
      n("portal_button_icon", Q), m(Q);
    } catch (Q) {
      a(Q);
    }
  }, k = () => {
    n("portal_button_icon", null), m(void 0);
  }, b = [
    { value: "icon-and-text", label: "Icon and text" },
    { value: "icon-only", label: "Icon only" },
    { value: "text-only", label: "Text only" }
  ];
  return /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(yt, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        checked: !!s,
        label: "Show portal button",
        labelStyle: "heading",
        onChange: (T) => n("portal_button", T.target.checked)
      }
    ),
    /* @__PURE__ */ o.jsx(
      En,
      {
        options: b,
        selectedOption: b.find((T) => T.value === l),
        title: "Portal button style",
        onSelect: (T) => n("portal_button_style", (T == null ? void 0 : T.value) || null)
      }
    ),
    ((y = l == null ? void 0 : l.toString()) == null ? void 0 : y.includes("icon")) && /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ o.jsx(st, { level: 6, grey: !0, children: "Icon" }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
        wu.map((T) => /* @__PURE__ */ o.jsx("button", { className: ft("border p-3", u === T.value ? "border-green" : "border-transparent"), type: "button", onClick: () => n("portal_button_icon", T.value), children: /* @__PURE__ */ o.jsx(T.Component, { className: `h-5 w-5 ${u === T.value ? "text-green" : "text-black opacity-70 transition-all hover:opacity-100 dark:text-white"}` }) })),
        /* @__PURE__ */ o.jsx("div", { className: ft("relative w-[46px] border", u === h ? "border-green" : "border-transparent"), children: /* @__PURE__ */ o.jsx(
          Nr,
          {
            deleteButtonClassName: "invisible absolute -right-2 -top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.75)] text-white hover:bg-black group-hover:!visible",
            deleteButtonContent: /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-white", name: "trash", size: "sm" }),
            height: "46px",
            id: "test",
            imageClassName: "cursor-pointer",
            imageURL: h,
            width: "46px",
            deleteButtonUnstyled: !0,
            onDelete: k,
            onImageClick: () => h && n("portal_button_icon", h),
            onUpload: v,
            children: /* @__PURE__ */ o.jsx(Qt, { className: "dark:text-white", name: "upload", size: "md" })
          }
        ) })
      ] })
    ] }),
    ((S = l == null ? void 0 : l.toString()) == null ? void 0 : S.includes("text")) && /* @__PURE__ */ o.jsx(
      Re,
      {
        title: "Signup button text",
        value: f,
        onChange: (T) => n("portal_button_signup_text", T.target.value)
      }
    )
  ] }) });
}, dr = ({ name: e, value: n }) => {
  const t = Pu();
  return /* @__PURE__ */ o.jsx(
    Ba,
    {
      action: /* @__PURE__ */ o.jsx(Ye, { color: "black", label: "Copy", link: !0, onClick: (a) => {
        navigator.clipboard.writeText(n);
        const s = a == null ? void 0 : a.target;
        s.innerText = "Copied", setTimeout(() => {
          s.innerText = "Copy";
        }, 1e3);
      } }),
      separator: !0,
      children: /* @__PURE__ */ o.jsxs("div", { className: "flex w-full grow flex-col py-3 lg:flex-row lg:items-center lg:gap-2", children: [
        /* @__PURE__ */ o.jsxs("label", { className: "inline-block whitespace-nowrap lg:w-[180px] lg:min-w-[180px]", htmlFor: t, children: [
          e,
          ":"
        ] }),
        /* @__PURE__ */ o.jsx(Re, { className: "border-b-500 grow bg-transparent py-1 text-grey-700 lg:p-1", id: t, value: n, disabled: !0, unstyled: !0 })
      ] })
    }
  );
}, iJ = () => {
  const [e, n] = ue(!1), [t, a] = ue(""), { siteData: s } = ct(), { data: { tiers: l } = {} } = Vi(), A = Fu(l || []), f = () => {
    n(!e);
  };
  Te(() => {
    A != null && A.length && !t && a(A[0].id);
  }, [A, t]);
  const u = A == null ? void 0 : A.map((h) => ({
    label: h.name,
    value: h.id
  })), d = Or(s);
  return /* @__PURE__ */ o.jsxs(qu, { className: "max-w-[920px] text-base text-black dark:text-white", heading: "Links", children: [
    /* @__PURE__ */ o.jsxs("p", { className: "-mt-6 mb-16", children: [
      "Use these ",
      e ? "data attributes" : "links",
      " in your theme to show pages of Portal."
    ] }),
    /* @__PURE__ */ o.jsxs(Hr, { actions: /* @__PURE__ */ o.jsx(Ye, { color: "green", label: e ? "Links" : "Data attributes", link: !0, onClick: f }), title: "Generic", titleSize: "lg", children: [
      /* @__PURE__ */ o.jsx(dr, { name: "Default", value: e ? "data-portal" : `${d}#/portal` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Sign in", value: e ? 'data-portal="signin"' : `${d}#/portal/signin` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Sign up", value: e ? 'data-portal="signup"' : `${d}#/portal/signup` })
    ] }),
    /* @__PURE__ */ o.jsxs(Hr, { className: "mt-14", title: "Tiers", titleSize: "lg", children: [
      /* @__PURE__ */ o.jsx(
        Ba,
        {
          hideActions: !0,
          separator: !0,
          children: /* @__PURE__ */ o.jsxs("div", { className: "flex w-full items-center gap-2 py-2", children: [
            /* @__PURE__ */ o.jsx("span", { className: "inline-block w-[180px] min-w-[180px] shrink-0", children: "Tier:" }),
            /* @__PURE__ */ o.jsx(
              En,
              {
                options: u,
                selectedOption: u.find((h) => h.value === t),
                onSelect: (h) => {
                  h && a(h == null ? void 0 : h.value);
                }
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ o.jsx(dr, { name: "Signup / Monthly", value: e ? `data-portal="signup/${t}/monthly"` : `${d}#/portal/signup/${t}/monthly` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Signup / Yearly", value: e ? `data-portal="signup/${t}/yearly"` : `${d}#/portal/signup/${t}/yearly` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Signup / Free", value: e ? 'data-portal="signup/free"' : `${d}#/portal/signup/free` })
    ] }),
    /* @__PURE__ */ o.jsxs(Hr, { className: "mt-14", title: "Account", titleSize: "lg", children: [
      /* @__PURE__ */ o.jsx(dr, { name: "Account", value: e ? 'data-portal="account"' : `${d}#/portal/account` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Account / Plans", value: e ? 'data-portal="account/plans"' : `${d}#/portal/account/plans` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Account / Profile", value: e ? 'data-portal="account/profile"' : `${d}#/portal/account/profile` }),
      /* @__PURE__ */ o.jsx(dr, { name: "Account / Newsletters", value: e ? 'data-portal="account/newsletters"' : `${d}#/portal/account/newsletters` })
    ] })
  ] });
}, oJ = ({ settings: e, config: n, tiers: t, siteData: a, selectedTab: s }) => {
  if (!(a != null && a.url))
    return null;
  let l = t.filter((y) => y.visibility === "public" && y.type === "paid").map((y) => y.id);
  const A = a.url.replace(/\/$/, ""), f = "/?v=modal-portal-settings#/portal/preview", u = JSON.parse(zn(e, "portal_plans") || ""), h = zn(e, "members_signup_access") === "all" && (!Bi(e, n) || u.includes("free")), m = new URLSearchParams();
  m.append("button", zn(e, "portal_button") ? "true" : "false"), m.append("name", zn(e, "portal_name") ? "true" : "false"), m.append("isFree", u.includes("free") ? "true" : "false"), m.append("isMonthly", Bi(e, n) && u.includes("monthly") ? "true" : "false"), m.append("isYearly", Bi(e, n) && u.includes("yearly") ? "true" : "false"), m.append("page", s === "account" ? "accountHome" : "signup"), m.append("buttonIcon", encodeURIComponent(zn(e, "portal_button_icon") || "icon-1")), m.append("signupButtonText", encodeURIComponent(zn(e, "portal_button_signup_text") || "")), m.append("membersSignupAccess", zn(e, "members_signup_access") || "all"), m.append("allowSelfSignup", h ? "true" : "false"), m.append("signupTermsHtml", zn(e, "portal_signup_terms_html") || ""), m.append("signupCheckboxRequired", zn(e, "portal_signup_checkbox_required") ? "true" : "false"), m.append("portalProducts", l.join(","));
  const v = zn(e, "portal_default_plan");
  v && m.append("portalDefaultPlan", v), u && u.length && m.append("portalPrices", encodeURIComponent(u.join(",")));
  const k = zn(e, "accent_color");
  k != null && m.append("accentColor", encodeURIComponent(k));
  const b = zn(e, "portal_button_style");
  return b && m.append("buttonStyle", encodeURIComponent(b)), m.append("disableBackground", "false"), `${A}${f}?${m.toString()}`;
}, lJ = ({
  selectedTab: e = "signup",
  localSettings: n,
  localTiers: t
}) => {
  const {
    siteData: a,
    config: s
  } = ct(), l = oJ({
    settings: n,
    tiers: t,
    selectedTab: e,
    siteData: a,
    config: s
  });
  let A = /* @__PURE__ */ o.jsx(o.Fragment, {});
  switch (e) {
    case "account":
      A = /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(eA, { href: l || "", portalParent: "preview", selectedTab: e }) });
      break;
    case "links":
      A = /* @__PURE__ */ o.jsx(iJ, {});
      break;
    default:
      A = /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(eA, { href: l || "", portalParent: "preview", selectedTab: e }) });
      break;
  }
  return A;
}, AJ = ({ localSettings: e, updateSetting: n, localTiers: t, updateTier: a, errors: s, setError: l }) => {
  const { config: A } = ct(), f = Aa("portalImprovements"), [u, d, h, m, v, k] = Et(
    e,
    ["members_signup_access", "portal_name", "portal_signup_terms_html", "portal_signup_checkbox_required", "portal_plans", "portal_default_plan"]
  ), b = JSON.parse((v == null ? void 0 : v.toString()) || "[]"), y = 115, S = On(() => {
    const le = document.createElement("div");
    return le.innerHTML = (h == null ? void 0 : h.toString()) || "", le.innerText.length;
  }, [h]), T = sn((le, ne) => {
    l(le, ne);
  }, []);
  Te(() => {
    S > y ? T("portal_signup_terms_html", "Signup notice is too long") : T("portal_signup_terms_html", void 0);
  }, [S, T]);
  const Q = (le) => {
    const ne = b.indexOf(le);
    ne === -1 ? b.push(le) : b.splice(ne, 1), n("portal_plans", JSON.stringify(b)), f && (k === "yearly" ? !b.includes("yearly") && b.includes("monthly") && n("portal_default_plan", "monthly") : k === "monthly" && (b.includes("monthly") || n("portal_default_plan", "yearly")));
  }, B = u !== "all", K = Bi(e, A);
  let $ = [];
  t && t.forEach((le) => {
    le.type === "free" && $.push({
      checked: b.includes("free"),
      disabled: B,
      label: f ? le.name : "Free",
      value: "free",
      onChange: (ne) => {
        b.includes("free") && !ne && b.splice(b.indexOf("free"), 1), !b.includes("free") && ne && b.push("free"), n("portal_plans", JSON.stringify(b)), a({ ...le, visibility: ne ? "public" : "none" });
      }
    });
  });
  const Y = Fu(t) || [], V = [
    { value: "yearly", label: "Yearly" },
    { value: "monthly", label: "Monthly" }
  ];
  K && Y.length > 0 && Y.forEach((le) => {
    $.push({
      checked: le.visibility === "public",
      label: le.name,
      value: le.id,
      onChange: (ne) => a({ ...le, visibility: ne ? "public" : "none" })
    });
  });
  const re = K && Y.length > 0 && Y.some((le) => le.visibility === "public");
  return /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(yt, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        checked: !!d,
        disabled: B,
        label: "Display name in signup form",
        labelStyle: "heading",
        onChange: (le) => n("portal_name", le.target.checked)
      }
    ),
    /* @__PURE__ */ o.jsx(
      Eu,
      {
        checkboxes: $,
        title: "Tiers available at signup"
      }
    ),
    re && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        Eu,
        {
          checkboxes: [
            {
              checked: b.includes("monthly"),
              disabled: B,
              label: "Monthly",
              value: "monthly",
              onChange: () => {
                Q("monthly");
              }
            },
            {
              checked: b.includes("yearly"),
              disabled: B,
              label: "Yearly",
              value: "yearly",
              onChange: () => {
                Q("yearly");
              }
            }
          ],
          title: "Prices available at signup"
        }
      ),
      f && b.includes("yearly") && b.includes("monthly") && /* @__PURE__ */ o.jsx(
        En,
        {
          options: V,
          selectedOption: V.find((le) => le.value === k),
          title: "Default price at signup",
          onSelect: (le) => {
            n("portal_default_plan", (le == null ? void 0 : le.value) ?? "yearly");
          }
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      Xu,
      {
        error: !!s.portal_signup_terms_html,
        hint: s.portal_signup_terms_html || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          "Recommended: ",
          /* @__PURE__ */ o.jsx("strong", { children: "115" }),
          " characters. You've used ",
          /* @__PURE__ */ o.jsx("strong", { className: "text-green", children: S })
        ] }),
        nodes: "MINIMAL_NODES",
        placeholder: "By signing up, I agree to receive emails from ...",
        title: "Display notice at signup",
        value: h == null ? void 0 : h.toString(),
        onChange: (le) => n("portal_signup_terms_html", le)
      }
    ),
    (h == null ? void 0 : h.toString()) && /* @__PURE__ */ o.jsx(
      mt,
      {
        checked: !!m,
        disabled: B,
        label: "Require agreement",
        labelStyle: "heading",
        onChange: (le) => n("portal_signup_checkbox_required", le.target.checked)
      }
    )
  ] }) });
}, cJ = "SettingsResponseType", uJ = Vn({
  path: () => "/settings/verifications",
  method: "PUT",
  body: ({ token: e }) => ({ token: e }),
  updateQueries: {
    dataType: cJ,
    emberUpdateType: "createOrUpdate",
    update: (e) => ({
      ...e,
      settings: e.settings
    })
  }
}), fJ = ({ localSettings: e, updateSetting: n, localTiers: t, updateTier: a, errors: s, setError: l }) => {
  const [A, f] = ue("signupOptions"), u = [
    {
      id: "signupOptions",
      title: "Signup options",
      contents: /* @__PURE__ */ o.jsx(
        AJ,
        {
          errors: s,
          localSettings: e,
          localTiers: t,
          setError: l,
          updateSetting: n,
          updateTier: a
        }
      )
    },
    {
      id: "lookAndFeel",
      title: "Look & feel",
      contents: /* @__PURE__ */ o.jsx(sJ, { localSettings: e, updateSetting: n })
    },
    {
      id: "accountPage",
      title: "Account page",
      contents: /* @__PURE__ */ o.jsx($4, { errors: s, setError: l, updateSetting: n })
    }
  ], d = (h) => {
    f(h);
  };
  return /* @__PURE__ */ o.jsx("div", { className: "pt-4", children: /* @__PURE__ */ o.jsx(ja, { selectedTab: A, tabs: u, onTabChange: d }) });
}, dJ = () => {
  const { updateRoute: e } = nt(), [n, t] = ue("signup"), a = dt(), { settings: s, siteData: l, config: A } = ct(), { mutateAsync: f } = ua(), { data: { tiers: u } = {} } = Vi(), { mutateAsync: d } = Zu(), { mutateAsync: h } = uJ(), { getParam: m } = Wi(), v = m("verifyEmail");
  Te(() => {
    v && (async ({ token: _ }) => {
      try {
        let { settings: F } = await h({ token: _ });
        const [W] = Et(F, ["members_support_address"]);
        xe.show(Kt, {
          title: "Support address verified",
          prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            "Your support email address has been changed to ",
            /* @__PURE__ */ o.jsx("strong", { children: W }),
            "."
          ] }),
          okLabel: "Close",
          cancelLabel: "",
          onOk: (H) => H == null ? void 0 : H.remove()
        });
      } catch (F) {
        let W = "There was an error verifying your email address. Please try again.";
        (F == null ? void 0 : F.message) === "Token expired" && (W = "The verification link has expired. Please try again."), xe.show(Kt, {
          title: "Error verifying support address",
          prompt: W,
          okLabel: "Close",
          cancelLabel: "",
          onOk: (H) => H == null ? void 0 : H.remove()
        }), a(F, { withToast: !1 });
      }
    })({ token: v });
  }, [a, v, h]);
  const { formState: k, setFormState: b, saveState: y, handleSave: S, updateForm: T, okProps: Q } = qn({
    initialState: {
      settings: s,
      tiers: u || []
    },
    savingDelay: 500,
    onSave: async () => {
      var W, H, Z, pe;
      await Promise.all(k.tiers.filter(({ dirty: Me }) => Me).map((Me) => d(Me))), b((Me) => ({ ...Me, tiers: k.tiers.map((G) => ({ ...G, dirty: !1 })) }));
      const j = k.settings.filter((Me) => Me.dirty);
      if (!j.length)
        return;
      const { meta: _, settings: F } = await f(j);
      if (b((Me) => ({ ...Me, settings: k.settings.map((G) => ({ ...G, dirty: !1 })) })), _ != null && _.sent_email_verification) {
        const Me = (W = k.settings.find((Ie) => Ie.key === "members_support_address")) == null ? void 0 : W.value, G = ((H = F.find((Ie) => Ie.key === "support_email_address")) == null ? void 0 : H.value) || bu(((pe = (Z = F.find((Ie) => Ie.key === "members_support_address")) == null ? void 0 : Z.value) == null ? void 0 : pe.toString()) || "noreply", l, A);
        xe.show(Kt, {
          title: "Confirm email address",
          prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            "We've sent a confirmation email to ",
            /* @__PURE__ */ o.jsx("strong", { children: Me }),
            ". Until verified, your support email address will remain ",
            G,
            "."
          ] }),
          okLabel: "Close",
          cancelLabel: "",
          onOk: (Ie) => Ie == null ? void 0 : Ie.remove()
        });
      }
    },
    onSaveError: a
  });
  Te(() => {
    !k.tiers.length && (u != null && u.length) && b((j) => ({ ...j, tiers: u }));
  }, [u, k.tiers, b]);
  const [B, K] = ue({}), $ = (j, _) => {
    T((F) => ({
      ...F,
      settings: F.settings.map((W) => W.key === j ? { ...W, value: _, dirty: !0 } : W)
    }));
  }, Y = (j, _) => {
    K((F) => ({
      ...F,
      [j]: _
    }));
  }, V = (j) => {
    T((_) => ({
      ..._,
      tiers: _.tiers.map((F) => F.id === j.id ? { ...j, dirty: !0 } : F)
    }));
  }, re = (j) => {
    t(j);
  }, le = /* @__PURE__ */ o.jsx(
    fJ,
    {
      errors: B,
      localSettings: k.settings,
      localTiers: k.tiers,
      setError: Y,
      updateSetting: $,
      updateTier: V
    }
  ), ne = /* @__PURE__ */ o.jsx(
    lJ,
    {
      localSettings: k.settings,
      localTiers: k.tiers,
      selectedTab: n
    }
  );
  let ae = [
    { id: "signup", title: "Signup" },
    { id: "account", title: "Account page" },
    { id: "links", title: "Links" }
  ];
  return /* @__PURE__ */ o.jsx(
    Hs,
    {
      afterClose: () => {
        e("portal");
      },
      buttonsDisabled: Q.disabled,
      cancelLabel: "Close",
      deviceSelector: !1,
      dirty: y === "unsaved",
      okColor: Q.color,
      okLabel: Q.label || "Save",
      preview: ne,
      previewBgColor: n === "links" ? "white" : "greygradient",
      previewToolbarTabs: ae,
      selectedURL: n,
      sidebar: le,
      testId: "portal-modal",
      title: "Portal",
      onOk: async () => {
        Object.values(B).filter(Boolean).length ? tt({
          type: "pageError",
          message: "Can't save settings, please double check that you've filled all mandatory fields."
        }) : await S({ force: !0 });
      },
      onSelectURL: re
    }
  );
}, hJ = xe.create(dJ), pJ = xe.create(() => {
  const { updateRoute: e } = nt(), n = xe.useModal(), { localSettings: t, updateSetting: a, handleSave: s, validate: l, errors: A, clearError: f } = Ha({
    onValidate: () => {
      const v = {};
      return u && !Qr.isURL(u, { require_protocol: !0 }) && (v.slackUrl = "The URL must be in a format like https://hooks.slack.com/services/<your personal key>"), v;
    }
  }), [u, d] = Et(t, ["slack_url", "slack_username"]), { mutateAsync: h } = Vk(), m = async () => {
    xu.remove(), await s() && (await h(null), tt({
      message: "Check your Slack channel for the test message",
      type: "neutral"
    }));
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      dirty: t.some((v) => v.dirty),
      okColor: "black",
      okLabel: "Save & close",
      testId: "slack-modal",
      title: "",
      onOk: async () => {
        xu.remove(), await s() && (n.remove(), e("integrations"));
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "A messaging app for teams",
            icon: /* @__PURE__ */ o.jsx(_k, { className: "h-14 w-14" }),
            title: "Slack"
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsxs(yt, { marginBottom: !1, title: "Slack configuration", grouped: !0, children: [
          /* @__PURE__ */ o.jsx(
            Re,
            {
              error: !!A.slackUrl,
              hint: A.slackUrl || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                "Automatically send newly published posts to a channel in Slack or any Slack-compatible service like Discord or Mattermost. Set up a new incoming webhook ",
                /* @__PURE__ */ o.jsx("a", { href: "https://my.slack.com/apps/new/A0F7XDUAZ-incoming-webhooks", children: "here" }),
                ", and grab the URL."
              ] }),
              placeholder: "https://hooks.slack.com/services/...",
              title: "Webhook URL",
              value: u,
              onBlur: l,
              onChange: (v) => a("slack_url", v.target.value),
              onKeyDown: () => f("slackUrl")
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "flex w-full flex-col gap-2 md:flex-row md:items-center", children: [
            /* @__PURE__ */ o.jsx(
              Re,
              {
                containerClassName: "flex-grow",
                hint: "The username to display messages from",
                title: "Username",
                value: d,
                onChange: (v) => a("slack_username", v.target.value)
              }
            ),
            /* @__PURE__ */ o.jsx(Ye, { color: "outline", label: "Send test notification", onClick: m })
          ] })
        ] }) })
      ]
    }
  );
  /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ o.jsx(st, { level: 3, children: "Getting paid" }),
    /* @__PURE__ */ o.jsx(wJ, {})
  ] }),
  /* @__PURE__ */ o.jsxs("div", { className: "mb-7 mt-6", children: [
    "Stripe is our exclusive direct payments partner. Ghost collects ",
    /* @__PURE__ */ o.jsx("strong", { children: "no fees" }),
    " on any payments! If you don’t have a Stripe account yet, you can ",
    /* @__PURE__ */ o.jsx("a", { className: "underline", href: "https://stripe.com", rel: "noopener noreferrer", target: "_blank", children: "sign up here" }),
    "."
  ] }),
  /* @__PURE__ */ o.jsx(Rp, { label: /* @__PURE__ */ o.jsx(o.Fragment, { children: "I have a Stripe account, let's go →" }), onClick: e })
] }), bJ = () => {
  const [e, n] = ue(!1), [t, a] = ue(""), [s, l] = ue(!1), [A, f] = ue(""), { refetch: u } = Vi({
    searchParams: { filter: "type:paid+active:true" },
    enabled: !1
  }), { mutateAsync: d } = Zu(), { mutateAsync: h } = ua(), m = dt(), v = (T) => {
    a(T.target.value), n(!!T.target.value);
  }, k = async () => {
    var B, K;
    const { data: T } = await u(), Q = T == null ? void 0 : T.pages[0].tiers[0];
    if (Q) {
      Q.monthly_price = 500, Q.yearly_price = 5e3, Q.currency = "USD";
      let $ = 0;
      for (; $ < xJ; ) {
        await new Promise((Y) => {
          setTimeout(Y, Lu);
        });
        try {
          await d(Q);
          break;
        } catch (Y) {
          if (Y instanceof Ul && ((K = (B = Y.data) == null ? void 0 : B.errors) == null ? void 0 : K[0].code) === "STRIPE_NOT_CONFIGURED") {
            $ += Lu;
            continue;
          } else {
            m(Y);
            return;
          }
        }
      }
    }
  }, b = async () => {
    var T;
    if (f(""), t)
      try {
        await h([
          { key: "stripe_connect_integration_token", value: t }
        ]), await k(), await h([
          { key: "portal_plans", value: JSON.stringify(["free", "monthly", "yearly"]) }
        ]);
      } catch (Q) {
        if (Q instanceof Ul && ((T = Q.data) != null && T.errors)) {
          f("Invalid secure key");
          return;
        } else {
          m(Q);
          return;
        }
      }
    else
      f("Please enter a secure key");
  }, { apiRoot: y } = Ds(), S = `${y}/members/stripe_connect?mode=${s ? "test" : "live"}`;
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ o.jsx(st, { level: 3, children: "Connect with Stripe" }),
      /* @__PURE__ */ o.jsx(
        mt,
        {
          direction: "rtl",
          label: "Test mode",
          labelClasses: `text-sm translate-y-[1px] ${s ? "text-[#EC6803]" : "text-grey-800"}`,
          toggleBg: "stripetest",
          onChange: (T) => l(T.target.checked)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs(st, { level: 6, grey: !0, children: [
      "Step 1 — ",
      /* @__PURE__ */ o.jsx("span", { className: "text-black dark:text-white", children: "Generate secure key" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "mb-4 mt-2", children: [
      "Click on the ",
      /* @__PURE__ */ o.jsx("strong", { children: "“Connect with Stripe”" }),
      " button to generate a secure key that connects your Ghost site with Stripe."
    ] }),
    /* @__PURE__ */ o.jsx(Rp, { href: S, tag: "a", target: "_blank" }),
    /* @__PURE__ */ o.jsxs(st, { className: "mb-2 mt-8", level: 6, grey: !0, children: [
      "Step 2 — ",
      /* @__PURE__ */ o.jsx("span", { className: "text-black dark:text-white", children: "Paste secure key" })
    ] }),
    /* @__PURE__ */ o.jsx(Na, { clearBg: !1, error: !!A, hint: A || void 0, placeholder: "Paste your secure key here", onChange: v }),
    e && /* @__PURE__ */ o.jsx(Ye, { className: "mt-5", color: "green", label: "Save Stripe settings", onClick: b })
  ] });
}, yJ = ({ onClose: e }) => {
  const { settings: n } = ct(), [t, a] = Et(n, ["stripe_connect_display_name", "stripe_connect_livemode"]), { refetch: s, isFetching: l } = Vu({
    searchParams: { filter: "status:paid", limit: "0" },
    enabled: !1
  }), { mutateAsync: A } = $k(), f = dt(), u = async () => {
    var m;
    const { data: d } = await s(), h = !!((m = d == null ? void 0 : d.meta) != null && m.pagination.total);
    xe.show(Kt, {
      title: "Disconnect Stripe",
      prompt: h ? "Cannot disconnect while there are members with active Stripe subscriptions." : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        "You‘re about to disconnect your Stripe account ",
        t,
        "from this site. This will automatically turn off paid memberships on this site."
      ] }),
      okLabel: h ? "" : "Disconnect",
      onOk: async (v) => {
        try {
          await A(null), v == null || v.remove(), e == null || e();
        } catch (k) {
          f(k);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs("section", { children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ o.jsx(Ye, { color: "red", disabled: l, icon: "link-broken", iconColorClass: "text-red", label: "Disconnect", link: !0, onClick: u }),
      /* @__PURE__ */ o.jsx(Ye, { icon: "close", iconColorClass: "dark:text-white", label: "Close", size: "sm", hideLabel: !0, link: !0, onClick: e })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "my-20 flex flex-col items-center", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "relative h-20 w-[200px]", children: [
        /* @__PURE__ */ o.jsx("img", { alt: "Ghost Logo", className: "absolute left-10 h-16 w-16", src: gJ }),
        /* @__PURE__ */ o.jsx("img", { alt: "Stripe Logo", className: "absolute right-10 h-16 w-16 rounded-2xl shadow-[-1.5px_0_0_1.5px_#fff] dark:shadow-[-1.5px_0_0_1.5px_black]", src: vJ })
      ] }),
      /* @__PURE__ */ o.jsxs(st, { className: "text-center", level: 3, children: [
        "You are connected with Stripe!",
        a ? null : " (Test mode)"
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "mt-1", children: [
        "Connected to ",
        /* @__PURE__ */ o.jsx("strong", { children: t || "Test mode" })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ o.jsx(st, { level: 6, children: "Read next" }),
      /* @__PURE__ */ o.jsxs("a", { className: "w-100 mt-5 flex flex-col items-stretch justify-between rounded-sm border border-grey-200 transition-all hover:border-grey-400 dark:border-grey-900 md:flex-row", href: "https://ghost.org/resources/managing-your-stripe-account/?ref=admin", rel: "noopener noreferrer", target: "_blank", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "order-2 p-4 md:order-1", children: [
          /* @__PURE__ */ o.jsx("div", { className: "font-bold", children: "How to setup and manage your Stripe account" }),
          /* @__PURE__ */ o.jsx("div", { className: "mt-1 text-sm text-grey-800 dark:text-grey-500", children: "Learn how to configure your Stripe account to work with Ghost, from custom branding to payment receipt emails." }),
          /* @__PURE__ */ o.jsxs("div", { className: "mt-3 flex items-center gap-1 text-sm text-grey-800 dark:text-grey-500", children: [
            /* @__PURE__ */ o.jsx("img", { alt: "Ghost Logo", className: "h-4 w-4", src: eb }),
            /* @__PURE__ */ o.jsx("strong", { children: "Ghost Resources" }),
            /* @__PURE__ */ o.jsx("span", { children: "·" }),
            /* @__PURE__ */ o.jsx("span", { children: "by Kym Ellis" })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "order-1 hidden w-[200px] shrink-0 items-center justify-center overflow-hidden md:!visible md:order-2 md:!flex", children: /* @__PURE__ */ o.jsx("img", { alt: "Bookmark Thumb", className: "min-h-full min-w-full shrink-0", src: mJ }) })
      ] })
    ] })
  ] });
}, EJ = ({ onClose: e }) => {
  const { localSettings: n, updateSetting: t, handleSave: a, saveState: s } = Ha(), [l, A] = Et(n, ["stripe_publishable_key", "stripe_secret_key"]), f = async () => {
    try {
      Xi.remove(), await a(), e();
    } catch (u) {
      if (u instanceof Ul) {
        tt({
          type: "pageError",
          message: "Failed to save settings. Please check you copied both keys correctly."
        });
        return;
      }
      throw u;
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(st, { level: 3, children: "Connect Stripe" }),
    /* @__PURE__ */ o.jsxs(yt, { marginBottom: !1, marginTop: !0, children: [
      /* @__PURE__ */ o.jsx(Re, { title: "Publishable key", value: l == null ? void 0 : l.toString(), onChange: (u) => t("stripe_publishable_key", u.target.value) }),
      /* @__PURE__ */ o.jsx(Re, { title: "Secure key", value: A == null ? void 0 : A.toString(), onChange: (u) => t("stripe_secret_key", u.target.value) }),
      /* @__PURE__ */ o.jsx(Ye, { className: "mt-5", color: "green", disabled: s === "saving", label: "Save Stripe settings", onClick: f })
    ] })
  ] });
}, MJ = () => {
  const { config: e, settings: n } = ct(), t = zn(n, "stripe_connect_account_id"), { updateRoute: a } = nt(), [s, l] = ue("start"), A = Sn(), f = () => {
    l("connect");
  }, u = () => {
    A.remove(), a("tiers");
  };
  let d;
  return e != null && e.stripeDirect || // Still show Stripe Direct to allow disabling the keys if the config was turned off but stripe direct is still set up
  Bi(n || [], e || {}) && !t ? d = /* @__PURE__ */ o.jsx(EJ, { onClose: u }) : t ? d = /* @__PURE__ */ o.jsx(yJ, { onClose: u }) : s === "start" ? d = /* @__PURE__ */ o.jsx(kJ, { onNext: f }) : d = /* @__PURE__ */ o.jsx(bJ, {}), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        a("tiers");
      },
      cancelLabel: "",
      footer: /* @__PURE__ */ o.jsx("div", { className: "mt-8" }),
      testId: "stripe-modal",
      title: "",
      width: t ? 740 : 520,
      hideXOnMobile: !0,
      children: d
    }
  );
}, SJ = xe.create(MJ), IJ = ({ tier: e }) => {
  var _;
  const n = (e == null ? void 0 : e.type) === "free", t = Sn(), { updateRoute: a } = nt(), { mutateAsync: s } = Zu(), { mutateAsync: l } = tb(), { mutateAsync: A } = ua(), [f, u] = At.useState(!!(e != null && e.trial_days)), d = dt(), { localSettings: h, siteData: m } = Ha(), [v] = Et(h, ["portal_plans"]), k = Aa("portalImprovements"), b = !n || k, y = JSON.parse((v == null ? void 0 : v.toString()) || "[]"), S = {
    name: () => T.name ? void 0 : "You must specify a name",
    monthly_price: () => T.type !== "free" ? xh(T.monthly_price || 0, T.currency, { allowZero: !1 }) : void 0,
    yearly_price: () => T.type !== "free" ? xh(T.yearly_price || 0, T.currency, { allowZero: !1 }) : void 0
  }, { formState: T, saveState: Q, updateForm: B, handleSave: K, errors: $, clearError: Y, okProps: V } = qn({
    initialState: {
      ...e || {},
      trial_days: ((_ = e == null ? void 0 : e.trial_days) == null ? void 0 : _.toString()) || "",
      currency: (e == null ? void 0 : e.currency) || nb[0].isoCode,
      visibility: (e == null ? void 0 : e.visibility) || "none",
      welcome_page_url: (e == null ? void 0 : e.welcome_page_url) || null
    },
    savingDelay: 500,
    savedDelay: 500,
    onValidate: () => {
      const F = {};
      return Object.entries(S).forEach(([W, H]) => {
        F[W] = H == null ? void 0 : H();
      }), F;
    },
    onSave: async () => {
      var pe;
      const { trial_days: F, currency: W, ...H } = T, Z = H;
      if (Z.benefits = (pe = Z.benefits) == null ? void 0 : pe.filter((Me) => Me), n || (Z.currency = W, Z.trial_days = parseInt(F)), e != null && e.id ? await s({ ...e, ...Z }) : await l(Z), n && k) {
        const Me = T.visibility === "public";
        let G = !1;
        y.includes("free") && !Me && (y.splice(y.indexOf("free"), 1), G = !0), !y.includes("free") && Me && (y.push("free"), G = !0), G && await A([
          {
            key: "portal_plans",
            value: JSON.stringify(y)
          }
        ]);
      }
    },
    onSavedStateReset: () => {
      t.remove(), a("tiers");
    },
    onSaveError: d
  }), re = Yp({
    items: T.benefits || [],
    setItems: (F) => B((W) => ({ ...W, benefits: F })),
    blank: "",
    canAddNewItem: (F) => !!F
  }), le = (F) => {
    F.target.checked ? (u(!0), B((W) => ({ ...W, trial_days: e != null && e.trial_days ? e == null ? void 0 : e.trial_days.toString() : "7" }))) : (u(!1), B((W) => ({ ...W, trial_days: "0" })));
  }, ne = Ct(!1);
  Te(() => {
    var F, W;
    ne.current && ((F = S.monthly_price) == null || F.call(S), (W = S.yearly_price) == null || W.call(S)), ne.current = !0;
  }, [T.currency]);
  const ae = () => {
    if (e) {
      const F = e.active ? "Archive tier" : "Reactivate tier", W = e.active ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "mb-6", children: [
          "Members will no longer be able to subscribe to ",
          /* @__PURE__ */ o.jsx("strong", { children: e.name }),
          " and it will be removed from the list of available tiers in portal."
        ] }),
        /* @__PURE__ */ o.jsx("div", { children: "Existing members on this tier will remain unchanged. Offers using this tier will be disabled." })
      ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "mb-6", children: [
          "Reactivating ",
          /* @__PURE__ */ o.jsx("strong", { children: e.name }),
          " will re-enable it as an option in portal and allow new members to subscribe to this tier."
        ] }),
        /* @__PURE__ */ o.jsx("div", { children: "Existing members will remain unchanged." })
      ] }), H = e.active ? "Archive" : "Reactivate";
      xe.show(Kt, {
        title: F,
        prompt: W,
        okLabel: H,
        cancelLabel: "Cancel",
        okColor: e.active ? "red" : "black",
        onOk: (Z) => {
          s({ ...e, active: !e.active }), Z == null || Z.remove(), tt({
            type: "success",
            message: `Tier ${e.active ? "archived" : "reactivated"} successfully`
          });
        }
      });
    }
  };
  let j = {};
  return e && (e.active && e.type !== "free" ? j = {
    label: "Archive tier",
    color: "red",
    link: !0,
    onClick: ae
  } : e.active || (j = {
    label: "Reactivate tier",
    color: "green",
    link: !0,
    onClick: ae
  })), /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: () => {
        a("tiers");
      },
      buttonsDisabled: V.disabled,
      dirty: Q === "unsaved",
      leftButtonProps: j,
      okColor: V.color,
      okLabel: V.label || "Save & close",
      size: "lg",
      testId: "tier-detail-modal",
      title: e ? e.active ? "Edit tier" : "Edit archived tier" : "New tier",
      stickyFooter: !0,
      onOk: async () => {
        if (Xi.remove(), !await K({ fakeWhenUnchanged: !0 })) {
          tt({
            type: "pageError",
            message: "Can't save tier, please double check that you've filled all mandatory fields."
          });
          return;
        }
      },
      children: /* @__PURE__ */ o.jsxs("div", { className: "-mb-8 mt-8 flex items-start gap-8", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex grow flex-col gap-8", children: [
          /* @__PURE__ */ o.jsxs(yt, { marginBottom: !1, title: "Basic", grouped: !0, children: [
            b && /* @__PURE__ */ o.jsx(
              Re,
              {
                autoComplete: "off",
                error: !!$.name,
                hint: $.name,
                placeholder: n ? "Free" : "Bronze",
                title: "Name",
                value: T.name || "",
                autoFocus: !0,
                onChange: (F) => B((W) => ({ ...W, name: F.target.value })),
                onKeyDown: () => Y("name")
              }
            ),
            /* @__PURE__ */ o.jsx(
              Re,
              {
                autoComplete: "off",
                autoFocus: n,
                placeholder: n ? "Free preview" : "Full access to premium content",
                title: "Description",
                value: T.description || "",
                onChange: (F) => B((W) => ({ ...W, description: F.target.value }))
              }
            ),
            !n && /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-10 md:flex-row", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "basis-1/2", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "mb-1 flex h-6 items-center justify-between", children: [
                  /* @__PURE__ */ o.jsx(st, { level: 6, children: "Prices" }),
                  /* @__PURE__ */ o.jsx("div", { className: "-mr-2 w-[50px]", children: /* @__PURE__ */ o.jsx(
                    En,
                    {
                      border: !1,
                      containerClassName: "font-medium",
                      controlClasses: { menu: "w-18" },
                      options: vh(),
                      selectedOption: vh().flatMap((F) => F.options).find((F) => F.value === T.currency),
                      size: "xs",
                      clearBg: !0,
                      isSearchable: !0,
                      onSelect: (F) => B((W) => ({ ...W, currency: F == null ? void 0 : F.value }))
                    }
                  ) })
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ o.jsx(
                    wh,
                    {
                      error: !!$.monthly_price,
                      hint: $.monthly_price,
                      placeholder: "5",
                      rightPlaceholder: `${T.currency}/month`,
                      title: "Monthly price",
                      valueInCents: T.monthly_price || "",
                      hideTitle: !0,
                      onBlur: (F) => F.target.value === "" ? B((W) => ({ ...W, monthly_price: 0 })) : null,
                      onChange: (F) => B((W) => ({ ...W, monthly_price: F })),
                      onKeyDown: () => Y("monthly_price")
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    wh,
                    {
                      error: !!$.yearly_price,
                      hint: $.yearly_price,
                      placeholder: "50",
                      rightPlaceholder: `${T.currency}/year`,
                      title: "Yearly price",
                      valueInCents: T.yearly_price || "",
                      hideTitle: !0,
                      onBlur: (F) => F.target.value === "" ? B((W) => ({ ...W, yearly_price: 0 })) : null,
                      onChange: (F) => B((W) => ({ ...W, yearly_price: F })),
                      onKeyDown: () => Y("yearly_price")
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "basis-1/2", children: [
                /* @__PURE__ */ o.jsx("div", { className: "mb-1 flex h-6 flex-col justify-center", children: /* @__PURE__ */ o.jsx(mt, { checked: f, label: "Add a free trial", labelStyle: "heading", onChange: le }) }),
                /* @__PURE__ */ o.jsx(
                  Re,
                  {
                    disabled: !f,
                    hint: /* @__PURE__ */ o.jsxs("div", { className: "mt-1", children: [
                      "Members will be subscribed at full price once the trial ends. ",
                      /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://ghost.org/", rel: "noreferrer", target: "_blank", children: "Learn more" })
                    ] }),
                    placeholder: "0",
                    rightPlaceholder: "days",
                    title: "Trial days",
                    value: T.trial_days,
                    hideTitle: !0,
                    onChange: (F) => B((W) => ({ ...W, trial_days: F.target.value.replace(/[^\d]/, "") }))
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ o.jsx(
              Ip,
              {
                baseUrl: m == null ? void 0 : m.url,
                hint: `Redirect to this URL after signup ${n ? "" : " for premium membership"}`,
                placeholder: m == null ? void 0 : m.url,
                title: "Welcome page",
                value: T.welcome_page_url || null,
                nullable: !0,
                transformPathWithoutSlash: !0,
                onChange: (F) => B((W) => ({ ...W, welcome_page_url: F || null }))
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs(yt, { gap: "none", title: "Benefits", grouped: !0, children: [
            /* @__PURE__ */ o.jsx("div", { className: "-mt-3", children: /* @__PURE__ */ o.jsx(
              Jp,
              {
                items: re.items,
                itemSeparator: !1,
                renderItem: ({ id: F, item: W }) => /* @__PURE__ */ o.jsxs("div", { className: "relative flex w-full items-center gap-5", children: [
                  /* @__PURE__ */ o.jsx("div", { className: "absolute left-[-32px] top-[7px] flex h-6 w-6 items-center justify-center bg-white group-hover:hidden dark:bg-black", children: /* @__PURE__ */ o.jsx(Qt, { name: "check", size: "sm" }) }),
                  /* @__PURE__ */ o.jsx(
                    Re,
                    {
                      value: W,
                      onChange: (H) => re.updateItem(F, H.target.value)
                    }
                  ),
                  /* @__PURE__ */ o.jsx(Ye, { className: "absolute right-1 top-1 z-10", icon: "trash", iconColorClass: "opacity-0 group-hover:opacity-100", size: "sm", onClick: () => re.removeItem(F) })
                ] }),
                onMove: re.moveItem
              }
            ) }),
            /* @__PURE__ */ o.jsxs("div", { className: "relative mt-1 flex items-center gap-3", children: [
              /* @__PURE__ */ o.jsx(Qt, { className: "dark:text-white", name: "check", size: "sm" }),
              /* @__PURE__ */ o.jsx(
                Re,
                {
                  className: "grow",
                  containerClassName: "w-100",
                  placeholder: "Expert analysis",
                  title: "New benefit",
                  value: re.newItem,
                  hideTitle: !0,
                  onChange: (F) => re.setNewItem(F.target.value),
                  onKeyDown: (F) => {
                    F.key === "Enter" && re.addItem();
                  }
                }
              ),
              /* @__PURE__ */ o.jsx(
                Ye,
                {
                  className: "absolute right-1 top-1 z-10",
                  color: "green",
                  icon: "add",
                  iconColorClass: "text-white",
                  label: "Add",
                  size: "sm",
                  hideLabel: !0,
                  onClick: () => re.addItem()
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "sticky top-[96px] hidden shrink-0 basis-[380px] min-[920px]:!visible min-[920px]:!block", children: /* @__PURE__ */ o.jsx(rb, { isFreeTier: n, tier: T }) })
      ] })
    }
  );
}, JJ = ({ params: e }) => {
  const { data: { tiers: n, isEnd: t } = {}, fetchNextPage: a } = Vi();
  let s;
  return Te(() => {
    e != null && e.id && !s && !t && a();
  }, [a, t, e == null ? void 0 : e.id, s]), e != null && e.id && (s = n == null ? void 0 : n.find(({ id: l }) => l === (e == null ? void 0 : e.id)), !s) ? null : /* @__PURE__ */ o.jsx(IJ, { tier: s });
}, TJ = xe.create(JJ), CJ = xe.create(() => {
  const { updateRoute: e } = nt(), n = xe.useModal(), { settings: t } = ct(), [a] = Et(t, ["unsplash"]), { mutateAsync: s } = ua(), l = dt(), A = async (f) => {
    const u = [
      { key: "unsplash", value: f.target.checked }
    ];
    try {
      await s(u);
    } catch (d) {
      l(d);
    }
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        e("integrations");
      },
      okColor: "black",
      okLabel: "Save & close",
      testId: "unsplash-modal",
      title: "",
      onOk: () => {
        n.remove(), e("integrations");
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Beautiful, free photos",
            icon: /* @__PURE__ */ o.jsx(ab, { className: "h-12 w-12" }),
            title: "Unsplash"
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "mt-7", children: /* @__PURE__ */ o.jsx(yt, { marginBottom: !1, grouped: !0, children: /* @__PURE__ */ o.jsx(
          mt,
          {
            checked: a,
            direction: "rtl",
            hint: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              "Enable ",
              /* @__PURE__ */ o.jsx("a", { className: "text-green", href: "https://unsplash.com", rel: "noopener noreferrer", target: "_blank", children: "Unsplash" }),
              " image integration for your posts"
            ] }),
            label: "Enable Unsplash",
            onChange: A
          }
        ) }) })
      ]
    }
  );
}), DJ = [
  "1234567890",
  "qwertyuiop",
  "qwertzuiop",
  "asdfghjkl;",
  "abcdefghij",
  "0987654321",
  "1q2w3e4r5t",
  "12345asdfg"
], RJ = ["ghost", "password", "passw0rd"], jJ = (e) => {
  let n = {}, t, a = !0;
  t = e.length / 2;
  for (let s = 0; s < e.length; s += 1)
    n[e[s]] ? n[e[s]] += 1 : n[e[s]] = 1;
  for (let s in n)
    if (n[s] >= t)
      return a = !1, a;
  return a;
}, OJ = ({ user: e }) => {
  const { currentUser: n, config: t, siteData: a } = ct(), [s, l] = ue(!1), [A, f] = ue(""), [u, d] = ue(""), [h, m] = ue(""), [v, k] = ue(""), [b, y] = ue({}), S = Ct(null), T = Ct(null), { mutateAsync: Q } = sb(), B = dt(), K = e.id === n.id, $ = ({ password: ne, confirmPassword: ae }) => {
    if (K && !A)
      return { oldPassword: "Your current password is required to set a new one" };
    if (ne !== ae)
      return {
        newPassword: "Your new passwords do not match",
        confirmNewPassword: "Your new passwords do not match"
      };
    let j = t.blogUrl || window.location.host, _ = a.title, F;
    if (j = j.replace(/^http(s?):\/\//, ""), F = j.match(/\/$/) ? j : `${j}/`, _ = _ && _.trim().toLowerCase(), ne.length < 10)
      return { newPassword: "Password must be at least 10 characters long." };
    ne = ne.toString();
    for (const W of DJ)
      if (W === ne)
        return { newPassword: "Sorry, you cannot use an insecure password." };
    if (ne.toLowerCase() === e.email.toLowerCase())
      return { newPassword: "Sorry, you cannot use an insecure password." };
    for (const W of RJ)
      if (ne.toLowerCase().indexOf(W) >= 0)
        return { newPassword: "Sorry, you cannot use an insecure password." };
    return ne.toLowerCase() === _ ? { newPassword: "Sorry, you cannot use an insecure password." } : ne.toLowerCase() === j || ne.toLowerCase() === F ? { newPassword: "Sorry, you cannot use an insecure password." } : jJ(ne) ? {} : { newPassword: "Sorry, you cannot use an insecure password." };
  };
  Te(() => {
    v === "saved" && setTimeout(() => {
      k(""), l(!1);
    }, 2500);
  }, [v]);
  const Y = () => {
    l(!0);
  }, V = /* @__PURE__ */ o.jsx(
    Ye,
    {
      color: "grey",
      label: "Change password",
      onClick: Y
    }
  );
  let re = "Change password";
  v === "saving" ? re = "Updating..." : v === "saved" && (re = "Updated");
  const le = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    K && /* @__PURE__ */ o.jsx(
      Re,
      {
        error: !!b.oldPassword,
        hint: b.oldPassword,
        title: "Old password",
        type: "password",
        value: A,
        onChange: (ne) => {
          f(ne.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      Re,
      {
        error: !!b.newPassword,
        hint: b.newPassword,
        inputRef: S,
        title: "New password",
        type: "password",
        value: u,
        onChange: (ne) => {
          d(ne.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      Re,
      {
        error: !!b.confirmNewPassword,
        hint: b.confirmNewPassword,
        inputRef: T,
        title: "Verify password",
        type: "password",
        value: h,
        onChange: (ne) => {
          m(ne.target.value);
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        color: "red",
        label: re,
        onClick: async () => {
          k("saving");
          const ne = $({ password: u, confirmPassword: h });
          if (y(ne), Object.keys(ne).length > 0) {
            f(""), d(""), m(""), k("");
            return;
          }
          try {
            await Q({
              newPassword: u,
              confirmNewPassword: h,
              oldPassword: A,
              userId: e == null ? void 0 : e.id
            }), k("saved");
          } catch (ae) {
            k(""), tt({
              type: "pageError",
              message: ae instanceof ib ? ae.message : "Couldn't update password. Please try again."
            }), B(ae, { withToast: !1 });
          }
        }
      }
    )
  ] });
  return /* @__PURE__ */ o.jsx(
    rA,
    {
      border: !1,
      customHeader: /* @__PURE__ */ o.jsx(st, { level: 4, children: "Password" }),
      title: "Password",
      children: s ? le : V
    }
  );
}, Rf = ({ children: e }) => /* @__PURE__ */ o.jsx(st, { level: 4, children: e }), QJ = ({ user: e, setUserData: n }) => {
  const t = Aa("webmentions"), a = Aa("recommendations");
  return /* @__PURE__ */ o.jsxs(qi, { children: [
    /* @__PURE__ */ o.jsx(
      mt,
      {
        checked: e.comment_notifications,
        direction: "rtl",
        hint: "Every time a member comments on one of your posts",
        label: "Comments",
        onChange: (s) => {
          n == null || n({ ...e, comment_notifications: s.target.checked });
        }
      }
    ),
    Ll(e) && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      t && /* @__PURE__ */ o.jsx(
        mt,
        {
          checked: e.mention_notifications,
          direction: "rtl",
          hint: "Every time another site links to your work",
          label: "Mentions",
          onChange: (s) => {
            n == null || n({ ...e, mention_notifications: s.target.checked });
          }
        }
      ),
      a && /* @__PURE__ */ o.jsx(
        mt,
        {
          checked: e.recommendation_notifications,
          direction: "rtl",
          hint: "Every time another publisher recommends you to their audience",
          label: "Recommendations",
          onChange: (s) => {
            n == null || n({ ...e, recommendation_notifications: s.target.checked });
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        mt,
        {
          checked: e.free_member_signup_notification,
          direction: "rtl",
          hint: "Every time a new free member signs up",
          label: "New signups",
          onChange: (s) => {
            n == null || n({ ...e, free_member_signup_notification: s.target.checked });
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        mt,
        {
          checked: e.paid_subscription_started_notification,
          direction: "rtl",
          hint: "Every time a member starts a new paid subscription",
          label: "New paid members",
          onChange: (s) => {
            n == null || n({ ...e, paid_subscription_started_notification: s.target.checked });
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        mt,
        {
          checked: e.paid_subscription_canceled_notification,
          direction: "rtl",
          hint: "Every time a member cancels their paid subscription",
          label: "Paid member cancellations",
          onChange: (s) => {
            n == null || n({ ...e, paid_subscription_canceled_notification: s.target.checked });
          }
        }
      ),
      /* @__PURE__ */ o.jsx(
        mt,
        {
          checked: e.milestone_notifications,
          direction: "rtl",
          hint: "Occasional summaries of your audience & revenue growth",
          label: "Milestones",
          onChange: (s) => {
            n == null || n({ ...e, milestone_notifications: s.target.checked });
          }
        }
      )
    ] })
  ] });
}, NJ = ({ user: e, setUserData: n }) => /* @__PURE__ */ o.jsx(
  rA,
  {
    border: !1,
    customHeader: /* @__PURE__ */ o.jsx(Rf, { children: "Email notifications" }),
    title: "Email notifications",
    children: /* @__PURE__ */ o.jsx(QJ, { setUserData: n, user: e })
  }
), HJ = ({ user: e, setUserData: n }) => {
  const { data: { roles: t } = {} } = ku();
  return yu(e) ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(st, { level: 6, children: "Role" }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex h-[295px] flex-col items-center justify-center gap-3 bg-grey-75 px-10 py-20 text-center text-sm text-grey-800 dark:bg-grey-950 dark:text-white", children: [
      /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-grey-800 dark:text-white", name: "crown", size: "lg" }),
      "This user is the owner of the site. To change their role, you need to transfer the ownership first."
    ] })
  ] }) : /* @__PURE__ */ o.jsx(
    Wu,
    {
      id: "role",
      options: [
        {
          hint: "Can create and edit their own posts, but cannot publish. An Editor needs to approve and publish for them.",
          label: "Contributor",
          value: "contributor"
        },
        {
          hint: "A trusted user who can create, edit and publish their own posts, but can’t modify others.",
          label: "Author",
          value: "author"
        },
        {
          hint: "Can invite and manage other Authors and Contributors, as well as edit and publish any posts on the site.",
          label: "Editor",
          value: "editor"
        },
        {
          hint: "Trusted staff user who should be able to manage all content and users, as well as site settings and options.",
          label: "Administrator",
          value: "administrator"
        }
      ],
      selectedOption: e.roles[0].name.toLowerCase(),
      title: "Role",
      onSelect: (a) => {
        const s = t == null ? void 0 : t.find((l) => l.name.toLowerCase() === a.toLowerCase());
        s && (n == null || n({ ...e, roles: [s] }));
      }
    }
  );
}, BJ = ({ errors: e, validateField: n, clearError: t, user: a, setUserData: s }) => {
  const { currentUser: l } = ct();
  return /* @__PURE__ */ o.jsxs(qi, { children: [
    /* @__PURE__ */ o.jsx(
      Re,
      {
        error: !!(e != null && e.name),
        hint: (e == null ? void 0 : e.name) || "Use real name so people can recognize you",
        title: "Full name",
        value: a.name,
        onBlur: (A) => {
          n("name", A.target.value);
        },
        onChange: (A) => {
          s({ ...a, name: A.target.value });
        },
        onKeyDown: () => t("name")
      }
    ),
    /* @__PURE__ */ o.jsx(
      Re,
      {
        error: !!(e != null && e.email),
        hint: (e == null ? void 0 : e.email) || "Used for notifications",
        title: "Email",
        value: a.email,
        onBlur: (A) => {
          n("email", A.target.value);
        },
        onChange: (A) => {
          s({ ...a, email: A.target.value });
        },
        onKeyDown: () => t("email")
      }
    ),
    /* @__PURE__ */ o.jsx(
      Re,
      {
        hint: "https://example.com/author",
        title: "Slug",
        value: a.slug,
        onChange: (A) => {
          s({ ...a, slug: A.target.value });
        }
      }
    ),
    Ll(l) && /* @__PURE__ */ o.jsx(HJ, { setUserData: s, user: a })
  ] });
}, UJ = (e) => /* @__PURE__ */ o.jsx(
  rA,
  {
    border: !1,
    customHeader: /* @__PURE__ */ o.jsx(Rf, { children: "Basic info" }),
    title: "Basic",
    children: /* @__PURE__ */ o.jsx(BJ, { ...e })
  }
), LJ = ({ errors: e, clearError: n, validateField: t, user: a, setUserData: s }) => {
  var d;
  const [l, A] = ue(a.facebook ? ob(a.facebook) : ""), [f, u] = ue(a.twitter ? lb(a.twitter) : "");
  return /* @__PURE__ */ o.jsxs(qi, { children: [
    /* @__PURE__ */ o.jsx(
      Re,
      {
        error: !!(e != null && e.location),
        hint: (e == null ? void 0 : e.location) || "Where in the world do you live?",
        title: "Location",
        value: a.location || "",
        onBlur: (h) => {
          t("location", h.target.value);
        },
        onChange: (h) => {
          s({ ...a, location: h.target.value });
        },
        onKeyDown: () => n("location")
      }
    ),
    /* @__PURE__ */ o.jsx(
      Re,
      {
        error: !!(e != null && e.url),
        hint: (e == null ? void 0 : e.url) || "Have a website or blog other than this one? Link it!",
        title: "Website",
        value: a.website || "",
        onBlur: (h) => {
          t("url", h.target.value);
        },
        onChange: (h) => {
          s({ ...a, website: h.target.value });
        },
        onKeyDown: () => n("url")
      }
    ),
    /* @__PURE__ */ o.jsx(
      Re,
      {
        error: !!(e != null && e.facebook),
        hint: (e == null ? void 0 : e.facebook) || "URL of your personal Facebook Profile",
        title: "Facebook profile",
        value: l,
        onBlur: (h) => {
          if (t("facebook", h.target.value)) {
            const m = jp(h.target.value);
            A(m), s({ ...a, facebook: Ab(m) });
          }
        },
        onChange: (h) => {
          A(h.target.value);
        },
        onKeyDown: () => n("facebook")
      }
    ),
    /* @__PURE__ */ o.jsx(
      Re,
      {
        error: !!(e != null && e.twitter),
        hint: (e == null ? void 0 : e.twitter) || "URL of your X profile",
        title: "X (formerly Twitter) profile",
        value: f,
        onBlur: (h) => {
          if (t("twitter", h.target.value)) {
            const m = Op(h.target.value);
            u(m), s({ ...a, twitter: cb(m) });
          }
        },
        onChange: (h) => {
          u(h.target.value);
        },
        onKeyDown: () => n("twitter")
      }
    ),
    /* @__PURE__ */ o.jsx(
      Na,
      {
        error: !!(e != null && e.bio),
        hint: (e == null ? void 0 : e.bio) || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          "Recommended: 200 characters. You‘ve used ",
          /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((d = a.bio) == null ? void 0 : d.length) || 0 })
        ] }),
        title: "Bio",
        value: a.bio || "",
        onBlur: (h) => {
          t("bio", h.target.value);
        },
        onChange: (h) => {
          s({ ...a, bio: h.target.value });
        },
        onKeyDown: () => n("bio")
      }
    )
  ] });
}, PJ = (e) => /* @__PURE__ */ o.jsx(
  rA,
  {
    border: !1,
    customHeader: /* @__PURE__ */ o.jsx(Rf, { children: "Details" }),
    title: "Details",
    children: /* @__PURE__ */ o.jsx(LJ, { ...e })
  }
), zJ = "StaffTokenResponseType", YJ = tA({
  dataType: zJ,
  path: "/users/me/token/"
}), FJ = Vn({
  path: () => "/users/me/token/",
  method: "PUT"
}), ZJ = () => {
  const { refetch: e } = YJ({
    enabled: !1
  }), n = dt(), [t, a] = ue(""), { mutateAsync: s } = FJ();
  Te(() => {
    (async () => {
      var u;
      const f = await e();
      (u = f == null ? void 0 : f.data) != null && u.apiKey && a(`${f.data.apiKey.id}:${f.data.apiKey.secret}`);
    })();
  }, [e]);
  const l = () => {
    xe.show(Kt, {
      title: "Regenerate your Staff Access Token",
      prompt: "You can regenerate your Staff Access Token any time, but any scripts or applications using it will need to be updated.",
      okLabel: "Regenerate your Staff Access Token",
      okColor: "red",
      onOk: async (A) => {
        try {
          const f = await s([]);
          a(`${f.apiKey.id}:${f.apiKey.secret}`), A == null || A.remove();
        } catch (f) {
          n(f);
        }
      }
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx(st, { className: "mb-2", level: 6, grey: !0, children: "Staff access token" }),
    /* @__PURE__ */ o.jsx($u, { hasLabel: !1, keys: [
      {
        text: t || "",
        onRegenerate: l
      }
    ] })
  ] });
}, Ql = {
  name: ({ name: e }) => {
    let n = "";
    return e || (n = "Name is required"), e && e.length > 191 && (n = "Name is too long"), n;
  },
  email: ({ email: e }) => Qr.isEmail(e || "") ? "" : "Please enter a valid email address",
  url: ({ url: e }) => !e || Qr.isURL(e) ? "" : "Enter a valid URL",
  bio: ({ bio: e }) => !e || e.length <= 200 ? "" : "Bio is too long",
  location: ({ location: e }) => !e || e.length <= 150 ? "" : "Location is too long",
  website: ({ website: e }) => !e || Qr.isURL(e) && e.length <= 2e3 ? "" : "Website is not a valid url",
  facebook: ({ facebook: e }) => {
    try {
      return jp(e || ""), "";
    } catch (n) {
      return n instanceof Error ? n.message : "";
    }
  },
  twitter: ({ twitter: e }) => {
    try {
      return Op(e || ""), "";
    } catch (n) {
      return n instanceof Error ? n.message : "";
    }
  }
}, GJ = () => /* @__PURE__ */ o.jsxs("button", { className: "flex h-8 cursor-pointer items-center justify-center rounded bg-[rgba(0,0,0,0.75)] px-3 opacity-80 hover:opacity-100", type: "button", children: [
  /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Actions" }),
  /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-white", name: "ellipsis", size: "md" })
] }), KJ = ({ user: e }) => {
  const { updateRoute: n } = nt(), { ownerUser: t } = zu(), { currentUser: a } = ct(), s = dt(), { formState: l, setFormState: A, saveState: f, handleSave: u, updateForm: d, errors: h, setErrors: m, clearError: v, okProps: k } = qn({
    initialState: e,
    savingDelay: 500,
    savedDelay: 500,
    onValidate: (G) => Object.entries(Ql).reduce((Ie, [be, Ee]) => {
      const de = Ee(G);
      return de && (Ie[be] = de), Ie;
    }, {}),
    onSave: async (G) => {
      await (Q == null ? void 0 : Q(G));
    },
    onSavedStateReset: () => {
      S.remove(), V();
    },
    onSaveError: s
  }), b = (G) => d(() => G), y = (G, Ie) => {
    var Ee;
    const be = (Ee = Ql[G]) == null ? void 0 : Ee.call(Ql, { [G]: Ie });
    return be ? (m({ ...h, [G]: be }), !1) : (v(G), !0);
  }, S = Sn(), { mutateAsync: T } = Qs(), { mutateAsync: Q } = ub(), { mutateAsync: B } = fb(), { mutateAsync: K } = db(), $ = Bs(), Y = Ep(), V = sn(() => {
    xs(a) ? n("staff") : n({ isExternal: !0, route: "dashboard" });
  }, [a, n]), re = async (G) => {
    if (G.status === "inactive" && G.roles[0].name !== "Contributor")
      try {
        await ($ == null ? void 0 : $.errorIfWouldGoOverLimit("staff"));
      } catch (be) {
        if (be instanceof Ua) {
          xe.show(_i, {
            formSheet: !0,
            prompt: be.message || "Your current plan doesn't support more users.",
            onOk: () => n({ route: "/pro", isExternal: !0 })
          });
          return;
        } else
          throw be;
      }
    let Ie = "This user will no longer be able to log in but their posts will be kept.";
    G.status === "inactive" && (Ie = "This user will be able to log in again and will have the same permissions they had previously."), xe.show(Kt, {
      title: "Are you sure you want to suspend this user?",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("strong", { children: "WARNING:" }),
        " ",
        Ie
      ] }),
      okLabel: G.status === "inactive" ? "Un-suspend" : "Suspend",
      okRunningLabel: G.status === "inactive" ? "Un-suspending..." : "Suspending...",
      okColor: "red",
      onOk: async (be) => {
        const Ee = {
          ...G,
          status: G.status === "inactive" ? "active" : "inactive"
        };
        try {
          await Q(Ee), A(() => Ee), be == null || be.remove(), tt({
            message: G.status === "inactive" ? "User un-suspended" : "User suspended",
            type: "success"
          });
        } catch (de) {
          s(de);
        }
      }
    });
  }, le = (G, { owner: Ie }) => {
    xe.show(Kt, {
      title: "Are you sure you want to delete this user?",
      prompt: /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("p", { className: "mb-3", children: [
          /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: G.name || G.email }),
          " will be permanently deleted and all their posts will be automatically assigned to the ",
          /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: Ie.name }),
          "."
        ] }),
        /* @__PURE__ */ o.jsxs("p", { children: [
          "To make these easy to find in the future, each post will be given an internal tag of ",
          /* @__PURE__ */ o.jsxs("span", { className: "font-bold", children: [
            "#",
            e.slug
          ] })
        ] })
      ] }),
      okLabel: "Delete user",
      okColor: "red",
      onOk: async (be) => {
        try {
          await B(G == null ? void 0 : G.id), be == null || be.remove(), S == null || S.remove(), V(), tt({
            message: "User deleted",
            type: "success"
          });
        } catch (Ee) {
          s(Ee);
        }
      }
    });
  }, ne = () => {
    xe.show(Kt, {
      title: "Transfer Ownership",
      prompt: "Are you sure you want to transfer the ownership of this blog? You will not be able to undo this action.",
      okLabel: "Yep — I'm sure",
      okColor: "red",
      onOk: async (G) => {
        try {
          await K(e.id), G == null || G.remove(), tt({
            message: "Ownership transferred",
            type: "success"
          });
        } catch (Ie) {
          s(Ie);
        }
      }
    });
  }, ae = async (G, Ie) => {
    try {
      const be = jr(await T({ file: Ie }));
      switch (G) {
        case "cover_image":
          d((Ee) => ({ ...Ee, cover_image: be }));
          break;
        case "profile_image":
          d((Ee) => ({ ...Ee, profile_image: be }));
          break;
      }
    } catch (be) {
      s(be);
    }
  }, j = (G) => {
    switch (G) {
      case "cover_image":
        d((Ie) => ({ ...Ie, cover_image: "" }));
        break;
      case "profile_image":
        d((Ie) => ({ ...Ie, profile_image: "" }));
        break;
    }
  }, _ = Ll(a) || kh(a) && bh(e);
  let F = [];
  if (yu(a) && hb(l) && l.status !== "inactive" && F.push({
    id: "make-owner",
    label: "Make owner",
    onClick: ne
  }), l.id !== a.id && (Ll(a) && !yu(e) || kh(a) && bh(e))) {
    let G = l.status === "inactive" ? "Un-suspend user" : "Suspend user";
    F.push({
      id: "delete-user",
      label: "Delete user",
      onClick: () => {
        le(e, { owner: t });
      }
    }, {
      id: "suspend-user",
      label: G,
      onClick: () => {
        re(l);
      }
    });
  }
  F.push({
    id: "view-user-activity",
    label: "View user activity",
    onClick: () => {
      S.remove(), n(`history/view/${l.id}`);
    }
  });
  const W = "bg-[rgba(0,0,0,0.75)] rounded text-sm text-white flex items-center justify-center px-3 h-8 opacity-80 hover:opacity-100 transition-all cursor-pointer font-medium nowrap", H = ft(
    W
  ), Z = ft(
    W
  ), pe = ft(
    W
  ), Me = l.status === "inactive" ? " (Suspended)" : "";
  return /* @__PURE__ */ o.jsx(
    It,
    {
      afterClose: V,
      animate: xs(a),
      backDrop: xs(a),
      buttonsDisabled: k.disabled,
      dirty: f === "unsaved",
      okColor: k.color,
      okLabel: k.label || "Save & close",
      size: xs(a) ? "lg" : "bleed",
      stickyFooter: !0,
      testId: "user-detail-modal",
      onOk: async () => {
        Xi.remove(), await u({ fakeWhenUnchanged: !0 }) || tt({
          type: "pageError",
          message: "Can't save user, please double check that you've filled all mandatory fields."
        });
      },
      children: /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: `relative ${xs(a) ? "-mx-8 -mt-8 rounded-t" : "-mx-10 -mt-10"} bg-gradient-to-tr from-grey-900 to-black`, children: /* @__PURE__ */ o.jsxs("div", { className: "flex min-h-[40vmin] flex-wrap items-end justify-between bg-cover bg-center", style: {
          backgroundImage: `url(${l.cover_image})`
        }, children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex w-full max-w-[620px] flex-col gap-5 p-8 md:max-w-[auto] md:flex-row md:items-center", children: [
            /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(
              Nr,
              {
                deleteButtonClassName: "md:invisible absolute pr-3 -right-2 -top-2 flex h-8 w-16 cursor-pointer items-center justify-end rounded-full bg-[rgba(0,0,0,0.75)] text-white group-hover:!visible",
                deleteButtonContent: /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-white", name: "trash", size: "sm" }),
                editButtonClassName: "md:invisible absolute right-[22px] -top-2 flex h-8 w-8 cursor-pointer items-center justify-center text-white group-hover:!visible z-20",
                fileUploadClassName: "rounded-full bg-black flex items-center justify-center opacity-80 transition hover:opacity-100 -ml-2 cursor-pointer h-[80px] w-[80px]",
                fileUploadProps: { dragIndicatorClassName: "rounded-full" },
                id: "avatar",
                imageClassName: "w-full h-full object-cover rounded-full shrink-0",
                imageContainerClassName: "relative group bg-cover bg-center -ml-2 h-[80px] w-[80px] shrink-0",
                imageURL: l.profile_image ?? void 0,
                pintura: {
                  isEnabled: Y.isEnabled,
                  openEditor: async () => Y.openEditor({
                    image: l.profile_image || "",
                    handleSave: async (G) => {
                      ae("profile_image", G);
                    }
                  })
                },
                unstyled: !0,
                width: "80px",
                onDelete: () => {
                  j("profile_image");
                },
                onUpload: (G) => {
                  ae("profile_image", G);
                },
                children: /* @__PURE__ */ o.jsx(Qt, { colorClass: "text-white", name: "user-add", size: "lg" })
              }
            ) }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs(st, { styles: "break-words md:break-normal text-white", children: [
                e.name,
                Me
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "text-md font-semibold capitalize text-white", children: e.roles[0].name.toLowerCase() })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-nowrap items-end gap-4 p-8", children: [
            /* @__PURE__ */ o.jsx(
              Nr,
              {
                buttonContainerClassName: "flex items-end gap-4 justify-end flex-nowrap",
                deleteButtonClassName: Z,
                deleteButtonContent: "Delete cover image",
                editButtonClassName: pe,
                fileUploadClassName: H,
                id: "cover-image",
                imageClassName: "hidden",
                imageURL: l.cover_image || "",
                pintura: {
                  isEnabled: Y.isEnabled,
                  openEditor: async () => Y.openEditor({
                    image: l.cover_image || "",
                    handleSave: async (G) => {
                      ae("cover_image", G);
                    }
                  })
                },
                unstyled: !0,
                onDelete: () => {
                  j("cover_image");
                },
                onUpload: (G) => {
                  ae("cover_image", G);
                },
                children: "Upload cover image"
              }
            ),
            _ && /* @__PURE__ */ o.jsx("div", { className: "z-10", children: /* @__PURE__ */ o.jsx(Pp, { items: F, position: "right", trigger: /* @__PURE__ */ o.jsx(GJ, {}) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ o.jsxs("div", { className: `${!xs(a) && "mx-auto max-w-4xl"} mt-10 grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2`, children: [
          /* @__PURE__ */ o.jsx(UJ, { clearError: v, errors: h, setUserData: b, user: l, validateField: y }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col justify-between gap-10", children: [
            /* @__PURE__ */ o.jsx(PJ, { clearError: v, errors: h, setUserData: b, user: l, validateField: y }),
            e.id === a.id && /* @__PURE__ */ o.jsx(ZJ, {})
          ] }),
          /* @__PURE__ */ o.jsx(NJ, { setUserData: b, user: l }),
          /* @__PURE__ */ o.jsx(OJ, { user: l })
        ] })
      ] })
    }
  );
}, XJ = ({ params: e }) => {
  const { users: n, hasNextPage: t, fetchNextPage: a } = zu(), { currentUser: s } = ct(), l = s.slug === (e == null ? void 0 : e.slug) ? s : n.find(({ slug: A }) => A === (e == null ? void 0 : e.slug));
  return Te(() => {
    !l && t && a();
  }, [a, t, l]), l ? /* @__PURE__ */ o.jsx(KJ, { user: l }) : null;
}, WJ = xe.create(XJ), qJ = (e) => /* @__PURE__ */ it("svg", { width: 42, height: 37, viewBox: "0 0 80 37", xmlns: "http://www.w3.org/2000/svg", className: "css-1oudp6l-ZapierLogo--red500", ...e }, /* @__PURE__ */ it("title", null, "zapier-logo"), /* @__PURE__ */ it("path", { fill: "#ff4a00", fillRule: "evenodd", clipRule: "evenodd", d: "M53.934 4.185h-2.94l2.079-2.073A5.053 5.053 0 0 0 51.886.928l-2.078 2.073V.07a5.129 5.129 0 0 0-.836-.07h-.006c-.285 0-.564.024-.836.07V3L46.052.929c-.23.163-.444.344-.642.543h-.002c-.198.198-.38.412-.543.641l2.078 2.073h-2.938s-.07.55-.07.835v.003c0 .284.024.564.07.836h2.938l-2.078 2.07a5.05 5.05 0 0 0 1.187 1.183l2.078-2.072v2.93c.272.046.55.07.835.07h.007c.285 0 .565-.024.836-.07v-2.93l2.078 2.072a5.098 5.098 0 0 0 1.186-1.184L50.995 5.86h2.94c.045-.272.07-.55.07-.834v-.007a5.08 5.08 0 0 0-.07-.833ZM58.85 25.53c-.84-.786-1.279-2.026-1.32-3.72h10.585c.02-.222.04-.488.06-.802.02-.312.031-.61.031-.892a9.263 9.263 0 0 0-.425-2.859c-.283-.877-.698-1.633-1.243-2.268a5.736 5.736 0 0 0-2.032-1.497c-.809-.364-1.75-.545-2.82-.545-1.254 0-2.341.217-3.261.65a6.532 6.532 0 0 0-2.29 1.755c-.606.736-1.056 1.603-1.349 2.6-.293 1-.44 2.073-.44 3.222 0 1.17.152 2.244.455 3.222a6.59 6.59 0 0 0 1.44 2.541c.657.716 1.492 1.27 2.503 1.664 1.01.393 2.223.59 3.64.59.97 0 1.854-.071 2.653-.212a10.191 10.191 0 0 0 2.198-.635 7.18 7.18 0 0 0-.181-1.286 4.54 4.54 0 0 0-.395-1.104 11.178 11.178 0 0 1-4.094.757c-1.638 0-2.876-.394-3.715-1.18ZM30.51 13.31a6.378 6.378 0 0 1 1.273-.121 7.115 7.115 0 0 1 1.274.12c.02.042.045.167.075.38.03.21.06.438.091.68.03.242.06.474.091.696.03.222.045.363.045.423.203-.323.445-.635.728-.938a4.85 4.85 0 0 1 1.016-.816 5.298 5.298 0 0 1 1.335-.575 6.016 6.016 0 0 1 1.653-.212c.91 0 1.753.152 2.532.454a5.068 5.068 0 0 1 2.001 1.406c.556.636.99 1.442 1.305 2.42.313.979.47 2.133.47 3.464 0 2.662-.723 4.744-2.169 6.246-1.446 1.503-3.492 2.254-6.141 2.254-.445 0-.9-.03-1.365-.09a8.095 8.095 0 0 1-1.213-.243v7.109a10.389 10.389 0 0 1-1.517.12c-.222 0-.47-.01-.742-.03-.273-.02-.52-.05-.743-.09V13.31Zm-6.218 5.294c0-1.19-.304-2.017-.91-2.481-.607-.463-1.486-.695-2.639-.695-.708 0-1.37.055-1.986.166-.617.111-1.219.257-1.804.438-.385-.665-.576-1.461-.576-2.39a14.015 14.015 0 0 1 2.274-.514 16.555 16.555 0 0 1 2.396-.181c2.021 0 3.558.46 4.61 1.376 1.05.918 1.576 2.385 1.576 4.401v9.71a47.6 47.6 0 0 1-2.577.5 18.55 18.55 0 0 1-3.094.256c-.99 0-1.885-.09-2.684-.272-.799-.181-1.476-.473-2.032-.877a4.061 4.061 0 0 1-1.289-1.543c-.303-.625-.454-1.38-.454-2.269 0-.866.176-1.628.53-2.283a4.77 4.77 0 0 1 1.44-1.634 6.427 6.427 0 0 1 2.093-.967 9.538 9.538 0 0 1 2.487-.318c.647 0 1.178.015 1.592.045.415.031.763.066 1.047.106v-.574Zm-23.625 9.8L8.855 15.7H1.637a7.356 7.356 0 0 1-.09-1.21c0-.424.03-.818.09-1.18h11.677l.15.393-8.248 12.735h7.734c.06.404.09.817.09 1.24 0 .404-.03.787-.09 1.15H.819l-.152-.424Zm22.472-6.987c.466.04.85.08 1.153.12v4.931a8.642 8.642 0 0 1-1.32.227 14.05 14.05 0 0 1-1.44.076c-.364 0-.748-.02-1.152-.06a2.9 2.9 0 0 1-1.107-.333 2.293 2.293 0 0 1-.834-.787c-.223-.342-.334-.817-.334-1.422 0-.947.328-1.653.986-2.117.656-.464 1.612-.696 2.866-.696.323 0 .717.02 1.182.061Zm11.555 5.172a5.87 5.87 0 0 1-1.183-.302v-6.292c0-.767.111-1.426.334-1.981.223-.555.515-1.014.88-1.377a3.58 3.58 0 0 1 1.243-.816c.464-.182.95-.273 1.455-.273 1.355 0 2.33.475 2.927 1.422.596.948.895 2.229.895 3.842 0 1.008-.127 1.88-.38 2.616-.253.736-.596 1.346-1.03 1.83a3.965 3.965 0 0 1-1.562 1.074 5.558 5.558 0 0 1-2.002.348c-.647 0-1.173-.03-1.577-.09Zm13.435-10.92h-1.972a3.793 3.793 0 0 1-.09-.56 6.432 6.432 0 0 1 0-1.24c.02-.211.05-.398.09-.56h4.914v15.52c-.223.039-.47.069-.743.09-.273.019-.521.03-.743.03-.203 0-.44-.011-.713-.03a7.367 7.367 0 0 1-.743-.09v-13.16Zm17.105 3.903a5.71 5.71 0 0 0-.227-1.62 4.113 4.113 0 0 0-.668-1.345 3.246 3.246 0 0 0-1.122-.922c-.455-.232-.996-.349-1.623-.349-1.233 0-2.178.374-2.836 1.12-.656.746-1.056 1.785-1.197 3.116h7.673Zm6.916-6.353a8.11 8.11 0 0 0-.637.09v15.519a10.308 10.308 0 0 0 1.517.12c.221 0 .47-.01.742-.03.273-.02.52-.05.743-.09v-7.714c0-1.048.117-1.905.35-2.57.231-.666.545-1.19.939-1.574a3.26 3.26 0 0 1 1.335-.801 5.33 5.33 0 0 1 1.562-.227h.409c.172 0 .338.02.5.06.04-.242.076-.494.107-.756a6.694 6.694 0 0 0 .014-1.392 4.99 4.99 0 0 0-.09-.575 4.641 4.641 0 0 0-.44-.045 8.203 8.203 0 0 0-.5-.015c-1.092 0-1.987.253-2.684.756a6.273 6.273 0 0 0-1.683 1.785c0-.343-.031-.76-.091-1.255a17.208 17.208 0 0 0-.182-1.195 5.019 5.019 0 0 0-.607-.09 7.54 7.54 0 0 0-.667-.031c-.223 0-.435.01-.637.03ZM50.034 6.084c.125-.33.194-.687.194-1.06v-.005c0-.373-.07-.73-.194-1.06a3.013 3.013 0 0 0-1.063-.193h-.004a3.03 3.03 0 0 0-1.064.193 3.03 3.03 0 0 0-.193 1.06v.005c0 .373.07.73.194 1.06.33.124.689.193 1.063.193h.005c.373 0 .732-.069 1.062-.193Z" })), VJ = xe.create(() => {
  var b, y, S, T;
  const e = xe.useModal(), { updateRoute: n } = nt(), { zapierTemplates: t } = pb(), { data: { integrations: a } = { integrations: [] } } = bp(), { config: s } = ct(), { adminRoot: l } = Ds(), { mutateAsync: A } = qp(), f = dt(), [u, d] = ue(!1), h = (S = (y = (b = s.hostSettings) == null ? void 0 : b.limits) == null ? void 0 : y.customIntegrations) == null ? void 0 : S.disabled, m = a.find(({ slug: Q }) => Q === "zapier"), v = (T = m == null ? void 0 : m.api_keys) == null ? void 0 : T.find((Q) => Q.type === "admin");
  Te(() => {
    h && n("integrations");
  }, [h, n]);
  const k = () => {
    !m || !v || (d(!1), xe.show(Kt, {
      title: "Regenerate Admin API Key",
      prompt: 'You will need to locate the Ghost App within your Zapier account and click on "Reconnect" to enter the new Admin API Key.',
      okLabel: "Regenerate Admin API Key",
      onOk: async (Q) => {
        try {
          await A({ integrationId: m.id, apiKeyId: v.id }), d(!0), Q == null || Q.remove();
        } catch (B) {
          f(B);
        }
      }
    }));
  };
  return /* @__PURE__ */ o.jsxs(
    It,
    {
      afterClose: () => {
        n("integrations");
      },
      cancelLabel: "",
      footer: /* @__PURE__ */ o.jsxs("div", { className: "mx-8 flex w-full items-center justify-between", children: [
        /* @__PURE__ */ o.jsxs(
          "a",
          {
            className: "mt-1 self-baseline text-sm font-bold",
            href: "https://zapier.com/apps/ghost/integrations?utm_medium=partner_api&utm_source=widget&utm_campaign=Widget",
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              "View more Ghost integrations powered by ",
              /* @__PURE__ */ o.jsx("span", { children: /* @__PURE__ */ o.jsx(qJ, { className: "relative top-[-2px] inline-block h-6" }) })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(Ye, { color: "black", label: "Close", onClick: () => {
          e.remove();
        } })
      ] }),
      okColor: "black",
      okLabel: "Close",
      testId: "zapier-modal",
      title: "",
      stickyFooter: !0,
      onOk: () => {
        n("integrations"), e.remove();
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Us,
          {
            detail: "Automation for your favorite apps",
            extra: /* @__PURE__ */ o.jsx("div", { className: "-mb-4 mt-1", children: /* @__PURE__ */ o.jsx($u, { keys: [
              {
                label: "Admin API key",
                text: v == null ? void 0 : v.secret,
                hint: u ? /* @__PURE__ */ o.jsx("div", { className: "text-green", children: "Admin API Key was successfully regenerated" }) : void 0,
                onRegenerate: k
              },
              { label: "API URL", text: window.location.origin + Ds().subdir }
            ] }) }),
            icon: /* @__PURE__ */ o.jsx(mb, { className: "h-14 w-14" }),
            title: "Zapier"
          }
        ),
        /* @__PURE__ */ o.jsx(Hr, { children: t.map((Q) => /* @__PURE__ */ o.jsx(
          Ba,
          {
            action: /* @__PURE__ */ o.jsx(Ye, { className: "whitespace-nowrap text-sm font-semibold text-[#FF4A00]", href: Q.url, label: "Use this Zap", tag: "a", target: "_blank", link: !0, unstyled: !0 }),
            bgOnHover: !1,
            className: "flex items-center gap-3 py-2 pl-3",
            title: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex shrink-0 flex-nowrap items-center gap-2", children: [
                /* @__PURE__ */ o.jsx("img", { className: "h-8 w-8 object-contain dark:invert", role: "presentation", src: Bl(Q.ghostImage, l) }),
                /* @__PURE__ */ o.jsx(Qt, { name: "arrow-right", size: "xs" }),
                /* @__PURE__ */ o.jsx("img", { className: "h-8 w-8 object-contain", role: "presentation", src: Bl(Q.appImage, l) })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "text-sm", children: Q.title })
            ] }),
            hideActions: !0
          }
        )) })
      ]
    }
  );
}), e8 = {
  AddIntegrationModal: my,
  AddNewsletterModal: vy,
  AddRecommendationModal: Wp,
  AmpModal: Ey,
  CustomIntegrationModal: Ly,
  DesignAndThemeModal: _5,
  EditRecommendationModal: gb,
  FirstpromoterModal: p4,
  HistoryModal: I4,
  InviteUserModal: J4,
  NavigationModal: T4,
  NewsletterDetailModal: L4,
  PinturaModal: _4,
  PortalModal: hJ,
  SlackModal: pJ,
  StripeConnectModal: SJ,
  TierDetailModal: TJ,
  UnsplashModal: CJ,
  UserDetailModal: WJ,
  ZapierModal: VJ,
  AnnouncementBarModal: Cy,
  EmbedSignupFormModal: h4,
  OffersContainerModal: W4,
  // OffersModal,
  // AddOfferModal,
  // EditOfferModal,
  AboutModal: uy,
  OfferSuccess: dg
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
};
export {
  e8 as default
};
//# sourceMappingURL=modals-c21854b8.mjs.map