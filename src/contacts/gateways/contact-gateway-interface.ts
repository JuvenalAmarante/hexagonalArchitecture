import { Contact } from '../entities/contact.entity';

export interface ContactGatewayInterface {
  create(contact: Contact): Promise<Contact>;
  findAll(): Promise<Contact[]>;
  findById(id: number): Promise<Contact>;
  findByCategory(categoryId: number): Promise<Contact[]>;
  updateById(id: number, contact: Contact): Promise<Contact>;
  deleteById(id: number): Promise<Contact>;
}
