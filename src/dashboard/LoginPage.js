"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var axios_1 = __importDefault(require("axios"));
var google_1 = require("@react-oauth/google");
var LoginPage = function () {
    var _a = (0, react_1.useState)(""), username = _a[0], setUsername = _a[1];
    var _b = (0, react_1.useState)(""), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(null), error = _c[0], setError = _c[1];
    (0, react_1.useEffect)(function () {
        // Check if user is already logged in (by checking sessionStorage)
        var token = sessionStorage.getItem("token");
        if (token) {
            handleRoleRedirect();
        }
    }, []);
    var handleRoleRedirect = function () {
        var token = sessionStorage.getItem("token");
        if (token) {
            try {
                // Decode your JWT token to get user role
                var decodedToken = parseJwt(token);
                var role = decodedToken.role; // Assuming role is stored in token
                if (role === "admin" || role === "superadmin") {
                    window.location.href = "/admin";
                }
                else {
                    window.location.href = "/";
                }
            }
            catch (error) {
                console.error("Error decoding token:", error);
                // Handle error if token cannot be decoded
            }
        }
    };
    var handleLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, token, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.post("http://localhost:8000/api/users/login", {
                            username: username,
                            password: password,
                        })];
                case 2:
                    response = _a.sent();
                    console.log("Response status:", response.status);
                    console.log("Response data:", response.data);
                    if (response.status === 200) {
                        token = response.data.token;
                        sessionStorage.setItem("token", token);
                        handleRoleRedirect(); // Redirect based on role after successful login
                    }
                    else {
                        setError("Login failed, please try again.");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error("Login error:", err_1);
                    setError("Login failed, please try again.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onSuccess = function (res) { return __awaiter(void 0, void 0, void 0, function () {
        var token, response, userToken, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = res.credential;
                    console.log("Google token:", token);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.post("http://localhost:8000/api/users/auth/google", {
                            token: token,
                        }, {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        })];
                case 2:
                    response = _a.sent();
                    userToken = response.data.token;
                    sessionStorage.setItem("token", userToken);
                    handleRoleRedirect(); // Redirect based on role after successful login
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.error("Google login error:", err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onError = function () {
        console.error("Login Failed:");
        setError("Login failed, please try again.");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center min-h-screen bg-gray-100 flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-md p-8 space-y-4 bg-white shadow-md rounded-md", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold text-center", children: "Login" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleLogin, className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "username", className: "block text-sm font-medium text-gray-700", children: "Username" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "username", value: username, onChange: function (e) { return setUsername(e.target.value); }, className: "block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm", required: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", id: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, className: "block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm", required: true })] }), error && (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-red-600", children: error }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { "data-testid": "login-btn", type: "submit", className: "w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300", children: "Login" }) })] })] }), (0, jsx_runtime_1.jsx)(google_1.GoogleLogin, { onSuccess: onSuccess, onError: onError })] }));
};
exports.default = LoginPage;
// Function to parse JWT token (example, modify based on your JWT structure)
function parseJwt(token) {
    try {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(atob(base64)
            .split("")
            .map(function (c) { return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2); })
            .join(""));
        return JSON.parse(jsonPayload);
    }
    catch (e) {
        return {};
    }
}
