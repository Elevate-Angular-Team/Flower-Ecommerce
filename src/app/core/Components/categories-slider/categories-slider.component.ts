import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-slider',
  imports: [],
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.scss'
})
export class CategoriesSliderComponent implements OnInit {

  constructor(private _HttpClient:HttpClient){}

  allCategories:any = []

  getCategories():Observable<any>{
    return this._HttpClient.get("https://flower.elevateegy.com/api/v1/categories")
  }

  ngOnInit(): void {
      this.getCategories().subscribe({
        next:(res)=>{
          this.allCategories = res.categories
          console.log(this.allCategories);
          
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

}
