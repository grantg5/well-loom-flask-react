import { Component } from '@angular/core';
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

  searchPractices(searchInput: string) {
    console.log("Search clicked");
  }

  areasFiltered() {
    console.log(`Areas: ${ this.areaIdsSelected }`);
  }

  practiceGroupsFiltered() {
    console.log(`Practice Groups: ${ this.practiceGroupIdsSelected }`);
  }

  challengesFiltered() {
    console.log(`Areas: ${ this.challengeIdsSelected }`);
  }
}
