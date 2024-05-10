import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  email: any =  "";
  isAuthenticated: boolean = false;

  constructor( private auth: AuthService, private router: Router) {}

  redirectTo(destino: string) {
    this.router.navigateByUrl(destino);
  }

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated();
    this.email = this.auth.getUser()?.email;
  }

}
