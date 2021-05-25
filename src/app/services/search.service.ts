import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// import { BlogPost } from './blog.model';

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

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://www.rentalcars.com';

  constructor(private http: HttpClient) { }

  getLocations(search_term: string): Observable<Locations | []> {
    return this.http.get<any>(`${this.apiUrl}/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${6}&solrTerm=${search_term}`).pipe(
      map(response => response?.results),
      catchError(err => of([]))
    );
  }
}
