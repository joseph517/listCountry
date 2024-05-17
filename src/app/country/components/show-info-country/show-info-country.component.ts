import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog,   } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-show-info-country',
  templateUrl: 'dialog.html',
  styleUrls: ['./show-info-country.component.css'],
})
export class ShowInfoCountryComponent implements OnChanges {

  country: Country[] = [];

  @Input()
  codeCca3: string = '';

  constructor(
    private showInfoConutryService: CountriesService,
    public dialog: MatDialog,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.codeCca3 = changes['codeCca3'].currentValue;

    if (this.codeCca3) {
      return this.getInfoCountryByCode(this.codeCca3)
    }
  }

  getInfoCountryByCode(code: string) {

    this.showInfoConutryService.getInfoCountryByCode(code)
      .subscribe(
        country => {
          if (!country) return;
          this.country = country
          this.openDialog()
        }
      )
  }

  openDialog(): void {
    this.dialog.open(ShowDialog, {
      data: {
        country: this.country
      },
      closeOnNavigation: true,
      disableClose: true
    })
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'show-info-country.component.html',
  styleUrls: ['./show-info-country.component.css'],


})
export class ShowDialog {

  country: Country[];
  constructor(
    @Inject(MAT_DIALOG_DATA) { country }: { country: Country[] },

  ) {
    this.country = country
  }
}