import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input('srvElementIndex') elementIndex: number;
  @Output('srvElementDelete') elementDelete = new EventEmitter<number>();
  constructor() {}

  onDelete() {
    this.elementDelete.emit(this.elementIndex);
  }
}
