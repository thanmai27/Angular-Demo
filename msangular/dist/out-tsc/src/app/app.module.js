import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OAuthSettings } from '../app/outh';
import { ContactComponent } from './home/contact/contact.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AuthGuard } from './shared/auth.guard';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            LoginComponent,
            ContactComponent,
            DashboardComponent
        ],
        imports: [
            CommonModule,
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ToastrModule.forRoot(),
            BrowserAnimationsModule,
            RouterModule.forRoot([
                { path: '', component: LoginComponent },
                { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard],
                    children: [{ path: '', component: DashboardComponent },
                    ]
                },
                { path: 'contact', component: HomeComponent, canActivate: [AuthGuard],
                    children: [{ path: '', component: ContactComponent }] },
            ]),
            MsalModule.forRoot({
                auth: {
                    clientId: OAuthSettings.clientId,
                    authority: OAuthSettings.authority,
                    validateAuthority: OAuthSettings.validateAuthority,
                    redirectUri: OAuthSettings.redirectUri,
                    postLogoutRedirectUri: "http://localhost:4200/",
                    navigateToLoginRequestUrl: true,
                },
                cache: {
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
        providers: [{
                provide: HTTP_INTERCEPTORS,
                useClass: MsalInterceptor,
                multi: true
            }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map