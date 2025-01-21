import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSearchBarComponent } from './practice-search-bar.component';

describe('PracticeSearchBarComponent', () => {
  let component: PracticeSearchBarComponent;
  let fixture: ComponentFixture<PracticeSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
