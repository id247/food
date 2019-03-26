import qs from 'query-string';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import RecipesContainer from '../../containers/RecipesContainer';
import RecipesFetcherContainer from '../../containers/RecipesFetcherContainer';
import RecipesItemContainer from '../../containers/RecipesItemContainer';

const Home = ({ location: { search } }: RouteComponentProps) => {
  const queryParams = qs.parse(search) || {};

  return (
    <RecipesFetcherContainer queryParams={queryParams} queryString={search}>
      <RecipesContainer
        renderRecipesItem={({ recipeId }) => (
          <RecipesItemContainer recipeId={recipeId} />
        )}
      />
    </RecipesFetcherContainer>
  );
};

export default Home;
