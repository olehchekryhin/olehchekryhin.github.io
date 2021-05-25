import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AutocompleteComponent
      ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule ]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should update searching state', () => {
    component.onSearch(true);
    expect(component.searching).toBeTruthy();
    component.onSearch(false);
    expect(component.searching).toBeFalsy();
  });
});
