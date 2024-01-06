import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListItemComponent} from "./list-item/list-item.component";
import {MatButtonModule} from "@angular/material/button";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {AddEditItemComponent} from "./add-edit-item/add-edit-item.component";
import {RouterOutlet} from "@angular/router";
import {AddEditUserComponent} from "./add-edit-user/add-edit-user.component";
import {ListUserComponent} from "./list-user/list-user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DashboardComponent, ListItemComponent, ListUserComponent, MatButtonModule, HomeComponent, AuthComponent, AddEditItemComponent, RouterOutlet, AddEditUserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineShop';
  isVisible: boolean = true;
  onChange(): void {
    this.isVisible = !this.isVisible;
  }
}
