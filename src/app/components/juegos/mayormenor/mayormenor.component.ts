import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mayormenor',
  standalone: true,
  imports: [],
  templateUrl: './mayormenor.component.html',
  styleUrl: './mayormenor.component.css'
})
export class MayormenorComponent implements OnInit{
  aciertos: number = 0;
  mensaje: string = "";
  numeroIngresado: number = 0;

  texto: string = "Elije";

  constructor( private router: Router ) {}

  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  numeroElegido!: number;
  numeroAnterior!: number;

  anteUltimoNumero!: number;

  derrotado: boolean = false;

  imagenNumeroAnterior! : string;
  imagenanteUltimoNumero! : string;

  botonPulsado(eleccion: string) {
    this.numeroElegido = this.numeros[Math.floor(Math.random() * this.numeros.length)];

    while (this.numeroElegido == this.numeroAnterior) {
      this.numeroElegido = this.numeros[Math.floor(Math.random() * this.numeros.length)];
    }

    if (eleccion == "mayor") {
      if (this.numeroElegido > this.numeroAnterior) {
        this.aciertos++;
        this.opcionAcertada();
      } else {
        this.opcionIncorrecta();
      }
    } else if (eleccion == "menor") {
      if (this.numeroElegido < this.numeroAnterior) {
        this.aciertos++;
        this.opcionAcertada();
      } else {
        this.opcionIncorrecta();
      }
    }

    this.anteUltimoNumero = this.numeroAnterior;
    this.imagenanteUltimoNumero = "assets/mayormenor/cartas/" + this.anteUltimoNumero + ".jpg";

    this.numeroAnterior = this.numeroElegido;
    this.imagenNumeroAnterior = "assets/mayormenor/cartas/" + this.numeroAnterior + ".jpg";

  }

  opcionAcertada(){
    this.texto = "Correcto!";
    setTimeout(() => {
      this.texto = "Elije";
    }, 2000);
  }

  opcionIncorrecta(){
    this.derrotado = true;
    this.texto = "ERROR";
    setTimeout(() => {
      Swal.fire({
        title: "Has perdido!",
        text: "Tu puntuacion fue de: " + this.aciertos + " - ¿Quieres jugar de nuevo?",
        icon: "error",
        heightAuto: false,
        showDenyButton: true,
        confirmButtonText: "Jugar de nuevo",
        denyButtonText: `Salir`,
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/mayormenor";
        } else if (result.isDenied) {
          this.redirectTo("home");
        }
      });
    }, 1000);
  }

  ngOnInit() {

    this.derrotado = false;
    
    this.anteUltimoNumero = 0;
    this.numeroAnterior = this.numeros[Math.floor(Math.random() * this.numeros.length)];
    this.numeroElegido = this.numeros[Math.floor(Math.random() * this.numeros.length)];
    
    this.imagenNumeroAnterior = "assets/mayormenor/cartas/" + this.numeroAnterior + ".jpg";

    while (this.numeroElegido == this.numeroAnterior) {
      this.numeroElegido = this.numeros[Math.floor(Math.random() * this.numeros.length)];
    }
  }

  redirectTo(destino: string) {
    this.router.navigateByUrl(destino);
  }
}
