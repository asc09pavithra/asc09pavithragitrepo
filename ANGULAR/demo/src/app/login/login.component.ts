import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router' 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup ;
  constructor(private formBuilder: FormBuilder,private router: Router){
    console.log("LoginComponent constructor called");
  }
ngOnInit(){
  console.trace('ngOnInit called');
  console.log("LoginComponent ngOnInit called");
  this.loginForm=this.formBuilder.group({
    loginid : ["panda"],
    password :[]
  });
}
onSubmit(){
  console.log(this.loginForm.value);
  const loginid : string = this. loginForm.value.loginid;
  const password : string = this. loginForm.value.password;


 if(loginid === "panda"  && password === "pass"){
  console.log("Login SucessFull");
  sessionStorage.setItem("LoggedIn","yes");
  this.router.navigate(["/employees"]);
 }
 else{
  console.log("Login Failed");
 }

}
}

