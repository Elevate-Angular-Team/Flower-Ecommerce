import { Component, OnInit, signal } from '@angular/core';
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
  // Limit for the number of categories to fetch
  limit: number = 4;

  // Signals for state management
  categories = signal<Category[]>([]);
  products = signal<PopularItems[]>([]);
  selectedCategoryIndex = signal<number>(0);

  // Injecting the main service
  constructor(private mainService: MainServicesService) {}

  // Lifecycle hook that is called after data-bound properties are initialized
  ngOnInit(): void {
    this.mainService.getCategories(this.limit).subscribe({
      next: (categories: Category[]) => {
        this.categories.set(categories);
      },
      error: (err: any) => {
        console.error('Error fetching categories', err);
      }
    });
  }
}