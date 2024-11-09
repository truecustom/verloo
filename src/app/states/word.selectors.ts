import { createFeatureSelector, createSelector } from "@ngrx/store";
import { wordFeatureKey, WordState } from "./word.reducer";

export const getWordState = createFeatureSelector<WordState>(wordFeatureKey);
export const selectWordList = createSelector(getWordState, (state) => state.words);
