import { Inject, Injectable } from '@nestjs/common';
import { ContactGatewayInterface } from './gateways/contact-gateway-interface';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @Inject('ContactPrismaRepository')
    private contactRepository: ContactGatewayInterface,
  ) {}

  async create(createContact: CreateContactDto): Promise<Contact> {
    const contact = new Contact(
      createContact.name,
      createContact.email,
      createContact.phone,
      createContact.categoryId,
    );

    return this.contactRepository.create(contact);
  }

  async findAll(categoryId?: number): Promise<Contact[]> {
    return categoryId
      ? this.contactRepository.findByCategory(categoryId)
      : this.contactRepository.findAll();
  }

  async findOne(id: number): Promise<Contact> {
    return this.contactRepository.findById(id);
  }

  async update(id: number, updateContact: UpdateContactDto) {
    const contact = new Contact(
      updateContact.name,
      updateContact.email,
      updateContact.phone,
      updateContact.categoryId,
      id,
    );

    return this.contactRepository.updateById(id, contact);
  }

  async remove(id: number) {
    return this.contactRepository.deleteById(id);
  }
}
