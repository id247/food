import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipes from '../../components/Recipes';
import { Recipe, Store } from '../../types';
import {
  recipeIdsSelector,
  receiptByIdSelector,
  pagingAfterSelector,
  pagingBeforeSelector,
  isRecipesFetchingSelector,
} from '../../selectors/recipes';

export default connect(
  (state: Store) => ({
    recipeIds: recipeIdsSelector(state),
    pagingAfter: pagingAfterSelector(state),
    pagingBefore: pagingBeforeSelector(state),
    isFetching: isRecipesFetchingSelector(state),
  }),
  {}
)(Recipes);
