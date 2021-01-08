import { NgModule } from '@angular/core';
import {MatButtonModule,MatDialogModule} from '@angular/material';


const Material=[
  MatButtonModule,
  MatDialogModule,
]

@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
