import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemObservable = new BehaviorSubject<Array<any>>([])

  constructor(private httpClient: HttpClient) {
    this.readItems();
  }

  public getItems() {
    return this.itemObservable.asObservable();
  }

  public createItem(item: any) {
    let body = {
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
      price: item.price
    }
    this.httpClient.post("https://api.codebyte-software.com:2323/api/items", body).subscribe((response: any) => {
      console.log(response)
      this.readItems();
    })
  }

  public readItems() {
    this.httpClient.get("https://api.codebyte-software.com:2323/api/items").subscribe((response: any) => {
      console.log(response)
      this.itemObservable.next(response.data);
    })
  }

  public deleteItem(id: string) {
    this.httpClient.delete(`https://api.codebyte-software.com:2323/api/items/${id}`).subscribe((response: any) => {
      console.log(response);
      this.readItems();
    });
  }

  public updateItem(item: any) {
    let body = {
      id: item.id,
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
      price: item.price
    }
    this.httpClient.put("https://api.codebyte-software.com:2323/api/items", body).subscribe((response: any) => {
      console.log(response);
      this.readItems();
    })
  }
}
