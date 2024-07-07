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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_slick_1 = __importDefault(require("react-slick"));
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var slide1_png_1 = __importDefault(require("../assets/img/slide1.png"));
var testi1_png_1 = __importDefault(require("../assets/img/testi1.png"));
var testi2_png_1 = __importDefault(require("../assets/img/testi2.png"));
var testimonials = [
    {
        img: slide1_png_1.default,
        stars: 5,
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
        name: "Son Goku 32, Bromo",
    },
    {
        img: testi1_png_1.default,
        stars: 3,
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
        name: "John Dee 32, Bromo",
    },
    {
        img: testi2_png_1.default,
        stars: 4,
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
        name: "John Dee 32, Bromo",
    },
];
var TestimonialCarousel = function () {
    var sliderRef = (0, react_1.useRef)(null);
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    var handlePrev = function () {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    var handleNext = function () {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    return ((0, jsx_runtime_1.jsxs)("section", { id: "testimonial", className: "bg-[#f1f3ff] py-12 overflow-hidden", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center space-y-4 pb-6", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold", children: "Testimonial" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-light", children: "Berbagai review positif dari para pelanggan kami" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsx)(react_slick_1.default, __assign({ ref: sliderRef }, settings, { children: testimonials.map(function (testimonial, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "p-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col space-y-4 md:flex-row justify-center items-center border-2 shadow-lg rounded-lg h-full p-6 gap-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-3/12 flex justify-center", children: (0, jsx_runtime_1.jsx)("img", { src: testimonial.img, alt: "slide".concat(index + 1), width: "100", height: "100", className: "rounded-full" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "w-9/12 space-y-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-center gap-2 md:block", children: __spreadArray([], Array(testimonial.stars), true).map(function (_, starIndex) { return ((0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faStar, className: "text-yellow-500" }, starIndex)); }) }), (0, jsx_runtime_1.jsx)("p", { className: "font-light text-sm text-slate-700", children: testimonial.text }), (0, jsx_runtime_1.jsx)("p", { className: "font-medium", children: testimonial.name })] })] }) }, index)); }) })), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center mt-10", children: [(0, jsx_runtime_1.jsx)(PrevArrow, { onClick: handlePrev }), (0, jsx_runtime_1.jsx)(NextArrow, { onClick: handleNext })] })] })] }));
};
var NextArrow = function (_a) {
    var onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)("button", { type: "button", onClick: onClick, children: (0, jsx_runtime_1.jsxs)("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-[#5cb85f] hover:text-white", children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faChevronRight, className: "fa-md" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Berikutnya" })] }) }));
};
var PrevArrow = function (_a) {
    var onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)("button", { type: "button", onClick: onClick, children: (0, jsx_runtime_1.jsxs)("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-[#5cb85f] hover:text-white", children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faChevronLeft, className: "fa-md" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Sebelumnya" })] }) }));
};
exports.default = TestimonialCarousel;
