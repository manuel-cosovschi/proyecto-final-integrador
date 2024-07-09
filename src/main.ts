import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTES_PROVIDER } from './app/app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

bootstrapApplication(AppComponent, {
  providers: [
    APP_ROUTES_PROVIDER,
    importProvidersFrom(ReactiveFormsModule, HttpClientModule), provideFirebaseApp(() => initializeApp({"projectId":"proyecto-final-integrado-1fd94","appId":"1:487065198070:web:c9d4048e604f2679fcfbd7","storageBucket":"proyecto-final-integrado-1fd94.appspot.com","apiKey":"AIzaSyAdZO2MmWKmBBNOfdcEqT6opYTYmklcNbA","authDomain":"proyecto-final-integrado-1fd94.firebaseapp.com","messagingSenderId":"487065198070"})), provideAuth(() => getAuth())
  ],
}).catch(err => console.error(err));


