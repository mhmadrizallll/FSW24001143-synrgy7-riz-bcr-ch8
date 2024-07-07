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
var user_event_1 = __importDefault(require("@testing-library/user-event"));
var axios_1 = __importDefault(require("axios"));
var axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
var SearchCars_1 = __importDefault(require("../components/SearchCars"));
var mock = new axios_mock_adapter_1.default(axios_1.default);
var mockCars = [
    {
        id: '1',
        plate: 'B 1234 CD',
        manufacture: 'Toyota',
        model: 'Avanza',
        image: 'image1.jpg',
        rentPerDay: 300000,
        capacity: 7,
        description: 'Family car',
        available: true,
        availableAt: '2023-06-23T08:00:00Z',
        transmission: 'Automatic',
        type: 'SUV',
        year: 2021,
    },
    {
        id: '2',
        plate: 'B 5678 EF',
        manufacture: 'Honda',
        model: 'Civic',
        image: 'image2.jpg',
        rentPerDay: 500000,
        capacity: 4,
        description: 'Sporty car',
        available: false,
        availableAt: '2023-06-23T09:00:00Z',
        transmission: 'Manual',
        type: 'Sedan',
        year: 2022,
    },
];
beforeEach(function () {
    mock.reset();
    mock.onGet('http://localhost:8000/api/cars').reply(200, { data: mockCars });
});
test('renders SearchCars component', function () {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(SearchCars_1.default, {}));
    expect(react_1.screen.getByLabelText(/Tipe Drive/i)).toBeInTheDocument();
    expect(react_1.screen.getByLabelText(/Tanggal/i)).toBeInTheDocument();
    expect(react_1.screen.getByLabelText(/Pilih Waktu/i)).toBeInTheDocument();
    expect(react_1.screen.getByLabelText(/Jumlah Penumpang/i)).toBeInTheDocument();
    expect(react_1.screen.getByText(/Cari Mobil/i)).toBeInTheDocument();
});
test('searches and filters cars correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, react_1.render)((0, jsx_runtime_1.jsx)(SearchCars_1.default, {}));
                user_event_1.default.selectOptions(react_1.screen.getByLabelText(/Tipe Drive/i), 'true');
                user_event_1.default.type(react_1.screen.getByLabelText(/Tanggal/i), '2021');
                user_event_1.default.selectOptions(react_1.screen.getByLabelText(/Pilih Waktu/i), '08:00');
                user_event_1.default.type(react_1.screen.getByLabelText(/Jumlah Penumpang/i), '7');
                react_1.fireEvent.click(react_1.screen.getByTestId('load-btn'));
                return [4 /*yield*/, (0, react_1.waitFor)(function () {
                        expect(react_1.screen.getByText(/No cars available/i)).toBeInTheDocument();
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
test('handles empty search results', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mock.onGet('http://localhost:8000/api/cars').reply(200, { data: [] });
                (0, react_1.render)((0, jsx_runtime_1.jsx)(SearchCars_1.default, {}));
                react_1.fireEvent.click(react_1.screen.getByText(/Cari Mobil/i));
                return [4 /*yield*/, (0, react_1.waitFor)(function () {
                        expect(react_1.screen.getByText(/No cars available/i)).toBeInTheDocument();
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
test('handles API errors', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mock.onGet('http://localhost:8000/api/cars').reply(500);
                (0, react_1.render)((0, jsx_runtime_1.jsx)(SearchCars_1.default, {}));
                react_1.fireEvent.click(react_1.screen.getByTestId('load-btn'));
                return [4 /*yield*/, (0, react_1.waitFor)(function () {
                        expect(react_1.screen.getByTestId('error-message')).toBeInTheDocument();
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
