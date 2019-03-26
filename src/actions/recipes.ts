import qs from 'query-string';
import { Dispatch } from 'redux';
import {
  adaptRecipe,
  adaptRecipeIds,
  adaptRecipes,
  adaptRecipesPaging
} from '../adapters/recipes';
import { apiRequest } from '../api';
import { Paging, PagingBE, Recipe, RecipeBE, RecipesBE } from '../types';
import { QueryParams } from '../types';

export const FETCH_RECIPES = `recipes/FETCH_RECIPES`;

export interface FetchRecipesAction {
  type: typeof FETCH_RECIPES;
}

export const fetchRecipes = (): FetchRecipesAction => ({
  type: FETCH_RECIPES
});

export const FETCH_RECIPES_SUCCESS = `recipes/FETCH_RECIPES_SUCCESS`;

export interface FetchRecipesSuccessPayload {
  items: {
    [id: number]: Recipe;
  };
  ids: string[];
  paging: Paging;
}

export interface FetchRecipesSuccessAction {
  type: typeof FETCH_RECIPES_SUCCESS;
  payload: FetchRecipesSuccessPayload;
}

export const fetchRecipesSuccess = (
  payload: FetchRecipesSuccessPayload
): FetchRecipesSuccessAction => ({
  type: FETCH_RECIPES_SUCCESS,
  payload
});

export const FETCH_RECIPES_FAIL = `recipes/FETCH_RECIPES_FAIL`;

export interface FetchRecipesFailAction {
  type: typeof FETCH_RECIPES_FAIL;
}

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
      data: RecipesBE;
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

export const FETCH_RECIPE = `recipes/FETCH_RECIPE`;

export interface FetchRecipeAction {
  type: typeof FETCH_RECIPE;
}

export const fetchRecipe = (): FetchRecipeAction => ({
  type: FETCH_RECIPE
});

export const FETCH_RECIPE_SUCCESS = `recipes/FETCH_RECIPE_SUCCESS`;

export interface FetchRecipeSuccessPayload {
  recipe: Recipe;
}

export interface FetchRecipeSuccessAction {
  type: typeof FETCH_RECIPE_SUCCESS;
  payload: FetchRecipeSuccessPayload;
}

export const fetchRecipeSuccess = (
  payload: FetchRecipeSuccessPayload
): FetchRecipeSuccessAction => ({
  type: FETCH_RECIPE_SUCCESS,
  payload
});

export const FETCH_RECIPE_FAIL = `recipes/FETCH_RECIPE_FAIL`;

export interface FetchRecipeFailAction {
  type: typeof FETCH_RECIPE_FAIL;
}

export const fetchRecipeFail = (): FetchRecipeFailAction => ({
  type: FETCH_RECIPE_FAIL
});

export type RecipeActions =
  | FetchRecipeAction
  | FetchRecipeSuccessAction
  | FetchRecipeFailAction;

export const fetchRecipeAsync = (recipeId: string) => async (
  dispatch: Dispatch<RecipeActions>
) => {
  dispatch(fetchRecipe());

  try {
    const recipe = await apiRequest<RecipeBE>(`/${recipeId}`);

    dispatch(
      fetchRecipeSuccess({
        recipe: adaptRecipe(recipe)
      })
    );
  } catch (e) {
    dispatch(fetchRecipeFail());
  }
};
