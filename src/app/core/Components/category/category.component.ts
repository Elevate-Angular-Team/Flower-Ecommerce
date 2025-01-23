import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {



  @Input() category: { 
    img: string; 
    name: string; 
    count: number | string; 
    width?: string; 
    height?: string; 
  } = { 
    img: '',
    name: '',
    count: 0,
    width: 'w-20',
    height: 'h-20'
  };
}
