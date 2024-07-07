"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./App.css");
var aos_1 = __importDefault(require("aos"));
require("aos/dist/aos.css");
var react_router_dom_1 = require("react-router-dom");
var GetCars_1 = __importDefault(require("./Page/GetCars"));
var Home_1 = __importDefault(require("./Page/Home"));
var ProtectedPage_1 = __importDefault(require("./dashboard/ProtectedPage"));
var LoginPage_1 = __importDefault(require("./dashboard/LoginPage"));
var AdminPage_1 = __importDefault(require("./dashboard/AdminPage"));
var google_1 = require("@react-oauth/google");
var UpdatePage_1 = __importDefault(require("./dashboard/UpdatePage"));
var CreateCar_1 = __importDefault(require("./dashboard/CreateCar"));
var ApiContext_1 = require("./Context/ApiContext");
var CLIENT_ID = "60480331234-8u31ccmifsgmtnfc2podsteg0apeptp5.apps.googleusercontent.com";
function App() {
    (0, react_1.useEffect)(function () {
        aos_1.default.init({
            duration: 1000,
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(google_1.GoogleOAuthProvider, { clientId: CLIENT_ID, children: (0, jsx_runtime_1.jsx)(ApiContext_1.ApiProvider, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(LoginPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/*", element: (0, jsx_runtime_1.jsx)(ProtectedPage_1.default, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "admin", element: (0, jsx_runtime_1.jsx)(AdminPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "cars", element: (0, jsx_runtime_1.jsx)(GetCars_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "cars/add", element: (0, jsx_runtime_1.jsx)(CreateCar_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "cars/:id", element: (0, jsx_runtime_1.jsx)(UpdatePage_1.default, {}) })] }) }) })] }) }) }) }));
}
exports.default = App;
