import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService) {}

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



  // logout(): void {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }

}


