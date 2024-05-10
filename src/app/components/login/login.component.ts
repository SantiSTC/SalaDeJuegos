import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  login() {
    this.auth.login(this.email, this.password)?.then(
      (data) => {
        setTimeout(() => {
          this.router.navigateByUrl('home');
          Swal.fire({
            title: 'Bienvenido!',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        }, 1000);
      })
      .catch((err) => {
        let mensaje: string;

        console.log(err);
        switch (err.code) {
          case 'auth/invalid-email':
            mensaje = 'Correo inválido.';
            break;
          case 'auth/user-disabled':
            mensaje = 'Este usuario ha sido deshabilitado.';
            break;
          case 'auth/user-not-found':
            mensaje = 'No se encontró ningún usuario con este correo.';
            break;
          case 'auth/wrong-password':
            mensaje = 'Contraseña incorrecta.';
            break;
          case 'auth/invalid-credential':
            mensaje = 'Credenciales de autenticación inválidas.';
            break;
          case 'auth/too-many-requests':
            mensaje = 'Demasiados intentos, intente nuevamente más tarde.';
            break;
          default:
            mensaje =
              err + '    Ocurrió un error. Por favor, inténtalo de nuevo.';
        }

        Swal.fire({
          title: 'Error',
          text: mensaje,
          icon: 'error',
          heightAuto: false,
        });
      });
  }

  handleSelection(selectedValue: Event) {
    const selectElement = event?.target as HTMLSelectElement;
    if (selectElement) {
      const selectedValue = selectElement.options[selectElement.selectedIndex].value;
      if (selectedValue) {
        const [email, password] = selectedValue.split(',');
        this.email = email;
        this.password = password;
      }
    }
  }

  redirectToRegister() {
    this.router.navigateByUrl('register');
  }
}
