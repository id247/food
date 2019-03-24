import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Recipe, Store } from '../../types';
import { fetchRecipeAsync } from '../../actions/recipes';
import { QueryParams } from '../../types';

type Props = {
  recipeId: string;
  fetchRecipeAsync: (recipeId: string) => any;
  children: JSX.Element;
};

class RecipeFetcherContainer extends Component<Props> {
  componentDidMount() {
    const { fetchRecipeAsync, recipeId } = this.props;
    fetchRecipeAsync(recipeId);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default connect(
  null,
  {
    fetchRecipeAsync
  }
)(RecipeFetcherContainer);
