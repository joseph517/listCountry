import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit { 

  countries: Country[] = [];

  codeCca3: string = '';

  constructor( private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAllCountries()
    .subscribe( countries => this.countries = countries )
  }

}
