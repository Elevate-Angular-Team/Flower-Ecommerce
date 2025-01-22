import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { hostID: crypto.randomUUID().toString() }, //added to fix component ID generation collision
})
export class AppComponent {
  title = 'Flower-Ecommerce';
}
