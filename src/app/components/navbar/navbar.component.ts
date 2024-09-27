import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    this.showMenu()
  }
  menuToggle: boolean = false;


  showMenu(){
    const menu = document.getElementById('menu');
    const iconToggle = document.getElementById('iconToggle');
    console.log(menu)
    this.menuToggle === true ? 
      (this.menuToggle = false, menu?.classList.add('menu-visible'), iconToggle?.classList.add('fa-close')):
      (this.menuToggle = true, menu?.classList.remove('menu-visible'), iconToggle?.classList.remove('fa-close'))
  }
}
