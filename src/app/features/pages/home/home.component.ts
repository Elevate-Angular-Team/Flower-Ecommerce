import { Component } from '@angular/core';
import { SpecialGiftsComponent } from '../components/ui/special-gifts/special-gifts.component';

@Component({
  selector: 'app-home',
  imports: [SpecialGiftsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
