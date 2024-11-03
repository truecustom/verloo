import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { WordMeaningData } from '../models/word-meaning.model';

@Component({
  selector: 'app-word-list-item',
  templateUrl: './word-list-item.component.html',
  styleUrl: 'word-list-item.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class WordListItemComponent {
  item = input<WordMeaningData>();
}
