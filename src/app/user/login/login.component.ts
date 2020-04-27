import { Component, OnInit } from "@angular/core";
import { UserLogin } from "src/app/interfaces/user-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: UserLogin = { email: "", password: "" };

  constructor() {}

  ngOnInit() {}

  login() {
    console.log(this.user);
  }
}
