import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipesItem from '../../components/RecipesItem';
import { Store } from '../../types';
import { receiptByIdSelector } from '../../selectors/recipes';

type Props = {
  recipeId: string;
};

export default connect(
  (state: Store, ownProps: Props) => ({
    recipe: receiptByIdSelector(state, ownProps),
  }),
  {}
)(RecipesItem);
