// Maybe beter to create separate files for types

export type ImageBE = {
  url: string;
  responsive: {
    height: number;
    width: number;
    url: string;
  };
};

export type IngredientBE = {
  text: string;
};

export type RecipeBE = {
  id: string;
  name: string;
  images: ImageBE[];
  description: string;
  ingredients: IngredientBE[];
};

export type RecipesBE = {
  content: RecipeBE;
}[];

export type PagingBE = {
  cursors: {
    after?: string;
    before?: string;
  };
};

export type Recipe = {
  id: string;
  name: string;
  images: string[];
  thumb: string;
  description: string;
  ingredients: string[];
};

export type Paging = {
  before?: string;
  after?: string;
};

export type NormalizedEntities<T> = {
  items: {
    [id: string]: T;
  };
  ids: string[];
  isFetching: boolean;
  paging: {
    after?: string;
    before?: string;
  };
};

export type Store = {
  recipes: NormalizedEntities<Recipe>;
};

export type QueryParams = {
  after?: string;
  before?: string;
};
