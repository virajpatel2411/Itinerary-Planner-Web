import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  signup() {
    console.log(this.myForm.valid);
    console.log(this.myForm.value.firstName);
    console.log(this.myForm.value.email);
    console.log(this.myForm.value.password);
    localStorage.setItem("firstName", this.myForm.value.firstName);
  }
}
