import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { WordMeaningData } from '../../data-models/word-meaning.model';
import { WordModalService } from '../../services/word-modal/word-modal.service';
import { decreaseWordDifficulty, increaseWordDifficulty, removeWord } from '../../states/word.actions';
import { selectWordList } from '../../states/word.selectors';
import { WordListItemComponent } from '../word-list-item/word-list-item.component';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  standalone: true,
  styleUrl: 'content-home.component.scss',
  imports: [
    CommonModule,
    MatListModule,
    WordListItemComponent,
  ],
})
export class ContentHomeComponent {

  readonly wordModalService = inject(WordModalService);

  wordList$ = this.store.select(selectWordList);

  constructor(private store: Store) { }

  onUpdate(data: WordMeaningData, index: number) {
    this.wordModalService.openUpdate(data, index);
  }

  decreaseDifficulty(index: number) {
    this.store.dispatch(decreaseWordDifficulty({ index }));
  }

  increaseDifficulty(index: number) {
    this.store.dispatch(increaseWordDifficulty({ index }));
  }

  delete(index: number) {
    this.store.dispatch(removeWord({ index }));
  }
}
