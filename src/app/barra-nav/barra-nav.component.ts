import { Component } from '@angular/core';
import { CarritoComponent } from './carrito/carrito.component';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule

@Component({
  selector: 'app-barra-nav',
  standalone: true,
  imports: [ RouterModule, CommonModule],  // Incluir CommonModule aquí
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent {
  itemsCarritoCount = 0;
  mostrarCarrito = false;

  constructor(private carritoService: CarritoService) {
    this.carritoService.carrito$.subscribe(items => {
      this.itemsCarritoCount = items.reduce((sum, item) => sum + item.quantity, 0);
    });
  }

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
