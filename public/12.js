(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
//
//
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
      heading: 'Cards',
      subheading: 'Wide selection of cards with multiple styles, borders, actions and hover effects.',
      icon: 'pe-7s-stopwatch icon-gradient bg-amy-crisp'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=template&id=6a536aec&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=template&id=6a536aec& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Basic Example")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Card with Subtitle")
              ]),
              _c("h6", { staticClass: "card-subtitle" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis eni"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3 card card-body" }, [
            _c("h5", { staticClass: "card-title" }, [
              _vm._v("Special Title Treatment")
            ]),
            _vm._v(
              "With supporting text below as a natural lead-in to additional content.\n            "
            ),
            _c("button", { staticClass: "btn btn-primary mt-2" }, [
              _vm._v("Go somewhere")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3 text-center card card-body" }, [
            _c("h5", { staticClass: "card-title" }, [
              _vm._v("Special Title Treatment")
            ]),
            _vm._v(
              "With supporting text below as a natural lead-in to additional content.\n            "
            ),
            _c("button", { staticClass: "btn btn-danger mt-2" }, [
              _vm._v("Go somewhere")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3 text-right card card-body" }, [
            _c("h5", { staticClass: "card-title" }, [
              _vm._v("Special Title Treatment")
            ]),
            _vm._v(
              "With supporting text below as a natural lead-in to additional content.\n            "
            ),
            _c("button", { staticClass: "btn btn-outline-focus mt-2" }, [
              _vm._v("Go somewhere")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-header" }, [_vm._v("Header")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Special Title Treatment")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content.\n              "
              ),
              _c("button", { staticClass: "btn btn-warning mt-2" }, [
                _vm._v("Go somewhere")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer" }, [_vm._v("Footer")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                width: "100%",
                src:
                  "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [_vm._v("Card title")]),
              _c("h6", { staticClass: "card-subtitle" }, [
                _vm._v("Card subtitle")
              ]),
              _vm._v(
                "Some quick example text to build on the card title and make up the bulk of the card's content.\n              "
              ),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("button", { staticClass: "btn btn-secondary" }, [
                _vm._v("Button")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [_vm._v("Card Title")]),
              _vm._v(
                "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n              "
              ),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("Last updated 3 mins ago")
              ])
            ]),
            _vm._v(" "),
            _c("img", {
              staticClass: "card-img-bottom",
              attrs: {
                width: "100%",
                src:
                  "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
                alt: "Card image cap"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [_vm._v("Card title")]),
              _c("h6", { staticClass: "mb-0 card-subtitle" }, [
                _vm._v("Card subtitle")
              ])
            ]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                width: "100%",
                src:
                  "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v(
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              ),
              _c("br"),
              _c("br"),
              _c(
                "a",
                {
                  staticClass: "card-link",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Card Link")]
              ),
              _c(
                "a",
                {
                  staticClass: "card-link",
                  attrs: { href: "javascript:void(0);" }
                },
                [_vm._v("Another\n              Link")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                width: "100%",
                src:
                  "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [_vm._v("Card Title")]),
              _vm._v(
                "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n              "
              ),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("Last updated 3 mins ago")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "div",
            {
              staticClass:
                "card-shadow-primary border mb-3 card card-body border-primary"
            },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Primary Card Shadow")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card-shadow-secondary border mb-3 card card-body border-secondary"
            },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Secondary Card Shadow")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card-shadow-warning border mb-3 card card-body border-warning"
            },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Warning Card Shadow")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card-shadow-danger border mb-3 card card-body border-danger"
            },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Danger Card Shadow")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card-shadow-success border mb-3 card card-body border-success"
            },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Success Card Shadow")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card-shadow-info border mb-3 card card-body border-info"
            },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Info Card Shadow")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card-shadow-focus border mb-3 card card-body border-focus"
            },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Focus Card Shadow")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card-shadow-alternate border mb-3 card card-body border-alternate"
            },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Alternate Card Shadow")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3 card text-white" }, [
            _c("img", {
              staticClass: "card-img",
              attrs: {
                width: "100%",
                src:
                  "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666",
                alt: "Card image cap"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-img-overlay" }, [
              _c("h5", { staticClass: "text-white card-title" }, [
                _vm._v("Card Title")
              ]),
              _vm._v(
                "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n              "
              ),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("small", { staticClass: "text-white" }, [
                _vm._v("Last updated 3 mins ago")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "div",
            { staticClass: "card-border mb-3 card card-body border-primary" },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Primary Card Border")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-border mb-3 card card-body border-secondary" },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Secondary Card Border")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-border mb-3 card card-body border-warning" },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Warning Card Border")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-border mb-3 card card-body border-danger" },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Danger Card Border")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-border mb-3 card card-body border-success" },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Success Card Border")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-border mb-3 card card-body border-info" },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Info Card Border")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-border mb-3 card card-body border-focus" },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Focus Card Border")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-border mb-3 card card-body border-alternate" },
            [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Alternate Card Border")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "mb-3 card text-white bg-primary" }, [
            _c("div", { staticClass: "card-header" }, [_vm._v("Header")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer" }, [_vm._v("Footer")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "mb-3 card text-white card-body",
              staticStyle: {
                "background-color": "rgb(51, 51, 51)",
                "border-color": "rgb(51, 51, 51)"
              }
            },
            [
              _c("h5", { staticClass: "text-white card-title" }, [
                _vm._v("Special Title Treatment")
              ]),
              _vm._v(
                "With supporting text below as a\n            natural lead-in to additional content.\n          "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-3 card text-white card-body bg-primary" },
            [
              _c("h5", { staticClass: "text-white card-title" }, [
                _vm._v("Special Title Treatment")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-3 card text-white card-body bg-success" },
            [
              _c("h5", { staticClass: "text-white card-title" }, [
                _vm._v("Special Title Treatment")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-3 card text-white card-body bg-danger" },
            [
              _c("h5", { staticClass: "text-white card-title" }, [
                _vm._v("Special Title Treatment")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3 card text-white card-body bg-info" }, [
            _c("h5", { staticClass: "text-white card-title" }, [
              _vm._v("Special Title Treatment")
            ]),
            _vm._v(
              "With supporting text below as a natural lead-in to additional content."
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-3 card text-white card-body bg-warning" },
            [
              _c("h5", { staticClass: "text-white card-title" }, [
                _vm._v("Special Title Treatment")
              ]),
              _vm._v(
                "With supporting text below as a natural lead-in to additional content."
              )
            ]
          )
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

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards_vue_vue_type_template_id_6a536aec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards.vue?vue&type=template&id=6a536aec& */ "./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=template&id=6a536aec&");
/* harmony import */ var _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cards_vue_vue_type_template_id_6a536aec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cards_vue_vue_type_template_id_6a536aec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=template&id=6a536aec&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=template&id=6a536aec& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_6a536aec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=template&id=6a536aec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/src/DemoPages/Elements/Cards.vue?vue&type=template&id=6a536aec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_6a536aec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_6a536aec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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