import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommercRoutingModule } from './ecommerc-routing.module';
import { EcommercComponent } from './ecommerc.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemCartComponent } from './item-cart/item-cart.component';


@NgModule({
  declarations: [EcommercComponent, ItemListComponent, ItemDetailComponent, ItemCartComponent],
  imports: [
    CommonModule,
    EcommercRoutingModule
  ]
})
export class EcommercModule { }
