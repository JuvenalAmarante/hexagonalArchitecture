export class Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  categoryId?: number;

  constructor(
    name: string,
    email: string,
    phone: string,
    categoryId?: number,
    id?: number,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.categoryId = categoryId;
  }
}
