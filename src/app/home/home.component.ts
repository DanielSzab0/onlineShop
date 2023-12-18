import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ListItemComponent} from "../list-item/list-item.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {Router} from "@angular/router";
import {CartButtonComponent} from "../cart-button/cart-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, ListItemComponent, MatSidenavModule, MatCardModule, CartButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {

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
}
