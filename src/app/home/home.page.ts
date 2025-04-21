import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  usuario = '';
  funciones = [
    { nombre: 'Inventario', ruta: '/inventario' },
    { nombre: 'Rutas', ruta: '/rutas' },
    { nombre: 'Vehículos', ruta: '/vehiculos' },
    { nombre: 'Empleados', ruta: '/empleados' },
    { nombre: 'Reportes', ruta: '/reportes' },
    { nombre: 'Configuración', ruta: '/configuracion' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario') || 'Usuario';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}