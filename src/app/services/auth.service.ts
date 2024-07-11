import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  public isLoading = new BehaviorSubject<boolean>(true);

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, user => {
      if (user) {
        this.loggedIn.next(true); // Usuario autenticado
      } else {
        this.loggedIn.next(false); // Usuario no autenticado
      }
      this.isLoading.next(false); // Estado de carga terminado
    });
  }

  login({ email, password }: any) {
    this.isLoading.next(true);
    return signInWithEmailAndPassword(this.auth, email, password).finally(() => {
      this.isLoading.next(false);
    });
  }

  logout() {
    this.isLoading.next(true);
    return signOut(this.auth).finally(() => {
      this.loggedIn.next(false);
      this.isLoading.next(false);
    });
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  isLoadingState() {
    return this.isLoading.asObservable();
  }
}
