import { PrismaService } from 'src/modules/prisma';
import { Category } from '../entities/category.entity';
import { CategoryGatewayInterface } from './category-gateway-interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryPrismaRepository implements CategoryGatewayInterface {
  constructor(private prisma: PrismaService) {}

  async create(category: Category): Promise<Category> {
    return this.prisma.category.create({
      data: category,
    });
  }

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async findById(id: number): Promise<Category> {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async updateById(id: number, category: Category): Promise<Category> {
    return this.prisma.category.update({
      data: category,
      where: { id },
    });
  }

  async deleteById(id: number): Promise<Category> {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
