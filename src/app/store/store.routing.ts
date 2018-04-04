import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'cart',
    component: CartDetailComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: '**',
    redirectTo: '/store'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
