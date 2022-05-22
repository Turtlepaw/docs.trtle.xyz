import {
  Fragment,
  computed,
  createBlock,
  createCommentVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  init_runtime_dom_esm_bundler,
  inject,
  onBeforeUnmount,
  onMounted,
  openBlock,
  provide,
  ref,
  renderSlot,
  resolveComponent,
  toRefs
} from "./chunk-Y23VYRZF.js";
import {
  toDisplayString
} from "./chunk-7EEACSVK.js";
import "./chunk-XNAE4CLY.js";

// node_modules/@discord-message-components/vue/dist/vue.es.js
init_runtime_dom_esm_bundler();
var e = Object.defineProperty;
var t = Object.defineProperties;
var r = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty;
var o = Object.prototype.propertyIsEnumerable;
var l = (t2, r2, n2) => r2 in t2 ? e(t2, r2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[r2] = n2;
var i = (e2, t2) => {
  for (var r2 in t2 || (t2 = {}))
    a.call(t2, r2) && l(e2, r2, t2[r2]);
  if (n)
    for (var r2 of n(t2))
      o.call(t2, r2) && l(e2, r2, t2[r2]);
  return e2;
};
var s = (e2, n2) => t(e2, r(n2));
var C = { blue: "https://cdn.discordapp.com/embed/avatars/0.png", gray: "https://cdn.discordapp.com/embed/avatars/1.png", green: "https://cdn.discordapp.com/embed/avatars/2.png", orange: "https://cdn.discordapp.com/embed/avatars/3.png", red: "https://cdn.discordapp.com/embed/avatars/4.png", pink: "https://cdn.discordapp.com/embed/avatars/5.png" };
var j = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
var M = { red: 0, orange: 60, yellow: 120, green: 180, blue: 240, purple: 300 };
function E(e2) {
  var t2, r2, n2 = [], a2 = 1;
  if (typeof e2 == "string")
    if (j[e2])
      n2 = j[e2].slice(), r2 = "rgb";
    else if (e2 === "transparent")
      a2 = 0, r2 = "rgb", n2 = [0, 0, 0];
    else if (/^#[A-Fa-f0-9]+$/.test(e2)) {
      var o2 = e2.slice(1);
      a2 = 1, (s2 = o2.length) <= 4 ? (n2 = [parseInt(o2[0] + o2[0], 16), parseInt(o2[1] + o2[1], 16), parseInt(o2[2] + o2[2], 16)], s2 === 4 && (a2 = parseInt(o2[3] + o2[3], 16) / 255)) : (n2 = [parseInt(o2[0] + o2[1], 16), parseInt(o2[2] + o2[3], 16), parseInt(o2[4] + o2[5], 16)], s2 === 8 && (a2 = parseInt(o2[6] + o2[7], 16) / 255)), n2[0] || (n2[0] = 0), n2[1] || (n2[1] = 0), n2[2] || (n2[2] = 0), r2 = "rgb";
    } else if (t2 = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e2)) {
      var l2 = t2[1], i2 = l2 === "rgb";
      r2 = o2 = l2.replace(/a$/, "");
      var s2 = o2 === "cmyk" ? 4 : o2 === "gray" ? 1 : 3;
      n2 = t2[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(e3, t3) {
        if (/%$/.test(e3))
          return t3 === s2 ? parseFloat(e3) / 100 : o2 === "rgb" ? 255 * parseFloat(e3) / 100 : parseFloat(e3);
        if (o2[t3] === "h") {
          if (/deg$/.test(e3))
            return parseFloat(e3);
          if (M[e3] !== void 0)
            return M[e3];
        }
        return parseFloat(e3);
      }), l2 === o2 && n2.push(1), a2 = i2 || n2[s2] === void 0 ? 1 : n2[s2], n2 = n2.slice(0, s2);
    } else
      e2.length > 10 && /[0-9](?:\s|\/)/.test(e2) && (n2 = e2.match(/([0-9]+)/g).map(function(e3) {
        return parseFloat(e3);
      }), r2 = e2.match(/([a-z])/gi).join("").toLowerCase());
  else
    isNaN(e2) ? Array.isArray(e2) || e2.length ? (n2 = [e2[0], e2[1], e2[2]], r2 = "rgb", a2 = e2.length === 4 ? e2[3] : 1) : e2 instanceof Object && (e2.r != null || e2.red != null || e2.R != null ? (r2 = "rgb", n2 = [e2.r || e2.red || e2.R || 0, e2.g || e2.green || e2.G || 0, e2.b || e2.blue || e2.B || 0]) : (r2 = "hsl", n2 = [e2.h || e2.hue || e2.H || 0, e2.s || e2.saturation || e2.S || 0, e2.l || e2.lightness || e2.L || e2.b || e2.brightness]), a2 = e2.a || e2.alpha || e2.opacity || 1, e2.opacity != null && (a2 /= 100)) : (r2 = "rgb", n2 = [e2 >>> 16, (65280 & e2) >>> 8, 255 & e2]);
  return { space: r2, values: n2, alpha: a2 };
}
var _;
var A;
var F;
var B;
var D;
var I;
var z;
var P;
var L;
var q;
var N;
var H;
var U;
var Q;
var Z;
var G;
var X;
var Y;
var J;
var K;
var V;
var W;
var ee;
var te;
var re;
var ne;
var ae;
var oe;
var le;
var ie;
var se;
var ue;
var ce;
var de;
var pe;
var me;
var he;
var fe;
var ge;
var ve;
var ye;
var be;
var ke;
var we;
var xe;
var Se;
var $e;
var Re;
var Te;
var Oe;
var Ce;
var je;
var Me;
var Ee;
var _e;
var Ae;
var Fe;
var Be;
var De;
var Ie;
var ze;
var Pe;
var Le = function(e2) {
  var t2, r2, n2, a2, o2, l2 = e2[0] / 360, i2 = e2[1] / 100, s2 = e2[2] / 100;
  if (i2 === 0)
    return [o2 = 255 * s2, o2, o2];
  t2 = 2 * s2 - (r2 = s2 < 0.5 ? s2 * (1 + i2) : s2 + i2 - s2 * i2), a2 = [0, 0, 0];
  for (var u = 0; u < 3; u++)
    (n2 = l2 + 1 / 3 * -(u - 1)) < 0 ? n2++ : n2 > 1 && n2--, o2 = 6 * n2 < 1 ? t2 + 6 * (r2 - t2) * n2 : 2 * n2 < 1 ? r2 : 3 * n2 < 2 ? t2 + (r2 - t2) * (2 / 3 - n2) * 6 : t2, a2[u] = 255 * o2;
  return a2;
};
var qe = (_ = /\r\n?/g, A = /\t/g, F = /\f/g, B = function(e2) {
  return e2.replace(_, "\n").replace(F, "").replace(A, "    ");
}, D = function(e2, t2) {
  var r2 = e2 || {};
  if (t2 != null)
    for (var n2 in t2)
      Object.prototype.hasOwnProperty.call(t2, n2) && (r2[n2] = t2[n2]);
  return r2;
}, I = function(e2, t2) {
  var r2, n2 = Object.keys(e2).filter(function(t3) {
    var r3 = e2[t3];
    if (r3 == null || r3.match == null)
      return false;
    var n3 = r3.order;
    return typeof n3 == "number" && isFinite(n3) || typeof console == "undefined" || console.warn("simple-markdown: Invalid order for rule `" + t3 + "`: " + String(n3)), true;
  });
  n2.sort(function(t3, r3) {
    var n3 = e2[t3], a3 = e2[r3], o2 = n3.order, l2 = a3.order;
    if (o2 !== l2)
      return o2 - l2;
    var i2 = n3.quality ? 0 : 1, s2 = a3.quality ? 0 : 1;
    return i2 !== s2 ? i2 - s2 : t3 < r3 ? -1 : t3 > r3 ? 1 : 0;
  });
  var a2 = function(t3, o2) {
    var l2 = [];
    for (r2 = o2 = o2 || r2; t3; ) {
      var i2 = null, s2 = null, u = null, c = NaN, d = 0, p = n2[0], m = e2[p];
      do {
        var h2 = m.order, f = o2.prevCapture == null ? "" : o2.prevCapture[0], g = m.match(t3, o2, f);
        if (g) {
          var v = m.quality ? m.quality(g, o2, f) : 0;
          v <= c || (i2 = p, s2 = m, u = g, c = v);
        }
        d++, p = n2[d], m = e2[p];
      } while (m && (!u || m.order === h2 && m.quality));
      if (s2 == null || u == null)
        throw new Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + n2[n2.length - 1] + "'. It seems to not match the following source:\n" + t3);
      if (u.index)
        throw new Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");
      var y = s2.parse(u, a2, o2);
      Array.isArray(y) ? Array.prototype.push.apply(l2, y) : (y.type == null && (y.type = i2), l2.push(y)), o2.prevCapture = u, t3 = t3.substring(o2.prevCapture[0].length);
    }
    return l2;
  };
  return function(e3, n3) {
    return (r2 = D(n3, t2)).inline || r2.disableAutoBlockNewlines || (e3 += "\n\n"), r2.prevCapture = null, a2(B(e3), r2);
  };
}, z = function(e2) {
  var t2 = function(t3, r2) {
    return r2.inline ? e2.exec(t3) : null;
  };
  return t2.regex = e2, t2;
}, P = function(e2) {
  var t2 = function(t3, r2) {
    return r2.inline ? null : e2.exec(t3);
  };
  return t2.regex = e2, t2;
}, L = function(e2) {
  var t2 = function(t3, r2) {
    return e2.exec(t3);
  };
  return t2.regex = e2, t2;
}, q = typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103, N = function(e2, t2, r2) {
  return { $$typeof: q, type: e2, key: t2 == null ? void 0 : t2, ref: null, props: r2, _owner: null };
}, H = function(e2, t2, r2, n2) {
  r2 = r2 || {}, n2 = n2 === void 0 || n2;
  var a2 = "";
  for (var o2 in r2) {
    var l2 = r2[o2];
    Object.prototype.hasOwnProperty.call(r2, o2) && l2 && (a2 += " " + X(o2) + '="' + X(l2) + '"');
  }
  var i2 = "<" + e2 + a2 + ">";
  return n2 ? i2 + t2 + "</" + e2 + ">" : i2;
}, U = {}, Q = function(e2) {
  if (e2 == null)
    return null;
  try {
    var t2 = decodeURIComponent(e2).replace(/[^A-Za-z0-9/:]/g, "").toLowerCase();
    if (t2.indexOf("javascript:") === 0 || t2.indexOf("vbscript:") === 0 || t2.indexOf("data:") === 0)
      return null;
  } catch (r2) {
    return null;
  }
  return e2;
}, Z = /[<>&"']/g, G = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" }, X = function(e2) {
  return String(e2).replace(Z, function(e3) {
    return G[e3];
  });
}, Y = /\\([^0-9A-Za-z\s])/g, J = function(e2) {
  return e2.replace(Y, "$1");
}, K = function(e2, t2, r2) {
  var n2 = r2.inline || false;
  r2.inline = true;
  var a2 = e2(t2, r2);
  return r2.inline = n2, a2;
}, V = function(e2, t2, r2) {
  var n2 = r2.inline || false;
  r2.inline = false;
  var a2 = e2(t2 + "\n\n", r2);
  return r2.inline = n2, a2;
}, W = function(e2, t2, r2) {
  return { content: K(t2, e2[1], r2) };
}, ee = function() {
  return {};
}, re = "( *)(" + (te = "(?:[*+-]|\\d+\\.)") + ") +", ne = new RegExp("^" + re), ae = new RegExp(re + "[^\\n]*(?:\\n(?!\\1" + te + " )[^\\n]*)*(\n|$)", "gm"), le = /^ (?= *`)|(` *) $/g, ie = oe = /\n{2,}$/, se = / *\n+$/, ue = new RegExp("^( *)(" + te + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + te + " )\\n*|\\s*\n*$)"), ce = /(?:^|\n)( *)$/, Me = /^ *\| *| *\| *$/g, Ee = / *$/, _e = /^ *-+: *$/, Ae = /^ *:-+: *$/, Fe = /^ *:-+ *$/, Be = function(e2) {
  return _e.test(e2) ? "right" : Ae.test(e2) ? "center" : Fe.test(e2) ? "left" : null;
}, De = function(e2, t2, r2, n2) {
  return n2 && (e2 = e2.replace(Me, "")), e2.trim().split("|").map(Be);
}, Ie = function(e2, t2, r2, n2) {
  var a2 = r2.inTable;
  r2.inTable = true;
  var o2 = t2(e2.trim(), r2);
  r2.inTable = a2;
  var l2 = [[]];
  return o2.forEach(function(e3, t3) {
    e3.type === "tableSeparator" ? (!n2 || t3 !== 0 && t3 !== o2.length - 1) && l2.push([]) : (e3.type !== "text" || o2[t3 + 1] != null && o2[t3 + 1].type !== "tableSeparator" || (e3.content = e3.content.replace(Ee, "")), l2[l2.length - 1].push(e3));
  }), l2;
}, ze = function(e2, t2, r2, n2) {
  return e2.trim().split("\n").map(function(e3) {
    return Ie(e3, t2, r2, n2);
  });
}, de = { parseTable: (Pe = function(e2) {
  return function(t2, r2, n2) {
    n2.inline = true;
    var a2 = Ie(t2[1], r2, n2, e2), o2 = De(t2[2], 0, 0, e2), l2 = ze(t2[3], r2, n2, e2);
    return n2.inline = false, { type: "table", header: a2, align: o2, cells: l2 };
  };
})(true), parseNpTable: Pe(false), TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/, NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/ }, pe = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*", me = `\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*`, he = /mailto:/i, fe = function(e2, t2, r2) {
  var n2 = (e2[2] || e2[1]).replace(/\s+/g, " ").toLowerCase();
  if (t2._defs && t2._defs[n2]) {
    var a2 = t2._defs[n2];
    r2.target = a2.target, r2.title = a2.title;
  }
  return t2._refs = t2._refs || {}, t2._refs[n2] = t2._refs[n2] || [], t2._refs[n2].push(r2), r2;
}, ge = 0, ve = { Array: { react: function(e2, t2, r2) {
  for (var n2 = r2.key, a2 = [], o2 = 0, l2 = 0; o2 < e2.length; o2++, l2++) {
    r2.key = "" + o2;
    var i2 = e2[o2];
    if (i2.type === "text")
      for (i2 = { type: "text", content: i2.content }; o2 + 1 < e2.length && e2[o2 + 1].type === "text"; o2++)
        i2.content += e2[o2 + 1].content;
    a2.push(t2(i2, r2));
  }
  return r2.key = n2, a2;
}, html: function(e2, t2, r2) {
  for (var n2 = "", a2 = 0; a2 < e2.length; a2++) {
    var o2 = e2[a2];
    if (o2.type === "text")
      for (o2 = { type: "text", content: o2.content }; a2 + 1 < e2.length && e2[a2 + 1].type === "text"; a2++)
        o2.content += e2[a2 + 1].content;
    n2 += t2(o2, r2);
  }
  return n2;
} }, heading: { order: ge++, match: P(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/), parse: function(e2, t2, r2) {
  return { level: e2[1].length, content: K(t2, e2[2].trim(), r2) };
}, react: function(e2, t2, r2) {
  return N("h" + e2.level, r2.key, { children: t2(e2.content, r2) });
}, html: function(e2, t2, r2) {
  return H("h" + e2.level, t2(e2.content, r2));
} }, nptable: { order: ge++, match: P(de.NPTABLE_REGEX), parse: de.parseNpTable, react: null, html: null }, lheading: { order: ge++, match: P(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/), parse: function(e2, t2, r2) {
  return { type: "heading", level: e2[2] === "=" ? 1 : 2, content: K(t2, e2[1], r2) };
}, react: null, html: null }, hr: { order: ge++, match: P(/^( *[-*_]){3,} *(?:\n *)+\n/), parse: ee, react: function(e2, t2, r2) {
  return N("hr", r2.key, U);
}, html: function(e2, t2, r2) {
  return "<hr>";
} }, codeBlock: { order: ge++, match: P(/^(?:    [^\n]+\n*)+(?:\n *)+\n/), parse: function(e2, t2, r2) {
  return { lang: void 0, content: e2[0].replace(/^    /gm, "").replace(/\n+$/, "") };
}, react: function(e2, t2, r2) {
  var n2 = e2.lang ? "markdown-code-" + e2.lang : void 0;
  return N("pre", r2.key, { children: N("code", null, { className: n2, children: e2.content }) });
}, html: function(e2, t2, r2) {
  var n2 = e2.lang ? "markdown-code-" + e2.lang : void 0, a2 = H("code", X(e2.content), { class: n2 });
  return H("pre", a2);
} }, fence: { order: ge++, match: P(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/), parse: function(e2, t2, r2) {
  return { type: "codeBlock", lang: e2[2] || void 0, content: e2[3] };
}, react: null, html: null }, blockQuote: { order: ge++, match: P(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/), parse: function(e2, t2, r2) {
  return { content: t2(e2[0].replace(/^ *> ?/gm, ""), r2) };
}, react: function(e2, t2, r2) {
  return N("blockquote", r2.key, { children: t2(e2.content, r2) });
}, html: function(e2, t2, r2) {
  return H("blockquote", t2(e2.content, r2));
} }, list: { order: ge++, match: function(e2, t2) {
  var r2 = t2.prevCapture == null ? "" : t2.prevCapture[0], n2 = ce.exec(r2), a2 = t2._list || !t2.inline;
  return n2 && a2 ? (e2 = n2[1] + e2, ue.exec(e2)) : null;
}, parse: function(e2, t2, r2) {
  var n2 = e2[2], a2 = n2.length > 1, o2 = a2 ? +n2 : void 0, l2 = e2[0].replace(ie, "\n").match(ae), i2 = false;
  return { ordered: a2, start: o2, items: l2.map(function(e3, n3) {
    var a3 = ne.exec(e3), o3 = a3 ? a3[0].length : 0, s2 = new RegExp("^ {1," + o3 + "}", "gm"), u = e3.replace(s2, "").replace(ne, ""), c = n3 === l2.length - 1, d = u.indexOf("\n\n") !== -1 || c && i2;
    i2 = d;
    var p, m = r2.inline, h2 = r2._list;
    r2._list = true, d ? (r2.inline = false, p = u.replace(se, "\n\n")) : (r2.inline = true, p = u.replace(se, ""));
    var f = t2(p, r2);
    return r2.inline = m, r2._list = h2, f;
  }) };
}, react: function(e2, t2, r2) {
  var n2 = e2.ordered ? "ol" : "ul";
  return N(n2, r2.key, { start: e2.start, children: e2.items.map(function(e3, n3) {
    return N("li", "" + n3, { children: t2(e3, r2) });
  }) });
}, html: function(e2, t2, r2) {
  var n2 = e2.items.map(function(e3) {
    return H("li", t2(e3, r2));
  }).join(""), a2 = e2.ordered ? "ol" : "ul", o2 = { start: e2.start };
  return H(a2, n2, o2);
} }, def: { order: ge++, match: P(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/), parse: function(e2, t2, r2) {
  var n2 = e2[1].replace(/\s+/g, " ").toLowerCase(), a2 = e2[2], o2 = e2[3];
  return r2._refs && r2._refs[n2] && r2._refs[n2].forEach(function(e3) {
    e3.target = a2, e3.title = o2;
  }), r2._defs = r2._defs || {}, r2._defs[n2] = { target: a2, title: o2 }, { def: n2, target: a2, title: o2 };
}, react: function() {
  return null;
}, html: function() {
  return "";
} }, table: { order: ge++, match: P(de.TABLE_REGEX), parse: de.parseTable, react: function(e2, t2, r2) {
  var n2 = function(t3) {
    return e2.align[t3] == null ? {} : { textAlign: e2.align[t3] };
  }, a2 = e2.header.map(function(e3, a3) {
    return N("th", "" + a3, { style: n2(a3), scope: "col", children: t2(e3, r2) });
  }), o2 = e2.cells.map(function(e3, a3) {
    return N("tr", "" + a3, { children: e3.map(function(e4, a4) {
      return N("td", "" + a4, { style: n2(a4), children: t2(e4, r2) });
    }) });
  });
  return N("table", r2.key, { children: [N("thead", "thead", { children: N("tr", null, { children: a2 }) }), N("tbody", "tbody", { children: o2 })] });
}, html: function(e2, t2, r2) {
  var n2 = function(t3) {
    return e2.align[t3] == null ? "" : "text-align:" + e2.align[t3] + ";";
  }, a2 = e2.header.map(function(e3, a3) {
    return H("th", t2(e3, r2), { style: n2(a3), scope: "col" });
  }).join(""), o2 = e2.cells.map(function(e3) {
    var a3 = e3.map(function(e4, a4) {
      return H("td", t2(e4, r2), { style: n2(a4) });
    }).join("");
    return H("tr", a3);
  }).join(""), l2 = H("thead", H("tr", a2)), i2 = H("tbody", o2);
  return H("table", l2 + i2);
} }, newline: { order: ge++, match: P(/^(?:\n *)*\n/), parse: ee, react: function(e2, t2, r2) {
  return "\n";
}, html: function(e2, t2, r2) {
  return "\n";
} }, paragraph: { order: ge++, match: P(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/), parse: W, react: function(e2, t2, r2) {
  return N("div", r2.key, { className: "paragraph", children: t2(e2.content, r2) });
}, html: function(e2, t2, r2) {
  return H("div", t2(e2.content, r2), { class: "paragraph" });
} }, escape: { order: ge++, match: z(/^\\([^0-9A-Za-z\s])/), parse: function(e2, t2, r2) {
  return { type: "text", content: e2[1] };
}, react: null, html: null }, tableSeparator: { order: ge++, match: function(e2, t2) {
  return t2.inTable ? /^ *\| */.exec(e2) : null;
}, parse: function() {
  return { type: "tableSeparator" };
}, react: function() {
  return " | ";
}, html: function() {
  return " &vert; ";
} }, autolink: { order: ge++, match: z(/^<([^: >]+:\/[^ >]+)>/), parse: function(e2, t2, r2) {
  return { type: "link", content: [{ type: "text", content: e2[1] }], target: e2[1] };
}, react: null, html: null }, mailto: { order: ge++, match: z(/^<([^ >]+@[^ >]+)>/), parse: function(e2, t2, r2) {
  var n2 = e2[1], a2 = e2[1];
  return he.test(a2) || (a2 = "mailto:" + a2), { type: "link", content: [{ type: "text", content: n2 }], target: a2 };
}, react: null, html: null }, url: { order: ge++, match: z(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/), parse: function(e2, t2, r2) {
  return { type: "link", content: [{ type: "text", content: e2[1] }], target: e2[1], title: void 0 };
}, react: null, html: null }, link: { order: ge++, match: z(new RegExp("^\\[(" + pe + ")\\]\\(" + me + "\\)")), parse: function(e2, t2, r2) {
  return { content: t2(e2[1], r2), target: J(e2[2]), title: e2[3] };
}, react: function(e2, t2, r2) {
  return N("a", r2.key, { href: Q(e2.target), title: e2.title, children: t2(e2.content, r2) });
}, html: function(e2, t2, r2) {
  var n2 = { href: Q(e2.target), title: e2.title };
  return H("a", t2(e2.content, r2), n2);
} }, image: { order: ge++, match: z(new RegExp("^!\\[(" + pe + ")\\]\\(" + me + "\\)")), parse: function(e2, t2, r2) {
  return { alt: e2[1], target: J(e2[2]), title: e2[3] };
}, react: function(e2, t2, r2) {
  return N("img", r2.key, { src: Q(e2.target), alt: e2.alt, title: e2.title });
}, html: function(e2, t2, r2) {
  var n2 = { src: Q(e2.target), alt: e2.alt, title: e2.title };
  return H("img", "", n2, false);
} }, reflink: { order: ge++, match: z(new RegExp("^\\[(" + pe + ")\\]\\s*\\[([^\\]]*)\\]")), parse: function(e2, t2, r2) {
  return fe(e2, r2, { type: "link", content: t2(e2[1], r2) });
}, react: null, html: null }, refimage: { order: ge++, match: z(new RegExp("^!\\[(" + pe + ")\\]\\s*\\[([^\\]]*)\\]")), parse: function(e2, t2, r2) {
  return fe(e2, r2, { type: "image", alt: e2[1] });
}, react: null, html: null }, em: { order: ge, match: z(new RegExp("^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)")), quality: function(e2) {
  return e2[0].length + 0.2;
}, parse: function(e2, t2, r2) {
  return { content: t2(e2[2] || e2[1], r2) };
}, react: function(e2, t2, r2) {
  return N("em", r2.key, { children: t2(e2.content, r2) });
}, html: function(e2, t2, r2) {
  return H("em", t2(e2.content, r2));
} }, strong: { order: ge, match: z(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/), quality: function(e2) {
  return e2[0].length + 0.1;
}, parse: W, react: function(e2, t2, r2) {
  return N("strong", r2.key, { children: t2(e2.content, r2) });
}, html: function(e2, t2, r2) {
  return H("strong", t2(e2.content, r2));
} }, u: { order: ge++, match: z(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/), quality: function(e2) {
  return e2[0].length;
}, parse: W, react: function(e2, t2, r2) {
  return N("u", r2.key, { children: t2(e2.content, r2) });
}, html: function(e2, t2, r2) {
  return H("u", t2(e2.content, r2));
} }, del: { order: ge++, match: z(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/), parse: W, react: function(e2, t2, r2) {
  return N("del", r2.key, { children: t2(e2.content, r2) });
}, html: function(e2, t2, r2) {
  return H("del", t2(e2.content, r2));
} }, inlineCode: { order: ge++, match: z(/^(`+)([\s\S]*?[^`])\1(?!`)/), parse: function(e2, t2, r2) {
  return { content: e2[2].replace(le, "$1") };
}, react: function(e2, t2, r2) {
  return N("code", r2.key, { children: e2.content });
}, html: function(e2, t2, r2) {
  return H("code", X(e2.content));
} }, br: { order: ge++, match: L(/^ {2,}\n/), parse: ee, react: function(e2, t2, r2) {
  return N("br", r2.key, U);
}, html: function(e2, t2, r2) {
  return "<br>";
} }, text: { order: ge++, match: L(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/), parse: function(e2, t2, r2) {
  return { content: e2[0] };
}, react: function(e2, t2, r2) {
  return e2.content;
}, html: function(e2, t2, r2) {
  return X(e2.content);
} } }, ye = function(e2, t2) {
  return t2 || typeof console == "undefined" || console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."), function(r2, n2, a2) {
    return e2[r2.type][t2](r2, n2, a2);
  };
}, be = function(e2) {
  var t2 = function(r2, n2) {
    if (n2 = n2 || {}, Array.isArray(r2)) {
      for (var a2 = n2.key, o2 = [], l2 = null, i2 = 0; i2 < r2.length; i2++) {
        n2.key = "" + i2;
        var s2 = t2(r2[i2], n2);
        typeof s2 == "string" && typeof l2 == "string" ? (l2 += s2, o2[o2.length - 1] = l2) : (o2.push(s2), l2 = s2);
      }
      return n2.key = a2, o2;
    }
    return e2(r2, t2, n2);
  };
  return t2;
}, ke = function(e2) {
  var t2 = function(r2, n2) {
    return n2 = n2 || {}, Array.isArray(r2) ? r2.map(function(e3) {
      return t2(e3, n2);
    }).join("") : e2(r2, t2, n2);
  };
  return t2;
}, we = function(e2, t2, r2) {
  if (!t2)
    throw new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");
  var n2, a2 = (e2.Array || ve.Array)[t2];
  if (!a2)
    throw new Error("simple-markdown: outputFor: to join nodes of type `" + t2 + "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");
  var o2 = a2, l2 = function(r3, a3) {
    return n2 = a3 = a3 || n2, Array.isArray(r3) ? o2(r3, l2, a3) : e2[r3.type][t2](r3, l2, a3);
  };
  return function(e3, t3) {
    return n2 = D(t3, r2), l2(e3, n2);
  };
}, xe = I(ve), Se = function(e2, t2) {
  return (t2 = t2 || {}).inline = false, xe(e2, t2);
}, $e = function(e2, t2) {
  return (t2 = t2 || {}).inline = true, xe(e2, t2);
}, Re = function(e2, t2) {
  var r2 = oe.test(e2);
  return (t2 = t2 || {}).inline = !r2, xe(e2, t2);
}, Te = we(ve, "react"), Oe = we(ve, "html"), je = function(e2) {
  var t2 = {};
  for (var r2 in e2)
    r2 !== "source" && Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
  return t2.children = Ce(e2.source), N("div", null, t2);
}, { defaultRules: ve, parserFor: I, outputFor: we, inlineRegex: z, blockRegex: P, anyScopeRegex: L, parseInline: K, parseBlock: V, markdownToReact: Ce = function(e2, t2) {
  return Te(Se(e2, t2), t2);
}, markdownToHtml: function(e2, t2) {
  return Oe(Se(e2, t2), t2);
}, ReactMarkdown: je, defaultBlockParse: Se, defaultInlineParse: $e, defaultImplicitParse: Re, defaultReactOutput: Te, defaultHtmlOutput: Oe, preprocess: B, sanitizeText: X, sanitizeUrl: Q, unescapeUrl: J, htmlTag: H, reactElement: N, defaultRawParse: xe, ruleOutput: ye, reactFor: be, htmlFor: ke, defaultParse: function() {
  return typeof console != "undefined" && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"), Re.apply(null, arguments);
}, defaultOutput: function() {
  return typeof console != "undefined" && console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"), Te.apply(null, arguments);
} });
function Ne(e2, t2, r2, n2 = true, a2 = {}) {
  typeof n2 == "object" && (a2 = n2, n2 = true), r2 || (r2 = {}), r2.class && a2.cssModuleNames && (r2.class = r2.class.split(" ").map((e3) => a2.cssModuleNames[e3] || e3).join(" "));
  let o2 = "";
  for (const i2 in r2)
    Object.prototype.hasOwnProperty.call(r2, i2) && r2[i2] && (o2 += ` ${qe.sanitizeText(i2)}="${qe.sanitizeText(r2[i2])}"`);
  const l2 = `<${e2}${o2}>`;
  return n2 ? `${l2 + t2}</${e2}>` : l2;
}
qe.htmlTag = Ne;
var He = { blockQuote: Object.assign({}, qe.defaultRules.blockQuote, { match: (e2, t2, r2) => !/^$|\n *$/.test(r2) || t2.inQuote ? null : /^( *>>> ([\s\S]*))|^( *> [^\n]*(\n *> [^\n]*)*\n?)/.exec(e2), parse(e2, t2, r2) {
  const n2 = e2[0], a2 = Boolean(/^ *>>> ?/.exec(n2)) ? /^ *>>> ?/ : /^ *> ?/gm;
  return { content: t2(n2.replace(a2, ""), Object.assign({}, r2, { inQuote: true })), type: "blockQuote" };
} }), codeBlock: Object.assign({}, qe.defaultRules.codeBlock, { match: qe.inlineRegex(/^```(([a-z0-9-]+?)\n+)?\n*([^]+?)\n*```/i), parse: (e2, t2, r2) => ({ lang: (e2[2] || "").trim(), content: e2[3] || "", inQuote: r2.inQuote || false }), html: (e2, t2, r2) => {
  const n2 = Ne("code", qe.sanitizeText(e2.content), {}, r2);
  return Ne("pre", n2, null, r2);
} }), newline: qe.defaultRules.newline, escape: qe.defaultRules.escape, autolink: Object.assign({}, qe.defaultRules.autolink, { parse: (e2) => ({ content: [{ type: "text", content: e2[1] }], target: e2[1] }), html: (e2, t2, r2) => Ne("a", t2(e2.content, r2), { href: qe.sanitizeUrl(e2.target) }, r2) }), url: Object.assign({}, qe.defaultRules.url, { parse: (e2) => ({ content: [{ type: "text", content: e2[1] }], target: e2[1] }), html: (e2, t2, r2) => Ne("a", t2(e2.content, r2), { href: qe.sanitizeUrl(e2.target) }, r2) }), em: Object.assign({}, qe.defaultRules.em, { parse(e2, t2, r2) {
  const n2 = qe.defaultRules.em.parse(e2, t2, Object.assign({}, r2, { inEmphasis: true }));
  return r2.inEmphasis ? n2.content : n2;
} }), strong: qe.defaultRules.strong, u: qe.defaultRules.u, strike: Object.assign({}, qe.defaultRules.del, { match: qe.inlineRegex(/^~~([\s\S]+?)~~(?!_)/) }), inlineCode: Object.assign({}, qe.defaultRules.inlineCode, { match: (e2) => qe.defaultRules.inlineCode.match.regex.exec(e2), html: (e2, t2, r2) => Ne("code", qe.sanitizeText(e2.content.trim()), null, r2) }), text: Object.assign({}, qe.defaultRules.text, { match: (e2) => /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff-]|\n\n|\n|\w+:\S|$)/.exec(e2), html: (e2, t2, r2) => r2.escapeHTML ? qe.sanitizeText(e2.content) : e2.content }), emoticon: { order: qe.defaultRules.text.order, match: (e2) => /^(¯\\_\(ツ\)_\/¯)/.exec(e2), parse: (e2) => ({ type: "text", content: e2[1] }), html: (e2, t2, r2) => t2(e2.content, r2) }, br: Object.assign({}, qe.defaultRules.br, { match: qe.anyScopeRegex(/^\n/) }), spoiler: { order: 0, match: (e2) => /^\|\|([\s\S]+?)\|\|/.exec(e2), parse: (e2, t2, r2) => ({ content: t2(e2[1], r2) }), html: (e2, t2, r2) => Ne("span", t2(e2.content, r2), { class: "d-spoiler ddd" }, r2) } };
var Ue = { user: (e2) => `@${qe.sanitizeText(e2.id)}`, channel: (e2) => `#${qe.sanitizeText(e2.id)}`, role: (e2) => `&${qe.sanitizeText(e2.id)}`, everyone: () => "@everyone", here: () => "@here" };
var Qe = { discordUser: { order: qe.defaultRules.strong.order, match: (e2) => /^<@!?([0-9]*)>/.exec(e2), parse: (e2) => ({ id: e2[1] }), html: (e2, t2, r2) => Ne("span", r2.discordCallback.user(e2), { class: "d-mention d-user" }, r2) }, discordChannel: { order: qe.defaultRules.strong.order, match: (e2) => /^<#?([0-9]*)>/.exec(e2), parse: (e2) => ({ id: e2[1] }), html: (e2, t2, r2) => Ne("span", r2.discordCallback.channel(e2), { class: "d-mention d-channel" }, r2) }, discordRole: { order: qe.defaultRules.strong.order, match: (e2) => /^<@&([0-9]*)>/.exec(e2), parse: (e2) => ({ id: e2[1] }), html: (e2, t2, r2) => Ne("span", r2.discordCallback.role(e2), { class: "d-mention d-role" }, r2) }, discordEmoji: { order: qe.defaultRules.strong.order, match: (e2) => /^<(a?):(\w+):(\d+)>/.exec(e2), parse: (e2) => ({ animated: e2[1] === "a", name: e2[2], id: e2[3] }), html: (e2, t2, r2) => Ne("img", "", { class: "d-emoji" + (e2.animated ? " d-emoji-animated" : ""), src: `https://cdn.discordapp.com/emojis/${e2.id}.${e2.animated ? "gif" : "png"}`, alt: `:${e2.name}:` }, false, r2) }, discordEveryone: { order: qe.defaultRules.strong.order, match: (e2) => /^@everyone/.exec(e2), parse: () => ({}), html: (e2, t2, r2) => Ne("span", r2.discordCallback.everyone(e2), { class: "d-mention d-user" }, r2) }, discordHere: { order: qe.defaultRules.strong.order, match: (e2) => /^@here/.exec(e2), parse: () => ({}), html: (e2, t2, r2) => Ne("span", r2.discordCallback.here(e2), { class: "d-mention d-user" }, r2) } };
Object.assign(He, Qe);
var Ze = Object.assign({}, Qe, { text: Object.assign({}, qe.defaultRules.text, { match: (e2) => /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff-]|\n\n|\n|\w+:\S|$)/.exec(e2), html: (e2, t2, r2) => r2.escapeHTML ? qe.sanitizeText(e2.content) : e2.content }) });
var Ge = Object.assign({}, He, { link: qe.defaultRules.link });
var Xe = qe.parserFor(He);
var Ye = qe.outputFor(He, "html");
var Je = qe.parserFor(Ze);
var Ke = qe.outputFor(Ze, "html");
var Ve = qe.parserFor(Ge);
var We = qe.outputFor(Ge, "html");
var et = { parser: (e2) => Xe(e2, { inline: true }), htmlOutput: Ye, toHTML: function(e2, t2, r2, n2) {
  if ((r2 || n2) && (!r2 || !n2))
    throw new Error("You must pass both a custom parser and custom htmlOutput function, not just one");
  t2 = Object.assign({ embed: false, escapeHTML: true, discordOnly: false, discordCallback: {} }, t2 || {});
  let a2 = Xe, o2 = Ye;
  r2 ? (a2 = r2, o2 = n2) : t2.discordOnly ? (a2 = Je, o2 = Ke) : t2.embed && (a2 = Ve, o2 = We);
  const l2 = { inline: true, inQuote: false, inEmphasis: false, escapeHTML: t2.escapeHTML, cssModuleNames: t2.cssModuleNames || null, discordCallback: Object.assign({}, Ue, t2.discordCallback) };
  return o2(a2(e2, l2), l2);
}, rules: He, rulesDiscordOnly: Ze, rulesEmbed: Ge, markdownEngine: qe, htmlTag: Ne };
var tt = new Date();
var rt = Object.freeze({ __proto__: null, [Symbol.toStringTag]: "Module", parseColorToRgba: (e2, t2) => {
  var r2;
  if (!e2)
    return null;
  const [n2, a2, o2, l2] = (r2 = function(e3) {
    var t3;
    Array.isArray(e3) && e3.raw && (e3 = String.raw(...arguments));
    var r3 = E(e3);
    return r3.space ? ((t3 = Array(3))[0] = Math.min(Math.max(r3.values[0], 0), 255), t3[1] = Math.min(Math.max(r3.values[1], 0), 255), t3[2] = Math.min(Math.max(r3.values[2], 0), 255), r3.space[0] === "h" && (t3 = Le(t3)), t3.push(Math.min(Math.max(r3.alpha, 0), 1)), t3) : [];
  }(e2)) != null ? r2 : [];
  return `rgba(${n2},${a2},${o2},${t2 != null ? t2 : l2})`;
}, defaultTimestamp: tt, parseTimestamp: ({ timestamp: e2, format: t2 = "cozy" }) => {
  if (e2 instanceof Date || (e2 = new Date(e2)), t2 === "compact") {
    const [t3, r3] = [e2.getHours(), e2.getMinutes()];
    return [t3 > 12 ? t3 - 12 : t3 === 0 ? 12 : t3, `:${r3.toString().padStart(2, "0")} `, t3 >= 12 ? "PM" : "AM"].join("");
  }
  const [r2, n2, a2] = [e2.getMonth() + 1, e2.getDate(), e2.getFullYear()];
  return `${r2.toString().padStart(2, "0")}/${n2.toString().padStart(2, "0")}/${a2}`;
}, resolveImage: (e2, t2) => {
  var r2, n2;
  return (n2 = (r2 = e2[t2]) != null ? r2 : t2) != null ? n2 : e2 == null ? void 0 : e2.default;
}, markdownParser: et });
var nt = { avatars: s(i({}, C), { default: C.blue }), defaultMode: "cozy", defaultTheme: "dark", profiles: {} };
var at = () => {
  var e2, t2, r2;
  return (r2 = (t2 = (e2 = getCurrentInstance()) == null ? void 0 : e2.appContext.config.globalProperties) == null ? void 0 : t2.$discordOptions) != null ? r2 : nt;
};
var ot = defineComponent({ name: "OutboundLink" });
var lt = { class: "outbound-link-icon" };
var it = createVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", x: "0px", y: "0px", viewBox: "0 0 100 100", width: "15", height: "15" }, [createVNode("path", { fill: "currentColor", d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z" }), createVNode("polygon", { fill: "currentColor", points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9" })], -1);
ot.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("span", lt, [it]);
};
var st = defineComponent({ name: "DiscordButton", components: { OutboundLinkIcon: ot }, props: { disabled: Boolean, image: String, type: { type: String, default: "primary" }, url: String } });
st.render = function(e2, t2, r2, n2, a2, o2) {
  const l2 = resolveComponent("outbound-link-icon");
  return e2.type === "link" && e2.url && !e2.disabled ? (openBlock(), createBlock("a", { key: 0, class: "discord-button discord-button-link", href: e2.url, target: "_blank", rel: "noopener noreferrer" }, [e2.image ? (openBlock(), createBlock("img", { key: 0, class: "discord-button-emoji", src: e2.image, alt: "" }, null, 8, ["src"])) : createCommentVNode("", true), renderSlot(e2.$slots, "default"), createVNode(l2)], 8, ["href"])) : (openBlock(), createBlock("button", { key: 1, class: ["discord-button", [`discord-button-${e2.type}`, e2.disabled ? "discord-button-disabled" : ""]], disabled: e2.disabled }, [e2.image ? (openBlock(), createBlock("img", { key: 0, class: "discord-button-emoji", src: e2.image, alt: "" }, null, 8, ["src"])) : createCommentVNode("", true), renderSlot(e2.$slots, "default"), e2.type === "link" ? (openBlock(), createBlock(l2, { key: 1 })) : createCommentVNode("", true)], 10, ["disabled"]));
};
var ut = defineComponent({ name: "DiscordButtons" });
var ct = { class: "discord-buttons" };
ut.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("div", ct, [renderSlot(e2.$slots, "default")]);
};
var dt = defineComponent({ name: "DiscordEmbed", props: { authorIcon: String, authorName: String, authorUrl: String, borderColor: String, embedTitle: String, footerIcon: String, image: String, thumbnail: String, timestamp: [Date, String], url: String }, setup(e2, { slots: t2 }) {
  const { authorIcon: r2, authorName: n2, authorUrl: a2, footerIcon: o2, timestamp: l2 } = toRefs(e2), i2 = computed(() => ({ icon: r2 == null ? void 0 : r2.value, name: n2 == null ? void 0 : n2.value, url: a2 == null ? void 0 : a2.value })), s2 = computed(() => (l2 == null ? void 0 : l2.value) ? rt.parseTimestamp({ timestamp: l2.value }) : null), u = computed(() => t2.footer || s2.value), c = computed(() => t2.footer && (o2 == null ? void 0 : o2.value)), d = computed(() => t2.footer && s2.value);
  return { author: i2, embedTimestamp: s2, showFooter: u, showFooterIcon: c, showFooterSeparator: d };
} });
var pt = { class: "discord-embed" };
var mt = { class: "discord-embed-container" };
var ht = { class: "discord-embed-content" };
var ft = { key: 0, class: "discord-embed-author" };
var gt = { key: 2 };
var vt = { key: 1, class: "discord-embed-title" };
var yt = { key: 1 };
var bt = { class: "discord-embed-description" };
var kt = { key: 0, class: "discord-embed-footer" };
var wt = { key: 0, class: "discord-embed-footer-separator" };
var xt = { key: 1 };
dt.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("div", pt, [createVNode("div", { class: "discord-embed-left-border", style: { "background-color": e2.borderColor } }, null, 4), createVNode("div", mt, [createVNode("div", ht, [createVNode("div", null, [e2.author.name ? (openBlock(), createBlock("div", ft, [e2.author.icon ? (openBlock(), createBlock("img", { key: 0, class: "discord-embed-author-icon", src: e2.author.icon, alt: "" }, null, 8, ["src"])) : createCommentVNode("", true), e2.author.url ? (openBlock(), createBlock("a", { key: 1, href: e2.author.url, target: "_blank", rel: "noopener noreferrer" }, toDisplayString(e2.author.name), 9, ["href"])) : (openBlock(), createBlock("span", gt, toDisplayString(e2.author.name), 1))])) : createCommentVNode("", true), e2.embedTitle ? (openBlock(), createBlock("div", vt, [e2.url ? (openBlock(), createBlock("a", { key: 0, href: e2.url, target: "_blank", rel: "noopener noreferrer" }, toDisplayString(e2.embedTitle), 9, ["href"])) : (openBlock(), createBlock("span", yt, toDisplayString(e2.embedTitle), 1))])) : createCommentVNode("", true), createVNode("div", bt, [renderSlot(e2.$slots, "default")]), renderSlot(e2.$slots, "fields"), e2.image ? (openBlock(), createBlock("img", { key: 2, class: "discord-embed-image", src: e2.image, alt: "" }, null, 8, ["src"])) : createCommentVNode("", true)]), e2.thumbnail ? (openBlock(), createBlock("img", { key: 0, class: "discord-embed-thumbnail", src: e2.thumbnail, alt: "" }, null, 8, ["src"])) : createCommentVNode("", true)]), e2.showFooter ? (openBlock(), createBlock("div", kt, [e2.showFooterIcon ? (openBlock(), createBlock("img", { key: 0, class: "discord-embed-footer-icon", src: e2.footerIcon, alt: "" }, null, 8, ["src"])) : createCommentVNode("", true), createVNode("span", null, [renderSlot(e2.$slots, "footer"), e2.showFooterSeparator ? (openBlock(), createBlock("span", wt, " \u2022 ")) : createCommentVNode("", true), e2.embedTimestamp ? (openBlock(), createBlock("span", xt, toDisplayString(e2.embedTimestamp), 1)) : createCommentVNode("", true)])])) : createCommentVNode("", true)])]);
};
var St = defineComponent({ name: "DiscordEmbedField", props: { fieldTitle: { type: String, required: true }, inline: Boolean } });
var $t = { class: "discord-embed-field-title" };
St.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("div", { class: ["discord-embed-field", { "discord-embed-field-inline": e2.inline }] }, [createVNode("div", $t, toDisplayString(e2.fieldTitle), 1), renderSlot(e2.$slots, "default")], 2);
};
var Rt = defineComponent({ name: "DiscordEmbedFields" });
var Tt = { class: "discord-embed-fields" };
Rt.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("div", Tt, [renderSlot(e2.$slots, "default")]);
};
var Ot = defineComponent({ name: "AuthorInfo", props: { author: String, bot: Boolean, roleColor: String } });
var Ct = { class: "discord-author-info" };
var jt = { key: 0, class: "discord-author-bot-tag" };
Ot.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("span", Ct, [createVNode("span", { class: "discord-author-username", style: { color: e2.roleColor } }, toDisplayString(e2.author), 5), e2.bot ? (openBlock(), createBlock("span", jt, " Bot ")) : createCommentVNode("", true)]);
};
var Mt = defineComponent({ components: { AuthorInfo: Ot }, props: { author: String, avatar: String, bot: { type: Boolean, default: null }, command: Boolean, edited: Boolean, ephemeral: Boolean, highlight: Boolean, profile: String, roleColor: String }, setup(e2) {
  var t2, r2, n2;
  const a2 = at(), { author: o2, avatar: l2, bot: i2, profile: s2, roleColor: u } = toRefs(e2), c = (s2 == null ? void 0 : s2.value) && (r2 = (t2 = a2.profiles) == null ? void 0 : t2[s2 == null ? void 0 : s2.value]) != null ? r2 : {};
  return { user: { author: !(o2 == null ? void 0 : o2.value) && (c == null ? void 0 : c.author) ? c.author : (o2 == null ? void 0 : o2.value) || "User", avatar: rt.resolveImage(a2.avatars, (l2 == null ? void 0 : l2.value) || (c == null ? void 0 : c.avatar)), bot: (n2 = i2.value) != null ? n2 : c == null ? void 0 : c.bot, roleColor: (u == null ? void 0 : u.value) || (c == null ? void 0 : c.roleColor) } };
} });
var Et = { class: "discord-interaction" };
var _t = { key: 0, class: "discord-interaction-command" };
var At = createTextVNode(" used ");
var Ft = { class: "discord-interaction-command-name" };
var Bt = createTextVNode(" /");
var Dt = { key: 1, class: "discord-interaction-reply" };
var It = { key: 0, class: "discord-interaction-reply-edited" };
Mt.render = function(e2, t2, r2, n2, a2, o2) {
  const l2 = resolveComponent("author-info");
  return openBlock(), createBlock("div", Et, [createVNode("img", { class: "discord-interaction-author-avatar", src: e2.user.avatar, alt: "" }, null, 8, ["src"]), createVNode(l2, { class: "discord-interaction-author-info", author: e2.highlight ? `@${e2.user.author}` : e2.user.author, bot: e2.user.bot, "role-color": e2.user.roleColor }, null, 8, ["author", "bot", "role-color"]), e2.command ? (openBlock(), createBlock("span", _t, [At, createVNode("span", Ft, [Bt, renderSlot(e2.$slots, "default")])])) : (openBlock(), createBlock("span", Dt, [renderSlot(e2.$slots, "default"), e2.edited ? (openBlock(), createBlock("span", It, "(edited)")) : createCommentVNode("", true)]))]);
};
var zt = defineComponent({ name: "DiscordMarkdown", setup: (e2, { slots: t2 }) => () => {
  var e3;
  const r2 = (e3 = t2.default) == null ? void 0 : e3.call(t2).map((e4) => typeof e4.children == "string" && e4.children.length ? h("span", { class: "discord-markdown-content", innerHTML: rt.markdownParser.toHTML(e4.children) }) : e4);
  return h("span", { class: "discord-markdown" }, { default: () => r2 });
} });
var Pt = defineComponent({ name: "DiscordMention", props: { highlight: Boolean, profile: String, roleColor: String, type: { type: String, default: "user" } }, setup(e2) {
  var t2, r2, n2, a2;
  const o2 = at(), l2 = ref(), { profile: i2, roleColor: s2, type: u } = toRefs(e2), c = ref((i2 == null ? void 0 : i2.value) && (r2 = (t2 = o2.profiles) == null ? void 0 : t2[i2 == null ? void 0 : i2.value]) != null ? r2 : {}), d = ref((a2 = s2 == null ? void 0 : s2.value) != null ? a2 : (n2 = c == null ? void 0 : c.value) == null ? void 0 : n2.roleColor), p = ref(false), m = () => p.value = true, h2 = () => p.value = false, f = { background: rt.parseColorToRgba(d == null ? void 0 : d.value, 0.1), hover: rt.parseColorToRgba(d == null ? void 0 : d.value, 0.3) }, g = computed(() => (d == null ? void 0 : d.value) && u.value === "role" ? { color: d.value, "background-color": p.value ? f.hover : f.background } : {});
  onMounted(() => {
    var e3, t3;
    (d == null ? void 0 : d.value) && (u == null ? void 0 : u.value) === "role" && ((e3 = l2 == null ? void 0 : l2.value) == null || e3.addEventListener("mouseenter", m), (t3 = l2 == null ? void 0 : l2.value) == null || t3.addEventListener("mouseout", h2));
  }), onBeforeUnmount(() => {
    var e3, t3;
    (e3 = l2 == null ? void 0 : l2.value) == null || e3.removeEventListener("mouseenter", m), (t3 = l2 == null ? void 0 : l2.value) == null || t3.removeEventListener("mouseout", h2);
  });
  const b = computed(() => {
    var e3;
    return u.value === "user" && ((e3 = c == null ? void 0 : c.value) == null ? void 0 : e3.author) ? c == null ? void 0 : c.value.author : u.value === "channel" ? u.value : u.value.charAt(0).toUpperCase() + u.value.slice(1);
  }), k = computed(() => u.value === "channel" ? "#" : "@");
  return { root: l2, colorStyle: g, defaultContent: b, mentionCharacter: k };
} });
Pt.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("span", { ref: "root", class: "discord-mention", style: e2.colorStyle }, [createTextVNode(toDisplayString(e2.mentionCharacter), 1), renderSlot(e2.$slots, "default", {}, () => [createTextVNode(toDisplayString(e2.defaultContent), 1)])], 4);
};
var Lt = defineComponent({ name: "DiscordMessage", components: { AuthorInfo: Ot }, props: { author: String, avatar: String, bot: { type: Boolean, default: null }, edited: Boolean, profile: String, roleColor: String, timestamp: { type: [Date, String], default: rt.defaultTimestamp } }, setup(e2, { slots: t2 }) {
  var r2, n2, a2;
  const o2 = at(), { author: l2, avatar: i2, bot: s2, profile: u, roleColor: c, timestamp: d } = toRefs(e2), p = inject("compactMode"), m = (u == null ? void 0 : u.value) && (n2 = (r2 = o2.profiles) == null ? void 0 : r2[u == null ? void 0 : u.value]) != null ? n2 : {}, h2 = { author: !(l2 == null ? void 0 : l2.value) && (m == null ? void 0 : m.author) ? m.author : (l2 == null ? void 0 : l2.value) || "User", avatar: rt.resolveImage(o2.avatars, (i2 == null ? void 0 : i2.value) || (m == null ? void 0 : m.avatar)), bot: (a2 = s2.value) != null ? a2 : m == null ? void 0 : m.bot, roleColor: (c == null ? void 0 : c.value) || (m == null ? void 0 : m.roleColor) }, f = computed(() => {
    var e3;
    return (e3 = t2.interactions) == null ? void 0 : e3.call(t2).some((e4) => {
      var t3;
      return (t3 = e4 == null ? void 0 : e4.props) == null ? void 0 : t3.ephemeral;
    });
  }), g = computed(() => {
    var e3, r3;
    return ((e3 = t2.default) == null ? void 0 : e3.call(t2).some((e4) => {
      var t3, r4;
      return ((t3 = e4 == null ? void 0 : e4.props) == null ? void 0 : t3.highlight) && ((r4 = e4 == null ? void 0 : e4.props) == null ? void 0 : r4.type) !== "channel";
    })) || ((r3 = t2.interactions) == null ? void 0 : r3.call(t2).some((e4) => {
      var t3;
      return (t3 = e4 == null ? void 0 : e4.props) == null ? void 0 : t3.highlight;
    }));
  }), b = computed(() => rt.parseTimestamp({ timestamp: d.value, format: p ? "compact" : "cozy" }));
  return { compactMode: p, ephemeralMessage: f, highlightMessage: g, messageTimestamp: b, user: h2 };
} });
var qt = { class: "discord-message-content" };
var Nt = { class: "discord-author-avatar" };
var Ht = { class: "discord-message-body" };
var Ut = { key: 0 };
var Qt = { class: "discord-message-timestamp" };
var Zt = { class: "discord-message-timestamp" };
var Gt = { key: 2, class: "discord-message-edited" };
var Xt = { key: 3, class: "discord-message-ephemeral-notice" };
Lt.render = function(e2, t2, r2, n2, a2, o2) {
  const l2 = resolveComponent("author-info");
  return openBlock(), createBlock("div", { class: ["discord-message", { "discord-ephemeral-highlight": e2.ephemeralMessage, "discord-mention-highlight": e2.highlightMessage && !e2.ephemeralMessage }] }, [renderSlot(e2.$slots, "interactions"), createVNode("div", qt, [createVNode("div", Nt, [createVNode("img", { src: e2.user.avatar, alt: "" }, null, 8, ["src"])]), createVNode("div", Ht, [e2.compactMode ? (openBlock(), createBlock(Fragment, { key: 1 }, [createVNode("span", Zt, toDisplayString(e2.messageTimestamp), 1), createVNode(l2, { author: e2.user.author, bot: e2.user.bot, "role-color": e2.user.roleColor }, null, 8, ["author", "bot", "role-color"])], 64)) : (openBlock(), createBlock("div", Ut, [createVNode(l2, { author: e2.user.author, bot: e2.user.bot, "role-color": e2.user.roleColor }, null, 8, ["author", "bot", "role-color"]), createVNode("span", Qt, toDisplayString(e2.messageTimestamp), 1)])), renderSlot(e2.$slots, "default"), e2.edited ? (openBlock(), createBlock("span", Gt, "(edited)")) : createCommentVNode("", true), renderSlot(e2.$slots, "embeds"), renderSlot(e2.$slots, "actions"), e2.ephemeralMessage ? (openBlock(), createBlock("div", Xt, " Only you can see this ")) : createCommentVNode("", true), renderSlot(e2.$slots, "reactions")])])], 2);
};
var Yt = defineComponent({ name: "DiscordMessages", props: { compactMode: { type: Boolean, default: null }, lightTheme: { type: Boolean, default: null } }, setup(e2) {
  const t2 = at(), { compactMode: r2, lightTheme: n2 } = toRefs(e2), a2 = { compact: (r2 == null ? void 0 : r2.value) === true || t2.defaultMode === "compact" && (r2 == null ? void 0 : r2.value) !== false, light: (n2 == null ? void 0 : n2.value) === true || t2.defaultTheme === "light" && (n2 == null ? void 0 : n2.value) !== false };
  return provide("compactMode", a2.compact), { layout: a2 };
} });
Yt.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("div", { class: ["discord-messages", { "discord-compact-mode": e2.layout.compact, "discord-light-theme": e2.layout.light }] }, [renderSlot(e2.$slots, "default")], 2);
};
var Jt = defineComponent({ name: "DiscordReaction", props: { active: Boolean, count: { type: Number, default: 1 }, image: { type: String, required: true }, name: String } });
var Kt = { class: "discord-reaction-count" };
Jt.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("div", { class: ["discord-reaction", { "discord-reaction-active": e2.active }], title: e2.name }, [createVNode("img", { class: "discord-reaction-emoji", src: e2.image, alt: e2.name }, null, 8, ["src", "alt"]), createVNode("span", Kt, toDisplayString(e2.count), 1)], 10, ["title"]);
};
var Vt = defineComponent({ name: "DiscordReactions" });
var Wt = { class: "discord-reactions" };
Vt.render = function(e2, t2, r2, n2, a2, o2) {
  return openBlock(), createBlock("div", Wt, [renderSlot(e2.$slots, "default")]);
};
var er = (e2, t2) => {
  var r2;
  const n2 = i(i({}, nt == null ? void 0 : nt.avatars), t2 == null ? void 0 : t2.avatars);
  e2.config.globalProperties.$discordOptions = s(i(i({}, nt), t2), { avatars: s(i({}, n2), { default: (r2 = nt.avatars[n2.default]) != null ? r2 : n2.default }) });
};
export {
  st as DiscordButton,
  ut as DiscordButtons,
  dt as DiscordEmbed,
  St as DiscordEmbedField,
  Rt as DiscordEmbedFields,
  Mt as DiscordInteraction,
  zt as DiscordMarkdown,
  Pt as DiscordMention,
  Lt as DiscordMessage,
  Yt as DiscordMessages,
  Jt as DiscordReaction,
  Vt as DiscordReactions,
  er as install
};
//# sourceMappingURL=@discord-message-components_vue.js.map
