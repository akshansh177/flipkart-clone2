"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Example({ text  }) {
    return /*#__PURE__*/ _jsx("div", {
        className: "fixed top-16 w-56 text-right",
        children: /*#__PURE__*/ _jsxs(Menu, {
            as: "div",
            className: "relative inline-block text-left",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    children: /*#__PURE__*/ _jsxs(Menu.Button, {
                        className: "inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
                        children: [
                            text,
                            /*#__PURE__*/ _jsx(ChevronDownIcon, {
                                className: "ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100",
                                "aria-hidden": "true"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx(Transition, {
                    as: Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /*#__PURE__*/ _jsxs(Menu.Items, {
                        className: "absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "px-1 py-1 ",
                                children: [
                                    /*#__PURE__*/ _jsx(Menu.Item, {
                                        children: ({ active  })=>/*#__PURE__*/ _jsxs("button", {
                                                className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                children: [
                                                    active ? /*#__PURE__*/ _jsx(EditActiveIcon, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }) : /*#__PURE__*/ _jsx(EditInactiveIcon, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    "Edit"
                                                ]
                                            })
                                    }),
                                    /*#__PURE__*/ _jsx(Menu.Item, {
                                        children: ({ active  })=>/*#__PURE__*/ _jsxs("button", {
                                                className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                children: [
                                                    active ? /*#__PURE__*/ _jsx(DuplicateActiveIcon, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }) : /*#__PURE__*/ _jsx(DuplicateInactiveIcon, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    "Duplicate"
                                                ]
                                            })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "px-1 py-1",
                                children: [
                                    /*#__PURE__*/ _jsx(Menu.Item, {
                                        children: ({ active  })=>/*#__PURE__*/ _jsxs("button", {
                                                className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                children: [
                                                    active ? /*#__PURE__*/ _jsx(ArchiveActiveIcon, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }) : /*#__PURE__*/ _jsx(ArchiveInactiveIcon, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    "Archive"
                                                ]
                                            })
                                    }),
                                    /*#__PURE__*/ _jsx(Menu.Item, {
                                        children: ({ active  })=>/*#__PURE__*/ _jsxs("button", {
                                                className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                children: [
                                                    active ? /*#__PURE__*/ _jsx(MoveActiveIcon, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }) : /*#__PURE__*/ _jsx(MoveInactiveIcon, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    "Move"
                                                ]
                                            })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "px-1 py-1",
                                children: /*#__PURE__*/ _jsx(Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ _jsxs("button", {
                                            className: `${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                            children: [
                                                active ? /*#__PURE__*/ _jsx(DeleteActiveIcon, {
                                                    className: "mr-2 h-5 w-5 text-violet-400",
                                                    "aria-hidden": "true"
                                                }) : /*#__PURE__*/ _jsx(DeleteInactiveIcon, {
                                                    className: "mr-2 h-5 w-5 text-violet-400",
                                                    "aria-hidden": "true"
                                                }),
                                                "Delete"
                                            ]
                                        })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
function EditInactiveIcon(props) {
    return /*#__PURE__*/ _jsx("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M4 13V16H7L16 7L13 4L4 13Z",
            fill: "#EDE9FE",
            stroke: "#A78BFA",
            strokeWidth: "2"
        })
    });
}
function EditActiveIcon(props) {
    return /*#__PURE__*/ _jsx("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M4 13V16H7L16 7L13 4L4 13Z",
            fill: "#8B5CF6",
            stroke: "#C4B5FD",
            strokeWidth: "2"
        })
    });
}
function DuplicateInactiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M4 4H12V12H4V4Z",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 8H16V16H8V8Z",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function DuplicateActiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M4 4H12V12H4V4Z",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 8H16V16H8V8Z",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            })
        ]
    });
}
function ArchiveInactiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "5",
                y: "8",
                width: "10",
                height: "8",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "4",
                y: "4",
                width: "12",
                height: "4",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 12H12",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function ArchiveActiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "5",
                y: "8",
                width: "10",
                height: "8",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "4",
                y: "4",
                width: "12",
                height: "4",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 12H12",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function MoveInactiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M10 4H16V10",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16 4L8 12",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 6H4V16H14V12",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function MoveActiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M10 4H16V10",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16 4L8 12",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 6H4V16H14V12",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            })
        ]
    });
}
function DeleteInactiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "5",
                y: "6",
                width: "10",
                height: "10",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M3 6H17",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 6V4H12V6",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function DeleteActiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "5",
                y: "6",
                width: "10",
                height: "10",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M3 6H17",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 6V4H12V6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function HeaderLink({ Icon , text  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "w-full flex items-center justify-around",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "group relative dropdown px-2 hover:text-blue-600 cursor-pointer font-medium text-sm tracking-wide hover:bg-white",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        classNameName: "flex justify-center items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: text
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                classNameName: "h-5 w-5 opacity-40 hover:rotate-180"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "group-hover:block dropdown-menu absolute hidden h-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "top-0 w-48 bg-white shadow px-6 py-8 hover:bg-white",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "block text-gray-500 font-medium text-sm hover:text-blue-700 cursor-pointer",
                                        children: "Item"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "block text-gray-500 font-medium text-sm hover:text-blue-700 cursor-pointer",
                                        children: "Item 2"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "block text-gray-500 font-medium text-sm hover:text-blue-700 cursor-pointer",
                                        children: "Item 3"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "block text-gray-500 font-medium text-sm hover:text-blue-700 cursor-pointer",
                                        children: "Item 4"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "block text-gray-500 font-medium text-sm hover:text-blue-700 cursor-pointer",
                                        children: "Item 5"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderLink);


/***/ }),

/***/ 9632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// UNUSED EXPORTS: getServerSideProps

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/HeaderLink.js
var HeaderLink = __webpack_require__(605);
// EXTERNAL MODULE: external "@mui/icons-material/KeyboardArrowDown"
var KeyboardArrowDown_ = __webpack_require__(4845);
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
;// CONCATENATED MODULE: ./components/Navbar.js





function Navbar({ provider  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#2973F0] text-white text-base py-3 px-6 flex flex-row space-x-8 font-semibold justify-center items-center ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-2xl italic hover:cursor-pointer",
                children: "Flipkart"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "relative text-gray-400 focus-within:text-gray-600 block w-4/12 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-7 w-7 absolute pl-2 mt-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "search",
                        name: "Search",
                        placeholder: "Search for products,brands and more",
                        className: " text-sm shadow-lg border border-gray-800/30 rounded-sm py-4 px-4 bg-white placeholder-gray-400 text-gray-700 appearance-none h-8 w-full block pl-8 focus:outline-none"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: " font-semibold text-base py-1 px-10 bg-slate-50 text-[#2973F0]",
                onClick: ()=>(0,react_namespaceObject.signIn)(provider.id, {
                        callbackUrl: "/index.js"
                    })
                ,
                children: "Login"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hover:cursor-pointer",
                children: "Become a seller"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderLink/* default */.Z, {
                Icon: (KeyboardArrowDown_default()),
                text: "More"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row justify-center items-center hover:cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6 pr-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        })
                    }),
                    "Cart"
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Navbar = (Navbar);
async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    };
}


/***/ }),

/***/ 3512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@mui/icons-material"
const icons_material_namespaceObject = require("@mui/icons-material");
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowForwardIos"
const ArrowForwardIos_namespaceObject = require("@mui/icons-material/ArrowForwardIos");
var ArrowForwardIos_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIos_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Divider"
const Divider_namespaceObject = require("@mui/material/Divider");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-currency-formatter"
const external_react_currency_formatter_namespaceObject = require("react-currency-formatter");
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Favorite"
const Favorite_namespaceObject = require("@mui/icons-material/Favorite");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Star"
const Star_namespaceObject = require("@mui/icons-material/Star");
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_namespaceObject);
;// CONCATENATED MODULE: ./components/ProductCard.js





function ProductCard({ id , title , category , price , image , description , rating , count  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " flex flex-col space-y-1 p-2 hover:shadow-lg cursor-pointer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                className: "text-gray-500 text-sm font-light justify-end items-end"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: image,
                height: 240,
                width: 80,
                objectFit: "contain",
                alt: "ProductImage"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-sm",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-gray-500 text-xs",
                children: category
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-green-700 text-white text-xs flex flex-row items-center space-x-1 px-1 pr-1 rounded-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: rating && rating.rate
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                className: "text-xs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-1 text-xs text-gray-400",
                        children: [
                            "(",
                            rating && rating.count,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/fp-assured.png",
                        width: 50,
                        height: 15,
                        alt: "assured"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                    quantity: price,
                    currency: "INR"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-xs",
                children: "free delivery"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-sm text-green-700",
                children: "Bank offer"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/ProductPage.js





function ProductPage({ products  }) {
    const SortingList1 = [
        "Popuarity",
        "Price - Low to High",
        "Price - High to Low",
        "Newest First"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col bg-white w-9/12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex p-2 pl-3 text-xs text-gray-600 font-light items-center space-x-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "hover:text-blue-500",
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((ArrowForwardIos_default()), {
                        className: "text-xs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "hover:text-blue-500",
                        children: "Gaming"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row items-baseline pl-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "font-semibold",
                        children: "Gaming"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " text-xs text-gray-700 font-light pl-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "(Showing 1 - 40 products of 41,701 products)"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-1 pl-3 text-sm flex flex-row space-x-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "font-semibold",
                        children: "Sort By"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: SortingList1.map((SortingList)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "px-3 space-x-4 hover:text-blue-500 hover:underline hover:underline-offset-4",
                                href: "https://google.com",
                                children: SortingList
                            }, SortingList)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-4 grid-rows-3 p-5 space-x-4",
                children: products.map(({ id , title , category , price , image , description , rating  })=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCard, {
                        title: title,
                        description: description,
                        image: image,
                        price: price,
                        category: category,
                        rating: rating
                    }, id)
                )
            })
        ]
    });
};


/***/ }),

/***/ 6188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(605);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7695);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Dropdown__WEBPACK_IMPORTED_MODULE_4__]);
_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function SecondNav() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white p-2 px-40 text-gray-800 flex flex-row font-semibold justify-between items-center text-sm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                Icon: (_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default()),
                text: "Electronics"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                Icon: (_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default()),
                text: "Tvs & Appliances"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                Icon: (_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default()),
                text: "Men"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                Icon: (_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default()),
                text: "Women"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                Icon: (_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default()),
                text: "Baby & Kids"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                Icon: (_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default()),
                text: "Home & Furniture"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                Icon: (_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_3___default()),
                text: "Sports,Books & More"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "https://google.com",
                className: "hover:text-blue-600",
                children: "Offer Zone"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "https://google.com",
                className: "hover:text-blue-600",
                children: "Grocery"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Sidebar() {
    const sideList1 = [
        "Gaming Console",
        "Gaming Laptops",
        "Games",
        "Gaming Accesories",
        "Gaming headsets"
    ];
    const brandList1 = [
        "Logitech",
        "Hp",
        "Asus",
        "Aorus",
        "Leggion"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white w-3/12 flex flex-col divide-y-2 space-y-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "text-xl font-medium pl-3 pt-4",
                children: "Filters"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pl-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-xs font-medium p-2",
                        children: "CATEGORIES"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " pl-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-base",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                                className: "flex text-left text-sm font-semibold",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChevronUpIcon, {
                                                        className: `${open ? "rotate-180 transform" : ""} h-5 w-5 text-gray-500`
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Gaming"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                                className: " flex flex-col space-y-1 pl-8 pt-2 text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        children: sideList1.map((sideList)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "flex flex-col",
                                                                href: "https://google.com",
                                                                children: sideList
                                                            }, sideList)
                                                        )
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://google.com",
                                                            className: "text-blue-700",
                                                            children: "Show +1 more"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-3 pt-3 pl-3 flex space-x-5 items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4___default()), {
                        size: "small"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: "/fp-assured.png",
                        width: 70,
                        height: 20,
                        alt: "assured"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-sm pl-5 p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
                        children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                                        className: "flex text-left text-sm font-medium justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "BRAND"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChevronUpIcon, {
                                                className: `${open ? "rotate-180 transform" : ""} h-5 w-5 text-gray-500`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                                        className: " flex flex-col space-y-1 pl-3 pt-2 text-sm text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "flex-end"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                        sx: {
                                                            color: "action.active",
                                                            mr: 1,
                                                            my: 0.5
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        id: "input-with-sx",
                                                        label: "Search",
                                                        variant: "standard"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    brandList1.map((brandList)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "flex items-center",
                                                            href: "https://google.com",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                    size: "small"
                                                                }),
                                                                brandList
                                                            ]
                                                        }, brandList)
                                                    ),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://google.com",
                                                    className: "text-blue-700",
                                                    children: "Show +1234 more"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9632);
/* harmony import */ var _components_SecondNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6188);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5348);
/* harmony import */ var _components_ProductPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SecondNav__WEBPACK_IMPORTED_MODULE_3__, _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__]);
([_components_SecondNav__WEBPACK_IMPORTED_MODULE_3__, _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Home({ products  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Flipkart-Clone"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Made by Akshansh Mathur"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SecondNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "flex flex-row space-x-4 p-2 pl-11",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductPage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                products: products
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then((res)=>res.json(JSON.stringify())
    );
    return {
        props: {
            products
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 4845:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 8330:
/***/ ((module) => {

module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();