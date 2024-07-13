import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymLifeProductosComponent } from './gym-life-productos/gym-life-productos.component';
import { GymLifeSobreNosotrosComponent } from './gym-life-sobre-nosotros/gym-life-sobre-nosotros.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: GymLifeProductosComponent
  },
  {
    path: 'sobreNosotros',
    component: GymLifeSobreNosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
