(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_Components_PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Layout/Components/PageTitle.vue */ "./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue");
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
    PageTitle: _Layout_Components_PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      heading: 'Standard Buttons',
      subheading: 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!',
      icon: 'pe-7s-plane icon-gradient bg-tempting-azure',
      selected: [],
      // Must be an array reference!
      options: [{
        text: 'Orange',
        value: 'orange'
      }, {
        text: 'Apple',
        value: 'apple'
      }, {
        text: 'Pineapple',
        value: 'pineapple'
      }, {
        text: 'Grape',
        value: 'grape'
      }],
      selected2: 'radio1',
      options2: [{
        text: 'Radio 1',
        value: 'radio1'
      }, {
        text: 'Radio 3',
        value: 'radio2'
      }, {
        text: 'Radio 3 (disabled)',
        value: 'radio3',
        disabled: true
      }, {
        text: 'Radio 4',
        value: 'radio4'
      }]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=template&id=1d414154&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=template&id=1d414154& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
                        _vm._v("Solid")
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
                              "b-button",
                              {
                                staticClass: "mr-2 mb-2",
                                attrs: { variant: variant }
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(variant) +
                                    "\n                "
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
                        _vm._v("Color Transition")
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
                              "b-button",
                              {
                                staticClass: "mr-2 mb-2 btn-transition",
                                attrs: { variant: variant }
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(variant) +
                                    "\n                "
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
                        _vm._v("Color Transition no Borders")
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
                              "b-button",
                              {
                                staticClass:
                                  "mr-2 mb-2 border-0 btn-transition",
                                attrs: { variant: variant }
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(variant) +
                                    "\n                "
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
                        _vm._v("Hover Shine")
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
                              "b-button",
                              {
                                staticClass:
                                  "mr-2 mb-2 btn-hover-shine btn-transition",
                                attrs: { variant: variant }
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(variant) +
                                    "\n                "
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
                        _vm._v("Active State")
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
                              "b-button",
                              {
                                staticClass: "mr-2 mb-2",
                                attrs: { pressed: true, variant: variant }
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(variant) +
                                    "\n                "
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
                        _vm._v("Disabled")
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
                              "b-button",
                              {
                                staticClass: "mr-2 mb-2",
                                attrs: { disabled: "", variant: variant }
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(variant) +
                                    "\n                "
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
                        _vm._v("Block Level")
                      ]),
                      _vm._v(" "),
                      _vm._l(["sm", "", "lg"], function(size) {
                        return [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-2 mb-2",
                              attrs: {
                                block: "",
                                variant: "primary",
                                size: size
                              }
                            },
                            [
                              _vm._v(
                                "\n                  Block " +
                                  _vm._s(size) +
                                  "\n                "
                              )
                            ]
                          )
                        ]
                      })
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
                        _vm._v("Wider")
                      ]),
                      _vm._v(" "),
                      _vm._l(["sm", "", "lg"], function(size) {
                        return [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn-wide mr-2 mb-2",
                              attrs: { variant: "primary", size: size }
                            },
                            [
                              _vm._v(
                                "\n                  Wider " +
                                  _vm._s(size) +
                                  "\n                "
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
                        _vm._v("Sizing")
                      ]),
                      _vm._v(" "),
                      _vm._l(["sm", "", "lg"], function(size) {
                        return [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-2 mb-2",
                              attrs: { variant: "primary", size: size }
                            },
                            [
                              _vm._v(
                                "\n                  Button " +
                                  _vm._s(size) +
                                  "\n                "
                              )
                            ]
                          )
                        ]
                      })
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
                        _vm._v("Checkbox Buttons")
                      ]),
                      _vm._v(" "),
                      [
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c("b-form-checkbox-group", {
                              attrs: {
                                buttons: "",
                                name: "butons1",
                                options: _vm.options
                              },
                              model: {
                                value: _vm.selected,
                                callback: function($$v) {
                                  _vm.selected = $$v
                                },
                                expression: "selected"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "divider" }),
                            _vm._v(" "),
                            _c("b-form-checkbox-group", {
                              attrs: {
                                buttons: "",
                                "button-variant": "primary",
                                size: "lg",
                                name: "buttons2",
                                options: _vm.options
                              },
                              model: {
                                value: _vm.selected,
                                callback: function($$v) {
                                  _vm.selected = $$v
                                },
                                expression: "selected"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "divider" }),
                            _vm._v(" "),
                            _c("b-form-checkbox-group", {
                              attrs: {
                                buttons: "",
                                stacked: "",
                                options: _vm.options
                              },
                              model: {
                                value: _vm.selected,
                                callback: function($$v) {
                                  _vm.selected = $$v
                                },
                                expression: "selected"
                              }
                            })
                          ],
                          1
                        )
                      ]
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
                        _vm._v("Radio Buttons")
                      ]),
                      _vm._v(" "),
                      [
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c("b-form-radio-group", {
                              attrs: {
                                id: "btnradios1",
                                buttons: "",
                                options: _vm.options2,
                                name: "radiosBtnDefault"
                              },
                              model: {
                                value: _vm.selected2,
                                callback: function($$v) {
                                  _vm.selected2 = $$v
                                },
                                expression: "selected2"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "divider" }),
                            _vm._v(" "),
                            _c("b-form-radio-group", {
                              attrs: {
                                id: "btnradios2",
                                buttons: "",
                                "button-variant": "outline-primary",
                                size: "lg",
                                options: _vm.options2,
                                name: "radioBtnOutline"
                              },
                              model: {
                                value: _vm.selected2,
                                callback: function($$v) {
                                  _vm.selected2 = $$v
                                },
                                expression: "selected2"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "divider" }),
                            _vm._v(" "),
                            _c("b-form-radio-group", {
                              attrs: {
                                id: "btnradios3",
                                buttons: "",
                                stacked: "",
                                options: _vm.options2,
                                name: "radioBtnStacked"
                              },
                              model: {
                                value: _vm.selected2,
                                callback: function($$v) {
                                  _vm.selected2 = $$v
                                },
                                expression: "selected2"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ],
                    2
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

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Standard_vue_vue_type_template_id_1d414154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Standard.vue?vue&type=template&id=1d414154& */ "./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=template&id=1d414154&");
/* harmony import */ var _Standard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Standard.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Standard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Standard_vue_vue_type_template_id_1d414154___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Standard_vue_vue_type_template_id_1d414154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Standard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Standard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Standard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=template&id=1d414154&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=template&id=1d414154& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Standard_vue_vue_type_template_id_1d414154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Standard.vue?vue&type=template&id=1d414154& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Buttons/Standard.vue?vue&type=template&id=1d414154&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Standard_vue_vue_type_template_id_1d414154___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Standard_vue_vue_type_template_id_1d414154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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