import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimations(), provideAnimationsAsync('noop'), provideFirebaseApp(() => initializeApp({"projectId":"desafio3-fa938","appId":"1:972178826212:web:5e8379302926bba5935df1","storageBucket":"desafio3-fa938.firebasestorage.app","apiKey":"AIzaSyCSXJlUtf1-fUwt_7ONTJKU6-ZYpe72ge8","authDomain":"desafio3-fa938.firebaseapp.com","messagingSenderId":"972178826212","measurementId":"G-HKJW96ZZ2T"})), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"desafio3-fa938","appId":"1:972178826212:web:5e8379302926bba5935df1","storageBucket":"desafio3-fa938.firebasestorage.app","apiKey":"AIzaSyCSXJlUtf1-fUwt_7ONTJKU6-ZYpe72ge8","authDomain":"desafio3-fa938.firebaseapp.com","messagingSenderId":"972178826212","measurementId":"G-HKJW96ZZ2T"})), provideAuth(() => getAuth())]
};
