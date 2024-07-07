"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var axios_1 = __importDefault(require("axios"));
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var CreatePage = function () {
    var _a = (0, react_1.useState)(null), image = _a[0], setImage = _a[1];
    var _b = (0, react_1.useState)(null), file = _b[0], setFile = _b[1];
    var _c = (0, react_1.useState)({
        plate: "",
        manufacture: "",
        model: "",
        image: "",
        rentPerDay: 0,
        capacity: 0,
        description: "",
        availableAt: "",
        available: false,
        transmission: "",
        type: "",
        year: 0,
    }), newCar = _c[0], setNewCar = _c[1];
    var uploadImageCdn = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData, response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!file)
                        return [2 /*return*/];
                    formData = new FormData();
                    formData.append("file", file);
                    formData.append("upload_preset", "wwdcz4c5");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.post("https://api.cloudinary.com/v1_1/dgaeoqlao/image/upload", formData)];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response.data.url];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleImageChange = function (e) {
        if (e.target.files && e.target.files[0]) {
            var file_1 = e.target.files[0];
            setFile(file_1);
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                if (reader_1.readyState === 2) {
                    setImage(reader_1.result);
                }
            };
            reader_1.readAsDataURL(file_1);
        }
    };
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setNewCar(function (prevCars) {
            var _a;
            return (__assign(__assign({}, prevCars), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleCheckboxChange = function (e) {
        var _a = e.target, name = _a.name, checked = _a.checked;
        setNewCar(function (prevCars) {
            var _a;
            return (__assign(__assign({}, prevCars), (_a = {}, _a[name] = checked, _a)));
        });
    };
    var create = function () { return __awaiter(void 0, void 0, void 0, function () {
        var imageUrl, newCars, formData, response, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imageUrl = null;
                    if (!file) return [3 /*break*/, 2];
                    return [4 /*yield*/, uploadImageCdn()];
                case 1:
                    imageUrl = _a.sent();
                    _a.label = 2;
                case 2:
                    newCars = __assign(__assign({}, newCar), { image: imageUrl });
                    console.log("ini newCars", newCars);
                    formData = new FormData();
                    formData.append("plate", newCars.plate);
                    formData.append("manufacture", newCars.manufacture);
                    formData.append("model", newCars.model);
                    formData.append("rentPerDay", newCars.rentPerDay.toString());
                    formData.append("capacity", newCars.capacity.toString());
                    formData.append("description", newCars.description);
                    formData.append("availableAt", newCars.availableAt);
                    formData.append("available", newCars.available.toString());
                    formData.append("transmission", newCars.transmission);
                    formData.append("type", newCars.type);
                    formData.append("year", newCars.year.toString());
                    if (file) {
                        formData.append("image", file);
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, axios_1.default.post("http://localhost:8000/api/cars", formData, {
                            headers: {
                                Authorization: "Bearer " + sessionStorage.getItem("token"),
                            },
                        })];
                case 4:
                    response = _a.sent();
                    data = response.data;
                    console.log("ini diterima", data);
                    setNewCar({
                        plate: "",
                        manufacture: "",
                        model: "",
                        image: "",
                        rentPerDay: 0,
                        capacity: 0,
                        description: "",
                        availableAt: "",
                        available: false,
                        transmission: "",
                        type: "",
                        year: 0,
                    });
                    setFile(null);
                    setImage(null);
                    react_toastify_1.toast.success("Mobil berhasil ditambahkan", {
                        position: "top-right",
                        autoClose: 1500,
                    });
                    setTimeout(function () {
                        window.location.href = "/admin";
                    }, 1500);
                    return [3 /*break*/, 6];
                case 5:
                    err_2 = _a.sent();
                    console.log(err_2);
                    react_toastify_1.toast.error("Gagal menambahkan mobil", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold py-8", children: "Create Car" }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4 flex flex-wrap", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "plate", className: "block text-sm font-medium leading-6 text-gray-900", children: "Plate" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("input", { type: "text", name: "plate", id: "plate", autoComplete: "plate", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", placeholder: "Input plate", onChange: handleChange, value: newCar.plate }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "manufacture", className: "block text-sm font-medium leading-6 text-gray-900", children: "Manufacture" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("input", { type: "text", name: "manufacture", id: "manufacture", autoComplete: "manufacture", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", placeholder: "Input manufacture", onChange: handleChange, value: newCar.manufacture }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "model", className: "block text-sm font-medium leading-6 text-gray-900", children: "Model" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("input", { type: "text", name: "model", id: "model", autoComplete: "model", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", placeholder: "Input model", onChange: handleChange, value: newCar.model }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "rentPerDay", className: "block text-sm font-medium leading-6 text-gray-900", children: "Rent Per Day" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("input", { type: "number", name: "rentPerDay", id: "rentPerDay", autoComplete: "rentPerDay", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", placeholder: "Input rent per day", onChange: handleChange, value: newCar.rentPerDay }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "capacity", className: "block text-sm font-medium leading-6 text-gray-900", children: "Capacity" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("input", { type: "number", name: "capacity", id: "capacity", autoComplete: "capacity", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", placeholder: "Input capacity", onChange: handleChange, value: newCar.capacity }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "description", className: "block text-sm font-medium leading-6 text-gray-900", children: "Description" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("textarea", { name: "description", id: "description", autoComplete: "description", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", placeholder: "Input description", onChange: handleChange, value: newCar.description }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "availableAt", className: "block text-sm font-medium leading-6 text-gray-900", children: "Available At" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsxs)("select", { name: "availableAt", id: "availableAt", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", onChange: handleChange, value: newCar.availableAt, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select availability" }), (0, jsx_runtime_1.jsx)("option", { value: "08:00", children: "08:00 WIB" }), (0, jsx_runtime_1.jsx)("option", { value: "09:00", children: "09:00 WIB" }), (0, jsx_runtime_1.jsx)("option", { value: "10:00", children: "10:00 WIB" }), (0, jsx_runtime_1.jsx)("option", { value: "11:00", children: "11:00 WIB" })] }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "available", className: "block text-sm font-medium leading-6 text-gray-900", children: "Available" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("input", { type: "checkbox", name: "available", id: "available", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", onChange: handleCheckboxChange, checked: newCar.available }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "transmission", className: "block text-sm font-medium leading-6 text-gray-900", children: "Transmission" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsxs)("select", { name: "transmission", id: "transmission", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", onChange: handleChange, value: newCar.transmission, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select transmission" }), (0, jsx_runtime_1.jsx)("option", { value: "automatic", children: "Automatic" }), (0, jsx_runtime_1.jsx)("option", { value: "manual", children: "Manual" })] }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "type", className: "block text-sm font-medium leading-6 text-gray-900", children: "Type" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("input", { type: "text", name: "type", id: "type", autoComplete: "type", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", placeholder: "Input type", onChange: handleChange, value: newCar.type }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "year", className: "block text-sm font-medium leading-6 text-gray-900", children: "Year" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("input", { type: "number", name: "year", id: "year", autoComplete: "year", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", placeholder: "Input year", onChange: handleChange, value: newCar.year }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 w-6/12", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "image", className: "block text-sm font-medium leading-6 text-gray-900", children: "Image" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: (0, jsx_runtime_1.jsx)("input", { type: "file", name: "image", id: "image", autoComplete: "image", className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6", onChange: handleImageChange }) }), image && ((0, jsx_runtime_1.jsx)("img", { src: image, alt: "Preview", className: "w-1/3" }))] })] })] }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", onClick: create, children: "Create" }), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {})] }));
};
exports.default = CreatePage;
