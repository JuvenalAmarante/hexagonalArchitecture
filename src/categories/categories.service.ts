import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';
import { Prisma, Category } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategory: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({
      data: createCategory,
    });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(findCategory: Prisma.CategoryWhereUniqueInput) {
    return this.prisma.category.findUnique({
      where: findCategory,
    });
  }

  async update(
    findCategory: Prisma.CategoryWhereUniqueInput,
    updateCategory: Prisma.CategoryUpdateInput,
  ) {
    return this.prisma.category.update({
      data: updateCategory,
      where: findCategory,
    });
  }

  async remove(findCategory: Prisma.CategoryWhereUniqueInput) {
    return this.prisma.category.delete({
      where: findCategory,
    });
  }
}
