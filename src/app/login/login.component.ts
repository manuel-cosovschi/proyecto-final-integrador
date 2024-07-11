import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginSuccess: boolean = false;
  loginError: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  hasErrors ( controlName: string, errorType: string){
    return this.loginForm.get(controlName)?.hasError(errorType) && this.loginForm.get(controlName)?.touched
  }

  onSubmit() {
    this.authService.login(this.loginForm.value)
      .then(response => {
        this.loginSuccess=true;
        this.loginError=false;
        console.log('Login exitoso!');
        console.log(response); 
        this.router.navigate(['']);
      })
      .catch(error => {
        this.loginError=true; 
        this.loginSuccess=false;
        console.log(error); 
      })
        
  }
}

