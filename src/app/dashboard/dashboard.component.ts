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

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatCardModule, MatButtonModule, AddEditItemComponent, ListItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
