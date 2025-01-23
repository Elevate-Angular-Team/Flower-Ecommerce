import { Component } from '@angular/core';
import { StaticInfoItemComponent } from "../static-info-item/static-info-item.component";
import { CategoryComponent } from "../category/category.component";

@Component({
  selector: 'app-static-info',
  imports: [ CategoryComponent],
  templateUrl: './static-info.component.html',
  styleUrl: './static-info.component.scss'
})
export class StaticInfoComponent {

}
