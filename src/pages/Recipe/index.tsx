import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import RecipeContainer from '../../containers/RecipeContainer';
import RecipeFetcherContainer from '../../containers/RecipeFetcherContainer';

const Recipe = ({
  match: {
    params: { recipeId }
  }
}: RouteComponentProps<{ recipeId: string }>) => (
    <RecipeFetcherContainer recipeId={recipeId}>
      <RecipeContainer recipeId={recipeId} />
    </RecipeFetcherContainer>
  );

export default Recipe;
