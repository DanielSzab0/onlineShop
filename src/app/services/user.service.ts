import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userObservable = new BehaviorSubject<Array<any>>([]);

  private user: any;

  constructor(private httpClient: HttpClient) {
    this.readUsers();
  }

  public getUser() {
    return this.user;
  }

  public getUsers() {
    return this.userObservable.asObservable();
  }

  public createUser(user: any) {
    let body = {
      userName: user.userName,
      email: user.email,
      password: user.password,
      retypePassword: user.retypePassword
    }
    this.httpClient.post("https://api.codebyte-software.com:2323/api/users", body).subscribe((response: any) => {
      console.log(response)
      this.readUsers();
    })
  }

  public readUsers() {
    this.httpClient.get("https://api.codebyte-software.com:2323/api/users").subscribe((response: any) => {
      console.log(response)
      this.userObservable.next(response.data);
    })
  }

  public deleteUser(id: string) {
    this.httpClient.delete(`https://api.codebyte-software.com:2323/api/users/${id}`).subscribe((response: any) => {
      console.log(response);
      this.readUsers();
    });
  }

  public updateUser(user: any) {
    let body = {
      id: user.id,
      userName: user.userName,
      email: user.email,
      password: user.password,
      retypePassword: user.retypePassword
    }
    this.httpClient.put("https://api.codebyte-software.com:2323/api/users", body).subscribe((response: any) => {
      console.log(response);
      this.readUsers();
    })
  }

  public setUser(user: any): void {
    this.user = user;
  }


}
