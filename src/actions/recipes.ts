import {
  adaptRecipes,
  adaptRecipeIds,
  adaptRecipesPaging
} from '../adapters/recipes';
import { Dispatch } from 'redux';
import qs from 'query-string';
import { Recipe, Paging, RecipeBE, PagingBE } from '../types';
import { apiRequest } from '../api';
import { QueryParams } from '../types';

export const FETCH_RECIPES = `recipes/FETCH_RECIPES`;

export type FetchRecipesAction = {
  type: typeof FETCH_RECIPES;
};

export const fetchRecipes = (): FetchRecipesAction => ({
  type: FETCH_RECIPES
});

export const FETCH_RECIPES_SUCCESS = `recipes/FETCH_RECIPES_SUCCESS`;

export type FetchRecipesSuccessPayload = {
  items: {
    [id: number]: Recipe;
  };
  ids: string[];
  paging: Paging;
};

export type FetchRecipesSuccessAction = {
  type: typeof FETCH_RECIPES_SUCCESS;
  payload: FetchRecipesSuccessPayload;
};

export const fetchRecipesSuccess = (
  payload: FetchRecipesSuccessPayload
): FetchRecipesSuccessAction => ({
  type: FETCH_RECIPES_SUCCESS,
  payload
});

export const FETCH_RECIPES_FAIL = `recipes/FETCH_RECIPES_FAIL`;

export type FetchRecipesFailAction = {
  type: typeof FETCH_RECIPES_FAIL;
};

export const fetchRecipesFail = (): FetchRecipesFailAction => ({
  type: FETCH_RECIPES_FAIL
});

export type RecipesActions =
  | FetchRecipesAction
  | FetchRecipesSuccessAction
  | FetchRecipesFailAction;

export const fetchRecipesAsync = (queryParams: QueryParams) => async (
  dispatch: Dispatch<RecipesActions>
) => {
  dispatch(fetchRecipes());

  try {
    const { data, paging } = await apiRequest<{
      data: RecipeBE[];
      paging: PagingBE;
    }>(`/search?type=recipe&limit=12&${qs.stringify(queryParams)}`);

    dispatch(
      fetchRecipesSuccess({
        items: adaptRecipes(data),
        ids: adaptRecipeIds(data),
        paging: adaptRecipesPaging(paging)
      })
    );
  } catch (e) {
    dispatch(fetchRecipesFail());
  }
};
