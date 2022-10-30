import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entity/Product';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async GetAllProduct(category_id: number) {
    const data = await this.productRepository.findBy({
      categoryId: category_id,
    });
    return {
      success: true,
      code: 200,
      message: 'Successfully',
      payload: data,
    };
  }
}
