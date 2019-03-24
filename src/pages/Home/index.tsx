import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import qs from 'query-string';
import RecipesFetcherContainer from '../../containers/RecipesFetcherContainer';
import RecipesContainer from '../../containers/RecipesContainer';
import RecipesItemContainer from '../../containers/RecipesItemContainer';

type Props = RouteComponentProps;

const Home = ({ location: { search }, history }: Props) => {
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
