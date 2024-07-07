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
var react_router_dom_1 = require("react-router-dom");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var ApiContext_1 = require("../Context/ApiContext");
var AdminPage = function () {
    var _a = (0, ApiContext_1.useApi)(), cars = _a.cars, getCars = _a.getCars;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleUpdate = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            navigate("/cars/".concat(id));
            return [2 /*return*/];
        });
    }); };
    var handleDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.delete("http://localhost:8000/api/cars/".concat(id), {
                            headers: {
                                Authorization: "Bearer " + sessionStorage.getItem("token"),
                            },
                        })];
                case 1:
                    _a.sent();
                    react_toastify_1.toast.success("Mobil berhasil dihapus", {
                        position: "top-right",
                        autoClose: 1500,
                    });
                    getCars(); // Ambil ulang data setelah hapus
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error("Error deleting car:", err_1);
                    react_toastify_1.toast.error("Gagal menghapus mobil", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        getCars(); // Ambil data saat komponen dimount
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto py-2", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-center text-4xl font-bold", children: "Halaman Admin" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return navigate("/cars/add"); }, className: "bg-[#5cb85f] text-white py-2 px-4 rounded-sm hover:bg-[#0a800e] transition duration-300 ease-in-out w-auto", children: "Tambah Mobil" }), (0, jsx_runtime_1.jsxs)("table", { className: "container mx-auto border-2 border-slate-700 text-center mt-4", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { className: "border-2 border-slate-700", children: [(0, jsx_runtime_1.jsx)("th", { className: "border-2 border-slate-700", children: "Plat" }), (0, jsx_runtime_1.jsx)("th", { className: "border-2 border-slate-700", children: "Merek" }), (0, jsx_runtime_1.jsx)("th", { className: "border-2 border-slate-700", children: "Model" }), (0, jsx_runtime_1.jsx)("th", { className: "border-2 border-slate-700", children: "Tahun" }), (0, jsx_runtime_1.jsx)("th", { className: "border-2 border-slate-700", children: "Gambar" }), (0, jsx_runtime_1.jsx)("th", { className: "border-2 border-slate-700", children: "Status" }), (0, jsx_runtime_1.jsx)("th", { className: "border-2 border-slate-700", children: "Aksi" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: cars.map(function (car) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "border-2 border-slate-700", children: car.plate }), (0, jsx_runtime_1.jsx)("td", { className: "border-2 border-slate-700", children: car.manufacture }), (0, jsx_runtime_1.jsx)("td", { className: "border-2 border-slate-700", children: car.model }), (0, jsx_runtime_1.jsx)("td", { className: "border-2 border-slate-700", children: car.year }), (0, jsx_runtime_1.jsx)("td", { className: "border-2 border-slate-700 flex justify-center", children: (0, jsx_runtime_1.jsx)("img", { src: car.image, alt: "", className: "w-[100px]" }) }), (0, jsx_runtime_1.jsx)("td", { className: "border-2 border-slate-700", children: car.is_deleted ? "Dihapus" : "Aktif" }), (0, jsx_runtime_1.jsxs)("td", { className: "border-2 border-slate-700", children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return handleUpdate(car.id); }, className: "bg-[#5cb85f] text-white py-2 px-4 rounded-sm hover:bg-[#0a800e] transition duration-300 ease-in-out w-auto", children: "Edit" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return handleDelete(car.id); }, className: "bg-red-500 text-white py-2 px-4 rounded-sm hover:bg-red-700 transition duration-300 ease-in-out w-auto", children: "Hapus" })] })] }, car.id)); }) })] }), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {})] }));
};
exports.default = AdminPage;
