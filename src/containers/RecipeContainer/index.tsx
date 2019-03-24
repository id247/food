import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from '../../components/Recipe';
import { Store } from '../../types';
import { recipeByIdSelector } from '../../selectors/recipes';

type Props = {
  recipeId: string;
};

export default connect(
  (state: Store, ownProps: Props) => ({
    recipe: recipeByIdSelector(state, ownProps)
    // here can be more props, isFetching for example
  }),
  {}
)(Recipe);
