import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { SignupComponent } from "./user/signup/signup.component";
import { LoginComponent } from "./user/login/login.component";
import { HomeComponent } from "./user/home/home.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBu6fHhQ-PHBI819Hed6sv0wQ0JmzGFl0U",
  authDomain: "itinerary-planner-d6bf7.firebaseapp.com",
  databaseURL: "https://itinerary-planner-d6bf7.firebaseio.com",
  projectId: "itinerary-planner-d6bf7",
  storageBucket: "itinerary-planner-d6bf7.appspot.com",
  messagingSenderId: "427214739164",
  appId: "1:427214739164:web:9691e13b782ee16225c619",
  measurementId: "G-VF6FPV8Z2N",
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
