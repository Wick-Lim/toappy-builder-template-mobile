"use strict";
exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

const isBrowser = typeof document !== "undefined";
// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "mui-style",
        insertionPoint
    });
}


/***/ }),

/***/ 374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* reexport default from dynamic */ _next_font_google_target_css_path_src_theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _next_font_google_target_css_path_src_theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(366);
/* harmony import */ var _next_font_google_target_css_path_src_theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);



// Create a theme instance.
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        primary: {
            main: "#556cd6"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
        }
    },
    typography: {
        fontFamily: (_next_font_google_target_css_path_src_theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily)
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);



/***/ })

};
;