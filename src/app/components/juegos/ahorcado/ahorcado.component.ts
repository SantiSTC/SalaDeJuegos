import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../../chat/chat.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent implements OnInit {
  palabras = [
    "hola",
    "mundo",
    "angular",
    "javascript",
    "typescript",
    "programacion",
    "computadora",
    "teclado",
    "mouse",
    "monitor",
    "escritorio",
    "cama",
    "silla",
    "mesa",
    "ventana",
    "puerta",
    "pared",
    "techo",
    "piso",
    "casa",
    "edificio",
    "ciudad",
    "pais",
    "continente",
    "planeta",
    "sistema",
    "galaxia",
    "universo",
    "vida",
    "muerte",
    "nacimiento",
    "crecimiento",
    "desarrollo",
    "evolucion",
    "revolucion",
    "involucion",
  ];

  abecedario = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  letras: { letra: string, pulsado: boolean }[] = this.abecedario.map(letra => ({ letra, pulsado: false }));

  palabraElegida: string = "";
  letrasAcertadas: string[] = [];

  fallosCometidos = 0;
  fallosPosibles = 6;

  constructor( private router: Router ) {}

  seleccionarPalabraRandom() {
    const indice = Math.floor(Math.random() * this.palabras.length);
    const palabraRandom = this.palabras[indice];
    this.palabraElegida = palabraRandom;
  }

  redirectTo(destino: string) {
    this.router.navigateByUrl(destino);
  }

  inicializarLetrasAcertadas() {
    this.letrasAcertadas = Array(this.palabraElegida.length).fill("_");
  }

  verificarTriunfo() {
    if(this.letrasAcertadas.join("").toLowerCase() == this.palabraElegida){
      Swal.fire({
        title: "Felicitaciones!",
        text: "Has ganado! La palabra era: " + this.palabraElegida.toUpperCase(),
        icon: "success",
        heightAuto: false,
        showDenyButton: true,
        confirmButtonText: "Jugar de nuevo",
        denyButtonText: `Salir`,
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/ahorcado";
        } else if (result.isDenied) {
          this.redirectTo("home");
        }
      });
    }
  }

  verificarDerrota() {
    if(this.fallosCometidos == this.fallosPosibles){
      Swal.fire({
        title: "Has perdido!",
        text: "Te quedaste sin intentos :( La palabra era: " + this.palabraElegida.toUpperCase(),
        icon: "error",
        heightAuto: false,
        showDenyButton: true,
        confirmButtonText: "Jugar de nuevo",
        denyButtonText: `Salir`,
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/ahorcado";
        } else if (result.isDenied) {
          this.redirectTo("home");
        }
      });
    }
  }

  letraPulsada(letra: string) {
    this.letras.forEach((element) => {
      if (element.letra === letra) {
        element.pulsado = true;
      }
    });
    
    if (this.palabraElegida.includes(letra.toLowerCase())) {
      this.palabraElegida.split("").forEach((letraPalabra, index) => {
        if (letraPalabra == letra.toLowerCase()) {
          this.letrasAcertadas[index] = letra;
        }
      });
    } else {
      this.fallosCometidos++;
    }

    console.log("Acertadas: " + this.letrasAcertadas.join(""));
    console.log("Palabra: " + this.palabraElegida);

    this.verificarDerrota();
    this.verificarTriunfo();
  }

  ngOnInit() {
    this.seleccionarPalabraRandom();
    this.inicializarLetrasAcertadas();
    console.log(this.palabraElegida);
  }
}
