import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, wordFeatureKey, WordState } from "./word.reducer";

 const wordAdapter = adapter.getSelectors();

export const getWordState = createFeatureSelector<WordState>(wordFeatureKey);
export const selectWordList = createSelector(getWordState, wordAdapter.selectAll);
