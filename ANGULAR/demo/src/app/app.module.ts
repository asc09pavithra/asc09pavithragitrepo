import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";



@NgModule({

    imports: [BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        LoginComponent,
        AppComponent
    ],
    providers: [AuthGuard,AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}