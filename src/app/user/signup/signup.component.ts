import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  user: User = { name: "", email: "", mobNo: "", password: "" };
  constructor(private userService: UserService, private navigator: Router) {}

  ngOnInit() {}

  signup() {
    console.log(this.user);
    this.userService.addUser(this.user).subscribe((res) => {
      console.log(res.statusCode);
      if (res.statusCode == 200) {
        this.navigator.navigateByUrl("/login");
        console.log("Success");
      } else {
        console.log("Failed");
      }
    });
  }
}
