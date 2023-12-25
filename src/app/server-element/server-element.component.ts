import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent {
  // L'input è un decorator che permette di esporre una proprietà al componente padre (app.component.ts)
  @Input('srvElement') element: { type: string; name: string; content: string };
  // Posso assegnare un alias all'input che espongo per evitare di doverlo cambiare in tutti i componenti che lo usano se mai dovessi cambiare il nome della proprietà
  @Input('srvElementIndex') elementIndex: number;
  // L'output è un decorator che permette di esporre un evento al componente padre (app.component.ts)
  @Output('srvElementDelete') elementDelete = new EventEmitter<number>();
  constructor() {}

  onDelete() {
    this.elementDelete.emit(this.elementIndex);
  }
}
