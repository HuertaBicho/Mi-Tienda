import { Component } from '@angular/core';
import { CarritoService } from 'C:/Users/Alumnado/Documents/Adan/Angular/mi-tienda/src/servicios/carrito.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoCarrito } from 'C:/Users/Alumnado/Documents/Adan/Angular/mi-tienda/src/app/interfaces/producto-carrito';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  total = 0;

  get itemsCarrito$() {
    return this.carritoService.carrito$;
  }

  constructor(private carritoService: CarritoService) {
    this.itemsCarrito$.subscribe(items => {
      this.total = this.carritoService.obtenerTotal();
    });
  }

  actualizarCantidad(id: number, cantidad: number) {
    this.carritoService.actualizarCantidad(id, cantidad);
  }

  eliminarItem(id: number) {
    this.carritoService.eliminarDelCarrito(id);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }

  trackById(index: number, item: ProductoCarrito): number {
    return item.id;  // Usar el id para realizar un seguimiento eficiente de los elementos
  }

  ticket: ProductoCarrito[] = [];
  compraRealizada = false;
  totalTicket = 0;

finalizarCompra() {
  // Guardamos una copia del carrito antes de vaciarlo
  this.carritoService.carrito$.subscribe(items => {
    this.ticket = [...items]; // copia
    this.totalTicket = this.carritoService.obtenerTotal();
  }).unsubscribe(); // nos desuscribimos inmediatamente

  this.carritoService.vaciarCarrito();
  this.compraRealizada = true;
  }

  fechaActual = new Date();
}



