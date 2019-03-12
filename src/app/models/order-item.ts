export class OrderItem {
  "id": string;
  "name": string;
  "quantity": number;
  "price": number;
  //"sum": number = this.quantity * this.price;

  getId(): string {
    return this.id;
  }

  getName(): string{
    return this.name;
  }

  getPrice(): number{
    return this.price;
  }

  getQuantity(): number {
    return this.quantity;
  }

  sum(): number {
    return this.quantity * this.price;
  }
}
