import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipesAsync } from '../../actions/recipes';
import { QueryParams } from '../../types';

interface Props {
  queryParams: QueryParams;
  queryString: string;
  fetch: (queryParams: QueryParams) => void;
  children: JSX.Element;
};

class RecipesFetcherContainer extends Component<Props> {
  public componentDidMount() {
    this.fetchRecipes();
  }

  public componentDidUpdate(prevProps: Props) {
    const { queryString } = this.props;
    if (prevProps.queryString !== queryString) {
      this.fetchRecipes();
      if (window) {
        window.scroll(0, 0);
      }
    }
  }

  public fetchRecipes() {
    const { fetch, queryParams } = this.props;
    fetch(queryParams);
  }

  public render() {
    const { children } = this.props;
    return children;
  }
}

export default connect(
  null,
  {
    fetch: fetchRecipesAsync
  }
)(RecipesFetcherContainer);
