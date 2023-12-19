import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartObservable = new BehaviorSubject<Array<any>>([]);

  constructor(private userService: UserService, private httpClient: HttpClient) {
    
  }

  public addToCart(item: any): void {
    let items = this.cartObservable.getValue();
    items.push(item);
    this.cartObservable.next(items);
  }

  public removeFromCart(item: any): void {
    let items = this.cartObservable.getValue();

    items = items.filter((it: any) => it.id != item.id);
    this.cartObservable.next(items);
  }

  public getCart() {
    return this.cartObservable.asObservable()
  }
}










