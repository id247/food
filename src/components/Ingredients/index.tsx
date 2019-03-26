import React from 'react';
import './styles.scss';

interface Props {
  ingredients: string[];
};

const Ingredients = ({ ingredients }: Props) => {
  return (
    <div className="ingredients">
      {ingredients.map((ingredient, i) => (
        <div key={i} className="ingredients__item">
          {ingredient}
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
