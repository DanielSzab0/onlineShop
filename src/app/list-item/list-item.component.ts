import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ItemService} from "../services/item.service";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  viewType: string = "edit-item";

  @Output() changeData = new EventEmitter<any>();
  @Input({transform: booleanAttribute, alias: "showAdminControls"}) showAdminControls: boolean = false;
  itemList: Array<any> = [];

  constructor(private itemService: ItemService, private cartService: CartService) {
    this.itemService.getItems().subscribe((items: Array<any>) =>{
      this.itemList = items;
    });
  }

  onEdit(item: any): void {
    console.log("S-a apasat onEdit");
    this.changeData.emit(item);
  }

  onDelete(item: any): void {
    console.log(item);
    this.itemService.deleteItem(item.id);
  }

  onBuy(item: any): void {
    this.cartService.addToCart(item);
  }
}
