import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipeAsync } from '../../actions/recipes';

interface Props {
  recipeId: string;
  fetch: (recipeId: string) => any;
  children: JSX.Element;
};

class RecipeFetcherContainer extends Component<Props> {
  public componentDidMount() {
    const { fetch, recipeId } = this.props;
    fetch(recipeId);
  }

  public render() {
    const { children } = this.props;
    return children;
  }
}

export default connect(
  null,
  {
    fetch: fetchRecipeAsync
  }
)(RecipeFetcherContainer);
