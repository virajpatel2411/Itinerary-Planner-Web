import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./user/signup/signup.component";
import { LoginComponent } from "./user/login/login.component";
import { AuthServiceService } from "./services/auth-service.service";
import { SessionCheckGuard } from "./session-check.guard";
import { HomeComponent } from "./user/home/home.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent, canActivate: [SessionCheckGuard] },
  {
    path: "login",
    component: LoginComponent,
  },
  { path: "reactive", component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
