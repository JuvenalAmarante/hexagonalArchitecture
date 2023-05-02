import { Category } from '../entities/category.entity';

export interface CategoryGatewayInterface {
  create(category: Category): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: number): Promise<Category>;
  updateById(id: number, category: Category): Promise<Category>;
  deleteById(id: number): Promise<Category>;
}
