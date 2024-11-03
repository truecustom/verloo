import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WordMeaningData } from '../models/word-meaning.model';
import { WordDialogComponent } from '../word-dialog/word-dialog.component';
import { WordListItemComponent } from '../word-list-item/word-list-item.component';
import { sampleWordMeanings } from '../models/sample-word-meaning';

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
  ],
})
export class ContentHomeComponent implements OnInit {

  private readonly wordListStorageKey = 'wordList';

  readonly dialog = inject(MatDialog);

  wordList = new Array<WordMeaningData>();

  ngOnInit(): void {
    this.restoreList();
  }

  onAddNew() {
    this.onUpdate({
      word: '',
      meaning: '',
      difficulty: 0,
    }, -1);
  }

  onUpdate(data: WordMeaningData, index: number) {
    const dialogRef = this.dialog.open(WordDialogComponent, { data });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        return;
      }
      if (index >= 0) {
        this.wordList.splice(index, 1, result);
      } else {
        this.wordList.unshift(result);
      }
      this.storeList();
    });
  }

  decreaseDifficulty(item: WordMeaningData) {
    item.difficulty--;
    if (item.difficulty < 0) {
      item.difficulty = 0;
    }
  }

  increaseDifficulty(item: WordMeaningData) {
    item.difficulty++;
    if (item.difficulty > 5) {
      item.difficulty = 5;
    }
  }

  delete(index: number) {
    this.wordList.splice(index, 1);
    this.storeList();
  }

  private storeList() {
    localStorage.setItem(this.wordListStorageKey, JSON.stringify(this.wordList));
  }

  private restoreList() {
    const storedListString = localStorage.getItem(this.wordListStorageKey);
    this.wordList = storedListString ? JSON.parse(storedListString) : sampleWordMeanings;
  }
}
