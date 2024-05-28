import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscaminas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscaminas.component.html',
  styleUrl: './buscaminas.component.css'
})
export class BuscaminasComponent implements OnInit {
  rows = 8; // Número de filas
  cols = 8; // Número de columnas
  mines = 3; // Número de minas
  restantes = 20;
  score = 0;
  terminado = false;
  toast = false;
  dificultad: string = 'facil'; 

  board: any[][] = [];
  gameover: boolean = false;

  constructor( private auth: AuthService, private router: Router ){}

  comenzarJuego() {
    this.board = [];

    for (let i = 0; i < this.rows; i++) {
      let row = [];
      for (let j = 0; j < this.cols; j++) {
        row.push({ revealed: false, hasMine: false });
      }
      this.board.push(row);
    }

    for (let i = 0; i < this.mines; i++) {
      let randomRow = Math.floor(Math.random() * this.rows);
      let randomCol = Math.floor(Math.random() * this.cols);
      this.board[randomRow][randomCol].hasMine = true;
    }

    // this.mensaje = 'Comenzando...';
    // this.toast = true;
    // setTimeout(() => {
    //   this.toast = false;
    // }, 3000);
  }

  revealCell(row: number, col: number) {
    console.log(row, col);
    if (this.gameover || this.board[row][col].revealed) {
      return;
    }

    this.board[row][col].revealed = true;

    if (this.board[row][col].hasMine) {
      this.gameover = true;
      this.terminado = true;

      setTimeout(() => {
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
            window.location.href = "/buscaminas";
          } else if (result.isDenied) {
            this.redirectTo("home");
          }
        });
      }, 1000);
    }
    else
    {
      this.restantes--;
      this.score++;

      if(this.restantes === 0)
      {
        this.terminado = true;
        this.gameover = true;
        Swal.fire({
          title: "Has GANADO!",
          text: "Tu puntuacion fue de: " + this.score + " - ¿Quieres jugar de nuevo?",
          icon: "success",
          heightAuto: false,
          showDenyButton: true,
          confirmButtonText: "Jugar de nuevo",
          denyButtonText: `Salir`,
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/buscaminas";
          } else if (result.isDenied) {
            this.redirectTo("home");
          }
        });
      }
    }

    
    this.toast = true;
    setTimeout(() => {
      this.toast = false;
    }, 1500);
  }

  reiniciar() {
    this.terminado = false;
    this.gameover = false;
    this.score = 0;
    this.comenzarJuego();

    this.toast = true;
    setTimeout(() => {
      this.toast = false;
    }, 3000);
  }

  setDificulty(dificultad: string) {
    this.dificultad = dificultad;
    switch(dificultad.toLowerCase()) {
      case 'facil':
        this.mines = 3;
        this.restantes = 20;
      break;
      case 'medio':
        this.mines = 5;
        this.restantes = 40;
      break;
      case 'dificil':
        this.mines = 7;
        this.restantes = 57;
      break;
    }

    this.reiniciar();
  }

  ngOnInit() {
    this.comenzarJuego();
  }

  redirectTo(destino: string) {
    this.router.navigateByUrl(destino);
  }
}
