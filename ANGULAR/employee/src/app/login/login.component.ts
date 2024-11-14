import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    // ! symbol is used to tell the compiler that the variable will be initialized later
    // loginForm! : FormGroup;
    // FormBuilder is a service that provides convenient methods for creating instances of FormControl, FormGroup, and FormArray
    loginForm!: FormGroup;
    constructor(private formBuilder: FormBuilder, private router: Router) { 
        console.log("LoginComponent constructor called");
    }

    ngOnInit() {
        console.log("LoginComponent ngOnInit called");
        this.loginForm = this.formBuilder.group({
            loginid: ["pavi"],
            password: []
        }
        );
    }
    onSubmit() {
        console.log(this.loginForm.value);
        const loginid : string = this.loginForm.value.loginid;
        const password : string = this.loginForm.value.password;

        if(loginid === "pavi" && password === "abhi") {
            console.log("Login successful");
            sessionStorage.setItem("loggedIn", "yes");
            this.router.navigate(["/employees"]);
        } else {
            console.log("Login failed");
        }
    }
}
