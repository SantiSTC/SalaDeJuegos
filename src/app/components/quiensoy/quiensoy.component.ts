import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiensoy',
  standalone: true,
  imports: [],
  templateUrl: './quiensoy.component.html',
  styleUrl: './quiensoy.component.css'
})
export class QuiensoyComponent {
  git:string = "https://api.github.com/users/SantiSTC";
  perfil:any;
  explicacion!:string;

  constructor( private router:Router, private http: HttpClient) {}

  ngOnInit()
  {
    this.http.get(this.git).subscribe((res:any) => this.perfil = res);
    this.explicacion = "El juego 'Evitaminas', trata de despejar la cantidad exigida de cuadritos, sin encontrarse con una mina. En caso de pisar o tocar una mina, explotará y, por ende, terminará el juego."
  }

  redirectTo(destino: string) {
    this.router.navigateByUrl(destino);
  }
}
