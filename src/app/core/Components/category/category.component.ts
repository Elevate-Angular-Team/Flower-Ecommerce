import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  @Input() catImg:string = "";
  @Input() catName:string = "";
  @Input() catCount!:number|string ;
  @Input() custWidth:string = "w-20" ;
  @Input() custHeight:string = "h-20" ;

  

}
