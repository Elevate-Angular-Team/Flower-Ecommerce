import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainServicesService } from '../../../core/services/main-services.service';
import { PopularItems } from '../../../core/interfaces/PopularItems';
import { Category } from '../../../core/interfaces/category';
import { ProductCardComponent } from '../product-card/product-card.component'; // Import the ProductCardComponent

@Component({
  selector: 'app-popular-items',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], // Add ProductCardComponent to imports
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.scss']
})
export class PopularItemsComponent implements OnInit {
  limit: number = 4;
  categories: Category[] = [];
  products: PopularItems[] = [];
  selectedCategoryIndex: number = 0;

  constructor(private _mainService: MainServicesService) {}

  ngOnInit(): void {
    this.getCategories();
    this.loadDefaultCategoryProducts();
  }

  getCategories(): void {
    this._mainService.getCategories(this.limit).subscribe({
      next: (res) => {
        this.categories = res.categories || [];
      },
      error: (err: any) => {
        console.error('Error fetching categories', err);
      }
    });
  }

  loadDefaultCategoryProducts(): void {
    if (this.categories.length > 0) {
      const defaultCategory = this.categories[0].name;
      this.fetchProductsByCategory(defaultCategory);
    }
  }

  onCategoryClick(category: Category, index: number): void {
    this.selectedCategoryIndex = index;
    this.fetchProductsByCategory(category.name);
  }

  fetchProductsByCategory(categoryName: string): void {
    this._mainService.getProductsByCategory(categoryName).subscribe({
      next: (res) => {
        this.products = res.products || [];
      },
      error: (err: any) => {
        console.error('Error fetching products', err);
      }
    });
  }
}
