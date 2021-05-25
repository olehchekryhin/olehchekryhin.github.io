export interface Docs {
  bookingId: string;
  city: string;
  country: string;
  name: string;
  region: string;
}

export interface Locations {
  docs: Array<Docs>;
  numFound: number;
}
