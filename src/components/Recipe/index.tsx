import React from 'react';
import { Recipe as RecipeType } from '../../types';
import Ingredients from '../Ingredients';
import './styles.scss';

interface Props {
  recipe?: RecipeType;
};

const Recipe = ({ recipe }: Props) => {
  if (!recipe) {
    return null; // here should be loader based on is Loading
  }

  return (
    <div className="recipe">
      <div className="recipe__image-wrapper">
        <img
          className="recipe__image"
          src={recipe.images[0]}
          alt={recipe.name}
        />
      </div>
      <div className="recipe__content">
        <h3 className="recipe__title">{recipe.name}</h3>
        <div className="recipe__description">{recipe.description}</div>
        <div className="recipe__ingredients">
          <Ingredients ingredients={recipe.ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
