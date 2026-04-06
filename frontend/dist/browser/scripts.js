/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
})(this, function() {
  "use strict";
  const t = /* @__PURE__ */ new Map(), e = { set(e2, i2, n2) {
    t.has(e2) || t.set(e2, /* @__PURE__ */ new Map());
    const s2 = t.get(e2);
    s2.has(i2) || 0 === s2.size ? s2.set(i2, n2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s2.keys())[0]}.`);
  }, get: (e2, i2) => t.has(e2) && t.get(e2).get(i2) || null, remove(e2, i2) {
    if (!t.has(e2)) return;
    const n2 = t.get(e2);
    n2.delete(i2), 0 === n2.size && t.delete(e2);
  } }, i = "transitionend", n = (t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), s = (t2) => null == t2 ? `${t2}` : Object.prototype.toString.call(t2).match(/\s([a-z]+)/i)[1].toLowerCase(), o = (t2) => {
    t2.dispatchEvent(new Event(i));
  }, r = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), a = (t2) => r(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(n(t2)) : null, l = (t2) => {
    if (!r(t2) || 0 === t2.getClientRects().length) return false;
    const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
    if (!i2) return e2;
    if (i2 !== t2) {
      const e3 = t2.closest("summary");
      if (e3 && e3.parentNode !== i2) return false;
      if (null === e3) return false;
    }
    return e2;
  }, c = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), h = (t2) => {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof t2.getRootNode) {
      const e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? h(t2.parentNode) : null;
  }, d = () => {
  }, u = (t2) => {
    t2.offsetHeight;
  }, f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, p = [], m = () => "rtl" === document.documentElement.dir, g = (t2) => {
    var e2;
    e2 = () => {
      const e3 = f();
      if (e3) {
        const i2 = t2.NAME, n2 = e3.fn[i2];
        e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", () => {
      for (const t3 of p) t3();
    }), p.push(e2)) : e2();
  }, _ = (t2, e2 = [], i2 = t2) => "function" == typeof t2 ? t2.call(...e2) : i2, b = (t2, e2, n2 = true) => {
    if (!n2) return void _(t2);
    const s2 = ((t3) => {
      if (!t3) return 0;
      let { transitionDuration: e3, transitionDelay: i2 } = window.getComputedStyle(t3);
      const n3 = Number.parseFloat(e3), s3 = Number.parseFloat(i2);
      return n3 || s3 ? (e3 = e3.split(",")[0], i2 = i2.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i2))) : 0;
    })(e2) + 5;
    let r2 = false;
    const a2 = ({ target: n3 }) => {
      n3 === e2 && (r2 = true, e2.removeEventListener(i, a2), _(t2));
    };
    e2.addEventListener(i, a2), setTimeout(() => {
      r2 || o(e2);
    }, s2);
  }, v = (t2, e2, i2, n2) => {
    const s2 = t2.length;
    let o2 = t2.indexOf(e2);
    return -1 === o2 ? !i2 && n2 ? t2[s2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, n2 && (o2 = (o2 + s2) % s2), t2[Math.max(0, Math.min(o2, s2 - 1))]);
  }, y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, A = /::\d+$/, E = {};
  let T = 1;
  const C = { mouseenter: "mouseover", mouseleave: "mouseout" }, O = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function x(t2, e2) {
    return e2 && `${e2}::${T++}` || t2.uidEvent || T++;
  }
  function k(t2) {
    const e2 = x(t2);
    return t2.uidEvent = e2, E[e2] = E[e2] || {}, E[e2];
  }
  function L(t2, e2, i2 = null) {
    return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === i2);
  }
  function S(t2, e2, i2) {
    const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2 || i2;
    let o2 = N(t2);
    return O.has(o2) || (o2 = t2), [n2, s2, o2];
  }
  function D(t2, e2, i2, n2, s2) {
    if ("string" != typeof e2 || !t2) return;
    let [o2, r2, a2] = S(e2, i2, n2);
    if (e2 in C) {
      const t3 = (t4) => function(e3) {
        if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget)) return t4.call(this, e3);
      };
      r2 = t3(r2);
    }
    const l2 = k(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = L(c2, r2, o2 ? i2 : null);
    if (h2) return void (h2.oneOff = h2.oneOff && s2);
    const d2 = x(r2, e2.replace(y, "")), u2 = o2 ? /* @__PURE__ */ (function(t3, e3, i3) {
      return function n3(s3) {
        const o3 = t3.querySelectorAll(e3);
        for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode) for (const a3 of o3) if (a3 === r3) return j(s3, { delegateTarget: r3 }), n3.oneOff && P.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
      };
    })(t2, i2, r2) : /* @__PURE__ */ (function(t3, e3) {
      return function i3(n3) {
        return j(n3, { delegateTarget: t3 }), i3.oneOff && P.off(t3, n3.type, e3), e3.apply(t3, [n3]);
      };
    })(t2, r2);
    u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
  }
  function $(t2, e2, i2, n2, s2) {
    const o2 = L(e2[i2], n2, s2);
    o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
  }
  function I(t2, e2, i2, n2) {
    const s2 = e2[i2] || {};
    for (const [o2, r2] of Object.entries(s2)) o2.includes(n2) && $(t2, e2, i2, r2.callable, r2.delegationSelector);
  }
  function N(t2) {
    return t2 = t2.replace(w, ""), C[t2] || t2;
  }
  const P = { on(t2, e2, i2, n2) {
    D(t2, e2, i2, n2, false);
  }, one(t2, e2, i2, n2) {
    D(t2, e2, i2, n2, true);
  }, off(t2, e2, i2, n2) {
    if ("string" != typeof e2 || !t2) return;
    const [s2, o2, r2] = S(e2, i2, n2), a2 = r2 !== e2, l2 = k(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
    if (void 0 === o2) {
      if (h2) for (const i3 of Object.keys(l2)) I(t2, l2, i3, e2.slice(1));
      for (const [i3, n3] of Object.entries(c2)) {
        const s3 = i3.replace(A, "");
        a2 && !e2.includes(s3) || $(t2, l2, r2, n3.callable, n3.delegationSelector);
      }
    } else {
      if (!Object.keys(c2).length) return;
      $(t2, l2, r2, o2, s2 ? i2 : null);
    }
  }, trigger(t2, e2, i2) {
    if ("string" != typeof e2 || !t2) return null;
    const n2 = f();
    let s2 = null, o2 = true, r2 = true, a2 = false;
    e2 !== N(e2) && n2 && (s2 = n2.Event(e2, i2), n2(t2).trigger(s2), o2 = !s2.isPropagationStopped(), r2 = !s2.isImmediatePropagationStopped(), a2 = s2.isDefaultPrevented());
    const l2 = j(new Event(e2, { bubbles: o2, cancelable: true }), i2);
    return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && s2 && s2.preventDefault(), l2;
  } };
  function j(t2, e2 = {}) {
    for (const [i2, n2] of Object.entries(e2)) try {
      t2[i2] = n2;
    } catch (e3) {
      Object.defineProperty(t2, i2, { configurable: true, get: () => n2 });
    }
    return t2;
  }
  function M(t2) {
    if ("true" === t2) return true;
    if ("false" === t2) return false;
    if (t2 === Number(t2).toString()) return Number(t2);
    if ("" === t2 || "null" === t2) return null;
    if ("string" != typeof t2) return t2;
    try {
      return JSON.parse(decodeURIComponent(t2));
    } catch (e2) {
      return t2;
    }
  }
  function F(t2) {
    return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
  }
  const H = { setDataAttribute(t2, e2, i2) {
    t2.setAttribute(`data-bs-${F(e2)}`, i2);
  }, removeDataAttribute(t2, e2) {
    t2.removeAttribute(`data-bs-${F(e2)}`);
  }, getDataAttributes(t2) {
    if (!t2) return {};
    const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
    for (const n2 of i2) {
      let i3 = n2.replace(/^bs/, "");
      i3 = i3.charAt(0).toLowerCase() + i3.slice(1), e2[i3] = M(t2.dataset[n2]);
    }
    return e2;
  }, getDataAttribute: (t2, e2) => M(t2.getAttribute(`data-bs-${F(e2)}`)) };
  class W {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2;
    }
    _mergeConfigObj(t2, e2) {
      const i2 = r(e2) ? H.getDataAttribute(e2, "config") : {};
      return { ...this.constructor.Default, ..."object" == typeof i2 ? i2 : {}, ...r(e2) ? H.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
    }
    _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
      for (const [i2, n2] of Object.entries(e2)) {
        const e3 = t2[i2], o2 = r(e3) ? "element" : s(e3);
        if (!new RegExp(n2).test(o2)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i2}" provided type "${o2}" but expected type "${n2}".`);
      }
    }
  }
  class B extends W {
    constructor(t2, i2) {
      super(), (t2 = a(t2)) && (this._element = t2, this._config = this._getConfig(i2), e.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      e.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
      for (const t2 of Object.getOwnPropertyNames(this)) this[t2] = null;
    }
    _queueCallback(t2, e2, i2 = true) {
      b(t2, e2, i2);
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    static getInstance(t2) {
      return e.get(a(t2), this.DATA_KEY);
    }
    static getOrCreateInstance(t2, e2 = {}) {
      return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
    }
    static get VERSION() {
      return "5.3.8";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t2) {
      return `${t2}${this.EVENT_KEY}`;
    }
  }
  const z = (t2) => {
    let e2 = t2.getAttribute("data-bs-target");
    if (!e2 || "#" === e2) {
      let i2 = t2.getAttribute("href");
      if (!i2 || !i2.includes("#") && !i2.startsWith(".")) return null;
      i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
    }
    return e2 ? e2.split(",").map((t3) => n(t3)).join(",") : null;
  }, R = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
    const i2 = [];
    let n2 = t2.parentNode.closest(e2);
    for (; n2; ) i2.push(n2), n2 = n2.parentNode.closest(e2);
    return i2;
  }, prev(t2, e2) {
    let i2 = t2.previousElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.previousElementSibling;
    }
    return [];
  }, next(t2, e2) {
    let i2 = t2.nextElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.nextElementSibling;
    }
    return [];
  }, focusableChildren(t2) {
    const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
    return this.find(e2, t2).filter((t3) => !c(t3) && l(t3));
  }, getSelectorFromElement(t2) {
    const e2 = z(t2);
    return e2 && R.findOne(e2) ? e2 : null;
  }, getElementFromSelector(t2) {
    const e2 = z(t2);
    return e2 ? R.findOne(e2) : null;
  }, getMultipleElementsFromSelector(t2) {
    const e2 = z(t2);
    return e2 ? R.find(e2) : [];
  } }, q = (t2, e2 = "hide") => {
    const i2 = `click.dismiss${t2.EVENT_KEY}`, n2 = t2.NAME;
    P.on(document, i2, `[data-bs-dismiss="${n2}"]`, function(i3) {
      if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), c(this)) return;
      const s2 = R.getElementFromSelector(this) || this.closest(`.${n2}`);
      t2.getOrCreateInstance(s2)[e2]();
    });
  }, V = ".bs.alert", K = `close${V}`, Q = `closed${V}`;
  class X extends B {
    static get NAME() {
      return "alert";
    }
    close() {
      if (P.trigger(this._element, K).defaultPrevented) return;
      this._element.classList.remove("show");
      const t2 = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t2);
    }
    _destroyElement() {
      this._element.remove(), P.trigger(this._element, Q), this.dispose();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = X.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  q(X, "close"), g(X);
  const Y = '[data-bs-toggle="button"]';
  class U extends B {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = U.getOrCreateInstance(this);
        "toggle" === t2 && e2[t2]();
      });
    }
  }
  P.on(document, "click.bs.button.data-api", Y, (t2) => {
    t2.preventDefault();
    const e2 = t2.target.closest(Y);
    U.getOrCreateInstance(e2).toggle();
  }), g(U);
  const G = ".bs.swipe", J = `touchstart${G}`, Z = `touchmove${G}`, tt = `touchend${G}`, et = `pointerdown${G}`, it = `pointerup${G}`, nt = { endCallback: null, leftCallback: null, rightCallback: null }, st = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
  class ot extends W {
    constructor(t2, e2) {
      super(), this._element = t2, t2 && ot.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
    }
    static get Default() {
      return nt;
    }
    static get DefaultType() {
      return st;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      P.off(this._element, G);
    }
    _start(t2) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
    }
    _end(t2) {
      this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), _(this._config.endCallback);
    }
    _move(t2) {
      this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t2 = Math.abs(this._deltaX);
      if (t2 <= 40) return;
      const e2 = t2 / this._deltaX;
      this._deltaX = 0, e2 && _(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents ? (P.on(this._element, et, (t2) => this._start(t2)), P.on(this._element, it, (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (P.on(this._element, J, (t2) => this._start(t2)), P.on(this._element, Z, (t2) => this._move(t2)), P.on(this._element, tt, (t2) => this._end(t2)));
    }
    _eventIsPointerPenTouch(t2) {
      return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const rt = ".bs.carousel", at = ".data-api", lt = "ArrowLeft", ct = "ArrowRight", ht = "next", dt = "prev", ut = "left", ft = "right", pt = `slide${rt}`, mt = `slid${rt}`, gt = `keydown${rt}`, _t = `mouseenter${rt}`, bt = `mouseleave${rt}`, vt = `dragstart${rt}`, yt = `load${rt}${at}`, wt = `click${rt}${at}`, At = "carousel", Et = "active", Tt = ".active", Ct = ".carousel-item", Ot = Tt + Ct, xt = { [lt]: ft, [ct]: ut }, kt = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, Lt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
  class St extends B {
    constructor(t2, e2) {
      super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = R.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === At && this.cycle();
    }
    static get Default() {
      return kt;
    }
    static get DefaultType() {
      return Lt;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(ht);
    }
    nextWhenVisible() {
      !document.hidden && l(this._element) && this.next();
    }
    prev() {
      this._slide(dt);
    }
    pause() {
      this._isSliding && o(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? P.one(this._element, mt, () => this.cycle()) : this.cycle());
    }
    to(t2) {
      const e2 = this._getItems();
      if (t2 > e2.length - 1 || t2 < 0) return;
      if (this._isSliding) return void P.one(this._element, mt, () => this.to(t2));
      const i2 = this._getItemIndex(this._getActive());
      if (i2 === t2) return;
      const n2 = t2 > i2 ? ht : dt;
      this._slide(n2, e2[t2]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.defaultInterval = t2.interval, t2;
    }
    _addEventListeners() {
      this._config.keyboard && P.on(this._element, gt, (t2) => this._keydown(t2)), "hover" === this._config.pause && (P.on(this._element, _t, () => this.pause()), P.on(this._element, bt, () => this._maybeEnableCycle())), this._config.touch && ot.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t3 of R.find(".carousel-item img", this._element)) P.on(t3, vt, (t4) => t4.preventDefault());
      const t2 = { leftCallback: () => this._slide(this._directionToOrder(ut)), rightCallback: () => this._slide(this._directionToOrder(ft)), endCallback: () => {
        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
      } };
      this._swipeHelper = new ot(this._element, t2);
    }
    _keydown(t2) {
      if (/input|textarea/i.test(t2.target.tagName)) return;
      const e2 = xt[t2.key];
      e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
    }
    _getItemIndex(t2) {
      return this._getItems().indexOf(t2);
    }
    _setActiveIndicatorElement(t2) {
      if (!this._indicatorsElement) return;
      const e2 = R.findOne(Tt, this._indicatorsElement);
      e2.classList.remove(Et), e2.removeAttribute("aria-current");
      const i2 = R.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
      i2 && (i2.classList.add(Et), i2.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t2 = this._activeElement || this._getActive();
      if (!t2) return;
      const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
      this._config.interval = e2 || this._config.defaultInterval;
    }
    _slide(t2, e2 = null) {
      if (this._isSliding) return;
      const i2 = this._getActive(), n2 = t2 === ht, s2 = e2 || v(this._getItems(), i2, n2, this._config.wrap);
      if (s2 === i2) return;
      const o2 = this._getItemIndex(s2), r2 = (e3) => P.trigger(this._element, e3, { relatedTarget: s2, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 });
      if (r2(pt).defaultPrevented) return;
      if (!i2 || !s2) return;
      const a2 = Boolean(this._interval);
      this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = s2;
      const l2 = n2 ? "carousel-item-start" : "carousel-item-end", c2 = n2 ? "carousel-item-next" : "carousel-item-prev";
      s2.classList.add(c2), u(s2), i2.classList.add(l2), s2.classList.add(l2), this._queueCallback(() => {
        s2.classList.remove(l2, c2), s2.classList.add(Et), i2.classList.remove(Et, c2, l2), this._isSliding = false, r2(mt);
      }, i2, this._isAnimated()), a2 && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return R.findOne(Ot, this._element);
    }
    _getItems() {
      return R.find(Ct, this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
    _directionToOrder(t2) {
      return m() ? t2 === ut ? dt : ht : t2 === ut ? ht : dt;
    }
    _orderToDirection(t2) {
      return m() ? t2 === dt ? ut : ft : t2 === dt ? ft : ut;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = St.getOrCreateInstance(this, t2);
        if ("number" != typeof t2) {
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        } else e2.to(t2);
      });
    }
  }
  P.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", function(t2) {
    const e2 = R.getElementFromSelector(this);
    if (!e2 || !e2.classList.contains(At)) return;
    t2.preventDefault();
    const i2 = St.getOrCreateInstance(e2), n2 = this.getAttribute("data-bs-slide-to");
    return n2 ? (i2.to(n2), void i2._maybeEnableCycle()) : "next" === H.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
  }), P.on(window, yt, () => {
    const t2 = R.find('[data-bs-ride="carousel"]');
    for (const e2 of t2) St.getOrCreateInstance(e2);
  }), g(St);
  const Dt = ".bs.collapse", $t = `show${Dt}`, It = `shown${Dt}`, Nt = `hide${Dt}`, Pt = `hidden${Dt}`, jt = `click${Dt}.data-api`, Mt = "show", Ft = "collapse", Ht = "collapsing", Wt = `:scope .${Ft} .${Ft}`, Bt = '[data-bs-toggle="collapse"]', zt = { parent: null, toggle: true }, Rt = { parent: "(null|element)", toggle: "boolean" };
  class qt extends B {
    constructor(t2, e2) {
      super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
      const i2 = R.find(Bt);
      for (const t3 of i2) {
        const e3 = R.getSelectorFromElement(t3), i3 = R.find(e3).filter((t4) => t4 === this._element);
        null !== e3 && i3.length && this._triggerArray.push(t3);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return zt;
    }
    static get DefaultType() {
      return Rt;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t2 = [];
      if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => qt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning) return;
      if (P.trigger(this._element, $t).defaultPrevented) return;
      for (const e3 of t2) e3.hide();
      const e2 = this._getDimension();
      this._element.classList.remove(Ft), this._element.classList.add(Ht), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Ht), this._element.classList.add(Ft, Mt), this._element.style[e2] = "", P.trigger(this._element, It);
      }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, Nt).defaultPrevented) return;
      const t2 = this._getDimension();
      this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, u(this._element), this._element.classList.add(Ht), this._element.classList.remove(Ft, Mt);
      for (const t3 of this._triggerArray) {
        const e2 = R.getElementFromSelector(t3);
        e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
      }
      this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Ht), this._element.classList.add(Ft), P.trigger(this._element, Pt);
      }, this._element, true);
    }
    _isShown(t2 = this._element) {
      return t2.classList.contains(Mt);
    }
    _configAfterMerge(t2) {
      return t2.toggle = Boolean(t2.toggle), t2.parent = a(t2.parent), t2;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t2 = this._getFirstLevelChildren(Bt);
      for (const e2 of t2) {
        const t3 = R.getElementFromSelector(e2);
        t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
      }
    }
    _getFirstLevelChildren(t2) {
      const e2 = R.find(Wt, this._config.parent);
      return R.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
    }
    _addAriaAndCollapsedClass(t2, e2) {
      if (t2.length) for (const i2 of t2) i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
    }
    static jQueryInterface(t2) {
      const e2 = {};
      return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
        const i2 = qt.getOrCreateInstance(this, e2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2]();
        }
      });
    }
  }
  P.on(document, jt, Bt, function(t2) {
    ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
    for (const t3 of R.getMultipleElementsFromSelector(this)) qt.getOrCreateInstance(t3, { toggle: false }).toggle();
  }), g(qt);
  var Vt = "top", Kt = "bottom", Qt = "right", Xt = "left", Yt = "auto", Ut = [Vt, Kt, Qt, Xt], Gt = "start", Jt = "end", Zt = "clippingParents", te = "viewport", ee = "popper", ie = "reference", ne = Ut.reduce(function(t2, e2) {
    return t2.concat([e2 + "-" + Gt, e2 + "-" + Jt]);
  }, []), se = [].concat(Ut, [Yt]).reduce(function(t2, e2) {
    return t2.concat([e2, e2 + "-" + Gt, e2 + "-" + Jt]);
  }, []), oe = "beforeRead", re = "read", ae = "afterRead", le = "beforeMain", ce = "main", he = "afterMain", de = "beforeWrite", ue = "write", fe = "afterWrite", pe = [oe, re, ae, le, ce, he, de, ue, fe];
  function me(t2) {
    return t2 ? (t2.nodeName || "").toLowerCase() : null;
  }
  function ge(t2) {
    if (null == t2) return window;
    if ("[object Window]" !== t2.toString()) {
      var e2 = t2.ownerDocument;
      return e2 && e2.defaultView || window;
    }
    return t2;
  }
  function _e(t2) {
    return t2 instanceof ge(t2).Element || t2 instanceof Element;
  }
  function be(t2) {
    return t2 instanceof ge(t2).HTMLElement || t2 instanceof HTMLElement;
  }
  function ve(t2) {
    return "undefined" != typeof ShadowRoot && (t2 instanceof ge(t2).ShadowRoot || t2 instanceof ShadowRoot);
  }
  const ye = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
    var e2 = t2.state;
    Object.keys(e2.elements).forEach(function(t3) {
      var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
      be(s2) && me(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
        var e3 = n2[t4];
        false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
      }));
    });
  }, effect: function(t2) {
    var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
      Object.keys(e2.elements).forEach(function(t3) {
        var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
          return t4[e3] = "", t4;
        }, {});
        be(n2) && me(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
          n2.removeAttribute(t4);
        }));
      });
    };
  }, requires: ["computeStyles"] };
  function we(t2) {
    return t2.split("-")[0];
  }
  var Ae = Math.max, Ee = Math.min, Te = Math.round;
  function Ce() {
    var t2 = navigator.userAgentData;
    return null != t2 && t2.brands && Array.isArray(t2.brands) ? t2.brands.map(function(t3) {
      return t3.brand + "/" + t3.version;
    }).join(" ") : navigator.userAgent;
  }
  function Oe() {
    return !/^((?!chrome|android).)*safari/i.test(Ce());
  }
  function xe(t2, e2, i2) {
    void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = false);
    var n2 = t2.getBoundingClientRect(), s2 = 1, o2 = 1;
    e2 && be(t2) && (s2 = t2.offsetWidth > 0 && Te(n2.width) / t2.offsetWidth || 1, o2 = t2.offsetHeight > 0 && Te(n2.height) / t2.offsetHeight || 1);
    var r2 = (_e(t2) ? ge(t2) : window).visualViewport, a2 = !Oe() && i2, l2 = (n2.left + (a2 && r2 ? r2.offsetLeft : 0)) / s2, c2 = (n2.top + (a2 && r2 ? r2.offsetTop : 0)) / o2, h2 = n2.width / s2, d2 = n2.height / o2;
    return { width: h2, height: d2, top: c2, right: l2 + h2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
  }
  function ke(t2) {
    var e2 = xe(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
    return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
  }
  function Le(t2, e2) {
    var i2 = e2.getRootNode && e2.getRootNode();
    if (t2.contains(e2)) return true;
    if (i2 && ve(i2)) {
      var n2 = e2;
      do {
        if (n2 && t2.isSameNode(n2)) return true;
        n2 = n2.parentNode || n2.host;
      } while (n2);
    }
    return false;
  }
  function Se(t2) {
    return ge(t2).getComputedStyle(t2);
  }
  function De(t2) {
    return ["table", "td", "th"].indexOf(me(t2)) >= 0;
  }
  function $e(t2) {
    return ((_e(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
  }
  function Ie(t2) {
    return "html" === me(t2) ? t2 : t2.assignedSlot || t2.parentNode || (ve(t2) ? t2.host : null) || $e(t2);
  }
  function Ne(t2) {
    return be(t2) && "fixed" !== Se(t2).position ? t2.offsetParent : null;
  }
  function Pe(t2) {
    for (var e2 = ge(t2), i2 = Ne(t2); i2 && De(i2) && "static" === Se(i2).position; ) i2 = Ne(i2);
    return i2 && ("html" === me(i2) || "body" === me(i2) && "static" === Se(i2).position) ? e2 : i2 || (function(t3) {
      var e3 = /firefox/i.test(Ce());
      if (/Trident/i.test(Ce()) && be(t3) && "fixed" === Se(t3).position) return null;
      var i3 = Ie(t3);
      for (ve(i3) && (i3 = i3.host); be(i3) && ["html", "body"].indexOf(me(i3)) < 0; ) {
        var n2 = Se(i3);
        if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(n2.willChange) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter) return i3;
        i3 = i3.parentNode;
      }
      return null;
    })(t2) || e2;
  }
  function je(t2) {
    return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
  }
  function Me(t2, e2, i2) {
    return Ae(t2, Ee(e2, i2));
  }
  function Fe(t2) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
  }
  function He(t2, e2) {
    return e2.reduce(function(e3, i2) {
      return e3[i2] = t2, e3;
    }, {});
  }
  const We = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
    var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = we(i2.placement), l2 = je(a2), c2 = [Xt, Qt].indexOf(a2) >= 0 ? "height" : "width";
    if (o2 && r2) {
      var h2 = (function(t3, e3) {
        return Fe("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : He(t3, Ut));
      })(s2.padding, i2), d2 = ke(o2), u2 = "y" === l2 ? Vt : Xt, f2 = "y" === l2 ? Kt : Qt, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = Pe(o2), _2 = g2 ? "y" === l2 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, A2 = Me(v2, w2, y2), E2 = l2;
      i2.modifiersData[n2] = ((e2 = {})[E2] = A2, e2.centerOffset = A2 - w2, e2);
    }
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
    null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && Le(e2.elements.popper, n2) && (e2.elements.arrow = n2);
  }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
  function Be(t2) {
    return t2.split("-")[1];
  }
  var ze = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Re(t2) {
    var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = t2.isFixed, u2 = r2.x, f2 = void 0 === u2 ? 0 : u2, p2 = r2.y, m2 = void 0 === p2 ? 0 : p2, g2 = "function" == typeof h2 ? h2({ x: f2, y: m2 }) : { x: f2, y: m2 };
    f2 = g2.x, m2 = g2.y;
    var _2 = r2.hasOwnProperty("x"), b2 = r2.hasOwnProperty("y"), v2 = Xt, y2 = Vt, w2 = window;
    if (c2) {
      var A2 = Pe(i2), E2 = "clientHeight", T2 = "clientWidth";
      A2 === ge(i2) && "static" !== Se(A2 = $e(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", T2 = "scrollWidth"), (s2 === Vt || (s2 === Xt || s2 === Qt) && o2 === Jt) && (y2 = Kt, m2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.height : A2[E2]) - n2.height, m2 *= l2 ? 1 : -1), s2 !== Xt && (s2 !== Vt && s2 !== Kt || o2 !== Jt) || (v2 = Qt, f2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.width : A2[T2]) - n2.width, f2 *= l2 ? 1 : -1);
    }
    var C2, O2 = Object.assign({ position: a2 }, c2 && ze), x2 = true === h2 ? (function(t3, e3) {
      var i3 = t3.x, n3 = t3.y, s3 = e3.devicePixelRatio || 1;
      return { x: Te(i3 * s3) / s3 || 0, y: Te(n3 * s3) / s3 || 0 };
    })({ x: f2, y: m2 }, ge(i2)) : { x: f2, y: m2 };
    return f2 = x2.x, m2 = x2.y, l2 ? Object.assign({}, O2, ((C2 = {})[y2] = b2 ? "0" : "", C2[v2] = _2 ? "0" : "", C2.transform = (w2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", C2)) : Object.assign({}, O2, ((e2 = {})[y2] = b2 ? m2 + "px" : "", e2[v2] = _2 ? f2 + "px" : "", e2.transform = "", e2));
  }
  const qe = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = { placement: we(e2.placement), variation: Be(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2, isFixed: "fixed" === e2.options.strategy };
    null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, Re(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, Re(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
  }, data: {} };
  var Ve = { passive: true };
  const Ke = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = ge(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
    return o2 && c2.forEach(function(t3) {
      t3.addEventListener("scroll", i2.update, Ve);
    }), a2 && l2.addEventListener("resize", i2.update, Ve), function() {
      o2 && c2.forEach(function(t3) {
        t3.removeEventListener("scroll", i2.update, Ve);
      }), a2 && l2.removeEventListener("resize", i2.update, Ve);
    };
  }, data: {} };
  var Qe = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Xe(t2) {
    return t2.replace(/left|right|bottom|top/g, function(t3) {
      return Qe[t3];
    });
  }
  var Ye = { start: "end", end: "start" };
  function Ue(t2) {
    return t2.replace(/start|end/g, function(t3) {
      return Ye[t3];
    });
  }
  function Ge(t2) {
    var e2 = ge(t2);
    return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
  }
  function Je(t2) {
    return xe($e(t2)).left + Ge(t2).scrollLeft;
  }
  function Ze(t2) {
    var e2 = Se(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
    return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
  }
  function ti(t2) {
    return ["html", "body", "#document"].indexOf(me(t2)) >= 0 ? t2.ownerDocument.body : be(t2) && Ze(t2) ? t2 : ti(Ie(t2));
  }
  function ei(t2, e2) {
    var i2;
    void 0 === e2 && (e2 = []);
    var n2 = ti(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = ge(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], Ze(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
    return s2 ? a2 : a2.concat(ei(Ie(r2)));
  }
  function ii(t2) {
    return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
  }
  function ni(t2, e2, i2) {
    return e2 === te ? ii((function(t3, e3) {
      var i3 = ge(t3), n2 = $e(t3), s2 = i3.visualViewport, o2 = n2.clientWidth, r2 = n2.clientHeight, a2 = 0, l2 = 0;
      if (s2) {
        o2 = s2.width, r2 = s2.height;
        var c2 = Oe();
        (c2 || !c2 && "fixed" === e3) && (a2 = s2.offsetLeft, l2 = s2.offsetTop);
      }
      return { width: o2, height: r2, x: a2 + Je(t3), y: l2 };
    })(t2, i2)) : _e(e2) ? (function(t3, e3) {
      var i3 = xe(t3, false, "fixed" === e3);
      return i3.top = i3.top + t3.clientTop, i3.left = i3.left + t3.clientLeft, i3.bottom = i3.top + t3.clientHeight, i3.right = i3.left + t3.clientWidth, i3.width = t3.clientWidth, i3.height = t3.clientHeight, i3.x = i3.left, i3.y = i3.top, i3;
    })(e2, i2) : ii((function(t3) {
      var e3, i3 = $e(t3), n2 = Ge(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = Ae(i3.scrollWidth, i3.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = Ae(i3.scrollHeight, i3.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + Je(t3), l2 = -n2.scrollTop;
      return "rtl" === Se(s2 || i3).direction && (a2 += Ae(i3.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
    })($e(t2)));
  }
  function si(t2) {
    var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? we(s2) : null, r2 = s2 ? Be(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
    switch (o2) {
      case Vt:
        e2 = { x: a2, y: i2.y - n2.height };
        break;
      case Kt:
        e2 = { x: a2, y: i2.y + i2.height };
        break;
      case Qt:
        e2 = { x: i2.x + i2.width, y: l2 };
        break;
      case Xt:
        e2 = { x: i2.x - n2.width, y: l2 };
        break;
      default:
        e2 = { x: i2.x, y: i2.y };
    }
    var c2 = o2 ? je(o2) : null;
    if (null != c2) {
      var h2 = "y" === c2 ? "height" : "width";
      switch (r2) {
        case Gt:
          e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
          break;
        case Jt:
          e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
      }
    }
    return e2;
  }
  function oi(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.strategy, r2 = void 0 === o2 ? t2.strategy : o2, a2 = i2.boundary, l2 = void 0 === a2 ? Zt : a2, c2 = i2.rootBoundary, h2 = void 0 === c2 ? te : c2, d2 = i2.elementContext, u2 = void 0 === d2 ? ee : d2, f2 = i2.altBoundary, p2 = void 0 !== f2 && f2, m2 = i2.padding, g2 = void 0 === m2 ? 0 : m2, _2 = Fe("number" != typeof g2 ? g2 : He(g2, Ut)), b2 = u2 === ee ? ie : ee, v2 = t2.rects.popper, y2 = t2.elements[p2 ? b2 : u2], w2 = (function(t3, e3, i3, n3) {
      var s3 = "clippingParents" === e3 ? (function(t4) {
        var e4 = ei(Ie(t4)), i4 = ["absolute", "fixed"].indexOf(Se(t4).position) >= 0 && be(t4) ? Pe(t4) : t4;
        return _e(i4) ? e4.filter(function(t5) {
          return _e(t5) && Le(t5, i4) && "body" !== me(t5);
        }) : [];
      })(t3) : [].concat(e3), o3 = [].concat(s3, [i3]), r3 = o3[0], a3 = o3.reduce(function(e4, i4) {
        var s4 = ni(t3, i4, n3);
        return e4.top = Ae(s4.top, e4.top), e4.right = Ee(s4.right, e4.right), e4.bottom = Ee(s4.bottom, e4.bottom), e4.left = Ae(s4.left, e4.left), e4;
      }, ni(t3, r3, n3));
      return a3.width = a3.right - a3.left, a3.height = a3.bottom - a3.top, a3.x = a3.left, a3.y = a3.top, a3;
    })(_e(y2) ? y2 : y2.contextElement || $e(t2.elements.popper), l2, h2, r2), A2 = xe(t2.elements.reference), E2 = si({ reference: A2, element: v2, placement: s2 }), T2 = ii(Object.assign({}, v2, E2)), C2 = u2 === ee ? T2 : A2, O2 = { top: w2.top - C2.top + _2.top, bottom: C2.bottom - w2.bottom + _2.bottom, left: w2.left - C2.left + _2.left, right: C2.right - w2.right + _2.right }, x2 = t2.modifiersData.offset;
    if (u2 === ee && x2) {
      var k2 = x2[s2];
      Object.keys(O2).forEach(function(t3) {
        var e3 = [Qt, Kt].indexOf(t3) >= 0 ? 1 : -1, i3 = [Vt, Kt].indexOf(t3) >= 0 ? "y" : "x";
        O2[t3] += k2[i3] * e3;
      });
    }
    return O2;
  }
  function ri(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? se : l2, h2 = Be(n2), d2 = h2 ? a2 ? ne : ne.filter(function(t3) {
      return Be(t3) === h2;
    }) : Ut, u2 = d2.filter(function(t3) {
      return c2.indexOf(t3) >= 0;
    });
    0 === u2.length && (u2 = d2);
    var f2 = u2.reduce(function(e3, i3) {
      return e3[i3] = oi(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[we(i3)], e3;
    }, {});
    return Object.keys(f2).sort(function(t3, e3) {
      return f2[t3] - f2[e3];
    });
  }
  const ai = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name;
    if (!e2.modifiersData[n2]._skip) {
      for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = we(g2), b2 = l2 || (_2 !== g2 && p2 ? (function(t3) {
        if (we(t3) === Yt) return [];
        var e3 = Xe(t3);
        return [Ue(t3), e3, Ue(e3)];
      })(g2) : [Xe(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
        return t3.concat(we(i3) === Yt ? ri(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
      }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, A2 = /* @__PURE__ */ new Map(), E2 = true, T2 = v2[0], C2 = 0; C2 < v2.length; C2++) {
        var O2 = v2[C2], x2 = we(O2), k2 = Be(O2) === Gt, L2 = [Vt, Kt].indexOf(x2) >= 0, S2 = L2 ? "width" : "height", D2 = oi(e2, { placement: O2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), $2 = L2 ? k2 ? Qt : Xt : k2 ? Kt : Vt;
        y2[S2] > w2[S2] && ($2 = Xe($2));
        var I2 = Xe($2), N2 = [];
        if (o2 && N2.push(D2[x2] <= 0), a2 && N2.push(D2[$2] <= 0, D2[I2] <= 0), N2.every(function(t3) {
          return t3;
        })) {
          T2 = O2, E2 = false;
          break;
        }
        A2.set(O2, N2);
      }
      if (E2) for (var P2 = function(t3) {
        var e3 = v2.find(function(e4) {
          var i3 = A2.get(e4);
          if (i3) return i3.slice(0, t3).every(function(t4) {
            return t4;
          });
        });
        if (e3) return T2 = e3, "break";
      }, j2 = p2 ? 3 : 1; j2 > 0 && "break" !== P2(j2); j2--) ;
      e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
    }
  }, requiresIfExists: ["offset"], data: { _skip: false } };
  function li(t2, e2, i2) {
    return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
  }
  function ci(t2) {
    return [Vt, Qt, Kt, Xt].some(function(e2) {
      return t2[e2] >= 0;
    });
  }
  const hi = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = oi(e2, { elementContext: "reference" }), a2 = oi(e2, { altBoundary: true }), l2 = li(r2, n2), c2 = li(a2, s2, o2), h2 = ci(l2), d2 = ci(c2);
    e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
  } }, di = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = se.reduce(function(t3, i3) {
      return t3[i3] = (function(t4, e3, i4) {
        var n3 = we(t4), s3 = [Xt, Vt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
        return r3 = r3 || 0, a3 = (a3 || 0) * s3, [Xt, Qt].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
      })(i3, e2.rects, o2), t3;
    }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
    null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
  } }, ui = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
    var e2 = t2.state, i2 = t2.name;
    e2.modifiersData[i2] = si({ reference: e2.rects.reference, element: e2.rects.popper, placement: e2.placement });
  }, data: {} }, fi = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = oi(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = we(e2.placement), b2 = Be(e2.placement), v2 = !b2, y2 = je(_2), w2 = "x" === y2 ? "y" : "x", A2 = e2.modifiersData.popperOffsets, E2 = e2.rects.reference, T2 = e2.rects.popper, C2 = "function" == typeof m2 ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, O2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, k2 = { x: 0, y: 0 };
    if (A2) {
      if (o2) {
        var L2, S2 = "y" === y2 ? Vt : Xt, D2 = "y" === y2 ? Kt : Qt, $2 = "y" === y2 ? "height" : "width", I2 = A2[y2], N2 = I2 + g2[S2], P2 = I2 - g2[D2], j2 = f2 ? -T2[$2] / 2 : 0, M2 = b2 === Gt ? E2[$2] : T2[$2], F2 = b2 === Gt ? -T2[$2] : -E2[$2], H2 = e2.elements.arrow, W2 = f2 && H2 ? ke(H2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z2 = B2[S2], R2 = B2[D2], q2 = Me(0, E2[$2], W2[$2]), V2 = v2 ? E2[$2] / 2 - j2 - q2 - z2 - O2.mainAxis : M2 - q2 - z2 - O2.mainAxis, K2 = v2 ? -E2[$2] / 2 + j2 + q2 + R2 + O2.mainAxis : F2 + q2 + R2 + O2.mainAxis, Q2 = e2.elements.arrow && Pe(e2.elements.arrow), X2 = Q2 ? "y" === y2 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x2 ? void 0 : x2[y2]) ? L2 : 0, U2 = I2 + K2 - Y2, G2 = Me(f2 ? Ee(N2, I2 + V2 - Y2 - X2) : N2, I2, f2 ? Ae(P2, U2) : P2);
        A2[y2] = G2, k2[y2] = G2 - I2;
      }
      if (a2) {
        var J2, Z2 = "x" === y2 ? Vt : Xt, tt2 = "x" === y2 ? Kt : Qt, et2 = A2[w2], it2 = "y" === w2 ? "height" : "width", nt2 = et2 + g2[Z2], st2 = et2 - g2[tt2], ot2 = -1 !== [Vt, Xt].indexOf(_2), rt2 = null != (J2 = null == x2 ? void 0 : x2[w2]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E2[it2] - T2[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E2[it2] + T2[it2] - rt2 - O2.altAxis : st2, ct2 = f2 && ot2 ? (function(t3, e3, i3) {
          var n3 = Me(t3, e3, i3);
          return n3 > i3 ? i3 : n3;
        })(at2, et2, lt2) : Me(f2 ? at2 : nt2, et2, f2 ? lt2 : st2);
        A2[w2] = ct2, k2[w2] = ct2 - et2;
      }
      e2.modifiersData[n2] = k2;
    }
  }, requiresIfExists: ["offset"] };
  function pi(t2, e2, i2) {
    void 0 === i2 && (i2 = false);
    var n2, s2, o2 = be(e2), r2 = be(e2) && (function(t3) {
      var e3 = t3.getBoundingClientRect(), i3 = Te(e3.width) / t3.offsetWidth || 1, n3 = Te(e3.height) / t3.offsetHeight || 1;
      return 1 !== i3 || 1 !== n3;
    })(e2), a2 = $e(e2), l2 = xe(t2, r2, i2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
    return (o2 || !o2 && !i2) && (("body" !== me(e2) || Ze(a2)) && (c2 = (n2 = e2) !== ge(n2) && be(n2) ? { scrollLeft: (s2 = n2).scrollLeft, scrollTop: s2.scrollTop } : Ge(n2)), be(e2) ? ((h2 = xe(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = Je(a2))), { x: l2.left + c2.scrollLeft - h2.x, y: l2.top + c2.scrollTop - h2.y, width: l2.width, height: l2.height };
  }
  function mi(t2) {
    var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
    function s2(t3) {
      i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
        if (!i2.has(t4)) {
          var n3 = e2.get(t4);
          n3 && s2(n3);
        }
      }), n2.push(t3);
    }
    return t2.forEach(function(t3) {
      e2.set(t3.name, t3);
    }), t2.forEach(function(t3) {
      i2.has(t3.name) || s2(t3);
    }), n2;
  }
  var gi = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function _i() {
    for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++) e2[i2] = arguments[i2];
    return !e2.some(function(t3) {
      return !(t3 && "function" == typeof t3.getBoundingClientRect);
    });
  }
  function bi(t2) {
    void 0 === t2 && (t2 = {});
    var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? gi : s2;
    return function(t3, e3, i3) {
      void 0 === i3 && (i3 = o2);
      var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, gi, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
        var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
        d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = { reference: _e(t3) ? ei(t3) : t3.contextElement ? ei(t3.contextElement) : [], popper: ei(e3) };
        var r3, c3, u2 = (function(t4) {
          var e4 = mi(t4);
          return pe.reduce(function(t5, i5) {
            return t5.concat(e4.filter(function(t6) {
              return t6.phase === i5;
            }));
          }, []);
        })((r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
          var i5 = t4[e4.name];
          return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
        }, {}), Object.keys(c3).map(function(t4) {
          return c3[t4];
        })));
        return a2.orderedModifiers = u2.filter(function(t4) {
          return t4.enabled;
        }), a2.orderedModifiers.forEach(function(t4) {
          var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
          if ("function" == typeof s5) {
            var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
            l2.push(o3 || function() {
            });
          }
        }), h2.update();
      }, forceUpdate: function() {
        if (!c2) {
          var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
          if (_i(e4, i4)) {
            a2.rects = { reference: pi(e4, Pe(i4), "fixed" === a2.options.strategy), popper: ke(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
              return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
            });
            for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++) if (true !== a2.reset) {
              var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
              "function" == typeof o3 && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
            } else a2.reset = false, n3 = -1;
          }
        }
      }, update: (s3 = function() {
        return new Promise(function(t4) {
          h2.forceUpdate(), t4(a2);
        });
      }, function() {
        return r2 || (r2 = new Promise(function(t4) {
          Promise.resolve().then(function() {
            r2 = void 0, t4(s3());
          });
        })), r2;
      }), destroy: function() {
        d2(), c2 = true;
      } };
      if (!_i(t3, e3)) return h2;
      function d2() {
        l2.forEach(function(t4) {
          return t4();
        }), l2 = [];
      }
      return h2.setOptions(i3).then(function(t4) {
        !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
      }), h2;
    };
  }
  var vi = bi(), yi = bi({ defaultModifiers: [Ke, ui, qe, ye] }), wi = bi({ defaultModifiers: [Ke, ui, qe, ye, di, ai, fi, We, hi] });
  const Ai = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: he, afterRead: ae, afterWrite: fe, applyStyles: ye, arrow: We, auto: Yt, basePlacements: Ut, beforeMain: le, beforeRead: oe, beforeWrite: de, bottom: Kt, clippingParents: Zt, computeStyles: qe, createPopper: wi, createPopperBase: vi, createPopperLite: yi, detectOverflow: oi, end: Jt, eventListeners: Ke, flip: ai, hide: hi, left: Xt, main: ce, modifierPhases: pe, offset: di, placements: se, popper: ee, popperGenerator: bi, popperOffsets: ui, preventOverflow: fi, read: re, reference: ie, right: Qt, start: Gt, top: Vt, variationPlacements: ne, viewport: te, write: ue }, Symbol.toStringTag, { value: "Module" })), Ei = "dropdown", Ti = ".bs.dropdown", Ci = ".data-api", Oi = "ArrowUp", xi = "ArrowDown", ki = `hide${Ti}`, Li = `hidden${Ti}`, Si = `show${Ti}`, Di = `shown${Ti}`, $i = `click${Ti}${Ci}`, Ii = `keydown${Ti}${Ci}`, Ni = `keyup${Ti}${Ci}`, Pi = "show", ji = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Mi = `${ji}.${Pi}`, Fi = ".dropdown-menu", Hi = m() ? "top-end" : "top-start", Wi = m() ? "top-start" : "top-end", Bi = m() ? "bottom-end" : "bottom-start", zi = m() ? "bottom-start" : "bottom-end", Ri = m() ? "left-start" : "right-start", qi = m() ? "right-start" : "left-start", Vi = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Ki = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
  class Qi extends B {
    constructor(t2, e2) {
      super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = R.next(this._element, Fi)[0] || R.prev(this._element, Fi)[0] || R.findOne(Fi, this._parent), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return Vi;
    }
    static get DefaultType() {
      return Ki;
    }
    static get NAME() {
      return Ei;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (c(this._element) || this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      if (!P.trigger(this._element, Si, t2).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t3 of [].concat(...document.body.children)) P.on(t3, "mouseover", d);
        this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Pi), this._element.classList.add(Pi), P.trigger(this._element, Di, t2);
      }
    }
    hide() {
      if (c(this._element) || !this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      this._completeHide(t2);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(t2) {
      if (!P.trigger(this._element, ki, t2).defaultPrevented) {
        if ("ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) P.off(t3, "mouseover", d);
        this._popper && this._popper.destroy(), this._menu.classList.remove(Pi), this._element.classList.remove(Pi), this._element.setAttribute("aria-expanded", "false"), H.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, Li, t2);
      }
    }
    _getConfig(t2) {
      if ("object" == typeof (t2 = super._getConfig(t2)).reference && !r(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect) throw new TypeError(`${Ei.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t2;
    }
    _createPopper() {
      if (void 0 === Ai) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
      let t2 = this._element;
      "parent" === this._config.reference ? t2 = this._parent : r(this._config.reference) ? t2 = a(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
      const e2 = this._getPopperConfig();
      this._popper = wi(t2, this._menu, e2);
    }
    _isShown() {
      return this._menu.classList.contains(Pi);
    }
    _getPlacement() {
      const t2 = this._parent;
      if (t2.classList.contains("dropend")) return Ri;
      if (t2.classList.contains("dropstart")) return qi;
      if (t2.classList.contains("dropup-center")) return "top";
      if (t2.classList.contains("dropdown-center")) return "bottom";
      const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t2.classList.contains("dropup") ? e2 ? Wi : Hi : e2 ? zi : Bi;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig() {
      const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return (this._inNavbar || "static" === this._config.display) && (H.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ..._(this._config.popperConfig, [void 0, t2]) };
    }
    _selectMenuItem({ key: t2, target: e2 }) {
      const i2 = R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => l(t3));
      i2.length && v(i2, e2, t2 === xi, !i2.includes(e2)).focus();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Qi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
    static clearMenus(t2) {
      if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key) return;
      const e2 = R.find(Mi);
      for (const i2 of e2) {
        const e3 = Qi.getInstance(i2);
        if (!e3 || false === e3._config.autoClose) continue;
        const n2 = t2.composedPath(), s2 = n2.includes(e3._menu);
        if (n2.includes(e3._element) || "inside" === e3._config.autoClose && !s2 || "outside" === e3._config.autoClose && s2) continue;
        if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName))) continue;
        const o2 = { relatedTarget: e3._element };
        "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
      }
    }
    static dataApiKeydownHandler(t2) {
      const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, n2 = [Oi, xi].includes(t2.key);
      if (!n2 && !i2) return;
      if (e2 && !i2) return;
      t2.preventDefault();
      const s2 = this.matches(ji) ? this : R.prev(this, ji)[0] || R.next(this, ji)[0] || R.findOne(ji, t2.delegateTarget.parentNode), o2 = Qi.getOrCreateInstance(s2);
      if (n2) return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
      o2._isShown() && (t2.stopPropagation(), o2.hide(), s2.focus());
    }
  }
  P.on(document, Ii, ji, Qi.dataApiKeydownHandler), P.on(document, Ii, Fi, Qi.dataApiKeydownHandler), P.on(document, $i, Qi.clearMenus), P.on(document, Ni, Qi.clearMenus), P.on(document, $i, ji, function(t2) {
    t2.preventDefault(), Qi.getOrCreateInstance(this).toggle();
  }), g(Qi);
  const Xi = "backdrop", Yi = "show", Ui = `mousedown.bs.${Xi}`, Gi = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, Ji = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
  class Zi extends W {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
    }
    static get Default() {
      return Gi;
    }
    static get DefaultType() {
      return Ji;
    }
    static get NAME() {
      return Xi;
    }
    show(t2) {
      if (!this._config.isVisible) return void _(t2);
      this._append();
      const e2 = this._getElement();
      this._config.isAnimated && u(e2), e2.classList.add(Yi), this._emulateAnimation(() => {
        _(t2);
      });
    }
    hide(t2) {
      this._config.isVisible ? (this._getElement().classList.remove(Yi), this._emulateAnimation(() => {
        this.dispose(), _(t2);
      })) : _(t2);
    }
    dispose() {
      this._isAppended && (P.off(this._element, Ui), this._element.remove(), this._isAppended = false);
    }
    _getElement() {
      if (!this._element) {
        const t2 = document.createElement("div");
        t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
      }
      return this._element;
    }
    _configAfterMerge(t2) {
      return t2.rootElement = a(t2.rootElement), t2;
    }
    _append() {
      if (this._isAppended) return;
      const t2 = this._getElement();
      this._config.rootElement.append(t2), P.on(t2, Ui, () => {
        _(this._config.clickCallback);
      }), this._isAppended = true;
    }
    _emulateAnimation(t2) {
      b(t2, this._getElement(), this._config.isAnimated);
    }
  }
  const tn = ".bs.focustrap", en = `focusin${tn}`, nn = `keydown.tab${tn}`, sn = "backward", on = { autofocus: true, trapElement: null }, rn = { autofocus: "boolean", trapElement: "element" };
  class an extends W {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
    }
    static get Default() {
      return on;
    }
    static get DefaultType() {
      return rn;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, tn), P.on(document, en, (t2) => this._handleFocusin(t2)), P.on(document, nn, (t2) => this._handleKeydown(t2)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, P.off(document, tn));
    }
    _handleFocusin(t2) {
      const { trapElement: e2 } = this._config;
      if (t2.target === document || t2.target === e2 || e2.contains(t2.target)) return;
      const i2 = R.focusableChildren(e2);
      0 === i2.length ? e2.focus() : this._lastTabNavDirection === sn ? i2[i2.length - 1].focus() : i2[0].focus();
    }
    _handleKeydown(t2) {
      "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? sn : "forward");
    }
  }
  const ln = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", cn = ".sticky-top", hn = "padding-right", dn = "margin-right";
  class un {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t2 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t2);
    }
    hide() {
      const t2 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, hn, (e2) => e2 + t2), this._setElementAttributes(ln, hn, (e2) => e2 + t2), this._setElementAttributes(cn, dn, (e2) => e2 - t2);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hn), this._resetElementAttributes(ln, hn), this._resetElementAttributes(cn, dn);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(t2, e2, i2) {
      const n2 = this.getWidth();
      this._applyManipulationCallback(t2, (t3) => {
        if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2) return;
        this._saveInitialAttribute(t3, e2);
        const s2 = window.getComputedStyle(t3).getPropertyValue(e2);
        t3.style.setProperty(e2, `${i2(Number.parseFloat(s2))}px`);
      });
    }
    _saveInitialAttribute(t2, e2) {
      const i2 = t2.style.getPropertyValue(e2);
      i2 && H.setDataAttribute(t2, e2, i2);
    }
    _resetElementAttributes(t2, e2) {
      this._applyManipulationCallback(t2, (t3) => {
        const i2 = H.getDataAttribute(t3, e2);
        null !== i2 ? (H.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
      });
    }
    _applyManipulationCallback(t2, e2) {
      if (r(t2)) e2(t2);
      else for (const i2 of R.find(t2, this._element)) e2(i2);
    }
  }
  const fn = ".bs.modal", pn = `hide${fn}`, mn = `hidePrevented${fn}`, gn = `hidden${fn}`, _n = `show${fn}`, bn = `shown${fn}`, vn = `resize${fn}`, yn = `click.dismiss${fn}`, wn = `mousedown.dismiss${fn}`, An = `keydown.dismiss${fn}`, En = `click${fn}.data-api`, Tn = "modal-open", Cn = "show", On = "modal-static", xn = { backdrop: true, focus: true, keyboard: true }, kn = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
  class Ln extends B {
    constructor(t2, e2) {
      super(t2, e2), this._dialog = R.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new un(), this._addEventListeners();
    }
    static get Default() {
      return xn;
    }
    static get DefaultType() {
      return kn;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || this._isTransitioning || P.trigger(this._element, _n, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(Tn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
    }
    hide() {
      this._isShown && !this._isTransitioning && (P.trigger(this._element, pn).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(Cn), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
    }
    dispose() {
      P.off(window, fn), P.off(this._dialog, fn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Zi({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new an({ trapElement: this._element });
    }
    _showElement(t2) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const e2 = R.findOne(".modal-body", this._dialog);
      e2 && (e2.scrollTop = 0), u(this._element), this._element.classList.add(Cn), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, P.trigger(this._element, bn, { relatedTarget: t2 });
      }, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      P.on(this._element, An, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
      }), P.on(window, vn, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), P.on(this._element, wn, (t2) => {
        P.one(this._element, yn, (e2) => {
          this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove(Tn), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, gn);
      });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, mn).defaultPrevented) return;
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
      "hidden" === e2 || this._element.classList.contains(On) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(On), this._queueCallback(() => {
        this._element.classList.remove(On), this._queueCallback(() => {
          this._element.style.overflowY = e2;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
      if (i2 && !t2) {
        const t3 = m() ? "paddingLeft" : "paddingRight";
        this._element.style[t3] = `${e2}px`;
      }
      if (!i2 && t2) {
        const t3 = m() ? "paddingRight" : "paddingLeft";
        this._element.style[t3] = `${e2}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(t2, e2) {
      return this.each(function() {
        const i2 = Ln.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2](e2);
        }
      });
    }
  }
  P.on(document, En, '[data-bs-toggle="modal"]', function(t2) {
    const e2 = R.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), P.one(e2, _n, (t3) => {
      t3.defaultPrevented || P.one(e2, gn, () => {
        l(this) && this.focus();
      });
    });
    const i2 = R.findOne(".modal.show");
    i2 && Ln.getInstance(i2).hide(), Ln.getOrCreateInstance(e2).toggle(this);
  }), q(Ln), g(Ln);
  const Sn = ".bs.offcanvas", Dn = ".data-api", $n = `load${Sn}${Dn}`, In = "show", Nn = "showing", Pn = "hiding", jn = ".offcanvas.show", Mn = `show${Sn}`, Fn = `shown${Sn}`, Hn = `hide${Sn}`, Wn = `hidePrevented${Sn}`, Bn = `hidden${Sn}`, zn = `resize${Sn}`, Rn = `click${Sn}${Dn}`, qn = `keydown.dismiss${Sn}`, Vn = { backdrop: true, keyboard: true, scroll: false }, Kn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
  class Qn extends B {
    constructor(t2, e2) {
      super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get Default() {
      return Vn;
    }
    static get DefaultType() {
      return Kn;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || P.trigger(this._element, Mn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new un().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Nn), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(In), this._element.classList.remove(Nn), P.trigger(this._element, Fn, { relatedTarget: t2 });
      }, this._element, true));
    }
    hide() {
      this._isShown && (P.trigger(this._element, Hn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(Pn), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove(In, Pn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new un().reset(), P.trigger(this._element, Bn);
      }, this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t2 = Boolean(this._config.backdrop);
      return new Zi({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
        "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, Wn);
      } : null });
    }
    _initializeFocusTrap() {
      return new an({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, qn, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Wn));
      });
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Qn.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  P.on(document, Rn, '[data-bs-toggle="offcanvas"]', function(t2) {
    const e2 = R.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this)) return;
    P.one(e2, Bn, () => {
      l(this) && this.focus();
    });
    const i2 = R.findOne(jn);
    i2 && i2 !== e2 && Qn.getInstance(i2).hide(), Qn.getOrCreateInstance(e2).toggle(this);
  }), P.on(window, $n, () => {
    for (const t2 of R.find(jn)) Qn.getOrCreateInstance(t2).show();
  }), P.on(window, zn, () => {
    for (const t2 of R.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t2).position && Qn.getOrCreateInstance(t2).hide();
  }), q(Qn), g(Qn);
  const Xn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Yn = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Un = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Gn = (t2, e2) => {
    const i2 = t2.nodeName.toLowerCase();
    return e2.includes(i2) ? !Yn.has(i2) || Boolean(Un.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
  }, Jn = { allowList: Xn, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, Zn = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, ts = { entry: "(string|element|function|null)", selector: "(string|element)" };
  class es extends W {
    constructor(t2) {
      super(), this._config = this._getConfig(t2);
    }
    static get Default() {
      return Jn;
    }
    static get DefaultType() {
      return Zn;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t2) {
      return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
    }
    toHtml() {
      const t2 = document.createElement("div");
      t2.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e3, i3] of Object.entries(this._config.content)) this._setContent(t2, i3, e3);
      const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
      return i2 && e2.classList.add(...i2.split(" ")), e2;
    }
    _typeCheckConfig(t2) {
      super._typeCheckConfig(t2), this._checkContent(t2.content);
    }
    _checkContent(t2) {
      for (const [e2, i2] of Object.entries(t2)) super._typeCheckConfig({ selector: e2, entry: i2 }, ts);
    }
    _setContent(t2, e2, i2) {
      const n2 = R.findOne(i2, t2);
      n2 && ((e2 = this._resolvePossibleFunction(e2)) ? r(e2) ? this._putElementInTemplate(a(e2), n2) : this._config.html ? n2.innerHTML = this._maybeSanitize(e2) : n2.textContent = e2 : n2.remove());
    }
    _maybeSanitize(t2) {
      return this._config.sanitize ? (function(t3, e2, i2) {
        if (!t3.length) return t3;
        if (i2 && "function" == typeof i2) return i2(t3);
        const n2 = new window.DOMParser().parseFromString(t3, "text/html"), s2 = [].concat(...n2.body.querySelectorAll("*"));
        for (const t4 of s2) {
          const i3 = t4.nodeName.toLowerCase();
          if (!Object.keys(e2).includes(i3)) {
            t4.remove();
            continue;
          }
          const n3 = [].concat(...t4.attributes), s3 = [].concat(e2["*"] || [], e2[i3] || []);
          for (const e3 of n3) Gn(e3, s3) || t4.removeAttribute(e3.nodeName);
        }
        return n2.body.innerHTML;
      })(t2, this._config.allowList, this._config.sanitizeFn) : t2;
    }
    _resolvePossibleFunction(t2) {
      return _(t2, [void 0, this]);
    }
    _putElementInTemplate(t2, e2) {
      if (this._config.html) return e2.innerHTML = "", void e2.append(t2);
      e2.textContent = t2.textContent;
    }
  }
  const is = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ns = "fade", ss = "show", os = ".tooltip-inner", rs = ".modal", as = "hide.bs.modal", ls = "hover", cs = "focus", hs = "click", ds = { AUTO: "auto", TOP: "top", RIGHT: m() ? "left" : "right", BOTTOM: "bottom", LEFT: m() ? "right" : "left" }, us = { allowList: Xn, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, fs = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
  class ps extends B {
    constructor(t2, e2) {
      if (void 0 === Ai) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
      super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }
    static get Default() {
      return us;
    }
    static get DefaultType() {
      return fs;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled && (this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout), P.off(this._element.closest(rs), as, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t2 = P.trigger(this._element, this.constructor.eventName("show")), e2 = (h(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (t2.defaultPrevented || !e2) return;
      this._disposePopper();
      const i2 = this._getTipElement();
      this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
      const { container: n2 } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (n2.append(i2), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i2), i2.classList.add(ss), "ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) P.on(t3, "mouseover", d);
      this._queueCallback(() => {
        P.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
      }, this.tip, this._isAnimated());
    }
    hide() {
      if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        if (this._getTipElement().classList.remove(ss), "ontouchstart" in document.documentElement) for (const t2 of [].concat(...document.body.children)) P.off(t2, "mouseover", d);
        this._activeTrigger[hs] = false, this._activeTrigger[cs] = false, this._activeTrigger[ls] = false, this._isHovered = null, this._queueCallback(() => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")));
        }, this.tip, this._isAnimated());
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
    }
    _createTipElement(t2) {
      const e2 = this._getTemplateFactory(t2).toHtml();
      if (!e2) return null;
      e2.classList.remove(ns, ss), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i2 = ((t3) => {
        do {
          t3 += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t3));
        return t3;
      })(this.constructor.NAME).toString();
      return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(ns), e2;
    }
    setContent(t2) {
      this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t2) {
      return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new es({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
    }
    _getContentForTemplate() {
      return { [os]: this._getTitle() };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(t2) {
      return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(ns);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(ss);
    }
    _createPopper(t2) {
      const e2 = _(this._config.placement, [this, t2, this._element]), i2 = ds[e2.toUpperCase()];
      return wi(this._element, t2, this._getPopperConfig(i2));
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _resolvePossibleFunction(t2) {
      return _(t2, [this._element, this._element]);
    }
    _getPopperConfig(t2) {
      const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
        this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
      } }] };
      return { ...e2, ..._(this._config.popperConfig, [void 0, e2]) };
    }
    _setListeners() {
      const t2 = this._config.trigger.split(" ");
      for (const e2 of t2) if ("click" === e2) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
        const e3 = this._initializeOnDelegatedTarget(t3);
        e3._activeTrigger[hs] = !(e3._isShown() && e3._activeTrigger[hs]), e3.toggle();
      });
      else if ("manual" !== e2) {
        const t3 = e2 === ls ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === ls ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
        P.on(this._element, t3, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusin" === t4.type ? cs : ls] = true, e3._enter();
        }), P.on(this._element, i2, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusout" === t4.type ? cs : ls] = e3._element.contains(t4.relatedTarget), e3._leave();
        });
      }
      this._hideModalHandler = () => {
        this._element && this.hide();
      }, P.on(this._element.closest(rs), as, this._hideModalHandler);
    }
    _fixTitle() {
      const t2 = this._element.getAttribute("title");
      t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
    }
    _setTimeout(t2, e2) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(t2) {
      const e2 = H.getDataAttributes(this._element);
      for (const t3 of Object.keys(e2)) is.has(t3) && delete e2[t3];
      return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2.container = false === t2.container ? document.body : a(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
    }
    _getDelegateConfig() {
      const t2 = {};
      for (const [e2, i2] of Object.entries(this._config)) this.constructor.Default[e2] !== i2 && (t2[e2] = i2);
      return t2.selector = false, t2.trigger = "manual", t2;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = ps.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  g(ps);
  const ms = ".popover-header", gs = ".popover-body", _s = { ...ps.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, bs = { ...ps.DefaultType, content: "(null|string|element|function)" };
  class vs extends ps {
    static get Default() {
      return _s;
    }
    static get DefaultType() {
      return bs;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return { [ms]: this._getTitle(), [gs]: this._getContent() };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = vs.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  g(vs);
  const ys = ".bs.scrollspy", ws = `activate${ys}`, As = `click${ys}`, Es = `load${ys}.data-api`, Ts = "active", Cs = "[href]", Os = ".nav-link", xs = `${Os}, .nav-item > ${Os}, .list-group-item`, ks = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, Ls = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
  class Ss extends B {
    constructor(t2, e2) {
      super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
    }
    static get Default() {
      return ks;
    }
    static get DefaultType() {
      return Ls;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const t2 of this._observableSections.values()) this._observer.observe(t2);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.target = a(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (P.off(this._config.target, As), P.on(this._config.target, As, Cs, (t2) => {
        const e2 = this._observableSections.get(t2.target.hash);
        if (e2) {
          t2.preventDefault();
          const i2 = this._rootElement || window, n2 = e2.offsetTop - this._element.offsetTop;
          if (i2.scrollTo) return void i2.scrollTo({ top: n2, behavior: "smooth" });
          i2.scrollTop = n2;
        }
      }));
    }
    _getNewObserver() {
      const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
      return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
    }
    _observerCallback(t2) {
      const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
        this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
      }, n2 = (this._rootElement || document.documentElement).scrollTop, s2 = n2 >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n2;
      for (const o2 of t2) {
        if (!o2.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e2(o2));
          continue;
        }
        const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s2 && t3) {
          if (i2(o2), !n2) return;
        } else s2 || t3 || i2(o2);
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
      const t2 = R.find(Cs, this._config.target);
      for (const e2 of t2) {
        if (!e2.hash || c(e2)) continue;
        const t3 = R.findOne(decodeURI(e2.hash), this._element);
        l(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
      }
    }
    _process(t2) {
      this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(Ts), this._activateParents(t2), P.trigger(this._element, ws, { relatedTarget: t2 }));
    }
    _activateParents(t2) {
      if (t2.classList.contains("dropdown-item")) R.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(Ts);
      else for (const e2 of R.parents(t2, ".nav, .list-group")) for (const t3 of R.prev(e2, xs)) t3.classList.add(Ts);
    }
    _clearActiveClass(t2) {
      t2.classList.remove(Ts);
      const e2 = R.find(`${Cs}.${Ts}`, t2);
      for (const t3 of e2) t3.classList.remove(Ts);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Ss.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  P.on(window, Es, () => {
    for (const t2 of R.find('[data-bs-spy="scroll"]')) Ss.getOrCreateInstance(t2);
  }), g(Ss);
  const Ds = ".bs.tab", $s = `hide${Ds}`, Is = `hidden${Ds}`, Ns = `show${Ds}`, Ps = `shown${Ds}`, js = `click${Ds}`, Ms = `keydown${Ds}`, Fs = `load${Ds}`, Hs = "ArrowLeft", Ws = "ArrowRight", Bs = "ArrowUp", zs = "ArrowDown", Rs = "Home", qs = "End", Vs = "active", Ks = "fade", Qs = "show", Xs = ".dropdown-toggle", Ys = `:not(${Xs})`, Us = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Gs = `.nav-link${Ys}, .list-group-item${Ys}, [role="tab"]${Ys}, ${Us}`, Js = `.${Vs}[data-bs-toggle="tab"], .${Vs}[data-bs-toggle="pill"], .${Vs}[data-bs-toggle="list"]`;
  class Zs extends B {
    constructor(t2) {
      super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, Ms, (t3) => this._keydown(t3)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t2 = this._element;
      if (this._elemIsActive(t2)) return;
      const e2 = this._getActiveElem(), i2 = e2 ? P.trigger(e2, $s, { relatedTarget: t2 }) : null;
      P.trigger(t2, Ns, { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
    }
    _activate(t2, e2) {
      t2 && (t2.classList.add(Vs), this._activate(R.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), P.trigger(t2, Ps, { relatedTarget: e2 })) : t2.classList.add(Qs);
      }, t2, t2.classList.contains(Ks)));
    }
    _deactivate(t2, e2) {
      t2 && (t2.classList.remove(Vs), t2.blur(), this._deactivate(R.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), P.trigger(t2, Is, { relatedTarget: e2 })) : t2.classList.remove(Qs);
      }, t2, t2.classList.contains(Ks)));
    }
    _keydown(t2) {
      if (![Hs, Ws, Bs, zs, Rs, qs].includes(t2.key)) return;
      t2.stopPropagation(), t2.preventDefault();
      const e2 = this._getChildren().filter((t3) => !c(t3));
      let i2;
      if ([Rs, qs].includes(t2.key)) i2 = e2[t2.key === Rs ? 0 : e2.length - 1];
      else {
        const n2 = [Ws, zs].includes(t2.key);
        i2 = v(e2, t2.target, n2, true);
      }
      i2 && (i2.focus({ preventScroll: true }), Zs.getOrCreateInstance(i2).show());
    }
    _getChildren() {
      return R.find(Gs, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
    }
    _setInitialAttributes(t2, e2) {
      this._setAttributeIfNotExists(t2, "role", "tablist");
      for (const t3 of e2) this._setInitialAttributesOnChild(t3);
    }
    _setInitialAttributesOnChild(t2) {
      t2 = this._getInnerElement(t2);
      const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
      t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
    }
    _setInitialAttributesOnTargetPanel(t2) {
      const e2 = R.getElementFromSelector(t2);
      e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `${t2.id}`));
    }
    _toggleDropDown(t2, e2) {
      const i2 = this._getOuterElement(t2);
      if (!i2.classList.contains("dropdown")) return;
      const n2 = (t3, n3) => {
        const s2 = R.findOne(t3, i2);
        s2 && s2.classList.toggle(n3, e2);
      };
      n2(Xs, Vs), n2(".dropdown-menu", Qs), i2.setAttribute("aria-expanded", e2);
    }
    _setAttributeIfNotExists(t2, e2, i2) {
      t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
    }
    _elemIsActive(t2) {
      return t2.classList.contains(Vs);
    }
    _getInnerElement(t2) {
      return t2.matches(Gs) ? t2 : R.findOne(Gs, t2);
    }
    _getOuterElement(t2) {
      return t2.closest(".nav-item, .list-group-item") || t2;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Zs.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  P.on(document, js, Us, function(t2) {
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this) || Zs.getOrCreateInstance(this).show();
  }), P.on(window, Fs, () => {
    for (const t2 of R.find(Js)) Zs.getOrCreateInstance(t2);
  }), g(Zs);
  const to = ".bs.toast", eo = `mouseover${to}`, io = `mouseout${to}`, no = `focusin${to}`, so = `focusout${to}`, oo = `hide${to}`, ro = `hidden${to}`, ao = `show${to}`, lo = `shown${to}`, co = "hide", ho = "show", uo = "showing", fo = { animation: "boolean", autohide: "boolean", delay: "number" }, po = { animation: true, autohide: true, delay: 5e3 };
  class mo extends B {
    constructor(t2, e2) {
      super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get Default() {
      return po;
    }
    static get DefaultType() {
      return fo;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      P.trigger(this._element, ao).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(co), u(this._element), this._element.classList.add(ho, uo), this._queueCallback(() => {
        this._element.classList.remove(uo), P.trigger(this._element, lo), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
    hide() {
      this.isShown() && (P.trigger(this._element, oo).defaultPrevented || (this._element.classList.add(uo), this._queueCallback(() => {
        this._element.classList.add(co), this._element.classList.remove(uo, ho), P.trigger(this._element, ro);
      }, this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(ho), super.dispose();
    }
    isShown() {
      return this._element.classList.contains(ho);
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(t2, e2) {
      switch (t2.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e2;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e2;
      }
      if (e2) return void this._clearTimeout();
      const i2 = t2.relatedTarget;
      this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, eo, (t2) => this._onInteraction(t2, true)), P.on(this._element, io, (t2) => this._onInteraction(t2, false)), P.on(this._element, no, (t2) => this._onInteraction(t2, true)), P.on(this._element, so, (t2) => this._onInteraction(t2, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = mo.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  return q(mo), g(mo), { Alert: X, Button: U, Carousel: St, Collapse: qt, Dropdown: Qi, Modal: Ln, Offcanvas: Qn, Popover: vs, ScrollSpy: Ss, Tab: Zs, Toast: mo, Tooltip: ps };
});
/*!
 * ApexCharts v5.10.3
 * (c) 2018-2026 ApexCharts
 */
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ApexCharts = e();
})(this, function() {
  "use strict";
  var t = Object.defineProperty, e = Object.defineProperties, s = Object.getOwnPropertyDescriptors, i = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable, r = (e2, s2, i2) => s2 in e2 ? t(e2, s2, { enumerable: true, configurable: true, writable: true, value: i2 }) : e2[s2] = i2, n = (t2, e2) => {
    for (var s2 in e2 || (e2 = {})) a.call(e2, s2) && r(t2, s2, e2[s2]);
    if (i) for (var s2 of i(e2)) o.call(e2, s2) && r(t2, s2, e2[s2]);
    return t2;
  }, l = (t2, i2) => e(t2, s(i2));
  class h {
    static isSSR() {
      return "undefined" == typeof window || "undefined" == typeof document;
    }
    static isBrowser() {
      return !this.isSSR();
    }
    static hasAPI(t2) {
      return !this.isSSR() && void 0 !== window[t2];
    }
    static getApex() {
      return "undefined" != typeof window && window.Apex ? window.Apex : "undefined" != typeof global && global.Apex ? global.Apex : {};
    }
  }
  class c {
    constructor(t2, e2 = null) {
      this.nodeName = t2, this.namespaceURI = e2, this.attributes = /* @__PURE__ */ new Map(), this.children = [], this.textContent = "", this.style = {}, this.classList = new d(), this.parentNode = null;
    }
    setAttribute(t2, e2) {
      this.attributes.set(t2, e2);
    }
    getAttribute(t2) {
      return this.attributes.get(t2);
    }
    removeAttribute(t2) {
      this.attributes.delete(t2);
    }
    hasAttribute(t2) {
      return this.attributes.has(t2);
    }
    appendChild(t2) {
      if (t2 && t2 !== this) {
        if (t2.parentNode && t2.parentNode !== this) t2.parentNode.removeChild(t2);
        else if (t2.parentNode === this) {
          const e2 = this.children.indexOf(t2);
          -1 !== e2 && this.children.splice(e2, 1);
        }
        t2.parentNode = this, this.children.push(t2);
      }
      return t2;
    }
    removeChild(t2) {
      const e2 = this.children.indexOf(t2);
      return -1 !== e2 && (this.children.splice(e2, 1), t2.parentNode = null), t2;
    }
    insertBefore(t2, e2) {
      if (!e2) return this.appendChild(t2);
      if (t2.parentNode && t2.parentNode !== this) t2.parentNode.removeChild(t2);
      else if (t2.parentNode === this) {
        const e3 = this.children.indexOf(t2);
        -1 !== e3 && this.children.splice(e3, 1);
      }
      const s2 = this.children.indexOf(e2);
      return -1 !== s2 && (t2.parentNode = this, this.children.splice(s2, 0, t2)), t2;
    }
    cloneNode(t2 = false) {
      const e2 = new c(this.nodeName, this.namespaceURI);
      return e2.textContent = this.textContent, this.attributes.forEach((t3, s2) => {
        e2.attributes.set(s2, t3);
      }), Object.assign(e2.style, this.style), t2 && this.children.forEach((t3) => {
        t3.cloneNode && e2.appendChild(t3.cloneNode(true));
      }), e2;
    }
    getBoundingClientRect() {
      return { width: this._ssrWidth || 0, height: this._ssrHeight || 0, top: 0, left: 0, right: this._ssrWidth || 0, bottom: this._ssrHeight || 0, x: 0, y: 0 };
    }
    getRootNode() {
      let t2 = this;
      for (; t2.parentNode; ) t2 = t2.parentNode;
      return t2;
    }
    querySelector() {
      return null;
    }
    querySelectorAll() {
      return [];
    }
    getElementsByClassName() {
      return [];
    }
    addEventListener() {
    }
    removeEventListener() {
    }
    get childNodes() {
      return this.children;
    }
    toString() {
      let t2 = "";
      if (this.attributes.forEach((e3, s2) => {
        t2 += ` ${s2}="${e3}"`;
      }), 0 === this.children.length && !this.textContent) return `<${this.nodeName}${t2}/>`;
      const e2 = this.children.map((t3) => t3.toString()).join("");
      return `<${this.nodeName}${t2}>${this.textContent}${e2}</${this.nodeName}>`;
    }
    get innerHTML() {
      return this.children.map((t2) => t2.toString()).join("");
    }
    set innerHTML(t2) {
      this.children = [], this.textContent = t2;
    }
    get outerHTML() {
      return this.toString();
    }
    get isConnected() {
      return true;
    }
  }
  class d {
    constructor() {
      this.classes = /* @__PURE__ */ new Set();
    }
    add(...t2) {
      t2.forEach((t3) => this.classes.add(t3));
    }
    remove(...t2) {
      t2.forEach((t3) => this.classes.delete(t3));
    }
    contains(t2) {
      return this.classes.has(t2);
    }
    toggle(t2, e2) {
      return true === e2 ? (this.classes.add(t2), true) : false === e2 || this.classes.has(t2) ? (this.classes.delete(t2), false) : (this.classes.add(t2), true);
    }
    toString() {
      return Array.from(this.classes).join(" ");
    }
  }
  class g {
    constructor() {
      this.SVGNS = "http://www.w3.org/2000/svg", this.XLINKNS = "http://www.w3.org/1999/xlink";
    }
    createElementNS(t2, e2) {
      return new c(e2, t2);
    }
    createTextNode(t2) {
      return { nodeName: "#text", nodeType: 3, textContent: t2, toString() {
        return this.textContent;
      } };
    }
    querySelector() {
      return null;
    }
    querySelectorAll() {
      return [];
    }
    getComputedStyle() {
      return {};
    }
    getBoundingClientRect(t2) {
      return t2 && t2.getBoundingClientRect ? t2.getBoundingClientRect() : { width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, x: 0, y: 0 };
    }
    createXMLSerializer() {
      return { serializeToString: (t2) => t2.toString ? t2.toString() : "" };
    }
    createDOMParser() {
      return { parseFromString(t2, e2) {
        const s2 = new c("root");
        return s2.innerHTML = t2, { documentElement: s2 };
      } };
    }
  }
  let p = null, x = null, u = null;
  class f {
    static init() {
      h.isSSR() && !p && (p = new g());
    }
    static createElement(t2) {
      return h.isSSR() ? (p || this.init(), p.createElementNS(null, t2)) : document.createElement(t2);
    }
    static createElementNS(t2, e2) {
      return h.isSSR() ? (p || this.init(), p.createElementNS(t2, e2)) : document.createElementNS(t2, e2);
    }
    static createTextNode(t2) {
      return h.isSSR() ? (p || this.init(), p.createTextNode(t2)) : document.createTextNode(t2);
    }
    static querySelector(t2) {
      return h.isSSR() ? null : document.querySelector(t2);
    }
    static querySelectorAll(t2) {
      return h.isSSR() ? [] : document.querySelectorAll(t2);
    }
    static getComputedStyle(t2) {
      return h.isSSR() ? {} : window.getComputedStyle(t2);
    }
    static getBoundingClientRect(t2) {
      return h.isSSR() ? (p || this.init(), p.getBoundingClientRect(t2)) : t2 ? t2.getBoundingClientRect() : { width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, x: 0, y: 0 };
    }
    static getXMLSerializer() {
      return h.isSSR() ? (p || this.init(), x || (x = p.createXMLSerializer()), x) : (x || (x = new XMLSerializer()), x);
    }
    static getDOMParser() {
      return h.isSSR() ? (p || this.init(), u || (u = p.createDOMParser()), u) : (u || (u = new DOMParser()), u);
    }
    static addWindowEventListener(t2, e2, s2) {
      h.isBrowser() && window.addEventListener(t2, e2, s2);
    }
    static removeWindowEventListener(t2, e2, s2) {
      h.isBrowser() && window.removeEventListener(t2, e2, s2);
    }
    static requestAnimationFrame(t2) {
      return h.isBrowser() ? window.requestAnimationFrame(t2) : (t2(), null);
    }
    static cancelAnimationFrame(t2) {
      h.isBrowser() && t2 && window.cancelAnimationFrame(t2);
    }
    static elementExists(t2) {
      return !!t2 && (h.isSSR() ? true === t2._ssrMode || void 0 !== t2.nodeName : !!t2.getRootNode && (t2.getRootNode({ composed: true }) === document || t2.isConnected));
    }
    static getWindow() {
      return h.isBrowser() ? window : null;
    }
    static getDocument() {
      return h.isBrowser() ? document : null;
    }
    static _getShim() {
      return p;
    }
    static _resetShim() {
      p = null, x = null, u = null;
    }
  }
  let b = class t2 {
    static isObject(t3) {
      return t3 && "object" == typeof t3 && !Array.isArray(t3);
    }
    static is(t3, e2) {
      return Object.prototype.toString.call(e2) === "[object " + t3 + "]";
    }
    static isSafari() {
      return h.isBrowser() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
    static extend(t3, e2) {
      const s2 = Object.assign({}, t3);
      return this.isObject(t3) && this.isObject(e2) && Object.keys(e2).forEach((i2) => {
        this.isObject(e2[i2]) ? i2 in t3 ? s2[i2] = this.extend(t3[i2], e2[i2]) : Object.assign(s2, { [i2]: e2[i2] }) : Object.assign(s2, { [i2]: e2[i2] });
      }), s2;
    }
    static extendArray(e2, s2) {
      const i2 = [];
      return e2.map((e3) => {
        i2.push(t2.extend(s2, e3));
      }), e2 = i2;
    }
    static monthMod(t3) {
      return t3 % 12;
    }
    static clone(t3, e2 = /* @__PURE__ */ new WeakMap(), s2 = false) {
      if (null === t3 || "object" != typeof t3) return t3;
      if (e2.has(t3)) return e2.get(t3);
      let i2;
      if (Array.isArray(t3)) if (s2) i2 = t3.slice();
      else {
        i2 = [], e2.set(t3, i2);
        for (let s3 = 0; s3 < t3.length; s3++) i2[s3] = this.clone(t3[s3], e2, false);
      }
      else if (t3 instanceof Date) i2 = new Date(t3.getTime());
      else if (s2) i2 = Object.assign({}, t3);
      else {
        i2 = {}, e2.set(t3, i2);
        for (const s3 in t3) Object.prototype.hasOwnProperty.call(t3, s3) && (i2[s3] = this.clone(t3[s3], e2, false));
      }
      return i2;
    }
    static shallowClone(t3) {
      return null === t3 || "object" != typeof t3 ? t3 : Array.isArray(t3) ? t3.slice() : Object.assign({}, t3);
    }
    static shallowEqual(t3, e2) {
      if (t3 === e2) return true;
      if (!t3 || !e2) return false;
      if ("object" != typeof t3 || "object" != typeof e2) return t3 === e2;
      const s2 = Object.keys(t3), i2 = Object.keys(e2);
      if (s2.length !== i2.length) return false;
      for (const i3 of s2) if (t3[i3] !== e2[i3]) return false;
      return true;
    }
    static log10(t3) {
      return Math.log(t3) / Math.LN10;
    }
    static roundToBase10(t3) {
      return Math.pow(10, Math.floor(Math.log10(t3)));
    }
    static roundToBase(t3, e2) {
      return Math.pow(e2, Math.floor(Math.log(t3) / Math.log(e2)));
    }
    static parseNumber(t3) {
      return "number" == typeof t3 || null === t3 ? t3 : parseFloat(t3);
    }
    static stripNumber(t3, e2 = 2) {
      return Number.isInteger(t3) ? t3 : parseFloat(t3.toPrecision(e2));
    }
    static randomId() {
      return (Math.random() + 1).toString(36).substring(4);
    }
    static noExponents(t3) {
      return t3.toString().includes("e") ? Math.round(t3) : t3;
    }
    static elementExists(t3) {
      return !(!t3 || !t3.isConnected);
    }
    static isInShadowDOM(e2) {
      if (!e2 || !e2.getRootNode) return false;
      const s2 = e2.getRootNode();
      return s2 && s2 !== document && t2.is("ShadowRoot", s2);
    }
    static getShadowRootHost(e2) {
      if (!t2.isInShadowDOM(e2)) return null;
      return e2.getRootNode().host || null;
    }
    static getDimensions(t3) {
      if (!t3) return [0, 0];
      if (h.isSSR()) return [t3._ssrWidth || 400, t3._ssrHeight || 300];
      const e2 = t3.getRootNode && t3.getRootNode();
      if (e2 && e2 !== document && e2.host) {
        const t4 = e2.host.getBoundingClientRect();
        return [t4.width, t4.height];
      }
      let s2;
      try {
        s2 = getComputedStyle(t3, null);
      } catch (e3) {
        return [t3.clientWidth || 0, t3.clientHeight || 0];
      }
      let i2 = t3.clientHeight, a2 = t3.clientWidth;
      return i2 -= parseFloat(s2.paddingTop) + parseFloat(s2.paddingBottom), a2 -= parseFloat(s2.paddingLeft) + parseFloat(s2.paddingRight), [a2, i2];
    }
    static getBoundingClientRect(t3) {
      if (!t3) return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0, x: 0, y: 0 };
      if (h.isSSR()) return f.getBoundingClientRect(t3);
      const e2 = t3.getBoundingClientRect();
      return { top: e2.top, right: e2.right, bottom: e2.bottom, left: e2.left, width: t3.clientWidth, height: t3.clientHeight, x: e2.left, y: e2.top };
    }
    static getLargestStringFromArr(t3) {
      return t3.reduce((t4, e2) => (Array.isArray(e2) && (e2 = e2.reduce((t5, e3) => t5.length > e3.length ? t5 : e3)), t4.length > e2.length ? t4 : e2), 0);
    }
    static hexToRgba(t3 = "#999999", e2 = 0.6) {
      "#" !== t3.substring(0, 1) && (t3 = "#999999");
      let s2 = t3.replace("#", "");
      s2 = s2.match(new RegExp("(.{" + s2.length / 3 + "})", "g"));
      for (let t4 = 0; t4 < s2.length; t4++) s2[t4] = parseInt(1 === s2[t4].length ? s2[t4] + s2[t4] : s2[t4], 16);
      return void 0 !== e2 && s2.push(e2), "rgba(" + s2.join(",") + ")";
    }
    static getOpacityFromRGBA(t3) {
      return parseFloat(t3.replace(/^.*,(.+)\)/, "$1"));
    }
    static rgb2hex(t3) {
      return (t3 = t3.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t3.length ? "#" + ("0" + parseInt(t3[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[3], 10).toString(16)).slice(-2) : "";
    }
    shadeRGBColor(t3, e2) {
      const s2 = e2.split(","), i2 = t3 < 0 ? 0 : 255, a2 = t3 < 0 ? -1 * t3 : t3, o2 = parseInt(s2[0].slice(4), 10), r2 = parseInt(s2[1], 10), n2 = parseInt(s2[2], 10);
      return "rgb(" + (Math.round((i2 - o2) * a2) + o2) + "," + (Math.round((i2 - r2) * a2) + r2) + "," + (Math.round((i2 - n2) * a2) + n2) + ")";
    }
    shadeHexColor(t3, e2) {
      const s2 = parseInt(e2.slice(1), 16), i2 = t3 < 0 ? 0 : 255, a2 = t3 < 0 ? -1 * t3 : t3, o2 = s2 >> 16, r2 = s2 >> 8 & 255, n2 = 255 & s2;
      return "#" + (16777216 + 65536 * (Math.round((i2 - o2) * a2) + o2) + 256 * (Math.round((i2 - r2) * a2) + r2) + (Math.round((i2 - n2) * a2) + n2)).toString(16).slice(1);
    }
    shadeColor(e2, s2) {
      return t2.isColorHex(s2) ? this.shadeHexColor(e2, s2) : this.shadeRGBColor(e2, s2);
    }
    static isColorHex(t3) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t3);
    }
    static isCSSVariable(t3) {
      if ("string" != typeof t3) return false;
      const e2 = t3.trim();
      return e2.startsWith("var(") && e2.endsWith(")");
    }
    static getThemeColor(e2) {
      if (!t2.isCSSVariable(e2)) return e2;
      if (h.isSSR()) return e2;
      const s2 = document.createElement("div");
      let i2;
      s2.style.cssText = "position:fixed; left: -9999px; visibility:hidden;", s2.style.color = e2, document.body.appendChild(s2);
      try {
        i2 = window.getComputedStyle(s2).color;
      } finally {
        s2.parentNode && s2.parentNode.removeChild(s2);
      }
      return i2;
    }
    static getPolygonPos(t3, e2) {
      const s2 = [], i2 = 2 * Math.PI / e2;
      for (let a2 = 0; a2 < e2; a2++) {
        const e3 = {};
        e3.x = t3 * Math.sin(a2 * i2), e3.y = -t3 * Math.cos(a2 * i2), s2.push(e3);
      }
      return s2;
    }
    static polarToCartesian(t3, e2, s2, i2) {
      const a2 = (i2 - 90) * Math.PI / 180;
      return { x: t3 + s2 * Math.cos(a2), y: e2 + s2 * Math.sin(a2) };
    }
    static escapeString(t3, e2 = "x") {
      let s2 = t3.toString().slice();
      return s2 = s2.replace(/[` ~!@#$%^&*()|+=?;:'",.<>{}[\]\\/]/gi, e2), s2;
    }
    static negToZero(t3) {
      return t3 < 0 ? 0 : t3;
    }
    static moveIndexInArray(t3, e2, s2) {
      if (s2 >= t3.length) {
        let e3 = s2 - t3.length + 1;
        for (; e3--; ) t3.push(void 0);
      }
      return t3.splice(s2, 0, t3.splice(e2, 1)[0]), t3;
    }
    static extractNumber(t3) {
      return parseFloat(t3.replace(/[^\d.]*/g, ""));
    }
    static findAncestor(t3, e2) {
      for (; (t3 = t3.parentElement) && !t3.classList.contains(e2); ) ;
      return t3;
    }
    static setELstyles(t3, e2) {
      for (const s2 in e2) Object.prototype.hasOwnProperty.call(e2, s2) && (t3.style.key = e2[s2]);
    }
    static preciseAddition(t3, e2) {
      const s2 = (String(t3).split(".")[1] || "").length, i2 = (String(e2).split(".")[1] || "").length, a2 = Math.pow(10, Math.max(s2, i2));
      return (Math.round(t3 * a2) + Math.round(e2 * a2)) / a2;
    }
    static isNumber(t3) {
      return !isNaN(t3) && parseFloat(Number(t3)) === t3 && !isNaN(parseInt(t3, 10));
    }
    static isFloat(t3) {
      return Number(t3) === t3 && t3 % 1 != 0;
    }
    static isMsEdge() {
      if (h.isSSR()) return false;
      const t3 = window.navigator.userAgent, e2 = t3.indexOf("Edge/");
      return e2 > 0 && parseInt(t3.substring(e2 + 5, t3.indexOf(".", e2)), 10);
    }
    static getGCD(t3, e2, s2 = 7) {
      let i2 = Math.pow(10, s2 - Math.floor(Math.log10(Math.max(t3, e2))));
      for (i2 > 1 ? (t3 = Math.round(Math.abs(t3) * i2), e2 = Math.round(Math.abs(e2) * i2)) : i2 = 1; e2; ) {
        const s3 = e2;
        e2 = t3 % e2, t3 = s3;
      }
      return t3 / i2;
    }
    static getPrimeFactors(t3) {
      const e2 = [];
      let s2 = 2;
      for (; t3 >= 2; ) t3 % s2 == 0 ? (e2.push(s2), t3 /= s2) : s2++;
      return e2;
    }
    static mod(t3, e2, s2 = 7) {
      const i2 = Math.pow(10, s2 - Math.floor(Math.log10(Math.max(t3, e2))));
      return (t3 = Math.round(Math.abs(t3) * i2)) % (e2 = Math.round(Math.abs(e2) * i2)) / i2;
    }
  };
  class m {
    constructor(t2) {
      this.w = t2, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }
    isValidDate(t2) {
      return "number" != typeof t2 && !isNaN(this.parseDate(t2));
    }
    getTimeStamp(t2) {
      if (!Date.parse(t2)) return t2;
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t2).toISOString().substr(0, 25)).getTime() : new Date(t2).getTime();
    }
    getDate(t2) {
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t2).toUTCString()) : new Date(t2);
    }
    parseDate(t2) {
      const e2 = Date.parse(t2);
      if (!isNaN(e2)) return this.getTimeStamp(t2);
      let s2 = Date.parse(t2.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
      return s2 = this.getTimeStamp(s2), s2;
    }
    parseDateWithTimezone(t2) {
      return Date.parse(t2.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    }
    formatDate(t2, e2) {
      const s2 = this.w.globals.locale, i2 = this.w.config.xaxis.labels.datetimeUTC, a2 = ["\0", ...s2.months], o2 = ["", ...s2.shortMonths], r2 = ["", ...s2.days], n2 = ["", ...s2.shortDays];
      function l2(t3, e3) {
        let s3 = t3 + "";
        for (e3 = e3 || 2; s3.length < e3; ) s3 = "0" + s3;
        return s3;
      }
      const h2 = i2 ? t2.getUTCFullYear() : t2.getFullYear();
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])yyyy+/g, "$1" + h2)).replace(/(^|[^\\])yy/g, "$1" + h2.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h2);
      const c2 = (i2 ? t2.getUTCMonth() : t2.getMonth()) + 1;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])MMMM+/g, "$1" + a2[0])).replace(/(^|[^\\])MMM/g, "$1" + o2[0])).replace(/(^|[^\\])MM/g, "$1" + l2(c2))).replace(/(^|[^\\])M/g, "$1" + c2);
      const d2 = i2 ? t2.getUTCDate() : t2.getDate();
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])dddd+/g, "$1" + r2[0])).replace(/(^|[^\\])ddd/g, "$1" + n2[0])).replace(/(^|[^\\])dd/g, "$1" + l2(d2))).replace(/(^|[^\\])d/g, "$1" + d2);
      const g2 = i2 ? t2.getUTCHours() : t2.getHours(), p2 = g2 > 12 ? g2 - 12 : 0 === g2 ? 12 : g2;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])HH+/g, "$1" + l2(g2))).replace(/(^|[^\\])H/g, "$1" + g2)).replace(/(^|[^\\])hh+/g, "$1" + l2(p2))).replace(/(^|[^\\])h/g, "$1" + p2);
      const x2 = i2 ? t2.getUTCMinutes() : t2.getMinutes();
      e2 = (e2 = e2.replace(/(^|[^\\])mm+/g, "$1" + l2(x2))).replace(/(^|[^\\])m/g, "$1" + x2);
      const u2 = i2 ? t2.getUTCSeconds() : t2.getSeconds();
      e2 = (e2 = e2.replace(/(^|[^\\])ss+/g, "$1" + l2(u2))).replace(/(^|[^\\])s/g, "$1" + u2);
      let f2 = i2 ? t2.getUTCMilliseconds() : t2.getMilliseconds();
      e2 = e2.replace(/(^|[^\\])fff+/g, "$1" + l2(f2, 3)), f2 = Math.round(f2 / 10), e2 = e2.replace(/(^|[^\\])ff/g, "$1" + l2(f2)), f2 = Math.round(f2 / 10);
      const b2 = g2 < 12 ? "AM" : "PM";
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])f/g, "$1" + f2)).replace(/(^|[^\\])TT+/g, "$1" + b2)).replace(/(^|[^\\])T/g, "$1" + b2.charAt(0));
      const m2 = b2.toLowerCase();
      e2 = (e2 = e2.replace(/(^|[^\\])tt+/g, "$1" + m2)).replace(/(^|[^\\])t/g, "$1" + m2.charAt(0));
      let y2 = -t2.getTimezoneOffset(), w2 = i2 || !y2 ? "Z" : y2 > 0 ? "+" : "-";
      if (!i2) {
        y2 = Math.abs(y2);
        const t3 = y2 % 60;
        w2 += l2(Math.floor(y2 / 60)) + ":" + l2(t3);
      }
      e2 = e2.replace(/(^|[^\\])K/g, "$1" + w2);
      const v2 = (i2 ? t2.getUTCDay() : t2.getDay()) + 1;
      return e2 = (e2 = (e2 = (e2 = (e2 = e2.replace(new RegExp(r2[0], "g"), r2[v2])).replace(new RegExp(n2[0], "g"), n2[v2])).replace(new RegExp(a2[0], "g"), a2[c2])).replace(new RegExp(o2[0], "g"), o2[c2])).replace(/\\(.)/g, "$1");
    }
    getTimeUnitsfromTimestamp(t2, e2) {
      const s2 = this.w;
      void 0 !== s2.config.xaxis.min && (t2 = s2.config.xaxis.min), void 0 !== s2.config.xaxis.max && (e2 = s2.config.xaxis.max);
      const i2 = this.getDate(t2), a2 = this.getDate(e2), o2 = this.formatDate(i2, "yyyy MM dd HH mm ss fff").split(" "), r2 = this.formatDate(a2, "yyyy MM dd HH mm ss fff").split(" ");
      return { minMillisecond: parseInt(o2[6], 10), maxMillisecond: parseInt(r2[6], 10), minSecond: parseInt(o2[5], 10), maxSecond: parseInt(r2[5], 10), minMinute: parseInt(o2[4], 10), maxMinute: parseInt(r2[4], 10), minHour: parseInt(o2[3], 10), maxHour: parseInt(r2[3], 10), minDate: parseInt(o2[2], 10), maxDate: parseInt(r2[2], 10), minMonth: parseInt(o2[1], 10) - 1, maxMonth: parseInt(r2[1], 10) - 1, minYear: parseInt(o2[0], 10), maxYear: parseInt(r2[0], 10) };
    }
    isLeapYear(t2) {
      return t2 % 4 == 0 && t2 % 100 != 0 || t2 % 400 == 0;
    }
    calculcateLastDaysOfMonth(t2, e2, s2) {
      return this.determineDaysOfMonths(t2, e2) - s2;
    }
    determineDaysOfYear(t2) {
      let e2 = 365;
      return this.isLeapYear(t2) && (e2 = 366), e2;
    }
    determineRemainingDaysOfYear(t2, e2, s2) {
      let i2 = this.daysCntOfYear[e2] + s2;
      return e2 > 1 && this.isLeapYear() && i2++, i2;
    }
    determineDaysOfMonths(t2, e2) {
      let s2 = 30;
      switch (t2 = b.monthMod(t2), true) {
        case this.months30.indexOf(t2) > -1:
          2 === t2 && (s2 = this.isLeapYear(e2) ? 29 : 28);
          break;
        case this.months31.indexOf(t2) > -1:
        default:
          s2 = 31;
      }
      return s2;
    }
  }
  class y {
    constructor(t2) {
      this.w = t2, this.tooltipKeyFormat = "dd MMM";
    }
    xLabelFormat(t2, e2, s2, i2) {
      const a2 = this.w;
      if ("datetime" === a2.config.xaxis.type && void 0 === a2.config.xaxis.labels.formatter && void 0 === a2.config.tooltip.x.formatter) {
        const t3 = new m(this.w);
        return t3.formatDate(t3.getDate(e2), a2.config.tooltip.x.format);
      }
      return t2(e2, s2, i2);
    }
    defaultGeneralFormatter(t2) {
      return Array.isArray(t2) ? t2.map((t3) => t3) : t2;
    }
    defaultYFormatter(t2, e2) {
      const s2 = this.w;
      if (b.isNumber(t2)) if (0 !== s2.globals.yValueDecimal) t2 = t2.toFixed(void 0 !== e2.decimalsInFloat ? e2.decimalsInFloat : s2.globals.yValueDecimal);
      else {
        const e3 = t2.toFixed(0);
        t2 = t2 == e3 ? e3 : t2.toFixed(1);
      }
      return t2;
    }
    setLabelFormatters() {
      const t2 = this.w, e2 = t2.formatters;
      return e2.xaxisTooltipFormatter = (t3) => this.defaultGeneralFormatter(t3), e2.ttKeyFormatter = (t3) => this.defaultGeneralFormatter(t3), e2.ttZFormatter = (t3) => t3, e2.legendFormatter = (t3) => this.defaultGeneralFormatter(t3), void 0 !== t2.config.xaxis.labels.formatter ? e2.xLabelFormatter = t2.config.xaxis.labels.formatter : e2.xLabelFormatter = (e3) => {
        if (b.isNumber(e3)) {
          if (!t2.config.xaxis.convertedCatToNumeric && "numeric" === t2.config.xaxis.type) {
            if (b.isNumber(t2.config.xaxis.decimalsInFloat)) return e3.toFixed(t2.config.xaxis.decimalsInFloat);
            {
              const s2 = t2.globals.maxX - t2.globals.minX;
              return s2 > 0 && s2 < 100 ? e3.toFixed(1) : e3.toFixed(0);
            }
          }
          if (t2.globals.isBarHorizontal) {
            if (t2.globals.maxY - t2.globals.minYArr < 4) return e3.toFixed(1);
          }
          return e3.toFixed(0);
        }
        return e3;
      }, "function" == typeof t2.config.tooltip.x.formatter ? e2.ttKeyFormatter = t2.config.tooltip.x.formatter : e2.ttKeyFormatter = e2.xLabelFormatter, "function" == typeof t2.config.xaxis.tooltip.formatter && (e2.xaxisTooltipFormatter = t2.config.xaxis.tooltip.formatter), (Array.isArray(t2.config.tooltip.y) || void 0 !== t2.config.tooltip.y.formatter) && (e2.ttVal = t2.config.tooltip.y), void 0 !== t2.config.tooltip.z.formatter && (e2.ttZFormatter = t2.config.tooltip.z.formatter), void 0 !== t2.config.legend.formatter && (e2.legendFormatter = t2.config.legend.formatter), e2.yLabelFormatters = [], t2.config.yaxis.forEach((s2, i2) => {
        void 0 !== s2.labels.formatter ? e2.yLabelFormatters[i2] = s2.labels.formatter : e2.yLabelFormatters[i2] = (e3) => t2.globals.xyCharts ? Array.isArray(e3) ? e3.map((t3) => this.defaultYFormatter(t3, s2, i2)) : this.defaultYFormatter(e3, s2, i2) : e3;
      }), t2.globals;
    }
    heatmapLabelFormatters() {
      const t2 = this.w;
      if ("heatmap" === t2.config.chart.type) {
        t2.globals.yAxisScale[0].result = t2.seriesData.seriesNames.slice();
        const e2 = t2.seriesData.seriesNames.reduce((t3, e3) => t3.length > e3.length ? t3 : e3, 0);
        t2.globals.yAxisScale[0].niceMax = e2, t2.globals.yAxisScale[0].niceMin = e2;
      }
    }
  }
  const w = ({ isTimeline: t2, seriesIndex: e2, dataPointIndex: s2, y1: i2, y2: a2, w: o2 }) => {
    var r2;
    let n2 = o2.rangeData.seriesRangeStart[e2][s2], l2 = o2.rangeData.seriesRangeEnd[e2][s2], h2 = o2.labelData.labels[s2], c2 = o2.config.series[e2].name ? o2.config.series[e2].name : "";
    const d2 = o2.formatters.ttKeyFormatter, g2 = o2.config.tooltip.y.title.formatter, p2 = { w: o2, seriesIndex: e2, dataPointIndex: s2, start: n2, end: l2 };
    if ("function" == typeof g2 && (c2 = g2(c2, p2)), (null == (r2 = o2.config.series[e2].data[s2]) ? void 0 : r2.x) && (h2 = o2.config.series[e2].data[s2].x), !t2 && "datetime" === o2.config.xaxis.type) {
      h2 = new y(o2).xLabelFormat(o2.formatters.ttKeyFormatter, h2, h2, { i: void 0, dateFormatter: new m(o2).formatDate, w: o2 });
    }
    "function" == typeof d2 && (h2 = d2(h2, p2)), Number.isFinite(i2) && Number.isFinite(a2) && (n2 = i2, l2 = a2);
    let x2 = "", u2 = "";
    const f2 = o2.globals.colors[e2];
    if (void 0 === o2.config.tooltip.x.formatter) if ("datetime" === o2.config.xaxis.type) {
      const t3 = new m(o2);
      x2 = t3.formatDate(t3.getDate(n2), o2.config.tooltip.x.format), u2 = t3.formatDate(t3.getDate(l2), o2.config.tooltip.x.format);
    } else x2 = n2, u2 = l2;
    else x2 = o2.config.tooltip.x.formatter(n2), u2 = o2.config.tooltip.x.formatter(l2);
    return { start: n2, end: l2, startVal: x2, endVal: u2, ylabel: h2, color: f2, seriesName: c2 };
  }, v = (t2) => {
    let { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2, seriesIndex: r2, dataPointIndex: n2 } = t2;
    const l2 = t2.w.globals.tooltip.tooltipLabels.getFormatters(r2);
    a2 = l2.yLbFormatter(a2), o2 = l2.yLbFormatter(o2);
    const h2 = l2.yLbFormatter(t2.w.seriesData.series[r2][n2]);
    let c2 = "";
    const d2 = `<span class="value start-value">
  ${a2}
  </span> <span class="separator">-</span> <span class="value end-value">
  ${o2}
  </span>`;
    return c2 = t2.w.globals.comboCharts ? "rangeArea" === t2.w.config.series[r2].type || "rangeBar" === t2.w.config.series[r2].type ? d2 : `<span>${h2}</span>` : d2, '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e2 + '">' + (s2 || "") + '</span></div><div> <span class="category">' + i2 + ": </span> " + c2 + " </div></div>";
  };
  class A {
    constructor(t2) {
      this.opts = t2;
    }
    hideYAxis() {
      this.opts.yaxis[0].show = false, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = false, this.opts.yaxis[0].axisTicks.show = false, this.opts.yaxis[0].floating = true;
    }
    line() {
      return { dataLabels: { enabled: false }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
    }
    sparkline(t2) {
      this.hideYAxis();
      return b.extend(t2, { grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: false }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } }, chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false } });
    }
    slope() {
      return this.hideYAxis(), { chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: true, formatter(t2, e2) {
        const s2 = e2.w.config.series[e2.seriesIndex].name;
        return null !== t2 ? s2 + ": " + t2 : "";
      }, background: { enabled: false }, offsetX: -5 }, grid: { xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } }, xaxis: { position: "top", labels: { style: { fontSize: 14, fontWeight: 900 } }, tooltip: { enabled: false }, crosshairs: { show: false } }, markers: { size: 8, hover: { sizeOffset: 1 } }, legend: { show: false }, tooltip: { shared: false, intersect: true, followCursor: true }, stroke: { width: 5, curve: "straight" } };
    }
    bar() {
      return { chart: { stacked: false }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: false } }, stroke: { width: 0, lineCap: "square" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square" } }, tooltip: { shared: false, intersect: true }, xaxis: { tooltip: { enabled: false }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: false }, stroke: { width: 0 } } } };
    }
    funnel() {
      return this.hideYAxis(), l(n({}, this.bar()), { chart: { animations: { speed: 800, animateGradually: { enabled: false } } }, plotOptions: { bar: { horizontal: true, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: false, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } } });
    }
    candlestick() {
      return { stroke: { width: 1 }, fill: { opacity: 1 }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: ({ seriesIndex: t2, dataPointIndex: e2, w: s2 }) => this._getBoxTooltip(s2, t2, e2, ["Open", "High", "", "Low", "Close"], "candlestick") }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
    }
    boxPlot() {
      return { chart: { animations: { dynamicAnimation: { enabled: false } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: ({ seriesIndex: t2, dataPointIndex: e2, w: s2 }) => this._getBoxTooltip(s2, t2, e2, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot") }, markers: { size: 7, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
    }
    rangeBar() {
      return { chart: { animations: { animateGradually: false } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: false, formatter(t2, { seriesIndex: e2, dataPointIndex: s2, w: i2 }) {
        const a2 = () => {
          const t3 = i2.rangeData.seriesRangeStart[e2][s2];
          return i2.rangeData.seriesRangeEnd[e2][s2] - t3;
        };
        return i2.globals.comboCharts ? "rangeBar" === i2.config.series[e2].type || "rangeArea" === i2.config.series[e2].type ? a2() : t2 : a2();
      }, background: { enabled: false }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: false, followCursor: true, custom: (t2) => t2.w.config.plotOptions && t2.w.config.plotOptions.bar && t2.w.config.plotOptions.bar.horizontal ? ((t3) => {
        const { color: e2, seriesName: s2, ylabel: i2, startVal: a2, endVal: o2 } = w(l(n({}, t3), { isTimeline: true }));
        return v(l(n({}, t3), { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 }));
      })(t2) : ((t3) => {
        const { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 } = w(t3);
        return v(l(n({}, t3), { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 }));
      })(t2) }, xaxis: { tickPlacement: "between", tooltip: { enabled: false }, crosshairs: { stroke: { width: 0 } } } };
    }
    dumbbell(t2) {
      var e2, s2;
      return (null == (e2 = t2.plotOptions.bar) ? void 0 : e2.barHeight) || (t2.plotOptions.bar.barHeight = 2), (null == (s2 = t2.plotOptions.bar) ? void 0 : s2.columnWidth) || (t2.plotOptions.bar.columnWidth = 2), t2;
    }
    area() {
      return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: false } };
    }
    rangeArea() {
      return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: false, shared: true, followCursor: true, custom: (t2) => ((t3) => {
        const { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 } = w(t3);
        return v(l(n({}, t3), { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 }));
      })(t2) } };
    }
    brush(t2) {
      return b.extend(t2, { chart: { toolbar: { autoSelected: "selection", show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false }, stroke: { width: 1 }, tooltip: { enabled: false }, xaxis: { tooltip: { enabled: false } } });
    }
    stacked100(t2) {
      t2.dataLabels = t2.dataLabels || {}, t2.dataLabels.formatter = t2.dataLabels.formatter || void 0;
      const e2 = t2.dataLabels.formatter;
      t2.yaxis.forEach((e3, s2) => {
        t2.yaxis[s2].min = 0, t2.yaxis[s2].max = 100;
      });
      return "bar" === t2.chart.type && (t2.dataLabels.formatter = e2 || function(t3) {
        return "number" == typeof t3 && t3 ? t3.toFixed(0) + "%" : t3;
      }), t2;
    }
    stackedBars() {
      const t2 = this.bar();
      return l(n({}, t2), { plotOptions: l(n({}, t2.plotOptions), { bar: l(n({}, t2.plotOptions.bar), { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
    }
    convertCatToNumeric(t2) {
      return t2.xaxis.convertedCatToNumeric = true, t2;
    }
    convertCatToNumericXaxis(t2, e2) {
      t2.xaxis.type = "numeric", t2.xaxis.labels = t2.xaxis.labels || {}, t2.xaxis.labels.formatter = t2.xaxis.labels.formatter || function(t3) {
        return b.isNumber(t3) ? Math.floor(t3) : t3;
      };
      const s2 = t2.xaxis.labels.formatter;
      let i2 = t2.xaxis.categories && t2.xaxis.categories.length ? t2.xaxis.categories : t2.labels;
      return e2 && e2.length && (i2 = e2.map((t3) => Array.isArray(t3) ? t3 : String(t3))), i2 && i2.length && (t2.xaxis.labels.formatter = function(t3) {
        return b.isNumber(t3) ? s2(i2[Math.floor(t3) - 1]) : s2(t3);
      }), t2.xaxis.categories = [], t2.labels = [], t2.xaxis.tickAmount = t2.xaxis.tickAmount || "dataPoints", t2;
    }
    bubble() {
      return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: false, intersect: true }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: true, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
    }
    scatter() {
      return { dataLabels: { enabled: false }, tooltip: { shared: false, intersect: true }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
    }
    heatmap() {
      return { chart: { stacked: false }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: true, marker: { show: false }, x: { show: false } }, legend: { position: "top", markers: { shape: "square" } }, grid: { padding: { right: 20 } } };
    }
    treemap() {
      return { chart: { zoom: { enabled: false } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: true, width: 2, colors: ["#fff"] }, legend: { show: false }, fill: { opacity: 1, gradient: { stops: [0, 100] } }, tooltip: { followCursor: true, x: { show: false } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: false }, tooltip: { enabled: false } } };
    }
    pie() {
      return { chart: { toolbar: { show: false } }, plotOptions: { pie: { donut: { labels: { show: false } } } }, dataLabels: { formatter: (t2) => t2.toFixed(1) + "%", style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    }
    donut() {
      return { chart: { toolbar: { show: false } }, dataLabels: { formatter: (t2) => t2.toFixed(1) + "%", style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    }
    polarArea() {
      return { chart: { toolbar: { show: false } }, dataLabels: { formatter: (t2) => t2.toFixed(1) + "%", enabled: false }, stroke: { show: true, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    }
    radar() {
      return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: false, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: false, intersect: true, followCursor: true }, grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, xaxis: { labels: { formatter: (t2) => t2, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: false }, crosshairs: { show: false } } };
    }
    radialBar() {
      return { chart: { animations: { dynamicAnimation: { enabled: true, speed: 800 } }, toolbar: { show: false } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: false, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: false, position: "right" }, tooltip: { enabled: false, fillSeriesColor: true }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    }
    _getBoxTooltip(t2, e2, s2, i2, a2) {
      const o2 = t2.candleData.seriesCandleO[e2][s2], r2 = t2.candleData.seriesCandleH[e2][s2], n2 = t2.candleData.seriesCandleM[e2][s2], l2 = t2.candleData.seriesCandleL[e2][s2], h2 = t2.candleData.seriesCandleC[e2][s2];
      return t2.config.series[e2].type && t2.config.series[e2].type !== a2 ? `<div class="apexcharts-custom-tooltip">
          ${t2.config.series[e2].name ? t2.config.series[e2].name : "series-" + (e2 + 1)}: <strong>${t2.seriesData.series[e2][s2]}</strong>
        </div>` : `<div class="apexcharts-tooltip-box apexcharts-tooltip-${t2.config.chart.type}"><div>${i2[0]}: <span class="value">` + o2 + `</span></div><div>${i2[1]}: <span class="value">` + r2 + "</span></div>" + (n2 ? `<div>${i2[2]}: <span class="value">` + n2 + "</span></div>" : "") + `<div>${i2[3]}: <span class="value">` + l2 + `</span></div><div>${i2[4]}: <span class="value">` + h2 + "</span></div></div>";
    }
  }
  const C = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } };
  class S {
    constructor() {
      this.yAxis = { show: true, showAlways: false, showForNullSeries: true, seriesName: void 0, opposite: false, reversed: false, logarithmic: false, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: false, max: void 0, min: void 0, floating: false, decimalsInFloat: void 0, labels: { show: true, showDuplicates: false, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: false, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: false, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: false, offsetX: 0 }, crosshairs: { show: true, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
    }
    init() {
      return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: true, speed: 800, animateGradually: { delay: 150, enabled: true }, dynamicAnimation: { enabled: true, speed: 350 } }, background: "", locales: [C], defaultLocale: "en", dropShadow: { enabled: false, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.7 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0, keyDown: void 0, keyUp: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: true, redrawOnWindowResize: true, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, injectStyleSheet: true, selection: { enabled: false, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: false }, brush: { enabled: false, autoScaleYaxis: true, target: void 0, targets: void 0 }, stacked: false, stackOnlyBar: true, stackType: "normal", toolbar: { show: true, offsetX: 0, offsetY: 0, tools: { download: true, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", categoryFormatter: void 0, valueFormatter: void 0 }, png: { filename: void 0 }, svg: { filename: void 0 }, scale: void 0, width: void 0 }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: true, type: "x", autoScaleYaxis: false, allowMouseWheelZoom: true, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } }, accessibility: { enabled: true, description: void 0, announcements: { enabled: true }, keyboard: { enabled: true, navigation: { enabled: true, wrapAround: false } } } }, parsing: { x: void 0, y: void 0 }, plotOptions: { line: { isSlopeChart: false, colors: { threshold: 0, colorAboveThreshold: void 0, colorBelowThreshold: void 0 } }, area: { fillTo: "origin" }, bar: { horizontal: false, columnWidth: "70%", barHeight: "70%", distributed: false, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: true, rangeBarGroupRows: false, hideZeroBarsWhenGrouped: false, isDumbbell: false, dumbbellColors: void 0, isFunnel: false, isFunnel3d: true, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: true, orientation: "horizontal", total: { enabled: false, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: true, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: true } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: true, shadeIntensity: 0.5, reverseNegativeShade: false, distributed: false, useFillColorAsStroke: false, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: true, shadeIntensity: 0.5, distributed: false, reverseNegativeShade: false, useFillColorAsStroke: false, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0 }, seriesTitle: { show: true, offsetY: 1, offsetX: 1, borderColor: "#000", borderWidth: 1, borderRadius: 2, style: { background: "rgba(0, 0, 0, 0.6)", color: "#fff", fontSize: "12px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 6, right: 6, top: 2, bottom: 2 } } } }, radialBar: { inverseOrder: false, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: true, position: "front", dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: true, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: true, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: (t2) => t2 }, value: { show: true, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: (t2) => t2 + "%" }, total: { show: false, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: (t2) => t2.globals.seriesTotals.reduce((t3, e2) => t3 + e2, 0) / t2.seriesData.series.length + "%" } }, barLabels: { enabled: false, offsetX: 0, offsetY: 0, useSeriesColors: true, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: (t2) => t2, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: true, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: false, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: (t2) => t2 }, value: { show: true, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: (t2) => t2 }, total: { show: false, showAlways: false, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: (t2) => t2.globals.seriesTotals.reduce((t3, e2) => t3 + e2, 0) } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: true, enabledOnSeries: void 0, formatter: (t2) => null !== t2 ? t2 : "", textAnchor: "middle", distributed: false, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: true, foreColor: "#fff", backgroundColor: void 0, borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: true, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: false } }, yaxis: { lines: { show: true } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: true, showForSingleSeries: false, showForNullSeries: true, showForZeroSeries: true, floating: false, position: "bottom", horizontalAlign: "center", inverseOrder: false, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], clusterGroupedSeries: true, clusterGroupedSeriesOrientation: "vertical", labels: { colors: void 0, useSeriesColors: false }, markers: { size: 7, fillColors: void 0, strokeWidth: 1, shape: void 0, offsetX: 0, offsetY: 0, customHTML: void 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 4 }, onItemClick: { toggleDataSeries: true }, onItemHover: { highlightDataSeries: true } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 0, offsetY: 0, showNullDataPoints: true, onClick: void 0, onDblClick: void 0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { hover: { filter: { type: "lighten" } }, active: { allowMultipleDataPointsSelection: false, filter: { type: "darken" } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: false, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: false, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: true, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: true, enabledOnSeries: void 0, shared: true, hideEmptySeries: false, followCursor: false, intersect: false, inverseOrder: false, custom: void 0, fillSeriesColor: false, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: false }, x: { show: true, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: (t2) => t2 ? t2 + ": " : "" } }, z: { formatter: void 0, title: "Size: " }, marker: { show: true, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: false, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: false, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: true, rotate: -45, rotateAlways: false, hideOverlappingLabels: true, trim: false, minHeight: void 0, maxHeight: 120, showDuplicates: true, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: true, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: true, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: true, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: false, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: true, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: false, left: 0, top: 0, blur: 1, opacity: 0.8 } }, tooltip: { enabled: true, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "", palette: "palette1", monochrome: { enabled: false, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 }, accessibility: { colorBlindMode: "" } } };
    }
  }
  class k {
    constructor(t2) {
      this.opts = t2;
    }
    init({ responsiveOverride: t2 }) {
      var e2, s2, i2, a2, o2, r2, n2, l2, c2, d2;
      let g2 = this.opts;
      const p2 = new S(), x2 = new A(g2);
      this.chartType = g2.chart.type, g2 = this.extendYAxis(g2), g2 = this.extendAnnotations(g2);
      let u2 = p2.init(), f2 = {};
      if (g2 && "object" == typeof g2) {
        let p3 = {};
        p3 = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(g2.chart.type) ? x2[g2.chart.type]() : x2.line(), (null == (s2 = null == (e2 = g2.plotOptions) ? void 0 : e2.bar) ? void 0 : s2.isFunnel) && (p3 = x2.funnel()), g2.chart.stacked && "bar" === g2.chart.type && (p3 = x2.stackedBars()), (null == (i2 = g2.chart.brush) ? void 0 : i2.enabled) && (p3 = x2.brush(p3)), (null == (o2 = null == (a2 = g2.plotOptions) ? void 0 : a2.line) ? void 0 : o2.isSlopeChart) && (p3 = x2.slope()), g2.chart.stacked && "100%" === g2.chart.stackType && (g2 = x2.stacked100(g2)), (null == (n2 = null == (r2 = g2.plotOptions) ? void 0 : r2.bar) ? void 0 : n2.isDumbbell) && (g2 = x2.dumbbell(g2)), this.checkForDarkTheme(h.getApex()), this.checkForDarkTheme(g2), g2.xaxis = g2.xaxis || h.getApex().xaxis || {}, t2 || (g2.xaxis.convertedCatToNumeric = false), g2 = this.checkForCatToNumericXAxis(this.chartType, p3, g2), ((null == (l2 = g2.chart.sparkline) ? void 0 : l2.enabled) || (null == (d2 = null == (c2 = h.getApex().chart) ? void 0 : c2.sparkline) ? void 0 : d2.enabled)) && (p3 = x2.sparkline(p3)), f2 = b.extend(u2, p3);
      }
      const m2 = b.extend(f2, h.getApex());
      return u2 = b.extend(m2, g2), u2 = this.handleUserInputErrors(u2), u2;
    }
    checkForCatToNumericXAxis(t2, e2, s2) {
      var i2, a2;
      const o2 = new A(s2), r2 = ("bar" === t2 || "boxPlot" === t2) && (null == (a2 = null == (i2 = s2.plotOptions) ? void 0 : i2.bar) ? void 0 : a2.horizontal), n2 = "pie" === t2 || "polarArea" === t2 || "donut" === t2 || "radar" === t2 || "radialBar" === t2 || "heatmap" === t2, l2 = "datetime" !== s2.xaxis.type && "numeric" !== s2.xaxis.type, h2 = s2.xaxis.tickPlacement ? s2.xaxis.tickPlacement : e2.xaxis && e2.xaxis.tickPlacement;
      return r2 || n2 || !l2 || "between" === h2 || (s2 = o2.convertCatToNumeric(s2)), s2;
    }
    extendYAxis(t2, e2) {
      const s2 = new S();
      (void 0 === t2.yaxis || !t2.yaxis || Array.isArray(t2.yaxis) && 0 === t2.yaxis.length) && (t2.yaxis = {});
      const i2 = h.getApex();
      t2.yaxis.constructor !== Array && i2.yaxis && i2.yaxis.constructor !== Array && (t2.yaxis = b.extend(t2.yaxis, i2.yaxis)), t2.yaxis.constructor !== Array ? t2.yaxis = [b.extend(s2.yAxis, t2.yaxis)] : t2.yaxis = b.extendArray(t2.yaxis, s2.yAxis);
      let a2 = false;
      t2.yaxis.forEach((t3) => {
        t3.logarithmic && (a2 = true);
      });
      let o2 = t2.series;
      return e2 && !o2 && (o2 = e2.config.series), a2 && o2.length !== t2.yaxis.length && o2.length && (t2.yaxis = o2.map((e3, i3) => {
        if (e3.name || (o2[i3].name = `series-${i3 + 1}`), t2.yaxis[i3]) return t2.yaxis[i3].seriesName = o2[i3].name, t2.yaxis[i3];
        {
          const e4 = b.extend(s2.yAxis, t2.yaxis[0]);
          return e4.show = false, e4;
        }
      })), a2 && o2.length > 1 && (o2.length, t2.yaxis.length), t2;
    }
    extendAnnotations(t2) {
      return void 0 === t2.annotations && (t2.annotations = {}, t2.annotations.yaxis = [], t2.annotations.xaxis = [], t2.annotations.points = []), t2 = this.extendYAxisAnnotations(t2), t2 = this.extendXAxisAnnotations(t2), t2 = this.extendPointAnnotations(t2);
    }
    extendYAxisAnnotations(t2) {
      const e2 = new S();
      return t2.annotations.yaxis = b.extendArray(void 0 !== t2.annotations.yaxis ? t2.annotations.yaxis : [], e2.yAxisAnnotation), t2;
    }
    extendXAxisAnnotations(t2) {
      const e2 = new S();
      return t2.annotations.xaxis = b.extendArray(void 0 !== t2.annotations.xaxis ? t2.annotations.xaxis : [], e2.xAxisAnnotation), t2;
    }
    extendPointAnnotations(t2) {
      const e2 = new S();
      return t2.annotations.points = b.extendArray(void 0 !== t2.annotations.points ? t2.annotations.points : [], e2.pointAnnotation), t2;
    }
    checkForDarkTheme(t2) {
      t2.theme && "dark" === t2.theme.mode && (t2.tooltip || (t2.tooltip = {}), "light" !== t2.tooltip.theme && (t2.tooltip.theme = "dark"), t2.chart.foreColor || (t2.chart.foreColor = "#f6f7f8"), t2.theme.palette || (t2.theme.palette = "palette4"));
    }
    handleUserInputErrors(t2) {
      const e2 = t2;
      if (e2.tooltip.shared && e2.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
      if ("bar" === e2.chart.type && e2.plotOptions.bar.horizontal) {
        if (e2.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
        e2.yaxis[0].reversed && (e2.yaxis[0].opposite = true), e2.xaxis.tooltip.enabled = false, e2.yaxis[0].tooltip.enabled = false, e2.chart.zoom.enabled = false;
      }
      return "bar" !== e2.chart.type && "rangeBar" !== e2.chart.type || e2.tooltip.shared && "barWidth" === e2.xaxis.crosshairs.width && e2.series.length > 1 && (e2.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e2.chart.type && "boxPlot" !== e2.chart.type || e2.yaxis[0].reversed && (e2.yaxis[0].reversed = false), e2;
    }
  }
  const D = [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]], L = [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24];
  class P {
    initGlobalVars(t2) {
      t2.series = [], t2.seriesCandleO = [], t2.seriesCandleH = [], t2.seriesCandleM = [], t2.seriesCandleL = [], t2.seriesCandleC = [], t2.seriesRangeStart = [], t2.seriesRangeEnd = [], t2.seriesRange = [], t2.seriesPercent = [], t2.seriesGoals = [], t2.seriesX = [], t2.seriesZ = [], t2.seriesNames = [], t2.seriesTotals = [], t2.seriesLog = [], t2.seriesColors = [], t2.stackedSeriesTotals = [], t2.seriesXvalues = [], t2.seriesYvalues = [], t2.dataWasParsed = false, t2.originalSeries = null, t2.maxValsInArrayIndex = 0, t2.yValueDecimal = 0, t2.allSeriesHasEqualX = true, t2.labels = [], t2.hasXaxisGroups = false, t2.groups = [], t2.barGroups = [], t2.lineGroups = [], t2.areaGroups = [], t2.hasSeriesGroups = false, t2.seriesGroups = [], t2.categoryLabels = [], t2.timescaleLabels = [], t2.noLabelsProvided = false, t2.isXNumeric = false, t2.skipLastTimelinelabel = false, t2.skipFirstTimelinelabel = false, t2.isDataXYZ = false, t2.isMultiLineX = false, t2.isMultipleYAxis = false, t2.maxY = -Number.MAX_VALUE, t2.minY = Number.MIN_VALUE, t2.minYArr = [], t2.maxYArr = [], t2.maxX = -Number.MAX_VALUE, t2.minX = Number.MAX_VALUE, t2.initialMaxX = -Number.MAX_VALUE, t2.initialMinX = Number.MAX_VALUE, t2.maxDate = 0, t2.minDate = Number.MAX_VALUE, t2.minZ = Number.MAX_VALUE, t2.maxZ = -Number.MAX_VALUE, t2.minXDiff = Number.MAX_VALUE, t2.yAxisScale = [], t2.xAxisScale = null, t2.xAxisTicksPositions = [], t2.xRange = 0, t2.yRange = [], t2.zRange = 0, t2.dataPoints = 0, t2.xTickAmount = 0, t2.multiAxisTickAmount = 0, t2.disableZoomIn = false, t2.disableZoomOut = false, t2.yLabelsCoords = [], t2.yTitleCoords = [], t2.barPadForNumericAxis = 0, t2.padHorizontal = 0, t2.rotateXLabels = false, t2.overlappingXLabels = false, t2.radialSize = 0, t2.barHeight = 0, t2.barWidth = 0, t2.animationEnded = false, t2.resizeTimer = null, t2.selectionResizeTimer = null, t2.lastWheelExecution = 0, t2.delayedElements = [], t2.pointsArray = [], t2.dataLabelsRects = [], t2.lastDrawnDataLabelsIndexes = [], t2.textRectsCache = /* @__PURE__ */ new Map(), t2.domCache = /* @__PURE__ */ new Map(), t2.dimensionCache = {}, t2.cachedSelectors = {}, t2.seriesNS || this._attachNamespaces(t2);
    }
    _attachNamespaces(t2) {
      const e2 = (e3, s3, i3 = s3) => {
        Object.defineProperty(e3, i3, { get: () => t2[s3], set(e4) {
          t2[s3] = e4;
        }, enumerable: true, configurable: true });
      }, s2 = {};
      e2(s2, "series", "data");
      for (const t3 of ["seriesNames", "seriesX", "seriesZ", "seriesXvalues", "seriesYvalues", "seriesGoals", "seriesLog", "seriesColors", "seriesPercent", "seriesTotals", "stackedSeriesTotals", "seriesCandleO", "seriesCandleH", "seriesCandleM", "seriesCandleL", "seriesCandleC", "seriesRangeStart", "seriesRangeEnd", "seriesRange", "seriesYAxisMap", "seriesYAxisReverseMap", "seriesGroups", "barGroups", "lineGroups", "areaGroups", "originalSeries", "collapsedSeries", "collapsedSeriesIndices", "ancillaryCollapsedSeries", "ancillaryCollapsedSeriesIndices", "allSeriesCollapsed", "risingSeries", "previousPaths", "ignoreYAxisIndexes", "labels", "categoryLabels", "timescaleLabels", "groups"]) e2(s2, t3);
      Object.defineProperty(t2, "seriesNS", { value: s2, writable: false, enumerable: false, configurable: true });
      const i2 = {};
      for (const t3 of ["minX", "maxX", "initialMinX", "initialMaxX", "minY", "maxY", "minYArr", "maxYArr", "minZ", "maxZ", "minDate", "maxDate", "minXDiff", "xRange", "yRange", "zRange", "xAxisScale", "yAxisScale", "xAxisTicksPositions", "xTickAmount", "multiAxisTickAmount", "dataPoints", "maxValsInArrayIndex", "isXNumeric", "isMultipleYAxis", "isMultiLineX", "isDataXYZ", "dataFormatXNumeric", "allSeriesHasEqualX", "hasNullValues", "dataWasParsed", "hasXaxisGroups", "hasSeriesGroups", "skipFirstTimelinelabel", "skipLastTimelinelabel", "yValueDecimal", "invalidLogScale", "noLabelsProvided"]) e2(i2, t3);
      Object.defineProperty(t2, "axes", { value: i2, writable: false, enumerable: false, configurable: true });
      const a2 = {};
      for (const t3 of ["svgWidth", "svgHeight", "gridWidth", "gridHeight", "translateX", "translateY", "translateXAxisX", "translateXAxisY", "translateYAxisX", "xAxisLabelsHeight", "xAxisGroupLabelsHeight", "xAxisLabelsWidth", "yAxisLabelsWidth", "yAxisWidths", "yLabelsCoords", "yTitleCoords", "padHorizontal", "barPadForNumericAxis", "rotateXLabels", "scaleX", "scaleY", "radialSize", "defaultLabels", "overlappingXLabels"]) e2(a2, t3);
      Object.defineProperty(t2, "layout", { value: a2, writable: false, enumerable: false, configurable: true });
      const o2 = {};
      for (const t3 of ["domCache", "dimensionCache", "cachedSelectors", "textRectsCache", "pointsArray", "dataLabelsRects", "lastDrawnDataLabelsIndexes", "delayedElements", "resizeTimer", "selectionResizeTimer", "resizeObserver"]) e2(o2, t3);
      Object.defineProperty(t2, "cache", { value: o2, writable: false, enumerable: false, configurable: true });
    }
    globalVars(t2) {
      return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t2.markers.size, largestSize: 0 }, LINE_HEIGHT_RATIO: 1.618, axisCharts: true, isSlopeChart: t2.plotOptions.line.isSlopeChart, comboCharts: false, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], allSeriesCollapsed: false, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], ignoreYAxisIndexes: [], isDirty: false, isExecCalled: false, dataChanged: false, resized: false, invalidLogScale: false, hasNullValues: false, columnSeries: null, yaxis: null, total: 0, shouldAnimate: true, previousPaths: [], svgWidth: 0, svgHeight: 0, defaultLabels: false, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateYAxisX: [], yAxisWidths: [], tooltip: null, resizeObserver: null, locale: {}, memory: { methodsToExec: [] }, niceScaleAllowedMagMsd: D, niceScaleDefaultTicks: L, seriesYAxisMap: [], seriesYAxisReverseMap: [], noData: false };
    }
    init(t2) {
      const e2 = this.globalVars(t2);
      return this.initGlobalVars(e2), e2.initialConfig = b.extend({}, t2), e2.initialSeries = b.clone(t2.series), e2.lastXAxis = b.clone(e2.initialConfig.xaxis), e2.lastYAxis = b.clone(e2.initialConfig.yaxis), e2;
    }
  }
  class M {
    constructor(t2) {
      this.opts = t2;
    }
    init() {
      const t2 = new k(this.opts).init({ responsiveOverride: false }), e2 = new P().init(t2), s2 = { config: t2, globals: e2, dom: {}, interact: { zoomEnabled: "zoom" === t2.chart.toolbar.autoSelected && t2.chart.toolbar.tools.zoom && t2.chart.zoom.enabled, panEnabled: "pan" === t2.chart.toolbar.autoSelected && t2.chart.toolbar.tools.pan, selectionEnabled: "selection" === t2.chart.toolbar.autoSelected && t2.chart.toolbar.tools.selection, zoomed: false, selection: void 0, visibleXRange: void 0, selectedDataPoints: [], mousedown: false, clientX: null, clientY: null, lastClientPosition: {}, lastWheelExecution: 0, capturedSeriesIndex: -1, capturedDataPointIndex: -1, disableZoomIn: false, disableZoomOut: false, isTouchDevice: !!h.isBrowser() && ("ontouchstart" in window || navigator.msMaxTouchPoints > 0) }, formatters: { xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, legendFormatter: void 0 }, candleData: { seriesCandleO: [], seriesCandleH: [], seriesCandleM: [], seriesCandleL: [], seriesCandleC: [] }, rangeData: { seriesRangeStart: [], seriesRangeEnd: [], seriesRange: [] }, labelData: { labels: [], categoryLabels: [], timescaleLabels: [], hasXaxisGroups: false, groups: [], seriesGroups: [] }, axisFlags: { isXNumeric: false, dataFormatXNumeric: false, isDataXYZ: false, isRangeData: false, isRangeBar: false, isMultiLineX: false, noLabelsProvided: false, dataWasParsed: false }, seriesData: { series: [], seriesNames: [], seriesX: [], seriesZ: [], seriesColors: [], seriesGoals: [], stackedSeriesTotals: [], stackedSeriesTotalsByGroups: [] }, layout: { gridHeight: 0, gridWidth: 0, translateX: 0, translateY: 0, translateXAxisX: 0, translateXAxisY: 0, rotateXLabels: false, xAxisHeight: 0, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yLabelsCoords: [], yTitleCoords: [] } };
      Object.defineProperty(e2, "dom", { get: () => s2.dom, set(t3) {
        s2.dom = t3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["xLabelFormatter", "yLabelFormatters", "xaxisTooltipFormatter", "ttKeyFormatter", "ttVal", "ttZFormatter", "legendFormatter"]) Object.defineProperty(e2, t3, { get: () => s2.formatters[t3], set(e3) {
        s2.formatters[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["zoomEnabled", "panEnabled", "selectionEnabled", "zoomed", "selection", "visibleXRange", "selectedDataPoints", "mousedown", "clientX", "clientY", "lastClientPosition", "lastWheelExecution", "capturedSeriesIndex", "capturedDataPointIndex", "disableZoomIn", "disableZoomOut", "isTouchDevice"]) Object.defineProperty(e2, t3, { get: () => s2.interact[t3], set(e3) {
        s2.interact[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["gridHeight", "gridWidth", "translateX", "translateY", "translateXAxisX", "translateXAxisY", "rotateXLabels", "xAxisHeight", "xAxisLabelsHeight", "xAxisGroupLabelsHeight", "xAxisLabelsWidth", "yLabelsCoords", "yTitleCoords"]) Object.defineProperty(e2, t3, { get: () => s2.layout[t3], set(e3) {
        s2.layout[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["series", "seriesNames", "seriesX", "seriesZ", "seriesColors", "seriesGoals", "stackedSeriesTotals", "stackedSeriesTotalsByGroups"]) Object.defineProperty(e2, t3, { get: () => s2.seriesData[t3], set(e3) {
        s2.seriesData[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["isXNumeric", "dataFormatXNumeric", "isDataXYZ", "isRangeData", "isRangeBar", "isMultiLineX", "noLabelsProvided", "dataWasParsed"]) Object.defineProperty(e2, t3, { get: () => s2.axisFlags[t3], set(e3) {
        s2.axisFlags[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["labels", "categoryLabels", "timescaleLabels", "hasXaxisGroups", "groups", "seriesGroups"]) Object.defineProperty(e2, t3, { get: () => s2.labelData[t3], set(e3) {
        s2.labelData[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["seriesRangeStart", "seriesRangeEnd", "seriesRange"]) Object.defineProperty(e2, t3, { get: () => s2.rangeData[t3], set(e3) {
        s2.rangeData[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["seriesCandleO", "seriesCandleH", "seriesCandleM", "seriesCandleL", "seriesCandleC"]) Object.defineProperty(e2, t3, { get: () => s2.candleData[t3], set(e3) {
        s2.candleData[t3] = e3;
      }, enumerable: false, configurable: true });
      return s2;
    }
  }
  class I {
    constructor(t2) {
      this.w = t2;
    }
    static checkComboSeries(t2, e2) {
      let s2 = false, i2 = 0, a2 = 0;
      return void 0 === e2 && (e2 = "line"), t2.length && void 0 !== t2[0].type && t2.forEach((t3) => {
        "bar" !== t3.type && "column" !== t3.type && "candlestick" !== t3.type && "boxPlot" !== t3.type || i2++, void 0 !== t3.type && t3.type !== e2 && a2++;
      }), a2 > 0 && (s2 = true), { comboBarCount: i2, comboCharts: s2 };
    }
    getStackedSeriesTotals(t2 = []) {
      const e2 = this.w, s2 = [];
      if (0 === e2.seriesData.series.length) return s2;
      for (let i2 = 0; i2 < e2.seriesData.series[e2.globals.maxValsInArrayIndex].length; i2++) {
        let a2 = 0;
        for (let s3 = 0; s3 < e2.seriesData.series.length; s3++) void 0 !== e2.seriesData.series[s3][i2] && -1 === t2.indexOf(s3) && (a2 += e2.seriesData.series[s3][i2]);
        s2.push(a2);
      }
      return s2;
    }
    getSeriesTotalByIndex(t2 = null) {
      return null === t2 ? this.w.config.series.reduce((t3, e2) => t3 + e2, 0) : this.w.seriesData.series[t2].reduce((t3, e2) => t3 + e2, 0);
    }
    getStackedSeriesTotalsByGroups() {
      const t2 = this.w, e2 = [];
      return t2.labelData.seriesGroups.forEach((s2) => {
        const i2 = [];
        t2.config.series.forEach((e3, a3) => {
          s2.indexOf(t2.seriesData.seriesNames[a3]) > -1 && i2.push(a3);
        });
        const a2 = t2.seriesData.series.map((t3, e3) => -1 === i2.indexOf(e3) ? e3 : -1).filter((t3) => -1 !== t3);
        e2.push(this.getStackedSeriesTotals(a2));
      }), e2;
    }
    setSeriesYAxisMappings() {
      const t2 = this.w.globals, e2 = this.w.config;
      let s2 = [];
      const i2 = [], a2 = [], o2 = this.w.seriesData.series.length > e2.yaxis.length || e2.yaxis.some((t3) => Array.isArray(t3.seriesName));
      e2.series.forEach((t3, e3) => {
        a2.push(e3), i2.push(null);
      }), e2.yaxis.forEach((t3, e3) => {
        s2[e3] = [];
      });
      const r2 = [];
      e2.yaxis.forEach((t3, i3) => {
        let n3 = false;
        if (t3.seriesName) {
          let r3 = [];
          Array.isArray(t3.seriesName) ? r3 = t3.seriesName : r3.push(t3.seriesName), r3.forEach((t4) => {
            e2.series.forEach((e3, r4) => {
              if (e3.name === t4) {
                let t5 = r4;
                i3 === r4 || o2 ? (!o2 || a2.indexOf(r4) > -1) && s2[i3].push([i3, r4]) : (s2[r4].push([r4, i3]), t5 = i3), n3 = true, t5 = a2.indexOf(t5), -1 !== t5 && a2.splice(t5, 1);
              }
            });
          });
        }
        n3 || r2.push(i3);
      }), s2 = s2.map((t3) => {
        const e3 = [];
        return t3.forEach((t4) => {
          i2[t4[1]] = t4[0], e3.push(t4[1]);
        }), e3;
      });
      let n2 = e2.yaxis.length - 1;
      for (let t3 = 0; t3 < r2.length && (n2 = r2[t3], s2[n2] = [], a2); t3++) {
        const t4 = a2[0];
        a2.shift(), s2[n2].push(t4), i2[t4] = n2;
      }
      a2.forEach((t3) => {
        s2[n2].push(t3), i2[t3] = n2;
      }), t2.seriesYAxisMap = s2.map((t3) => t3), t2.seriesYAxisReverseMap = i2.map((t3) => t3), t2.seriesYAxisMap.forEach((t3, s3) => {
        t3.forEach((t4) => {
          e2.series[t4] && void 0 === e2.series[t4].group && (e2.series[t4].group = "apexcharts-axis-".concat(s3.toString()));
        });
      });
    }
    isSeriesNull(t2 = null) {
      let e2 = [];
      return e2 = null === t2 ? this.w.config.series.filter((t3) => null !== t3) : this.w.config.series[t2].data.filter((t3) => null !== t3), 0 === e2.length;
    }
    seriesHaveSameValues(t2) {
      return this.w.seriesData.series[t2].every((t3, e2, s2) => t3 === s2[0]);
    }
    getCategoryLabels(t2) {
      const e2 = this.w;
      let s2 = t2.slice();
      return e2.config.xaxis.convertedCatToNumeric && (s2 = t2.map((t3) => e2.config.xaxis.labels.formatter(t3 - e2.globals.minX + 1))), s2;
    }
    getLargestSeries() {
      const t2 = this.w;
      t2.globals.maxValsInArrayIndex = t2.seriesData.series.map((t3) => t3.length).indexOf(Math.max.apply(Math, t2.seriesData.series.map((t3) => t3.length)));
    }
    getLargestMarkerSize() {
      const t2 = this.w;
      let e2 = 0;
      return t2.globals.markers.size.forEach((t3) => {
        e2 = Math.max(e2, t3);
      }), t2.config.markers.discrete && t2.config.markers.discrete.length && t2.config.markers.discrete.forEach((t3) => {
        e2 = Math.max(e2, t3.size);
      }), e2 > 0 && (t2.config.markers.hover.size > 0 ? e2 = t2.config.markers.hover.size : e2 += t2.config.markers.hover.sizeOffset), t2.globals.markers.largestSize = e2, e2;
    }
    getSeriesTotals() {
      const t2 = this.w;
      t2.globals.seriesTotals = t2.seriesData.series.map((t3) => {
        let e2 = 0;
        if (Array.isArray(t3)) for (let s2 = 0; s2 < t3.length; s2++) e2 += t3[s2];
        else e2 += t3;
        return e2;
      });
    }
    getSeriesTotalsXRange(t2, e2) {
      const s2 = this.w;
      return s2.seriesData.series.map((i2, a2) => {
        let o2 = 0;
        for (let r2 = 0; r2 < i2.length; r2++) s2.seriesData.seriesX[a2][r2] > t2 && s2.seriesData.seriesX[a2][r2] < e2 && (o2 += i2[r2]);
        return o2;
      });
    }
    getPercentSeries() {
      const t2 = this.w;
      t2.globals.seriesPercent = t2.seriesData.series.map((e2) => {
        const s2 = [];
        if (Array.isArray(e2)) for (let i2 = 0; i2 < e2.length; i2++) {
          const a2 = t2.seriesData.stackedSeriesTotals[i2];
          let o2 = 0;
          a2 && (o2 = 100 * e2[i2] / a2), s2.push(o2);
        }
        else {
          const i2 = 100 * e2 / t2.globals.seriesTotals.reduce((t3, e3) => t3 + e3, 0);
          s2.push(i2);
        }
        return s2;
      });
    }
    getCalculatedRatios() {
      const t2 = this.w, e2 = t2.globals, s2 = [];
      let i2 = 0, a2 = 0, o2 = 0, r2 = 0, n2 = [], l2 = 0.1, h2 = 0;
      if (e2.yRange = [], e2.isMultipleYAxis) for (let t3 = 0; t3 < e2.minYArr.length; t3++) e2.yRange.push(Math.abs(e2.minYArr[t3] - e2.maxYArr[t3])), n2.push(0);
      else e2.yRange.push(Math.abs(e2.minY - e2.maxY));
      e2.xRange = Math.abs(e2.maxX - e2.minX), e2.zRange = Math.abs(e2.maxZ - e2.minZ);
      for (let t3 = 0; t3 < e2.yRange.length; t3++) s2.push(e2.yRange[t3] / this.w.layout.gridHeight);
      if (a2 = e2.xRange / this.w.layout.gridWidth, i2 = e2.yRange / this.w.layout.gridWidth, o2 = e2.xRange / this.w.layout.gridHeight, r2 = e2.zRange / this.w.layout.gridHeight * 16, r2 || (r2 = 1), e2.minY !== Number.MIN_VALUE && 0 !== Math.abs(e2.minY) && (e2.hasNegs = true), t2.globals.seriesYAxisReverseMap.length > 0) {
        const o3 = (e3, i3) => {
          const a3 = t2.config.yaxis[t2.globals.seriesYAxisReverseMap[i3]], o4 = e3 < 0 ? -1 : 1;
          return e3 = Math.abs(e3), a3.logarithmic && (e3 = this.getBaseLog(a3.logBase, e3)), -o4 * e3 / s2[i3];
        };
        if (e2.isMultipleYAxis) {
          n2 = [];
          for (let t3 = 0; t3 < s2.length; t3++) n2.push(o3(e2.minYArr[t3], t3));
        } else n2 = [], n2.push(o3(e2.minY, 0)), e2.minY !== Number.MIN_VALUE && 0 !== Math.abs(e2.minY) && (l2 = -e2.minY / i2, h2 = e2.minX / a2);
      } else n2 = [], n2.push(0), l2 = 0, h2 = 0;
      return { yRatio: s2, invertedYRatio: i2, zRatio: r2, xRatio: a2, invertedXRatio: o2, baseLineInvertedY: l2, baseLineY: n2, baseLineX: h2 };
    }
    getLogSeries(t2) {
      const e2 = this.w;
      return e2.globals.seriesLog = t2.map((t3, s2) => {
        const i2 = e2.globals.seriesYAxisReverseMap[s2];
        return e2.config.yaxis[i2] && e2.config.yaxis[i2].logarithmic ? t3.map((t4) => null === t4 ? null : this.getLogVal(e2.config.yaxis[i2].logBase, t4, s2)) : t3;
      }), e2.globals.invalidLogScale ? t2 : e2.globals.seriesLog;
    }
    getLogValAtSeriesIndex(t2, e2) {
      if (null === t2) return null;
      const s2 = this.w, i2 = s2.globals.seriesYAxisReverseMap[e2];
      return s2.config.yaxis[i2] && s2.config.yaxis[i2].logarithmic ? this.getLogVal(s2.config.yaxis[i2].logBase, t2, e2) : t2;
    }
    getBaseLog(t2, e2) {
      return Math.log(e2) / Math.log(t2);
    }
    getLogVal(t2, e2, s2) {
      if (e2 <= 0) return 0;
      const i2 = this.w, a2 = 0 === i2.globals.minYArr[s2] ? -1 : this.getBaseLog(t2, i2.globals.minYArr[s2]), o2 = (0 === i2.globals.maxYArr[s2] ? 0 : this.getBaseLog(t2, i2.globals.maxYArr[s2])) - a2;
      if (e2 < 1) return e2 / o2;
      return (this.getBaseLog(t2, e2) - a2) / o2;
    }
    getLogYRatios(t2) {
      const e2 = this.w, s2 = this.w.globals;
      return s2.yLogRatio = t2.slice(), s2.logYRange = s2.yRange.map((t3, i2) => {
        const a2 = e2.globals.seriesYAxisReverseMap[i2];
        if (e2.config.yaxis[a2] && this.w.config.yaxis[a2].logarithmic) {
          let t4 = -Number.MAX_VALUE, a3 = Number.MIN_VALUE, o2 = 1;
          return s2.seriesLog.forEach((s3, i3) => {
            s3.forEach((s4) => {
              e2.config.yaxis[i3] && e2.config.yaxis[i3].logarithmic && (t4 = Math.max(s4, t4), a3 = Math.min(s4, a3));
            });
          }), o2 = Math.pow(s2.yRange[i2], Math.abs(a3 - t4) / s2.yRange[i2]), s2.yLogRatio[i2] = o2 / this.w.layout.gridHeight, o2;
        }
      }), s2.invalidLogScale ? t2.slice() : s2.yLogRatio;
    }
    static extendArrayProps(t2, e2, s2) {
      var i2, a2;
      return (null == e2 ? void 0 : e2.yaxis) && (e2 = t2.extendYAxis(e2, s2)), (null == e2 ? void 0 : e2.annotations) && (e2.annotations.yaxis && (e2 = t2.extendYAxisAnnotations(e2)), (null == (i2 = null == e2 ? void 0 : e2.annotations) ? void 0 : i2.xaxis) && (e2 = t2.extendXAxisAnnotations(e2)), (null == (a2 = null == e2 ? void 0 : e2.annotations) ? void 0 : a2.points) && (e2 = t2.extendPointAnnotations(e2))), e2;
    }
    drawSeriesByGroup(t2, e2, s2, i2) {
      const a2 = this.w, o2 = [];
      return t2.series.length > 0 && e2.forEach((e3) => {
        const r2 = [], n2 = [];
        t2.i.forEach((s3, i3) => {
          a2.config.series[s3].group === e3 && (r2.push(t2.series[i3]), n2.push(s3));
        }), r2.length > 0 && o2.push(i2.draw(r2, s2, n2));
      }), o2;
    }
  }
  class E {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2;
    }
    animateLine(t2, e2, s2, i2) {
      t2.attr(e2).animate(i2).attr(s2);
    }
    animateMarker(t2, e2, s2, i2) {
      t2.attr({ opacity: 0 }).animate(e2).attr({ opacity: 1 }).after(() => {
        i2();
      });
    }
    animateRect(t2, e2, s2, i2, a2) {
      t2.attr(e2).animate(i2).attr(s2).after(() => a2());
    }
    animatePathsGradually(t2) {
      const { el: e2, realIndex: s2, j: i2, fill: a2, pathFrom: o2, pathTo: r2, speed: n2, delay: l2 } = t2, h2 = this.w;
      let c2 = 0;
      h2.config.chart.animations.animateGradually.enabled && (c2 = h2.config.chart.animations.animateGradually.delay), h2.config.chart.animations.dynamicAnimation.enabled && h2.globals.dataChanged && "bar" !== h2.config.chart.type && (c2 = 0), this.morphSVG(e2, s2, i2, "line" !== h2.config.chart.type || h2.globals.comboCharts ? a2 : "stroke", o2, r2, n2, l2 * c2);
    }
    showDelayedElements() {
      this.w.globals.delayedElements.forEach((t2) => {
        const e2 = t2.el;
        e2.classList.remove("apexcharts-element-hidden"), e2.classList.add("apexcharts-hidden-element-shown");
      });
    }
    animationCompleted(t2) {
      const e2 = this.w;
      e2.globals.animationEnded || (e2.globals.animationEnded = true, this.showDelayedElements(), "function" == typeof e2.config.chart.events.animationEnd && e2.config.chart.events.animationEnd(this.ctx, { el: t2, w: e2 }));
    }
    morphSVG(t2, e2, s2, i2, a2, o2, r2, n2) {
      const l2 = this.w;
      a2 || (a2 = t2.attr("pathFrom")), o2 || (o2 = t2.attr("pathTo"));
      const h2 = () => ("radar" === l2.config.chart.type && (r2 = 1), `M 0 ${l2.layout.gridHeight}`);
      (!a2 || a2.indexOf("undefined") > -1 || a2.indexOf("NaN") > -1) && (a2 = h2()), (!o2.trim() || o2.indexOf("undefined") > -1 || o2.indexOf("NaN") > -1) && (o2 = h2()), l2.globals.shouldAnimate || (r2 = 1), t2.plot(a2).animate(1, n2).plot(a2).animate(r2, n2).plot(o2).after(() => {
        b.isNumber(s2) ? s2 === l2.seriesData.series[l2.globals.maxValsInArrayIndex].length - 2 && l2.globals.shouldAnimate && this.animationCompleted(t2) : "none" !== i2 && l2.globals.shouldAnimate && (!l2.globals.comboCharts && e2 === l2.seriesData.series.length - 1 || l2.globals.comboCharts) && this.animationCompleted(t2), this.showDelayedElements();
      });
    }
  }
  class F {
    constructor(t2) {
      this.w = t2;
    }
    getDefaultFilter(t2, e2) {
      const s2 = this.w;
      t2.unfilter && t2.unfilter(true), s2.config.chart.dropShadow.enabled && this.dropShadow(t2, s2.config.chart.dropShadow, e2);
    }
    applyFilter(t2, e2, s2) {
      var i2, a2, o2;
      const r2 = this.w;
      if (t2.unfilter && t2.unfilter(true), "none" === s2) return void this.getDefaultFilter(t2, e2);
      const n2 = r2.config.chart.dropShadow, l2 = "lighten" === s2 ? 2 : 0.3;
      t2.filterWith && (t2.filterWith((t3) => {
        t3.colorMatrix({ type: "matrix", values: `
            ${l2} 0 0 0 0
            0 ${l2} 0 0 0
            0 0 ${l2} 0 0
            0 0 0 1 0
          `, in: "SourceGraphic", result: "brightness" }), n2.enabled && this.addShadow(t3, e2, n2, "brightness");
      }), n2.noUserSpaceOnUse || null == (a2 = null == (i2 = t2.filterer()) ? void 0 : i2.node) || a2.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(null == (o2 = t2.filterer()) ? void 0 : o2.node));
    }
    addShadow(t2, e2, s2, i2) {
      var a2;
      const o2 = this.w;
      let { blur: r2, top: n2, left: l2, color: h2, opacity: c2 } = s2;
      if (h2 = Array.isArray(h2) ? h2[e2] : h2, (null == (a2 = o2.config.chart.dropShadow.enabledOnSeries) ? void 0 : a2.length) > 0 && -1 === o2.config.chart.dropShadow.enabledOnSeries.indexOf(e2)) return t2;
      t2.offset({ in: i2, dx: l2, dy: n2, result: "offset" }), t2.gaussianBlur({ in: "offset", stdDeviation: r2, result: "blur" }), t2.flood({ "flood-color": h2, "flood-opacity": c2, result: "flood" }), t2.composite({ in: "flood", in2: "blur", operator: "in", result: "shadow" }), t2.merge(["shadow", i2]);
    }
    dropShadow(t2, e2, s2 = 0) {
      var i2, a2, o2, r2, n2;
      const l2 = this.w;
      return t2.unfilter && t2.unfilter(true), b.isMsEdge() && "radialBar" === l2.config.chart.type || (null == (i2 = l2.config.chart.dropShadow.enabledOnSeries) ? void 0 : i2.length) > 0 && -1 === (null == (a2 = l2.config.chart.dropShadow.enabledOnSeries) ? void 0 : a2.indexOf(s2)) || t2.filterWith && (t2.filterWith((t3) => {
        this.addShadow(t3, s2, e2, "SourceGraphic");
      }), e2.noUserSpaceOnUse || null == (r2 = null == (o2 = t2.filterer()) ? void 0 : o2.node) || r2.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(null == (n2 = t2.filterer()) ? void 0 : n2.node)), t2;
    }
    setSelectionFilter(t2, e2, s2) {
      const i2 = this.w;
      if (void 0 !== i2.interact.selectedDataPoints[e2] && i2.interact.selectedDataPoints[e2].indexOf(s2) > -1) {
        t2.node.setAttribute("selected", true);
        const s3 = i2.config.states.active.filter;
        "none" !== s3 && this.applyFilter(t2, e2, s3.type);
      }
    }
    _scaleFilterSize(t2) {
      if (!t2) return;
      ((e2) => {
        for (const s2 in e2) Object.prototype.hasOwnProperty.call(e2, s2) && t2.setAttribute(s2, e2[s2]);
      })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
    }
  }
  class X {
    constructor(t2, e2 = null) {
      this.w = t2, this.ctx = e2;
    }
    roundPathCorners(t2, e2) {
      function s2(t3, e3, s3) {
        var a3 = e3.x - t3.x, o3 = e3.y - t3.y, r3 = Math.sqrt(a3 * a3 + o3 * o3);
        return i2(t3, e3, Math.min(1, s3 / r3));
      }
      function i2(t3, e3, s3) {
        return { x: t3.x + (e3.x - t3.x) * s3, y: t3.y + (e3.y - t3.y) * s3 };
      }
      function a2(t3, e3) {
        t3.length > 2 && (t3[t3.length - 2] = e3.x, t3[t3.length - 1] = e3.y);
      }
      function o2(t3) {
        return { x: parseFloat(t3[t3.length - 2]), y: parseFloat(t3[t3.length - 1]) };
      }
      t2.indexOf("NaN") > -1 && (t2 = "");
      var r2 = t2.split(/[,\s]/).reduce(function(t3, e3) {
        var s3 = e3.match(/^([a-zA-Z])(.+)/);
        return s3 ? (t3.push(s3[1]), t3.push(s3[2])) : t3.push(e3), t3;
      }, []).reduce(function(t3, e3) {
        return parseFloat(e3) == e3 && t3.length ? t3[t3.length - 1].push(e3) : t3.push([e3]), t3;
      }, []), n2 = [];
      if (r2.length > 1) {
        var l2 = o2(r2[0]), h2 = null;
        "Z" == r2[r2.length - 1][0] && r2[0].length > 2 && (h2 = ["L", l2.x, l2.y], r2[r2.length - 1] = h2), n2.push(r2[0]);
        for (var c2 = 1; c2 < r2.length; c2++) {
          var d2 = n2[n2.length - 1], g2 = r2[c2], p2 = g2 == h2 ? r2[1] : r2[c2 + 1];
          if (p2 && d2 && d2.length > 2 && "L" == g2[0] && p2.length > 2 && "L" == p2[0]) {
            var x2, u2, f2 = o2(d2), b2 = o2(g2), m2 = o2(p2);
            x2 = s2(b2, f2, e2), u2 = s2(b2, m2, e2), a2(g2, x2), g2.origPoint = b2, n2.push(g2);
            var y2 = i2(x2, b2, 0.5), w2 = i2(b2, u2, 0.5), v2 = ["C", y2.x, y2.y, w2.x, w2.y, u2.x, u2.y];
            v2.origPoint = b2, n2.push(v2);
          } else n2.push(g2);
        }
        if (h2) {
          var A2 = o2(n2[n2.length - 1]);
          n2.push(["Z"]), a2(n2[0], A2);
        }
      } else n2 = r2;
      return n2.reduce(function(t3, e3) {
        return t3 + e3.join(" ") + " ";
      }, "");
    }
    drawLine(t2, e2, s2, i2, a2 = "#a8a8a8", o2 = 0, r2 = null, n2 = "butt") {
      return this.w.dom.Paper.line().attr({ x1: t2, y1: e2, x2: s2, y2: i2, stroke: a2, "stroke-dasharray": o2, "stroke-width": r2, "stroke-linecap": n2 });
    }
    drawRect(t2 = 0, e2 = 0, s2 = 0, i2 = 0, a2 = 0, o2 = "#fefefe", r2 = 1, n2 = null, l2 = null, h2 = 0) {
      const c2 = this.w.dom.Paper.rect();
      return c2.attr({ x: t2, y: e2, width: s2 > 0 ? s2 : 0, height: i2 > 0 ? i2 : 0, rx: a2, ry: a2, opacity: r2, "stroke-width": null !== n2 ? n2 : 0, stroke: null !== l2 ? l2 : "none", "stroke-dasharray": h2 }), c2.node.setAttribute("fill", o2), c2;
    }
    drawPolygon(t2, e2 = "#e1e1e1", s2 = 1, i2 = "none") {
      return this.w.dom.Paper.polygon(t2).attr({ fill: i2, stroke: e2, "stroke-width": s2 });
    }
    drawCircle(t2, e2 = null) {
      t2 < 0 && (t2 = 0);
      const s2 = this.w.dom.Paper.circle(2 * t2);
      return null !== e2 && s2.attr(e2), s2;
    }
    drawPath({ d: t2 = "", stroke: e2 = "#a8a8a8", strokeWidth: s2 = 1, fill: i2, fillOpacity: a2 = 1, strokeOpacity: o2 = 1, classes: r2, strokeLinecap: n2 = null, strokeDashArray: l2 = 0 }) {
      const h2 = this.w;
      null === n2 && (n2 = h2.config.stroke.lineCap), (t2.indexOf("undefined") > -1 || t2.indexOf("NaN") > -1) && (t2 = `M 0 ${h2.layout.gridHeight}`);
      return h2.dom.Paper.path(t2).attr({ fill: i2, "fill-opacity": a2, stroke: e2, "stroke-opacity": o2, "stroke-linecap": n2, "stroke-width": s2, "stroke-dasharray": l2, class: r2 });
    }
    group(t2 = null) {
      const e2 = this.w.dom.Paper.group();
      return null !== t2 && e2.attr(t2), e2;
    }
    move(t2, e2) {
      return ["M", t2, e2].join(" ");
    }
    line(t2, e2, s2 = null) {
      let i2 = null;
      return null === s2 ? i2 = [" L", t2, e2].join(" ") : "H" === s2 ? i2 = [" H", t2].join(" ") : "V" === s2 && (i2 = [" V", e2].join(" ")), i2;
    }
    curve(t2, e2, s2, i2, a2, o2) {
      return ["C", t2, e2, s2, i2, a2, o2].join(" ");
    }
    quadraticCurve(t2, e2, s2, i2) {
      return ["Q", t2, e2, s2, i2].join(" ");
    }
    arc(t2, e2, s2, i2, a2, o2, r2, n2 = false) {
      let l2 = "A";
      n2 && (l2 = "a");
      return [l2, t2, e2, s2, i2, a2, o2, r2].join(" ");
    }
    renderPaths({ j: t2, realIndex: e2, pathFrom: s2, pathTo: i2, stroke: a2, strokeWidth: o2, strokeLinecap: r2, fill: h2, animationDelay: c2, initialSpeed: d2, dataChangeSpeed: g2, className: p2, chartType: x2, shouldClipToGrid: u2 = true, bindEventsOnPaths: f2 = true, drawShadow: b2 = true }) {
      const m2 = this.w, y2 = new F(this.w), w2 = new E(this.w), v2 = this.w.config.chart.animations.enabled, A2 = v2 && this.w.config.chart.animations.dynamicAnimation.enabled;
      if (s2 && s2.startsWith("M 0 0") && i2) {
        const t3 = i2.match(/^M\s+[\d.-]+\s+[\d.-]+/);
        t3 && (s2 = s2.replace(/^M\s+0\s+0/, t3[0]));
      }
      let C2;
      const S2 = !!(v2 && !m2.globals.resized || A2 && m2.globals.dataChanged && m2.globals.shouldAnimate);
      S2 ? C2 = s2 : (C2 = i2, m2.globals.animationEnded = true);
      const k2 = m2.config.stroke.dashArray;
      let D2 = 0;
      D2 = Array.isArray(k2) ? k2[e2] : m2.config.stroke.dashArray;
      const L2 = this.drawPath({ d: C2, stroke: a2, strokeWidth: o2, fill: h2, fillOpacity: 1, classes: p2, strokeLinecap: r2, strokeDashArray: D2 });
      L2.attr("index", e2), u2 && ("bar" === x2 && !m2.globals.isHorizontal || m2.globals.comboCharts ? L2.attr({ "clip-path": `url(#gridRectBarMask${m2.globals.cuid})` }) : L2.attr({ "clip-path": `url(#gridRectMask${m2.globals.cuid})` })), m2.config.chart.dropShadow.enabled && b2 && y2.dropShadow(L2, m2.config.chart.dropShadow, e2), f2 && (L2.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, L2)), L2.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, L2)), L2.node.addEventListener("mousedown", this.pathMouseDown.bind(this, L2))), L2.attr({ pathTo: i2, pathFrom: s2 });
      const P2 = { el: L2, j: t2, realIndex: e2, pathFrom: s2, pathTo: i2, fill: h2, strokeWidth: o2, delay: c2 };
      return !v2 || m2.globals.resized || m2.globals.dataChanged ? !m2.globals.resized && m2.globals.dataChanged || w2.showDelayedElements() : w2.animatePathsGradually(l(n({}, P2), { speed: d2 })), m2.globals.dataChanged && A2 && S2 && w2.animatePathsGradually(l(n({}, P2), { speed: g2 })), L2;
    }
    drawPattern(t2, e2, s2, i2 = "#a8a8a8", a2 = 0) {
      return this.w.dom.Paper.pattern(e2, s2, (o2) => {
        "horizontalLines" === t2 ? o2.line(0, 0, s2, 0).stroke({ color: i2, width: a2 + 1 }) : "verticalLines" === t2 ? o2.line(0, 0, 0, e2).stroke({ color: i2, width: a2 + 1 }) : "slantedLines" === t2 ? o2.line(0, 0, e2, s2).stroke({ color: i2, width: a2 }) : "squares" === t2 ? o2.rect(e2, s2).fill("none").stroke({ color: i2, width: a2 }) : "circles" === t2 && o2.circle(e2).fill("none").stroke({ color: i2, width: a2 });
      });
    }
    drawGradient(t2, e2, s2, i2, a2, o2 = null, r2 = null, n2 = [], l2 = 0) {
      const h2 = this.w;
      let c2;
      e2.length < 9 && 0 === e2.indexOf("#") && (e2 = b.hexToRgba(e2, i2)), s2.length < 9 && 0 === s2.indexOf("#") && (s2 = b.hexToRgba(s2, a2));
      let d2 = 0, g2 = 1, p2 = 1, x2 = null;
      null !== r2 && (d2 = void 0 !== r2[0] ? r2[0] / 100 : 0, g2 = void 0 !== r2[1] ? r2[1] / 100 : 1, p2 = void 0 !== r2[2] ? r2[2] / 100 : 1, x2 = void 0 !== r2[3] ? r2[3] / 100 : null);
      const u2 = !("donut" !== h2.config.chart.type && "pie" !== h2.config.chart.type && "polarArea" !== h2.config.chart.type && "bubble" !== h2.config.chart.type);
      if (c2 = n2 && 0 !== n2.length ? h2.dom.Paper.gradient(u2 ? "radial" : "linear", (t3) => {
        (Array.isArray(n2[l2]) ? n2[l2] : n2).forEach((e3) => {
          t3.stop(e3.offset / 100, e3.color, e3.opacity);
        });
      }) : h2.dom.Paper.gradient(u2 ? "radial" : "linear", (t3) => {
        t3.stop(d2, e2, i2), t3.stop(g2, s2, a2), t3.stop(p2, s2, a2), null !== x2 && t3.stop(x2, e2, i2);
      }), u2) {
        const t3 = h2.layout.gridWidth / 2, e3 = h2.layout.gridHeight / 2;
        "bubble" !== h2.config.chart.type ? c2.attr({ gradientUnits: "userSpaceOnUse", cx: t3, cy: e3, r: o2 }) : c2.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
      } else "vertical" === t2 ? c2.from(0, 0).to(0, 1) : "diagonal" === t2 ? c2.from(0, 0).to(1, 1) : "horizontal" === t2 ? c2.from(0, 1).to(1, 1) : "diagonal2" === t2 && c2.from(1, 0).to(0, 1);
      return c2;
    }
    getTextBasedOnMaxWidth({ text: t2, maxWidth: e2, fontSize: s2, fontFamily: i2 }) {
      const a2 = this.getTextRects(t2, s2, i2), o2 = a2.width / t2.length, r2 = Math.floor(e2 / o2);
      return e2 < a2.width ? t2.slice(0, r2 - 3) + "..." : t2;
    }
    drawText({ x: t2, y: e2, text: s2, textAnchor: i2, fontSize: a2, fontFamily: o2, fontWeight: r2, foreColor: l2, opacity: h2, maxWidth: c2, cssClass: d2 = "", isPlainText: g2 = true, dominantBaseline: p2 = "auto" }) {
      const x2 = this.w;
      void 0 === s2 && (s2 = "");
      let u2 = s2;
      i2 || (i2 = "start"), l2 && l2.length || (l2 = x2.config.chart.foreColor), o2 = o2 || x2.config.chart.fontFamily, r2 = r2 || "regular";
      const f2 = { maxWidth: c2, fontSize: a2 = a2 || "11px", fontFamily: o2 };
      let b2;
      return Array.isArray(s2) ? b2 = x2.dom.Paper.text((t3) => {
        for (let e3 = 0; e3 < s2.length; e3++) u2 = s2[e3], c2 && (u2 = this.getTextBasedOnMaxWidth(n({ text: s2[e3] }, f2))), 0 === e3 ? t3.tspan(u2) : t3.tspan(u2).newLine();
      }) : (c2 && (u2 = this.getTextBasedOnMaxWidth(n({ text: s2 }, f2))), b2 = g2 ? x2.dom.Paper.plain(s2) : x2.dom.Paper.text((t3) => t3.tspan(u2))), b2.attr({ x: t2, y: e2, "text-anchor": i2, "dominant-baseline": p2, "font-size": a2, "font-family": o2, "font-weight": r2, fill: l2, class: "apexcharts-text " + d2 }), b2.node.style.fontFamily = o2, b2.node.style.opacity = h2, b2;
    }
    getMarkerPath(t2, e2, s2, i2) {
      let a2 = "";
      switch (s2) {
        case "cross":
          a2 = `M ${t2 - (i2 /= 1.4)} ${e2 - i2} L ${t2 + i2} ${e2 + i2}  M ${t2 - i2} ${e2 + i2} L ${t2 + i2} ${e2 - i2}`;
          break;
        case "plus":
          a2 = `M ${t2 - (i2 /= 1.12)} ${e2} L ${t2 + i2} ${e2}  M ${t2} ${e2 - i2} L ${t2} ${e2 + i2}`;
          break;
        case "star":
        case "sparkle": {
          let o2 = 5;
          i2 *= 1.15, "sparkle" === s2 && (i2 /= 1.1, o2 = 4);
          const r2 = Math.PI / o2;
          for (let s3 = 0; s3 <= 2 * o2; s3++) {
            const o3 = s3 * r2, n2 = s3 % 2 == 0 ? i2 : i2 / 2;
            a2 += (0 === s3 ? "M" : "L") + (t2 + n2 * Math.sin(o3)) + "," + (e2 - n2 * Math.cos(o3));
          }
          a2 += "Z";
          break;
        }
        case "triangle":
          a2 = `M ${t2} ${e2 - i2} 
             L ${t2 + i2} ${e2 + i2} 
             L ${t2 - i2} ${e2 + i2} 
             Z`;
          break;
        case "square":
        case "rect":
          a2 = `M ${t2 - (i2 /= 1.125)} ${e2 - i2} 
           L ${t2 + i2} ${e2 - i2} 
           L ${t2 + i2} ${e2 + i2} 
           L ${t2 - i2} ${e2 + i2} 
           Z`;
          break;
        case "diamond":
          a2 = `M ${t2} ${e2 - (i2 *= 1.05)} 
             L ${t2 + i2} ${e2} 
             L ${t2} ${e2 + i2} 
             L ${t2 - i2} ${e2} 
            Z`;
          break;
        case "line":
          a2 = `M ${t2 - (i2 /= 1.1)} ${e2} 
           L ${t2 + i2} ${e2}`;
          break;
        default:
          a2 = `M ${t2}, ${e2} 
           m -${(i2 *= 2) / 2}, 0 
           a ${i2 / 2},${i2 / 2} 0 1,0 ${i2},0 
           a ${i2 / 2},${i2 / 2} 0 1,0 -${i2},0`;
      }
      return a2;
    }
    drawMarkerShape(t2, e2, s2, i2, a2) {
      const o2 = this.drawPath({ d: this.getMarkerPath(t2, e2, s2, i2, a2), stroke: a2.pointStrokeColor, strokeDashArray: a2.pointStrokeDashArray, strokeWidth: a2.pointStrokeWidth, fill: a2.pointFillColor, fillOpacity: a2.pointFillOpacity, strokeOpacity: a2.pointStrokeOpacity });
      return o2.attr({ cx: t2, cy: e2, shape: a2.shape, class: a2.class ? a2.class : "" }), o2;
    }
    drawMarker(t2, e2, s2) {
      t2 = t2 || 0;
      let i2 = s2.pSize || 0;
      return b.isNumber(e2) || (i2 = 0, e2 = 0), this.drawMarkerShape(t2, e2, null == s2 ? void 0 : s2.shape, i2, n(n({}, s2), "line" === s2.shape || "plus" === s2.shape || "cross" === s2.shape ? { pointStrokeColor: s2.pointFillColor, pointStrokeOpacity: s2.pointFillOpacity } : {}));
    }
    pathMouseEnter(t2, e2) {
      const s2 = this.w, i2 = new F(this.w), a2 = parseInt(t2.node.getAttribute("index"), 10), o2 = parseInt(t2.node.getAttribute("j"), 10);
      if ("function" == typeof s2.config.chart.events.dataPointMouseEnter && s2.config.chart.events.dataPointMouseEnter(e2, this.ctx, { seriesIndex: a2, dataPointIndex: o2, w: s2 }), X._fireEvent(s2, "dataPointMouseEnter", [e2, this.ctx, { seriesIndex: a2, dataPointIndex: o2, w: s2 }]), ("none" === s2.config.states.active.filter.type || "true" !== t2.node.getAttribute("selected")) && "none" !== s2.config.states.hover.filter.type && !s2.interact.isTouchDevice) {
        const e3 = s2.config.states.hover.filter;
        i2.applyFilter(t2, a2, e3.type);
      }
    }
    pathMouseLeave(t2, e2) {
      const s2 = this.w, i2 = new F(this.w), a2 = parseInt(t2.node.getAttribute("index"), 10), o2 = parseInt(t2.node.getAttribute("j"), 10);
      "function" == typeof s2.config.chart.events.dataPointMouseLeave && s2.config.chart.events.dataPointMouseLeave(e2, this.ctx, { seriesIndex: a2, dataPointIndex: o2, w: s2 }), X._fireEvent(s2, "dataPointMouseLeave", [e2, this.ctx, { seriesIndex: a2, dataPointIndex: o2, w: s2 }]), "none" !== s2.config.states.active.filter.type && "true" === t2.node.getAttribute("selected") || "none" !== s2.config.states.hover.filter.type && i2.getDefaultFilter(t2, a2);
    }
    pathMouseDown(t2, e2) {
      const s2 = this.w, i2 = new F(this.w), a2 = parseInt(t2.node.getAttribute("index"), 10), o2 = parseInt(t2.node.getAttribute("j"), 10);
      let r2 = "false";
      if ("true" === t2.node.getAttribute("selected")) {
        if (t2.node.setAttribute("selected", "false"), s2.interact.selectedDataPoints[a2].indexOf(o2) > -1) {
          const t3 = s2.interact.selectedDataPoints[a2].indexOf(o2);
          s2.interact.selectedDataPoints[a2].splice(t3, 1);
        }
      } else {
        if (!s2.config.states.active.allowMultipleDataPointsSelection && s2.interact.selectedDataPoints.length > 0) {
          s2.interact.selectedDataPoints = [];
          const t3 = s2.dom.Paper.find(".apexcharts-series path:not(.apexcharts-decoration-element)"), e3 = s2.dom.Paper.find(".apexcharts-series circle:not(.apexcharts-decoration-element), .apexcharts-series rect:not(.apexcharts-decoration-element)"), o3 = (t4) => {
            Array.prototype.forEach.call(t4, (t5) => {
              t5.node.setAttribute("selected", "false"), i2.getDefaultFilter(t5, a2);
            });
          };
          o3(t3), o3(e3);
        }
        t2.node.setAttribute("selected", "true"), r2 = "true", void 0 === s2.interact.selectedDataPoints[a2] && (s2.interact.selectedDataPoints[a2] = []), s2.interact.selectedDataPoints[a2].push(o2);
      }
      if ("true" === r2) {
        const e3 = s2.config.states.active.filter;
        if ("none" !== e3) i2.applyFilter(t2, a2, e3.type);
        else if ("none" !== s2.config.states.hover.filter && !s2.interact.isTouchDevice) {
          const e4 = s2.config.states.hover.filter;
          i2.applyFilter(t2, a2, e4.type);
        }
      } else if ("none" !== s2.config.states.active.filter.type) if ("none" === s2.config.states.hover.filter.type || s2.interact.isTouchDevice) i2.getDefaultFilter(t2, a2);
      else {
        const e3 = s2.config.states.hover.filter;
        i2.applyFilter(t2, a2, e3.type);
      }
      "function" == typeof s2.config.chart.events.dataPointSelection && s2.config.chart.events.dataPointSelection(e2, this.ctx, { selectedDataPoints: s2.interact.selectedDataPoints, seriesIndex: a2, dataPointIndex: o2, w: s2 }), e2 && X._fireEvent(s2, "dataPointSelection", [e2, this.ctx, { selectedDataPoints: s2.interact.selectedDataPoints, seriesIndex: a2, dataPointIndex: o2, w: s2 }]);
    }
    rotateAroundCenter(t2) {
      let e2 = {};
      t2 && "function" == typeof t2.getBBox && (e2 = t2.getBBox());
      return { x: e2.x + e2.width / 2, y: e2.y + e2.height / 2 };
    }
    setupEventDelegation(t2, e2) {
      let s2 = null;
      t2.node.addEventListener("mouseover", (i2) => {
        const a2 = X._findDelegateTarget(i2.target, t2.node, e2);
        a2 && a2 !== s2 && (s2 && s2.instance && this.pathMouseLeave(s2.instance, i2), s2 = a2, a2.instance && this.pathMouseEnter(a2.instance, i2));
      }), t2.node.addEventListener("mouseout", (i2) => {
        if (!s2) return;
        (i2.relatedTarget ? X._findDelegateTarget(i2.relatedTarget, t2.node, e2) : null) !== s2 && (s2 && s2.instance && this.pathMouseLeave(s2.instance, i2), s2 = null);
      }), t2.node.addEventListener("mousedown", (s3) => {
        const i2 = X._findDelegateTarget(s3.target, t2.node, e2);
        i2 && i2.instance && this.pathMouseDown(i2.instance, s3);
      });
    }
    static _fireEvent(t2, e2, s2) {
      const i2 = t2.globals.events;
      if (!i2 || !Object.prototype.hasOwnProperty.call(i2, e2)) return;
      const a2 = i2[e2];
      for (let t3 = 0; t3 < a2.length; t3++) a2[t3].apply(null, s2);
    }
    static _findDelegateTarget(t2, e2, s2) {
      for (; t2 && t2 !== e2 && t2 !== document; ) {
        if (t2.matches && t2.matches(s2)) return t2;
        t2 = t2.parentNode;
      }
      return null;
    }
    static setAttrs(t2, e2) {
      for (const s2 in e2) Object.prototype.hasOwnProperty.call(e2, s2) && t2.setAttribute(s2, e2[s2]);
    }
    getTextRects(t2, e2, s2, i2, a2 = true) {
      const o2 = this.w, r2 = `${t2}|${e2}|${s2}|${i2}|${a2}`, n2 = o2.globals.textRectsCache;
      if (n2 && n2.has(r2)) return n2.get(r2);
      const l2 = this.drawText({ x: -200, y: -200, text: t2, textAnchor: "start", fontSize: e2, fontFamily: s2, foreColor: "#fff", opacity: 0 });
      i2 && l2.attr("transform", i2), o2.dom.Paper.add(l2);
      let h2 = l2.bbox();
      a2 || (h2 = l2.node.getBoundingClientRect()), l2.remove();
      const c2 = { width: h2.width, height: h2.height };
      return n2 && n2.set(r2, c2), c2;
    }
    placeTextWithEllipsis(t2, e2, s2) {
      if ("function" == typeof t2.getComputedTextLength && (t2.textContent = e2, e2.length > 0 && t2.getComputedTextLength() >= s2 / 1.1)) {
        for (let i2 = e2.length - 3; i2 > 0; i2 -= 3) if (t2.getSubStringLength(0, i2) <= s2 / 1.1) return void (t2.textContent = e2.substring(0, i2) + "...");
        t2.textContent = ".";
      }
    }
  }
  const T = "http://www.w3.org/2000/svg";
  class z {
    constructor(t2, e2) {
      "object" == typeof t2 ? (this.x = t2.x, this.y = t2.y) : (this.x = t2 || 0, this.y = e2 || 0);
    }
    transform(t2) {
      return t2.apply(this);
    }
    clone() {
      return new z(this.x, this.y);
    }
  }
  class R {
    constructor(t2, e2, s2, i2, a2, o2) {
      this.a = null != t2 ? t2 : 1, this.b = null != e2 ? e2 : 0, this.c = null != s2 ? s2 : 0, this.d = null != i2 ? i2 : 1, this.e = null != a2 ? a2 : 0, this.f = null != o2 ? o2 : 0;
    }
    rotate(t2) {
      const e2 = t2 * Math.PI / 180, s2 = Math.cos(e2), i2 = Math.sin(e2);
      return this.multiply(new R(s2, i2, -i2, s2, 0, 0));
    }
    scale(t2, e2) {
      return this.multiply(new R(t2, 0, 0, null != e2 ? e2 : t2, 0, 0));
    }
    multiply(t2) {
      return new R(this.a * t2.a + this.c * t2.b, this.b * t2.a + this.d * t2.b, this.a * t2.c + this.c * t2.d, this.b * t2.c + this.d * t2.d, this.a * t2.e + this.c * t2.f + this.e, this.b * t2.e + this.d * t2.f + this.f);
    }
    apply(t2) {
      return new z(this.a * t2.x + this.c * t2.y + this.e, this.b * t2.x + this.d * t2.y + this.f);
    }
  }
  class Y {
    constructor(t2, e2, s2, i2) {
      this.x = t2, this.y = e2, this.w = s2, this.h = i2, this.width = s2, this.height = i2, this.x2 = t2 + s2, this.y2 = e2 + i2;
    }
  }
  class B {
    constructor(t2) {
      this.w = t2, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
    }
    clippedImgArea(t2) {
      const e2 = this.w, s2 = e2.config, i2 = parseInt(e2.layout.gridWidth, 10), a2 = parseInt(e2.layout.gridHeight, 10), o2 = i2 > a2 ? i2 : a2, r2 = t2.image;
      let n2 = 0, l2 = 0;
      void 0 === t2.width && void 0 === t2.height ? void 0 !== s2.fill.image.width && void 0 !== s2.fill.image.height ? (n2 = s2.fill.image.width + 1, l2 = s2.fill.image.height) : (n2 = o2 + 1, l2 = o2) : (n2 = t2.width, l2 = t2.height);
      const c2 = f.createElementNS(T, "pattern");
      X.setAttrs(c2, { id: t2.patternID, patternUnits: t2.patternUnits ? t2.patternUnits : "userSpaceOnUse", width: n2 + "px", height: l2 + "px" });
      const d2 = f.createElementNS(T, "image");
      c2.appendChild(d2);
      const g2 = h.isBrowser() ? window.SVG : global.SVG;
      d2.setAttributeNS(g2.xlink, "href", r2), X.setAttrs(d2, { x: 0, y: 0, preserveAspectRatio: "none", width: n2 + "px", height: l2 + "px" }), d2.style.opacity = t2.opacity, e2.dom.elDefs.node.appendChild(c2);
    }
    getSeriesIndex(t2) {
      const e2 = this.w, s2 = e2.config.chart.type;
      return ("bar" === s2 || "rangeBar" === s2) && e2.config.plotOptions.bar.distributed || "heatmap" === s2 || "treemap" === s2 ? this.seriesIndex = t2.seriesNumber : this.seriesIndex = t2.seriesNumber % e2.seriesData.series.length, this.seriesIndex;
    }
    computeColorStops(t2, e2) {
      const s2 = this.w;
      let i2 = null, a2 = null;
      for (const s3 of t2) s3 >= e2.threshold ? (null === i2 || s3 > i2) && (i2 = s3) : (null === a2 || s3 < a2) && (a2 = s3);
      null === i2 && (i2 = e2.threshold), null === a2 && (a2 = e2.threshold);
      let o2 = i2 - e2.threshold + (e2.threshold - a2);
      0 === o2 && (o2 = 1);
      let r2 = 100 - (e2.threshold - a2) / o2 * 100;
      return r2 = Math.max(0, Math.min(r2, 100)), [{ offset: r2, color: e2.colorAboveThreshold, opacity: s2.config.fill.opacity }, { offset: 0, color: e2.colorBelowThreshold, opacity: s2.config.fill.opacity }];
    }
    fillPath(t2) {
      var e2, s2, i2, a2, o2, r2;
      const n2 = this.w;
      this.opts = t2;
      const l2 = this.w.config;
      let h2, c2, d2;
      this.seriesIndex = this.getSeriesIndex(t2);
      const g2 = l2.plotOptions.line.colors.colorAboveThreshold && l2.plotOptions.line.colors.colorBelowThreshold;
      let p2 = this.getFillColors()[this.seriesIndex];
      void 0 !== n2.seriesData.seriesColors[this.seriesIndex] && (p2 = n2.seriesData.seriesColors[this.seriesIndex]), "function" == typeof p2 && (p2 = p2({ seriesIndex: this.seriesIndex, dataPointIndex: t2.dataPointIndex, value: t2.value, w: n2 }));
      const x2 = t2.fillType ? t2.fillType : this.getFillType(this.seriesIndex);
      let u2 = Array.isArray(l2.fill.opacity) ? l2.fill.opacity[this.seriesIndex] : l2.fill.opacity;
      const f2 = "gradient" === x2 || g2;
      t2.color && (p2 = t2.color), (null == (i2 = null == (s2 = null == (e2 = n2.config.series[this.seriesIndex]) ? void 0 : e2.data) ? void 0 : s2[t2.dataPointIndex]) ? void 0 : i2.fillColor) && (p2 = null == (r2 = null == (o2 = null == (a2 = n2.config.series[this.seriesIndex]) ? void 0 : a2.data) ? void 0 : o2[t2.dataPointIndex]) ? void 0 : r2.fillColor), p2 || (p2 = "#fff"), b.isCSSVariable(p2) && (p2 = b.getThemeColor(p2));
      let m2 = p2;
      if (-1 === p2.indexOf("rgb") ? -1 === p2.indexOf("#") ? m2 = p2 : p2.length < 9 && (m2 = b.hexToRgba(p2, u2)) : p2.indexOf("rgba") > -1 ? u2 = b.getOpacityFromRGBA(p2) : m2 = b.hexToRgba(b.rgb2hex(p2), u2), t2.opacity && (u2 = t2.opacity), "pattern" === x2 && (c2 = this.handlePatternFill({ fillConfig: t2.fillConfig, patternFill: c2, fillColor: p2, fillOpacity: u2, defaultColor: m2 })), f2) {
        const e3 = l2.fill.gradient.colorStops ? [...l2.fill.gradient.colorStops] : [];
        let s3 = l2.fill.gradient.type;
        g2 && (e3[this.seriesIndex] = this.computeColorStops(n2.seriesData.series[this.seriesIndex], l2.plotOptions.line.colors), s3 = "vertical"), d2 = this.handleGradientFill({ type: s3, fillConfig: t2.fillConfig, fillColor: p2, fillOpacity: u2, colorStops: e3, i: this.seriesIndex });
      }
      if ("image" === x2) {
        const e3 = l2.fill.image.src, s3 = t2.patternID ? t2.patternID : "", i3 = `pattern${n2.globals.cuid}${t2.seriesNumber + 1}${s3}`;
        -1 === this.patternIDs.indexOf(i3) && (this.clippedImgArea({ opacity: u2, image: Array.isArray(e3) ? t2.seriesNumber < e3.length ? e3[t2.seriesNumber] : e3[0] : e3, width: t2.width ? t2.width : void 0, height: t2.height ? t2.height : void 0, patternUnits: t2.patternUnits, patternID: i3 }), this.patternIDs.push(i3)), h2 = `url(#${i3})`;
      } else h2 = f2 ? d2 : "pattern" === x2 ? c2 : m2;
      return t2.solid && (h2 = m2), h2;
    }
    getFillType(t2) {
      const e2 = this.w;
      return Array.isArray(e2.config.fill.type) ? e2.config.fill.type[t2] : e2.config.fill.type;
    }
    getFillColors() {
      const t2 = this.w, e2 = t2.config, s2 = this.opts;
      let i2 = [];
      return t2.globals.comboCharts ? "line" === t2.config.series[this.seriesIndex].type ? Array.isArray(t2.globals.stroke.colors) ? i2 = t2.globals.stroke.colors : i2.push(t2.globals.stroke.colors) : Array.isArray(t2.globals.fill.colors) ? i2 = t2.globals.fill.colors : i2.push(t2.globals.fill.colors) : "line" === e2.chart.type ? Array.isArray(t2.globals.stroke.colors) ? i2 = t2.globals.stroke.colors : i2.push(t2.globals.stroke.colors) : Array.isArray(t2.globals.fill.colors) ? i2 = t2.globals.fill.colors : i2.push(t2.globals.fill.colors), void 0 !== s2.fillColors && (i2 = [], Array.isArray(s2.fillColors) ? i2 = s2.fillColors.slice() : i2.push(s2.fillColors)), i2;
    }
    handlePatternFill({ fillConfig: t2, patternFill: e2, fillColor: s2, fillOpacity: i2, defaultColor: a2 }) {
      let o2 = this.w.config.fill;
      t2 && (o2 = t2);
      const r2 = this.opts, n2 = new X(this.w), l2 = Array.isArray(o2.pattern.strokeWidth) ? o2.pattern.strokeWidth[this.seriesIndex] : o2.pattern.strokeWidth, h2 = s2;
      if (Array.isArray(o2.pattern.style)) if (void 0 !== o2.pattern.style[r2.seriesNumber]) {
        e2 = n2.drawPattern(o2.pattern.style[r2.seriesNumber], o2.pattern.width, o2.pattern.height, h2, l2, i2);
      } else e2 = a2;
      else e2 = n2.drawPattern(o2.pattern.style, o2.pattern.width, o2.pattern.height, h2, l2, i2);
      return e2;
    }
    handleGradientFill({ type: t2, fillColor: e2, fillOpacity: s2, fillConfig: i2, colorStops: a2, i: o2 }) {
      let r2 = this.w.config.fill;
      i2 && (r2 = n(n({}, r2), i2));
      const l2 = this.opts, h2 = new X(this.w), c2 = new b();
      t2 = t2 || r2.gradient.type;
      let d2, g2 = e2, p2 = void 0 === r2.gradient.opacityFrom ? s2 : Array.isArray(r2.gradient.opacityFrom) ? r2.gradient.opacityFrom[o2] : r2.gradient.opacityFrom;
      g2.indexOf("rgba") > -1 && (p2 = b.getOpacityFromRGBA(g2));
      let x2 = void 0 === r2.gradient.opacityTo ? s2 : Array.isArray(r2.gradient.opacityTo) ? r2.gradient.opacityTo[o2] : r2.gradient.opacityTo;
      if (void 0 === r2.gradient.gradientToColors || 0 === r2.gradient.gradientToColors.length) d2 = "dark" === r2.gradient.shade ? c2.shadeColor(-1 * parseFloat(r2.gradient.shadeIntensity), e2.indexOf("rgb") > -1 ? b.rgb2hex(e2) : e2) : c2.shadeColor(parseFloat(r2.gradient.shadeIntensity), e2.indexOf("rgb") > -1 ? b.rgb2hex(e2) : e2);
      else if (r2.gradient.gradientToColors[l2.seriesNumber]) {
        const t3 = r2.gradient.gradientToColors[l2.seriesNumber];
        d2 = t3, t3.indexOf("rgba") > -1 && (x2 = b.getOpacityFromRGBA(t3));
      } else d2 = e2;
      if (r2.gradient.gradientFrom && (g2 = r2.gradient.gradientFrom), r2.gradient.gradientTo && (d2 = r2.gradient.gradientTo), r2.gradient.inverseColors) {
        const t3 = g2;
        g2 = d2, d2 = t3;
      }
      return g2.indexOf("rgb") > -1 && (g2 = b.rgb2hex(g2)), d2.indexOf("rgb") > -1 && (d2 = b.rgb2hex(d2)), h2.drawGradient(t2, g2, d2, p2, x2, l2.size, r2.gradient.stops, a2, o2);
    }
  }
  class H {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this._filters = new F(this.w), this._graphics = new X(this.w, this.ctx);
    }
    setGlobalMarkerSize() {
      const t2 = this.w;
      if (t2.globals.markers.size = Array.isArray(t2.config.markers.size) ? t2.config.markers.size : [t2.config.markers.size], t2.globals.markers.size.length > 0) {
        if (t2.globals.markers.size.length < t2.seriesData.series.length + 1) for (let e2 = 0; e2 <= t2.seriesData.series.length; e2++) void 0 === t2.globals.markers.size[e2] && t2.globals.markers.size.push(t2.globals.markers.size[0]);
      } else t2.globals.markers.size = t2.config.series.map(() => t2.config.markers.size);
    }
    plotChartMarkers({ pointsPos: t2, seriesIndex: e2, j: s2, pSize: i2, alwaysDrawMarker: a2 = false, isVirtualPoint: o2 = false }) {
      const r2 = this.w, n2 = e2, l2 = t2;
      let h2 = null;
      const c2 = new X(this.w), d2 = r2.config.markers.discrete && r2.config.markers.discrete.length;
      if (Array.isArray(l2.x)) for (let t3 = 0; t3 < l2.x.length; t3++) {
        let g2, p2 = s2, x2 = !b.isNumber(l2.y[t3]);
        0 === r2.globals.markers.largestSize && r2.globals.hasNullValues && null !== r2.seriesData.series[n2][s2 + 1] && !o2 && (x2 = true), 1 === s2 && 0 === t3 && (p2 = 0), 1 === s2 && 1 === t3 && (p2 = 1);
        let u2 = "apexcharts-marker";
        "line" !== r2.config.chart.type && "area" !== r2.config.chart.type || r2.globals.comboCharts || r2.config.tooltip.intersect || (u2 += " no-pointer-events");
        if ((Array.isArray(r2.config.markers.size) ? r2.globals.markers.size[e2] > 0 : r2.config.markers.size > 0) || a2 || d2) {
          x2 || (u2 += ` w${b.randomId()}`);
          const s3 = this.getMarkerConfig({ cssClass: u2, seriesIndex: e2, dataPointIndex: p2 });
          if (r2.config.series[n2].data[p2] && (r2.config.series[n2].data[p2].fillColor && (s3.pointFillColor = r2.config.series[n2].data[p2].fillColor), r2.config.series[n2].data[p2].strokeColor && (s3.pointStrokeColor = r2.config.series[n2].data[p2].strokeColor)), void 0 !== i2 && (s3.pSize = i2), (l2.x[t3] < -r2.globals.markers.largestSize || l2.x[t3] > r2.layout.gridWidth + r2.globals.markers.largestSize || l2.y[t3] < -r2.globals.markers.largestSize || l2.y[t3] > r2.layout.gridHeight + r2.globals.markers.largestSize) && (s3.pSize = 0), !x2) {
            (r2.globals.markers.size[e2] > 0 || a2 || d2) && !h2 && (h2 = c2.group({ class: a2 || d2 ? "" : "apexcharts-series-markers" }), h2.attr("clip-path", `url(#gridRectMarkerMask${r2.globals.cuid})`), this.setupMarkerDelegation(h2)), g2 = c2.drawMarker(l2.x[t3], l2.y[t3], s3), g2.attr("rel", p2), g2.attr("j", p2), g2.attr("index", e2), g2.node.setAttribute("default-marker-size", s3.pSize), this._filters.setSelectionFilter(g2, e2, p2), h2 && h2.add(g2);
          }
        } else void 0 === r2.globals.pointsArray[e2] && (r2.globals.pointsArray[e2] = []), r2.globals.pointsArray[e2].push([l2.x[t3], l2.y[t3]]);
      }
      return h2;
    }
    getMarkerConfig({ cssClass: t2, seriesIndex: e2, dataPointIndex: s2 = null, radius: i2 = null, size: a2 = null, strokeWidth: o2 = null }) {
      const r2 = this.w, n2 = this.getMarkerStyle(e2);
      let l2 = null === a2 ? r2.globals.markers.size[e2] : a2;
      const h2 = r2.config.markers;
      return null !== s2 && h2.discrete.length && h2.discrete.map((t3) => {
        t3.seriesIndex === e2 && t3.dataPointIndex === s2 && (n2.pointStrokeColor = t3.strokeColor, n2.pointFillColor = t3.fillColor, l2 = t3.size, n2.pointShape = t3.shape);
      }), { pSize: null === i2 ? l2 : i2, pRadius: null !== i2 ? i2 : h2.radius, pointStrokeWidth: null !== o2 ? o2 : Array.isArray(h2.strokeWidth) ? h2.strokeWidth[e2] : h2.strokeWidth, pointStrokeColor: n2.pointStrokeColor, pointFillColor: n2.pointFillColor, shape: n2.pointShape || (Array.isArray(h2.shape) ? h2.shape[e2] : h2.shape), class: t2, pointStrokeOpacity: Array.isArray(h2.strokeOpacity) ? h2.strokeOpacity[e2] : h2.strokeOpacity, pointStrokeDashArray: Array.isArray(h2.strokeDashArray) ? h2.strokeDashArray[e2] : h2.strokeDashArray, pointFillOpacity: Array.isArray(h2.fillOpacity) ? h2.fillOpacity[e2] : h2.fillOpacity, seriesIndex: e2 };
    }
    setupMarkerDelegation(t2) {
      const e2 = this.w, s2 = ".apexcharts-marker";
      this._graphics.setupEventDelegation(t2, s2), t2.node.addEventListener("click", (i2) => {
        if (e2.config.markers.onClick) {
          X._findDelegateTarget(i2.target, t2.node, s2) && e2.config.markers.onClick(i2);
        }
      }), t2.node.addEventListener("dblclick", (i2) => {
        if (e2.config.markers.onDblClick) {
          X._findDelegateTarget(i2.target, t2.node, s2) && e2.config.markers.onDblClick(i2);
        }
      }), t2.node.addEventListener("touchstart", (e3) => {
        const i2 = X._findDelegateTarget(e3.target, t2.node, s2);
        i2 && i2.instance && this._graphics.pathMouseDown(i2.instance, e3);
      }, { passive: true });
    }
    addEvents(t2) {
      const e2 = this.w;
      t2.node.addEventListener("mouseenter", this._graphics.pathMouseEnter.bind(this.ctx, t2)), t2.node.addEventListener("mouseleave", this._graphics.pathMouseLeave.bind(this.ctx, t2)), t2.node.addEventListener("mousedown", this._graphics.pathMouseDown.bind(this.ctx, t2)), t2.node.addEventListener("click", e2.config.markers.onClick), t2.node.addEventListener("dblclick", e2.config.markers.onDblClick), t2.node.addEventListener("touchstart", this._graphics.pathMouseDown.bind(this.ctx, t2), { passive: true });
    }
    getMarkerStyle(t2) {
      const e2 = this.w, s2 = e2.globals.markers.colors, i2 = e2.config.markers.strokeColor || e2.config.markers.strokeColors;
      return { pointStrokeColor: Array.isArray(i2) ? i2[t2] : i2, pointFillColor: Array.isArray(s2) ? s2[t2] : s2 };
    }
  }
  class O {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2, this.initialAnim = this.w.config.chart.animations.enabled, this.anim = new E(this.w), this.filters = new F(this.w), this.fill = new B(this.w), this.markers = new H(this.w, this.ctx), this.graphics = new X(this.w);
    }
    draw(t2, e2, s2) {
      const i2 = this.w, a2 = this.graphics, o2 = s2.realIndex, r2 = s2.pointsPos, n2 = s2.zRatio, l2 = s2.elParent, h2 = a2.group({ class: `apexcharts-series-markers apexcharts-series-${i2.config.chart.type}` });
      if (h2.attr("clip-path", `url(#gridRectMarkerMask${i2.globals.cuid})`), this.markers.setupMarkerDelegation(h2), Array.isArray(r2.x)) for (let t3 = 0; t3 < r2.x.length; t3++) {
        let s3 = e2 + 1, a3 = true;
        0 === e2 && 0 === t3 && (s3 = 0), 0 === e2 && 1 === t3 && (s3 = 1);
        let c2 = i2.globals.markers.size[o2];
        if (n2 !== 1 / 0) {
          const t4 = i2.config.plotOptions.bubble;
          c2 = i2.seriesData.seriesZ[o2][s3], t4.zScaling && (c2 /= n2), t4.minBubbleRadius && c2 < t4.minBubbleRadius && (c2 = t4.minBubbleRadius), t4.maxBubbleRadius && c2 > t4.maxBubbleRadius && (c2 = t4.maxBubbleRadius);
        }
        const d2 = r2.x[t3], g2 = r2.y[t3];
        if (c2 = c2 || 0, null !== g2 && void 0 !== i2.seriesData.series[o2][s3] || (a3 = false), a3) {
          const t4 = this.drawPoint(d2, g2, c2, o2, s3, e2);
          h2.add(t4);
        }
        l2.add(h2);
      }
    }
    drawPoint(t2, e2, s2, i2, a2, o2) {
      const r2 = this.w, n2 = i2, l2 = this.anim, h2 = this.filters, c2 = this.fill, d2 = this.markers, g2 = this.graphics, p2 = d2.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: n2, dataPointIndex: a2, radius: "bubble" === r2.config.chart.type || r2.globals.comboCharts && r2.config.series[i2] && "bubble" === r2.config.series[i2].type ? s2 : null });
      let x2 = c2.fillPath({ seriesNumber: i2, dataPointIndex: a2, color: p2.pointFillColor, patternUnits: "objectBoundingBox", value: r2.seriesData.series[i2][o2] });
      const u2 = g2.drawMarker(t2, e2, p2);
      if (r2.config.series[n2].data[a2] && r2.config.series[n2].data[a2].fillColor && (x2 = r2.config.series[n2].data[a2].fillColor), u2.attr({ fill: x2 }), r2.config.chart.dropShadow.enabled) {
        const t3 = r2.config.chart.dropShadow;
        h2.dropShadow(u2, t3, i2);
      }
      if (!this.initialAnim || r2.globals.dataChanged || r2.globals.resized) r2.globals.animationEnded = true;
      else {
        const t3 = r2.config.chart.animations.speed;
        l2.animateMarker(u2, t3, r2.globals.easing, () => {
          window.setTimeout(() => {
            l2.animationCompleted(u2);
          }, 100);
        });
      }
      return u2.attr({ rel: a2, j: a2, index: i2, "default-marker-size": p2.pSize }), h2.setSelectionFilter(u2, i2, a2), u2.node.classList.add("apexcharts-marker"), u2;
    }
    centerTextInBubble(t2) {
      const e2 = this.w;
      return { y: t2 += parseInt(e2.config.dataLabels.style.fontSize, 10) / 4 };
    }
  }
  class N {
    constructor(t2, e2 = null) {
      this.w = t2, this.ctx = e2;
    }
    dataLabelsCorrection(t2, e2, s2, i2, a2, o2, r2) {
      const n2 = this.w;
      let l2 = false;
      const h2 = new X(this.w).getTextRects(s2, r2), c2 = h2.width, d2 = h2.height;
      e2 < 0 && (e2 = 0), e2 > n2.layout.gridHeight + d2 && (e2 = n2.layout.gridHeight + d2 / 2), void 0 === n2.globals.dataLabelsRects[i2] && (n2.globals.dataLabelsRects[i2] = []), n2.globals.dataLabelsRects[i2].push({ x: t2, y: e2, width: c2, height: d2 });
      const g2 = n2.globals.dataLabelsRects[i2].length - 2, p2 = void 0 !== n2.globals.lastDrawnDataLabelsIndexes[i2] ? n2.globals.lastDrawnDataLabelsIndexes[i2][n2.globals.lastDrawnDataLabelsIndexes[i2].length - 1] : 0;
      if (void 0 !== n2.globals.dataLabelsRects[i2][g2]) {
        const s3 = n2.globals.dataLabelsRects[i2][p2];
        (t2 > s3.x + s3.width || e2 > s3.y + s3.height || e2 + d2 < s3.y || t2 + c2 < s3.x) && (l2 = true);
      }
      return (0 === a2 || o2) && (l2 = true), { x: t2, y: e2, textRects: h2, drawnextLabel: l2 };
    }
    drawDataLabel({ type: t2, pos: e2, i: s2, j: i2, isRangeStart: a2, strokeWidth: o2 = 2 }) {
      const r2 = this.w, n2 = new X(this.w), l2 = r2.config.dataLabels;
      let h2 = 0, c2 = 0, d2 = i2, g2 = null;
      if (-1 !== r2.globals.collapsedSeriesIndices.indexOf(s2) || !l2.enabled || !Array.isArray(e2.x)) return g2;
      g2 = n2.group({ class: "apexcharts-data-labels" });
      for (let n3 = 0; n3 < e2.x.length; n3++) if (h2 = e2.x[n3] + l2.offsetX, c2 = e2.y[n3] + l2.offsetY + o2, !isNaN(h2)) {
        1 === i2 && 0 === n3 && (d2 = 0), 1 === i2 && 1 === n3 && (d2 = 1);
        let o3 = r2.seriesData.series[s2][d2];
        "rangeArea" === t2 && (o3 = a2 ? r2.rangeData.seriesRangeStart[s2][d2] : r2.rangeData.seriesRangeEnd[s2][d2]);
        let l3 = "";
        const p2 = (t3) => r2.config.dataLabels.formatter(t3, { seriesIndex: s2, dataPointIndex: d2, w: r2 });
        if ("bubble" === r2.config.chart.type) {
          o3 = r2.seriesData.seriesZ[s2][d2], l3 = p2(o3), c2 = e2.y[n3];
          c2 = new O(this.w, this.ctx).centerTextInBubble(c2, s2, d2).y;
        } else void 0 !== o3 && (l3 = p2(o3));
        let x2 = r2.config.dataLabels.textAnchor;
        r2.globals.isSlopeChart && (x2 = 0 === d2 ? "end" : d2 === r2.config.series[s2].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({ x: h2, y: c2, text: l3, i: s2, j: d2, parent: g2, offsetCorrection: true, dataLabelsConfig: r2.config.dataLabels, textAnchor: x2 });
      }
      return g2;
    }
    plotDataLabelsText(t2) {
      const e2 = this.w, s2 = new X(this.w);
      let { x: i2, y: a2, i: o2, j: r2, text: n2, textAnchor: l2, fontSize: h2, parent: c2, dataLabelsConfig: d2, color: g2, alwaysDrawDataLabel: p2, offsetCorrection: x2, className: u2 } = t2, f2 = null;
      if (Array.isArray(e2.config.dataLabels.enabledOnSeries) && e2.config.dataLabels.enabledOnSeries.indexOf(o2) < 0) return f2;
      let b2 = { x: i2, y: a2, drawnextLabel: true, textRects: null };
      x2 && (b2 = this.dataLabelsCorrection(i2, a2, n2, o2, r2, p2, parseInt(d2.style.fontSize, 10))), e2.interact.zoomed || (i2 = b2.x, a2 = b2.y), b2.textRects && (i2 < -20 - b2.textRects.width || i2 > e2.layout.gridWidth + b2.textRects.width + 30) && (n2 = "");
      let m2 = e2.globals.dataLabels.style.colors[o2];
      (("bar" === e2.config.chart.type || "rangeBar" === e2.config.chart.type) && e2.config.plotOptions.bar.distributed || e2.config.dataLabels.distributed) && (m2 = e2.globals.dataLabels.style.colors[r2]), "function" == typeof m2 && (m2 = m2({ series: e2.seriesData.series, seriesIndex: o2, dataPointIndex: r2, w: e2 })), g2 && (m2 = g2);
      let y2 = d2.offsetX, w2 = d2.offsetY;
      if ("bar" !== e2.config.chart.type && "rangeBar" !== e2.config.chart.type || (y2 = 0, w2 = 0), e2.globals.isSlopeChart && (0 !== r2 && (y2 = -2 * d2.offsetX + 5), 0 !== r2 && r2 !== e2.config.series[o2].data.length - 1 && (y2 = 0)), b2.drawnextLabel) {
        if ("middle" === l2 && i2 === e2.layout.gridWidth && (l2 = "end"), f2 = s2.drawText({ width: 100, height: parseInt(d2.style.fontSize, 10), x: i2 + y2, y: a2 + w2, foreColor: m2, textAnchor: l2 || d2.textAnchor, text: n2, fontSize: h2 || d2.style.fontSize, fontFamily: d2.style.fontFamily, fontWeight: d2.style.fontWeight || "normal" }), f2.attr({ class: u2 || "apexcharts-datalabel", cx: i2, cy: a2 }), d2.dropShadow.enabled) {
          const t3 = d2.dropShadow;
          new F(this.w).dropShadow(f2, t3);
        }
        c2.add(f2), void 0 === e2.globals.lastDrawnDataLabelsIndexes[o2] && (e2.globals.lastDrawnDataLabelsIndexes[o2] = []), e2.globals.lastDrawnDataLabelsIndexes[o2].push(r2);
      }
      return f2;
    }
    addBackgroundToDataLabel(t2, e2) {
      const s2 = this.w, i2 = s2.config.dataLabels.background, a2 = i2.padding, o2 = i2.padding / 2, r2 = e2.width, n2 = e2.height, l2 = new X(this.w).drawRect(e2.x - a2, e2.y - o2 / 2, r2 + 2 * a2, n2 + o2, i2.borderRadius, "transparent" !== s2.config.chart.background && s2.config.chart.background ? s2.config.chart.background : "#fff", i2.opacity, i2.borderWidth, i2.borderColor);
      if (i2.dropShadow.enabled) {
        new F(this.w).dropShadow(l2, i2.dropShadow);
      }
      return l2;
    }
    dataLabelsBackground() {
      const t2 = this.w;
      if ("bubble" === t2.config.chart.type) return;
      const e2 = t2.dom.baseEl.querySelectorAll(".apexcharts-datalabels text");
      for (let s2 = 0; s2 < e2.length; s2++) {
        const i2 = e2[s2], a2 = i2.getBBox();
        let o2 = null;
        if (a2.width && a2.height && (o2 = this.addBackgroundToDataLabel(i2, a2)), o2) {
          i2.parentNode.insertBefore(o2.node, i2);
          const e3 = t2.config.dataLabels.background.backgroundColor || i2.getAttribute("fill");
          t2.config.chart.animations.enabled && !t2.globals.resized && !t2.globals.dataChanged ? o2.animate().attr({ fill: e3 }) : o2.attr({ fill: e3 }), i2.setAttribute("fill", t2.config.dataLabels.background.foreColor);
        }
      }
    }
    bringForward() {
      const t2 = this.w, e2 = t2.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), s2 = t2.dom.baseEl.querySelector(".apexcharts-plot-series:last-child");
      for (let t3 = 0; t3 < e2.length; t3++) s2 && s2.insertBefore(e2[t3], s2.nextSibling);
    }
  }
  class W {
    constructor(t2, { theme: e2 = null, timeScale: s2 = null } = {}) {
      this.w = t2, this.theme = e2, this.timeScale = s2;
    }
    getLabel(t2, e2, s2, i2, a2 = [], o2 = "12px", r2 = true) {
      const n2 = this.w, l2 = void 0 === t2[i2] ? "" : t2[i2];
      let h2 = l2;
      const c2 = n2.formatters.xLabelFormatter, d2 = n2.config.xaxis.labels.formatter;
      let g2 = false;
      const p2 = new y(this.w), x2 = l2;
      r2 && (h2 = p2.xLabelFormat(c2, l2, x2, { i: i2, dateFormatter: new m(this.w).formatDate, w: n2 }), void 0 !== d2 && (h2 = d2(l2, t2[i2], { i: i2, dateFormatter: new m(this.w).formatDate, w: n2 })));
      e2.length > 0 ? (g2 = ((t3) => {
        let s3 = null;
        return e2.forEach((t4) => {
          "month" === t4.unit ? s3 = "year" : "day" === t4.unit ? s3 = "month" : "hour" === t4.unit ? s3 = "day" : "minute" === t4.unit && (s3 = "hour");
        }), s3 === t3;
      })(e2[i2].unit), s2 = e2[i2].position, h2 = e2[i2].value) : "datetime" === n2.config.xaxis.type && void 0 === d2 && (h2 = ""), void 0 === h2 && (h2 = ""), h2 = Array.isArray(h2) ? h2 : h2.toString();
      const u2 = new X(this.w);
      let f2 = {};
      f2 = n2.layout.rotateXLabels && r2 ? u2.getTextRects(h2, parseInt(o2, 10), null, `rotate(${n2.config.xaxis.labels.rotate} 0 0)`, false) : u2.getTextRects(h2, parseInt(o2, 10));
      const b2 = !n2.config.xaxis.labels.showDuplicates && this.timeScale;
      return !Array.isArray(h2) && ("NaN" === String(h2) || a2.indexOf(h2) >= 0 && b2) && (h2 = ""), { x: s2, text: h2, textRect: f2, isBold: g2 };
    }
    checkLabelBasedOnTickamount(t2, e2, s2) {
      const i2 = this.w;
      let a2 = i2.config.xaxis.tickAmount;
      if ("dataPoints" === a2 && (a2 = Math.round(i2.layout.gridWidth / 120)), a2 > s2) return e2;
      return t2 % Math.round(s2 / (a2 + 1)) === 0 || (e2.text = ""), e2;
    }
    checkForOverflowingLabels(t2, e2, s2, i2, a2) {
      const o2 = this.w;
      if (0 === t2 && o2.globals.skipFirstTimelinelabel && (e2.text = ""), t2 === s2 - 1 && o2.globals.skipLastTimelinelabel && (e2.text = ""), o2.config.xaxis.labels.hideOverlappingLabels && i2.length > 0) {
        const t3 = a2[a2.length - 1];
        if (o2.config.xaxis.labels.trim && "datetime" !== o2.config.xaxis.type) return e2;
        e2.x < t3.textRect.width / (o2.layout.rotateXLabels ? Math.abs(o2.config.xaxis.labels.rotate) / 12 : 1.01) + t3.x && (e2.text = "");
      }
      return e2;
    }
    checkForReversedLabels(t2, e2) {
      const s2 = this.w;
      return s2.config.yaxis[t2] && s2.config.yaxis[t2].reversed && e2.reverse(), e2;
    }
    yAxisAllSeriesCollapsed(t2) {
      const e2 = this.w.globals;
      return !e2.seriesYAxisMap[t2].some((t3) => -1 === e2.collapsedSeriesIndices.indexOf(t3));
    }
    translateYAxisIndex(t2) {
      const e2 = this.w, s2 = e2.globals, i2 = e2.config.yaxis;
      return e2.seriesData.series.length > i2.length || i2.some((t3) => Array.isArray(t3.seriesName)) ? t2 : s2.seriesYAxisReverseMap[t2];
    }
    isYAxisHidden(t2) {
      const e2 = this.w, s2 = e2.config.yaxis[t2];
      if (!s2.show || this.yAxisAllSeriesCollapsed(t2)) return true;
      if (!s2.showForNullSeries) {
        const s3 = e2.globals.seriesYAxisMap[t2], i2 = new I(this.w);
        return s3.every((t3) => i2.isSeriesNull(t3));
      }
      return false;
    }
    getYAxisForeColor(t2, e2) {
      var s2;
      const i2 = this.w;
      return Array.isArray(t2) && i2.globals.yAxisScale[e2] && (null == (s2 = this.theme) || s2.pushExtraColors(t2, i2.globals.yAxisScale[e2].result.length, false)), t2;
    }
    drawYAxisTicks(t2, e2, s2, i2, a2, o2, r2) {
      const n2 = this.w, l2 = new X(this.w);
      let h2 = n2.layout.translateY + n2.config.yaxis[a2].labels.offsetY;
      if (n2.globals.isBarHorizontal ? h2 = 0 : "heatmap" === n2.config.chart.type && (h2 += o2 / 2), i2.show && e2 > 0) {
        true === n2.config.yaxis[a2].opposite && (t2 += i2.width);
        for (let a3 = e2; a3 >= 0; a3--) {
          const e3 = l2.drawLine(t2 + s2.offsetX - i2.width + i2.offsetX, h2 + i2.offsetY, t2 + s2.offsetX + i2.offsetX, h2 + i2.offsetY, i2.color);
          r2.add(e3), h2 += o2;
        }
      }
    }
  }
  class _ {
    constructor(t2, e2, s2) {
      this.w = t2, this.ctx = e2, this.elgrid = s2, this.axesUtils = new W(t2, { theme: e2.theme, timeScale: e2.timeScale }), this.xaxisLabels = t2.labelData.labels.slice(), t2.labelData.timescaleLabels.length > 0 && !t2.globals.isBarHorizontal && (this.xaxisLabels = t2.labelData.timescaleLabels.slice()), t2.config.xaxis.overwriteCategories && (this.xaxisLabels = t2.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === t2.config.xaxis.position ? this.offY = 0 : this.offY = t2.layout.gridHeight, this.offY = this.offY + t2.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === t2.config.chart.type && t2.config.plotOptions.bar.horizontal, this.xaxisFontSize = t2.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = t2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = t2.config.xaxis.labels.style.colors, this.xaxisBorderWidth = t2.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = t2.config.yaxis[0].axisBorder.width.toString()), String(this.xaxisBorderWidth).indexOf("%") > -1 ? this.xaxisBorderWidth = t2.layout.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = t2.config.xaxis.axisBorder.height, this.yaxis = t2.config.yaxis[0];
    }
    drawXaxis() {
      const t2 = this.w, e2 = new X(this.w), s2 = e2.group({ class: "apexcharts-xaxis", transform: `translate(${t2.config.xaxis.offsetX}, ${t2.config.xaxis.offsetY})` }), i2 = e2.group({ class: "apexcharts-xaxis-texts-g", transform: `translate(${t2.layout.translateXAxisX}, ${t2.layout.translateXAxisY})` });
      s2.add(i2);
      let a2 = [];
      for (let t3 = 0; t3 < this.xaxisLabels.length; t3++) a2.push(this.xaxisLabels[t3]);
      if (this.drawXAxisLabelAndGroup(true, e2, i2, a2, t2.axisFlags.isXNumeric, (t3, e3) => e3), t2.labelData.hasXaxisGroups) {
        const s3 = t2.labelData.groups;
        a2 = [];
        for (let t3 = 0; t3 < s3.length; t3++) a2.push(s3[t3].title);
        const o2 = {};
        t2.config.xaxis.group.style && (o2.xaxisFontSize = t2.config.xaxis.group.style.fontSize, o2.xaxisFontFamily = t2.config.xaxis.group.style.fontFamily, o2.xaxisForeColors = t2.config.xaxis.group.style.colors, o2.fontWeight = t2.config.xaxis.group.style.fontWeight, o2.cssClass = t2.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(false, e2, i2, a2, false, (t3, e3) => s3[t3].cols * e3, o2);
      }
      if (void 0 !== t2.config.xaxis.title.text) {
        const i3 = e2.group({ class: "apexcharts-xaxis-title" }), a3 = e2.drawText({ x: t2.layout.gridWidth / 2 + t2.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + ("bottom" === t2.config.xaxis.position ? t2.layout.xAxisLabelsHeight : -t2.layout.xAxisLabelsHeight - 10) + t2.config.xaxis.title.offsetY, text: t2.config.xaxis.title.text, textAnchor: "middle", fontSize: t2.config.xaxis.title.style.fontSize, fontFamily: t2.config.xaxis.title.style.fontFamily, fontWeight: t2.config.xaxis.title.style.fontWeight, foreColor: t2.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t2.config.xaxis.title.style.cssClass });
        i3.add(a3), s2.add(i3);
      }
      if (t2.config.xaxis.axisBorder.show) {
        const i3 = t2.globals.barPadForNumericAxis, a3 = e2.drawLine(t2.globals.padHorizontal + t2.config.xaxis.axisBorder.offsetX - i3, this.offY, this.xaxisBorderWidth + i3, this.offY, t2.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
        this.elgrid && this.elgrid.elGridBorders && t2.config.grid.show ? this.elgrid.elGridBorders.add(a3) : s2.add(a3);
      }
      return s2;
    }
    drawXAxisLabelAndGroup(t2, e2, s2, i2, a2, o2, r2 = {}) {
      const n2 = [], l2 = [], h2 = this.w, c2 = r2.xaxisFontSize || this.xaxisFontSize, d2 = r2.xaxisFontFamily || this.xaxisFontFamily, g2 = r2.xaxisForeColors || this.xaxisForeColors, p2 = r2.fontWeight || h2.config.xaxis.labels.style.fontWeight, x2 = r2.cssClass || h2.config.xaxis.labels.style.cssClass;
      let u2, b2 = h2.globals.padHorizontal;
      const m2 = i2.length;
      let y2 = "category" === h2.config.xaxis.type ? h2.globals.dataPoints : m2;
      if (0 === y2 && m2 > y2 && (y2 = m2), a2) {
        const t3 = Math.max(Number(h2.config.xaxis.tickAmount) || 1, y2 > 1 ? y2 - 1 : y2);
        u2 = h2.layout.gridWidth / Math.min(t3, m2 - 1), b2 = b2 + o2(0, u2) / 2 + h2.config.xaxis.labels.offsetX;
      } else u2 = h2.layout.gridWidth / y2, b2 = b2 + o2(0, u2) + h2.config.xaxis.labels.offsetX;
      for (let a3 = 0; a3 <= m2 - 1; a3++) {
        let r3 = b2 - o2(a3, u2) / 2 + h2.config.xaxis.labels.offsetX;
        0 === a3 && 1 === m2 && u2 / 2 === b2 && 1 === y2 && (r3 = h2.layout.gridWidth / 2);
        let w2 = this.axesUtils.getLabel(i2, h2.labelData.timescaleLabels, r3, a3, n2, c2, t2), v2 = 28;
        h2.layout.rotateXLabels && t2 && (v2 = 22), h2.config.xaxis.title.text && "top" === h2.config.xaxis.position && (v2 += parseFloat(h2.config.xaxis.title.style.fontSize) + 2), t2 || (v2 = v2 + parseFloat(c2) + (h2.layout.xAxisLabelsHeight - h2.layout.xAxisGroupLabelsHeight) + (h2.layout.rotateXLabels ? 10 : 0));
        w2 = void 0 !== h2.config.xaxis.tickAmount && "dataPoints" !== h2.config.xaxis.tickAmount && "datetime" !== h2.config.xaxis.type ? this.axesUtils.checkLabelBasedOnTickamount(a3, w2, m2) : this.axesUtils.checkForOverflowingLabels(a3, w2, m2, n2, l2);
        const A2 = () => t2 && h2.config.xaxis.convertedCatToNumeric ? g2[h2.globals.minX + a3 - 1] : g2[a3];
        if (h2.config.xaxis.labels.show) {
          const i3 = e2.drawText({ x: w2.x, y: this.offY + h2.config.xaxis.labels.offsetY + v2 - ("top" === h2.config.xaxis.position ? h2.layout.xAxisHeight + h2.config.xaxis.axisTicks.height - 2 : 0), text: w2.text, textAnchor: "middle", fontWeight: w2.isBold ? 600 : p2, fontSize: c2, fontFamily: d2, foreColor: Array.isArray(g2) ? A2() : g2, isPlainText: false, cssClass: (t2 ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + x2 });
          if (s2.add(i3), i3.on("click", (t3) => {
            if ("function" == typeof h2.config.chart.events.xAxisLabelClick) {
              const e3 = Object.assign({}, h2, { labelIndex: a3 });
              h2.config.chart.events.xAxisLabelClick(t3, this.ctx, e3);
            }
          }), t2) {
            const t3 = f.createElementNS(T, "title");
            t3.textContent = Array.isArray(w2.text) ? w2.text.join(" ") : w2.text, i3.node.appendChild(t3), "" !== w2.text && (n2.push(w2.text), l2.push(w2));
          }
        }
        a3 < m2 - 1 && (b2 += o2(a3 + 1, u2));
      }
    }
    drawXaxisInversed(t2) {
      const e2 = this.w, s2 = new X(this.w), i2 = e2.config.yaxis[0].opposite ? e2.globals.translateYAxisX[t2] : 0, a2 = s2.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t2 }), o2 = s2.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + i2 + ", 0)" });
      a2.add(o2);
      const r2 = [];
      if (e2.config.yaxis[t2].show) for (let t3 = 0; t3 < this.xaxisLabels.length; t3++) r2.push(this.xaxisLabels[t3]);
      const n2 = e2.layout.gridHeight / r2.length;
      let l2 = -n2 / 2.2;
      const h2 = e2.formatters.yLabelFormatters[0], c2 = e2.config.yaxis[0].labels;
      if (c2.show) for (let i3 = 0; i3 <= r2.length - 1; i3++) {
        let a3 = void 0 === r2[i3] ? "" : r2[i3];
        a3 = h2(a3, { seriesIndex: t2, dataPointIndex: i3, w: e2 });
        const d3 = this.axesUtils.getYAxisForeColor(c2.style.colors, t2), g3 = () => Array.isArray(d3) ? d3[i3] : d3;
        let p2 = 0;
        Array.isArray(a3) && (p2 = a3.length / 2 * parseInt(c2.style.fontSize, 10));
        let x2 = c2.offsetX - 15, u2 = "end";
        this.yaxis.opposite && (u2 = "start"), "left" === e2.config.yaxis[0].labels.align ? (x2 = c2.offsetX, u2 = "start") : "center" === e2.config.yaxis[0].labels.align ? (x2 = c2.offsetX, u2 = "middle") : "right" === e2.config.yaxis[0].labels.align && (u2 = "end");
        const b2 = s2.drawText({ x: x2, y: l2 + n2 + c2.offsetY - p2, text: a3, textAnchor: u2, foreColor: g3(), fontSize: c2.style.fontSize, fontFamily: c2.style.fontFamily, fontWeight: c2.style.fontWeight, isPlainText: false, cssClass: "apexcharts-yaxis-label " + c2.style.cssClass, maxWidth: c2.maxWidth });
        o2.add(b2), b2.on("click", (t3) => {
          if ("function" == typeof e2.config.chart.events.xAxisLabelClick) {
            const s3 = Object.assign({}, e2, { labelIndex: i3 });
            e2.config.chart.events.xAxisLabelClick(t3, this.ctx, s3);
          }
        });
        const m2 = f.createElementNS(T, "title");
        if (m2.textContent = Array.isArray(a3) ? a3.join(" ") : a3, b2.node.appendChild(m2), 0 !== e2.config.yaxis[t2].labels.rotate) {
          const i4 = s2.rotateAroundCenter(b2.node);
          b2.node.setAttribute("transform", `rotate(${e2.config.yaxis[t2].labels.rotate} 0 ${i4.y})`);
        }
        l2 += n2;
      }
      if (void 0 !== e2.config.yaxis[0].title.text) {
        const t3 = s2.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + i2 + ", 0)" }), o3 = s2.drawText({ x: e2.config.yaxis[0].title.offsetX, y: e2.layout.gridHeight / 2 + e2.config.yaxis[0].title.offsetY, text: e2.config.yaxis[0].title.text, textAnchor: "middle", foreColor: e2.config.yaxis[0].title.style.color, fontSize: e2.config.yaxis[0].title.style.fontSize, fontWeight: e2.config.yaxis[0].title.style.fontWeight, fontFamily: e2.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + e2.config.yaxis[0].title.style.cssClass });
        t3.add(o3), a2.add(t3);
      }
      let d2 = 0;
      this.isCategoryBarHorizontal && e2.config.yaxis[0].opposite && (d2 = e2.layout.gridWidth);
      const g2 = e2.config.xaxis.axisBorder;
      if (g2.show) {
        const t3 = s2.drawLine(e2.globals.padHorizontal + g2.offsetX + d2, 1 + g2.offsetY, e2.globals.padHorizontal + g2.offsetX + d2, e2.layout.gridHeight + g2.offsetY, g2.color, 0);
        this.elgrid && this.elgrid.elGridBorders && e2.config.grid.show ? this.elgrid.elGridBorders.add(t3) : a2.add(t3);
      }
      return e2.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(d2, r2.length, e2.config.yaxis[0].axisBorder, e2.config.yaxis[0].axisTicks, 0, n2, a2), a2;
    }
    drawXaxisTicks(t2, e2, s2) {
      const i2 = this.w, a2 = t2;
      if (t2 < 0 || t2 - 2 > i2.layout.gridWidth) return;
      const o2 = this.offY + i2.config.xaxis.axisTicks.offsetY;
      if (e2 = e2 + o2 + i2.config.xaxis.axisTicks.height, "top" === i2.config.xaxis.position && (e2 = o2 - i2.config.xaxis.axisTicks.height), i2.config.xaxis.axisTicks.show) {
        const r2 = new X(this.w).drawLine(t2 + i2.config.xaxis.axisTicks.offsetX, o2 + i2.config.xaxis.offsetY, a2 + i2.config.xaxis.axisTicks.offsetX, e2 + i2.config.xaxis.offsetY, i2.config.xaxis.axisTicks.color);
        s2.add(r2), r2.node.classList.add("apexcharts-xaxis-tick");
      }
    }
    getXAxisTicksPositions() {
      const t2 = this.w, e2 = [], s2 = this.xaxisLabels.length;
      let i2 = t2.globals.padHorizontal;
      if (t2.labelData.timescaleLabels.length > 0) for (let t3 = 0; t3 < s2; t3++) i2 = this.xaxisLabels[t3].position, e2.push(i2);
      else {
        const a2 = s2;
        for (let s3 = 0; s3 < a2; s3++) {
          let s4 = a2;
          t2.axisFlags.isXNumeric && "bar" !== t2.config.chart.type && (s4 -= 1), i2 += t2.layout.gridWidth / s4, e2.push(i2);
        }
      }
      return e2;
    }
    xAxisLabelCorrections() {
      const t2 = this.w, e2 = new X(this.w), s2 = t2.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), i2 = t2.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), a2 = t2.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), o2 = t2.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
      if (t2.layout.rotateXLabels || t2.config.xaxis.labels.rotateAlways) for (let a3 = 0; a3 < i2.length; a3++) {
        const o3 = e2.rotateAroundCenter(i2[a3]);
        o3.y = o3.y - 1, o3.x = o3.x + 1, i2[a3].setAttribute("transform", `rotate(${t2.config.xaxis.labels.rotate} ${o3.x} ${o3.y})`), i2[a3].setAttribute("text-anchor", "end"), s2.setAttribute("transform", "translate(0, -10)");
        const r2 = i2[a3].childNodes;
        t2.config.xaxis.labels.trim && Array.prototype.forEach.call(r2, (s3) => {
          e2.placeTextWithEllipsis(s3, s3.textContent, t2.layout.xAxisLabelsHeight - ("bottom" === t2.config.legend.position ? 20 : 10));
        });
      }
      else {
        const s3 = t2.layout.gridWidth / (t2.labelData.labels.length + 1);
        for (let a3 = 0; a3 < i2.length; a3++) {
          const o3 = i2[a3].childNodes;
          t2.config.xaxis.labels.trim && "datetime" !== t2.config.xaxis.type && Array.prototype.forEach.call(o3, (t3) => {
            e2.placeTextWithEllipsis(t3, t3.textContent, s3);
          });
        }
      }
      if (a2.length > 0) {
        const s3 = a2[a2.length - 1].getBBox(), i3 = a2[0].getBBox();
        s3.x < -20 && a2[a2.length - 1].parentNode.removeChild(a2[a2.length - 1]), i3.x + i3.width > t2.layout.gridWidth && !t2.globals.isBarHorizontal && a2[0].parentNode.removeChild(a2[0]);
        for (let s4 = 0; s4 < o2.length; s4++) e2.placeTextWithEllipsis(o2[s4], o2[s4].textContent, t2.config.yaxis[0].labels.maxWidth - (t2.config.yaxis[0].title.text ? 2 * parseFloat(t2.config.yaxis[0].title.style.fontSize) : 0) - 15);
      }
    }
  }
  class G {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.xaxisLabels = t2.labelData.labels.slice(), this.axesUtils = new W(e2.w, { theme: e2.theme, timeScale: e2.timeScale }), this.isRangeBar = t2.rangeData.seriesRange.length && t2.globals.isBarHorizontal, t2.labelData.timescaleLabels.length > 0 && (this.xaxisLabels = t2.labelData.timescaleLabels.slice());
    }
    drawGridArea(t2 = null) {
      const e2 = this.w, s2 = new X(this.w);
      t2 || (t2 = s2.group({ class: "apexcharts-grid" }));
      const i2 = s2.drawLine(e2.globals.padHorizontal, 1, e2.globals.padHorizontal, e2.layout.gridHeight, "transparent"), a2 = s2.drawLine(e2.globals.padHorizontal, e2.layout.gridHeight, e2.layout.gridWidth, e2.layout.gridHeight, "transparent");
      return t2.add(a2), t2.add(i2), t2;
    }
    drawGrid() {
      if (this.w.globals.axisCharts) {
        const t2 = this.renderGrid();
        return this.drawGridArea(t2.el), t2;
      }
      return null;
    }
    createGridMask() {
      const t2 = this.w, e2 = t2.globals, s2 = new X(this.w), i2 = Array.isArray(t2.config.stroke.width) ? Math.max(...t2.config.stroke.width) : t2.config.stroke.width, a2 = (t3) => {
        const e3 = f.createElementNS(T, "clipPath");
        return e3.setAttribute("id", t3), e3;
      };
      t2.dom.elGridRectMask = a2(`gridRectMask${e2.cuid}`), t2.dom.elGridRectBarMask = a2(`gridRectBarMask${e2.cuid}`), t2.dom.elGridRectMarkerMask = a2(`gridRectMarkerMask${e2.cuid}`), t2.dom.elForecastMask = a2(`forecastMask${e2.cuid}`), t2.dom.elNonForecastMask = a2(`nonForecastMask${e2.cuid}`);
      let o2 = 0, r2 = 0;
      (["bar", "rangeBar", "candlestick", "boxPlot"].includes(t2.config.chart.type) || t2.globals.comboBarCount > 0) && t2.axisFlags.isXNumeric && !t2.globals.isBarHorizontal && (o2 = Math.max(t2.config.grid.padding.left, e2.barPadForNumericAxis), r2 = Math.max(t2.config.grid.padding.right, e2.barPadForNumericAxis)), t2.dom.elGridRect = s2.drawRect(-i2 / 2 - 2, -i2 / 2 - 2, t2.layout.gridWidth + i2 + 4, t2.layout.gridHeight + i2 + 4, 0, "#fff"), t2.dom.elGridRectBar = s2.drawRect(-i2 / 2 - o2 - 2, -i2 / 2 - 2, t2.layout.gridWidth + i2 + r2 + o2 + 4, t2.layout.gridHeight + i2 + 4, 0, "#fff");
      const n2 = t2.globals.markers.largestSize;
      t2.dom.elGridRectMarker = s2.drawRect(Math.min(-i2 / 2 - o2 - 2, -n2), -n2, t2.layout.gridWidth + Math.max(i2 + r2 + o2 + 4, 2 * n2), t2.layout.gridHeight + 2 * n2, 0, "#fff"), t2.dom.elGridRectMask.appendChild(t2.dom.elGridRect.node), t2.dom.elGridRectBarMask.appendChild(t2.dom.elGridRectBar.node), t2.dom.elGridRectMarkerMask.appendChild(t2.dom.elGridRectMarker.node);
      const l2 = t2.dom.elDefs.node;
      l2.appendChild(t2.dom.elGridRectMask), l2.appendChild(t2.dom.elGridRectBarMask), l2.appendChild(t2.dom.elGridRectMarkerMask), l2.appendChild(t2.dom.elForecastMask), l2.appendChild(t2.dom.elNonForecastMask);
    }
    _drawGridLines({ i: t2, x1: e2, y1: s2, x2: i2, y2: a2, xCount: o2, parent: r2 }) {
      const n2 = this.w;
      if (!(0 === t2 && n2.globals.skipFirstTimelinelabel || t2 === o2 - 1 && n2.globals.skipLastTimelinelabel && !n2.config.xaxis.labels.formatter || "radar" === n2.config.chart.type)) {
        n2.config.grid.xaxis.lines.show && this._drawGridLine({ i: t2, x1: e2, y1: s2, x2: i2, y2: a2, xCount: o2, parent: r2 });
        let l2 = 0;
        if (n2.labelData.hasXaxisGroups && "between" === n2.config.xaxis.tickPlacement) {
          const e3 = n2.labelData.groups;
          if (e3) {
            let s3 = 0;
            for (let i3 = 0; s3 < t2 && i3 < e3.length; i3++) s3 += e3[i3].cols;
            s3 === t2 && (l2 = 0.6 * n2.layout.xAxisLabelsHeight);
          }
        }
        new _(this.w, this.ctx).drawXaxisTicks(e2, l2, n2.dom.elGraphical);
      }
    }
    _drawGridLine({ i: t2, x1: e2, y1: s2, x2: i2, y2: a2, xCount: o2, parent: r2 }) {
      const n2 = this.w, l2 = r2.node.classList.contains("apexcharts-gridlines-horizontal"), h2 = n2.globals.barPadForNumericAxis, c2 = 0 === s2 && 0 === a2 || 0 === e2 && 0 === i2 || s2 === n2.layout.gridHeight && a2 === n2.layout.gridHeight || n2.globals.isBarHorizontal && (0 === t2 || t2 === o2 - 1), d2 = new X(this.w).drawLine(e2 - (l2 ? h2 : 0), s2, i2 + (l2 ? h2 : 0), a2, n2.config.grid.borderColor, n2.config.grid.strokeDashArray);
      d2.node.classList.add("apexcharts-gridline"), c2 && n2.config.grid.show ? this.elGridBorders.add(d2) : r2.add(d2);
    }
    _drawGridBandRect({ c: t2, x1: e2, y1: s2, x2: i2, y2: a2, type: o2 }) {
      const r2 = this.w, n2 = new X(this.w), l2 = r2.globals.barPadForNumericAxis, h2 = r2.config.grid[o2].colors[t2], c2 = n2.drawRect(e2 - ("row" === o2 ? l2 : 0), s2, i2 + ("row" === o2 ? 2 * l2 : 0), a2, 0, h2, r2.config.grid[o2].opacity);
      this.elg.add(c2), c2.attr("clip-path", `url(#gridRectMask${r2.globals.cuid})`), c2.node.classList.add(`apexcharts-grid-${o2}`);
    }
    _drawXYLines({ xCount: t2, tickAmount: e2 }) {
      const s2 = this.w, i2 = ({ xC: e3, x1: s3, y1: i3, x2: a3, y2: o2 }) => {
        for (let r2 = 0; r2 < e3; r2++) s3 = this.xaxisLabels[r2].position, a3 = this.xaxisLabels[r2].position, this._drawGridLines({ i: r2, x1: s3, y1: i3, x2: a3, y2: o2, xCount: t2, parent: this.elgridLinesV });
      }, a2 = ({ xC: e3, x1: i3, y1: a3, x2: o2, y2: r2 }) => {
        for (let n2 = 0; n2 < e3 + (s2.axisFlags.isXNumeric ? 0 : 1); n2++) 0 === n2 && 1 === e3 && 1 === s2.globals.dataPoints && (o2 = i3 = s2.layout.gridWidth / 2), this._drawGridLines({ i: n2, x1: i3, y1: a3, x2: o2, y2: r2, xCount: t2, parent: this.elgridLinesV }), o2 = i3 += s2.layout.gridWidth / (s2.axisFlags.isXNumeric ? e3 - 1 : e3);
      };
      if (s2.config.grid.xaxis.lines.show || s2.config.xaxis.axisTicks.show) {
        const e3 = s2.globals.padHorizontal, o2 = 0;
        let r2;
        const n2 = s2.layout.gridHeight;
        s2.labelData.timescaleLabels.length ? i2({ xC: t2, x1: e3, y1: o2, x2: r2, y2: n2 }) : (s2.axisFlags.isXNumeric && (t2 = s2.globals.xAxisScale.result.length), a2({ xC: t2, x1: e3, y1: o2, x2: r2, y2: n2 }));
      }
      if (s2.config.grid.yaxis.lines.show) {
        const t3 = 0;
        let i3 = 0, a3 = 0;
        const o2 = s2.layout.gridWidth;
        let r2 = e2 + 1;
        this.isRangeBar && (r2 = s2.labelData.labels.length);
        for (let n2 = 0; n2 < r2 + (this.isRangeBar ? 1 : 0); n2++) this._drawGridLine({ i: n2, xCount: r2 + (this.isRangeBar ? 1 : 0), x1: t3, y1: i3, x2: o2, y2: a3, parent: this.elgridLinesH }), i3 += s2.layout.gridHeight / (this.isRangeBar ? r2 : e2), a3 = i3;
      }
    }
    _drawInvertedXYLines({ xCount: t2 }) {
      const e2 = this.w;
      if (e2.config.grid.xaxis.lines.show || e2.config.xaxis.axisTicks.show) {
        let s2 = e2.globals.padHorizontal;
        const i2 = 0;
        let a2;
        const o2 = e2.layout.gridHeight;
        for (let r2 = 0; r2 < t2 + 1; r2++) {
          e2.config.grid.xaxis.lines.show && this._drawGridLine({ i: r2, xCount: t2 + 1, x1: s2, y1: i2, x2: a2, y2: o2, parent: this.elgridLinesV });
          new _(this.w, this.ctx).drawXaxisTicks(s2, 0, e2.dom.elGraphical), s2 += e2.layout.gridWidth / t2, a2 = s2;
        }
      }
      if (e2.config.grid.yaxis.lines.show) {
        const t3 = 0;
        let s2 = 0, i2 = 0;
        const a2 = e2.layout.gridWidth;
        for (let o2 = 0; o2 < e2.globals.dataPoints + 1; o2++) this._drawGridLine({ i: o2, xCount: e2.globals.dataPoints + 1, x1: t3, y1: s2, x2: a2, y2: i2, parent: this.elgridLinesH }), s2 += e2.layout.gridHeight / e2.globals.dataPoints, i2 = s2;
      }
    }
    renderGrid() {
      var t2, e2, s2;
      const i2 = this.w, a2 = i2.globals, o2 = new X(this.w);
      this.elg = o2.group({ class: "apexcharts-grid" }), this.elgridLinesH = o2.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = o2.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = o2.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), i2.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
      let r2 = 0;
      for (; r2 < a2.seriesYAxisMap.length && a2.ignoreYAxisIndexes.includes(r2); ) r2++;
      r2 === a2.seriesYAxisMap.length && (r2 = 0);
      let n2, l2 = a2.yAxisScale[r2].result.length - 1;
      return !a2.isBarHorizontal || this.isRangeBar ? (n2 = this.xaxisLabels.length, this.isRangeBar && (l2 = i2.labelData.labels.length, i2.config.xaxis.tickAmount && i2.config.xaxis.labels.formatter && (n2 = i2.config.xaxis.tickAmount), (null == (s2 = null == (e2 = null == (t2 = a2.yAxisScale) ? void 0 : t2[r2]) ? void 0 : e2.result) ? void 0 : s2.length) > 0 && "datetime" !== i2.config.xaxis.type && (n2 = a2.yAxisScale[r2].result.length - 1)), this._drawXYLines({ xCount: n2, tickAmount: l2 })) : (n2 = l2, l2 = a2.xTickAmount, this._drawInvertedXYLines({ xCount: n2, tickAmount: l2 })), this.drawGridBands(n2, l2), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: i2.layout.gridWidth / n2 };
    }
    drawGridBands(t2, e2) {
      var s2, i2, a2;
      const o2 = this.w, r2 = (t3, s3, i3, a3, r3, n2) => {
        for (let l2 = 0, h2 = 0; l2 < s3; l2++, h2++) h2 >= o2.config.grid[t3].colors.length && (h2 = 0), this._drawGridBandRect({ c: h2, x1: i3, y1: a3, x2: r3, y2: n2, type: t3 }), a3 += o2.layout.gridHeight / e2;
      };
      if ((null == (s2 = o2.config.grid.row.colors) ? void 0 : s2.length) > 0 && r2("row", e2, 0, 0, o2.layout.gridWidth, o2.layout.gridHeight / e2), (null == (i2 = o2.config.grid.column.colors) ? void 0 : i2.length) > 0) {
        let e3 = o2.globals.isBarHorizontal || "on" !== o2.config.xaxis.tickPlacement || "category" !== o2.config.xaxis.type && !o2.config.xaxis.convertedCatToNumeric ? t2 : t2 - 1;
        o2.axisFlags.isXNumeric && (e3 = o2.globals.xAxisScale.result.length - 1);
        let s3 = o2.globals.padHorizontal;
        const i3 = 0;
        let r3 = o2.globals.padHorizontal + o2.layout.gridWidth / e3;
        const n2 = o2.layout.gridHeight;
        for (let l2 = 0, h2 = 0; l2 < t2; l2++, h2++) h2 >= o2.config.grid.column.colors.length && (h2 = 0), "datetime" === o2.config.xaxis.type && (s3 = this.xaxisLabels[l2].position, r3 = ((null == (a2 = this.xaxisLabels[l2 + 1]) ? void 0 : a2.position) || o2.layout.gridWidth) - this.xaxisLabels[l2].position), this._drawGridBandRect({ c: h2, x1: s3, y1: i3, x2: r3, y2: n2, type: "column" }), s3 += o2.layout.gridWidth / e3;
      }
    }
  }
  class $ {
    constructor(t2) {
      this.w = t2, this.coreUtils = new I(this.w);
    }
    niceScale(t2, e2, s2 = 0) {
      const i2 = 1e-11, a2 = this.w, o2 = a2.globals;
      let r2, n2, l2, h2;
      o2.isBarHorizontal ? (r2 = a2.config.xaxis, n2 = Math.max((o2.svgWidth - 100) / 25, 2)) : (r2 = a2.config.yaxis[s2], n2 = Math.max((o2.svgHeight - 100) / 15, 2)), b.isNumber(n2) || (n2 = 10), l2 = void 0 !== r2.min && null !== r2.min, h2 = void 0 !== r2.max && null !== r2.min;
      let c2 = void 0 !== r2.stepSize && null !== r2.stepSize, d2 = void 0 !== r2.tickAmount && null !== r2.tickAmount, g2 = d2 ? r2.tickAmount : L[Math.min(Math.round(n2 / 2), L.length - 1)];
      if (o2.isMultipleYAxis && !d2 && o2.multiAxisTickAmount > 0 && (g2 = o2.multiAxisTickAmount, d2 = true), g2 = "dataPoints" === g2 ? o2.dataPoints - 1 : Math.abs(Math.round(g2)), (t2 === Number.MIN_VALUE && 0 === e2 || !b.isNumber(t2) && !b.isNumber(e2) || t2 === Number.MIN_VALUE && e2 === -Number.MAX_VALUE) && (t2 = b.isNumber(r2.min) ? r2.min : 0, e2 = b.isNumber(r2.max) ? r2.max : t2 + g2, o2.allSeriesCollapsed = false), t2 > e2) {
        const s3 = e2;
        e2 = t2, t2 = s3;
      } else t2 === e2 && (t2 = 0 === t2 ? 0 : t2 - 1, e2 = 0 === e2 ? 2 : e2 + 1);
      const p2 = [];
      g2 < 1 && (g2 = 1);
      let x2 = g2, u2 = Math.abs(e2 - t2);
      !l2 && t2 > 0 && t2 / u2 < 0.15 && (t2 = 0, l2 = true), !h2 && e2 < 0 && -e2 / u2 < 0.15 && (e2 = 0, h2 = true), u2 = Math.abs(e2 - t2);
      let f2 = u2 / x2, m2 = f2;
      const y2 = Math.floor(Math.log10(m2)), w2 = Math.pow(10, y2);
      let v2 = Math.ceil(m2 / w2);
      if (v2 = D[0 === o2.yValueDecimal ? 0 : 1][v2], m2 = v2 * w2, f2 = m2, o2.isBarHorizontal && r2.stepSize && "datetime" !== r2.type ? (f2 = r2.stepSize, c2 = true) : c2 && (f2 = r2.stepSize), c2 && r2.forceNiceScale) {
        const t3 = Math.floor(Math.log10(f2));
        f2 *= Math.pow(10, y2 - t3);
      }
      if (l2 && h2) {
        let t3 = u2 / x2;
        if (d2) if (c2) if (0 != b.mod(u2, f2)) {
          const e3 = b.getGCD(f2, t3);
          f2 = t3 / e3 < 10 ? e3 : t3;
        } else 0 == b.mod(f2, t3) ? f2 = t3 : (t3 = f2, d2 = false);
        else f2 = t3;
        else if (c2) 0 == b.mod(u2, f2) ? t3 = f2 : f2 = t3;
        else if (0 == b.mod(u2, f2)) t3 = f2;
        else {
          x2 = Math.ceil(u2 / f2), t3 = u2 / x2;
          const e3 = b.getGCD(u2, f2);
          u2 / e3 < n2 && (t3 = e3), f2 = t3;
        }
        x2 = Math.round(u2 / f2);
      } else {
        if (l2 || h2) {
          if (h2) if (d2) t2 = e2 - f2 * x2;
          else {
            const s3 = t2;
            t2 = f2 * Math.floor(t2 / f2), Math.abs(e2 - t2) / b.getGCD(u2, f2) > n2 && (t2 = e2 - f2 * g2, t2 += f2 * Math.floor((s3 - t2) / f2));
          }
          else if (l2) if (d2) e2 = t2 + f2 * x2;
          else {
            const s3 = e2;
            e2 = f2 * Math.ceil(e2 / f2), Math.abs(e2 - t2) / b.getGCD(u2, f2) > n2 && (e2 = t2 + f2 * g2, e2 += f2 * Math.ceil((s3 - e2) / f2));
          }
        } else if (o2.isMultipleYAxis && d2) {
          const s3 = f2 * Math.floor(t2 / f2);
          let i3 = s3 + f2 * x2;
          i3 < e2 && (f2 *= 2), i3 = e2, e2 = (t2 = s3) + f2 * x2, u2 = Math.abs(e2 - t2), t2 > 0 && t2 < Math.abs(i3 - e2) && (t2 = 0, e2 = f2 * x2), e2 < 0 && -e2 < Math.abs(s3 - t2) && (e2 = 0, t2 = -f2 * x2);
        } else t2 = f2 * Math.floor(t2 / f2), e2 = f2 * Math.ceil(e2 / f2);
        u2 = Math.abs(e2 - t2), f2 = b.getGCD(u2, f2), x2 = Math.round(u2 / f2);
      }
      if (d2 || l2 || h2 || (x2 = Math.ceil((u2 - i2) / (f2 + i2)), x2 > 16 && b.getPrimeFactors(x2).length < 2 && x2++), !d2 && r2.forceNiceScale && 0 === o2.yValueDecimal && x2 > u2 && (x2 = u2, f2 = Math.round(u2 / x2)), x2 > n2 && (!d2 && !c2 || r2.forceNiceScale)) {
        const t3 = b.getPrimeFactors(x2), e3 = t3.length - 1;
        let s3 = x2;
        t: for (var A2 = 0; A2 < e3; A2++) for (var C2 = 0; C2 <= e3 - A2; C2++) {
          const i3 = Math.min(C2 + A2, e3);
          let a3 = s3, o3 = 1;
          for (var S2 = C2; S2 <= i3; S2++) o3 *= t3[S2];
          if (a3 /= o3, a3 < n2) {
            s3 = a3;
            break t;
          }
        }
        f2 = s3 === x2 ? u2 : u2 / s3, x2 = Math.round(u2 / f2);
      }
      o2.isMultipleYAxis && 0 == o2.multiAxisTickAmount && o2.ignoreYAxisIndexes.indexOf(s2) < 0 && (o2.multiAxisTickAmount = x2);
      let k2 = t2 - f2;
      const P2 = f2 * i2;
      do {
        k2 += f2, p2.push(b.stripNumber(k2, 7));
      } while (e2 - k2 > P2);
      return { result: p2, niceMin: p2[0], niceMax: p2[p2.length - 1] };
    }
    linearScale(t2, e2, s2 = 10, i2 = 0, a2 = void 0) {
      const o2 = Math.abs(e2 - t2);
      let r2 = [];
      if (t2 === e2) return r2 = [t2], { result: r2, niceMin: r2[0], niceMax: r2[r2.length - 1] };
      "dataPoints" === (s2 = this._adjustTicksForSmallRange(s2, i2, o2)) && (s2 = this.w.globals.dataPoints - 1), a2 || (a2 = o2 / s2);
      if (0 !== a2 && isFinite(a2)) {
        const t3 = Math.floor(Math.log10(Math.abs(a2))), e3 = Math.max(2, 2 - t3), s3 = Math.pow(10, e3);
        a2 = Math.round((a2 + Number.EPSILON) * s3) / s3;
      }
      s2 === Number.MAX_VALUE && (s2 = 5, a2 = 1);
      let n2 = t2;
      for (; s2 >= 0; ) r2.push(n2), n2 = b.preciseAddition(n2, a2), s2 -= 1;
      return { result: r2, niceMin: r2[0], niceMax: r2[r2.length - 1] };
    }
    logarithmicScaleNice(t2, e2, s2) {
      e2 <= 0 && (e2 = Math.max(t2, s2)), t2 <= 0 && (t2 = Math.min(e2, s2));
      const i2 = [], a2 = Math.ceil(Math.log(e2) / Math.log(s2) + 1);
      for (let e3 = Math.floor(Math.log(t2) / Math.log(s2)); e3 < a2; e3++) i2.push(Math.pow(s2, e3));
      return { result: i2, niceMin: i2[0], niceMax: i2[i2.length - 1] };
    }
    logarithmicScale(t2, e2, s2) {
      e2 <= 0 && (e2 = Math.max(t2, s2)), t2 <= 0 && (t2 = Math.min(e2, s2));
      const i2 = [], a2 = Math.log(e2) / Math.log(s2), o2 = Math.log(t2) / Math.log(s2), r2 = a2 - o2, n2 = Math.round(r2), l2 = r2 / n2;
      for (let t3 = 0, e3 = o2; t3 < n2; t3++, e3 += l2) i2.push(Math.pow(s2, e3));
      return i2.push(Math.pow(s2, a2)), { result: i2, niceMin: t2, niceMax: e2 };
    }
    _adjustTicksForSmallRange(t2, e2, s2) {
      let i2 = t2;
      if (void 0 !== e2 && this.w.config.yaxis[e2].labels.formatter && void 0 === this.w.config.yaxis[e2].tickAmount) {
        const t3 = Number(this.w.config.yaxis[e2].labels.formatter(1));
        b.isNumber(t3) && 0 === this.w.globals.yValueDecimal && (i2 = Math.ceil(s2));
      }
      return i2 < t2 ? i2 : t2;
    }
    setYScaleForIndex(t2, e2, s2) {
      const i2 = this.w.globals, a2 = this.w.config, o2 = i2.isBarHorizontal ? a2.xaxis : a2.yaxis[t2];
      void 0 === i2.yAxisScale[t2] && (i2.yAxisScale[t2] = []);
      const r2 = Math.abs(s2 - e2);
      o2.logarithmic && r2 <= 5 && (i2.invalidLogScale = true), o2.logarithmic && r2 > 5 ? (i2.allSeriesCollapsed = false, i2.yAxisScale[t2] = o2.forceNiceScale ? this.logarithmicScaleNice(e2, s2, o2.logBase) : this.logarithmicScale(e2, s2, o2.logBase)) : s2 !== -Number.MAX_VALUE && b.isNumber(s2) && e2 !== Number.MAX_VALUE && b.isNumber(e2) ? (i2.allSeriesCollapsed = false, i2.yAxisScale[t2] = this.niceScale(e2, s2, t2)) : i2.yAxisScale[t2] = this.niceScale(Number.MIN_VALUE, 0, t2);
    }
    setXScale(t2, e2) {
      const s2 = this.w, i2 = s2.globals;
      if (e2 !== -Number.MAX_VALUE && b.isNumber(e2)) {
        const a2 = i2.xTickAmount;
        i2.xAxisScale = this.linearScale(t2, e2, a2, 0, void 0 === s2.config.xaxis.max ? s2.config.xaxis.stepSize : void 0);
      } else i2.xAxisScale = this.linearScale(0, 10, 10);
      return i2.xAxisScale;
    }
    scaleMultipleYAxes() {
      const t2 = this.w.config, e2 = this.w.globals;
      this.coreUtils.setSeriesYAxisMappings();
      const s2 = e2.seriesYAxisMap, i2 = e2.minYArr, a2 = e2.maxYArr;
      e2.allSeriesCollapsed = true, e2.barGroups = [], s2.forEach((s3, o2) => {
        const r2 = [];
        if (s3.forEach((e3) => {
          var s4;
          const i3 = null == (s4 = t2.series[e3]) ? void 0 : s4.group;
          r2.indexOf(i3) < 0 && r2.push(i3);
        }), s3.length > 0) {
          let n2, l2, h2 = Number.MAX_VALUE, c2 = -Number.MAX_VALUE, d2 = h2, g2 = c2;
          if (t2.chart.stacked) {
            const i3 = new Array(e2.dataPoints).fill(0), a3 = [], p2 = [], x2 = [];
            r2.forEach(() => {
              a3.push(i3.map(() => Number.MIN_VALUE)), p2.push(i3.map(() => Number.MIN_VALUE)), x2.push(i3.map(() => Number.MIN_VALUE));
            });
            for (let i4 = 0; i4 < s3.length; i4++) {
              !n2 && t2.series[s3[i4]].type && (n2 = t2.series[s3[i4]].type);
              const h3 = s3[i4];
              l2 = t2.series[h3].group ? t2.series[h3].group : "axis-".concat(o2);
              !(e2.collapsedSeriesIndices.indexOf(h3) < 0 && e2.ancillaryCollapsedSeriesIndices.indexOf(h3) < 0) || (e2.allSeriesCollapsed = false, r2.forEach((e3, s4) => {
                if (t2.series[h3].group === e3) for (let t3 = 0; t3 < this.w.seriesData.series[h3].length; t3++) {
                  const e4 = this.w.seriesData.series[h3][t3];
                  e4 >= 0 ? p2[s4][t3] += e4 : x2[s4][t3] += e4, a3[s4][t3] += e4, d2 = Math.min(d2, e4), g2 = Math.max(g2, e4);
                }
              })), "bar" !== n2 && "column" !== n2 || e2.barGroups.push(l2);
            }
            n2 || (n2 = t2.chart.type), "bar" === n2 || "column" === n2 ? r2.forEach((t3, e3) => {
              h2 = Math.min(h2, Math.min.apply(null, x2[e3])), c2 = Math.max(c2, Math.max.apply(null, p2[e3]));
            }) : (r2.forEach((t3, e3) => {
              d2 = Math.min(d2, Math.min.apply(null, a3[e3])), g2 = Math.max(g2, Math.max.apply(null, a3[e3]));
            }), h2 = d2, c2 = g2), h2 === Number.MIN_VALUE && c2 === Number.MIN_VALUE && (c2 = -Number.MAX_VALUE);
          } else for (let t3 = 0; t3 < s3.length; t3++) {
            const o3 = s3[t3];
            h2 = Math.min(h2, i2[o3]), c2 = Math.max(c2, a2[o3]);
            !(e2.collapsedSeriesIndices.indexOf(o3) < 0 && e2.ancillaryCollapsedSeriesIndices.indexOf(o3) < 0) || (e2.allSeriesCollapsed = false);
          }
          void 0 !== t2.yaxis[o2].min && (h2 = "function" == typeof t2.yaxis[o2].min ? t2.yaxis[o2].min(h2) : t2.yaxis[o2].min), void 0 !== t2.yaxis[o2].max && (c2 = "function" == typeof t2.yaxis[o2].max ? t2.yaxis[o2].max(c2) : t2.yaxis[o2].max), e2.barGroups = e2.barGroups.filter((t3, e3, s4) => s4.indexOf(t3) === e3), this.setYScaleForIndex(o2, h2, c2), s3.forEach((t3) => {
            i2[t3] = e2.yAxisScale[o2].niceMin, a2[t3] = e2.yAxisScale[o2].niceMax;
          });
        } else this.setYScaleForIndex(o2, 0, -Number.MAX_VALUE);
      });
    }
  }
  class j {
    constructor(t2) {
      this.w = t2, this.scales = new $(this.w);
    }
    init() {
      this.setYRange(), this.setXRange(), this.setZRange();
    }
    getMinYMaxY(t2, e2 = Number.MAX_VALUE, s2 = -Number.MAX_VALUE, i2 = null) {
      var a2, o2, r2, n2, l2;
      const h2 = this.w.config, c2 = this.w.globals;
      let d2 = -Number.MAX_VALUE, g2 = Number.MIN_VALUE;
      null === i2 && (i2 = t2 + 1);
      const p2 = this.w.seriesData.series;
      let x2 = p2, u2 = p2;
      "candlestick" === h2.chart.type ? (x2 = this.w.candleData.seriesCandleL, u2 = this.w.candleData.seriesCandleH) : "boxPlot" === h2.chart.type ? (x2 = this.w.candleData.seriesCandleO, u2 = this.w.candleData.seriesCandleC) : this.w.axisFlags.isRangeData && (x2 = this.w.rangeData.seriesRangeStart, u2 = this.w.rangeData.seriesRangeEnd);
      let f2 = false;
      if (this.w.seriesData.seriesX.length >= i2) {
        const t3 = null == (a2 = c2.brushSource) ? void 0 : a2.w.config.chart.brush;
        (h2.chart.zoom.enabled && h2.chart.zoom.autoScaleYaxis || (null == t3 ? void 0 : t3.enabled) && (null == t3 ? void 0 : t3.autoScaleYaxis)) && (f2 = true);
      }
      for (let a3 = t2; a3 < i2; a3++) {
        c2.dataPoints = Math.max(c2.dataPoints, p2[a3].length);
        const t3 = h2.series[a3].type;
        this.w.labelData.categoryLabels.length && (c2.dataPoints = this.w.labelData.categoryLabels.filter((t4) => void 0 !== t4).length), this.w.labelData.labels.length && "datetime" !== h2.xaxis.type && 0 !== this.w.seriesData.series.reduce((t4, e3) => t4 + e3.length, 0) && (c2.dataPoints = Math.max(c2.dataPoints, this.w.labelData.labels.length));
        let i3 = 0, m2 = p2[a3].length - 1;
        if (f2) {
          if (h2.xaxis.min) for (; i3 < m2 && this.w.seriesData.seriesX[a3][i3] < h2.xaxis.min; i3++) ;
          if (h2.xaxis.max) for (; m2 > i3 && this.w.seriesData.seriesX[a3][m2] > h2.xaxis.max; m2--) ;
        }
        for (let h3 = i3; h3 <= m2 && h3 < this.w.seriesData.series[a3].length; h3++) {
          let i4 = p2[a3][h3];
          if (null !== i4 && b.isNumber(i4)) {
            switch (void 0 !== (null == (o2 = u2[a3]) ? void 0 : o2[h3]) && (d2 = Math.max(d2, u2[a3][h3]), e2 = Math.min(e2, u2[a3][h3])), void 0 !== (null == (r2 = x2[a3]) ? void 0 : r2[h3]) && (e2 = Math.min(e2, x2[a3][h3]), s2 = Math.max(s2, x2[a3][h3])), t3) {
              case "candlestick":
                void 0 !== this.w.candleData.seriesCandleC[a3][h3] && (d2 = Math.max(d2, this.w.candleData.seriesCandleH[a3][h3]), e2 = Math.min(e2, this.w.candleData.seriesCandleL[a3][h3]));
                break;
              case "boxPlot":
                void 0 !== this.w.candleData.seriesCandleC[a3][h3] && (d2 = Math.max(d2, this.w.candleData.seriesCandleC[a3][h3]), e2 = Math.min(e2, this.w.candleData.seriesCandleO[a3][h3]));
            }
            t3 && "candlestick" !== t3 && "boxPlot" !== t3 && "rangeArea" !== t3 && "rangeBar" !== t3 && (d2 = Math.max(d2, this.w.seriesData.series[a3][h3]), e2 = Math.min(e2, this.w.seriesData.series[a3][h3])), this.w.seriesData.seriesGoals[a3] && this.w.seriesData.seriesGoals[a3][h3] && Array.isArray(this.w.seriesData.seriesGoals[a3][h3]) && this.w.seriesData.seriesGoals[a3][h3].forEach((t4) => {
              d2 = Math.max(d2, t4.value), e2 = Math.min(e2, t4.value);
            }), s2 = d2, i4 = b.noExponents(i4), b.isFloat(i4) && (c2.yValueDecimal = Math.max(c2.yValueDecimal, i4.toString().split(".")[1].length)), g2 > (null == (n2 = x2[a3]) ? void 0 : n2[h3]) && (null == (l2 = x2[a3]) ? void 0 : l2[h3]) < 0 && (g2 = x2[a3][h3]);
          } else c2.hasNullValues = true;
        }
        "bar" !== t3 && "column" !== t3 || (g2 < 0 && d2 < 0 && (d2 = 0, s2 = Math.max(s2, 0)), g2 === Number.MIN_VALUE && (g2 = 0, e2 = Math.min(e2, 0)));
      }
      return "rangeBar" === h2.chart.type && this.w.rangeData.seriesRangeStart.length && c2.isBarHorizontal && (g2 = e2), "bar" === h2.chart.type && (g2 < 0 && d2 < 0 && (d2 = 0), g2 === Number.MIN_VALUE && (g2 = 0)), { minY: g2, maxY: d2, lowestY: e2, highestY: s2 };
    }
    setYRange() {
      const t2 = this.w.globals, e2 = this.w.config;
      t2.maxY = -Number.MAX_VALUE, t2.minY = Number.MIN_VALUE;
      let s2, i2 = Number.MAX_VALUE;
      if (t2.isMultipleYAxis) {
        i2 = Number.MAX_VALUE;
        for (let e3 = 0; e3 < this.w.seriesData.series.length; e3++) s2 = this.getMinYMaxY(e3), t2.minYArr[e3] = s2.lowestY, t2.maxYArr[e3] = s2.highestY, i2 = Math.min(i2, s2.lowestY);
      }
      if (s2 = this.getMinYMaxY(0, i2, null, this.w.seriesData.series.length), "bar" === e2.chart.type ? (t2.minY = s2.minY, t2.maxY = s2.maxY) : (t2.minY = s2.lowestY, t2.maxY = s2.highestY), i2 = s2.lowestY, e2.chart.stacked && this._setStackedMinMax(), "line" === e2.chart.type || "area" === e2.chart.type || "scatter" === e2.chart.type || "candlestick" === e2.chart.type || "boxPlot" === e2.chart.type || "rangeBar" === e2.chart.type && !t2.isBarHorizontal ? t2.minY === Number.MIN_VALUE && i2 !== -Number.MAX_VALUE && i2 !== t2.maxY && (t2.minY = i2) : t2.minY = t2.minY !== Number.MIN_VALUE ? Math.min(s2.minY, t2.minY) : s2.minY, e2.yaxis.forEach((e3, s3) => {
        void 0 !== e3.max && ("number" == typeof e3.max ? t2.maxYArr[s3] = e3.max : "function" == typeof e3.max && (t2.maxYArr[s3] = e3.max(t2.isMultipleYAxis ? t2.maxYArr[s3] : t2.maxY)), t2.maxY = t2.maxYArr[s3]), void 0 !== e3.min && ("number" == typeof e3.min ? t2.minYArr[s3] = e3.min : "function" == typeof e3.min && (t2.minYArr[s3] = e3.min(t2.isMultipleYAxis ? t2.minYArr[s3] === Number.MIN_VALUE ? 0 : t2.minYArr[s3] : t2.minY)), t2.minY = t2.minYArr[s3]);
      }), t2.isBarHorizontal) {
        ["min", "max"].forEach((s3) => {
          void 0 !== e2.xaxis[s3] && "number" == typeof e2.xaxis[s3] && ("min" === s3 ? t2.minY = e2.xaxis[s3] : t2.maxY = e2.xaxis[s3]);
        });
      }
      return t2.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), t2.minY = i2) : (this.scales.setYScaleForIndex(0, t2.minY, t2.maxY), t2.minY = t2.yAxisScale[0].niceMin, t2.maxY = t2.yAxisScale[0].niceMax, t2.minYArr[0] = t2.minY, t2.maxYArr[0] = t2.maxY), t2.barGroups = [], t2.lineGroups = [], t2.areaGroups = [], e2.series.forEach((s3) => {
        switch (s3.type || e2.chart.type) {
          case "bar":
          case "column":
            t2.barGroups.push(s3.group);
            break;
          case "line":
            t2.lineGroups.push(s3.group);
            break;
          case "area":
            t2.areaGroups.push(s3.group);
        }
      }), t2.barGroups = t2.barGroups.filter((t3, e3, s3) => s3.indexOf(t3) === e3), t2.lineGroups = t2.lineGroups.filter((t3, e3, s3) => s3.indexOf(t3) === e3), t2.areaGroups = t2.areaGroups.filter((t3, e3, s3) => s3.indexOf(t3) === e3), { minY: t2.minY, maxY: t2.maxY, minYArr: t2.minYArr, maxYArr: t2.maxYArr, yAxisScale: t2.yAxisScale };
    }
    setXRange() {
      const t2 = this.w.globals, e2 = this.w.config, s2 = "numeric" === e2.xaxis.type || "datetime" === e2.xaxis.type || "category" === e2.xaxis.type && !this.w.axisFlags.noLabelsProvided || this.w.axisFlags.noLabelsProvided || this.w.axisFlags.isXNumeric, i2 = () => {
        for (let e3 = 0; e3 < this.w.seriesData.series.length; e3++) if (this.w.labelData.labels[e3]) for (let s3 = 0; s3 < this.w.labelData.labels[e3].length; s3++) null !== this.w.labelData.labels[e3][s3] && b.isNumber(this.w.labelData.labels[e3][s3]) && (t2.maxX = Math.max(t2.maxX, this.w.labelData.labels[e3][s3]), t2.initialMaxX = Math.max(t2.maxX, this.w.labelData.labels[e3][s3]), t2.minX = Math.min(t2.minX, this.w.labelData.labels[e3][s3]), t2.initialMinX = Math.min(t2.minX, this.w.labelData.labels[e3][s3]));
      };
      if (this.w.axisFlags.isXNumeric && i2(), this.w.axisFlags.noLabelsProvided && 0 === e2.xaxis.categories.length && (t2.maxX = this.w.labelData.labels[this.w.labelData.labels.length - 1], t2.initialMaxX = this.w.labelData.labels[this.w.labelData.labels.length - 1], t2.minX = 1, t2.initialMinX = 1), this.w.axisFlags.isXNumeric || this.w.axisFlags.noLabelsProvided || this.w.axisFlags.dataFormatXNumeric) {
        let i3 = 10;
        if (void 0 === e2.xaxis.tickAmount) i3 = Math.round(t2.svgWidth / 150), "numeric" === e2.xaxis.type && t2.dataPoints < 30 && (i3 = t2.dataPoints - 1), i3 > t2.dataPoints && 0 !== t2.dataPoints && (i3 = t2.dataPoints - 1);
        else if ("dataPoints" === e2.xaxis.tickAmount) {
          if (this.w.seriesData.series.length > 1 && (i3 = this.w.seriesData.series[t2.maxValsInArrayIndex].length - 1), this.w.axisFlags.isXNumeric) {
            const e3 = Math.round(t2.maxX - t2.minX);
            e3 < 30 && (i3 = e3);
          }
        } else i3 = e2.xaxis.tickAmount;
        if (t2.xTickAmount = i3, void 0 !== e2.xaxis.max && "number" == typeof e2.xaxis.max && (t2.maxX = e2.xaxis.max), void 0 !== e2.xaxis.min && "number" == typeof e2.xaxis.min && (t2.minX = e2.xaxis.min), void 0 !== e2.xaxis.range && (t2.minX = t2.maxX - e2.xaxis.range), t2.minX !== Number.MAX_VALUE && t2.maxX !== -Number.MAX_VALUE) if (e2.xaxis.convertedCatToNumeric && !this.w.axisFlags.dataFormatXNumeric) {
          const e3 = [];
          for (let s3 = t2.minX - 1; s3 < t2.maxX; s3++) e3.push(s3 + 1);
          t2.xAxisScale = { result: e3, niceMin: e3[0], niceMax: e3[e3.length - 1] };
        } else t2.xAxisScale = this.scales.setXScale(t2.minX, t2.maxX);
        else t2.xAxisScale = this.scales.linearScale(0, i3, i3, 0, e2.xaxis.stepSize), this.w.axisFlags.noLabelsProvided && this.w.labelData.labels.length > 0 && (t2.xAxisScale = this.scales.linearScale(1, this.w.labelData.labels.length, i3 - 1, 0, e2.xaxis.stepSize), this.w.seriesData.seriesX = this.w.labelData.labels.slice());
        s2 && (this.w.labelData.labels = t2.xAxisScale.result.slice());
      }
      return t2.isBarHorizontal && this.w.labelData.labels.length && (t2.xTickAmount = this.w.labelData.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t2.minX, maxX: t2.maxX };
    }
    setZRange() {
      const t2 = this.w.globals;
      if (this.w.axisFlags.isDataXYZ) {
        for (let e2 = 0; e2 < this.w.seriesData.series.length; e2++) if (void 0 !== this.w.seriesData.seriesZ[e2]) for (let s2 = 0; s2 < this.w.seriesData.seriesZ[e2].length; s2++) null !== this.w.seriesData.seriesZ[e2][s2] && b.isNumber(this.w.seriesData.seriesZ[e2][s2]) && (t2.maxZ = Math.max(t2.maxZ, this.w.seriesData.seriesZ[e2][s2]), t2.minZ = Math.min(t2.minZ, this.w.seriesData.seriesZ[e2][s2]));
      }
    }
    _handleSingleDataPoint() {
      const t2 = this.w.globals, e2 = this.w.config;
      if (t2.minX === t2.maxX) {
        const s2 = new m(this.w);
        if ("datetime" === e2.xaxis.type) {
          const i2 = s2.getDate(t2.minX);
          e2.xaxis.labels.datetimeUTC ? i2.setUTCDate(i2.getUTCDate() - 2) : i2.setDate(i2.getDate() - 2), t2.minX = new Date(i2).getTime();
          const a2 = s2.getDate(t2.maxX);
          e2.xaxis.labels.datetimeUTC ? a2.setUTCDate(a2.getUTCDate() + 2) : a2.setDate(a2.getDate() + 2), t2.maxX = new Date(a2).getTime();
        } else ("numeric" === e2.xaxis.type || "category" === e2.xaxis.type && !this.w.axisFlags.noLabelsProvided) && (t2.minX = t2.minX - 2, t2.initialMinX = t2.minX, t2.maxX = t2.maxX + 2, t2.initialMaxX = t2.maxX);
      }
    }
    _getMinXDiff() {
      const t2 = this.w.globals;
      this.w.axisFlags.isXNumeric && this.w.seriesData.seriesX.forEach((e2) => {
        if (e2.length) {
          1 === e2.length && e2.push(this.w.seriesData.seriesX[t2.maxValsInArrayIndex][this.w.seriesData.seriesX[t2.maxValsInArrayIndex].length - 1]);
          const s2 = e2.slice();
          s2.sort((t3, e3) => t3 - e3), s2.forEach((e3, i2) => {
            if (i2 > 0) {
              const a2 = e3 - s2[i2 - 1];
              a2 > 0 && (t2.minXDiff = Math.min(a2, t2.minXDiff));
            }
          }), 1 !== t2.dataPoints && t2.minXDiff !== Number.MAX_VALUE || (t2.minXDiff = 0.5);
        }
      });
    }
    _setStackedMinMax() {
      const t2 = this.w.globals;
      if (!this.w.seriesData.series.length) return;
      let e2 = this.w.labelData.seriesGroups;
      e2.length || (e2 = [this.w.seriesData.seriesNames.map((t3) => t3)]);
      const s2 = {}, i2 = {};
      e2.forEach((e3) => {
        s2[e3] = [], i2[e3] = [];
        this.w.config.series.map((t3, s3) => e3.indexOf(this.w.seriesData.seriesNames[s3]) > -1 ? s3 : null).filter((t3) => null !== t3).forEach((a2) => {
          var o2, r2, n2, l2;
          for (let h2 = 0; h2 < this.w.seriesData.series[t2.maxValsInArrayIndex].length; h2++) {
            void 0 === s2[e3][h2] && (s2[e3][h2] = 0, i2[e3][h2] = 0);
            (this.w.config.chart.stacked && !t2.comboCharts || this.w.config.chart.stacked && t2.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null == (r2 = null == (o2 = this.w.config.series) ? void 0 : o2[a2]) ? void 0 : r2.type) || "column" === (null == (l2 = null == (n2 = this.w.config.series) ? void 0 : n2[a2]) ? void 0 : l2.type))) && null !== this.w.seriesData.series[a2][h2] && b.isNumber(this.w.seriesData.series[a2][h2]) && (this.w.seriesData.series[a2][h2] > 0 ? s2[e3][h2] += parseFloat(this.w.seriesData.series[a2][h2]) + 1e-4 : i2[e3][h2] += parseFloat(this.w.seriesData.series[a2][h2]));
          }
        });
      }), Object.entries(s2).forEach(([e3]) => {
        s2[e3].forEach((a2, o2) => {
          t2.maxY = Math.max(t2.maxY, s2[e3][o2]), t2.minY = Math.min(t2.minY, i2[e3][o2]);
        });
      });
    }
  }
  class V {
    constructor(t2, { theme: e2 = null, timeScale: s2 = null } = {}, i2) {
      this.w = t2, this.elgrid = i2, this.xaxisFontSize = t2.config.xaxis.labels.style.fontSize, this.axisFontFamily = t2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = t2.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === t2.config.chart.type && t2.config.plotOptions.bar.horizontal, this.xAxisoffX = "bottom" === t2.config.xaxis.position ? t2.layout.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new W(t2, { theme: e2, timeScale: s2 });
    }
    drawYaxis(t2) {
      const e2 = this.w, s2 = new X(this.w), i2 = e2.config.yaxis[t2].labels.style, { fontSize: a2, fontFamily: o2, fontWeight: r2 } = i2, n2 = s2.group({ class: "apexcharts-yaxis", rel: t2, transform: `translate(${e2.globals.translateYAxisX[t2]}, 0)` });
      if (this.axesUtils.isYAxisHidden(t2)) return n2;
      const l2 = s2.group({ class: "apexcharts-yaxis-texts-g" });
      n2.add(l2);
      const h2 = e2.globals.yAxisScale[t2].result.length - 1, c2 = e2.layout.gridHeight / h2, d2 = e2.formatters.yLabelFormatters[t2], g2 = this.axesUtils.checkForReversedLabels(t2, e2.globals.yAxisScale[t2].result.slice());
      if (e2.config.yaxis[t2].labels.show) {
        let n3 = e2.layout.translateY + e2.config.yaxis[t2].labels.offsetY;
        e2.globals.isBarHorizontal ? n3 = 0 : "heatmap" === e2.config.chart.type && (n3 -= c2 / 2), n3 += parseInt(a2, 10) / 3;
        let p2 = null;
        for (let x2 = h2; x2 >= 0; x2--) {
          const h3 = d2(g2[x2], x2, e2);
          let u2 = e2.config.yaxis[t2].labels.padding;
          e2.config.yaxis[t2].opposite && 0 !== e2.config.yaxis.length && (u2 *= -1);
          const f2 = this.getTextAnchor(e2.config.yaxis[t2].labels.align, e2.config.yaxis[t2].opposite), b2 = this.axesUtils.getYAxisForeColor(i2.colors, t2), m2 = Array.isArray(b2) ? b2[x2] : b2, y2 = Array.from(e2.dom.baseEl.querySelectorAll(`.apexcharts-yaxis[rel='${t2}'] .apexcharts-yaxis-label tspan`)).map((t3) => t3.textContent), w2 = s2.drawText({ x: u2, y: n3, text: y2.includes(h3) && !e2.config.yaxis[t2].labels.showDuplicates ? "" : h3, textAnchor: f2, fontSize: a2, fontFamily: o2, fontWeight: r2, maxWidth: e2.config.yaxis[t2].labels.maxWidth, foreColor: m2, isPlainText: false, cssClass: `apexcharts-yaxis-label ${i2.cssClass}` });
          l2.add(w2), this.addTooltip(w2, h3), null === p2 && (p2 = w2), 0 !== e2.config.yaxis[t2].labels.rotate && this.rotateLabel(s2, w2, p2, e2.config.yaxis[t2].labels.rotate), n3 += c2;
        }
      }
      return this.addYAxisTitle(s2, n2, t2), this.addAxisBorder(s2, n2, t2, h2, c2), n2;
    }
    getTextAnchor(t2, e2) {
      return "left" === t2 ? "start" : "center" === t2 ? "middle" : "right" === t2 ? "end" : e2 ? "start" : "end";
    }
    addTooltip(t2, e2) {
      const s2 = f.createElementNS(T, "title");
      s2.textContent = Array.isArray(e2) ? e2.join(" ") : e2, t2.node.appendChild(s2);
    }
    rotateLabel(t2, e2, s2, i2) {
      const a2 = t2.rotateAroundCenter(s2.node), o2 = t2.rotateAroundCenter(e2.node);
      e2.node.setAttribute("transform", `rotate(${i2} ${a2.x} ${o2.y})`);
    }
    addYAxisTitle(t2, e2, s2) {
      const i2 = this.w;
      if (void 0 !== i2.config.yaxis[s2].title.text) {
        const a2 = t2.group({ class: "apexcharts-yaxis-title" }), o2 = i2.config.yaxis[s2].opposite ? i2.globals.translateYAxisX[s2] : 0, r2 = t2.drawText({ x: o2, y: i2.layout.gridHeight / 2 + i2.layout.translateY + i2.config.yaxis[s2].title.offsetY, text: i2.config.yaxis[s2].title.text, textAnchor: "end", foreColor: i2.config.yaxis[s2].title.style.color, fontSize: i2.config.yaxis[s2].title.style.fontSize, fontWeight: i2.config.yaxis[s2].title.style.fontWeight, fontFamily: i2.config.yaxis[s2].title.style.fontFamily, cssClass: `apexcharts-yaxis-title-text ${i2.config.yaxis[s2].title.style.cssClass}` });
        a2.add(r2), e2.add(a2);
      }
    }
    addAxisBorder(t2, e2, s2, i2, a2) {
      const o2 = this.w, r2 = o2.config.yaxis[s2].axisBorder;
      let n2 = 31 + r2.offsetX;
      if (o2.config.yaxis[s2].opposite && (n2 = -31 - r2.offsetX), r2.show) {
        const s3 = t2.drawLine(n2, o2.layout.translateY + r2.offsetY - 2, n2, o2.layout.gridHeight + o2.layout.translateY + r2.offsetY + 2, r2.color, 0, r2.width);
        e2.add(s3);
      }
      o2.config.yaxis[s2].axisTicks.show && this.axesUtils.drawYAxisTicks(n2, i2, r2, o2.config.yaxis[s2].axisTicks, s2, a2, e2);
    }
    drawYaxisInversed(t2) {
      const e2 = this.w, s2 = new X(this.w), i2 = s2.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), a2 = s2.group({ class: "apexcharts-xaxis-texts-g", transform: `translate(${e2.layout.translateXAxisX}, ${e2.layout.translateXAxisY})` });
      i2.add(a2);
      let o2 = e2.globals.yAxisScale[t2].result.length - 1;
      const r2 = e2.layout.gridWidth / o2 + 0.1;
      let n2 = r2 + e2.config.xaxis.labels.offsetX;
      const l2 = e2.formatters.xLabelFormatter;
      let h2 = this.axesUtils.checkForReversedLabels(t2, e2.globals.yAxisScale[t2].result.slice());
      const c2 = e2.labelData.timescaleLabels;
      if (c2.length > 0 && (this.xaxisLabels = c2.slice(), h2 = c2.slice(), o2 = h2.length), e2.config.xaxis.labels.show) for (let i3 = c2.length ? 0 : o2; c2.length ? i3 < c2.length : i3 >= 0; c2.length ? i3++ : i3--) {
        let o3 = l2(h2[i3], i3, e2), d2 = e2.layout.gridWidth + e2.globals.padHorizontal - (n2 - r2 + e2.config.xaxis.labels.offsetX);
        if (c2.length) {
          const t3 = this.axesUtils.getLabel(h2, c2, d2, i3, this.drawnLabels, this.xaxisFontSize);
          d2 = t3.x, o3 = t3.text, this.drawnLabels.push(t3.text), 0 === i3 && e2.globals.skipFirstTimelinelabel && (o3 = ""), i3 === h2.length - 1 && e2.globals.skipLastTimelinelabel && (o3 = "");
        }
        const g2 = s2.drawText({ x: d2, y: this.xAxisoffX + e2.config.xaxis.labels.offsetY + 30 - ("top" === e2.config.xaxis.position ? e2.layout.xAxisHeight + e2.config.xaxis.axisTicks.height - 2 : 0), text: o3, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t2] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: e2.config.xaxis.labels.style.fontWeight, isPlainText: false, cssClass: `apexcharts-xaxis-label ${e2.config.xaxis.labels.style.cssClass}` });
        a2.add(g2), this.addTooltip(g2, o3), n2 += r2;
      }
      return this.inversedYAxisTitleText(i2), this.inversedYAxisBorder(i2), i2;
    }
    inversedYAxisBorder(t2) {
      const e2 = this.w, s2 = new X(this.w), i2 = e2.config.xaxis.axisBorder;
      if (i2.show) {
        let a2 = 0;
        "bar" === e2.config.chart.type && e2.axisFlags.isXNumeric && (a2 -= 15);
        const o2 = s2.drawLine(e2.globals.padHorizontal + a2 + i2.offsetX, this.xAxisoffX, e2.layout.gridWidth, this.xAxisoffX, i2.color, 0, i2.height);
        this.elgrid && this.elgrid.elGridBorders && e2.config.grid.show ? this.elgrid.elGridBorders.add(o2) : t2.add(o2);
      }
    }
    inversedYAxisTitleText(t2) {
      const e2 = this.w, s2 = new X(this.w);
      if (void 0 !== e2.config.xaxis.title.text) {
        const i2 = s2.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), a2 = s2.drawText({ x: e2.layout.gridWidth / 2 + e2.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e2.config.xaxis.title.style.fontSize) + e2.config.xaxis.title.offsetY + 20, text: e2.config.xaxis.title.text, textAnchor: "middle", fontSize: e2.config.xaxis.title.style.fontSize, fontFamily: e2.config.xaxis.title.style.fontFamily, fontWeight: e2.config.xaxis.title.style.fontWeight, foreColor: e2.config.xaxis.title.style.color, cssClass: `apexcharts-xaxis-title-text ${e2.config.xaxis.title.style.cssClass}` });
        i2.add(a2), t2.add(i2);
      }
    }
    yAxisTitleRotate(t2, e2) {
      const s2 = this.w, i2 = new X(this.w), a2 = s2.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${t2}'] .apexcharts-yaxis-texts-g`), o2 = a2 ? a2.getBoundingClientRect() : { width: 0, height: 0 }, r2 = s2.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${t2}'] .apexcharts-yaxis-title text`), n2 = r2 ? r2.getBoundingClientRect() : { width: 0, height: 0 };
      if (r2) {
        const a3 = this.xPaddingForYAxisTitle(t2, o2, n2, e2);
        r2.setAttribute("x", a3.xPos - (e2 ? 10 : 0));
        const l2 = i2.rotateAroundCenter(r2);
        r2.setAttribute("transform", `rotate(${e2 ? -1 * s2.config.yaxis[t2].title.rotate : s2.config.yaxis[t2].title.rotate} ${l2.x} ${l2.y})`);
      }
    }
    xPaddingForYAxisTitle(t2, e2, s2, i2) {
      const a2 = this.w;
      let o2 = 0, r2 = 10;
      return void 0 === a2.config.yaxis[t2].title.text || t2 < 0 ? { xPos: o2, padd: 0 } : (i2 ? o2 = e2.width + a2.config.yaxis[t2].title.offsetX + s2.width / 2 + r2 / 2 : (o2 = -1 * e2.width + a2.config.yaxis[t2].title.offsetX + r2 / 2 + s2.width / 2, a2.globals.isBarHorizontal && (r2 = 25, o2 = -1 * e2.width - a2.config.yaxis[t2].title.offsetX - r2)), { xPos: o2, padd: r2 });
    }
    setYAxisXPosition(t2, e2) {
      const s2 = this.w;
      let i2 = 0, a2 = 0, o2 = 18, r2 = 1;
      s2.config.yaxis.length > 1 && (this.multipleYs = true), s2.config.yaxis.forEach((n2, l2) => {
        const h2 = s2.globals.ignoreYAxisIndexes.includes(l2) || !n2.show || n2.floating || 0 === t2[l2].width, c2 = t2[l2].width + e2[l2].width;
        n2.opposite ? s2.globals.isBarHorizontal ? (a2 = s2.layout.gridWidth + s2.layout.translateX - 1, s2.globals.translateYAxisX[l2] = a2 - n2.labels.offsetX) : (a2 = s2.layout.gridWidth + s2.layout.translateX + r2, h2 || (r2 += c2 + 20), s2.globals.translateYAxisX[l2] = a2 - n2.labels.offsetX + 20) : (i2 = s2.layout.translateX - o2, h2 || (o2 += c2 + 20), s2.globals.translateYAxisX[l2] = i2 + n2.labels.offsetX);
      });
    }
    setYAxisTextAlignments() {
      const t2 = this.w;
      Array.from(t2.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach((e2, s2) => {
        const i2 = t2.config.yaxis[s2];
        if (i2 && !i2.floating && void 0 !== i2.labels.align) {
          const e3 = t2.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${s2}'] .apexcharts-yaxis-texts-g`), a2 = Array.from(t2.dom.baseEl.querySelectorAll(`.apexcharts-yaxis[rel='${s2}'] .apexcharts-yaxis-label`)), o2 = e3.getBoundingClientRect();
          a2.forEach((t3) => {
            t3.setAttribute("text-anchor", i2.labels.align);
          }), "left" !== i2.labels.align || i2.opposite ? "center" === i2.labels.align ? e3.setAttribute("transform", `translate(${o2.width / 2 * (i2.opposite ? 1 : -1)}, 0)`) : "right" === i2.labels.align && i2.opposite && e3.setAttribute("transform", `translate(${o2.width}, 0)`) : e3.setAttribute("transform", `translate(-${o2.width}, 0)`);
        }
      });
    }
  }
  class U {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.documentEvent = this.documentEvent.bind(this);
    }
    addEventListener(t2, e2) {
      const s2 = this.w;
      Object.prototype.hasOwnProperty.call(s2.globals.events, t2) ? s2.globals.events[t2].push(e2) : s2.globals.events[t2] = [e2];
    }
    removeEventListener(t2, e2) {
      const s2 = this.w;
      if (!Object.prototype.hasOwnProperty.call(s2.globals.events, t2)) return;
      const i2 = s2.globals.events[t2].indexOf(e2);
      -1 !== i2 && s2.globals.events[t2].splice(i2, 1);
    }
    fireEvent(t2, e2) {
      const s2 = this.w;
      if (!Object.prototype.hasOwnProperty.call(s2.globals.events, t2)) return;
      e2 && e2.length || (e2 = []);
      const i2 = s2.globals.events[t2], a2 = i2.length;
      for (let t3 = 0; t3 < a2; t3++) i2[t3].apply(null, e2);
    }
    setupEventHandlers() {
      const t2 = this.w, e2 = this.ctx, s2 = t2.dom.baseEl.querySelector(t2.globals.chartClass);
      this.ctx.eventList.forEach((i2) => {
        s2.addEventListener(i2, (s3) => {
          const i3 = null === s3.target.getAttribute("i") && -1 !== t2.interact.capturedSeriesIndex ? t2.interact.capturedSeriesIndex : s3.target.getAttribute("i"), a2 = null === s3.target.getAttribute("j") && -1 !== t2.interact.capturedDataPointIndex ? t2.interact.capturedDataPointIndex : s3.target.getAttribute("j"), o2 = Object.assign({}, t2, { seriesIndex: t2.globals.axisCharts ? i3 : 0, dataPointIndex: a2 });
          "keydown" === s3.type ? t2.config.chart.accessibility.enabled && t2.config.chart.accessibility.keyboard.enabled && (e2.ctx.keyboardNavigation && e2.ctx.keyboardNavigation.handleKey(s3), "function" == typeof t2.config.chart.events.keyDown && t2.config.chart.events.keyDown(s3, e2, o2), e2.ctx.events.fireEvent("keydown", [s3, e2, o2])) : "keyup" === s3.type ? t2.config.chart.accessibility.enabled && t2.config.chart.accessibility.keyboard.enabled && ("function" == typeof t2.config.chart.events.keyUp && t2.config.chart.events.keyUp(s3, e2, o2), e2.ctx.events.fireEvent("keyup", [s3, e2, o2])) : "mousemove" === s3.type || "touchmove" === s3.type ? "function" == typeof t2.config.chart.events.mouseMove && t2.config.chart.events.mouseMove(s3, e2, o2) : "mouseleave" === s3.type || "touchleave" === s3.type ? "function" == typeof t2.config.chart.events.mouseLeave && t2.config.chart.events.mouseLeave(s3, e2, o2) : ("mouseup" === s3.type && 1 === s3.which || "touchend" === s3.type) && ("function" == typeof t2.config.chart.events.click && t2.config.chart.events.click(s3, e2, o2), e2.ctx.events.fireEvent("click", [s3, e2, o2]));
        }, { capture: false, passive: true });
      }), this.ctx.eventList.forEach((e3) => {
        t2.dom.baseEl.addEventListener(e3, this.documentEvent, { passive: true });
      }), this.ctx.core.setupBrushHandler();
    }
    documentEvent(t2) {
      const e2 = this.w, s2 = t2.target.className;
      if ("click" === t2.type) {
        const t3 = e2.dom.baseEl.querySelector(".apexcharts-menu");
        t3 && t3.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== s2 && t3.classList.remove("apexcharts-menu-open");
      }
      e2.interact.clientX = "touchmove" === t2.type ? t2.touches[0].clientX : t2.clientX, e2.interact.clientY = "touchmove" === t2.type ? t2.touches[0].clientY : t2.clientY;
    }
  }
  class q {
    constructor(t2) {
      this.w = t2;
    }
    setCurrentLocaleValues(t2) {
      let e2 = this.w.config.chart.locales;
      const s2 = h.getApex();
      s2.chart && s2.chart.locales && s2.chart.locales.length > 0 && (e2 = this.w.config.chart.locales.concat(s2.chart.locales));
      const i2 = e2.filter((e3) => e3.name === t2)[0];
      if (!i2) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
      {
        const t3 = b.extend(C, i2);
        this.w.globals.locale = t3.options;
      }
    }
  }
  class Z {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2;
    }
    drawAxis(t2, e2) {
      const s2 = this.w.globals, i2 = this.w.config, a2 = new _(this.w, this.ctx, e2), o2 = new V(this.w, { theme: this.ctx.theme, timeScale: this.ctx.timeScale }, e2);
      if (s2.axisCharts && "radar" !== t2) {
        let t3, e3;
        s2.isBarHorizontal ? (e3 = o2.drawYaxisInversed(0), t3 = a2.drawXaxisInversed(0), this.w.dom.elGraphical.add(t3), this.w.dom.elGraphical.add(e3)) : (t3 = a2.drawXaxis(), this.w.dom.elGraphical.add(t3), i2.yaxis.map((t4, i3) => {
          if (-1 === s2.ignoreYAxisIndexes.indexOf(i3) && (e3 = o2.drawYaxis(i3), this.w.dom.Paper.add(e3), "back" === this.w.config.grid.position)) {
            const t5 = this.w.dom.Paper.children()[1];
            t5 && (t5.remove(), this.w.dom.Paper.add(t5));
          }
        }));
      }
    }
  }
  class K {
    constructor(t2) {
      this.w = t2;
    }
    drawXCrosshairs() {
      const t2 = this.w, e2 = new X(this.w), s2 = new F(this.w), i2 = t2.config.xaxis.crosshairs.fill.gradient, a2 = t2.config.xaxis.crosshairs.dropShadow, o2 = t2.config.xaxis.crosshairs.fill.type, r2 = i2.colorFrom, n2 = i2.colorTo, l2 = i2.opacityFrom, h2 = i2.opacityTo, c2 = i2.stops, d2 = a2.enabled, g2 = a2.left, p2 = a2.top, x2 = a2.blur, u2 = a2.color, f2 = a2.opacity;
      let m2 = t2.config.xaxis.crosshairs.fill.color;
      if (t2.config.xaxis.crosshairs.show) {
        "gradient" === o2 && (m2 = e2.drawGradient("vertical", r2, n2, l2, h2, null, c2, null));
        let i3 = e2.drawRect();
        1 === t2.config.xaxis.crosshairs.width && (i3 = e2.drawLine());
        let a3 = t2.layout.gridHeight;
        (!b.isNumber(a3) || a3 < 0) && (a3 = 0);
        let y2 = t2.config.xaxis.crosshairs.width;
        (!b.isNumber(y2) || y2 < 0) && (y2 = 0), i3.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: a3, width: y2, height: a3, fill: m2, filter: "none", "fill-opacity": t2.config.xaxis.crosshairs.opacity, stroke: t2.config.xaxis.crosshairs.stroke.color, "stroke-width": t2.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t2.config.xaxis.crosshairs.stroke.dashArray }), d2 && (i3 = s2.dropShadow(i3, { left: g2, top: p2, blur: x2, color: u2, opacity: f2 })), t2.dom.elGraphical.add(i3);
      }
    }
    drawYCrosshairs() {
      const t2 = this.w, e2 = new X(this.w), s2 = t2.config.yaxis[0].crosshairs, i2 = t2.globals.barPadForNumericAxis;
      if (t2.config.yaxis[0].crosshairs.show) {
        const a3 = e2.drawLine(-i2, 0, t2.layout.gridWidth + i2, 0, s2.stroke.color, s2.stroke.dashArray, s2.stroke.width);
        a3.attr({ class: "apexcharts-ycrosshairs" }), t2.dom.elGraphical.add(a3);
      }
      const a2 = e2.drawLine(-i2, 0, t2.layout.gridWidth + i2, 0, s2.stroke.color, 0, 0);
      a2.attr({ class: "apexcharts-ycrosshairs-hidden" }), t2.dom.elGraphical.add(a2);
    }
  }
  class J {
    constructor(t2) {
      this.w = t2;
    }
    checkResponsiveConfig(t2) {
      const e2 = this.w, s2 = e2.config;
      if (0 === s2.responsive.length) return;
      const i2 = s2.responsive.slice();
      i2.sort((t3, e3) => t3.breakpoint > e3.breakpoint ? 1 : e3.breakpoint > t3.breakpoint ? -1 : 0).reverse();
      const a2 = new k({}), o2 = (t3 = {}) => {
        const s3 = i2[0].breakpoint, o3 = h.isBrowser() ? window.innerWidth > 0 ? window.innerWidth : screen.width : 0;
        if (o3 > s3) {
          const s4 = b.clone(e2.globals.initialConfig);
          s4.series = b.clone(e2.config.series);
          const i3 = I.extendArrayProps(a2, s4, e2);
          t3 = b.extend(i3, t3), t3 = b.extend(e2.config, t3), this.overrideResponsiveOptions(t3);
        } else for (let s4 = 0; s4 < i2.length; s4++) o3 < i2[s4].breakpoint && (t3 = I.extendArrayProps(a2, i2[s4].options, e2), t3 = b.extend(e2.config, t3), this.overrideResponsiveOptions(t3));
      };
      if (t2) {
        let s3 = I.extendArrayProps(a2, t2, e2);
        s3 = b.extend(e2.config, s3), s3 = b.extend(s3, t2), o2(s3);
      } else o2({});
    }
    overrideResponsiveOptions(t2) {
      const e2 = new k(t2).init({ responsiveOverride: true });
      this.w.config = e2;
    }
  }
  class Q {
    constructor(t2, { toggleDataSeries: e2, revertDefaultAxisMinMax: s2, updateSeries: i2 } = {}) {
      this.w = t2, this._toggleDataSeries = e2 || null, this._revertDefaultAxisMinMax = s2 || null, this._updateSeries = i2 || null, this.legendInactiveClass = "legend-mouseover-inactive";
    }
    clearSeriesCache() {
      const t2 = this.w;
      t2.globals.cachedSelectors && (delete t2.globals.cachedSelectors.allSeriesEls, delete t2.globals.cachedSelectors.highlightSeriesEls);
    }
    getAllSeriesEls() {
      const t2 = this.w, e2 = "allSeriesEls";
      return t2.globals.cachedSelectors[e2] || (t2.globals.cachedSelectors[e2] = t2.dom.baseEl.getElementsByClassName("apexcharts-series")), t2.globals.cachedSelectors[e2];
    }
    getSeriesByName(t2) {
      return this.w.dom.baseEl.querySelector(`.apexcharts-inner .apexcharts-series[seriesName='${b.escapeString(t2)}']`);
    }
    isSeriesHidden(t2) {
      const e2 = this.getSeriesByName(t2), s2 = parseInt(e2.getAttribute("data:realIndex"), 10);
      return { isHidden: e2.classList.contains("apexcharts-series-collapsed"), realIndex: s2 };
    }
    addCollapsedClassToSeries(t2, e2) {
      Q.addCollapsedClassToSeries(this.w, t2, e2);
    }
    static addCollapsedClassToSeries(t2, e2, s2) {
      function i2(t3) {
        for (let i3 = 0; i3 < t3.length; i3++) t3[i3].index === s2 && e2.node.classList.add("apexcharts-series-collapsed");
      }
      i2(t2.globals.collapsedSeries), i2(t2.globals.ancillaryCollapsedSeries);
    }
    toggleSeries(t2) {
      var e2;
      const s2 = this.isSeriesHidden(t2);
      return null == (e2 = this._toggleDataSeries) || e2.call(this, s2.realIndex, s2.isHidden), s2.isHidden;
    }
    showSeries(t2) {
      var e2;
      const s2 = this.isSeriesHidden(t2);
      s2.isHidden && (null == (e2 = this._toggleDataSeries) || e2.call(this, s2.realIndex, true));
    }
    hideSeries(t2) {
      var e2;
      const s2 = this.isSeriesHidden(t2);
      s2.isHidden || null == (e2 = this._toggleDataSeries) || e2.call(this, s2.realIndex, false);
    }
    resetSeries(t2 = true, e2 = true, s2 = true) {
      var i2, a2;
      const o2 = this.w;
      this.clearSeriesCache();
      let r2 = b.clone(o2.globals.initialSeries);
      o2.globals.previousPaths = [], s2 ? (o2.globals.collapsedSeries = [], o2.globals.ancillaryCollapsedSeries = [], o2.globals.collapsedSeriesIndices = [], o2.globals.ancillaryCollapsedSeriesIndices = []) : r2 = this.emptyCollapsedSeries(r2), o2.config.series = r2, t2 && (e2 && (o2.interact.zoomed = false, null == (i2 = this._revertDefaultAxisMinMax) || i2.call(this)), null == (a2 = this._updateSeries) || a2.call(this, r2, o2.config.chart.animations.dynamicAnimation.enabled));
    }
    emptyCollapsedSeries(t2) {
      const e2 = this.w;
      for (let s2 = 0; s2 < t2.length; s2++) e2.globals.collapsedSeriesIndices.indexOf(s2) > -1 && (t2[s2].data = []);
      return t2;
    }
    highlightSeries(t2) {
      const e2 = this.w, s2 = this.getSeriesByName(t2), i2 = parseInt(null == s2 ? void 0 : s2.getAttribute("data:realIndex"), 10), a2 = "highlightSeriesEls";
      let o2 = e2.globals.cachedSelectors[a2];
      o2 || (o2 = e2.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), e2.globals.cachedSelectors[a2] = o2);
      let r2 = null, n2 = null, l2 = null;
      if (e2.globals.axisCharts || "radialBar" === e2.config.chart.type) if (e2.globals.axisCharts) {
        r2 = e2.dom.baseEl.querySelector(`.apexcharts-series[data\\:realIndex='${i2}']`), n2 = e2.dom.baseEl.querySelector(`.apexcharts-datalabels[data\\:realIndex='${i2}']`);
        const t3 = e2.globals.seriesYAxisReverseMap[i2];
        l2 = e2.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${t3}']`);
      } else r2 = e2.dom.baseEl.querySelector(`.apexcharts-series[rel='${i2 + 1}']`);
      else r2 = e2.dom.baseEl.querySelector(`.apexcharts-series[rel='${i2 + 1}'] path`);
      for (let t3 = 0; t3 < o2.length; t3++) o2[t3].classList.add(this.legendInactiveClass);
      if (r2) e2.globals.axisCharts || r2.parentNode.classList.remove(this.legendInactiveClass), r2.classList.remove(this.legendInactiveClass), null !== n2 && n2.classList.remove(this.legendInactiveClass), null !== l2 && l2.classList.remove(this.legendInactiveClass);
      else for (let t3 = 0; t3 < o2.length; t3++) o2[t3].classList.remove(this.legendInactiveClass);
    }
    toggleSeriesOnHover(t2, e2) {
      const s2 = this.w;
      e2 || (e2 = t2.target);
      const i2 = s2.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
      if ("mousemove" === t2.type) {
        const t3 = parseInt(e2.getAttribute("rel"), 10) - 1;
        this.highlightSeries(s2.seriesData.seriesNames[t3]);
      } else if ("mouseout" === t2.type) for (let t3 = 0; t3 < i2.length; t3++) i2[t3].classList.remove(this.legendInactiveClass);
    }
    highlightRangeInSeries(t2, e2) {
      const s2 = this.w, i2 = s2.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), a2 = (t3) => {
        for (let e3 = 0; e3 < i2.length; e3++) i2[e3].classList[t3](this.legendInactiveClass);
      }, o2 = (t3, e3) => {
        for (let s3 = 0; s3 < i2.length; s3++) {
          const a3 = Number(i2[s3].getAttribute("val"));
          a3 >= t3.from && (a3 < t3.to || t3.to === e3 && a3 === e3) && i2[s3].classList.remove(this.legendInactiveClass);
        }
      };
      if ("mousemove" === t2.type) {
        const t3 = parseInt(e2.getAttribute("rel"), 10) - 1;
        a2("add");
        const i3 = s2.config.plotOptions.heatmap.colorScale.ranges;
        o2(i3[t3], i3.reduce((t4, e3) => Math.max(t4, e3.to), 0));
      } else "mouseout" === t2.type && a2("remove");
    }
    getActiveConfigSeriesIndex(t2 = "asc", e2 = []) {
      const s2 = this.w;
      let i2 = 0;
      if (s2.config.series.length > 1) {
        const a2 = s2.config.series.map((t3, i3) => t3.data && t3.data.length > 0 && -1 === s2.globals.collapsedSeriesIndices.indexOf(i3) && (!s2.globals.comboCharts || 0 === e2.length || e2.length && e2.indexOf(s2.config.series[i3].type) > -1) ? i3 : -1);
        for (let e3 = "asc" === t2 ? 0 : a2.length - 1; "asc" === t2 ? e3 < a2.length : e3 >= 0; "asc" === t2 ? e3++ : e3--) if (-1 !== a2[e3]) {
          i2 = a2[e3];
          break;
        }
      }
      return i2;
    }
    getBarSeriesIndices() {
      return this.w.globals.comboCharts ? this.w.config.series.map((t2, e2) => "bar" === t2.type || "column" === t2.type ? e2 : -1).filter((t2) => -1 !== t2) : this.w.config.series.map((t2, e2) => e2);
    }
    getPreviousPaths() {
      const t2 = this.w;
      function e2(e3, s3, i2) {
        const a2 = e3[s3].childNodes, o2 = { type: i2, paths: [], realIndex: e3[s3].getAttribute("data:realIndex") };
        for (let t3 = 0; t3 < a2.length; t3++) if (a2[t3].hasAttribute("pathTo")) {
          const e4 = a2[t3].getAttribute("pathTo");
          o2.paths.push({ d: e4 });
        }
        t2.globals.previousPaths.push(o2);
      }
      t2.globals.previousPaths = [];
      ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach((s3) => {
        const i2 = (a2 = s3, t2.dom.baseEl.querySelectorAll(`.apexcharts-${a2}-series .apexcharts-series`));
        var a2;
        for (let t3 = 0; t3 < i2.length; t3++) e2(i2, t3, s3);
      });
      const s2 = t2.dom.baseEl.querySelectorAll(`.apexcharts-${t2.config.chart.type} .apexcharts-series`);
      if (s2.length > 0) for (let e3 = 0; e3 < s2.length; e3++) {
        const s3 = t2.dom.baseEl.querySelectorAll(`.apexcharts-${t2.config.chart.type} .apexcharts-series[data\\:realIndex='${e3}'] rect`), i2 = [];
        for (let t3 = 0; t3 < s3.length; t3++) {
          const e4 = (e5) => s3[t3].getAttribute(e5), a2 = { x: parseFloat(e4("x")), y: parseFloat(e4("y")), width: parseFloat(e4("width")), height: parseFloat(e4("height")) };
          i2.push({ rect: a2, color: s3[t3].getAttribute("color") });
        }
        t2.globals.previousPaths.push(i2);
      }
      t2.globals.axisCharts || (t2.globals.previousPaths = t2.seriesData.series);
    }
    clearPreviousPaths() {
      const t2 = this.w;
      t2.globals.previousPaths = [], t2.globals.allSeriesCollapsed = false;
    }
    handleNoData() {
      const t2 = this.w, e2 = t2.config.noData, s2 = new X(this.w);
      let i2 = t2.globals.svgWidth / 2, a2 = t2.globals.svgHeight / 2, o2 = "middle";
      if (t2.globals.noData = true, t2.globals.animationEnded = true, "left" === e2.align ? (i2 = 10, o2 = "start") : "right" === e2.align && (i2 = t2.globals.svgWidth - 10, o2 = "end"), "top" === e2.verticalAlign ? a2 = 50 : "bottom" === e2.verticalAlign && (a2 = t2.globals.svgHeight - 50), i2 += e2.offsetX, a2 = a2 + parseInt(e2.style.fontSize, 10) + 2 + e2.offsetY, void 0 !== e2.text && "" !== e2.text) {
        const r2 = s2.drawText({ x: i2, y: a2, text: e2.text, textAnchor: o2, fontSize: e2.style.fontSize, fontFamily: e2.style.fontFamily, foreColor: e2.style.color, opacity: 1, class: "apexcharts-text-nodata" });
        t2.dom.Paper.add(r2);
      }
    }
    setNullSeriesToZeroValues(t2) {
      const e2 = this.w;
      for (let s2 = 0; s2 < t2.length; s2++) if (0 === t2[s2].length) for (let i2 = 0; i2 < t2[e2.globals.maxValsInArrayIndex].length; i2++) t2[s2].push(0);
      return t2;
    }
    hasAllSeriesEqualX() {
      let t2 = true;
      const e2 = this.w, s2 = this.filteredSeriesX();
      for (let e3 = 0; e3 < s2.length - 1; e3++) if (s2[e3][0] !== s2[e3 + 1][0]) {
        t2 = false;
        break;
      }
      return e2.globals.allSeriesHasEqualX = t2, t2;
    }
    filteredSeriesX() {
      return this.w.seriesData.seriesX.map((t2) => t2.length > 0 ? t2 : []);
    }
  }
  class tt {
    constructor(t2) {
      this.w = t2, this.colors = [], this.isColorFn = false, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
    }
    checkHeatmapDistributed() {
      const { chart: t2, plotOptions: e2 } = this.w.config;
      return "treemap" === t2.type && e2.treemap && e2.treemap.distributed || "heatmap" === t2.type && e2.heatmap && e2.heatmap.distributed;
    }
    checkBarDistributed() {
      const { chart: t2, plotOptions: e2 } = this.w.config;
      return e2.bar && e2.bar.distributed && ("bar" === t2.type || "rangeBar" === t2.type);
    }
    init() {
      this.setDefaultColors();
    }
    setDefaultColors() {
      var t2;
      const e2 = this.w, s2 = new b();
      e2.dom.elWrap.classList.add(`apexcharts-theme-${e2.config.theme.mode || "light"}`);
      const i2 = null == (t2 = e2.config.theme.accessibility) ? void 0 : t2.colorBlindMode;
      if (i2) {
        e2.globals.colors = this.getColorBlindColors(i2), this.applySeriesColors(e2.seriesData.seriesColors, e2.globals.colors);
        const t3 = e2.globals.colors.slice();
        return this.pushExtraColors(e2.globals.colors), this.applyColorTypes(["fill", "stroke"], t3), this.applyDataLabelsColors(t3), this.applyRadarPolygonsColors(), this.applyMarkersColors(t3), void ("highContrast" === i2 && e2.dom.elWrap.classList.add("apexcharts-high-contrast"));
      }
      const a2 = [...e2.config.colors || e2.config.fill.colors || []];
      e2.globals.colors = this.getColors(a2), this.applySeriesColors(e2.seriesData.seriesColors, e2.globals.colors), e2.config.theme.monochrome.enabled && (e2.globals.colors = this.getMonochromeColors(e2.config.theme.monochrome, e2.seriesData.series, s2));
      const o2 = e2.globals.colors.slice();
      this.pushExtraColors(e2.globals.colors), this.applyColorTypes(["fill", "stroke"], o2), this.applyDataLabelsColors(o2), this.applyRadarPolygonsColors(), this.applyMarkersColors(o2);
    }
    getColors(t2) {
      const e2 = this.w;
      return t2 && 0 !== t2.length ? Array.isArray(t2) && t2.length > 0 && "function" == typeof t2[0] ? (this.isColorFn = true, e2.config.series.map((s2, i2) => {
        const a2 = t2[i2] || t2[0];
        return "function" == typeof a2 ? a2({ value: e2.globals.axisCharts ? e2.seriesData.series[i2][0] || 0 : e2.seriesData.series[i2], seriesIndex: i2, dataPointIndex: i2, w: this.w }) : a2;
      })) : t2 : this.predefined();
    }
    applySeriesColors(t2, e2) {
      t2.forEach((t3, s2) => {
        t3 && (e2[s2] = t3);
      });
    }
    getMonochromeColors(t2, e2, s2) {
      const { color: i2, shadeIntensity: a2, shadeTo: o2 } = t2, r2 = this.isBarDistributed || this.isHeatmapDistributed ? e2[0].length * e2.length : e2.length, n2 = 1 / (r2 / a2);
      let l2 = 0;
      return Array.from({ length: r2 }, () => {
        const t3 = "dark" === o2 ? s2.shadeColor(-1 * l2, i2) : s2.shadeColor(l2, i2);
        return l2 += n2, t3;
      });
    }
    applyColorTypes(t2, e2) {
      const s2 = this.w;
      t2.forEach((t3) => {
        s2.globals[t3].colors = void 0 === s2.config[t3].colors ? this.isColorFn ? s2.config.colors : e2 : s2.config[t3].colors.slice(), this.pushExtraColors(s2.globals[t3].colors);
      });
    }
    applyDataLabelsColors(t2) {
      const e2 = this.w;
      e2.globals.dataLabels.style.colors = void 0 === e2.config.dataLabels.style.colors ? t2 : e2.config.dataLabels.style.colors.slice(), this.pushExtraColors(e2.globals.dataLabels.style.colors, 50);
    }
    applyRadarPolygonsColors() {
      const t2 = this.w;
      t2.globals.radarPolygons.fill.colors = void 0 === t2.config.plotOptions.radar.polygons.fill.colors ? ["dark" === t2.config.theme.mode ? "#343A3F" : "none"] : t2.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(t2.globals.radarPolygons.fill.colors, 20);
    }
    applyMarkersColors(t2) {
      const e2 = this.w;
      e2.globals.markers.colors = void 0 === e2.config.markers.colors ? t2 : e2.config.markers.colors.slice(), this.pushExtraColors(e2.globals.markers.colors);
    }
    pushExtraColors(t2, e2, s2 = null) {
      const i2 = this.w;
      let a2 = e2 || i2.seriesData.series.length;
      if (null === s2 && (s2 = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === i2.config.chart.type && i2.config.plotOptions.heatmap && i2.config.plotOptions.heatmap.colorScale.inverse), s2 && i2.seriesData.series.length && (a2 = i2.seriesData.series[i2.globals.maxValsInArrayIndex].length * i2.seriesData.series.length), t2.length < a2) {
        const e3 = a2 - t2.length;
        for (let s3 = 0; s3 < e3; s3++) t2.push(t2[s3]);
      }
    }
    getColorBlindColors(t2) {
      const e2 = { palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], palette2: ["#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800"], palette3: ["#33B2DF", "#546E7A", "#D4526E", "#13D8AA", "#A5978B"], palette4: ["#4ECDC4", "#C7F464", "#81D4FA", "#FD6A6A", "#546E7A"], palette5: ["#2B908F", "#F9A3A4", "#90EE7E", "#FA4443", "#69D2E7"], palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"], palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"], palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"], palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"], palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"], cvdDeuteranopia: ["#0072B2", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#D55E00", "#CC79A7"], cvdProtanopia: ["#0077BB", "#EE7733", "#009988", "#EE3377", "#BBBBBB", "#33BBEE", "#CC3311"], cvdTritanopia: ["#CC3311", "#009988", "#EE7733", "#0077BB", "#EE3377", "#BBBBBB", "#33BBEE"], highContrast: ["#005A9C", "#C00000", "#007A33", "#6C3483", "#7B3F00", "#0097A7", "#4A235A"] };
      return ({ deuteranopia: e2.cvdDeuteranopia, protanopia: e2.cvdProtanopia, tritanopia: e2.cvdTritanopia, highContrast: e2.highContrast }[t2] || e2.palette1).slice();
    }
    updateThemeOptions(t2) {
      t2.chart = t2.chart || {}, t2.tooltip = t2.tooltip || {};
      const e2 = t2.theme.mode, s2 = "dark" === e2 ? "palette4" : "light" === e2 ? "palette1" : t2.theme.palette || "palette1", i2 = "dark" === e2 ? "#f6f7f8" : "light" === e2 ? "#373d3f" : t2.chart.foreColor || "#373d3f";
      return t2.tooltip.theme = e2 || "light", t2.chart.foreColor = i2, t2.theme.palette = s2, t2;
    }
    predefined() {
      const t2 = { palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], palette2: ["#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800"], palette3: ["#33B2DF", "#546E7A", "#D4526E", "#13D8AA", "#A5978B"], palette4: ["#4ECDC4", "#C7F464", "#81D4FA", "#FD6A6A", "#546E7A"], palette5: ["#2B908F", "#F9A3A4", "#90EE7E", "#FA4443", "#69D2E7"], palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"], palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"], palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"], palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"], palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"], cvdDeuteranopia: ["#0072B2", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#D55E00", "#CC79A7"], cvdProtanopia: ["#0077BB", "#EE7733", "#009988", "#EE3377", "#BBBBBB", "#33BBEE", "#CC3311"], cvdTritanopia: ["#CC3311", "#009988", "#EE7733", "#0077BB", "#EE3377", "#BBBBBB", "#33BBEE"], highContrast: ["#005A9C", "#C00000", "#007A33", "#6C3483", "#7B3F00", "#0097A7", "#4A235A"] };
      return t2[this.w.config.theme.palette] || t2.palette1;
    }
  }
  class et {
    constructor(t2) {
      this.w = t2;
    }
    draw() {
      this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
    }
    drawTitleSubtitle(t2) {
      const e2 = this.w, s2 = "title" === t2 ? e2.config.title : e2.config.subtitle;
      let i2 = e2.globals.svgWidth / 2, a2 = s2.offsetY, o2 = "middle";
      if ("left" === s2.align ? (i2 = 10, o2 = "start") : "right" === s2.align && (i2 = e2.globals.svgWidth - 10, o2 = "end"), i2 += s2.offsetX, a2 = a2 + parseInt(s2.style.fontSize, 10) + s2.margin / 2, void 0 !== s2.text) {
        const r2 = new X(this.w).drawText({ x: i2, y: a2, text: s2.text, textAnchor: o2, fontSize: s2.style.fontSize, fontFamily: s2.style.fontFamily, fontWeight: s2.style.fontWeight, foreColor: s2.style.color, opacity: 1 });
        r2.node.setAttribute("class", `apexcharts-${t2}-text`), e2.dom.Paper.add(r2);
      }
    }
  }
  let st = class {
    constructor(t2) {
      this.w = t2.w, this.dCtx = t2;
    }
    getTitleSubtitleCoords(t2) {
      const e2 = this.w;
      let s2 = 0, i2 = 0;
      const a2 = "title" === t2 ? e2.config.title.floating : e2.config.subtitle.floating, o2 = e2.dom.baseEl.querySelector(`.apexcharts-${t2}-text`);
      if (null !== o2 && !a2) {
        const t3 = o2.getBoundingClientRect();
        s2 = t3.width, i2 = e2.globals.axisCharts ? t3.height + 5 : t3.height;
      }
      return { width: s2, height: i2 };
    }
    getLegendsRect() {
      const t2 = this.w, e2 = t2.dom.elLegendWrap;
      t2.config.legend.height || "top" !== t2.config.legend.position && "bottom" !== t2.config.legend.position || (e2.style.maxHeight = t2.globals.svgHeight / 2 + "px");
      const s2 = Object.assign({}, b.getBoundingClientRect(e2));
      return null !== e2 && !t2.config.legend.floating && t2.config.legend.show ? this.dCtx.lgRect = { x: s2.x, y: s2.y, height: s2.height, width: 0 === s2.height ? 0 : s2.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, "left" !== t2.config.legend.position && "right" !== t2.config.legend.position || 1.5 * this.dCtx.lgRect.width > t2.globals.svgWidth && (this.dCtx.lgRect.width = t2.globals.svgWidth / 1.5), this.dCtx.lgRect;
    }
    getDatalabelsRect() {
      const t2 = this.w, e2 = [];
      t2.config.series.forEach((s3, i3) => {
        s3.data.forEach((s4, a3) => {
          const o3 = (r2 = t2.seriesData.series[i3][a3], t2.config.dataLabels.formatter(r2, { seriesIndex: i3, dataPointIndex: a3, w: t2 }));
          var r2;
          e2.push(o3);
        });
      });
      const s2 = b.getLargestStringFromArr(e2), i2 = new X(this.w), a2 = t2.config.dataLabels.style, o2 = i2.getTextRects(s2, parseInt(a2.fontSize), a2.fontFamily);
      return { width: 1.05 * o2.width, height: o2.height };
    }
    getLargestStringFromMultiArr(t2, e2) {
      let s2 = t2;
      if (this.w.axisFlags.isMultiLineX) {
        const t3 = e2.map((t4) => Array.isArray(t4) ? t4.length : 1), i2 = Math.max(...t3);
        s2 = e2[t3.indexOf(i2)];
      }
      return s2;
    }
  };
  class it {
    constructor(t2) {
      this.w = t2.w, this.dCtx = t2;
    }
    getxAxisLabelsCoords() {
      const t2 = this.w;
      let e2, s2 = t2.labelData.labels.slice();
      if (t2.config.xaxis.convertedCatToNumeric && 0 === s2.length && (s2 = t2.labelData.categoryLabels), t2.labelData.timescaleLabels.length > 0) {
        const s3 = this.getxAxisTimeScaleLabelsCoords();
        e2 = { width: s3.width, height: s3.height }, t2.layout.rotateXLabels = false;
      } else {
        this.dCtx.lgWidthForSideLegends = "left" !== t2.config.legend.position && "right" !== t2.config.legend.position || t2.config.legend.floating ? 0 : this.dCtx.lgRect.width;
        const i2 = t2.formatters.xLabelFormatter;
        let a2 = b.getLargestStringFromArr(s2), o2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(a2, s2);
        t2.globals.isBarHorizontal && (a2 = t2.globals.yAxisScale[0].result.reduce((t3, e3) => t3.length > e3.length ? t3 : e3, 0), o2 = a2);
        const r2 = new y(this.w), n2 = a2;
        a2 = r2.xLabelFormat(i2, a2, n2, { i: void 0, dateFormatter: new m(this.w).formatDate, w: t2 }), o2 = r2.xLabelFormat(i2, o2, n2, { i: void 0, dateFormatter: new m(this.w).formatDate, w: t2 }), (t2.config.xaxis.convertedCatToNumeric && void 0 === a2 || "" === String(a2).trim()) && (a2 = "1", o2 = a2);
        const l2 = new X(this.w);
        let h2 = l2.getTextRects(a2, t2.config.xaxis.labels.style.fontSize), c2 = h2;
        if (a2 !== o2 && (c2 = l2.getTextRects(o2, t2.config.xaxis.labels.style.fontSize)), e2 = { width: h2.width >= c2.width ? h2.width : c2.width, height: h2.height >= c2.height ? h2.height : c2.height }, e2.width * s2.length > t2.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== t2.config.xaxis.labels.rotate || t2.config.xaxis.labels.rotateAlways) {
          if (!t2.globals.isBarHorizontal) {
            t2.layout.rotateXLabels = true;
            const s3 = (e3) => l2.getTextRects(e3, t2.config.xaxis.labels.style.fontSize, t2.config.xaxis.labels.style.fontFamily, `rotate(${t2.config.xaxis.labels.rotate} 0 0)`, false);
            h2 = s3(a2), a2 !== o2 && (c2 = s3(o2)), e2.height = (h2.height > c2.height ? h2.height : c2.height) / 1.5, e2.width = h2.width > c2.width ? h2.width : c2.width;
          }
        } else t2.layout.rotateXLabels = false;
      }
      return t2.config.xaxis.labels.show || (e2 = { width: 0, height: 0 }), { width: e2.width, height: e2.height };
    }
    getxAxisGroupLabelsCoords() {
      var t2;
      const e2 = this.w;
      if (!e2.labelData.hasXaxisGroups) return { width: 0, height: 0 };
      const s2 = (null == (t2 = e2.config.xaxis.group.style) ? void 0 : t2.fontSize) || e2.config.xaxis.labels.style.fontSize, i2 = e2.labelData.groups.map((t3) => t3.title);
      let a2;
      const o2 = b.getLargestStringFromArr(i2), r2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(o2, i2), n2 = new X(this.w), l2 = n2.getTextRects(o2, s2);
      let h2 = l2;
      return o2 !== r2 && (h2 = n2.getTextRects(r2, s2)), a2 = { width: l2.width >= h2.width ? l2.width : h2.width, height: l2.height >= h2.height ? l2.height : h2.height }, e2.config.xaxis.labels.show || (a2 = { width: 0, height: 0 }), { width: a2.width, height: a2.height };
    }
    getxAxisTitleCoords() {
      const t2 = this.w;
      let e2 = 0, s2 = 0;
      if (void 0 !== t2.config.xaxis.title.text) {
        const i2 = new X(this.w).getTextRects(t2.config.xaxis.title.text, t2.config.xaxis.title.style.fontSize);
        e2 = i2.width, s2 = i2.height;
      }
      return { width: e2, height: s2 };
    }
    getxAxisTimeScaleLabelsCoords() {
      const t2 = this.w;
      this.dCtx.timescaleLabels = t2.labelData.timescaleLabels.slice();
      const e2 = this.dCtx.timescaleLabels.map((t3) => t3.value), s2 = e2.reduce((t3, e3) => void 0 === t3 ? 0 : t3.length > e3.length ? t3 : e3, 0), i2 = new X(this.w).getTextRects(s2, t2.config.xaxis.labels.style.fontSize);
      return 1.05 * i2.width * e2.length > t2.layout.gridWidth && 0 !== t2.config.xaxis.labels.rotate && (t2.globals.overlappingXLabels = true), i2;
    }
    additionalPaddingXLabels(t2) {
      const e2 = this.w, s2 = e2.globals, i2 = e2.config, a2 = i2.xaxis.type, o2 = t2.width;
      s2.skipLastTimelinelabel = false, s2.skipFirstTimelinelabel = false;
      const r2 = e2.config.yaxis[0].opposite && e2.globals.isBarHorizontal, n2 = (t3) => {
        if (this.dCtx.timescaleLabels && this.dCtx.timescaleLabels.length) {
          const a3 = this.dCtx.timescaleLabels[0], r3 = this.dCtx.timescaleLabels[this.dCtx.timescaleLabels.length - 1].position + o2 / 1.75 - this.dCtx.yAxisWidthRight, n3 = a3.position - o2 / 1.75 + this.dCtx.yAxisWidthLeft, l3 = "right" === e2.config.legend.position && this.dCtx.lgRect.width > 0 ? this.dCtx.lgRect.width : 0;
          r3 > s2.svgWidth - e2.layout.translateX - l3 && (s2.skipLastTimelinelabel = true), n3 < -(t3.show && !t3.floating || "bar" !== i2.chart.type && "candlestick" !== i2.chart.type && "rangeBar" !== i2.chart.type && "boxPlot" !== i2.chart.type ? 10 : o2 / 1.75) && (s2.skipFirstTimelinelabel = true);
        } else "datetime" === a2 ? this.dCtx.gridPad.right < o2 && !e2.layout.rotateXLabels && (s2.skipLastTimelinelabel = true) : "datetime" !== a2 && this.dCtx.gridPad.right < o2 / 2 - this.dCtx.yAxisWidthRight && !e2.layout.rotateXLabels && !e2.config.xaxis.labels.trim && (this.dCtx.xPadRight = o2 / 2 + 1);
      }, l2 = (t3, e3) => {
        i2.yaxis.length > 1 && ((t4) => -1 !== s2.collapsedSeriesIndices.indexOf(t4))(e3) || n2(t3);
      };
      i2.yaxis.forEach((t3, e3) => {
        r2 ? (this.dCtx.gridPad.left < o2 && (this.dCtx.xPadLeft = o2 / 2 + 1), this.dCtx.xPadRight = o2 / 2 + 1) : l2(t3, e3);
      });
    }
  }
  class at {
    constructor(t2) {
      this.w = t2.w, this.dCtx = t2;
    }
    getyAxisLabelsCoords() {
      const t2 = this.w, e2 = [];
      let s2 = 10;
      const i2 = new W(this.w, { theme: this.dCtx.theme, timeScale: this.dCtx.timeScale });
      return t2.config.yaxis.map((a2, o2) => {
        const r2 = { seriesIndex: o2, dataPointIndex: -1, w: t2 }, n2 = t2.globals.yAxisScale[o2];
        let l2 = 0;
        if (!i2.isYAxisHidden(o2) && a2.labels.show && void 0 !== a2.labels.minWidth && (l2 = a2.labels.minWidth), !i2.isYAxisHidden(o2) && a2.labels.show && n2.result.length) {
          const i3 = t2.formatters.yLabelFormatters[o2], h2 = n2.niceMin === Number.MIN_VALUE ? 0 : n2.niceMin;
          let c2 = n2.result.reduce((t3, e3) => {
            var s3, a3;
            return (null == (s3 = String(i3(t3, r2))) ? void 0 : s3.length) > (null == (a3 = String(i3(e3, r2))) ? void 0 : a3.length) ? t3 : e3;
          }, h2);
          c2 = i3(c2, r2);
          let d2 = c2;
          if (void 0 !== c2 && 0 !== c2.length || (c2 = n2.niceMax), 1 === String(c2).length && (c2 += ".0", d2 = c2), t2.globals.isBarHorizontal) {
            s2 = 0;
            const e3 = t2.labelData.labels.slice();
            c2 = b.getLargestStringFromArr(e3), c2 = i3(c2, { seriesIndex: o2, dataPointIndex: -1, w: t2 }), d2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(c2, e3);
          }
          const g2 = new X(this.w), p2 = "rotate(".concat(a2.labels.rotate, " 0 0)"), x2 = g2.getTextRects(c2, a2.labels.style.fontSize, a2.labels.style.fontFamily, p2, false);
          let u2 = x2;
          c2 !== d2 && (u2 = g2.getTextRects(d2, a2.labels.style.fontSize, a2.labels.style.fontFamily, p2, false)), e2.push({ width: (l2 > u2.width || l2 > x2.width ? l2 : u2.width > x2.width ? u2.width : x2.width) + s2, height: u2.height > x2.height ? u2.height : x2.height });
        } else e2.push({ width: 0, height: 0 });
      }), e2;
    }
    getyAxisTitleCoords() {
      const t2 = this.w, e2 = [];
      return t2.config.yaxis.map((t3) => {
        if (t3.show && void 0 !== t3.title.text) {
          const s2 = new X(this.w), i2 = "rotate(".concat(t3.title.rotate, " 0 0)"), a2 = s2.getTextRects(t3.title.text, t3.title.style.fontSize, t3.title.style.fontFamily, i2, false);
          e2.push({ width: a2.width, height: a2.height });
        } else e2.push({ width: 0, height: 0 });
      }), e2;
    }
    getTotalYAxisWidth() {
      const t2 = this.w;
      let e2 = 0, s2 = 0, i2 = 0;
      const a2 = t2.globals.yAxisScale.length > 1 ? 10 : 0, o2 = new W(this.w, { theme: this.dCtx.theme, timeScale: this.dCtx.timeScale }), r2 = (r3, n2) => {
        const l2 = t2.config.yaxis[n2].floating;
        let h2 = 0;
        r3.width > 0 && !l2 ? (h2 = r3.width + a2, (function(e3) {
          return t2.globals.ignoreYAxisIndexes.indexOf(e3) > -1;
        })(n2) && (h2 = h2 - r3.width - a2)) : h2 = l2 || o2.isYAxisHidden(n2) ? 0 : 5, t2.config.yaxis[n2].opposite ? i2 += h2 : s2 += h2, e2 += h2;
      };
      return t2.layout.yLabelsCoords.map((t3, e3) => {
        r2(t3, e3);
      }), t2.layout.yTitleCoords.map((t3, e3) => {
        r2(t3, e3);
      }), t2.globals.isBarHorizontal && !t2.config.yaxis[0].floating && (e2 = t2.layout.yLabelsCoords[0].width + t2.layout.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = s2, this.dCtx.yAxisWidthRight = i2, e2;
    }
  }
  class ot {
    constructor(t2) {
      this.w = t2.w, this.dCtx = t2;
    }
    gridPadForColumnsInNumericAxis(t2) {
      const { w: e2 } = this, { config: s2, globals: i2 } = e2;
      if (i2.noData || i2.collapsedSeries.length + i2.ancillaryCollapsedSeries.length === s2.series.length) return 0;
      const a2 = (t3) => ["bar", "rangeBar", "candlestick", "boxPlot"].includes(t3), o2 = s2.chart.type;
      let r2 = 0, n2 = a2(o2) ? s2.series.length : 1;
      i2.comboBarCount > 0 && (n2 = i2.comboBarCount), i2.collapsedSeries.forEach((t3) => {
        a2(t3.type) && (n2 -= 1);
      }), s2.chart.stacked && (n2 = 1);
      const l2 = a2(o2) || i2.comboBarCount > 0;
      let h2 = Math.abs(i2.initialMaxX - i2.initialMinX);
      if (l2 && e2.axisFlags.isXNumeric && !i2.isBarHorizontal && n2 > 0 && 0 !== h2) {
        h2 <= 3 && (h2 = i2.dataPoints);
        const e3 = h2 / t2;
        let a3 = i2.minXDiff && i2.minXDiff / e3 > 0 ? i2.minXDiff / e3 : 0;
        a3 > t2 / 2 && (a3 /= 2), r2 = a3 * parseInt(s2.plotOptions.bar.columnWidth, 10) / 100, r2 < 1 && (r2 = 1), i2.barPadForNumericAxis = r2;
      }
      return r2;
    }
    gridPadFortitleSubtitle() {
      const { w: t2 } = this, { globals: e2 } = t2;
      let s2 = this.dCtx.isSparkline || !e2.axisCharts ? 0 : 10;
      ["title", "subtitle"].forEach((i3) => {
        void 0 !== t2.config[i3].text ? s2 += t2.config[i3].margin : s2 += this.dCtx.isSparkline || !e2.axisCharts ? 0 : 5;
      }), !t2.config.legend.show || "bottom" !== t2.config.legend.position || t2.config.legend.floating || e2.axisCharts || (s2 += 10);
      const i2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), a2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
      t2.layout.gridHeight -= i2.height + a2.height + s2, t2.layout.translateY += i2.height + a2.height + s2;
    }
    setGridXPosForDualYAxis(t2, e2) {
      const { w: s2 } = this, i2 = new W(this.w, { theme: this.dCtx.theme, timeScale: this.dCtx.timeScale });
      s2.config.yaxis.forEach((a2, o2) => {
        -1 !== s2.globals.ignoreYAxisIndexes.indexOf(o2) || a2.floating || i2.isYAxisHidden(o2) || (a2.opposite && (s2.layout.translateX -= e2[o2].width + t2[o2].width + parseInt(a2.labels.style.fontSize, 10) / 1.2 + 12), s2.layout.translateX < 2 && (s2.layout.translateX = 2));
      });
    }
  }
  class rt {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.theme = e2.theme, this.timeScale = e2.timeScale, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new st(this), this.dimYAxis = new at(this), this.dimXAxis = new it(this), this.dimGrid = new ot(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
    }
    plotCoords() {
      const t2 = this.w, e2 = t2.globals;
      this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = { width: 0, height: 0 };
      const s2 = Array.isArray(t2.config.stroke.width) ? Math.max(...t2.config.stroke.width) : t2.config.stroke.width;
      this.isSparkline && ((t2.config.markers.discrete.length > 0 || t2.config.markers.size > 0) && Object.entries(this.gridPad).forEach(([t3, e3]) => {
        this.gridPad[t3] = Math.max(e3, this.w.globals.markers.largestSize / 1.5);
      }), this.gridPad.top = Math.max(s2 / 2, this.gridPad.top), this.gridPad.bottom = Math.max(s2 / 2, this.gridPad.bottom)), e2.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), t2.layout.gridHeight = t2.layout.gridHeight - this.gridPad.top - this.gridPad.bottom, t2.layout.gridWidth = t2.layout.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
      const i2 = this.dimGrid.gridPadForColumnsInNumericAxis(t2.layout.gridWidth);
      return t2.layout.gridWidth = t2.layout.gridWidth - 2 * i2, t2.layout.translateX = t2.layout.translateX + this.gridPad.left + this.xPadLeft + (i2 > 0 ? i2 : 0), t2.layout.translateY = t2.layout.translateY + this.gridPad.top, { layout: { gridHeight: t2.layout.gridHeight, gridWidth: t2.layout.gridWidth, translateX: t2.layout.translateX, translateY: t2.layout.translateY, translateXAxisX: t2.layout.translateXAxisX, translateXAxisY: t2.layout.translateXAxisY, rotateXLabels: t2.layout.rotateXLabels, xAxisHeight: t2.layout.xAxisHeight, xAxisLabelsHeight: t2.layout.xAxisLabelsHeight, xAxisGroupLabelsHeight: t2.layout.xAxisGroupLabelsHeight, xAxisLabelsWidth: t2.layout.xAxisLabelsWidth, yLabelsCoords: t2.layout.yLabelsCoords, yTitleCoords: t2.layout.yTitleCoords } };
    }
    setDimensionsForAxisCharts() {
      const t2 = this.w, e2 = t2.globals, s2 = this.dimYAxis.getyAxisLabelsCoords(), i2 = this.dimYAxis.getyAxisTitleCoords();
      e2.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), t2.layout.yLabelsCoords = [], t2.layout.yTitleCoords = [], t2.config.yaxis.map((e3, a3) => {
        t2.layout.yLabelsCoords.push({ width: s2[a3].width, index: a3 }), t2.layout.yTitleCoords.push({ width: i2[a3].width, index: a3 });
      }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
      const a2 = this.dimXAxis.getxAxisLabelsCoords(), o2 = this.dimXAxis.getxAxisGroupLabelsCoords(), r2 = this.dimXAxis.getxAxisTitleCoords();
      this.conditionalChecksForAxisCoords(a2, r2, o2), t2.layout.translateXAxisY = t2.layout.rotateXLabels ? this.xAxisHeight / 8 : -4, t2.layout.translateXAxisX = t2.layout.rotateXLabels && t2.axisFlags.isXNumeric && t2.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, t2.globals.isBarHorizontal && (t2.layout.rotateXLabels = false, t2.layout.translateXAxisY = parseInt(t2.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), t2.layout.translateXAxisY = t2.layout.translateXAxisY + t2.config.xaxis.labels.offsetY, t2.layout.translateXAxisX = t2.layout.translateXAxisX + t2.config.xaxis.labels.offsetX;
      let n2 = this.yAxisWidth, l2 = this.xAxisHeight;
      t2.layout.xAxisLabelsHeight = this.xAxisHeight - r2.height, t2.layout.xAxisGroupLabelsHeight = t2.layout.xAxisLabelsHeight - a2.height, t2.layout.xAxisLabelsWidth = this.xAxisWidth, t2.layout.xAxisHeight = this.xAxisHeight;
      let h2 = 10;
      ("radar" === t2.config.chart.type || this.isSparkline) && (n2 = 0, l2 = 0), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || "treemap" === t2.config.chart.type) && (n2 = 0, l2 = 0, h2 = 0), this.isSparkline || "treemap" === t2.config.chart.type || this.dimXAxis.additionalPaddingXLabels(a2);
      const c2 = () => {
        t2.layout.translateX = n2 + this.datalabelsCoords.width, t2.layout.gridHeight = e2.svgHeight - this.lgRect.height - l2 - (this.isSparkline || "treemap" === t2.config.chart.type ? 0 : t2.layout.rotateXLabels ? 10 : 15), t2.layout.gridWidth = e2.svgWidth - n2 - 2 * this.datalabelsCoords.width;
      };
      switch ("top" === t2.config.xaxis.position && (h2 = t2.layout.xAxisHeight - t2.config.xaxis.axisTicks.height - 5), t2.config.legend.position) {
        case "bottom":
          t2.layout.translateY = h2, c2();
          break;
        case "top":
          t2.layout.translateY = this.lgRect.height + h2, c2();
          break;
        case "left":
          t2.layout.translateY = h2, t2.layout.translateX = this.lgRect.width + n2 + this.datalabelsCoords.width, t2.layout.gridHeight = e2.svgHeight - l2 - 12, t2.layout.gridWidth = e2.svgWidth - this.lgRect.width - n2 - 2 * this.datalabelsCoords.width;
          break;
        case "right":
          t2.layout.translateY = h2, t2.layout.translateX = n2 + this.datalabelsCoords.width, t2.layout.gridHeight = e2.svgHeight - l2 - 12, t2.layout.gridWidth = e2.svgWidth - this.lgRect.width - n2 - 2 * this.datalabelsCoords.width - 5;
          break;
        default:
          throw new Error("Legend position not supported");
      }
      this.dimGrid.setGridXPosForDualYAxis(i2, s2);
      new V(this.w, { theme: this.theme, timeScale: this.timeScale }).setYAxisXPosition(s2, i2);
    }
    setDimensionsForNonAxisCharts() {
      const t2 = this.w, e2 = t2.globals, s2 = t2.config;
      let i2 = 0;
      t2.config.legend.show && !t2.config.legend.floating && (i2 = 20);
      const a2 = "pie" === s2.chart.type || "polarArea" === s2.chart.type || "donut" === s2.chart.type ? "pie" : "radialBar", o2 = s2.plotOptions[a2].offsetY, r2 = s2.plotOptions[a2].offsetX;
      if (!s2.legend.show || s2.legend.floating) {
        t2.layout.gridHeight = e2.svgHeight;
        const s3 = t2.dom.elWrap.getBoundingClientRect().width;
        return t2.layout.gridWidth = Math.min(s3, t2.layout.gridHeight), t2.layout.translateY = o2, void (t2.layout.translateX = r2 + (e2.svgWidth - t2.layout.gridWidth) / 2);
      }
      switch (s2.legend.position) {
        case "bottom":
          t2.layout.gridHeight = e2.svgHeight - this.lgRect.height, t2.layout.gridWidth = e2.svgWidth, t2.layout.translateY = o2 - 10, t2.layout.translateX = r2 + (e2.svgWidth - t2.layout.gridWidth) / 2;
          break;
        case "top":
          t2.layout.gridHeight = e2.svgHeight - this.lgRect.height, t2.layout.gridWidth = e2.svgWidth, t2.layout.translateY = this.lgRect.height + o2 + 10, t2.layout.translateX = r2 + (e2.svgWidth - t2.layout.gridWidth) / 2;
          break;
        case "left":
          t2.layout.gridWidth = e2.svgWidth - this.lgRect.width - i2, t2.layout.gridHeight = "auto" !== s2.chart.height ? e2.svgHeight : t2.layout.gridWidth, t2.layout.translateY = o2, t2.layout.translateX = r2 + this.lgRect.width + i2;
          break;
        case "right":
          t2.layout.gridWidth = e2.svgWidth - this.lgRect.width - i2 - 5, t2.layout.gridHeight = "auto" !== s2.chart.height ? e2.svgHeight : t2.layout.gridWidth, t2.layout.translateY = o2, t2.layout.translateX = r2 + 10;
          break;
        default:
          throw new Error("Legend position not supported");
      }
    }
    conditionalChecksForAxisCoords(t2, e2, s2) {
      const i2 = this.w, a2 = i2.labelData.hasXaxisGroups ? 2 : 1, o2 = s2.height + t2.height + e2.height, r2 = i2.axisFlags.isMultiLineX ? 1.2 : 1.618, n2 = i2.layout.rotateXLabels ? 22 : 10, l2 = i2.layout.rotateXLabels && "bottom" === i2.config.legend.position ? 10 : 0;
      this.xAxisHeight = o2 * r2 + a2 * n2 + l2, this.xAxisWidth = t2.width, this.xAxisHeight - e2.height > i2.config.xaxis.labels.maxHeight && (this.xAxisHeight = i2.config.xaxis.labels.maxHeight), i2.config.xaxis.labels.minHeight && this.xAxisHeight < i2.config.xaxis.labels.minHeight && (this.xAxisHeight = i2.config.xaxis.labels.minHeight), i2.config.xaxis.floating && (this.xAxisHeight = 0);
      let h2 = 0, c2 = 0;
      i2.config.yaxis.forEach((t3) => {
        h2 += t3.labels.minWidth, c2 += t3.labels.maxWidth;
      }), this.yAxisWidth < h2 && (this.yAxisWidth = h2), this.yAxisWidth > c2 && (this.yAxisWidth = c2);
    }
  }
  const nt = 86400, lt = 10 / nt;
  class ht {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
    }
    calculateTimeScaleTicks(t2, e2) {
      const s2 = this.w;
      if (s2.globals.allSeriesCollapsed) return s2.labelData.labels = [], s2.labelData.timescaleLabels = [], [];
      const i2 = new m(this.w), a2 = (e2 - t2) / 864e5;
      this.determineInterval(a2), s2.interact.disableZoomIn = false, s2.interact.disableZoomOut = false, a2 < lt ? s2.interact.disableZoomIn = true : a2 > 5e4 && (s2.interact.disableZoomOut = true);
      const o2 = i2.getTimeUnitsfromTimestamp(t2, e2, this.utc), r2 = s2.layout.gridWidth / a2, h2 = r2 / 24, c2 = h2 / 60, d2 = c2 / 60, g2 = Math.floor(24 * a2), p2 = Math.floor(1440 * a2), x2 = Math.floor(a2 * nt), u2 = Math.floor(a2), f2 = Math.floor(a2 / 30), b2 = Math.floor(a2 / 365), y2 = { minMillisecond: o2.minMillisecond, minSecond: o2.minSecond, minMinute: o2.minMinute, minHour: o2.minHour, minDate: o2.minDate, minMonth: o2.minMonth, minYear: o2.minYear }, w2 = { firstVal: y2, currentMillisecond: y2.minMillisecond, currentSecond: y2.minSecond, currentMinute: y2.minMinute, currentHour: y2.minHour, currentMonthDate: y2.minDate, currentDate: y2.minDate, currentMonth: y2.minMonth, currentYear: y2.minYear, daysWidthOnXAxis: r2, hoursWidthOnXAxis: h2, minutesWidthOnXAxis: c2, secondsWidthOnXAxis: d2, numberOfSeconds: x2, numberOfMinutes: p2, numberOfHours: g2, numberOfDays: u2, numberOfMonths: f2, numberOfYears: b2 };
      switch (this.tickInterval) {
        case "years":
          this.generateYearScale(w2);
          break;
        case "months":
        case "half_year":
          this.generateMonthScale(w2);
          break;
        case "months_days":
        case "months_fortnight":
        case "days":
        case "week_days":
          this.generateDayScale(w2);
          break;
        case "hours":
          this.generateHourScale(w2);
          break;
        case "minutes_fives":
        case "minutes":
          this.generateMinuteScale(w2);
          break;
        case "seconds_tens":
        case "seconds_fives":
        case "seconds":
          this.generateSecondScale(w2);
      }
      const v2 = this.timeScaleArray.map((t3) => {
        const e3 = { position: t3.position, unit: t3.unit, year: t3.year, day: t3.day ? t3.day : 1, hour: t3.hour ? t3.hour : 0, month: t3.month + 1 };
        return "month" === t3.unit ? l(n({}, e3), { day: 1, value: t3.value + 1 }) : "day" === t3.unit || "hour" === t3.unit ? l(n({}, e3), { value: t3.value }) : "minute" === t3.unit ? l(n({}, e3), { value: t3.value, minute: t3.value }) : "second" === t3.unit ? l(n({}, e3), { value: t3.value, minute: t3.minute, second: t3.second }) : t3;
      });
      return v2.filter((t3) => {
        let e3 = 1, i3 = Math.ceil(s2.layout.gridWidth / 120);
        const a3 = t3.value;
        void 0 !== s2.config.xaxis.tickAmount && (i3 = s2.config.xaxis.tickAmount), v2.length > i3 && (e3 = Math.floor(v2.length / i3));
        let o3 = false, r3 = false;
        switch (this.tickInterval) {
          case "years":
            "year" === t3.unit && (o3 = true);
            break;
          case "half_year":
            e3 = 7, "year" === t3.unit && (o3 = true);
            break;
          case "months":
            e3 = 1, "year" === t3.unit && (o3 = true);
            break;
          case "months_fortnight":
            e3 = 15, "year" !== t3.unit && "month" !== t3.unit || (o3 = true), 30 === a3 && (r3 = true);
            break;
          case "months_days":
            e3 = 10, "month" === t3.unit && (o3 = true), 30 === a3 && (r3 = true);
            break;
          case "week_days":
            e3 = 8, "month" === t3.unit && (o3 = true);
            break;
          case "days":
            e3 = 1, "month" === t3.unit && (o3 = true);
            break;
          case "hours":
            "day" === t3.unit && (o3 = true);
            break;
          case "minutes_fives":
          case "seconds_fives":
            a3 % 5 != 0 && (r3 = true);
            break;
          case "seconds_tens":
            a3 % 10 != 0 && (r3 = true);
        }
        if ("hours" === this.tickInterval || "minutes_fives" === this.tickInterval || "seconds_tens" === this.tickInterval || "seconds_fives" === this.tickInterval) {
          if (!r3) return true;
        } else if ((a3 % e3 === 0 || o3) && !r3) return true;
      });
    }
    recalcDimensionsBasedOnFormat(t2) {
      const e2 = this.w, s2 = this.formatDates(t2), i2 = this.removeOverlappingTS(s2);
      e2.labelData.timescaleLabels = i2.slice();
      const a2 = new rt(this.w, this.ctx).plotCoords();
      this.ctx._writeLayoutCoords(a2.layout);
    }
    determineInterval(t2) {
      const e2 = 24 * t2, s2 = 60 * e2;
      switch (true) {
        case t2 / 365 > 5:
          this.tickInterval = "years";
          break;
        case t2 > 800:
          this.tickInterval = "half_year";
          break;
        case t2 > 180:
          this.tickInterval = "months";
          break;
        case t2 > 90:
          this.tickInterval = "months_fortnight";
          break;
        case t2 > 60:
          this.tickInterval = "months_days";
          break;
        case t2 > 30:
          this.tickInterval = "week_days";
          break;
        case t2 > 2:
          this.tickInterval = "days";
          break;
        case e2 > 2.4:
          this.tickInterval = "hours";
          break;
        case s2 > 15:
          this.tickInterval = "minutes_fives";
          break;
        case s2 > 5:
          this.tickInterval = "minutes";
          break;
        case s2 > 1:
          this.tickInterval = "seconds_tens";
          break;
        case 60 * s2 > 20:
          this.tickInterval = "seconds_fives";
          break;
        default:
          this.tickInterval = "seconds";
      }
    }
    generateYearScale({ firstVal: t2, currentMonth: e2, currentYear: s2, daysWidthOnXAxis: i2, numberOfYears: a2 }) {
      let o2 = t2.minYear, r2 = 0;
      const n2 = new m(this.w), l2 = "year";
      if (t2.minDate > 1 || t2.minMonth > 0) {
        const s3 = n2.determineRemainingDaysOfYear(t2.minYear, t2.minMonth, t2.minDate);
        r2 = (n2.determineDaysOfYear(t2.minYear) - s3 + 1) * i2, o2 = t2.minYear + 1, this.timeScaleArray.push({ position: r2, value: o2, unit: l2, year: o2, month: b.monthMod(e2 + 1) });
      } else 1 === t2.minDate && 0 === t2.minMonth && this.timeScaleArray.push({ position: r2, value: o2, unit: l2, year: s2, month: b.monthMod(e2 + 1) });
      let h2 = o2, c2 = r2;
      for (let t3 = 0; t3 < a2; t3++) h2++, c2 = n2.determineDaysOfYear(h2 - 1) * i2 + c2, this.timeScaleArray.push({ position: c2, value: h2, unit: l2, year: h2, month: 1 });
    }
    generateMonthScale({ firstVal: t2, currentMonthDate: e2, currentMonth: s2, currentYear: i2, daysWidthOnXAxis: a2, numberOfMonths: o2 }) {
      let r2 = s2, n2 = 0;
      const l2 = new m(this.w);
      let h2 = "month", c2 = 0;
      if (t2.minDate > 1) {
        n2 = (l2.determineDaysOfMonths(s2 + 1, t2.minYear) - e2 + 1) * a2, r2 = b.monthMod(s2 + 1);
        let o3 = i2 + c2, d3 = b.monthMod(r2), g3 = r2;
        0 === r2 && (h2 = "year", g3 = o3, d3 = 1, c2 += 1, o3 += c2), this.timeScaleArray.push({ position: n2, value: g3, unit: h2, year: o3, month: d3 });
      } else this.timeScaleArray.push({ position: n2, value: r2, unit: h2, year: i2, month: b.monthMod(s2) });
      let d2 = r2 + 1, g2 = n2;
      for (let t3 = 0, e3 = 1; t3 < o2; t3++, e3++) {
        d2 = b.monthMod(d2), 0 === d2 ? (h2 = "year", c2 += 1) : h2 = "month";
        const t4 = this._getYear(i2, d2, c2);
        g2 = l2.determineDaysOfMonths(d2, t4) * a2 + g2;
        const e4 = 0 === d2 ? t4 : d2;
        this.timeScaleArray.push({ position: g2, value: e4, unit: h2, year: t4, month: 0 === d2 ? 1 : d2 }), d2++;
      }
    }
    generateDayScale({ firstVal: t2, currentMonth: e2, currentYear: s2, hoursWidthOnXAxis: i2, numberOfDays: a2 }) {
      const o2 = new m(this.w);
      let r2 = "day", n2 = t2.minDate + 1, l2 = n2;
      const h2 = (t3, e3, s3) => t3 > o2.determineDaysOfMonths(e3 + 1, s3) ? (l2 = 1, r2 = "month", d2 = e3 += 1, e3) : e3;
      let c2 = (24 - t2.minHour) * i2, d2 = n2, g2 = h2(l2, e2, s2);
      0 === t2.minHour && 1 === t2.minDate ? (c2 = 0, d2 = b.monthMod(t2.minMonth), r2 = "month", l2 = t2.minDate) : 1 !== t2.minDate && 0 === t2.minHour && 0 === t2.minMinute && (c2 = 0, n2 = t2.minDate, l2 = n2, d2 = n2, g2 = h2(l2, e2, s2), 1 !== d2 && (r2 = "day")), this.timeScaleArray.push({ position: c2, value: d2, unit: r2, year: this._getYear(s2, g2, 0), month: b.monthMod(g2), day: l2 });
      let p2 = c2;
      for (let t3 = 0; t3 < a2; t3++) {
        l2 += 1, r2 = "day", g2 = h2(l2, g2, this._getYear(s2, g2, 0));
        const t4 = this._getYear(s2, g2, 0);
        p2 = 24 * i2 + p2;
        const e3 = 1 === l2 ? b.monthMod(g2) : l2;
        this.timeScaleArray.push({ position: p2, value: e3, unit: r2, year: t4, month: b.monthMod(g2), day: e3 });
      }
    }
    generateHourScale({ firstVal: t2, currentDate: e2, currentMonth: s2, currentYear: i2, minutesWidthOnXAxis: a2, numberOfHours: o2 }) {
      const r2 = new m(this.w);
      let n2 = "hour";
      const l2 = (t3, e3) => (t3 > r2.determineDaysOfMonths(e3 + 1, i2) && (x2 = 1, e3 += 1), { month: e3, date: x2 }), h2 = (t3, e3) => t3 > r2.determineDaysOfMonths(e3 + 1, i2) ? e3 += 1 : e3, c2 = 60 - (t2.minMinute + t2.minSecond / 60);
      let d2 = c2 * a2, g2 = t2.minHour + 1, p2 = g2;
      60 === c2 && (d2 = 0, g2 = t2.minHour, p2 = g2);
      let x2 = e2;
      p2 >= 24 && (p2 = 0, x2 += 1, n2 = "day", g2 = x2);
      let u2 = l2(x2, s2).month;
      u2 = h2(x2, u2), g2 > 31 && (x2 = 1, g2 = x2), this.timeScaleArray.push({ position: d2, value: g2, unit: n2, day: x2, hour: p2, year: i2, month: b.monthMod(u2) }), p2++;
      let f2 = d2;
      for (let t3 = 0; t3 < o2; t3++) {
        if (n2 = "hour", p2 >= 24) {
          p2 = 0, x2 += 1, n2 = "day";
          u2 = l2(x2, u2).month, u2 = h2(x2, u2);
        }
        const t4 = this._getYear(i2, u2, 0);
        f2 = 60 * a2 + f2;
        const e3 = 0 === p2 ? x2 : p2;
        this.timeScaleArray.push({ position: f2, value: e3, unit: n2, hour: p2, day: x2, year: t4, month: b.monthMod(u2) }), p2++;
      }
    }
    generateMinuteScale({ currentMillisecond: t2, currentSecond: e2, currentMinute: s2, currentHour: i2, currentDate: a2, currentMonth: o2, currentYear: r2, minutesWidthOnXAxis: n2, secondsWidthOnXAxis: l2, numberOfMinutes: h2 }) {
      let c2 = s2 + 1;
      const d2 = a2, g2 = o2, p2 = r2;
      let x2 = i2, u2 = (60 - e2 - t2 / 1e3) * l2;
      for (let t3 = 0; t3 < h2; t3++) c2 >= 60 && (c2 = 0, x2 += 1, 24 === x2 && (x2 = 0)), this.timeScaleArray.push({ position: u2, value: c2, unit: "minute", hour: x2, minute: c2, day: d2, year: this._getYear(p2, g2, 0), month: b.monthMod(g2) }), u2 += n2, c2++;
    }
    generateSecondScale({ currentMillisecond: t2, currentSecond: e2, currentMinute: s2, currentHour: i2, currentDate: a2, currentMonth: o2, currentYear: r2, secondsWidthOnXAxis: n2, numberOfSeconds: l2 }) {
      let h2 = e2 + 1, c2 = s2;
      const d2 = a2, g2 = o2, p2 = r2;
      let x2 = i2, u2 = (1e3 - t2) / 1e3 * n2;
      for (let t3 = 0; t3 < l2; t3++) h2 >= 60 && (c2++, h2 = 0, c2 >= 60 && (x2++, c2 = 0, 24 === x2 && (x2 = 0))), this.timeScaleArray.push({ position: u2, value: h2, unit: "second", hour: x2, minute: c2, second: h2, day: d2, year: this._getYear(p2, g2, 0), month: b.monthMod(g2) }), u2 += n2, h2++;
    }
    createRawDateString(t2, e2) {
      let s2 = t2.year;
      return 0 === t2.month && (t2.month = 1), s2 += "-" + ("0" + t2.month.toString()).slice(-2), "day" === t2.unit ? s2 += "day" === t2.unit ? "-" + ("0" + e2).slice(-2) : "-01" : s2 += "-" + ("0" + (t2.day ? t2.day : "1")).slice(-2), "hour" === t2.unit ? s2 += "hour" === t2.unit ? "T" + ("0" + e2).slice(-2) : "T00" : s2 += "T" + ("0" + (t2.hour ? t2.hour : "0")).slice(-2), "minute" === t2.unit ? s2 += ":" + ("0" + e2).slice(-2) : s2 += ":" + (t2.minute ? ("0" + t2.minute).slice(-2) : "00"), "second" === t2.unit ? s2 += ":" + ("0" + e2).slice(-2) : s2 += ":00", this.utc && (s2 += ".000Z"), s2;
    }
    formatDates(t2) {
      const e2 = this.w;
      return t2.map((t3) => {
        let s2 = t3.value.toString();
        const i2 = new m(this.w), a2 = this.createRawDateString(t3, s2);
        let o2 = i2.getDate(i2.parseDate(a2));
        if (this.utc || (o2 = i2.getDate(i2.parseDateWithTimezone(a2))), void 0 === e2.config.xaxis.labels.format) {
          let a3 = "dd MMM";
          const r2 = e2.config.xaxis.labels.datetimeFormatter;
          "year" === t3.unit && (a3 = r2.year), "month" === t3.unit && (a3 = r2.month), "day" === t3.unit && (a3 = r2.day), "hour" === t3.unit && (a3 = r2.hour), "minute" === t3.unit && (a3 = r2.minute), "second" === t3.unit && (a3 = r2.second), s2 = i2.formatDate(o2, a3);
        } else s2 = i2.formatDate(o2, e2.config.xaxis.labels.format);
        return { dateString: a2, position: t3.position, value: s2, unit: t3.unit, year: t3.year, month: t3.month };
      });
    }
    removeOverlappingTS(t2) {
      const e2 = new X(this.w);
      let s2, i2 = false;
      t2.length > 0 && t2[0].value && t2.every((e3) => e3.value.length === t2[0].value.length) && (i2 = true, s2 = e2.getTextRects(t2[0].value).width);
      let a2 = 0, o2 = t2.map((o3, r2) => {
        if (r2 > 0 && this.w.config.xaxis.labels.hideOverlappingLabels) {
          const n2 = i2 ? s2 : e2.getTextRects(t2[a2].value).width, l2 = t2[a2].position;
          return o3.position > l2 + n2 + 10 ? (a2 = r2, o3) : null;
        }
        return o3;
      });
      return o2 = o2.filter((t3) => null !== t3), o2;
    }
    _getYear(t2, e2, s2) {
      return t2 + Math.floor(e2 / 12) + s2;
    }
  }
  const ct = "__apexcharts_registry__";
  function dt() {
    return globalThis[ct];
  }
  function gt(t2) {
    const e2 = dt()[t2];
    if (!e2) throw new Error(`ApexCharts: chart type "${t2}" is not registered. Import it via ApexCharts.use() or use the full apexcharts bundle.`);
    return e2;
  }
  globalThis[ct] || (globalThis[ct] = {});
  class pt {
    constructor(t2, e2, s2) {
      this.w = e2, this.ctx = s2, this.el = t2;
    }
    setupElements() {
      const { globals: t2, config: e2 } = this.w, s2 = e2.chart.type;
      t2.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].includes(s2), t2.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].includes(s2), t2.isBarHorizontal = ["bar", "rangeBar", "boxPlot"].includes(s2) && e2.plotOptions.bar.horizontal, t2.chartClass = `.apexcharts${t2.chartID}`, this.w.dom.baseEl = this.el, this.w.dom.elWrap = f.createElementNS("http://www.w3.org/1999/xhtml", "div"), X.setAttrs(this.w.dom.elWrap, { id: t2.chartClass.substring(1), class: `apexcharts-canvas ${t2.chartClass.substring(1)}` }), this.el.appendChild(this.w.dom.elWrap);
      const i2 = h.isBrowser() ? window.SVG : global.SVG;
      if (this.w.dom.Paper = i2().addTo(this.w.dom.elWrap), this.w.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: `translate(${e2.chart.offsetX}, ${e2.chart.offsetY})` }), this.w.dom.Paper.node.style.background = "dark" !== e2.theme.mode || e2.chart.background ? "light" !== e2.theme.mode || e2.chart.background ? e2.chart.background : "#fff" : "#343A3F", this.setSVGDimensions(), this.w.dom.elLegendForeign = f.createElementNS(T, "foreignObject"), X.setAttrs(this.w.dom.elLegendForeign, { x: 0, y: 0, width: t2.svgWidth, height: t2.svgHeight }), this.w.dom.elLegendWrap = f.createElementNS("http://www.w3.org/1999/xhtml", "div"), this.w.dom.elLegendWrap.classList.add("apexcharts-legend"), this.w.dom.elWrap.appendChild(this.w.dom.elLegendWrap), this.w.dom.Paper.node.appendChild(this.w.dom.elLegendForeign), e2.chart.accessibility.enabled) {
        const t3 = this.getAccessibleChartLabel(), s3 = e2.chart.accessibility.keyboard.enabled && e2.chart.accessibility.keyboard.navigation.enabled ? "application" : "img";
        this.w.dom.Paper.attr({ role: s3, "aria-label": t3 });
        const i3 = f.createElementNS(T, "title");
        if (i3.textContent = e2.title.text || "Chart", this.w.dom.Paper.node.insertBefore(i3, this.w.dom.elLegendForeign.nextSibling), e2.chart.accessibility.description) {
          const t4 = f.createElementNS(T, "desc");
          t4.textContent = e2.chart.accessibility.description, this.w.dom.Paper.node.insertBefore(t4, i3.nextSibling);
        }
      }
      this.w.dom.elGraphical = this.w.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), this.w.dom.elDefs = this.w.dom.Paper.defs(), this.w.dom.Paper.add(this.w.dom.elGraphical), this.w.dom.elGraphical.add(this.w.dom.elDefs);
    }
    plotChartType(t2, e2) {
      const { w: s2, ctx: i2 } = this, { config: a2, globals: o2 } = s2, r2 = { line: { series: [], i: [] }, area: { series: [], i: [] }, scatter: { series: [], i: [] }, bubble: { series: [], i: [] }, bar: { series: [], i: [] }, candlestick: { series: [], i: [] }, boxPlot: { series: [], i: [] }, rangeBar: { series: [], i: [] }, rangeArea: { series: [], seriesRangeEnd: [], i: [] } }, n2 = a2.chart.type || "line";
      let l2 = null, h2 = 0;
      this.w.seriesData.series.forEach((e3, i3) => {
        var a3, o3;
        const c3 = "column" === (null == (a3 = t2[i3]) ? void 0 : a3.type) ? "bar" : (null == (o3 = t2[i3]) ? void 0 : o3.type) || ("column" === n2 ? "bar" : n2);
        r2[c3] ? ("rangeArea" === c3 ? (r2[c3].series.push(this.w.rangeData.seriesRangeStart[i3]), r2[c3].seriesRangeEnd.push(this.w.rangeData.seriesRangeEnd[i3])) : r2[c3].series.push(e3), r2[c3].i.push(i3), "bar" === c3 && (s2.globals.columnSeries = r2.bar)) : ["heatmap", "treemap", "pie", "donut", "polarArea", "radialBar", "radar"].includes(c3) && (l2 = c3), n2 !== c3 && "scatter" !== c3 && h2++;
      }), h2 > 0 && r2.bar.series.length > 0 && a2.plotOptions.bar.horizontal && (h2 -= r2.bar.series.length, r2.bar = { series: [], i: [] }, s2.globals.columnSeries = { series: [], i: [] }), o2.comboCharts || (o2.comboCharts = h2 > 0);
      const c2 = r2.line.series.length > 0 || r2.area.series.length > 0 || r2.scatter.series.length > 0 || r2.bubble.series.length > 0 || r2.rangeArea.series.length > 0 || !o2.comboCharts && ["line", "area", "scatter", "bubble", "rangeArea"].includes(a2.chart.type) ? new (gt("line"))(i2.w, i2, e2) : null, d2 = r2.candlestick.series.length > 0 || r2.boxPlot.series.length > 0 || !o2.comboCharts && ["candlestick", "boxPlot"].includes(a2.chart.type) ? new (gt("candlestick"))(i2.w, i2, e2) : null, g2 = !o2.comboCharts && ["pie", "donut", "polarArea"].includes(a2.chart.type);
      i2.pie = g2 ? new (gt("pie"))(i2.w, i2) : null;
      const p2 = r2.rangeBar.series.length > 0 || !o2.comboCharts && "rangeBar" === a2.chart.type;
      i2.rangeBar = p2 ? new (gt("rangeBar"))(i2.w, i2, e2) : null;
      let x2 = [];
      if (o2.comboCharts) {
        const t3 = new I(this.w);
        if (r2.area.series.length > 0 && x2.push(...t3.drawSeriesByGroup(r2.area, o2.areaGroups, "area", c2)), r2.bar.series.length > 0) if (a2.chart.stacked) {
          const t4 = new (gt("barStacked"))(i2.w, i2, e2);
          x2.push(t4.draw(r2.bar.series, r2.bar.i));
        } else i2.bar = new (gt("bar"))(i2.w, i2, e2), x2.push(i2.bar.draw(r2.bar.series, r2.bar.i));
        if (r2.rangeArea.series.length > 0 && x2.push(c2.draw(r2.rangeArea.series, "rangeArea", r2.rangeArea.i, r2.rangeArea.seriesRangeEnd)), r2.line.series.length > 0 && x2.push(...t3.drawSeriesByGroup(r2.line, o2.lineGroups, "line", c2)), r2.candlestick.series.length > 0 && x2.push(d2.draw(r2.candlestick.series, "candlestick", r2.candlestick.i)), r2.boxPlot.series.length > 0 && x2.push(d2.draw(r2.boxPlot.series, "boxPlot", r2.boxPlot.i)), r2.rangeBar.series.length > 0 && x2.push(i2.rangeBar.draw(r2.rangeBar.series, r2.rangeBar.i)), r2.scatter.series.length > 0) {
          const t4 = new (gt("line"))(i2.w, i2, e2, true);
          x2.push(t4.draw(r2.scatter.series, "scatter", r2.scatter.i));
        }
        if (r2.bubble.series.length > 0) {
          const t4 = new (gt("line"))(i2.w, i2, e2, true);
          x2.push(t4.draw(r2.bubble.series, "bubble", r2.bubble.i));
        }
      } else {
        const t3 = a2.chart.type;
        switch (t3) {
          case "line":
            x2 = c2.draw(this.w.seriesData.series, "line");
            break;
          case "area":
            x2 = c2.draw(this.w.seriesData.series, "area");
            break;
          case "bar":
            if (a2.chart.stacked) {
              x2 = new (gt("barStacked"))(i2.w, i2, e2).draw(this.w.seriesData.series);
            } else i2.bar = new (gt("bar"))(i2.w, i2, e2), x2 = i2.bar.draw(this.w.seriesData.series);
            break;
          case "candlestick":
            x2 = d2.draw(this.w.seriesData.series, "candlestick");
            break;
          case "boxPlot":
            x2 = d2.draw(this.w.seriesData.series, t3);
            break;
          case "rangeBar":
            x2 = i2.rangeBar.draw(this.w.seriesData.series);
            break;
          case "rangeArea":
            x2 = c2.draw(this.w.rangeData.seriesRangeStart, "rangeArea", void 0, this.w.rangeData.seriesRangeEnd);
            break;
          case "heatmap":
            x2 = new (gt("heatmap"))(i2.w, i2, e2).draw(this.w.seriesData.series);
            break;
          case "treemap":
            x2 = new (gt("treemap"))(i2.w, i2).draw(this.w.seriesData.series);
            break;
          case "pie":
          case "donut":
          case "polarArea":
            x2 = i2.pie.draw(this.w.seriesData.series);
            break;
          case "radialBar":
            x2 = new (gt("radialBar"))(i2.w, i2).draw(this.w.seriesData.series);
            break;
          case "radar":
            x2 = new (gt("radar"))(i2.w, i2).draw(this.w.seriesData.series);
            break;
          default:
            x2 = c2.draw(this.w.seriesData.series);
        }
      }
      return x2;
    }
    setSVGDimensions() {
      const { globals: t2, config: e2 } = this.w;
      e2.chart.width = e2.chart.width || "100%", e2.chart.height = e2.chart.height || "auto", t2.svgWidth = e2.chart.width, t2.svgHeight = e2.chart.height;
      let s2 = b.getDimensions(this.el);
      const i2 = e2.chart.width.toString().split(/[0-9]+/g).pop();
      "%" === i2 ? b.isNumber(s2[0]) && (0 === s2[0].width && (s2 = b.getDimensions(this.el.parentNode)), t2.svgWidth = s2[0] * parseInt(e2.chart.width, 10) / 100) : "px" !== i2 && "" !== i2 || (t2.svgWidth = parseInt(e2.chart.width, 10));
      const a2 = String(e2.chart.height).toString().split(/[0-9]+/g).pop();
      if ("auto" !== t2.svgHeight && "" !== t2.svgHeight) if ("%" === a2) {
        const s3 = b.getDimensions(this.el.parentNode);
        t2.svgHeight = s3[1] * parseInt(e2.chart.height, 10) / 100;
      } else t2.svgHeight = parseInt(e2.chart.height, 10);
      else t2.svgHeight = t2.axisCharts ? t2.svgWidth / 1.61 : t2.svgWidth / 1.2;
      if (t2.svgWidth = Math.max(t2.svgWidth, 0), t2.svgHeight = Math.max(t2.svgHeight, 0), X.setAttrs(this.w.dom.Paper.node, { width: t2.svgWidth, height: t2.svgHeight }), "%" !== a2 && h.isBrowser()) {
        const s3 = e2.chart.sparkline.enabled ? 0 : t2.axisCharts ? e2.chart.parentHeightOffset : 0;
        this.w.dom.Paper.node.parentNode.parentNode.style.minHeight = `${t2.svgHeight + s3}px`;
      }
      this.w.dom.elWrap.style.width = `${t2.svgWidth}px`, this.w.dom.elWrap.style.height = `${t2.svgHeight}px`;
    }
    shiftGraphPosition() {
      const { globals: t2 } = this.w, { translateY: e2, translateX: s2 } = t2;
      X.setAttrs(this.w.dom.elGraphical.node, { transform: `translate(${s2}, ${e2})` });
    }
    resizeNonAxisCharts() {
      var t2, e2;
      const { w: s2 } = this;
      let i2 = 0, a2 = s2.config.chart.sparkline.enabled ? 1 : 15;
      a2 += s2.config.grid.padding.bottom, ["top", "bottom"].includes(s2.config.legend.position) && s2.config.legend.show && !s2.config.legend.floating && (i2 = (null != (e2 = null == (t2 = this.ctx.legend) ? void 0 : t2.legendHelpers.getLegendDimensions().clwh) ? e2 : 0) + 7);
      const o2 = s2.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie");
      let r2 = 2.05 * s2.globals.radialSize;
      if (o2 && !s2.config.chart.sparkline.enabled && 0 !== s2.config.plotOptions.radialBar.startAngle) {
        const t3 = b.getBoundingClientRect(o2);
        r2 = t3.bottom;
        const e3 = t3.bottom - t3.top;
        r2 = Math.max(2.05 * s2.globals.radialSize, e3);
      }
      const n2 = Math.ceil(r2 + this.w.layout.translateY + i2 + a2);
      this.w.dom.elLegendForeign && this.w.dom.elLegendForeign.setAttribute("height", n2), s2.config.chart.height && String(s2.config.chart.height).includes("%") || (this.w.dom.elWrap.style.height = `${n2}px`, X.setAttrs(this.w.dom.Paper.node, { height: n2 }), h.isBrowser() && (this.w.dom.Paper.node.parentNode.parentNode.style.minHeight = `${n2}px`));
    }
    coreCalculations() {
      new j(this.w).init();
    }
    resetGlobals() {
      const t2 = () => this.w.config.series.map(() => []), e2 = new P(), { globals: s2 } = this.w, i2 = { dataWasParsed: this.w.axisFlags.dataWasParsed, originalSeries: s2.originalSeries };
      e2.initGlobalVars(s2), s2.seriesXvalues = t2(), s2.seriesYvalues = t2(), i2.dataWasParsed && (this.w.axisFlags.dataWasParsed = i2.dataWasParsed, s2.originalSeries = i2.originalSeries);
    }
    isMultipleY() {
      return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = true, true);
    }
    xySettings() {
      const { w: t2 } = this;
      let e2 = null;
      if (t2.globals.axisCharts) {
        if ("back" === t2.config.xaxis.crosshairs.position && new K(this.w).drawXCrosshairs(), "back" === t2.config.yaxis[0].crosshairs.position && new K(this.w).drawYCrosshairs(), "datetime" === t2.config.xaxis.type && void 0 === t2.config.xaxis.labels.formatter) {
          this.ctx.timeScale = new ht(this.w, this.ctx);
          let e3 = [];
          isFinite(t2.globals.minX) && isFinite(t2.globals.maxX) && !t2.globals.isBarHorizontal ? e3 = this.ctx.timeScale.calculateTimeScaleTicks(t2.globals.minX, t2.globals.maxX) : t2.globals.isBarHorizontal && (e3 = this.ctx.timeScale.calculateTimeScaleTicks(t2.globals.minY, t2.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(e3);
        }
        e2 = new I(this.w).getCalculatedRatios();
      }
      return e2;
    }
    updateSourceChart(t2) {
      this.ctx.w.interact.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t2.w.globals.minX, max: t2.w.globals.maxX } } } }, false, false);
    }
    setupBrushHandler() {
      const { ctx: t2, w: e2 } = this;
      if (e2.config.chart.brush.enabled && "function" != typeof e2.config.chart.events.selection) {
        const s2 = Array.isArray(e2.config.chart.brush.targets) ? e2.config.chart.brush.targets : [e2.config.chart.brush.target];
        s2.forEach((e3) => {
          const s3 = t2.constructor.getChartByID(e3);
          s3.w.globals.brushSource = this.ctx, "function" != typeof s3.w.config.chart.events.zoomed && (s3.w.config.chart.events.zoomed = () => this.updateSourceChart(s3)), "function" != typeof s3.w.config.chart.events.scrolled && (s3.w.config.chart.events.scrolled = () => this.updateSourceChart(s3));
        }), e2.config.chart.events.selection = (e3, i2) => {
          s2.forEach((e4) => {
            t2.constructor.getChartByID(e4).ctx.updateHelpers._updateOptions({ xaxis: { min: i2.xaxis.min, max: i2.xaxis.max } }, false, false, false, false);
          });
        };
      }
    }
    getAccessibleChartLabel() {
      const t2 = this.w, e2 = t2.config;
      let s2 = "";
      if (e2.chart.accessibility && e2.chart.accessibility.description) s2 = e2.chart.accessibility.description;
      else if (e2.title.text) {
        const t3 = e2.chart.type;
        s2 = `${e2.title.text}. ${t3} chart`, e2.subtitle.text && (s2 += `. ${e2.subtitle.text}`);
      } else {
        s2 = `${e2.chart.type} chart with ${t2.seriesData.series.length || (e2.series ? e2.series.length : 0)} data series`;
      }
      return s2;
    }
  }
  class xt {
    constructor(t2, { resetGlobals: e2 = () => {
    }, isMultipleY: s2 = () => {
    } } = {}) {
      this.w = t2, this.resetGlobals = e2, this.isMultipleY = s2, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new I(this.w);
    }
    getFirstDataPoint() {
      const t2 = this.w.config.series, e2 = new Q(this.w);
      return this.activeSeriesIndex = e2.getActiveConfigSeriesIndex(), t2[this.activeSeriesIndex] && t2[this.activeSeriesIndex].data && t2[this.activeSeriesIndex].data.length > 0 && null !== t2[this.activeSeriesIndex].data[0] && void 0 !== t2[this.activeSeriesIndex].data[0] ? t2[this.activeSeriesIndex].data[0] : null;
    }
    isMultiFormat() {
      return this.isFormatXY() || this.isFormat2DArray();
    }
    isFormatXY() {
      const t2 = this.getFirstDataPoint();
      return t2 && void 0 !== t2.x;
    }
    isFormat2DArray() {
      const t2 = this.getFirstDataPoint();
      return t2 && Array.isArray(t2);
    }
    handleFormat2DArray(t2, e2) {
      const s2 = this.w.config, i2 = t2[e2].data, a2 = "boxPlot" === s2.chart.type || "boxPlot" === s2.series[e2].type;
      for (let t3 = 0; t3 < i2.length; t3++) {
        const e3 = i2[t3], o2 = e3[0], r2 = e3[1], n2 = e3[2];
        if (void 0 !== r2 && (Array.isArray(r2) && 4 === r2.length && !a2 ? this.twoDSeries.push(b.parseNumber(r2[3])) : e3.length >= 5 ? this.twoDSeries.push(b.parseNumber(e3[4])) : this.twoDSeries.push(b.parseNumber(r2)), this.w.axisFlags.dataFormatXNumeric = true), "datetime" === s2.xaxis.type) {
          let t4 = new Date(o2);
          t4 = t4.getTime(), this.twoDSeriesX.push(t4);
        } else this.twoDSeriesX.push(o2);
        void 0 !== n2 && (this.threeDSeries.push(n2), this.w.axisFlags.isDataXYZ = true);
      }
    }
    handleFormatXY(t2, e2) {
      const s2 = this.w.config, i2 = this.w.globals, a2 = new m(this.w), o2 = t2[e2].data;
      let r2 = e2;
      i2.collapsedSeriesIndices.indexOf(e2) > -1 && (r2 = this.activeSeriesIndex);
      const n2 = t2[r2].data;
      for (let t3 = 0; t3 < o2.length; t3++) {
        const s3 = o2[t3];
        if (void 0 !== s3.y) {
          const t4 = Array.isArray(s3.y) ? b.parseNumber(s3.y[s3.y.length - 1]) : b.parseNumber(s3.y);
          this.twoDSeries.push(t4);
        }
        void 0 === this.seriesGoals[e2] && (this.seriesGoals[e2] = []), void 0 !== s3.goals && Array.isArray(s3.goals) ? this.seriesGoals[e2].push(s3.goals) : this.seriesGoals[e2].push(null), void 0 !== s3.z && (this.threeDSeries.push(s3.z), this.w.axisFlags.isDataXYZ = true);
      }
      for (let t3 = 0; t3 < n2.length; t3++) {
        const e3 = n2[t3].x, o3 = "string" == typeof e3, r3 = Array.isArray(e3), l2 = !r3 && !!a2.isValidDate(e3);
        if (o3 || l2) if (o3 || s2.xaxis.convertedCatToNumeric) {
          const t4 = i2.isBarHorizontal && this.w.axisFlags.isRangeData;
          "datetime" !== s2.xaxis.type || t4 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(e3), isNaN(e3) || "category" === this.w.config.xaxis.type || "string" == typeof e3 || (this.w.axisFlags.isXNumeric = true)) : this.twoDSeriesX.push(a2.parseDate(e3));
        } else "datetime" === s2.xaxis.type ? this.twoDSeriesX.push(a2.parseDate(e3.toString())) : (this.w.axisFlags.dataFormatXNumeric = true, this.w.axisFlags.isXNumeric = true, this.twoDSeriesX.push(parseFloat(e3)));
        else r3 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(e3)) : (this.w.axisFlags.isXNumeric = true, this.w.axisFlags.dataFormatXNumeric = true, this.twoDSeriesX.push(e3));
      }
    }
    handleRangeData(t2, e2) {
      let s2 = {};
      return this.isFormat2DArray() ? s2 = this.handleRangeDataFormat("array", t2, e2) : this.isFormatXY() && (s2 = this.handleRangeDataFormat("xy", t2, e2)), this.w.rangeData.seriesRangeStart[e2] = void 0 === s2.start ? [] : s2.start, this.w.rangeData.seriesRangeEnd[e2] = void 0 === s2.end ? [] : s2.end, this.w.rangeData.seriesRange[e2] = s2.rangeUniques, this.w.rangeData.seriesRange.forEach((t3) => {
        t3 && t3.forEach((t4) => {
          const e3 = t4.y, s3 = e3.length;
          if (!(s3 <= 1)) for (let i2 = 0; i2 < s3; i2++) {
            const a2 = e3[i2], o2 = a2.y1, r2 = a2.y2;
            for (let n2 = i2 + 1; n2 < s3; n2++) {
              const s4 = e3[n2], i3 = s4.y1;
              o2 <= s4.y2 && i3 <= r2 && (t4.overlaps.indexOf(a2.rangeName) < 0 && t4.overlaps.push(a2.rangeName), t4.overlaps.indexOf(s4.rangeName) < 0 && t4.overlaps.push(s4.rangeName));
            }
          }
        });
      }), s2;
    }
    handleCandleStickBoxData(t2, e2) {
      let s2 = {};
      return this.isFormat2DArray() ? s2 = this.handleCandleStickBoxDataFormat("array", t2, e2) : this.isFormatXY() && (s2 = this.handleCandleStickBoxDataFormat("xy", t2, e2)), this.w.candleData.seriesCandleO[e2] = s2.o, this.w.candleData.seriesCandleH[e2] = s2.h, this.w.candleData.seriesCandleM[e2] = s2.m, this.w.candleData.seriesCandleL[e2] = s2.l, this.w.candleData.seriesCandleC[e2] = s2.c, s2;
    }
    handleRangeDataFormat(t2, e2, s2) {
      const i2 = [], a2 = [], o2 = /* @__PURE__ */ new Map(), r2 = [];
      if (e2[s2].data.forEach((t3) => {
        if (!o2.has(t3.x)) {
          const e3 = { x: t3.x, overlaps: [], y: [] };
          o2.set(t3.x, e3), r2.push(e3);
        }
      }), "array" === t2) for (let t3 = 0; t3 < e2[s2].data.length; t3++) Array.isArray(e2[s2].data[t3]) ? (i2.push(e2[s2].data[t3][1][0]), a2.push(e2[s2].data[t3][1][1])) : (i2.push(e2[s2].data[t3]), a2.push(e2[s2].data[t3]));
      else if ("xy" === t2) for (let t3 = 0; t3 < e2[s2].data.length; t3++) {
        const r3 = Array.isArray(e2[s2].data[t3].y), n2 = b.randomId(), l2 = e2[s2].data[t3].x, h2 = { y1: r3 ? e2[s2].data[t3].y[0] : e2[s2].data[t3].y, y2: r3 ? e2[s2].data[t3].y[1] : e2[s2].data[t3].y, rangeName: n2 };
        e2[s2].data[t3].rangeName = n2;
        const c2 = o2.get(l2);
        c2 && c2.y.push(h2), i2.push(h2.y1), a2.push(h2.y2);
      }
      return { start: i2, end: a2, rangeUniques: r2 };
    }
    handleCandleStickBoxDataFormat(t2, e2, s2) {
      const i2 = this.w, a2 = "boxPlot" === i2.config.chart.type || "boxPlot" === i2.config.series[s2].type, o2 = [], r2 = [], n2 = [], l2 = [], h2 = [], c2 = e2[s2].data;
      let d2;
      if ("array" === t2) {
        d2 = a2 && 6 === c2[0].length || !a2 && 5 === c2[0].length ? (t3) => t3.slice(1) : (t3) => Array.isArray(t3[1]) ? t3[1] : [];
      } else d2 = (t3) => Array.isArray(t3.y) ? t3.y : [];
      for (let t3 = 0; t3 < c2.length; t3++) {
        const e3 = d2(c2[t3]);
        e3 && e3.length >= 2 && (o2.push(e3[0]), r2.push(e3[1]), a2 ? (n2.push(e3[2]), l2.push(e3[3]), h2.push(e3[4])) : (l2.push(e3[2]), h2.push(e3[3])));
      }
      return { o: o2, h: r2, m: n2, l: l2, c: h2 };
    }
    parseDataAxisCharts(t2) {
      const e2 = this.w.config, s2 = this.w.globals, i2 = new m(this.w), a2 = e2.labels.length > 0 ? e2.labels.slice() : e2.xaxis.categories.slice();
      this.w.axisFlags.isRangeBar = "rangeBar" === e2.chart.type && s2.isBarHorizontal, this.w.labelData.hasXaxisGroups = "category" === e2.xaxis.type && e2.xaxis.group.groups.length > 0, this.w.labelData.hasXaxisGroups && (this.w.labelData.groups = e2.xaxis.group.groups), t2.forEach((t3, e3) => {
        void 0 !== t3.name ? this.w.seriesData.seriesNames.push(t3.name) : this.w.seriesData.seriesNames.push("series-" + parseInt(e3 + 1, 10));
      }), this.coreUtils.setSeriesYAxisMappings();
      const o2 = [], r2 = [...new Set(e2.series.map((t3) => t3.group))];
      e2.series.forEach((t3, e3) => {
        const s3 = r2.indexOf(t3.group);
        o2[s3] || (o2[s3] = []), o2[s3].push(this.w.seriesData.seriesNames[e3]);
      }), this.w.labelData.seriesGroups = o2;
      const n2 = () => {
        for (let t3 = 0; t3 < a2.length; t3++) if ("string" == typeof a2[t3]) {
          if (!i2.isValidDate(a2[t3])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
          this.twoDSeriesX.push(i2.parseDate(a2[t3]));
        } else this.twoDSeriesX.push(a2[t3]);
      };
      for (let s3 = 0; s3 < t2.length; s3++) {
        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t2[s3].data) return;
        if ("rangeBar" !== e2.chart.type && "rangeArea" !== e2.chart.type && "rangeBar" !== t2[s3].type && "rangeArea" !== t2[s3].type || (this.w.axisFlags.isRangeData = true, this.handleRangeData(t2, s3)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t2, s3) : this.isFormatXY() && this.handleFormatXY(t2, s3), "candlestick" !== e2.chart.type && "candlestick" !== t2[s3].type && "boxPlot" !== e2.chart.type && "boxPlot" !== t2[s3].type || this.handleCandleStickBoxData(t2, s3), this.w.seriesData.series.push(this.twoDSeries), this.w.labelData.labels.push(this.twoDSeriesX), this.w.seriesData.seriesX.push(this.twoDSeriesX), this.w.seriesData.seriesGoals = this.seriesGoals, s3 !== this.activeSeriesIndex || this.fallbackToCategory || (this.w.axisFlags.isXNumeric = true);
        else {
          "datetime" === e2.xaxis.type ? (this.w.axisFlags.isXNumeric = true, n2(), this.w.seriesData.seriesX.push(this.twoDSeriesX)) : "numeric" === e2.xaxis.type && (this.w.axisFlags.isXNumeric = true, a2.length > 0 && (this.twoDSeriesX = a2, this.w.seriesData.seriesX.push(this.twoDSeriesX))), this.w.labelData.labels.push(this.twoDSeriesX);
          const i3 = t2[s3].data.map((t3) => b.parseNumber(t3));
          this.w.seriesData.series.push(i3);
        }
        this.w.seriesData.seriesZ.push(this.threeDSeries), void 0 !== t2[s3].color ? this.w.seriesData.seriesColors.push(t2[s3].color) : this.w.seriesData.seriesColors.push(void 0);
      }
      return this.w;
    }
    parseDataNonAxisCharts(t2) {
      const e2 = this.w.config, s2 = Array.isArray(t2) && t2.every((t3) => "number" == typeof t3) && e2.labels.length > 0;
      Array.isArray(t2) && t2.some((t3) => t3 && "object" == typeof t3 && t3.data || t3 && "object" == typeof t3 && t3.parsing);
      if (s2) {
        this.w.seriesData.series = t2.slice(), this.w.seriesData.seriesNames = e2.labels.slice();
        for (let t3 = 0; t3 < this.w.seriesData.series.length; t3++) void 0 === this.w.seriesData.seriesNames[t3] && this.w.seriesData.seriesNames.push("series-" + (t3 + 1));
        return this.w;
      }
      if (Array.isArray(t2) && t2.every((t3) => "number" == typeof t3)) {
        this.w.seriesData.series = t2.slice(), this.w.seriesData.seriesNames = [];
        for (let t3 = 0; t3 < this.w.seriesData.series.length; t3++) this.w.seriesData.seriesNames.push(e2.labels[t3] || `series-${t3 + 1}`);
        return this.w;
      }
      const i2 = this.extractPieDataFromSeries(t2);
      this.w.seriesData.series = i2.values, this.w.seriesData.seriesNames = i2.labels, "radialBar" === e2.chart.type && (this.w.seriesData.series = this.w.seriesData.series.map((t3) => {
        const e3 = b.parseNumber(t3);
        return e3;
      }));
      for (let t3 = 0; t3 < this.w.seriesData.series.length; t3++) void 0 === this.w.seriesData.seriesNames[t3] && this.w.seriesData.seriesNames.push("series-" + (t3 + 1));
      return this.w;
    }
    resetParsingFlags() {
      const t2 = this.w;
      t2.axisFlags.dataWasParsed = false, t2.globals.originalSeries = null, t2.config.series && t2.config.series.forEach((t3) => {
        t3.__apexParsed && delete t3.__apexParsed;
      });
    }
    extractPieDataFromSeries(t2) {
      const e2 = [], s2 = [];
      if (!Array.isArray(t2)) return { values: [], labels: [] };
      if (0 === t2.length) return { values: [], labels: [] };
      const i2 = t2[0];
      return "object" == typeof i2 && null !== i2 && i2.data ? (this.extractPieDataFromSeriesObjects(t2, e2, s2), { values: e2, labels: s2 }) : { values: [], labels: [] };
    }
    extractPieDataFromSeriesObjects(t2, e2, s2) {
      t2.forEach((t3, i2) => {
        t3.data && Array.isArray(t3.data) && t3.data.forEach((t4) => {
          "object" == typeof t4 && null !== t4 && void 0 !== t4.x && void 0 !== t4.y && (s2.push(String(t4.x)), e2.push(b.parseNumber(t4.y)));
        });
      });
    }
    handleExternalLabelsData(t2) {
      const e2 = this.w.config;
      if (e2.xaxis.categories.length > 0) this.w.labelData.labels = e2.xaxis.categories;
      else if (e2.labels.length > 0) this.w.labelData.labels = e2.labels.slice();
      else if (this.fallbackToCategory) {
        if (this.w.labelData.labels = this.w.labelData.labels[0], this.w.rangeData.seriesRange.length && (this.w.rangeData.seriesRange.map((t3) => {
          t3.forEach((t4) => {
            this.w.labelData.labels.indexOf(t4.x) < 0 && t4.x && this.w.labelData.labels.push(t4.x);
          });
        }), this.w.labelData.labels = Array.from(new Set(this.w.labelData.labels.map(JSON.stringify)), JSON.parse)), e2.xaxis.convertedCatToNumeric) {
          new A(e2).convertCatToNumericXaxis(e2, this.w.seriesData.seriesX[0]), this._generateExternalLabels(t2);
        }
      } else this._generateExternalLabels(t2);
    }
    _generateExternalLabels(t2) {
      const e2 = this.w.globals, s2 = this.w.config;
      let i2 = [];
      if (e2.axisCharts) {
        if (this.w.seriesData.series.length > 0) if (this.isFormatXY()) {
          const t3 = s2.series.map((t4) => t4.data.filter((t5, e4, s3) => s3.findIndex((e5) => e5.x === t5.x) === e4)), e3 = t3.reduce((t4, e4, s3, i3) => i3[t4].length > e4.length ? t4 : s3, 0);
          for (let s3 = 0; s3 < t3[e3].length; s3++) i2.push(s3 + 1);
        } else for (let t3 = 0; t3 < this.w.seriesData.series[e2.maxValsInArrayIndex].length; t3++) i2.push(t3 + 1);
        this.w.seriesData.seriesX = [];
        for (let e3 = 0; e3 < t2.length; e3++) this.w.seriesData.seriesX.push(i2);
        this.w.globals.isBarHorizontal || (this.w.axisFlags.isXNumeric = true);
      }
      if (0 === i2.length) {
        i2 = e2.axisCharts ? [] : this.w.seriesData.series.map((t3, e3) => e3 + 1);
        for (let e3 = 0; e3 < t2.length; e3++) this.w.seriesData.seriesX.push(i2);
      }
      this.w.labelData.labels = i2, s2.xaxis.convertedCatToNumeric && (this.w.labelData.categoryLabels = i2.map((t3) => s2.xaxis.labels.formatter(t3))), this.w.axisFlags.noLabelsProvided = true;
    }
    parseRawDataIfNeeded(t2) {
      const e2 = this.w.config, s2 = this.w.globals, i2 = e2.parsing;
      if (this.w.axisFlags.dataWasParsed) return t2;
      if (!i2 && !t2.some((t3) => t3.parsing)) return t2;
      const a2 = t2.map((t3, e3) => {
        var s3, a3, o2;
        if (!t3.data || !Array.isArray(t3.data) || 0 === t3.data.length) return t3;
        const r2 = { x: (null == (s3 = t3.parsing) ? void 0 : s3.x) || (null == i2 ? void 0 : i2.x), y: (null == (a3 = t3.parsing) ? void 0 : a3.y) || (null == i2 ? void 0 : i2.y), z: (null == (o2 = t3.parsing) ? void 0 : o2.z) || (null == i2 ? void 0 : i2.z) };
        if (!r2.x && !r2.y) return t3;
        const h2 = t3.data[0];
        if ("object" == typeof h2 && null !== h2 && (Object.prototype.hasOwnProperty.call(h2, "x") || Object.prototype.hasOwnProperty.call(h2, "y")) || Array.isArray(h2)) return t3;
        if (!r2.x || !r2.y || Array.isArray(r2.y) && 0 === r2.y.length) return t3;
        const c2 = t3.data.map((t4, e4) => {
          if ("object" != typeof t4 || null === t4) return t4;
          const s4 = this.getNestedValue(t4, r2.x);
          let i3, a4;
          if (Array.isArray(r2.y)) {
            const e5 = r2.y.map((e6) => this.getNestedValue(t4, e6));
            i3 = "bubble" === this.w.config.chart.type && 2 === e5.length ? e5[0] : e5;
          } else i3 = this.getNestedValue(t4, r2.y);
          r2.z && (a4 = this.getNestedValue(t4, r2.z));
          const o3 = { x: s4, y: i3 };
          if ("bubble" === this.w.config.chart.type && Array.isArray(r2.y) && 2 === r2.y.length) {
            const e5 = this.getNestedValue(t4, r2.y[1]);
            void 0 !== e5 && (o3.z = e5);
          }
          return void 0 !== a4 && (o3.z = a4), o3;
        });
        return l(n({}, t3), { data: c2, __apexParsed: true });
      });
      return this.w.axisFlags.dataWasParsed = true, s2.originalSeries || (s2.originalSeries = b.clone(t2)), a2;
    }
    getNestedValue(t2, e2) {
      if (!t2 || "object" != typeof t2 || !e2) return;
      if (-1 === e2.indexOf(".")) return t2[e2];
      const s2 = e2.split(".");
      let i2 = t2;
      for (let t3 = 0; t3 < s2.length; t3++) {
        if (null == i2 || "object" != typeof i2) return;
        i2 = i2[s2[t3]];
      }
      return i2;
    }
    parseData(t2) {
      const e2 = this.w, s2 = e2.config, i2 = e2.globals;
      if (t2 = this.parseRawDataIfNeeded(t2), s2.series = t2, i2.initialSeries = b.clone(t2), this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = false, this.resetGlobals(), this.isMultipleY(), i2.axisCharts ? (this.parseDataAxisCharts(t2), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t2), s2.chart.stacked) {
        const t3 = new Q(this.w);
        this.w.seriesData.series = t3.setNullSeriesToZeroValues(this.w.seriesData.series);
      }
      this.coreUtils.getSeriesTotals(), i2.axisCharts && (this.w.seriesData.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), this.w.seriesData.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), this.w.axisFlags.dataFormatXNumeric || this.w.axisFlags.isXNumeric && ("numeric" !== s2.xaxis.type || 0 !== s2.labels.length || 0 !== s2.xaxis.categories.length) || this.handleExternalLabelsData(t2);
      const a2 = this.coreUtils.getCategoryLabels(this.w.labelData.labels);
      for (let t3 = 0; t3 < a2.length; t3++) if (Array.isArray(a2[t3])) {
        this.w.axisFlags.isMultiLineX = true;
        break;
      }
      return { seriesData: { series: this.w.seriesData.series, seriesNames: this.w.seriesData.seriesNames, seriesX: this.w.seriesData.seriesX, seriesZ: this.w.seriesData.seriesZ, seriesColors: this.w.seriesData.seriesColors, seriesGoals: this.w.seriesData.seriesGoals, initialSeries: i2.initialSeries, originalSeries: i2.originalSeries, stackedSeriesTotals: this.w.seriesData.stackedSeriesTotals, stackedSeriesTotalsByGroups: this.w.seriesData.stackedSeriesTotalsByGroups, noLabelsProvided: this.w.axisFlags.noLabelsProvided }, rangeData: { seriesRangeStart: this.w.rangeData.seriesRangeStart, seriesRangeEnd: this.w.rangeData.seriesRangeEnd, seriesRange: this.w.rangeData.seriesRange }, candleData: { seriesCandleO: this.w.candleData.seriesCandleO, seriesCandleH: this.w.candleData.seriesCandleH, seriesCandleM: this.w.candleData.seriesCandleM, seriesCandleL: this.w.candleData.seriesCandleL, seriesCandleC: this.w.candleData.seriesCandleC }, labelData: { labels: this.w.labelData.labels, categoryLabels: this.w.labelData.categoryLabels }, axisFlags: { isXNumeric: this.w.axisFlags.isXNumeric, dataFormatXNumeric: this.w.axisFlags.dataFormatXNumeric, isDataXYZ: this.w.axisFlags.isDataXYZ, isRangeData: this.w.axisFlags.isRangeData, isRangeBar: this.w.axisFlags.isRangeBar, isMultiLineX: this.w.axisFlags.isMultiLineX, dataWasParsed: this.w.axisFlags.dataWasParsed, hasXaxisGroups: this.w.labelData.hasXaxisGroups, groups: this.w.labelData.groups, seriesGroups: this.w.labelData.seriesGroups } };
    }
    excludeCollapsedSeriesInYAxis() {
      const t2 = this.w, e2 = [];
      t2.globals.seriesYAxisMap.forEach((s2, i2) => {
        let a2 = 0;
        s2.forEach((e3) => {
          -1 !== t2.globals.collapsedSeriesIndices.indexOf(e3) && a2++;
        }), a2 > 0 && a2 == s2.length && e2.push(i2);
      }), t2.globals.ignoreYAxisIndexes = e2.map((t3) => t3);
    }
  }
  class ut {
    static invalidateAll(t2) {
      t2 && t2.globals && (t2.globals.cachedSelectors && (t2.globals.cachedSelectors = {}), t2.globals.domCache && t2.globals.domCache.clear(), t2.globals.dimensionCache = {});
    }
    static invalidateDimensions(t2) {
      t2 && t2.globals && (t2.globals.dimensionCache = {});
    }
    static invalidateSelectors(t2) {
      t2 && t2.globals && t2.globals.cachedSelectors && (t2.globals.cachedSelectors = {});
    }
    static getCachedSelector(t2, e2, s2) {
      return t2 && t2.globals ? (t2.globals.cachedSelectors || (t2.globals.cachedSelectors = {}), t2.globals.cachedSelectors[e2] || (t2.globals.cachedSelectors[e2] = s2()), t2.globals.cachedSelectors[e2]) : s2();
    }
    static getCachedDimension(t2, e2, s2, i2 = 1e3) {
      if (!t2 || !t2.globals) return s2();
      t2.globals.dimensionCache || (t2.globals.dimensionCache = {});
      const a2 = t2.globals.dimensionCache[e2], o2 = Date.now();
      if (a2 && a2.lastUpdate && o2 - a2.lastUpdate < i2) return a2.value;
      const r2 = s2();
      return t2.globals.dimensionCache[e2] = { value: r2, lastUpdate: o2 }, r2;
    }
    static cacheDOMElement(t2, e2, s2) {
      t2 && t2.globals && (t2.globals.domCache || (t2.globals.domCache = /* @__PURE__ */ new Map()), t2.globals.domCache.set(e2, s2));
    }
    static getCachedDOMElement(t2, e2) {
      return t2 && t2.globals && t2.globals.domCache && t2.globals.domCache.get(e2) || null;
    }
  }
  class ft {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2;
    }
    _updateOptions(t2, e2 = false, s2 = true, i2 = true, a2 = false) {
      return new Promise((o2) => {
        let r2 = [this.ctx];
        i2 && (r2 = this.ctx.getSyncedCharts()), this.w.globals.isExecCalled && (r2 = [this.ctx], this.w.globals.isExecCalled = false), r2.forEach((i3, n2) => {
          const l2 = i3.w;
          if (l2.globals.shouldAnimate = s2, e2 || (l2.globals.resized = true, l2.globals.dataChanged = true, s2 && i3.series.getPreviousPaths()), t2 && "object" == typeof t2 && (i3.config = new k(t2), t2 = I.extendArrayProps(i3.config, t2, l2), i3.w.globals.chartID !== this.w.globals.chartID && delete t2.series, l2.config = b.extend(l2.config, t2), a2 && (l2.globals.lastXAxis = t2.xaxis ? b.clone(t2.xaxis) : [], l2.globals.lastYAxis = t2.yaxis ? b.clone(t2.yaxis) : [], l2.globals.initialConfig = b.extend({}, l2.config), l2.globals.initialSeries = b.clone(l2.config.series), t2.series))) {
            for (let t3 = 0; t3 < l2.globals.collapsedSeriesIndices.length; t3++) {
              const e3 = l2.config.series[l2.globals.collapsedSeriesIndices[t3]];
              l2.globals.collapsedSeries[t3].data = l2.globals.axisCharts ? e3.data.slice() : e3;
            }
            for (let t3 = 0; t3 < l2.globals.ancillaryCollapsedSeriesIndices.length; t3++) {
              const e3 = l2.config.series[l2.globals.ancillaryCollapsedSeriesIndices[t3]];
              l2.globals.ancillaryCollapsedSeries[t3].data = l2.globals.axisCharts ? e3.data.slice() : e3;
            }
            i3.series.emptyCollapsedSeries(l2.config.series);
          }
          return i3.update(t2).then(() => {
            n2 === r2.length - 1 && o2(i3);
          });
        });
      });
    }
    _updateSeries(t2, e2, s2 = false) {
      return new Promise((i2) => {
        const a2 = this.w;
        a2.globals.shouldAnimate = e2, a2.globals.dataChanged = true, ut.invalidateSelectors(a2), e2 && this.ctx.series.getPreviousPaths(), this.ctx.data.resetParsingFlags();
        const o2 = this.ctx.data.parseData(t2);
        return this.ctx._writeParsedSeriesData(o2.seriesData), this.ctx._writeParsedRangeData(o2.rangeData), this.ctx._writeParsedCandleData(o2.candleData), this.ctx._writeParsedLabelData(o2.labelData), this.ctx._writeParsedAxisFlags(o2.axisFlags), s2 && (a2.globals.initialConfig.series = b.clone(a2.config.series), a2.globals.initialSeries = b.clone(a2.config.series)), this.ctx.update().then(() => {
          i2(this.ctx);
        });
      });
    }
    _extendSeries(t2, e2) {
      const s2 = this.w, i2 = s2.config.series[e2];
      return l(n({}, s2.config.series[e2]), { name: t2.name ? t2.name : null == i2 ? void 0 : i2.name, color: t2.color ? t2.color : null == i2 ? void 0 : i2.color, type: t2.type ? t2.type : null == i2 ? void 0 : i2.type, group: t2.group ? t2.group : null == i2 ? void 0 : i2.group, hidden: void 0 !== t2.hidden ? t2.hidden : null == i2 ? void 0 : i2.hidden, data: t2.data ? t2.data : null == i2 ? void 0 : i2.data, zIndex: void 0 !== t2.zIndex ? t2.zIndex : e2 });
    }
    toggleDataPointSelection(t2, e2) {
      const s2 = this.w;
      let i2 = null;
      const a2 = `.apexcharts-series[data\\:realIndex='${t2}']`;
      if (s2.globals.axisCharts ? i2 = s2.dom.Paper.findOne(`${a2} path[j='${e2}'], ${a2} circle[j='${e2}'], ${a2} rect[j='${e2}']`) : void 0 === e2 && (i2 = s2.dom.Paper.findOne(`${a2} path[j='${t2}']`), "pie" !== s2.config.chart.type && "polarArea" !== s2.config.chart.type && "donut" !== s2.config.chart.type || this.ctx.pie.pieClicked(t2)), !i2) return null;
      new X(this.w).pathMouseDown(i2, null);
      return i2.node ? i2.node : null;
    }
    forceXAxisUpdate(t2) {
      const e2 = this.w;
      if (["min", "max"].forEach((s2) => {
        void 0 !== t2.xaxis[s2] && (e2.config.xaxis[s2] = t2.xaxis[s2], e2.globals.lastXAxis[s2] = t2.xaxis[s2]);
      }), t2.xaxis.categories && t2.xaxis.categories.length && (e2.config.xaxis.categories = t2.xaxis.categories), e2.config.xaxis.convertedCatToNumeric) {
        const e3 = new A(t2);
        t2 = e3.convertCatToNumericXaxis(t2, this.ctx);
      }
      return t2;
    }
    forceYAxisUpdate(t2) {
      return t2.chart && t2.chart.stacked && "100%" === t2.chart.stackType && (Array.isArray(t2.yaxis) ? t2.yaxis.forEach((e2, s2) => {
        t2.yaxis[s2].min = 0, t2.yaxis[s2].max = 100;
      }) : (t2.yaxis.min = 0, t2.yaxis.max = 100)), t2;
    }
    revertDefaultAxisMinMax(t2) {
      const e2 = this.w;
      let s2 = e2.globals.lastXAxis, i2 = e2.globals.lastYAxis;
      t2 && t2.xaxis && (s2 = t2.xaxis), t2 && t2.yaxis && (i2 = t2.yaxis), e2.config.xaxis.min = s2.min, e2.config.xaxis.max = s2.max;
      const a2 = (t3) => {
        void 0 !== i2[t3] && (e2.config.yaxis[t3].min = i2[t3].min, e2.config.yaxis[t3].max = i2[t3].max);
      };
      e2.config.yaxis.map((t3, s3) => {
        e2.interact.zoomed || void 0 !== i2[s3] ? a2(s3) : void 0 !== this.ctx.opts.yaxis[s3] && (t3.min = this.ctx.opts.yaxis[s3].min, t3.max = this.ctx.opts.yaxis[s3].max);
      });
    }
  }
  class bt {
    constructor(t2) {
      this.w = t2.w, this.ttCtx = t2;
    }
    getNearestValues({ hoverArea: t2, elGrid: e2, clientX: s2, clientY: i2 }) {
      const a2 = this.w, o2 = e2.getBoundingClientRect(), r2 = o2.width, n2 = o2.height;
      let l2 = r2 / (a2.globals.dataPoints - 1);
      const h2 = n2 / a2.globals.dataPoints, c2 = this.hasBars();
      !a2.globals.comboCharts && !c2 || a2.config.xaxis.convertedCatToNumeric || (l2 = r2 / a2.globals.dataPoints);
      const d2 = s2 - o2.left - a2.globals.barPadForNumericAxis, g2 = i2 - o2.top;
      d2 < 0 || g2 < 0 || d2 > r2 || g2 > n2 ? (t2.classList.remove("hovering-zoom"), t2.classList.remove("hovering-pan")) : a2.interact.zoomEnabled ? (t2.classList.remove("hovering-pan"), t2.classList.add("hovering-zoom")) : a2.interact.panEnabled && (t2.classList.remove("hovering-zoom"), t2.classList.add("hovering-pan"));
      let p2 = Math.round(d2 / l2);
      const x2 = Math.floor(g2 / h2);
      c2 && !a2.config.xaxis.convertedCatToNumeric && (p2 = Math.ceil(d2 / l2), p2 -= 1);
      let u2 = null, f2 = null, m2 = a2.globals.seriesXvalues.map((t3) => t3.filter((t4) => b.isNumber(t4)));
      const y2 = a2.globals.seriesYvalues.map((t3) => t3.filter((t4) => b.isNumber(t4)));
      if (a2.axisFlags.isXNumeric) {
        const t3 = this.ttCtx.getElGrid().getBoundingClientRect(), e3 = d2 * (t3.width / r2), s3 = g2 * (t3.height / n2);
        f2 = this.closestInMultiArray(e3, s3, m2, y2), u2 = f2.index, p2 = f2.j, null !== u2 && a2.globals.hasNullValues && (m2 = a2.globals.seriesXvalues[u2], f2 = this.closestInArray(e3, m2), p2 = f2.j);
      }
      return a2.interact.capturedSeriesIndex = null === u2 ? -1 : u2, (!p2 || p2 < 1) && (p2 = 0), a2.globals.isBarHorizontal ? a2.interact.capturedDataPointIndex = x2 : a2.interact.capturedDataPointIndex = p2, { capturedSeries: u2, j: a2.globals.isBarHorizontal ? x2 : p2, hoverX: d2, hoverY: g2 };
    }
    getFirstActiveXArray(t2) {
      const e2 = this.w;
      let s2 = 0;
      const i2 = t2.map((t3, e3) => t3.length > 0 ? e3 : -1);
      for (let t3 = 0; t3 < i2.length; t3++) if (-1 !== i2[t3] && -1 === e2.globals.collapsedSeriesIndices.indexOf(t3) && -1 === e2.globals.ancillaryCollapsedSeriesIndices.indexOf(t3)) {
        s2 = i2[t3];
        break;
      }
      return s2;
    }
    closestInMultiArray(t2, e2, s2, i2) {
      const a2 = this.w, o2 = (t3) => -1 === a2.globals.collapsedSeriesIndices.indexOf(t3) && -1 === a2.globals.ancillaryCollapsedSeriesIndices.indexOf(t3);
      let r2 = 1 / 0, n2 = null, l2 = null;
      for (let h2 = 0; h2 < s2.length; h2++) {
        if (!o2(h2)) continue;
        const c2 = s2[h2], d2 = i2[h2], g2 = Math.min(c2.length, d2.length);
        for (let s3 = 0; s3 < g2; s3++) {
          const i3 = t2 - c2[s3];
          let o3 = Math.sqrt(i3 * i3);
          if (!a2.globals.allSeriesHasEqualX) {
            const t3 = e2 - d2[s3];
            o3 = Math.sqrt(i3 * i3 + t3 * t3);
          }
          o3 < r2 && (r2 = o3, n2 = h2, l2 = s3);
        }
      }
      return { index: n2, j: l2 };
    }
    closestInArray(t2, e2) {
      const s2 = e2[0];
      let i2 = null, a2 = Math.abs(t2 - s2);
      for (let s3 = 0; s3 < e2.length; s3++) {
        const o2 = Math.abs(t2 - e2[s3]);
        o2 < a2 && (a2 = o2, i2 = s3);
      }
      return { j: i2 };
    }
    isXoverlap(t2) {
      const e2 = [], s2 = this.w.seriesData.seriesX.filter((t3) => void 0 !== t3[0]);
      if (s2.length > 0) for (let i2 = 0; i2 < s2.length - 1; i2++) void 0 !== s2[i2][t2] && void 0 !== s2[i2 + 1][t2] && s2[i2][t2] !== s2[i2 + 1][t2] && e2.push("unEqual");
      return 0 === e2.length;
    }
    isInitialSeriesSameLen() {
      var t2, e2, s2;
      let i2 = true;
      const a2 = (null == (t2 = this.w.globals.initialSeries) ? void 0 : t2.filter((t3, e3) => {
        var s3;
        return !(null == (s3 = this.w.globals.collapsedSeriesIndices) ? void 0 : s3.includes(e3));
      })) || [];
      for (let t3 = 0; t3 < a2.length - 1; t3++) {
        if (!(null == (e2 = a2[t3]) ? void 0 : e2.data) || !(null == (s2 = a2[t3 + 1]) ? void 0 : s2.data)) return true;
        if (a2[t3].data.length !== a2[t3 + 1].data.length) {
          i2 = false;
          break;
        }
      }
      return i2;
    }
    getBarsHeight(t2) {
      return [...t2].reduce((t3, e2) => t3 + e2.getBBox().height, 0);
    }
    getElMarkers(t2) {
      return "number" == typeof t2 ? this.w.dom.baseEl.querySelectorAll(`.apexcharts-series[data\\:realIndex='${t2}'] .apexcharts-series-markers-wrap > *`) : this.w.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
    }
    getAllMarkers(t2 = false) {
      let e2 = this.w.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
      e2 = [...e2], t2 && (e2 = e2.filter((t3) => {
        const e3 = Number(t3.getAttribute("data:realIndex"));
        return -1 === this.w.globals.collapsedSeriesIndices.indexOf(e3);
      })), e2.sort((t3, e3) => {
        var s3 = Number(t3.getAttribute("data:realIndex")), i2 = Number(e3.getAttribute("data:realIndex"));
        return i2 < s3 ? 1 : i2 > s3 ? -1 : 0;
      });
      const s2 = [];
      return e2.forEach((t3) => {
        s2.push(t3.querySelector(".apexcharts-marker"));
      }), s2;
    }
    hasMarkers(t2) {
      return this.getElMarkers(t2).length > 0;
    }
    getPathFromPoint(t2, e2) {
      const s2 = Number(t2.getAttribute("cx")), i2 = Number(t2.getAttribute("cy")), a2 = t2.getAttribute("shape");
      return new X(this.w).getMarkerPath(s2, i2, a2, e2);
    }
    getElBars() {
      return this.w.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
    }
    hasBars() {
      return this.getElBars().length > 0;
    }
    getHoverMarkerSize(t2) {
      const e2 = this.w;
      let s2 = e2.config.markers.hover.size;
      return void 0 === s2 && (s2 = e2.globals.markers.size[t2] + e2.config.markers.hover.sizeOffset), s2;
    }
    toggleAllTooltipSeriesGroups(t2) {
      const e2 = this.w, s2 = this.ttCtx;
      0 === s2.allTooltipSeriesGroups.length && (s2.allTooltipSeriesGroups = e2.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
      const i2 = s2.allTooltipSeriesGroups;
      for (let s3 = 0; s3 < i2.length; s3++) "enable" === t2 ? (i2[s3].classList.add("apexcharts-active"), i2[s3].style.display = e2.config.tooltip.items.display) : (i2[s3].classList.remove("apexcharts-active"), i2[s3].style.display = "none");
    }
  }
  class mt {
    constructor(t2) {
      this.w = t2.w, this.ttCtx = t2, this.tooltipUtil = new bt(t2);
    }
    drawSeriesTexts({ shared: t2 = true, ttItems: e2, i: s2 = 0, j: i2 = null, y1: a2, y2: o2, e: r2 }) {
      const n2 = this.w;
      void 0 !== n2.config.tooltip.custom ? this.handleCustomTooltip({ i: s2, j: i2, y1: a2, y2: o2, w: n2 }) : this.toggleActiveInactiveSeries(t2, s2);
      const l2 = this.getValuesToPrint({ i: s2, j: i2 });
      this.printLabels({ i: s2, j: i2, values: l2, ttItems: e2, shared: t2, e: r2 });
      const h2 = this.ttCtx.getElTooltip();
      this.ttCtx.tooltipRect.ttWidth = h2.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = h2.getBoundingClientRect().height;
    }
    printLabels({ i: t2, j: e2, values: s2, ttItems: i2, shared: a2, e: o2 }) {
      var r2;
      const h2 = this.w;
      let c2, d2 = [];
      const g2 = (t3) => h2.seriesData.seriesGoals[t3] && h2.seriesData.seriesGoals[t3][e2] && Array.isArray(h2.seriesData.seriesGoals[t3][e2]), { xVal: p2, zVal: x2, xAxisTTVal: u2 } = s2;
      let f2 = "", b2 = h2.globals.colors[t2];
      null !== e2 && h2.config.plotOptions.bar.distributed && (b2 = h2.globals.colors[e2]);
      for (let s3 = 0, m2 = h2.seriesData.series.length - 1; s3 < h2.seriesData.series.length; s3++, m2--) {
        let y2 = this.getFormatters(t2);
        f2 = this.getSeriesName({ fn: y2.yLbTitleFormatter, index: t2, seriesIndex: t2, j: e2 }), "treemap" === h2.config.chart.type && (f2 = y2.yLbTitleFormatter(String(h2.config.series[t2].data[e2].x), { series: h2.seriesData.series, seriesIndex: t2, dataPointIndex: e2, w: h2 }));
        const w2 = h2.config.tooltip.inverseOrder ? m2 : s3;
        if (h2.globals.axisCharts) {
          const s4 = (t3) => {
            var s5, i3, a3, o3;
            return h2.axisFlags.isRangeData ? y2.yLbFormatter(null == (i3 = null == (s5 = h2.rangeData.seriesRangeStart) ? void 0 : s5[t3]) ? void 0 : i3[e2], { series: h2.rangeData.seriesRangeStart, seriesIndex: t3, dataPointIndex: e2, w: h2 }) + " - " + y2.yLbFormatter(null == (o3 = null == (a3 = h2.rangeData.seriesRangeEnd) ? void 0 : a3[t3]) ? void 0 : o3[e2], { series: h2.rangeData.seriesRangeEnd, seriesIndex: t3, dataPointIndex: e2, w: h2 }) : y2.yLbFormatter(h2.seriesData.series[t3][e2], { series: h2.seriesData.series, seriesIndex: t3, dataPointIndex: e2, w: h2 });
          };
          if (a2) y2 = this.getFormatters(w2), f2 = this.getSeriesName({ fn: y2.yLbTitleFormatter, index: w2, seriesIndex: t2, j: e2 }), b2 = h2.globals.colors[w2], c2 = s4(w2), g2(w2) && (d2 = h2.seriesData.seriesGoals[w2][e2].map((t3) => ({ attrs: t3, val: y2.yLbFormatter(t3.value, { seriesIndex: w2, dataPointIndex: e2, w: h2 }) })));
          else {
            const i3 = null == (r2 = null == o2 ? void 0 : o2.target) ? void 0 : r2.getAttribute("fill");
            i3 && (-1 !== i3.indexOf("url") ? -1 !== i3.indexOf("Pattern") && (b2 = h2.dom.baseEl.querySelector(i3.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke")) : b2 = i3), c2 = s4(t2), g2(t2) && Array.isArray(h2.seriesData.seriesGoals[t2][e2]) && (d2 = h2.seriesData.seriesGoals[t2][e2].map((s5) => ({ attrs: s5, val: y2.yLbFormatter(s5.value, { seriesIndex: t2, dataPointIndex: e2, w: h2 }) })));
          }
        }
        null === e2 && (c2 = y2.yLbFormatter(h2.seriesData.series[t2], l(n({}, h2), { seriesIndex: t2, dataPointIndex: t2 }))), this.DOMHandling({ i: t2, t: w2, j: e2, ttItems: i2, values: { val: c2, goalVals: d2, xVal: p2, xAxisTTVal: u2, zVal: x2 }, seriesName: f2, shared: a2, pColor: b2 });
      }
    }
    getFormatters(t2) {
      const e2 = this.w;
      let s2, i2 = e2.formatters.yLabelFormatters[t2];
      return void 0 !== e2.formatters.ttVal ? Array.isArray(e2.formatters.ttVal) ? (i2 = e2.formatters.ttVal[t2] && e2.formatters.ttVal[t2].formatter, s2 = e2.formatters.ttVal[t2] && e2.formatters.ttVal[t2].title && e2.formatters.ttVal[t2].title.formatter) : (i2 = e2.formatters.ttVal.formatter, "function" == typeof e2.formatters.ttVal.title.formatter && (s2 = e2.formatters.ttVal.title.formatter)) : s2 = e2.config.tooltip.y.title.formatter, "function" != typeof i2 && (i2 = e2.formatters.yLabelFormatters[0] ? e2.formatters.yLabelFormatters[0] : function(t3) {
        return t3;
      }), "function" != typeof s2 && (s2 = function(t3) {
        return t3 ? t3 + ": " : "";
      }), { yLbFormatter: i2, yLbTitleFormatter: s2 };
    }
    getSeriesName({ fn: t2, index: e2, seriesIndex: s2, j: i2 }) {
      const a2 = this.w;
      return t2(String(a2.seriesData.seriesNames[e2]), { series: a2.seriesData.series, seriesIndex: s2, dataPointIndex: i2, w: a2 });
    }
    DOMHandling({ t: t2, j: e2, ttItems: s2, values: i2, seriesName: a2, shared: o2, pColor: r2 }) {
      const n2 = this.w, l2 = this.ttCtx, { val: h2, goalVals: c2, xVal: d2, xAxisTTVal: g2, zVal: p2 } = i2;
      let x2 = null;
      x2 = s2[t2].children, n2.config.tooltip.fillSeriesColor && (s2[t2].style.backgroundColor = r2, x2[0].style.display = "none"), l2.showTooltipTitle && (null === l2.tooltipTitle && (l2.tooltipTitle = n2.dom.baseEl.querySelector(".apexcharts-tooltip-title")), l2.tooltipTitle.innerHTML = d2), l2.isXAxisTooltipEnabled && (l2.xaxisTooltipText.innerHTML = "" !== g2 ? g2 : d2);
      const u2 = s2[t2].querySelector(".apexcharts-tooltip-text-y-label");
      u2 && (u2.innerHTML = a2 || "");
      const f2 = s2[t2].querySelector(".apexcharts-tooltip-text-y-value");
      f2 && (f2.innerHTML = void 0 !== h2 ? h2 : ""), x2[0] && x2[0].classList.contains("apexcharts-tooltip-marker") && (n2.config.tooltip.marker.fillColors && Array.isArray(n2.config.tooltip.marker.fillColors) && (r2 = n2.config.tooltip.marker.fillColors[t2]), n2.config.tooltip.fillSeriesColor ? x2[0].style.backgroundColor = r2 : x2[0].style.color = r2), n2.config.tooltip.marker.show || (x2[0].style.display = "none");
      const b2 = s2[t2].querySelector(".apexcharts-tooltip-text-goals-label"), m2 = s2[t2].querySelector(".apexcharts-tooltip-text-goals-value");
      if (c2.length && n2.seriesData.seriesGoals[t2]) {
        const s3 = () => {
          let t3 = "<div>", e3 = "<div>";
          c2.forEach((s4) => {
            t3 += ` <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: ${s4.attrs.strokeColor}; height: 3px; border-radius: 0; top: 5px;"></span> ${s4.attrs.name}</div>`, e3 += `<div>${s4.val}</div>`;
          }), b2.innerHTML = t3 + "</div>", m2.innerHTML = e3 + "</div>";
        };
        o2 ? n2.seriesData.seriesGoals[t2][e2] && Array.isArray(n2.seriesData.seriesGoals[t2][e2]) ? s3() : (b2.innerHTML = "", m2.innerHTML = "") : s3();
      } else b2.innerHTML = "", m2.innerHTML = "";
      if (null !== p2) {
        s2[t2].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = n2.config.tooltip.z.title;
        s2[t2].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== p2 ? p2 : "";
      }
      if (o2 && x2[0]) {
        if (n2.config.tooltip.hideEmptySeries) {
          const e3 = s2[t2].querySelector(".apexcharts-tooltip-marker"), i3 = s2[t2].querySelector(".apexcharts-tooltip-text");
          0 == parseFloat(h2) ? (e3.style.display = "none", i3.style.display = "none") : (e3.style.display = "block", i3.style.display = "block");
        }
        null == h2 || n2.globals.ancillaryCollapsedSeriesIndices.indexOf(t2) > -1 || n2.globals.collapsedSeriesIndices.indexOf(t2) > -1 || Array.isArray(l2.tConfig.enabledOnSeries) && -1 === l2.tConfig.enabledOnSeries.indexOf(t2) ? x2[0].parentNode.style.display = "none" : x2[0].parentNode.style.display = n2.config.tooltip.items.display;
      } else Array.isArray(l2.tConfig.enabledOnSeries) && -1 === l2.tConfig.enabledOnSeries.indexOf(t2) && (x2[0].parentNode.style.display = "none");
    }
    toggleActiveInactiveSeries(t2, e2) {
      const s2 = this.w;
      if (t2) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
      else {
        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
        const t3 = s2.dom.baseEl.querySelector(`.apexcharts-tooltip-series-group-${e2}`);
        t3 && (t3.classList.add("apexcharts-active"), t3.style.display = s2.config.tooltip.items.display);
      }
    }
    getValuesToPrint({ i: t2, j: e2 }) {
      const s2 = this.w, i2 = s2.seriesData.seriesX.map((t3) => t3.length > 0 ? t3 : []);
      let a2 = "", o2 = "", r2 = null, n2 = null;
      const l2 = { series: s2.seriesData.series, seriesIndex: t2, dataPointIndex: e2, w: s2 }, h2 = s2.formatters.ttZFormatter;
      if (null === e2) n2 = s2.seriesData.series[t2];
      else if (s2.axisFlags.isXNumeric && "treemap" !== s2.config.chart.type) {
        if (a2 = i2[t2][e2], 0 === i2[t2].length) {
          a2 = i2[this.tooltipUtil.getFirstActiveXArray(i2)][e2];
        }
      } else {
        a2 = new xt(this.w).isFormatXY() ? void 0 !== s2.config.series[t2].data[e2] ? s2.config.series[t2].data[e2].x : "" : void 0 !== s2.labelData.labels[e2] ? s2.labelData.labels[e2] : "";
      }
      const c2 = a2;
      if (s2.axisFlags.isXNumeric && "datetime" === s2.config.xaxis.type) {
        a2 = new y(this.w).xLabelFormat(s2.formatters.ttKeyFormatter, c2, c2, { i: void 0, dateFormatter: new m(this.w).formatDate, w: this.w });
      } else a2 = s2.globals.isBarHorizontal ? s2.formatters.yLabelFormatters[0](c2, l2) : s2.formatters.xLabelFormatter(c2, l2);
      return void 0 !== s2.config.tooltip.x.formatter && (a2 = s2.formatters.ttKeyFormatter(c2, l2)), s2.seriesData.seriesZ.length > 0 && s2.seriesData.seriesZ[t2].length > 0 && (r2 = h2(s2.seriesData.seriesZ[t2][e2], s2)), o2 = "function" == typeof s2.config.xaxis.tooltip.formatter ? s2.formatters.xaxisTooltipFormatter(c2, l2) : a2, { val: Array.isArray(n2) ? n2.join(" ") : n2, xVal: Array.isArray(a2) ? a2.join(" ") : a2, xAxisTTVal: Array.isArray(o2) ? o2.join(" ") : o2, zVal: r2 };
    }
    handleCustomTooltip({ i: t2, j: e2, y1: s2, y2: i2, w: a2 }) {
      const o2 = this.ttCtx.getElTooltip();
      let r2 = a2.config.tooltip.custom;
      Array.isArray(r2) && r2[t2] && (r2 = r2[t2]);
      const n2 = r2({ series: a2.seriesData.series, seriesIndex: t2, dataPointIndex: e2, y1: s2, y2: i2, w: a2 });
      "string" == typeof n2 || "number" == typeof n2 ? o2.innerHTML = n2 : (n2 instanceof Element || "string" == typeof n2.nodeName) && (o2.innerHTML = "", o2.appendChild(n2.cloneNode(true)));
    }
  }
  class yt {
    constructor(t2) {
      this.ttCtx = t2, this.w = t2.w;
    }
    moveXCrosshairs(t2, e2 = null) {
      const s2 = this.ttCtx, i2 = this.w, a2 = s2.getElXCrosshairs();
      let o2 = t2 - s2.xcrosshairsWidth / 2;
      const r2 = i2.labelData.labels.slice().length;
      if (null !== e2 && (o2 = i2.layout.gridWidth / r2 * e2), null === a2 || i2.globals.isBarHorizontal || (a2.setAttribute("x", o2), a2.setAttribute("x1", o2), a2.setAttribute("x2", o2), a2.setAttribute("y2", i2.layout.gridHeight), a2.classList.add("apexcharts-active")), o2 < 0 && (o2 = 0), o2 > i2.layout.gridWidth && (o2 = i2.layout.gridWidth), s2.isXAxisTooltipEnabled) {
        let t3 = o2;
        "tickWidth" !== i2.config.xaxis.crosshairs.width && "barWidth" !== i2.config.xaxis.crosshairs.width || (t3 = o2 + s2.xcrosshairsWidth / 2), this.moveXAxisTooltip(t3);
      }
    }
    moveYCrosshairs(t2) {
      const e2 = this.ttCtx;
      null !== e2.ycrosshairs && X.setAttrs(e2.ycrosshairs, { y1: t2, y2: t2 }), null !== e2.ycrosshairsHidden && X.setAttrs(e2.ycrosshairsHidden, { y1: t2, y2: t2 });
    }
    moveXAxisTooltip(t2) {
      const e2 = this.w, s2 = this.ttCtx;
      if (null !== s2.xaxisTooltip && 0 !== s2.xcrosshairsWidth) {
        s2.xaxisTooltip.classList.add("apexcharts-active");
        const i2 = s2.xaxisOffY + e2.config.xaxis.tooltip.offsetY + e2.layout.translateY + 1 + e2.config.xaxis.offsetY;
        if (t2 -= s2.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t2)) {
          t2 += e2.layout.translateX;
          let a2 = 0;
          a2 = new X(this.w).getTextRects(s2.xaxisTooltipText.innerHTML), s2.xaxisTooltipText.style.minWidth = a2.width + "px", s2.xaxisTooltip.style.left = t2 + "px", s2.xaxisTooltip.style.top = i2 + "px";
        }
      }
    }
    moveYAxisTooltip(t2) {
      const e2 = this.w, s2 = this.ttCtx;
      null === s2.yaxisTTEls && (s2.yaxisTTEls = e2.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      const i2 = parseInt(s2.ycrosshairsHidden.getAttribute("y1"), 10);
      let a2 = e2.layout.translateY + i2;
      const o2 = s2.yaxisTTEls[t2].getBoundingClientRect(), r2 = o2.height;
      let n2 = e2.globals.translateYAxisX[t2] - 2;
      e2.config.yaxis[t2].opposite && (n2 -= o2.width), a2 -= r2 / 2, -1 === e2.globals.ignoreYAxisIndexes.indexOf(t2) && a2 > 0 && a2 < e2.layout.gridHeight ? (s2.yaxisTTEls[t2].classList.add("apexcharts-active"), s2.yaxisTTEls[t2].style.top = a2 + "px", s2.yaxisTTEls[t2].style.left = n2 + e2.config.yaxis[t2].tooltip.offsetX + "px") : s2.yaxisTTEls[t2].classList.remove("apexcharts-active");
    }
    moveTooltip(t2, e2, s2 = null) {
      const i2 = this.w, a2 = this.ttCtx, o2 = a2.getElTooltip(), r2 = a2.tooltipRect, n2 = null !== s2 ? parseFloat(s2) : 1;
      let l2 = parseFloat(t2) + n2 + 5, h2 = parseFloat(e2) + n2 / 2;
      if (l2 > i2.layout.gridWidth / 2 && (l2 = l2 - r2.ttWidth - n2 - 10), l2 > i2.layout.gridWidth - r2.ttWidth - 10 && (l2 = i2.layout.gridWidth - r2.ttWidth), l2 < -20 && (l2 = -20), i2.config.tooltip.followCursor) {
        const t3 = a2.getElGrid().getBoundingClientRect();
        l2 = a2.e.clientX - t3.left, l2 > i2.layout.gridWidth / 2 && (l2 -= a2.tooltipRect.ttWidth), h2 = a2.e.clientY + i2.layout.translateY - t3.top, h2 > i2.layout.gridHeight / 2 && (h2 -= a2.tooltipRect.ttHeight);
      } else i2.globals.isBarHorizontal || r2.ttHeight / 2 + h2 > i2.layout.gridHeight && (h2 = i2.layout.gridHeight - r2.ttHeight + i2.layout.translateY);
      isNaN(l2) || (l2 += i2.layout.translateX, o2.style.left = l2 + "px", o2.style.top = h2 + "px");
    }
    moveMarkers(t2, e2) {
      const s2 = this.w, i2 = this.ttCtx;
      if (s2.globals.markers.size[t2] > 0) {
        const a2 = s2.dom.baseEl.querySelectorAll(` .apexcharts-series[data\\:realIndex='${t2}'] .apexcharts-marker`);
        for (let t3 = 0; t3 < a2.length; t3++) parseInt(a2[t3].getAttribute("rel"), 10) === e2 && (i2.marker.resetPointsSize(), i2.marker.enlargeCurrentPoint(e2, a2[t3]));
      } else i2.marker.resetPointsSize(), this.moveDynamicPointOnHover(e2, t2);
    }
    moveDynamicPointOnHover(t2, e2) {
      var s2, i2, a2, o2;
      const r2 = this.w, n2 = this.ttCtx;
      let l2 = 0, h2 = 0;
      const c2 = new X(this.w), d2 = r2.globals.pointsArray, g2 = n2.tooltipUtil.getHoverMarkerSize(e2), p2 = r2.config.series[e2].type;
      if (p2 && ("column" === p2 || "candlestick" === p2 || "boxPlot" === p2)) return;
      l2 = null == (i2 = null == (s2 = d2[e2]) ? void 0 : s2[t2]) ? void 0 : i2[0], h2 = (null == (o2 = null == (a2 = d2[e2]) ? void 0 : a2[t2]) ? void 0 : o2[1]) || 0;
      const x2 = r2.dom.baseEl.querySelector(`.apexcharts-series[data\\:realIndex='${e2}'] .apexcharts-series-markers path`);
      if (x2 && h2 < r2.layout.gridHeight && h2 > 0) {
        const t3 = x2.getAttribute("shape"), e3 = c2.getMarkerPath(l2, h2, t3, 1.5 * g2);
        x2.setAttribute("d", e3);
      }
      this.moveXCrosshairs(l2), n2.fixedTooltip || this.moveTooltip(l2, h2, g2);
    }
    moveDynamicPointsOnHover(t2) {
      var e2;
      const s2 = this.ttCtx, i2 = s2.w;
      let a2 = 0, o2 = 0, r2 = 0;
      const n2 = i2.globals.pointsArray, l2 = new Q(this.w), h2 = new X(this.w);
      r2 = l2.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
      const c2 = s2.tooltipUtil.getHoverMarkerSize(r2);
      if ((null == (e2 = n2[r2]) ? void 0 : e2[t2]) && (a2 = n2[r2][t2][0], o2 = n2[r2][t2][1]), isNaN(a2)) return;
      const d2 = s2.tooltipUtil.getAllMarkers();
      if (d2.length) for (let e3 = 0; e3 < i2.seriesData.series.length; e3++) {
        const s3 = n2[e3];
        if (i2.globals.comboCharts && void 0 === s3 && d2.splice(e3, 0, null), s3 && s3.length) {
          let s4, o3 = n2[e3][t2][1];
          d2[e3].setAttribute("cx", a2);
          const r3 = d2[e3].getAttribute("shape");
          if ("rangeArea" === i2.config.chart.type && !i2.globals.comboCharts) {
            const a3 = t2 + i2.seriesData.series[e3].length;
            s4 = n2[e3][a3][1];
            o3 -= Math.abs(o3 - s4) / 2;
          }
          if (null !== o3 && !isNaN(o3) && o3 < i2.layout.gridHeight + c2 && o3 + c2 > 0) {
            const t3 = h2.getMarkerPath(a2, o3, r3, c2);
            d2[e3].setAttribute("d", t3);
          } else d2[e3].setAttribute("d", "");
        }
      }
      this.moveXCrosshairs(a2), s2.fixedTooltip || this.moveTooltip(a2, o2 || i2.layout.gridHeight, c2);
    }
    moveStickyTooltipOverBars(t2, e2) {
      const s2 = this.w, i2 = this.ttCtx;
      let a2 = s2.globals.columnSeries ? s2.globals.columnSeries.length : s2.seriesData.series.length;
      s2.config.chart.stacked && (a2 = s2.globals.barGroups.length);
      let o2 = a2 >= 2 && a2 % 2 == 0 ? Math.floor(a2 / 2) : Math.floor(a2 / 2) + 1;
      if (s2.globals.isBarHorizontal) {
        o2 = new Q(this.w).getActiveConfigSeriesIndex("desc") + 1;
      }
      let r2 = s2.dom.baseEl.querySelector(`.apexcharts-bar-series .apexcharts-series[rel='${o2}'] path[j='${t2}'], .apexcharts-candlestick-series .apexcharts-series[rel='${o2}'] path[j='${t2}'], .apexcharts-boxPlot-series .apexcharts-series[rel='${o2}'] path[j='${t2}'], .apexcharts-rangebar-series .apexcharts-series[rel='${o2}'] path[j='${t2}']`);
      r2 || "number" != typeof e2 || (r2 = s2.dom.baseEl.querySelector(`.apexcharts-bar-series .apexcharts-series[data\\:realIndex='${e2}'] path[j='${t2}'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='${e2}'] path[j='${t2}'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='${e2}'] path[j='${t2}'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='${e2}'] path[j='${t2}']`));
      let n2 = r2 ? parseFloat(r2.getAttribute("cx")) : 0, l2 = r2 ? parseFloat(r2.getAttribute("cy")) : 0;
      const h2 = r2 ? parseFloat(r2.getAttribute("barWidth")) : 0, c2 = i2.getElGrid().getBoundingClientRect(), d2 = r2 && (r2.classList.contains("apexcharts-candlestick-area") || r2.classList.contains("apexcharts-boxPlot-area"));
      s2.axisFlags.isXNumeric ? (r2 && !d2 && (n2 -= a2 % 2 != 0 ? h2 / 2 : 0), r2 && d2 && (n2 -= h2 / 2)) : s2.globals.isBarHorizontal || (n2 = i2.xAxisTicksPositions[t2 - 1] + i2.dataPointsDividedWidth / 2, isNaN(n2) && (n2 = i2.xAxisTicksPositions[t2] - i2.dataPointsDividedWidth / 2)), s2.globals.isBarHorizontal ? l2 -= i2.tooltipRect.ttHeight : s2.config.tooltip.followCursor ? l2 = i2.e.clientY - c2.top - i2.tooltipRect.ttHeight / 2 : l2 + i2.tooltipRect.ttHeight + 15 > s2.layout.gridHeight && (l2 = s2.layout.gridHeight), s2.globals.isBarHorizontal || this.moveXCrosshairs(n2), i2.fixedTooltip || this.moveTooltip(n2, l2 || s2.layout.gridHeight);
    }
  }
  class wt {
    constructor(t2) {
      this.w = t2.w, this.ttCtx = t2, this.ctx = t2.ctx, this.tooltipPosition = new yt(t2);
    }
    drawDynamicPoints() {
      const t2 = this.w, e2 = new X(this.w), s2 = new H(this.w, this.ctx);
      let i2 = t2.dom.baseEl.querySelectorAll(".apexcharts-series");
      i2 = [...i2], t2.config.chart.stacked && i2.sort((t3, e3) => parseFloat(t3.getAttribute("data:realIndex")) - parseFloat(e3.getAttribute("data:realIndex")));
      for (let a2 = 0; a2 < i2.length; a2++) {
        const o2 = i2[a2].querySelector(".apexcharts-series-markers-wrap");
        if (null !== o2) {
          let i3 = `apexcharts-marker w${(Math.random() + 1).toString(36).substring(4)}`;
          "line" !== t2.config.chart.type && "area" !== t2.config.chart.type || t2.globals.comboCharts || t2.config.tooltip.intersect || (i3 += " no-pointer-events");
          const a3 = s2.getMarkerConfig({ cssClass: i3, seriesIndex: Number(o2.getAttribute("data:realIndex")) }), r2 = e2.drawMarker(0, 0, a3);
          r2.node.setAttribute("default-marker-size", 0);
          const n2 = f.createElementNS(T, "g");
          n2.classList.add("apexcharts-series-markers"), n2.appendChild(r2.node), o2.appendChild(n2);
        }
      }
    }
    enlargeCurrentPoint(t2, e2, s2 = null, i2 = null) {
      const a2 = this.w;
      "bubble" !== a2.config.chart.type && this.newPointSize(t2, e2);
      let o2 = e2.getAttribute("cx"), r2 = e2.getAttribute("cy");
      if (null !== s2 && null !== i2 && (o2 = s2, r2 = i2), this.tooltipPosition.moveXCrosshairs(o2), !this.fixedTooltip) {
        if ("radar" === a2.config.chart.type) {
          const t3 = this.ttCtx.getElGrid().getBoundingClientRect();
          o2 = this.ttCtx.e.clientX - t3.left;
        }
        this.tooltipPosition.moveTooltip(o2, r2, a2.config.markers.hover.size);
      }
    }
    enlargePoints(t2) {
      const e2 = this.w, s2 = this, i2 = this.ttCtx, a2 = t2, o2 = e2.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker");
      let r2 = e2.config.markers.hover.size;
      for (let t3 = 0; t3 < o2.length; t3++) {
        const n2 = o2[t3].getAttribute("rel"), l2 = o2[t3].getAttribute("index");
        if (void 0 === r2 && (r2 = e2.globals.markers.size[l2] + e2.config.markers.hover.sizeOffset), a2 === parseInt(n2, 10)) {
          s2.newPointSize(a2, o2[t3]);
          const e3 = o2[t3].getAttribute("cx"), n3 = o2[t3].getAttribute("cy");
          s2.tooltipPosition.moveXCrosshairs(e3), i2.fixedTooltip || s2.tooltipPosition.moveTooltip(e3, n3, r2);
        } else s2.oldPointSize(o2[t3]);
      }
    }
    newPointSize(t2, e2) {
      const s2 = this.w;
      let i2 = s2.config.markers.hover.size;
      const a2 = 0 === t2 ? e2.parentNode.firstChild : e2.parentNode.lastChild;
      if ("0" !== a2.getAttribute("default-marker-size")) {
        const t3 = parseInt(a2.getAttribute("index"), 10);
        void 0 === i2 && (i2 = s2.globals.markers.size[t3] + s2.config.markers.hover.sizeOffset), i2 < 0 && (i2 = 0);
        const o2 = this.ttCtx.tooltipUtil.getPathFromPoint(e2, i2);
        e2.setAttribute("d", o2);
      }
    }
    oldPointSize(t2) {
      const e2 = parseFloat(t2.getAttribute("default-marker-size")), s2 = this.ttCtx.tooltipUtil.getPathFromPoint(t2, e2);
      t2.setAttribute("d", s2);
    }
    resetPointsSize() {
      const t2 = this.w.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker");
      for (let e2 = 0; e2 < t2.length; e2++) {
        const s2 = parseFloat(t2[e2].getAttribute("default-marker-size"));
        if (b.isNumber(s2) && s2 > 0) {
          const i2 = this.ttCtx.tooltipUtil.getPathFromPoint(t2[e2], s2);
          t2[e2].setAttribute("d", i2);
        } else t2[e2].setAttribute("d", "M0,0");
      }
    }
  }
  class vt {
    constructor(t2) {
      this.w = t2.w;
      const e2 = this.w;
      this.ttCtx = t2, this.isVerticalGroupedRangeBar = !e2.globals.isBarHorizontal && "rangeBar" === e2.config.chart.type && e2.config.plotOptions.bar.rangeBarGroupRows;
    }
    getAttr(t2, e2) {
      return parseFloat(t2.target.getAttribute(e2));
    }
    handleHeatTreeTooltip({ e: t2, opt: e2, x: s2, y: i2, type: a2 }) {
      const o2 = this.ttCtx, r2 = this.w;
      if (t2.target.classList.contains(`apexcharts-${a2}-rect`)) {
        const a3 = this.getAttr(t2, "i"), n2 = this.getAttr(t2, "j"), l2 = this.getAttr(t2, "cx"), h2 = this.getAttr(t2, "cy"), c2 = this.getAttr(t2, "width"), d2 = this.getAttr(t2, "height");
        if (o2.tooltipLabels.drawSeriesTexts({ ttItems: e2.ttItems, i: a3, j: n2, shared: false, e: t2 }), r2.interact.capturedSeriesIndex = a3, r2.interact.capturedDataPointIndex = n2, s2 = l2 + o2.tooltipRect.ttWidth / 2 + c2, i2 = h2 + o2.tooltipRect.ttHeight / 2 - d2 / 2, o2.tooltipPosition.moveXCrosshairs(l2 + c2 / 2), s2 > r2.layout.gridWidth / 2 && (s2 = l2 - o2.tooltipRect.ttWidth / 2 + c2), o2.w.config.tooltip.followCursor) {
          const t3 = r2.dom.elWrap.getBoundingClientRect();
          s2 = r2.interact.clientX - t3.left - (s2 > r2.layout.gridWidth / 2 ? o2.tooltipRect.ttWidth : 0), i2 = r2.interact.clientY - t3.top - (i2 > r2.layout.gridHeight / 2 ? o2.tooltipRect.ttHeight : 0);
        }
      }
      return { x: s2, y: i2 };
    }
    handleMarkerTooltip({ e: t2, opt: e2, x: s2, y: i2 }) {
      const a2 = this.w, o2 = this.ttCtx;
      let r2, n2;
      if (t2.target.classList.contains("apexcharts-marker")) {
        const l2 = parseInt(e2.paths.getAttribute("cx"), 10), h2 = parseInt(e2.paths.getAttribute("cy"), 10), c2 = parseFloat(e2.paths.getAttribute("val"));
        if (n2 = parseInt(e2.paths.getAttribute("rel"), 10), r2 = parseInt(e2.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, o2.intersect) {
          const t3 = b.findAncestor(e2.paths, "apexcharts-series");
          t3 && (r2 = parseInt(t3.getAttribute("data:realIndex"), 10));
        }
        if (o2.tooltipLabels.drawSeriesTexts({ ttItems: e2.ttItems, i: r2, j: n2, shared: !o2.showOnIntersect && a2.config.tooltip.shared, e: t2 }), "mouseup" === t2.type && o2.markerClick(t2, r2, n2), a2.interact.capturedSeriesIndex = r2, a2.interact.capturedDataPointIndex = n2, s2 = l2, i2 = h2 + a2.layout.translateY - 1.4 * o2.tooltipRect.ttHeight, o2.w.config.tooltip.followCursor) {
          const t3 = o2.getElGrid().getBoundingClientRect();
          i2 = o2.e.clientY + a2.layout.translateY - t3.top;
        }
        c2 < 0 && (i2 = h2), o2.marker.enlargeCurrentPoint(n2, e2.paths, s2, i2);
      }
      return { x: s2, y: i2 };
    }
    handleBarTooltip({ e: t2, opt: e2 }) {
      const s2 = this.w, i2 = this.ttCtx, a2 = i2.getElTooltip();
      let o2, r2 = 0, n2 = 0, l2 = 0, h2 = 0;
      const c2 = this.getBarTooltipXY({ e: t2, opt: e2 });
      if (null === c2.j && 0 === c2.barHeight && 0 === c2.barWidth) return;
      h2 = c2.i;
      const d2 = c2.j;
      if (s2.interact.capturedSeriesIndex = h2, s2.interact.capturedDataPointIndex = d2, s2.globals.isBarHorizontal && i2.tooltipUtil.hasBars() || !s2.config.tooltip.shared ? (n2 = c2.x, l2 = c2.y, o2 = Array.isArray(s2.config.stroke.width) ? s2.config.stroke.width[h2] : s2.config.stroke.width, r2 = n2) : s2.globals.comboCharts || s2.config.tooltip.shared || (r2 /= 2), isNaN(l2) && (l2 = s2.globals.svgHeight - i2.tooltipRect.ttHeight), n2 + i2.tooltipRect.ttWidth > s2.layout.gridWidth ? n2 -= i2.tooltipRect.ttWidth : n2 < 0 && (n2 = 0), i2.w.config.tooltip.followCursor) {
        const t3 = i2.getElGrid().getBoundingClientRect();
        l2 = i2.e.clientY - t3.top;
      }
      null === i2.tooltip && (i2.tooltip = s2.dom.baseEl.querySelector(".apexcharts-tooltip")), s2.config.tooltip.shared || (s2.globals.comboBarCount > 0 ? i2.tooltipPosition.moveXCrosshairs(r2 + o2 / 2) : i2.tooltipPosition.moveXCrosshairs(r2)), !i2.fixedTooltip && (!s2.config.tooltip.shared || s2.globals.isBarHorizontal && i2.tooltipUtil.hasBars()) && (l2 = l2 + s2.layout.translateY - i2.tooltipRect.ttHeight / 2, a2.style.left = n2 + s2.layout.translateX + "px", a2.style.top = l2 + "px");
    }
    getBarTooltipXY({ e: t2, opt: e2 }) {
      const s2 = this.w;
      let i2 = null;
      const a2 = this.ttCtx;
      let o2 = 0, r2 = 0, n2 = 0, l2 = 0, h2 = 0;
      const c2 = t2.target.classList;
      if (c2.contains("apexcharts-bar-area") || c2.contains("apexcharts-candlestick-area") || c2.contains("apexcharts-boxPlot-area") || c2.contains("apexcharts-rangebar-area")) {
        const c3 = t2.target, d2 = c3.getBoundingClientRect(), g2 = e2.elGrid.getBoundingClientRect(), p2 = d2.height;
        h2 = d2.height;
        const x2 = d2.width, u2 = parseInt(c3.getAttribute("cx"), 10), f2 = parseInt(c3.getAttribute("cy"), 10);
        l2 = parseFloat(c3.getAttribute("barWidth"));
        const b2 = "touchmove" === t2.type ? t2.touches[0].clientX : t2.clientX;
        i2 = parseInt(c3.getAttribute("j"), 10), o2 = parseInt(c3.parentNode.getAttribute("rel"), 10) - 1;
        const m2 = c3.getAttribute("data-range-y1"), y2 = c3.getAttribute("data-range-y2");
        s2.globals.comboCharts && (o2 = parseInt(c3.parentNode.getAttribute("data:realIndex"), 10));
        const w2 = (t3) => s2.axisFlags.isXNumeric ? u2 - x2 / 2 : this.isVerticalGroupedRangeBar ? u2 + x2 / 2 : u2 - a2.dataPointsDividedWidth + x2 / 2, v2 = () => f2 - a2.dataPointsDividedHeight + p2 / 2 - a2.tooltipRect.ttHeight / 2;
        a2.tooltipLabels.drawSeriesTexts({ ttItems: e2.ttItems, i: o2, j: i2, y1: m2 ? parseInt(m2, 10) : null, y2: y2 ? parseInt(y2, 10) : null, shared: !a2.showOnIntersect && s2.config.tooltip.shared, e: t2 }), s2.config.tooltip.followCursor ? s2.globals.isBarHorizontal ? (r2 = b2 - g2.left + 15, n2 = v2()) : (r2 = w2(r2), n2 = t2.clientY - g2.top - a2.tooltipRect.ttHeight / 2 - 15) : s2.globals.isBarHorizontal ? (r2 = u2, r2 < a2.xyRatios.baseLineInvertedY && (r2 = u2 - a2.tooltipRect.ttWidth), n2 = v2()) : (r2 = w2(r2), n2 = f2);
      }
      return { x: r2, y: n2, barHeight: h2, barWidth: l2, i: o2, j: i2 };
    }
  }
  class At {
    constructor(t2) {
      this.w = t2.w, this.ttCtx = t2;
    }
    drawXaxisTooltip() {
      const t2 = this.w, e2 = this.ttCtx, s2 = "bottom" === t2.config.xaxis.position;
      e2.xaxisOffY = s2 ? t2.layout.gridHeight + 1 : -t2.layout.xAxisHeight - t2.config.xaxis.axisTicks.height + 3;
      const i2 = s2 ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", a2 = t2.dom.elWrap;
      if (e2.isXAxisTooltipEnabled) {
        null === t2.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e2.xaxisTooltip = f.createElementNS("http://www.w3.org/1999/xhtml", "div"), e2.xaxisTooltip.setAttribute("class", i2 + " apexcharts-theme-" + t2.config.tooltip.theme), a2.appendChild(e2.xaxisTooltip), e2.xaxisTooltipText = f.createElementNS("http://www.w3.org/1999/xhtml", "div"), e2.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e2.xaxisTooltipText.style.fontFamily = t2.config.xaxis.tooltip.style.fontFamily || t2.config.chart.fontFamily, e2.xaxisTooltipText.style.fontSize = t2.config.xaxis.tooltip.style.fontSize, e2.xaxisTooltip.appendChild(e2.xaxisTooltipText));
      }
    }
    drawYaxisTooltip() {
      const t2 = this.w, e2 = this.ttCtx;
      for (let s2 = 0; s2 < t2.config.yaxis.length; s2++) {
        const i2 = t2.config.yaxis[s2].opposite || t2.config.yaxis[s2].crosshairs.opposite;
        e2.yaxisOffX = i2 ? t2.layout.gridWidth + 1 : 1;
        const a2 = i2 ? `apexcharts-yaxistooltip apexcharts-yaxistooltip-${s2} apexcharts-yaxistooltip-right` : `apexcharts-yaxistooltip apexcharts-yaxistooltip-${s2} apexcharts-yaxistooltip-left`, o2 = t2.dom.elWrap;
        null === t2.dom.baseEl.querySelector(`.apexcharts-yaxistooltip apexcharts-yaxistooltip-${s2}`) && (e2.yaxisTooltip = f.createElementNS("http://www.w3.org/1999/xhtml", "div"), e2.yaxisTooltip.setAttribute("class", a2 + " apexcharts-theme-" + t2.config.tooltip.theme), o2.appendChild(e2.yaxisTooltip), 0 === s2 && (e2.yaxisTooltipText = []), e2.yaxisTooltipText[s2] = f.createElementNS("http://www.w3.org/1999/xhtml", "div"), e2.yaxisTooltipText[s2].classList.add("apexcharts-yaxistooltip-text"), e2.yaxisTooltip.appendChild(e2.yaxisTooltipText[s2]));
      }
    }
    setXCrosshairWidth() {
      const t2 = this.w, e2 = this.ttCtx, s2 = e2.getElXCrosshairs();
      if (e2.xcrosshairsWidth = parseInt(t2.config.xaxis.crosshairs.width, 10), t2.globals.comboCharts) {
        const s3 = t2.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== s3 && "barWidth" === t2.config.xaxis.crosshairs.width) {
          const t3 = parseFloat(s3.getAttribute("barWidth"));
          e2.xcrosshairsWidth = t3;
        } else if ("tickWidth" === t2.config.xaxis.crosshairs.width) {
          const s4 = t2.labelData.labels.length;
          e2.xcrosshairsWidth = t2.layout.gridWidth / s4;
        }
      } else if ("tickWidth" === t2.config.xaxis.crosshairs.width) {
        const s3 = t2.labelData.labels.length;
        e2.xcrosshairsWidth = t2.layout.gridWidth / s3;
      } else if ("barWidth" === t2.config.xaxis.crosshairs.width) {
        const s3 = t2.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== s3) {
          const t3 = parseFloat(s3.getAttribute("barWidth"));
          e2.xcrosshairsWidth = t3;
        } else e2.xcrosshairsWidth = 1;
      }
      t2.globals.isBarHorizontal && (e2.xcrosshairsWidth = 0), null !== s2 && e2.xcrosshairsWidth > 0 && s2.setAttribute("width", e2.xcrosshairsWidth);
    }
    handleYCrosshair() {
      const t2 = this.w, e2 = this.ttCtx;
      e2.ycrosshairs = t2.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e2.ycrosshairsHidden = t2.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
    }
    drawYaxisTooltipText(t2, e2, s2) {
      const i2 = this.ttCtx, a2 = this.w, o2 = a2.globals, r2 = o2.seriesYAxisMap[t2];
      if (i2.yaxisTooltips[t2] && r2.length > 0) {
        const n2 = a2.formatters.yLabelFormatters[t2], l2 = i2.getElGrid().getBoundingClientRect(), h2 = r2[0];
        let c2 = 0;
        s2.yRatio.length > 1 && (c2 = h2);
        const d2 = (e2 - l2.top) * s2.yRatio[c2], g2 = o2.maxYArr[h2] - o2.minYArr[h2];
        let p2 = o2.minYArr[h2] + (g2 - d2);
        a2.config.yaxis[t2].reversed && (p2 = o2.maxYArr[h2] - (g2 - d2)), i2.tooltipPosition.moveYCrosshairs(e2 - l2.top), i2.yaxisTooltipText[t2].innerHTML = n2(p2), i2.tooltipPosition.moveYAxisTooltip(t2);
      }
    }
  }
  class Ct {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.tConfig = t2.config.tooltip, this.tooltipUtil = new bt(this), this.tooltipLabels = new mt(this), this.tooltipPosition = new yt(this), this.marker = new wt(this), this.intersect = new vt(this), this.axesTooltip = new At(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !t2.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now(), this.dimensionUpdateScheduled = false;
    }
    setupDimensionCache() {
      const t2 = this.w, e2 = this.getElTooltip();
      e2 && (this.updateDimensionCache(), "undefined" == typeof ResizeObserver || t2.globals.resizeObserver || (t2.globals.resizeObserver = new ResizeObserver(() => {
        this.dimensionUpdateScheduled || (this.dimensionUpdateScheduled = true, requestAnimationFrame(() => {
          this.updateDimensionCache(), this.dimensionUpdateScheduled = false;
        }));
      }), t2.globals.resizeObserver.observe(e2)));
    }
    updateDimensionCache() {
      const t2 = this.w, e2 = this.getElTooltip();
      if (!e2) return;
      const s2 = e2.getBoundingClientRect();
      t2.globals.dimensionCache.tooltip = { width: s2.width, height: s2.height, lastUpdate: Date.now() };
    }
    getCachedDimensions() {
      const t2 = this.w;
      if (t2.globals.dimensionCache.tooltip) {
        const e3 = t2.globals.dimensionCache.tooltip;
        if (Date.now() - e3.lastUpdate < 1e3) return { ttWidth: e3.width, ttHeight: e3.height };
      }
      this.updateDimensionCache();
      const e2 = t2.globals.dimensionCache.tooltip;
      return e2 ? { ttWidth: e2.width, ttHeight: e2.height } : { ttWidth: 0, ttHeight: 0 };
    }
    getElTooltip(t2) {
      return t2 || (t2 = this), t2.w.dom.baseEl ? t2.w.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
    }
    getElXCrosshairs() {
      return this.w.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
    }
    getElGrid() {
      return this.w.dom.baseEl.querySelector(".apexcharts-grid");
    }
    drawTooltip(t2) {
      const e2 = this.w;
      this.xyRatios = t2, this.isXAxisTooltipEnabled = e2.config.xaxis.tooltip.enabled && e2.globals.axisCharts, this.yaxisTooltips = e2.config.yaxis.map((t3) => !!(t3.show && t3.tooltip.enabled && e2.globals.axisCharts)), this.allTooltipSeriesGroups = [], e2.globals.axisCharts || (this.showTooltipTitle = false);
      const s2 = f.createElementNS("http://www.w3.org/1999/xhtml", "div");
      if (s2.classList.add("apexcharts-tooltip"), e2.config.tooltip.cssClass && s2.classList.add(e2.config.tooltip.cssClass), s2.classList.add(`apexcharts-theme-${this.tConfig.theme || "light"}`), e2.config.chart.accessibility.enabled && e2.config.chart.accessibility.announcements.enabled && (s2.setAttribute("role", "tooltip"), s2.setAttribute("aria-live", "polite"), s2.setAttribute("aria-atomic", "true"), s2.setAttribute("aria-hidden", "true")), e2.dom.elWrap.appendChild(s2), e2.globals.axisCharts) {
        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
        const t3 = new _(this.w, this.ctx);
        this.xAxisTicksPositions = t3.getXAxisTicksPositions();
      }
      if (!e2.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e2.config.chart.type || this.tConfig.shared || (this.showOnIntersect = true), 0 !== e2.config.markers.size && 0 !== e2.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e2.globals.collapsedSeries.length === e2.seriesData.series.length) return;
      this.dataPointsDividedHeight = e2.layout.gridHeight / e2.globals.dataPoints, this.dataPointsDividedWidth = e2.layout.gridWidth / e2.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = f.createElementNS("http://www.w3.org/1999/xhtml", "div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e2.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, s2.appendChild(this.tooltipTitle));
      let i2 = e2.seriesData.series.length;
      (e2.globals.xyCharts || e2.globals.comboCharts) && this.tConfig.shared && (i2 = this.showOnIntersect ? 1 : e2.seriesData.series.length), this.legendLabels = e2.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(i2), this.addSVGEvents(), this.setupDimensionCache();
    }
    createTTElements(t2) {
      const e2 = this.w, s2 = [], i2 = this.getElTooltip();
      for (let a2 = 0; a2 < t2; a2++) {
        const o2 = f.createElementNS("http://www.w3.org/1999/xhtml", "div");
        o2.classList.add("apexcharts-tooltip-series-group", `apexcharts-tooltip-series-group-${a2}`), o2.style.order = e2.config.tooltip.inverseOrder ? t2 - a2 : a2 + 1;
        const r2 = f.createElementNS("http://www.w3.org/1999/xhtml", "span");
        r2.classList.add("apexcharts-tooltip-marker"), e2.config.tooltip.fillSeriesColor ? r2.style.backgroundColor = e2.globals.colors[a2] : r2.style.color = e2.globals.colors[a2];
        const n2 = e2.config.markers.shape;
        let l2 = n2;
        Array.isArray(n2) && (l2 = n2[a2]), r2.setAttribute("shape", l2), o2.appendChild(r2);
        const h2 = f.createElementNS("http://www.w3.org/1999/xhtml", "div");
        h2.classList.add("apexcharts-tooltip-text"), h2.style.fontFamily = this.tConfig.style.fontFamily || e2.config.chart.fontFamily, h2.style.fontSize = this.tConfig.style.fontSize, ["y", "goals", "z"].forEach((t3) => {
          const e3 = f.createElementNS("http://www.w3.org/1999/xhtml", "div");
          e3.classList.add(`apexcharts-tooltip-${t3}-group`);
          const s3 = f.createElementNS("http://www.w3.org/1999/xhtml", "span");
          s3.classList.add(`apexcharts-tooltip-text-${t3}-label`), e3.appendChild(s3);
          const i3 = f.createElementNS("http://www.w3.org/1999/xhtml", "span");
          i3.classList.add(`apexcharts-tooltip-text-${t3}-value`), e3.appendChild(i3), h2.appendChild(e3);
        }), o2.appendChild(h2), i2.appendChild(o2), s2.push(o2);
      }
      return s2;
    }
    addSVGEvents() {
      const t2 = this.w, e2 = t2.config.chart.type, s2 = this.getElTooltip(), i2 = !("bar" !== e2 && "candlestick" !== e2 && "boxPlot" !== e2 && "rangeBar" !== e2), a2 = "area" === e2 || "line" === e2 || "scatter" === e2 || "bubble" === e2 || "radar" === e2, o2 = t2.dom.Paper.node, r2 = this.getElGrid();
      r2 && (this.seriesBound = r2.getBoundingClientRect());
      const n2 = [], l2 = [], h2 = { hoverArea: o2, elGrid: r2, tooltipEl: s2, tooltipY: n2, tooltipX: l2, ttItems: this.ttItems };
      let c2;
      if (t2.globals.axisCharts && (a2 ? c2 = t2.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : i2 ? c2 = t2.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e2 && "treemap" !== e2 || (c2 = t2.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), c2 && c2.length)) for (let t3 = 0; t3 < c2.length; t3++) n2.push(c2[t3].getAttribute("cy")), l2.push(c2[t3].getAttribute("cx"));
      if (t2.globals.xyCharts && !this.showOnIntersect || t2.globals.comboCharts && !this.showOnIntersect || i2 && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([o2], h2);
      else if (i2 && !t2.globals.comboCharts || a2 && this.showOnIntersect) this.addDatapointEventsListeners(h2);
      else if (!t2.globals.axisCharts || "heatmap" === e2 || "treemap" === e2) {
        const e3 = t2.dom.baseEl.querySelectorAll(".apexcharts-series");
        this.addPathsEventListeners(e3, h2);
      }
      if (this.showOnIntersect) {
        const e3 = t2.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
        e3.length > 0 && this.addPathsEventListeners(e3, h2), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(h2);
      }
    }
    drawFixedTooltipRect() {
      const t2 = this.w, e2 = this.getElTooltip(), s2 = e2.getBoundingClientRect(), i2 = s2.width + 10, a2 = s2.height + 10;
      let o2 = this.tConfig.fixed.offsetX, r2 = this.tConfig.fixed.offsetY;
      const n2 = this.tConfig.fixed.position.toLowerCase();
      return n2.indexOf("right") > -1 && (o2 = o2 + t2.globals.svgWidth - i2 + 10), n2.indexOf("bottom") > -1 && (r2 = r2 + t2.globals.svgHeight - a2 - 10), e2.style.left = o2 + "px", e2.style.top = r2 + "px", { x: o2, y: r2, ttWidth: i2, ttHeight: a2 };
    }
    addDatapointEventsListeners(t2) {
      const e2 = this.w.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
      this.addPathsEventListeners(e2, t2);
    }
    addPathsEventListeners(t2, e2) {
      const s2 = this;
      for (let i2 = 0; i2 < t2.length; i2++) {
        const a2 = { paths: t2[i2], tooltipEl: e2.tooltipEl, tooltipY: e2.tooltipY, tooltipX: e2.tooltipX, elGrid: e2.elGrid, hoverArea: e2.hoverArea, ttItems: e2.ttItems };
        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map((e3) => t2[i2].addEventListener(e3, s2.onSeriesHover.bind(s2, a2), { capture: false, passive: true }));
      }
    }
    onSeriesHover(t2, e2) {
      const s2 = Date.now() - this.lastHoverTime;
      s2 >= 20 ? this.seriesHover(t2, e2) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(() => {
        this.seriesHover(t2, e2);
      }, 20 - s2));
    }
    seriesHover(t2, e2) {
      this.lastHoverTime = Date.now();
      let s2 = [];
      const i2 = this.w;
      i2.config.chart.group && (s2 = this.ctx.getGroupedCharts()), i2.globals.axisCharts && (i2.globals.minX === -1 / 0 && i2.globals.maxX === 1 / 0 || 0 === i2.globals.dataPoints) || (s2.length ? s2.forEach((s3) => {
        const i3 = this.getElTooltip(s3), a2 = { paths: t2.paths, tooltipEl: i3, tooltipY: t2.tooltipY, tooltipX: t2.tooltipX, elGrid: t2.elGrid, hoverArea: t2.hoverArea, ttItems: s3.w.globals.tooltip.ttItems };
        s3.w.globals.minX === this.w.globals.minX && s3.w.globals.maxX === this.w.globals.maxX && s3.w.globals.tooltip.seriesHoverByContext({ chartCtx: s3, ttCtx: s3.w.globals.tooltip, opt: a2, e: e2 });
      }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t2, e: e2 }));
    }
    seriesHoverByContext({ chartCtx: t2, ttCtx: e2, opt: s2, e: i2 }) {
      const a2 = t2.w;
      if (!this.getElTooltip(t2)) return;
      const o2 = e2.getCachedDimensions();
      if (e2.tooltipRect = { x: 0, y: 0, ttWidth: o2.ttWidth, ttHeight: o2.ttHeight }, e2.e = i2, e2.tooltipUtil.hasBars() && !a2.globals.comboCharts && !e2.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries) {
        new Q(t2.w).toggleSeriesOnHover(i2, i2.target.parentNode);
      }
      a2.globals.axisCharts ? e2.axisChartsTooltips({ e: i2, opt: s2, tooltipRect: e2.tooltipRect }) : e2.nonAxisChartsTooltips({ e: i2, opt: s2, tooltipRect: e2.tooltipRect }), e2.fixedTooltip && e2.drawFixedTooltipRect();
    }
    axisChartsTooltips({ e: t2, opt: e2 }) {
      const s2 = this.w;
      let i2, a2;
      const o2 = e2.elGrid.getBoundingClientRect(), r2 = "touchmove" === t2.type ? t2.touches[0].clientX : t2.clientX, n2 = "touchmove" === t2.type ? t2.touches[0].clientY : t2.clientY;
      if (this.clientY = n2, this.clientX = r2, s2.interact.capturedSeriesIndex = -1, s2.interact.capturedDataPointIndex = -1, n2 < o2.top || n2 > o2.top + o2.height) return void this.handleMouseOut(e2);
      if (Array.isArray(this.tConfig.enabledOnSeries) && !s2.config.tooltip.shared) {
        const t3 = parseInt(e2.paths.getAttribute("index"), 10);
        if (this.tConfig.enabledOnSeries.indexOf(t3) < 0) return void this.handleMouseOut(e2);
      }
      const l2 = this.getElTooltip(), h2 = this.getElXCrosshairs();
      let c2 = [];
      s2.config.chart.group && (c2 = this.ctx.getSyncedCharts());
      const d2 = s2.globals.xyCharts || "bar" === s2.config.chart.type && !s2.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || s2.globals.comboCharts && this.tooltipUtil.hasBars();
      if ("mousemove" === t2.type || "touchmove" === t2.type || "mouseup" === t2.type) {
        if (s2.globals.collapsedSeries.length + s2.globals.ancillaryCollapsedSeries.length === s2.seriesData.series.length) return;
        null !== h2 && h2.classList.add("apexcharts-active");
        const o3 = this.yaxisTooltips.filter((t3) => true === t3);
        if (null !== this.ycrosshairs && o3.length && this.ycrosshairs.classList.add("apexcharts-active"), d2 && !this.showOnIntersect || c2.length > 1) this.handleStickyTooltip(t2, r2, n2, e2);
        else if ("heatmap" === s2.config.chart.type || "treemap" === s2.config.chart.type) {
          const o4 = this.intersect.handleHeatTreeTooltip({ e: t2, opt: e2, x: i2, y: a2, type: s2.config.chart.type });
          i2 = o4.x, a2 = o4.y, l2.style.left = i2 + "px", l2.style.top = a2 + "px";
        } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: t2, opt: e2 }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: t2, opt: e2, x: i2, y: a2 });
        if (this.yaxisTooltips.length) for (let t3 = 0; t3 < s2.config.yaxis.length; t3++) this.axesTooltip.drawYaxisTooltipText(t3, n2, this.xyRatios);
        s2.dom.baseEl.classList.add("apexcharts-tooltip-active"), e2.tooltipEl.classList.add("apexcharts-active"), s2.config.chart.accessibility.enabled && s2.config.chart.accessibility.announcements.enabled && e2.tooltipEl.removeAttribute("aria-hidden");
      } else "mouseout" !== t2.type && "touchend" !== t2.type || this.handleMouseOut(e2);
    }
    nonAxisChartsTooltips({ e: t2, opt: e2, tooltipRect: s2 }) {
      const i2 = this.w, a2 = e2.paths.getAttribute("rel"), o2 = this.getElTooltip(), r2 = i2.dom.elWrap.getBoundingClientRect();
      if ("mousemove" === t2.type || "touchmove" === t2.type) {
        let t3, n2;
        i2.dom.baseEl.classList.add("apexcharts-tooltip-active"), o2.classList.add("apexcharts-active"), i2.config.chart.accessibility.enabled && i2.config.chart.accessibility.announcements.enabled && o2.removeAttribute("aria-hidden"), this.tooltipLabels.drawSeriesTexts({ ttItems: e2.ttItems, i: parseInt(a2, 10) - 1, shared: false });
        const l2 = e2.paths.querySelector("path[data\\:cx]") || e2.paths;
        if (i2.config.tooltip.intersect && l2.hasAttribute("data:cx") && l2.hasAttribute("data:cy")) {
          const e3 = i2.dom.Paper.node.getBoundingClientRect();
          t3 = e3.left - r2.left + parseFloat(l2.getAttribute("data:cx")) - s2.ttWidth / 2, n2 = e3.top - r2.top + parseFloat(l2.getAttribute("data:cy")) - s2.ttHeight - 10;
        } else t3 = i2.interact.clientX - r2.left - s2.ttWidth / 2, n2 = i2.interact.clientY - r2.top - s2.ttHeight - 10;
        if (o2.style.left = t3 + "px", o2.style.top = n2 + "px", i2.config.legend.tooltipHoverFormatter) {
          const t4 = a2 - 1, e3 = (0, i2.config.legend.tooltipHoverFormatter)(this.legendLabels[t4].getAttribute("data:default-text"), { seriesIndex: t4, dataPointIndex: t4, w: i2 });
          this.legendLabels[t4].innerHTML = e3;
        }
      } else "mouseout" !== t2.type && "touchend" !== t2.type || (o2.classList.remove("apexcharts-active"), i2.dom.baseEl.classList.remove("apexcharts-tooltip-active"), i2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((t3) => {
        const e3 = t3.getAttribute("data:default-text");
        t3.innerHTML = decodeURIComponent(e3);
      }));
    }
    handleStickyTooltip(t2, e2, s2, i2) {
      const a2 = this.w, o2 = this.tooltipUtil.getNearestValues({ context: this, hoverArea: i2.hoverArea, elGrid: i2.elGrid, clientX: e2, clientY: s2 }), r2 = o2.j;
      let n2 = o2.capturedSeries;
      a2.globals.collapsedSeriesIndices.includes(n2) && (n2 = null);
      const l2 = i2.elGrid.getBoundingClientRect();
      if (o2.hoverX < 0 || o2.hoverX > l2.width) this.handleMouseOut(i2);
      else if (null !== n2) this.handleStickyCapturedSeries(t2, n2, i2, r2);
      else if (this.tooltipUtil.isXoverlap(r2) || a2.globals.isBarHorizontal) {
        const e3 = a2.seriesData.series.findIndex((t3, e4) => !a2.globals.collapsedSeriesIndices.includes(e4));
        this.create(t2, this, e3, r2, i2.ttItems);
      }
    }
    handleStickyCapturedSeries(t2, e2, s2, i2) {
      const a2 = this.w;
      if (!this.tConfig.shared) {
        if (null === a2.seriesData.series[e2][i2]) return void this.handleMouseOut(s2);
      }
      if (void 0 !== a2.seriesData.series[e2][i2]) this.tConfig.shared && this.tooltipUtil.isXoverlap(i2) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t2, this, e2, i2, s2.ttItems) : this.create(t2, this, e2, i2, s2.ttItems, false);
      else if (this.tooltipUtil.isXoverlap(i2)) {
        const e3 = a2.seriesData.series.findIndex((t3, e4) => !a2.globals.collapsedSeriesIndices.includes(e4));
        this.create(t2, this, e3, i2, s2.ttItems);
      }
    }
    deactivateHoverFilter() {
      const t2 = this.w, e2 = new X(this.w, this.ctx), s2 = t2.dom.Paper.find(".apexcharts-bar-area");
      for (let t3 = 0; t3 < s2.length; t3++) e2.pathMouseLeave(s2[t3]);
    }
    handleMouseOut(t2) {
      const e2 = this.w, s2 = this.getElXCrosshairs();
      if (e2.dom.baseEl.classList.remove("apexcharts-tooltip-active"), t2.tooltipEl.classList.remove("apexcharts-active"), e2.config.chart.accessibility.enabled && e2.config.chart.accessibility.announcements.enabled && t2.tooltipEl.setAttribute("aria-hidden", "true"), this.deactivateHoverFilter(), "bubble" !== e2.config.chart.type && this.marker.resetPointsSize(), null !== s2 && s2.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
        null === this.yaxisTTEls && (this.yaxisTTEls = e2.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
        for (let t3 = 0; t3 < this.yaxisTTEls.length; t3++) this.yaxisTTEls[t3].classList.remove("apexcharts-active");
      }
      e2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((t3) => {
        const e3 = t3.getAttribute("data:default-text");
        t3.innerHTML = decodeURIComponent(e3);
      });
    }
    markerClick(t2, e2, s2) {
      const i2 = this.w;
      "function" == typeof i2.config.chart.events.markerClick && i2.config.chart.events.markerClick(t2, this.ctx, { seriesIndex: e2, dataPointIndex: s2, w: i2 }), this.ctx.events.fireEvent("markerClick", [t2, this.ctx, { seriesIndex: e2, dataPointIndex: s2, w: i2 }]);
    }
    create(t2, e2, s2, i2, a2, o2 = null) {
      var r2, h2, c2, d2, g2, p2, x2, u2, f2, b2, m2, y2, w2, v2, A2, C2;
      const S2 = this.w, k2 = e2;
      "mouseup" === t2.type && this.markerClick(t2, s2, i2), null === o2 && (o2 = this.tConfig.shared);
      const D2 = this.tooltipUtil.hasMarkers(s2), L2 = this.tooltipUtil.getElBars(), P2 = () => {
        S2.globals.markers.largestSize > 0 ? k2.marker.enlargePoints(i2) : k2.tooltipPosition.moveDynamicPointsOnHover(i2);
      };
      if (S2.config.legend.tooltipHoverFormatter) {
        const t3 = S2.config.legend.tooltipHoverFormatter, e3 = Array.from(this.legendLabels);
        e3.forEach((t4) => {
          const e4 = t4.getAttribute("data:default-text");
          t4.innerHTML = decodeURIComponent(e4);
        });
        for (let a3 = 0; a3 < e3.length; a3++) {
          const r3 = e3[a3], n2 = parseInt(r3.getAttribute("i"), 10), l2 = decodeURIComponent(r3.getAttribute("data:default-text")), h3 = t3(l2, { seriesIndex: o2 ? n2 : s2, dataPointIndex: i2, w: S2 });
          if (o2) r3.innerHTML = S2.globals.collapsedSeriesIndices.indexOf(n2) < 0 ? h3 : l2;
          else if (r3.innerHTML = n2 === s2 ? h3 : l2, s2 === n2) break;
        }
      }
      const M2 = n(n({ ttItems: a2, i: s2, j: i2 }, void 0 !== (null == (d2 = null == (c2 = null == (h2 = null == (r2 = S2.rangeData.seriesRange) ? void 0 : r2[s2]) ? void 0 : h2[i2]) ? void 0 : c2.y[0]) ? void 0 : d2.y1) && { y1: null == (u2 = null == (x2 = null == (p2 = null == (g2 = S2.rangeData.seriesRange) ? void 0 : g2[s2]) ? void 0 : p2[i2]) ? void 0 : x2.y[0]) ? void 0 : u2.y1 }), void 0 !== (null == (y2 = null == (m2 = null == (b2 = null == (f2 = S2.rangeData.seriesRange) ? void 0 : f2[s2]) ? void 0 : b2[i2]) ? void 0 : m2.y[0]) ? void 0 : y2.y2) && { y2: null == (C2 = null == (A2 = null == (v2 = null == (w2 = S2.rangeData.seriesRange) ? void 0 : w2[s2]) ? void 0 : v2[i2]) ? void 0 : A2.y[0]) ? void 0 : C2.y2 });
      if (o2) {
        if (k2.tooltipLabels.drawSeriesTexts(l(n({}, M2), { shared: !this.showOnIntersect && this.tConfig.shared })), D2) P2();
        else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(L2), this.barSeriesHeight > 0)) {
          const t3 = new X(this.w, this.ctx), e3 = S2.dom.Paper.find(`.apexcharts-bar-area[j='${i2}']`);
          this.deactivateHoverFilter();
          k2.tooltipUtil.getAllMarkers(true).length && !this.barSeriesHeight && P2(), k2.tooltipPosition.moveStickyTooltipOverBars(i2, s2);
          for (let s3 = 0; s3 < e3.length; s3++) t3.pathMouseEnter(e3[s3]);
        }
      } else k2.tooltipLabels.drawSeriesTexts(n({ shared: false }, M2)), this.tooltipUtil.hasBars() && k2.tooltipPosition.moveStickyTooltipOverBars(i2, s2), D2 && k2.tooltipPosition.moveMarkers(s2, i2);
    }
  }
  class St {
    constructor(t2) {
      this.node = t2, t2 && (t2.instance = this), this._listeners = [], this._filter = null;
    }
    attr(t2, e2) {
      if ("string" == typeof t2 && void 0 === e2) return this.node.getAttribute(t2);
      const s2 = "string" == typeof t2 ? { [t2]: e2 } : t2;
      for (const t3 in s2) {
        let e3 = s2[t3];
        null === e3 ? this.node.removeAttribute(t3) : void 0 !== e3 && ("number" == typeof e3 && isNaN(e3) && (e3 = 0), this.node.setAttribute(t3, e3));
      }
      if ("text" === this.node.nodeName && null != s2.x) {
        const t3 = this.node.querySelectorAll("tspan[data-newline]");
        for (let e3 = 0; e3 < t3.length; e3++) t3[e3].setAttribute("x", s2.x);
      }
      return this;
    }
    css(t2) {
      for (const e2 in t2) this.node.style[e2] = t2[e2];
      return this;
    }
    fill(t2) {
      return "object" == typeof t2 ? this.attr(t2) : this.attr("fill", t2);
    }
    stroke(t2) {
      return "object" == typeof t2 ? (void 0 !== t2.color && this.attr("stroke", t2.color), void 0 !== t2.width && this.attr("stroke-width", t2.width), void 0 !== t2.dasharray && this.attr("stroke-dasharray", t2.dasharray), void 0 !== t2.linecap && this.attr("stroke-linecap", t2.linecap), void 0 !== t2.opacity && this.attr("stroke-opacity", t2.opacity), this) : this.attr("stroke", t2);
    }
    size(t2, e2) {
      return this.attr({ width: t2, height: e2 });
    }
    move(t2, e2) {
      return this.attr({ x: t2, y: e2 });
    }
    center(t2, e2) {
      if ("g" === this.node.nodeName) {
        const s2 = this.bbox(), i2 = t2 - (s2.x + s2.width / 2), a2 = e2 - (s2.y + s2.height / 2);
        return this.attr("transform", `translate(${i2}, ${a2})`);
      }
      return this.attr({ cx: t2, cy: e2 });
    }
    add(t2) {
      return this.node.appendChild(t2.node || t2), this;
    }
    addTo(t2) {
      return (t2.node || t2).appendChild(this.node), this;
    }
    remove() {
      return this.node.parentNode && this.node.parentNode.removeChild(this.node), this;
    }
    clear() {
      for (; this.node.firstChild; ) this.node.removeChild(this.node.firstChild);
      return this;
    }
    find(t2) {
      return Array.from(this.node.querySelectorAll(t2)).map((t3) => t3.instance || new St(t3));
    }
    findOne(t2) {
      const e2 = this.node.querySelector(t2);
      return e2 ? e2.instance || new St(e2) : null;
    }
    on(t2, e2) {
      const s2 = t2.split(".")[0];
      return this._listeners.push({ event: t2, eventType: s2, handler: e2 }), this.node.addEventListener(s2, e2), this;
    }
    off(t2, e2) {
      if (t2 || e2) if (t2 && !e2) {
        const e3 = t2.split(".")[0];
        this._listeners = this._listeners.filter((t3) => t3.eventType !== e3 || (this.node.removeEventListener(t3.eventType, t3.handler), false));
      } else {
        const s2 = t2.split(".")[0];
        this._listeners = this._listeners.filter((t3) => t3.eventType !== s2 || t3.handler !== e2 || (this.node.removeEventListener(t3.eventType, t3.handler), false));
      }
      else this._listeners.forEach((t3) => {
        this.node.removeEventListener(t3.eventType, t3.handler);
      }), this._listeners = [];
      return this;
    }
    each(t2, e2) {
      return Array.from(this.node.children).forEach((s2) => {
        const i2 = s2.instance || new St(s2);
        t2.call(i2), e2 && i2.each(t2, e2);
      }), this;
    }
    removeClass(t2) {
      return "*" === t2 ? this.node.removeAttribute("class") : this.node.classList.remove(t2), this;
    }
    children() {
      return Array.from(this.node.childNodes).filter((t2) => 1 === t2.nodeType).map((t2) => t2.instance || new St(t2));
    }
    hide() {
      return this.node.style.display = "none", this;
    }
    show() {
      return this.node.style.display = "", this;
    }
    bbox() {
      if ("function" == typeof this.node.getBBox) try {
        return this.node.getBBox();
      } catch (t2) {
      }
      return { x: 0, y: 0, width: 0, height: 0 };
    }
    tspan(t2) {
      const e2 = f.createElementNS("http://www.w3.org/2000/svg", "tspan");
      return e2.textContent = t2, this.node.appendChild(e2), new St(e2);
    }
    plot(t2) {
      return "string" == typeof t2 && this.attr("d", t2), this;
    }
    animate() {
      throw new Error("Animation module not loaded");
    }
    filterWith() {
      throw new Error("Filter module not loaded");
    }
    unfilter(t2) {
      return this._filter && (this.node.removeAttribute("filter"), t2 && this._filter.node && this._filter.node.parentNode && this._filter.node.parentNode.removeChild(this._filter.node), this._filter = null), this;
    }
    filterer() {
      return this._filter;
    }
  }
  let kt = 0;
  class Dt extends St {
    constructor(t2, e2, s2) {
      const i2 = "radial" === e2 ? "radialGradient" : "linearGradient";
      super(f.createElementNS(T, i2)), this._id = "SvgjsGradient" + ++kt, this.attr("id", this._id), "function" == typeof s2 && s2(new Lt(this));
      let a2 = t2.node.querySelector("defs");
      a2 || (a2 = f.createElementNS(T, "defs"), t2.node.appendChild(a2)), a2.appendChild(this.node);
    }
    stop(t2, e2, s2) {
      const i2 = f.createElementNS(T, "stop");
      return i2.setAttribute("offset", t2), i2.setAttribute("stop-color", e2), void 0 !== s2 && i2.setAttribute("stop-opacity", s2), this.node.appendChild(i2), this;
    }
    from(t2, e2) {
      return this.attr({ x1: t2, y1: e2 });
    }
    to(t2, e2) {
      return this.attr({ x2: t2, y2: e2 });
    }
    url() {
      return "url(#" + this._id + ")";
    }
    toString() {
      return this.url();
    }
    valueOf() {
      return this.url();
    }
    fill() {
      return this.url();
    }
  }
  class Lt {
    constructor(t2) {
      this.gradient = t2;
    }
    stop(t2, e2, s2) {
      return this.gradient.stop(t2, e2, s2), this;
    }
  }
  let Pt = 0;
  class Mt extends St {
    constructor(t2, e2, s2, i2) {
      if (super(f.createElementNS(T, "pattern")), this._id = "SvgjsPattern" + ++Pt, this.attr({ id: this._id, width: e2, height: s2, patternUnits: "userSpaceOnUse" }), "function" == typeof i2) {
        i2(new It(this.node));
      }
      let a2 = t2.node.querySelector("defs");
      a2 || (a2 = f.createElementNS(T, "defs"), t2.node.appendChild(a2)), a2.appendChild(this.node);
    }
    url() {
      return "url(#" + this._id + ")";
    }
    toString() {
      return this.url();
    }
    valueOf() {
      return this.url();
    }
    fill() {
      return this.url();
    }
  }
  class It extends St {
    line(t2, e2, s2, i2) {
      const a2 = this._make("line");
      return void 0 !== t2 && a2.attr({ x1: t2, y1: e2, x2: s2, y2: i2 }), a2;
    }
    rect(t2, e2) {
      const s2 = this._make("rect");
      return void 0 !== t2 && s2.attr({ width: t2, height: e2 }), s2;
    }
    circle(t2) {
      const e2 = this._make("circle");
      return void 0 !== t2 && e2.attr({ r: t2 / 2, cx: t2 / 2, cy: t2 / 2 }), e2;
    }
    path(t2) {
      const e2 = this._make("path");
      return t2 && e2.attr("d", t2), e2;
    }
    polygon(t2) {
      const e2 = this._make("polygon");
      return t2 && e2.attr("points", t2), e2;
    }
    group() {
      return this._makeContainer("g");
    }
    defs() {
      return this._makeContainer("defs");
    }
    plain(t2) {
      const e2 = f.createElementNS(T, "text");
      e2.textContent = t2;
      const s2 = new St(e2);
      return this.node.appendChild(e2), s2;
    }
    text(t2) {
      const e2 = f.createElementNS(T, "text"), s2 = new St(e2);
      return this.node.appendChild(e2), "function" == typeof t2 && t2(new Et(e2)), s2;
    }
    image(t2, e2) {
      const s2 = f.createElementNS(T, "image");
      s2.setAttributeNS("http://www.w3.org/1999/xlink", "href", t2);
      const i2 = new St(s2);
      if (this.node.appendChild(s2), "function" == typeof e2) {
        const s3 = new Image();
        s3.onload = function() {
          i2.size(s3.width, s3.height), e2.call(i2, { width: s3.width, height: s3.height });
        }, s3.src = t2;
      }
      return i2;
    }
    gradient(t2, e2) {
      return new Dt(this, t2, e2);
    }
    pattern(t2, e2, s2) {
      return new Mt(this, t2, e2, s2);
    }
    _make(t2) {
      const e2 = f.createElementNS(T, t2);
      return this.node.appendChild(e2), new St(e2);
    }
    _makeContainer(t2) {
      const e2 = f.createElementNS(T, t2);
      return this.node.appendChild(e2), new It(e2);
    }
  }
  class Et {
    constructor(t2) {
      this.textNode = t2;
    }
    tspan(t2) {
      const e2 = f.createElementNS(T, "tspan");
      return e2.textContent = t2, this.textNode.appendChild(e2), new Ft(e2, this.textNode);
    }
  }
  class Ft {
    constructor(t2, e2) {
      this.node = t2, this.textNode = e2;
    }
    newLine() {
      return this.node.setAttribute("dy", "1.1em"), this.node.dataset.newline = "1", this;
    }
  }
  let Xt = 0;
  class Tt extends St {
    constructor() {
      super(f.createElementNS(T, "filter")), this._id = "SvgjsFilter" + ++Xt, this.attr("id", this._id);
    }
    size(t2, e2, s2, i2) {
      return this.attr({ width: t2, height: e2, x: s2, y: i2 });
    }
  }
  class zt {
    constructor(t2) {
      this.filter = t2;
    }
    colorMatrix(t2) {
      return this._primitive("feColorMatrix", t2);
    }
    offset(t2) {
      return this._primitive("feOffset", t2);
    }
    gaussianBlur(t2) {
      return this._primitive("feGaussianBlur", t2);
    }
    flood(t2) {
      return this._primitive("feFlood", t2);
    }
    composite(t2) {
      return this._primitive("feComposite", t2);
    }
    merge(t2) {
      const e2 = f.createElementNS(T, "feMerge");
      return t2.forEach((t3) => {
        const s2 = f.createElementNS(T, "feMergeNode");
        s2.setAttribute("in", t3), e2.appendChild(s2);
      }), this.filter.node.appendChild(e2), new St(e2);
    }
    _primitive(t2, e2) {
      const s2 = f.createElementNS(T, t2);
      for (const t3 in e2) s2.setAttribute(t3, e2[t3]);
      return this.filter.node.appendChild(s2), new St(s2);
    }
  }
  function Rt(t2) {
    if (!t2 || "string" != typeof t2) return [["M", 0, 0]];
    const e2 = [], s2 = /([MmLlHhVvCcSsQqTtAaZz])\s*/g, i2 = /[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/gi;
    let a2;
    const o2 = [], r2 = [];
    for (; null !== (a2 = s2.exec(t2)); ) o2.push(a2[1]), r2.push(a2.index);
    for (let s3 = 0; s3 < o2.length; s3++) {
      const a3 = r2[s3] + o2[s3].length, n2 = s3 + 1 < r2.length ? r2[s3 + 1] : t2.length, l2 = t2.substring(a3, n2), h2 = [];
      let c2;
      for (i2.lastIndex = 0; null !== (c2 = i2.exec(l2)); ) h2.push(parseFloat(c2[0]));
      const d2 = o2[s3].toUpperCase();
      if ("Z" === d2) e2.push(["Z"]);
      else if ("M" === d2 || "L" === d2 || "T" === d2) for (let t3 = 0; t3 < h2.length; t3 += 2) e2.push([d2, h2[t3], h2[t3 + 1]]);
      else if ("H" === d2) for (let t3 = 0; t3 < h2.length; t3++) e2.push([d2, h2[t3]]);
      else if ("V" === d2) for (let t3 = 0; t3 < h2.length; t3++) e2.push([d2, h2[t3]]);
      else if ("C" === d2) for (let t3 = 0; t3 < h2.length; t3 += 6) e2.push([d2, h2[t3], h2[t3 + 1], h2[t3 + 2], h2[t3 + 3], h2[t3 + 4], h2[t3 + 5]]);
      else if ("S" === d2 || "Q" === d2) for (let t3 = 0; t3 < h2.length; t3 += 4) e2.push([d2, h2[t3], h2[t3 + 1], h2[t3 + 2], h2[t3 + 3]]);
      else if ("A" === d2) for (let t3 = 0; t3 < h2.length; t3 += 7) e2.push([d2, h2[t3], h2[t3 + 1], h2[t3 + 2], h2[t3 + 3], h2[t3 + 4], h2[t3 + 5], h2[t3 + 6]]);
    }
    return 0 === e2.length && e2.push(["M", 0, 0]), e2;
  }
  function Yt(t2) {
    let e2 = 1 / 0, s2 = 1 / 0, i2 = -1 / 0, a2 = -1 / 0;
    return t2.forEach((t3) => {
      for (let o2 = 1; o2 < t3.length; o2 += 2) if (o2 + 1 <= t3.length) {
        const r2 = t3[o2], n2 = t3[o2 + 1];
        "number" == typeof r2 && "number" == typeof n2 && (r2 < e2 && (e2 = r2), r2 > i2 && (i2 = r2), n2 < s2 && (s2 = n2), n2 > a2 && (a2 = n2));
      }
    }), e2 === 1 / 0 ? { x: 0, y: 0, width: 0, height: 0 } : { x: e2, y: s2, width: i2 - e2, height: a2 - s2 };
  }
  function Bt(t2) {
    switch (t2[0]) {
      case "z":
      case "Z":
        t2[0] = "L", t2[1] = this.start[0], t2[2] = this.start[1];
        break;
      case "H":
        t2[0] = "L", t2[2] = this.pos[1];
        break;
      case "V":
        t2[0] = "L", t2[2] = t2[1], t2[1] = this.pos[0];
        break;
      case "T":
        t2[0] = "Q", t2[3] = t2[1], t2[4] = t2[2], t2[1] = this.reflection[1], t2[2] = this.reflection[0];
        break;
      case "S":
        t2[0] = "C", t2[6] = t2[4], t2[5] = t2[3], t2[4] = t2[2], t2[3] = t2[1], t2[2] = this.reflection[1], t2[1] = this.reflection[0];
    }
    return t2;
  }
  function Ht(t2) {
    var e2 = t2.length;
    return this.pos = [t2[e2 - 2], t2[e2 - 1]], -1 != "SCQT".indexOf(t2[0]) && (this.reflection = [2 * this.pos[0] - t2[e2 - 4], 2 * this.pos[1] - t2[e2 - 3]]), t2;
  }
  function Ot(t2) {
    var e2 = [t2];
    switch (t2[0]) {
      case "M":
        return this.pos = this.start = [t2[1], t2[2]], e2;
      case "L":
        t2[5] = t2[3] = t2[1], t2[6] = t2[4] = t2[2], t2[1] = this.pos[0], t2[2] = this.pos[1];
        break;
      case "Q":
        t2[6] = t2[4], t2[5] = t2[3], t2[4] = 1 * t2[4] / 3 + 2 * t2[2] / 3, t2[3] = 1 * t2[3] / 3 + 2 * t2[1] / 3, t2[2] = 1 * this.pos[1] / 3 + 2 * t2[2] / 3, t2[1] = 1 * this.pos[0] / 3 + 2 * t2[1] / 3;
        break;
      case "A":
        e2 = (function(t3, e3) {
          var s2, i2, a2, o2, r2, n2, l2, h2, c2, d2, g2, p2, x2, u2, f2, b2, m2, y2, w2, v2, A2, C2, S2, k2, D2, L2, P2 = Math.abs(e3[1]), M2 = Math.abs(e3[2]), I2 = e3[3] % 360, E2 = e3[4], F2 = e3[5], X2 = e3[6], T2 = e3[7], Y2 = new z(t3[0], t3[1]), B2 = new z(X2, T2), H2 = [];
          if (0 === P2 || 0 === M2 || Y2.x === B2.x && Y2.y === B2.y) return [["C", Y2.x, Y2.y, B2.x, B2.y, B2.x, B2.y]];
          s2 = new z((Y2.x - B2.x) / 2, (Y2.y - B2.y) / 2).transform(new R().rotate(I2)), (i2 = s2.x * s2.x / (P2 * P2) + s2.y * s2.y / (M2 * M2)) > 1 && (P2 *= i2 = Math.sqrt(i2), M2 *= i2);
          a2 = new R().rotate(I2).scale(1 / P2, 1 / M2).rotate(-I2), Y2 = Y2.transform(a2), B2 = B2.transform(a2), o2 = [B2.x - Y2.x, B2.y - Y2.y], n2 = o2[0] * o2[0] + o2[1] * o2[1], r2 = Math.sqrt(n2), o2[0] /= r2, o2[1] /= r2, l2 = n2 < 4 ? Math.sqrt(1 - n2 / 4) : 0, E2 === F2 && (l2 *= -1);
          h2 = new z((B2.x + Y2.x) / 2 + l2 * -o2[1], (B2.y + Y2.y) / 2 + l2 * o2[0]), c2 = new z(Y2.x - h2.x, Y2.y - h2.y), d2 = new z(B2.x - h2.x, B2.y - h2.y), g2 = Math.acos(c2.x / Math.sqrt(c2.x * c2.x + c2.y * c2.y)), c2.y < 0 && (g2 *= -1);
          p2 = Math.acos(d2.x / Math.sqrt(d2.x * d2.x + d2.y * d2.y)), d2.y < 0 && (p2 *= -1);
          F2 && g2 > p2 && (p2 += 2 * Math.PI);
          !F2 && g2 < p2 && (p2 -= 2 * Math.PI);
          for (u2 = Math.ceil(2 * Math.abs(g2 - p2) / Math.PI), b2 = [], m2 = g2, x2 = (p2 - g2) / u2, f2 = 4 * Math.tan(x2 / 4) / 3, A2 = 0; A2 <= u2; A2++) w2 = Math.cos(m2), y2 = Math.sin(m2), v2 = new z(h2.x + w2, h2.y + y2), b2[A2] = [new z(v2.x + f2 * y2, v2.y - f2 * w2), v2, new z(v2.x - f2 * y2, v2.y + f2 * w2)], m2 += x2;
          for (b2[0][0] = b2[0][1].clone(), b2[b2.length - 1][2] = b2[b2.length - 1][1].clone(), a2 = new R().rotate(I2).scale(P2, M2).rotate(-I2), A2 = 0, C2 = b2.length; A2 < C2; A2++) b2[A2][0] = b2[A2][0].transform(a2), b2[A2][1] = b2[A2][1].transform(a2), b2[A2][2] = b2[A2][2].transform(a2);
          for (A2 = 1, C2 = b2.length; A2 < C2; A2++) S2 = (v2 = b2[A2 - 1][2]).x, k2 = v2.y, D2 = (v2 = b2[A2][0]).x, L2 = v2.y, X2 = (v2 = b2[A2][1]).x, T2 = v2.y, H2.push(["C", S2, k2, D2, L2, X2, T2]);
          return H2;
        })(this.pos, t2), t2 = e2[0];
    }
    return t2[0] = "C", this.pos = [t2[5], t2[6]], this.reflection = [2 * t2[5] - t2[3], 2 * t2[6] - t2[4]], e2;
  }
  function Nt(t2, e2) {
    if (false === e2) return false;
    for (var s2 = e2, i2 = t2.length; s2 < i2; ++s2) if ("M" == t2[s2][0]) return s2;
    return false;
  }
  function Wt(t2, e2, s2, i2, a2, o2) {
    for (var r2 = t2.slice(e2, s2 || void 0), n2 = i2.slice(a2, o2 || void 0), l2 = 0, h2 = { pos: [0, 0], start: [0, 0] }, c2 = { pos: [0, 0], start: [0, 0] }; r2[l2] = Bt.call(h2, r2[l2]), n2[l2] = Bt.call(c2, n2[l2]), r2[l2][0] != n2[l2][0] || "M" == r2[l2][0] || "A" == r2[l2][0] && (r2[l2][4] != n2[l2][4] || r2[l2][5] != n2[l2][5]) ? (Array.prototype.splice.apply(r2, [l2, 1].concat(Ot.call(h2, r2[l2]))), Array.prototype.splice.apply(n2, [l2, 1].concat(Ot.call(c2, n2[l2])))) : (r2[l2] = Ht.call(h2, r2[l2]), n2[l2] = Ht.call(c2, n2[l2])), ++l2 != r2.length || l2 != n2.length; ) l2 == r2.length && r2.push(["C", h2.pos[0], h2.pos[1], h2.pos[0], h2.pos[1], h2.pos[0], h2.pos[1]]), l2 == n2.length && n2.push(["C", c2.pos[0], c2.pos[1], c2.pos[0], c2.pos[1], c2.pos[0], c2.pos[1]]);
    return { start: r2, dest: n2 };
  }
  function _t(t2, e2) {
    var s2 = (function(t3, e3) {
      for (var s3, i3 = Rt(t3), a3 = Rt(e3), o2 = 0, r2 = 0, n2 = false, l2 = false; false !== o2 || false !== r2; ) {
        if (n2 = Nt(i3, false !== o2 && o2 + 1), l2 = Nt(a3, false !== r2 && r2 + 1), false === o2) {
          const t4 = Yt(s3.start);
          o2 = 0 == t4.height || 0 == t4.width ? i3.push(i3[0]) - 1 : i3.push(["M", t4.x + t4.width / 2, t4.y + t4.height / 2]) - 1;
        }
        if (false === r2) {
          const t4 = Yt(s3.dest);
          r2 = 0 == t4.height || 0 == t4.width ? a3.push(a3[0]) - 1 : a3.push(["M", t4.x + t4.width / 2, t4.y + t4.height / 2]) - 1;
        }
        s3 = Wt(i3, o2, n2, a3, r2, l2), i3 = i3.slice(0, o2).concat(s3.start, false === n2 ? [] : i3.slice(n2)), a3 = a3.slice(0, r2).concat(s3.dest, false === l2 ? [] : a3.slice(l2)), o2 = false !== n2 && o2 + s3.start.length, r2 = false !== l2 && r2 + s3.dest.length;
      }
      return { start: i3, dest: a3 };
    })(t2, e2), i2 = s2.start, a2 = s2.dest;
    return function(t3) {
      var e3 = i2.map(function(e4, s3) {
        return a2[s3].map(function(i3, o2) {
          return 0 === o2 ? i3 : e4[o2] + (a2[s3][o2] - e4[o2]) * t3;
        });
      });
      return e3.map((t4) => t4.join(" ")).join(" ");
    };
  }
  function Gt(t2) {
    if (!t2 || "string" != typeof t2) return null;
    if ("#" === t2[0]) {
      let e3 = t2.slice(1);
      3 === e3.length && (e3 = e3[0] + e3[0] + e3[1] + e3[1] + e3[2] + e3[2]);
      const s2 = parseInt(e3, 16);
      return [s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2, 1];
    }
    const e2 = t2.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);
    return e2 ? [+e2[1], +e2[2], +e2[3], void 0 !== e2[4] ? +e2[4] : 1] : null;
  }
  function $t(t2, e2, s2) {
    return `rgba(${Math.round(t2[0] + (e2[0] - t2[0]) * s2)},${Math.round(t2[1] + (e2[1] - t2[1]) * s2)},${Math.round(t2[2] + (e2[2] - t2[2]) * s2)},${t2[3] + (e2[3] - t2[3]) * s2})`;
  }
  class jt {
    constructor(t2, e2, s2) {
      this.el = t2, this.duration = null != e2 ? e2 : 300, this.delay = s2 || 0, this._attrTarget = null, this._plotTarget = null, this._afterCb = null, this._duringCb = null, this._next = null, this._root = null, this._scheduled = false;
    }
    attr(t2) {
      return this._attrTarget = t2, this._schedule(), this;
    }
    plot(t2) {
      return this._plotTarget = t2, this._schedule(), this;
    }
    after(t2) {
      return this._afterCb = t2, this._schedule(), this;
    }
    during(t2) {
      return this._duringCb = t2, this._schedule(), this;
    }
    animate(t2, e2) {
      const s2 = new jt(this.el, t2, e2);
      return this._next = s2, s2._root = this._root || this, s2;
    }
    _schedule() {
      const t2 = this._root || this;
      t2._scheduled || (t2._scheduled = true, queueMicrotask(() => t2._executeChain()));
    }
    _executeChain() {
      const t2 = [];
      let e2 = this;
      for (; e2; ) t2.push(e2), e2 = e2._next;
      let s2 = 0;
      t2.forEach((t3) => {
        s2 += t3.delay, t3._execute(s2), s2 += t3.duration;
      });
    }
    _execute(t2) {
      const e2 = this.el, s2 = this.duration;
      if (s2 <= 1) {
        const s3 = () => {
          this._attrTarget && e2.attr(this._attrTarget), this._plotTarget && e2.plot(this._plotTarget), this._afterCb && this._afterCb.call(e2);
        };
        return void (t2 > 0 ? setTimeout(s3, t2) : s3());
      }
      const i2 = () => {
        const t3 = {}, i3 = {}, a2 = {};
        if (this._attrTarget) for (const s3 of Object.keys(this._attrTarget)) {
          const o3 = e2.attr(s3);
          t3[s3] = o3;
          const r3 = Gt(o3), n3 = Gt(String(this._attrTarget[s3]));
          r3 && n3 && (i3[s3] = r3, a2[s3] = n3);
        }
        let o2 = null;
        if (this._plotTarget) {
          const t4 = e2.attr("d") || "";
          try {
            o2 = _t(t4, this._plotTarget);
          } catch (t5) {
            o2 = null;
          }
        }
        const r2 = performance.now(), n2 = (l2) => {
          const h2 = l2 - r2, c2 = Math.min(h2 / s2, 1), d2 = (g2 = c2, -Math.cos(g2 * Math.PI) / 2 + 0.5);
          var g2;
          if (this._attrTarget) if (c2 >= 1) e2.attr(this._attrTarget);
          else {
            const s3 = {};
            for (const e3 of Object.keys(this._attrTarget)) if (i3[e3] && a2[e3]) s3[e3] = $t(i3[e3], a2[e3], d2);
            else {
              const i4 = parseFloat(t3[e3]), a3 = parseFloat(this._attrTarget[e3]);
              isNaN(i4) || isNaN(a3) || (s3[e3] = i4 + (a3 - i4) * d2);
            }
            e2.attr(s3);
          }
          o2 && c2 < 1 && e2.attr("d", o2(d2)), this._duringCb && this._duringCb(d2), c2 < 1 ? f.requestAnimationFrame(n2) : (this._plotTarget && e2.attr("d", this._plotTarget), this._afterCb && this._afterCb.call(e2));
        };
        f.requestAnimationFrame(n2);
      };
      t2 > 0 ? setTimeout(i2, t2) : i2();
    }
  }
  var Vt;
  function Ut() {
    const t2 = f.createElementNS(T, "svg"), e2 = new It(t2);
    return e2.attr({ xmlns: T }), e2;
  }
  (Vt = St).prototype.filterWith = function(t2) {
    const e2 = new Tt();
    this._filter = e2;
    let s2 = this.node;
    for (; s2 && "svg" !== s2.nodeName; ) s2 = s2.parentNode;
    if (s2) {
      let t3 = s2.querySelector("defs");
      t3 || (t3 = f.createElementNS(T, "defs"), s2.insertBefore(t3, s2.firstChild)), t3.appendChild(e2.node);
    }
    return t2(new zt(e2)), this.attr("filter", "url(#" + e2._id + ")"), this;
  }, Vt.prototype.unfilter = function(t2) {
    return this._filter && (this.node.removeAttribute("filter"), t2 && this._filter.node && this._filter.node.parentNode && this._filter.node.parentNode.removeChild(this._filter.node), this._filter = null), this;
  }, Vt.prototype.filterer = function() {
    return this._filter;
  }, (function(t2) {
    t2.prototype.animate = function(t3, e2) {
      return new jt(this, t3, e2);
    };
  })(St), (function(t2) {
    t2.prototype.draggable = function(t3) {
      if (false === t3) return this._dragCleanup && (this._dragCleanup(), this._dragCleanup = null), this;
      const e2 = this, s2 = t3 || {}, i2 = (t4) => {
        if (t4.button && 0 !== t4.button) return;
        t4.stopPropagation();
        const i3 = "touchstart" === t4.type ? t4.touches[0] : t4, a2 = e2.node, o2 = parseFloat(a2.getAttribute("x")) || 0, r2 = parseFloat(a2.getAttribute("y")) || 0, n2 = i3.clientX, l2 = i3.clientY, c2 = a2.ownerSVGElement;
        let d2 = null;
        c2 && (d2 = c2.getScreenCTM());
        const g2 = (t5) => {
          const e3 = "touchmove" === t5.type ? t5.touches[0] : t5;
          let i4 = e3.clientX - n2, h2 = e3.clientY - l2;
          d2 && (i4 /= d2.a, h2 /= d2.d);
          let c3 = o2 + i4, g3 = r2 + h2;
          const p3 = parseFloat(a2.getAttribute("width")) || 0, x2 = parseFloat(a2.getAttribute("height")) || 0;
          void 0 !== s2.minX && c3 < s2.minX && (c3 = s2.minX), void 0 !== s2.minY && g3 < s2.minY && (g3 = s2.minY), void 0 !== s2.maxX && c3 + p3 > s2.maxX && (c3 = s2.maxX - p3), void 0 !== s2.maxY && g3 + x2 > s2.maxY && (g3 = s2.maxY - x2);
          const u2 = new CustomEvent("dragmove", { detail: { handler: { move: function(t6, e4) {
            a2.setAttribute("x", t6), a2.setAttribute("y", e4);
          } }, box: { x: c3, y: g3, w: p3, h: x2, x2: c3 + p3, y2: g3 + x2 } } });
          a2.dispatchEvent(u2);
        }, p2 = () => {
          h.isBrowser() && (document.removeEventListener("mousemove", g2), document.removeEventListener("touchmove", g2), document.removeEventListener("mouseup", p2), document.removeEventListener("touchend", p2));
        };
        h.isBrowser() && (document.addEventListener("mousemove", g2), document.addEventListener("touchmove", g2), document.addEventListener("mouseup", p2), document.addEventListener("touchend", p2));
      };
      return e2.node.addEventListener("mousedown", i2), e2.node.addEventListener("touchstart", i2), e2._dragCleanup = () => {
        e2.node.removeEventListener("mousedown", i2), e2.node.removeEventListener("touchstart", i2);
      }, e2;
    };
  })(St), (function(t2) {
    t2.prototype.select = function(t3) {
      if (false === t3) return this._selectCleanup && (this._selectCleanup(), this._selectCleanup = null), this;
      const e2 = this, { createHandle: s2, updateHandle: i2 } = t3, a2 = document.createElementNS(T, "g");
      a2.setAttribute("class", "svg_select_points");
      const o2 = e2.node.parentNode;
      o2 && o2.appendChild(a2);
      const r2 = {}, n2 = ["t", "b", "l", "r", "lt", "rt", "lb", "rb"];
      n2.forEach((t4, e3) => {
        const i3 = new It(document.createElementNS(T, "g"));
        a2.appendChild(i3.node);
        const o3 = s2(i3, [0, 0], e3, [], t4);
        r2[t4] = { group: i3, handle: o3 };
      });
      const l2 = () => {
        const t4 = parseFloat(e2.attr("x")) || 0, s3 = parseFloat(e2.attr("y")) || 0, o3 = parseFloat(e2.attr("width")) || 0, l3 = parseFloat(e2.attr("height")) || 0, h2 = e2.node.getAttribute("transform");
        h2 ? a2.setAttribute("transform", h2) : a2.removeAttribute("transform");
        const c2 = { t: [t4 + o3 / 2, s3], b: [t4 + o3 / 2, s3 + l3], l: [t4, s3 + l3 / 2], r: [t4 + o3, s3 + l3 / 2], lt: [t4, s3], rt: [t4 + o3, s3], lb: [t4, s3 + l3], rb: [t4 + o3, s3 + l3] };
        n2.forEach((t5) => {
          r2[t5] && c2[t5] && i2(r2[t5].group, c2[t5]);
        });
      };
      return l2(), e2._selectHandles = a2, e2._selectHandlesMap = r2, e2._updateSelectPositions = l2, e2._selectCleanup = () => {
        a2.parentNode && a2.parentNode.removeChild(a2), e2._selectHandles = null, e2._selectHandlesMap = null, e2._updateSelectPositions = null;
      }, e2;
    }, t2.prototype.resize = function(t3) {
      if (false === t3) return this._resizeCleanup && (this._resizeCleanup(), this._resizeCleanup = null), this;
      const e2 = this, s2 = e2._selectHandlesMap;
      if (!s2) return e2;
      const i2 = [], a2 = (t4) => {
        const a3 = s2[t4];
        if (!a3 || !a3.group || !a3.group.node) return;
        const o2 = a3.group.node, r2 = (s3) => {
          if (s3.button && 0 !== s3.button) return;
          s3.stopPropagation();
          const i3 = ("touchstart" === s3.type ? s3.touches[0] : s3).clientX, a4 = e2.node.ownerSVGElement;
          let o3 = null;
          a4 && (o3 = a4.getScreenCTM());
          const r3 = parseFloat(e2.attr("x")) || 0, n2 = parseFloat(e2.attr("width")) || 0, l2 = (s4) => {
            let a5 = ("touchmove" === s4.type ? s4.touches[0] : s4).clientX - i3;
            o3 && (a5 /= o3.a);
            let l3 = r3, h2 = n2;
            "l" === t4 ? (l3 = r3 + a5, h2 = n2 - a5) : "r" === t4 && (h2 = n2 + a5), h2 < 0 && (h2 = 0), e2.attr({ x: l3, width: h2 }), e2._updateSelectPositions && e2._updateSelectPositions();
            const c3 = new CustomEvent("resize", { detail: { el: e2 } });
            e2.node.dispatchEvent(c3);
          }, c2 = () => {
            h.isBrowser() && (document.removeEventListener("mousemove", l2), document.removeEventListener("touchmove", l2), document.removeEventListener("mouseup", c2), document.removeEventListener("touchend", c2));
            const t5 = new CustomEvent("resize", { detail: { el: e2 } });
            e2.node.dispatchEvent(t5);
          };
          h.isBrowser() && (document.addEventListener("mousemove", l2), document.addEventListener("touchmove", l2), document.addEventListener("mouseup", c2), document.addEventListener("touchend", c2));
        };
        o2.addEventListener("mousedown", r2), o2.addEventListener("touchstart", r2), i2.push(() => {
          o2.removeEventListener("mousedown", r2), o2.removeEventListener("touchstart", r2);
        });
      };
      return a2("l"), a2("r"), e2._resizeCleanup = () => {
        i2.forEach((t4) => t4());
      }, e2;
    };
  })(St), Ut.xlink = "http://www.w3.org/1999/xlink", h.isBrowser() && void 0 === window.SVG && (window.SVG = Ut), h.isBrowser() ? (void 0 === window.SVG && (window.SVG = Ut), void 0 === window.Apex && (window.Apex = {})) : "undefined" != typeof global && (void 0 === global.Apex && (global.Apex = {}), void 0 === global.SVG && (global.SVG = Ut));
  const qt = class t2 {
    static registerFeatures(e2) {
      for (const [s2, i2] of Object.entries(e2)) t2._featureRegistry.set(s2, i2);
    }
    constructor(t3) {
      this.ctx = t3, this.w = t3.w;
    }
    initModules() {
      this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "highlightSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend", "keydown", "keyup"], this.ctx.animations = new E(this.w, this.ctx), this.ctx.axes = new Z(this.w, this.ctx), this.ctx.core = new pt(this.ctx.el, this.w, this.ctx), this.ctx.config = new k({}), this.ctx.data = new xt(this.w, { resetGlobals: () => this.ctx.core.resetGlobals(), isMultipleY: () => this.ctx.core.isMultipleY() }), this.ctx.grid = new G(this.w, this.ctx), this.ctx.graphics = new X(this.w, this.ctx), this.ctx.coreUtils = new I(this.w), this.ctx.crosshairs = new K(this.w), this.ctx.events = new U(this.w, this.ctx), this.ctx.fill = new B(this.w), this.ctx.localization = new q(this.w), this.ctx.options = new S(), this.ctx.responsive = new J(this.w), this.ctx.series = new Q(this.w, { toggleDataSeries: (...t4) => {
        var e2;
        return null == (e2 = this.ctx.legend) ? void 0 : e2.legendHelpers.toggleDataSeries(...t4);
      }, revertDefaultAxisMinMax: () => this.ctx.updateHelpers.revertDefaultAxisMinMax(), updateSeries: (...t4) => this.ctx.updateHelpers._updateSeries(...t4) }), this.ctx.theme = new tt(this.w), this.ctx.formatters = new y(this.w), this.ctx.titleSubtitle = new et(this.w), this.ctx.dimensions = new rt(this.w, this.ctx), this.ctx.updateHelpers = new ft(this.w, this.ctx);
      const t3 = new Ct(this.w, this.ctx);
      this.w.globals.tooltip = t3, Object.defineProperty(this.ctx, "tooltip", { get() {
        return this.w.globals.tooltip;
      }, configurable: true }), this._initOptionalModules();
    }
    _initOptionalModules() {
      const e2 = t2._featureRegistry, s2 = this.w, i2 = this.ctx, a2 = e2.get("exports");
      i2.exports = a2 ? new a2(s2, i2) : null;
      const o2 = e2.get("legend");
      i2.legend = o2 ? new o2(s2, i2) : null;
      const r2 = e2.get("toolbar");
      Object.defineProperty(i2, "toolbar", { get() {
        var t3;
        return !this._toolbar && r2 && (this._toolbar = new r2(s2, this)), null != (t3 = this._toolbar) ? t3 : null;
      }, configurable: true });
      const n2 = e2.get("zoomPanSelection");
      Object.defineProperty(i2, "zoomPanSelection", { get() {
        var t3;
        return !this._zoomPanSelection && n2 && (this._zoomPanSelection = new n2(s2, this)), null != (t3 = this._zoomPanSelection) ? t3 : null;
      }, configurable: true });
      const l2 = e2.get("keyboardNavigation");
      Object.defineProperty(i2, "keyboardNavigation", { get() {
        var t3;
        return !this._keyboardNavigation && l2 && (this._keyboardNavigation = new l2(s2, this)), null != (t3 = this._keyboardNavigation) ? t3 : null;
      }, configurable: true });
    }
  };
  var Zt;
  r(qt, "symbol" != typeof (Zt = "_featureRegistry") ? Zt + "" : Zt, /* @__PURE__ */ new Map());
  let Kt = qt;
  class Jt {
    constructor(t2) {
      this.ctx = t2, this.w = t2.w;
    }
    clear({ isUpdating: t2 }) {
      this.ctx._zoomPanSelection && this.ctx._zoomPanSelection.destroy(), this.ctx._toolbar && this.ctx._toolbar.destroy(), this.w.globals.resizeObserver && "function" == typeof this.w.globals.resizeObserver.disconnect && (this.w.globals.resizeObserver.disconnect(), this.w.globals.resizeObserver = null), ut.invalidateAll(this.w), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx._zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx._toolbar = null, this.ctx.localization = null, this.ctx._keyboardNavigation = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: t2 });
    }
    killSVG(t2) {
      t2.each(function() {
        this.removeClass("*"), this.off();
      }, true), t2.clear();
    }
    clearDomElements({ isUpdating: t2 }) {
      const e2 = this.w.dom;
      if (h.isBrowser()) {
        const s2 = e2.Paper.node;
        s2.parentNode && s2.parentNode.parentNode && !t2 && (s2.parentNode.parentNode.style.minHeight = "unset");
        const i2 = e2.baseEl;
        if (i2 && this.ctx.eventList.forEach((t3) => {
          i2.removeEventListener(t3, this.ctx.events.documentEvent);
        }), null !== this.ctx.el) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
        this.killSVG(e2.Paper), e2.Paper.remove();
      }
      e2.elWrap = null, e2.elGraphical = null, e2.elLegendWrap = null, e2.elLegendForeign = null, e2.baseEl = null, e2.elGridRect = null, e2.elGridRectMask = null, e2.elGridRectBarMask = null, e2.elGridRectMarkerMask = null, e2.elForecastMask = null, e2.elNonForecastMask = null, e2.elDefs = null;
    }
  }
  const Qt = /* @__PURE__ */ new WeakMap();
  class te {
    constructor(t2, e2) {
      this.opts = e2, this.ctx = this, this.w = new M(e2).init(), this.el = t2, this.w.globals.cuid = b.randomId(), this.w.globals.chartID = this.w.config.chart.id ? b.escapeString(this.w.config.chart.id) : this.w.globals.cuid;
      new Kt(this).initModules(), this.lastUpdateOptions = null, this.create = this.create.bind(this), h.isBrowser() && (this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this));
    }
    render() {
      return new Promise((t2, e2) => {
        var s2;
        if (b.elementExists(this.el)) {
          void 0 === Apex._chartInstances && (Apex._chartInstances = []), this.w.config.chart.id && Apex._chartInstances.push({ id: this.w.globals.chartID, group: this.w.config.chart.group, chart: this }), this.setLocale(this.w.config.chart.defaultLocale);
          const i2 = this.w.config.chart.events.beforeMount;
          if ("function" == typeof i2 && i2(this, this.w), this.events.fireEvent("beforeMount", [this, this.w]), h.isBrowser()) {
            window.addEventListener("resize", this.windowResizeHandler), (function(t4, e4) {
              if (h.isSSR()) return;
              let s3 = false;
              if (t4.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                const e5 = t4.getBoundingClientRect();
                "none" !== t4.style.display && 0 !== e5.width || (s3 = true);
              }
              const i4 = new ResizeObserver((i5) => {
                s3 && e4.call(t4, i5), s3 = true;
              });
              t4.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t4.children).forEach((t5) => i4.observe(t5)) : i4.observe(t4), Qt.set(e4, i4);
            })(this.el.parentNode, this.parentResizeHandler);
            const t3 = this.el.getRootNode && this.el.getRootNode(), e3 = b.is("ShadowRoot", t3), i3 = this.el.ownerDocument;
            let a3 = e3 ? t3.getElementById("apexcharts-css") : i3.getElementById("apexcharts-css");
            if (!a3) {
              a3 = f.createElementNS("http://www.w3.org/1999/xhtml", "style"), a3.id = "apexcharts-css", a3.textContent = `@keyframes opaque {
  0% {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes resizeanim {

  0%,
  to {
    opacity: 0
  }
}

.apexcharts-canvas {
  position: relative;
  direction: ltr !important;
  user-select: none
}

.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px
}

.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)
}

.apexcharts-inner {
  position: relative
}

.apexcharts-text tspan {
  font-family: inherit
}

rect.legend-mouseover-inactive,
.legend-mouseover-inactive rect,
.legend-mouseover-inactive path,
.legend-mouseover-inactive circle,
.legend-mouseover-inactive line,
.legend-mouseover-inactive text.apexcharts-yaxis-title-text,
.legend-mouseover-inactive text.apexcharts-yaxis-label {
  transition: .15s ease all;
  opacity: .2
}

.apexcharts-legend-text {
  padding-left: 15px;
  margin-left: -15px;
}

.apexcharts-legend-series[role="button"]:focus {
  outline: 2px solid #008FFB;
  outline-offset: 2px;
}

.apexcharts-legend-series[role="button"]:focus:not(:focus-visible) {
  outline: none;
}

.apexcharts-legend-series[role="button"]:focus-visible {
  outline: 2px solid #008FFB;
  outline-offset: 2px;
}

.apexcharts-series-collapsed {
  opacity: 0
}

/* Keyboard navigation focus indicator on SVG data elements.
   SVG elements don't support CSS outline, so we use stroke. */
.apexcharts-bar-area.apexcharts-keyboard-focused,
.apexcharts-candlestick-area.apexcharts-keyboard-focused,
.apexcharts-boxPlot-area.apexcharts-keyboard-focused,
.apexcharts-rangebar-area.apexcharts-keyboard-focused,
.apexcharts-pie-area.apexcharts-keyboard-focused,
.apexcharts-heatmap-rect.apexcharts-keyboard-focused,
.apexcharts-treemap-rect.apexcharts-keyboard-focused {
  stroke: #008FFB;
  stroke-width: 2;
  stroke-opacity: 1;
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: rgba(255, 255, 255, .96)
}

.apexcharts-tooltip.apexcharts-theme-dark {
  color: #fff;
  background: rgba(30, 30, 30, .8)
}

.apexcharts-tooltip * {
  font-family: inherit
}

.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #eceff1;
  border-bottom: 1px solid #ddd
}

.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
  background: rgba(0, 0, 0, .7);
  border-bottom: 1px solid #333
}

.apexcharts-tooltip-text-goals-value,
.apexcharts-tooltip-text-y-value,
.apexcharts-tooltip-text-z-value {
  display: inline-block;
  margin-left: 5px;
  font-weight: 600
}

.apexcharts-tooltip-text-goals-label:empty,
.apexcharts-tooltip-text-goals-value:empty,
.apexcharts-tooltip-text-y-label:empty,
.apexcharts-tooltip-text-y-value:empty,
.apexcharts-tooltip-text-z-value:empty,
.apexcharts-tooltip-title:empty {
  display: none
}

.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  padding: 6px 0 5px
}

.apexcharts-tooltip-goals-group,
.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  display: flex
}

.apexcharts-tooltip-text-goals-label:not(:empty),
.apexcharts-tooltip-text-goals-value:not(:empty) {
  margin-top: -6px
}

.apexcharts-tooltip-marker {
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  font-size: 16px;
  line-height: 16px;
  margin-right: 4px;
  text-align: center;
  vertical-align: middle;
  color: inherit;
}

.apexcharts-tooltip-marker::before {
  content: "";
  display: inline-block;
  width: 100%;
  text-align: center;
  color: currentcolor;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-size: 26px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 14px;
  font-weight: 900;
}

.apexcharts-tooltip-marker[shape="circle"]::before {
  content: "\\25CF";
}

.apexcharts-tooltip-marker[shape="square"]::before,
.apexcharts-tooltip-marker[shape="rect"]::before {
  content: "\\25A0";
  transform: translate(-1px, -2px);
}

.apexcharts-tooltip-marker[shape="line"]::before {
  content: "\\2500";
}

.apexcharts-tooltip-marker[shape="diamond"]::before {
  content: "\\25C6";
  font-size: 28px;
}

.apexcharts-tooltip-marker[shape="triangle"]::before {
  content: "\\25B2";
  font-size: 22px;
}

.apexcharts-tooltip-marker[shape="cross"]::before {
  content: "\\2715";
  font-size: 18px;
}

.apexcharts-tooltip-marker[shape="plus"]::before {
  content: "\\2715";
  transform: rotate(45deg) translate(-1px, -1px);
  font-size: 18px;
}

.apexcharts-tooltip-marker[shape="star"]::before {
  content: "\\2605";
  font-size: 18px;
}

.apexcharts-tooltip-marker[shape="sparkle"]::before {
  content: "\\2726";
  font-size: 20px;
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center
}

.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
  opacity: 1
}

.apexcharts-tooltip-series-group.apexcharts-active,
.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px
}

.apexcharts-tooltip-y-group {
  padding: 6px 0 5px
}

.apexcharts-custom-tooltip,
.apexcharts-tooltip-box {
  padding: 4px 8px
}

.apexcharts-tooltip-boxPlot {
  display: flex;
  flex-direction: column-reverse
}

.apexcharts-tooltip-box>div {
  margin: 4px 0
}

.apexcharts-tooltip-box span.value {
  font-weight: 700
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: 700;
  display: block;
  margin-bottom: 5px
}

.apexcharts-xaxistooltip,
.apexcharts-yaxistooltip {
  opacity: 0;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #eceff1;
  border: 1px solid #90a4ae
}

.apexcharts-xaxistooltip {
  padding: 9px 10px;
  transition: .15s ease all
}

.apexcharts-xaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-xaxistooltip:after,
.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-xaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-left: -6px
}

.apexcharts-xaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-left: -7px
}

.apexcharts-xaxistooltip-bottom:after,
.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%
}

.apexcharts-xaxistooltip-top:after,
.apexcharts-xaxistooltip-top:before {
  top: 100%
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #eceff1
}

.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90a4ae
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
  border-bottom-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #eceff1
}

.apexcharts-xaxistooltip-top:before {
  border-top-color: #90a4ae
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
  border-top-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-yaxistooltip {
  padding: 4px 10px
}

.apexcharts-yaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-yaxistooltip:after,
.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-yaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-top: -6px
}

.apexcharts-yaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-top: -7px
}

.apexcharts-yaxistooltip-left:after,
.apexcharts-yaxistooltip-left:before {
  left: 100%
}

.apexcharts-yaxistooltip-right:after,
.apexcharts-yaxistooltip-right:before {
  right: 100%
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #eceff1
}

.apexcharts-yaxistooltip-left:before {
  border-left-color: #90a4ae
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
  border-left-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #eceff1
}

.apexcharts-yaxistooltip-right:before {
  border-right-color: #90a4ae
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
  border-right-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip.apexcharts-active {
  opacity: 1
}

.apexcharts-yaxistooltip-hidden {
  display: none
}

.apexcharts-xcrosshairs,
.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: .15s ease all
}

.apexcharts-xcrosshairs.apexcharts-active,
.apexcharts-ycrosshairs.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0
}

.apexcharts-selection-rect {
  cursor: move
}

.svg_select_shape {
  stroke-width: 1;
  stroke-dasharray: 10 10;
  stroke: black;
  stroke-opacity: 0.1;
  pointer-events: none;
  fill: none;
}

.svg_select_handle {
  stroke-width: 3;
  stroke: black;
  fill: none;
}

.svg_select_handle_r {
  cursor: e-resize;
}

.svg_select_handle_l {
  cursor: w-resize;
}

.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
  cursor: crosshair
}

.apexcharts-svg.apexcharts-zoomable.hovering-pan {
  cursor: move
}

.apexcharts-menu-icon,
.apexcharts-pan-icon,
.apexcharts-reset-icon,
.apexcharts-selection-icon,
.apexcharts-toolbar-custom-icon,
.apexcharts-zoom-icon,
.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6e8192;
  text-align: center
}

.apexcharts-menu-icon svg,
.apexcharts-reset-icon svg,
.apexcharts-zoom-icon svg,
.apexcharts-zoomin-icon svg,
.apexcharts-zoomout-icon svg {
  fill: #6e8192
}

.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(.76)
}

.apexcharts-theme-dark .apexcharts-menu-icon svg,
.apexcharts-theme-dark .apexcharts-pan-icon svg,
.apexcharts-theme-dark .apexcharts-reset-icon svg,
.apexcharts-theme-dark .apexcharts-selection-icon svg,
.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,
.apexcharts-theme-dark .apexcharts-zoom-icon svg,
.apexcharts-theme-dark .apexcharts-zoomin-icon svg,
.apexcharts-theme-dark .apexcharts-zoomout-icon svg {
  fill: #f3f4f5
}

.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {
  fill: #008ffb
}

.apexcharts-theme-light .apexcharts-menu-icon:hover svg,
.apexcharts-theme-light .apexcharts-reset-icon:hover svg,
.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {
  fill: #333
}

.apexcharts-menu-icon,
.apexcharts-selection-icon {
  position: relative
}

.apexcharts-reset-icon {
  margin-left: 5px
}

.apexcharts-menu-icon,
.apexcharts-reset-icon,
.apexcharts-zoom-icon {
  transform: scale(.85)
}

.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  transform: scale(.7)
}

.apexcharts-zoomout-icon {
  margin-right: 3px
}

.apexcharts-pan-icon {
  transform: scale(.62);
  position: relative;
  left: 1px;
  top: 0
}

.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6e8192;
  stroke-width: 2
}

.apexcharts-pan-icon.apexcharts-selected svg {
  stroke: #008ffb
}

.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
  stroke: #333
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0 6px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: .15s ease all;
  pointer-events: none
}

.apexcharts-menu.apexcharts-menu-open {
  opacity: 1;
  pointer-events: all;
  transition: .15s ease all
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  background: #eee
}

.apexcharts-theme-dark .apexcharts-menu {
  background: rgba(0, 0, 0, .7);
  color: #fff
}

@media screen and (min-width:768px) {
  .apexcharts-canvas:hover .apexcharts-toolbar {
    opacity: 1
  }
}

/* Toolbar keyboard accessibility: show toolbar when any button inside it is focused */
.apexcharts-toolbar:focus-within {
  opacity: 1
}

/* Focus indicator for toolbar icon buttons */
.apexcharts-menu-icon:focus-visible,
.apexcharts-pan-icon:focus-visible,
.apexcharts-reset-icon:focus-visible,
.apexcharts-selection-icon:focus-visible,
.apexcharts-toolbar-custom-icon:focus-visible,
.apexcharts-zoom-icon:focus-visible,
.apexcharts-zoomin-icon:focus-visible,
.apexcharts-zoomout-icon:focus-visible {
  outline: 2px solid #008FFB;
  outline-offset: 2px;
  border-radius: 2px
}

/* Focus indicator for hamburger menu items */
.apexcharts-menu-item:focus-visible {
  outline: 2px solid #008FFB;
  outline-offset: -2px;
  background: #eee
}

.apexcharts-canvas .apexcharts-element-hidden,
.apexcharts-datalabel.apexcharts-element-hidden,
.apexcharts-hide .apexcharts-series-points {
  opacity: 0;
}

.apexcharts-hidden-element-shown {
  opacity: 1;
  transition: 0.25s ease all;
}

.apexcharts-datalabel,
.apexcharts-datalabel-label,
.apexcharts-datalabel-value,
.apexcharts-datalabels,
.apexcharts-pie-label {
  cursor: default;
  pointer-events: none
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease
}

.apexcharts-radialbar-label {
  cursor: pointer;
}

.apexcharts-annotation-rect,
.apexcharts-area-series .apexcharts-area,
.apexcharts-gridline,
.apexcharts-line,
.apexcharts-point-annotation-label,
.apexcharts-radar-series path:not(.apexcharts-marker),
.apexcharts-radar-series polygon,
.apexcharts-toolbar svg,
.apexcharts-tooltip .apexcharts-marker,
.apexcharts-xaxis-annotation-label,
.apexcharts-yaxis-annotation-label,
.apexcharts-zoom-rect,
.no-pointer-events {
  pointer-events: none
}

.apexcharts-tooltip-active .apexcharts-marker {
  transition: .15s ease all
}

.apexcharts-radar-series .apexcharts-yaxis {
  pointer-events: none;
}

.resize-triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  width: 100%;
  overflow: hidden
}

.contract-trigger:before,
.resize-triggers,
.resize-triggers>div {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0
}

.resize-triggers>div {
  height: 100%;
  width: 100%;
  background: #eee;
  overflow: auto
}

.contract-trigger:before {
  overflow: hidden;
  width: 200%;
  height: 200%
}

.apexcharts-bar-goals-markers {
  pointer-events: none
}

.apexcharts-bar-shadows {
  pointer-events: none
}

.apexcharts-rangebar-goals-markers {
  pointer-events: none
}

.apexcharts-disable-transitions * {
  transition: none !important;
}`;
              const o2 = (null == (s2 = this.opts.chart) ? void 0 : s2.nonce) || this.w.config.chart.nonce;
              o2 && a3.setAttribute("nonce", o2), e3 ? t3.prepend(a3) : false !== this.w.config.chart.injectStyleSheet && i3.head.appendChild(a3);
            }
          }
          const a2 = this.create(this.w.config.series, {});
          if (!a2) return t2(this);
          this.mount(a2).then(() => {
            "function" == typeof this.w.config.chart.events.mounted && this.w.config.chart.events.mounted(this, this.w), this.events.fireEvent("mounted", [this, this.w]), t2(a2);
          }).catch((t3) => {
            e2(t3);
          });
        } else e2(new Error("Element not found"));
      });
    }
    create(t2, e2) {
      var s2;
      const i2 = this.w;
      new Kt(this).initModules();
      const a2 = this.w.globals;
      if (a2.noData = false, a2.animationEnded = false, !b.elementExists(this.el)) return a2.animationEnded = true, null;
      if (this.responsive.checkResponsiveConfig(e2), i2.config.xaxis.convertedCatToNumeric) {
        new A(i2.config).convertCatToNumericXaxis(i2.config, this.ctx);
      }
      if (this.core.setupElements(), "treemap" === i2.config.chart.type && (i2.config.grid.show = false, i2.config.yaxis[0].show = false), 0 === a2.svgWidth) return a2.animationEnded = true, null;
      let o2 = t2;
      t2.forEach((t3, e3) => {
        t3.hidden && (o2 = this.legend.legendHelpers.getSeriesAfterCollapsing({ realIndex: e3 }));
      });
      const r2 = I.checkComboSeries(o2, i2.config.chart.type);
      a2.comboCharts = r2.comboCharts, a2.comboBarCount = r2.comboBarCount;
      const n2 = o2.every((t3) => t3.data && 0 === t3.data.length);
      (0 === o2.length || n2 && a2.collapsedSeries.length < 1) && this.series.handleNoData(), h.isBrowser() && this.events.setupEventHandlers();
      const l2 = this.data.parseData(o2);
      this._writeParsedSeriesData(l2.seriesData), this._writeParsedRangeData(l2.rangeData), this._writeParsedCandleData(l2.candleData), this._writeParsedLabelData(l2.labelData), this._writeParsedAxisFlags(l2.axisFlags), this.theme.init();
      new H(this.w, this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a2.noData && a2.collapsedSeries.length !== i2.seriesData.series.length && !i2.config.legend.showForSingleSeries || null == (s2 = this.legend) || s2.init(), this.series.hasAllSeriesEqualX(), a2.axisCharts && (this.core.coreCalculations(), "category" !== i2.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar && (this.ctx.toolbar.minX = i2.globals.minX, this.ctx.toolbar.maxX = i2.globals.maxX)), this.formatters.heatmapLabelFormatters();
      new I(this.w).getLargestMarkerSize();
      const c2 = this.dimensions.plotCoords();
      this._writeLayoutCoords(c2.layout);
      const d2 = this.core.xySettings();
      this.grid.createGridMask();
      const g2 = this.core.plotChartType(o2, d2), p2 = new N(this.w, this);
      p2.bringForward(), i2.config.dataLabels.background.enabled && p2.dataLabelsBackground(), this.core.shiftGraphPosition(), i2.globals.dataPoints > 50 && i2.dom.elWrap.classList.add("apexcharts-disable-transitions");
      return { elGraph: g2, xyRatios: d2, dimensions: { plot: { left: i2.layout.translateX, top: i2.layout.translateY, width: i2.layout.gridWidth, height: i2.layout.gridHeight } } };
    }
    mount(t2 = null) {
      const e2 = this, s2 = e2.w;
      return new Promise((i2, a2) => {
        var o2, r2, n2, l2, c2, d2, g2, p2;
        if (null === e2.el) return a2(new Error("Not enough data to display or target element not found"));
        (null === t2 || s2.globals.allSeriesCollapsed) && e2.series.handleNoData(), e2.grid = new G(e2.w, e2);
        const x2 = e2.grid.drawGrid(), u2 = Kt._featureRegistry.get("annotations");
        if (e2.annotations = u2 ? new u2(e2.w, { theme: e2.theme, timeScale: e2.timeScale }) : null, null == (o2 = e2.annotations) || o2.drawImageAnnos(), null == (r2 = e2.annotations) || r2.drawTextAnnos(), "back" === s2.config.grid.position && (x2 && s2.dom.elGraphical.add(x2.el), (null == (n2 = null == x2 ? void 0 : x2.elGridBorders) ? void 0 : n2.node) && s2.dom.elGraphical.add(x2.elGridBorders)), Array.isArray(t2.elGraph)) for (let e3 = 0; e3 < t2.elGraph.length; e3++) s2.dom.elGraphical.add(t2.elGraph[e3]);
        else s2.dom.elGraphical.add(t2.elGraph);
        "front" === s2.config.grid.position && (x2 && s2.dom.elGraphical.add(x2.el), (null == (l2 = null == x2 ? void 0 : x2.elGridBorders) ? void 0 : l2.node) && s2.dom.elGraphical.add(x2.elGridBorders)), "front" === s2.config.xaxis.crosshairs.position && e2.crosshairs.drawXCrosshairs(), "front" === s2.config.yaxis[0].crosshairs.position && e2.crosshairs.drawYCrosshairs(), "treemap" !== s2.config.chart.type && e2.axes.drawAxis(s2.config.chart.type, x2);
        const f2 = new _(this.w, this.ctx, x2), b2 = new V(this.w, { theme: this.theme, timeScale: this.timeScale }, x2);
        if (null !== x2 && (f2.xAxisLabelCorrections(x2.xAxisTickWidth), b2.setYAxisTextAlignments(), s2.config.yaxis.map((t3, e3) => {
          -1 === s2.globals.ignoreYAxisIndexes.indexOf(e3) && b2.yAxisTitleRotate(e3, t3.opposite);
        })), null == (c2 = e2.annotations) || c2.drawAxesAnnotations(), !s2.globals.noData) {
          if (h.isBrowser() && s2.config.tooltip.enabled && !s2.globals.noData && e2.w.globals.tooltip.drawTooltip(t2.xyRatios), s2.config.chart.accessibility.enabled && s2.config.chart.accessibility.keyboard.enabled && s2.config.chart.accessibility.keyboard.navigation.enabled && (null == (d2 = e2.keyboardNavigation) || d2.init()), h.isBrowser() && s2.globals.axisCharts && (s2.axisFlags.isXNumeric || s2.config.xaxis.convertedCatToNumeric || s2.axisFlags.isRangeBar)) (s2.config.chart.zoom.enabled || s2.config.chart.selection && s2.config.chart.selection.enabled || s2.config.chart.pan && s2.config.chart.pan.enabled) && (null == (g2 = e2.zoomPanSelection) || g2.init({ xyRatios: t2.xyRatios }));
          else {
            const t3 = s2.config.chart.toolbar.tools;
            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach((e3) => {
              t3[e3] = false;
            });
          }
          s2.config.chart.toolbar.show && !s2.globals.allSeriesCollapsed && (null == (p2 = e2.toolbar) || p2.createToolbar());
        }
        s2.globals.memory.methodsToExec.length > 0 && s2.globals.memory.methodsToExec.forEach((t3) => {
          t3.method(t3.params, false, t3.context);
        }), s2.globals.axisCharts || s2.globals.noData || e2.core.resizeNonAxisCharts(), i2(e2);
      });
    }
    destroy() {
      h.isBrowser() && (window.removeEventListener("resize", this.windowResizeHandler), (function(t3, e2) {
        if (h.isSSR()) return;
        const s2 = Qt.get(e2);
        s2 && (s2.disconnect(), Qt.delete(e2));
      })(this.el.parentNode, this.parentResizeHandler));
      const t2 = this.w.config.chart.id;
      t2 && Apex._chartInstances.forEach((e2, s2) => {
        e2.id === b.escapeString(t2) && Apex._chartInstances.splice(s2, 1);
      }), this._keyboardNavigation && this._keyboardNavigation.destroy(), new Jt(this.ctx).clear({ isUpdating: false });
    }
    updateOptions(t2, e2 = false, s2 = true, i2 = true, a2 = true) {
      const o2 = this.w;
      if (o2.interact.selection = void 0, this.lastUpdateOptions) {
        if (b.shallowEqual(this.lastUpdateOptions, t2)) return this;
        if (t2.series && this.lastUpdateOptions.series && JSON.stringify(this.lastUpdateOptions.series) === JSON.stringify(t2.series)) {
          const e3 = n({}, t2), s3 = n({}, this.lastUpdateOptions);
          if (delete e3.series, delete s3.series, b.shallowEqual(e3, s3)) return this;
        }
      }
      return t2.series && (this.data.resetParsingFlags(), this.series.resetSeries(false, true, false), t2.series.length && t2.series[0].data && (t2.series = t2.series.map((t3, e3) => this.updateHelpers._extendSeries(t3, e3))), this.updateHelpers.revertDefaultAxisMinMax()), t2.xaxis && (t2 = this.updateHelpers.forceXAxisUpdate(t2)), t2.yaxis && (t2 = this.updateHelpers.forceYAxisUpdate(t2)), o2.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t2.theme && (t2 = this.theme.updateThemeOptions(t2)), this.updateHelpers._updateOptions(t2, e2, s2, i2, a2);
    }
    updateSeries(t2 = [], e2 = true, s2 = true) {
      return this.data.resetParsingFlags(), this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t2, e2, s2);
    }
    appendSeries(t2, e2 = true, s2 = true) {
      this.data.resetParsingFlags();
      const i2 = this.w.config.series.slice();
      return i2.push(t2), this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(i2, e2, s2);
    }
    appendData(t2, e2 = true) {
      const s2 = this;
      s2.data.resetParsingFlags(), s2.w.globals.dataChanged = true, s2.series.getPreviousPaths();
      const i2 = s2.w.config.series.slice();
      for (let e3 = 0; e3 < i2.length; e3++) if (null !== t2[e3] && void 0 !== t2[e3]) for (let s3 = 0; s3 < t2[e3].data.length; s3++) i2[e3].data.push(t2[e3].data[s3]);
      return s2.w.config.series = i2, e2 && (s2.w.globals.initialSeries = b.clone(s2.w.config.series)), this.update();
    }
    update(t2) {
      return new Promise((e2, s2) => {
        if (this.lastUpdateOptions && JSON.stringify(this.lastUpdateOptions) === JSON.stringify(t2)) return e2(this);
        this.lastUpdateOptions = b.clone(t2), new Jt(this.ctx).clear({ isUpdating: true });
        const i2 = this.create(this.w.config.series, t2);
        if (!i2) return e2(this);
        this.mount(i2).then(() => {
          "function" == typeof this.w.config.chart.events.updated && this.w.config.chart.events.updated(this, this.w), this.events.fireEvent("updated", [this, this.w]), this.w.globals.isDirty = true, e2(this);
        }).catch((t3) => {
          s2(t3);
        });
      });
    }
    getSyncedCharts() {
      const t2 = this.getGroupedCharts();
      let e2 = [this];
      return t2.length && (e2 = [], t2.forEach((t3) => {
        e2.push(t3);
      })), e2;
    }
    getGroupedCharts() {
      return Apex._chartInstances.filter((t2) => {
        if (t2.group) return true;
      }).map((t2) => this.w.config.chart.group === t2.group ? t2.chart : this);
    }
    static getChartByID(t2) {
      const e2 = b.escapeString(t2);
      if (!Apex._chartInstances) return;
      const s2 = Apex._chartInstances.filter((t3) => t3.id === e2)[0];
      return s2 && s2.chart;
    }
    static initOnLoad() {
      const t2 = document.querySelectorAll("[data-apexcharts]");
      for (let e2 = 0; e2 < t2.length; e2++) {
        const s2 = t2[e2], i2 = JSON.parse(t2[e2].getAttribute("data-options"));
        new te(s2, i2).render();
      }
    }
    static exec(t2, e2, ...s2) {
      const i2 = this.getChartByID(t2);
      if (!i2) return;
      i2.w.globals.isExecCalled = true;
      let a2 = null;
      return -1 !== i2.publicMethods.indexOf(e2) && (a2 = i2[e2](...s2)), a2;
    }
    static merge(t2, e2) {
      return b.extend(t2, e2);
    }
    static getThemePalettes() {
      return { palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], palette2: ["#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800"], palette3: ["#33B2DF", "#546E7A", "#D4526E", "#13D8AA", "#A5978B"], palette4: ["#4ECDC4", "#C7F464", "#81D4FA", "#FD6A6A", "#546E7A"], palette5: ["#2B908F", "#F9A3A4", "#90EE7E", "#FA4443", "#69D2E7"], palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"], palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"], palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"], palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"], palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"], cvdDeuteranopia: ["#0072B2", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#D55E00", "#CC79A7"], cvdProtanopia: ["#0077BB", "#EE7733", "#009988", "#EE3377", "#BBBBBB", "#33BBEE", "#CC3311"], cvdTritanopia: ["#CC3311", "#009988", "#EE7733", "#0077BB", "#EE3377", "#BBBBBB", "#33BBEE"], highContrast: ["#005A9C", "#C00000", "#007A33", "#6C3483", "#7B3F00", "#0097A7", "#4A235A"] };
    }
    static use(t2) {
      !(function(t3) {
        Object.assign(dt(), t3);
      })(t2);
    }
    static registerFeatures(t2) {
      Kt.registerFeatures(t2);
    }
    toggleSeries(t2) {
      return this.series.toggleSeries(t2);
    }
    highlightSeriesOnLegendHover(t2, e2) {
      return this.series.toggleSeriesOnHover(t2, e2);
    }
    showSeries(t2) {
      this.series.showSeries(t2);
    }
    hideSeries(t2) {
      this.series.hideSeries(t2);
    }
    highlightSeries(t2) {
      this.series.highlightSeries(t2);
    }
    isSeriesHidden(t2) {
      this.series.isSeriesHidden(t2);
    }
    resetSeries(t2 = true, e2 = true) {
      this.series.resetSeries(t2, e2);
    }
    addEventListener(t2, e2) {
      this.events.addEventListener(t2, e2);
    }
    removeEventListener(t2, e2) {
      this.events.removeEventListener(t2, e2);
    }
    addXaxisAnnotation(t2, e2 = true, s2 = void 0) {
      var i2;
      let a2 = this;
      s2 && (a2 = s2), null == (i2 = a2.annotations) || i2.addXaxisAnnotationExternal(t2, e2, a2);
    }
    addYaxisAnnotation(t2, e2 = true, s2 = void 0) {
      var i2;
      let a2 = this;
      s2 && (a2 = s2), null == (i2 = a2.annotations) || i2.addYaxisAnnotationExternal(t2, e2, a2);
    }
    addPointAnnotation(t2, e2 = true, s2 = void 0) {
      var i2;
      let a2 = this;
      s2 && (a2 = s2), null == (i2 = a2.annotations) || i2.addPointAnnotationExternal(t2, e2, a2);
    }
    clearAnnotations(t2 = void 0) {
      var e2;
      let s2 = this;
      t2 && (s2 = t2), null == (e2 = s2.annotations) || e2.clearAnnotations(s2);
    }
    removeAnnotation(t2, e2 = void 0) {
      var s2;
      let i2 = this;
      e2 && (i2 = e2), null == (s2 = i2.annotations) || s2.removeAnnotation(i2, t2);
    }
    getChartArea() {
      return this.w.dom.baseEl.querySelector(".apexcharts-inner");
    }
    getSeriesTotalXRange(t2, e2) {
      return this.coreUtils.getSeriesTotalsXRange(t2, e2);
    }
    getHighestValueInSeries(t2 = 0) {
      return new j(this.w).getMinYMaxY(t2).highestY;
    }
    getLowestValueInSeries(t2 = 0) {
      return new j(this.w).getMinYMaxY(t2).lowestY;
    }
    getSeriesTotal() {
      return this.w.globals.seriesTotals;
    }
    getState() {
      const t2 = this.w, e2 = t2.globals;
      return { series: t2.seriesData.series, seriesNames: t2.seriesData.seriesNames, colors: e2.colors, labels: t2.labelData.labels, seriesTotals: e2.seriesTotals, seriesPercent: e2.seriesPercent, seriesXvalues: e2.seriesXvalues, seriesYvalues: e2.seriesYvalues, minX: e2.minX, maxX: e2.maxX, minY: e2.minY, maxY: e2.maxY, minYArr: e2.minYArr, maxYArr: e2.maxYArr, minXDiff: e2.minXDiff, dataPoints: e2.dataPoints, xAxisScale: e2.xAxisScale, yAxisScale: e2.yAxisScale, xTickAmount: e2.xTickAmount, isXNumeric: t2.axisFlags.isXNumeric, seriesYAxisMap: e2.seriesYAxisMap, seriesYAxisReverseMap: e2.seriesYAxisReverseMap, svgWidth: e2.svgWidth, svgHeight: e2.svgHeight, gridWidth: t2.layout.gridWidth, gridHeight: t2.layout.gridHeight, selectedDataPoints: t2.interact.selectedDataPoints, collapsedSeriesIndices: e2.collapsedSeriesIndices, zoomed: t2.interact.zoomed, seriesX: t2.seriesData.seriesX, seriesZ: t2.seriesData.seriesZ, seriesCandleO: t2.candleData.seriesCandleO, seriesCandleH: t2.candleData.seriesCandleH, seriesCandleM: t2.candleData.seriesCandleM, seriesCandleL: t2.candleData.seriesCandleL, seriesCandleC: t2.candleData.seriesCandleC, seriesRangeStart: t2.rangeData.seriesRangeStart, seriesRangeEnd: t2.rangeData.seriesRangeEnd, seriesGoals: t2.seriesData.seriesGoals };
    }
    toggleDataPointSelection(t2, e2) {
      return this.updateHelpers.toggleDataPointSelection(t2, e2);
    }
    zoomX(t2, e2) {
      var s2;
      null == (s2 = this.ctx.toolbar) || s2.zoomUpdateOptions(t2, e2);
    }
    setLocale(t2) {
      this.localization.setCurrentLocaleValues(t2);
    }
    dataURI(t2) {
      if (!this.ctx.exports) throw new Error("apexcharts: Exports feature is not registered. Import apexcharts/features/exports.");
      return this.ctx.exports.dataURI(t2);
    }
    getSvgString(t2) {
      if (!this.ctx.exports) throw new Error("apexcharts: Exports feature is not registered. Import apexcharts/features/exports.");
      return this.ctx.exports.getSvgString(t2);
    }
    exportToCSV(t2 = {}) {
      if (!this.ctx.exports) throw new Error("apexcharts: Exports feature is not registered. Import apexcharts/features/exports.");
      return this.ctx.exports.exportToCSV(t2);
    }
    paper() {
      return this.w.dom.Paper;
    }
    _writeParsedSeriesData(t2) {
      Object.assign(this.w.seriesData, t2);
    }
    _writeParsedRangeData(t2) {
      Object.assign(this.w.rangeData, t2);
    }
    _writeParsedCandleData(t2) {
      Object.assign(this.w.candleData, t2);
    }
    _writeParsedLabelData(t2) {
      Object.assign(this.w.labelData, t2);
    }
    _writeParsedAxisFlags(t2) {
      Object.assign(this.w.axisFlags, t2);
    }
    _writeLayoutCoords(t2) {
      Object.assign(this.w.layout, t2);
    }
    _parentResizeCallback() {
      this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
    }
    _windowResize() {
      clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(() => {
        this.w.globals.resized = true, this.w.globals.dataChanged = false, this.ctx.update();
      }, 150);
    }
    _windowResizeHandler() {
      let { redrawOnWindowResize: t2 } = this.w.config.chart;
      "function" == typeof t2 && (t2 = t2()), t2 && this._windowResize();
    }
  }
  const ee = ".apexcharts-flip-y {\n  transform: scaleY(-1) translateY(-100%);\n  transform-origin: top;\n  transform-box: fill-box;\n}\n.apexcharts-flip-x {\n  transform: scaleX(-1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.apexcharts-legend {\n  display: flex;\n  overflow: auto;\n  padding: 0 10px;\n}\n.apexcharts-legend.apexcharts-legend-group-horizontal {\n  flex-direction: column;\n}\n.apexcharts-legend-group {\n  display: flex;\n}\n.apexcharts-legend-group-vertical {\n  flex-direction: column-reverse;\n}\n.apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n  flex-wrap: wrap\n}\n.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  flex-direction: column;\n  bottom: 0;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n  justify-content: center;\n  align-items: center;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.apexcharts-legend-series {\n  cursor: pointer;\n  line-height: normal;\n  display: flex;\n  align-items: center;\n}\n.apexcharts-legend-text {\n  position: relative;\n  font-size: 14px;\n}\n.apexcharts-legend-text *, .apexcharts-legend-marker * {\n  pointer-events: none;\n}\n.apexcharts-legend-marker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 1px;\n}\n\n.apexcharts-legend-series.apexcharts-no-click {\n  cursor: auto;\n}\n.apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n  display: none !important;\n}\n.apexcharts-inactive-legend {\n  opacity: 0.45;\n} ";
  class se {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2;
    }
    svgStringToNode(t2) {
      return new DOMParser().parseFromString(t2, "image/svg+xml").documentElement;
    }
    scaleSvgNode(t2, e2) {
      const s2 = parseFloat(t2.getAttributeNS(null, "width")), i2 = parseFloat(t2.getAttributeNS(null, "height"));
      t2.setAttributeNS(null, "width", s2 * e2), t2.setAttributeNS(null, "height", i2 * e2), t2.setAttributeNS(null, "viewBox", "0 0 " + s2 + " " + i2);
    }
    getSvgString(t2) {
      return new Promise((e2) => {
        const s2 = this.w;
        let i2 = t2 || s2.config.chart.toolbar.export.scale || s2.config.chart.toolbar.export.width / s2.globals.svgWidth;
        i2 || (i2 = 1);
        const a2 = s2.globals.svgWidth * i2, o2 = s2.globals.svgHeight * i2, r2 = s2.dom.elWrap.cloneNode(true);
        r2.style.width = a2 + "px", r2.style.height = o2 + "px";
        const n2 = new XMLSerializer().serializeToString(r2);
        let l2 = "\n        .apexcharts-tooltip, .apexcharts-toolbar, .apexcharts-xaxistooltip, .apexcharts-yaxistooltip, .apexcharts-xcrosshairs, .apexcharts-ycrosshairs, .apexcharts-zoom-rect, .apexcharts-selection-rect {\n          display: none;\n        }\n      ";
        s2.config.legend.show && s2.dom.elLegendWrap && s2.dom.elLegendWrap.children.length > 0 && (l2 += ee);
        let h2 = `
        <svg xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="apexcharts-svg"
          xmlns:data="ApexChartsNS"
          transform="translate(0, 0)"
          width="${s2.globals.svgWidth}px" height="${s2.globals.svgHeight}px">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" style="width:${a2}px; height:${o2}px;">
            <style type="text/css">
              ${l2}
            </style>
              ${n2}
            </div>
          </foreignObject>
        </svg>
      `;
        const c2 = this.svgStringToNode(h2);
        1 !== i2 && this.scaleSvgNode(c2, i2), this.convertImagesToBase64(c2).then(() => {
          h2 = new XMLSerializer().serializeToString(c2), e2(h2.replace(/&nbsp;/g, "&#160;"));
        });
      });
    }
    convertImagesToBase64(t2) {
      const e2 = t2.getElementsByTagName("image"), s2 = Array.from(e2).map((t3) => {
        const e3 = t3.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        return e3 && !e3.startsWith("data:") ? this.getBase64FromUrl(e3).then((e4) => {
          t3.setAttributeNS("http://www.w3.org/1999/xlink", "href", e4);
        }).catch((t4) => {
        }) : Promise.resolve();
      });
      return Promise.all(s2);
    }
    getBase64FromUrl(t2) {
      return h.isSSR() ? Promise.resolve(t2) : new Promise((e2, s2) => {
        const i2 = new Image();
        i2.crossOrigin = "Anonymous", i2.onload = () => {
          const t3 = document.createElement("canvas");
          t3.width = i2.width, t3.height = i2.height;
          t3.getContext("2d").drawImage(i2, 0, 0), e2(t3.toDataURL());
        }, i2.onerror = s2, i2.src = t2;
      });
    }
    svgUrl() {
      return new Promise((t2) => {
        this.getSvgString().then((e2) => {
          const s2 = new Blob([e2], { type: "image/svg+xml;charset=utf-8" });
          t2(URL.createObjectURL(s2));
        });
      });
    }
    dataURI(t2) {
      return h.isSSR() ? Promise.resolve({ imgURI: "" }) : new Promise((e2) => {
        const s2 = this.w, i2 = t2 ? t2.scale || t2.width / s2.globals.svgWidth : 1, a2 = document.createElement("canvas");
        a2.width = s2.globals.svgWidth * i2, a2.height = parseInt(s2.dom.elWrap.style.height, 10) * i2;
        const o2 = "transparent" !== s2.config.chart.background && s2.config.chart.background ? s2.config.chart.background : "#fff", r2 = a2.getContext("2d");
        r2.fillStyle = o2, r2.fillRect(0, 0, a2.width * i2, a2.height * i2), this.getSvgString(i2).then((t3) => {
          const s3 = "data:image/svg+xml," + encodeURIComponent(t3), i3 = new Image();
          i3.crossOrigin = "anonymous", i3.onload = () => {
            if (r2.drawImage(i3, 0, 0), a2.msToBlob) {
              const t4 = a2.msToBlob();
              e2({ blob: t4 });
            } else {
              const t4 = a2.toDataURL("image/png");
              e2({ imgURI: t4 });
            }
          }, i3.src = s3;
        });
      });
    }
    exportToSVG() {
      this.svgUrl().then((t2) => {
        this.triggerDownload(t2, this.w.config.chart.toolbar.export.svg.filename, ".svg");
      });
    }
    exportToPng() {
      const t2 = this.w.config.chart.toolbar.export.scale, e2 = this.w.config.chart.toolbar.export.width, s2 = t2 ? { scale: t2 } : e2 ? { width: e2 } : void 0;
      this.dataURI(s2).then(({ imgURI: t3, blob: e3 }) => {
        e3 ? navigator.msSaveOrOpenBlob(e3, this.w.globals.chartID + ".png") : this.triggerDownload(t3, this.w.config.chart.toolbar.export.png.filename, ".png");
      });
    }
    exportToCSV({ series: t2, fileName: e2, columnDelimiter: s2 = ",", lineDelimiter: i2 = "\n" }) {
      const a2 = this.w;
      t2 || (t2 = a2.config.series);
      let o2 = [];
      const r2 = [];
      let n2 = "";
      const l2 = a2.seriesData.series.map((t3, e3) => -1 === a2.globals.collapsedSeriesIndices.indexOf(e3) ? t3 : []), h2 = (t3) => "function" == typeof a2.config.chart.toolbar.export.csv.categoryFormatter ? a2.config.chart.toolbar.export.csv.categoryFormatter(t3) : "datetime" === a2.config.xaxis.type && String(t3).length >= 10 ? new Date(t3).toDateString() : b.isNumber(t3) ? t3 : t3.split(s2).join(""), c2 = (t3) => "function" == typeof a2.config.chart.toolbar.export.csv.valueFormatter ? a2.config.chart.toolbar.export.csv.valueFormatter(t3) : t3, d2 = Math.max(...t2.map((t3) => t3.data ? t3.data.length : 0)), g2 = new xt(this.w), p2 = new W(this.w, { theme: this.ctx.theme, timeScale: this.ctx.timeScale }), x2 = (t3) => {
        let e3 = "";
        if (a2.globals.axisCharts) {
          if ("category" === a2.config.xaxis.type || a2.config.xaxis.convertedCatToNumeric) if (a2.globals.isBarHorizontal) {
            const s3 = a2.formatters.yLabelFormatters[0], i3 = new Q(this.ctx.w).getActiveConfigSeriesIndex();
            e3 = s3(a2.labelData.labels[t3], { seriesIndex: i3, dataPointIndex: t3, w: a2 });
          } else e3 = p2.getLabel(a2.labelData.labels, a2.labelData.timescaleLabels, 0, t3).text;
          "datetime" === a2.config.xaxis.type && (a2.config.xaxis.categories.length ? e3 = a2.config.xaxis.categories[t3] : a2.config.labels.length && (e3 = a2.config.labels[t3]));
        } else e3 = a2.config.labels[t3];
        return null === e3 ? "nullvalue" : (Array.isArray(e3) && (e3 = e3.join(" ")), b.isNumber(e3) ? e3 : e3.split(s2).join(""));
      }, u2 = (e3, i3) => {
        var n3;
        if (o2.length && 0 === i3 && r2.push(o2.join(s2)), e3.data) {
          e3.data = e3.data.length && e3.data || [...Array(d2)].map(() => "");
          for (let d3 = 0; d3 < e3.data.length; d3++) {
            o2 = [];
            let p3 = x2(d3);
            if ("nullvalue" !== p3) {
              if (p3 || (g2.isFormatXY() ? p3 = t2[i3].data[d3].x : g2.isFormat2DArray() && (p3 = t2[i3].data[d3] ? t2[i3].data[d3][0] : "")), 0 === i3) {
                o2.push(h2(p3));
                for (let e4 = 0; e4 < a2.seriesData.series.length; e4++) {
                  const s3 = g2.isFormatXY() ? null == (n3 = t2[e4].data[d3]) ? void 0 : n3.y : l2[e4][d3];
                  o2.push(c2(s3));
                }
              }
              ("candlestick" === a2.config.chart.type || e3.type && "candlestick" === e3.type) && (o2.pop(), o2.push(a2.candleData.seriesCandleO[i3][d3]), o2.push(a2.candleData.seriesCandleH[i3][d3]), o2.push(a2.candleData.seriesCandleL[i3][d3]), o2.push(a2.candleData.seriesCandleC[i3][d3])), ("boxPlot" === a2.config.chart.type || e3.type && "boxPlot" === e3.type) && (o2.pop(), o2.push(a2.candleData.seriesCandleO[i3][d3]), o2.push(a2.candleData.seriesCandleH[i3][d3]), o2.push(a2.candleData.seriesCandleM[i3][d3]), o2.push(a2.candleData.seriesCandleL[i3][d3]), o2.push(a2.candleData.seriesCandleC[i3][d3])), "rangeBar" === a2.config.chart.type && (o2.pop(), o2.push(a2.rangeData.seriesRangeStart[i3][d3]), o2.push(a2.rangeData.seriesRangeEnd[i3][d3])), o2.length && r2.push(o2.join(s2));
            }
          }
        }
      };
      o2.push(a2.config.chart.toolbar.export.csv.headerCategory), "boxPlot" === a2.config.chart.type ? (o2.push("minimum"), o2.push("q1"), o2.push("median"), o2.push("q3"), o2.push("maximum")) : "candlestick" === a2.config.chart.type ? (o2.push("open"), o2.push("high"), o2.push("low"), o2.push("close")) : "rangeBar" === a2.config.chart.type ? (o2.push("minimum"), o2.push("maximum")) : t2.map((t3, e3) => {
        const i3 = (t3.name ? t3.name : `series-${e3}`) + "";
        a2.globals.axisCharts && o2.push(i3.split(s2).join("") ? i3.split(s2).join("") : `series-${e3}`);
      }), a2.globals.axisCharts || (o2.push(a2.config.chart.toolbar.export.csv.headerValue), r2.push(o2.join(s2))), a2.globals.allSeriesHasEqualX || !a2.globals.axisCharts || a2.config.xaxis.categories.length || a2.config.labels.length ? t2.map((t3, e3) => {
        a2.globals.axisCharts ? u2(t3, e3) : (o2 = [], o2.push(h2(a2.labelData.labels[e3])), o2.push(c2(l2[e3])), r2.push(o2.join(s2)));
      }) : (() => {
        const e3 = /* @__PURE__ */ new Set(), i3 = {};
        t2.forEach((s3, a3) => {
          null == s3 || s3.data.forEach((s4) => {
            let o3, r3;
            if (g2.isFormatXY()) o3 = s4.x, r3 = s4.y;
            else {
              if (!g2.isFormat2DArray()) return;
              o3 = s4[0], r3 = s4[1];
            }
            i3[o3] || (i3[o3] = Array(t2.length).fill("")), i3[o3][a3] = c2(r3), e3.add(o3);
          });
        }), o2.length && r2.push(o2.join(s2)), Array.from(e3).sort().forEach((t3) => {
          r2.push([h2(t3), i3[t3].join(s2)]);
        });
      })(), n2 += r2.join(i2), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + n2), e2 || a2.config.chart.toolbar.export.csv.filename, ".csv");
    }
    triggerDownload(t2, e2, s2) {
      if (h.isSSR()) return;
      const i2 = document.createElement("a");
      i2.href = t2, i2.download = (e2 || this.w.globals.chartID) + s2, document.body.appendChild(i2), i2.click(), document.body.removeChild(i2);
    }
  }
  te.registerFeatures({ exports: se });
  let ie = class {
    constructor(t2) {
      this.w = t2.w, this.lgCtx = t2;
    }
    getLegendStyles() {
      if (h.isSSR()) return null;
      const t2 = document.createElement("style");
      t2.setAttribute("type", "text/css");
      const e2 = this.w.config.chart.nonce;
      e2 && t2.setAttribute("nonce", e2);
      const s2 = document.createTextNode(ee);
      return t2.appendChild(s2), t2;
    }
    getLegendDimensions() {
      const t2 = this.w.dom.baseEl.querySelector(".apexcharts-legend");
      if (!t2) return { clwh: 0, clww: 0 };
      const { width: e2, height: s2 } = t2.getBoundingClientRect();
      return { clwh: s2, clww: e2 };
    }
    appendToForeignObject() {
      const t2 = this.getLegendStyles();
      false !== this.w.config.chart.injectStyleSheet && t2 && this.w.dom.elLegendForeign.appendChild(t2);
    }
    toggleDataSeries(t2, e2) {
      const s2 = this.w;
      if (s2.globals.axisCharts || "radialBar" === s2.config.chart.type) {
        s2.globals.resized = true;
        let i2 = null, a2 = null;
        if (s2.globals.risingSeries = [], s2.globals.axisCharts) {
          if (i2 = s2.dom.baseEl.querySelector(`.apexcharts-series[data\\:realIndex='${t2}']`), !i2) return;
          a2 = parseInt(i2.getAttribute("data:realIndex"), 10);
        } else {
          if (i2 = s2.dom.baseEl.querySelector(`.apexcharts-series[rel='${t2 + 1}']`), !i2) return;
          a2 = parseInt(i2.getAttribute("rel"), 10) - 1;
        }
        if (e2) {
          [{ cs: s2.globals.collapsedSeries, csi: s2.globals.collapsedSeriesIndices }, { cs: s2.globals.ancillaryCollapsedSeries, csi: s2.globals.ancillaryCollapsedSeriesIndices }].forEach((t3) => {
            this.riseCollapsedSeries(t3.cs, t3.csi, a2);
          });
        } else this.hideSeries({ seriesEl: i2, realIndex: a2 });
        if (s2.config.chart.accessibility.enabled) {
          const e3 = s2.dom.baseEl.querySelector(`.apexcharts-legend-series[rel="${t2 + 1}"]`);
          if (e3) {
            const i3 = s2.globals.collapsedSeriesIndices.includes(a2) || s2.globals.ancillaryCollapsedSeriesIndices.includes(a2);
            e3.setAttribute("aria-pressed", i3 ? "true" : "false");
            const o2 = e3.querySelector(".apexcharts-legend-text"), r2 = o2 ? o2.textContent : s2.seriesData.seriesNames[t2], n2 = i3 ? "hidden" : "visible";
            e3.setAttribute("aria-label", `${r2}, ${n2}. Press Enter or Space to toggle.`);
          }
        }
      } else {
        const e3 = s2.dom.Paper.findOne(` .apexcharts-series[rel='${t2 + 1}'] path`), i2 = s2.config.chart.type;
        if ("pie" === i2 || "polarArea" === i2 || "donut" === i2) {
          const t3 = s2.config.plotOptions.pie.donut.labels;
          new X(this.w).pathMouseDown(e3, null), this.lgCtx.printDataLabelsInner(e3.node, t3);
        }
        if (s2.config.chart.accessibility.enabled) {
          const e4 = s2.dom.baseEl.querySelector(`.apexcharts-legend-series[rel="${t2 + 1}"]`);
          if (e4) {
            const i3 = s2.globals.collapsedSeriesIndices.includes(t2);
            e4.setAttribute("aria-pressed", i3 ? "true" : "false");
            const a2 = e4.querySelector(".apexcharts-legend-text"), o2 = a2 ? a2.textContent : s2.seriesData.seriesNames[t2], r2 = i3 ? "hidden" : "visible";
            e4.setAttribute("aria-label", `${o2}, ${r2}. Press Enter or Space to toggle.`);
          }
        }
      }
    }
    getSeriesAfterCollapsing({ realIndex: t2 }) {
      const e2 = this.w, s2 = e2.globals, i2 = b.clone(e2.config.series);
      if (s2.axisCharts) {
        const a2 = e2.config.yaxis[s2.seriesYAxisReverseMap[t2]], o2 = { index: t2, data: i2[t2].data.slice(), type: i2[t2].type || e2.config.chart.type };
        if (a2 && a2.show && a2.showAlways) s2.ancillaryCollapsedSeriesIndices.indexOf(t2) < 0 && (s2.ancillaryCollapsedSeries.push(o2), s2.ancillaryCollapsedSeriesIndices.push(t2));
        else if (s2.collapsedSeriesIndices.indexOf(t2) < 0) {
          s2.collapsedSeries.push(o2), s2.collapsedSeriesIndices.push(t2);
          const e3 = s2.risingSeries.indexOf(t2);
          s2.risingSeries.splice(e3, 1);
        }
      } else s2.collapsedSeries.push({ index: t2, data: i2[t2] }), s2.collapsedSeriesIndices.push(t2);
      return s2.allSeriesCollapsed = s2.collapsedSeries.length + s2.ancillaryCollapsedSeries.length === e2.config.series.length, this._getSeriesBasedOnCollapsedState(i2);
    }
    hideSeries({ seriesEl: t2, realIndex: e2 }) {
      const s2 = this.w, i2 = this.getSeriesAfterCollapsing({ realIndex: e2 }), a2 = t2.childNodes;
      for (let t3 = 0; t3 < a2.length; t3++) a2[t3].classList.contains("apexcharts-series-markers-wrap") && (a2[t3].classList.contains("apexcharts-hide") ? a2[t3].classList.remove("apexcharts-hide") : a2[t3].classList.add("apexcharts-hide"));
      this.lgCtx.updateSeries(i2, s2.config.chart.animations.dynamicAnimation.enabled);
    }
    riseCollapsedSeries(t2, e2, s2) {
      const i2 = this.w;
      let a2 = b.clone(i2.config.series);
      if (t2.length > 0) {
        for (let o2 = 0; o2 < t2.length; o2++) t2[o2].index === s2 && (i2.globals.axisCharts ? a2[s2].data = t2[o2].data.slice() : a2[s2] = t2[o2].data, "number" != typeof a2[s2] && (a2[s2].hidden = false), t2.splice(o2, 1), e2.splice(o2, 1), i2.globals.risingSeries.push(s2), o2--);
        a2 = this._getSeriesBasedOnCollapsedState(a2), this.lgCtx.updateSeries(a2, i2.config.chart.animations.dynamicAnimation.enabled);
      }
    }
    _getSeriesBasedOnCollapsedState(t2) {
      const e2 = this.w;
      let s2 = 0;
      return e2.globals.axisCharts ? t2.forEach((i2, a2) => {
        e2.globals.collapsedSeriesIndices.indexOf(a2) < 0 && e2.globals.ancillaryCollapsedSeriesIndices.indexOf(a2) < 0 || (t2[a2].data = [], s2++);
      }) : t2.forEach((i2, a2) => {
        e2.globals.collapsedSeriesIndices.indexOf(a2) < 0 || (t2[a2] = 0, s2++);
      }), e2.globals.allSeriesCollapsed = s2 === t2.length, t2;
    }
  };
  te.registerFeatures({ legend: class {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.printDataLabelsInner = (...t3) => {
        var s2;
        return null == (s2 = e2.pie) ? void 0 : s2.printDataLabelsInner(...t3);
      }, this.updateSeries = (...t3) => e2.updateHelpers._updateSeries(...t3), this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new ie(this);
    }
    init() {
      const t2 = this.w, e2 = t2.globals, s2 = t2.config, i2 = s2.legend.showForSingleSeries && 1 === this.w.seriesData.series.length || this.isBarsDistributed || this.w.seriesData.series.length > 1;
      if (this.legendHelpers.appendToForeignObject(), (i2 || !e2.axisCharts) && s2.legend.show) {
        for (; t2.dom.elLegendWrap.firstChild; ) t2.dom.elLegendWrap.removeChild(t2.dom.elLegendWrap.firstChild);
        this.drawLegends(), "bottom" === s2.legend.position || "top" === s2.legend.position ? this.legendAlignHorizontal() : "right" !== s2.legend.position && "left" !== s2.legend.position || this.legendAlignVertical();
      }
    }
    createLegendMarker({ i: t2, fillcolor: e2 }) {
      const s2 = this.w, i2 = f.createElement("span");
      i2.classList.add("apexcharts-legend-marker");
      const a2 = s2.config.legend.markers.shape || s2.config.markers.shape;
      let o2 = a2;
      Array.isArray(a2) && (o2 = a2[t2]);
      const r2 = Array.isArray(s2.config.legend.markers.size) ? parseFloat(s2.config.legend.markers.size[t2]) : parseFloat(s2.config.legend.markers.size), c2 = Array.isArray(s2.config.legend.markers.offsetX) ? parseFloat(s2.config.legend.markers.offsetX[t2]) : parseFloat(s2.config.legend.markers.offsetX), d2 = Array.isArray(s2.config.legend.markers.offsetY) ? parseFloat(s2.config.legend.markers.offsetY[t2]) : parseFloat(s2.config.legend.markers.offsetY), g2 = Array.isArray(s2.config.legend.markers.strokeWidth) ? parseFloat(s2.config.legend.markers.strokeWidth[t2]) : parseFloat(s2.config.legend.markers.strokeWidth), p2 = i2.style;
      if (p2.height = 2 * (r2 + g2) + "px", p2.width = 2 * (r2 + g2) + "px", p2.left = c2 + "px", p2.top = d2 + "px", s2.config.legend.markers.customHTML) p2.background = "transparent", p2.color = e2[t2], Array.isArray(s2.config.legend.markers.customHTML) ? s2.config.legend.markers.customHTML[t2] && (i2.innerHTML = s2.config.legend.markers.customHTML[t2]()) : i2.innerHTML = s2.config.legend.markers.customHTML();
      else {
        const a3 = new H(this.ctx.w, this.ctx).getMarkerConfig({ cssClass: `apexcharts-legend-marker apexcharts-marker apexcharts-marker-${o2}`, seriesIndex: t2, strokeWidth: g2, size: r2 }), c3 = (h.isBrowser() ? window.SVG : global.SVG)().addTo(i2).size("100%", "100%"), d3 = new X(this.w).drawMarker(0, 0, l(n({}, a3), { pointFillColor: Array.isArray(e2) ? e2[t2] : a3.pointFillColor, shape: o2 }));
        s2.dom.Paper.find(".apexcharts-legend-marker.apexcharts-marker").forEach((t3) => {
          t3.node.classList.contains("apexcharts-marker-triangle") ? t3.node.style.transform = "translate(50%, 45%)" : t3.node.style.transform = "translate(50%, 50%)";
        }), c3.add(d3);
      }
      return i2;
    }
    drawLegends() {
      var t2;
      const e2 = this, s2 = this.w, i2 = s2.config.legend.fontFamily;
      let a2 = s2.seriesData.seriesNames, o2 = s2.config.legend.markers.fillColors ? s2.config.legend.markers.fillColors.slice() : s2.globals.colors.slice();
      if ("heatmap" === s2.config.chart.type) {
        const t3 = s2.config.plotOptions.heatmap.colorScale.ranges;
        a2 = t3.map((t4) => t4.name ? t4.name : t4.from + " - " + t4.to), o2 = t3.map((t4) => t4.color);
      } else this.isBarsDistributed && (a2 = s2.labelData.labels.slice());
      s2.config.legend.customLegendItems.length && (a2 = s2.config.legend.customLegendItems);
      const r2 = s2.formatters.legendFormatter, n2 = s2.config.legend.inverseOrder, l2 = [];
      s2.labelData.seriesGroups.length > 1 && s2.config.legend.clusterGroupedSeries && s2.labelData.seriesGroups.forEach((t3, e3) => {
        l2[e3] = f.createElement("div"), l2[e3].classList.add("apexcharts-legend-group", `apexcharts-legend-group-${e3}`), "horizontal" === s2.config.legend.clusterGroupedSeriesOrientation ? s2.dom.elLegendWrap.classList.add("apexcharts-legend-group-horizontal") : l2[e3].classList.add("apexcharts-legend-group-vertical");
      });
      for (let e3 = n2 ? a2.length - 1 : 0; n2 ? e3 >= 0 : e3 <= a2.length - 1; n2 ? e3-- : e3++) {
        const n3 = r2(a2[e3], { seriesIndex: e3, w: s2 });
        let h2 = false, c2 = false;
        if (s2.globals.collapsedSeries.length > 0) for (let t3 = 0; t3 < s2.globals.collapsedSeries.length; t3++) s2.globals.collapsedSeries[t3].index === e3 && (h2 = true);
        if (s2.globals.ancillaryCollapsedSeriesIndices.length > 0) for (let t3 = 0; t3 < s2.globals.ancillaryCollapsedSeriesIndices.length; t3++) s2.globals.ancillaryCollapsedSeriesIndices[t3] === e3 && (c2 = true);
        const d2 = this.createLegendMarker({ i: e3, fillcolor: o2 });
        X.setAttrs(d2, { rel: e3 + 1, "data:collapsed": h2 || c2 }), (h2 || c2) && d2.classList.add("apexcharts-inactive-legend");
        const g2 = f.createElement("div");
        if (s2.config.chart.accessibility.enabled && s2.config.chart.accessibility.keyboard.enabled) {
          g2.setAttribute("role", "button"), g2.setAttribute("tabindex", "0");
          const t3 = Array.isArray(n3) ? n3.join(" ") : n3, e4 = h2 || c2, s3 = e4 ? "hidden" : "visible";
          g2.setAttribute("aria-label", `${t3}, ${s3}. Press Enter or Space to toggle.`), g2.setAttribute("aria-pressed", e4 ? "true" : "false");
        }
        const p2 = f.createElement("span");
        p2.classList.add("apexcharts-legend-text"), p2.innerHTML = Array.isArray(n3) ? n3.join(" ") : n3;
        let x2 = s2.config.legend.labels.useSeriesColors ? s2.globals.colors[e3] : Array.isArray(s2.config.legend.labels.colors) ? null == (t2 = s2.config.legend.labels.colors) ? void 0 : t2[e3] : s2.config.legend.labels.colors;
        x2 || (x2 = s2.config.chart.foreColor), p2.style.color = x2, p2.style.fontSize = s2.config.legend.fontSize, p2.style.fontWeight = s2.config.legend.fontWeight, p2.style.fontFamily = i2 || s2.config.chart.fontFamily, X.setAttrs(p2, { rel: e3 + 1, i: e3, "data:default-text": encodeURIComponent(n3), "data:collapsed": h2 || c2 }), g2.appendChild(d2), g2.appendChild(p2);
        const u2 = new I(this.w);
        if (!s2.config.legend.showForZeroSeries) {
          0 === u2.getSeriesTotalByIndex(e3) && u2.seriesHaveSameValues(e3) && !u2.isSeriesNull(e3) && -1 === s2.globals.collapsedSeriesIndices.indexOf(e3) && -1 === s2.globals.ancillaryCollapsedSeriesIndices.indexOf(e3) && g2.classList.add("apexcharts-hidden-zero-series");
        }
        s2.config.legend.showForNullSeries || u2.isSeriesNull(e3) && -1 === s2.globals.collapsedSeriesIndices.indexOf(e3) && -1 === s2.globals.ancillaryCollapsedSeriesIndices.indexOf(e3) && g2.classList.add("apexcharts-hidden-null-series"), l2.length ? s2.labelData.seriesGroups.forEach((t3, i3) => {
          var a3;
          t3.includes(null == (a3 = s2.config.series[e3]) ? void 0 : a3.name) && (s2.dom.elLegendWrap.appendChild(l2[i3]), l2[i3].appendChild(g2));
        }) : s2.dom.elLegendWrap.appendChild(g2), s2.dom.elLegendWrap.classList.add(`apexcharts-align-${s2.config.legend.horizontalAlign}`), s2.dom.elLegendWrap.classList.add("apx-legend-position-" + s2.config.legend.position), g2.classList.add("apexcharts-legend-series"), g2.style.margin = `${s2.config.legend.itemMargin.vertical}px ${s2.config.legend.itemMargin.horizontal}px`, s2.dom.elLegendWrap.style.width = s2.config.legend.width ? s2.config.legend.width + "px" : "", s2.dom.elLegendWrap.style.height = s2.config.legend.height ? s2.config.legend.height + "px" : "", X.setAttrs(g2, { rel: e3 + 1, seriesName: b.escapeString(a2[e3]), "data:collapsed": h2 || c2 }), (h2 || c2) && g2.classList.add("apexcharts-inactive-legend"), s2.config.legend.onItemClick.toggleDataSeries || g2.classList.add("apexcharts-no-click");
      }
      s2.dom.elWrap.addEventListener("click", e2.onLegendClick, true), s2.config.legend.onItemHover.highlightDataSeries && 0 === s2.config.legend.customLegendItems.length && (s2.dom.elWrap.addEventListener("mousemove", e2.onLegendHovered, true), s2.dom.elWrap.addEventListener("mouseout", e2.onLegendHovered, true)), s2.config.chart.accessibility.enabled && s2.config.chart.accessibility.keyboard.enabled && s2.dom.elWrap.addEventListener("keydown", e2.onLegendKeyDown.bind(e2), true);
    }
    setLegendWrapXY(t2, e2) {
      const s2 = this.w, i2 = s2.dom.elLegendWrap, a2 = i2.clientHeight;
      let o2 = 0, r2 = 0;
      if ("bottom" === s2.config.legend.position) r2 = s2.globals.svgHeight - Math.min(a2, s2.globals.svgHeight / 2) - 5;
      else if ("top" === s2.config.legend.position) {
        const t3 = new rt(this.w, this.ctx), e3 = t3.dimHelpers.getTitleSubtitleCoords("title").height, s3 = t3.dimHelpers.getTitleSubtitleCoords("subtitle").height;
        r2 = (e3 > 0 ? e3 - 10 : 0) + (s3 > 0 ? s3 - 10 : 0);
      }
      i2.style.position = "absolute", o2 = o2 + t2 + s2.config.legend.offsetX, r2 = r2 + e2 + s2.config.legend.offsetY, i2.style.left = o2 + "px", i2.style.top = r2 + "px", "right" === s2.config.legend.position && (i2.style.left = "auto", i2.style.right = 25 + s2.config.legend.offsetX + "px");
      ["width", "height"].forEach((t3) => {
        i2.style[t3] && (i2.style[t3] = parseInt(s2.config.legend[t3], 10) + "px");
      });
    }
    legendAlignHorizontal() {
      const t2 = this.w;
      t2.dom.elLegendWrap.style.right = 0;
      const e2 = new rt(this.w, this.ctx), s2 = e2.dimHelpers.getTitleSubtitleCoords("title"), i2 = e2.dimHelpers.getTitleSubtitleCoords("subtitle");
      let a2 = 0;
      "top" === t2.config.legend.position && (a2 = s2.height + i2.height + t2.config.title.margin + t2.config.subtitle.margin - 10), this.setLegendWrapXY(20, a2);
    }
    legendAlignVertical() {
      const t2 = this.w, e2 = this.legendHelpers.getLegendDimensions();
      let s2 = 0;
      "left" === t2.config.legend.position && (s2 = 20), "right" === t2.config.legend.position && (s2 = t2.globals.svgWidth - e2.clww - 10), this.setLegendWrapXY(s2, 20);
    }
    onLegendHovered(t2) {
      const e2 = this.w, s2 = t2.target.classList.contains("apexcharts-legend-series") || t2.target.classList.contains("apexcharts-legend-text") || t2.target.classList.contains("apexcharts-legend-marker");
      if ("heatmap" === e2.config.chart.type || this.isBarsDistributed) {
        if (s2) {
          const e3 = parseInt(t2.target.getAttribute("rel"), 10) - 1;
          this.ctx.events.fireEvent("legendHover", [this.ctx, e3, this.w]);
          new Q(this.ctx.w).highlightRangeInSeries(t2, t2.target);
        }
      } else if (!t2.target.classList.contains("apexcharts-inactive-legend") && s2) {
        new Q(this.ctx.w).toggleSeriesOnHover(t2, t2.target);
      }
    }
    onLegendKeyDown(t2) {
      const e2 = this, s2 = this.w;
      if ((t2.target.classList.contains("apexcharts-legend-series") || t2.target.classList.contains("apexcharts-legend-text") || t2.target.classList.contains("apexcharts-legend-marker")) && ("Enter" === t2.key || " " === t2.key)) {
        t2.preventDefault();
        const i2 = t2.target.getAttribute("rel");
        e2.onLegendClick(t2), null !== i2 && s2.config.legend.onItemClick.toggleDataSeries && requestAnimationFrame(() => {
          const t3 = s2.dom.baseEl.querySelector(`.apexcharts-legend-series[rel="${i2}"]`);
          t3 && t3.focus();
        });
      }
    }
    onLegendClick(t2) {
      const e2 = this.w;
      if (!e2.config.legend.customLegendItems.length && (t2.target.classList.contains("apexcharts-legend-series") || t2.target.classList.contains("apexcharts-legend-text") || t2.target.classList.contains("apexcharts-legend-marker"))) {
        const s2 = parseInt(t2.target.getAttribute("rel"), 10) - 1, i2 = "true" === t2.target.getAttribute("data:collapsed"), a2 = this.w.config.chart.events.legendClick;
        "function" == typeof a2 && a2(this.ctx, s2, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, s2, this.w]);
        const o2 = this.w.config.legend.markers.onClick;
        "function" == typeof o2 && t2.target.classList.contains("apexcharts-legend-marker") && (o2(this.ctx, s2, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, s2, this.w]));
        "treemap" !== e2.config.chart.type && "heatmap" !== e2.config.chart.type && !this.isBarsDistributed && e2.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(s2, i2);
      }
    }
  } });
  class ae {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = t2.globals.minX, this.maxX = t2.globals.maxX;
    }
    createToolbar() {
      const t2 = this.w, e2 = () => f.createElementNS("http://www.w3.org/1999/xhtml", "div"), s2 = e2();
      if (s2.setAttribute("class", "apexcharts-toolbar"), s2.style.top = t2.config.chart.toolbar.offsetY + "px", s2.style.right = 3 - t2.config.chart.toolbar.offsetX + "px", t2.dom.elWrap.appendChild(s2), this.elZoom = e2(), this.elZoomIn = e2(), this.elZoomOut = e2(), this.elPan = e2(), this.elSelection = e2(), this.elZoomReset = e2(), this.elMenuIcon = e2(), this.elMenu = e2(), this.elCustomIcons = [], this.t = t2.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (let t3 = 0; t3 < this.t.customIcons.length; t3++) this.elCustomIcons.push(e2());
      const i2 = [], a2 = (e3, s3, a3) => {
        const o3 = e3.toLowerCase();
        this.t[o3] && t2.config.chart.zoom.enabled && i2.push({ el: s3, icon: "string" == typeof this.t[o3] ? this.t[o3] : a3, title: this.localeValues[e3], class: `apexcharts-${o3}-icon` });
      };
      a2("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), a2("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');
      const o2 = (e3) => {
        this.t[e3] && t2.config.chart[e3].enabled && i2.push({ el: "zoom" === e3 ? this.elZoom : this.elSelection, icon: "string" == typeof this.t[e3] ? this.t[e3] : "zoom" === e3 ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>', title: this.localeValues["zoom" === e3 ? "selectionZoom" : "selection"], class: `apexcharts-${e3}-icon` });
      };
      o2("zoom"), o2("selection"), this.t.pan && t2.config.chart.zoom.enabled && i2.push({ el: this.elPan, icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>', title: this.localeValues.pan, class: "apexcharts-pan-icon" }), a2("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && i2.push({ el: this.elMenuIcon, icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
      for (let t3 = 0; t3 < this.elCustomIcons.length; t3++) i2.push({ el: this.elCustomIcons[t3], icon: this.t.customIcons[t3].icon, title: this.t.customIcons[t3].title, index: this.t.customIcons[t3].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[t3].class });
      i2.forEach((t3, e3) => {
        t3.index && b.moveIndexInArray(i2, e3, t3.index);
      });
      for (let t3 = 0; t3 < i2.length; t3++) X.setAttrs(i2[t3].el, { class: i2[t3].class, title: i2[t3].title, tabindex: "0", role: "button", "aria-label": i2[t3].title }), i2[t3].el.innerHTML = i2[t3].icon, s2.appendChild(i2[t3].el);
      this.elZoom.parentNode && this.elZoom.setAttribute("aria-pressed", String(!!t2.interact.zoomEnabled)), this.elSelection.parentNode && this.elSelection.setAttribute("aria-pressed", String(!!t2.interact.selectionEnabled)), this.elPan.parentNode && this.elPan.setAttribute("aria-pressed", String(!!t2.interact.panEnabled)), this.elMenuIcon.parentNode && (this.elMenuIcon.setAttribute("aria-haspopup", "true"), this.elMenuIcon.setAttribute("aria-expanded", "false")), this._createHamburgerMenu(s2), t2.interact.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : t2.interact.panEnabled ? this.elPan.classList.add(this.selectedClass) : t2.interact.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
    }
    _createHamburgerMenu(t2) {
      this.elMenuItems = [], t2.appendChild(this.elMenu), X.setAttrs(this.elMenu, { class: "apexcharts-menu", role: "menu" });
      const e2 = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }];
      for (let t3 = 0; t3 < e2.length; t3++) this.elMenuItems.push(f.createElementNS("http://www.w3.org/1999/xhtml", "div")), this.elMenuItems[t3].innerHTML = e2[t3].title, X.setAttrs(this.elMenuItems[t3], { class: `apexcharts-menu-item ${e2[t3].name}`, title: e2[t3].title, role: "menuitem", tabindex: "-1" }), this.elMenu.appendChild(this.elMenuItems[t3]);
    }
    addToolbarEventListeners() {
      this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((t2) => {
        t2.classList.contains("exportSVG") ? t2.addEventListener("click", this.handleDownload.bind(this, "svg")) : t2.classList.contains("exportPNG") ? t2.addEventListener("click", this.handleDownload.bind(this, "png")) : t2.classList.contains("exportCSV") && t2.addEventListener("click", this.handleDownload.bind(this, "csv"));
      });
      for (let t2 = 0; t2 < this.t.customIcons.length; t2++) this.elCustomIcons[t2].addEventListener("click", this.t.customIcons[t2].click.bind(this, this.ctx, this.ctx.w));
      [this.elZoomReset, this.elSelection, this.elZoom, this.elZoomIn, this.elZoomOut, this.elPan, this.elMenuIcon, ...this.elCustomIcons].forEach((t2) => {
        t2.addEventListener("keydown", (e2) => {
          if ("Enter" === e2.key || " " === e2.key) {
            e2.preventDefault();
            const s2 = t2.className;
            t2.click(), requestAnimationFrame(() => {
              const t3 = this.w.dom.baseEl;
              if (!t3) return;
              const e3 = s2.split(" ").find((t4) => t4.startsWith("apexcharts-"));
              if (!e3) return;
              const i2 = t3.querySelector(`.${e3}`);
              i2 && i2.focus();
            });
          }
        });
      }), this.elMenuIcon.addEventListener("keydown", (t2) => {
        "ArrowDown" !== t2.key && "ArrowUp" !== t2.key || (t2.preventDefault(), this.elMenu.classList.contains("apexcharts-menu-open") || this.toggleMenu(), window.setTimeout(() => {
          const e2 = "ArrowDown" === t2.key ? 0 : this.elMenuItems.length - 1;
          this.elMenuItems[e2] && this.elMenuItems[e2].focus();
        }, 20));
      }), this.elMenuItems.forEach((t2, e2) => {
        t2.addEventListener("keydown", (s2) => {
          if ("ArrowDown" === s2.key) {
            s2.preventDefault();
            (this.elMenuItems[e2 + 1] || this.elMenuItems[0]).focus();
          } else if ("ArrowUp" === s2.key) {
            s2.preventDefault();
            (this.elMenuItems[e2 - 1] || this.elMenuItems[this.elMenuItems.length - 1]).focus();
          } else "Escape" === s2.key || "Tab" === s2.key ? (this._closeMenu(), this.elMenuIcon.focus(), "Tab" === s2.key || s2.preventDefault()) : "Enter" !== s2.key && " " !== s2.key || (s2.preventDefault(), t2.click());
        });
      });
    }
    toggleZoomSelection(t2) {
      this.ctx.getSyncedCharts().forEach((e2) => {
        e2.ctx.toolbar.toggleOtherControls();
        const s2 = "selection" === t2 ? e2.ctx.toolbar.elSelection : e2.ctx.toolbar.elZoom, i2 = "selection" === t2 ? "selectionEnabled" : "zoomEnabled";
        e2.w.globals[i2] = !e2.w.globals[i2], s2.classList.contains(e2.ctx.toolbar.selectedClass) ? s2.classList.remove(e2.ctx.toolbar.selectedClass) : s2.classList.add(e2.ctx.toolbar.selectedClass), s2.setAttribute("aria-pressed", String(e2.w.globals[i2]));
      });
    }
    getToolbarIconsReference() {
      const t2 = this.w;
      this.elZoom || (this.elZoom = t2.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t2.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t2.dom.baseEl.querySelector(".apexcharts-selection-icon"));
    }
    enableZoomPanFromToolbar(t2) {
      this.toggleOtherControls(), "pan" === t2 ? this.w.interact.panEnabled = true : this.w.interact.zoomEnabled = true;
      const e2 = "pan" === t2 ? this.elPan : this.elZoom, s2 = "pan" === t2 ? this.elZoom : this.elPan;
      e2 && e2.classList.add(this.selectedClass), s2 && s2.classList.remove(this.selectedClass);
    }
    togglePanning() {
      this.ctx.getSyncedCharts().forEach((t2) => {
        t2.ctx.toolbar.toggleOtherControls(), t2.w.interact.panEnabled = !t2.w.interact.panEnabled, t2.ctx.toolbar.elPan.classList.contains(t2.ctx.toolbar.selectedClass) ? t2.ctx.toolbar.elPan.classList.remove(t2.ctx.toolbar.selectedClass) : t2.ctx.toolbar.elPan.classList.add(t2.ctx.toolbar.selectedClass), t2.ctx.toolbar.elPan.setAttribute("aria-pressed", String(t2.w.interact.panEnabled));
      });
    }
    toggleOtherControls() {
      const t2 = this.w;
      t2.interact.panEnabled = false, t2.interact.zoomEnabled = false, t2.interact.selectionEnabled = false, this.getToolbarIconsReference();
      [this.elPan, this.elSelection, this.elZoom].forEach((t3) => {
        t3 && t3.classList.remove(this.selectedClass);
      });
    }
    handleZoomIn() {
      const t2 = this.w;
      t2.axisFlags.isRangeBar && (this.minX = t2.globals.minY, this.maxX = t2.globals.maxY);
      const e2 = (this.minX + this.maxX) / 2, s2 = (this.minX + e2) / 2, i2 = (this.maxX + e2) / 2, a2 = this._getNewMinXMaxX(s2, i2);
      t2.interact.disableZoomIn || this.zoomUpdateOptions(a2.minX, a2.maxX);
    }
    handleZoomOut() {
      const t2 = this.w;
      if (t2.axisFlags.isRangeBar && (this.minX = t2.globals.minY, this.maxX = t2.globals.maxY), "datetime" === t2.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3) return;
      const e2 = (this.minX + this.maxX) / 2, s2 = this.minX - (e2 - this.minX), i2 = this.maxX - (e2 - this.maxX), a2 = this._getNewMinXMaxX(s2, i2);
      t2.interact.disableZoomOut || this.zoomUpdateOptions(a2.minX, a2.maxX);
    }
    _getNewMinXMaxX(t2, e2) {
      const s2 = this.w.config.xaxis.convertedCatToNumeric;
      return { minX: s2 ? Math.floor(t2) : t2, maxX: s2 ? Math.floor(e2) : e2 };
    }
    zoomUpdateOptions(t2, e2) {
      const s2 = this.w;
      if (void 0 === t2 && void 0 === e2) return void this.handleZoomReset();
      if (s2.config.xaxis.convertedCatToNumeric && (t2 < 1 && (t2 = 1, e2 = s2.globals.dataPoints), e2 - t2 < 2)) return;
      let i2 = { min: t2, max: e2 };
      const a2 = this.getBeforeZoomRange(i2);
      a2 && (i2 = a2.xaxis);
      const o2 = { xaxis: i2 }, r2 = b.clone(s2.globals.initialConfig.yaxis);
      s2.config.chart.group || (o2.yaxis = r2), this.w.interact.zoomed = true, this.ctx.updateHelpers._updateOptions(o2, false, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(i2, r2);
    }
    zoomCallback(t2, e2) {
      "function" == typeof this.ev.zoomed && (this.ev.zoomed(this.ctx, { xaxis: t2, yaxis: e2 }), this.ctx.events.fireEvent("zoomed", { xaxis: t2, yaxis: e2 }));
    }
    getBeforeZoomRange(t2, e2) {
      let s2 = null;
      return "function" == typeof this.ev.beforeZoom && (s2 = this.ev.beforeZoom(this, { xaxis: t2, yaxis: e2 })), s2;
    }
    toggleMenu() {
      window.setTimeout(() => {
        this.elMenu.classList.contains("apexcharts-menu-open") ? this._closeMenu() : (this.elMenu.classList.add("apexcharts-menu-open"), this.elMenuIcon.setAttribute("aria-expanded", "true"));
      }, 0);
    }
    _closeMenu() {
      this.elMenu.classList.remove("apexcharts-menu-open"), this.elMenuIcon.setAttribute("aria-expanded", "false");
    }
    handleDownload(t2) {
      const e2 = this.w, s2 = new se(this.w, this.ctx);
      switch (t2) {
        case "svg":
          s2.exportToSVG(this.ctx);
          break;
        case "png":
          s2.exportToPng(this.ctx);
          break;
        case "csv":
          s2.exportToCSV({ series: e2.config.series, columnDelimiter: e2.config.chart.toolbar.export.csv.columnDelimiter });
      }
    }
    handleZoomReset() {
      this.ctx.getSyncedCharts().forEach((t2) => {
        const e2 = t2.w;
        if (e2.globals.lastXAxis.min = e2.globals.initialConfig.xaxis.min, e2.globals.lastXAxis.max = e2.globals.initialConfig.xaxis.max, t2.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e2.config.chart.events.beforeResetZoom) {
          const s3 = e2.config.chart.events.beforeResetZoom(t2, e2);
          s3 && t2.updateHelpers.revertDefaultAxisMinMax(s3);
        }
        "function" == typeof e2.config.chart.events.zoomed && t2.ctx.toolbar.zoomCallback({ min: e2.config.xaxis.min, max: e2.config.xaxis.max }), e2.interact.zoomed = false;
        const s2 = t2.ctx.series.emptyCollapsedSeries(b.clone(e2.globals.initialSeries));
        t2.updateHelpers._updateSeries(s2, e2.config.chart.animations.dynamicAnimation.enabled);
      });
    }
    destroy() {
      this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
    }
  }
  te.registerFeatures({ toolbar: ae, zoomPanSelection: class extends ae {
    constructor(t2, e2) {
      super(t2, e2), this.w = t2, this.ctx = e2, this.dragged = false, this.graphics = new X(this.w), this.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend", "wheel"], this.clientX = 0, this.clientY = 0, this.startX = 0, this.endX = 0, this.dragX = 0, this.startY = 0, this.endY = 0, this.dragY = 0, this.moveDirection = "none", this.debounceTimer = null, this.debounceDelay = 100, this.wheelDelay = 400;
    }
    init({ xyRatios: t2 }) {
      const e2 = this.w, s2 = this;
      this.xyRatios = t2, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = e2.dom.baseEl.querySelector(".apexcharts-grid"), this.constraints = new Y(0, 0, e2.layout.gridWidth, e2.layout.gridHeight), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), e2.dom.Paper.add(this.zoomRect), e2.dom.Paper.add(this.selectionRect), "x" === e2.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: e2.layout.gridWidth, maxY: e2.layout.gridHeight }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : "y" === e2.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: e2.layout.gridWidth }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = e2.dom.baseEl.querySelector(`${e2.globals.chartClass} .apexcharts-svg`), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach((e3) => {
        this.hoverArea.addEventListener(e3, s2.svgMouseEvents.bind(s2, t2), { capture: false, passive: true });
      }), e2.config.chart.zoom.enabled && e2.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", s2.mouseWheelEvent.bind(s2), { capture: false, passive: false });
    }
    destroy() {
      this.slDraggableRect && (this.slDraggableRect.draggable(false), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
    }
    svgMouseEvents(t2, e2) {
      const s2 = this.w, i2 = this.ctx.toolbar, a2 = s2.interact.zoomEnabled ? s2.config.chart.zoom.type : s2.config.chart.selection.type, o2 = s2.config.chart.toolbar.autoSelected;
      if (e2.shiftKey ? (this.shiftWasPressed = true, i2.enableZoomPanFromToolbar("pan" === o2 ? "zoom" : "pan")) : this.shiftWasPressed && (i2.enableZoomPanFromToolbar(o2), this.shiftWasPressed = false), !e2.target) return;
      const r2 = e2.target.classList;
      let n2;
      e2.target.parentNode && null !== e2.target.parentNode && (n2 = e2.target.parentNode.classList);
      if (!(r2.contains("apexcharts-legend-marker") || r2.contains("apexcharts-legend-text") || n2 && n2.contains("apexcharts-toolbar"))) {
        if (this.clientX = "touchmove" === e2.type || "touchstart" === e2.type ? e2.touches[0].clientX : "touchend" === e2.type ? e2.changedTouches[0].clientX : e2.clientX, this.clientY = "touchmove" === e2.type || "touchstart" === e2.type ? e2.touches[0].clientY : "touchend" === e2.type ? e2.changedTouches[0].clientY : e2.clientY, "mousedown" === e2.type && 1 === e2.which || "touchstart" === e2.type) {
          const t3 = this.gridRect.getBoundingClientRect();
          this.startX = this.clientX - t3.left - s2.globals.barPadForNumericAxis, this.startY = this.clientY - t3.top, this.dragged = false, this.w.interact.mousedown = true;
        }
        ("mousemove" === e2.type && 1 === e2.which || "touchmove" === e2.type) && (this.dragged = true, s2.interact.panEnabled ? (s2.interact.selection = null, this.w.interact.mousedown && this.panDragging({ context: this, zoomtype: a2, xyRatios: t2 })) : (this.w.interact.mousedown && s2.interact.zoomEnabled || this.w.interact.mousedown && s2.interact.selectionEnabled) && (this.selection = this.selectionDrawing({ context: this, zoomtype: a2 }))), "mouseup" !== e2.type && "touchend" !== e2.type && "mouseleave" !== e2.type || this.handleMouseUp({ zoomtype: a2 }), this.makeSelectionRectDraggable();
      }
    }
    handleMouseUp({ zoomtype: t2, isResized: e2 }) {
      var s2;
      const i2 = this.w, a2 = null == (s2 = this.gridRect) ? void 0 : s2.getBoundingClientRect();
      a2 && (this.w.interact.mousedown || e2) && (this.endX = this.clientX - a2.left - i2.globals.barPadForNumericAxis, this.endY = this.clientY - a2.top, this.dragX = Math.abs(this.endX - this.startX), this.dragY = Math.abs(this.endY - this.startY), (i2.interact.zoomEnabled || i2.interact.selectionEnabled) && this.selectionDrawn({ context: this, zoomtype: t2 })), i2.interact.zoomEnabled && this.hideSelectionRect(this.selectionRect), this.dragged = false, this.w.interact.mousedown = false;
    }
    mouseWheelEvent(t2) {
      const e2 = this.w;
      t2.preventDefault();
      const s2 = Date.now();
      s2 - e2.interact.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(t2), e2.interact.lastWheelExecution = s2), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(() => {
        s2 - e2.interact.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(t2), e2.interact.lastWheelExecution = s2);
      }, this.debounceDelay);
    }
    executeMouseWheelZoom(t2) {
      var e2;
      const s2 = this.w;
      this.minX = s2.axisFlags.isRangeBar ? s2.globals.minY : s2.globals.minX, this.maxX = s2.axisFlags.isRangeBar ? s2.globals.maxY : s2.globals.maxX;
      const i2 = null == (e2 = this.gridRect) ? void 0 : e2.getBoundingClientRect();
      if (!i2) return;
      const a2 = (t2.clientX - i2.left) / i2.width, o2 = this.minX, r2 = this.maxX, n2 = r2 - o2;
      let l2, h2, c2;
      if (t2.deltaY < 0) {
        l2 = 0.5 * n2;
        const t3 = o2 + a2 * n2;
        h2 = t3 - l2 / 2, c2 = t3 + l2 / 2;
      } else l2 = 1.5 * n2, h2 = o2 - l2 / 2, c2 = r2 + l2 / 2;
      if (!s2.axisFlags.isRangeBar) {
        h2 = Math.max(h2, s2.globals.initialMinX), c2 = Math.min(c2, s2.globals.initialMaxX);
        const t3 = 0.01 * (s2.globals.initialMaxX - s2.globals.initialMinX);
        if (c2 - h2 < t3) {
          const e3 = (h2 + c2) / 2;
          h2 = e3 - t3 / 2, c2 = e3 + t3 / 2;
        }
      }
      const d2 = this._getNewMinXMaxX(h2, c2);
      isNaN(d2.minX) || isNaN(d2.maxX) || this.zoomUpdateOptions(d2.minX, d2.maxX);
    }
    makeSelectionRectDraggable() {
      const t2 = this.w;
      if (!this.selectionRect) return;
      const e2 = this.selectionRect.node.getBoundingClientRect();
      e2.width > 0 && e2.height > 0 && (this.selectionRect.select(false).resize(false), this.selectionRect.select({ createRot: () => {
      }, updateRot: () => {
      }, createHandle: (t3, e3, s2, i2, a2) => "l" === a2 || "r" === a2 ? t3.circle(8).css({ "stroke-width": 1, stroke: "#333", fill: "#fff" }) : t3.circle(0), updateHandle: (t3, e3) => t3.center(e3[0], e3[1]) }).resize().on("resize", () => {
        const e3 = t2.interact.zoomEnabled ? t2.config.chart.zoom.type : t2.config.chart.selection.type;
        this.handleMouseUp({ zoomtype: e3, isResized: true });
      }));
    }
    preselectedSelection() {
      const t2 = this.w, e2 = this.xyRatios;
      if (!t2.interact.zoomEnabled) {
        if (void 0 !== t2.interact.selection && null !== t2.interact.selection) this.drawSelectionRect(l(n({}, t2.interact.selection), { translateX: t2.layout.translateX, translateY: t2.layout.translateY }));
        else if (void 0 !== t2.config.chart.selection.xaxis.min && void 0 !== t2.config.chart.selection.xaxis.max) {
          let s2 = (t2.config.chart.selection.xaxis.min - t2.globals.minX) / e2.xRatio, i2 = t2.layout.gridWidth - (t2.globals.maxX - t2.config.chart.selection.xaxis.max) / e2.xRatio - s2;
          t2.axisFlags.isRangeBar && (s2 = (t2.config.chart.selection.xaxis.min - t2.globals.yAxisScale[0].niceMin) / e2.invertedYRatio, i2 = (t2.config.chart.selection.xaxis.max - t2.config.chart.selection.xaxis.min) / e2.invertedYRatio);
          const a2 = { x: s2, y: 0, width: i2, height: t2.layout.gridHeight, translateX: t2.layout.translateX, translateY: t2.layout.translateY, selectionEnabled: true };
          this.drawSelectionRect(a2), this.makeSelectionRectDraggable(), "function" == typeof t2.config.chart.events.selection && t2.config.chart.events.selection(this.ctx, { xaxis: { min: t2.config.chart.selection.xaxis.min, max: t2.config.chart.selection.xaxis.max }, yaxis: {} });
        }
      }
    }
    drawSelectionRect({ x: t2, y: e2, width: s2, height: i2, translateX: a2 = 0, translateY: o2 = 0 }) {
      const r2 = this.w, n2 = this.zoomRect, l2 = this.selectionRect;
      if (this.dragged || null !== r2.interact.selection) {
        const h2 = { transform: "translate(" + a2 + ", " + o2 + ")" };
        r2.interact.zoomEnabled && this.dragged && (s2 < 0 && (s2 = 1), n2.attr({ x: t2, y: e2, width: s2, height: i2, fill: r2.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": r2.config.chart.zoom.zoomedArea.fill.opacity, stroke: r2.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": r2.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": r2.config.chart.zoom.zoomedArea.stroke.opacity }), X.setAttrs(n2.node, h2)), r2.interact.selectionEnabled && (l2.attr({ x: t2, y: e2, width: s2 > 0 ? s2 : 0, height: i2 > 0 ? i2 : 0, fill: r2.config.chart.selection.fill.color, "fill-opacity": r2.config.chart.selection.fill.opacity, stroke: r2.config.chart.selection.stroke.color, "stroke-width": r2.config.chart.selection.stroke.width, "stroke-dasharray": r2.config.chart.selection.stroke.dashArray, "stroke-opacity": r2.config.chart.selection.stroke.opacity }), X.setAttrs(l2.node, h2));
      }
    }
    hideSelectionRect(t2) {
      t2 && t2.attr({ x: 0, y: 0, width: 0, height: 0 });
    }
    selectionDrawing({ context: t2, zoomtype: e2 }) {
      const s2 = this.w, i2 = t2, a2 = this.gridRect.getBoundingClientRect(), o2 = i2.startX - 1, r2 = i2.startY;
      let h2 = false, c2 = false;
      const d2 = i2.clientX - a2.left - s2.globals.barPadForNumericAxis, g2 = i2.clientY - a2.top;
      let p2 = d2 - o2, x2 = g2 - r2, u2 = { translateX: s2.layout.translateX, translateY: s2.layout.translateY };
      return Math.abs(p2 + o2) > s2.layout.gridWidth ? p2 = s2.layout.gridWidth - o2 : d2 < 0 && (p2 = o2), o2 > d2 && (h2 = true, p2 = Math.abs(p2)), r2 > g2 && (c2 = true, x2 = Math.abs(x2)), u2 = "x" === e2 ? { x: h2 ? o2 - p2 : o2, y: 0, width: p2, height: s2.layout.gridHeight } : "y" === e2 ? { x: 0, y: c2 ? r2 - x2 : r2, width: s2.layout.gridWidth, height: x2 } : { x: h2 ? o2 - p2 : o2, y: c2 ? r2 - x2 : r2, width: p2, height: x2 }, u2 = l(n({}, u2), { translateX: s2.layout.translateX, translateY: s2.layout.translateY }), i2.drawSelectionRect(u2), i2.selectionDragging("resizing"), u2;
    }
    selectionDragging(t2, e2) {
      const s2 = this.w;
      if (!e2) return;
      e2.preventDefault();
      const { handler: i2, box: a2 } = e2.detail;
      let { x: o2, y: r2 } = a2;
      o2 < this.constraints.x && (o2 = this.constraints.x), r2 < this.constraints.y && (r2 = this.constraints.y), a2.x2 > this.constraints.x2 && (o2 = this.constraints.x2 - a2.w), a2.y2 > this.constraints.y2 && (r2 = this.constraints.y2 - a2.h), i2.move(o2, r2);
      const n2 = this.xyRatios, l2 = this.selectionRect;
      let h2 = 0;
      "resizing" === t2 && (h2 = 30);
      const c2 = (t3) => parseFloat(l2.node.getAttribute(t3)), d2 = { x: c2("x"), y: c2("y"), width: c2("width"), height: c2("height") };
      s2.interact.selection = d2, "function" == typeof s2.config.chart.events.selection && s2.interact.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(() => {
        const t3 = this.gridRect.getBoundingClientRect(), e3 = l2.node.getBoundingClientRect();
        let i3, a3, o3, r3;
        s2.axisFlags.isRangeBar ? (i3 = s2.globals.yAxisScale[0].niceMin + (e3.left - t3.left) * n2.invertedYRatio, a3 = s2.globals.yAxisScale[0].niceMin + (e3.right - t3.left) * n2.invertedYRatio, o3 = 0, r3 = 1) : (i3 = s2.globals.xAxisScale.niceMin + (e3.left - t3.left) * n2.xRatio, a3 = s2.globals.xAxisScale.niceMin + (e3.right - t3.left) * n2.xRatio, o3 = s2.globals.yAxisScale[0].niceMin + (t3.bottom - e3.bottom) * n2.yRatio[0], r3 = s2.globals.yAxisScale[0].niceMax - (e3.top - t3.top) * n2.yRatio[0]);
        const h3 = { xaxis: { min: i3, max: a3 }, yaxis: { min: o3, max: r3 } };
        s2.config.chart.events.selection(this.ctx, h3), s2.config.chart.brush.enabled && void 0 !== s2.config.chart.events.brushScrolled && s2.config.chart.events.brushScrolled(this.ctx, h3);
      }, h2));
    }
    selectionDrawn({ context: t2, zoomtype: e2 }) {
      const s2 = this.w, i2 = t2, a2 = this.xyRatios, o2 = this.ctx.toolbar, r2 = s2.interact.zoomEnabled ? i2.zoomRect.node.getBoundingClientRect() : i2.selectionRect.node.getBoundingClientRect(), n2 = i2.gridRect.getBoundingClientRect(), l2 = r2.left - n2.left - s2.globals.barPadForNumericAxis, h2 = r2.right - n2.left - s2.globals.barPadForNumericAxis, c2 = r2.top - n2.top, d2 = r2.bottom - n2.top;
      let g2, p2;
      s2.axisFlags.isRangeBar ? (g2 = s2.globals.yAxisScale[0].niceMin + l2 * a2.invertedYRatio, p2 = s2.globals.yAxisScale[0].niceMin + h2 * a2.invertedYRatio) : (g2 = s2.globals.xAxisScale.niceMin + l2 * a2.xRatio, p2 = s2.globals.xAxisScale.niceMin + h2 * a2.xRatio);
      const x2 = [], u2 = [];
      if (s2.config.yaxis.forEach((t3, e3) => {
        const i3 = s2.globals.seriesYAxisMap[e3][0], o3 = s2.globals.yAxisScale[e3].niceMax - a2.yRatio[i3] * c2, r3 = s2.globals.yAxisScale[e3].niceMax - a2.yRatio[i3] * d2;
        x2.push(o3), u2.push(r3);
      }), i2.dragged && (i2.dragX > 10 || i2.dragY > 10) && g2 !== p2) {
        if (s2.interact.zoomEnabled) {
          let t3 = b.clone(s2.globals.initialConfig.yaxis), a3 = b.clone(s2.globals.initialConfig.xaxis);
          if (s2.interact.zoomed = true, s2.config.xaxis.convertedCatToNumeric && (g2 = Math.floor(g2), p2 = Math.floor(p2), g2 < 1 && (g2 = 1, p2 = s2.globals.dataPoints), p2 - g2 < 2 && (p2 = g2 + 1)), "xy" !== e2 && "x" !== e2 || (a3 = { min: g2, max: p2 }), "xy" !== e2 && "y" !== e2 || t3.forEach((e3, s3) => {
            t3[s3].min = u2[s3], t3[s3].max = x2[s3];
          }), o2) {
            const e3 = o2.getBeforeZoomRange(a3, t3);
            e3 && (a3 = e3.xaxis ? e3.xaxis : a3, t3 = e3.yaxis ? e3.yaxis : t3);
          }
          const r3 = { xaxis: a3 };
          s2.config.chart.group || (r3.yaxis = t3), i2.ctx.updateHelpers._updateOptions(r3, false, i2.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof s2.config.chart.events.zoomed && o2.zoomCallback(a3, t3);
        } else if (s2.interact.selectionEnabled) {
          let t3 = null, a3 = null;
          a3 = { min: g2, max: p2 }, "xy" !== e2 && "y" !== e2 || (t3 = b.clone(s2.config.yaxis), t3.forEach((e3, s3) => {
            t3[s3].min = u2[s3], t3[s3].max = x2[s3];
          })), s2.interact.selection = i2.selection, "function" == typeof s2.config.chart.events.selection && s2.config.chart.events.selection(i2.ctx, { xaxis: a3, yaxis: t3 });
        }
      }
    }
    panDragging({ context: t2 }) {
      const e2 = this.w, s2 = t2;
      if (void 0 !== e2.interact.lastClientPosition.x) {
        const t3 = e2.interact.lastClientPosition.x - s2.clientX, i3 = e2.interact.lastClientPosition.y - s2.clientY;
        Math.abs(t3) > Math.abs(i3) && t3 > 0 ? this.moveDirection = "left" : Math.abs(t3) > Math.abs(i3) && t3 < 0 ? this.moveDirection = "right" : Math.abs(i3) > Math.abs(t3) && i3 > 0 ? this.moveDirection = "up" : Math.abs(i3) > Math.abs(t3) && i3 < 0 && (this.moveDirection = "down");
      }
      e2.interact.lastClientPosition = { x: s2.clientX, y: s2.clientY };
      const i2 = e2.axisFlags.isRangeBar ? e2.globals.minY : e2.globals.minX, a2 = e2.axisFlags.isRangeBar ? e2.globals.maxY : e2.globals.maxX;
      s2.panScrolled(i2, a2);
    }
    panScrolled(t2, e2) {
      const s2 = this.w, i2 = this.xyRatios, a2 = b.clone(s2.globals.initialConfig.yaxis);
      let o2 = i2.xRatio, r2 = s2.globals.minX, n2 = s2.globals.maxX;
      s2.axisFlags.isRangeBar && (o2 = i2.invertedYRatio, r2 = s2.globals.minY, n2 = s2.globals.maxY), "left" === this.moveDirection ? (t2 = r2 + s2.layout.gridWidth / 15 * o2, e2 = n2 + s2.layout.gridWidth / 15 * o2) : "right" === this.moveDirection && (t2 = r2 - s2.layout.gridWidth / 15 * o2, e2 = n2 - s2.layout.gridWidth / 15 * o2), s2.axisFlags.isRangeBar || (t2 < s2.globals.initialMinX || e2 > s2.globals.initialMaxX) && (t2 = r2, e2 = n2);
      const l2 = { xaxis: { min: t2, max: e2 } };
      s2.config.chart.group || (l2.yaxis = a2), this.updateScrolledChart(l2, t2, e2);
    }
    updateScrolledChart(t2, e2, s2) {
      const i2 = this.w;
      if (this.ctx.updateHelpers._updateOptions(t2, false, false), "function" == typeof i2.config.chart.events.scrolled) {
        const t3 = { xaxis: { min: e2, max: s2 } };
        i2.config.chart.events.scrolled(this.ctx, t3), this.ctx.events.fireEvent("scrolled", t3);
      }
    }
  } });
  let oe = class {
    constructor(t2) {
      this.w = t2.w, this.annoCtx = t2;
    }
    setOrientations(t2, e2 = null) {
      const s2 = this.w;
      if ("vertical" === t2.label.orientation) {
        const i2 = null !== e2 ? e2 : 0, a2 = s2.dom.baseEl.querySelector(`.apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='${i2}']`);
        if (null !== a2) {
          const e3 = a2.getBBox();
          a2.setAttribute("x", parseFloat(a2.getAttribute("x")) - e3.height + 4);
          const s3 = "top" === t2.label.position ? e3.width : -e3.width;
          a2.setAttribute("y", parseFloat(a2.getAttribute("y")) + s3);
          const { x: i3, y: o2 } = this.annoCtx.graphics.rotateAroundCenter(a2);
          a2.setAttribute("transform", `rotate(-90 ${i3} ${o2})`);
        }
      }
    }
    addBackgroundToAnno(t2, e2) {
      const s2 = this.w;
      if (!t2 || !e2.label.text || !String(e2.label.text).trim()) return null;
      const i2 = s2.dom.baseEl.querySelector(".apexcharts-grid"), a2 = i2.getBoundingClientRect(), o2 = i2.getBBox(), r2 = a2.width / o2.width || 1, n2 = t2.getBoundingClientRect();
      let { left: l2, right: h2, top: c2, bottom: d2 } = e2.label.style.padding;
      "vertical" === e2.label.orientation && ([c2, d2, l2, h2] = [l2, h2, c2, d2]);
      const g2 = (n2.left - a2.left) / r2 - l2, p2 = (n2.top - a2.top) / r2 - c2, x2 = this.annoCtx.graphics.drawRect(g2 - s2.globals.barPadForNumericAxis, p2, n2.width / r2 + l2 + h2, n2.height / r2 + c2 + d2, e2.label.borderRadius, e2.label.style.background, 1, e2.label.borderWidth, e2.label.borderColor, 0);
      return e2.id && x2.node.classList.add(e2.id), x2;
    }
    annotationsBackground() {
      const t2 = this.w, e2 = (e3, s2, i2) => {
        const a2 = t2.dom.baseEl.querySelector(`.apexcharts-${i2}-annotations .apexcharts-${i2}-annotation-label[rel='${s2}']`);
        if (a2) {
          const t3 = a2.parentNode, s3 = this.addBackgroundToAnno(a2, e3);
          s3 && (t3.insertBefore(s3.node, a2), e3.label.mouseEnter && s3.node.addEventListener("mouseenter", e3.label.mouseEnter.bind(this, e3)), e3.label.mouseLeave && s3.node.addEventListener("mouseleave", e3.label.mouseLeave.bind(this, e3)), e3.label.click && s3.node.addEventListener("click", e3.label.click.bind(this, e3)));
        }
      };
      t2.config.annotations.xaxis.forEach((t3, s2) => e2(t3, s2, "xaxis")), t2.config.annotations.yaxis.forEach((t3, s2) => e2(t3, s2, "yaxis")), t2.config.annotations.points.forEach((t3, s2) => e2(t3, s2, "point"));
    }
    getY1Y2(t2, e2) {
      var s2;
      const i2 = this.w, a2 = "y1" === t2 ? e2.y : e2.y2;
      let o2, r2 = false;
      if (this.annoCtx.invertAxis) {
        const t3 = i2.config.xaxis.convertedCatToNumeric ? i2.labelData.categoryLabels : i2.labelData.labels, s3 = t3.indexOf(a2), r3 = i2.dom.baseEl.querySelector(`.apexcharts-yaxis-texts-g text:nth-child(${s3 + 1})`);
        o2 = r3 ? parseFloat(r3.getAttribute("y")) : (i2.layout.gridHeight / t3.length - 1) * (s3 + 1) - i2.globals.barHeight, void 0 !== e2.seriesIndex && i2.globals.barHeight && (o2 -= i2.globals.barHeight / 2 * (i2.seriesData.series.length - 1) - i2.globals.barHeight * e2.seriesIndex);
      } else {
        const t3 = i2.globals.seriesYAxisMap[e2.yAxisIndex][0], n2 = i2.config.yaxis[e2.yAxisIndex].logarithmic ? new I(this.w).getLogVal(i2.config.yaxis[e2.yAxisIndex].logBase, a2, t3) / i2.globals.yLogRatio[t3] : (a2 - i2.globals.minYArr[t3]) / (i2.globals.yRange[t3] / i2.layout.gridHeight);
        o2 = i2.layout.gridHeight - Math.min(Math.max(n2, 0), i2.layout.gridHeight), r2 = n2 > i2.layout.gridHeight || n2 < 0, !e2.marker || void 0 !== e2.y && null !== e2.y || (o2 = 0), (null == (s2 = i2.config.yaxis[e2.yAxisIndex]) ? void 0 : s2.reversed) && (o2 = n2);
      }
      return "string" == typeof a2 && a2.includes("px") && (o2 = parseFloat(a2)), { yP: o2, clipped: r2 };
    }
    getX1X2(t2, e2) {
      const s2 = this.w, i2 = "x1" === t2 ? e2.x : e2.x2, a2 = this.annoCtx.invertAxis ? s2.globals.minY : s2.globals.minX, o2 = this.annoCtx.invertAxis ? s2.globals.maxY : s2.globals.maxX, r2 = this.annoCtx.invertAxis ? s2.globals.yRange[0] : s2.globals.xRange;
      let n2 = false, l2 = this.annoCtx.inversedReversedAxis ? (o2 - i2) / (r2 / s2.layout.gridWidth) : (i2 - a2) / (r2 / s2.layout.gridWidth);
      return "category" !== s2.config.xaxis.type && !s2.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || s2.axisFlags.dataFormatXNumeric || s2.config.chart.sparkline.enabled || (l2 = this.getStringX(i2)), "string" == typeof i2 && i2.includes("px") && (l2 = parseFloat(i2)), null == i2 && e2.marker && (l2 = s2.layout.gridWidth), void 0 !== e2.seriesIndex && s2.globals.barWidth && !this.annoCtx.invertAxis && (l2 -= s2.globals.barWidth / 2 * (s2.seriesData.series.length - 1) - s2.globals.barWidth * e2.seriesIndex), "number" != typeof l2 && (l2 = 0, n2 = true), parseFloat(l2.toFixed(10)) > parseFloat(s2.layout.gridWidth.toFixed(10)) ? (l2 = s2.layout.gridWidth, n2 = true) : l2 < 0 && (l2 = 0, n2 = true), { x: l2, clipped: n2 };
    }
    getStringX(t2) {
      const e2 = this.w;
      let s2 = t2;
      e2.config.xaxis.convertedCatToNumeric && e2.labelData.categoryLabels.length && (t2 = e2.labelData.categoryLabels.indexOf(t2) + 1);
      const i2 = e2.labelData.labels.map((t3) => Array.isArray(t3) ? t3.join(" ") : t3).indexOf(t2), a2 = e2.dom.baseEl.querySelector(`.apexcharts-xaxis-texts-g text:nth-child(${i2 + 1})`);
      return a2 && (s2 = parseFloat(a2.getAttribute("x"))), s2;
    }
  };
  class re {
    constructor(t2) {
      this.w = t2.w, this.annoCtx = t2, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new oe(this.annoCtx);
    }
    addXaxisAnnotation(t2, e2, s2) {
      const i2 = this.w, a2 = this.helpers.getX1X2("x1", t2);
      let o2 = a2.x;
      const r2 = a2.clipped;
      let n2, l2 = true;
      const h2 = t2.label.text, c2 = t2.strokeDashArray;
      if (b.isNumber(o2)) {
        if (null === t2.x2 || void 0 === t2.x2) {
          if (!r2) {
            const s3 = this.annoCtx.graphics.drawLine(o2 + t2.offsetX, 0 + t2.offsetY, o2 + t2.offsetX, i2.layout.gridHeight + t2.offsetY, t2.borderColor, c2, t2.borderWidth);
            e2.appendChild(s3.node), t2.id && s3.node.classList.add(t2.id);
          }
        } else {
          const s3 = this.helpers.getX1X2("x2", t2);
          if (n2 = s3.x, l2 = s3.clipped, n2 < o2) {
            const t3 = o2;
            o2 = n2, n2 = t3;
          }
          const a3 = this.annoCtx.graphics.drawRect(o2 + t2.offsetX, 0 + t2.offsetY, n2 - o2, i2.layout.gridHeight + t2.offsetY, 0, t2.fillColor, t2.opacity, 1, t2.borderColor, c2);
          a3.node.classList.add("apexcharts-annotation-rect"), a3.attr("clip-path", `url(#gridRectMask${i2.globals.cuid})`), e2.appendChild(a3.node), t2.id && a3.node.classList.add(t2.id);
        }
        if (!r2 || !l2) {
          const a3 = this.annoCtx.graphics.getTextRects(h2, parseFloat(t2.label.style.fontSize)), r3 = "top" === t2.label.position ? 4 : "center" === t2.label.position ? i2.layout.gridHeight / 2 + ("vertical" === t2.label.orientation ? a3.width / 2 : 0) : i2.layout.gridHeight, n3 = this.annoCtx.graphics.drawText({ x: o2 + t2.label.offsetX, y: r3 + t2.label.offsetY - ("vertical" === t2.label.orientation ? "top" === t2.label.position ? a3.width / 2 - 12 : -a3.width / 2 : 0), text: h2, textAnchor: t2.label.textAnchor, fontSize: t2.label.style.fontSize, fontFamily: t2.label.style.fontFamily, fontWeight: t2.label.style.fontWeight, foreColor: t2.label.style.color, cssClass: `apexcharts-xaxis-annotation-label ${t2.label.style.cssClass} ${t2.id ? t2.id : ""}` });
          n3.attr({ rel: s2 }), e2.appendChild(n3.node), this.annoCtx.helpers.setOrientations(t2, s2);
        }
      }
    }
    drawXAxisAnnotations() {
      const t2 = this.w, e2 = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
      return t2.config.annotations.xaxis.map((t3, s2) => {
        this.addXaxisAnnotation(t3, e2.node, s2);
      }), e2;
    }
  }
  class ne {
    constructor(t2) {
      this.w = t2.w, this.annoCtx = t2, this.helpers = new oe(this.annoCtx), this.axesUtils = new W(this.annoCtx.w, { theme: this.annoCtx.theme, timeScale: this.annoCtx.timeScale });
    }
    addYaxisAnnotation(t2, e2, s2) {
      const i2 = this.w, a2 = t2.strokeDashArray;
      let o2 = this.helpers.getY1Y2("y1", t2), r2 = o2.yP;
      const n2 = o2.clipped;
      let l2, h2 = true, c2 = false;
      const d2 = t2.label.text;
      if (null === t2.y2 || void 0 === t2.y2) {
        if (!n2) {
          c2 = true;
          const s3 = this.annoCtx.graphics.drawLine(0 + t2.offsetX, r2 + t2.offsetY, this._getYAxisAnnotationWidth(t2), r2 + t2.offsetY, t2.borderColor, a2, t2.borderWidth);
          e2.appendChild(s3.node), t2.id && s3.node.classList.add(t2.id);
        }
      } else {
        if (o2 = this.helpers.getY1Y2("y2", t2), l2 = o2.yP, h2 = o2.clipped, l2 > r2) {
          const t3 = r2;
          r2 = l2, l2 = t3;
        }
        if (!n2 || !h2) {
          c2 = true;
          const s3 = this.annoCtx.graphics.drawRect(0 + t2.offsetX, l2 + t2.offsetY, this._getYAxisAnnotationWidth(t2), r2 - l2, 0, t2.fillColor, t2.opacity, 1, t2.borderColor, a2);
          s3.node.classList.add("apexcharts-annotation-rect"), s3.attr("clip-path", `url(#gridRectMask${i2.globals.cuid})`), e2.appendChild(s3.node), t2.id && s3.node.classList.add(t2.id);
        }
      }
      if (c2) {
        const a3 = "right" === t2.label.position ? i2.layout.gridWidth : "center" === t2.label.position ? i2.layout.gridWidth / 2 : 0, o3 = this.annoCtx.graphics.drawText({ x: a3 + t2.label.offsetX, y: (null != l2 ? l2 : r2) + t2.label.offsetY - 3, text: d2, textAnchor: t2.label.textAnchor, fontSize: t2.label.style.fontSize, fontFamily: t2.label.style.fontFamily, fontWeight: t2.label.style.fontWeight, foreColor: t2.label.style.color, cssClass: `apexcharts-yaxis-annotation-label ${t2.label.style.cssClass} ${t2.id ? t2.id : ""}` });
        o3.attr({ rel: s2 }), e2.appendChild(o3.node);
      }
    }
    _getYAxisAnnotationWidth(t2) {
      const e2 = this.w;
      let s2 = e2.layout.gridWidth;
      return s2 = t2.width.indexOf("%") > -1 ? e2.layout.gridWidth * parseInt(t2.width, 10) / 100 : parseInt(t2.width, 10), s2 + t2.offsetX;
    }
    drawYAxisAnnotations() {
      const t2 = this.w, e2 = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
      return t2.config.annotations.yaxis.forEach((t3, s2) => {
        t3.yAxisIndex = this.axesUtils.translateYAxisIndex(t3.yAxisIndex), this.axesUtils.isYAxisHidden(t3.yAxisIndex) && this.axesUtils.yAxisAllSeriesCollapsed(t3.yAxisIndex) || this.addYaxisAnnotation(t3, e2.node, s2);
      }), e2;
    }
  }
  class le {
    constructor(t2) {
      this.w = t2.w, this.annoCtx = t2, this.helpers = new oe(this.annoCtx);
    }
    addPointAnnotation(t2, e2, s2) {
      if (this.w.globals.collapsedSeriesIndices.indexOf(t2.seriesIndex) > -1) return;
      let i2 = this.helpers.getX1X2("x1", t2);
      const a2 = i2.x, o2 = i2.clipped;
      i2 = this.helpers.getY1Y2("y1", t2);
      const r2 = i2.yP, n2 = i2.clipped;
      if (b.isNumber(a2) && !n2 && !o2) {
        const i3 = { pSize: t2.marker.size, pointStrokeWidth: t2.marker.strokeWidth, pointFillColor: t2.marker.fillColor, pointStrokeColor: t2.marker.strokeColor, shape: t2.marker.shape, pRadius: t2.marker.radius, class: `apexcharts-point-annotation-marker ${t2.marker.cssClass} ${t2.id ? t2.id : ""}` };
        let o3 = this.annoCtx.graphics.drawMarker(a2 + t2.marker.offsetX, r2 + t2.marker.offsetY, i3);
        e2.appendChild(o3.node);
        const n3 = t2.label.text ? t2.label.text : "", l2 = this.annoCtx.graphics.drawText({ x: a2 + t2.label.offsetX, y: r2 + t2.label.offsetY - t2.marker.size - parseFloat(t2.label.style.fontSize) / 1.6, text: n3, textAnchor: t2.label.textAnchor, fontSize: t2.label.style.fontSize, fontFamily: t2.label.style.fontFamily, fontWeight: t2.label.style.fontWeight, foreColor: t2.label.style.color, cssClass: `apexcharts-point-annotation-label ${t2.label.style.cssClass} ${t2.id ? t2.id : ""}` });
        if (l2.attr({ rel: s2 }), e2.appendChild(l2.node), t2.customSVG.SVG) {
          const s3 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t2.customSVG.cssClass });
          s3.attr({ transform: `translate(${a2 + t2.customSVG.offsetX}, ${r2 + t2.customSVG.offsetY})` }), s3.node.innerHTML = t2.customSVG.SVG, e2.appendChild(s3.node);
        }
        if (t2.image.path) {
          const e3 = t2.image.width ? t2.image.width : 20, s3 = t2.image.height ? t2.image.height : 20;
          o3 = this.annoCtx.addImage({ x: a2 + t2.image.offsetX - e3 / 2, y: r2 + t2.image.offsetY - s3 / 2, width: e3, height: s3, path: t2.image.path, appendTo: ".apexcharts-point-annotations" });
        }
        t2.mouseEnter && o3.node.addEventListener("mouseenter", t2.mouseEnter.bind(this, t2)), t2.mouseLeave && o3.node.addEventListener("mouseleave", t2.mouseLeave.bind(this, t2)), t2.click && o3.node.addEventListener("click", t2.click.bind(this, t2));
      }
    }
    drawPointAnnotations() {
      const t2 = this.w, e2 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
      return t2.config.annotations.points.map((t3, s2) => {
        this.addPointAnnotation(t3, e2.node, s2);
      }), e2;
    }
  }
  te.registerFeatures({ annotations: class {
    constructor(t2, { theme: e2 = null, timeScale: s2 = null } = {}) {
      this.w = t2, this.theme = e2, this.timeScale = s2, this.graphics = new X(this.w), this.w.globals.isBarHorizontal && (this.invertAxis = true), this.helpers = new oe(this), this.xAxisAnnotations = new re(this), this.yAxisAnnotations = new ne(this), this.pointsAnnotations = new le(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = true), this.xDivision = this.w.layout.gridWidth / this.w.globals.dataPoints;
    }
    drawAxesAnnotations() {
      const t2 = this.w;
      if (t2.globals.axisCharts && t2.globals.dataPoints) {
        const e2 = this.yAxisAnnotations.drawYAxisAnnotations(), s2 = this.xAxisAnnotations.drawXAxisAnnotations(), i2 = this.pointsAnnotations.drawPointAnnotations(), a2 = t2.config.chart.animations.enabled, o2 = [e2, s2, i2], r2 = [s2.node, e2.node, i2.node];
        for (let e3 = 0; e3 < 3; e3++) t2.dom.elGraphical.add(o2[e3]), !a2 || t2.globals.resized || t2.globals.dataChanged || "scatter" !== t2.config.chart.type && "bubble" !== t2.config.chart.type && t2.globals.dataPoints > 1 && r2[e3].classList.add("apexcharts-element-hidden"), t2.globals.delayedElements.push({ el: r2[e3], index: 0 });
        this.helpers.annotationsBackground();
      }
    }
    drawImageAnnos() {
      this.w.config.annotations.images.map((t2, e2) => {
        this.addImage(t2, e2);
      });
    }
    drawTextAnnos() {
      this.w.config.annotations.texts.map((t2, e2) => {
        this.addText(t2, e2);
      });
    }
    addXaxisAnnotation(t2, e2, s2) {
      this.xAxisAnnotations.addXaxisAnnotation(t2, e2, s2);
    }
    addYaxisAnnotation(t2, e2, s2) {
      this.yAxisAnnotations.addYaxisAnnotation(t2, e2, s2);
    }
    addPointAnnotation(t2, e2, s2) {
      this.pointsAnnotations.addPointAnnotation(t2, e2, s2);
    }
    addText(t2) {
      const { x: e2, y: s2, text: i2, textAnchor: a2, foreColor: o2, fontSize: r2, fontFamily: n2, fontWeight: l2, cssClass: h2, backgroundColor: c2, borderWidth: d2, strokeDashArray: g2, borderRadius: p2, borderColor: x2, appendTo: u2 = ".apexcharts-svg", paddingLeft: f2 = 4, paddingRight: b2 = 4, paddingBottom: m2 = 2, paddingTop: y2 = 2 } = t2, w2 = this.w, v2 = this.graphics.drawText({ x: e2, y: s2, text: i2, textAnchor: a2 || "start", fontSize: r2 || "12px", fontWeight: l2 || "regular", fontFamily: n2 || w2.config.chart.fontFamily, foreColor: o2 || w2.config.chart.foreColor, cssClass: h2 }), A2 = w2.dom.baseEl.querySelector(u2);
      A2 && A2.appendChild(v2.node);
      const C2 = v2.bbox();
      if (i2) {
        const t3 = this.graphics.drawRect(C2.x - f2, C2.y - y2, C2.width + f2 + b2, C2.height + m2 + y2, p2, c2 || "transparent", 1, d2, x2, g2);
        A2.insertBefore(t3.node, v2.node);
      }
    }
    addImage(t2) {
      const e2 = this.w, { path: s2, x: i2 = 0, y: a2 = 0, width: o2 = 20, height: r2 = 20, appendTo: n2 = ".apexcharts-svg" } = t2, l2 = e2.dom.Paper.image(s2);
      l2.size(o2, r2).move(i2, a2);
      const h2 = e2.dom.baseEl.querySelector(n2);
      return h2 && h2.appendChild(l2.node), l2;
    }
    addXaxisAnnotationExternal(t2, e2, s2) {
      return this.addAnnotationExternal({ params: t2, pushToMemory: e2, context: s2, type: "xaxis", contextMethod: s2.addXaxisAnnotation }), s2;
    }
    addYaxisAnnotationExternal(t2, e2, s2) {
      return this.addAnnotationExternal({ params: t2, pushToMemory: e2, context: s2, type: "yaxis", contextMethod: s2.addYaxisAnnotation }), s2;
    }
    addPointAnnotationExternal(t2, e2, s2) {
      return void 0 === this.invertAxis && (this.invertAxis = s2.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t2, pushToMemory: e2, context: s2, type: "point", contextMethod: s2.addPointAnnotation }), s2;
    }
    addAnnotationExternal({ params: t2, pushToMemory: e2, context: s2, type: i2, contextMethod: a2 }) {
      const o2 = s2, r2 = o2.w, n2 = r2.dom.baseEl.querySelector(`.apexcharts-${i2}-annotations`), l2 = n2.childNodes.length + 1, h2 = new S(), c2 = Object.assign({}, "xaxis" === i2 ? h2.xAxisAnnotation : "yaxis" === i2 ? h2.yAxisAnnotation : h2.pointAnnotation), d2 = b.extend(c2, t2);
      switch (i2) {
        case "xaxis":
          this.addXaxisAnnotation(d2, n2, l2);
          break;
        case "yaxis":
          this.addYaxisAnnotation(d2, n2, l2);
          break;
        case "point":
          this.addPointAnnotation(d2, n2, l2);
      }
      const g2 = r2.dom.baseEl.querySelector(`.apexcharts-${i2}-annotations .apexcharts-${i2}-annotation-label[rel='${l2}']`), p2 = this.helpers.addBackgroundToAnno(g2, d2);
      return p2 && n2.insertBefore(p2.node, g2), e2 && r2.globals.memory.methodsToExec.push({ context: o2, id: d2.id ? d2.id : b.randomId(), method: a2, label: "addAnnotation", params: t2 }), s2;
    }
    clearAnnotations(t2) {
      const e2 = t2.w;
      let s2 = e2.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
      for (let t3 = e2.globals.memory.methodsToExec.length - 1; t3 >= 0; t3--) "addText" !== e2.globals.memory.methodsToExec[t3].label && "addAnnotation" !== e2.globals.memory.methodsToExec[t3].label || e2.globals.memory.methodsToExec.splice(t3, 1);
      s2 = Array.from(s2), Array.prototype.forEach.call(s2, (t3) => {
        for (; t3.firstChild; ) t3.removeChild(t3.firstChild);
      });
    }
    removeAnnotation(t2, e2) {
      const s2 = t2.w, i2 = s2.dom.baseEl.querySelectorAll(`.${e2}`);
      i2 && (s2.globals.memory.methodsToExec.map((t3, i3) => {
        t3.id === e2 && s2.globals.memory.methodsToExec.splice(i3, 1);
      }), Object.keys(s2.config.annotations).forEach((t3) => {
        const i3 = s2.config.annotations[t3];
        Array.isArray(i3) && (s2.config.annotations[t3] = i3.filter((t4) => t4.id !== e2));
      }), Array.prototype.forEach.call(i2, (t3) => {
        t3.parentElement.removeChild(t3);
      }));
    }
  } });
  te.registerFeatures({ keyboardNavigation: class {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.seriesIndex = 0, this.dataPointIndex = 0, this.active = false, this._focusedEl = null, this._hoveredBarEl = null, this._enlargedScatterMarker = null, this._onKeyDown = this._onKeyDown.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onLegendClick = this._onLegendClick.bind(this);
    }
    init() {
      const t2 = this.w.dom.Paper.node;
      t2 && (t2.setAttribute("tabindex", "0"), t2.addEventListener("focus", this._onFocus), t2.addEventListener("blur", this._onBlur), t2.addEventListener("keydown", this._onKeyDown, { passive: false }), this.ctx.events.addEventListener("legendClick", this._onLegendClick));
    }
    destroy() {
      const t2 = this.w, e2 = t2.dom.Paper && t2.dom.Paper.node;
      e2 && (e2.removeEventListener("focus", this._onFocus), e2.removeEventListener("blur", this._onBlur), e2.removeEventListener("keydown", this._onKeyDown), this.ctx.events.removeEventListener("legendClick", this._onLegendClick));
    }
    handleKey(t2) {
    }
    _onFocus() {
      this._isNavEnabled() && (this.active = true, this._clampCursor(), this._snapToVisibleRange(), this._showCurrentPoint());
    }
    _onBlur() {
      this.active = false, this._hideFocus();
    }
    _onLegendClick() {
      this.active && (this.active = false, this._hideFocus());
    }
    _onKeyDown(t2) {
      if (this._isNavEnabled() && this.active) switch (t2.key) {
        case "ArrowRight":
          t2.preventDefault(), this._move(0, 1);
          break;
        case "ArrowLeft":
          t2.preventDefault(), this._move(0, -1);
          break;
        case "ArrowUp":
          t2.preventDefault(), this._move(-1, 0);
          break;
        case "ArrowDown":
          t2.preventDefault(), this._move(1, 0);
          break;
        case "Home":
          t2.preventDefault(), this.dataPointIndex = 0, this._skipNullForward(), this._showCurrentPoint();
          break;
        case "End":
          t2.preventDefault(), this.dataPointIndex = this._getDataPointCount(this.seriesIndex) - 1, this._skipNullBackward(), this._showCurrentPoint();
          break;
        case "Enter":
        case " ":
          t2.preventDefault(), this._fireClick();
          break;
        case "Escape":
          t2.preventDefault(), this.active = false, this._hideFocus();
      }
    }
    _move(t2, e2) {
      const s2 = this.w, i2 = s2.config.chart.accessibility.keyboard.navigation.wrapAround;
      if (0 !== t2) {
        const e3 = this.w.globals.tooltip;
        if (e3 && e3.tConfig && e3.tConfig.shared) {
          const t3 = this.dataPointIndex;
          if (e3.tooltipUtil && e3.tooltipUtil.isXoverlap(t3) && e3.tooltipUtil.isInitialSeriesSameLen()) return;
        }
        const a2 = this._getSeriesCount();
        let o2 = this.seriesIndex + t2, r2 = 0;
        for (; r2 < a2 && (o2 < 0 && (o2 = i2 ? a2 - 1 : 0), o2 >= a2 && (o2 = i2 ? 0 : a2 - 1), s2.globals.collapsedSeriesIndices.includes(o2)); ) o2 += t2, r2++;
        this.seriesIndex = o2;
        const n2 = this._getDataPointCount(o2);
        this.dataPointIndex >= n2 && (this.dataPointIndex = n2 - 1);
      }
      if (0 !== e2) {
        const t3 = this._getDataPointCount(this.seriesIndex);
        let s3 = this.dataPointIndex + e2;
        s3 < 0 && (s3 = i2 ? t3 - 1 : 0), s3 >= t3 && (s3 = i2 ? 0 : t3 - 1), this.dataPointIndex = s3, e2 > 0 ? this._skipNullForward() : this._skipNullBackward(), this._isDataPointVisible(this.seriesIndex, this.dataPointIndex) || this._snapToVisibleRangeInDirection(e2);
      }
      this._showCurrentPoint();
    }
    _skipNullForward() {
      const t2 = this.w, e2 = this.seriesIndex, s2 = this._getDataPointCount(e2);
      let i2 = this.dataPointIndex, a2 = 0;
      if (Array.isArray(t2.seriesData.series[e2])) {
        for (; a2 < s2 && null === t2.seriesData.series[e2][i2]; ) i2 = (i2 + 1) % s2, a2++;
        this.dataPointIndex = i2;
      }
    }
    _skipNullBackward() {
      const t2 = this.w, e2 = this.seriesIndex, s2 = this._getDataPointCount(e2);
      let i2 = this.dataPointIndex, a2 = 0;
      if (Array.isArray(t2.seriesData.series[e2])) {
        for (; a2 < s2 && null === t2.seriesData.series[e2][i2]; ) i2 = (i2 - 1 + s2) % s2, a2++;
        this.dataPointIndex = i2;
      }
    }
    _showCurrentPoint() {
      const { seriesIndex: t2, dataPointIndex: e2 } = this, s2 = this.w, i2 = s2.globals.tooltip;
      i2 && i2.ttItems && (s2.interact.capturedSeriesIndex = t2, s2.interact.capturedDataPointIndex = e2, this._applyFocusClass(t2, e2), this._showTooltip(t2, e2, i2));
    }
    _hideFocus() {
      const t2 = this.w, e2 = t2.globals.tooltip;
      if (this._removeFocusClass(), this._leaveHoveredBar(), !e2) return;
      e2.marker && e2.marker.resetPointsSize(), this._enlargedScatterMarker = null;
      const s2 = e2.getElTooltip();
      s2 && (s2.classList.remove("apexcharts-active"), t2.config.chart.accessibility.enabled && t2.config.chart.accessibility.announcements.enabled && s2.setAttribute("aria-hidden", "true")), t2.dom.baseEl.classList.remove("apexcharts-tooltip-active");
      const i2 = e2.getElXCrosshairs();
      i2 && i2.classList.remove("apexcharts-active");
    }
    _showTooltip(t2, e2, s2) {
      const i2 = this.w, a2 = i2.config.chart.type, o2 = s2.getElTooltip();
      if (!o2) return;
      const r2 = s2.getCachedDimensions();
      s2.tooltipRect = { x: 0, y: 0, ttWidth: r2.ttWidth || 0, ttHeight: r2.ttHeight || 0 }, this._setSyntheticEvent(t2, e2, s2), i2.dom.baseEl.classList.add("apexcharts-tooltip-active"), o2.classList.add("apexcharts-active"), i2.config.chart.accessibility.enabled && i2.config.chart.accessibility.announcements.enabled && o2.removeAttribute("aria-hidden"), "pie" === a2 || "donut" === a2 || "polarArea" === a2 ? this._showTooltipNonAxis(t2, e2, s2, o2) : "radialBar" === a2 ? this._showTooltipRadialBar(t2, e2, s2, o2) : "heatmap" === a2 || "treemap" === a2 ? this._showTooltipHeatTree(t2, e2, s2, o2, a2) : "bar" === a2 || "candlestick" === a2 || "boxPlot" === a2 || "rangeBar" === a2 ? this._showTooltipBar(t2, e2, s2) : this._showTooltipAxisLine(t2, e2, s2);
    }
    _setSyntheticEvent(t2, e2, s2) {
      const i2 = this.w, a2 = i2.config.chart.type;
      let o2 = 0, r2 = 0;
      const n2 = this._getFocusableElement(t2, e2);
      if (n2) {
        const t3 = n2.getBoundingClientRect();
        o2 = t3.left + t3.width / 2, r2 = t3.top + t3.height / 2;
      } else if (i2.globals.pointsArray && i2.globals.pointsArray[t2] && i2.globals.pointsArray[t2][e2]) {
        const a3 = i2.globals.pointsArray[t2][e2], n3 = s2.getElGrid && s2.getElGrid();
        if (n3) {
          const t3 = n3.getBoundingClientRect();
          o2 = t3.left + (a3[0] || 0), r2 = t3.top + (a3[1] || 0);
        }
      } else {
        const t3 = i2.dom.Paper && i2.dom.Paper.node;
        if (t3) {
          const e3 = t3.getBoundingClientRect();
          o2 = e3.left + e3.width / 2, r2 = e3.top + e3.height / 2;
        }
      }
      if (("line" === a2 || "area" === a2 || "rangeArea" === a2 || "scatter" === a2 || "bubble" === a2 || "radar" === a2) && i2.globals.pointsArray && i2.globals.pointsArray[t2] && i2.globals.pointsArray[t2][e2]) {
        const a3 = i2.globals.pointsArray[t2][e2], n3 = s2.getElGrid && s2.getElGrid();
        if (n3) {
          const t3 = n3.getBoundingClientRect();
          o2 = t3.left + (a3[0] || 0), r2 = t3.top + (a3[1] || 0);
        }
      }
      s2.e = { type: "mousemove", clientX: o2, clientY: r2 };
    }
    _showTooltipBar(t2, e2, s2) {
      var i2, a2, o2, r2;
      const h2 = this.w, c2 = s2.tConfig.shared && (s2.tooltipUtil.isXoverlap(e2) || h2.globals.isBarHorizontal) && s2.tooltipUtil.isInitialSeriesSameLen(), d2 = null == (r2 = null == (o2 = null == (a2 = null == (i2 = h2.rangeData.seriesRange) ? void 0 : i2[t2]) ? void 0 : a2[e2]) ? void 0 : o2.y) ? void 0 : r2[0];
      s2.tooltipLabels.drawSeriesTexts(l(n(n({ ttItems: s2.ttItems, i: t2, j: e2 }, void 0 !== (null == d2 ? void 0 : d2.y1) && { y1: d2.y1 }), void 0 !== (null == d2 ? void 0 : d2.y2) && { y2: d2.y2 }), { shared: c2 }));
      const g2 = `.apexcharts-series[data\\:realIndex='${t2}']`, p2 = h2.dom.Paper.findOne(`${g2} path[j='${e2}'], ${g2} circle[j='${e2}'], ${g2} rect[j='${e2}']`);
      if (p2) {
        this._leaveHoveredBar();
        new X(this.w, this.ctx).pathMouseEnter(p2, null), this._hoveredBarEl = p2;
      }
      if (h2.globals.isBarHorizontal) {
        const t3 = p2 && p2.node;
        if (t3) {
          const e3 = h2.dom.elWrap.getBoundingClientRect(), i3 = t3.getBoundingClientRect(), a3 = i3.left - e3.left, o3 = i3.top - e3.top, r3 = i3.height, n2 = i3.width, l2 = s2.tooltipRect.ttWidth || 0, c3 = o3 + r3 / 2 - (s2.tooltipRect.ttHeight || 0) / 2;
          let d3 = a3 + n2;
          a3 < (s2.xyRatios && null != s2.xyRatios.baseLineInvertedY ? s2.xyRatios.baseLineInvertedY : e3.width / 2) && (d3 = a3 - l2);
          const g3 = s2.getElTooltip();
          g3 && (g3.style.left = d3 + "px", g3.style.top = c3 + "px");
        }
      } else s2.tooltipPosition.moveStickyTooltipOverBars(e2, t2);
    }
    _showTooltipAxisLine(t2, e2, s2) {
      const i2 = this.w, a2 = i2.config.chart.type, o2 = s2.tConfig.shared && s2.tooltipUtil.isXoverlap(e2) && s2.tooltipUtil.isInitialSeriesSameLen();
      s2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: t2, j: e2, shared: o2 });
      const r2 = "scatter" === a2 || "bubble" === a2, n2 = i2.globals.markers.largestSize > 0;
      r2 ? this._showScatterBubblePoint(t2, e2, s2) : n2 ? o2 ? s2.marker.enlargePoints(e2) : s2.tooltipPosition.moveDynamicPointOnHover(e2, t2) : o2 ? s2.tooltipPosition.moveDynamicPointsOnHover(e2) : s2.tooltipPosition.moveDynamicPointOnHover(e2, t2);
    }
    _showScatterBubblePoint(t2, e2, s2) {
      const i2 = this.w.dom.baseEl;
      this._enlargedScatterMarker && (s2.marker.oldPointSize(this._enlargedScatterMarker), this._enlargedScatterMarker = null);
      const a2 = i2.querySelector(`.apexcharts-series[data\\:realIndex='${t2}']`);
      if (!a2) return;
      const o2 = a2.querySelector(`.apexcharts-marker[rel='${e2}']`);
      o2 && (s2.marker.enlargeCurrentPoint(e2, o2), this._enlargedScatterMarker = o2);
    }
    _showTooltipNonAxis(t2, e2, s2, i2) {
      const a2 = this.w;
      s2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: e2, shared: false });
      const o2 = i2.getBoundingClientRect(), r2 = o2.width || s2.tooltipRect.ttWidth || 0, n2 = o2.height || s2.tooltipRect.ttHeight || 0, l2 = a2.dom.baseEl.querySelector(`.apexcharts-pie-area[j='${e2}']`);
      if (l2) {
        const t3 = parseFloat(l2.getAttribute("data:cx")), e3 = parseFloat(l2.getAttribute("data:cy"));
        if (!isNaN(t3) && !isNaN(e3)) {
          const s3 = a2.dom.Paper.node.getBoundingClientRect(), o3 = a2.dom.elWrap.getBoundingClientRect(), l3 = s3.left - o3.left, h2 = s3.top - o3.top;
          i2.style.left = l3 + t3 - r2 / 2 + "px", i2.style.top = h2 + e3 - n2 - 10 + "px";
        }
      }
    }
    _showTooltipRadialBar(t2, e2, s2, i2) {
      const a2 = this.w;
      s2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: t2, shared: false });
      const { ttWidth: o2 = 0, ttHeight: r2 = 0 } = s2.getCachedDimensions(), n2 = a2.dom.baseEl.querySelector(`.apexcharts-radialbar-series[data\\:realIndex='${t2}'] path`);
      if (n2) {
        const e3 = parseFloat(n2.getAttribute("data:angle")) || 0, s3 = (a2.config.plotOptions.radialBar.startAngle || 0) + e3 / 2, l2 = a2.layout.gridWidth / 2, h2 = a2.layout.gridHeight / 2, c2 = a2.globals.radialSize || Math.min(a2.layout.gridWidth, a2.layout.gridHeight) / 2, d2 = a2.seriesData.series.length, g2 = c2 / Math.max(d2, 1), p2 = c2 - t2 * g2, x2 = (p2 + (p2 - g2)) / 2, u2 = b.polarToCartesian(l2, h2, x2, s3), f2 = u2.x + (a2.layout.translateX || 0), m2 = u2.y + (a2.layout.translateY || 0);
        i2.style.left = f2 - o2 / 2 + "px", i2.style.top = m2 - r2 - 10 + "px";
      }
    }
    _showTooltipHeatTree(t2, e2, s2, i2, a2) {
      const o2 = this.w;
      s2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: t2, j: e2, shared: false });
      const r2 = i2.getBoundingClientRect(), n2 = r2.width || s2.tooltipRect.ttWidth || 0, l2 = r2.height || s2.tooltipRect.ttHeight || 0, h2 = "heatmap" === a2 ? "apexcharts-heatmap-rect" : "apexcharts-treemap-rect", c2 = o2.dom.baseEl.querySelector(`.${h2}[i='${t2}'][j='${e2}']`);
      if (c2) {
        const t3 = o2.dom.elWrap.getBoundingClientRect(), e3 = c2.getBoundingClientRect(), a3 = e3.left - t3.left, r3 = e3.top - t3.top, h3 = e3.width, d2 = e3.height, g2 = parseFloat(c2.getAttribute("cx")), p2 = parseFloat(c2.getAttribute("width"));
        s2.tooltipPosition.moveXCrosshairs(g2 + p2 / 2);
        let x2 = a3 + h3 + n2 / 2;
        const u2 = r3 + d2 / 2 - l2 / 2;
        a3 + h3 > o2.layout.gridWidth / 2 && (x2 = a3 - n2 / 2), i2.style.left = x2 + "px", i2.style.top = u2 + "px";
      }
    }
    _applyFocusClass(t2, e2) {
      this._removeFocusClass();
      const s2 = this._getFocusableElement(t2, e2);
      s2 && (s2.classList.add("apexcharts-keyboard-focused"), this._focusedEl = s2);
    }
    _removeFocusClass() {
      this._focusedEl && (this._focusedEl.classList.remove("apexcharts-keyboard-focused"), this._focusedEl = null);
    }
    _leaveHoveredBar() {
      if (this._hoveredBarEl) {
        new X(this.w, this.ctx).pathMouseLeave(this._hoveredBarEl, null), this._hoveredBarEl = null;
      }
    }
    _getFocusableElement(t2, e2) {
      const s2 = this.w, i2 = s2.config.chart.type, a2 = s2.dom.baseEl;
      if ("pie" === i2 || "donut" === i2 || "polarArea" === i2) return a2.querySelector(`.apexcharts-pie-area[j='${e2}']`);
      if ("heatmap" === i2) return a2.querySelector(`.apexcharts-heatmap-rect[i='${t2}'][j='${e2}']`);
      if ("treemap" === i2) return a2.querySelector(`.apexcharts-treemap-rect[i='${t2}'][j='${e2}']`);
      if ("radialBar" === i2) return a2.querySelector(`.apexcharts-radialbar-series[data\\:realIndex='${t2}'] path`);
      if ("bar" === i2 || "candlestick" === i2 || "boxPlot" === i2 || "rangeBar" === i2) return a2.querySelector(`.apexcharts-series[data\\:realIndex='${t2}'] path[j='${e2}']`);
      return a2.querySelector(`.apexcharts-series[data\\:realIndex='${t2}'] .apexcharts-marker[rel='${e2}']`) || null;
    }
    _fireClick() {
      const t2 = this.w.globals.tooltip;
      if (!t2) return;
      t2.markerClick({ type: "mouseup", clientX: 0, clientY: 0 }, this.seriesIndex, this.dataPointIndex);
    }
    _isNavEnabled() {
      const t2 = this.w.config.chart.accessibility;
      return t2.enabled && t2.keyboard.enabled && t2.keyboard.navigation.enabled;
    }
    _getSeriesCount() {
      const t2 = this.w, e2 = t2.config.chart.type;
      return "pie" === e2 || "donut" === e2 || "polarArea" === e2 ? 1 : t2.seriesData.series.length;
    }
    _getDataPointCount(t2) {
      const e2 = this.w, s2 = e2.config.chart.type;
      if ("pie" === s2 || "donut" === s2 || "polarArea" === s2) return e2.seriesData.series.length;
      const i2 = e2.seriesData.series;
      return i2[t2] && Array.isArray(i2[t2]) ? i2[t2].length : 0;
    }
    _clampCursor() {
      const t2 = this._getSeriesCount();
      this.seriesIndex >= t2 && (this.seriesIndex = t2 - 1), this.seriesIndex < 0 && (this.seriesIndex = 0);
      const e2 = this._getDataPointCount(this.seriesIndex);
      this.dataPointIndex >= e2 && (this.dataPointIndex = e2 - 1), this.dataPointIndex < 0 && (this.dataPointIndex = 0);
    }
    _snapToVisibleRange() {
      const t2 = this.w, e2 = t2.globals, s2 = this.seriesIndex;
      if (!t2.interact.zoomed) return;
      const i2 = t2.seriesData.seriesX && t2.seriesData.seriesX[s2];
      if (!i2 || !i2.length) return;
      const a2 = e2.minX, o2 = e2.maxX;
      if (void 0 === a2 || void 0 === o2) return;
      const r2 = i2[this.dataPointIndex];
      if (r2 >= a2 && r2 <= o2) return;
      const n2 = i2.length;
      for (let t3 = 0; t3 < n2; t3++) if (i2[t3] >= a2 && i2[t3] <= o2) return void (this.dataPointIndex = t3);
    }
    _snapToVisibleRangeInDirection(t2) {
      const e2 = this.w, s2 = e2.globals, i2 = this.seriesIndex, a2 = e2.seriesData.seriesX && e2.seriesData.seriesX[i2];
      if (!a2 || !a2.length) return;
      const o2 = s2.minX, r2 = s2.maxX;
      if (void 0 === o2 || void 0 === r2) return;
      const n2 = a2.length;
      if (t2 >= 0) {
        for (let t3 = 0; t3 < n2; t3++) if (a2[t3] >= o2 && a2[t3] <= r2) return void (this.dataPointIndex = t3);
      } else for (let t3 = n2 - 1; t3 >= 0; t3--) if (a2[t3] >= o2 && a2[t3] <= r2) return void (this.dataPointIndex = t3);
    }
    _isDataPointVisible(t2, e2) {
      const s2 = this.w, i2 = s2.globals;
      if (!s2.interact.zoomed) return true;
      const a2 = s2.seriesData.seriesX && s2.seriesData.seriesX[t2];
      if (!a2) return true;
      const o2 = a2[e2];
      return void 0 === o2 || o2 >= i2.minX && o2 <= i2.maxX;
    }
  } });
  class he {
    constructor(t2) {
      this.w = t2.w, this.barCtx = t2, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
    }
    handleBarDataLabels(t2) {
      const { x: e2, y: s2, y1: i2, y2: a2, i: o2, j: r2, realIndex: h2, columnGroupIndex: c2, series: d2, barHeight: g2, barWidth: p2, barXPosition: x2, barYPosition: u2, visibleSeries: f2 } = t2, b2 = this.w, m2 = new X(this.barCtx.w), y2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[h2] : this.barCtx.strokeWidth;
      let w2, v2;
      b2.axisFlags.isXNumeric && !b2.globals.isBarHorizontal ? (w2 = e2 + parseFloat(p2 * (f2 + 1)), v2 = s2 + parseFloat(g2 * (f2 + 1)) - y2) : (w2 = e2 + parseFloat(p2 * f2), v2 = s2 + parseFloat(g2 * f2));
      let A2 = null, C2 = null, S2 = e2, k2 = s2, D2 = {};
      const L2 = b2.config.dataLabels, P2 = this.barCtx.barOptions.dataLabels, M2 = this.barCtx.barOptions.dataLabels.total;
      void 0 !== u2 && this.barCtx.isRangeBar && (v2 = u2, k2 = u2), void 0 !== x2 && this.barCtx.isVerticalGroupedRangeBar && (w2 = x2, S2 = x2);
      const I2 = L2.offsetX, E2 = L2.offsetY;
      let F2 = { width: 0, height: 0 };
      if (b2.config.dataLabels.enabled) {
        const t3 = b2.seriesData.series[o2][r2];
        F2 = m2.getTextRects(b2.config.dataLabels.formatter ? b2.config.dataLabels.formatter(t3, l(n({}, b2), { seriesIndex: o2, dataPointIndex: r2, w: b2 })) : b2.formatters.yLabelFormatters[0](t3), parseFloat(L2.style.fontSize));
      }
      const T2 = { x: e2, y: s2, i: o2, j: r2, realIndex: h2, columnGroupIndex: c2, bcx: w2, bcy: v2, barHeight: g2, barWidth: p2, textRects: F2, strokeWidth: y2, dataLabelsX: S2, dataLabelsY: k2, dataLabelsConfig: L2, barDataLabelsConfig: P2, barTotalDataLabelsConfig: M2, offX: I2, offY: E2 };
      return D2 = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(T2) : this.calculateColumnsDataLabelsPosition(T2), A2 = this.drawCalculatedDataLabels({ x: D2.dataLabelsX, y: D2.dataLabelsY, val: this.barCtx.isRangeBar ? [i2, a2] : "100%" === b2.config.chart.stackType ? d2[h2][r2] : b2.seriesData.series[h2][r2], i: h2, j: r2, barWidth: p2, barHeight: g2, textRects: F2, dataLabelsConfig: L2 }), b2.config.chart.stacked && M2.enabled && (C2 = this.drawTotalDataLabels({ x: D2.totalDataLabelsX, y: D2.totalDataLabelsY, barWidth: p2, barHeight: g2, realIndex: h2, textAnchor: D2.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: h2, j: r2 }), dataLabelsConfig: L2, barTotalDataLabelsConfig: M2 })), { dataLabelsPos: D2, dataLabels: A2, totalDataLabels: C2 };
    }
    getStackedTotalDataLabel({ realIndex: t2, j: e2 }) {
      const s2 = this.w;
      let i2 = this.barCtx.stackedSeriesTotals[e2];
      return this.totalFormatter && (i2 = this.totalFormatter(i2, l(n({}, s2), { seriesIndex: t2, dataPointIndex: e2, w: s2 }))), i2;
    }
    calculateColumnsDataLabelsPosition(t2) {
      const e2 = this.w;
      let s2, i2, { i: a2, j: o2, realIndex: r2, y: n2, bcx: l2, barWidth: h2, barHeight: c2, textRects: d2, dataLabelsX: g2, dataLabelsY: p2, dataLabelsConfig: x2, barDataLabelsConfig: u2, barTotalDataLabelsConfig: f2, strokeWidth: b2, offX: m2, offY: y2 } = t2;
      const w2 = l2;
      c2 = Math.abs(c2);
      const v2 = "vertical" === e2.config.plotOptions.bar.dataLabels.orientation, { zeroEncounters: A2 } = this.barCtx.barHelpers.getZeroValueEncounters({ i: a2, j: o2 });
      l2 -= b2 / 2;
      const C2 = e2.layout.gridWidth / e2.globals.dataPoints;
      if (this.barCtx.isVerticalGroupedRangeBar ? g2 += h2 / 2 : (g2 = e2.axisFlags.isXNumeric ? l2 - h2 / 2 + m2 : l2 - C2 + h2 / 2 + m2, !e2.config.chart.stacked && A2 > 0 && e2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (g2 -= h2 * A2)), v2) {
        const t3 = 2;
        g2 = g2 + d2.height / 2 - b2 / 2 - t3;
      }
      const S2 = e2.seriesData.series[a2][o2] < 0;
      let k2 = n2;
      switch (this.barCtx.isReversed && (k2 = n2 + (S2 ? c2 : -c2)), u2.position) {
        case "center":
          p2 = v2 ? S2 ? k2 - c2 / 2 + y2 : k2 + c2 / 2 - y2 : S2 ? k2 - c2 / 2 + d2.height / 2 + y2 : k2 + c2 / 2 + d2.height / 2 - y2;
          break;
        case "bottom":
          p2 = v2 ? S2 ? k2 - c2 + y2 : k2 + c2 - y2 : S2 ? k2 - c2 + d2.height + b2 + y2 : k2 + c2 - d2.height / 2 + b2 - y2;
          break;
        case "top":
          p2 = v2 ? S2 ? k2 + y2 : k2 - y2 : S2 ? k2 - d2.height / 2 - y2 : k2 + d2.height + y2;
      }
      let D2 = k2;
      if (e2.labelData.seriesGroups.forEach((t3) => {
        var e3;
        null == (e3 = this.barCtx[t3.join(",")]) || e3.prevY.forEach((t4) => {
          D2 = S2 ? Math.max(t4[o2], D2) : Math.min(t4[o2], D2);
        });
      }), this.barCtx.lastActiveBarSerieIndex === r2 && f2.enabled) {
        const t3 = 18, a3 = new X(this.barCtx.w).getTextRects(this.getStackedTotalDataLabel({ realIndex: r2, j: o2 }), x2.fontSize);
        s2 = S2 ? D2 - a3.height / 2 - y2 - f2.offsetY + t3 : D2 + a3.height + y2 + f2.offsetY - t3;
        const n3 = C2;
        i2 = w2 + (e2.axisFlags.isXNumeric ? -h2 * e2.globals.barGroups.length / 2 : e2.globals.barGroups.length * h2 / 2 - (e2.globals.barGroups.length - 1) * h2 - n3) + f2.offsetX;
      }
      return e2.config.chart.stacked || (p2 < 0 ? p2 = 0 + b2 : p2 + d2.height / 3 > e2.layout.gridHeight && (p2 = e2.layout.gridHeight - b2)), { bcx: l2, bcy: n2, dataLabelsX: g2, dataLabelsY: p2, totalDataLabelsX: i2, totalDataLabelsY: s2, totalDataLabelsAnchor: "middle" };
    }
    calculateBarsDataLabelsPosition(t2) {
      const e2 = this.w;
      let { x: s2, i: i2, j: a2, realIndex: o2, bcy: r2, barHeight: n2, barWidth: l2, textRects: h2, dataLabelsX: c2, strokeWidth: d2, dataLabelsConfig: g2, barDataLabelsConfig: p2, barTotalDataLabelsConfig: x2, offX: u2, offY: f2 } = t2;
      const b2 = e2.layout.gridHeight / e2.globals.dataPoints, { zeroEncounters: m2 } = this.barCtx.barHelpers.getZeroValueEncounters({ i: i2, j: a2 });
      l2 = Math.abs(l2);
      let y2, w2, v2 = r2 - (this.barCtx.isRangeBar ? 0 : b2) + n2 / 2 + h2.height / 2 + f2 - 3;
      !e2.config.chart.stacked && m2 > 0 && e2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (v2 -= n2 * m2);
      let A2 = "start";
      const C2 = e2.seriesData.series[i2][a2] < 0;
      let S2 = s2;
      switch (this.barCtx.isReversed && (S2 = s2 + (C2 ? -l2 : l2), A2 = C2 ? "start" : "end"), p2.position) {
        case "center":
          c2 = C2 ? S2 + l2 / 2 - u2 : Math.max(h2.width / 2, S2 - l2 / 2) + u2;
          break;
        case "bottom":
          c2 = C2 ? S2 + l2 - d2 - u2 : S2 - l2 + d2 + u2;
          break;
        case "top":
          c2 = C2 ? S2 - d2 - u2 : S2 - d2 + u2;
      }
      let k2 = S2;
      if (e2.labelData.seriesGroups.forEach((t3) => {
        var e3;
        null == (e3 = this.barCtx[t3.join(",")]) || e3.prevX.forEach((t4) => {
          k2 = C2 ? Math.min(t4[a2], k2) : Math.max(t4[a2], k2);
        });
      }), this.barCtx.lastActiveBarSerieIndex === o2 && x2.enabled) {
        const t3 = new X(this.barCtx.w).getTextRects(this.getStackedTotalDataLabel({ realIndex: o2, j: a2 }), g2.fontSize);
        C2 ? (y2 = k2 - d2 - u2 - x2.offsetX, A2 = "end") : y2 = k2 + u2 + x2.offsetX + (this.barCtx.isReversed ? -(l2 + d2) : d2), w2 = v2 - h2.height / 2 + t3.height / 2 + x2.offsetY + d2, e2.globals.barGroups.length > 1 && (w2 -= e2.globals.barGroups.length / 2 * (n2 / 2));
      }
      return e2.config.chart.stacked || ("start" === g2.textAnchor ? c2 - h2.width < 0 ? c2 = C2 ? h2.width + d2 : d2 : c2 + h2.width > e2.layout.gridWidth && (c2 = C2 ? e2.layout.gridWidth - d2 : e2.layout.gridWidth - h2.width - d2) : "middle" === g2.textAnchor ? c2 - h2.width / 2 < 0 ? c2 = h2.width / 2 + d2 : c2 + h2.width / 2 > e2.layout.gridWidth && (c2 = e2.layout.gridWidth - h2.width / 2 - d2) : "end" === g2.textAnchor && (c2 < 1 ? c2 = h2.width + d2 : c2 + 1 > e2.layout.gridWidth && (c2 = e2.layout.gridWidth - h2.width - d2))), { bcx: s2, bcy: r2, dataLabelsX: c2, dataLabelsY: v2, totalDataLabelsX: y2, totalDataLabelsY: w2, totalDataLabelsAnchor: A2 };
    }
    drawCalculatedDataLabels({ x: t2, y: e2, val: s2, i: i2, j: a2, textRects: o2, barHeight: r2, barWidth: h2, dataLabelsConfig: c2 }) {
      const d2 = this.w;
      let g2 = "rotate(0)";
      "vertical" === d2.config.plotOptions.bar.dataLabels.orientation && (g2 = `rotate(-90, ${t2}, ${e2})`);
      const p2 = new N(this.barCtx.w, this.barCtx.ctx), x2 = new X(this.barCtx.w), u2 = c2.formatter;
      let f2 = null;
      const b2 = d2.globals.collapsedSeriesIndices.indexOf(i2) > -1;
      if (c2.enabled && !b2) {
        f2 = x2.group({ class: "apexcharts-data-labels", transform: g2 });
        let b3 = "";
        void 0 !== s2 && (b3 = u2(s2, l(n({}, d2), { seriesIndex: i2, dataPointIndex: a2, w: d2 }))), !s2 && d2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (b3 = "");
        const m2 = d2.seriesData.series[i2][a2] < 0, y2 = d2.config.plotOptions.bar.dataLabels.position;
        if ("vertical" === d2.config.plotOptions.bar.dataLabels.orientation && ("top" === y2 && (c2.textAnchor = m2 ? "end" : "start"), "center" === y2 && (c2.textAnchor = "middle"), "bottom" === y2 && (c2.textAnchor = m2 ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) {
          h2 < x2.getTextRects(b3, parseFloat(c2.style.fontSize)).width && (b3 = "");
        }
        d2.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? o2.width / 1.6 > Math.abs(h2) && (b3 = "") : o2.height / 1.6 > Math.abs(r2) && (b3 = ""));
        const w2 = n({}, c2);
        this.barCtx.isHorizontal && s2 < 0 && ("start" === c2.textAnchor ? w2.textAnchor = "end" : "end" === c2.textAnchor && (w2.textAnchor = "start")), p2.plotDataLabelsText({ x: t2, y: e2, text: b3, i: i2, j: a2, parent: f2, dataLabelsConfig: w2, alwaysDrawDataLabel: true, offsetCorrection: true });
      }
      return f2;
    }
    drawTotalDataLabels({ x: t2, y: e2, val: s2, realIndex: i2, textAnchor: a2, barTotalDataLabelsConfig: o2 }) {
      const r2 = new X(this.barCtx.w);
      let n2;
      return o2.enabled && void 0 !== t2 && void 0 !== e2 && this.barCtx.lastActiveBarSerieIndex === i2 && (n2 = r2.drawText({ x: t2, y: e2, foreColor: o2.style.color, text: s2, textAnchor: a2, fontFamily: o2.style.fontFamily, fontSize: o2.style.fontSize, fontWeight: o2.style.fontWeight })), n2;
    }
  }
  let ce = class {
    constructor(t2) {
      this.w = t2.w, this.barCtx = t2;
    }
    initVariables(t2) {
      const e2 = this.w;
      this.barCtx.series = t2, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
      for (let s2 = 0; s2 < t2.length; s2++) if (t2[s2].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t2[s2].length), e2.axisFlags.isXNumeric) for (let i2 = 0; i2 < t2[s2].length; i2++) e2.seriesData.seriesX[s2][i2] > e2.globals.minX && e2.seriesData.seriesX[s2][i2] < e2.globals.maxX && this.barCtx.visibleItems++;
      else this.barCtx.visibleItems = e2.globals.dataPoints;
      this.arrBorderRadius = this.createBorderRadiusArr(e2.seriesData.series), b.isSafari() && (this.arrBorderRadius = this.arrBorderRadius.map((t3) => t3.map((t4) => "none"))), 0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e2.globals.comboCharts || this.checkZeroSeries({ series: t2 });
    }
    initialPositions(t2) {
      const e2 = this.w;
      let s2, i2, a2, o2, r2, n2, l2, h2, c2 = e2.globals.dataPoints;
      this.barCtx.isRangeBar && (c2 = e2.labelData.labels.length);
      let d2 = this.barCtx.seriesLen;
      if (e2.config.plotOptions.bar.rangeBarGroupRows && (d2 = 1), this.barCtx.isHorizontal) a2 = e2.layout.gridHeight / c2, r2 = a2 / d2, e2.axisFlags.isXNumeric && (a2 = e2.layout.gridHeight / this.barCtx.totalItems, r2 = a2 / this.barCtx.seriesLen), r2 = r2 * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, -1 === String(this.barCtx.barOptions.barHeight).indexOf("%") && (r2 = parseInt(this.barCtx.barOptions.barHeight, 10)), h2 = this.barCtx.baseLineInvertedY + e2.globals.padHorizontal + (this.barCtx.isReversed ? e2.layout.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (h2 = e2.layout.gridWidth / 2), i2 = (a2 - r2 * this.barCtx.seriesLen) / 2;
      else {
        if (o2 = e2.layout.gridWidth / this.barCtx.visibleItems, e2.config.xaxis.convertedCatToNumeric && (o2 = e2.layout.gridWidth / e2.globals.dataPoints), n2 = o2 / d2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, e2.axisFlags.isXNumeric) {
          const t3 = this.barCtx.xRatio;
          e2.globals.minXDiff && 0.5 !== e2.globals.minXDiff && e2.globals.minXDiff / t3 > 0 && (o2 = e2.globals.minXDiff / t3), n2 = o2 / d2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, n2 < 1 && (n2 = 1);
        }
        if (-1 === String(this.barCtx.barOptions.columnWidth).indexOf("%") && (n2 = parseInt(this.barCtx.barOptions.columnWidth, 10)), l2 = e2.layout.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? e2.layout.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), e2.axisFlags.isXNumeric) {
          s2 = this.barCtx.getBarXForNumericXAxis({ x: s2, j: 0, realIndex: t2, barWidth: n2 }).x;
        } else s2 = e2.globals.padHorizontal + b.noExponents(o2 - n2 * this.barCtx.seriesLen) / 2;
      }
      return e2.globals.barHeight = r2, e2.globals.barWidth = n2, { x: s2, y: i2, yDivision: a2, xDivision: o2, barHeight: r2, barWidth: n2, zeroH: l2, zeroW: h2 };
    }
    initializeStackedPrevVars(t2) {
      t2.w.labelData.seriesGroups.forEach((e2) => {
        t2[e2] || (t2[e2] = {}), t2[e2].prevY = [], t2[e2].prevX = [], t2[e2].prevYF = [], t2[e2].prevXF = [], t2[e2].prevYVal = [], t2[e2].prevXVal = [];
      });
    }
    initializeStackedXYVars(t2) {
      t2.w.labelData.seriesGroups.forEach((e2) => {
        t2[e2] || (t2[e2] = {}), t2[e2].xArrj = [], t2[e2].xArrjF = [], t2[e2].xArrjVal = [], t2[e2].yArrj = [], t2[e2].yArrjF = [], t2[e2].yArrjVal = [];
      });
    }
    getPathFillColor(t2, e2, s2, i2) {
      var a2, o2, r2, n2;
      const l2 = this.w, h2 = new B(this.barCtx.w);
      let c2 = null;
      const d2 = this.barCtx.barOptions.distributed ? s2 : e2;
      let g2 = false;
      if (this.barCtx.barOptions.colors.ranges.length > 0) {
        this.barCtx.barOptions.colors.ranges.map((i3) => {
          t2[e2][s2] >= i3.from && t2[e2][s2] <= i3.to && (c2 = i3.color, g2 = true);
        });
      }
      return { color: h2.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? d2 : i2, dataPointIndex: s2, color: c2, value: t2[e2][s2], fillConfig: null == (a2 = l2.config.series[e2].data[s2]) ? void 0 : a2.fill, fillType: (null == (r2 = null == (o2 = l2.config.series[e2].data[s2]) ? void 0 : o2.fill) ? void 0 : r2.type) ? null == (n2 = l2.config.series[e2].data[s2]) ? void 0 : n2.fill.type : Array.isArray(l2.config.fill.type) ? l2.config.fill.type[i2] : l2.config.fill.type }), useRangeColor: g2 };
    }
    getStrokeWidth(t2, e2, s2) {
      let i2 = 0;
      const a2 = this.w;
      return void 0 === this.barCtx.series[t2][e2] || null === this.barCtx.series[t2][e2] || "bar" === a2.config.chart.type && !this.barCtx.series[t2][e2] ? this.barCtx.isNullValue = true : this.barCtx.isNullValue = false, a2.config.stroke.show && (this.barCtx.isNullValue || (i2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[s2] : this.barCtx.strokeWidth)), i2;
    }
    createBorderRadiusArr(t2) {
      var e2;
      const s2 = this.w, i2 = !this.w.config.chart.stacked || s2.config.plotOptions.bar.borderRadius <= 0, a2 = t2.length, o2 = 0 | (null == (e2 = t2[0]) ? void 0 : e2.length), r2 = Array.from({ length: a2 }, () => Array(o2).fill(i2 ? "top" : "none"));
      if (i2) return r2;
      const n2 = this.w.config.chart.type;
      for (let e3 = 0; e3 < o2; e3++) {
        const s3 = [], i3 = [];
        let l2 = 0;
        for (let o3 = 0; o3 < a2; o3++) {
          const a3 = t2[o3][e3];
          a3 > 0 ? (s3.push(o3), l2++) : a3 < 0 && (i3.push(o3), l2++);
        }
        if (s3.length > 0 && 0 === i3.length) if (1 === s3.length) r2[s3[0]][e3] = "bar" === n2 && 1 === o2 ? "top" : "both";
        else {
          const t3 = s3[0], i4 = s3[s3.length - 1];
          for (const a3 of s3) r2[a3][e3] = a3 === t3 ? "bar" === n2 && 1 === o2 ? "top" : "bottom" : a3 === i4 ? "top" : "none";
        }
        else if (i3.length > 0 && 0 === s3.length) if (1 === i3.length) r2[i3[0]][e3] = "both";
        else {
          const t3 = Math.max(...i3), s4 = Math.min(...i3);
          for (const a3 of i3) r2[a3][e3] = a3 === t3 ? "bottom" : a3 === s4 ? "top" : "none";
        }
        else if (s3.length > 0 && i3.length > 0) {
          const t3 = s3[s3.length - 1];
          for (const i4 of s3) r2[i4][e3] = i4 === t3 ? "top" : "none";
          const a3 = Math.max(...i3);
          for (const t4 of i3) r2[t4][e3] = t4 === a3 ? "bottom" : "none";
        } else if (1 === l2) {
          r2[s3[0] || i3[0]][e3] = "both";
        }
      }
      return r2;
    }
    barBackground({ j: t2, i: e2, x1: s2, x2: i2, y1: a2, y2: o2, elSeries: r2 }) {
      const n2 = this.w, l2 = new X(this.barCtx.w), h2 = new Q(this.barCtx.w).getActiveConfigSeriesIndex();
      if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && h2 === e2) {
        t2 >= this.barCtx.barOptions.colors.backgroundBarColors.length && (t2 %= this.barCtx.barOptions.colors.backgroundBarColors.length);
        const e3 = this.barCtx.barOptions.colors.backgroundBarColors[t2], h3 = l2.drawRect(void 0 !== s2 ? s2 : 0, void 0 !== a2 ? a2 : 0, void 0 !== i2 ? i2 : n2.layout.gridWidth, void 0 !== o2 ? o2 : n2.layout.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, e3, this.barCtx.barOptions.colors.backgroundBarOpacity);
        r2.add(h3), h3.node.classList.add("apexcharts-backgroundBar");
      }
    }
    getColumnPaths({ barWidth: t2, barXPosition: e2, y1: s2, y2: i2, strokeWidth: a2, isReversed: o2, series: r2, seriesGroup: n2, realIndex: l2, i: h2, j: c2, w: d2 }) {
      var g2;
      const p2 = new X(this.barCtx.w);
      (a2 = Array.isArray(a2) ? a2[l2] : a2) || (a2 = 0);
      let x2 = t2, u2 = e2;
      (null == (g2 = d2.config.series[l2].data[c2]) ? void 0 : g2.columnWidthOffset) && (u2 = e2 - d2.config.series[l2].data[c2].columnWidthOffset / 2, x2 = t2 + d2.config.series[l2].data[c2].columnWidthOffset);
      const f2 = a2 / 2, b2 = u2 + f2, m2 = u2 + x2 - f2, y2 = (r2[h2][c2] >= 0 ? 1 : -1) * (o2 ? -1 : 1);
      s2 += 1e-3 - f2 * y2, i2 += 1e-3 + f2 * y2;
      let w2 = p2.move(b2, s2), v2 = p2.move(b2, s2);
      const A2 = p2.line(m2, s2);
      if (d2.globals.previousPaths.length > 0 && (v2 = this.barCtx.getPreviousPath(l2, c2, false)), w2 = w2 + p2.line(b2, i2) + p2.line(m2, i2) + A2 + ("around" === d2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[l2][c2] ? " Z" : " z"), v2 = v2 + p2.line(b2, s2) + A2 + A2 + A2 + A2 + A2 + p2.line(b2, s2) + ("around" === d2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[l2][c2] ? " Z" : " z"), "none" !== this.arrBorderRadius[l2][c2] && (w2 = p2.roundPathCorners(w2, d2.config.plotOptions.bar.borderRadius)), d2.config.chart.stacked) {
        let t3 = this.barCtx;
        t3 = this.barCtx[n2], t3.yArrj.push(i2 - f2 * y2), t3.yArrjF.push(Math.abs(s2 - i2 + a2 * y2)), t3.yArrjVal.push(this.barCtx.series[h2][c2]);
      }
      return { pathTo: w2, pathFrom: v2 };
    }
    getBarpaths({ barYPosition: t2, barHeight: e2, x1: s2, x2: i2, strokeWidth: a2, isReversed: o2, series: r2, seriesGroup: n2, realIndex: l2, i: h2, j: c2, w: d2 }) {
      var g2;
      const p2 = new X(this.barCtx.w);
      (a2 = Array.isArray(a2) ? a2[l2] : a2) || (a2 = 0);
      let x2 = t2, u2 = e2;
      (null == (g2 = d2.config.series[l2].data[c2]) ? void 0 : g2.barHeightOffset) && (x2 = t2 - d2.config.series[l2].data[c2].barHeightOffset / 2, u2 = e2 + d2.config.series[l2].data[c2].barHeightOffset);
      const f2 = a2 / 2, b2 = x2 + f2, m2 = x2 + u2 - f2, y2 = (r2[h2][c2] >= 0 ? 1 : -1) * (o2 ? -1 : 1);
      s2 += 1e-3 + f2 * y2, i2 += 1e-3 - f2 * y2;
      let w2 = p2.move(s2, b2), v2 = p2.move(s2, b2);
      d2.globals.previousPaths.length > 0 && (v2 = this.barCtx.getPreviousPath(l2, c2, false));
      const A2 = p2.line(s2, m2);
      if (w2 = w2 + p2.line(i2, b2) + p2.line(i2, m2) + A2 + ("around" === d2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[l2][c2] ? " Z" : " z"), v2 = v2 + p2.line(s2, b2) + A2 + A2 + A2 + A2 + A2 + p2.line(s2, b2) + ("around" === d2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[l2][c2] ? " Z" : " z"), "none" !== this.arrBorderRadius[l2][c2] && (w2 = p2.roundPathCorners(w2, d2.config.plotOptions.bar.borderRadius)), d2.config.chart.stacked) {
        let t3 = this.barCtx;
        t3 = this.barCtx[n2], t3.xArrj.push(i2 + f2 * y2), t3.xArrjF.push(Math.abs(s2 - i2 - a2 * y2)), t3.xArrjVal.push(this.barCtx.series[h2][c2]);
      }
      return { pathTo: w2, pathFrom: v2 };
    }
    checkZeroSeries({ series: t2 }) {
      const e2 = this.w;
      for (let s2 = 0; s2 < t2.length; s2++) {
        let i2 = 0;
        for (let a2 = 0; a2 < t2[e2.globals.maxValsInArrayIndex].length; a2++) i2 += t2[s2][a2];
        0 === i2 && this.barCtx.zeroSerieses.push(s2);
      }
    }
    getXForValue(t2, e2, s2 = true) {
      let i2 = s2 ? e2 : null;
      return null != t2 && (i2 = e2 + t2 / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t2 / this.barCtx.invertedYRatio : 0)), i2;
    }
    getYForValue(t2, e2, s2, i2 = true) {
      let a2 = i2 ? e2 : null;
      return null != t2 && (a2 = e2 - t2 / this.barCtx.yRatio[s2] + 2 * (this.barCtx.isReversed ? t2 / this.barCtx.yRatio[s2] : 0)), a2;
    }
    getGoalValues(t2, e2, s2, i2, a2, o2) {
      const r2 = this.w, h2 = [], c2 = (i3, a3) => {
        h2.push({ [t2]: "x" === t2 ? this.getXForValue(i3, e2, false) : this.getYForValue(i3, s2, o2, false), attrs: a3 });
      };
      if (r2.seriesData.seriesGoals[i2] && r2.seriesData.seriesGoals[i2][a2] && Array.isArray(r2.seriesData.seriesGoals[i2][a2]) && r2.seriesData.seriesGoals[i2][a2].forEach((t3) => {
        c2(t3.value, t3);
      }), this.barCtx.barOptions.isDumbbell && r2.rangeData.seriesRange.length) {
        const e3 = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : r2.globals.colors, s3 = { strokeHeight: "x" === t2 ? 0 : r2.globals.markers.size[i2], strokeWidth: "x" === t2 ? r2.globals.markers.size[i2] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(e3[i2]) ? e3[i2][0] : e3[i2] };
        c2(r2.rangeData.seriesRangeStart[i2][a2], s3), c2(r2.rangeData.seriesRangeEnd[i2][a2], l(n({}, s3), { strokeColor: Array.isArray(e3[i2]) ? e3[i2][1] : e3[i2] }));
      }
      return h2;
    }
    drawGoalLine({ barXPosition: t2, barYPosition: e2, goalX: s2, goalY: i2, barWidth: a2, barHeight: o2 }) {
      const r2 = new X(this.barCtx.w), n2 = r2.group({ className: "apexcharts-bar-goals-groups" });
      n2.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: n2.node }), n2.attr("clip-path", `url(#gridRectMarkerMask${this.barCtx.w.globals.cuid})`);
      let l2 = null;
      return this.barCtx.isHorizontal ? Array.isArray(s2) && s2.forEach((t3) => {
        if (t3.x >= -1 && t3.x <= r2.w.layout.gridWidth + 1) {
          const s3 = void 0 !== t3.attrs.strokeHeight ? t3.attrs.strokeHeight : o2 / 2, i3 = e2 + s3 + o2 / 2;
          l2 = r2.drawLine(t3.x, i3 - 2 * s3, t3.x, i3, t3.attrs.strokeColor ? t3.attrs.strokeColor : void 0, t3.attrs.strokeDashArray, t3.attrs.strokeWidth ? t3.attrs.strokeWidth : 2, t3.attrs.strokeLineCap), n2.add(l2);
        }
      }) : Array.isArray(i2) && i2.forEach((e3) => {
        if (e3.y >= -1 && e3.y <= r2.w.layout.gridHeight + 1) {
          const s3 = void 0 !== e3.attrs.strokeWidth ? e3.attrs.strokeWidth : a2 / 2, i3 = t2 + s3 + a2 / 2;
          l2 = r2.drawLine(i3 - 2 * s3, e3.y, i3, e3.y, e3.attrs.strokeColor ? e3.attrs.strokeColor : void 0, e3.attrs.strokeDashArray, e3.attrs.strokeHeight ? e3.attrs.strokeHeight : 2, e3.attrs.strokeLineCap), n2.add(l2);
        }
      }), n2;
    }
    drawBarShadow({ prevPaths: t2, currPaths: e2, color: s2, realIndex: i2, j: a2 }) {
      const o2 = this.w, { x: r2, x1: n2, barYPosition: l2 } = t2, { x: h2, x1: c2, barYPosition: d2 } = e2, g2 = l2 + e2.barHeight, p2 = new X(this.barCtx.w), x2 = new b(), u2 = p2.move(n2, g2) + p2.line(r2, g2) + p2.line(h2, d2) + p2.line(c2, d2) + p2.line(n2, g2) + ("around" === o2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[i2][a2] ? " Z" : " z");
      return p2.drawPath({ d: u2, fill: x2.shadeColor(0.5, b.rgb2hex(s2)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadow apexcharts-decoration-element" });
    }
    getZeroValueEncounters({ i: t2, j: e2 }) {
      var s2;
      const i2 = this.w;
      let a2 = 0, o2 = 0;
      return (i2.config.plotOptions.bar.horizontal ? i2.seriesData.series.map((t3, e3) => e3) : (null == (s2 = i2.globals.columnSeries) ? void 0 : s2.i.map((t3) => t3)) || []).forEach((s3) => {
        const r2 = i2.globals.seriesPercent[s3][e2];
        r2 && a2++, s3 < t2 && 0 === r2 && o2++;
      }), { nonZeroColumns: a2, zeroEncounters: o2 };
    }
    getGroupIndex(t2) {
      const e2 = this.w, s2 = e2.labelData.seriesGroups.findIndex((s3) => s3.indexOf(e2.seriesData.seriesNames[t2]) > -1), i2 = this.barCtx.columnGroupIndices;
      let a2 = i2.indexOf(s2);
      return a2 < 0 && (i2.push(s2), a2 = i2.length - 1), { groupIndex: s2, columnGroupIndex: a2 };
    }
  };
  class de {
    constructor(t2, e2, s2) {
      this.ctx = e2, this.w = t2, this.barOptions = t2.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = t2.config.stroke.width, this.isNullValue = false, this.isRangeBar = t2.rangeData.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !t2.globals.isBarHorizontal && t2.rangeData.seriesRange.length && t2.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = s2, null !== this.xyRatios && (this.xRatio = s2.xRatio, this.yRatio = s2.yRatio, this.invertedXRatio = s2.invertedXRatio, this.invertedYRatio = s2.invertedYRatio, this.baseLineY = s2.baseLineY, this.baseLineInvertedY = s2.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
      const i2 = new Q(this.w);
      this.lastActiveBarSerieIndex = i2.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
      const a2 = i2.getBarSeriesIndices(), o2 = new I(this.w);
      this.stackedSeriesTotals = o2.getStackedSeriesTotals(this.w.config.series.map((t3, e3) => -1 === a2.indexOf(e3) ? e3 : -1).filter((t3) => -1 !== t3)), this.barHelpers = new ce(this);
    }
    draw(t2, e2) {
      var s2;
      const i2 = this.w, a2 = new X(this.w), o2 = new I(this.w);
      t2 = o2.getLogSeries(t2), this.series = t2, this.yRatio = o2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t2);
      const r2 = a2.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      i2.config.dataLabels.enabled && (this.totalItems, this.barOptions.dataLabels.maxItems);
      for (let o3 = 0, h2 = 0; o3 < t2.length; o3++, h2++) {
        let c2, d2;
        const g2 = [], p2 = [], x2 = i2.globals.comboCharts ? e2[o3] : o3, { columnGroupIndex: u2 } = this.barHelpers.getGroupIndex(x2), f2 = a2.group({ class: "apexcharts-series", rel: o3 + 1, seriesName: b.escapeString(i2.seriesData.seriesNames[x2]), "data:realIndex": x2 });
        Q.addCollapsedClassToSeries(this.w, f2, x2), t2[o3].length > 0 && (this.visibleI = this.visibleI + 1), this.yRatio.length > 1 && (this.yaxisIndex = i2.globals.seriesYAxisReverseMap[x2], this.translationsIndex = x2);
        const m2 = this.translationsIndex;
        this.isReversed = i2.config.yaxis[this.yaxisIndex] && i2.config.yaxis[this.yaxisIndex].reversed;
        const y2 = this.barHelpers.initialPositions(x2), { y: w2, yDivision: v2, zeroW: A2, x: C2, xDivision: S2, zeroH: k2 } = y2;
        let D2 = y2.barHeight, L2 = y2.barWidth;
        d2 = w2, c2 = C2, this.isHorizontal || p2.push(c2 + L2 / 2);
        const P2 = a2.group({ class: "apexcharts-datalabels", "data:realIndex": x2 });
        i2.globals.delayedElements.push({ el: P2.node }), P2.node.classList.add("apexcharts-element-hidden");
        const M2 = a2.group({ class: "apexcharts-bar-goals-markers" }), I2 = a2.group({ class: "apexcharts-bar-shadows" });
        i2.globals.delayedElements.push({ el: I2.node }), I2.node.classList.add("apexcharts-element-hidden");
        for (let e3 = 0; e3 < t2[o3].length; e3++) {
          const a3 = this.barHelpers.getStrokeWidth(o3, e3, x2);
          let r3 = null;
          const y3 = { indexes: { i: o3, j: e3, realIndex: x2, translationsIndex: m2, bc: h2 }, x: c2, y: d2, strokeWidth: a3, elSeries: f2 };
          this.isHorizontal ? (r3 = this.drawBarPaths(l(n({}, y3), { barHeight: D2, zeroW: A2, yDivision: v2 })), L2 = this.series[o3][e3] / this.invertedYRatio) : (r3 = this.drawColumnPaths(l(n({}, y3), { xDivision: S2, barWidth: L2, zeroH: k2 })), D2 = this.series[o3][e3] / this.yRatio[m2]);
          const w3 = this.barHelpers.getPathFillColor(t2, o3, e3, x2);
          if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && e3 > 0) {
            const t3 = this.barHelpers.drawBarShadow({ color: "string" == typeof w3.color && -1 === (null == (s2 = w3.color) ? void 0 : s2.indexOf("url")) ? w3.color : b.hexToRgba(i2.globals.colors[o3]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: r3, realIndex: x2, j: e3 });
            if (I2.add(t3), i2.config.chart.dropShadow.enabled) {
              new F(this.w).dropShadow(t3, i2.config.chart.dropShadow, x2);
            }
          }
          this.pathArr.push(r3);
          const C3 = this.barHelpers.drawGoalLine({ barXPosition: r3.barXPosition, barYPosition: r3.barYPosition, goalX: r3.goalX, goalY: r3.goalY, barHeight: D2, barWidth: L2 });
          C3 && M2.add(C3), d2 = r3.y, c2 = r3.x, e3 > 0 && p2.push(c2 + L2 / 2), g2.push(d2), this.renderSeries(l(n({ realIndex: x2, pathFill: w3.color }, w3.useRangeColor ? { lineFill: w3.color } : {}), { j: e3, i: o3, columnGroupIndex: u2, pathFrom: r3.pathFrom, pathTo: r3.pathTo, strokeWidth: a3, elSeries: f2, x: c2, y: d2, series: t2, barHeight: Math.abs(r3.barHeight ? r3.barHeight : D2), barWidth: Math.abs(r3.barWidth ? r3.barWidth : L2), elDataLabelsWrap: P2, elGoalsMarkers: M2, elBarShadows: I2, visibleSeries: this.visibleI, type: "bar" }));
        }
        i2.globals.seriesXvalues[x2] = p2, i2.globals.seriesYvalues[x2] = g2, r2.add(f2);
      }
      return r2;
    }
    renderSeries({ realIndex: t2, pathFill: e2, lineFill: s2, j: i2, i: a2, columnGroupIndex: o2, pathFrom: r2, pathTo: n2, strokeWidth: l2, elSeries: h2, x: c2, y: d2, y1: g2, y2: p2, series: x2, barHeight: u2, barWidth: f2, barXPosition: b2, barYPosition: m2, elDataLabelsWrap: y2, elGoalsMarkers: w2, elBarShadows: v2, visibleSeries: A2, type: C2, classes: S2 }) {
      const k2 = this.w, D2 = new X(this.w, this.ctx);
      let L2 = false;
      if (h2._bindingsDelegated || (h2._bindingsDelegated = true, D2.setupEventDelegation(h2, `.apexcharts-${C2}-area`)), !s2) {
        let e3 = function(t3) {
          const e4 = k2.config.stroke.colors;
          let s3;
          return Array.isArray(e4) && e4.length > 0 && (s3 = e4[t3], s3 || (s3 = ""), "function" == typeof s3) ? s3({ value: k2.seriesData.series[t3][i2], dataPointIndex: i2, w: k2 }) : s3;
        };
        const a3 = "function" == typeof k2.globals.stroke.colors[t2] ? e3(t2) : k2.globals.stroke.colors[t2];
        s2 = this.barOptions.distributed ? k2.globals.stroke.colors[i2] : a3;
      }
      const P2 = new he(this).handleBarDataLabels({ x: c2, y: d2, y1: g2, y2: p2, i: a2, j: i2, series: x2, realIndex: t2, columnGroupIndex: o2, barHeight: u2, barWidth: f2, barXPosition: b2, barYPosition: m2, visibleSeries: A2 });
      k2.globals.isBarHorizontal || (P2.dataLabelsPos.dataLabelsX + Math.max(f2, k2.globals.barPadForNumericAxis) < 0 || P2.dataLabelsPos.dataLabelsX - Math.max(f2, k2.globals.barPadForNumericAxis) > k2.layout.gridWidth) && (L2 = true), k2.config.series[a2].data[i2] && k2.config.series[a2].data[i2].strokeColor && (s2 = k2.config.series[a2].data[i2].strokeColor), this.isNullValue && (e2 = "none");
      const M2 = i2 / k2.config.chart.animations.animateGradually.delay * (k2.config.chart.animations.speed / k2.globals.dataPoints) / 2.4;
      if (!L2) {
        const o3 = D2.renderPaths({ i: a2, j: i2, realIndex: t2, pathFrom: r2, pathTo: n2, stroke: s2, strokeWidth: l2, strokeLineCap: k2.config.stroke.lineCap, fill: e2, animationDelay: M2, initialSpeed: k2.config.chart.animations.speed, dataChangeSpeed: k2.config.chart.animations.dynamicAnimation.speed, className: `apexcharts-${C2}-area ${S2}`, chartType: C2, bindEventsOnPaths: false });
        o3.attr("clip-path", `url(#gridRectBarMask${k2.globals.cuid})`);
        const c3 = k2.config.forecastDataPoints;
        c3.count > 0 && i2 >= k2.globals.dataPoints - c3.count && (o3.node.setAttribute("stroke-dasharray", c3.dashArray), o3.node.setAttribute("stroke-width", c3.strokeWidth), o3.node.setAttribute("fill-opacity", c3.fillOpacity)), void 0 !== g2 && void 0 !== p2 && (o3.attr("data-range-y1", g2), o3.attr("data-range-y2", p2));
        new F(this.w).setSelectionFilter(o3, t2, i2), h2.add(o3), o3.attr({ cy: P2.dataLabelsPos.bcy, cx: P2.dataLabelsPos.bcx, j: i2, val: k2.seriesData.series[a2][i2], barHeight: u2, barWidth: f2 }), null !== P2.dataLabels && y2.add(P2.dataLabels), P2.totalDataLabels && y2.add(P2.totalDataLabels), h2.add(y2), w2 && h2.add(w2), v2 && h2.add(v2);
      }
      return h2;
    }
    drawBarPaths({ indexes: t2, barHeight: e2, strokeWidth: s2, zeroW: i2, x: a2, y: o2, yDivision: r2, elSeries: n2 }) {
      const l2 = this.w, h2 = t2.i, c2 = t2.j;
      let d2;
      if (l2.axisFlags.isXNumeric) d2 = (o2 = (l2.seriesData.seriesX[h2][c2] - l2.globals.minX) / this.invertedXRatio - e2) + e2 * this.visibleI;
      else if (l2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        const { nonZeroColumns: t3, zeroEncounters: s3 } = this.barHelpers.getZeroValueEncounters({ i: h2, j: c2 });
        t3 > 0 && (e2 = this.seriesLen * e2 / t3), d2 = o2 + e2 * this.visibleI, d2 -= e2 * s3;
      } else d2 = o2 + e2 * this.visibleI;
      this.isFunnel && (i2 -= (this.barHelpers.getXForValue(this.series[h2][c2], i2) - i2) / 2), a2 = this.barHelpers.getXForValue(this.series[h2][c2], i2);
      const g2 = this.barHelpers.getBarpaths({ barYPosition: d2, barHeight: e2, x1: i2, x2: a2, strokeWidth: s2, isReversed: this.isReversed, series: this.series, realIndex: t2.realIndex, i: h2, j: c2, w: l2 });
      return l2.axisFlags.isXNumeric || (o2 += r2), this.barHelpers.barBackground({ j: c2, i: h2, y1: d2 - e2 * this.visibleI, y2: e2 * this.seriesLen, elSeries: n2 }), { pathTo: g2.pathTo, pathFrom: g2.pathFrom, x1: i2, x: a2, y: o2, goalX: this.barHelpers.getGoalValues("x", i2, null, h2, c2), barYPosition: d2, barHeight: e2 };
    }
    drawColumnPaths({ indexes: t2, x: e2, y: s2, xDivision: i2, barWidth: a2, zeroH: o2, strokeWidth: r2, elSeries: n2 }) {
      const l2 = this.w, h2 = t2.realIndex, c2 = t2.translationsIndex, d2 = t2.i, g2 = t2.j, p2 = t2.bc;
      let x2;
      if (l2.axisFlags.isXNumeric) {
        const t3 = this.getBarXForNumericXAxis({ x: e2, j: g2, realIndex: h2, barWidth: a2 });
        e2 = t3.x, x2 = t3.barXPosition;
      } else if (l2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        const { nonZeroColumns: t3, zeroEncounters: s3 } = this.barHelpers.getZeroValueEncounters({ i: d2, j: g2 });
        t3 > 0 && (a2 = this.seriesLen * a2 / t3), x2 = e2 + a2 * this.visibleI, x2 -= a2 * s3;
      } else x2 = e2 + a2 * this.visibleI;
      s2 = this.barHelpers.getYForValue(this.series[d2][g2], o2, c2);
      const u2 = this.barHelpers.getColumnPaths({ barXPosition: x2, barWidth: a2, y1: o2, y2: s2, strokeWidth: r2, isReversed: this.isReversed, series: this.series, realIndex: h2, i: d2, j: g2, w: l2 });
      return l2.axisFlags.isXNumeric || (e2 += i2), this.barHelpers.barBackground({ bc: p2, j: g2, i: d2, x1: x2 - r2 / 2 - a2 * this.visibleI, x2: a2 * this.seriesLen + r2 / 2, elSeries: n2 }), { pathTo: u2.pathTo, pathFrom: u2.pathFrom, x: e2, y: s2, goalY: this.barHelpers.getGoalValues("y", null, o2, d2, g2, c2), barXPosition: x2, barWidth: a2 };
    }
    getBarXForNumericXAxis({ x: t2, barWidth: e2, realIndex: s2, j: i2 }) {
      const a2 = this.w;
      let o2 = s2;
      return a2.seriesData.seriesX[s2].length || (o2 = a2.globals.maxValsInArrayIndex), b.isNumber(a2.seriesData.seriesX[o2][i2]) && (t2 = (a2.seriesData.seriesX[o2][i2] - a2.globals.minX) / this.xRatio - e2 * this.seriesLen / 2), { barXPosition: t2 + e2 * this.visibleI, x: t2 };
    }
    getPreviousPath(t2, e2) {
      const s2 = this.w;
      let i2 = "M 0 0";
      for (let a2 = 0; a2 < s2.globals.previousPaths.length; a2++) {
        const o2 = s2.globals.previousPaths[a2];
        o2.paths && o2.paths.length > 0 && parseInt(o2.realIndex, 10) === parseInt(t2, 10) && void 0 !== s2.globals.previousPaths[a2].paths[e2] && (i2 = s2.globals.previousPaths[a2].paths[e2].d);
      }
      return i2;
    }
  }
  class ge extends de {
    draw(t2, e2, s2) {
      const i2 = this.w, a2 = new X(this.w), o2 = i2.globals.comboCharts ? e2 : i2.config.chart.type, r2 = new B(this.w);
      this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = i2.config.plotOptions.bar.horizontal, this.isOHLC = this.candlestickOptions && "ohlc" === this.candlestickOptions.type, this.coreUtils = new I(this.w), t2 = this.coreUtils.getLogSeries(t2), this.series = t2, this.yRatio = this.coreUtils.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t2);
      const h2 = a2.group({ class: `apexcharts-${o2}-series apexcharts-plot-series` });
      for (let e3 = 0; e3 < t2.length; e3++) {
        let o3, c2;
        this.isBoxPlot = "boxPlot" === i2.config.chart.type || "boxPlot" === i2.config.series[e3].type;
        const d2 = [], g2 = [], p2 = i2.globals.comboCharts ? s2[e3] : e3, { columnGroupIndex: x2 } = this.barHelpers.getGroupIndex(p2), u2 = a2.group({ class: "apexcharts-series", seriesName: b.escapeString(i2.seriesData.seriesNames[p2]), rel: e3 + 1, "data:realIndex": p2 });
        Q.addCollapsedClassToSeries(this.w, u2, p2), t2[e3].length > 0 && (this.visibleI = this.visibleI + 1);
        let f2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = i2.globals.seriesYAxisReverseMap[p2][0], f2 = p2);
        const m2 = this.barHelpers.initialPositions(p2), { y: y2, barHeight: w2, yDivision: v2, zeroW: A2, x: C2, barWidth: S2, xDivision: k2, zeroH: D2 } = m2;
        c2 = y2, o3 = C2, g2.push(o3 + S2 / 2);
        const L2 = a2.group({ class: "apexcharts-datalabels", "data:realIndex": p2 }), P2 = a2.group({ class: "apexcharts-bar-goals-markers" });
        for (let s3 = 0; s3 < i2.globals.dataPoints; s3++) {
          const a3 = this.barHelpers.getStrokeWidth(e3, s3, p2);
          let h3 = null;
          const b2 = { indexes: { i: e3, j: s3, realIndex: p2, translationsIndex: f2 }, x: o3, y: c2, strokeWidth: a3, elSeries: u2 };
          h3 = this.isHorizontal ? this.drawHorizontalBoxPaths(l(n({}, b2), { yDivision: v2, barHeight: w2, zeroW: A2 })) : this.drawVerticalBoxPaths(l(n({}, b2), { xDivision: k2, barWidth: S2, zeroH: D2 })), c2 = h3.y, o3 = h3.x;
          const m3 = this.barHelpers.drawGoalLine({ barXPosition: h3.barXPosition, barYPosition: h3.barYPosition, goalX: h3.goalX, goalY: h3.goalY, barHeight: w2, barWidth: S2 });
          m3 && P2.add(m3), s3 > 0 && g2.push(o3 + S2 / 2), d2.push(c2), h3.pathTo.forEach((n2, l2) => {
            const d3 = !this.isBoxPlot && this.candlestickOptions.wick.useFillColor ? h3.color[l2] : i2.globals.stroke.colors[e3], g3 = r2.fillPath({ seriesNumber: p2, dataPointIndex: s3, color: h3.color[l2], value: t2[e3][s3] });
            this.renderSeries({ realIndex: p2, pathFill: g3, lineFill: d3, j: s3, i: e3, pathFrom: h3.pathFrom, pathTo: n2, strokeWidth: a3, elSeries: u2, x: o3, y: c2, series: t2, columnGroupIndex: x2, barHeight: w2, barWidth: S2, elDataLabelsWrap: L2, elGoalsMarkers: P2, visibleSeries: this.visibleI, type: i2.config.chart.type });
          });
        }
        i2.globals.seriesXvalues[p2] = g2, i2.globals.seriesYvalues[p2] = d2, h2.add(u2);
      }
      return h2;
    }
    drawVerticalBoxPaths({ indexes: t2, x: e2, xDivision: s2, barWidth: i2, zeroH: a2, strokeWidth: o2 }) {
      const r2 = this.w, n2 = new X(this.w), l2 = t2.i, h2 = t2.j, { colors: c2 } = r2.config.plotOptions.candlestick, { colors: d2 } = this.boxOptions, g2 = t2.realIndex, p2 = (t3) => Array.isArray(t3) ? t3[g2] : t3, x2 = p2(c2.upward), u2 = p2(c2.downward), f2 = this.yRatio[t2.translationsIndex], b2 = this.getOHLCValue(g2, h2);
      let m2 = a2, y2 = a2, w2 = b2.o < b2.c ? [x2] : [u2];
      this.isBoxPlot && (w2 = [p2(d2.lower), p2(d2.upper)]);
      let v2 = Math.min(b2.o, b2.c), A2 = Math.max(b2.o, b2.c), C2 = b2.m;
      r2.axisFlags.isXNumeric && (e2 = (r2.seriesData.seriesX[g2][h2] - r2.globals.minX) / this.xRatio - i2 / 2);
      const S2 = e2 + i2 * this.visibleI;
      let k2;
      void 0 === this.series[l2][h2] || null === this.series[l2][h2] ? (v2 = a2, A2 = a2) : (v2 = a2 - v2 / f2, A2 = a2 - A2 / f2, m2 = a2 - b2.h / f2, y2 = a2 - b2.l / f2, C2 = a2 - b2.m / f2);
      let D2 = n2.move(S2 + i2 / 2, v2);
      if (r2.globals.previousPaths.length > 0 && (D2 = this.getPreviousPath(g2, h2, true)), this.isOHLC) {
        const t3 = S2 + i2 / 2, e3 = a2 - b2.o / f2, s3 = a2 - b2.c / f2;
        k2 = [n2.move(t3, m2) + n2.line(t3, y2) + n2.move(t3, e3) + n2.line(S2, e3) + n2.move(t3, s3) + n2.line(S2 + i2, s3)];
      } else k2 = this.isBoxPlot ? [n2.move(S2, v2) + n2.line(S2 + i2 / 2, v2) + n2.line(S2 + i2 / 2, m2) + n2.line(S2 + i2 / 4, m2) + n2.line(S2 + i2 - i2 / 4, m2) + n2.line(S2 + i2 / 2, m2) + n2.line(S2 + i2 / 2, v2) + n2.line(S2 + i2, v2) + n2.line(S2 + i2, C2) + n2.line(S2, C2) + n2.line(S2, v2 + o2 / 2), n2.move(S2, C2) + n2.line(S2 + i2, C2) + n2.line(S2 + i2, A2) + n2.line(S2 + i2 / 2, A2) + n2.line(S2 + i2 / 2, y2) + n2.line(S2 + i2 - i2 / 4, y2) + n2.line(S2 + i2 / 4, y2) + n2.line(S2 + i2 / 2, y2) + n2.line(S2 + i2 / 2, A2) + n2.line(S2, A2) + n2.line(S2, C2) + "z"] : [n2.move(S2, A2) + n2.line(S2 + i2 / 2, A2) + n2.line(S2 + i2 / 2, m2) + n2.line(S2 + i2 / 2, A2) + n2.line(S2 + i2, A2) + n2.line(S2 + i2, v2) + n2.line(S2 + i2 / 2, v2) + n2.line(S2 + i2 / 2, y2) + n2.line(S2 + i2 / 2, v2) + n2.line(S2, v2) + n2.line(S2, A2 - o2 / 2)];
      return D2 += n2.move(S2, v2), r2.axisFlags.isXNumeric || (e2 += s2), { pathTo: k2, pathFrom: D2, x: e2, y: A2, goalY: this.barHelpers.getGoalValues("y", null, a2, l2, h2, t2.translationsIndex), barXPosition: S2, color: w2 };
    }
    drawHorizontalBoxPaths({ indexes: t2, y: e2, yDivision: s2, barHeight: i2, zeroW: a2, strokeWidth: o2 }) {
      const r2 = this.w, n2 = new X(this.w), l2 = t2.i, h2 = t2.j, c2 = t2.realIndex, { colors: d2 } = r2.config.plotOptions.candlestick, { colors: g2 } = this.boxOptions, p2 = (t3) => Array.isArray(t3) ? t3[c2] : t3, x2 = this.invertedYRatio, u2 = this.getOHLCValue(c2, h2);
      let f2 = u2.o < u2.c ? [p2(d2.upward)] : [p2(d2.downward)];
      this.isBoxPlot && (f2 = [p2(g2.lower), p2(g2.upper)]);
      let b2 = a2, m2 = a2, y2 = Math.min(u2.o, u2.c), w2 = Math.max(u2.o, u2.c), v2 = u2.m;
      r2.axisFlags.isXNumeric && (e2 = (r2.seriesData.seriesX[c2][h2] - r2.globals.minX) / this.invertedXRatio - i2 / 2);
      const A2 = e2 + i2 * this.visibleI;
      void 0 === this.series[l2][h2] || null === this.series[l2][h2] ? (y2 = a2, w2 = a2) : (y2 = a2 + y2 / x2, w2 = a2 + w2 / x2, b2 = a2 + u2.h / x2, m2 = a2 + u2.l / x2, v2 = a2 + u2.m / x2);
      let C2 = n2.move(y2, A2 + i2 / 2);
      r2.globals.previousPaths.length > 0 && (C2 = this.getPreviousPath(c2, h2, true));
      const S2 = [n2.move(y2, A2) + n2.line(y2, A2 + i2 / 2) + n2.line(b2, A2 + i2 / 2) + n2.line(b2, A2 + i2 / 2 - i2 / 4) + n2.line(b2, A2 + i2 / 2 + i2 / 4) + n2.line(b2, A2 + i2 / 2) + n2.line(y2, A2 + i2 / 2) + n2.line(y2, A2 + i2) + n2.line(v2, A2 + i2) + n2.line(v2, A2) + n2.line(y2 + o2 / 2, A2), n2.move(v2, A2) + n2.line(v2, A2 + i2) + n2.line(w2, A2 + i2) + n2.line(w2, A2 + i2 / 2) + n2.line(m2, A2 + i2 / 2) + n2.line(m2, A2 + i2 - i2 / 4) + n2.line(m2, A2 + i2 / 4) + n2.line(m2, A2 + i2 / 2) + n2.line(w2, A2 + i2 / 2) + n2.line(w2, A2) + n2.line(v2, A2) + "z"];
      return C2 += n2.move(y2, A2), r2.axisFlags.isXNumeric || (e2 += s2), { pathTo: S2, pathFrom: C2, x: w2, y: e2, goalX: this.barHelpers.getGoalValues("x", a2, null, l2, h2), barYPosition: A2, color: f2 };
    }
    getOHLCValue(t2, e2) {
      const s2 = this.w, i2 = this.coreUtils, a2 = (s3) => s3[t2] && null != s3[t2][e2] ? i2.getLogValAtSeriesIndex(s3[t2][e2], t2) : 0, o2 = a2(s2.candleData.seriesCandleH), r2 = a2(s2.candleData.seriesCandleO), n2 = a2(s2.candleData.seriesCandleM), l2 = a2(s2.candleData.seriesCandleC), h2 = a2(s2.candleData.seriesCandleL);
      return { o: this.isBoxPlot ? o2 : r2, h: this.isBoxPlot ? r2 : o2, m: n2, l: this.isBoxPlot ? l2 : h2, c: this.isBoxPlot ? h2 : l2 };
    }
  }
  class pe {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2;
    }
    checkColorRange() {
      const t2 = this.w;
      let e2 = false;
      const s2 = t2.config.plotOptions[t2.config.chart.type];
      return s2.colorScale.ranges.length > 0 && s2.colorScale.ranges.map((t3) => {
        t3.from <= 0 && (e2 = true);
      }), e2;
    }
    getShadeColor(t2, e2, s2, i2) {
      const a2 = this.w;
      let o2 = 1;
      const r2 = a2.config.plotOptions[t2].shadeIntensity, n2 = this.determineColor(t2, e2, s2);
      a2.globals.hasNegs || i2 ? o2 = a2.config.plotOptions[t2].reverseNegativeShade ? n2.percent < 0 ? n2.percent / 100 * (1.25 * r2) : (1 - n2.percent / 100) * (1.25 * r2) : n2.percent <= 0 ? 1 - (1 + n2.percent / 100) * r2 : (1 - n2.percent / 100) * r2 : (o2 = 1 - n2.percent / 100, "treemap" === t2 && (o2 = (1 - n2.percent / 100) * (1.25 * r2)));
      let l2 = n2.color;
      const h2 = new b();
      if (a2.config.plotOptions[t2].enableShades) if ("dark" === this.w.config.theme.mode) {
        const t3 = h2.shadeColor(-1 * o2, n2.color);
        l2 = b.hexToRgba(b.isColorHex(t3) ? t3 : b.rgb2hex(t3), a2.config.fill.opacity);
      } else {
        const t3 = h2.shadeColor(o2, n2.color);
        l2 = b.hexToRgba(b.isColorHex(t3) ? t3 : b.rgb2hex(t3), a2.config.fill.opacity);
      }
      return { color: l2, colorProps: n2 };
    }
    determineColor(t2, e2, s2) {
      const i2 = this.w, a2 = i2.seriesData.series[e2][s2], o2 = i2.config.plotOptions[t2];
      let r2 = o2.colorScale.inverse ? s2 : e2;
      o2.distributed && "treemap" === i2.config.chart.type && (r2 = s2);
      let n2 = i2.globals.colors[r2], l2 = null, h2 = Math.min(...i2.seriesData.series[e2]), c2 = Math.max(...i2.seriesData.series[e2]);
      o2.distributed || "heatmap" !== t2 || (h2 = i2.globals.minY, c2 = i2.globals.maxY), void 0 !== o2.colorScale.min && (h2 = o2.colorScale.min < i2.globals.minY ? o2.colorScale.min : i2.globals.minY, c2 = o2.colorScale.max > i2.globals.maxY ? o2.colorScale.max : i2.globals.maxY);
      const d2 = Math.abs(c2) + Math.abs(h2);
      let g2 = 100 * a2 / (0 === d2 ? d2 - 1e-6 : d2);
      if (o2.colorScale.ranges.length > 0) {
        o2.colorScale.ranges.map((t3) => {
          if (a2 >= t3.from && a2 <= t3.to) {
            n2 = t3.color, l2 = t3.foreColor ? t3.foreColor : null, h2 = t3.from, c2 = t3.to;
            const e3 = Math.abs(c2) + Math.abs(h2);
            g2 = 100 * a2 / (0 === e3 ? e3 - 1e-6 : e3);
          }
        });
      }
      return { color: n2, foreColor: l2, percent: g2 };
    }
    calculateDataLabels({ text: t2, x: e2, y: s2, i: i2, j: a2, colorProps: o2, fontSize: r2 }) {
      const n2 = this.w.config.dataLabels, l2 = new X(this.w), h2 = new N(this.w, this.ctx);
      let c2 = null;
      if (n2.enabled) {
        c2 = l2.group({ class: "apexcharts-data-labels" });
        const d2 = n2.offsetX, g2 = n2.offsetY, p2 = e2 + d2, x2 = s2 + parseFloat(n2.style.fontSize) / 3 + g2;
        h2.plotDataLabelsText({ x: p2, y: x2, text: t2, i: i2, j: a2, color: o2.foreColor, parent: c2, fontSize: r2, dataLabelsConfig: n2 });
      }
      return c2;
    }
  }
  class xe {
    constructor(t2) {
      this.w = t2.w, this.lineCtx = t2;
    }
    sameValueSeriesFix(t2, e2) {
      const s2 = this.w;
      if ("gradient" === s2.config.fill.type || "gradient" === s2.config.fill.type[t2]) {
        if (new I(this.lineCtx.w).seriesHaveSameValues(t2)) {
          const s3 = e2[t2].slice();
          s3[s3.length - 1] = s3[s3.length - 1] + 1e-6, e2[t2] = s3;
        }
      }
      return e2;
    }
    calculatePoints({ series: t2, realIndex: e2, x: s2, y: i2, i: a2, j: o2, prevY: r2 }) {
      const n2 = this.w, l2 = [], h2 = [];
      let c2 = this.lineCtx.categoryAxisCorrection + n2.config.markers.offsetX;
      return n2.axisFlags.isXNumeric && (c2 = (n2.seriesData.seriesX[e2][0] - n2.globals.minX) / this.lineCtx.xRatio + n2.config.markers.offsetX), 0 === o2 && (l2.push(c2), h2.push(b.isNumber(t2[a2][0]) ? r2 + n2.config.markers.offsetY : null)), l2.push(s2 + n2.config.markers.offsetX), h2.push(b.isNumber(t2[a2][o2 + 1]) ? i2 + n2.config.markers.offsetY : null), { x: l2, y: h2 };
    }
    checkPreviousPaths({ pathFromLine: t2, pathFromArea: e2, realIndex: s2 }) {
      const i2 = this.w;
      for (let a2 = 0; a2 < i2.globals.previousPaths.length; a2++) {
        const o2 = i2.globals.previousPaths[a2];
        ("line" === o2.type || "area" === o2.type) && o2.paths.length > 0 && parseInt(o2.realIndex, 10) === parseInt(s2, 10) && ("line" === o2.type ? (this.lineCtx.appendPathFrom = false, t2 = i2.globals.previousPaths[a2].paths[0].d) : "area" === o2.type && (this.lineCtx.appendPathFrom = false, e2 = i2.globals.previousPaths[a2].paths[0].d, i2.config.stroke.show && i2.globals.previousPaths[a2].paths[1] && (t2 = i2.globals.previousPaths[a2].paths[1].d)));
      }
      return { pathFromLine: t2, pathFromArea: e2 };
    }
    determineFirstPrevY({ i: t2, realIndex: e2, series: s2, prevY: i2, lineYPosition: a2, translationsIndex: o2 }) {
      var r2, n2, l2;
      const h2 = this.w, c2 = h2.config.chart.stacked && !h2.globals.comboCharts || h2.config.chart.stacked && h2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null == (r2 = this.w.config.series[e2]) ? void 0 : r2.type) || "column" === (null == (n2 = this.w.config.series[e2]) ? void 0 : n2.type));
      if (void 0 !== (null == (l2 = s2[t2]) ? void 0 : l2[0])) i2 = (a2 = c2 && t2 > 0 ? this.lineCtx.prevSeriesY[t2 - 1][0] : this.lineCtx.zeroY) - s2[t2][0] / this.lineCtx.yRatio[o2] + 2 * (this.lineCtx.isReversed ? s2[t2][0] / this.lineCtx.yRatio[o2] : 0);
      else if (c2 && t2 > 0 && void 0 === s2[t2][0]) {
        for (let e3 = t2 - 1; e3 >= 0; e3--) if (null !== s2[e3][0] && void 0 !== s2[e3][0]) {
          i2 = a2 = this.lineCtx.prevSeriesY[e3][0];
          break;
        }
      }
      return { prevY: i2, lineYPosition: a2 };
    }
  }
  const ue = (t2) => {
    const e2 = (function(t3) {
      const e3 = [];
      let s3 = t3[0], i3 = t3[1], a3 = e3[0] = be(s3, i3), o3 = 1;
      for (let r3 = t3.length - 1; o3 < r3; o3++) s3 = i3, i3 = t3[o3 + 1], e3[o3] = 0.5 * (a3 + (a3 = be(s3, i3)));
      return e3[o3] = a3, e3;
    })(t2), s2 = t2.length - 1, i2 = [];
    let a2, o2, r2, n2;
    for (let i3 = 0; i3 < s2; i3++) r2 = be(t2[i3], t2[i3 + 1]), Math.abs(r2) < 1e-6 ? e2[i3] = e2[i3 + 1] = 0 : (a2 = e2[i3] / r2, o2 = e2[i3 + 1] / r2, n2 = a2 * a2 + o2 * o2, n2 > 9 && (n2 = 3 * r2 / Math.sqrt(n2), e2[i3] = n2 * a2, e2[i3 + 1] = n2 * o2));
    for (let a3 = 0; a3 <= s2; a3++) n2 = (t2[Math.min(s2, a3 + 1)][0] - t2[Math.max(0, a3 - 1)][0]) / (6 * (1 + e2[a3] * e2[a3])), i2.push([n2 || 0, e2[a3] * n2 || 0]);
    return i2;
  }, fe = { points(t2) {
    const e2 = ue(t2), s2 = t2[1], i2 = t2[0], a2 = [], o2 = e2[1], r2 = e2[0];
    a2.push(i2, [i2[0] + r2[0], i2[1] + r2[1], s2[0] - o2[0], s2[1] - o2[1], s2[0], s2[1]]);
    for (let s3 = 2, i3 = e2.length; s3 < i3; s3++) {
      const i4 = t2[s3], o3 = e2[s3];
      a2.push([i4[0] - o3[0], i4[1] - o3[1], i4[0], i4[1]]);
    }
    return a2;
  }, slice(t2, e2, s2) {
    const i2 = t2.slice(e2, s2);
    if (e2) {
      if (s2 - e2 > 1 && i2[1].length < 6) {
        const t3 = i2[0].length;
        i2[1] = [2 * i2[0][t3 - 2] - i2[0][t3 - 4], 2 * i2[0][t3 - 1] - i2[0][t3 - 3]].concat(i2[1]);
      }
      i2[0] = i2[0].slice(-2);
    }
    return i2;
  } };
  function be(t2, e2) {
    return (e2[1] - t2[1]) / (e2[0] - t2[0]);
  }
  class me {
    constructor(t2, e2, s2, i2) {
      this.ctx = e2, this.w = t2, this.xyRatios = s2, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || i2, this.scatter = new O(this.w, this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new xe(this), this.markers = new H(this.w, this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
    }
    draw(t2, e2, s2, i2) {
      var a2;
      const o2 = this.w, r2 = new X(this.w), h2 = o2.globals.comboCharts ? e2 : o2.config.chart.type, c2 = r2.group({ class: `apexcharts-${h2}-series apexcharts-plot-series` }), d2 = new I(this.w);
      this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t2 = d2.getLogSeries(t2), this.yRatio = d2.getLogYRatios(this.yRatio), this.prevSeriesY = [];
      const g2 = [];
      for (let e3 = 0; e3 < t2.length; e3++) {
        t2 = this.lineHelpers.sameValueSeriesFix(e3, t2);
        const a3 = o2.globals.comboCharts ? s2[e3] : e3, r3 = this.yRatio.length > 1 ? a3 : 0;
        this._initSerieVariables(t2, e3, a3);
        const c3 = [], d3 = [], p2 = [];
        let x2 = o2.globals.padHorizontal + this.categoryAxisCorrection;
        const u2 = 1, f2 = [], b2 = [];
        Q.addCollapsedClassToSeries(this.w, this.elSeries, a3), o2.axisFlags.isXNumeric && o2.seriesData.seriesX.length > 0 && (x2 = (o2.seriesData.seriesX[a3][0] - o2.globals.minX) / this.xRatio), p2.push(x2);
        const m2 = x2;
        let y2;
        const w2 = m2;
        let v2 = this.zeroY, A2 = this.zeroY;
        const C2 = 0;
        v2 = this.lineHelpers.determineFirstPrevY({ i: e3, realIndex: a3, series: t2, prevY: v2, lineYPosition: C2, translationsIndex: r3 }).prevY, "monotoneCubic" === o2.config.stroke.curve && null === t2[e3][0] ? c3.push(null) : c3.push(v2);
        const S2 = v2;
        let k2;
        "rangeArea" === h2 && (k2 = this.lineHelpers.determineFirstPrevY({ i: e3, realIndex: a3, series: i2, prevY: A2, lineYPosition: C2, translationsIndex: r3 }), A2 = k2.prevY, y2 = A2, d3.push(null !== c3[0] ? A2 : null));
        const D2 = this._calculatePathsFrom({ type: h2, series: t2, i: e3, realIndex: a3, translationsIndex: r3, prevX: w2, prevY: v2, prevY2: A2 }), L2 = [c3[0]], P2 = [d3[0]], M2 = { type: h2, series: t2, realIndex: a3, translationsIndex: r3, i: e3, x: x2, y: u2, pX: m2, pY: S2, pathsFrom: D2, linePaths: f2, areaPaths: b2, seriesIndex: s2, lineYPosition: C2, xArrj: p2, yArrj: c3, y2Arrj: d3, seriesRangeEnd: i2 }, I2 = this._iterateOverDataPoints(l(n({}, M2), { iterations: "rangeArea" === h2 ? t2[e3].length - 1 : void 0, isRangeStart: true }));
        if ("rangeArea" === h2) {
          const t3 = this._calculatePathsFrom({ series: i2, i: e3, realIndex: a3, prevX: w2, prevY: A2 }), s3 = this._iterateOverDataPoints(l(n({}, M2), { series: i2, xArrj: [x2], yArrj: L2, y2Arrj: P2, pY: y2, areaPaths: I2.areaPaths, pathsFrom: t3, iterations: i2[e3].length - 1, isRangeStart: false })), o3 = I2.linePaths.length / 2;
          for (let t4 = 0; t4 < o3; t4++) I2.linePaths[t4] = s3.linePaths[t4 + o3] + I2.linePaths[t4];
          I2.linePaths.splice(o3), I2.pathFromLine = s3.pathFromLine + I2.pathFromLine;
        } else I2.pathFromArea += "z";
        this._handlePaths({ type: h2, realIndex: a3, i: e3, paths: I2 }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), g2.push(this.elSeries);
      }
      if (void 0 !== (null == (a2 = o2.config.series[0]) ? void 0 : a2.zIndex) && g2.sort((t3, e3) => Number(t3.node.getAttribute("zIndex")) - Number(e3.node.getAttribute("zIndex"))), o2.config.chart.stacked) for (let t3 = g2.length - 1; t3 >= 0; t3--) c2.add(g2[t3]);
      else for (let t3 = 0; t3 < g2.length; t3++) c2.add(g2[t3]);
      return c2;
    }
    _initSerieVariables(t2, e2, s2) {
      const i2 = this.w, a2 = new X(this.w);
      this.xDivision = i2.layout.gridWidth / (i2.globals.dataPoints - ("on" === i2.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(i2.config.stroke.width) ? i2.config.stroke.width[s2] : i2.config.stroke.width;
      let o2 = 0;
      if (this.yRatio.length > 1 && (this.yaxisIndex = i2.globals.seriesYAxisReverseMap[s2], o2 = s2), this.isReversed = i2.config.yaxis[this.yaxisIndex] && i2.config.yaxis[this.yaxisIndex].reversed, this.zeroY = i2.layout.gridHeight - this.baseLineY[o2] - (this.isReversed ? i2.layout.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[o2] : 0), this.areaBottomY = this.zeroY, (this.zeroY > i2.layout.gridHeight || "end" === i2.config.plotOptions.area.fillTo) && (this.areaBottomY = i2.layout.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = a2.group({ class: "apexcharts-series", zIndex: void 0 !== i2.config.series[s2].zIndex ? i2.config.series[s2].zIndex : s2, seriesName: b.escapeString(i2.seriesData.seriesNames[s2]) }), this.elPointsMain = a2.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": s2 }), i2.globals.hasNullValues) {
        const t3 = this.markers.plotChartMarkers({ pointsPos: { x: [0], y: [i2.layout.gridHeight + i2.globals.markers.largestSize] }, seriesIndex: e2, j: 0, pSize: 0.1, alwaysDrawMarker: true, isVirtualPoint: true });
        null !== t3 && this.elPointsMain.add(t3);
      }
      this.elDataLabelsWrap = a2.group({ class: "apexcharts-datalabels", "data:realIndex": s2 });
      const r2 = t2[e2].length === i2.globals.dataPoints;
      this.elSeries.attr({ "data:longestSeries": r2, rel: e2 + 1, "data:realIndex": s2 }), this.appendPathFrom = true;
    }
    _calculatePathsFrom({ type: t2, series: e2, i: s2, realIndex: i2, translationsIndex: a2, prevX: o2, prevY: r2, prevY2: n2 }) {
      const l2 = this.w, h2 = new X(this.w);
      let c2, d2, g2, p2;
      if (null === e2[s2][0]) {
        for (let t3 = 0; t3 < e2[s2].length; t3++) if (null !== e2[s2][t3]) {
          o2 = this.xDivision * t3, r2 = this.zeroY - e2[s2][t3] / this.yRatio[a2], c2 = h2.move(o2, r2), d2 = h2.move(o2, this.areaBottomY);
          break;
        }
      } else c2 = h2.move(o2, r2), "rangeArea" === t2 && (c2 = h2.move(o2, n2) + h2.line(o2, r2)), d2 = h2.move(o2, this.areaBottomY) + h2.line(o2, r2);
      if (g2 = h2.move(0, this.areaBottomY) + h2.line(0, this.areaBottomY), p2 = h2.move(0, this.areaBottomY) + h2.line(0, this.areaBottomY), l2.globals.previousPaths.length > 0) {
        const t3 = this.lineHelpers.checkPreviousPaths({ pathFromLine: g2, pathFromArea: p2, realIndex: i2 });
        g2 = t3.pathFromLine, p2 = t3.pathFromArea;
      }
      return { prevX: o2, prevY: r2, linePath: c2, areaPath: d2, pathFromLine: g2, pathFromArea: p2 };
    }
    _handlePaths({ type: t2, realIndex: e2, i: s2, paths: i2 }) {
      const a2 = this.w, o2 = new X(this.w), r2 = new B(this.w);
      this.prevSeriesY.push(i2.yArrj), a2.globals.seriesXvalues[e2] = i2.xArrj, a2.globals.seriesYvalues[e2] = i2.yArrj;
      const h2 = a2.config.forecastDataPoints;
      if (h2.count > 0 && "rangeArea" !== t2) {
        const t3 = a2.globals.seriesXvalues[e2][a2.globals.seriesXvalues[e2].length - h2.count - 1], s3 = o2.drawRect(t3, 0, a2.layout.gridWidth, a2.layout.gridHeight, 0);
        a2.dom.elForecastMask.appendChild(s3.node);
        const i3 = o2.drawRect(0, 0, t3, a2.layout.gridHeight, 0);
        a2.dom.elNonForecastMask.appendChild(i3.node);
      }
      this.pointsChart || a2.globals.delayedElements.push({ el: this.elPointsMain.node, index: e2 });
      const c2 = { i: s2, realIndex: e2, animationDelay: s2, initialSpeed: a2.config.chart.animations.speed, dataChangeSpeed: a2.config.chart.animations.dynamicAnimation.speed, className: `apexcharts-${t2}` };
      if ("area" === t2) {
        const t3 = r2.fillPath({ seriesNumber: e2 });
        for (let e3 = 0; e3 < i2.areaPaths.length; e3++) {
          const s3 = o2.renderPaths(l(n({}, c2), { pathFrom: i2.pathFromArea, pathTo: i2.areaPaths[e3], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: t3 }));
          this.elSeries.add(s3);
        }
      }
      if (a2.config.stroke.show && !this.pointsChart) {
        let d2 = null;
        if ("line" === t2) d2 = r2.fillPath({ seriesNumber: e2, i: s2 });
        else if ("solid" === a2.config.stroke.fill.type) d2 = a2.globals.stroke.colors[e2];
        else {
          const t3 = a2.config.fill;
          a2.config.fill = a2.config.stroke.fill, d2 = r2.fillPath({ seriesNumber: e2, i: s2 }), a2.config.fill = t3;
        }
        for (let s3 = 0; s3 < i2.linePaths.length; s3++) {
          let g2 = d2;
          "rangeArea" === t2 && (g2 = r2.fillPath({ seriesNumber: e2 }));
          const p2 = l(n({}, c2), { pathFrom: i2.pathFromLine, pathTo: i2.linePaths[s3], stroke: d2, strokeWidth: this.strokeWidth, strokeLineCap: a2.config.stroke.lineCap, fill: "rangeArea" === t2 ? g2 : "none" }), x2 = o2.renderPaths(p2);
          if (this.elSeries.add(x2), x2.attr("fill-rule", "evenodd"), h2.count > 0 && "rangeArea" !== t2) {
            const t3 = o2.renderPaths(p2);
            t3.node.setAttribute("stroke-dasharray", h2.dashArray), h2.strokeWidth && t3.node.setAttribute("stroke-width", h2.strokeWidth), this.elSeries.add(t3), t3.attr("clip-path", `url(#forecastMask${a2.globals.cuid})`), x2.attr("clip-path", `url(#nonForecastMask${a2.globals.cuid})`);
          }
        }
      }
    }
    _iterateOverDataPoints({ type: t2, series: e2, iterations: s2, realIndex: i2, translationsIndex: a2, i: o2, x: r2, y: n2, pX: l2, pY: h2, pathsFrom: c2, linePaths: d2, areaPaths: g2, seriesIndex: p2, lineYPosition: x2, xArrj: u2, yArrj: f2, y2Arrj: m2, isRangeStart: y2, seriesRangeEnd: w2 }) {
      var v2, A2;
      const C2 = this.w, S2 = new X(this.w), k2 = this.yRatio;
      let { prevY: D2, linePath: L2, areaPath: P2, pathFromLine: M2, pathFromArea: I2 } = c2;
      const E2 = b.isNumber(C2.globals.minYArr[i2]) ? C2.globals.minYArr[i2] : C2.globals.minY;
      s2 || (s2 = C2.globals.dataPoints > 1 ? C2.globals.dataPoints - 1 : C2.globals.dataPoints);
      const F2 = (t3, e3) => e3 - t3 / k2[a2] + 2 * (this.isReversed ? t3 / k2[a2] : 0);
      let T2 = n2;
      const z2 = C2.config.chart.stacked && !C2.globals.comboCharts || C2.config.chart.stacked && C2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null == (v2 = this.w.config.series[i2]) ? void 0 : v2.type) || "column" === (null == (A2 = this.w.config.series[i2]) ? void 0 : A2.type));
      let R2 = C2.config.stroke.curve;
      Array.isArray(R2) && (R2 = Array.isArray(p2) ? R2[p2[o2]] : R2[o2]);
      let Y2, B2 = 0;
      for (let a3 = 0; a3 < s2 && 0 !== e2[o2].length; a3++) {
        const c3 = void 0 === e2[o2][a3 + 1] || null === e2[o2][a3 + 1];
        if (C2.axisFlags.isXNumeric) {
          let t3 = C2.seriesData.seriesX[i2][a3 + 1];
          void 0 === C2.seriesData.seriesX[i2][a3 + 1] && (t3 = C2.seriesData.seriesX[i2][s2 - 1]), r2 = (t3 - C2.globals.minX) / this.xRatio;
        } else r2 += this.xDivision;
        if (z2) if (o2 > 0 && C2.globals.collapsedSeries.length < C2.config.series.length - 1) {
          const t3 = (t4) => {
            for (let e3 = t4; e3 > 0; e3--) {
              if (!(C2.globals.collapsedSeriesIndices.indexOf((null == p2 ? void 0 : p2[e3]) || e3) > -1)) return e3;
              e3--;
            }
            return 0;
          };
          x2 = this.prevSeriesY[t3(o2 - 1)][a3 + 1];
        } else x2 = this.zeroY;
        else x2 = this.zeroY;
        c3 ? n2 = F2(E2, x2) : (n2 = F2(e2[o2][a3 + 1], x2), "rangeArea" === t2 && (T2 = F2(w2[o2][a3 + 1], x2))), u2.push(null === e2[o2][a3 + 1] ? null : r2), !c3 || "smooth" !== C2.config.stroke.curve && "monotoneCubic" !== C2.config.stroke.curve ? (f2.push(n2), m2.push(T2)) : (f2.push(null), m2.push(null));
        const b2 = this.lineHelpers.calculatePoints({ series: e2, x: r2, y: n2, realIndex: i2, i: o2, j: a3, prevY: D2 }), v3 = this._createPaths({ type: t2, series: e2, i: o2, j: a3, x: r2, y: n2, y2: T2, xArrj: u2, yArrj: f2, y2Arrj: m2, pX: l2, pY: h2, pathState: B2, segmentStartX: Y2, linePath: L2, areaPath: P2, linePaths: d2, areaPaths: g2, curve: R2, isRangeStart: y2 });
        g2 = v3.areaPaths, d2 = v3.linePaths, l2 = v3.pX, h2 = v3.pY, B2 = v3.pathState, Y2 = v3.segmentStartX, P2 = v3.areaPath, L2 = v3.linePath, !this.appendPathFrom || C2.globals.hasNullValues || "monotoneCubic" === R2 && "rangeArea" === t2 || (M2 += S2.line(r2, this.areaBottomY), I2 += S2.line(r2, this.areaBottomY)), this.handleNullDataPoints(e2, b2, o2, a3, i2), this._handleMarkersAndLabels({ type: t2, pointsPos: b2, i: o2, j: a3, realIndex: i2, isRangeStart: y2 });
      }
      return { yArrj: f2, xArrj: u2, pathFromArea: I2, areaPaths: g2, pathFromLine: M2, linePaths: d2, linePath: L2, areaPath: P2 };
    }
    _handleMarkersAndLabels({ type: t2, pointsPos: e2, isRangeStart: s2, i: i2, j: a2, realIndex: o2 }) {
      const r2 = this.w, n2 = new N(this.w, this.ctx);
      if (this.pointsChart) this.scatter.draw(this.elSeries, a2, { realIndex: o2, pointsPos: e2, zRatio: this.zRatio, elParent: this.elPointsMain });
      else {
        r2.seriesData.series[i2].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
        const t3 = this.markers.plotChartMarkers({ pointsPos: e2, seriesIndex: o2, j: a2 + 1 });
        null !== t3 && this.elPointsMain.add(t3);
      }
      const l2 = n2.drawDataLabel({ type: t2, isRangeStart: s2, pos: e2, i: o2, j: a2 + 1 });
      null !== l2 && this.elDataLabelsWrap.add(l2);
    }
    _createPaths({ type: t2, series: e2, i: s2, j: i2, x: a2, y: o2, xArrj: r2, yArrj: n2, y2: l2, y2Arrj: h2, pX: c2, pY: d2, pathState: g2, segmentStartX: p2, linePath: x2, areaPath: u2, linePaths: f2, areaPaths: b2, curve: m2, isRangeStart: y2 }) {
      const w2 = new X(this.w), v2 = this.areaBottomY, A2 = "rangeArea" === t2, C2 = "rangeArea" === t2 && y2;
      switch (m2) {
        case "monotoneCubic": {
          const t3 = y2 ? n2 : h2, a3 = (t4, e3) => t4.map((t5, s3) => [t5, e3[s3]]).filter((t5) => null !== t5[1]), o3 = (t4) => {
            const e3 = [];
            let s3 = 0;
            return t4.forEach((t5) => {
              null !== t5 ? s3++ : s3 > 0 && (e3.push(s3), s3 = 0);
            }), s3 > 0 && e3.push(s3), e3;
          }, l3 = (t4, e3) => {
            const s3 = o3(t4), i3 = [];
            for (let t5 = 0, a4 = 0; t5 < s3.length; a4 += s3[t5++]) i3[t5] = fe.slice(e3, a4, a4 + s3[t5]);
            return i3;
          };
          switch (g2) {
            case 0:
              if (null === t3[i2 + 1]) break;
              g2 = 1;
            case 1:
              if (!(A2 ? r2.length === e2[s2].length : i2 === e2[s2].length - 2)) break;
            case 2: {
              const e3 = y2 ? r2 : r2.slice().reverse(), s3 = y2 ? t3 : t3.slice().reverse(), i3 = a3(e3, s3), o4 = i3.length > 1 ? fe.points(i3) : i3;
              let n3 = [];
              A2 && (C2 ? b2 = i3 : n3 = b2.reverse());
              let h3 = 0, c3 = 0;
              if (l3(s3, o4).forEach((t4) => {
                h3++;
                const e4 = ((t5) => {
                  let e5 = "";
                  for (let s5 = 0; s5 < t5.length; s5++) {
                    const i4 = t5[s5], a5 = i4.length;
                    a5 > 4 ? (e5 += `C${i4[0]}, ${i4[1]}`, e5 += `, ${i4[2]}, ${i4[3]}`, e5 += `, ${i4[4]}, ${i4[5]}`) : a5 > 2 && (e5 += `S${i4[0]}, ${i4[1]}`, e5 += `, ${i4[2]}, ${i4[3]}`);
                  }
                  return e5;
                })(t4), s4 = c3;
                c3 += t4.length;
                const a4 = c3 - 1;
                C2 ? x2 = w2.move(i3[s4][0], i3[s4][1]) + e4 : A2 ? x2 = w2.move(n3[s4][0], n3[s4][1]) + w2.line(i3[s4][0], i3[s4][1]) + e4 + w2.line(n3[a4][0], n3[a4][1]) : (x2 = w2.move(i3[s4][0], i3[s4][1]) + e4, u2 = x2 + w2.line(i3[a4][0], v2) + w2.line(i3[s4][0], v2) + "z", b2.push(u2)), f2.push(x2);
              }), A2 && h3 > 1 && !C2) {
                const t4 = f2.slice(h3).reverse();
                f2.splice(h3), t4.forEach((t5) => f2.push(t5));
              }
              g2 = 0;
              break;
            }
          }
          break;
        }
        case "smooth": {
          const t3 = 0.35 * (a2 - c2);
          if (null === e2[s2][i2]) g2 = 0;
          else switch (g2) {
            case 0:
              if (p2 = c2, x2 = C2 ? w2.move(c2, h2[i2]) + w2.line(c2, d2) : w2.move(c2, d2), u2 = w2.move(c2, d2), null === e2[s2][i2 + 1] || void 0 === e2[s2][i2 + 1]) {
                f2.push(x2), b2.push(u2);
                break;
              }
              if (g2 = 1, i2 < e2[s2].length - 2) {
                const e3 = w2.curve(c2 + t3, d2, a2 - t3, o2, a2, o2);
                x2 += e3, u2 += e3;
                break;
              }
            case 1:
              if (null === e2[s2][i2 + 1]) x2 += C2 ? w2.line(c2, l2) : w2.move(c2, d2), u2 += w2.line(c2, v2) + w2.line(p2, v2) + "z", f2.push(x2), b2.push(u2), g2 = -1;
              else {
                const r3 = w2.curve(c2 + t3, d2, a2 - t3, o2, a2, o2);
                x2 += r3, u2 += r3, i2 >= e2[s2].length - 2 && (C2 && (x2 += w2.curve(a2, o2, a2, o2, a2, l2) + w2.move(a2, l2)), u2 += w2.curve(a2, o2, a2, o2, a2, v2) + w2.line(p2, v2) + "z", f2.push(x2), b2.push(u2), g2 = -1);
              }
          }
          c2 = a2, d2 = o2;
          break;
        }
        default: {
          const t3 = (t4, e3, s3) => {
            let i3 = [];
            switch (t4) {
              case "stepline":
                i3 = w2.line(e3, null, "H") + w2.line(null, s3, "V");
                break;
              case "linestep":
                i3 = w2.line(null, s3, "V") + w2.line(e3, null, "H");
                break;
              case "straight":
                i3 = w2.line(e3, s3);
            }
            return i3;
          };
          if (null === e2[s2][i2]) g2 = 0;
          else switch (g2) {
            case 0:
              if (p2 = c2, x2 = C2 ? w2.move(c2, h2[i2]) + w2.line(c2, d2) : w2.move(c2, d2), u2 = w2.move(c2, d2), null === e2[s2][i2 + 1] || void 0 === e2[s2][i2 + 1]) {
                f2.push(x2), b2.push(u2);
                break;
              }
              if (g2 = 1, i2 < e2[s2].length - 2) {
                const e3 = t3(m2, a2, o2);
                x2 += e3, u2 += e3;
                break;
              }
            case 1:
              if (null === e2[s2][i2 + 1]) x2 += C2 ? w2.line(c2, l2) : w2.move(c2, d2), u2 += w2.line(c2, v2) + w2.line(p2, v2) + "z", f2.push(x2), b2.push(u2), g2 = -1;
              else {
                const r3 = t3(m2, a2, o2);
                x2 += r3, u2 += r3, i2 >= e2[s2].length - 2 && (C2 && (x2 += w2.line(a2, l2)), u2 += w2.line(a2, v2) + w2.line(p2, v2) + "z", f2.push(x2), b2.push(u2), g2 = -1);
              }
          }
          c2 = a2, d2 = o2;
          break;
        }
      }
      return { linePaths: f2, areaPaths: b2, pX: c2, pY: d2, pathState: g2, segmentStartX: p2, linePath: x2, areaPath: u2 };
    }
    handleNullDataPoints(t2, e2, s2, i2, a2) {
      const o2 = this.w;
      if (null === t2[s2][i2] && o2.config.markers.showNullDataPoints || 1 === t2[s2].length) {
        let t3 = this.strokeWidth - o2.config.markers.strokeWidth / 2;
        t3 > 0 || (t3 = 0);
        const s3 = this.markers.plotChartMarkers({ pointsPos: e2, seriesIndex: a2, j: i2 + 1, pSize: t3, alwaysDrawMarker: true });
        null !== s3 && this.elPointsMain.add(s3);
      }
    }
  }
  class ye {
    constructor(t2) {
      this.w = t2;
    }
    drawYAxisTexts(t2, e2, s2, i2) {
      const a2 = this.w, o2 = a2.config.yaxis[0], r2 = a2.formatters.yLabelFormatters[0];
      return new X(this.w).drawText({ x: t2 + o2.labels.offsetX, y: e2 + o2.labels.offsetY, text: r2(i2, s2), textAnchor: "middle", fontSize: o2.labels.style.fontSize, fontFamily: o2.labels.style.fontFamily, foreColor: Array.isArray(o2.labels.style.colors) ? o2.labels.style.colors[s2] : o2.labels.style.colors });
    }
  }
  class we {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== t2.globals.stroke.colors ? t2.globals.stroke.colors : t2.globals.colors, this.defaultSize = Math.min(t2.layout.gridWidth, t2.layout.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = t2.layout.gridWidth / 2, "radialBar" === t2.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(t2.config.plotOptions.pie.endAngle - t2.config.plotOptions.pie.startAngle), this.initialAngle = t2.config.plotOptions.pie.startAngle % this.fullAngle, t2.globals.radialSize = this.defaultSize / 2.05 - t2.config.stroke.width - (t2.config.chart.sparkline.enabled ? 0 : t2.config.chart.dropShadow.blur), this.donutSize = t2.globals.radialSize * parseInt(t2.config.plotOptions.pie.donut.size, 10) / 100;
      const s2 = t2.config.plotOptions.pie.customScale, i2 = t2.layout.gridWidth / 2, a2 = t2.layout.gridHeight / 2;
      this.translateX = i2 - i2 * s2, this.translateY = a2 - a2 * s2, this.dataLabelsGroup = new X(this.w).group({ class: "apexcharts-datalabels-group", transform: `translate(${this.translateX}, ${this.translateY}) scale(${s2})` }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
    }
    draw(t2) {
      const e2 = this.w, s2 = new X(this.w), i2 = s2.group({ class: "apexcharts-pie" });
      if (e2.globals.noData) return i2;
      let a2 = 0;
      for (let e3 = 0; e3 < t2.length; e3++) a2 += b.negToZero(t2[e3]);
      const o2 = [], r2 = s2.group();
      0 === a2 && (a2 = 1e-5), t2.forEach((t3) => {
        this.maxY = Math.max(this.maxY, t3);
      }), e2.config.yaxis[0].max && (this.maxY = e2.config.yaxis[0].max), "back" === e2.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(i2);
      for (let s3 = 0; s3 < t2.length; s3++) {
        const i3 = this.fullAngle * b.negToZero(t2[s3]) / a2;
        o2.push(i3), "polarArea" === this.chartType ? (o2[s3] = this.fullAngle / t2.length, this.sliceSizes.push(e2.globals.radialSize * t2[s3] / this.maxY)) : this.sliceSizes.push(e2.globals.radialSize);
      }
      if (e2.globals.dataChanged) {
        let t3, s3 = 0;
        for (let t4 = 0; t4 < e2.globals.previousPaths.length; t4++) s3 += b.negToZero(e2.globals.previousPaths[t4]);
        for (let i3 = 0; i3 < e2.globals.previousPaths.length; i3++) t3 = this.fullAngle * b.negToZero(e2.globals.previousPaths[i3]) / s3, this.prevSectorAngleArr.push(t3);
      }
      if (this.donutSize < 0 && (this.donutSize = 0), "donut" === this.chartType) {
        const t3 = s2.drawCircle(this.donutSize);
        t3.attr({ cx: this.centerX, cy: this.centerY, fill: e2.config.plotOptions.pie.donut.background ? e2.config.plotOptions.pie.donut.background : "transparent" }), r2.add(t3);
      }
      const n2 = this.drawArcs(o2, t2);
      if (this.sliceLabels.forEach((t3) => {
        n2.add(t3);
      }), r2.attr({ transform: `translate(${this.translateX}, ${this.translateY}) scale(${e2.config.plotOptions.pie.customScale})` }), r2.add(n2), i2.add(r2), this.donutDataLabels.show) {
        const t3 = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
        i2.add(t3);
      }
      return "front" === e2.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(i2), i2;
    }
    drawArcs(t2, e2) {
      const s2 = this.w, i2 = new F(this.w), a2 = new X(this.w), o2 = new B(this.w), r2 = a2.group({ class: "apexcharts-slices" });
      let n2 = this.initialAngle, l2 = this.initialAngle, h2 = this.initialAngle, c2 = this.initialAngle;
      this.strokeWidth = s2.config.stroke.show ? s2.config.stroke.width : 0;
      for (let d2 = 0; d2 < t2.length; d2++) {
        const g2 = a2.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: b.escapeString(s2.seriesData.seriesNames[d2]), rel: d2 + 1, "data:realIndex": d2 });
        r2.add(g2), n2 = h2, l2 = c2, h2 = n2 + t2[d2], c2 = l2 + this.prevSectorAngleArr[d2];
        const p2 = h2 < n2 ? this.fullAngle + h2 - n2 : h2 - n2, x2 = o2.fillPath({ seriesNumber: d2, size: this.sliceSizes[d2], value: e2[d2] }), u2 = this.getChangedPath(l2, c2), f2 = a2.drawPath({ d: u2, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d2] : this.lineColorArr, strokeWidth: 0, fill: x2, fillOpacity: s2.config.fill.opacity, classes: `apexcharts-pie-area apexcharts-${this.chartType.toLowerCase()}-slice-${d2}` });
        if (f2.attr({ index: 0, j: d2 }), i2.setSelectionFilter(f2, 0, d2), s2.config.chart.dropShadow.enabled) {
          const t3 = s2.config.chart.dropShadow;
          i2.dropShadow(f2, t3, d2);
        }
        this.addListeners(f2, this.donutDataLabels);
        let m2 = { x: 0, y: 0 };
        const y2 = (n2 + p2 / 2) % this.fullAngle;
        let w2 = { x: this.centerX, y: this.centerY };
        "pie" === this.chartType || "polarArea" === this.chartType ? (m2 = b.polarToCartesian(this.centerX, this.centerY, s2.globals.radialSize / 1.25 + s2.config.plotOptions.pie.dataLabels.offset, y2), w2 = b.polarToCartesian(this.centerX, this.centerY, s2.globals.radialSize / 2, y2)) : "donut" === this.chartType && (m2 = b.polarToCartesian(this.centerX, this.centerY, (s2.globals.radialSize + this.donutSize) / 2 + s2.config.plotOptions.pie.dataLabels.offset, y2), w2 = b.polarToCartesian(this.centerX, this.centerY, (s2.globals.radialSize + this.donutSize) / 2, y2)), X.setAttrs(f2.node, { "data:angle": p2, "data:startAngle": n2, "data:strokeWidth": this.strokeWidth, "data:value": e2[d2], "data:cx": w2.x, "data:cy": w2.y }), g2.add(f2);
        let v2 = 0;
        if (!this.initialAnim || s2.globals.resized || s2.globals.dataChanged ? this.animBeginArr.push(0) : (v2 = p2 / this.fullAngle * s2.config.chart.animations.speed, 0 === v2 && (v2 = 1), this.animDur = v2 + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && s2.globals.dataChanged ? this.animatePaths(f2, { size: this.sliceSizes[d2], endAngle: h2, startAngle: n2, prevStartAngle: l2, prevEndAngle: c2, animateStartingPos: true, i: d2, animBeginArr: this.animBeginArr, shouldSetPrevPaths: true, dur: s2.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(f2, { size: this.sliceSizes[d2], endAngle: h2, startAngle: n2, i: d2, totalItems: t2.length - 1, animBeginArr: this.animBeginArr, dur: v2 }), s2.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && f2.node.addEventListener("mouseup", this.pieClicked.bind(this, d2)), void 0 !== s2.interact.selectedDataPoints[0] && s2.interact.selectedDataPoints[0].indexOf(d2) > -1 && this.pieClicked(d2), s2.config.dataLabels.enabled) {
          const e3 = m2.x, o3 = m2.y;
          let r3 = 100 * p2 / this.fullAngle + "%";
          if (0 !== p2 && s2.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t2[d2]) {
            const t3 = s2.config.dataLabels.formatter;
            void 0 !== t3 && (r3 = t3(s2.globals.seriesPercent[d2][0], { seriesIndex: d2, w: s2 }));
            const n3 = s2.globals.dataLabels.style.colors[d2], l3 = a2.group({ class: "apexcharts-datalabels" }), h3 = a2.drawText({ x: e3, y: o3, text: r3, textAnchor: "middle", fontSize: s2.config.dataLabels.style.fontSize, fontFamily: s2.config.dataLabels.style.fontFamily, fontWeight: s2.config.dataLabels.style.fontWeight, foreColor: n3 });
            if (l3.add(h3), s2.config.dataLabels.dropShadow.enabled) {
              const t4 = s2.config.dataLabels.dropShadow;
              i2.dropShadow(h3, t4);
            }
            h3.node.classList.add("apexcharts-pie-label"), s2.config.chart.animations.animate && false === s2.globals.resized && (h3.node.classList.add("apexcharts-pie-label-delay"), h3.node.style.animationDelay = s2.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(l3);
          }
        }
      }
      return r2;
    }
    addListeners(t2, e2) {
      const s2 = new X(this.w);
      t2.node.addEventListener("mouseenter", s2.pathMouseEnter.bind(this, t2)), t2.node.addEventListener("mouseleave", s2.pathMouseLeave.bind(this, t2)), t2.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t2.node, e2)), t2.node.addEventListener("mousedown", s2.pathMouseDown.bind(this, t2)), this.donutDataLabels.total.showAlways || (t2.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t2.node, e2)), t2.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t2.node, e2)));
    }
    animatePaths(t2, e2) {
      const s2 = this.w;
      let i2 = e2.endAngle < e2.startAngle ? this.fullAngle + e2.endAngle - e2.startAngle : e2.endAngle - e2.startAngle, a2 = i2, o2 = e2.startAngle;
      const r2 = e2.startAngle;
      void 0 !== e2.prevStartAngle && void 0 !== e2.prevEndAngle && (o2 = e2.prevEndAngle, a2 = e2.prevEndAngle < e2.prevStartAngle ? this.fullAngle + e2.prevEndAngle - e2.prevStartAngle : e2.prevEndAngle - e2.prevStartAngle), e2.i === s2.config.series.length - 1 && (i2 + r2 > this.fullAngle ? e2.endAngle = e2.endAngle - (i2 + r2) : i2 + r2 < this.fullAngle && (e2.endAngle = e2.endAngle + (this.fullAngle - (i2 + r2)))), i2 === this.fullAngle && (i2 = this.fullAngle - 0.01), this.animateArc(t2, o2, r2, i2, a2, e2);
    }
    animateArc(t2, e2, s2, i2, a2, o2) {
      const r2 = this, n2 = this.w, l2 = new E(this.w), h2 = o2.size;
      let c2;
      (isNaN(e2) || isNaN(a2)) && (e2 = s2, a2 = i2, o2.dur = 0);
      let d2 = i2, g2 = s2;
      const p2 = e2 < s2 ? this.fullAngle + e2 - s2 : e2 - s2;
      n2.globals.dataChanged && o2.shouldSetPrevPaths && o2.prevEndAngle && (c2 = r2.getPiePath({ me: r2, startAngle: o2.prevStartAngle, angle: o2.prevEndAngle < o2.prevStartAngle ? this.fullAngle + o2.prevEndAngle - o2.prevStartAngle : o2.prevEndAngle - o2.prevStartAngle, size: h2 }), t2.attr({ d: c2 })), 0 !== o2.dur ? t2.animate(o2.dur, o2.animBeginArr[o2.i]).after(function() {
        "pie" !== r2.chartType && "donut" !== r2.chartType && "polarArea" !== r2.chartType || this.animate(n2.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": r2.strokeWidth }), o2.i === n2.config.series.length - 1 && l2.animationCompleted(t2);
      }).during((n3) => {
        d2 = p2 + (i2 - p2) * n3, o2.animateStartingPos && (d2 = a2 + (i2 - a2) * n3, g2 = e2 - a2 + (s2 - (e2 - a2)) * n3), c2 = r2.getPiePath({ me: r2, startAngle: g2, angle: d2, size: h2 }), t2.node.setAttribute("data:pathOrig", c2), t2.attr({ d: c2 });
      }) : (c2 = r2.getPiePath({ me: r2, startAngle: g2, angle: i2, size: h2 }), o2.isTrack || (n2.globals.animationEnded = true), t2.node.setAttribute("data:pathOrig", c2), t2.attr({ d: c2, "stroke-width": r2.strokeWidth }));
    }
    pieClicked(t2) {
      const e2 = this.w, s2 = this, i2 = s2.sliceSizes[t2] + (e2.config.plotOptions.pie.expandOnClick ? 4 : 0), a2 = e2.dom.Paper.findOne(`.apexcharts-${s2.chartType.toLowerCase()}-slice-${t2}`);
      if ("true" === a2.attr("data:pieClicked")) {
        a2.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(a2.node, this.donutDataLabels);
        const t3 = a2.attr("data:pathOrig");
        return void a2.attr({ d: t3 });
      }
      {
        const s3 = e2.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
        Array.prototype.forEach.call(s3, (t3) => {
          t3.setAttribute("data:pieClicked", "false");
          const e3 = t3.getAttribute("data:pathOrig");
          e3 && t3.setAttribute("d", e3);
        }), e2.interact.capturedDataPointIndex = t2, a2.attr("data:pieClicked", "true");
      }
      const o2 = parseInt(a2.attr("data:startAngle"), 10), r2 = parseInt(a2.attr("data:angle"), 10), n2 = s2.getPiePath({ me: s2, startAngle: o2, angle: r2, size: i2 });
      360 !== r2 && a2.plot(n2);
    }
    getChangedPath(t2, e2) {
      let s2 = "";
      return this.dynamicAnim && this.w.globals.dataChanged && (s2 = this.getPiePath({ me: this, startAngle: t2, angle: e2 - t2, size: this.size })), s2;
    }
    getPiePath({ me: t2, startAngle: e2, angle: s2, size: i2 }) {
      let a2;
      const o2 = new X(this.w), r2 = e2, n2 = Math.PI * (r2 - 90) / 180;
      let l2 = s2 + e2;
      Math.ceil(l2) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (l2 = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(l2) > this.fullAngle && (l2 -= this.fullAngle);
      const h2 = Math.PI * (l2 - 90) / 180, c2 = t2.centerX + i2 * Math.cos(n2), d2 = t2.centerY + i2 * Math.sin(n2), g2 = t2.centerX + i2 * Math.cos(h2), p2 = t2.centerY + i2 * Math.sin(h2), x2 = b.polarToCartesian(t2.centerX, t2.centerY, t2.donutSize, l2), u2 = b.polarToCartesian(t2.centerX, t2.centerY, t2.donutSize, r2), f2 = s2 > 180 ? 1 : 0, m2 = ["M", c2, d2, "A", i2, i2, 0, f2, 1, g2, p2];
      return a2 = "donut" === t2.chartType ? [...m2, "L", x2.x, x2.y, "A", t2.donutSize, t2.donutSize, 0, f2, 0, u2.x, u2.y, "L", c2, d2, "z"].join(" ") : "pie" === t2.chartType || "polarArea" === t2.chartType ? [...m2, "L", t2.centerX, t2.centerY, "L", c2, d2].join(" ") : [...m2].join(" "), o2.roundPathCorners(a2, 2 * this.strokeWidth);
    }
    drawPolarElements(t2) {
      const e2 = this.w, s2 = new $(this.w), i2 = new X(this.w), a2 = new ye(this.w), o2 = i2.group(), r2 = i2.group(), n2 = s2.niceScale(0, Math.ceil(this.maxY), 0), l2 = n2.result.reverse(), h2 = n2.result.length;
      this.maxY = n2.niceMax;
      let c2 = e2.globals.radialSize;
      const d2 = c2 / (h2 - 1);
      for (let t3 = 0; t3 < h2 - 1; t3++) {
        const s3 = i2.drawCircle(c2);
        if (s3.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": e2.config.plotOptions.polarArea.rings.strokeWidth, stroke: e2.config.plotOptions.polarArea.rings.strokeColor }), e2.config.yaxis[0].show) {
          const s4 = a2.drawYAxisTexts(this.centerX, this.centerY - c2 + parseInt(e2.config.yaxis[0].labels.style.fontSize, 10) / 2, t3, l2[t3]);
          r2.add(s4);
        }
        o2.add(s3), c2 -= d2;
      }
      this.drawSpokes(t2), t2.add(o2), t2.add(r2);
    }
    renderInnerDataLabels(t2, e2, s2) {
      const i2 = this.w, a2 = new X(this.w), o2 = e2.total.show;
      t2.node.innerHTML = "", t2.node.style.opacity = s2.opacity;
      const r2 = s2.centerX, n2 = this.donutDataLabels.total.label ? s2.centerY : s2.centerY - s2.centerY / 6;
      let l2, h2;
      l2 = void 0 === e2.name.color ? i2.globals.colors[0] : e2.name.color;
      let c2 = e2.name.fontSize, d2 = e2.name.fontFamily, g2 = e2.name.fontWeight;
      h2 = void 0 === e2.value.color ? i2.config.chart.foreColor : e2.value.color;
      const p2 = e2.value.formatter;
      let x2 = "", u2 = "";
      if (o2 ? (l2 = e2.total.color, c2 = e2.total.fontSize, d2 = e2.total.fontFamily, g2 = e2.total.fontWeight, u2 = this.donutDataLabels.total.label ? e2.total.label : "", x2 = e2.total.formatter(i2)) : 1 === i2.seriesData.series.length && (x2 = p2(i2.seriesData.series[0], i2), u2 = i2.seriesData.seriesNames[0]), u2 && (u2 = e2.name.formatter(u2, e2.total.show, i2)), e2.name.show) {
        const s3 = a2.drawText({ x: r2, y: n2 + parseFloat(e2.name.offsetY), text: u2, textAnchor: "middle", foreColor: l2, fontSize: c2, fontWeight: g2, fontFamily: d2 });
        s3.node.classList.add("apexcharts-datalabel-label"), t2.add(s3);
      }
      if (e2.value.show) {
        const s3 = e2.name.show ? parseFloat(e2.value.offsetY) + 16 : e2.value.offsetY, i3 = a2.drawText({ x: r2, y: n2 + s3, text: x2, textAnchor: "middle", foreColor: h2, fontWeight: e2.value.fontWeight, fontSize: e2.value.fontSize, fontFamily: e2.value.fontFamily });
        i3.node.classList.add("apexcharts-datalabel-value"), t2.add(i3);
      }
      return t2;
    }
    printInnerLabels(t2, e2, s2, i2) {
      const a2 = this.w;
      let o2;
      i2 ? o2 = void 0 === t2.name.color ? a2.globals.colors[parseInt(i2.parentNode.getAttribute("rel"), 10) - 1] : t2.name.color : a2.seriesData.series.length > 1 && t2.total.show && (o2 = t2.total.color);
      const r2 = a2.dom.baseEl.querySelector(".apexcharts-datalabel-label"), n2 = a2.dom.baseEl.querySelector(".apexcharts-datalabel-value");
      s2 = (0, t2.value.formatter)(s2, a2), i2 || "function" != typeof t2.total.formatter || (s2 = t2.total.formatter(a2));
      const l2 = e2 === t2.total.label;
      e2 = this.donutDataLabels.total.label ? t2.name.formatter(e2, l2, a2) : "", null !== r2 && (r2.textContent = e2), null !== n2 && (n2.textContent = s2), null !== r2 && (r2.style.fill = o2);
    }
    printDataLabelsInner(t2, e2) {
      const s2 = this.w, i2 = t2.getAttribute("data:value"), a2 = s2.seriesData.seriesNames[parseInt(t2.parentNode.getAttribute("rel"), 10) - 1];
      s2.seriesData.series.length > 1 && this.printInnerLabels(e2, a2, i2, t2);
      const o2 = s2.dom.baseEl.querySelector(".apexcharts-datalabels-group");
      null !== o2 && (o2.style.opacity = 1);
    }
    drawSpokes(t2) {
      const e2 = this.w, s2 = new X(this.w), i2 = e2.config.plotOptions.polarArea.spokes;
      if (0 === i2.strokeWidth) return;
      const a2 = [], o2 = 360 / e2.seriesData.series.length;
      for (let t3 = 0; t3 < e2.seriesData.series.length; t3++) a2.push(b.polarToCartesian(this.centerX, this.centerY, e2.globals.radialSize, e2.config.plotOptions.pie.startAngle + o2 * t3));
      a2.forEach((e3, a3) => {
        const o3 = s2.drawLine(e3.x, e3.y, this.centerX, this.centerY, Array.isArray(i2.connectorColors) ? i2.connectorColors[a3] : i2.connectorColors);
        t2.add(o3);
      });
    }
    revertDataLabelsInner() {
      const t2 = this.w;
      if (this.donutDataLabels.show) {
        const e2 = t2.dom.Paper.findOne(".apexcharts-datalabels-group"), s2 = this.renderInnerDataLabels(e2, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
        t2.dom.Paper.findOne(".apexcharts-radialbar, .apexcharts-pie").add(s2);
      }
    }
  }
  function ve(t2, e2) {
    let s2 = 0;
    for (let e3 = 0; e3 < t2.length; e3++) s2 += t2[e3];
    const i2 = e2 / s2, a2 = new Array(t2.length);
    for (let e3 = 0; e3 < t2.length; e3++) a2[e3] = t2[e3] * i2;
    return a2;
  }
  function Ae(t2, e2, s2, i2) {
    const a2 = i2 * i2, o2 = s2 * s2;
    return Math.max(a2 * e2 / o2, o2 / (a2 * t2));
  }
  function Ce(t2, e2, s2, i2, a2, o2) {
    if (0 === t2) return true;
    return Ae(e2, s2, i2, o2) >= Ae(Math.min(e2, a2), Math.max(s2, a2), i2 + a2, o2);
  }
  function Se(t2, e2, s2, i2, a2, o2, r2, n2) {
    if (r2 >= n2) {
      const r3 = i2 / n2;
      let l2 = o2;
      for (let i3 = 0; i3 < s2; i3++) {
        const s3 = e2[i3] / r3;
        t2.push([a2, l2, a2 + r3, l2 + s3]), l2 += s3;
      }
    } else {
      const n3 = i2 / r2;
      let l2 = a2;
      for (let i3 = 0; i3 < s2; i3++) {
        const s3 = e2[i3] / n3;
        t2.push([l2, o2, l2 + s3, o2 + n3]), l2 += s3;
      }
    }
  }
  function ke(t2, e2, s2, i2, a2) {
    const o2 = [], r2 = t2.length;
    if (0 === r2) return o2;
    const n2 = new Array(r2);
    let l2 = 0, h2 = 0, c2 = 1 / 0, d2 = -1 / 0, g2 = 0;
    for (; g2 < r2; ) {
      const r3 = Math.min(i2, a2), p2 = t2[g2];
      if (Ce(l2, c2, d2, h2, p2, r3)) n2[l2] = p2, l2++, h2 += p2, p2 < c2 && (c2 = p2), p2 > d2 && (d2 = p2), g2++;
      else {
        if (Se(o2, n2, l2, h2, e2, s2, i2, a2), i2 >= a2) {
          const t3 = h2 / a2;
          e2 += t3, i2 -= t3;
        } else {
          const t3 = h2 / i2;
          s2 += t3, a2 -= t3;
        }
        l2 = 0, h2 = 0, c2 = 1 / 0, d2 = -1 / 0;
      }
    }
    return l2 > 0 && Se(o2, n2, l2, h2, e2, s2, i2, a2), o2;
  }
  const De = { generate: function(t2, e2, s2) {
    const i2 = t2.length, a2 = new Array(i2);
    for (let e3 = 0; e3 < i2; e3++) {
      let s3 = 0;
      const i3 = t2[e3];
      for (let t3 = 0; t3 < i3.length; t3++) s3 += i3[t3];
      a2[e3] = s3;
    }
    const o2 = ke(ve(a2, e2 * s2), 0, 0, e2, s2), r2 = new Array(i2);
    for (let e3 = 0; e3 < i2; e3++) {
      const s3 = o2[e3], i3 = s3[0], a3 = s3[1], n2 = s3[2] - i3, l2 = s3[3] - a3;
      r2[e3] = ke(ve(t2[e3], n2 * l2), i3, a3, n2, l2);
    }
    return r2;
  } };
  return te.use({ line: me, area: me, scatter: me, bubble: me, rangeArea: me, bar: de, column: de, barStacked: class extends de {
    draw(t2, e2) {
      const s2 = this.w;
      this.graphics = new X(this.w), this.bar = new de(this.w, this.ctx, this.xyRatios);
      const i2 = new I(this.w);
      t2 = i2.getLogSeries(t2), this.yRatio = i2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t2), "100%" === s2.config.chart.stackType && (t2 = s2.globals.comboCharts ? e2.map((t3) => s2.globals.seriesPercent[t3]) : s2.globals.seriesPercent.slice()), this.series = t2, this.barHelpers.initializeStackedPrevVars(this);
      const a2 = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      let o2 = 0, r2 = 0;
      for (let i3 = 0, h2 = 0; i3 < t2.length; i3++, h2++) {
        const c2 = s2.globals.comboCharts ? e2[i3] : i3, { groupIndex: d2, columnGroupIndex: g2 } = this.barHelpers.getGroupIndex(c2);
        this.groupCtx = this[s2.labelData.seriesGroups[d2]];
        const p2 = [], x2 = [];
        let u2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = s2.globals.seriesYAxisReverseMap[c2][0], u2 = c2), this.isReversed = s2.config.yaxis[this.yaxisIndex] && s2.config.yaxis[this.yaxisIndex].reversed;
        let f2 = this.graphics.group({ class: "apexcharts-series", seriesName: b.escapeString(s2.seriesData.seriesNames[c2]), rel: i3 + 1, "data:realIndex": c2 });
        Q.addCollapsedClassToSeries(this.w, f2, c2);
        const m2 = this.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": c2 }), y2 = this.graphics.group({ class: "apexcharts-bar-goals-markers" }), w2 = this.initialPositions(o2, r2, void 0, void 0, void 0, void 0, u2), { xDivision: v2, yDivision: A2, zeroH: C2, zeroW: S2 } = w2;
        let k2 = w2.barHeight, D2 = w2.barWidth;
        r2 = w2.y, o2 = w2.x, s2.globals.barHeight = k2, s2.globals.barWidth = D2, this.barHelpers.initializeStackedXYVars(this), 1 === this.groupCtx.prevY.length && this.groupCtx.prevY[0].every((t3) => isNaN(t3)) && (this.groupCtx.prevY[0] = this.groupCtx.prevY[0].map(() => C2), this.groupCtx.prevYF[0] = this.groupCtx.prevYF[0].map(() => 0));
        for (let e3 = 0; e3 < s2.globals.dataPoints; e3++) {
          const a3 = this.barHelpers.getStrokeWidth(i3, e3, c2), b2 = { indexes: { i: i3, j: e3, realIndex: c2, translationsIndex: u2, bc: h2 }, strokeWidth: a3, x: o2, y: r2, elSeries: f2, columnGroupIndex: g2, seriesGroup: s2.labelData.seriesGroups[d2] };
          let w3 = null;
          this.isHorizontal ? (w3 = this.drawStackedBarPaths(l(n({}, b2), { zeroW: S2, barHeight: k2, yDivision: A2 })), D2 = this.series[i3][e3] / this.invertedYRatio) : (w3 = this.drawStackedColumnPaths(l(n({}, b2), { xDivision: v2, barWidth: D2, zeroH: C2 })), k2 = this.series[i3][e3] / this.yRatio[u2]);
          const L2 = this.barHelpers.drawGoalLine({ barXPosition: w3.barXPosition, barYPosition: w3.barYPosition, goalX: w3.goalX, goalY: w3.goalY, barHeight: k2, barWidth: D2 });
          L2 && y2.add(L2), r2 = w3.y, o2 = w3.x, p2.push(o2), x2.push(r2);
          const P2 = this.barHelpers.getPathFillColor(t2, i3, e3, c2);
          let M2 = "";
          const I2 = s2.globals.isBarHorizontal ? "apexcharts-flip-x" : "apexcharts-flip-y";
          ("bottom" === this.barHelpers.arrBorderRadius[c2][e3] && s2.seriesData.series[c2][e3] > 0 || "top" === this.barHelpers.arrBorderRadius[c2][e3] && s2.seriesData.series[c2][e3] < 0) && (M2 = I2), f2 = this.renderSeries(l(n({ realIndex: c2, pathFill: P2.color }, P2.useRangeColor ? { lineFill: P2.color } : {}), { j: e3, i: i3, columnGroupIndex: g2, pathFrom: w3.pathFrom, pathTo: w3.pathTo, strokeWidth: a3, elSeries: f2, x: o2, y: r2, series: t2, barHeight: k2, barWidth: D2, elDataLabelsWrap: m2, elGoalsMarkers: y2, type: "bar", visibleSeries: g2, classes: M2 }));
        }
        s2.globals.seriesXvalues[c2] = p2, s2.globals.seriesYvalues[c2] = x2, this.groupCtx.prevY.push(this.groupCtx.yArrj), this.groupCtx.prevYF.push(this.groupCtx.yArrjF), this.groupCtx.prevYVal.push(this.groupCtx.yArrjVal), this.groupCtx.prevX.push(this.groupCtx.xArrj), this.groupCtx.prevXF.push(this.groupCtx.xArrjF), this.groupCtx.prevXVal.push(this.groupCtx.xArrjVal), a2.add(f2);
      }
      return a2;
    }
    initialPositions(t2, e2, s2, i2, a2, o2, r2) {
      const n2 = this.w;
      let l2, h2;
      if (this.isHorizontal) {
        i2 = n2.layout.gridHeight / n2.globals.dataPoints;
        const t3 = n2.config.plotOptions.bar.barHeight;
        l2 = -1 === String(t3).indexOf("%") ? parseInt(t3, 10) : i2 * parseInt(t3, 10) / 100, o2 = n2.globals.padHorizontal + (this.isReversed ? n2.layout.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), e2 = (i2 - l2) / 2;
      } else {
        h2 = s2 = n2.layout.gridWidth / n2.globals.dataPoints;
        const e3 = n2.config.plotOptions.bar.columnWidth;
        n2.axisFlags.isXNumeric && n2.globals.dataPoints > 1 ? h2 = (s2 = n2.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : -1 === String(e3).indexOf("%") ? h2 = parseInt(e3, 10) : h2 *= parseInt(e3, 10) / 100, a2 = this.isReversed ? this.baseLineY[r2] : n2.layout.gridHeight - this.baseLineY[r2], t2 = n2.globals.padHorizontal + (s2 - h2) / 2;
      }
      const c2 = n2.globals.barGroups.length || 1;
      return { x: t2, y: e2, yDivision: i2, xDivision: s2, barHeight: l2 / c2, barWidth: h2 / c2, zeroH: a2, zeroW: o2 };
    }
    drawStackedBarPaths({ indexes: t2, barHeight: e2, strokeWidth: s2, zeroW: i2, x: a2, y: o2, columnGroupIndex: r2, seriesGroup: n2, yDivision: l2, elSeries: h2 }) {
      const c2 = this.w, d2 = o2 + r2 * e2;
      let g2;
      const p2 = t2.i, x2 = t2.j, u2 = t2.realIndex, f2 = t2.translationsIndex;
      let b2 = 0;
      for (let t3 = 0; t3 < this.groupCtx.prevXF.length; t3++) b2 += this.groupCtx.prevXF[t3][x2];
      let m2 = p2;
      if (c2.config.series[u2].name && (m2 = n2.indexOf(c2.config.series[u2].name)), m2 > 0) {
        let t3 = i2;
        this.groupCtx.prevXVal[m2 - 1][x2] < 0 ? t3 = this.series[p2][x2] >= 0 ? this.groupCtx.prevX[m2 - 1][x2] + b2 - 2 * (this.isReversed ? b2 : 0) : this.groupCtx.prevX[m2 - 1][x2] : this.groupCtx.prevXVal[m2 - 1][x2] >= 0 && (t3 = this.series[p2][x2] >= 0 ? this.groupCtx.prevX[m2 - 1][x2] : this.groupCtx.prevX[m2 - 1][x2] - b2 + 2 * (this.isReversed ? b2 : 0)), g2 = t3;
      } else g2 = i2;
      a2 = null === this.series[p2][x2] ? g2 : g2 + this.series[p2][x2] / this.invertedYRatio - 2 * (this.isReversed ? this.series[p2][x2] / this.invertedYRatio : 0);
      const y2 = this.barHelpers.getBarpaths({ barYPosition: d2, barHeight: e2, x1: g2, x2: a2, strokeWidth: s2, isReversed: this.isReversed, series: this.series, realIndex: t2.realIndex, seriesGroup: n2, i: p2, j: x2, w: c2 });
      return this.barHelpers.barBackground({ j: x2, i: p2, y1: d2, y2: e2, elSeries: h2 }), o2 += l2, { pathTo: y2.pathTo, pathFrom: y2.pathFrom, goalX: this.barHelpers.getGoalValues("x", i2, null, p2, x2, f2), barXPosition: g2, barYPosition: d2, x: a2, y: o2 };
    }
    drawStackedColumnPaths({ indexes: t2, x: e2, y: s2, xDivision: i2, barWidth: a2, zeroH: o2, columnGroupIndex: r2, seriesGroup: n2, elSeries: l2 }) {
      var h2, c2, d2, g2;
      const p2 = this.w, x2 = t2.i, u2 = t2.j, f2 = t2.bc, b2 = t2.realIndex, m2 = t2.translationsIndex;
      if (p2.axisFlags.isXNumeric) {
        let t3 = p2.seriesData.seriesX[b2][u2];
        t3 || (t3 = 0), e2 = (t3 - p2.globals.minX) / this.xRatio - a2 / 2 * p2.globals.barGroups.length;
      }
      const y2 = e2 + r2 * a2;
      let w2, v2 = 0;
      for (let t3 = 0; t3 < this.groupCtx.prevYF.length; t3++) v2 += isNaN(this.groupCtx.prevYF[t3][u2]) ? 0 : this.groupCtx.prevYF[t3][u2];
      let A2 = x2;
      if (n2 && (A2 = n2.indexOf(p2.seriesData.seriesNames[b2])), A2 > 0 && !p2.axisFlags.isXNumeric || A2 > 0 && p2.axisFlags.isXNumeric && p2.seriesData.seriesX[b2 - 1][u2] === p2.seriesData.seriesX[b2][u2]) {
        let t3, e3;
        const s3 = Math.min(this.yRatio.length + 1, b2 + 1);
        if (void 0 !== this.groupCtx.prevY[A2 - 1] && this.groupCtx.prevY[A2 - 1].length) {
          for (let t4 = 1; t4 < s3; t4++) if (!isNaN(null == (h2 = this.groupCtx.prevY[A2 - t4]) ? void 0 : h2[u2])) {
            e3 = this.groupCtx.prevY[A2 - t4][u2];
            break;
          }
        }
        for (let i3 = 1; i3 < s3; i3++) {
          if ((null == (c2 = this.groupCtx.prevYVal[A2 - i3]) ? void 0 : c2[u2]) < 0) {
            t3 = this.series[x2][u2] >= 0 ? e3 - v2 + 2 * (this.isReversed ? v2 : 0) : e3;
            break;
          }
          if ((null == (d2 = this.groupCtx.prevYVal[A2 - i3]) ? void 0 : d2[u2]) >= 0) {
            t3 = this.series[x2][u2] >= 0 ? e3 : e3 + v2 - 2 * (this.isReversed ? v2 : 0);
            break;
          }
        }
        void 0 === t3 && (t3 = p2.layout.gridHeight), w2 = (null == (g2 = this.groupCtx.prevYF[0]) ? void 0 : g2.every((t4) => 0 === t4)) && this.groupCtx.prevYF.slice(1, A2).every((t4) => t4.every((t5) => isNaN(t5))) ? o2 : t3;
      } else w2 = o2;
      s2 = this.series[x2][u2] ? w2 - this.series[x2][u2] / this.yRatio[m2] + 2 * (this.isReversed ? this.series[x2][u2] / this.yRatio[m2] : 0) : w2;
      const C2 = this.barHelpers.getColumnPaths({ barXPosition: y2, barWidth: a2, y1: w2, y2: s2, yRatio: this.yRatio[m2], strokeWidth: this.strokeWidth, isReversed: this.isReversed, series: this.series, seriesGroup: n2, realIndex: t2.realIndex, i: x2, j: u2, w: p2 });
      return this.barHelpers.barBackground({ bc: f2, j: u2, i: x2, x1: y2, x2: a2, elSeries: l2 }), { pathTo: C2.pathTo, pathFrom: C2.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, o2, x2, u2), barXPosition: y2, x: p2.axisFlags.isXNumeric ? e2 : e2 + i2, y: s2 };
    }
  }, rangeBar: class extends de {
    draw(t2, e2) {
      const s2 = this.w, i2 = new X(this.w);
      this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t2, this.seriesRangeStart = s2.rangeData.seriesRangeStart, this.seriesRangeEnd = s2.rangeData.seriesRangeEnd, this.barHelpers.initVariables(t2);
      const a2 = i2.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" });
      for (let o2 = 0; o2 < t2.length; o2++) {
        let r2, l2;
        const h2 = s2.globals.comboCharts ? e2[o2] : o2, { columnGroupIndex: c2 } = this.barHelpers.getGroupIndex(h2), d2 = i2.group({ class: "apexcharts-series", seriesName: b.escapeString(s2.seriesData.seriesNames[h2]), rel: o2 + 1, "data:realIndex": h2 });
        Q.addCollapsedClassToSeries(this.w, d2, h2), t2[o2].length > 0 && (this.visibleI = this.visibleI + 1);
        let g2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = s2.globals.seriesYAxisReverseMap[h2][0], g2 = h2);
        const p2 = this.barHelpers.initialPositions(h2), { y: x2, zeroW: u2, x: f2, xDivision: m2, yDivision: y2, zeroH: w2 } = p2;
        let v2 = p2.barWidth, A2 = p2.barHeight;
        l2 = x2, r2 = f2;
        const C2 = i2.group({ class: "apexcharts-datalabels", "data:realIndex": h2 }), S2 = i2.group({ class: "apexcharts-rangebar-goals-markers" });
        for (let e3 = 0; e3 < s2.globals.dataPoints; e3++) {
          const i3 = this.barHelpers.getStrokeWidth(o2, e3, h2), a3 = this.seriesRangeStart[o2][e3], x3 = this.seriesRangeEnd[o2][e3];
          let f3 = null, b2 = null, k2 = null;
          const D2 = { x: r2, y: l2, strokeWidth: i3, elSeries: d2 };
          let L2 = this.seriesLen;
          if (s2.config.plotOptions.bar.rangeBarGroupRows && (L2 = 1), void 0 === s2.config.series[o2].data[e3]) break;
          if (this.isHorizontal) {
            k2 = l2 + A2 * this.visibleI;
            const t3 = (y2 - A2 * L2) / 2;
            if (s2.config.series[o2].data[e3].x) {
              const s3 = this.detectOverlappingBars({ i: o2, j: e3, barYPosition: k2, srty: t3, barHeight: A2, yDivision: y2, initPositions: p2 });
              A2 = s3.barHeight, k2 = s3.barYPosition;
            }
            f3 = this.drawRangeBarPaths(n({ indexes: { i: o2, j: e3, realIndex: h2 }, barHeight: A2, barYPosition: k2, zeroW: u2, yDivision: y2, y1: a3, y2: x3 }, D2)), v2 = f3.barWidth;
          } else {
            s2.axisFlags.isXNumeric && (r2 = (s2.seriesData.seriesX[o2][e3] - s2.globals.minX) / this.xRatio - v2 / 2), b2 = r2 + v2 * this.visibleI;
            const t3 = (m2 - v2 * L2) / 2;
            if (s2.config.series[o2].data[e3].x) {
              const s3 = this.detectOverlappingBars({ i: o2, j: e3, barXPosition: b2, srtx: t3, barWidth: v2, xDivision: m2, initPositions: p2 });
              v2 = s3.barWidth, b2 = s3.barXPosition;
            }
            f3 = this.drawRangeColumnPaths(n({ indexes: { i: o2, j: e3, realIndex: h2, translationsIndex: g2 }, barWidth: v2, barXPosition: b2, zeroH: w2, xDivision: m2 }, D2)), A2 = f3.barHeight;
          }
          const P2 = this.barHelpers.drawGoalLine({ barXPosition: f3.barXPosition, barYPosition: k2, goalX: f3.goalX, goalY: f3.goalY, barHeight: A2, barWidth: v2 });
          P2 && S2.add(P2), l2 = f3.y, r2 = f3.x;
          const M2 = this.barHelpers.getPathFillColor(t2, o2, e3, h2);
          this.renderSeries({ realIndex: h2, pathFill: M2.color, lineFill: M2.useRangeColor ? M2.color : s2.globals.stroke.colors[h2], j: e3, i: o2, x: r2, y: l2, y1: a3, y2: x3, pathFrom: f3.pathFrom, pathTo: f3.pathTo, strokeWidth: i3, elSeries: d2, series: t2, barHeight: A2, barWidth: v2, barXPosition: b2, barYPosition: k2, columnGroupIndex: c2, elDataLabelsWrap: C2, elGoalsMarkers: S2, visibleSeries: this.visibleI, type: "rangebar" });
        }
        a2.add(d2);
      }
      return a2;
    }
    detectOverlappingBars({ i: t2, j: e2, barYPosition: s2, barXPosition: i2, srty: a2, srtx: o2, barHeight: r2, barWidth: n2, yDivision: l2, xDivision: h2, initPositions: c2 }) {
      const d2 = this.w;
      let g2 = [];
      const p2 = d2.config.series[t2].data[e2].rangeName, x2 = d2.config.series[t2].data[e2].x, u2 = Array.isArray(x2) ? x2.join(" ") : x2, f2 = d2.labelData.labels.map((t3) => Array.isArray(t3) ? t3.join(" ") : t3).indexOf(u2), b2 = d2.rangeData.seriesRange[t2].findIndex((t3) => t3.x === u2 && t3.overlaps.length > 0);
      return this.isHorizontal ? (s2 = d2.config.plotOptions.bar.rangeBarGroupRows ? a2 + l2 * f2 : a2 + r2 * this.visibleI + l2 * f2, b2 > -1 && !d2.config.plotOptions.bar.rangeBarOverlap && (g2 = d2.rangeData.seriesRange[t2][b2].overlaps, g2.indexOf(p2) > -1 && (s2 = (r2 = c2.barHeight / g2.length) * this.visibleI + l2 * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + r2 * (this.visibleI + g2.indexOf(p2)) + l2 * f2))) : (f2 > -1 && !d2.labelData.timescaleLabels.length && (i2 = d2.config.plotOptions.bar.rangeBarGroupRows ? o2 + h2 * f2 : o2 + n2 * this.visibleI + h2 * f2), b2 > -1 && !d2.config.plotOptions.bar.rangeBarOverlap && (g2 = d2.rangeData.seriesRange[t2][b2].overlaps, g2.indexOf(p2) > -1 && (i2 = (n2 = c2.barWidth / g2.length) * this.visibleI + h2 * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + n2 * (this.visibleI + g2.indexOf(p2)) + h2 * f2))), { barYPosition: s2, barXPosition: i2, barHeight: r2, barWidth: n2 };
    }
    drawRangeColumnPaths({ indexes: t2, x: e2, xDivision: s2, barWidth: i2, barXPosition: a2, zeroH: o2 }) {
      const r2 = this.w, { i: n2, j: l2, realIndex: h2, translationsIndex: c2 } = t2, d2 = this.yRatio[c2], g2 = this.getRangeValue(h2, l2);
      let p2 = Math.min(g2.start, g2.end), x2 = Math.max(g2.start, g2.end);
      void 0 === this.series[n2][l2] || null === this.series[n2][l2] ? p2 = o2 : (p2 = o2 - p2 / d2, x2 = o2 - x2 / d2);
      const u2 = Math.abs(x2 - p2), f2 = this.barHelpers.getColumnPaths({ barXPosition: a2, barWidth: i2, y1: p2, y2: x2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: h2, i: h2, j: l2, w: r2 });
      if (r2.axisFlags.isXNumeric) {
        const t3 = this.getBarXForNumericXAxis({ x: e2, j: l2, realIndex: h2, barWidth: i2 });
        e2 = t3.x, a2 = t3.barXPosition;
      } else e2 += s2;
      return { pathTo: f2.pathTo, pathFrom: f2.pathFrom, barHeight: u2, x: e2, y: g2.start < 0 && g2.end < 0 ? p2 : x2, goalY: this.barHelpers.getGoalValues("y", null, o2, n2, l2, c2), barXPosition: a2 };
    }
    preventBarOverflow(t2) {
      const e2 = this.w;
      return t2 < 0 && (t2 = 0), t2 > e2.layout.gridWidth && (t2 = e2.layout.gridWidth), t2;
    }
    drawRangeBarPaths({ indexes: t2, y: e2, y1: s2, y2: i2, yDivision: a2, barHeight: o2, barYPosition: r2, zeroW: n2 }) {
      const l2 = this.w, { realIndex: h2, j: c2 } = t2, d2 = this.preventBarOverflow(n2 + s2 / this.invertedYRatio), g2 = this.preventBarOverflow(n2 + i2 / this.invertedYRatio), p2 = this.getRangeValue(h2, c2), x2 = Math.abs(g2 - d2), u2 = this.barHelpers.getBarpaths({ barYPosition: r2, barHeight: o2, x1: d2, x2: g2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: h2, realIndex: h2, j: c2, w: l2 });
      return l2.axisFlags.isXNumeric || (e2 += a2), { pathTo: u2.pathTo, pathFrom: u2.pathFrom, barWidth: x2, x: p2.start < 0 && p2.end < 0 ? d2 : g2, goalX: this.barHelpers.getGoalValues("x", n2, null, h2, c2), y: e2 };
    }
    getRangeValue(t2, e2) {
      const s2 = this.w;
      return { start: s2.rangeData.seriesRangeStart[t2][e2], end: s2.rangeData.seriesRangeEnd[t2][e2] };
    }
  }, candlestick: ge, boxPlot: ge, pie: we, donut: we, polarArea: we, radialBar: class extends we {
    constructor(t2, e2) {
      super(t2, e2), this.ctx = e2, this.w = t2, this.animBeginArr = [0], this.animDur = 0, this.startAngle = t2.config.plotOptions.radialBar.startAngle, this.endAngle = t2.config.plotOptions.radialBar.endAngle, this.totalAngle = Math.abs(t2.config.plotOptions.radialBar.endAngle - t2.config.plotOptions.radialBar.startAngle), this.trackStartAngle = t2.config.plotOptions.radialBar.track.startAngle, this.trackEndAngle = t2.config.plotOptions.radialBar.track.endAngle, this.barLabels = this.w.config.plotOptions.radialBar.barLabels, this.donutDataLabels = this.w.config.plotOptions.radialBar.dataLabels, this.radialDataLabels = this.donutDataLabels, this.trackStartAngle || (this.trackStartAngle = this.startAngle), this.trackEndAngle || (this.trackEndAngle = this.endAngle), 360 === this.endAngle && (this.endAngle = 359.99), this.margin = parseInt(t2.config.plotOptions.radialBar.track.margin, 10), this.onBarLabelClick = this.onBarLabelClick.bind(this);
    }
    draw(t2) {
      const e2 = this.w, s2 = new X(this.w), i2 = s2.group({ class: "apexcharts-radialbar" });
      if (e2.globals.noData) return i2;
      const a2 = s2.group(), o2 = this.defaultSize / 2, r2 = e2.layout.gridWidth / 2;
      let n2 = this.defaultSize / 2.05;
      e2.config.chart.sparkline.enabled || (n2 = n2 - e2.config.stroke.width - e2.config.chart.dropShadow.blur);
      const l2 = e2.globals.fill.colors;
      if (e2.config.plotOptions.radialBar.track.show) {
        const e3 = this.drawTracks({ size: n2, centerX: r2, centerY: o2, colorArr: l2, series: t2 });
        a2.add(e3);
      }
      const h2 = this.drawArcs({ size: n2, centerX: r2, centerY: o2, colorArr: l2, series: t2 });
      let c2 = 360;
      e2.config.plotOptions.radialBar.startAngle < 0 && (c2 = this.totalAngle);
      const d2 = (360 - c2) / 360;
      if (e2.globals.radialSize = n2 - n2 * d2, this.radialDataLabels.value.show) {
        const t3 = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
        e2.globals.radialSize += t3 * d2;
      }
      return a2.add(h2.g), "front" === e2.config.plotOptions.radialBar.hollow.position && (h2.g.add(h2.elHollow), h2.dataLabels && h2.g.add(h2.dataLabels)), i2.add(a2), i2;
    }
    drawTracks(t2) {
      const e2 = this.w, s2 = new X(this.w), i2 = s2.group({ class: "apexcharts-tracks" }), a2 = new F(this.w), o2 = new B(this.w), r2 = this.getStrokeWidth(t2);
      t2.size = t2.size - r2 / 2;
      for (let n2 = 0; n2 < t2.series.length; n2++) {
        const l2 = s2.group({ class: "apexcharts-radialbar-track apexcharts-track" });
        i2.add(l2), l2.attr({ rel: n2 + 1 }), t2.size = t2.size - r2 - this.margin;
        const h2 = e2.config.plotOptions.radialBar.track, c2 = o2.fillPath({ seriesNumber: 0, size: t2.size, fillColors: Array.isArray(h2.background) ? h2.background[n2] : h2.background, solid: true }), d2 = this.trackStartAngle;
        let g2 = this.trackEndAngle;
        Math.abs(g2) + Math.abs(d2) >= 360 && (g2 = 360 - Math.abs(this.startAngle) - 0.1);
        const p2 = s2.drawPath({ d: "", stroke: c2, strokeWidth: r2 * parseInt(h2.strokeWidth, 10) / 100, fill: "none", strokeOpacity: h2.opacity, classes: "apexcharts-radialbar-area" });
        if (h2.dropShadow.enabled) {
          const t3 = h2.dropShadow;
          a2.dropShadow(p2, t3);
        }
        l2.add(p2), p2.attr("id", "apexcharts-radialbarTrack-" + n2), this.animatePaths(p2, { centerX: t2.centerX, centerY: t2.centerY, endAngle: g2, startAngle: d2, size: t2.size, i: n2, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: true });
      }
      return i2;
    }
    drawArcs(t2) {
      const e2 = this.w, s2 = new X(this.w), i2 = new B(this.w), a2 = new F(this.w), o2 = s2.group(), r2 = this.getStrokeWidth(t2);
      t2.size = t2.size - r2 / 2;
      let n2 = e2.config.plotOptions.radialBar.hollow.background;
      const l2 = t2.size - r2 * t2.series.length - this.margin * t2.series.length - r2 * parseInt(e2.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, h2 = l2 - e2.config.plotOptions.radialBar.hollow.margin;
      void 0 !== e2.config.plotOptions.radialBar.hollow.image && (n2 = this.drawHollowImage(t2, o2, l2, n2));
      const c2 = this.drawHollow({ size: h2, centerX: t2.centerX, centerY: t2.centerY, fill: n2 || "transparent" });
      if (e2.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
        const t3 = e2.config.plotOptions.radialBar.hollow.dropShadow;
        a2.dropShadow(c2, t3);
      }
      let d2 = 1;
      !this.radialDataLabels.total.show && e2.seriesData.series.length > 1 && (d2 = 0);
      let g2 = null;
      if (this.radialDataLabels.show) {
        const s3 = e2.dom.Paper.findOne(".apexcharts-datalabels-group");
        g2 = this.renderInnerDataLabels(s3, this.radialDataLabels, { hollowSize: l2, centerX: t2.centerX, centerY: t2.centerY, opacity: d2 });
      }
      "back" === e2.config.plotOptions.radialBar.hollow.position && (o2.add(c2), g2 && o2.add(g2));
      let p2 = false;
      e2.config.plotOptions.radialBar.inverseOrder && (p2 = true);
      for (let n3 = p2 ? t2.series.length - 1 : 0; p2 ? n3 >= 0 : n3 < t2.series.length; p2 ? n3-- : n3++) {
        const l3 = s2.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: b.escapeString(e2.seriesData.seriesNames[n3]) });
        o2.add(l3), l3.attr({ rel: n3 + 1, "data:realIndex": n3 }), Q.addCollapsedClassToSeries(this.w, l3, n3), t2.size = t2.size - r2 - this.margin;
        const h3 = i2.fillPath({ seriesNumber: n3, size: t2.size, value: t2.series[n3] }), c3 = this.startAngle;
        let d3;
        const g3 = b.negToZero(t2.series[n3] > 100 ? 100 : t2.series[n3]) / 100;
        let p3, x2 = Math.round(this.totalAngle * g3) + this.startAngle;
        e2.globals.dataChanged && (d3 = this.startAngle, p3 = Math.round(this.totalAngle * b.negToZero(e2.globals.previousPaths[n3]) / 100) + d3);
        Math.abs(x2) + Math.abs(c3) > 360 && (x2 -= 0.01);
        Math.abs(p3) + Math.abs(d3) > 360 && (p3 -= 0.01);
        const u2 = x2 - c3, f2 = Array.isArray(e2.config.stroke.dashArray) ? e2.config.stroke.dashArray[n3] : e2.config.stroke.dashArray, m2 = s2.drawPath({ d: "", stroke: h3, strokeWidth: r2, fill: "none", fillOpacity: e2.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + n3, strokeDashArray: f2 }), y2 = c3 + u2 / 2, w2 = b.polarToCartesian(t2.centerX, t2.centerY, t2.size, y2);
        if (X.setAttrs(m2.node, { "data:angle": u2, "data:value": t2.series[n3], "data:cx": w2.x, "data:cy": w2.y }), e2.config.chart.dropShadow.enabled) {
          const t3 = e2.config.chart.dropShadow;
          a2.dropShadow(m2, t3, n3);
        }
        if (a2.setSelectionFilter(m2, 0, n3), this.addListeners(m2, this.radialDataLabels), l3.add(m2), m2.attr({ index: 0, j: n3 }), this.barLabels.enabled) {
          const i3 = b.polarToCartesian(t2.centerX, t2.centerY, t2.size, c3), a3 = this.barLabels.formatter(e2.seriesData.seriesNames[n3], { seriesIndex: n3, w: e2 }), o3 = ["apexcharts-radialbar-label"];
          this.barLabels.onClick || o3.push("apexcharts-no-click");
          let r3 = this.barLabels.useSeriesColors ? e2.globals.colors[n3] : e2.config.chart.foreColor;
          r3 || (r3 = e2.config.chart.foreColor);
          const h4 = i3.x + this.barLabels.offsetX, d4 = i3.y + this.barLabels.offsetY, g4 = s2.drawText({ x: h4, y: d4, text: a3, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: r3, cssClass: o3.join(" ") });
          g4.on("click", this.onBarLabelClick), g4.attr({ rel: n3 + 1 }), 0 !== c3 && g4.attr({ "transform-origin": `${h4} ${d4}`, transform: `rotate(${c3} 0 0)` }), l3.add(g4);
        }
        let v2 = 0;
        !this.initialAnim || e2.globals.resized || e2.globals.dataChanged || (v2 = e2.config.chart.animations.speed), e2.globals.dataChanged && (v2 = e2.config.chart.animations.dynamicAnimation.speed), this.animDur = v2 / (1.2 * t2.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(m2, { centerX: t2.centerX, centerY: t2.centerY, endAngle: x2, startAngle: c3, prevEndAngle: p3, prevStartAngle: d3, size: t2.size, i: n3, totalItems: 2, animBeginArr: this.animBeginArr, dur: v2, shouldSetPrevPaths: true });
      }
      return { g: o2, elHollow: c2, dataLabels: g2 };
    }
    drawHollow(t2) {
      const e2 = new X(this.w).drawCircle(2 * t2.size);
      return e2.attr({ class: "apexcharts-radialbar-hollow", cx: t2.centerX, cy: t2.centerY, r: t2.size, fill: t2.fill }), e2;
    }
    drawHollowImage(t2, e2, s2, i2) {
      const a2 = this.w, o2 = new B(this.w), r2 = b.randomId(), n2 = a2.config.plotOptions.radialBar.hollow.image;
      if (a2.config.plotOptions.radialBar.hollow.imageClipped) o2.clippedImgArea({ width: s2, height: s2, image: n2, patternID: `pattern${a2.globals.cuid}${r2}` }), i2 = `url(#pattern${a2.globals.cuid}${r2})`;
      else {
        const s3 = a2.config.plotOptions.radialBar.hollow.imageWidth, i3 = a2.config.plotOptions.radialBar.hollow.imageHeight;
        if (void 0 === s3 && void 0 === i3) {
          const s4 = a2.dom.Paper.image(n2, function(e3) {
            this.move(t2.centerX - e3.width / 2 + a2.config.plotOptions.radialBar.hollow.imageOffsetX, t2.centerY - e3.height / 2 + a2.config.plotOptions.radialBar.hollow.imageOffsetY);
          });
          e2.add(s4);
        } else {
          const o3 = a2.dom.Paper.image(n2, function() {
            this.move(t2.centerX - s3 / 2 + a2.config.plotOptions.radialBar.hollow.imageOffsetX, t2.centerY - i3 / 2 + a2.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(s3, i3);
          });
          e2.add(o3);
        }
      }
      return i2;
    }
    getStrokeWidth(t2) {
      const e2 = this.w;
      return t2.size * (100 - parseInt(e2.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t2.series.length + 1) - this.margin;
    }
    onBarLabelClick(t2) {
      const e2 = parseInt(t2.target.getAttribute("rel"), 10) - 1, s2 = this.barLabels.onClick, i2 = this.w;
      s2 && s2(i2.seriesData.seriesNames[e2], { w: i2, seriesIndex: e2 });
    }
  }, radar: class {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0, this.graphics = new X(this.w), this.lineColorArr = void 0 !== t2.globals.stroke.colors ? t2.globals.stroke.colors : t2.globals.colors, this.defaultSize = t2.globals.svgHeight < t2.globals.svgWidth ? t2.layout.gridHeight : t2.layout.gridWidth, this.isLog = t2.config.yaxis[0].logarithmic, this.logBase = t2.config.yaxis[0].logBase, this.coreUtils = new I(this.w), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, t2.globals.maxY, 0) : t2.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : t2.globals.minY, this.polygons = t2.config.plotOptions.radar.polygons, this.strokeWidth = t2.config.stroke.show ? t2.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - t2.config.chart.dropShadow.blur, t2.config.xaxis.labels.show && (this.size = this.size - t2.layout.xAxisLabelsWidth / 1.75), void 0 !== t2.config.plotOptions.radar.size && (this.size = t2.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
    }
    draw(t2) {
      const e2 = this.w, s2 = new B(this.w), i2 = [], a2 = new N(this.w, this.ctx);
      t2.length && (this.dataPointsLen = t2[e2.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
      const o2 = e2.layout.gridWidth / 2, r2 = e2.layout.gridHeight / 2, h2 = o2 + e2.config.plotOptions.radar.offsetX, c2 = r2 + e2.config.plotOptions.radar.offsetY, d2 = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: `translate(${h2 || 0}, ${c2 || 0})` });
      let g2 = [], p2 = null, x2 = null;
      if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t2.forEach((t3, o3) => {
        const r3 = t3.length === e2.globals.dataPoints, h3 = this.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": r3, seriesName: b.escapeString(e2.seriesData.seriesNames[o3]), rel: o3 + 1, "data:realIndex": o3 });
        this.dataRadiusOfPercent[o3] = [], this.dataRadius[o3] = [], this.angleArr[o3] = [], t3.forEach((t4, e3) => {
          const s3 = Math.abs(this.maxValue - this.minValue);
          t4 -= this.minValue, this.isLog && (t4 = this.coreUtils.getLogVal(this.logBase, t4, 0)), this.dataRadiusOfPercent[o3][e3] = t4 / s3, this.dataRadius[o3][e3] = this.dataRadiusOfPercent[o3][e3] * this.size, this.angleArr[o3][e3] = e3 * this.disAngle;
        }), g2 = this.getDataPointsPos(this.dataRadius[o3], this.angleArr[o3]);
        const c3 = this.createPaths(g2, { x: 0, y: 0 });
        p2 = this.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), x2 = this.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": o3 }), e2.globals.delayedElements.push({ el: p2.node, index: o3 });
        const d3 = { i: o3, realIndex: o3, animationDelay: o3, initialSpeed: e2.config.chart.animations.speed, dataChangeSpeed: e2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: false, bindEventsOnPaths: false, stroke: e2.globals.stroke.colors[o3], strokeLineCap: e2.config.stroke.lineCap };
        let u2 = null;
        e2.globals.previousPaths.length > 0 && (u2 = this.getPreviousPath(o3));
        for (let t4 = 0; t4 < c3.linePathsTo.length; t4++) {
          const i3 = this.graphics.renderPaths(l(n({}, d3), { pathFrom: null === u2 ? c3.linePathsFrom[t4] : u2, pathTo: c3.linePathsTo[t4], strokeWidth: Array.isArray(this.strokeWidth) ? this.strokeWidth[o3] : this.strokeWidth, fill: "none", drawShadow: false }));
          h3.add(i3);
          const a3 = s2.fillPath({ seriesNumber: o3 }), r4 = this.graphics.renderPaths(l(n({}, d3), { pathFrom: null === u2 ? c3.areaPathsFrom[t4] : u2, pathTo: c3.areaPathsTo[t4], strokeWidth: 0, fill: a3, drawShadow: false }));
          if (e2.config.chart.dropShadow.enabled) {
            const t5 = new F(this.w), s3 = e2.config.chart.dropShadow;
            t5.dropShadow(r4, Object.assign({}, s3, { noUserSpaceOnUse: true }), o3);
          }
          h3.add(r4);
        }
        t3.forEach((t4, s3) => {
          const i3 = new H(this.w, this.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: o3, dataPointIndex: s3 }), r4 = this.graphics.drawMarker(g2[s3].x, g2[s3].y, i3);
          r4.attr("rel", s3), r4.attr("j", s3), r4.attr("index", o3), r4.node.setAttribute("default-marker-size", i3.pSize);
          const l2 = this.graphics.group({ class: "apexcharts-series-markers" });
          l2 && l2.add(r4), p2.add(l2), h3.add(p2);
          const c4 = e2.config.dataLabels;
          if (c4.enabled) {
            const t5 = c4.formatter(e2.seriesData.series[o3][s3], { seriesIndex: o3, dataPointIndex: s3, w: e2 });
            a2.plotDataLabelsText({ x: g2[s3].x, y: g2[s3].y, text: t5, textAnchor: "middle", i: o3, j: o3, parent: x2, offsetCorrection: false, dataLabelsConfig: n({}, c4) });
          }
          h3.add(x2);
        }), i2.push(h3);
      }), this.drawPolygons({ parent: d2 }), e2.config.xaxis.labels.show) {
        const t3 = this.drawXAxisTexts();
        d2.add(t3);
      }
      return i2.forEach((t3) => {
        d2.add(t3);
      }), d2.add(this.yaxisLabels), d2;
    }
    drawPolygons(t2) {
      const e2 = this.w, { parent: s2 } = t2, i2 = new ye(this.w), a2 = e2.globals.yAxisScale[0].result.reverse(), o2 = a2.length, r2 = [], n2 = this.size / (o2 - 1);
      for (let t3 = 0; t3 < o2; t3++) r2[t3] = n2 * t3;
      r2.reverse();
      const l2 = [], h2 = [];
      r2.forEach((t3, e3) => {
        const s3 = b.getPolygonPos(t3, this.dataPointsLen);
        let i3 = "";
        s3.forEach((t4, s4) => {
          if (0 === e3) {
            const e4 = this.graphics.drawLine(t4.x, t4.y, 0, 0, Array.isArray(this.polygons.connectorColors) ? this.polygons.connectorColors[s4] : this.polygons.connectorColors);
            h2.push(e4);
          }
          0 === s4 && this.yaxisLabelsTextsPos.push({ x: t4.x, y: t4.y }), i3 += t4.x + "," + t4.y + " ";
        }), l2.push(i3);
      }), l2.forEach((t3, i3) => {
        const a3 = this.polygons.strokeColors, o3 = this.polygons.strokeWidth, r3 = this.graphics.drawPolygon(t3, Array.isArray(a3) ? a3[i3] : a3, Array.isArray(o3) ? o3[i3] : o3, e2.globals.radarPolygons.fill.colors[i3]);
        s2.add(r3);
      }), h2.forEach((t3) => {
        s2.add(t3);
      }), e2.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach((t3, e3) => {
        const s3 = i2.drawYAxisTexts(t3.x, t3.y, e3, a2[e3]);
        this.yaxisLabels.add(s3);
      });
    }
    drawXAxisTexts() {
      const t2 = this.w, e2 = t2.config.xaxis.labels, s2 = this.graphics.group({ class: "apexcharts-xaxis" }), i2 = b.getPolygonPos(this.size, this.dataPointsLen);
      return t2.labelData.labels.forEach((a2, o2) => {
        const r2 = t2.config.xaxis.labels.formatter, l2 = new N(this.w, this.ctx);
        if (i2[o2]) {
          const h2 = this.getTextPos(i2[o2], this.size), c2 = r2(a2, { seriesIndex: -1, dataPointIndex: o2, w: t2 });
          l2.plotDataLabelsText({ x: h2.newX, y: h2.newY, text: c2, textAnchor: h2.textAnchor, i: o2, j: o2, parent: s2, className: "apexcharts-xaxis-label", color: Array.isArray(e2.style.colors) && e2.style.colors[o2] ? e2.style.colors[o2] : "#a8a8a8", dataLabelsConfig: n({ textAnchor: h2.textAnchor, dropShadow: { enabled: false } }, e2), offsetCorrection: false }).on("click", (e3) => {
            if ("function" == typeof t2.config.chart.events.xAxisLabelClick) {
              const s3 = Object.assign({}, t2, { labelIndex: o2 });
              t2.config.chart.events.xAxisLabelClick(e3, this.ctx, s3);
            }
          });
        }
      }), s2;
    }
    createPaths(t2, e2) {
      const s2 = [];
      let i2 = [];
      const a2 = [];
      let o2 = [];
      if (t2.length) {
        i2 = [this.graphics.move(e2.x, e2.y)], o2 = [this.graphics.move(e2.x, e2.y)];
        let r2 = this.graphics.move(t2[0].x, t2[0].y), n2 = this.graphics.move(t2[0].x, t2[0].y);
        t2.forEach((e3, s3) => {
          r2 += this.graphics.line(e3.x, e3.y), n2 += this.graphics.line(e3.x, e3.y), s3 === t2.length - 1 && (r2 += "Z", n2 += "Z");
        }), s2.push(r2), a2.push(n2);
      }
      return { linePathsFrom: i2, linePathsTo: s2, areaPathsFrom: o2, areaPathsTo: a2 };
    }
    getTextPos(t2, e2) {
      let s2 = "middle", i2 = t2.x, a2 = t2.y;
      return Math.abs(t2.x) >= 10 ? t2.x > 0 ? (s2 = "start", i2 += 10) : t2.x < 0 && (s2 = "end", i2 -= 10) : s2 = "middle", Math.abs(t2.y) >= e2 - 10 && (t2.y < 0 ? a2 -= 10 : t2.y > 0 && (a2 += 10)), { textAnchor: s2, newX: i2, newY: a2 };
    }
    getPreviousPath(t2) {
      const e2 = this.w;
      let s2 = null;
      for (let i2 = 0; i2 < e2.globals.previousPaths.length; i2++) {
        const a2 = e2.globals.previousPaths[i2];
        a2.paths.length > 0 && parseInt(a2.realIndex, 10) === parseInt(t2, 10) && void 0 !== e2.globals.previousPaths[i2].paths[0] && (s2 = e2.globals.previousPaths[i2].paths[0].d);
      }
      return s2;
    }
    getDataPointsPos(t2, e2, s2 = this.dataPointsLen) {
      t2 = t2 || [], e2 = e2 || [];
      const i2 = [];
      for (let a2 = 0; a2 < s2; a2++) {
        const s3 = {};
        s3.x = t2[a2] * Math.sin(e2[a2]), s3.y = -t2[a2] * Math.cos(e2[a2]), i2.push(s3);
      }
      return i2;
    }
  }, heatmap: class {
    constructor(t2, e2, s2) {
      this.ctx = e2, this.w = t2, this.xRatio = s2.xRatio, this.yRatio = s2.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new pe(t2, e2), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
    }
    draw(t2) {
      const e2 = this.w, s2 = new X(this.w, this.ctx), i2 = s2.group({ class: "apexcharts-heatmap" });
      i2.attr("clip-path", `url(#gridRectMask${e2.globals.cuid})`);
      const a2 = e2.layout.gridWidth / e2.globals.dataPoints, o2 = e2.layout.gridHeight / e2.seriesData.series.length;
      let r2 = 0, n2 = false;
      this.negRange = this.helpers.checkColorRange();
      const l2 = t2.slice();
      e2.config.yaxis[0].reversed && (n2 = true, l2.reverse());
      for (let h3 = n2 ? 0 : l2.length - 1; n2 ? h3 < l2.length : h3 >= 0; n2 ? h3++ : h3--) {
        const n3 = s2.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: b.escapeString(e2.seriesData.seriesNames[h3]), rel: h3 + 1, "data:realIndex": h3 });
        if (Q.addCollapsedClassToSeries(this.w, n3, h3), s2.setupEventDelegation(n3, ".apexcharts-heatmap-rect"), e2.config.chart.dropShadow.enabled) {
          const t3 = e2.config.chart.dropShadow;
          new F(this.w).dropShadow(n3, t3, h3);
        }
        let c2 = 0;
        const d2 = e2.config.plotOptions.heatmap.shadeIntensity;
        let g2 = 0;
        for (let i3 = 0; i3 < e2.globals.dataPoints; i3++) {
          if (e2.seriesData.seriesX.length && !e2.globals.allSeriesHasEqualX && e2.globals.minX + e2.globals.minXDiff * i3 < e2.seriesData.seriesX[h3][g2]) {
            c2 += a2;
            continue;
          }
          if (g2 >= l2[h3].length) break;
          const p2 = this.helpers.getShadeColor(e2.config.chart.type, h3, g2, this.negRange);
          let x2 = p2.color;
          const u2 = p2.colorProps;
          if ("image" === e2.config.fill.type) {
            x2 = new B(this.w).fillPath({ seriesNumber: h3, dataPointIndex: g2, opacity: e2.globals.hasNegs ? u2.percent < 0 ? 1 - (1 + u2.percent / 100) : d2 + u2.percent / 100 : u2.percent / 100, patternID: b.randomId(), width: e2.config.fill.image.width ? e2.config.fill.image.width : a2, height: e2.config.fill.image.height ? e2.config.fill.image.height : o2 });
          }
          const f2 = this.rectRadius, m2 = s2.drawRect(c2, r2, a2, o2, f2);
          if (m2.attr({ cx: c2, cy: r2 }), m2.node.classList.add("apexcharts-heatmap-rect"), n3.add(m2), m2.attr({ fill: x2, i: h3, index: h3, j: g2, val: t2[h3][g2], "stroke-width": this.strokeWidth, stroke: e2.config.plotOptions.heatmap.useFillColorAsStroke ? x2 : e2.globals.stroke.colors[0], color: x2 }), e2.config.chart.animations.enabled && !e2.globals.dataChanged) {
            let t3 = 1;
            e2.globals.resized || (t3 = e2.config.chart.animations.speed), this.animateHeatMap(m2, c2, r2, a2, o2, t3);
          }
          if (e2.globals.dataChanged) {
            let t3 = 1;
            if (this.dynamicAnim.enabled && e2.globals.shouldAnimate) {
              t3 = this.dynamicAnim.speed;
              let s3 = e2.globals.previousPaths[h3] && e2.globals.previousPaths[h3][g2] && e2.globals.previousPaths[h3][g2].color;
              s3 || (s3 = "rgba(255, 255, 255, 0)"), this.animateHeatColor(m2, b.isColorHex(s3) ? s3 : b.rgb2hex(s3), b.isColorHex(x2) ? x2 : b.rgb2hex(x2), t3);
            }
          }
          const y2 = (0, e2.config.dataLabels.formatter)(e2.seriesData.series[h3][g2], { value: e2.seriesData.series[h3][g2], seriesIndex: h3, dataPointIndex: g2, w: e2 }), w2 = this.helpers.calculateDataLabels({ text: y2, x: c2 + a2 / 2, y: r2 + o2 / 2, i: h3, j: g2, colorProps: u2, series: l2 });
          null !== w2 && n3.add(w2), c2 += a2, g2++;
        }
        r2 += o2, i2.add(n3);
      }
      const h2 = e2.globals.yAxisScale[0].result.slice();
      return e2.config.yaxis[0].reversed ? h2.unshift("") : h2.push(""), e2.globals.yAxisScale[0].result = h2, i2;
    }
    animateHeatMap(t2, e2, s2, i2, a2, o2) {
      const r2 = new E(this.w);
      r2.animateRect(t2, { x: e2 + i2 / 2, y: s2 + a2 / 2, width: 0, height: 0 }, { x: e2, y: s2, width: i2, height: a2 }, o2, () => {
        r2.animationCompleted(t2);
      });
    }
    animateHeatColor(t2, e2, s2, i2) {
      t2.attr({ fill: e2 }).animate(i2).attr({ fill: s2 });
    }
  }, treemap: class {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2, this.strokeWidth = this.w.config.stroke.width, this.helpers = new pe(t2, e2), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
    }
    draw(t2) {
      const e2 = this.w, s2 = new X(this.w, this.ctx), i2 = new B(this.w), a2 = s2.group({ class: "apexcharts-treemap" });
      if (e2.globals.noData) return a2;
      const o2 = [];
      t2.forEach((t3) => {
        const e3 = t3.map((t4) => Math.abs(t4));
        o2.push(e3);
      }), this.negRange = this.helpers.checkColorRange(), e2.config.series.forEach((t3, e3) => {
        t3.data.forEach((t4) => {
          Array.isArray(this.labels[e3]) || (this.labels[e3] = []), this.labels[e3].push(t4.x);
        });
      });
      return De.generate(o2, e2.layout.gridWidth, e2.layout.gridHeight).forEach((o3, r2) => {
        const n2 = s2.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: b.escapeString(e2.seriesData.seriesNames[r2]), rel: r2 + 1, "data:realIndex": r2 });
        if (s2.setupEventDelegation(n2, ".apexcharts-treemap-rect"), e2.config.chart.dropShadow.enabled) {
          const t3 = e2.config.chart.dropShadow;
          new F(this.w).dropShadow(a2, t3, r2);
        }
        const l2 = s2.group({ class: "apexcharts-data-labels" }), h2 = { xMin: 1 / 0, yMin: 1 / 0, xMax: -1 / 0, yMax: -1 / 0 };
        o3.forEach((a3, o4) => {
          const l3 = a3[0], c3 = a3[1], d2 = a3[2], g2 = a3[3];
          h2.xMin = Math.min(h2.xMin, l3), h2.yMin = Math.min(h2.yMin, c3), h2.xMax = Math.max(h2.xMax, d2), h2.yMax = Math.max(h2.yMax, g2);
          const p2 = this.helpers.getShadeColor(e2.config.chart.type, r2, o4, this.negRange), x2 = p2.color, u2 = i2.fillPath({ color: x2, seriesNumber: r2, dataPointIndex: o4 }), f2 = s2.drawRect(l3, c3, d2 - l3, g2 - c3, e2.config.plotOptions.treemap.borderRadius, "#fff", 1, this.strokeWidth, e2.config.plotOptions.treemap.useFillColorAsStroke ? x2 : e2.globals.stroke.colors[r2]);
          f2.attr({ cx: l3, cy: c3, index: r2, i: r2, j: o4, width: d2 - l3, height: g2 - c3, fill: u2 }), f2.node.classList.add("apexcharts-treemap-rect");
          let b2 = { x: l3 + (d2 - l3) / 2, y: c3 + (g2 - c3) / 2, width: 0, height: 0 };
          const m2 = { x: l3, y: c3, width: d2 - l3, height: g2 - c3 };
          if (e2.config.chart.animations.enabled && !e2.globals.dataChanged) {
            let t3 = 1;
            e2.globals.resized || (t3 = e2.config.chart.animations.speed), this.animateTreemap(f2, b2, m2, t3);
          }
          if (e2.globals.dataChanged) {
            let t3 = 1;
            this.dynamicAnim.enabled && e2.globals.shouldAnimate && (t3 = this.dynamicAnim.speed, e2.globals.previousPaths[r2] && e2.globals.previousPaths[r2][o4] && e2.globals.previousPaths[r2][o4].rect && (b2 = e2.globals.previousPaths[r2][o4].rect), this.animateTreemap(f2, b2, m2, t3));
          }
          let y2 = this.getFontSize(a3), w2 = e2.config.dataLabels.formatter(this.labels[r2][o4], { value: e2.seriesData.series[r2][o4], seriesIndex: r2, dataPointIndex: o4, w: e2 });
          "truncate" === e2.config.plotOptions.treemap.dataLabels.format && (y2 = parseInt(e2.config.dataLabels.style.fontSize, 10), w2 = this.truncateLabels(w2, y2, l3, c3, d2, g2));
          let v2 = null;
          e2.seriesData.series[r2][o4] && (v2 = this.helpers.calculateDataLabels({ text: w2, x: (l3 + d2) / 2, y: (c3 + g2) / 2 + this.strokeWidth / 2 + y2 / 3, i: r2, j: o4, colorProps: p2, fontSize: y2, series: t2 })), e2.config.dataLabels.enabled && v2 && this.rotateToFitLabel(v2, y2, w2, l3, c3, d2, g2), n2.add(f2), null !== v2 && n2.add(v2);
        });
        const c2 = e2.config.plotOptions.treemap.seriesTitle;
        if (e2.config.series.length > 1 && c2 && c2.show) {
          const t3 = e2.config.series[r2].name || "";
          if (t3 && h2.xMin < 1 / 0 && h2.yMin < 1 / 0) {
            const { offsetX: i3, offsetY: a3, borderColor: o4, borderWidth: r3, borderRadius: l3, style: d2 } = c2, g2 = d2.color || e2.config.chart.foreColor, p2 = { left: d2.padding.left, right: d2.padding.right, top: d2.padding.top, bottom: d2.padding.bottom }, x2 = s2.getTextRects(t3, d2.fontSize, d2.fontFamily), u2 = x2.width + p2.left + p2.right, f2 = x2.height + p2.top + p2.bottom, b2 = h2.xMin + (i3 || 0), m2 = h2.yMin + (a3 || 0), y2 = s2.drawRect(b2, m2, u2, f2, l3, d2.background, 1, r3, o4), w2 = s2.drawText({ x: b2 + p2.left, y: m2 + p2.top + 0.75 * x2.height, text: t3, fontSize: d2.fontSize, fontFamily: d2.fontFamily, fontWeight: d2.fontWeight, foreColor: g2, cssClass: d2.cssClass || "" });
            n2.add(y2), n2.add(w2);
          }
        }
        n2.add(l2), a2.add(n2);
      }), a2;
    }
    getFontSize(t2) {
      const e2 = this.w;
      const s2 = (function t3(e3) {
        let s3, i2 = 0;
        if (Array.isArray(e3[0])) for (s3 = 0; s3 < e3.length; s3++) i2 += t3(e3[s3]);
        else for (s3 = 0; s3 < e3.length; s3++) i2 += e3[s3].length;
        return i2;
      })(this.labels) / (function t3(e3) {
        let s3, i2 = 0;
        if (Array.isArray(e3[0])) for (s3 = 0; s3 < e3.length; s3++) i2 += t3(e3[s3]);
        else for (s3 = 0; s3 < e3.length; s3++) i2 += 1;
        return i2;
      })(this.labels);
      return (function(t3, i2) {
        const a2 = t3 * i2, o2 = Math.pow(a2, 0.5);
        return Math.min(o2 / s2, parseInt(e2.config.dataLabels.style.fontSize, 10));
      })(t2[2] - t2[0], t2[3] - t2[1]);
    }
    rotateToFitLabel(t2, e2, s2, i2, a2, o2, r2) {
      const n2 = new X(this.w), l2 = n2.getTextRects(s2, e2);
      if (l2.width + this.w.config.stroke.width + 5 > o2 - i2 && l2.width <= r2 - a2) {
        const e3 = n2.rotateAroundCenter(t2.node);
        t2.node.setAttribute("transform", `rotate(-90 ${e3.x} ${e3.y}) translate(${l2.height / 3})`);
      }
    }
    truncateLabels(t2, e2, s2, i2, a2, o2) {
      const r2 = new X(this.w), n2 = r2.getTextRects(t2, e2).width + this.w.config.stroke.width + 5 > a2 - s2 && o2 - i2 > a2 - s2 ? o2 - i2 : a2 - s2, l2 = r2.getTextBasedOnMaxWidth({ text: t2, maxWidth: n2, fontSize: e2 });
      return t2.length !== l2.length && n2 / e2 < 5 ? "" : l2;
    }
    animateTreemap(t2, e2, s2, i2) {
      const a2 = new E(this.w);
      a2.animateRect(t2, e2, s2, i2, () => {
        a2.animationCompleted(t2);
      });
    }
  } }), te;
});
/*! Lity - v2.4.1 - 2020-04-26
* http://sorgalla.com/lity/
* Copyright (c) 2015-2020 Jan Sorgalla; Licensed MIT */
!(function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(c) {
    return b(a, c);
  }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = b(a, require("jquery")) : a.lity = b(a, a.jQuery || a.Zepto);
})("undefined" != typeof window ? window : this, function(a, b) {
  "use strict";
  function c(a2) {
    var b2 = B();
    return N && a2.length ? (a2.one(N, b2.resolve), setTimeout(b2.resolve, 500)) : b2.resolve(), b2.promise();
  }
  function d(a2, c2, d2) {
    if (1 === arguments.length) return b.extend({}, a2);
    if ("string" == typeof c2) {
      if (void 0 === d2) return void 0 === a2[c2] ? null : a2[c2];
      a2[c2] = d2;
    } else b.extend(a2, c2);
    return this;
  }
  function e(a2) {
    for (var b2, c2 = decodeURI(a2.split("#")[0]).split("&"), d2 = {}, e2 = 0, f2 = c2.length; e2 < f2; e2++) c2[e2] && (b2 = c2[e2].split("="), d2[b2[0]] = b2[1]);
    return d2;
  }
  function f(a2, c2) {
    return a2 + (a2.indexOf("?") > -1 ? "&" : "?") + b.param(c2);
  }
  function g(a2, b2) {
    var c2 = a2.indexOf("#");
    return -1 === c2 ? b2 : (c2 > 0 && (a2 = a2.substr(c2)), b2 + a2);
  }
  function h(a2) {
    return b('<span class="lity-error"></span>').append(a2);
  }
  function i(a2, c2) {
    var d2 = c2.opener() && c2.opener().data("lity-desc") || "Image with no description", e2 = b('<img src="' + a2 + '" alt="' + d2 + '"/>'), f2 = B(), g2 = function() {
      f2.reject(h("Failed loading image"));
    };
    return e2.on("load", function() {
      if (0 === this.naturalWidth) return g2();
      f2.resolve(e2);
    }).on("error", g2), f2.promise();
  }
  function j(a2, c2) {
    var d2, e2, f2;
    try {
      d2 = b(a2);
    } catch (a3) {
      return false;
    }
    return !!d2.length && (e2 = b('<i style="display:none !important"></i>'), f2 = d2.hasClass("lity-hide"), c2.element().one("lity:remove", function() {
      e2.before(d2).remove(), f2 && !d2.closest(".lity-content").length && d2.addClass("lity-hide");
    }), d2.removeClass("lity-hide").after(e2));
  }
  function k(a2) {
    var c2 = J.exec(a2);
    return !!c2 && o(g(a2, f("https://www.youtube" + (c2[2] || "") + ".com/embed/" + c2[4], b.extend({ autoplay: 1 }, e(c2[5] || "")))));
  }
  function l(a2) {
    var c2 = K.exec(a2);
    return !!c2 && o(g(a2, f("https://player.vimeo.com/video/" + c2[3], b.extend({ autoplay: 1 }, e(c2[4] || "")))));
  }
  function m(a2) {
    var c2 = M.exec(a2);
    return !!c2 && (0 !== a2.indexOf("http") && (a2 = "https:" + a2), o(g(a2, f("https://www.facebook.com/plugins/video.php?href=" + a2, b.extend({ autoplay: 1 }, e(c2[4] || ""))))));
  }
  function n(a2) {
    var b2 = L.exec(a2);
    return !!b2 && o(g(a2, f("https://www.google." + b2[3] + "/maps?" + b2[6], { output: b2[6].indexOf("layer=c") > 0 ? "svembed" : "embed" })));
  }
  function o(a2) {
    return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen allow="autoplay; fullscreen" src="' + a2 + '"/></div>';
  }
  function p() {
    return z.documentElement.clientHeight ? z.documentElement.clientHeight : Math.round(A.height());
  }
  function q(a2) {
    var b2 = v();
    b2 && (27 === a2.keyCode && b2.options("esc") && b2.close(), 9 === a2.keyCode && r(a2, b2));
  }
  function r(a2, b2) {
    var c2 = b2.element().find(G), d2 = c2.index(z.activeElement);
    a2.shiftKey && d2 <= 0 ? (c2.get(c2.length - 1).focus(), a2.preventDefault()) : a2.shiftKey || d2 !== c2.length - 1 || (c2.get(0).focus(), a2.preventDefault());
  }
  function s() {
    b.each(D, function(a2, b2) {
      b2.resize();
    });
  }
  function t(a2) {
    1 === D.unshift(a2) && (C.addClass("lity-active"), A.on({ resize: s, keydown: q })), b("body > *").not(a2.element()).addClass("lity-hidden").each(function() {
      var a3 = b(this);
      void 0 === a3.data(F) && a3.data(F, a3.attr(E) || null);
    }).attr(E, "true");
  }
  function u(a2) {
    var c2;
    a2.element().attr(E, "true"), 1 === D.length && (C.removeClass("lity-active"), A.off({ resize: s, keydown: q })), D = b.grep(D, function(b2) {
      return a2 !== b2;
    }), c2 = D.length ? D[0].element() : b(".lity-hidden"), c2.removeClass("lity-hidden").each(function() {
      var a3 = b(this), c3 = a3.data(F);
      c3 ? a3.attr(E, c3) : a3.removeAttr(E), a3.removeData(F);
    });
  }
  function v() {
    return 0 === D.length ? null : D[0];
  }
  function w(a2, c2, d2, e2) {
    var f2, g2 = "inline", h2 = b.extend({}, d2);
    return e2 && h2[e2] ? (f2 = h2[e2](a2, c2), g2 = e2) : (b.each(["inline", "iframe"], function(a3, b2) {
      delete h2[b2], h2[b2] = d2[b2];
    }), b.each(h2, function(b2, d3) {
      return !d3 || (!(!d3.test || d3.test(a2, c2)) || (f2 = d3(a2, c2), false !== f2 ? (g2 = b2, false) : void 0));
    })), { handler: g2, content: f2 || "" };
  }
  function x(a2, e2, f2, g2) {
    function h2(a3) {
      k2 = b(a3).css("max-height", p() + "px"), j2.find(".lity-loader").each(function() {
        var a4 = b(this);
        c(a4).always(function() {
          a4.remove();
        });
      }), j2.removeClass("lity-loading").find(".lity-content").empty().append(k2), m2 = true, k2.trigger("lity:ready", [l2]);
    }
    var i2, j2, k2, l2 = this, m2 = false, n2 = false;
    e2 = b.extend({}, H, e2), j2 = b(e2.template), l2.element = function() {
      return j2;
    }, l2.opener = function() {
      return f2;
    }, l2.options = b.proxy(d, l2, e2), l2.handlers = b.proxy(d, l2, e2.handlers), l2.resize = function() {
      m2 && !n2 && k2.css("max-height", p() + "px").trigger("lity:resize", [l2]);
    }, l2.close = function() {
      if (m2 && !n2) {
        n2 = true, u(l2);
        var a3 = B();
        if (g2 && (z.activeElement === j2[0] || b.contains(j2[0], z.activeElement))) try {
          g2.focus();
        } catch (a4) {
        }
        return k2.trigger("lity:close", [l2]), j2.removeClass("lity-opened").addClass("lity-closed"), c(k2.add(j2)).always(function() {
          k2.trigger("lity:remove", [l2]), j2.remove(), j2 = void 0, a3.resolve();
        }), a3.promise();
      }
    }, i2 = w(a2, l2, e2.handlers, e2.handler), j2.attr(E, "false").addClass("lity-loading lity-opened lity-" + i2.handler).appendTo("body").focus().on("click", "[data-lity-close]", function(a3) {
      b(a3.target).is("[data-lity-close]") && l2.close();
    }).trigger("lity:open", [l2]), t(l2), b.when(i2.content).always(h2);
  }
  function y(a2, c2, d2) {
    a2.preventDefault ? (a2.preventDefault(), d2 = b(this), a2 = d2.data("lity-target") || d2.attr("href") || d2.attr("src")) : d2 = b(d2);
    var e2 = new x(a2, b.extend({}, d2.data("lity-options") || d2.data("lity"), c2), d2, z.activeElement);
    if (!a2.preventDefault) return e2;
  }
  var z = a.document, A = b(a), B = b.Deferred, C = b("html"), D = [], E = "aria-hidden", F = "lity-" + E, G = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])', H = { esc: true, handler: null, handlers: { image: i, inline: j, youtube: k, vimeo: l, googlemaps: n, facebookvideo: m, iframe: o }, template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>' }, I = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i, J = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i, K = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/, L = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i, M = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i, N = (function() {
    var a2 = z.createElement("div"), b2 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
    for (var c2 in b2) if (void 0 !== a2.style[c2]) return b2[c2];
    return false;
  })();
  return i.test = function(a2) {
    return I.test(a2);
  }, y.version = "2.4.1", y.options = b.proxy(d, y, H), y.handlers = b.proxy(d, y, H.handlers), y.current = v, b(z).on("click.lity", "[data-lity]", y), y;
});
function slideUp(elm, duration = 300) {
  if (!elm.classList.contains("transitioning")) {
    elm.classList.add("transitioning");
    elm.style.transitionProperty = "height, margin, padding";
    elm.style.transitionDuration = duration + "ms";
    elm.style.boxSizing = "border-box";
    elm.style.height = elm.offsetHeight + "px";
    elm.offsetHeight;
    window.setTimeout(() => {
      elm.style.overflow = "hidden";
      elm.style.height = 0;
      elm.style.paddingTop = 0;
      elm.style.paddingBottom = 0;
      elm.style.marginTop = 0;
      elm.style.marginBottom = 0;
      window.setTimeout(() => {
        elm.style.display = "none";
        elm.style.removeProperty("height");
        elm.style.removeProperty("padding-top");
        elm.style.removeProperty("padding-bottom");
        elm.style.removeProperty("margin-top");
        elm.style.removeProperty("margin-bottom");
        elm.style.removeProperty("overflow");
        elm.style.removeProperty("transition-duration");
        elm.style.removeProperty("transition-property");
        elm.classList.remove("transitioning");
      }, duration);
    }, 0);
  }
}
function slideDown(elm, duration = 300) {
  if (!elm.classList.contains("transitioning")) {
    elm.classList.add("transitioning");
    elm.style.removeProperty("display");
    let display = window.getComputedStyle(elm).display;
    if (display === "none") display = "block";
    elm.style.display = display;
    let height = elm.offsetHeight;
    elm.style.overflow = "hidden";
    elm.style.height = 0;
    elm.style.paddingTop = 0;
    elm.style.paddingBottom = 0;
    elm.style.marginTop = 0;
    elm.style.marginBottom = 0;
    elm.offsetHeight;
    window.setTimeout(() => {
      elm.style.boxSizing = "border-box";
      elm.style.transitionProperty = "height, margin, padding";
      elm.style.transitionDuration = duration + "ms";
      elm.style.height = height + "px";
      elm.style.removeProperty("padding-top");
      elm.style.removeProperty("padding-bottom");
      elm.style.removeProperty("margin-top");
      elm.style.removeProperty("margin-bottom");
      window.setTimeout(() => {
        elm.style.removeProperty("height");
        elm.style.removeProperty("overflow");
        elm.style.removeProperty("transition-duration");
        elm.style.removeProperty("transition-property");
        elm.classList.remove("transitioning");
      }, duration);
    }, 0);
  }
}
function slideToggle(elm, duration = 300) {
  if (window.getComputedStyle(elm).display === "none") {
    slideDown(elm, duration);
  } else {
    slideUp(elm, duration);
  }
}
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.1.1
*/
var Iconify = (function(t) {
  "use strict";
  const e = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }), n = Object.freeze({ rotate: 0, vFlip: false, hFlip: false }), o = Object.freeze({ ...e, ...n }), r = Object.freeze({ ...o, body: "", hidden: false });
  function i(t2, e2) {
    const o2 = (function(t3, e3) {
      const n2 = {};
      !t3.hFlip != !e3.hFlip && (n2.hFlip = true), !t3.vFlip != !e3.vFlip && (n2.vFlip = true);
      const o3 = ((t3.rotate || 0) + (e3.rotate || 0)) % 4;
      return o3 && (n2.rotate = o3), n2;
    })(t2, e2);
    for (const i2 in r) i2 in n ? i2 in t2 && !(i2 in o2) && (o2[i2] = n[i2]) : i2 in e2 ? o2[i2] = e2[i2] : i2 in t2 && (o2[i2] = t2[i2]);
    return o2;
  }
  function c(t2, e2, n2) {
    const o2 = t2.icons, r2 = t2.aliases || /* @__PURE__ */ Object.create(null);
    let c2 = {};
    function s2(t3) {
      c2 = i(o2[t3] || r2[t3], c2);
    }
    return s2(e2), n2.forEach(s2), i(t2, c2);
  }
  function s(t2, e2) {
    const n2 = [];
    if ("object" != typeof t2 || "object" != typeof t2.icons) return n2;
    t2.not_found instanceof Array && t2.not_found.forEach(((t3) => {
      e2(t3, null), n2.push(t3);
    }));
    const o2 = (function(t3, e3) {
      const n3 = t3.icons, o3 = t3.aliases || /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null);
      return (e3 || Object.keys(n3).concat(Object.keys(o3))).forEach((function t4(e4) {
        if (n3[e4]) return r2[e4] = [];
        if (!(e4 in r2)) {
          r2[e4] = null;
          const n4 = o3[e4] && o3[e4].parent, i2 = n4 && t4(n4);
          i2 && (r2[e4] = [n4].concat(i2));
        }
        return r2[e4];
      })), r2;
    })(t2);
    for (const r2 in o2) {
      const i2 = o2[r2];
      i2 && (e2(r2, c(t2, r2, i2)), n2.push(r2));
    }
    return n2;
  }
  const a = /^[a-z0-9]+(-[a-z0-9]+)*$/, u = (t2, e2, n2, o2 = "") => {
    const r2 = t2.split(":");
    if ("@" === t2.slice(0, 1)) {
      if (r2.length < 2 || r2.length > 3) return null;
      o2 = r2.shift().slice(1);
    }
    if (r2.length > 3 || !r2.length) return null;
    if (r2.length > 1) {
      const t3 = r2.pop(), n3 = r2.pop(), i3 = { provider: r2.length > 0 ? r2[0] : o2, prefix: n3, name: t3 };
      return e2 && !f(i3) ? null : i3;
    }
    const i2 = r2[0], c2 = i2.split("-");
    if (c2.length > 1) {
      const t3 = { provider: o2, prefix: c2.shift(), name: c2.join("-") };
      return e2 && !f(t3) ? null : t3;
    }
    if (n2 && "" === o2) {
      const t3 = { provider: o2, prefix: "", name: i2 };
      return e2 && !f(t3, n2) ? null : t3;
    }
    return null;
  }, f = (t2, e2) => !!t2 && !("" !== t2.provider && !t2.provider.match(a) || !(e2 && "" === t2.prefix || t2.prefix.match(a)) || !t2.name.match(a)), l = { provider: "", aliases: {}, not_found: {}, ...e };
  function d(t2, e2) {
    for (const n2 in e2) if (n2 in t2 && typeof t2[n2] != typeof e2[n2]) return false;
    return true;
  }
  function p(t2) {
    if ("object" != typeof t2 || null === t2) return null;
    const e2 = t2;
    if ("string" != typeof e2.prefix || !t2.icons || "object" != typeof t2.icons) return null;
    if (!d(t2, l)) return null;
    const n2 = e2.icons;
    for (const t3 in n2) {
      const e3 = n2[t3];
      if (!t3.match(a) || "string" != typeof e3.body || !d(e3, r)) return null;
    }
    const o2 = e2.aliases || /* @__PURE__ */ Object.create(null);
    for (const t3 in o2) {
      const e3 = o2[t3], i2 = e3.parent;
      if (!t3.match(a) || "string" != typeof i2 || !n2[i2] && !o2[i2] || !d(e3, r)) return null;
    }
    return e2;
  }
  const h = /* @__PURE__ */ Object.create(null);
  function g(t2, e2) {
    const n2 = h[t2] || (h[t2] = /* @__PURE__ */ Object.create(null));
    return n2[e2] || (n2[e2] = /* @__PURE__ */ (function(t3, e3) {
      return { provider: t3, prefix: e3, icons: /* @__PURE__ */ Object.create(null), missing: /* @__PURE__ */ new Set() };
    })(t2, e2));
  }
  function m(t2, e2) {
    return p(e2) ? s(e2, ((e3, n2) => {
      n2 ? t2.icons[e3] = n2 : t2.missing.add(e3);
    })) : [];
  }
  function y(t2, e2) {
    let n2 = [];
    return ("string" == typeof t2 ? [t2] : Object.keys(h)).forEach(((t3) => {
      ("string" == typeof t3 && "string" == typeof e2 ? [e2] : Object.keys(h[t3] || {})).forEach(((e3) => {
        const o2 = g(t3, e3);
        n2 = n2.concat(Object.keys(o2.icons).map(((n3) => ("" !== t3 ? "@" + t3 + ":" : "") + e3 + ":" + n3)));
      }));
    })), n2;
  }
  let b = false;
  function v(t2) {
    const e2 = "string" == typeof t2 ? u(t2, true, b) : t2;
    if (e2) {
      const t3 = g(e2.provider, e2.prefix), n2 = e2.name;
      return t3.icons[n2] || (t3.missing.has(n2) ? null : void 0);
    }
  }
  function x(t2, e2) {
    const n2 = u(t2, true, b);
    if (!n2) return false;
    return (function(t3, e3, n3) {
      try {
        if ("string" == typeof n3.body) return t3.icons[e3] = { ...n3 }, true;
      } catch (t4) {
      }
      return false;
    })(g(n2.provider, n2.prefix), n2.name, e2);
  }
  function w(t2, e2) {
    if ("object" != typeof t2) return false;
    if ("string" != typeof e2 && (e2 = t2.provider || ""), b && !e2 && !t2.prefix) {
      let e3 = false;
      return p(t2) && (t2.prefix = "", s(t2, ((t3, n3) => {
        n3 && x(t3, n3) && (e3 = true);
      }))), e3;
    }
    const n2 = t2.prefix;
    if (!f({ provider: e2, prefix: n2, name: "a" })) return false;
    return !!m(g(e2, n2), t2);
  }
  function S(t2) {
    return !!v(t2);
  }
  function j(t2) {
    const e2 = v(t2);
    return e2 ? { ...o, ...e2 } : null;
  }
  const E = Object.freeze({ width: null, height: null }), I = Object.freeze({ ...E, ...n }), O = /(-?[0-9.]*[0-9]+[0-9.]*)/g, k = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function C(t2, e2, n2) {
    if (1 === e2) return t2;
    if (n2 = n2 || 100, "number" == typeof t2) return Math.ceil(t2 * e2 * n2) / n2;
    if ("string" != typeof t2) return t2;
    const o2 = t2.split(O);
    if (null === o2 || !o2.length) return t2;
    const r2 = [];
    let i2 = o2.shift(), c2 = k.test(i2);
    for (; ; ) {
      if (c2) {
        const t3 = parseFloat(i2);
        isNaN(t3) ? r2.push(i2) : r2.push(Math.ceil(t3 * e2 * n2) / n2);
      } else r2.push(i2);
      if (i2 = o2.shift(), void 0 === i2) return r2.join("");
      c2 = !c2;
    }
  }
  const M = (t2) => "unset" === t2 || "undefined" === t2 || "none" === t2;
  function T(t2, e2) {
    const n2 = { ...o, ...t2 }, r2 = { ...I, ...e2 }, i2 = { left: n2.left, top: n2.top, width: n2.width, height: n2.height };
    let c2 = n2.body;
    [n2, r2].forEach(((t3) => {
      const e3 = [], n3 = t3.hFlip, o2 = t3.vFlip;
      let r3, s3 = t3.rotate;
      switch (n3 ? o2 ? s3 += 2 : (e3.push("translate(" + (i2.width + i2.left).toString() + " " + (0 - i2.top).toString() + ")"), e3.push("scale(-1 1)"), i2.top = i2.left = 0) : o2 && (e3.push("translate(" + (0 - i2.left).toString() + " " + (i2.height + i2.top).toString() + ")"), e3.push("scale(1 -1)"), i2.top = i2.left = 0), s3 < 0 && (s3 -= 4 * Math.floor(s3 / 4)), s3 %= 4, s3) {
        case 1:
          r3 = i2.height / 2 + i2.top, e3.unshift("rotate(90 " + r3.toString() + " " + r3.toString() + ")");
          break;
        case 2:
          e3.unshift("rotate(180 " + (i2.width / 2 + i2.left).toString() + " " + (i2.height / 2 + i2.top).toString() + ")");
          break;
        case 3:
          r3 = i2.width / 2 + i2.left, e3.unshift("rotate(-90 " + r3.toString() + " " + r3.toString() + ")");
      }
      s3 % 2 == 1 && (i2.left !== i2.top && (r3 = i2.left, i2.left = i2.top, i2.top = r3), i2.width !== i2.height && (r3 = i2.width, i2.width = i2.height, i2.height = r3)), e3.length && (c2 = '<g transform="' + e3.join(" ") + '">' + c2 + "</g>");
    }));
    const s2 = r2.width, a2 = r2.height, u2 = i2.width, f2 = i2.height;
    let l2, d2;
    null === s2 ? (d2 = null === a2 ? "1em" : "auto" === a2 ? f2 : a2, l2 = C(d2, u2 / f2)) : (l2 = "auto" === s2 ? u2 : s2, d2 = null === a2 ? C(l2, f2 / u2) : "auto" === a2 ? f2 : a2);
    const p2 = {}, h2 = (t3, e3) => {
      M(e3) || (p2[t3] = e3.toString());
    };
    return h2("width", l2), h2("height", d2), p2.viewBox = i2.left.toString() + " " + i2.top.toString() + " " + u2.toString() + " " + f2.toString(), { attributes: p2, body: c2 };
  }
  const L = /\sid="(\S+)"/g, A = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16);
  let F = 0;
  function P(t2, e2 = A) {
    const n2 = [];
    let o2;
    for (; o2 = L.exec(t2); ) n2.push(o2[1]);
    if (!n2.length) return t2;
    const r2 = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
    return n2.forEach(((n3) => {
      const o3 = "function" == typeof e2 ? e2(n3) : e2 + (F++).toString(), i2 = n3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      t2 = t2.replace(new RegExp('([#;"])(' + i2 + ')([")]|\\.[a-z])', "g"), "$1" + o3 + r2 + "$3");
    })), t2 = t2.replace(new RegExp(r2, "g"), "");
  }
  const N = { local: true, session: true }, z = { local: /* @__PURE__ */ new Set(), session: /* @__PURE__ */ new Set() };
  let _ = false;
  const D = "iconify2", R = "iconify", $ = R + "-count", q = R + "-version", H = 36e5, U = 168;
  function V(t2, e2) {
    try {
      return t2.getItem(e2);
    } catch (t3) {
    }
  }
  function Q(t2, e2, n2) {
    try {
      return t2.setItem(e2, n2), true;
    } catch (t3) {
    }
  }
  function G(t2, e2) {
    try {
      t2.removeItem(e2);
    } catch (t3) {
    }
  }
  function J(t2, e2) {
    return Q(t2, $, e2.toString());
  }
  function B(t2) {
    return parseInt(V(t2, $)) || 0;
  }
  let K = "undefined" == typeof window ? {} : window;
  function W(t2) {
    const e2 = t2 + "Storage";
    try {
      if (K && K[e2] && "number" == typeof K[e2].length) return K[e2];
    } catch (t3) {
    }
    N[t2] = false;
  }
  function X(t2, e2) {
    const n2 = W(t2);
    if (!n2) return;
    const o2 = V(n2, q);
    if (o2 !== D) {
      if (o2) {
        const t3 = B(n2);
        for (let e3 = 0; e3 < t3; e3++) G(n2, R + e3.toString());
      }
      return Q(n2, q, D), void J(n2, 0);
    }
    const r2 = Math.floor(Date.now() / H) - U, i2 = (t3) => {
      const o3 = R + t3.toString(), i3 = V(n2, o3);
      if ("string" == typeof i3) {
        try {
          const n3 = JSON.parse(i3);
          if ("object" == typeof n3 && "number" == typeof n3.cached && n3.cached > r2 && "string" == typeof n3.provider && "object" == typeof n3.data && "string" == typeof n3.data.prefix && e2(n3, t3)) return true;
        } catch (t4) {
        }
        G(n2, o3);
      }
    };
    let c2 = B(n2);
    for (let e3 = c2 - 1; e3 >= 0; e3--) i2(e3) || (e3 === c2 - 1 ? (c2--, J(n2, c2)) : z[t2].add(e3));
  }
  function Y() {
    if (!_) {
      _ = true;
      for (const t2 in N) X(t2, ((t3) => {
        const e2 = t3.data, n2 = g(t3.provider, e2.prefix);
        if (!m(n2, e2).length) return false;
        const o2 = e2.lastModified || -1;
        return n2.lastModifiedCached = n2.lastModifiedCached ? Math.min(n2.lastModifiedCached, o2) : o2, true;
      }));
    }
  }
  function Z(t2, e2) {
    switch (t2) {
      case "local":
      case "session":
        N[t2] = e2;
        break;
      case "all":
        for (const t3 in N) N[t3] = e2;
    }
  }
  const tt = /* @__PURE__ */ Object.create(null);
  function et(t2, e2) {
    tt[t2] = e2;
  }
  function nt(t2) {
    return tt[t2] || tt[""];
  }
  function ot(t2) {
    let e2;
    if ("string" == typeof t2.resources) e2 = [t2.resources];
    else if (e2 = t2.resources, !(e2 instanceof Array && e2.length)) return null;
    return { resources: e2, path: t2.path || "/", maxURL: t2.maxURL || 500, rotate: t2.rotate || 750, timeout: t2.timeout || 5e3, random: true === t2.random, index: t2.index || 0, dataAfterTimeout: false !== t2.dataAfterTimeout };
  }
  const rt = /* @__PURE__ */ Object.create(null), it = ["https://api.simplesvg.com", "https://api.unisvg.com"], ct = [];
  for (; it.length > 0; ) 1 === it.length || Math.random() > 0.5 ? ct.push(it.shift()) : ct.push(it.pop());
  function st(t2, e2) {
    const n2 = ot(e2);
    return null !== n2 && (rt[t2] = n2, true);
  }
  function at(t2) {
    return rt[t2];
  }
  rt[""] = ot({ resources: ["https://api.iconify.design"].concat(ct) });
  let ut = (() => {
    let t2;
    try {
      if (t2 = fetch, "function" == typeof t2) return t2;
    } catch (t3) {
    }
  })();
  const ft = { prepare: (t2, e2, n2) => {
    const o2 = [], r2 = (function(t3, e3) {
      const n3 = at(t3);
      if (!n3) return 0;
      let o3;
      if (n3.maxURL) {
        let t4 = 0;
        n3.resources.forEach(((e4) => {
          const n4 = e4;
          t4 = Math.max(t4, n4.length);
        }));
        const r3 = e3 + ".json?icons=";
        o3 = n3.maxURL - t4 - n3.path.length - r3.length;
      } else o3 = 0;
      return o3;
    })(t2, e2), i2 = "icons";
    let c2 = { type: i2, provider: t2, prefix: e2, icons: [] }, s2 = 0;
    return n2.forEach(((n3, a2) => {
      s2 += n3.length + 1, s2 >= r2 && a2 > 0 && (o2.push(c2), c2 = { type: i2, provider: t2, prefix: e2, icons: [] }, s2 = n3.length), c2.icons.push(n3);
    })), o2.push(c2), o2;
  }, send: (t2, e2, n2) => {
    if (!ut) return void n2("abort", 424);
    let o2 = (function(t3) {
      if ("string" == typeof t3) {
        const e3 = at(t3);
        if (e3) return e3.path;
      }
      return "/";
    })(e2.provider);
    switch (e2.type) {
      case "icons": {
        const t3 = e2.prefix, n3 = e2.icons.join(",");
        o2 += t3 + ".json?" + new URLSearchParams({ icons: n3 }).toString();
        break;
      }
      case "custom": {
        const t3 = e2.uri;
        o2 += "/" === t3.slice(0, 1) ? t3.slice(1) : t3;
        break;
      }
      default:
        return void n2("abort", 400);
    }
    let r2 = 503;
    ut(t2 + o2).then(((t3) => {
      const e3 = t3.status;
      if (200 === e3) return r2 = 501, t3.json();
      setTimeout((() => {
        n2(/* @__PURE__ */ (function(t4) {
          return 404 === t4;
        })(e3) ? "abort" : "next", e3);
      }));
    })).then(((t3) => {
      "object" == typeof t3 && null !== t3 ? setTimeout((() => {
        n2("success", t3);
      })) : setTimeout((() => {
        404 === t3 ? n2("abort", t3) : n2("next", r2);
      }));
    })).catch((() => {
      n2("next", r2);
    }));
  } };
  function lt(t2, e2) {
    t2.forEach(((t3) => {
      const n2 = t3.loaderCallbacks;
      n2 && (t3.loaderCallbacks = n2.filter(((t4) => t4.id !== e2)));
    }));
  }
  let dt = 0;
  var pt = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: false, dataAfterTimeout: false };
  function ht(t2, e2, n2, o2) {
    const r2 = t2.resources.length, i2 = t2.random ? Math.floor(Math.random() * r2) : t2.index;
    let c2;
    if (t2.random) {
      let e3 = t2.resources.slice(0);
      for (c2 = []; e3.length > 1; ) {
        const t3 = Math.floor(Math.random() * e3.length);
        c2.push(e3[t3]), e3 = e3.slice(0, t3).concat(e3.slice(t3 + 1));
      }
      c2 = c2.concat(e3);
    } else c2 = t2.resources.slice(i2).concat(t2.resources.slice(0, i2));
    const s2 = Date.now();
    let a2, u2 = "pending", f2 = 0, l2 = null, d2 = [], p2 = [];
    function h2() {
      l2 && (clearTimeout(l2), l2 = null);
    }
    function g2() {
      "pending" === u2 && (u2 = "aborted"), h2(), d2.forEach(((t3) => {
        "pending" === t3.status && (t3.status = "aborted");
      })), d2 = [];
    }
    function m2(t3, e3) {
      e3 && (p2 = []), "function" == typeof t3 && p2.push(t3);
    }
    function y2() {
      u2 = "failed", p2.forEach(((t3) => {
        t3(void 0, a2);
      }));
    }
    function b2() {
      d2.forEach(((t3) => {
        "pending" === t3.status && (t3.status = "aborted");
      })), d2 = [];
    }
    function v2() {
      if ("pending" !== u2) return;
      h2();
      const o3 = c2.shift();
      if (void 0 === o3) return d2.length ? void (l2 = setTimeout((() => {
        h2(), "pending" === u2 && (b2(), y2());
      }), t2.timeout)) : void y2();
      const r3 = { status: "pending", resource: o3, callback: (e3, n3) => {
        !(function(e4, n4, o4) {
          const r4 = "success" !== n4;
          switch (d2 = d2.filter(((t3) => t3 !== e4)), u2) {
            case "pending":
              break;
            case "failed":
              if (r4 || !t2.dataAfterTimeout) return;
              break;
            default:
              return;
          }
          if ("abort" === n4) return a2 = o4, void y2();
          if (r4) return a2 = o4, void (d2.length || (c2.length ? v2() : y2()));
          if (h2(), b2(), !t2.random) {
            const n5 = t2.resources.indexOf(e4.resource);
            -1 !== n5 && n5 !== t2.index && (t2.index = n5);
          }
          u2 = "completed", p2.forEach(((t3) => {
            t3(o4);
          }));
        })(r3, e3, n3);
      } };
      d2.push(r3), f2++, l2 = setTimeout(v2, t2.rotate), n2(o3, e2, r3.callback);
    }
    return "function" == typeof o2 && p2.push(o2), setTimeout(v2), function() {
      return { startTime: s2, payload: e2, status: u2, queriesSent: f2, queriesPending: d2.length, subscribe: m2, abort: g2 };
    };
  }
  function gt(t2) {
    const e2 = { ...pt, ...t2 };
    let n2 = [];
    function o2() {
      n2 = n2.filter(((t3) => "pending" === t3().status));
    }
    const r2 = { query: function(t3, r3, i2) {
      const c2 = ht(e2, t3, r3, ((t4, e3) => {
        o2(), i2 && i2(t4, e3);
      }));
      return n2.push(c2), c2;
    }, find: function(t3) {
      return n2.find(((e3) => t3(e3))) || null;
    }, setIndex: (t3) => {
      e2.index = t3;
    }, getIndex: () => e2.index, cleanup: o2 };
    return r2;
  }
  function mt() {
  }
  const yt = /* @__PURE__ */ Object.create(null);
  function bt(t2, e2, n2) {
    let o2, r2;
    if ("string" == typeof t2) {
      const e3 = nt(t2);
      if (!e3) return n2(void 0, 424), mt;
      r2 = e3.send;
      const i2 = (function(t3) {
        if (!yt[t3]) {
          const e4 = at(t3);
          if (!e4) return;
          const n3 = { config: e4, redundancy: gt(e4) };
          yt[t3] = n3;
        }
        return yt[t3];
      })(t2);
      i2 && (o2 = i2.redundancy);
    } else {
      const e3 = ot(t2);
      if (e3) {
        o2 = gt(e3);
        const n3 = nt(t2.resources ? t2.resources[0] : "");
        n3 && (r2 = n3.send);
      }
    }
    return o2 && r2 ? o2.query(e2, r2, n2)().abort : (n2(void 0, 424), mt);
  }
  function vt(t2, e2) {
    function n2(n3) {
      let o2;
      if (!N[n3] || !(o2 = W(n3))) return;
      const r2 = z[n3];
      let i2;
      if (r2.size) r2.delete(i2 = Array.from(r2).shift());
      else if (i2 = B(o2), !J(o2, i2 + 1)) return;
      const c2 = { cached: Math.floor(Date.now() / H), provider: t2.provider, data: e2 };
      return Q(o2, R + i2.toString(), JSON.stringify(c2));
    }
    _ || Y(), e2.lastModified && !(function(t3, e3) {
      const n3 = t3.lastModifiedCached;
      if (n3 && n3 >= e3) return n3 === e3;
      if (t3.lastModifiedCached = e3, n3) for (const n4 in N) X(n4, ((n5) => {
        const o2 = n5.data;
        return n5.provider !== t3.provider || o2.prefix !== t3.prefix || o2.lastModified === e3;
      }));
      return true;
    })(t2, e2.lastModified) || Object.keys(e2.icons).length && (e2.not_found && delete (e2 = Object.assign({}, e2)).not_found, n2("local") || n2("session"));
  }
  function xt() {
  }
  function wt(t2) {
    t2.iconsLoaderFlag || (t2.iconsLoaderFlag = true, setTimeout((() => {
      t2.iconsLoaderFlag = false, (function(t3) {
        t3.pendingCallbacksFlag || (t3.pendingCallbacksFlag = true, setTimeout((() => {
          t3.pendingCallbacksFlag = false;
          const e2 = t3.loaderCallbacks ? t3.loaderCallbacks.slice(0) : [];
          if (!e2.length) return;
          let n2 = false;
          const o2 = t3.provider, r2 = t3.prefix;
          e2.forEach(((e3) => {
            const i2 = e3.icons, c2 = i2.pending.length;
            i2.pending = i2.pending.filter(((e4) => {
              if (e4.prefix !== r2) return true;
              const c3 = e4.name;
              if (t3.icons[c3]) i2.loaded.push({ provider: o2, prefix: r2, name: c3 });
              else {
                if (!t3.missing.has(c3)) return n2 = true, true;
                i2.missing.push({ provider: o2, prefix: r2, name: c3 });
              }
              return false;
            })), i2.pending.length !== c2 && (n2 || lt([t3], e3.id), e3.callback(i2.loaded.slice(0), i2.missing.slice(0), i2.pending.slice(0), e3.abort));
          }));
        })));
      })(t2);
    })));
  }
  const St = (t2) => {
    const e2 = g(t2.provider, t2.prefix).pendingIcons;
    return !(!e2 || !e2.has(t2.name));
  }, jt = (t2, e2) => {
    var n2;
    const o2 = (function(t3) {
      const e3 = { loaded: [], missing: [], pending: [] }, n3 = /* @__PURE__ */ Object.create(null);
      t3.sort(((t4, e4) => t4.provider !== e4.provider ? t4.provider.localeCompare(e4.provider) : t4.prefix !== e4.prefix ? t4.prefix.localeCompare(e4.prefix) : t4.name.localeCompare(e4.name)));
      let o3 = { provider: "", prefix: "", name: "" };
      return t3.forEach(((t4) => {
        if (o3.name === t4.name && o3.prefix === t4.prefix && o3.provider === t4.provider) return;
        o3 = t4;
        const r3 = t4.provider, i3 = t4.prefix, c3 = t4.name, s3 = n3[r3] || (n3[r3] = /* @__PURE__ */ Object.create(null)), a2 = s3[i3] || (s3[i3] = g(r3, i3));
        let u2;
        u2 = c3 in a2.icons ? e3.loaded : "" === i3 || a2.missing.has(c3) ? e3.missing : e3.pending;
        const f2 = { provider: r3, prefix: i3, name: c3 };
        u2.push(f2);
      })), e3;
    })((function(t3, e3 = true, n3 = false) {
      const o3 = [];
      return t3.forEach(((t4) => {
        const r3 = "string" == typeof t4 ? u(t4, e3, n3) : t4;
        r3 && o3.push(r3);
      })), o3;
    })(t2, true, ("boolean" == typeof n2 && (b = n2), b)));
    if (!o2.pending.length) {
      let t3 = true;
      return e2 && setTimeout((() => {
        t3 && e2(o2.loaded, o2.missing, o2.pending, xt);
      })), () => {
        t3 = false;
      };
    }
    const r2 = /* @__PURE__ */ Object.create(null), i2 = [];
    let c2, s2;
    return o2.pending.forEach(((t3) => {
      const { provider: e3, prefix: n3 } = t3;
      if (n3 === s2 && e3 === c2) return;
      c2 = e3, s2 = n3, i2.push(g(e3, n3));
      const o3 = r2[e3] || (r2[e3] = /* @__PURE__ */ Object.create(null));
      o3[n3] || (o3[n3] = []);
    })), o2.pending.forEach(((t3) => {
      const { provider: e3, prefix: n3, name: o3 } = t3, i3 = g(e3, n3), c3 = i3.pendingIcons || (i3.pendingIcons = /* @__PURE__ */ new Set());
      c3.has(o3) || (c3.add(o3), r2[e3][n3].push(o3));
    })), i2.forEach(((t3) => {
      const { provider: e3, prefix: n3 } = t3;
      r2[e3][n3].length && (function(t4, e4) {
        t4.iconsToLoad ? t4.iconsToLoad = t4.iconsToLoad.concat(e4).sort() : t4.iconsToLoad = e4, t4.iconsQueueFlag || (t4.iconsQueueFlag = true, setTimeout((() => {
          t4.iconsQueueFlag = false;
          const { provider: e5, prefix: n4 } = t4, o3 = t4.iconsToLoad;
          let r3;
          delete t4.iconsToLoad, o3 && (r3 = nt(e5)) && r3.prepare(e5, n4, o3).forEach(((n5) => {
            bt(e5, n5, ((e6) => {
              if ("object" != typeof e6) n5.icons.forEach(((e7) => {
                t4.missing.add(e7);
              }));
              else try {
                const n6 = m(t4, e6);
                if (!n6.length) return;
                const o4 = t4.pendingIcons;
                o4 && n6.forEach(((t5) => {
                  o4.delete(t5);
                })), vt(t4, e6);
              } catch (t5) {
                console.error(t5);
              }
              wt(t4);
            }));
          }));
        })));
      })(t3, r2[e3][n3]);
    })), e2 ? (function(t3, e3, n3) {
      const o3 = dt++, r3 = lt.bind(null, n3, o3);
      if (!e3.pending.length) return r3;
      const i3 = { id: o3, icons: e3, callback: t3, abort: r3 };
      return n3.forEach(((t4) => {
        (t4.loaderCallbacks || (t4.loaderCallbacks = [])).push(i3);
      })), r3;
    })(e2, o2, i2) : xt;
  }, Et = (t2) => new Promise(((e2, n2) => {
    const r2 = "string" == typeof t2 ? u(t2, true) : t2;
    r2 ? jt([r2 || t2], ((i2) => {
      if (i2.length && r2) {
        const t3 = v(r2);
        if (t3) return void e2({ ...o, ...t3 });
      }
      n2(t2);
    })) : n2(t2);
  }));
  function It(t2, e2) {
    const n2 = { ...t2 };
    for (const t3 in e2) {
      const o2 = e2[t3], r2 = typeof o2;
      t3 in E ? (null === o2 || o2 && ("string" === r2 || "number" === r2)) && (n2[t3] = o2) : r2 === typeof n2[t3] && (n2[t3] = "rotate" === t3 ? o2 % 4 : o2);
    }
    return n2;
  }
  const Ot = { ...I, inline: false }, kt = "iconify", Ct = "iconify-inline", Mt = "iconifyData" + Date.now();
  let Tt = [];
  function Lt(t2) {
    for (let e2 = 0; e2 < Tt.length; e2++) {
      const n2 = Tt[e2];
      if (("function" == typeof n2.node ? n2.node() : n2.node) === t2) return n2;
    }
  }
  function At(t2, e2 = false) {
    let n2 = Lt(t2);
    return n2 ? (n2.temporary && (n2.temporary = e2), n2) : (n2 = { node: t2, temporary: e2 }, Tt.push(n2), n2);
  }
  function Ft() {
    return Tt;
  }
  let Pt = null;
  const Nt = { childList: true, subtree: true, attributes: true };
  function zt(t2) {
    if (!t2.observer) return;
    const e2 = t2.observer;
    e2.pendingScan || (e2.pendingScan = setTimeout((() => {
      delete e2.pendingScan, Pt && Pt(t2);
    })));
  }
  function _t(t2, e2) {
    if (!t2.observer) return;
    const n2 = t2.observer;
    if (!n2.pendingScan) for (let o2 = 0; o2 < e2.length; o2++) {
      const r2 = e2[o2];
      if (r2.addedNodes && r2.addedNodes.length > 0 || "attributes" === r2.type && void 0 !== r2.target[Mt]) return void (n2.paused || zt(t2));
    }
  }
  function Dt(t2, e2) {
    t2.observer.instance.observe(e2, Nt);
  }
  function Rt(t2) {
    let e2 = t2.observer;
    if (e2 && e2.instance) return;
    const n2 = "function" == typeof t2.node ? t2.node() : t2.node;
    n2 && window && (e2 || (e2 = { paused: 0 }, t2.observer = e2), e2.instance = new window.MutationObserver(_t.bind(null, t2)), Dt(t2, n2), e2.paused || zt(t2));
  }
  function $t() {
    Ft().forEach(Rt);
  }
  function qt(t2) {
    if (!t2.observer) return;
    const e2 = t2.observer;
    e2.pendingScan && (clearTimeout(e2.pendingScan), delete e2.pendingScan), e2.instance && (e2.instance.disconnect(), delete e2.instance);
  }
  function Ht(t2) {
    const e2 = null !== Pt;
    Pt !== t2 && (Pt = t2, e2 && Ft().forEach(qt)), e2 ? $t() : (function(t3) {
      const e3 = document;
      e3.readyState && "loading" !== e3.readyState ? t3() : e3.addEventListener("DOMContentLoaded", t3);
    })($t);
  }
  function Ut(t2) {
    (t2 ? [t2] : Ft()).forEach(((t3) => {
      if (!t3.observer) return void (t3.observer = { paused: 1 });
      const e2 = t3.observer;
      if (e2.paused++, e2.paused > 1 || !e2.instance) return;
      e2.instance.disconnect();
    }));
  }
  function Vt(t2) {
    if (t2) {
      const e2 = Lt(t2);
      e2 && Ut(e2);
    } else Ut();
  }
  function Qt(t2) {
    (t2 ? [t2] : Ft()).forEach(((t3) => {
      if (!t3.observer) return void Rt(t3);
      const e2 = t3.observer;
      if (e2.paused && (e2.paused--, !e2.paused)) {
        const n2 = "function" == typeof t3.node ? t3.node() : t3.node;
        if (!n2) return;
        e2.instance ? Dt(t3, n2) : Rt(t3);
      }
    }));
  }
  function Gt(t2) {
    if (t2) {
      const e2 = Lt(t2);
      e2 && Qt(e2);
    } else Qt();
  }
  function Jt(t2, e2 = false) {
    const n2 = At(t2, e2);
    return Rt(n2), n2;
  }
  function Bt(t2) {
    const e2 = Lt(t2);
    e2 && (qt(e2), (function(t3) {
      Tt = Tt.filter(((e3) => t3 !== e3 && t3 !== ("function" == typeof e3.node ? e3.node() : e3.node)));
    })(t2));
  }
  const Kt = /[\s,]+/;
  const Wt = ["width", "height"], Xt = ["inline", "hFlip", "vFlip"];
  function Yt(t2) {
    const e2 = t2.getAttribute("data-icon"), n2 = "string" == typeof e2 && u(e2, true);
    if (!n2) return null;
    const o2 = { ...Ot, inline: t2.classList && t2.classList.contains(Ct) };
    Wt.forEach(((e3) => {
      const n3 = t2.getAttribute("data-" + e3);
      n3 && (o2[e3] = n3);
    }));
    const r2 = t2.getAttribute("data-rotate");
    "string" == typeof r2 && (o2.rotate = (function(t3, e3 = 0) {
      const n3 = t3.replace(/^-?[0-9.]*/, "");
      function o3(t4) {
        for (; t4 < 0; ) t4 += 4;
        return t4 % 4;
      }
      if ("" === n3) {
        const e4 = parseInt(t3);
        return isNaN(e4) ? 0 : o3(e4);
      }
      if (n3 !== t3) {
        let e4 = 0;
        switch (n3) {
          case "%":
            e4 = 25;
            break;
          case "deg":
            e4 = 90;
        }
        if (e4) {
          let r3 = parseFloat(t3.slice(0, t3.length - n3.length));
          return isNaN(r3) ? 0 : (r3 /= e4, r3 % 1 == 0 ? o3(r3) : 0);
        }
      }
      return e3;
    })(r2));
    const i2 = t2.getAttribute("data-flip");
    "string" == typeof i2 && (function(t3, e3) {
      e3.split(Kt).forEach(((e4) => {
        switch (e4.trim()) {
          case "horizontal":
            t3.hFlip = true;
            break;
          case "vertical":
            t3.vFlip = true;
        }
      }));
    })(o2, i2), Xt.forEach(((e3) => {
      const n3 = "data-" + e3, r3 = /* @__PURE__ */ (function(t3, e4) {
        return t3 === e4 || "true" === t3 || "" !== t3 && "false" !== t3 && null;
      })(t2.getAttribute(n3), n3);
      "boolean" == typeof r3 && (o2[e3] = r3);
    }));
    const c2 = t2.getAttribute("data-mode");
    return { name: e2, icon: n2, customisations: o2, mode: c2 };
  }
  const Zt = "svg." + kt + ", i." + kt + ", span." + kt + ", i." + Ct + ", span." + Ct;
  function te(t2, e2) {
    let n2 = -1 === t2.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const t3 in e2) n2 += " " + t3 + '="' + e2[t3] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n2 + ">" + t2 + "</svg>";
  }
  let ee;
  function ne(t2) {
    return void 0 === ee && (function() {
      try {
        ee = window.trustedTypes.createPolicy("iconify", { createHTML: (t3) => t3 });
      } catch (t3) {
        ee = null;
      }
    })(), ee ? ee.createHTML(t2) : t2;
  }
  function oe(t2) {
    const e2 = /* @__PURE__ */ new Set(["iconify"]);
    return ["provider", "prefix"].forEach(((n2) => {
      t2[n2] && e2.add("iconify--" + t2[n2]);
    })), e2;
  }
  function re(t2, e2, n2, o2) {
    const r2 = t2.classList;
    if (o2) {
      const t3 = o2.classList;
      Array.from(t3).forEach(((t4) => {
        r2.add(t4);
      }));
    }
    const i2 = [];
    return e2.forEach(((t3) => {
      r2.contains(t3) ? n2.has(t3) && i2.push(t3) : (r2.add(t3), i2.push(t3));
    })), n2.forEach(((t3) => {
      e2.has(t3) || r2.remove(t3);
    })), i2;
  }
  function ie(t2, e2, n2) {
    const o2 = t2.style;
    (n2 || []).forEach(((t3) => {
      o2.removeProperty(t3);
    }));
    const r2 = [];
    for (const t3 in e2) o2.getPropertyValue(t3) || (r2.push(t3), o2.setProperty(t3, e2[t3]));
    return r2;
  }
  function ce(t2, e2, n2) {
    let o2;
    try {
      o2 = document.createElement("span");
    } catch (e3) {
      return t2;
    }
    const r2 = e2.customisations, i2 = T(n2, r2), c2 = t2[Mt], s2 = te(P(i2.body), { "aria-hidden": "true", role: "img", ...i2.attributes });
    o2.innerHTML = ne(s2);
    const a2 = o2.childNodes[0], u2 = t2.attributes;
    for (let t3 = 0; t3 < u2.length; t3++) {
      const e3 = u2.item(t3), n3 = e3.name;
      "class" === n3 || a2.hasAttribute(n3) || a2.setAttribute(n3, e3.value);
    }
    const f2 = re(a2, oe(e2.icon), new Set(c2 && c2.addedClasses), t2), l2 = ie(a2, r2.inline ? { "vertical-align": "-0.125em" } : {}, c2 && c2.addedStyles), d2 = { ...e2, status: "loaded", addedClasses: f2, addedStyles: l2 };
    return a2[Mt] = d2, t2.parentNode && t2.parentNode.replaceChild(a2, t2), a2;
  }
  const se = { display: "inline-block" }, ae = { "background-color": "currentColor" }, ue = { "background-color": "transparent" }, fe = { image: "var(--svg)", repeat: "no-repeat", size: "100% 100%" }, le = { "-webkit-mask": ae, mask: ae, background: ue };
  for (const t2 in le) {
    const e2 = le[t2];
    for (const n2 in fe) e2[t2 + "-" + n2] = fe[n2];
  }
  function de(t2) {
    return t2 + (t2.match(/^[-0-9.]+$/) ? "px" : "");
  }
  let pe = false;
  function he() {
    pe || (pe = true, setTimeout((() => {
      pe && (pe = false, ge());
    })));
  }
  function ge(t2, e2 = false) {
    const n2 = /* @__PURE__ */ Object.create(null);
    function r2(t3, e3) {
      const { provider: o2, prefix: r3, name: i2 } = t3, c2 = g(o2, r3), s2 = c2.icons[i2];
      if (s2) return { status: "loaded", icon: s2 };
      if (c2.missing.has(i2)) return { status: "missing" };
      if (e3 && !St(t3)) {
        const t4 = n2[o2] || (n2[o2] = /* @__PURE__ */ Object.create(null));
        (t4[r3] || (t4[r3] = /* @__PURE__ */ new Set())).add(i2);
      }
      return { status: "loading" };
    }
    (t2 ? [t2] : Ft()).forEach(((t3) => {
      const n3 = "function" == typeof t3.node ? t3.node() : t3.node;
      if (!n3 || !n3.querySelectorAll) return;
      let i2 = false, c2 = false;
      function s2(e3, n4, r3) {
        if (c2 || (c2 = true, Ut(t3)), "SVG" !== e3.tagName.toUpperCase()) {
          const t4 = n4.mode, i3 = "mask" === t4 || "bg" !== t4 && ("style" === t4 ? -1 !== r3.body.indexOf("currentColor") : null);
          if ("boolean" == typeof i3) return void (function(t5, e4, n5, o2) {
            const r4 = e4.customisations, i4 = T(n5, r4), c3 = i4.attributes, s3 = t5[Mt], a2 = te(i4.body, { ...c3, width: n5.width + "", height: n5.height + "" }), u2 = re(t5, oe(e4.icon), new Set(s3 && s3.addedClasses)), f2 = { "--svg": 'url("' + (l2 = a2, "data:image/svg+xml," + (function(t6) {
              return t6.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
            })(l2) + '")'), width: de(c3.width), height: de(c3.height), ...se, ...o2 ? ae : ue };
            var l2;
            r4.inline && (f2["vertical-align"] = "-0.125em");
            const d2 = ie(t5, f2, s3 && s3.addedStyles), p2 = { ...e4, status: "loaded", addedClasses: u2, addedStyles: d2 };
            t5[Mt] = p2;
          })(e3, n4, { ...o, ...r3 }, i3);
        }
        ce(e3, n4, r3);
      }
      (function(t4) {
        const e3 = [];
        return t4.querySelectorAll(Zt).forEach(((t5) => {
          const n4 = t5[Mt] || "svg" !== t5.tagName.toLowerCase() ? Yt(t5) : null;
          n4 && e3.push({ node: t5, props: n4 });
        })), e3;
      })(n3).forEach((({ node: t4, props: e3 }) => {
        const n4 = t4[Mt];
        if (!n4) {
          const { status: n5, icon: o3 } = r2(e3.icon, true);
          return o3 ? void s2(t4, e3, o3) : (i2 = i2 || "loading" === n5, void (t4[Mt] = { ...e3, status: n5 }));
        }
        let o2;
        if ((function(t5, e4) {
          if (t5.name !== e4.name || t5.mode !== e4.mode) return true;
          const n5 = t5.customisations, o3 = e4.customisations;
          for (const t6 in Ot) if (n5[t6] !== o3[t6]) return true;
          return false;
        })(n4, e3)) {
          if (o2 = r2(e3.icon, n4.name !== e3.name), !o2.icon) return i2 = i2 || "loading" === o2.status, void Object.assign(n4, { ...e3, status: o2.status });
        } else {
          if ("loading" !== n4.status) return;
          if (o2 = r2(e3.icon, false), !o2.icon) return void (n4.status = o2.status);
        }
        s2(t4, e3, o2.icon);
      })), t3.temporary && !i2 ? Bt(n3) : e2 && i2 ? Jt(n3, true) : c2 && t3.observer && Qt(t3);
    }));
    for (const t3 in n2) {
      const e3 = n2[t3];
      for (const n3 in e3) {
        const o2 = e3[n3];
        jt(Array.from(o2).map(((e4) => ({ provider: t3, prefix: n3, name: e4 }))), he);
      }
    }
  }
  function me(t2, e2, n2 = false) {
    const o2 = v(t2);
    if (!o2) return null;
    const r2 = u(t2), i2 = It(Ot, e2 || {}), c2 = ce(document.createElement("span"), { name: t2, icon: r2, customisations: i2 }, o2);
    return n2 ? c2.outerHTML : c2;
  }
  function ye() {
    return "3.1.1";
  }
  function be(t2, e2) {
    return me(t2, e2, false);
  }
  function ve(t2, e2) {
    return me(t2, e2, true);
  }
  function xe(t2, e2) {
    const n2 = v(t2);
    if (!n2) return null;
    return T(n2, It(Ot, e2 || {}));
  }
  function we(t2) {
    t2 ? (function(t3) {
      const e2 = Lt(t3);
      e2 ? ge(e2) : ge({ node: t3, temporary: true }, true);
    })(t2) : ge();
  }
  if ("undefined" != typeof document && "undefined" != typeof window) {
    !(function() {
      if (document.documentElement) return At(document.documentElement);
      Tt.push({ node: () => document.documentElement });
    })();
    const t2 = window;
    if (void 0 !== t2.IconifyPreload) {
      const e2 = t2.IconifyPreload, n2 = "Invalid IconifyPreload syntax.";
      "object" == typeof e2 && null !== e2 && (e2 instanceof Array ? e2 : [e2]).forEach(((t3) => {
        try {
          ("object" != typeof t3 || null === t3 || t3 instanceof Array || "object" != typeof t3.icons || "string" != typeof t3.prefix || !w(t3)) && console.error(n2);
        } catch (t4) {
          console.error(n2);
        }
      }));
    }
    setTimeout((() => {
      Ht(ge), ge();
    }));
  }
  function Se(t2, e2) {
    Z(t2, false !== e2);
  }
  function je(t2) {
    Z(t2, true);
  }
  if (et("", ft), "undefined" != typeof document && "undefined" != typeof window) {
    Y();
    const t2 = window;
    if (void 0 !== t2.IconifyProviders) {
      const e2 = t2.IconifyProviders;
      if ("object" == typeof e2 && null !== e2) for (const t3 in e2) {
        const n2 = "IconifyProviders[" + t3 + "] is invalid.";
        try {
          const o2 = e2[t3];
          if ("object" != typeof o2 || !o2 || void 0 === o2.resources) continue;
          st(t3, o2) || console.error(n2);
        } catch (t4) {
          console.error(n2);
        }
      }
    }
  }
  const Ee = { getAPIConfig: at, setAPIModule: et, sendAPIQuery: bt, setFetch: function(t2) {
    ut = t2;
  }, getFetch: function() {
    return ut;
  }, listAPIProviders: function() {
    return Object.keys(rt);
  } }, Ie = { _api: Ee, addAPIProvider: st, loadIcons: jt, loadIcon: Et, iconExists: S, getIcon: j, listIcons: y, addIcon: x, addCollection: w, replaceIDs: P, calculateSize: C, buildIcon: T, getVersion: ye, renderSVG: be, renderHTML: ve, renderIcon: xe, scan: we, observe: Jt, stopObserving: Bt, pauseObserver: Vt, resumeObserver: Gt, enableCache: Se, disableCache: je };
  return t._api = Ee, t.addAPIProvider = st, t.addCollection = w, t.addIcon = x, t.buildIcon = T, t.calculateSize = C, t.default = Ie, t.disableCache = je, t.enableCache = Se, t.getIcon = j, t.getVersion = ye, t.iconExists = S, t.listIcons = y, t.loadIcon = Et, t.loadIcons = jt, t.observe = Jt, t.pauseObserver = Vt, t.renderHTML = ve, t.renderIcon = xe, t.renderSVG = be, t.replaceIDs = P, t.resumeObserver = Gt, t.scan = we, t.stopObserving = Bt, Object.defineProperty(t, "__esModule", { value: true }), t;
})({});
if ("object" == typeof exports) try {
  for (var key in exports.__esModule = true, exports.default = Iconify, Iconify) exports[key] = Iconify[key];
} catch (t) {
}
try {
  void 0 === self.Iconify && (self.Iconify = Iconify);
} catch (t) {
}
//# sourceMappingURL=scripts.js.map
