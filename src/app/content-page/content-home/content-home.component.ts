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
      meaning: ''
    });
  }

  onUpdate(data: WordMeaningData) {
    const dialogRef = this.dialog.open(WordDialogComponent, { data });
    dialogRef.afterClosed().subscribe(result => {
      console.log('+++ onUpdate', {result})
      if (result === undefined) {
        return;
      }
      this.wordList.unshift(result);
      this.storeList;
    });
  }

  private storeList(){
    localStorage.setItem(this.wordListStorageKey, JSON.stringify(this.wordList));
  }

  private restoreList() {
    const storedListString = localStorage.getItem(this.wordListStorageKey);
    this.wordList = storedListString ? JSON.parse(storedListString) : new Array<WordMeaningData>();
  }
}
