import { Component, OnInit } from '@angular/core';
import { GymProduct } from './gym_products'; 
import { CarritoGymService } from '../carrito-gym.service';
import { GymDataService } from './gym-data.service';

@Component({
  selector: 'app-gym-products-table',
  templateUrl: './gym-products-table.component.html',
  styleUrls: ['./gym-products-table.component.scss']
})
export class GymProductsTableComponent implements OnInit {
  membresias: GymProduct[] = [];
  clases: GymProduct[] = [];
  productos: GymProduct[] = [];
  servicios: GymProduct[] = [];
  accesorios: GymProduct[] = [];

  constructor(private carrito: CarritoGymService, private gymDataService: GymDataService) {}

  ngOnInit() {
    // Obtener datos dinámicos del servicio GymDataService
    this.gymDataService.getAll().subscribe(gymProducts => {

      console.log(gymProducts)
      // Asignar datos a las propiedades del componente
      this.membresias = gymProducts.filter(producto => producto.tipo_producto === 'membresia');
      this.clases = gymProducts.filter(producto => producto.tipo_producto === 'clase');
      this.productos = gymProducts.filter(producto => producto.tipo_producto === 'producto');
      this.servicios = gymProducts.filter(producto => producto.tipo_producto === 'servicio');
      this.accesorios = gymProducts.filter(producto => producto.tipo_producto === 'accesorio');
    });
  }

  trackById(index: number, item: GymProduct): number {
    return item.id;
  }

  onCantidadChange(nuevaCantidad: number, producto: GymProduct) {
    producto.cantidad = nuevaCantidad;
  }

  anadirAlCarrito(producto: GymProduct): void {
    this.carrito.anadirAlCarrito(producto);
    producto.stock -= producto.cantidad;
    producto.cantidad = 0;
  }
}
