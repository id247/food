import { connect } from 'react-redux';
import Recipe from '../../components/Recipe';
import { recipeByIdSelector } from '../../selectors/recipes';
import { Store } from '../../types';

interface Props {
  recipeId: string;
};

export default connect(
  (state: Store, ownProps: Props) => ({
    recipe: recipeByIdSelector(state, ownProps)
    // here can be more props, isFetching for example
  }),
  {}
)(Recipe);
