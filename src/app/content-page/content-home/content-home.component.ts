import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WordModalService } from '../../services/word-modal/word-modal.service';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { sampleWordMeanings } from '../../data-models/sample-word-meaning';
import { WordMeaningData } from '../../data-models/word-meaning.model';
import { WordListItemComponent } from '../word-list-item/word-list-item.component';
import { Store } from '@ngrx/store';
import { selectWordList } from '../../states/word.selectors';
import { decreaseWordDifficulty, increaseWordDifficulty, removeWord } from '../../states/word.actions';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  standalone: true,
  styleUrl: 'content-home.component.scss',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    WordListItemComponent,
    ToolbarComponent,
  ],
})
export class ContentHomeComponent implements OnInit {

  readonly wordModalService = inject(WordModalService);

  wordList$ = this.store.select(selectWordList);

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.restoreList();
  }

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
