import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { SalesOrderComponent } from './components/sales-order/sales-order.component';
import { ProductComponent } from './components/product/product.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { APIService } from './services/api.service';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SalesOrderComponent,
    ProductComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
