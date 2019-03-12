import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { OrderItem } from '../models/order-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: OrderItem[] = [];
  private orderItemMessage = new Subject<OrderItem>();
  
  orderItemAddEvent = this.orderItemMessage.asObservable();

  constructor() { }
  getOrder(): OrderItem[]{
    return this.order;
  }

  addItem(product: Product){
    console.log("Add item to order");
    let item = new OrderItem();
    item.id = product.sku;
    item.name =  product.name;
    item.price =  product.price;
    item.quantity = 1;
    //console.log(`Item: ${item}`);
    //this.order.push(item)
    this.orderItemMessage.next(item);
  }
  
  removeItem(){
    console.log("Remove item from order");
  }
  
  submit(){
    console.log("Submit order");
  }
}
