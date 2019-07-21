(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PageTitle: _Layout_Components_PageTitle_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      heading: 'Badges & Labels',
      subheading: 'Badges and labels are used to offer extra small pieces of info for your content.',
      icon: 'pe-7s-voicemail icon-gradient bg-arielle-smile'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=template&id=77d39b99&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=template&id=77d39b99& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [_vm._v("Colors")]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-primary" }, [
                _vm._v("Primary")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-secondary" }, [
                _vm._v("Secondary")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-success" }, [
                _vm._v("Success")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-info" }, [
                _vm._v("Info")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-warning" }, [
                _vm._v("Warning")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-danger" }, [
                _vm._v("Danger")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-focus" }, [
                _vm._v("Focus")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-alternate" }, [
                _vm._v("Alt")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-light" }, [
                _vm._v("Light")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2 mr-2 badge badge-dark" }, [
                _vm._v("Dark")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "divider" }),
              _vm._v(" "),
              _c("h5", { staticClass: "card-title" }, [_vm._v("Pills")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-primary" },
                [_vm._v("Primary")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-secondary" },
                [_vm._v("Secondary")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-success" },
                [_vm._v("Success")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-info" },
                [_vm._v("Info")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-warning" },
                [_vm._v("Warning")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-danger" },
                [_vm._v("Danger")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-focus" },
                [_vm._v("Focus")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-alternate" },
                [_vm._v("Alt")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-light" },
                [_vm._v("Light")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2 mr-2 badge badge-pill badge-dark" },
                [_vm._v("Dark")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "divider" }),
              _vm._v(" "),
              _c("h5", { staticClass: "card-title" }, [_vm._v("Links")]),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-primary",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Primary")]
              ),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-secondary",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Secondary")]
              ),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-success",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Success")]
              ),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-info",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Info")]
              ),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-warning",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Warning")]
              ),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-danger",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Danger")]
              ),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-focus",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Focus")]
              ),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-alternate",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Alt")]
              ),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-light",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Light")]
              ),
              _c(
                "a",
                {
                  staticClass: "mb-2 mr-2 badge badge-dark",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Dark")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [_vm._v("With Buttons")]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-primary" }, [
                _vm._v("Primary"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-secondary" }, [
                _vm._v("Secondary"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-success" }, [
                _vm._v("Success"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-info" }, [
                _vm._v("Info"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-warning" }, [
                _vm._v("Warning"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-danger" }, [
                _vm._v("Danger"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-focus" }, [
                _vm._v("Focus"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-alternate" }, [
                _vm._v("Alt"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-light" }, [
                _vm._v("Light"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-dark" }, [
                _vm._v("Dark"),
                _c("span", { staticClass: "badge badge-light ml-2" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-link" }, [
                _vm._v("Link 1"),
                _c("span", { staticClass: "badge badge-primary" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-link" }, [
                _vm._v("Link 2"),
                _c("span", { staticClass: "badge badge-success" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-link" }, [
                _vm._v("Link 3"),
                _c("span", { staticClass: "badge badge-danger" }, [
                  _vm._v("NEW")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "mb-2 mr-2 btn btn-link" }, [
                _vm._v("Link 4"),
                _c("span", { staticClass: "badge badge-warning" }, [
                  _vm._v("NEW")
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
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

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badges_vue_vue_type_template_id_77d39b99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badges.vue?vue&type=template&id=77d39b99& */ "./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=template&id=77d39b99&");
/* harmony import */ var _Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badges.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Badges_vue_vue_type_template_id_77d39b99___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Badges_vue_vue_type_template_id_77d39b99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Badges.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=template&id=77d39b99&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=template&id=77d39b99& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_77d39b99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Badges.vue?vue&type=template&id=77d39b99& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Badges.vue?vue&type=template&id=77d39b99&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_77d39b99___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_77d39b99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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