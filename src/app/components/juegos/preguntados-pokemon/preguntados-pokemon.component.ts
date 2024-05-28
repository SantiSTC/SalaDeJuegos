import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-preguntados-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './preguntados-pokemon.component.html',
  styleUrl: './preguntados-pokemon.component.css',
  providers: [PokemonService]
})
export class PreguntadosPokemonComponent {
  pokemones: any[] = [];
  pokemonesEnJuego: any[] = [];
  pokemonCorrecto:any;
  intentosRestantes = 10;
  score = 0;
  toast = false;
  sePuede = false;
  esCorrecto: number = 0;
  mensaje = '';
  rutaImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/?.png';

  constructor(private pokemonService: PokemonService, private auth: AuthService, private router: Router){}

  comenzarJuego() {
    this.sePuede = true;
    this.pokemonesEnJuego = this.pokemones.sort(() => Math.random() - 0.5);
    this.pokemonesEnJuego = this.pokemonesEnJuego.slice(0,4);
    this.pokemonCorrecto = this.pokemonesEnJuego.slice().sort(() => 0.5 - Math.random())[0];
  }

  elegirPokemon(p:any) {
    if(this.sePuede)
    {
      if(this.pokemonCorrecto.name === p.name)
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
            window.location.href = "/preguntados_pokemon";
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
    this.pokemonesEnJuego = [];
    this.pokemonCorrecto = {};
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
    let promesa = this.pokemonService.traerPokemones().toPromise();
    promesa.then((data)=>{
      let pokemones = data.results;
      for(let i = 0; i < pokemones.length; i++)
      {
        this.pokemones.push({name: pokemones[i].name, foto: this.rutaImagen.replace('?', `${data.results[i].url.split("/")[6]}`)});
      }
      console.log(this.pokemones);
      this.comenzarJuego();
    });
  }

  redirectTo(destino: string) {
    this.router.navigateByUrl(destino);
  }

}
