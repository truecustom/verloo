import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { updateWordList } from "./word.actions";
import { map } from "rxjs";
import { WordMeaningData } from "../content-page/models/word-meaning.model";
import { sampleWordMeanings } from "../content-page/models/sample-word-meaning";

@Injectable()
export class WordEffects {
  restoreWords$ = createEffect(() => this.actions$.pipe(
    ofType('[Word] Restore Words'),
    map(() => {
      const wordList = this.restoreList();
      return updateWordList({ words: wordList });
    })
  ));

  private readonly wordListStorageKey = 'wordList';

  constructor(private actions$: Actions) { }
  private storeList(wordList: WordMeaningData[]) {
    localStorage.setItem(this.wordListStorageKey, JSON.stringify(wordList));
  }

  private restoreList() {
    const storedListString = localStorage.getItem(this.wordListStorageKey);
    return storedListString ? JSON.parse(storedListString) : sampleWordMeanings;
  }

}
