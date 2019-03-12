import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private orderSvc: OrderService) { }

  ngOnInit() {
  }

  addProduct(){
    console.log(`Add Product: ${this.product.sku}, ${this.product.name}`);
    this.orderSvc.addItem(this.product);
  }

}
