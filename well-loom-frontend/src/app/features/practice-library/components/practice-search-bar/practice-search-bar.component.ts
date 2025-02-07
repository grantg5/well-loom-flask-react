import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Area } from 'shared/interfaces/area';
import { Challenge } from 'shared/interfaces/challenge';
import { PracticeGroup } from 'shared/interfaces/practiceGroup';
import { Theory } from 'shared/interfaces/theory';
import { GetAreasService } from 'shared/services/area/get-areas.service';
import { GetChallengesService } from 'shared/services/challenge/get-challenges.service';
import { GetPracticeGroupsService } from 'shared/services/practice-group/get-practice-groups.service';
import { GetTheoriesService } from 'shared/services/theory/get-theories.service';

@Component({
  selector: 'app-practice-search-bar',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatIcon],
  templateUrl: './practice-search-bar.component.html',
  styleUrl: './practice-search-bar.component.css'
})
export class PracticeSearchBarComponent {
  areaIdsSelected: number[] = [];
  theoryIdsSelected: number[] = [];
  practiceGroupIdsSelected: number[] = [];
  challengeIdsSelected: number[] = [];

  areas: Area[] = [];
  challenges: Challenge[] = [];
  practiceGroups: PracticeGroup[] = [];
  theories: Theory[] = [];  

  @Output() dropdownUpdated = new EventEmitter<object>();

  constructor(
    private getAreasService: GetAreasService,
    private getChallengesService: GetChallengesService,
    private getPracticeGroupsService: GetPracticeGroupsService,
    private getTheoriesService: GetTheoriesService
  ) { }

  ngOnInit(): void {
    // Will def need to think through this structure in Angular more (parent w/ child update logic for each item)

    this.getAreasService.getAreas().subscribe(data => {
      this.areas = data;
    });
    this.getChallengesService.getChallenges().subscribe(data => {
      this.challenges = data;
    });
    this.getPracticeGroupsService.getPracticeGroups().subscribe(data => {
      this.practiceGroups = data;
    });
    this.getTheoriesService.getTheories().subscribe(data => {
      this.theories = data;
    });
  }

  searchPractices(searchInput: string) {

  }

  // NOTE: Will need to update practice group filter on area update (not challenges), to only include ones within the updated dropdown.
  // Ex. Area updated, practice group dropdown should refresh to include what's in area, removing any selected items that aren't in said area

  // Will need to update area & practice group dropdown on challenge update

  // Will need to update area on practice group dropdown update

  // These functions emit dropdown updates to the parent function to re-filter practices on. They also update available values in other dropdowns.
  areasDropdownFiltered() {
    console.log(this.areaIdsSelected);
    this.dropdownUpdated.emit({ dropdown: "areas", idsSelected: this.areaIdsSelected });
  }

  theoriesDropdownFiltered() {
    this.dropdownUpdated.emit({ dropdown: "theories", idsSelected: this.theoryIdsSelected });
  }

  practiceGroupsDropdownFiltered() {
    this.dropdownUpdated.emit({ dropdown: "practiceGroups", idsSelected: this.practiceGroupIdsSelected });
  }

  challengesDropdownFiltered() {
    this.dropdownUpdated.emit({ dropdown: "challenges", idsSelected: this.challengeIdsSelected });
  }
}
