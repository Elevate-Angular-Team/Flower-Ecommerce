import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-static-info-item',
  imports: [],
  templateUrl: './static-info-item.component.html',
  styleUrl: './static-info-item.component.scss'
})
export class StaticInfoItemComponent {

  @Input() statIcon!:string ;
  @Input() statInfo!:string ;
  @Input() statDetails!:string ;

}
