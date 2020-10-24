import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded = 'recipes';
  onNavegate(event): void
  {
    this.loaded = event.message;
  }
}
