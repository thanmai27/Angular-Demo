import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule  } from '@angular/forms';

// import{ RouterModule, Router} from '@angular/router';
import { AppMaterialsModule } from './appmaterials/appmaterials.module';
import { MatTabsModule } from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { FlexLayoutModule, CoreModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, AppMaterialsModule, ReactiveFormsModule, HttpClientModule,
    FlexLayoutModule, CoreModule ,

    MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatIconModule, MatInputModule, MatCardModule,
    MatButtonToggleModule, MatSelectModule, MatTabsModule, MatStepperModule, NgxSpinnerModule,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, UserService , AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
