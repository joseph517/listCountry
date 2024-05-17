import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: Country[] = [];
  
  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1';

  getAllCountries(): Observable<Country[]> {

    const url= `${this.apiUrl}/all`;

    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => this.countries = countries ),
    )
    
  }

  getInfoCountryByCode( code: string ): Observable<Country[] | null> {

    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length ? countries : null ),
      catchError( () => of(null) )
    )
  }

  getCountrybyName( country: string ): Observable<Country[]> {
    if( !country ) return of([])

    const url = `${this.apiUrl}/name/${country}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length ? countries : [] ),
      catchError( () => of([]) )
    )
  }
}
