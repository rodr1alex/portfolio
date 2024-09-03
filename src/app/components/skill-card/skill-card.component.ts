import { Component, Input } from '@angular/core';
import { Skill } from '../../models/Skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() skills!: Skill[];
}
