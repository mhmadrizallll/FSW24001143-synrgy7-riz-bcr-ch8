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
var react_1 = require("@testing-library/react");
var axios_1 = __importDefault(require("axios"));
var LoginPage_1 = __importDefault(require("../dashboard/LoginPage"));
jest.mock("axios"); // Mock axios module
// Mock the GoogleLogin component
jest.mock("@react-oauth/google", function () { return ({
    GoogleLogin: function (_a) {
        var onSuccess = _a.onSuccess, onError = _a.onError;
        return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return onSuccess({ credential: "google_token" }); }, children: "Mock Google Login" }));
    },
}); });
// Mock parseJwt function
var mockParseJwt = function (token) {
    if (token === "mock_jwt_token") {
        return { role: "admin" };
    }
    if (token === "google_mock_jwt_token") {
        return { role: "user" };
    }
    return {};
};
// Add parseJwt to the global window object
global.parseJwt = mockParseJwt;
describe("LoginPage", function () {
    beforeEach(function () {
        sessionStorage.clear(); // Clear session storage before each test
        jest.restoreAllMocks(); // Clear mocks
    });
    it("should login with username and password and redirect based on role", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockPost, token, _a, getByLabelText, getByText;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    mockPost = axios_1.default.post;
                    token = "mock_jwt_token";
                    // Mock login API call
                    mockPost.mockResolvedValueOnce({ data: { token: token }, status: 200 });
                    // Mock session storage for token
                    jest
                        .spyOn(window.sessionStorage.__proto__, "getItem")
                        .mockImplementation(function (key) {
                        if (key === "token")
                            return token;
                        return null;
                    });
                    _a = (0, react_1.render)((0, jsx_runtime_1.jsx)(LoginPage_1.default, {})), getByLabelText = _a.getByLabelText, getByText = _a.getByText;
                    // Fill out form fields
                    react_1.fireEvent.change(getByLabelText("Username"), { target: { value: "user" } });
                    react_1.fireEvent.change(getByLabelText("Password"), {
                        target: { value: "password" },
                    });
                    // Simulate form submission
                    react_1.fireEvent.click(getByText("Login"));
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(mockPost).toHaveBeenCalledWith("http://localhost:8000/api/users/login", { username: "user", password: "password" });
                            expect(sessionStorage.getItem("token")).toBe(token);
                            var decodedToken = mockParseJwt(token);
                            if (decodedToken.role === "admin" || decodedToken.role === "superadmin") {
                                expect(window.location.href).toBe("/admin");
                            }
                            else {
                                expect(window.location.href).toBe("/");
                            }
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should login with Google and redirect based on role", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockPost, userToken, getByText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockPost = axios_1.default.post;
                    userToken = "google_mock_jwt_token";
                    // Mock Google login API call
                    mockPost.mockResolvedValueOnce({ data: { token: userToken }, status: 200 });
                    // Mock session storage for token
                    jest
                        .spyOn(window.sessionStorage.__proto__, "getItem")
                        .mockImplementation(function (key) {
                        if (key === "token")
                            return userToken;
                        return null;
                    });
                    getByText = (0, react_1.render)((0, jsx_runtime_1.jsx)(LoginPage_1.default, {})).getByText;
                    // Simulate Google login button click
                    react_1.fireEvent.click(getByText("Mock Google Login"));
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(mockPost).toHaveBeenCalledWith("http://localhost:8000/api/users/auth/google", { token: "google_token" }, {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                },
                            });
                            expect(sessionStorage.getItem("token")).toBe(userToken);
                            var decodedToken = mockParseJwt(userToken);
                            if (decodedToken.role === "admin" || decodedToken.role === "superadmin") {
                                expect(window.location.pathname).toBe("/admin");
                            }
                            else {
                                expect(window.location.pathname).toBe("/");
                            }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should display an error message on login failure", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockPost, _a, getByLabelText, getByText, findByText;
        return __generator(this, function (_b) {
            mockPost = axios_1.default.post;
            // Mock login API call failure
            mockPost.mockRejectedValueOnce(new Error("Login failed"));
            _a = (0, react_1.render)((0, jsx_runtime_1.jsx)(LoginPage_1.default, {})), getByLabelText = _a.getByLabelText, getByText = _a.getByText, findByText = _a.findByText;
            // Fill out form fields
            react_1.fireEvent.change(getByLabelText("Username"), { target: { value: "user" } });
            react_1.fireEvent.change(getByLabelText("Password"), {
                target: { value: "password" },
            });
            // Simulate form submission
            react_1.fireEvent.click(react_1.screen.getByTestId("login-btn"));
            return [2 /*return*/];
        });
    }); });
});
