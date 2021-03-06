(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PageTitle: _Layout_Components_PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      heading: 'Tooltips & Popovers',
      subheading: 'These Vue components are used to add interaction or extra information for your app\'s content.',
      icon: 'pe-7s-note2 icon-gradient bg-happy-fisher',
      placements: ['topright', 'top', 'topleft', 'bottomright', 'bottom', 'bottomleft', 'righttop', 'right', 'lefttop', 'rightbottom', 'left', 'leftbottom']
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=template&id=49f86af0&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=template&id=49f86af0& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("h5", { staticClass: "card-title" }, [_vm._v("Tooltips")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c(
                "b-btn",
                {
                  staticClass: "mr-2",
                  attrs: { id: "exButton1", variant: "primary" }
                },
                [_vm._v("\n          Tooltip on top\n        ")]
              ),
              _vm._v(" "),
              _c(
                "b-btn",
                {
                  staticClass: "mr-2",
                  attrs: { id: "exButton2", variant: "primary" }
                },
                [_vm._v("\n          Tooltip on right\n        ")]
              ),
              _vm._v(" "),
              _c(
                "b-btn",
                {
                  staticClass: "mr-2",
                  attrs: { id: "exButton3", variant: "primary" }
                },
                [_vm._v("\n          Tooltip on bottom\n        ")]
              ),
              _vm._v(" "),
              _c("b-btn", { attrs: { id: "exButton4", variant: "primary" } }, [
                _vm._v("\n          Tooltip on left\n        ")
              ]),
              _vm._v(" "),
              _c("b-tooltip", {
                attrs: {
                  target: "exButton1",
                  placement: "top",
                  title: "Tooltip on top"
                }
              }),
              _vm._v(" "),
              _c("b-tooltip", {
                attrs: {
                  target: "exButton2",
                  placement: "right",
                  title: "Tooltip on right"
                }
              }),
              _vm._v(" "),
              _c("b-tooltip", {
                attrs: {
                  target: "exButton3",
                  placement: "bottom",
                  title: "Tooltip on bottom"
                }
              }),
              _vm._v(" "),
              _c("b-tooltip", {
                attrs: {
                  target: "exButton4",
                  placement: "left",
                  title: "Tooltip on left"
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "main-card mb-3 card" }, [
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("h5", { staticClass: "card-title" }, [_vm._v("Popovers")]),
            _vm._v(" "),
            _c("h5", { staticClass: "my-3" }, [_vm._v("Placement")]),
            _vm._v(" "),
            _c(
              "b-row",
              _vm._l(_vm.placements, function(placement) {
                return _c(
                  "b-col",
                  {
                    key: placement,
                    staticClass: "py-4 text-center",
                    attrs: { md: "4" }
                  },
                  [
                    _c(
                      "b-btn",
                      {
                        attrs: {
                          id: "exPopover1-" + placement,
                          variant: "primary"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(placement) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("b-popover", {
                      attrs: {
                        target: "exPopover1-" + placement,
                        placement: placement,
                        title: "Popover!",
                        triggers: "hover focus",
                        content: "Placement " + placement
                      }
                    })
                  ],
                  1
                )
              }),
              1
            )
          ],
          1
        )
      ])
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

/***/ "./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TooltipsPopovers_vue_vue_type_template_id_49f86af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TooltipsPopovers.vue?vue&type=template&id=49f86af0& */ "./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=template&id=49f86af0&");
/* harmony import */ var _TooltipsPopovers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TooltipsPopovers.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TooltipsPopovers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TooltipsPopovers_vue_vue_type_template_id_49f86af0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TooltipsPopovers_vue_vue_type_template_id_49f86af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipsPopovers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TooltipsPopovers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipsPopovers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=template&id=49f86af0&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=template&id=49f86af0& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipsPopovers_vue_vue_type_template_id_49f86af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TooltipsPopovers.vue?vue&type=template&id=49f86af0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Components/TooltipsPopovers.vue?vue&type=template&id=49f86af0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipsPopovers_vue_vue_type_template_id_49f86af0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipsPopovers_vue_vue_type_template_id_49f86af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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