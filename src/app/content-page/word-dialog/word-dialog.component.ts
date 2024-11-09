import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { WordMeaningData } from '../../data-models/word-meaning.model';
import { constants } from '../../constants';
import { addWord, updateWord } from '../../states/word.actions';
import { Store } from '@ngrx/store';

export interface WordDialogData {
  word: WordMeaningData;
  index: number;
}

@Component({
  selector: 'app-word-dialog',
  templateUrl: './word-dialog.component.html',
  standalone: true,
  styleUrl: 'word-dialog.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSliderModule,
  ]
})
export class WordDialogComponent {

  readonly maxDifficulty = constants.maxDifficulty;

  readonly dialogRef = inject(MatDialogRef<WordDialogComponent>);
  readonly data = inject<WordDialogData>(MAT_DIALOG_DATA);
  readonly word = model(this.data.word.word);
  readonly meaning = model(this.data.word.meaning)
  readonly difficulty = model(this.data.word.difficulty);

  constructor(private store: Store) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const word = {
      word: this.word(),
      meaning: this.meaning(),
      difficulty: this.difficulty()
    };
    if (this.data.index >= 0) {
      this.store.dispatch(updateWord({ word, index: this.data.index }))
    } else {
      this.store.dispatch(addWord({ newWord: word }))
    }
    this.dialogRef.close();
  }

  isAllInputValied() {
    return this.word() && this.meaning()
  }

}
