import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

enum EventKey {
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown'
}

interface Locations {
  docs: Array<Docs>,
  isGooglePowered: boolean
  numFound: number
}

interface Docs {
  bookingId: string,
  city: string,
  country: string,
  countryIso: string,
  iata: string,
  index: number,
  isPopular: boolean,
  lang: string,
  lat: number,
  lng: number,
  locationId: string,
  name: string,
  placeKey: string,
  placeType: string,
  region: string,
  searchType: string,
  ufi: string
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent {
  @Input() loading: boolean;
  @Input() searching: boolean;
  @Input() locations: Locations;
  @Input() placeholder: string;
  @Input() emptyMessage: string;
  @Output() sendLocation = new EventEmitter<string>();
  @Output() onSearch = new EventEmitter<boolean>();

  searchField = new FormControl('', null);
  arrowKeyLocation = 0;

  searchLocations(location: string) {
    this.onSearch.emit(true);
    if (location) {
      this.sendLocation.emit(location);
    }
  }

  selectItem(searchValue: string) {
    this.onSearch.emit(false);
    this.searchField.patchValue(searchValue);
    this.resetArrowKeyLocation();
  }

  stopSearching() {
    this.onSearch.emit(false);
    this.resetArrowKeyLocation();
  }

  isResultListVisible(): boolean {
    return this.searching && this.searchField.value.length > 1 && !this.loading;
  }

  areLocationsFound(locations): boolean {
    return locations?.numFound;
  }

  selectItemFromList(event: KeyboardEvent) {
    switch (event.key) {
      case EventKey.ArrowUp:
        this.arrowKeyLocation--;
        break;
      case EventKey.ArrowDown:
        this.arrowKeyLocation++;
        break;
    }
    if (this.arrowKeyLocation <= 0) {
      this.arrowKeyLocation = 0;
    }

    if (this.arrowKeyLocation >= this.locations?.docs?.length - 1) {
      this.arrowKeyLocation = this.locations?.docs?.length - 1;
    }
  }

  entered(locations: Array<Docs>) {
    const enteredLocation = locations.find((l, i) => i === this.arrowKeyLocation).name;
    this.searchField.patchValue(enteredLocation);
    this.onSearch.emit(false);
    this.resetArrowKeyLocation();
  }

  resetArrowKeyLocation() {
    this.arrowKeyLocation = 0;
  }


}
