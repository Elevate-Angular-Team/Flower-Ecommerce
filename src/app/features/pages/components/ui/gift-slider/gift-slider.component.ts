import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from './../../../../../core/services/flowbite/flowbite.service';

@Component({
  selector: 'app-gift-slider',
  imports: [],
  templateUrl: './gift-slider.component.html',
  styleUrl: './gift-slider.component.scss',
})
export class GiftSliderComponent implements OnInit {
  constructor(private flowbite: FlowbiteService) {}
  ngOnInit(): void {
    this.flowbite.loadFlowbite((flowbite) => {});
  }
}
