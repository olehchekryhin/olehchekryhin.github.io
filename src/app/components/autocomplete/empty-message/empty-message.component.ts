import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-message',
  templateUrl: './empty-message.component.html',
})
export class EmptyMessageComponent {
  @Input() message: string;
}
