// Maybe beter to create separate files for types

export interface ImageBE {
  url: string;
  responsive: {
    height: number;
    width: number;
    url: string;
  };
}

export interface IngredientBE {
  text: string;
}

export interface RecipeBE {
  id: string;
  name: string;
  images: ImageBE[];
  description: string;
  ingredients: IngredientBE[];
}

export type RecipesBE = Array<{
  content: RecipeBE;
}>;

export interface PagingBE {
  cursors: {
    after?: string;
    before?: string;
  };
}

export interface Recipe {
  id: string;
  name: string;
  images: string[];
  thumb: string;
  description: string;
  ingredients: string[];
}

export interface Paging {
  before?: string;
  after?: string;
}

export interface NormalizedEntities<T> {
  items: {
    [id: string]: T;
  };
  ids: string[];
  isFetching: boolean;
  paging: {
    after?: string;
    before?: string;
  };
}

export interface Store {
  recipes: NormalizedEntities<Recipe>;
}

export interface QueryParams {
  after?: string;
  before?: string;
}
