import { Component } from '@angular/core';
import { PracticeSearchBarComponent } from 'features/practice-library/components/practice-search-bar/practice-search-bar.component';
import { PracticesGroupedCardsComponent } from 'features/practice-library/components/practices-grouped-cards/practices-grouped-cards.component';

@Component({
  selector: 'app-practice-search',
  standalone: true,
  imports: [PracticeSearchBarComponent, PracticesGroupedCardsComponent],
  templateUrl: './practice-search.component.html',
  styleUrl: './practice-search.component.css'
})
export class PracticeSearchComponent {

}
