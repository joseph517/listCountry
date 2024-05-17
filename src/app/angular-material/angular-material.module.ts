import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule
  ],
})
export class AngularMaterialModule { }
