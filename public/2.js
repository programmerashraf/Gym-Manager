(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_Components_PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layout/Components/PageTitle.vue */ "./resources/js/components/dashboard/src/Layout/Components/PageTitle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      heading: 'Accordions',
      subheading: 'Accordions represent collapsable component with extended functionality.',
      icon: 'pe-7s-diamond icon-gradient bg-warm-flame',
      text: "\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n      vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n      synth nesciunt you probably haven't heard of them accusamus labore VHS.\n    "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=template&id=46bada55&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=template&id=46bada55& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: "main-card mb-3", attrs: { title: "Collapse" } },
                [
                  _c(
                    "b-btn",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle.collapse1",
                          modifiers: { collapse1: true }
                        }
                      ],
                      attrs: { variant: "primary" }
                    },
                    [_vm._v("Toggle Collapse")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-collapse",
                    { staticClass: "mt-2", attrs: { id: "collapse1" } },
                    [
                      _c(
                        "b-card",
                        [
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v("Collapse contents Here")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-btn",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle.collapse1_inner",
                                  modifiers: { collapse1_inner: true }
                                }
                              ],
                              attrs: { size: "sm" }
                            },
                            [_vm._v("Toggle Inner Collapse")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              staticClass: "mt-2",
                              attrs: { id: "collapse1_inner" }
                            },
                            [_c("b-card", [_vm._v("Hello!")])],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                { staticClass: "main-card mb-3", attrs: { title: "Collapse" } },
                [
                  _c(
                    "b-btn",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle.collapseA.collapseB",
                          modifiers: { collapseA: true, collapseB: true }
                        }
                      ]
                    },
                    [_vm._v("Toggle Both Collapse A and B")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-collapse",
                    { staticClass: "mt-2", attrs: { id: "collapseA" } },
                    [
                      _c("b-card", [
                        _vm._v(
                          "\n            I am collapsable content A!\n          "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-collapse",
                    { staticClass: "mt-2", attrs: { id: "collapseB" } },
                    [
                      _c("b-card", [
                        _vm._v(
                          "\n            I am collapsable content B!\n          "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                { staticClass: "main-card mb-3", attrs: { title: "Collapse" } },
                [
                  _c(
                    "b-btn",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle.collapse3",
                          modifiers: { collapse3: true }
                        }
                      ],
                      staticClass: "m-1"
                    },
                    [_vm._v("Toggle Collapse")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-collapse",
                    { attrs: { visible: "", id: "collapse3" } },
                    [
                      _c("b-card", [
                        _vm._v("\n            I should start open!\n          ")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              [
                _c(
                  "div",
                  { attrs: { role: "tablist" } },
                  [
                    _c(
                      "b-card",
                      { staticClass: "mb-1", attrs: { "no-body": "" } },
                      [
                        _c(
                          "b-card-header",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.accordion1",
                                modifiers: { accordion1: true }
                              }
                            ],
                            staticClass: "p-1",
                            attrs: { "header-tag": "header", role: "tab" }
                          },
                          [
                            _c("div", { staticClass: "pl-2 pr-2 d-block" }, [
                              _vm._v(
                                "\n                Accordion 1\n              "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          {
                            attrs: {
                              id: "accordion1",
                              visible: "",
                              accordion: "my-accordion",
                              role: "tabpanel"
                            }
                          },
                          [
                            _c("b-card-body", [
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                  I start opened because "
                                ),
                                _c("code", [_vm._v("visible")]),
                                _vm._v(" is "),
                                _c("code", [_vm._v("true")])
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(_vm.text) +
                                    "\n                "
                                )
                              ])
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      { staticClass: "mb-1", attrs: { "no-body": "" } },
                      [
                        _c(
                          "b-card-header",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.accordion2",
                                modifiers: { accordion2: true }
                              }
                            ],
                            staticClass: "p-1",
                            attrs: { "header-tag": "header", role: "tab" }
                          },
                          [
                            _c("div", { staticClass: "pl-2 pr-2 d-block" }, [
                              _vm._v(
                                "\n                Accordion 2\n              "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          {
                            attrs: {
                              id: "accordion2",
                              accordion: "my-accordion",
                              role: "tabpanel"
                            }
                          },
                          [
                            _c("b-card-body", [
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(_vm.text) +
                                    "\n                "
                                )
                              ])
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      { staticClass: "mb-1", attrs: { "no-body": "" } },
                      [
                        _c(
                          "b-card-header",
                          {
                            directives: [
                              {
                                name: "b-toggle",
                                rawName: "v-b-toggle.accordion3",
                                modifiers: { accordion3: true }
                              }
                            ],
                            staticClass: "p-1",
                            attrs: { "header-tag": "header", role: "tab" }
                          },
                          [
                            _c("div", { staticClass: "pl-2 pr-2 d-block" }, [
                              _vm._v(
                                "\n                Accordion 3\n              "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          {
                            attrs: {
                              id: "accordion3",
                              accordion: "my-accordion",
                              role: "tabpanel"
                            }
                          },
                          [
                            _c("b-card-body", [
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(_vm.text) +
                                    "\n                "
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
              ]
            ],
            2
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

/***/ "./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accordions_vue_vue_type_template_id_46bada55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordions.vue?vue&type=template&id=46bada55& */ "./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=template&id=46bada55&");
/* harmony import */ var _Accordions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accordions.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Accordions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Accordions_vue_vue_type_template_id_46bada55___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Accordions_vue_vue_type_template_id_46bada55___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Accordions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=template&id=46bada55&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=template&id=46bada55& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordions_vue_vue_type_template_id_46bada55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Accordions.vue?vue&type=template&id=46bada55& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Components/Accordions.vue?vue&type=template&id=46bada55&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordions_vue_vue_type_template_id_46bada55___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordions_vue_vue_type_template_id_46bada55___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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