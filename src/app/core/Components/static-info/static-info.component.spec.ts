import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticInfoComponent } from './static-info.component';

describe('StaticInfoComponent', () => {
  let component: StaticInfoComponent;
  let fixture: ComponentFixture<StaticInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
