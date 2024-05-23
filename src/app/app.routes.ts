import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => import('./components/login/login.component').then(
            (m) => m.LoginComponent,
        ),
    },
    {
        path: "home",
        loadComponent: () => import('./components/home/home.component').then(
            (m) => m.HomeComponent,
        ),
    },
    {
        path: "quiensoy",
        loadComponent: () => import('./components/quiensoy/quiensoy.component').then(
            (m) => m.QuiensoyComponent,
        ),
    },
    {
        path: "register",
        loadComponent: () => import('./components/register/register.component').then(
            (m) => m.RegisterComponent,
        ),
    },
    {
        path: "mayor-menor",
        loadComponent: () => import('./components/juegos/mayormenor/mayormenor.component').then(
            (m) => m.MayormenorComponent,
        ),
    },
    {
        path: "ahorcado",
        loadComponent: () => import('./components/juegos/ahorcado/ahorcado.component').then(
            (m) => m.AhorcadoComponent,
        ),
    },
    {
        path: "mayormenor",
        loadComponent: () => import('./components/juegos/mayormenor/mayormenor.component').then(
            (m) => m.MayormenorComponent,
        ),
    },
    {
        path: " ",
        redirectTo: "login",
        pathMatch: "full",
    },
    {
        path: "**",
        redirectTo: "login",
        pathMatch: "full",
    },
];
