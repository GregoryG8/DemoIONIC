import { Injectable } from '@angular/core';
import { Hero } from "./tab4/hero";
import { ESTUDIANTES } from "./tab4/estudiantes";
import { MensajeService } from './mensaje.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  

  constructor(private mensajeService: MensajeService) { }

  getEstudiantes(): Hero[] {
    this.mensajeService.add('');
    return ESTUDIANTES;
  }

}
