import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {AddEditItemComponent} from "../add-edit-item/add-edit-item.component";
import {ListItemComponent} from "../list-item/list-item.component";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {AddEditUserComponent} from "../add-edit-user/add-edit-user.component";
import {ListUserComponent} from "../list-user/list-user.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatCardModule, MatButtonModule, AddEditItemComponent, ListItemComponent, MatIconModule, MatSidenavModule, MatToolbarModule, AddEditUserComponent, ListUserComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  itemData: any = null;
  userData: any = null;

  viewType: string = "edit-item"

  constructor(private router: Router) {

  }

  public itemChanged(item: any) {
    console.log("Item-ul a ajuns in Dasboard");
    console.log(item);
    this.itemData = item;
  }

  public userChanged(user: any) {
    console.log("User-ul a ajuns in Dashboard");
    console.log(user);
    this.userData = user;
  }

  onDashboardPage(): void {
    this.router.navigateByUrl('/dashboard');
  }

  onHomePage(): void {
    this.router.navigateByUrl('/home');
  }

  onLogOut(): void {
    this.router.navigateByUrl('/auth');
  }

  public setViewType(viewType: string) {
     this.viewType = viewType;
  }
}
