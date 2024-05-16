import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  mensajes: any[] = [];
  observable: any;

  constructor( private firestore: FirestoreService ) {}

  ngOnInit(): void {
    this.observable = this.firestore.traer("mensajes", "time", "desc").subscribe(
      (data) => {
        this.mensajes = data;
      }
    )
  }

  ngOnDestroy(): void {
    this.observable.unsuscribe();
  }
}
