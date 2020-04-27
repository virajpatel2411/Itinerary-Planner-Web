import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/user";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  user: User = { name: "", email: "", mobNo: "", password: "" };

  constructor() {}

  ngOnInit() {}

  signup() {
    console.log(this.user);
  }
}
