import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, Observable, of } from 'rxjs';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-search-country-by-name',
  templateUrl: './search-country-by-name.component.html',
  styleUrls: ['./search-country-by-name.component.css']
})
export class SearchCountryByNameComponent implements OnInit {

  myControl = new FormControl();
  countries: string[] = [];
  filteredOptions: Observable<string[]> = new Observable<string[]>;

  public isLoading:boolean = false

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.myControl.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      this.isLoading = Boolean(value);
      this.getCountrybyName( value )
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(option => option.toLowerCase().includes(filterValue));
  }

  getCountrybyName( country: string ): void {
    if( !country ) {
      this.isLoading = false
    }
    this.countriesService.getCountrybyName( country )
    .subscribe( countries => {
      this.countries = countries.map( country => country.name.common )
      console.log(this.countries);
      this.filteredOptions = of(this._filter( country ))
      this.isLoading = false
    }
  )
  }
}
