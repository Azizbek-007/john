import { Module, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { APP_PIPE } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Members } from '../entity/Members';
import { Product } from '../entity/Product';
import { Orders } from '../entity/Statistika';


@Module({
  imports: [TypeOrmModule.forFeature([Members, Product, Orders]), HttpModule],
  providers: [
    OrderService, 
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  controllers: [OrderController],
})
export class OrderModule {}
