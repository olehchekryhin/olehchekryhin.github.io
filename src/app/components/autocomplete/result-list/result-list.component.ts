import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Docs } from '../../../shared/interfaces';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {
  @Input() locations: Array<Docs>;
  @Input() arrowKeyLocation: number;
  @Output() sendSelectItem = new EventEmitter<string>();
  @Output() sendArrowKeyLocation = new EventEmitter<number>();

  getLabel(bookingId: string): string {
    return bookingId?.split('-')[0]?.toUpperCase() || '';
  }

  selectItem(name: string): void {
    this.sendSelectItem.emit(name);
  }

  arrowKeyLocationChanged(index: number): void {
    this.sendArrowKeyLocation.emit(index);
  }
}
