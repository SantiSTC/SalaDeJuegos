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
