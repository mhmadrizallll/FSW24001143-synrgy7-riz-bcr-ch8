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
var CreateCar_1 = __importDefault(require("../dashboard/CreateCar"));
jest.mock('axios'); // Mock axios module
describe('CreatePage', function () {
    it('should upload image to CDN and create a car', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockPost, _a, getByLabelText, getByText, file;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    mockPost = axios_1.default.post;
                    mockPost.mockImplementation(function (url, data) {
                        if (url === 'https://api.cloudinary.com/v1_1/dgaeoqlao/image/upload') {
                            return Promise.resolve({ data: { url: 'http://cdn.example.com/test.png' } });
                        }
                        return Promise.resolve({ data: { id: '1', message: 'Car created successfully' } });
                    });
                    _a = (0, react_1.render)((0, jsx_runtime_1.jsx)(CreateCar_1.default, {})), getByLabelText = _a.getByLabelText, getByText = _a.getByText;
                    // Fill out form fields
                    react_1.fireEvent.change(getByLabelText('Plate'), { target: { value: 'ABC123' } });
                    react_1.fireEvent.change(getByLabelText('Manufacture'), { target: { value: 'Toyota' } });
                    react_1.fireEvent.change(getByLabelText('Model'), { target: { value: 'Camry' } });
                    react_1.fireEvent.change(getByLabelText('Rent Per Day'), { target: { value: '100000' } });
                    react_1.fireEvent.change(getByLabelText('Capacity'), { target: { value: '5' } });
                    react_1.fireEvent.change(getByLabelText('Description'), { target: { value: 'Test car' } });
                    react_1.fireEvent.change(getByLabelText('Available At'), { target: { value: '08:00' } });
                    react_1.fireEvent.change(getByLabelText('Transmission'), { target: { value: 'automatic' } });
                    react_1.fireEvent.change(getByLabelText('Type'), { target: { value: 'Sedan' } });
                    react_1.fireEvent.change(getByLabelText('Year'), { target: { value: '2023' } });
                    // Simulate checkbox change
                    react_1.fireEvent.click(getByLabelText('Available'));
                    file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
                    Object.defineProperty(getByLabelText('Image'), 'files', {
                        value: [file],
                    });
                    react_1.fireEvent.change(getByLabelText('Image'));
                    // Click on Create button
                    react_1.fireEvent.click(getByText('Create'));
                    // Wait for async actions to complete
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            // Assert or expect statements based on success or failure conditions
                            expect(mockPost).toHaveBeenCalledTimes(2); // Ensure axios.post was called twice (CDN upload and car creation)
                            expect(mockPost).toHaveBeenCalledWith('https://api.cloudinary.com/v1_1/dgaeoqlao/image/upload', expect.any(FormData));
                            expect(mockPost).toHaveBeenCalledWith('http://localhost:8000/api/cars', expect.any(FormData), {
                                headers: {
                                    Authorization: 'Bearer ' + sessionStorage.getItem('token'), // Example mock token
                                },
                            });
                            // Example: Assert success message or redirection
                            var successMessage = getByText('Mobil berhasil ditambahkan');
                            expect(successMessage).toBeInTheDocument();
                            // Example: Assert redirection after success
                            setTimeout(function () {
                                expect(window.location.href).toBe('/admin');
                            }, 1500); // Adjust timeout as necessary
                        })];
                case 1:
                    // Wait for async actions to complete
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Add more tests as needed for edge cases, error handling, etc.
});
