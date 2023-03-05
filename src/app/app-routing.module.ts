import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../app/utility/app.guard';
import { DashboardComponent } from './public/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuard] },
  { path: 'ecommerc', loadChildren: () => import('./ecommerc/ecommerc.module').then(m => m.EcommercModule) },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
