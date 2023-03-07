import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommercRoutingModule } from './ecommerc-routing.module';
import { EcommercComponent } from './ecommerc.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemCartComponent } from './item-cart/item-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceService } from '../providers/ecommerce.service';
import { ItemAddComponent } from './item-add/item-add.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [EcommercComponent, ItemListComponent, ItemDetailComponent, ItemCartComponent, ItemAddComponent],
  imports: [
    CommonModule,
    EcommercRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [EcommerceService]
})
export class EcommercModule { }
