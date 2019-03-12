import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list: Product[] = [];
  //list: any = [];

  constructor(private svc: APIService) { }
  
  ngOnInit() {
    this.svc.getProducts().subscribe((data) => { 
      this.list = data;
    });
  }

}
