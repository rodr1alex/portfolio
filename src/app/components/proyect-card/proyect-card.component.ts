import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Proyect } from '../../models/Proyect';

@Component({
  selector: 'proyect-card',
  standalone: true,
  imports: [],
  templateUrl: './proyect-card.component.html',
  styleUrl: './proyect-card.component.css'
})
export class ProyectCardComponent implements OnInit, AfterViewInit{
  @ViewChild('projectCard') projectCard!: ElementRef;
  @Input() proyect!: Proyect;
  imageNumberToShow: number = 0;
  portraitSize:number = 700; // tratar de obtener este numero dinamicamente!!!
  carouselSlide!: Element | null;

  ngOnInit(): void {
     this.carouselSlide = document.getElementById(this.proyect.name);   
     
  }

  ngAfterViewInit(): void {
    if (this.projectCard) {
      // Obtén el ancho del contenedor
      const ancho = this.projectCard.nativeElement.offsetWidth;
      console.log('Ancho del contenedor:', ancho);
      this.portraitSize = ancho * 0.52;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    console.log('Ancho de la ventana:', width);

    // Aquí puedes ejecutar la lógica adicional que necesites cuando el ancho cambie
    const ancho = this.projectCard.nativeElement.offsetWidth;
      console.log('Ancho del contenedor:', ancho);
      this.portraitSize = ancho / 2;
  }

  nextImage(): void{
    this.carouselSlide = document.getElementById(this.proyect.name); 
    if(this.imageNumberToShow >= this.proyect.images.length - 1) return;
    this.carouselSlide?.setAttribute('style',`transition: transform 0.5s ease-in-out`)
    this.imageNumberToShow++;
    console.log( `js de mierda: ${-this.portraitSize * this.imageNumberToShow}`)
    console.log(`la wea rara de js como siempre: ${this.carouselSlide}`)
    this.carouselSlide?.setAttribute('style',`transform: translateX(${-this.portraitSize * this.imageNumberToShow}px)`);
    this.carouselSlide?.classList.add('bg-black');
  }

  previousImage(): void{
    this.carouselSlide = document.getElementById(this.proyect.name); 
    if(this.imageNumberToShow <= 0) return;
    this.carouselSlide?.setAttribute('style',`transition: transform 0.5s ease-in-out`)
    this.imageNumberToShow--;
    this.carouselSlide?.setAttribute('style',`transform: translateX(${-this.portraitSize * this.imageNumberToShow}px)`)
  }
  
 
 
}
