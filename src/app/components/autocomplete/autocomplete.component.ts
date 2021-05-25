import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Docs, Locations } from '../../shared/interfaces';
import { EventKey } from '../../shared/enums';

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
  @Output() sendSearchState = new EventEmitter<boolean>();

  private readonly firstListItem: number = 0;
  private readonly minSearchLength: number = 1;
  searchField = new FormControl('', null);
  arrowKeyLocation = 0;

  searchLocations(location: string): void {
    this.sendSearchState.emit(true);

    if (location) {
      this.sendLocation.emit(location);
    }
  }

  selectItem(searchValue: string): void {
    this.sendSearchState.emit(false);
    this.searchField.patchValue(searchValue);
    this.resetArrowKeyLocation();
  }

  stopSearching(): void {
    this.sendSearchState.emit(false);
    this.resetArrowKeyLocation();
  }

  isResultListVisible(searching: boolean, searchFieldValue: string, loading: boolean): boolean {
    return searching && searchFieldValue.length > this.minSearchLength && !loading;
  }

  areLocationsFound(locations): boolean {
    return locations?.numFound;
  }

  selectItemFromList(event: KeyboardEvent): void {
    switch (event.key) {
      case EventKey.ArrowUp:
        this.arrowKeyLocation--;
        break;
      case EventKey.ArrowDown:
        this.arrowKeyLocation++;
        break;
    }
    this.setArrowKeyLocation(this.arrowKeyLocation);
  }

  setArrowKeyLocation(arrowKeyLocation): void {
    const lastListItem = this.locations?.docs?.length - 1;

    if (arrowKeyLocation <= this.firstListItem) {
      this.arrowKeyLocation = this.firstListItem;
    }

    if (arrowKeyLocation >= lastListItem) {
      this.arrowKeyLocation = lastListItem;
    }
  }

  onEnterLocation(e: Event, locations: Array<Docs>) {
    const enteredLocation = locations.find((l, i) => i === this.arrowKeyLocation).name;
    this.sendSearchState.emit(false);
    this.searchField.patchValue(enteredLocation);
    this.resetArrowKeyLocation();
    e.preventDefault();
  }

  resetArrowKeyLocation(): void {
    this.arrowKeyLocation = this.firstListItem;
  }
}
