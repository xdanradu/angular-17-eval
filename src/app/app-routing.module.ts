import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./src/pages/homepage/homepage.component').then(m => m.HomepageComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./src/pages/cart/cart.page').then(m => m.CartPageComponent)
  },
  {
    path: 'plp',
    loadComponent: () => import('./src/pages/plp/plp.component').then(m => m.PlpComponent)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
