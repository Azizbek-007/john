"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
var common_1 = require("@nestjs/common");
var axios_1 = require("@nestjs/axios");
var axios_2 = require("axios");
var rxjs_1 = require("rxjs");
var Members_1 = require("../entity/Members");
var Product_1 = require("../entity/Product");
var Statistika_1 = require("../entity/Statistika");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var OrderService = /** @class */ (function () {
    function OrderService(membersRepos, productRespos, OrdersRep, httpService) {
        this.membersRepos = membersRepos;
        this.productRespos = productRespos;
        this.OrdersRep = OrdersRep;
        this.httpService = httpService;
    }
    OrderService.prototype.SendChannel = function (body) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var TEXT, summa, phone_number, _b, _c, iterator, ProductName, category_name, e_1_1, UserOrder, lang_text, user_lang, keyboard, key, url;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        TEXT = "";
                        summa = 0;
                        return [4 /*yield*/, this.membersRepos.findOneBy({ user_id: body['user_id'] })];
                    case 1:
                        phone_number = (_d.sent());
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 8, 9, 14]);
                        _b = __asyncValues(body['orders']);
                        _d.label = 3;
                    case 3: return [4 /*yield*/, _b.next()];
                    case 4:
                        if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 7];
                        iterator = _c.value;
                        return [4 /*yield*/, this.productRespos.findOne({
                                where: {
                                    id: iterator.product_id
                                },
                                relations: {
                                    category: true
                                }
                            })];
                    case 5:
                        ProductName = (_d.sent());
                        category_name = JSON.parse(JSON.stringify(ProductName.category)).name;
                        TEXT += "".concat(category_name, " ").concat(ProductName.name, " ").concat(iterator.count, "X - ").concat(iterator.price, "\n");
                        summa = +Number(summa) + Number(iterator.price);
                        _d.label = 6;
                    case 6: return [3 /*break*/, 3];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _d.trys.push([9, , 12, 13]);
                        if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(_b)];
                    case 10:
                        _d.sent();
                        _d.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14:
                        TEXT += "\nsumma: ".concat(summa, "\ntel: ").concat(phone_number.phone_number);
                        console.log(TEXT);
                        return [4 /*yield*/, this.OrdersRep.save(this.OrdersRep.create({
                                product_name: TEXT,
                                user_id: String(body['user_id'])
                            }))];
                    case 15:
                        UserOrder = _d.sent();
                        lang_text = {
                            "text": {
                                "qq": "Буйыртпаны қай тәризде алыуды қәлейсиз:",
                                "ru": "Как вы предпочитайте получить ваш заказ?",
                                "uz": "Buyurtmani qay tarizda olishni hohlaysiz:"
                            },
                            "awa": {
                                "qq": "Жеткизип бериу арқалы",
                                "ru": "С помощью доставки",
                                "uz": "Yetkazib berish",
                            },
                            "yaq": {
                                "qq": "Өзим барып алып кетемен",
                                "ru": "Сам(а) заберу",
                                "uz": "O’zim boraman",
                            },
                            "cancel": {
                                "qq": "Бийкарлау",
                                "ru": "Отмена",
                                "uz": "Bekor qilish",
                            }
                        };
                        user_lang = phone_number.lang;
                        keyboard = {
                            resize_keyboard: true,
                            inline_keyboard: [
                                [
                                    { text: lang_text['awa'][user_lang].toString(), callback_data: "OrderID=".concat(UserOrder.id) }
                                ],
                                [
                                    { text: lang_text['yaq'][user_lang].toString(), callback_data: "OrrderNo=".concat(UserOrder.id) }
                                ],
                                [
                                    { text: lang_text['cancel'][user_lang].toString(), callback_data: "otmen" }
                                ],
                            ],
                        };
                        key = JSON.stringify(keyboard);
                        url = "https://api.telegram.org/bot".concat(process.env.BOT_TOKEN, "/sendmessage?chat_id=").concat(body['user_id'], "&text=").concat(lang_text['text'][user_lang].toString(), "&reply_markup=").concat(key, "&parse_mode=markdown");
                        axios_2.default.get(encodeURI(url))
                            .then(function (response) {
                            // handle success
                            console.log(response);
                        })
                            .catch(function (error) {
                            // handle error
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderService.prototype.SendLocationMessage = function (user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var message, keyboard, url, ok;
            return __generator(this, function (_a) {
                message = 'locatsiya jiberin';
                keyboard = {
                    "resize_keyboard": true,
                    "keyboard": [
                        [
                            {
                                "text": "Lokatsiya jiberiw",
                                "request_location": true
                            }
                        ]
                    ]
                };
                url = "https://api.telegram.org/bot".concat(process.env.BOT_TOKEN, "/sendmessage?chat_id=").concat(user_id, "&text=").concat(message, "&reply_markup=").concat(JSON.stringify(keyboard), "&parse_mode=markdown");
                console.log(url);
                ok = this.httpService.get(url).pipe((0, rxjs_1.map)(function (resp) { return resp.data; }));
                return [2 /*return*/, ok];
            });
        });
    };
    OrderService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(Members_1.Members)),
        __param(1, (0, typeorm_1.InjectRepository)(Product_1.Product)),
        __param(2, (0, typeorm_1.InjectRepository)(Statistika_1.Orders)),
        __metadata("design:paramtypes", [typeorm_2.Repository,
            typeorm_2.Repository,
            typeorm_2.Repository,
            axios_1.HttpService])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map