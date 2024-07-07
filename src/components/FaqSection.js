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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var FAQSection = function () {
    // State untuk mengontrol status buka/tutup accordion
    var _a = (0, react_1.useState)({
        "animated-collapse-1": false,
        "animated-collapse-2": false,
        "animated-collapse-3": false,
        "animated-collapse-4": false,
        "animated-collapse-5": false,
    }), accordionOpen = _a[0], setAccordionOpen = _a[1];
    // Fungsi untuk menangani klik pada tombol accordion
    var toggleAccordion = function (targetId) {
        setAccordionOpen(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[targetId] = !prevState[targetId], _a)));
        });
    };
    return ((0, jsx_runtime_1.jsx)("section", { id: "faq", className: "py-12 bg-[#ffffff]", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto flex flex-col lg:flex-row p-4 lg:p-0 space-y-8 lg:space-y-0 lg:space-x-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full lg:w-6/12 space-y-4 text-center lg:text-left", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold", children: "Frequently Asked Question" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-light", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:w-6/12 space-y-4", children: [
                        {
                            id: "animated-collapse-1",
                            question: "Apa saja syarat yang dibutuhkan?",
                        },
                        {
                            id: "animated-collapse-2",
                            question: "Berapa hari minimal sewa mobil lepas kunci?",
                        },
                        {
                            id: "animated-collapse-3",
                            question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
                        },
                        {
                            id: "animated-collapse-4",
                            question: "Apakah Ada biaya antar-jemput?",
                        },
                        {
                            id: "animated-collapse-5",
                            question: "Bagaimana jika terjadi kecelakaan?",
                        },
                    ].map(function (_a) {
                        var id = _a.id, question = _a.question;
                        return ((0, jsx_runtime_1.jsxs)("div", { className: "relative mb-3 shadow-sm border-2 rounded-md", children: [(0, jsx_runtime_1.jsx)("h6", { className: "mb-0", children: (0, jsx_runtime_1.jsxs)("button", { className: "relative flex items-center w-full p-4 font-light text-sm text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group", onClick: function () { return toggleAccordion(id); }, "aria-expanded": accordionOpen[id], children: [(0, jsx_runtime_1.jsx)("span", { children: question }), (0, jsx_runtime_1.jsx)("i", { className: "absolute right-4 pt-1 text-base transition-transform fa fa-chevron-".concat(accordionOpen[id] ? "up" : "down", " group-open:rotate-180") })] }) }), (0, jsx_runtime_1.jsx)("div", { "data-collapse": id, className: "overflow-hidden transition-max-height duration-500 ease-in-out ".concat(accordionOpen[id] ? "max-h-96" : "max-h-0"), children: (0, jsx_runtime_1.jsx)("div", { className: "p-4 text-sm leading-normal text-blue-gray-500/80", children: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams." }) })] }, id));
                    }) })] }) }));
};
exports.default = FAQSection;
