import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-show-info-country',
  templateUrl: 'show-info-country.component.html',
  styleUrls: ['./show-info-country.component.css'],
})
export class ShowInfoCountryComponent {  

  country: Country[] = [];
  codeCountry: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { codeCca3: string },
    private showInfoConutryService: CountriesService,
    public dialog: MatDialog,
  ) { 
    this.codeCountry = data.codeCca3
    this.getInfoCountryByCode(this.codeCountry)
  }

  getInfoCountryByCode(code: string) {
    this.showInfoConutryService.getInfoCountryByCode(code)
      .subscribe(
        country => {
          if (!country) return;
          this.country = country
        }
      )
  }
}