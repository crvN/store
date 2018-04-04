import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// import containers


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'store',
        loadChildren: './store/store.module#StoreModule'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
