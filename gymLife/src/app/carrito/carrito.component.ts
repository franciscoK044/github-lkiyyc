import { Component, OnInit } from '@angular/core';
import { CarritoGymService } from '../carrito-gym.service';
import { GymProduct } from '../gym-products-table/gym_products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carritoLista$: Observable<GymProduct[]>;
  total$: Observable<number>;
  carritoLista: GymProduct[] = []; 

  constructor(private carritoService: CarritoGymService) {
    this.carritoLista$ = carritoService.carritoDeCompras.asObservable();
    this.total$ = carritoService.total.asObservable();
  }

  ngOnInit(): void {
    this.carritoLista$.subscribe(lista => {
      this.carritoLista = lista || []; 
    });
  }

  eliminarDelCarrito(producto: GymProduct): void {
    this.carritoService.eliminarDelCarrito(producto);
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
  }
}
