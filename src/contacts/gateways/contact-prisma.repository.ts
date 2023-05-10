import { PrismaService } from 'src/modules/prisma';
import { Contact } from '../entities/contact.entity';
import { ContactGatewayInterface } from './contact-gateway-interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactPrismaRepository implements ContactGatewayInterface {
  constructor(private prisma: PrismaService) {}

  async create(contact: Contact): Promise<Contact> {
    return this.prisma.contact.create({
      data: contact,
    });
  }

  async findAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  async findById(id: number): Promise<Contact> {
    return this.prisma.contact.findUnique({
      where: { id },
    });
  }

  async findByCategory(categoryId: number): Promise<Contact[]> {
    return this.prisma.contact.findMany({
      where: { categoryId },
    });
  }

  async updateById(id: number, contact: Contact): Promise<Contact> {
    return this.prisma.contact.update({
      data: contact,
      where: { id },
    });
  }

  async deleteById(id: number): Promise<Contact> {
    return this.prisma.contact.delete({
      where: { id },
    });
  }
}
