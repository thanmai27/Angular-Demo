import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';


import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsermanagementComponent } from './home/usermanagement/usermanagement.component';
import { ProjectmanagementComponent } from './home/projectmanagement/projectmanagement.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsermanagementComponent,
    ProjectmanagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
   
    RouterModule.forRoot([

    {path:'usermanagement',component:HomeComponent,//canActivate:[AuthGuard],
    children:[{path:'',component: UsermanagementComponent}]},

    {path:'projectmanagement',component:HomeComponent,//canActivate:[AuthGuard],
    children:[{path:'',component:ProjectmanagementComponent}]},



    ]) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
