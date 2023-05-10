import { Contact } from '../entities/contact.entity';
import { ContactGatewayInterface } from './contact-gateway-interface';

export class ContactMockRepository implements ContactGatewayInterface {
  contacts: Contact[] = [];

  async create(contact: Contact): Promise<Contact> {
    contact.id = this.contacts.length
      ? this.contacts[this.contacts.length - 1].id + 1
      : 1;

    this.contacts.push(contact);

    return contact;
  }

  async findAll(): Promise<Contact[]> {
    return this.contacts;
  }

  async findById(id: number): Promise<Contact> {
    const contactSearch = this.contacts.find((contact) => contact.id === id);

    if (!contactSearch) {
      throw new Error('Contact not found!');
    }

    return contactSearch;
  }

  async findByCategory(categoryId: number): Promise<Contact[]> {
    const contactSearch = this.contacts.filter(
      (contact) => contact.categoryId === categoryId,
    );

    if (!contactSearch.length) {
      throw new Error('Contact not found!');
    }

    return contactSearch;
  }

  async updateById(id: number, contact: Contact): Promise<Contact> {
    const contactSearch = this.contacts.findIndex(
      (contact) => contact.id === id,
    );

    if (contactSearch === -1) {
      throw new Error('Contact not found!');
    }

    this.contacts[contactSearch] = {
      ...this.contacts[contactSearch],
      ...contact,
    };

    return this.contacts[contactSearch];
  }

  async deleteById(id: number): Promise<Contact> {
    const contactSearch = this.contacts.findIndex(
      (contact) => contact.id === id,
    );

    if (contactSearch === -1) {
      throw new Error('Contact not found!');
    }

    const contact = this.contacts[contactSearch];

    this.contacts.splice(contactSearch, 1);

    return contact;
  }
}
