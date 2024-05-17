import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
})
export class AngularMaterialModule { }
