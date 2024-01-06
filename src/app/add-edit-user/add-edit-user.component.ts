import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent {
  @Output() viewTypeChange= new EventEmitter<string>();

  @Input("user") userData: any = null;
  id: string = "";
  userName : FormControl<string | null> = new FormControl('', [Validators.required]);
  email : FormControl<string | null>  = new FormControl('', [Validators.required]);
  password : FormControl<string | null> = new FormControl('', [Validators.required]);
  retypePassword : FormControl<string | null> = new FormControl('', [Validators.required]);

  constructor(private userService: UserService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.userData != null) {
      this.id = this.userData.id;
      this.userName = new FormControl(this.userData.userName, [Validators.required]);
      this.email = new FormControl(this.userData.email, [Validators.required]);
      this.password = new FormControl(this.userData.password, [Validators.required]);
      this.retypePassword = new FormControl(this.userData.retypePassword, [Validators.required]);
    }
  }

  getErrorMessage(input: FormControl): any {
    if (input.hasError('required')) {
      return 'You must enter a value';
    }
    return "";
  }
  onSave(): void {
    let body = {
      "id": this.id,
      "userName": this.userName.getRawValue()!,
      "email": this.email.getRawValue()!,
      "password": this.password.getRawValue()!,
      "retypePassword": this.retypePassword.getRawValue()!
    };
    if (body.password != body.retypePassword) {
      alert("Parolele nu sunt egale!");
    } else if (this.id == "") {
      this.userService.createUser(body);
    } else {
      this.userService.updateUser(body);
    }
    this.resetForm();
  }

  public resetForm(): void {
    this.id = "";
    this.userName = new FormControl("", [Validators.required]);
    this.email = new FormControl("", [Validators.required]);
    this.password = new FormControl("", [Validators.required]);
    this.retypePassword = new FormControl("", [Validators.required]);
    this.userData = null;
  }

  public setViewType(viewType: string) {
    this.viewTypeChange.emit(viewType);
  }
}
