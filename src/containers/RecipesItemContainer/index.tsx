import { connect } from 'react-redux';
import RecipesItem from '../../components/RecipesItem';
import { recipeByIdSelector } from '../../selectors/recipes';
import { Store } from '../../types';

interface Props {
  recipeId: string;
};

export default connect(
  (state: Store, ownProps: Props) => ({
    recipe: recipeByIdSelector(state, ownProps)
  }),
  {}
)(RecipesItem);
