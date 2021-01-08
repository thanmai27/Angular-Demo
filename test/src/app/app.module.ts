import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UsersService } from './users.service';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
   
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      
    ])
   
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
