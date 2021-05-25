import { Component, Input } from '@angular/core';

enum LABELS {
  AIRPORT = 'airport',
  DISTRICT = 'district',
  CITY = 'city',
  TRAIN = 'train'
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() label: string;

  labels = LABELS;

  isBadgeColored(label: string, name: string): boolean {
    return label?.toLowerCase() === name?.toLowerCase();
  }
}
