import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {
  @Input() locations: any[];
  @Input() arrowKeyLocation: number;
  @Output() onSelectItem = new EventEmitter<string>();
  @Output() onArrowKeyLocation = new EventEmitter<number>();

  getLabel(bookingId: string): string {
    return bookingId?.split('-')[0].toUpperCase();
  }

  selectItem(name: string) {
    this.onSelectItem.emit(name);
  }

  arrowKeyLocationChanged(index: number) {
    this.onArrowKeyLocation.emit(index);
  }
}
