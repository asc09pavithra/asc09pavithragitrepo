import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListIssueComponent } from "./list-issues/list-issues.component";
import { AddIssusesComponent } from "./add-issues/add-issuses.component";
import { NgClass } from "@angular/common";
import { UpdateIssuesComponent } from "./update-issue/update-issues.component";

@NgModule({

    declarations: [LoginComponent,ListIssueComponent,AppComponent,UpdateIssuesComponent, AddIssusesComponent],
    
    imports: [BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        NgClass,
    
        
    ],
    
    bootstrap: [AppComponent]
})
export class AppModule {

}