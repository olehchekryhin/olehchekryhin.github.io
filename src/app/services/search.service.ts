import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Locations } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://www.rentalcars.com';

  constructor(private http: HttpClient) { }

  getLocations(searchTerm: string): Observable<Locations | []> {
    return this.http.get<any>(`${this.apiUrl}/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${6}&solrTerm=${searchTerm}`).pipe(
      map(response => response?.results),
      catchError(err => of([]))
    );
  }
}
