import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { AuthGuardService } from "./service/auth-guard.service";

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'employees', component:ListEmpComponent, canActivate: [AuthGuardService]},
   ]
   @NgModule({
       imports: [RouterModule.forRoot(routes)],
       // imports : [ BrowserModule,HttpClientModule],
       exports: [RouterModule],
    
   })
   export class AppRoutingModule {
   
   }