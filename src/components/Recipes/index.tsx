import React from 'react';
import { Recipe } from '../../types';
import Loading from '../Loading';
import Pagination from '../Pagination';
import './styles.scss';

type Props = {
  recipeIds: string[];
  pagingAfter?: string;
  pagingBefore?: string;
  isFetching: boolean;
  renderRecipesItem: ({ recipeId }: { recipeId: string }) => JSX.Element;
};

const Recipes = ({
  recipeIds,
  pagingAfter,
  pagingBefore,
  isFetching,
  renderRecipesItem
}: Props) => {
  if (isFetching && !recipeIds.length) {
    return <Loading />;
  }

  return (
    <div className={`recipes ${isFetching ? 'recipes--fetching' : ''}`}>
      {recipeIds.map(recipeId => (
        <div key={recipeId} className="recipes__item">
          {renderRecipesItem({ recipeId })}
        </div>
      ))}
      <div className="recipes__pagination">
        <Pagination after={pagingAfter} before={pagingBefore} />
      </div>
    </div>
  );
};

export default Recipes;
