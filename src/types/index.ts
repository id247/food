// Maybe beter to create separate files for types

export type ImageBE = {
  responsive: {
    url: string;
  };
};

export type RecipeBE = {
  content: {
    id: string;
    name: string;
    images: ImageBE[];
  };
};

export type PagingBE = {
  cursors: {
    after?: string;
    before?: string;
  };
};

export type Image = {
  responsive: {
    url: string;
  };
};

export type Recipe = {
  id: string;
  name: string;
  images: Image[];
  thumb: string;
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
