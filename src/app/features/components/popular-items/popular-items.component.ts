import { Component, OnInit } from '@angular/core';
import { MainServicesService } from '../../../core/services/main-services.service';
import { CommonModule } from '@angular/common';
import { PopularItems } from '../../../core/interfaces/PopularItems';
import { Category } from '../../../core/interfaces/category';
import { log } from 'util';

@Component({
  selector: 'app-popular-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.scss'],
})
export class PopularItemsComponent implements OnInit {
  // Limit for the number of categories to fetch
  limit: number = 4;
  categories: Category[] = [];
  products: PopularItems[] = [];
  selectedCategoryIndex: number = 0;
  keywoard: string ='';

  constructor(private _mainService: MainServicesService) {}

  ngOnInit(): void {
   this.getCategories();
  
}


getCategories(): void {
  this._mainService.getCategories(this.limit).subscribe({
    next: (res) => {
      this.categories = res.categories || []; 
      if (this.categories.length > 0) {
        this.onCategoryClick(this.categories[0], 0);
      }

    },
    error: (err: any) => {
      console.error('Error fetching categories', err);
    },
  });
}


onCategoryClick(category: Category, index: number): void {
  this.selectedCategoryIndex = index;
 
  // Fetch products based on the selected category
  this._mainService.getProductsByCategory(category.name).subscribe({
    next: (res) => {
      // console.log(res);
      this.products = res.products || [];
      console.log(this.products);
      
    },
    error: (err: any) => {
      console.error('Error fetching products', err);
    },
  });
}




}


