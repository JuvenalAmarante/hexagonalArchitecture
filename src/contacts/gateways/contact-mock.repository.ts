import { Contact } from '../entities/contact.entity';
import { ContactGatewayInterface } from './contact-gateway-interface';

export class ContactMockRepository implements ContactGatewayInterface {
  categories: Contact[] = [];

  async create(contact: Contact): Promise<Contact> {
    contact.id = this.categories.length
      ? this.categories[this.categories.length - 1].id + 1
      : 1;

    this.categories.push(contact);

    return contact;
  }

  async findAll(): Promise<Contact[]> {
    return this.categories;
  }

  async findById(id: number): Promise<Contact> {
    const contactSearch = this.categories.find((contact) => contact.id === id);

    if (!contactSearch) {
      throw new Error('Categoria não encontrada!');
    }

    return contactSearch;
  }

  async findByCategory(id: number): Promise<Contact[]> {
    const contactSearch = this.categories.filter(
      (contact) => contact.id === id,
    );

    if (!contactSearch.length) {
      throw new Error('Categoria não encontrada!');
    }

    return contactSearch;
  }

  async updateById(id: number, contact: Contact): Promise<Contact> {
    const contactSearch = this.categories.findIndex(
      (contact) => contact.id === id,
    );

    if (contactSearch === -1) {
      throw new Error('Categoria não encontrada!');
    }

    this.categories[contactSearch] = {
      ...this.categories[contactSearch],
      ...contact,
    };

    return this.categories[contactSearch];
  }

  async deleteById(id: number): Promise<Contact> {
    const contactSearch = this.categories.findIndex(
      (contact) => contact.id === id,
    );

    if (contactSearch === -1) {
      throw new Error('Categoria não encontrada!');
    }

    const contact = this.categories[contactSearch];

    this.categories.splice(contactSearch, 1);

    return contact;
  }
}
