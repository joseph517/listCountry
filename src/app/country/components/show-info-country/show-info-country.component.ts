import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'country-show-info-country',
  templateUrl: './show-info-country.component.html',
  styleUrls: ['./show-info-country.component.css'],
})
export class ShowInfoCountryComponent implements OnChanges {

  country: Country[] = [];

  @Input()
  codeCca3: string = '';

  constructor( 
    private showInfoConutry: CountriesService,
    public dialog: MatDialog
  ){}

  ngOnChanges(changes: SimpleChanges): void {

    this.codeCca3 = changes['codeCca3'].currentValue;

    if( this.codeCca3 ) {
      this.getInfoCountryByCode( this.codeCca3 )
    }
    
  }

  getInfoCountryByCode( code: string ) {

    this.showInfoConutry.getInfoCountryByCode( code )
    .subscribe(
      country => {
        if( !country ) return;
        this.country = country
        this.openDialog()
        
      }
     )
    
  }    

  openDialog(): void {

    this.dialog.open(DialogExampleComponent);


  }
}




@Component({
  selector: 'app-dialog-example',
  templateUrl: 'dialog.html',
})
export class DialogExampleComponent {
  constructor() {}
}