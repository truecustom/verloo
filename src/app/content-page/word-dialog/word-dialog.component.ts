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
import { WordMeaningData } from '../models/word-meaning.model';

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
  ]
})
export class WordDialogComponent {
  readonly dialogRef = inject(MatDialogRef<WordDialogComponent>);
  readonly data = inject<WordMeaningData>(MAT_DIALOG_DATA);
  readonly word = model(this.data.word);
  readonly meaning = model(this.data.meaning)

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close();
  }

  isAllInputValied() {
    return this.word() && this.meaning()
  }
}
