// En `src/app/services/carrito.service.ts`
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductoCarrito } from 'C:/Users/Alumnado/Documents/Adan/Angular/mi-tienda/src/app/interfaces/producto-carrito';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private itemsCarrito: ProductoCarrito[] = [];
  private carritoSubject = new BehaviorSubject<ProductoCarrito[]>([]); // Valor inicial vacío
  carrito$ = this.carritoSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.cargarCarrito(); // solo se ejecuta si estamos en el navegador
    }
  }

  // Método para cargar productos desde localStorage, si existen
  private cargarCarrito() {
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem('carrito');
      if (data) {
        try {
          const parsed = JSON.parse(data);
          if (Array.isArray(parsed) && parsed.every(item => item.id != null)) {
            this.itemsCarrito = parsed;
            this.carritoSubject.next(this.itemsCarrito);
          } else {
            console.warn('Carrito inválido, limpiando...');
            localStorage.removeItem('carrito');
          }
        } catch (error) {
          console.error('Error al cargar el carrito desde localStorage:', error);
          localStorage.removeItem('carrito');
        }
      }
    }
  }
  
  

  // Métodos del carrito
  agregarAlCarrito(producto: any, cantidad: number = 1) {
    const itemExistente = this.itemsCarrito.find(item => item.id === producto.id);

    if (itemExistente) {
      itemExistente.quantity += cantidad;
    } else {
      const nuevoItem: ProductoCarrito = {
        id: producto.id,
        title: producto.title,
        price: producto.price,
        quantity: cantidad,
        image: producto.image
      };
      this.itemsCarrito.push(nuevoItem);
    }

    this.actualizarCarrito();
  }

  eliminarDelCarrito(id: number) {
    this.itemsCarrito = this.itemsCarrito.filter(item => item.id !== id);
    this.actualizarCarrito();
  }

  actualizarCantidad(id: number, cantidad: number) {
    const item = this.itemsCarrito.find(item => item.id === id);
    if (item) {
      item.quantity = cantidad;
      this.actualizarCarrito();
    }
  }

  vaciarCarrito() {
    this.itemsCarrito = [];
    this.actualizarCarrito();
  }

  obtenerTotal(): number {
    return this.itemsCarrito.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Método privado para actualizar carrito en el servicio y localStorage
  private actualizarCarrito() {
    this.carritoSubject.next([...this.itemsCarrito]);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('carrito', JSON.stringify(this.itemsCarrito));
    }
  }
}