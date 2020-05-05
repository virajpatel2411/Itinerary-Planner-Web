import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { UserLogin } from "../interfaces/user-login";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<any> {
    console.log(JSON.parse(JSON.stringify(user)) + "");
    return this.http.post(
      "http://localhost:9999/signup",
      JSON.parse(JSON.stringify(user))
    );
  }

  loginUser(user: UserLogin): Observable<any> {
    return this.http.post(
      "http://localhost:9999/login",
      JSON.parse(JSON.stringify(user))
    );
  }
}
