import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatGridList } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-practice-search-bar',
  standalone: true,
  imports: [MatFormFieldModule, MatGridList, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './practice-search-bar.component.html',
  styleUrl: './practice-search-bar.component.css'
})
export class PracticeSearchBarComponent {
  
}
