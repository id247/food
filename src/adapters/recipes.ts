import { getThumb } from '../utils/recipe';
import { Recipe, RecipeBE, Paging, PagingBE } from '../types';

export const adaptRecipe = ({ content: { id, name, images } }: RecipeBE): Recipe => ({
  id,
  name,
  images,
  thumb: getThumb(images),
});

export const adaptRecipes = (recipes: RecipeBE[] = []): { [id: string]: Recipe } =>
  recipes.reduce((acc: { [id: string]: Recipe }, c) => {
    acc[c.content.id] = adaptRecipe(c);
    return acc;
  }, {});

export const adaptRecipeIds = (recipes: RecipeBE[] = []): string[] =>
  recipes.map(r => r.content.id);

export const adaptRecipesPaging = ({ cursors: { before, after } }: PagingBE): Paging => ({
  after,
  before,
});
