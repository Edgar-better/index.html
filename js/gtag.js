// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",

            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [],
            []
        ]



    };
    var aa, ba = this || self,
        da = /^[\w+/_-]+[=]{0,2}$/,
        ea = null;
    var fa = function () {},
        ha = function (a) {
            return "function" == typeof a
        },
        ia = function (a) {
            return "string" == typeof a
        },
        ja = function (a) {
            return "number" == typeof a && !isNaN(a)
        },
        ka = function (a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        la = function (a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        ma = function (a, b) {
            if (a && ka(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        oa = function (a, b) {
            if (!ja(a) ||
                !ja(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        qa = function (a, b) {
            for (var c = new pa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        ra = function (a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        sa = function (a) {
            return Math.round(Number(a)) || 0
        },
        ta = function (a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        ua = function (a) {
            var b = [];
            if (ka(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        va = function (a) {
            return a ?
                a.replace(/^\s+|\s+$/g, "") : ""
        },
        wa = function () {
            return (new Date).getTime()
        },
        pa = function () {
            this.prefix = "gtm.";
            this.values = {}
        };
    pa.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    pa.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    pa.prototype.contains = function (a) {
        return void 0 !== this.get(a)
    };
    var xa = function (a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        ya = function (a) {
            var b = !1;
            return function () {
                if (!b) try {
                    a()
                } catch (c) {}
                b = !0
            }
        },
        za = function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Aa = function (a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Da = function (a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        };
    /*
         jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ea = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Fa = function (a) {
            if (null == a) return String(a);
            var b = Ea.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ga = function (a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ha = function (a) {
            if (!a || "object" != Fa(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ga(a, "constructor") && !Ga(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ga(a, b)
        },
        f = function (a, b) {
            var c = b || ("array" == Fa(a) ? [] : {}),
                d;
            for (d in a)
                if (Ga(a, d)) {
                    var e = a[d];
                    "array" == Fa(e) ? ("array" != Fa(c[d]) && (c[d] = []), c[d] = f(e, c[d])) : Ha(e) ? (Ha(c[d]) || (c[d] = {}), c[d] = f(e, c[d])) : c[d] = e
                } return c
        };
    var u = window,
        C = document,
        Ia = navigator,
        Ja = C.currentScript && C.currentScript.src,
        Ka = function (a, b) {
            var c = u[a];
            u[a] = void 0 === c ? b : c;
            return u[a]
        },
        La = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ma = function (a, b, c) {
            var d = C.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            La(d, b);
            c && (d.onerror = c);
            var e;
            if (null === ea) b: {
                var g = ba.document,
                    h = g.querySelector && g.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && da.test(k)) {
                        ea = k;
                        break b
                    }
                }
                ea = ""
            }
            e = ea;
            e && d.setAttribute("nonce", e);
            var l = C.getElementsByTagName("script")[0] || C.body || C.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        Na = function () {
            if (Ja) {
                var a = Ja.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Oa = function (a, b) {
            var c = C.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = C.body && C.body.lastChild ||
                C.body || C.head;
            d.parentNode.insertBefore(c, d);
            La(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Pa = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            };
            d.onerror = function () {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Qa = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Ra = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        D = function (a) {
            u.setTimeout(a, 0)
        },
        Sa = function (a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Wa = function (a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Xa = function (a) {
            var b = C.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Ya = function (a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var g = a, h = 0; g && h <= c; h++) {
                if (d[String(g.tagName).toLowerCase()]) return g;
                g = g.parentElement
            }
            return null
        },
        Za = function (a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var $a = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var ab = {},
        bb = function (a, b) {
            ab[a] = ab[a] || [];
            ab[a][b] = !0
        },
        cb = function (a) {
            for (var b = [], c = ab[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var db = /:[0-9]+$/,
        eb = function (a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
                    var h = g.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        ib = function (a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = fb(a.protocol) || fb(u.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : u.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || u.location.hostname).replace(db, "").toLowerCase());
            var g = b,
                h, k = fb(a.protocol);
            g && (g = String(g).toLowerCase());
            switch (g) {
                case "url_no_fragment":
                    h = hb(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(db, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || bb("TAGGING", 1);
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname :
                        "/" + a.pathname;
                    var m = h.split("/");
                    0 <= la(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = eb(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        fb = function (a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        hb = function (a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        jb = function (a) {
            var b = C.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || bb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(db, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };
    var kb = function (a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
                var h = e[g].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        nb = function (a, b, c, d) {
            var e = lb(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = mb(e, function (g) {
                    return g.Ib
                }, b);
                if (1 === e.length) return e[0].id;
                e = mb(e, function (g) {
                    return g.eb
                }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function ob(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= kb(b, e).indexOf(c)
    }
    var sb = function (a, b, c, d, e, g) {
        d = d || "auto";
        var h = {
            path: c || "/"
        };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var p = void 0,
                t = void 0,
                q;
            for (q in h)
                if (h.hasOwnProperty(q)) {
                    var r = h[q];
                    if (null != r) switch (q) {
                        case "secure":
                            r && (m += "; secure");
                            break;
                        case "domain":
                            p = r;
                            break;
                        default:
                            "path" == q && (t = r), "expires" == q && r instanceof Date && (r =
                                r.toUTCString()), m += "; " + q + "=" + r
                    }
                } if ("auto" === p) {
                for (var v = pb(), w = 0; w < v.length; ++w) {
                    var x = "none" != v[w] ? v[w] : void 0;
                    if (!rb(x, t) && ob(m + (x ? "; domain=" + x : ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else p && "none" != p && (m += "; domain=" + p),
            k = !rb(p, t) && ob(m, a, l)
        }
        return k
    };

    function mb(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function lb(a, b) {
        for (var c = [], d = kb(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({
                    id: g.join("."),
                    Ib: 1 * k[0] || 1,
                    eb: 1 * k[1] || 1
                }))
            }
        }
        return c
    }
    var tb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ub = /(^|\.)doubleclick\.net$/i,
        rb = function (a, b) {
            return ub.test(document.location.hostname) || "/" === b && tb.test(a)
        },
        pb = function () {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            a.push("none");
            return a
        };
    var Qb = [],
        Rb = [],
        Sb = [],
        Tb = [],
        Ub = [],
        Wb = {},
        Xb, Yb, Zb, $b = function (a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        ac = function (a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = !!Wb[c],
                e = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[d ? g : g.substr(4)] = a[g]);
            return d ? Wb[c](e) : (void 0)(c, e, b)
        },
        cc = function (a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = bc(a[e], b, c));
            return d
        },
        dc = function (a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = Wb[b];
            return c ? c.priorityOverride || 0 : 0
        },
        bc = function (a, b, c) {
            if (ka(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(bc(a[e], b, c));
                        return d;
                    case "macro":
                        var g = a[1];
                        if (c[g]) return;
                        var h = Qb[g];
                        if (!h || b.Cc(h)) return;
                        c[g] = !0;
                        try {
                            var k = cc(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = ac(k, b);
                            Zb && (d = Zb.Gf(d, k))
                        } catch (w) {
                            b.ae && b.ae(w, Number(g)), d = !1
                        }
                        c[g] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[bc(a[l], b, c)] = bc(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var p = bc(a[n], b, c);
                            Yb && (m = m || p === Yb.wb);
                            d.push(p)
                        }
                        return Yb && m ? Yb.Jf(d) : d.join("");
                    case "escape":
                        d = bc(a[1], b, c);
                        if (Yb && ka(a[1]) && "macro" === a[1][0] && Yb.kg(a)) return Yb.wg(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) vb[a[t]] && (d = vb[a[t]](d));
                        return d;
                    case "tag":
                        var q = a[1];
                        if (!Tb[q]) throw Error("Unable to resolve tag reference " + q + ".");
                        return d = {
                            Nd: a[2],
                            index: q
                        };
                    case "zb":
                        var r = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        r["function"] = a[1];
                        var v = ec(r, b, c);
                        a[4] && (v = !v);
                        return v;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        ec = function (a, b, c) {
            try {
                return Xb(cc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return null
        };
    var fc = function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        return {
            ed: a("convert_case_to"),
            fd: a("convert_false_to"),
            gd: a("convert_null_to"),
            hd: a("convert_true_to"),
            jd: a("convert_undefined_to"),
            eh: a("debug_mode_metadata"),
            ka: a("function"),
            Ue: a("instance_name"),
            Ve: a("live_only"),
            We: a("malware_disabled"),
            Xe: a("metadata"),
            gh: a("original_vendor_template_id"),
            Ye: a("once_per_event"),
            Cd: a("once_per_load"),
            Dd: a("setup_tags"),
            Ed: a("tag_id"),
            Fd: a("teardown_tags")
        }
    }();
    var gc = null,
        jc = function (a) {
            function b(p) {
                for (var t = 0; t < p.length; t++) d[p[t]] = !0
            }
            var c = [],
                d = [];
            gc = hc(a);
            for (var e = 0; e < Rb.length; e++) {
                var g = Rb[e],
                    h = ic(g);
                if (h) {
                    for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || [])
            }
            for (var m = [], n = 0; n < Tb.length; n++) c[n] && !d[n] && (m[n] = !0);
            return m
        },
        ic = function (a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = gc(b[c]);
                if (!d) return null === d ? null : !1
            }
            for (var e = a.unless || [], g = 0; g < e.length; g++) {
                var h = gc(e[g]);
                if (null === h) return null;
                if (h) return !1
            }
            return !0
        },
        hc = function (a) {
            var b = [];
            return function (c) {
                void 0 === b[c] && (b[c] = ec(Sb[c], a));
                return b[c]
            }
        };
    /*
         Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    for (var mc = "floor ceil round max min abs pow sqrt".split(" "), nc = 0; nc < mc.length; nc++) Math.hasOwnProperty(mc[nc]);
    var G = {
        $b: "event_callback",
        Na: "event_timeout",
        U: "gtag.config",
        N: "allow_ad_personalization_signals",
        P: "cookie_expires",
        Ma: "cookie_update",
        xa: "session_duration"
    };
    G.Yb = "page_view", G.we = "user_engagement", G.xe = "allow_custom_scripts", G.ye = "allow_display_features", G.ze = "allow_enhanced_conversions", G.mb = "client_id", G.O = "cookie_domain", G.nb = "cookie_name", G.sa = "cookie_path", G.va = "currency", G.ob = "custom_params", G.Ce = "custom_map", G.fc = "groups", G.Oa = "language", G.Be = "country", G.fh = "non_interaction", G.rb = "page_location", G.sb = "page_referrer", G.ud = "page_title", G.Sa = "send_page_view", G.wa = "send_to", G.hc = "session_engaged", G.tb = "session_id", G.ic = "session_number", G.Se = "tracking_id",
        G.vb = "user_properties", G.ia = "linker", G.Pa = "accept_incoming", G.B = "domains", G.Ra = "url_position", G.Qa = "decorate_forms", G.xd = "phone_conversion_number", G.vd = "phone_conversion_callback", G.wd = "phone_conversion_css_class", G.yd = "phone_conversion_options", G.Pe = "phone_conversion_ids", G.Oe = "phone_conversion_country_code", G.kd = "aw_remarketing", G.ld = "aw_remarketing_only", G.ja = "value", G.Qe = "quantity", G.Fe = "affiliation", G.Je = "tax", G.Ie = "shipping", G.Zb = "list_name", G.td = "checkout_step", G.sd = "checkout_option", G.Ge =
        "coupon", G.He = "promotions", G.Ta = "transaction_id", G.Z = "user_id", G.La = "conversion_linker", G.Ka = "conversion_cookie_prefix", G.R = "cookie_prefix", G.Y = "items", G.pd = "aw_merchant_id", G.nd = "aw_feed_country", G.od = "aw_feed_language", G.md = "discount", G.rd = "disable_merchant_reported_purchases", G.gc = "new_customer", G.qd = "customer_lifetime_value", G.Ee = "dc_natural_search", G.De = "dc_custom_params", G.Te = "trip_type", G.Ne = "passengers", G.Le = "method", G.Re = "search_term", G.Ae = "content_type", G.Me = "optimize_id", G.Ke = "experiments",
        G.qb = "google_signals", G.cc = "google_tld", G.ub = "update", G.bc = "firebase_id", G.pb = "ga_restrict_domain", G.ac = "event_settings", G.zd = "screen_name", G.Ad = [G.N, G.O, G.P, G.nb, G.sa, G.R, G.Ma, G.ob, G.$b, G.ac, G.Na, G.bc, G.pb, G.qb, G.cc, G.fc, G.ia, G.wa, G.Sa, G.xa, G.zd, G.ub, G.Z, G.vb], G.dd = [G.wa, G.kd, G.ld, G.ob, G.Sa, G.Oa, G.ja, G.va, G.Ta, G.Z, G.La, G.Ka, G.R, G.rb, G.sb, G.xd, G.vd, G.wd, G.yd, G.Y, G.pd, G.nd, G.od, G.md, G.rd, G.gc, G.qd, G.N, G.ub, G.bc];
    var Cc = /[A-Z]+/,
        Dc = /\s/,
        Ec = function (a) {
            if (ia(a) && (a = va(a), !Dc.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Cc.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            M: d
                        }
                    }
                }
            }
        },
        Gc = function (a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Ec(a[c]);
                d && (b[d.id] = d)
            }
            Fc(b);
            var e = [];
            ra(b, function (g, h) {
                e.push(h)
            });
            return e
        };

    function Fc(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId)
            } for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Hc = {},
        Ic = null,
        Jc = Math.random();
    Hc.i = "UA-140212635-4";
    Hc.Ab = "8l2";
    var Kc = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0,
            __paused: !0
        },
        Lc = "www.googletagmanager.com/gtm.js";
    Lc = "www.googletagmanager.com/gtag/js";
    var Mc = Lc,
        Nc = null,
        Oc = null,
        Pc = null,
        Qc = "//www.googletagmanager.com/a?id=" + Hc.i + "&cv=1",
        Rc = {},
        Sc = {},
        Tc = function () {
            var a = Ic.sequence || 0;
            Ic.sequence = a + 1;
            return a
        };
    var Uc = function () {
            return "&tc=" + Tb.filter(function (a) {
                return a
            }).length
        },
        cd = function () {
            Vc && (u.clearTimeout(Vc), Vc = void 0);
            void 0 === Wc || Xc[Wc] && !Yc || (Zc[Wc] || $c.mg() || 0 >= ad-- ? (bb("GTM", 1), Zc[Wc] = !0) : ($c.Hg(), Pa(bd()), Xc[Wc] = !0, Yc = ""))
        },
        bd = function () {
            var a = Wc;
            if (void 0 === a) return "";
            var b = cb("GTM"),
                c = cb("TAGGING");
            return [dd, Xc[a] ? "" : "&es=1", ed[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Uc(), Yc, "&z=0"].join("")
        },
        fd = function () {
            return [Qc, "&v=3&t=t", "&pid=" + oa(), "&rv=" + Hc.Ab].join("")
        },
        gd = "0.005000" >
        Math.random(),
        dd = fd(),
        hd = function () {
            dd = fd()
        },
        Xc = {},
        Yc = "",
        Wc = void 0,
        ed = {},
        Zc = {},
        Vc = void 0,
        $c = function (a, b) {
            var c = 0,
                d = 0;
            return {
                mg: function () {
                    if (c < a) return !1;
                    wa() - d >= b && (c = 0);
                    return c >= a
                },
                Hg: function () {
                    wa() - d >= b && (c = 0);
                    c++;
                    d = wa()
                }
            }
        }(2, 1E3),
        ad = 1E3,
        id = function (a, b) {
            if (gd && !Zc[a] && Wc !== a) {
                cd();
                Wc = a;
                Yc = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
                ed[a] = "&e=" + c + "&eid=" + a;
                Vc || (Vc = u.setTimeout(cd, 500))
            }
        },
        jd = function (a, b, c) {
            if (gd && !Zc[a] && b) {
                a !== Wc && (cd(), Wc = a);
                var d = String(b[fc.ka] || "").replace(/_/g,
                    "");
                0 === d.indexOf("cvt") && (d = "cvt");
                var e = c + d;
                Yc = Yc ? Yc + "." + e : "&tr=" + e;
                Vc || (Vc = u.setTimeout(cd, 500));
                2022 <= bd().length && cd()
            }
        };
    var kd = {},
        ld = new pa,
        md = {},
        nd = {},
        rd = {
            name: "dataLayer",
            set: function (a, b) {
                f(od(a, b), md);
                pd()
            },
            get: function (a) {
                return qd(a, 2)
            },
            reset: function () {
                ld = new pa;
                md = {};
                pd()
            }
        },
        qd = function (a, b) {
            if (2 != b) {
                var c = ld.get(a);
                if (gd) {
                    var d = sd(a);
                    c !== d && bb("GTM", 5)
                }
                return c
            }
            return sd(a)
        },
        sd = function (a, b, c) {
            var d = a.split("."),
                e = !1,
                g = void 0;
            var h = function (k, l) {
                for (var m = 0; void 0 !== k && m < d.length; m++) {
                    if (null === k) return !1;
                    k = k[d[m]]
                }
                return void 0 !== k || 1 < m ? k : l.length ? h(td(l.pop()), l) : ud(d)
            };
            e = !0;
            g = h(md.eventModel, [b, c]);
            return e ? g : ud(d)
        },
        ud = function (a) {
            for (var b = md, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var vd = function (a, b) {
            return sd(a, b, void 0)
        },
        td = function (a) {
            if (a) {
                var b = ud(["gtag", "targets", a]);
                return Ha(b) ? b : void 0
            }
        },
        wd = function (a, b) {
            function c(g) {
                g && ra(g, function (h) {
                    d[h] = null
                })
            }
            var d = {};
            c(md);
            delete d.eventModel;
            c(td(a));
            c(td(b));
            c(md.eventModel);
            var e = [];
            ra(d, function (g) {
                e.push(g)
            });
            return e
        };
    var xd = function (a, b) {
            nd.hasOwnProperty(a) || (ld.set(a, b), f(od(a, b), md), pd())
        },
        od = function (a, b) {
            for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        pd = function (a) {
            ra(nd, function (b, c) {
                ld.set(b, c);
                f(od(b, void 0), md);
                f(od(b, c), md);
                a && delete nd[b]
            })
        },
        yd = function (a, b, c) {
            kd[a] = kd[a] || {};
            var d = 1 !== c ? sd(b) : ld.get(b);
            "array" === Fa(d) || "object" === Fa(d) ? kd[a][b] = f(d) : kd[a][b] = d
        },
        zd = function (a, b) {
            if (kd[a]) return kd[a][b]
        };
    var Ad = function () {
        var a = !1;
        return a
    };
    var H = function (a, b, c, d) {
            return (2 === Bd() || d || "http:" != u.location.protocol ? a : b) + c
        },
        Bd = function () {
            var a = Na(),
                b;
            if (1 === a) a: {
                var c = Mc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, g = 1, h = C.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === g && 0 === l.indexOf(d) && (g = 2)
                    }
                }
                b = g
            }
            else b = a;
            return b
        };
    var Dd = function (a, b, c) {
            if (u[a.functionName]) return b.Kc && D(b.Kc), u[a.functionName];
            var d = Cd();
            u[a.functionName] = d;
            if (a.Cb)
                for (var e = 0; e < a.Cb.length; e++) u[a.Cb[e]] = u[a.Cb[e]] || Cd();
            a.Mb && void 0 === u[a.Mb] && (u[a.Mb] = c);
            Ma(H("https://", "http://", a.Vc), b.Kc, b.qg);
            return d
        },
        Cd = function () {
            var a = function () {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Ed = {
            functionName: "_googWcmImpl",
            Mb: "_googWcmAk",
            Vc: "www.gstatic.com/wcm/loader.js"
        },
        Fd = {
            functionName: "_gaPhoneImpl",
            Mb: "ga_wpid",
            Vc: "www.gstatic.com/gaphone/loader.js"
        },
        Gd = {
            ve: "",
            Ze: "1"
        },
        Hd = {
            functionName: "_googCallTrackingImpl",
            Cb: [Fd.functionName, Ed.functionName],
            Vc: "www.gstatic.com/call-tracking/call-tracking_" + (Gd.ve || Gd.Ze) + ".js"
        },
        Id = function (a, b, c, d) {
            if (c) {
                d = d || {};
                var e = Dd(Ed, d, a),
                    g = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.W && (g.autoreplace = c);
                e(2, d.W, g, c, 0, new Date, d.options)
            }
        },
        Jd = function (a, b, c) {
            if (b) {
                c = c || {};
                var d = Dd(Fd, c, a),
                    e = {};
                void 0 !== c.W ? e.receiver = c.W : e.replace = b;
                e.ga_wpid = a;
                e.destination = b;
                d(2, new Date, e)
            }
        },
        Kd = function (a, b, c, d) {
            if (b &&
                c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: new Date
                    }, g = 0; g < a.length; g++) {
                    var h = a[g];
                    h && "AW" === h.prefix && !e.adData && 2 <= h.M.length ? e.adData = {
                        ak: h.M[0],
                        cl: h.M[1]
                    } : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                        gaWpid: h.containerId
                    })
                }(e.gaData || e.adData) && Dd(Hd, d)(d.W, e, d.options)
            }
        },
        Ld = function () {
            var a = !1;
            return a
        },
        Md = function (a) {
            if (a)
                if (Ad()) {} else {
                    if (ia(a)) {
                        var b = Ec(a);
                        if (!b) return;
                        a = b
                    }
                    var c = function (x) {
                            return sd(x, a.containerId, a.id)
                        },
                        d = void 0;
                    var l = c(G.xd),
                        m;
                    if (l) {
                        m = ka(l) ? l : [l];
                        var n = c(G.vd),
                            p = c(G.wd),
                            t = c(G.yd),
                            q = c(G.Oe),
                            r = n || p,
                            v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var w = 0; w < m.length; w++) w < v && (d ? Kd(d, m[w], q, {
                            W: r,
                            options: t
                        }) : "AW" === a.prefix && a.M[1] ? Ld() ? Kd([a], m[w], q || "US", {
                            W: r,
                            options: t
                        }) : Id(a.M[0], a.M[1], m[w], {
                            W: r,
                            options: t
                        }) : "UA" === a.prefix && (Ld() ? Kd([a], m[w], q || "US", {
                            W: r
                        }) : Jd(a.containerId, m[w], {
                            W: r
                        })))
                    }
                }
        };
    var Pd = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Qd = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Rd = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Sd = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ud = function (a) {
            var b = qd("gtm.whitelist");
            b && bb("GTM", 9);
            b = "google gtagfl lcl zone oid op".split(" ");
            var c = b && Da(ua(b), Qd),
                d = qd("gtm.blacklist");
            d || (d = qd("tagTypeBlacklist")) && bb("GTM", 3);
            d ? bb("GTM", 8) : d = [];
            Td() && (d = ua(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            0 <= la(ua(d), "google") && bb("GTM", 2);
            var e = d && Da(ua(d), Rd),
                g = {};
            return function (h) {
                var k = h && h[fc.ka];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== g[k]) return g[k];
                var l = Sc[k] || [],
                    m = a(k);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > la(c, k))
                            if (l && 0 < l.length)
                                for (var p = 0; p < l.length; p++) {
                                    if (0 >
                                        la(c, l[p])) {
                                        bb("GTM", 11);
                                        n = !1;
                                        break a
                                    }
                                } else {
                                    n = !1;
                                    break a
                                }
                        n = !0
                    }
                    m = n
                }
                var t = !1;
                if (d) {
                    var q = 0 <= la(e, k);
                    if (q) t = q;
                    else {
                        var r = qa(e, l || []);
                        r && bb("GTM", 10);
                        t = r
                    }
                }
                var v = !m || t;
                v || !(0 <= la(l, "sandboxedScripts")) || c && -1 !== la(c, "sandboxedScripts") || (v = qa(e, Sd));
                return g[k] = v
            }
        },
        Td = function () {
            return Pd.test(u.location && u.location.hostname)
        };
    var Vd = {
        Gf: function (a, b) {
            b[fc.ed] && "string" === typeof a && (a = 1 == b[fc.ed] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(fc.gd) && null === a && (a = b[fc.gd]);
            b.hasOwnProperty(fc.jd) && void 0 === a && (a = b[fc.jd]);
            b.hasOwnProperty(fc.hd) && !0 === a && (a = b[fc.hd]);
            b.hasOwnProperty(fc.fd) && !1 === a && (a = b[fc.fd]);
            return a
        }
    };
    var Wd = {
            active: !0,
            isWhitelisted: function () {
                return !0
            }
        },
        Xd = function (a) {
            var b = Ic.zones;
            !b && a && (b = Ic.zones = a());
            return b
        };
    var Yd = !1,
        Zd = 0,
        $d = [];

    function ae(a) {
        if (!Yd) {
            var b = C.createEventObject,
                c = "complete" == C.readyState,
                d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Yd = !0;
                for (var e = 0; e < $d.length; e++) D($d[e])
            }
            $d.push = function () {
                for (var g = 0; g < arguments.length; g++) D(arguments[g]);
                return 0
            }
        }
    }

    function be() {
        if (!Yd && 140 > Zd) {
            Zd++;
            try {
                C.documentElement.doScroll("left"), ae()
            } catch (a) {
                u.setTimeout(be, 50)
            }
        }
    }
    var ce = function (a) {
        Yd ? a() : $d.push(a)
    };
    var de = {},
        ee = {},
        fe = function (a, b, c, d) {
            if (!ee[a] || Kc[b] || "__zone" === b) return -1;
            var e = {};
            Ha(d) && (e = f(d, e));
            e.id = c;
            e.status = "timeout";
            return ee[a].tags.push(e) - 1
        },
        ge = function (a, b, c, d) {
            if (ee[a]) {
                var e = ee[a].tags[b];
                e && (e.status = c, e.executionTime = d)
            }
        };

    function he(a) {
        for (var b = de[a] || [], c = 0; c < b.length; c++) b[c]();
        de[a] = {
            push: function (d) {
                d(Hc.i, ee[a])
            }
        }
    }
    var ke = function (a, b, c) {
            ee[a] = {
                tags: []
            };
            ha(b) && ie(a, b);
            c && u.setTimeout(function () {
                return he(a)
            }, Number(c));
            return je(a)
        },
        ie = function (a, b) {
            de[a] = de[a] || [];
            de[a].push(ya(function () {
                return D(function () {
                    b(Hc.i, ee[a])
                })
            }))
        };

    function je(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function () {
                c++;
                return ya(function () {
                    b++;
                    d && b >= c && he(a)
                })
            },
            qf: function () {
                d = !0;
                b >= c && he(a)
            }
        }
    };
    var le = function () {
        function a(d) {
            return !ja(d) || 0 > d ? 0 : d
        }
        if (!Ic._li && u.performance && u.performance.timing) {
            var b = u.performance.timing.navigationStart,
                c = ja(rd.get("gtm.start")) ? rd.get("gtm.start") : 0;
            Ic._li = {
                cst: a(c - b),
                cbt: a(Oc - b)
            }
        }
    };
    var pe = !1,
        qe = function () {
            return u.GoogleAnalyticsObject && u[u.GoogleAnalyticsObject]
        },
        re = !1;
    var se = function (a) {
            u.GoogleAnalyticsObject || (u.GoogleAnalyticsObject = a || "ga");
            var b = u.GoogleAnalyticsObject;
            if (u[b]) u.hasOwnProperty(b) || bb("GTM", 12);
            else {
                var c = function () {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                u[b] = c
            }
            le();
            return u[b]
        },
        te = function (a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = qe();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var ve = function () {},
        ue = function () {
            return u.GoogleAnalyticsObject || "ga"
        };
    var Ce = function (a) {};

    function Be(a, b) {
        a.containerId = Hc.i;
        var c = {
            type: "GENERIC",
            value: a
        };
        b.length && (c.trace = b);
        return c
    };

    function De(a, b, c, d) {
        var e = Tb[a],
            g = Ee(a, b, c, d);
        if (!g) return null;
        var h = bc(e[fc.Dd], c, []);
        if (h && h.length) {
            var k = h[0];
            g = De(k.index, {
                I: g,
                S: 1 === k.Nd ? b.terminate : g,
                terminate: b.terminate
            }, c, d)
        }
        return g
    }

    function Ee(a, b, c, d) {
        function e() {
            if (g[fc.We]) k();
            else {
                var w = cc(g, c, []),
                    x = fe(c.id, String(g[fc.ka]), Number(g[fc.Ed]), w[fc.Xe]),
                    y = !1;
                w.vtp_gtmOnSuccess = function () {
                    if (!y) {
                        y = !0;
                        var A = wa() - B;
                        jd(c.id, Tb[a], "5");
                        ge(c.id, x, "success", A);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function () {
                    if (!y) {
                        y = !0;
                        var A = wa() - B;
                        jd(c.id, Tb[a], "6");
                        ge(c.id, x, "failure", A);
                        k()
                    }
                };
                w.vtp_gtmTagId = g.tag_id;
                w.vtp_gtmEventId = c.id;
                jd(c.id, g, "1");
                var z = function (A) {
                    var E = wa() - B;
                    Ce(A);
                    jd(c.id, g, "7");
                    ge(c.id, x, "exception", E);
                    y || (y = !0, k())
                };
                var B = wa();
                try {
                    ac(w, c)
                } catch (A) {
                    z(A)
                }
            }
        }
        var g = Tb[a],
            h = b.I,
            k = b.S,
            l = b.terminate;
        if (c.Cc(g)) return null;
        var m = bc(g[fc.Fd], c, []);
        if (m && m.length) {
            var n = m[0],
                p = De(n.index, {
                    I: h,
                    S: k,
                    terminate: l
                }, c, d);
            if (!p) return null;
            h = p;
            k = 2 === n.Nd ? l : p
        }
        if (g[fc.Cd] || g[fc.Ye]) {
            var t = g[fc.Cd] ? Ub : c.Rg,
                q = h,
                r = k;
            if (!t[a]) {
                e = ya(e);
                var v = Fe(a, t, e);
                h = v.I;
                k = v.S
            }
            return function () {
                t[a](q, r)
            }
        }
        return e
    }

    function Fe(a, b, c) {
        var d = [],
            e = [];
        b[a] = Ge(d, e, c);
        return {
            I: function () {
                b[a] = He;
                for (var g = 0; g < d.length; g++) d[g]()
            },
            S: function () {
                b[a] = Ie;
                for (var g = 0; g < e.length; g++) e[g]()
            }
        }
    }

    function Ge(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function He(a) {
        a()
    }

    function Ie(a, b) {
        b()
    };
    var Le = function (a, b) {
        for (var c = [], d = 0; d < Tb.length; d++)
            if (a.cb[d]) {
                var e = Tb[d];
                var g = b.add();
                try {
                    var h = De(d, {
                        I: g,
                        S: g,
                        terminate: g
                    }, a, d);
                    h ? c.push({
                        te: d,
                        ie: dc(e),
                        Rf: h
                    }) : (Je(d, a), g())
                } catch (l) {
                    g()
                }
            } b.qf();
        c.sort(Ke);
        for (var k = 0; k < c.length; k++) c[k].Rf();
        return 0 < c.length
    };

    function Ke(a, b) {
        var c, d = b.ie,
            e = a.ie;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c;
        else {
            var h = a.te,
                k = b.te;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function Je(a, b) {
        if (!gd) return;
        var c = function (d) {
            var e = b.Cc(Tb[d]) ? "3" : "4",
                g = bc(Tb[d][fc.Dd], b, []);
            g && g.length && c(g[0].index);
            jd(b.id, Tb[d], e);
            var h = bc(Tb[d][fc.Fd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var Me = !1,
        Ne = function (a, b, c, d, e) {
            if ("gtm.js" == b) {
                if (Me) return !1;
                Me = !0
            }
            id(a, b);
            var g = ke(a, d, e);
            yd(a, "event", 1);
            yd(a, "ecommerce", 1);
            yd(a, "gtm");
            var h = {
                id: a,
                name: b,
                Cc: Ud(c),
                cb: [],
                Rg: [],
                ae: function (n) {
                    bb("GTM", 6);
                    Ce(n)
                }
            };
            h.cb = jc(h);
            var k = Le(h, g);
            "gtm.js" !== b && "gtm.sync" !== b || ve();
            if (!k) return k;
            for (var l = 0; l < h.cb.length; l++)
                if (h.cb[l]) {
                    var m =
                        Tb[l];
                    if (m && !Kc[String(m[fc.ka])]) return !0
                } return !1
        };
    var Oe = function (a, b) {
        var c = $b(a, b);
        Tb.push(c);
        return Tb.length - 1
    };
    var Pe = function (a, b, c) {
        var d = this;
        this.eventModel = a;
        this.targetConfig = b || {};
        this.globalConfig = c || {};
        this.getWithConfig = function (e) {
            if (d.eventModel.hasOwnProperty(e)) return d.eventModel[e];
            if (d.targetConfig.hasOwnProperty(e)) return d.targetConfig[e];
            if (d.globalConfig.hasOwnProperty(e)) return d.globalConfig[e]
        }
    };

    function Qe() {
        var a = Ic;
        return a.gcq = a.gcq || new Re
    }
    var Te = function (a, b) {
            Qe().register(a, b)
        },
        Ue = function (a, b, c, d) {
            Qe().push("event", [b, a], c, d)
        },
        Ve = function () {
            this.status = 1;
            this.uc = {};
            this.je = null;
            this.Xd = !1
        },
        We = function (a, b, c, d, e) {
            this.type = a;
            this.Wg = b;
            this.oa = c || "";
            this.Db = d;
            this.defer = e
        },
        Re = function () {
            this.ue = {};
            this.Sd = {};
            this.Xa = []
        },
        Xe = function (a, b) {
            return a.ue[b] = a.ue[b] || new Ve
        },
        Ye = function (a, b, c, d) {
            var e = Xe(a, d.oa).je;
            if (e) {
                var g = f(c),
                    h = f(Xe(a, d.oa).uc),
                    k = f(a.Sd),
                    l = new Pe(g, h, k);
                try {
                    e(b, d.Wg, l)
                } catch (m) {}
            }
        };
    Re.prototype.register = function (a, b) {
        3 !== Xe(this, a).status && (Xe(this, a).je = b, Xe(this, a).status = 3, this.flush())
    };
    Re.prototype.push = function (a, b, c, d) {
        var e = Math.floor(wa() / 1E3);
        if (c && 1 === Xe(this, c).status && (Xe(this, c).status = 2, this.push("require", [], c), !Ad())) {
            var g = encodeURIComponent(c);
            Ma(("http:" != u.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + g + "&l=dataLayer&cx=c"))
        }
        this.Xa.push(new We(a, e, c, b, d));
        d || this.flush()
    };
    Re.prototype.flush = function (a) {
        for (var b = this; this.Xa.length;) {
            var c = this.Xa[0];
            if (c.defer) c.defer = !1, this.Xa.push(c);
            else switch (c.type) {
                case "require":
                    if (3 !== Xe(this, c.oa).status && !a) return;
                    break;
                case "set":
                    ra(c.Db[0], function (h, k) {
                        b.Sd[h] = k
                    });
                    break;
                case "config":
                    var d = c.Db[0],
                        e = !!d[G.ub];
                    delete d[G.ub];
                    var g = Xe(this, c.oa);
                    e || (g.uc = {});
                    g.Xd && e || Ye(this, G.U, d, c);
                    g.Xd = !0;
                    f(d, g.uc);
                    break;
                case "event":
                    Ye(this, c.Db[1], c.Db[0], c)
            }
            this.Xa.shift()
        }
    };
    var Ze = new function () {
        this.Nc = {}
    };
    var $e = null,
        af = {},
        bf = {},
        cf, df = function (a, b) {
            var c = {
                event: a
            };
            b && (c.eventModel = f(b), b[G.$b] && (c.eventCallback = b[G.$b]), b[G.Na] && (c.eventTimeout = b[G.Na]));
            return c
        };
    var ef = function () {
            $e = $e || !Ic.gtagRegistered;
            Ic.gtagRegistered = !0;
            return $e
        },
        ff = function (a) {
            if (void 0 === bf[a.id]) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = Oe("gtagua", {
                            trackingId: a.id
                        });
                        break;
                    case "AW":
                        b = Oe("gtagaw", {
                            conversionId: a
                        });
                        break;
                    case "DC":
                        b = Oe("gtagfl", {
                            targetId: a.id
                        });
                        break;
                    case "GF":
                        b = Oe("gtaggf", {
                            conversionId: a
                        });
                        break;
                    case "G":
                        b = Oe("get", {
                            trackingId: a.id,
                            isAutoTag: !0
                        });
                        break;
                    case "HA":
                        b = Oe("gtagha", {
                            conversionId: a
                        });
                        break;
                    default:
                        return
                }
                if (!cf) {
                    var c = $b("v", {
                        name: "send_to",
                        dataLayerVersion: 2
                    });
                    Qb.push(c);
                    cf = ["macro", Qb.length - 1]
                }
                var d = {
                    arg0: cf,
                    arg1: a.id,
                    ignore_case: !1
                };
                d[fc.ka] = "_lc";
                Sb.push(d);
                var e = {
                    "if": [Sb.length - 1],
                    add: [b]
                };
                e["if"] && (e.add || e.block) && Rb.push(e);
                bf[a.id] = b
            }
        },
        gf = function (a) {
            ra(af, function (b, c) {
                var d = la(c, a);
                0 <= d && c.splice(d, 1)
            })
        },
        hf = ya(function () {}),
        jf = function (a) {
            if (a.containerId !== Hc.i && "G" !== a.prefix) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = 14;
                        break;
                    case "AW":
                        b = 15;
                        break;
                    case "DC":
                        b = 16;
                        break;
                    default:
                        b = 17
                }
                bb("GTM", b)
            }
        };
    var kf = {
            config: function (a) {
                var b = a[2] || {};
                if (2 > a.length || !ia(a[1]) || !Ha(b)) return;
                var c = Ec(a[1]);
                if (!c) return;
                ef() ? (ff(c), jf(c)) : hf();
                gf(c.id);
                var d = c.id,
                    e = b[G.fc] || "default";
                e = e.toString().split(",");
                for (var g = 0; g < e.length; g++) af[e[g]] = af[e[g]] || [], af[e[g]].push(d);
                delete b[G.fc];
                xd("gtag.targets." + c.id, void 0);
                xd("gtag.targets." + c.id, f(b));
                var h = {};
                h[G.wa] = c.id;
                return df(G.U, h);
            },
            event: function (a) {
                var b = a[1];
                if (ia(b) && !(3 < a.length)) {
                    var c;
                    if (2 < a.length) {
                        if (!Ha(a[2])) return;
                        c = a[2]
                    }
                    var d = df(b, c);
                    var e;
                    var g = c,
                        h = qd("gtag.fields.send_to", 2);
                    ia(h) || (h = G.wa);
                    var k = g && g[h];
                    void 0 === k && (k = qd(h, 2), void 0 === k && (k = "default"));
                    if (ia(k) || ka(k)) {
                        for (var l = k.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < l.length; n++) 0 <= l[n].indexOf("-") ? m.push(l[n]) : m = m.concat(af[l[n]] || []);
                        e = Gc(m)
                    } else e = void 0;
                    var p = e;
                    if (!p) return;
                    var t = ef();
                    t || hf();
                    for (var q = [], r = 0; t && r < p.length; r++) {
                        var v = p[r];
                        jf(v);
                        q.push(v.id);
                        ff(v)
                    }
                    d.eventModel =
                        d.eventModel || {};
                    0 < p.length ? d.eventModel[G.wa] = q.join() : delete d.eventModel[G.wa];
                    return d
                }
            },
            js: function (a) {
                if (2 == a.length && a[1].getTime) return {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
            },
            policy: function (a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2];
                    Ze.Nc[b] ? Ze.Nc[b].push(c) : Ze.Nc[b] = [c]
                }
            },
            set: function (a) {
                var b;
                2 == a.length && Ha(a[1]) ? b = f(a[1]) : 3 == a.length && ia(a[1]) && (b = {}, b[a[1]] = a[2]);
                if (b) {
                    if (ef()) {
                        var c = f(b);
                        Qe().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        lf = {
            policy: !0
        };
    var nf = function (a) {
            return mf ? C.querySelectorAll(a) : null
        },
        of = function (a, b) {
            if (!mf) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!C.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        pf = !1;
    if (C.querySelectorAll) try {
        var qf = C.querySelectorAll(":root");
        qf && 1 == qf.length && qf[0] == C.documentElement && (pf = !0)
    } catch (a) {}
    var mf = pf;
    var xf = function (a) {
        if (wf(a)) return a;
        this.Zg = a
    };
    xf.prototype.Yf = function () {
        return this.Zg
    };
    var wf = function (a) {
        return !a || "object" !== Fa(a) || Ha(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    xf.prototype.getUntrustedUpdateValue = xf.prototype.Yf;
    var yf = !1,
        zf = [];

    function Af() {
        if (!yf) {
            yf = !0;
            for (var a = 0; a < zf.length; a++) D(zf[a])
        }
    }
    var Bf = function (a) {
        yf ? D(a) : zf.push(a)
    };
    var Cf = [],
        Df = !1,
        Ef = function (a) {
            return u["dataLayer"].push(a)
        },
        Ff = function (a) {
            var b = Ic["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function () {
                ++d === c && a()
            }
        },
        Hf = function (a) {
            var b = a._clear;
            ra(a, function (g, h) {
                "_clear" !== g && (b && xd(g, void 0), xd(g, h))
            });
            Nc || (Nc = a["gtm.start"]);
            var c = a.event;
            if (!c) return !1;
            var d = a["gtm.uniqueEventId"];
            d || (d = Tc(), a["gtm.uniqueEventId"] = d, xd("gtm.uniqueEventId", d));
            Pc = c;
            var e = Gf(a);
            Pc = null;
            switch (c) {
                case "gtm.init":
                    bb("GTM", 19), e && bb("GTM", 20)
            }
            return e
        };

    function Gf(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = Ic.zones;
        d = e ? e.checkState(Hc.i, c) : Wd;
        return d.active ? Ne(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }
    var If = function () {
            for (var a = !1; !Df && 0 < Cf.length;) {
                Df = !0;
                delete md.eventModel;
                pd();
                var b = Cf.shift();
                if (null != b) {
                    var c = wf(b);
                    if (c) {
                        var d = b;
                        b = wf(d) ? d.getUntrustedUpdateValue() : void 0;
                        for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                            var h = e[g],
                                k = qd(h, 1);
                            if (ka(k) || Ha(k)) k = f(k);
                            nd[h] = k
                        }
                    }
                    try {
                        if (ha(b)) try {
                            b.call(rd)
                        } catch (v) {} else if (ka(b)) {
                            var l = b;
                            if (ia(l[0])) {
                                var m =
                                    l[0].split("."),
                                    n = m.pop(),
                                    p = l.slice(1),
                                    t = qd(m.join("."), 2);
                                if (void 0 !== t && null !== t) try {
                                    t[n].apply(t, p)
                                } catch (v) {}
                            }
                        } else {
                            var q = b;
                            if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                                a: {
                                    if (b.length && ia(b[0])) {
                                        var r = kf[b[0]];
                                        if (r && (!c || !lf[b[0]])) {
                                            b = r(b);
                                            break a
                                        }
                                    }
                                    b = void 0
                                }
                                if (!b) {
                                    Df = !1;
                                    continue
                                }
                            }
                            a = Hf(b) || a
                        }
                    } finally {
                        c && pd(!0)
                    }
                }
                Df = !1
            }
            return !a
        },
        Jf = function () {
            var a = If();
            try {
                var b = Hc.i,
                    c = u["dataLayer"].hide;
                if (c && void 0 !== c[b] && c.end) {
                    c[b] = !1;
                    var d = !0,
                        e;
                    for (e in c)
                        if (c.hasOwnProperty(e) && !0 === c[e]) {
                            d = !1;
                            break
                        } d && (c.end(), c.end = null)
                }
            } catch (g) {}
            return a
        },
        Kf = function () {
            var a = Ka("dataLayer", []),
                b = Ka("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            ce(function () {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Bf(function () {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers ||
                0) + 1;
            var c = a.push;
            a.push = function () {
                var d;
                if (0 < Ic.SANDBOXED_JS_SEMAPHORE) {
                    d = [];
                    for (var e = 0; e < arguments.length; e++) d[e] = new xf(arguments[e])
                } else d = [].slice.call(arguments, 0);
                var g = c.apply(a, d);
                Cf.push.apply(Cf, d);
                if (300 < this.length)
                    for (bb("GTM", 4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return If() && h
            };
            Cf.push.apply(Cf, a.slice(0));
            D(Jf)
        };
    var Lf;
    var gg = {};
    gg.wb = new String("undefined");
    var hg = function (a) {
        this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === gg.wb ? b : a[d]);
            return c.join("")
        }
    };
    hg.prototype.toString = function () {
        return this.resolve("undefined")
    };
    hg.prototype.valueOf = hg.prototype.toString;
    gg.$e = hg;
    gg.kc = {};
    gg.Jf = function (a) {
        return new hg(a)
    };
    var ig = {};
    gg.Ig = function (a, b) {
        var c = Tc();
        ig[c] = [a, b];
        return c
    };
    gg.Kd = function (a) {
        var b = a ? 0 : 1;
        return function (c) {
            var d = ig[c];
            if (d && "function" === typeof d[b]) d[b]();
            ig[c] = void 0
        }
    };
    gg.kg = function (a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    gg.wg = function (a) {
        if (a === gg.wb) return a;
        var b = Tc();
        gg.kc[b] = a;
        return 'google_tag_manager["' + Hc.i + '"].macro(' + b + ")"
    };
    gg.og = function (a, b, c) {
        a instanceof gg.$e && (a = a.resolve(gg.Ig(b, c)), b = fa);
        return {
            Ac: a,
            I: b
        }
    };
    var jg = function (a, b, c) {
            function d(g, h) {
                var k = g[h];
                return k
            }
            var e = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": d(a, "className"),
                "gtm.elementId": a["for"] || Sa(a, "id") || "",
                "gtm.elementTarget": a.formTarget || d(a, "target") || ""
            };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        kg = function (a) {
            Ic.hasOwnProperty("autoEventsSettings") || (Ic.autoEventsSettings = {});
            var b = Ic.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        lg = function (a, b, c) {
            kg(a)[b] = c
        },
        mg = function (a, b, c, d) {
            var e = kg(a),
                g = xa(e, b, d);
            e[b] = c(g)
        },
        ng = function (a, b, c) {
            var d = kg(a);
            return xa(d, b, c)
        };
    var og = function () {
            for (var a = Ia.userAgent + (C.cookie || "") + (C.referrer || ""), b = a.length, c = u.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, g, h;
            if (a)
                for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(wa() / 1E3)].join(".")
        },
        rg = function (a, b, c, d) {
            var e = pg(b);
            return nb(a, e, qg(c), d)
        },
        sg = function (a, b, c, d) {
            var e = "" + pg(c),
                g = qg(d);
            1 < g && (e += "-" + g);
            return [b, e, a].join(".")
        },
        pg = function (a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        qg = function (a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var tg = ["1"],
        ug = {},
        yg = function (a, b, c, d) {
            var e = vg(a);
            ug[e] || wg(e, b, c) || (xg(e, og(), b, c, d), wg(e, b, c))
        };

    function xg(a, b, c, d, e) {
        var g = sg(b, "1", d, c);
        sb(a, g, c, d, 0 == e ? void 0 : new Date(wa() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function wg(a, b, c) {
        var d = rg(a, b, c, tg);
        d && (ug[a] = d);
        return d
    }

    function vg(a) {
        return (a || "_gcl") + "_au"
    };
    var zg = function () {
        for (var a = [], b = C.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Yc: e[1],
                value: e[2]
            })
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Yc] || (g[a[h].Yc] = []), g[a[h].Yc].push({
                timestamp: k[1],
                Vf: k[2]
            }))
        }
        return g
    };

    function Ag() {
        for (var a = Bg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Cg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Bg, Dg, Eg = function (a) {
            Bg = Bg || Cg();
            Dg = Dg || Ag();
            for (var b = [], c = 0; c < a.length; c += 3) {
                var d = c + 1 < a.length,
                    e = c + 2 < a.length,
                    g = a.charCodeAt(c),
                    h = d ? a.charCodeAt(c + 1) : 0,
                    k = e ? a.charCodeAt(c + 2) : 0,
                    l = g >> 2,
                    m = (g & 3) << 4 | h >> 4,
                    n = (h & 15) << 2 | k >> 6,
                    p = k & 63;
                e || (p = 64, d || (n = 64));
                b.push(Bg[l], Bg[m], Bg[n], Bg[p])
            }
            return b.join("")
        },
        Fg = function (a) {
            function b(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        n = Dg[m];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            Bg = Bg || Cg();
            Dg = Dg ||
                Ag();
            for (var c = "", d = 0;;) {
                var e = b(-1),
                    g = b(0),
                    h = b(64),
                    k = b(64);
                if (64 === k && -1 === e) return c;
                c += String.fromCharCode(e << 2 | g >> 4);
                64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
            }
        };
    var Gg;

    function Hg(a, b) {
        if (!a || b === C.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var Lg = function () {
            var a = Ig,
                b = Jg,
                c = Kg(),
                d = function (h) {
                    a(h.target || h.srcElement || {})
                },
                e = function (h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                Qa(C, "mousedown", d);
                Qa(C, "keyup", d);
                Qa(C, "submit", e);
                var g = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function () {
                    b(this);
                    g.call(this)
                };
                c.init = !0
            }
        },
        Kg = function () {
            var a = Ka("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            }, a.gl = b);
            return b
        };
    var Mg = /(.*?)\*(.*?)\*(.*)/,
        Ng = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Og = /^(?:www\.|m\.|amp\.)+/,
        Pg = /([^?#]+)(\?[^#]*)?(#.*)?/,
        Qg = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        Sg = function (a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Eg(String(d))))
                } var e = b.join("*");
            return ["1", Rg(e), e].join("*")
        },
        Rg = function (a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
                    window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
                ].join("*"),
                d;
            if (!(d = Gg)) {
                for (var e = Array(256), g = 0; 256 > g; g++) {
                    for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[g] = h
                }
                d = e
            }
            Gg = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Gg[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        Ug = function () {
            return function (a) {
                var b = jb(u.location.href),
                    c = b.search.replace("?", ""),
                    d = eb(c, "_gl", !0) || "";
                a.query = Tg(d) || {};
                var e = ib(b, "fragment").match(Qg);
                a.fragment = Tg(e && e[3] ||
                    "") || {}
            }
        },
        Vg = function () {
            var a = Ug(),
                b = Kg();
            b.data || (b.data = {
                query: {},
                fragment: {}
            }, a(b.data));
            var c = {},
                d = b.data;
            d && (za(c, d.query), za(c, d.fragment));
            return c
        },
        Tg = function (a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var g = Mg.exec(d);
                            if (g) {
                                c = g;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === Rg(k, n)) {
                                    l = !0;
                                    break a
                                } l = !1
                        }
                        if (l) {
                            for (var p = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = Fg(t[q + 1]);
                            return p
                        }
                    }
                }
            } catch (r) {}
        };

    function Wg(a, b, c) {
        function d(m) {
            var n = m,
                p = Qg.exec(n),
                t = n;
            if (p) {
                var q = p[2],
                    r = p[4];
                t = p[1];
                r && (t = t + q + r)
            }
            m = t;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = Pg.exec(b);
        if (!e) return "";
        var g = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function Xg(a, b, c) {
        for (var d = {}, e = {}, g = Kg().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && Hg(k.domains, b) && (k.fragment ? za(e, k.callback()) : za(d, k.callback()))
        }
        if (Aa(d)) {
            var l = Sg(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                            var q = n[t];
                            if ("_gl" === q.name) {
                                q.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var r = C.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value",
                                l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var v = Wg(l, a.action);
                        $a.test(v) && (a.action = v)
                    }
                }
            } else Yg(l, a, !1)
        }
        if (!c && Aa(e)) {
            var w = Sg(e);
            Yg(w, a, !0)
        }
    }

    function Yg(a, b, c) {
        if (b.href) {
            var d = Wg(a, b.href, void 0 === c ? !1 : c);
            $a.test(d) && (b.href = d)
        }
    }
    var Ig = function (a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var g = e.protocol;
                    "http:" !== g && "https:" !== g || Xg(e, e.hostname, !1)
                }
            } catch (h) {}
        },
        Jg = function (a) {
            try {
                if (a.action) {
                    var b = ib(jb(a.action), "host");
                    Xg(a, b, !0)
                }
            } catch (c) {}
        },
        Zg = function (a, b, c, d) {
            Lg();
            var e = {
                callback: a,
                domains: b,
                fragment: "fragment" === c,
                forms: !!d
            };
            Kg().decorators.push(e)
        },
        $g = function () {
            var a = C.location.hostname,
                b = Ng.exec(C.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var g = c.split("/"),
                    h = g[1];
                e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(Og, ""),
                l = e.replace(Og, ""),
                m;
            if (!(m = k === l)) {
                var n = "." + l;
                m = k.substring(k.length - n.length, k.length) === n
            }
            return m
        },
        ah = function (a, b) {
            return !1 === a ? !1 : a || b || $g()
        };
    var bh = {};
    var ch = /^\w+$/,
        dh = /^[\w-]+$/,
        eh = /^~?[\w-]+$/,
        fh = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha"
        };

    function gh(a) {
        return a && "string" == typeof a && a.match(ch) ? a : "_gcl"
    }
    var ih = function () {
        var a = jb(u.location.href),
            b = ib(a, "query", !1, void 0, "gclid"),
            c = ib(a, "query", !1, void 0, "gclsrc"),
            d = ib(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || eb(e, "gclid", void 0);
            c = c || eb(e, "gclsrc", void 0)
        }
        return hh(b, c, d)
    };

    function hh(a, b, c) {
        var d = {},
            e = function (g, h) {
                d[h] || (d[h] = []);
                d[h].push(g)
            };
        if (void 0 !== a && a.match(dh)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                (void 0 == bh.gtm_3pds ? 0 : bh.gtm_3pds) && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }

    function jh(a, b, c) {
        function d(p, t) {
            var q = kh(p, e);
            q && sb(q, t, h, g, l, !0)
        }
        b = b || {};
        var e = gh(b.prefix),
            g = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.be ? 7776E3 : b.be;
        c = c || wa();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function (p) {
                return ["GCL", m, p].join(".")
            };
        a.aw && (!0 === b.Fh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]))
    }
    var kh = function (a, b) {
            var c = fh[a];
            if (void 0 !== c) return b + c
        },
        lh = function (a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
        };

    function mh(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var nh = function (a, b, c, d, e) {
            if (ka(b)) {
                var g = gh(e);
                Zg(function () {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = kh(a[k], g);
                        if (l) {
                            var m = kb(l, C.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        oh = function (a) {
            return a.filter(function (b) {
                return eh.test(b)
            })
        },
        qh = function (a) {
            for (var b = ["aw", "dc"], c = gh(a && a.prefix), d = {}, e = 0; e < b.length; e++) fh[b[e]] && (d[b[e]] = fh[b[e]]);
            ra(d, function (g, h) {
                var k = kb(c + h, C.cookie);
                if (k.length) {
                    var l = k[0],
                        m = lh(l),
                        n = {};
                    n[g] = [mh(l)];
                    jh(n, a, m)
                }
            })
        };
    var rh = /^\d+\.fls\.doubleclick\.net$/;

    function sh(a) {
        var b = jb(u.location.href),
            c = ib(b, "host", !1);
        if (c && c.match(rh)) {
            var d = ib(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function th(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = sh("gcl" + a);
            if (c) return c.split(".")
        }
        var d = gh(b);
        if ("_gcl" == d) {
            var e;
            e = ih()[a] || [];
            if (0 < e.length) return e
        }
        var g = kh(a, d),
            h;
        if (g) {
            var k = [];
            if (C.cookie) {
                var l = kb(g, C.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = mh(l[m]);
                        n && -1 === la(k, n) && k.push(n)
                    }
                    h = oh(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var uh = function () {
            var a = sh("gac");
            if (a) return decodeURIComponent(a);
            var b = zg(),
                c = [];
            ra(b, function (d, e) {
                for (var g = [], h = 0; h < e.length; h++) g.push(e[h].Vf);
                g = oh(g);
                g.length && c.push(d + ":" + g.join(","))
            });
            return c.join(";")
        },
        vh = function (a, b, c, d, e) {
            yg(b, c, d, e);
            var g = ug[vg(b)],
                h = ih().dc || [],
                k = !1;
            if (g && 0 < h.length) {
                var l = Ic.joined_au = Ic.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var p = "http://ad.doubleclick.net/ddm/regclk",
                            t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                        Ia.sendBeacon && Ia.sendBeacon(t) || Pa(t);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && g) {
                var q = vg(b),
                    r = ug[q];
                r && xg(q, r, c, d, e)
            }
        };
    var wh;
    if (3 === Hc.Ab.length) wh = "g";
    else {
        var xh = "G";
        xh = "g";
        wh = xh
    }
    var yh = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: wh,
            OPT: "o"
        },
        zh = function (a) {
            var b = Hc.i.split("-"),
                c = b[0].toUpperCase(),
                d = yh[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                g;
            if (3 === Hc.Ab.length) {
                var h = void 0;
                h = h || (Ad() ? "s" : "o");
                g = "2" + (h || "w")
            } else g =
                "";
            return g + d + Hc.Ab + e
        };
    var Ah = function (a) {
            return !(void 0 === a || null === a || 0 === (a + "").length)
        },
        Bh = function (a, b) {
            var c;
            if (2 === b.L) return a("ord", oa(1E11, 1E13)), !0;
            if (3 === b.L) return a("ord", "1"), a("num", oa(1E11, 1E13)), !0;
            if (4 === b.L) return Ah(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.L) c = "1";
            else if (6 === b.L) c = b.Sc;
            else return !1;
            Ah(c) && a("qty", c);
            Ah(b.Fb) && a("cost", b.Fb);
            Ah(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        Ch = encodeURIComponent,
        Dh = function (a, b) {
            function c(n, p, t) {
                g.hasOwnProperty(n) || (p += "", e += ";" + n + "=" +
                    (t ? p : Ch(p)))
            }
            var d = a.xc,
                e = a.protocol;
            e += a.Qb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + Ch(d) + (";type=" + Ch(a.zc)) + (";cat=" + Ch(a.Wa));
            var g = a.Lf || {};
            ra(g, function (n, p) {
                e += ";" + Ch(n) + "=" + Ch(p + "")
            });
            if (Bh(c, a)) {
                Ah(a.Wb) && c("u", a.Wb);
                Ah(a.Vb) && c("tran", a.Vb);
                c("gtm", zh());
                !1 === a.kf && c("npa", "1");
                if (a.vc) {
                    var h = th("dc", a.Aa);
                    h && h.length && c("gcldc", h.join("."));
                    var k = th("aw", a.Aa);
                    k && k.length && c("gclaw", k.join("."));
                    var l = uh();
                    l && c("gac", l);
                    yg(a.Aa, void 0, a.Hf, a.If);
                    var m = ug[vg(a.Aa)];
                    m && c("auiddc", m)
                }
                Ah(a.Oc) && c("prd", a.Oc, !0);
                ra(a.$c, function (n, p) {
                    c(n, p)
                });
                e += b || "";
                Ah(a.Ob) && c("~oref", a.Ob);
                a.Qb ? Oa(e + "?", a.I) : Pa(e + "?", a.I, a.S)
            } else D(a.S)
        };
    var Eh = ["input", "select", "textarea"],
        Fh = ["button", "hidden", "image", "reset", "submit"],
        Gh = function (a) {
            var b = a.tagName.toLowerCase();
            return !ma(Eh, function (c) {
                return c === b
            }) || "input" === b && ma(Fh, function (c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        Hh = function (a) {
            return a.form ? a.form.tagName ? a.form : C.getElementById(a.form) : Ya(a, ["form"], 100)
        },
        Ih = function (a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, g = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if (Gh(h)) {
                    if (h.getAttribute(c) === d) return g;
                    g++
                }
            }
            return 0
        };
    var Kh = function (a) {
            var b = "/pagead/conversion/" + Jh(a.conversion_id) + "/?",
                c = Jh(JSON.stringify(a.conversion_data)),
                d = "https://www.googletraveladservices.com/travel/flights/clk" + b + "conversion_data=" + c;
            if (a.conversionLinkerEnabled) {
                var e = th("gf", a.cookiePrefix);
                if (e && e.length)
                    for (var g = 0; g < e.length; g++) d += "&gclgf=" + Jh(e[g])
            }
            Pa(d, a.onSuccess, a.onFailure)
        },
        Jh = function (a) {
            return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
        };
    var Lh = !!u.MutationObserver,
        Mh = void 0,
        Nh = function (a) {
            if (!Mh) {
                var b = function () {
                    var c = C.body;
                    if (c)
                        if (Lh)(new MutationObserver(function () {
                            for (var e = 0; e < Mh.length; e++) D(Mh[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Qa(c, "DOMNodeInserted", function () {
                                d || (d = !0, D(function () {
                                    d = !1;
                                    for (var e = 0; e < Mh.length; e++) D(Mh[e])
                                }))
                            })
                        }
                };
                Mh = [];
                C.body ? b() : D(b)
            }
            Mh.push(a)
        };
    var oi = u.clearTimeout,
        pi = u.setTimeout,
        L = function (a, b, c) {
            if (Ad()) {
                b && D(b)
            } else return Ma(a, b, c)
        },
        qi = function () {
            return new Date
        },
        ri = function () {
            return u.location.href
        },
        si = function (a) {
            return ib(jb(a), "fragment")
        },
        ti = function (a) {
            return hb(jb(a))
        },
        ui = null;
    var vi = function (a, b) {
            return qd(a, b || 2)
        },
        wi = function (a, b, c) {
            b && (a.eventCallback = b, c && (a.eventTimeout = c));
            return Ef(a)
        },
        xi = function (a, b) {
            u[a] = b
        },
        M = function (a, b, c) {
            b && (void 0 === u[a] || c && !u[a]) && (u[a] = b);
            return u[a]
        },
        yi = function (a, b, c) {
            return kb(a, b, void 0 === c ? !0 : !!c)
        },
        zi = function (a, b, c, d) {
            var e = {
                    prefix: a,
                    path: b,
                    domain: c,
                    be: d
                },
                g = ih();
            jh(g, e);
            qh(e)
        },
        Ai = function (a, b, c, d, e) {
            for (var g = Vg(), h = gh(b), k = 0; k < a.length; ++k) {
                var l = a[k];
                if (void 0 !== fh[l]) {
                    var m = kh(l, h),
                        n = g[m];
                    if (n) {
                        var p = Math.min(lh(n), wa()),
                            t;
                        b: {
                            for (var q = p, r = kb(m, C.cookie), v = 0; v < r.length; ++v)
                                if (lh(r[v]) > q) {
                                    t = !0;
                                    break b
                                } t = !1
                        }
                        t || sb(m, n, c, d, 0 == e ? void 0 : new Date(p + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var w = {
                prefix: b,
                path: c,
                domain: d
            };
            jh(hh(g.gclid, g.gclsrc), w);
        },
        Bi = function (a, b, c, d, e) {
            nh(a, b, c, d, e);
        },
        Ci = function (a, b) {
            if (Ad()) {
                b && D(b)
            } else Oa(a, b)
        },
        Di = function (a) {
            return !!ng(a, "init", !1)
        },
        Ei = function (a) {
            lg(a, "init", !0)
        },
        Fi = function (a, b, c) {
            var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : Mc;
            d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            b && ra(b, function (e, g) {
                g && (d += "&" + e + "=" + encodeURIComponent(g))
            });
            L(H("https://", "http://", d))
        },
        Gi = function (a, b) {
            var c = a[b];
            return c
        };
    var Hi = function (a, b, c, d, e, g) {
        var h = {
            config: a,
            gtm: zh()
        };
        c && (yg(d, void 0, e, g), h.auiddc = ug[vg(d)]);
        b && (h.loadInsecure = b);
        M("__dc_ns_processor", []).push(h);
        L((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
    };
    var Ii = gg.og;
    var Ji = new pa,
        Ki = function (a, b) {
            function c(h) {
                var k = jb(h),
                    l = ib(k, "protocol"),
                    m = ib(k, "host", !0),
                    n = ib(k, "port"),
                    p = ib(k, "path").toLowerCase().replace(/\/$/, "");
                if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
                return [l, m, n, p]
            }
            for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
                if (d[g] !== e[g]) return !1;
            return !0
        },
        Li = function (a) {
            var b = a.arg0,
                c = a.arg1;
            if (a.any_of && ka(c)) {
                for (var d = 0; d < c.length; d++)
                    if (Li({
                            "function": a["function"],
                            arg0: b,
                            arg1: c[d]
                        })) return !0;
                return !1
            }
            switch (a["function"]) {
                case "_cn":
                    return 0 <=
                        String(b).indexOf(String(c));
                case "_css":
                    var e;
                    a: {
                        if (b) {
                            var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                            try {
                                for (var h = 0; h < g.length; h++)
                                    if (b[g[h]]) {
                                        e = b[g[h]](c);
                                        break a
                                    }
                            } catch (v) {}
                        }
                        e = !1
                    }
                    return e;
                case "_ew":
                    var k, l;
                    k = String(b);
                    l = String(c);
                    var m = k.length - l.length;
                    return 0 <= m && k.indexOf(l, m) == m;
                case "_eq":
                    return String(b) == String(c);
                case "_ge":
                    return Number(b) >= Number(c);
                case "_gt":
                    return Number(b) > Number(c);
                case "_lc":
                    var n;
                    n = String(b).split(",");
                    return 0 <= la(n, String(c));
                case "_le":
                    return Number(b) <= Number(c);
                case "_lt":
                    return Number(b) < Number(c);
                case "_re":
                    var p;
                    var t = a.ignore_case ? "i" : void 0;
                    try {
                        var q = String(c) + t,
                            r = Ji.get(q);
                        r || (r = new RegExp(c, t), Ji.set(q, r));
                        p = r.test(b)
                    } catch (v) {
                        p = !1
                    }
                    return p;
                case "_sw":
                    return 0 == String(b).indexOf(String(c));
                case "_um":
                    return Ki(b, c)
            }
            return !1
        };
    var Ni = function (a, b) {
        var c = function () {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Oi = {},
        Pi = encodeURI,
        W = encodeURIComponent,
        Qi = Pa;
    var Ri = function (a, b) {
        if (!a) return !1;
        var c = ib(jb(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return !0
            }
        }
        return !1
    };
    var Si = function (a, b, c) {
        for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d : null
    };
    Oi.lg = function () {
        var a = !1;
        return a
    };
    var rj = function () {
        var a = u.gaGlobal = u.gaGlobal || {};
        a.hid = a.hid || oa();
        return a.hid
    };
    var ak = window,
        bk = document,
        ck = function (a) {
            var b = ak._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === ak["ga-disable-" + a]) return !0;
            try {
                var c = ak.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (g) {}
            for (var d = kb("AMP_TOKEN", bk.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return bk.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var hk = function (a, b, c) {
            Ue(b, c, a)
        },
        ik = function (a, b, c) {
            Ue(b, c, a, !0)
        },
        kk = function (a, b) {},
        jk = function (a, b) {},
        lk = function (a) {
            return "_" === a.charAt(0)
        },
        mk = function (a) {
            ra(a, function (c) {
                lk(c) && delete a[c]
            });
            var b = a[G.vb] || {};
            ra(b, function (c) {
                lk(c) && delete b[c]
            })
        };
    var Y = {
        a: {}
    };


    Y.a.gtagha = ["google"],
        function () {
            function a(h) {
                function k(m, n) {
                    void 0 !== n && l.push(m + "=" + n)
                }
                if (void 0 === h) return "";
                var l = [];
                k("hct_base_price", h.Td);
                k("hct_booking_xref", h.Ud);
                k("hct_checkin_date", h.ag);
                k("hct_checkout_date", h.bg);
                k("hct_currency_code", h.cg);
                k("hct_partner_hotel_id", h.Vd);
                k("hct_total_price", h.Wd);
                return l.join(";")
            }

            function b(h, k, l, m) {
                var n = W(h),
                    p = W(a(k)),
                    t = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + n + "/?data=" + p;
                l && (t += th("ha", m).map(function (q) {
                    return "&gclha=" +
                        W(q)
                }).join(""));
                return t
            }

            function c(h, k, l, m, n, p) {
                /^\d+$/.test(h) ? Qi(b(h, k, l, m), n, p) : D(p)
            }

            function d(h, k, l, m) {
                var n = {};
                ia(h) ? n.Ud = h : "number" === typeof h && (n.Ud = String(h));
                ia(l) && (n.cg = l);
                ia(k) ? n.Wd = n.Td = k : "number" === typeof k && (n.Wd = n.Td = String(k));
                if (!ka(m) || 0 == m.length) return n;
                var p = m[0];
                if (!Ha(p)) return n;
                ia(p.id) ? n.Vd = p.id : "number" === typeof p.id && (n.Vd = String(p.id));
                ia(p.start_date) && (n.ag = p.start_date);
                ia(p.end_date) && (n.bg = p.end_date);
                return n
            }

            function e(h) {
                var k = Pc,
                    l = h.vtp_gtmOnSuccess,
                    m = h.vtp_gtmOnFailure,
                    n = h.vtp_conversionId,
                    p = n.containerId,
                    t = function (z) {
                        return sd(z, p, n.id)
                    },
                    q = !1 !== t(G.La),
                    r = t(G.Ka) || t(G.R),
                    v = t(G.O),
                    w = t(G.P);
                if (k === G.U) {
                    var x = t(G.ia) || {};
                    q && (ah(x[G.Pa], !!x[G.B]) && Ai(g, r, void 0, v, w), zi(r, void 0, v, w));
                    x[G.B] && Bi(g, x[G.B], x[G.Ra], !!x[G.Qa], r);
                    D(l)
                } else if ("purchase" === k) {
                    var y = d(t(G.Ta), t(G.ja), t(G.va), t(G.Y));
                    c(n.M[0], y, q, r, l, m)
                } else D(m)
            }
            var g = ["ha"];
            Y.__gtagha = e;
            Y.__gtagha.b = "gtagha";
            Y.__gtagha.g = !0;
            Y.__gtagha.priorityOverride = 0;
        }();
    Y.a.e = ["google"],
        function () {
            (function (a) {
                Y.__e = a;
                Y.__e.b = "e";
                Y.__e.g = !0;
                Y.__e.priorityOverride = 0
            })(function (a) {
                return String(zd(a.vtp_gtmEventId, "event"))
            })
        }();


    Y.a.v = ["google"],
        function () {
            (function (a) {
                Y.__v = a;
                Y.__v.b = "v";
                Y.__v.g = !0;
                Y.__v.priorityOverride = 0
            })(function (a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = vi(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();





    Y.a.gtagaw = ["google"],
        function () {
            var a = !1,
                b = [],
                c = ["aw", "dc"],
                d = function (l) {
                    var m = M("google_trackConversion"),
                        n = l.gtm_onFailure;
                    "function" == typeof m ? m(l) || n() : n()
                },
                e = function () {
                    for (; 0 < b.length;) d(b.shift())
                },
                g = function () {
                    a || (a = !0, le(), L(H("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function () {
                        e();
                        b = {
                            push: d
                        }
                    }, function () {
                        e();
                        a = !1
                    }))
                },
                h = function (l) {
                    if (l) {
                        for (var m = [], n = 0; n < l.length; ++n) {
                            var p = l[n];
                            p && m.push({
                                item_id: p.id,
                                quantity: p.quantity,
                                value: p.price,
                                start_date: p.start_date,
                                end_date: p.end_date
                            })
                        }
                        return m
                    }
                },
                k = function (l) {
                    var m = l.vtp_conversionId,
                        n = Pc,
                        p = n == G.U,
                        t = m.M[0],
                        q = m.M[1],
                        r = void 0 !== q,
                        v = m.containerId,
                        w = r ? m.id : void 0,
                        x = function (N) {
                            return sd(N, v, w)
                        },
                        y = !1 !== x(G.La),
                        z = x(G.Ka) || x(G.R),
                        B = x(G.O),
                        A = x(G.P);
                    if (p) {
                        var E = x(G.ia) || {};
                        y && (ah(E[G.Pa], !!E[G.B]) && Ai(c, z, void 0, B, A), zi(z, void 0, B, A));
                        E[G.B] && Bi(c, E[G.B], E[G.Ra], !!E[G.Qa], z);
                        Md(m)
                    }
                    var F = !1 === x(G.kd) || !1 === x(G.Sa);
                    if (!p || !r && !F)
                        if (!0 === x(G.ld) && (r = !1), !1 !== x(G.N) || r) {
                            var I = {
                                google_conversion_id: t,
                                google_remarketing_only: !r,
                                onload_callback: l.vtp_gtmOnSuccess,
                                gtm_onFailure: l.vtp_gtmOnFailure,
                                google_conversion_format: "3",
                                google_conversion_color: "ffffff",
                                google_conversion_domain: "",
                                google_conversion_label: q,
                                google_conversion_language: x(G.Oa),
                                google_conversion_value: x(G.ja),
                                google_conversion_currency: x(G.va),
                                google_conversion_order_id: x(G.Ta),
                                google_user_id: x(G.Z),
                                google_conversion_page_url: x(G.rb),
                                google_conversion_referrer_url: x(G.sb),
                                google_gtm: zh()
                            };
                            Ad() && (I.opt_image_generator = function () {
                                return new Image
                            }, I.google_enable_display_cookie_match = !1);
                            !1 === x(G.N) && (I.google_allow_ad_personalization_signals = !1);
                            I.google_read_gcl_cookie_opt_out = !y;
                            y && z && (I.google_gcl_cookie_prefix = z);
                            var S = function () {
                                var N = x(G.ob),
                                    K = {
                                        event: n
                                    };
                                if (ka(N)) {
                                    for (var J = 0; J < N.length; ++J) {
                                        var P = N[J],
                                            U = x(P);
                                        void 0 !== U && (K[P] = U)
                                    }
                                    return K
                                }
                                var X = x("eventModel");
                                if (!X) return null;
                                f(X, K);
                                for (var Z = 0; Z < G.dd.length; ++Z) delete K[G.dd[Z]];
                                return K
                            }();
                            S && (I.google_custom_params = S);
                            !r && x(G.Y) && (I.google_gtag_event_data = {
                                items: x(G.Y),
                                value: x(G.ja)
                            });
                            if (r && "purchase" == n) {
                                I.google_conversion_merchant_id =
                                    x(G.pd);
                                I.google_basket_feed_country = x(G.nd);
                                I.google_basket_feed_language = x(G.od);
                                I.google_basket_discount = x(G.md);
                                I.google_basket_transaction_type = n;
                                I.google_disable_merchant_reported_conversions = !0 === x(G.rd);
                                Ad() && (I.google_disable_merchant_reported_conversions = !0);
                                var T = h(x(G.Y));
                                T && (I.google_conversion_items = T)
                            }
                            var V = function (N, K) {
                                void 0 != K && "" !== K && (I.google_additional_conversion_params = I.google_additional_conversion_params || {}, I.google_additional_conversion_params[N] = K)
                            };
                            r && ("boolean" === typeof x(G.gc) &&
                                V("vdnc", x(G.gc)), V("vdltv", x(G.qd)));
                            var Q = !0;
                            Q && b.push(I)
                        } g()
                };
            Y.__gtagaw = k;
            Y.__gtagaw.b = "gtagaw";
            Y.__gtagaw.g = !0;
            Y.__gtagaw.priorityOverride = 0
        }();


    Y.a.get = ["google"],
        function () {
            (function (a) {
                Y.__get = a;
                Y.__get.b = "get";
                Y.__get.g = !0;
                Y.__get.priorityOverride = 0
            })(function (a) {
                if (a.vtp_isAutoTag) {
                    var b = String(a.vtp_trackingId),
                        c = Pc || "";
                    if (lk(c)) return;
                    var d = {};
                    if (c === G.U) {
                        for (var e = G.Ad, g = 0; g < e.length; g++) {
                            var h = vd(e[g], b);
                            void 0 !== h && (d[e[g]] = h)
                        }
                        Qe().push("config", [d], b)
                    } else {
                        var k = vd(G.ob, b);
                        if (ka(k))
                            for (var l = 0; l < k.length; l++) {
                                var m = k[l],
                                    n = vd(m, b);
                                void 0 !== n && (d[m] = n)
                            } else {
                                var p = vi("eventModel");
                                f(p, d)
                            }
                        mk(d);
                        Ue(c, d, b)
                    }
                } else {
                    var t = a.vtp_settings,
                        q = t.eventParameters,
                        r = t.userProperties;
                    f(Si(a.vtp_eventParameters, "name", "value"), q);
                    f(Si(a.vtp_userProperties, "name", "value"), r);
                    q[G.vb] = r;
                    var v = String(a.vtp_eventName),
                        w = a.vtp_allowSystemNames;
                    if (!w && lk(v)) return;
                    w || mk(q);
                    (a.vtp_deferrable ? ik : hk)(String(t.streamId), v, q)
                }
                a.vtp_gtmOnSuccess()
            })
        }();


    Y.a.gtagfl = [],
        function () {
            function a(e) {
                var g = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(e);
                if (g) {
                    var h = {
                        standard: 2,
                        unique: 3,
                        per_session: 4,
                        transactions: 5,
                        items_sold: 6,
                        "": 1
                    } [(g[5] || "").toLowerCase()];
                    if (h) return {
                        containerId: "DC-" + g[1],
                        oa: g[3] ? e : "",
                        cf: g[1],
                        bf: g[3] || "",
                        Wa: g[4] || "",
                        L: h
                    }
                }
            }

            function b(e, g) {
                function h(t, q, r) {
                    void 0 !== r && 0 !== (r + "").length && k.push(t + q + ":" + e(r + ""))
                }
                var k = [],
                    l = g(G.Y) || [];
                if (ka(l))
                    for (var m = 0; m < l.length; m++) {
                        var n = l[m],
                            p = m + 1;
                        h("i", p, n.id);
                        h("p", p, n.price);
                        h("q", p, n.quantity);
                        h("c", p, g(G.Be));
                        h("l", p, g(G.Oa))
                    }
                return k.join("|")
            }

            function c(e, g, h) {
                var k = /^u([1-9]\d?|100)$/,
                    l = e(G.Ce) || {},
                    m = wd(g, h),
                    n = {},
                    p = {};
                if (Ha(l))
                    for (var t in l)
                        if (l.hasOwnProperty(t) && k.test(t)) {
                            var q = l[t];
                            ia(q) && (n[t] = q)
                        } for (var r = 0; r < m.length; r++) {
                    var v = m[r];
                    k.test(v) && (n[v] = v)
                }
                for (var w in n) n.hasOwnProperty(w) && (p[w] = e(n[w]));
                return p
            }
            var d = ["aw", "dc"];
            (function (e) {
                Y.__gtagfl = e;
                Y.__gtagfl.b = "gtagfl";
                Y.__gtagfl.g = !0;
                Y.__gtagfl.priorityOverride = 0
            })(function (e) {
                var g = e.vtp_gtmOnSuccess,
                    h = e.vtp_gtmOnFailure,
                    k = a(e.vtp_targetId);
                if (k) {
                    var l = function (T) {
                            return sd(T, k.containerId, k.oa || void 0)
                        },
                        m = !1 !== l(G.La),
                        n = l(G.Ka) || l(G.R),
                        p = l(G.O),
                        t = l(G.P),
                        q = l(G.Ee),
                        r = 3 === Bd();
                    if (Pc === G.U) {
                        var v = l(G.ia) || {},
                            w = l(G.Ma),
                            x = void 0 === w ? !0 : !!w;
                        m && (ah(v[G.Pa], !!v[G.B]) && Ai(d, n, void 0, p, t), zi(n, void 0, p, t), vh(x, n, void 0, p, t));
                        v[G.B] && Bi(d, v[G.B], v[G.Ra], !!v[G.Qa], n);
                        q && q.exclusion_parameters && q.engines && Hi(q, r, m, n, p, t);
                        D(g)
                    } else {
                        var y = {},
                            z = l(G.De);
                        if (Ha(z))
                            for (var B in z)
                                if (z.hasOwnProperty(B)) {
                                    var A = z[B];
                                    void 0 !== A && null !==
                                        A && (y[B] = A)
                                } var E = "";
                        if (5 === k.L || 6 === k.L) E = b(W, l);
                        var F = c(l, k.containerId, k.oa),
                            I = !0 === l(G.xe);
                        if (Ad() && I) {
                            I = !1
                        }
                        var S = {
                            Wa: k.Wa,
                            vc: m,
                            Hf: p,
                            If: t,
                            Aa: n,
                            Fb: l(G.ja),
                            L: k.L,
                            Lf: y,
                            xc: k.cf,
                            zc: k.bf,
                            S: h,
                            I: g,
                            Ob: ti(ri()),
                            Oc: E,
                            protocol: r ? "http:" : "https:",
                            Sc: l(G.Qe),
                            Qb: I,
                            sessionId: l(G.tb),
                            Vb: void 0,
                            transactionId: l(G.Ta),
                            Wb: void 0,
                            $c: F,
                            kf: !1 !== l(G.N)
                        };
                        Dh(S)
                    }
                } else D(h)
            })
        }();


    Y.a.gtaggf = ["google"],
        function () {
            var a = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
                b = function (c) {
                    if (c) {
                        for (var d = [], e = 0, g = 0; g < c.length; ++g) {
                            var h = c[g];
                            !h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (d[e] = {
                                cabin: h.travel_class,
                                fare_product: h.fare_product,
                                booking_code: h.booking_code,
                                flight_number: h.flight_number,
                                origin: h.origin,
                                destination: h.destination,
                                departure_date: h.start_date
                            }, e++)
                        }
                        return d
                    }
                };
            (function (c) {
                Y.__gtaggf = c;
                Y.__gtaggf.b = "gtaggf";
                Y.__gtaggf.g = !0;
                Y.__gtaggf.priorityOverride =
                    0
            })(function (c) {
                var d = Pc,
                    e = c.vtp_gtmOnSuccess,
                    g = c.vtp_gtmOnFailure,
                    h = c.vtp_conversionId,
                    k = h.M[0],
                    l = h.containerId,
                    m = function (y) {
                        return sd(y, l, h.id)
                    },
                    n = !1 !== m(G.La),
                    p = m(G.Ka) || m(G.R),
                    t = m(G.O),
                    q = m(G.P);
                if (d === G.U) n && zi(p, void 0, t, q), D(e);
                else {
                    var r = {
                        conversion_id: k,
                        onFailure: g,
                        onSuccess: e,
                        conversionLinkerEnabled: n,
                        cookiePrefix: p
                    };
                    if ("purchase" === d) {
                        var v = a.test(ri()),
                            w = {
                                partner_id: k,
                                trip_type: m(G.Te),
                                total_price: m(G.ja),
                                currency: m(G.va),
                                is_direct_booking: v,
                                flight_segment: b(m(G.Y))
                            },
                            x = m(G.Ne);
                        x && "object" ===
                            typeof x && (w.passengers_total = x.total, w.passengers_adult = x.adult, w.passengers_child = x.child, w.passengers_infant_in_seat = x.infant_in_seat, w.passengers_infant_in_lap = x.infant_in_lap);
                        r.conversion_data = w
                    }
                    Kh(r)
                }
            })
        }();




    Y.a.gtagua = ["google"],
        function () {
            var a, b = {},
                c = {
                    client_id: 1,
                    client_storage: "storage",
                    cookie_name: 1,
                    cookie_domain: 1,
                    cookie_expires: 1,
                    cookie_path: 1,
                    cookie_update: 1,
                    sample_rate: 1,
                    site_speed_sample_rate: 1,
                    use_amp_client_id: 1,
                    store_gac: 1,
                    conversion_linker: "storeGac"
                },
                d = {
                    anonymize_ip: 1,
                    app_id: 1,
                    app_installer_id: 1,
                    app_name: 1,
                    app_version: 1,
                    campaign: {
                        name: "campaignName",
                        source: "campaignSource",
                        medium: "campaignMedium",
                        term: "campaignTerm",
                        content: "campaignContent",
                        id: "campaignId"
                    },
                    currency: "currencyCode",
                    description: "exDescription",
                    fatal: "exFatal",
                    language: 1,
                    non_interaction: 1,
                    page_hostname: "hostname",
                    page_referrer: "referrer",
                    page_path: "page",
                    page_location: "location",
                    page_title: "title",
                    screen_name: 1,
                    transport_type: "transport",
                    user_id: 1
                },
                e = {
                    content_id: 1,
                    event_category: 1,
                    event_action: 1,
                    event_label: 1,
                    link_attribution: 1,
                    linker: 1,
                    method: 1,
                    name: 1,
                    send_page_view: 1,
                    value: 1
                },
                g = {
                    cookie_name: 1,
                    cookie_expires: "duration",
                    levels: 1
                },
                h = {
                    anonymize_ip: 1,
                    fatal: 1,
                    non_interaction: 1,
                    use_amp_client_id: 1,
                    send_page_view: 1,
                    store_gac: 1,
                    conversion_linker: 1
                },
                k = function (v, w, x, y) {
                    if (void 0 !== x)
                        if (h[w] && (x = ta(x)), "anonymize_ip" != w || x || (x = void 0), 1 === v) y[l(w)] = x;
                        else if (ia(v)) y[v] = x;
                    else
                        for (var z in v) v.hasOwnProperty(z) && void 0 !== x[z] && (y[v[z]] = x[z])
                },
                l = function (v) {
                    return v && ia(v) ? v.replace(/(_[a-z])/g, function (w) {
                        return w[1].toUpperCase()
                    }) : v
                },
                m = function (v, w, x) {
                    v.hasOwnProperty(w) || (v[w] = x)
                },
                n = function (v, w, x) {
                    var y = {},
                        z = {},
                        B = {},
                        A;
                    var E = vd(G.Ke, v);
                    if (ka(E)) {
                        for (var F = [], I = 0; I < E.length; I++) {
                            var S = E[I];
                            if (void 0 != S) {
                                var T = S.id,
                                    V = S.variant;
                                void 0 != T && void 0 !=
                                    V && F.push(String(T) + "." + String(V))
                            }
                        }
                        A = 0 < F.length ? F.join("!") : void 0
                    } else A = void 0;
                    var Q = A;
                    Q && m(z, "exp", Q);
                    var N = vd("custom_map", v);
                    if (Ha(N))
                        for (var K in N)
                            if (N.hasOwnProperty(K) && /^(dimension|metric)\d+$/.test(K) && void 0 != N[K]) {
                                var J = vd(String(N[K]), v);
                                void 0 !== J && m(z, K, J)
                            } for (var P = wd(v), U = 0; U < P.length; ++U) {
                        var X = P[U],
                            Z = vd(X, v);
                        e.hasOwnProperty(X) ? k(e[X], X, Z, y) : d.hasOwnProperty(X) ? k(d[X], X, Z, z) : c.hasOwnProperty(X) ? k(c[X], X, Z, B) : /^(dimension|metric|content_group)\d+$/.test(X) ? k(1, X, Z, z) : X === G.R &&
                            0 > la(P, G.nb) && (B.cookieName = Z + "_ga")
                    }
                    var ca = String(Pc);
                    m(B, "cookieDomain", "auto");
                    m(z, "forceSSL", !0);
                    var Ca = "general";
                    0 <= la("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), ca) ? Ca = "ecommerce" : 0 <= la("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), ca) ? Ca = "engagement" : "exception" == ca && (Ca = "error");
                    m(y, "eventCategory", Ca);
                    0 <= la(["view_item",
                        "view_item_list", "view_promotion", "view_search_results"
                    ], ca) && m(z, "nonInteraction", !0);
                    "login" == ca || "sign_up" == ca || "share" == ca ? m(y, "eventLabel", vd(G.Le, v)) : "search" == ca || "view_search_results" == ca ? m(y, "eventLabel", vd(G.Re, v)) : "select_content" == ca && m(y, "eventLabel", vd(G.Ae, v));
                    var R = y[G.ia] || {},
                        O = R[G.Pa];
                    O || 0 != O && R[G.B] ? B.allowLinker = !0 : !1 === O && m(B, "useAmpClientId", !1);
                    if (!1 === vd(G.ye, v) || !1 === vd(G.N, v)) z.allowAdFeatures = !1;
                    B.name = w;
                    z["&gtm"] = zh(!0);
                    z.hitCallback = x;
                    var na = vd("_x_19", v) || vi("gtag.remote_config." +
                            v + ".url"),
                        Ta = vd("_x_20", v) || vi("gtag.remote_config." + v + ".dualId");
                    na && (B._x_19 = na);
                    Ta && (B._x_20 = Ta);
                    y.ca = z;
                    y.Ba = B;
                    return y
                },
                p = function (v) {
                    function w(J) {
                        var P = f(J);
                        P.list = J.list_name;
                        P.listPosition = J.list_position;
                        P.position = J.list_position || J.creative_slot;
                        P.creative = J.creative_name;
                        return P
                    }

                    function x(J) {
                        for (var P = [], U = 0; J && U < J.length; U++) J[U] && P.push(w(J[U]));
                        return P.length ? P : void 0
                    }

                    function y(J) {
                        return {
                            id: B(z.Ta),
                            affiliation: B(z.Fe),
                            revenue: B(z.ja),
                            tax: B(z.Je),
                            shipping: B(z.Ie),
                            coupon: B(z.Ge),
                            list: B(z.Zb) || J
                        }
                    }
                    for (var z = G, B = function (J) {
                            return sd(J, v, void 0)
                        }, A = B(z.Y), E, F = 0; A && F < A.length && !(E = A[F][z.Zb]); F++);
                    var I = B("custom_map");
                    if (Ha(I))
                        for (var S = 0; A && S < A.length; ++S) {
                            var T = A[S],
                                V;
                            for (V in I) I.hasOwnProperty(V) && /^(dimension|metric)\d+$/.test(V) && void 0 != I[V] && m(T, V, T[I[V]])
                        }
                    var Q = null,
                        N = Pc,
                        K = B(z.He);
                    "purchase" == N || "refund" == N ? Q = {
                        action: N,
                        Va: y(),
                        Ga: x(A)
                    } : "add_to_cart" == N ? Q = {
                        action: "add",
                        Ga: x(A)
                    } : "remove_from_cart" == N ? Q = {
                        action: "remove",
                        Ga: x(A)
                    } : "view_item" == N ? Q = {
                        action: "detail",
                        Va: y(E),
                        Ga: x(A)
                    } : "view_item_list" == N ? Q = {
                        action: "impressions",
                        fg: x(A)
                    } : "view_promotion" == N ? Q = {
                        action: "promo_view",
                        Pc: x(K)
                    } : "select_content" == N && K && 0 < K.length ? Q = {
                        action: "promo_click",
                        Pc: x(K)
                    } : "select_content" == N ? Q = {
                        action: "click",
                        Va: {
                            list: B(z.Zb) || E
                        },
                        Ga: x(A)
                    } : "begin_checkout" == N || "checkout_progress" == N ? Q = {
                        action: "checkout",
                        Ga: x(A),
                        Va: {
                            step: "begin_checkout" == N ? 1 : B(z.td),
                            option: B(z.sd)
                        }
                    } : "set_checkout_option" == N && (Q = {
                        action: "checkout_option",
                        Va: {
                            step: B(z.td),
                            option: B(z.sd)
                        }
                    });
                    Q && (Q.mh = B(z.va));
                    return Q
                },
                t = {},
                q = function (v, w) {
                    var x = t[v];
                    t[v] = f(w);
                    if (!x) return !1;
                    for (var y in w)
                        if (w.hasOwnProperty(y) && w[y] !== x[y]) return !0;
                    for (var z in x)
                        if (x.hasOwnProperty(z) && x[z] !== w[z]) return !0;
                    return !1
                },
                r = function (v) {
                    var w = v.vtp_trackingId,
                        x = "https://www.google-analytics.com/analytics.js",
                        y = se();
                    if (ha(y)) {
                        var z = "gtag_" + w.split("-").join("_"),
                            B = function (Q) {
                                var N = [].slice.call(arguments, 0);
                                N[0] = z + "." + N[0];
                                y.apply(window, N)
                            },
                            A = function () {
                                var Q = function (P, U) {
                                        for (var X = 0; U && X < U.length; X++) B(P, U[X])
                                    },
                                    N = p(w);
                                if (N) {
                                    var K = N.action;
                                    if ("impressions" == K) Q("ec:addImpression", N.fg);
                                    else if ("promo_click" == K || "promo_view" == K) {
                                        var J = N.Pc;
                                        Q("ec:addPromo", N.Pc);
                                        J && 0 < J.length && "promo_click" == K && B("ec:setAction", K)
                                    } else Q("ec:addProduct", N.Ga), B("ec:setAction", K, N.Va)
                                }
                            },
                            E = function () {
                                if (Ad()) {} else {
                                    var Q = vd(G.Me, w);
                                    Q && (B("require", Q, {
                                        dataLayer: "dataLayer"
                                    }), B("require", "render"))
                                }
                            },
                            F = n(w, z, v.vtp_gtmOnSuccess);
                        q(z, F.Ba) && (y(function () {
                                qe() && qe().remove(z)
                            }),
                            b[z] = !1);
                        y("create", w, F.Ba);
                        (function () {
                            var Q = vd("custom_map", w);
                            y(function () {
                                if (Ha(Q)) {
                                    var N = F.ca,
                                        K = qe().getByName(z),
                                        J;
                                    for (J in Q)
                                        if (Q.hasOwnProperty(J) && /^(dimension|metric)\d+$/.test(J) && void 0 != Q[J]) {
                                            var P = K.get(l(Q[J]));
                                            m(N, J, P)
                                        }
                                }
                            })
                        })();
                        (function (Q) {
                            if (Q) {
                                var N = {};
                                if (Ha(Q))
                                    for (var K in g) g.hasOwnProperty(K) && k(g[K], K, Q[K], N);
                                B("require",
                                    "linkid", N)
                            }
                        })(F.linkAttribution);
                        var I = F[G.ia];
                        if (I && I[G.B]) {
                            var S = I[G.Ra];
                            te(z + ".", I[G.B], void 0 === S ? !!I.use_anchor : "fragment" === S, !!I[G.Qa])
                        }
                        var T = function (Q, N, K) {
                                K && (N = "" + N);
                                F.ca[Q] = N
                            },
                            V = Pc;
                        V == G.Yb ? (E(), B("send", "pageview", F.ca)) : V == G.U ? (E(), Md(w), 0 != F.sendPageView && B("send", "pageview", F.ca)) : "screen_view" == V ? B("send", "screenview", F.ca) : "timing_complete" == V ? (T("timingCategory", F.eventCategory, !0), T("timingVar", F.name, !0), T("timingValue", sa(F.value)), void 0 !== F.eventLabel && T("timingLabel", F.eventLabel,
                            !0), B("send", "timing", F.ca)) : "exception" == V ? B("send", "exception", F.ca) : "optimize.callback" != V && (0 <= la("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), V) && (B("require", "ec", "ec.js"), A()), T("eventCategory", F.eventCategory, !0), T("eventAction", F.eventAction || V, !0), void 0 !== F.eventLabel && T("eventLabel", F.eventLabel, !0), void 0 !== F.value && T("eventValue", sa(F.value)), B("send", "event", F.ca));
                        a || (a = !0, le(), L(x, function () {
                            qe().loaded || v.vtp_gtmOnFailure()
                        }, v.vtp_gtmOnFailure))
                    } else D(v.vtp_gtmOnFailure)
                };
            Y.__gtagua = r;
            Y.__gtagua.b = "gtagua";
            Y.__gtagua.g = !0;
            Y.__gtagua.priorityOverride = 0
        }();

    var nk = {};
    nk.macro = function (a) {
        if (gg.kc.hasOwnProperty(a)) return gg.kc[a]
    }, nk.onHtmlSuccess = gg.Kd(!0), nk.onHtmlFailure = gg.Kd(!1);
    nk.dataLayer = rd;
    nk.callback = function (a) {
        Rc.hasOwnProperty(a) && ha(Rc[a]) && Rc[a]();
        delete Rc[a]
    };
    nk.vf = function () {
        Ic[Hc.i] = nk;
        za(Sc, Y.a);
        Yb = Yb || gg;
        Zb = Vd
    };
    nk.gg = function () {
        bh.gtm_3pds = !0;
        Ic = u.google_tag_manager = u.google_tag_manager || {};
        if (Ic[Hc.i]) {
            var a = Ic.zones;
            a && a.unregisterChild(Hc.i)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Qb.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) Tb.push(e[g]);
            for (var h = b.predicates || [],
                    k = 0; k < h.length; k++) Sb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, t = 0; t < n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[t], 1);
                Rb.push(p)
            }
            Wb = Y;
            Xb = Li;
            nk.vf();
            Kf();
            Yd = !1;
            Zd = 0;
            if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) ae();
            else {
                Qa(C, "DOMContentLoaded", ae);
                Qa(C, "readystatechange", ae);
                if (C.createEventObject && C.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !u.frameElement
                    } catch (x) {}
                    q && be()
                }
                Qa(u, "load", ae)
            }
            yf = !1;
            "complete" === C.readyState ? Af() :
                Qa(u, "load", Af);
            a: {
                if (!gd) break a;u.setInterval(hd, 864E5);
            }
            Oc = (new Date).getTime();
        }
    };
    (0, nk.gg)();

})()