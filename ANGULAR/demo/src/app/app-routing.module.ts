import { Component, NgModule } from   '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AuthGuardService } from './service/auth-guard-service';

const routes: Routes= [
{path:'login', component:LoginComponent},
{
    path:'employee',component:ListEmpComponent,canActivate: [AuthGuardService]
},
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
}) 
export class AppRoutingModule{

}
