import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteComponent } from './autocomplete.component';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send search locations state', () => {
    spyOn(component.sendSearchState, 'emit');
    component.searchLocations('');
    expect(component.sendSearchState.emit).toHaveBeenCalledWith(true);
  });

  it('should not send search term if it is not exist', () => {
    spyOn(component.sendLocation, 'emit');
    component.searchLocations('');
    expect(component.sendLocation.emit).not.toHaveBeenCalled();
  });

  it('should send search term if it is exist', () => {
    spyOn(component.sendLocation, 'emit');
    component.searchLocations('term');
    expect(component.sendLocation.emit).toHaveBeenCalledWith('term');
  });

  it('should send search term if it is exist', () => {
    spyOn(component.sendSearchState, 'emit');
    component.selectItem('term');
    expect(component.sendSearchState.emit).toHaveBeenCalledWith(false);
  });

  it('should set value to input', () => {
    spyOn(component, 'resetArrowKeyLocation');
    component.selectItem('term');
    expect(component.searchField.value).toBe('term');
    expect(component.resetArrowKeyLocation).toHaveBeenCalled();
  });

  it('should reset list item index after select', () => {
    spyOn(component, 'resetArrowKeyLocation');
    component.selectItem('term');
    expect(component.resetArrowKeyLocation).toHaveBeenCalled();
  });

  it('should reset search state', () => {
    spyOn(component, 'resetArrowKeyLocation');
    spyOn(component.sendSearchState, 'emit');
    component.stopSearching();
    expect(component.resetArrowKeyLocation).toHaveBeenCalled();
    expect(component.sendSearchState.emit).toHaveBeenCalledWith(false);
  });

  it('should result list be visible', () => {
    expect(component.isResultListVisible(true, 'term', false)).toBeTruthy();
  });

  it('should result list be not visible if search empty', () => {
    expect(component.isResultListVisible(true, '', false)).toBeFalsy();
  });

  it('should result list be not visible if loading', () => {
    expect(component.isResultListVisible(true, 'term', true)).toBeFalsy();
  });

  it('should result list be not visible if not searching', () => {
    expect(component.isResultListVisible(false, 'term', false)).toBeFalsy();
  });

  it('should define if results exist', () => {
    const data = {
      numFound: 3
    };
    expect(component.areLocationsFound(data)).toBeTruthy();
  });

  it('should define that results are not exist', () => {
    const data = {
      numFound: 0
    };
    expect(component.areLocationsFound(data)).toBeFalsy();
  });

  it('should set arrow key location to default if negative', () => {
    component.setArrowKeyLocation(-1);

    expect(component.arrowKeyLocation).toBe(0);
  });

  it('should set item on enter', () => {
    const docs = [{
        name: 'Amsterdam',
        country: 'United Kingdom',
        city: 'Manchester',
        bookingId: 'airport-38566',
        region: 'Greater Manchester',
      }, {
        name: 'Amsterda',
        country: 'United Kingdom',
        city: 'Manchester',
        bookingId: 'airport-38566',
        region: 'Greater Manchester',
      }];

    spyOn(component.sendSearchState, 'emit');
    spyOn(component, 'resetArrowKeyLocation');
    component.onEnterLocation({
      preventDefault(): void {}
    } as Event, docs);

    expect(component.searchField.value).toBe('Amsterdam');
    expect(component.sendSearchState.emit).toHaveBeenCalledWith(false);
    expect(component.resetArrowKeyLocation).toHaveBeenCalled();
  });

  it('should reset arrow key location', () => {
    component.resetArrowKeyLocation();

    expect(component.arrowKeyLocation).toBe(0);
  });
});
