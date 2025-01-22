import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSliderComponent } from './gift-slider.component';

describe('GiftSliderComponent', () => {
  let component: GiftSliderComponent;
  let fixture: ComponentFixture<GiftSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
