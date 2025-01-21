import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesGroupedCardsComponent } from './practices-grouped-cards.component';

describe('PracticesGroupedCardsComponent', () => {
  let component: PracticesGroupedCardsComponent;
  let fixture: ComponentFixture<PracticesGroupedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticesGroupedCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticesGroupedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
