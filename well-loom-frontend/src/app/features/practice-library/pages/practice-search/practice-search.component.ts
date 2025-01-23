import { Component, Output, EventEmitter } from '@angular/core';
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

  // Calls other functions in this class to update initially-queried practices list based on updated filters
  dropdownFilterUpdated(idsSelected: object) {
    // idsSelected = {dropdown: dropdown changed, idsSelected: ids of values selected}

    
  }
}
