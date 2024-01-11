import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyecto7';
  dadoIzquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice4.png';

  numero1 = 1;
  numero2 = 2;

  lanzardados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoDerecha = '../assets/img/dice' + this.numero2 + '.png';
    this.dadoIzquierda = '../assets/img/dice' + this.numero1 + '.png';
  }

  /*aplicar_sonido(numero: number): void {
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + numero + '.wav';
    audio.load();
    audio.play();
  }*/
}
/**
 * var funcion = ()=>{}
 * function nombre(){}
 * nombres(){}
 * ()=>{}
 *
 *
 * let nombre = '';
 *
 * Typescript
 *
 * nombre:Tipo de Dato
 * nombre:string
 *
 *
 */
