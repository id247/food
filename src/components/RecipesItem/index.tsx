import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../types';
import './styles.scss';

type Props = {
  recipe?: Recipe;
};

const RecipeItem = ({ recipe }: Props) => {
  if (!recipe) {
    return null;
  }

  return (
    <div className="recipes-item">
      <div className="recipes-item__image-wrapper">
        <Link to={`/recipe/${recipe.id}`}>
          <img
            className="recipes-item__image"
            src={recipe.thumb}
            alt={recipe.name}
          />
        </Link>
      </div>
      <div className="recipes-item__content">
        <h3 className="recipes-item__title">
          <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
        </h3>
      </div>
    </div>
  );
};

export default RecipeItem;
