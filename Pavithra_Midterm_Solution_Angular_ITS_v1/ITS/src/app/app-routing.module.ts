import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListIssueComponent } from "./list-issues/list-issues.component";
import { AuthGuardService } from "./service/auth-guard.service";
import { AddIssusesComponent } from "./add-issues/add-issuses.component";
import { UpdateIssuesComponent } from "./update-issue/update-issues.component";

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'issues', component:ListIssueComponent, canActivate: [AuthGuardService]},
 {path:'update/:id', component:UpdateIssuesComponent},
 { path:"addissue", component:AddIssusesComponent, canActivate: [AuthGuardService]},
 {path: '**',component:LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
 
})
export class AppRoutingModule {

}