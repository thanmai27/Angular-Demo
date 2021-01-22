
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';


import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';


import { MsalModule, MsalInterceptor, MsalGuard } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OAuthSettings } from '../app/outh';
import { ContactComponent } from './home/contact/contact.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import {AuthGuard} from './shared/auth.guard';
import { BlobComponent } from './azureblob/blob/blob.component';
import { UserManagementComponent } from './home/user-management/user-management.component';
import { ProjectmanagementComponent } from './home/projectmanagement/projectmanagement.component';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './table/table.component';
import { TaskmanagementComponent } from './home/taskmanagement/taskmanagement.component';
import { TaskpopupComponent } from './popup/taskpopup/taskpopup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    DashboardComponent,
    BlobComponent,
    UserManagementComponent,
    ProjectmanagementComponent,
    TableComponent,
    TaskmanagementComponent,
    TaskpopupComponent,

  ],
  entryComponents:[TaskpopupComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    ToastrModule.forRoot(),
    DataTablesModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule,


    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    RouterModule.forRoot([


      {path:'', component:LoginComponent},

      {path:'dashboard',component:HomeComponent,//canActivate:[AuthGuard],
    children : [{ path : '' , component :DashboardComponent},
  ]
    },
      {path:'contact',component:HomeComponent,//canActivate:[AuthGuard],
    children:[{path:'',component:ContactComponent}]},

    {path:'usermanagement',component:HomeComponent,//canActivate:[AuthGuard],
    children:[{path:'',component: UserManagementComponent}]},

    {path:'projectmanagement',component:HomeComponent,//canActivate:[AuthGuard],
    children:[{path:'',component:ProjectmanagementComponent}]},

    {path:'taskmanagement',component:HomeComponent,//canActivate:[AuthGuard],
    children:[{path:'',component:TaskmanagementComponent}]},

      {path:'upload', component:BlobComponent},
      {path:'table', component:TableComponent},



    ]) ,
    MsalModule.forRoot({
      auth: {
        clientId: OAuthSettings.clientId,
         authority: OAuthSettings.authority,

        validateAuthority: OAuthSettings.validateAuthority,
        redirectUri: OAuthSettings.redirectUri,
        postLogoutRedirectUri: "http://localhost:4200/",
        navigateToLoginRequestUrl: true,


      },
      cache:
      {
        cacheLocation: "localStorage",
      },
    }, {
      consentScopes: [
        'user.read',
        'openid',
        'profile',
      ],
      unprotectedResources: [],
      protectedResourceMap: [
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ],
      extraQueryParameters: {}
    })
  ],

  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}

