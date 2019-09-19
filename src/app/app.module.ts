import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PoliciesComponent } from './policies/policies.component';
import { ClaimComponent } from './claim/claim.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PoliciesComponent,
    ClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
