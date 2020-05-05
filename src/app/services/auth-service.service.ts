import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  isLogin = new BehaviorSubject<boolean>(false);

  constructor() {}
}
