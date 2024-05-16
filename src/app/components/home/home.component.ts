import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  email: any =  "";
  isAuthenticated: boolean = false;

  juegos = [
    {
      title: "Ahorcado",
      img: "",
      pathImagen: "/assets/home/ahorcado.jpg",
      pathJuego: "",
    },
    {
      title: "¿Mayor o menor?",
      img: "",
      pathImagen: "/assets/home/mayormenor.jpg",
      pathJuego: "",
    },
  ];

  constructor( private auth: AuthService, private router: Router) {}

  redirectTo(destino: string) {
    this.router.navigateByUrl(destino);
  }

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated();
    this.email = this.auth.getUser()?.email;
  }

}
