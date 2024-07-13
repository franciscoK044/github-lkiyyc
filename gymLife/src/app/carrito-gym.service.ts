import { Injectable } from '@angular/core';
import { GymProduct } from './gym-products-table/gym_products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoGymService {

  private _carritoLista: GymProduct[] = [];
  carritoDeCompras: BehaviorSubject<GymProduct[]> = new BehaviorSubject(this._carritoLista);
  total: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }
  
  anadirAlCarrito(producto: GymProduct): void {
    if (producto.cantidad > 0) {
      let item: GymProduct | undefined = this._carritoLista.find((v1) => v1.nombre_producto === producto.nombre_producto);
      if (!item) {
        this._carritoLista.push({...producto});
      } else {
        item.cantidad += producto.cantidad;
      }
      this.actualizarTotal();
      this.carritoDeCompras.next(this._carritoLista);
    }
  }

  eliminarDelCarrito(producto: GymProduct): void {
    const index = this._carritoLista.findIndex(p => p.nombre_producto === producto.nombre_producto);
    if (index !== -1) {
      this._carritoLista.splice(index, 1);
      this.actualizarTotal();
      this.carritoDeCompras.next(this._carritoLista);
    }
  }

  vaciarCarrito(): void {
    this._carritoLista = [];
    this.actualizarTotal();
    this.carritoDeCompras.next(this._carritoLista);
  }

  private actualizarTotal(): void {
    let total = 0;
    this._carritoLista.forEach(producto => {
      total += producto.precio * producto.cantidad;
    });
    this.total.next(total);
  }
}
