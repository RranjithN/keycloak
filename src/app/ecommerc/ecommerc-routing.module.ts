import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../public/dashboard/dashboard.component';

import { EcommercComponent } from './ecommerc.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent }
  // { path: '', component: EcommercComponent }
  { path: 'mobiles', component:ItemListComponent},
  { path: 'add-item', component:ItemAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommercRoutingModule { }
