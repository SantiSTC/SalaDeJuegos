import { Injectable } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirestoreService } from './firestore.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string = "";

  private userObj: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null); 

  userActual$ = this.userObj.asObservable();

  constructor( private auth: Auth, private firestore: FirestoreService ) {
    this.auth.onAuthStateChanged((user) => {
      this.userObj.next(user);
    });
   }

  login(email: string, password: string) {
    let ret;

    try {
      this.email = email;
      ret = signInWithEmailAndPassword(this.auth, email, password).then(
        (data) => {
          this.guardarLog();
        }
      );
    } catch (e) {
      console.log(e);
      ret = null;
    }

    return ret;
  }

  logout() {
    let ret;

    try {
      ret = signOut(this.auth);
      this.email = "";
    } catch (e) {
      console.log(e);
      ret = null;
    }

    return ret;
  }

  register(email: string, password: string) {
    let ret;

    try {
      ret = createUserWithEmailAndPassword(this.auth, email, password);
    } catch (e) {
      console.log(e);
      ret = null;
    }

    return ret;
  }

  getUser() {
    return this.userObj.value;
  }

  isAuthenticated(): boolean {
    return this.email !== "";
  }

  guardarLog() {
    let fecha = new Date();

    let dia = fecha.toLocaleDateString('es-ES', { 
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '/');
    let hora = fecha.toLocaleTimeString('es-ES', { 
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    let fechaHora = `${dia} ${hora}`;

    let obj = {
      user: this.email,
      date: fechaHora,
    };

    this.firestore.guardar('logins', obj);
  }
}
