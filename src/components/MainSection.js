"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var car_main_png_1 = __importDefault(require("../assets/img/car-main.png"));
var MainSection = function () {
    return ((0, jsx_runtime_1.jsx)("section", { id: "main", className: "bg-[#f1f3ff] py-12 pt-32", children: (0, jsx_runtime_1.jsxs)("div", { className: "container-fluid flex flex-col md:flex-row items-center justify-center p-4 md:p-8 md:pr-0", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full flex flex-col mx-auto md:p-20", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold text-start md:text-left leading-relaxed md:leading-relaxed font-['Helvetica Neue']", children: "Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)" }), (0, jsx_runtime_1.jsx)("p", { className: "font-light text-md text-slate-700 mt-4 md:w-[70%] w-full", children: "Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam." }), (0, jsx_runtime_1.jsx)("div", { className: "mt-8", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/cars", children: (0, jsx_runtime_1.jsx)("button", { className: "bg-[#5cb85f] text-white py-2 px-4 rounded-sm hover:bg-[#0a800e] transition duration-300 ease-in-out w-auto", children: "Mulai Sewa Mobil" }) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full mt-12 md:mt-0", children: (0, jsx_runtime_1.jsx)("img", { src: car_main_png_1.default, alt: "Illustration", className: "w-full" }) })] }) }));
};
exports.default = MainSection;
