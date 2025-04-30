import { Component } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule,],  
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent {
  items: any[] = [];

  constructor(private http: HttpClient, private carritoService: CarritoService) {}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito({
      id: producto.id,
      title: producto.title,
      price: producto.price,
      image: producto.image,
      quantity: 1 
    });
  }

  ngOnInit() {
    this.fetchProducts();
    console.log('ListaProductosComponent cargado');
  }

  fetchProducts() {
    this.http.get('https://fakestoreapi.com/products').subscribe({
      next: (data: any) => {
        console.log(data);
        this.items = data.map((product: any) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          image: product.image
        }));
      },
      error: (err) => console.error('Error:', err)
    });
  }
}

