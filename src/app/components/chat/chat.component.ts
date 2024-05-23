import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() isActiveChange = new EventEmitter<boolean>();

  email: any = "";
  mensajes: any[] = [];
  mensaje: string = "";
  private observable: Subscription = new Subscription();

  constructor( private auth: AuthService, private firestore: FirestoreService ) {}


  emitIsActiveChange() {
    this.isActive = false;
    this.isActiveChange.emit(this.isActive);
  }

  sendMessage() {
    if(this.mensaje != "") {
      let now = new Date();
      let day = ("0" + now.getDate()).slice(-2);
      let month = ("0" + (now.getMonth() + 1)).slice(-2);
      let year = now.getFullYear();
      let hours = ("0" + now.getHours()).slice(-2);
      let minutes = ("0" + now.getMinutes()).slice(-2);
      let seconds = ("0" + now.getSeconds()).slice(-2);

      let mensaje = {
          email: this.auth.getUser()?.email,
          time: `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`,
          content: this.mensaje,
      };
  
      this.firestore.guardar("mensajes", mensaje);
      this.mensaje = "";
      
      let ultimoMensaje = document.getElementById('mensaje' + (this.mensajes.length - 1));
      ultimoMensaje?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  ngOnInit(): void {
    this.email = this.auth.getUser()?.email;

    this.observable = this.firestore.traer("mensajes", "time", "asc").subscribe(
      (data) => {
        this.mensajes = data;
        setTimeout(() => {
          let ultimoMensaje = document.getElementById('mensaje' + (this.mensajes.length - 1));
          ultimoMensaje?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 0);
      }
    )
  }

  ngOnDestroy(): void {
    this.observable.unsubscribe();
  }

}
