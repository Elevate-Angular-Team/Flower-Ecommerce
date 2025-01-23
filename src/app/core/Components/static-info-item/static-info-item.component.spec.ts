import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticInfoItemComponent } from './static-info-item.component';

describe('StaticInfoItemComponent', () => {
  let component: StaticInfoItemComponent;
  let fixture: ComponentFixture<StaticInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticInfoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
