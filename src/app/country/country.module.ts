import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ShowInfoCountryComponent } from './components/show-info-country/show-info-country.component';



@NgModule({
  declarations: [
    LayoutComponent,
    CountryTableComponent,
    ShowInfoCountryComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    LayoutComponent,
    ShowInfoCountryComponent
  ]
})
export class CountryModule { }
