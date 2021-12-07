(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-29724baf"], {
        "17a3": function (t, e, i) {
            "use strict";
            i.r(e);
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "list row"
                    }, [i("div", {
                        staticClass: "col-md-8"
                    }, [i("div", {
                        staticClass: "input-group mb-3"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.title,
                            expression: "title"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text",
                            placeholder: "Buscar por titulo"
                        },
                        domProps: {
                            value: t.title
                        },
                        on: {
                            input: function (e) {
                                e.target.composing || (t.title = e.target.value)
                            }
                        }
                    }), i("div", {
                        staticClass: "input-group-append"
                    }, [i("button", {
                        staticClass: "btn btn-outline-secondary",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: t.searchTitle
                        }
                    }, [t._v(" Buscar ")])])])]), i("div", {
                        staticClass: "col-md-6"
                    }, [i("h4", [t._v("Lista de Productos")]), i("ul", {
                        staticClass: "list-group"
                    }, t._l(t.products, (function (e, n) {
                        return i("li", {
                            key: n,
                            staticClass: "list-group-item",
                            class: {
                                active: n == t.currentIndex
                            },
                            on: {
                                click: function (i) {
                                    return t.setActiveProduct(e, n)
                                }
                            }
                        }, [t._v(" " + t._s(e.title) + " ")])
                    })), 0), i("button", {
                        staticClass: "m-3 btn btn-sm btn-danger",
                        on: {
                            click: t.removeAllProducts
                        }
                    }, [t._v(" Eliminar todo")])]), i("div", {
                        staticClass: "col-md-6"
                    }, [t.currentProduct ? i("div", [i("h4", [t._v("Producto")]), i("div", [t._m(0), t._v(" " + t._s(t.currentProduct.title) + " ")]), i("div", [t._m(1), t._v(" " + t._s(t.currentProduct.description) + " ")]), i("div", [t._m(2), t._v(" " + t._s(t.currentProduct.published ? "Published" : "Pending") + " ")]), i("router-link", {
                        staticClass: "badge badge-warning",
                        attrs: {
                            to: "/products/" + t.currentProduct.id
                        }
                    }, 
                    [t._v("Editar")])], 1) : i("div", [i("br"), i("p", [t._v("Haga click en un producto...")])])])])
                },
                l = [function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("label", [i("strong", [t._v("Nombre:")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("label", [i("strong", [t._v("Descripción:")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("label", [i("strong", [t._v("Estado:")])])
                }],
                r = i("f652"),
                s = {
                    name: "products-list",
                    data: function () {
                        return {
                            products: [],
                            currentProduct: null,
                            currentIndex: -1,
                            title: ""
                        }
                    },
                    methods: {
                        retrieveProducts: function () {
                            var t = this;
                            r["a"].getAll().then((function (e) {
                                t.products = e.data, console.log(e.data)
                            })).catch((function (t) {
                                console.log(t)
                            }))
                        },
                        refreshList: function () {
                            this.retrieveProducts(), this.currentProduct = null, this.currentIndex = -1
                        },
                        setActiveProduct: function (t, e) {
                            this.currentProduct = t, this.currentIndex = e
                        },
                        removeAllProducts: function () {
                            var t = this;
                            r["a"].deleteAll().then((function (e) {
                                console.log(e.data), t.refreshList()
                            })).catch((function (t) {
                                console.log(t)
                            }))
                        },
                        searchTitle: function () {
                            var t = this;
                            r["a"].findByTitle(this.title).then((function (e) {
                                t.products = e.data, console.log(e.data)
                            })).catch((function (t) {
                                console.log(t)
                            }))
                        }
                    },
                    mounted: function () {
                        this.retrieveProducts()
                    }
                },
                a = s,
                o = (i("64d1"), i("2877")),
                c = Object(o["a"])(a, n, l, !1, null, null, null);
            e["default"] = c.exports
        },
        "64d1": function (t, e, i) {
            "use strict";
            var n = i("7c6c"),
                l = i.n(n);
            l.a
        },
        "7c6c": function (t, e, i) {}
    }
]);
//# sourceMappingURL=chunk-29724baf.89c3a7e4.js.map