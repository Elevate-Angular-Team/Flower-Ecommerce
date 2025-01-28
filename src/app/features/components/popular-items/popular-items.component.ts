import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainServicesService } from '../../../core/services/main-services.service';
import { PopularItems } from '../../../core/interfaces/PopularItems';
import { Category } from '../../../core/interfaces/category';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Subject, takeUntil } from 'rxjs'; 

@Component({
  selector: 'app-popular-items',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.scss']
})
export class PopularItemsComponent implements OnInit, OnDestroy {
  limit: number = 4;
  categories: Category[] = [];
  products: PopularItems[] = [];
  selectedCategoryIndex: number = 0;

  private _mainService = inject(MainServicesService); 
  private _destroy$ = new Subject<void>(); 

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this._mainService.getCategories(this.limit)
      .pipe(takeUntil(this._destroy$)) 
      .subscribe({
        next: (res) => {
          this.categories = res.categories || [];
          this.loadDefaultCategoryProducts(); // Ensure it's called after categories are set
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
    this._mainService.getProductsByCategory(categoryName)
      .pipe(takeUntil(this._destroy$)) 
      .subscribe({
        next: (res) => {
          this.products = res.products || [];
        },
        error: (err: any) => {
          console.error('Error fetching products', err);
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
