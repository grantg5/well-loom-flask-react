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
  // NOTE: Will need to update practice group filter on area update (not challenges), to only include ones within the updated dropdown.
  // Ex. Area updated, practice group dropdown should refresh to include what's in area, removing any selected items that aren't in said area
  
  // Will need to update area & practice group dropdown on challenge update

  // Will need to update area on practice group dropdown update

  fetchAreasForFilter() {
    
  }
}
