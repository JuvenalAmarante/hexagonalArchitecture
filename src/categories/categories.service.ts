import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryGatewayInterface } from './gateways/category-gateway-interface';
import { Category } from './entities/category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CategoryPrismaRepository')
    private categoryRepository: CategoryGatewayInterface,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = new Category(createCategoryDto.name);

    return this.categoryRepository.create(category);
  }

  async findAll() {
    return this.categoryRepository.findAll();
  }

  async findOne(id: number) {
    return this.categoryRepository.findById(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = new Category(updateCategoryDto.name, id);

    return this.categoryRepository.updateById(id, category);
  }

  async remove(id: number) {
    return this.categoryRepository.deleteById(id);
  }
}
