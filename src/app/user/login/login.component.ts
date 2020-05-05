import { Component, OnInit } from "@angular/core";
import { UserLogin } from "src/app/interfaces/user-login";
import { UserService } from "src/app/services/user.service";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import * as bcrypt from "bcryptjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: UserLogin = { email: "", password: "" };
  pass: string;
  constructor(
    private userService: UserService,
    private authService: AuthServiceService,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.isLogin.next(true);
    const salt = bcrypt.genSaltSync(10);
    this.pass = bcrypt.hashSync(this.user.password, salt);
    localStorage.setItem("user", this.pass);
    console.log(this.user);
    this.auth.auth
      .signInWithEmailAndPassword(this.user.email, this.user.password)
      .then((value) => {
        this.router.navigateByUrl("/home");
      })
      .catch((err) => {
        alert("Failed to Sign In");
      });
  }
}
