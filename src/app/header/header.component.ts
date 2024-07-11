import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Subscription, EMPTY } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  isLoading: boolean = true;
  private subscription: Subscription = new Subscription();
  private loadingSubscription: Subscription = new Subscription();

  constructor(private router: Router, private auth: AuthService) {
    this.subscription = this.auth.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  ngOnInit() {
    this.loadingSubscription = this.auth.isLoadingState().subscribe(loading => {
      this.isLoading = loading;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
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
      .catch(error => console.log(error));
  }

  login() {
    this.router.navigate(['login']);
  }
}





