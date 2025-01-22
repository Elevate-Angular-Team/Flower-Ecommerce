import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryComponent } from "../category/category.component";
import { HomeDataService } from '../../../../../projects/home-data/src/public-api';

@Component({
  selector: 'app-categories-slider',
  imports: [CarouselModule, CategoryComponent],
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.scss'
})
export class CategoriesSliderComponent implements OnInit {

  constructor(private _HttpClient:HttpClient , private _HomeDataService:HomeDataService){}

  allCategories:any = []

  // getCategories():Observable<any>{
  //   return this._HttpClient.get("https://flower.elevateegy.com/api/v1/categories")
  // }

  ngOnInit(): void {
      // this.getCategories().subscribe({
      //   next:(res)=>{
      //     this.allCategories = res.categories
      //     console.log(this.allCategories);
          
      //   },
      //   error:(err)=>{
      //     console.log(err);
      //   }
      // })

      this._HomeDataService.categories().subscribe({
        next:(res)=>{
          this.allCategories = res.categories
          console.log(this.allCategories);
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      }
      )
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:2000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin:16,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav: false
  }

}
