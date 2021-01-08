import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MaterialModule} from'./material/material.module'




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';
import { StatusComponent } from './status/status.component';
import { GuardGuard } from './guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    WellcomeComponent,
    ViewleaveComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:WellcomeComponent},
      {path:'admin',component:AdminComponent},
      {path:'employee',component:LoginComponent},
      {path:'leave',component:EmployeeComponent,canActivate:[GuardGuard]},
      {path:'view',component:ViewleaveComponent,canActivate:[GuardGuard]},
      {path:'status',component:StatusComponent},

      { path: '',   redirectTo: '/home', pathMatch: 'full' },


    ])
  
    
  ],
  providers: [GuardGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
