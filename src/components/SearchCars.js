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
var DataCars_1 = __importDefault(require("./DataCars"));
var SearchCars = function () {
    var _a = (0, react_1.useState)(""), tipeDriver = _a[0], setTipeDriver = _a[1];
    var _b = (0, react_1.useState)(""), tanggal = _b[0], setTanggal = _b[1];
    var _c = (0, react_1.useState)(""), waktuJemput = _c[0], setWaktuJemput = _c[1];
    var _d = (0, react_1.useState)(""), jumlahPenumpang = _d[0], setJumlahPenumpang = _d[1];
    var _e = (0, react_1.useState)([]), cars = _e[0], setCars = _e[1];
    var _f = (0, react_1.useState)(""), error = _f[0], setError = _f[1];
    var handleSearch = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, dataArray, filteredCars, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get("http://localhost:8000/api/cars", {
                            headers: {
                                Authorization: "Bearer ".concat(sessionStorage.getItem("token")),
                            },
                        })];
                case 1:
                    response = _a.sent();
                    dataArray = response.data.data;
                    filteredCars = dataArray.filter(function (car) {
                        return car.available.toString() === tipeDriver ||
                            car.capacity === parseInt(jumlahPenumpang) ||
                            car.year === parseInt(tanggal) ||
                            car.availableAt === waktuJemput;
                    });
                    setCars(filteredCars);
                    if (filteredCars.length === 0) {
                        setError("No cars available");
                    }
                    else {
                        setError("");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    setError("Failed to fetch cars");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("section", { id: "banner-main", className: "container mx-auto relative", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full bg-[#f1f3ff] absolute top-0 md:relative md:top-0 lg:top-[-130px] rounded-md shadow-xl py-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row p-4 gap-4 items-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-3/12", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium leading-6 text-gray-900", htmlFor: "tipeDriver", "data-testid": "tipeDriver", children: "Tipe Drive" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-1.5", children: (0, jsx_runtime_1.jsxs)("select", { id: "tipeDriver", name: "tipeDriver", value: tipeDriver, onChange: function (e) { return setTipeDriver(e.target.value); }, className: "block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", children: [(0, jsx_runtime_1.jsx)("option", { disabled: true, value: "", className: "text-gray-400", children: "Pilih Tipe Drive" }), (0, jsx_runtime_1.jsx)("option", { value: "true", children: "Dengan supir" }), (0, jsx_runtime_1.jsx)("option", { value: "false", children: "Tanpa supir (Lepas kunci)" })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-3/12", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium leading-6 text-gray-900", htmlFor: "tanggal", children: "Tanggal" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-1.5", children: (0, jsx_runtime_1.jsx)("input", { type: "date", id: "tanggal", name: "tanggal", value: tanggal, onChange: function (e) { return setTanggal(e.target.value); }, className: "block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-3/12", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium leading-6 text-gray-900", htmlFor: "waktuJemput", children: "Pilih Waktu" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-1.5", children: (0, jsx_runtime_1.jsxs)("select", { id: "waktuJemput", name: "waktuJemput", value: waktuJemput, onChange: function (e) { return setWaktuJemput(e.target.value); }, className: "block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", children: [(0, jsx_runtime_1.jsx)("option", { disabled: true, value: "", className: "text-gray-400", children: "Pilih Waktu" }), (0, jsx_runtime_1.jsx)("option", { value: "08:00", children: "08:00 WIB" }), (0, jsx_runtime_1.jsx)("option", { value: "09:00", children: "09:00 WIB" }), (0, jsx_runtime_1.jsx)("option", { value: "10:00", children: "10:00 WIB" }), (0, jsx_runtime_1.jsx)("option", { value: "11:00", children: "11:00 WIB" }), (0, jsx_runtime_1.jsx)("option", { value: "12:00", children: "12:00 WIB" })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-3/12", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium leading-6 text-gray-900", htmlFor: "jumlahPenumpang", children: "Jumlah Penumpang (Optional)" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-1.5", children: (0, jsx_runtime_1.jsx)("input", { type: "number", id: "jumlahPenumpang", name: "jumlahPenumpang", value: jumlahPenumpang, onChange: function (e) { return setJumlahPenumpang(e.target.value); }, className: "block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", placeholder: "Jumlah Penumpang" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-2/12 flex justify-center md:justify-end", children: (0, jsx_runtime_1.jsx)("button", { id: "load-btn", onClick: handleSearch, "data-testid": "load-btn", className: "bg-[#5cb85f] text-white py-1.5 px-4 rounded-sm hover:bg-[#0a800e] transition duration-300 ease-in-out w-full md:w-auto", children: "Cari Mobil" }) })] }) }) }), error && (0, jsx_runtime_1.jsx)("div", { "data-testid": "error-message", children: error }), (0, jsx_runtime_1.jsx)(DataCars_1.default, { cars: cars })] }));
};
exports.default = SearchCars;
