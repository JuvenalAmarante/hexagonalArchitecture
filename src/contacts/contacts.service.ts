import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';
import { Prisma, Contact } from '@prisma/client';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContact: Prisma.ContactCreateInput): Promise<Contact> {
    return this.prisma.contact.create({
      data: createContact,
    });
  }

  async findAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  async findOne(findContact: Prisma.ContactWhereUniqueInput): Promise<Contact> {
    return this.prisma.contact.findUnique({
      where: findContact,
    });
  }

  async update(
    findContact: Prisma.ContactWhereUniqueInput,
    updateContact: Prisma.CategoryUpdateInput,
  ) {
    return this.prisma.contact.update({
      data: updateContact,
      where: findContact,
    });
  }

  async remove(findContact: Prisma.ContactWhereUniqueInput) {
    return this.prisma.contact.delete({
      where: findContact,
    });
  }
}
