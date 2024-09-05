import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PdpComponent} from "./src/pages/pdp/pdp.component";

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./src/pages/homepage/homepage.component').then(
        (m) => m.HomepageComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./src/pages/cart/cart.page').then((m) => m.CartPageComponent),
  },
  {
    path: 'plp',
    loadComponent: () =>
      import('./src/pages/plp/plp.component').then((m) => m.PlpComponent),
  },
  { path: 'product/:id',
    loadComponent: () =>
      import('./src/pages/pdp/pdp.component').then((m) => m.PdpComponent) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
