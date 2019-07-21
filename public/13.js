(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_Components_PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layout/Components/PageTitle.vue */ "./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-perfect-scrollbar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PageTitle: _Layout_Components_PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VuePerfectScrollbar: !(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-perfect-scrollbar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      heading: 'Dropdowns',
      subheading: 'Multiple styles, actions and effects are available for the Archited Framework dropdown buttons.\n',
      icon: 'pe-7s-umbrella icon-gradient bg-sunny-morning'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@fortawesome/fontawesome-svg-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@fortawesome/free-solid-svg-icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@fortawesome/vue-fontawesome'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



!(function webpackMissingModule() { var e = new Error("Cannot find module '@fortawesome/fontawesome-svg-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).add(!(function webpackMissingModule() { var e = new Error("Cannot find module '@fortawesome/free-solid-svg-icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module '@fortawesome/free-solid-svg-icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'font-awesome-icon': !(function webpackMissingModule() { var e = new Error("Cannot find module '@fortawesome/vue-fontawesome'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  props: {
    icon: String,
    heading: String,
    subheading: String
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=template&id=eb734aae&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=template&id=eb734aae& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page-title", {
        attrs: {
          heading: _vm.heading,
          subheading: _vm.subheading,
          icon: _vm.icon
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { lg: "6" } }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Basic")
                      ]),
                      _vm._v(" "),
                      _vm._l(
                        [
                          "primary",
                          "secondary",
                          "success",
                          "info",
                          "warning",
                          "danger",
                          "focus",
                          "alternate",
                          "light",
                          "dark",
                          "link"
                        ],
                        function(variant) {
                          return [
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "mb-2 mr-2",
                                attrs: {
                                  "no-flip": "",
                                  text: variant,
                                  variant: variant
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Menus")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Settings")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "h6",
                                  {
                                    staticClass: "dropdown-header",
                                    attrs: { tabindex: "-1" }
                                  },
                                  [_vm._v("Header")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Actions")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "dropdown-divider",
                                  attrs: { tabindex: "-1" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Dividers")]
                                )
                              ]
                            )
                          ]
                        }
                      )
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Split Dropdowns")
                      ]),
                      _vm._v(" "),
                      _vm._l(
                        [
                          "primary",
                          "secondary",
                          "success",
                          "info",
                          "warning",
                          "danger",
                          "focus",
                          "alternate",
                          "light",
                          "dark",
                          "link"
                        ],
                        function(variant) {
                          return [
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "mb-2 mr-2",
                                attrs: {
                                  "no-flip": "",
                                  split: "",
                                  text: variant,
                                  variant: variant
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Menus")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Settings")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "h6",
                                  {
                                    staticClass: "dropdown-header",
                                    attrs: { tabindex: "-1" }
                                  },
                                  [_vm._v("Header")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Actions")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "dropdown-divider",
                                  attrs: { tabindex: "-1" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Dividers")]
                                )
                              ]
                            )
                          ]
                        }
                      )
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Split Outline Dropdowns")
                      ]),
                      _vm._v(" "),
                      _vm._l(
                        [
                          "outline-primary",
                          "outline-secondary",
                          "outline-success",
                          "outline-info",
                          "outline-warning",
                          "outline-danger",
                          "outline-focus",
                          "outline-alternate",
                          "outline-light",
                          "outline-dark",
                          "outline-link"
                        ],
                        function(variant) {
                          return [
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "mb-2 mr-2",
                                attrs: {
                                  "no-flip": "",
                                  split: "",
                                  text: variant,
                                  variant: variant
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Menus")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Settings")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "h6",
                                  {
                                    staticClass: "dropdown-header",
                                    attrs: { tabindex: "-1" }
                                  },
                                  [_vm._v("Header")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Actions")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "dropdown-divider",
                                  attrs: { tabindex: "-1" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Dividers")]
                                )
                              ]
                            )
                          ]
                        }
                      )
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { lg: "6" } }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Outline")
                      ]),
                      _vm._v(" "),
                      _vm._l(
                        [
                          "outline-primary",
                          "outline-secondary",
                          "outline-success",
                          "outline-info",
                          "outline-warning",
                          "outline-danger",
                          "outline-focus",
                          "outline-alternate",
                          "outline-light",
                          "outline-dark",
                          "outline-link"
                        ],
                        function(variant) {
                          return [
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "mb-2 mr-2",
                                attrs: {
                                  "no-flip": "",
                                  text: variant,
                                  variant: variant
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Menus")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Settings")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "h6",
                                  {
                                    staticClass: "dropdown-header",
                                    attrs: { tabindex: "-1" }
                                  },
                                  [_vm._v("Header")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Actions")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "dropdown-divider",
                                  attrs: { tabindex: "-1" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { type: "button", tabindex: "0" }
                                  },
                                  [_vm._v("Dividers")]
                                )
                              ]
                            )
                          ]
                        }
                      )
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Sizing")
                      ]),
                      _vm._v(" "),
                      _vm._l(["sm", "", "lg"], function(size) {
                        return [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "mb-2 mr-2",
                              attrs: {
                                "no-flip": "",
                                text: "Button " + size,
                                variant: "outline-primary",
                                size: size
                              }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button", tabindex: "0" }
                                },
                                [_vm._v("Menus")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button", tabindex: "0" }
                                },
                                [_vm._v("Settings")]
                              ),
                              _vm._v(" "),
                              _c(
                                "h6",
                                {
                                  staticClass: "dropdown-header",
                                  attrs: { tabindex: "-1" }
                                },
                                [_vm._v("Header")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button", tabindex: "0" }
                                },
                                [_vm._v("Actions")]
                              ),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "dropdown-divider",
                                attrs: { tabindex: "-1" }
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button", tabindex: "0" }
                                },
                                [_vm._v("Dividers")]
                              )
                            ]
                          )
                        ]
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Split Sizing")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "m-2",
                          attrs: {
                            "no-flip": "",
                            id: "ddown-lg",
                            size: "lg",
                            text: "Large"
                          }
                        },
                        [
                          _c("b-dropdown-item-button", [_vm._v("Action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item-button", [
                            _vm._v("Another action")
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item-button", [
                            _vm._v("Something else here")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "m-2",
                          attrs: {
                            "no-flip": "",
                            id: "ddown-lg-split",
                            size: "lg",
                            split: "",
                            text: "Large Split"
                          }
                        },
                        [
                          _c("b-dropdown-item-button", [_vm._v("Action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item-button", [
                            _vm._v("Another action")
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item-button", [
                            _vm._v("Something else here...")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "m-2",
                          attrs: {
                            "no-flip": "",
                            id: "ddown-sm",
                            size: "sm",
                            text: "Small"
                          }
                        },
                        [
                          _c("b-dropdown-item-button", [_vm._v("Action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item-button", [
                            _vm._v("Another action")
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item-button", [
                            _vm._v("Something else here...")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "m-2",
                          attrs: {
                            "no-flip": "",
                            id: "ddown-sm-split",
                            size: "sm",
                            split: "",
                            text: "Small Split"
                          }
                        },
                        [
                          _c("b-dropdown-item-button", [_vm._v("Action")]),
                          _vm._v(" "),
                          _c("b-dropdown-item-button", [
                            _vm._v("Another action")
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item-button", [
                            _vm._v("Something else here...")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=template&id=31bd86d8&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=template&id=31bd86d8& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-page-title" }, [
    _c("div", { staticClass: "page-title-wrapper" }, [
      _c("div", { staticClass: "page-title-heading" }, [
        _c("div", { staticClass: "page-title-icon" }, [
          _c("i", { class: _vm.icon })
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            "\n                " + _vm._s(_vm.heading) + "\n                "
          ),
          _c("div", { staticClass: "page-title-subheading" }, [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.subheading) +
                "\n                "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "page-title-actions" }, [
        _c(
          "button",
          {
            staticClass: "btn-shadow mr-3 btn btn-dark",
            attrs: { type: "button" }
          },
          [_c("font-awesome-icon", { attrs: { icon: "star" } })],
          1
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn-shadow d-inline-flex align-items-center btn btn-success",
            attrs: { type: "button" }
          },
          [
            _c("font-awesome-icon", {
              staticClass: "mr-2",
              attrs: { icon: "plus" }
            }),
            _vm._v("\n                Create New\n            ")
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdowns_vue_vue_type_template_id_eb734aae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdowns.vue?vue&type=template&id=eb734aae& */ "./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=template&id=eb734aae&");
/* harmony import */ var _Dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdowns.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdowns_vue_vue_type_template_id_eb734aae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdowns_vue_vue_type_template_id_eb734aae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdowns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=template&id=eb734aae&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=template&id=eb734aae& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_template_id_eb734aae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdowns.vue?vue&type=template&id=eb734aae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Dropdowns.vue?vue&type=template&id=eb734aae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_template_id_eb734aae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_template_id_eb734aae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle_vue_vue_type_template_id_31bd86d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=31bd86d8& */ "./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=template&id=31bd86d8&");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTitle_vue_vue_type_template_id_31bd86d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageTitle_vue_vue_type_template_id_31bd86d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/src/Layout/Components/PageTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=template&id=31bd86d8&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=template&id=31bd86d8& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_31bd86d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=template&id=31bd86d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue?vue&type=template&id=31bd86d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_31bd86d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_31bd86d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);