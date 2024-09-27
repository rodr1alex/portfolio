import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from '../about/about.component';
import { ProyectCardComponent } from '../proyect-card/proyect-card.component';
import { SkillsComponent } from "../skills/skills.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { ProyectsComponent } from "../proyects/proyects.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'porfolio',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, ProyectCardComponent, SkillsComponent, ContactFormComponent, ProyectsComponent, FooterComponent],
  templateUrl: './porfolio.component.html'
})
export class PorfolioComponent {

}
