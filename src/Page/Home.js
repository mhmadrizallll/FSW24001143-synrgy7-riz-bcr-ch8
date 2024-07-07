"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var MainSection_1 = __importDefault(require("../components/MainSection"));
var Navbar_1 = __importDefault(require("../components/Navbar"));
var OurSection_1 = __importDefault(require("../components/OurSection"));
var WhyUsSection_1 = __importDefault(require("../components/WhyUsSection"));
// import TestimonialSection from "../components/TestimonialSection";
var TestimonialSection_1 = __importDefault(require("../components/TestimonialSection"));
var GettingStartedSection_1 = __importDefault(require("../components/GettingStartedSection"));
var FaqSection_1 = __importDefault(require("../components/FaqSection"));
var Footer_1 = __importDefault(require("../components/Footer"));
var HomePage = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(MainSection_1.default, {}), (0, jsx_runtime_1.jsx)(OurSection_1.default, {}), (0, jsx_runtime_1.jsx)(WhyUsSection_1.default, {}), (0, jsx_runtime_1.jsx)(TestimonialSection_1.default, {}), (0, jsx_runtime_1.jsx)(GettingStartedSection_1.default, {}), (0, jsx_runtime_1.jsx)(FaqSection_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = HomePage;
