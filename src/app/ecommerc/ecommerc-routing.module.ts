import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../public/dashboard/dashboard.component';

import { EcommercComponent } from './ecommerc.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent }
  // { path: '', component: EcommercComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommercRoutingModule { }
