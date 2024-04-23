import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"saladejuegos-iannello","appId":"1:192641821759:web:0df7484acedb8d3bc55c8a","storageBucket":"saladejuegos-iannello.appspot.com","apiKey":"AIzaSyAs4myXDiAp9DyE-rpjhR8TQazGGyhpo2U","authDomain":"saladejuegos-iannello.firebaseapp.com","messagingSenderId":"192641821759"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
