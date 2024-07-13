import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymProductsTableComponent } from './gym-products-table/gym-products-table.component';
import { FormsModule } from '@angular/forms';
import { GymLifeSobreNosotrosComponent } from './gym-life-sobre-nosotros/gym-life-sobre-nosotros.component';
import { GymLifeProductosComponent } from './gym-life-productos/gym-life-productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    GymProductsTableComponent,
    GymLifeSobreNosotrosComponent,
    GymLifeProductosComponent,
    CarritoComponent,
    InputIntegerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
