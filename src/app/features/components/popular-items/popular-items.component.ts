import { Component, OnInit } from '@angular/core';
import { MainServicesService } from '../../../core/services/main-services.service';
import { CommonModule } from '@angular/common';
import { PopularItems } from '../../../core/interfaces/PopularItems';
import { Category } from '../../../core/interfaces/category';

@Component({
  selector: 'app-popular-items',
  imports: [CommonModule],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.scss'
})
export class PopularItemsComponent implements OnInit {
  constructor(private mainService: MainServicesService) {}

  limit: number = 4;
  categories: Category[] = [];
  products: PopularItems[] = [];
  selectedCategoryIndex: number = 0; 

  ngOnInit(): void {
    this.mainService.getCategories(this.limit).subscribe({
      next: (response) => {
        this.categories = response.categories;
      
        if (this.categories.length > 0) {
          this.onCategoryClick(this.categories[0], 0);
        }
      },
      error: (error) => {
      },
    });
  }

  onCategoryClick(category: any, index: number): void {
    this.selectedCategoryIndex = index;

    this.mainService.getProductsByCategory(category.slug).subscribe({
      next: (response) => {
        // console.log('Products API Response:', response);
        this.products = response.products; 
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }
}
