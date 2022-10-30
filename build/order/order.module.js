"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
var common_1 = require("@nestjs/common");
var order_service_1 = require("./order.service");
var order_controller_1 = require("./order.controller");
var core_1 = require("@nestjs/core");
var axios_1 = require("@nestjs/axios");
var typeorm_1 = require("@nestjs/typeorm");
var Members_1 = require("../entity/Members");
var Product_1 = require("../entity/Product");
var Statistika_1 = require("../entity/Statistika");
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([Members_1.Members, Product_1.Product, Statistika_1.Orders]), axios_1.HttpModule],
            providers: [
                order_service_1.OrderService,
                {
                    provide: core_1.APP_PIPE,
                    useClass: common_1.ValidationPipe,
                },
            ],
            controllers: [order_controller_1.OrderController],
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map