import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GymProduct } from '../gym-products-table/gym_products'; 

const URL = 'https://66908ef1c0a7969efd9c8507.mockapi.io/api/productos';

@Injectable({
  providedIn: 'root'
})
export class GymDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<GymProduct[]> {
    return this.http.get<GymProduct[]>(URL).pipe(
      tap((gymProducts: GymProduct[]) => {
        gymProducts.forEach(gymProduct => {
          gymProduct.cantidad = 0; // Inicializar cantidad a 0
        });
      })
    );
  }
}
