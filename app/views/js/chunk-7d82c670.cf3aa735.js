(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7d82c670"], {
        "0496": function (t, r, e) {
            "use strict";
            e.r(r);
            var n = function () {
                    var t = this,
                        r = t.$createElement,
                        e = t._self._c || r;
                    return e("div", {
                        staticClass: "submit-form"
                    }, [t.submitted ? e("div", [e("h4", [t._v("Producto agregado exitosamente!")]), e("button", {
                        staticClass: "btn btn-success",
                        on: {
                            click: t.newProduct
                        }
                    }, [t._v("Agregar Nuevo Registro")])]) : e("div", [e("div", {
                        staticClass: "form-group"
                    }, [e("label", {
                        attrs: {
                            for: "title"
                        }
                    }, [t._v("Nombre")]), e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.product.title,
                            expression: "product.title"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text",
                            id: "title",
                            required: "",
                            name: "title"
                        },
                        domProps: {
                            value: t.product.title
                        },
                        on: {
                            input: function (r) {
                                r.target.composing || t.$set(t.product, "title", r.target.value)
                            }
                        }
                    })]), e("div", {
                        staticClass: "form-group"
                    }, [e("label", {
                        attrs: {
                            for: "description"
                        }
                    }, [t._v("Descripción")]), e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.product.description,
                            expression: "product.description"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            id: "description",
                            required: "",
                            name: "description"
                        },
                        domProps: {
                            value: t.product.description
                        },
                        on: {
                            input: function (r) {
                                r.target.composing || t.$set(t.product, "description", r.target.value)
                            }
                        }
                    })]), e("button", {
                        staticClass: "btn btn-success",
                        on: {
                            click: t.saveProduct
                        }
                    }, [t._v("Guardar")])])])
                },
                i = [],
                o = (e("a4d3"), e("e01a"), e("f652")),
                a = {
                    name: "add-product",
                    data: function () {
                        return {
                            product: {
                                id: null,
                                title: "",
                                description: "",
                                published: !1
                            },
                            submitted: !1
                        }
                    },
                    methods: {
                        saveProduct: function () {
                            var t = this,
                                r = {
                                    title: this.product.title,
                                    description: this.product.description
                                };
                            o["a"].create(r).then((function (r) {
                                t.product.id = r.data.id, console.log(r.data), t.submitted = !0
                            })).catch((function (t) {
                                console.log(t)
                            }))
                        },
                        newProduct: function () {
                            this.submitted = !1, this.product = {}
                        }
                    }
                },
                c = a,
                u = (e("6c7f"), e("2877")),
                s = Object(u["a"])(c, n, i, !1, null, null, null);
            r["default"] = s.exports
        },
        "057f": function (t, r, e) {
            var n = e("fc6a"),
                i = e("241c").f,
                o = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                c = function (t) {
                    try {
                        return i(t)
                    } catch (r) {
                        return a.slice()
                    }
                };
            t.exports.f = function (t) {
                return a && "[object Window]" == o.call(t) ? c(t) : i(n(t))
            }
        },
        "65f0": function (t, r, e) {
            var n = e("861d"),
                i = e("e8b5"),
                o = e("b622"),
                a = o("species");
            t.exports = function (t, r) {
                var e;
                return i(t) && (e = t.constructor, "function" != typeof e || e !== Array && !i(e.prototype) ? n(e) && (e = e[a], null === e && (e = void 0)) : e = void 0), new(void 0 === e ? Array : e)(0 === r ? 0 : r)
            }
        },
        "6a66": function (t, r, e) {},
        "6c7f": function (t, r, e) {
            "use strict";
            var n = e("6a66"),
                i = e.n(n);
            i.a
        },
        "746f": function (t, r, e) {
            var n = e("428f"),
                i = e("5135"),
                o = e("c032"),
                a = e("9bf2").f;
            t.exports = function (t) {
                var r = n.Symbol || (n.Symbol = {});
                i(r, t) || a(r, t, {
                    value: o.f(t)
                })
            }
        },
        a4d3: function (t, r, e) {
            "use strict";
            var n = e("23e7"),
                i = e("da84"),
                o = e("d066"),
                a = e("c430"),
                c = e("83ab"),
                u = e("4930"),
                s = e("fdbf"),
                f = e("d039"),
                l = e("5135"),
                d = e("e8b5"),
                p = e("861d"),
                b = e("825a"),
                v = e("7b0b"),
                m = e("fc6a"),
                y = e("c04e"),
                h = e("5c6c"),
                g = e("7c73"),
                w = e("df75"),
                S = e("241c"),
                O = e("057f"),
                j = e("7418"),
                P = e("06cf"),
                x = e("9bf2"),
                C = e("d1e7"),
                k = e("9112"),
                N = e("6eeb"),
                T = e("5692"),
                _ = e("f772"),
                A = e("d012"),
                E = e("90e3"),
                $ = e("b622"),
                J = e("c032"),
                q = e("746f"),
                D = e("d44e"),
                F = e("69f3"),
                I = e("b727").forEach,
                Q = _("hidden"),
                W = "Symbol",
                Y = "prototype",
                z = $("toPrimitive"),
                B = F.set,
                G = F.getterFor(W),
                H = Object[Y],
                K = i.Symbol,
                L = o("JSON", "stringify"),
                M = P.f,
                R = x.f,
                U = O.f,
                V = C.f,
                X = T("symbols"),
                Z = T("op-symbols"),
                tt = T("string-to-symbol-registry"),
                rt = T("symbol-to-string-registry"),
                et = T("wks"),
                nt = i.QObject,
                it = !nt || !nt[Y] || !nt[Y].findChild,
                ot = c && f((function () {
                    return 7 != g(R({}, "a", {
                        get: function () {
                            return R(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                })) ? function (t, r, e) {
                    var n = M(H, r);
                    n && delete H[r], R(t, r, e), n && t !== H && R(H, r, n)
                } : R,
                at = function (t, r) {
                    var e = X[t] = g(K[Y]);
                    return B(e, {
                        type: W,
                        tag: t,
                        description: r
                    }), c || (e.description = r), e
                },
                ct = u && "symbol" == typeof K.iterator ? function (t) {
                    return "symbol" == typeof t
                } : function (t) {
                    return Object(t) instanceof K
                },
                ut = function (t, r, e) {
                    t === H && ut(Z, r, e), b(t);
                    var n = y(r, !0);
                    return b(e), l(X, n) ? (e.enumerable ? (l(t, Q) && t[Q][n] && (t[Q][n] = !1), e = g(e, {
                        enumerable: h(0, !1)
                    })) : (l(t, Q) || R(t, Q, h(1, {})), t[Q][n] = !0), ot(t, n, e)) : R(t, n, e)
                },
                st = function (t, r) {
                    b(t);
                    var e = m(r),
                        n = w(e).concat(bt(e));
                    return I(n, (function (r) {
                        c && !lt.call(e, r) || ut(t, r, e[r])
                    })), t
                },
                ft = function (t, r) {
                    return void 0 === r ? g(t) : st(g(t), r)
                },
                lt = function (t) {
                    var r = y(t, !0),
                        e = V.call(this, r);
                    return !(this === H && l(X, r) && !l(Z, r)) && (!(e || !l(this, r) || !l(X, r) || l(this, Q) && this[Q][r]) || e)
                },
                dt = function (t, r) {
                    var e = m(t),
                        n = y(r, !0);
                    if (e !== H || !l(X, n) || l(Z, n)) {
                        var i = M(e, n);
                        return !i || !l(X, n) || l(e, Q) && e[Q][n] || (i.enumerable = !0), i
                    }
                },
                pt = function (t) {
                    var r = U(m(t)),
                        e = [];
                    return I(r, (function (t) {
                        l(X, t) || l(A, t) || e.push(t)
                    })), e
                },
                bt = function (t) {
                    var r = t === H,
                        e = U(r ? Z : m(t)),
                        n = [];
                    return I(e, (function (t) {
                        !l(X, t) || r && !l(H, t) || n.push(X[t])
                    })), n
                };
            if (u || (K = function () {
                    if (this instanceof K) throw TypeError("Symbol is not a constructor");
                    var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                        r = E(t),
                        e = function (t) {
                            this === H && e.call(Z, t), l(this, Q) && l(this[Q], r) && (this[Q][r] = !1), ot(this, r, h(1, t))
                        };
                    return c && it && ot(H, r, {
                        configurable: !0,
                        set: e
                    }), at(r, t)
                }, N(K[Y], "toString", (function () {
                    return G(this).tag
                })), C.f = lt, x.f = ut, P.f = dt, S.f = O.f = pt, j.f = bt, c && (R(K[Y], "description", {
                    configurable: !0,
                    get: function () {
                        return G(this).description
                    }
                }), a || N(H, "propertyIsEnumerable", lt, {
                    unsafe: !0
                }))), s || (J.f = function (t) {
                    return at($(t), t)
                }), n({
                    global: !0,
                    wrap: !0,
                    forced: !u,
                    sham: !u
                }, {
                    Symbol: K
                }), I(w(et), (function (t) {
                    q(t)
                })), n({
                    target: W,
                    stat: !0,
                    forced: !u
                }, {
                    for: function (t) {
                        var r = String(t);
                        if (l(tt, r)) return tt[r];
                        var e = K(r);
                        return tt[r] = e, rt[e] = r, e
                    },
                    keyFor: function (t) {
                        if (!ct(t)) throw TypeError(t + " is not a symbol");
                        if (l(rt, t)) return rt[t]
                    },
                    useSetter: function () {
                        it = !0
                    },
                    useSimple: function () {
                        it = !1
                    }
                }), n({
                    target: "Object",
                    stat: !0,
                    forced: !u,
                    sham: !c
                }, {
                    create: ft,
                    defineProperty: ut,
                    defineProperties: st,
                    getOwnPropertyDescriptor: dt
                }), n({
                    target: "Object",
                    stat: !0,
                    forced: !u
                }, {
                    getOwnPropertyNames: pt,
                    getOwnPropertySymbols: bt
                }), n({
                    target: "Object",
                    stat: !0,
                    forced: f((function () {
                        j.f(1)
                    }))
                }, {
                    getOwnPropertySymbols: function (t) {
                        return j.f(v(t))
                    }
                }), L) {
                var vt = !u || f((function () {
                    var t = K();
                    return "[null]" != L([t]) || "{}" != L({
                        a: t
                    }) || "{}" != L(Object(t))
                }));
                n({
                    target: "JSON",
                    stat: !0,
                    forced: vt
                }, {
                    stringify: function (t, r, e) {
                        var n, i = [t],
                            o = 1;
                        while (arguments.length > o) i.push(arguments[o++]);
                        if (n = r, (p(r) || void 0 !== t) && !ct(t)) return d(r) || (r = function (t, r) {
                            if ("function" == typeof n && (r = n.call(this, t, r)), !ct(r)) return r
                        }), i[1] = r, L.apply(null, i)
                    }
                })
            }
            K[Y][z] || k(K[Y], z, K[Y].valueOf), D(K, W), A[Q] = !0
        },
        b727: function (t, r, e) {
            var n = e("f8c2"),
                i = e("44ad"),
                o = e("7b0b"),
                a = e("50c4"),
                c = e("65f0"),
                u = [].push,
                s = function (t) {
                    var r = 1 == t,
                        e = 2 == t,
                        s = 3 == t,
                        f = 4 == t,
                        l = 6 == t,
                        d = 5 == t || l;
                    return function (p, b, v, m) {
                        for (var y, h, g = o(p), w = i(g), S = n(b, v, 3), O = a(w.length), j = 0, P = m || c, x = r ? P(p, O) : e ? P(p, 0) : void 0; O > j; j++)
                            if ((d || j in w) && (y = w[j], h = S(y, j, g), t))
                                if (r) x[j] = h;
                                else if (h) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return y;
                            case 6:
                                return j;
                            case 2:
                                u.call(x, y)
                        } else if (f) return !1;
                        return l ? -1 : s || f ? f : x
                    }
                };
            t.exports = {
                forEach: s(0),
                map: s(1),
                filter: s(2),
                some: s(3),
                every: s(4),
                find: s(5),
                findIndex: s(6)
            }
        },
        c032: function (t, r, e) {
            var n = e("b622");
            r.f = n
        },
        e01a: function (t, r, e) {
            "use strict";
            var n = e("23e7"),
                i = e("83ab"),
                o = e("da84"),
                a = e("5135"),
                c = e("861d"),
                u = e("9bf2").f,
                s = e("e893"),
                f = o.Symbol;
            if (i && "function" == typeof f && (!("description" in f.prototype) || void 0 !== f().description)) {
                var l = {},
                    d = function () {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                            r = this instanceof d ? new f(t) : void 0 === t ? f() : f(t);
                        return "" === t && (l[r] = !0), r
                    };
                s(d, f);
                var p = d.prototype = f.prototype;
                p.constructor = d;
                var b = p.toString,
                    v = "Symbol(test)" == String(f("test")),
                    m = /^Symbol\((.*)\)[^)]+$/;
                u(p, "description", {
                    configurable: !0,
                    get: function () {
                        var t = c(this) ? this.valueOf() : this,
                            r = b.call(t);
                        if (a(l, t)) return "";
                        var e = v ? r.slice(7, -1) : r.replace(m, "$1");
                        return "" === e ? void 0 : e
                    }
                }), n({
                    global: !0,
                    forced: !0
                }, {
                    Symbol: d
                })
            }
        },
        e8b5: function (t, r, e) {
            var n = e("c6b6");
            t.exports = Array.isArray || function (t) {
                return "Array" == n(t)
            }
        }
    }
]);
//# sourceMappingURL=chunk-7d82c670.cf3aa735.js.map