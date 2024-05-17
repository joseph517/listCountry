import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ShowInfoCountryComponent } from './components/show-info-country/show-info-country.component';
import { ShowDialog } from './components/show-info-country/show-info-country.component';
import { SearchCountryByNameComponent } from './components/search-country-by-name/search-country-by-name.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    LayoutComponent,
    CountryTableComponent,
    ShowInfoCountryComponent,
    ShowDialog,
    SearchCountryByNameComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule
  ],
  exports: [
  ]
})
export class CountryModule { }
