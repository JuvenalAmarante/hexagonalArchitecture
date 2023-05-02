import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoryPrismaRepository } from './gateways/category-prisma.repository';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    CategoryPrismaRepository,
    {
      provide: 'CategoryPrismaRepository',
      useExisting: CategoryPrismaRepository,
    },
  ],
})
export class CategoriesModule {}
