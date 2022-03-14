import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Basics_Componentes-ListadoArticulos';
  articulos = [{ codigo: 1, descripcion: 'patatas', precio: 10.55 },
               { codigo: 2, descripcion: 'manzanas', precio: 12.5 },
               { codigo: 3, descripcion: 'zanahorias', precio: 9.25 },
               { codigo: 4, descripcion: 'melones', precio: 11.15 },
               { codigo: 5, descripcion: 'peras', precio: 3.55 },
               ];
}
