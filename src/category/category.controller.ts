import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('api/v1')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('category')
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'internal server error' })
  async GetAll() {
    return await this.categoryService.FindAll();
  }
}
