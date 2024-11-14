import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterModule,Routes } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

   
    loginForm!: FormGroup;
    constructor(private formBuilder: FormBuilder, private router: Router) { 
        console.log("LoginComponent constructor called");
    }

    ngOnInit() {
        console.log("LoginComponent ngOnInit called");
        this.loginForm = this.formBuilder.group({
            loginid: ["pavithra"],
            password: []
        }
        );
    }
    onSubmit() {
        console.log(this.loginForm.value);
        const loginid : string = this.loginForm.value.loginid;
        const password : string = this.loginForm.value.password;

        if(loginid === "pavithra" && password === "pavi@123") {
            console.log("Login successful");
            sessionStorage.setItem("loggedIn", "yes");
            this.router.navigate(["/issues"]);
        } else {
            console.log("Login failed");
        }
    }
}
