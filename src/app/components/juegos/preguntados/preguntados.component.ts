import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PaisesService } from '../../../services/paises.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss'],
  providers: [PaisesService]
})
export class PreguntadosComponent implements OnInit {
  intentosRestantes = 10;
  score = 0;
  toast = false;
  sePuede = false;
  esCorrecto: number = 0;
  mensaje = '';

  paises: any[] = [];
  paisesEnJuego: any[] = [];
  paisCorrecto: any;

  constructor( private paisesService: PaisesService, private auth: AuthService, private router: Router, private http: HttpClient ){}

  comenzarJuego() {
    this.sePuede = true;
    this.paisesEnJuego = this.paises.sort(() => Math.random() - 0.5);
    this.paisesEnJuego = this.paisesEnJuego.slice(0,4);
    this.paisCorrecto = this.paisesEnJuego.slice().sort(() => 0.5 - Math.random())[0];
  }

  elegirPokemon(p:any) {
    if(this.sePuede)
    {
      if(this.paisCorrecto.name === p.name)
      {
        this.mensaje = 'Correcto';
        this.score++;
        
        this.esCorrecto = 1;
        setTimeout(() => {
          this.esCorrecto = 0;
        }, 500);
      }
      else
      {
        this.mensaje = 'Incorrecto';
        this.intentosRestantes--;

        this.esCorrecto = -1;
        setTimeout(() => {
          this.esCorrecto = 0;
        }, 500);
      }

      this.toast = true;
      setTimeout(() => {
        this.toast = false;
      }, 3000);
      
      if(this.intentosRestantes > 0)
      {
        this.sePuede = false;
        setTimeout(() => {
          this.comenzarJuego();
        }, 500);
      }
      else
      {
        Swal.fire({
          title: "Has perdido!",
          text: "Tu puntuacion fue de: " + this.score + " - ¿Quieres jugar de nuevo?",
          icon: "error",
          heightAuto: false,
          showDenyButton: true,
          confirmButtonText: "Jugar de nuevo",
          denyButtonText: `Salir`,
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/preguntados";
          } else if (result.isDenied) {
            this.redirectTo("home");
          }
        });

        this.sePuede = false;
        this.toast = true;
        setTimeout(() => {
          this.toast = false;
        }, 3000);
      }
    }
  }

  reiniciar() {
    this.paisesEnJuego = [];
    this.paisCorrecto = {};
    this.intentosRestantes = 10;
    this.score = 0;
    this.mensaje = 'Reiniciando...';
    this.toast = true;
      setTimeout(() => {
        this.toast = false;
      }, 3000);
    this.comenzarJuego();
  }

  ngOnInit() {
    console.log(this.paises);
    this.obtenerTodosLosPaises();
    console.log(this.paises);
    this.comenzarJuego();
  }

  obtenerTodosLosPaises() {
    this.http.get('https://restcountries.com/v2/all').subscribe((listaDePaises: any) => {
      listaDePaises.map((auxPais: any) => {
        let pais = {
          name: auxPais.name.common,
          flag: auxPais.flags.png
        }

        this.paises.push(pais);
      })
    });
  }

  redirectTo(destino: string) {
    this.router.navigateByUrl(destino);
  }

}
