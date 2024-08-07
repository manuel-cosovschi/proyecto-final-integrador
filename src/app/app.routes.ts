import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductListComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent }
];

export const APP_ROUTES_PROVIDER = provideRouter(routes);





