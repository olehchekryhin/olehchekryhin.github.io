import { Component, Input } from '@angular/core';
import { Labels } from '../../../shared/enums';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  @Input() label: string;

  labels = Labels;

  isBadgeColored(label: string, name: string): boolean {
    return label?.toLowerCase() === name?.toLowerCase();
  }
}
