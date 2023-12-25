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

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
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
