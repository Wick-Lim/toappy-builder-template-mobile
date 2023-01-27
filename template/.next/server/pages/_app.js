(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 366:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_f65433', '__Roboto_Fallback_f65433', Helvetica, Arial, sans-serif","fontStyle":"normal"},
	"className": "__className_f65433"
};


/***/ }),

/***/ 913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/theme.js
var theme = __webpack_require__(374);
// EXTERNAL MODULE: ./src/createEmotionCache.js
var createEmotionCache = __webpack_require__(863);
;// CONCATENATED MODULE: ./pages/_app.js









// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                theme: theme/* default */.Z,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("style", {
                        children: `
          html, body, #__next {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        `
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
}
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    emotionCache: (external_prop_types_default()).object,
    pageProps: (external_prop_types_default()).object.isRequired
};


/***/ }),

/***/ 153:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [147], () => (__webpack_exec__(913)));
module.exports = __webpack_exports__;

})();