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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var CreateOrder_dto_1 = require("./dto/CreateOrder.dto");
var order_service_1 = require("./order.service");
// import { ValidationPipe } from '../validation/validation.pipe';
var OrderController = /** @class */ (function () {
    function OrderController(orderService) {
        this.orderService = orderService;
    }
    OrderController.prototype.AddOrder = function (OrderDto, req) {
        console.log(req.body);
        return this.orderService.SendChannel(OrderDto);
    };
    OrderController.prototype.UserLocation = function (user_id) {
        return this.orderService.SendLocationMessage(user_id);
    };
    __decorate([
        (0, common_1.Post)('order/add'),
        (0, swagger_1.ApiBody)({ type: CreateOrder_dto_1.CreateOrderDto }),
        (0, common_1.HttpCode)(200),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Req)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CreateOrder_dto_1.CreateOrderDto, Object]),
        __metadata("design:returntype", void 0)
    ], OrderController.prototype, "AddOrder", null);
    __decorate([
        (0, common_1.Get)('location/:user_id'),
        (0, swagger_1.ApiParam)({ type: String, name: 'user_id' }),
        __param(0, (0, common_1.Param)('user_id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], OrderController.prototype, "UserLocation", null);
    OrderController = __decorate([
        (0, common_1.Controller)('api/v1'),
        __metadata("design:paramtypes", [order_service_1.OrderService])
    ], OrderController);
    return OrderController;
}());
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map