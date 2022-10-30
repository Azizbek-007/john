import { Controller, Get, Param, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import { join } from 'path';
@Controller('api/v1')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('product/:category_id')
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'internal server error' })
  @ApiParam({ type: Number, name: 'category_id' })
  async GetProducts(@Param('category_id') category_id: number) {
    return await this.productService.GetAllProduct(category_id);
  }
  
}
