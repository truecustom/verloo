import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { updateWordList } from "./word.actions";
import { map } from "rxjs";
import { WordMeaningData } from "../content-page/models/word-meaning.model";
import { sampleWordMeanings } from "../content-page/models/sample-word-meaning";
import { constants } from "../constants";

@Injectable()
export class WordEffects {
  restoreWords$ = createEffect(() => this.actions$.pipe(
    ofType('[Word] Restore Words'),
    map(() => {
      const storedListString = localStorage.getItem(constants.wordListStorageKey);
      const wordList = storedListString ? JSON.parse(storedListString) : sampleWordMeanings;
      return updateWordList({ words: wordList });
    })
  ));

  constructor(private actions$: Actions) { }
}
