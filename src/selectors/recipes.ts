import { createSelector } from 'reselect';
import { Store } from '../types';

export const recipesSelector = (state: Store) => state.recipes;

export const propRecipeIdSelector = (_: any, props: { recipeId: string }) =>
  props.recipeId;

export const recipeItemsSelector = createSelector(
  recipesSelector,
  recipes => recipes.items
);

export const recipeIdsSelector = createSelector(
  recipesSelector,
  recipes => recipes.ids
);

export const isRecipesFetchingSelector = createSelector(
  recipesSelector,
  recipes => recipes.isFetching
);

export const pagingSelector = createSelector(
  recipesSelector,
  recipes => recipes.paging
);

export const pagingAfterSelector = createSelector(
  pagingSelector,
  paging => paging.after
);

export const pagingBeforeSelector = createSelector(
  pagingSelector,
  paging => paging.before
);

export const recipeByIdSelector = createSelector(
  recipeItemsSelector,
  propRecipeIdSelector,
  (recipes, id) => recipes[id]
);
