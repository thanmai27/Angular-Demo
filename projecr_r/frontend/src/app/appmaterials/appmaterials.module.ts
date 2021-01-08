import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';

import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports: [
    MatTabsModule, MatSelectModule, MatButtonModule, MatButtonToggleModule, MatTabsModule , MatSnackBarModule , MatSidenavModule
  ],
  exports : [ MatButtonToggleModule, MatTabsModule , MatSnackBarModule ,  MatSidenavModule],
})
export class AppMaterialsModule { }
