import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTES_PROVIDER } from './app/app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    APP_ROUTES_PROVIDER,
    importProvidersFrom(ReactiveFormsModule, HttpClientModule)
  ],
}).catch(err => console.error(err));


