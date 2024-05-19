import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { MatPaginator } from '@angular/material/paginator';
import { ShowInfoCountryComponent } from '../show-info-country/show-info-country.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'country-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {


  constructor(
    public dialog: MatDialog
  ) { }

  @Input()
  public countries: Country[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() 
  codeCca3: string = '';

  getCountriesForPage() {
    const pageIndex = this.paginator?.pageIndex;
    const pageSize = this.paginator?.pageSize;  
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    return this.countries.slice(startIndex, endIndex);
  }
  showInfoCountry(codeCca3: string) {
    this.dialog.open(ShowInfoCountryComponent, {
      data: {
        codeCca3
      }
    })
  }
}
