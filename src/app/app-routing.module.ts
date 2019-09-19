import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PoliciesComponent } from './policies/policies.component';
import { ClaimComponent } from './claim/claim.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'policies', component: PoliciesComponent},
  {path: 'claim', component: ClaimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
