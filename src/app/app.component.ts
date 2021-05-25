import { Component } from '@angular/core';
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap, tap } from "rxjs/operators";
import { LocationService } from "./services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  searching = false;
  loading = false;

  private locationSubject = new Subject<string>();

  readonly locations$ = this.locationSubject.pipe(
    tap(() => {
      this.loading = true;
    }),
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(location => this.locationService.getLocations(location)),
    tap(() => {
      this.loading = false;
    }),
  );

  constructor(private locationService: LocationService) { }

  searchLocations(location: string) {
    this.searching = true;
    this.locationSubject.next(location.length > 1 && location || '');
  }

  onSearch($event: boolean) {
    this.searching = $event;
  }
}
