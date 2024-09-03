import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { Skill } from '../../models/Skill';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  frontSkills: Skill[] = [
    {SvgURL:'/svg/html.svg', skillName:'Html'}, 
    {SvgURL:"/svg/css.svg", skillName:'Css'}, 
    {SvgURL:"/svg/javascript.svg", skillName:'JavaScript'},
    {SvgURL:"/svg/angular.svg", skillName:'Angular'},
    {SvgURL:"/svg/typescript.svg", skillName:'TypeScript'},
    {SvgURL:"/svg/react.svg", skillName:'React'},
    {SvgURL:"/svg/tailwind.svg", skillName:'Tailwind'},
  ]
  backSkills: Skill[] = [
    {SvgURL:'/svg/java.svg', skillName:'Java'}, 
    {SvgURL:"/svg/springboot.svg", skillName:'Spring'}, 
    {SvgURL:"/svg/node.svg", skillName:'Node'},
    {SvgURL:"/svg/mierdadebackend.svg", skillName:'Express'},
    {SvgURL:"/svg/mysql.svg", skillName:'MySQL'},
    {SvgURL:"/svg/postgresql.svg", skillName:'PostgreSQL'},
  ];
  generalSkills: Skill[] = [
    {SvgURL:'/svg/docker.svg', skillName:'Docker'}, 
    {SvgURL:"/svg/aws.svg", skillName:'AWS'}, 
    {SvgURL:"/svg/git.svg", skillName:'Git'},
    {SvgURL:"/svg/github-white.svg", skillName:'GitHub'},
    {SvgURL:"/svg/terminal.svg", skillName:'Terminal'},
  ]
}
