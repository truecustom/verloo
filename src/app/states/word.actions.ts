import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { WordMeaningData } from '../content-page/models/word-meaning.model';

export const restoreWords = createAction('[Word] Restore Words');
export const updateWordList= createAction('[Word] Update Word List', props<{words: WordMeaningData[]}>());
export const addWord = createAction('[Word] Add Word', props<{newWord: WordMeaningData}>());
export const removeWord = createAction('[Word] Remove Word', props<{word: string}>());
export const updateWord = createAction('[Word] Update Word', props<{word: Update<WordMeaningData>}>());

