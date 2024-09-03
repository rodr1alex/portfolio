import { Component } from '@angular/core';
import { ProyectCardComponent } from "../proyect-card/proyect-card.component";
import { Proyect } from '../../models/Proyect';

@Component({
  selector: 'proyects',
  standalone: true,
  imports: [ProyectCardComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {
  proyect1: Proyect = {
    name:'E-Commerce',
    description:'Aplicación web de comercio electrónico para tienda deportiva, los usuarios pueden escoger productos por color y talla.Posee sistema de gestión de inventario, ventas y usuarios. Administrador puede anular o modificar productos de una venta, restaurando stock original de productos',
    skills : ['Angular','Spring Boot','TypeScript', 'Java', 'MySQL', 'Tailwind', 'AWS'],
    webUrl:'http://ecommerce-angular-rodr1alexdev.s3-website-sa-east-1.amazonaws.com/home',
    githubUrl:'https://github.com/rodr1alex/ecomerce-front',
    images:[
      '/img/proyects/ecomerce/1.png',
      '/img/proyects/ecomerce/2.png',
      '/img/proyects/ecomerce/3.png',
      '/img/proyects/ecomerce/4.png',
      '/img/proyects/ecomerce/5.png',
      '/img/proyects/ecomerce/6.png',
      '/img/proyects/ecomerce/7.png',
  ]
  }

  proyect2: Proyect = {
    name:'Metas App',
    description:'Aplicación web de gamificacion de objetivos. Usuarios pueden crear distintas metas e ir registrando sus logros',
    skills : ['React','NodeJS','Express', 'PostgreSQL', 'Tailwind', 'AWS'],
    webUrl:'http://metasapp-react-rodr1alexdev.s3-website-sa-east-1.amazonaws.com/acceso',
    githubUrl:'https://github.com/rodr1alex/ecomerce-front',
    images:[
      '/img/proyects/metasapp/1.png',
      '/img/proyects/metasapp/2.png',
      '/img/proyects/metasapp/3.png',
      '/img/proyects/metasapp/4.png',
    ]
  }
}
