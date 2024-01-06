import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ItemService} from "../services/item.service";
import {CartService} from "../services/cart.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  viewType: string = "edit-user";

  @Output() changeData = new EventEmitter<any>();
  @Input({transform: booleanAttribute, alias: "showAdminControls"}) showAdminControls: boolean = false;
  userList: Array<any> = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users: Array<any>) =>{
      this.userList = users;
    });
  }

  onEdit(user: any): void {
    console.log("S-a apasat onEdit");
    this.changeData.emit(user); //metoda emit() ne ajuta sa scoatem din componenta obiectul
  }

  onDelete(user: any): void {
    console.log(user);
    this.userService.deleteUser(user.id);
  }
}
