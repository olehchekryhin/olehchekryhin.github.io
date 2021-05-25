import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { LocationService } from './services/search.service';
import { Locations } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  searching = false;
  loading = false;

  private locationSubject = new Subject<string>();

  readonly locations$: Observable<Locations | []> = this.locationSubject.pipe(
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

  searchLocations(location: string): void {
    this.onSearch(true);
    this.locationSubject.next(location.length > 1 && location || '');
  }

  onSearch($event: boolean): void {
    this.searching = $event;
  }
}
