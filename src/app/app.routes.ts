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
        path: "preguntados",
        loadComponent: () => import('./components/juegos/preguntados/preguntados.component').then(
            (m) => m.PreguntadosComponent,
        ),
    },
    {
        path: "preguntados_pokemon",
        loadComponent: () => import('./components/juegos/preguntados-pokemon/preguntados-pokemon.component').then(
            (m) => m.PreguntadosPokemonComponent,
        ),
    },
    {
        path: "buscaminas",
        loadComponent: () => import('./components/juegos/buscaminas/buscaminas.component').then(
            (m) => m.BuscaminasComponent,
        ),
    },
    {
        path: " ",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "**",
        redirectTo: "home",
        pathMatch: "full",
    },
];
