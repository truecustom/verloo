import { inject, Injectable } from '@angular/core';
import { WordMeaningData } from '../../data-models/word-meaning.model';
import { MatDialog } from '@angular/material/dialog';
import { WordDialogComponent } from '../../content-page/word-dialog/word-dialog.component';

@Injectable({ providedIn: 'root' })
export class WordModalService {

  readonly dialog = inject(MatDialog);

  openNew() {
    return this.openUpdate({
      word: '',
      meaning: '',
      difficulty: 0,
    }, -1);
  }

  openUpdate(word: WordMeaningData, index: number) {
    return this.dialog.open(WordDialogComponent, { data: { word, index } });
  }

}
