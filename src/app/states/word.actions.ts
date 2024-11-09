import { createAction, props } from '@ngrx/store';
import { WordMeaningData } from '../data-models/word-meaning.model';

export const restoreWords = createAction('[Word] Restore Words');
export const updateWordList = createAction('[Word] Update Word List', props<{ words: WordMeaningData[] }>());
export const addWord = createAction('[Word] Add Word', props<{ newWord: WordMeaningData }>());
export const removeWord = createAction('[Word] Remove Word', props<{ index: number }>());
export const updateWord = createAction('[Word] Update Word', props<{ word: WordMeaningData; index: number }>());
export const increaseWordDifficulty = createAction('[Word] Increase Word Difficulty', props<{index: number}>());
export const decreaseWordDifficulty = createAction('[Word] Decrease Word Difficulty', props<{index:number}>());

