import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import RecipeFetcherContainer from '../../containers/RecipeFetcherContainer';
import RecipeContainer from '../../containers/RecipeContainer';

type Props = RouteComponentProps<{ recipeId: string }>;

const Recipe = ({
  match: {
    params: { recipeId }
  }
}: Props) => (
  <RecipeFetcherContainer recipeId={recipeId}>
    <RecipeContainer recipeId={recipeId} />
  </RecipeFetcherContainer>
);

export default Recipe;
