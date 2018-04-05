import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGuard } from '../guards/store-first.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: 'cart',
    component: CartDetailComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [StoreFirstGuard]
  },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
