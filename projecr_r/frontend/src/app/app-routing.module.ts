import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InthomeComponent } from './inthome/inthome.component';
import { GetquoteComponent } from './getquote/getquote.component';
import { Getquote2Component } from './getquote2/getquote2.component';
import { SignupComponent  } from './user/signup/signup.component';
import { EstimateComponent } from './estimate/estimate.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthGuard } from './auth/auth.guard';
import { MyaccountComponent } from './userprofile/myaccount/myaccount.component';
import { ProjectsComponent } from './userprofile/projects/projects.component';
import { PaymentsComponent } from './userprofile/payments/payments.component';
import { ReceiptsComponent } from './userprofile/receipts/receipts.component';
import { ContactusComponent } from './userprofile/contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path : '' , component : InthomeComponent},
  { path : 'home' , component : InthomeComponent },
  { path : 'quote1' , component : GetquoteComponent },
  { path : 'quote2' , component : Getquote2Component },
  // SIGN IN and SIGN OUT
  { path : 'signup' , component : UserComponent,
    children : [{ path : '' , component : SignupComponent}] },
  { path : 'signin' , component : UserComponent,
    children : [{ path : '' , component : SignInComponent }] },
  { path : 'userprofile' , component : UserprofileComponent, canActivate : [AuthGuard] ,
  children : [{ path : '', component : MyaccountComponent}]},

  { path : 'myaccount', component : UserprofileComponent,
    children : [{path : '', component : MyaccountComponent}]} ,

  { path : 'projects', component : UserprofileComponent,
    children : [{path : '', component : ProjectsComponent}]} ,

  { path : 'payments', component : UserprofileComponent,
    children : [{path : '', component : PaymentsComponent}]} ,

  { path : 'receipts', component : UserprofileComponent,
    children : [{path : '', component : ReceiptsComponent}]} ,

  { path : 'contatcus', component : UserprofileComponent,
    children : [{path : '', component : ContactusComponent}]} ,

  { path : 'estimate' , component : EstimateComponent , canActivate : [AuthGuard]},
  { path : '**' , component : PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
      InthomeComponent , GetquoteComponent , Getquote2Component , SignupComponent , PagenotfoundComponent , EstimateComponent ,
      HeaderComponent, FooterComponent, UserComponent, SignInComponent, UserprofileComponent, MyaccountComponent, ProjectsComponent,
      PaymentsComponent,  ReceiptsComponent, ContactusComponent,
   ];
