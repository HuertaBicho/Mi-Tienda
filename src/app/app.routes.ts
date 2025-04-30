// app.routes.ts
import { Routes, provideRouter, withHashLocation } from '@angular/router'; // Importa provideRouter y withHashLocation
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './barra-nav/carrito/carrito.component';

export const routes: Routes = [
  { path: '', component: ListaProductosComponent, pathMatch: 'full' },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' }
];

export const appRoutes = [provideRouter(routes, withHashLocation())];