import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-practice-search-bar',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatIcon],
  templateUrl: './practice-search-bar.component.html',
  styleUrl: './practice-search-bar.component.css'
})
export class PracticeSearchBarComponent {
  areaIdsSelected: number[] = [];
  practiceGroupIdsSelected: number[] = [];
  challengeIdsSelected: number[] = [];

  allDropdownValues: object = this.fetchAllDropdownValues();

  areas: object = {};
  practiceGroups: object = {};
  challengeIds: object = {};

  @Output() dropdownUpdated = new EventEmitter<object>();

  fetchAllDropdownValues(): object {
    // TODO: Call "service" to fetch all dropdown values, populate areas, practiceGroups, challengeIds properties. Loop through them in html to build mat-options

    return {};
  }

  searchPractices(searchInput: string) {

  }

  // NOTE: Will need to update practice group filter on area update (not challenges), to only include ones within the updated dropdown.
  // Ex. Area updated, practice group dropdown should refresh to include what's in area, removing any selected items that aren't in said area

  // Will need to update area & practice group dropdown on challenge update

  // Will need to update area on practice group dropdown update

  // These functions emit dropdown updates to the parent function to re-filter practices on. They also update available values in other dropdowns.
  areasDropdownFiltered() {
    this.dropdownUpdated.emit({dropdown: "areas", idsSelected: this.areaIdsSelected});
  }

  practiceGroupsDropdownFiltered() {
    this.dropdownUpdated.emit({dropdown: "practiceGroups", idsSelected: this.practiceGroupIdsSelected});
  }

  challengesDropdownFiltered() {
    this.dropdownUpdated.emit({dropdown: "challenges", idsSelected: this.challengeIdsSelected});
  }
}
