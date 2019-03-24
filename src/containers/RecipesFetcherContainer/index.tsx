import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Recipe, Store } from '../../types';
import { fetchRecipesAsync } from '../../actions/recipes';
import { QueryParams } from '../../types';

type Props = {
  queryParams: QueryParams;
  queryString: string;
  fetchRecipesAsync: (queryParams: QueryParams) => any;
  children: JSX.Element;
};

class RecipesContainer extends Component<Props> {
  componentDidMount() {
    this.fetchRecipes();
  }

  componentDidUpdate(prevProps: Props) {
    const { queryString } = this.props;
    if (prevProps.queryString !== queryString) {
      this.fetchRecipes();
      window && window.scroll(0, 0);
    }
  }

  fetchRecipes() {
    const { fetchRecipesAsync, queryParams } = this.props;
    fetchRecipesAsync(queryParams);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default connect(
  null,
  {
    fetchRecipesAsync
  }
)(RecipesContainer);
