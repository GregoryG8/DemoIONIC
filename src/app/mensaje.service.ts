import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  mensaje: string[] = [];

  add(mensaje: string) {
    this.mensaje.push(mensaje);
  }

  clear() {
    this.mensaje = [];
  }
  
}
