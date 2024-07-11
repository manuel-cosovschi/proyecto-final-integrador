import { Injectable } from '@angular/core';
import { Auth , onAuthStateChanged, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor( private auth: Auth) {
    onAuthStateChanged(this.auth, user => {
      if (user) {
        this.loggedIn.next(true); // Usuario autenticado
      } else {
        this.loggedIn.next(false); // Usuario no autenticado
      }
    });
  }

  login({email,password}:any){
    this.loggedIn.next(true);
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  logout(){
    this.loggedIn.next(false);
    return signOut(this.auth);
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

}