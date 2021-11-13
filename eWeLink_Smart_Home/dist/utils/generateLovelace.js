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
        while (_) try {
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var HASocketClass_1 = __importDefault(require("../class/HASocketClass"));
var CloudDualR3Controller_1 = __importDefault(require("../controller/CloudDualR3Controller"));
var CloudMultiChannelSwitchController_1 = __importDefault(require("../controller/CloudMultiChannelSwitchController"));
var CloudPowerDetectionSwitchController_1 = __importDefault(require("../controller/CloudPowerDetectionSwitchController"));
var CloudSwitchController_1 = __importDefault(require("../controller/CloudSwitchController"));
var CloudTandHModificationController_1 = __importDefault(require("../controller/CloudTandHModificationController"));
var Controller_1 = __importDefault(require("../controller/Controller"));
var DiyDeviceController_1 = __importDefault(require("../controller/DiyDeviceController"));
var LanDualR3Controller_1 = __importDefault(require("../controller/LanDualR3Controller"));
var LanMultiChannelSwitchController_1 = __importDefault(require("../controller/LanMultiChannelSwitchController"));
var LanPowerDetectionSwitchController_1 = __importDefault(require("../controller/LanPowerDetectionSwitchController"));
var LanSwitchController_1 = __importDefault(require("../controller/LanSwitchController"));
var LanTandHModificationController_1 = __importDefault(require("../controller/LanTandHModificationController"));
var generateLovelace = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, title, views, lovelace_1, isDeviceExist, singalSwitchCard, _loop_1, _a, _b, device;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, HASocketClass_1.default.getLovelace()];
            case 1:
                res = _d.sent();
                if (!(res && Array.isArray(res.views))) return [3 /*break*/, 3];
                title = res.title, views = res.views;
                lovelace_1 = { path: '', title: 'eWeLink Smart Home', badges: [], cards: [] };
                // const tmp = _.findIndex(views, { title: 'eWeLink Smart Home' });
                // if (~tmp) {
                //     lovelace = views[tmp];
                // }
                if (views.length) {
                    lovelace_1 = views[0];
                }
                isDeviceExist = function (deviceId) {
                    try {
                        var tmp = JSON.stringify(lovelace_1);
                        return tmp.includes(deviceId);
                    }
                    catch (error) {
                        return false;
                    }
                };
                singalSwitchCard = {
                    type: 'entities',
                    title: 'Switch',
                    state_color: true,
                    show_header_toggle: false,
                    entities: [],
                };
                _loop_1 = function (device) {
                    if (isDeviceExist(device.entityId)) {
                        return "continue";
                    }
                    if (device instanceof DiyDeviceController_1.default || device instanceof CloudSwitchController_1.default || device instanceof CloudPowerDetectionSwitchController_1.default) {
                        singalSwitchCard.entities.push(device.entityId);
                        return "continue";
                    }
                    if (device instanceof LanSwitchController_1.default || device instanceof LanPowerDetectionSwitchController_1.default) {
                        if (device.selfApikey && device.devicekey) {
                            singalSwitchCard.entities.push(device.entityId);
                        }
                        return "continue";
                    }
                    if (device instanceof CloudMultiChannelSwitchController_1.default ||
                        device instanceof LanMultiChannelSwitchController_1.default ||
                        device instanceof CloudDualR3Controller_1.default ||
                        device instanceof LanDualR3Controller_1.default) {
                        if (device.maxChannel === 1 && device.deviceName) {
                            singalSwitchCard.entities.push(device.entityId + "_1");
                            return "continue";
                        }
                        if (!device.maxChannel || !device.deviceName) {
                            return "continue";
                        }
                        var entities = Array.from({ length: device.maxChannel }, function (v, k) {
                            return device.entityId + "_" + (k + 1);
                        });
                        var tmpCard = {
                            type: 'entities',
                            entities: entities,
                            title: device.deviceName,
                            state_color: true,
                            show_header_toggle: true,
                        };
                        var index = lodash_1.default.findIndex(lovelace_1.cards, { title: device.deviceName });
                        if (~index) {
                            lovelace_1.cards[index] = tmpCard;
                        }
                        else {
                            lovelace_1.cards.push(tmpCard);
                        }
                    }
                    if (device instanceof CloudTandHModificationController_1.default || device instanceof LanTandHModificationController_1.default) {
                        if (!device.deviceName) {
                            return "continue";
                        }
                        var tmpCard = {
                            type: 'entities',
                            entities: ["switch." + device.deviceId, "sensor." + device.deviceId + "_t", "sensor." + device.deviceId + "_h"],
                            title: device.deviceName,
                            state_color: true,
                            show_header_toggle: false,
                        };
                        var index = lodash_1.default.findIndex(lovelace_1.cards, { title: device.deviceName });
                        if (~index) {
                            lovelace_1.cards[index] = tmpCard;
                        }
                        else {
                            lovelace_1.cards.push(tmpCard);
                        }
                    }
                };
                try {
                    for (_a = __values(Controller_1.default.deviceMap.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        device = _b.value;
                        _loop_1(device);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // if (~tmp) {
                //     views[tmp] = lovelace;
                // } else {
                //     views.push(lovelace);
                // }
                if (singalSwitchCard.entities.length) {
                    lovelace_1.cards.unshift(singalSwitchCard);
                }
                if (views) {
                    views[0] = lovelace_1;
                }
                return [4 /*yield*/, HASocketClass_1.default.query({
                        type: 'lovelace/config/save',
                        config: __assign(__assign({}, res), { title: title, views: views }),
                    })];
            case 2: return [2 /*return*/, _d.sent()];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = generateLovelace;
