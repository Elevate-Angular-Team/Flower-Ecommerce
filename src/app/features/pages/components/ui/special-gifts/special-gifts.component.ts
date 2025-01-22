import { Component, Signal, signal } from '@angular/core';
import { SpecialGifts } from '../../business/special-gifts/special-gifts.interface';
import { SpecialGiftsMockup } from '../../business/special-gifts/special-gifts.mockup';
import { GiftSliderComponent } from '../gift-slider/gift-slider.component';

@Component({
  selector: 'app-special-gifts',
  imports: [GiftSliderComponent],
  templateUrl: './special-gifts.component.html',
  styleUrl: './special-gifts.component.scss',
})
export class SpecialGiftsComponent {
  specialGifts: Signal<SpecialGifts[]> = signal(SpecialGiftsMockup);
  titleWithHighlightedWord = signal('');

  ngOnInit(): void {
    let title = this.specialGifts()[1].title;
    title = title.replace(
      'Gifts',
      '<span class="text-[var(--primary-color)]">Gifts</span>'
    );
    this.titleWithHighlightedWord.set(title);
  }
}
