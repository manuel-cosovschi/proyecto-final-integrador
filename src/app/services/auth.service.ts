import { Injectable } from '@angular/core';
import { Auth , signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor( private auth: Auth) { }

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