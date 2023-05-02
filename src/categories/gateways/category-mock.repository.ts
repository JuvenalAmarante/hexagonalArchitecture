import { Category } from '../entities/category.entity';
import { CategoryGatewayInterface } from './category-gateway-interface';

export class CategoryMockRepository implements CategoryGatewayInterface {
  categories: Category[] = [];

  async create(category: Category): Promise<Category> {
    category.id = this.categories.length
      ? this.categories[this.categories.length - 1].id + 1
      : 1;

    this.categories.push(category);

    return category;
  }

  async findAll(): Promise<Category[]> {
    return this.categories;
  }

  async findById(id: number): Promise<Category> {
    const categorySearch = this.categories.find(
      (category) => category.id === id,
    );

    if (!categorySearch) {
      throw new Error('Categoria não encontrada!');
    }

    return categorySearch;
  }

  async updateById(id: number, category: Category): Promise<Category> {
    const categorySearch = this.categories.findIndex(
      (category) => category.id === id,
    );

    if (categorySearch === -1) {
      throw new Error('Categoria não encontrada!');
    }

    this.categories[categorySearch] = {
      ...this.categories[categorySearch],
      ...category,
    };

    return this.categories[categorySearch];
  }

  async deleteById(id: number): Promise<Category> {
    const categorySearch = this.categories.findIndex(
      (category) => category.id === id,
    );

    if (categorySearch === -1) {
      throw new Error('Categoria não encontrada!');
    }

    const category = this.categories[categorySearch];

    this.categories.splice(categorySearch, 1);

    return category;
  }
}
