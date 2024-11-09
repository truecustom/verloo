import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { WordMeaningData } from '../data-models/word-meaning.model';
import { addWord, decreaseWordDifficulty, increaseWordDifficulty, removeWord, updateWord, updateWordList } from './word.actions';
import { constants } from '../constants';

export const wordFeatureKey = 'word';

export interface WordState {
  words: Array<WordMeaningData>;
}

export const initialState: WordState = {
  words: []
}

export const reducer = createReducer(
  initialState,
  on(updateWordList, (state, { words }) => {
    return { ...state, words };
  }),
  on(addWord, (state, { newWord }): WordState => {
    return { ...state, words: [newWord, ...state.words] };
  }),
  on(removeWord, (state, { index }) => {
    const words = [...state.words];
    words.splice(index, 1);
    return { ...state, words };
  }),
  on(updateWord, (state, { word, index }) => {
    const words = Object.assign([], state.words, { [index]: word });
    return { ...state, words };
  }),
  on(increaseWordDifficulty, (state, { index }) => {
    const word = { ...state.words[index] };
    if (word.difficulty < (constants.maxDifficulty - 1)) {
      word.difficulty++;
    }
    const words = Object.assign([], state.words, { [index]: word });
    return { ...state, words }
  }),
  on(decreaseWordDifficulty, (state, {index}) => {
    const word = { ...state.words[index] };
    if (word.difficulty > 0) {
      word.difficulty--;
    }
    const words = Object.assign([], state.words, { [index]: word });
    return { ...state, words }
  }),
  on(removeWord, (state, {index}) => {
    const words = [...state.words.slice(0, index), ...state.words.slice(index + 1)];
    return { ...state, words }
  }),
)
