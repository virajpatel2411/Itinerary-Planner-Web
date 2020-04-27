import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./user/signup/signup.component";
import { LoginComponent } from "./user/login/login.component";

@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
