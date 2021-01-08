import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';




const MaterialComponents = [MatButtonModule,MatSelectModule,MatFormFieldModule, MatInputModule,MatTableModule]


@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
