import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { APIService } from '../../services/api.service';
import { OrderService } from '../../services/order.service';
import { OrderItem } from '../../models/order-item';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {
  items: OrderItem[] = [];
  dataSource = new MatTableDataSource<OrderItem>(this.items);
  displayedColumns: string[] = ['name', 'price', 'quantity', 'sum'];

  constructor(private svc: APIService, private orderSvc: OrderService) { }

  ngOnInit() {
//    this.svc.getOrder().subscribe((data) => {
//      this.items = data;
//      console.log(`Items in order: ${this.items.length}`);
//    });
    this.orderSvc.orderItemAddEvent.subscribe(
      orderItem => {
        this.items.push(orderItem);
        this.dataSource._updateChangeSubscription();
        console.log(`Item added to order: ${orderItem}`);
        console.log(`Order has ${this.itemCount()} items.`);
      }
    );
      //this.items = this.orderSvc.getOrder();
      console.log(`Items in order: ${this.items.length}`);
  }

  itemCount(): number {
    return this.items.length;
  }

  total(): number {
    return this.items.map(item => item.price * item.quantity).reduce((acc, value) => acc + value, 0);
  }
}
