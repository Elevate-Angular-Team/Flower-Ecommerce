import { Component } from '@angular/core';
import { CategoriesSliderComponent } from "../../../core/Components/categories-slider/categories-slider.component";
import { StaticInfoComponent } from "../../../core/Components/static-info/static-info.component";

@Component({
  selector: 'app-home',
  imports: [CategoriesSliderComponent, StaticInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
