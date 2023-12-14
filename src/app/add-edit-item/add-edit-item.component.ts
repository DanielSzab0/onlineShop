import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-add-edit-item',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent implements OnChanges {
  @Input("item") itemData: any = null;
  id: string = "";
  title : FormControl<string | null> = new FormControl('', [Validators.required]);
  description : FormControl<string | null>  = new FormControl('', [Validators.required]);
  imageUrl : FormControl<string | null> = new FormControl('', [Validators.required]);
  price : FormControl<string | null> = new FormControl('', [Validators.required]);

  constructor(private itemService: ItemService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.itemData != null) {
      this.id = this.itemData.id;
      this.title = new FormControl(this.itemData.title, [Validators.required]);
      this.description = new FormControl(this.itemData.description, [Validators.required]);
      this.imageUrl = new FormControl(this.itemData.imageUrl, [Validators.required]);
      this.price = new FormControl(this.itemData.price, [Validators.required]);
    }
  }

  getErrorMessage(input: FormControl): any {
    if (input.hasError('required')) {
      return 'You must enter a value';
    }

    return "";
  }
  onSave(): void {
    let item = {
      "id": this.id,
      "title": this.title.getRawValue()!,
      "description": this.description.getRawValue()!,
      "imageUrl": this.imageUrl.getRawValue()!,
      "price": this.price.getRawValue()!
      //semnul ! asigura compilatorul ca valoarea returnata este diferita de null (null operator)
    };
    console.log(item);
    if (this.id == "") {
      this.itemService.createItem(item);
    } else {
      this.itemService.updateItem(item);
    }
    this.resetForm();
  }

  public resetForm(): void {
    this.id = "";
    this.title = new FormControl("", [Validators.required]);
    this.description = new FormControl("", [Validators.required]);
    this.imageUrl = new FormControl("", [Validators.required]);
    this.price = new FormControl("", [Validators.required]);
    this.itemData = null;
  }
}
