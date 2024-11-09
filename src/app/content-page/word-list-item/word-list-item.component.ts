import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { WordMeaningData } from '../../data-models/word-meaning.model';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-word-list-item',
  templateUrl: './word-list-item.component.html',
  styleUrl: 'word-list-item.component.scss',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatButtonModule, MatIconModule],
})
export class WordListItemComponent {
  item = input<WordMeaningData>();
  delete = output<void>();

  get badgeColor() {
    switch(this.item()?.difficulty) {
      case 4:
      return 'accent';

      case 5:
      return 'warn';

      default:
      return 'primary';
    }
  }

}
