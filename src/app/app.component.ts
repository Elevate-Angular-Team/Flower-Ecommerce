import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesSliderComponent } from "./core/Components/categories-slider/categories-slider.component";
import { StaticInfoComponent } from "./core/Components/static-info/static-info.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoriesSliderComponent, StaticInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Flower-Ecommerce';
}
