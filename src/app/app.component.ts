import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListItemComponent} from "./list-item/list-item.component";
import {MatButtonModule} from "@angular/material/button";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DashboardComponent, ListItemComponent, MatButtonModule, HomeComponent, AuthComponent],
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
