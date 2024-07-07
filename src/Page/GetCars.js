"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var MainSection_1 = __importDefault(require("../components/MainSection"));
var Navbar_1 = __importDefault(require("../components/Navbar"));
var SearchCars_1 = __importDefault(require("../components/SearchCars"));
var GetCars = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(MainSection_1.default, {}), (0, jsx_runtime_1.jsx)(SearchCars_1.default, {})] }));
};
exports.default = GetCars;
