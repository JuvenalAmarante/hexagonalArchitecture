import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CategoryMockRepository } from './gateways/category-mock.repository';

describe('CategoriesController', () => {
  let service: CategoriesService;
  let categoryGateway: CategoryMockRepository;
  let category: Category;

  beforeAll(async () => {
    categoryGateway = new CategoryMockRepository();
    service = new CategoriesService(categoryGateway);
  });

  it('Should create the record', async () => {
    category = await service.create({ name: 'Test' });
    expect(categoryGateway.categories).toEqual([category]);
  });

  it('Should list all records', async () => {
    const list = await service.findAll();
    expect(list).toEqual([category]);
  });

  it('Should list only the record', async () => {
    const categorySearch = await service.findOne(1);
    expect(categorySearch).toEqual(category);
  });

  it('Should update the record', async () => {
    category = await service.update(1, { name: 'Test 2' });
    expect(categoryGateway.categories).toEqual([category]);
  });

  it('shoul delete the record', async () => {
    await service.remove(1);
    expect(categoryGateway.categories).toEqual([]);
  });
});
