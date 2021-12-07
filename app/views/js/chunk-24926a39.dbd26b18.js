(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-24926a39"], {
        "057f": function (t, r, e) {
            var n = e("fc6a"),
                i = e("241c").f,
                o = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                u = function (t) {
                    try {
                        return i(t)
                    } catch (r) {
                        return a.slice()
                    }
                };
            t.exports.f = function (t) {
                return a && "[object Window]" == o.call(t) ? u(t) : i(n(t))
            }
        },
        4906: function (t, r, e) {},
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
        "7a79": function (t, r, e) {
            "use strict";
            e.r(r);
            var n = function () {
                    var t = this,
                        r = t.$createElement,
                        e = t._self._c || r;
                    return t.currentProduct ? e("div", {
                        staticClass: "edit-form"
                    }, [e("h4", [t._v("Product")]), e("form", [e("div", {
                        staticClass: "form-group"
                    }, [e("label", {
                        attrs: {
                            for: "title"
                        }
                    }, [t._v("Nombre")]), e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.currentProduct.title,
                            expression: "currentProduct.title"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text",
                            id: "title"
                        },
                        domProps: {
                            value: t.currentProduct.title
                        },
                        on: {
                            input: function (r) {
                                r.target.composing || t.$set(t.currentProduct, "title", r.target.value)
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
                            value: t.currentProduct.description,
                            expression: "currentProduct.description"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text",
                            id: "description"
                        },
                        domProps: {
                            value: t.currentProduct.description
                        },
                        on: {
                            input: function (r) {
                                r.target.composing || t.$set(t.currentProduct, "description", r.target.value)
                            }
                        }
                    })]), e("div", {
                        staticClass: "form-group"
                    }, [t._m(0), t._v(" " + t._s(t.currentProduct.published ? "Published" : "Pending") + " ")])]), t.currentProduct.published ? e("button", {
                        staticClass: "badge badge-primary mr-2",
                        on: {
                            click: function (r) {
                                return t.updatePublished(!1)
                            }
                        }
                    }, [t._v(" UnPublish ")]) : e("button", {
                        staticClass: "badge badge-primary mr-2",
                        on: {
                            click: function (r) {
                                return t.updatePublished(!0)
                            }
                        }
                    }, [t._v(" Publish ")]), e("button", {
                        staticClass: "badge badge-danger mr-2",
                        on: {
                            click: t.deleteProduct
                        }
                    }, [t._v(" Eliminar ")]), e("button", {
                        staticClass: "badge badge-success",
                        attrs: {
                            type: "submit"
                        },
                        on: {
                            click: t.updateProduct
                        }
                    }, [t._v(" Actualizar ")]), e("p", [t._v(t._s(t.message))])]) : e("div", [e("br"), e("p", [t._v("Haga click en un producto...")])])
                },
                i = [function () {
                    var t = this,
                        r = t.$createElement,
                        e = t._self._c || r;
                    return e("label", [e("strong", [t._v("Status:")])])
                }],
                o = (e("a4d3"), e("e01a"), e("f652")),
                a = {
                    name: "Product",
                    data: function () {
                        return {
                            currentProduct: null,
                            message: ""
                        }
                    },
                    methods: {
                        getProduct: function (t) {
                            var r = this;
                            o["a"].get(t).then((function (t) {
                                r.currentProduct = t.data, console.log(t.data)
                            })).catch((function (t) {
                                console.log(t)
                            }))
                        },
                        updatePublished: function (t) {
                            var r = this,
                                e = {
                                    id: this.currentProduct.id,
                                    title: this.currentProduct.title,
                                    description: this.currentProduct.description,
                                    published: t
                                };
                            o["a"].update(this.currentProduct.id, e).then((function (e) {
                                r.currentProduct.published = t, console.log(e.data)
                            })).catch((function (t) {
                                console.log(t)
                            }))
                        },
                        updateProduct: function () {
                            var t = this;
                            o["a"].update(this.currentProduct.id, this.currentProduct).then((function (r) {
                                console.log(r.data), t.message = "El Producto fue actualizado!"
                            })).catch((function (t) {
                                console.log(t)
                            }))
                        },
                        deleteProduct: function () {
                            var t = this;
                            o["a"].delete(this.currentProduct.id).then((function (r) {
                                console.log(r.data), t.$router.push({
                                    name: "products"
                                })
                            })).catch((function (t) {
                                console.log(t)
                            }))
                        }
                    },
                    mounted: function () {
                        this.message = "", this.Product(this.$route.params.id)
                    }
                },
                u = a,
                c = (e("c061"), e("2877")),
                s = Object(c["a"])(u, n, i, !1, null, null, null);
            r["default"] = s.exports
        },
        a4d3: function (t, r, e) {
            "use strict";
            var n = e("23e7"),
                i = e("da84"),
                o = e("d066"),
                a = e("c430"),
                u = e("83ab"),
                c = e("4930"),
                s = e("fdbf"),
                l = e("d039"),
                f = e("5135"),
                d = e("e8b5"),
                p = e("861d"),
                b = e("825a"),
                v = e("7b0b"),
                h = e("fc6a"),
                g = e("c04e"),
                m = e("5c6c"),
                y = e("7c73"),
                T = e("df75"),
                w = e("241c"),
                S = e("057f"),
                O = e("7418"),
                P = e("06cf"),
                _ = e("9bf2"),
                j = e("d1e7"),
                x = e("9112"),
                C = e("6eeb"),
                k = e("5692"),
                $ = e("f772"),
                E = e("d012"),
                N = e("90e3"),
                A = e("b622"),
                J = e("c032"),
                D = e("746f"),
                F = e("d44e"),
                I = e("69f3"),
                U = e("b727").forEach,
                Q = $("hidden"),
                W = "Symbol",
                q = "prototype",
                z = A("toPrimitive"),
                B = I.set,
                G = I.getterFor(W),
                H = Object[q],
                K = i.Symbol,
                L = o("JSON", "stringify"),
                M = P.f,
                R = _.f,
                V = S.f,
                X = j.f,
                Y = k("symbols"),
                Z = k("op-symbols"),
                tt = k("string-to-symbol-registry"),
                rt = k("symbol-to-string-registry"),
                et = k("wks"),
                nt = i.QObject,
                it = !nt || !nt[q] || !nt[q].findChild,
                ot = u && l((function () {
                    return 7 != y(R({}, "a", {
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
                    var e = Y[t] = y(K[q]);
                    return B(e, {
                        type: W,
                        tag: t,
                        description: r
                    }), u || (e.description = r), e
                },
                ut = c && "symbol" == typeof K.iterator ? function (t) {
                    return "symbol" == typeof t
                } : function (t) {
                    return Object(t) instanceof K
                },
                ct = function (t, r, e) {
                    t === H && ct(Z, r, e), b(t);
                    var n = g(r, !0);
                    return b(e), f(Y, n) ? (e.enumerable ? (f(t, Q) && t[Q][n] && (t[Q][n] = !1), e = y(e, {
                        enumerable: m(0, !1)
                    })) : (f(t, Q) || R(t, Q, m(1, {})), t[Q][n] = !0), ot(t, n, e)) : R(t, n, e)
                },
                st = function (t, r) {
                    b(t);
                    var e = h(r),
                        n = T(e).concat(bt(e));
                    return U(n, (function (r) {
                        u && !ft.call(e, r) || ct(t, r, e[r])
                    })), t
                },
                lt = function (t, r) {
                    return void 0 === r ? y(t) : st(y(t), r)
                },
                ft = function (t) {
                    var r = g(t, !0),
                        e = X.call(this, r);
                    return !(this === H && f(Y, r) && !f(Z, r)) && (!(e || !f(this, r) || !f(Y, r) || f(this, Q) && this[Q][r]) || e)
                },
                dt = function (t, r) {
                    var e = h(t),
                        n = g(r, !0);
                    if (e !== H || !f(Y, n) || f(Z, n)) {
                        var i = M(e, n);
                        return !i || !f(Y, n) || f(e, Q) && e[Q][n] || (i.enumerable = !0), i
                    }
                },
                pt = function (t) {
                    var r = V(h(t)),
                        e = [];
                    return U(r, (function (t) {
                        f(Y, t) || f(E, t) || e.push(t)
                    })), e
                },
                bt = function (t) {
                    var r = t === H,
                        e = V(r ? Z : h(t)),
                        n = [];
                    return U(e, (function (t) {
                        !f(Y, t) || r && !f(H, t) || n.push(Y[t])
                    })), n
                };
            if (c || (K = function () {
                    if (this instanceof K) throw TypeError("Symbol is not a constructor");
                    var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                        r = N(t),
                        e = function (t) {
                            this === H && e.call(Z, t), f(this, Q) && f(this[Q], r) && (this[Q][r] = !1), ot(this, r, m(1, t))
                        };
                    return u && it && ot(H, r, {
                        configurable: !0,
                        set: e
                    }), at(r, t)
                }, C(K[q], "toString", (function () {
                    return G(this).tag
                })), j.f = ft, _.f = ct, P.f = dt, w.f = S.f = pt, O.f = bt, u && (R(K[q], "description", {
                    configurable: !0,
                    get: function () {
                        return G(this).description
                    }
                }), a || C(H, "propertyIsEnumerable", ft, {
                    unsafe: !0
                }))), s || (J.f = function (t) {
                    return at(A(t), t)
                }), n({
                    global: !0,
                    wrap: !0,
                    forced: !c,
                    sham: !c
                }, {
                    Symbol: K
                }), U(T(et), (function (t) {
                    D(t)
                })), n({
                    target: W,
                    stat: !0,
                    forced: !c
                }, {
                    for: function (t) {
                        var r = String(t);
                        if (f(tt, r)) return tt[r];
                        var e = K(r);
                        return tt[r] = e, rt[e] = r, e
                    },
                    keyFor: function (t) {
                        if (!ut(t)) throw TypeError(t + " is not a symbol");
                        if (f(rt, t)) return rt[t]
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
                    forced: !c,
                    sham: !u
                }, {
                    create: lt,
                    defineProperty: ct,
                    defineProperties: st,
                    getOwnPropertyDescriptor: dt
                }), n({
                    target: "Object",
                    stat: !0,
                    forced: !c
                }, {
                    getOwnPropertyNames: pt,
                    getOwnPropertySymbols: bt
                }), n({
                    target: "Object",
                    stat: !0,
                    forced: l((function () {
                        O.f(1)
                    }))
                }, {
                    getOwnPropertySymbols: function (t) {
                        return O.f(v(t))
                    }
                }), L) {
                var vt = !c || l((function () {
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
                        if (n = r, (p(r) || void 0 !== t) && !ut(t)) return d(r) || (r = function (t, r) {
                            if ("function" == typeof n && (r = n.call(this, t, r)), !ut(r)) return r
                        }), i[1] = r, L.apply(null, i)
                    }
                })
            }
            K[q][z] || x(K[q], z, K[q].valueOf), F(K, W), E[Q] = !0
        },
        b727: function (t, r, e) {
            var n = e("f8c2"),
                i = e("44ad"),
                o = e("7b0b"),
                a = e("50c4"),
                u = e("65f0"),
                c = [].push,
                s = function (t) {
                    var r = 1 == t,
                        e = 2 == t,
                        s = 3 == t,
                        l = 4 == t,
                        f = 6 == t,
                        d = 5 == t || f;
                    return function (p, b, v, h) {
                        for (var g, m, y = o(p), T = i(y), w = n(b, v, 3), S = a(T.length), O = 0, P = h || u, _ = r ? P(p, S) : e ? P(p, 0) : void 0; S > O; O++)
                            if ((d || O in T) && (g = T[O], m = w(g, O, y), t))
                                if (r) _[O] = m;
                                else if (m) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return g;
                            case 6:
                                return O;
                            case 2:
                                c.call(_, g)
                        } else if (l) return !1;
                        return f ? -1 : s || l ? l : _
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
        c061: function (t, r, e) {
            "use strict";
            var n = e("4906"),
                i = e.n(n);
            i.a
        },
        e01a: function (t, r, e) {
            "use strict";
            var n = e("23e7"),
                i = e("83ab"),
                o = e("da84"),
                a = e("5135"),
                u = e("861d"),
                c = e("9bf2").f,
                s = e("e893"),
                l = o.Symbol;
            if (i && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
                var f = {},
                    d = function () {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                            r = this instanceof d ? new l(t) : void 0 === t ? l() : l(t);
                        return "" === t && (f[r] = !0), r
                    };
                s(d, l);
                var p = d.prototype = l.prototype;
                p.constructor = d;
                var b = p.toString,
                    v = "Symbol(test)" == String(l("test")),
                    h = /^Symbol\((.*)\)[^)]+$/;
                c(p, "description", {
                    configurable: !0,
                    get: function () {
                        var t = u(this) ? this.valueOf() : this,
                            r = b.call(t);
                        if (a(f, t)) return "";
                        var e = v ? r.slice(7, -1) : r.replace(h, "$1");
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
//# sourceMappingURL=chunk-24926a39.dbd26b18.js.map