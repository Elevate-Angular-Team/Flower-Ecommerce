import { Component, Input } from '@angular/core';
import { PopularItems } from '../../../core/interfaces/PopularItems'; // Adjust the path as needed

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: PopularItems; 
}