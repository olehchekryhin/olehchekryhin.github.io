import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmptyMessageComponent } from './components/autocomplete/empty-message/empty-message.component';
import { BadgeComponent } from './components/autocomplete/badge/badge.component';
import { ResultListComponent } from './components/autocomplete/result-list/result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    EmptyMessageComponent,
    BadgeComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
