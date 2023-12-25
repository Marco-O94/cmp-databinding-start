import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [];

  onServerDeleted(i: number) {
    this.serverElements.splice(i, 1);
  }

  onServerAdded(serverData: {
    serverName: string;
    serverContent: string;
    serverOptions: string;
  }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      options: serverData.serverOptions,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
    serverOptions: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      options: blueprintData.serverOptions,
    });
  }
}
