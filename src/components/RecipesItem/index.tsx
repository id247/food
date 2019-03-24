import React from 'react';
import { Recipe } from '../../types';
import './styles.scss';

type Props = {
  recipe: Recipe;
};

const RecipeItem = ({ recipe }: Props) => {
  return (
    <div className="recipes-item">
      <div className="recipes-item__image-wrapper">
        <img className="recipes-item__image" src={recipe.thumb} alt={recipe.name} />
      </div>
      <div className="recipes-item__content">
        <h3 className="recipes-item__title">{recipe.name}</h3>
      </div>
    </div>
  );
};

export default RecipeItem;
