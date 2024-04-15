import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ReactiveFormsModule]
})
export class AppComponent {

  loginForm = new FormGroup({
   
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
    
  });

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('pasword')
  }

}
