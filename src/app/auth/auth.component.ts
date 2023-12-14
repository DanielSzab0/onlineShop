import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  viewType: string = "login";

  userName: FormControl<string | null> = new FormControl('', [Validators.required]);
  email: FormControl<string | null>  = new FormControl('', [Validators.required]);
  password : FormControl<string | null> = new FormControl('', [Validators.required]);
  retypePassword: FormControl<string | null> = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService) {

  }

  getErrorMessage(input: FormControl): any {
    if (input.hasError('required')) {
      return 'You must enter a value';
    }

    return "";
  }

  onLogIn(): void {
    let body = {
      "email": this.email.getRawValue()!,
      "password": this.password.getRawValue()!
    };
    this.authService.login(body).subscribe((response: any) => {
      console.log(response);
    })
  }

  onRegister(): void {
    let body = {
      "username": this.userName.getRawValue()!,
      "email": this.email.getRawValue()!,
      "password": this.password.getRawValue()!,
      "retypePassword": this.retypePassword.getRawValue()!
    };
    if (body.password != body.retypePassword) {
      alert("Parolele nu sunt egale!");
    } else {
      this.authService.register(body).subscribe((response: any) => {
        console.log(response);
      })
    }
  }

  public setViewType(viewType: string) {
    this.viewType = viewType;
  }
}
