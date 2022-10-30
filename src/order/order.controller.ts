import { Body, Controller, HttpCode, Post, Get, Res, Req, Param} from '@nestjs/common';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { OrderService } from './order.service';
// import { ValidationPipe } from '../validation/validation.pipe';

@Controller('api/v1') 

export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('order/add')
  @ApiBody({ type: CreateOrderDto })
  @HttpCode(200)
  
  AddOrder(@Body() OrderDto: CreateOrderDto, @Req() req) {
    return this.orderService.SendChannel(OrderDto);
  }

  @Get('location/:user_id')
  @ApiParam({ type: String, name: 'user_id' })
  UserLocation(@Param('user_id') user_id: string) {
    return this.orderService.SendLocationMessage(user_id);
  }
}