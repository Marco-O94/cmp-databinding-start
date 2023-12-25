import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';
  errorMessage = '';

  // Posso assegnare un alias all'evento che emetto per evitare di doverlo cambiare in tutti i componenti che lo usano se mai dovessi cambiare il nome dell'evento
  @Output('srvCreated') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // L'output è un decorator che permette di esporre un evento al componente padre (app.component.ts)
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  onAddServer() {
    if (this.newServerName === '' || this.newServerContent === '') {
      return (this.errorMessage = 'Please enter a server name and content');
    } else {
      this.errorMessage = '';
    }
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
    this.newServerName = '';
    this.newServerContent = '';
  }

  onAddBlueprint() {
    if (this.newServerName === '' || this.newServerContent === '') {
      return (this.errorMessage = 'Please enter a server name and content');
    } else {
      this.errorMessage = '';
    }
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
    this.newServerName = '';
    this.newServerContent = '';
  }
}
