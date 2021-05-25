import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListComponent } from './result-list.component';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get label', () => {
    expect(component.getLabel('city-123')).toEqual('CITY');
  });

  it('should get empty string if value empty', () => {
    expect(component.getLabel('')).toEqual('');
  });

  it('should send selected item', () => {
    spyOn(component.sendSelectItem, 'emit');
    component.selectItem('term');

    expect(component.sendSelectItem.emit).toHaveBeenCalledWith('term');
  });

  it('should send arrow key location', () => {
    spyOn(component.sendArrowKeyLocation, 'emit');
    component.arrowKeyLocationChanged(1);

    expect(component.sendArrowKeyLocation.emit).toHaveBeenCalledWith(1);
  });
});
