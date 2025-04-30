import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { BarraNavComponent } from "./barra-nav/barra-nav.component";
import { PieComponent } from "./pie/pie.component";
import { CarritoService } from 'C:/Users/Alumnado/Documents/Adan/Angular/mi-tienda/src/servicios/carrito.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabeceraComponent, BarraNavComponent, PieComponent, RouterOutlet, RouterModule],
  templateUrl:'app.component.html',
  styleUrl: 'app.component.css',
})
export class AppComponent {
  constructor(public carritoService: CarritoService) {}
}

