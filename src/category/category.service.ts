import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entity/Category';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async FindAll() {
    const data = await this.categoryRepository.find({
      relations: {
        product: true
      }
    });
    return {
      success: true,
      code: 200,
      message: 'Successfully',
      payload: data,
    };
  }
}
