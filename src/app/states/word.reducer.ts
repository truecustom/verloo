import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { WordMeaningData } from '../content-page/models/word-meaning.model';
import { addWord, removeWord, updateWord, updateWordList } from './word.actions';

export const wordFeatureKey = 'word';

export interface WordState extends EntityState<WordMeaningData> {}
export const adapter = createEntityAdapter<WordMeaningData>({
  selectId: (data) => data.word
});

export const initialState: WordState = adapter.getInitialState({})

export const reducer = createReducer(
  initialState,
  on(updateWordList, (state, a) => {
    return adapter.setAll(a.words, { ...state });
  }),
  on(addWord, (state, { newWord }) => {
    return adapter.upsertOne(newWord, { ...state });
  }),
  on(removeWord, (state, { word }) => {
    return adapter.removeOne(word, { ...state });
  }),
  on(updateWord, (state, { word }) => {
    return adapter.updateOne(word, { ...state });
  })
)
