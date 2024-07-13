
import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from "@angular/core";


@Component({
  selector: 'app-accesorios',
  templateUrl: './accesoriosComponent.html',
  styleUrls: ['./accesoriosComponent.scss']
})
export class AccesoriosComponent implements AfterViewInit {
  @ViewChild('miElemento') miElemento!: ElementRef;

  accesorios = [
    { nombre: 'Reloj', clearance: true },
    { nombre: 'Pulsera', clearance: false },
    { nombre: 'Collar', clearance: true },
    { nombre: 'Anillo', clearance: false }
  ];

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    if (this.esEnOferta(this.accesorios[0])) {
      this.renderer.addClass(this.miElemento.nativeElement, 'enOferta');
    }
  }

  esEnOferta(accesorio: any): boolean {
    return accesorio.clearance;
  }
}

