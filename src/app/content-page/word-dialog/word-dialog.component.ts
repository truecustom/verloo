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
import { WordMeaningData } from '../models/word-meaning.model';
import { constants } from '../../constants';

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

  readonly dialogRef = inject(MatDialogRef<WordDialogComponent, WordMeaningData>);
  readonly data = inject<WordMeaningData>(MAT_DIALOG_DATA);
  readonly word = model(this.data.word);
  readonly meaning = model(this.data.meaning)
  readonly difficulty = model(this.data.difficulty);

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close({
      word: this.word(),
      meaning: this.meaning(),
      difficulty: this.difficulty()
    });
  }

  isAllInputValied() {
    return this.word() && this.meaning()
  }
}
