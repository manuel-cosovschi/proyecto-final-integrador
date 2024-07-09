import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  private subscription: Subscription;

  constructor(private router: Router, private auth: AuthService) {
    this.subscription = this.auth.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    })
  }

  goHome() {
    this.router.navigate(['']);
  }
  
  goProducts() {
    this.router.navigate(['products']);
  }

  logout() {
    this.auth.logout()
      .then(() => {
        console.log("El usuario se deslogueó de la página.");
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error))
  }

  login(){
    this.router.navigate(['login']);
  }
}



