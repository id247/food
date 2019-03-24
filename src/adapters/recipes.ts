import { getThumb } from '../utils/recipe';
import { Recipe, RecipeBE, RecipesBE, Paging, PagingBE } from '../types';

export const adaptRecipe = ({
  id,
  name,
  images,
  description,
  ingredients
}: RecipeBE): Recipe => ({
  id,
  name,
  images: images.map(i => i.url),
  thumb: getThumb(images),
  description,
  ingredients: ingredients.map(i => i.text)
});

export const adaptRecipes = (
  recipes: RecipesBE = []
): { [id: string]: Recipe } =>
  recipes.reduce((acc: { [id: string]: Recipe }, c) => {
    acc[c.content.id] = adaptRecipe(c.content);
    return acc;
  }, {});

export const adaptRecipeIds = (recipes: RecipesBE = []): string[] =>
  recipes.map(r => r.content.id);

export const adaptRecipesPaging = ({
  cursors: { before, after }
}: PagingBE): Paging => ({
  after,
  before
});
