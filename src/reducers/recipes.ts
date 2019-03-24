import {
  RecipesActions,
  RecipeActions,
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
  FETCH_RECIPE_SUCCESS
} from '../actions/recipes';

import { Recipe } from '../types';

type State = {
  items: {
    [id: number]: Recipe;
  };
  ids: string[];
  isFetching: boolean;
  paging: {
    after?: string;
    before?: string;
  };
};

const initialState: State = {
  items: {},
  ids: [],
  isFetching: false,
  paging: {}
};

const recipesReducer = (
  state: State = initialState,
  action: RecipesActions | RecipeActions
) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, isFetching: true };

    case FETCH_RECIPES_SUCCESS: {
      const { items, ids, paging } = action.payload;
      return {
        ...state,
        items: { ...state.items, ...items },
        ids,
        paging,
        isFetching: false
      };
    }

    case FETCH_RECIPES_FAIL:
      return { ...state, isFetching: false };

    case FETCH_RECIPE_SUCCESS: {
      const { recipe } = action.payload;
      return {
        ...state,
        items: { ...state.items, [recipe.id]: recipe }
      };
    }

    default:
      return state;
  }
};

export default recipesReducer;
