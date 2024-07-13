import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {
  @Input() cantidad: number = 0;
  @Input() max: number = 100;
  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  sumarCantidad() {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  restarCantidad() {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  cambiarCantidad(evento: any) {
    let valorIngresado = parseInt(evento.target.value, 10);
    if (isNaN(valorIngresado)) {
      valorIngresado = 0;
    }
    if (valorIngresado > this.max) {
      this.cantidad = this.max;
    } else if (valorIngresado < 0) {
      this.cantidad = 0;
    } else {
      this.cantidad = valorIngresado;
    }
    this.cantidadChange.emit(this.cantidad);
  }
}
