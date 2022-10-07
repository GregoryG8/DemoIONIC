import { Component, OnInit } from '@angular/core';
import { Hero } from "../tab4/hero";
import { MensajeService } from "../mensaje.service";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  hero: Hero = {
    id: 1,
    name: "Gregory Gonzalez"
  } ;

  estudiantes: Hero[] = [];
  selectedHero?: Hero;
  
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.mensajeService.add(`Seleccionó al estudiante con id = ${hero.id}`);
  }

  constructor(private heroService: HeroService, private mensajeService: MensajeService) {}

  getEstudiantes(): void{
    this.estudiantes = this.heroService.getEstudiantes();
  }


  ngOnInit(): void {
    this.getEstudiantes();
  }

}
