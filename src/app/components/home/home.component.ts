import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ChatComponent } from '../chat/chat.component';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  email: any =  "";
  isAuthenticated: boolean = false;

  isChatActive: boolean = false;

  private userSubscription: Subscription = new Subscription();

  juegos = [
    {
      title: "Ahorcado",
      img: "",
      pathImagen: "/assets/home/ahorcado.jpg",
      pathJuego: "/ahorcado",
    },
    {
      title: "¿Mayor o menor?",
      img: "",
      pathImagen: "/assets/home/mayormenor.jpg",
      pathJuego: "/mayormenor",
    },
    {
      title: "Evitaminas ContraReloj",
      img: "",
      pathImagen: "/assets/home/buscaminas.jpeg",
      pathJuego: "/buscaminas",
    },
    {
      title: "Preguntados",
      img: "",
      pathImagen: "/assets/home/preguntados.png",
      pathJuego: "/preguntados_pokemon",
    },
  ];

  constructor( private auth: AuthService, private router: Router) {}

  receiveChatOutput(event: any) {
    this.isChatActive = event;
  }

  redirectTo(destino: string) {
    if(destino === "login"){
      this.auth.logout();
    }
    this.router.navigateByUrl(destino);
  }

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated();

    this.userSubscription = this.auth.userActual$.subscribe(
      (user) => {
        this.isAuthenticated = user ? true : false;
        this.email = user?.email;
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
