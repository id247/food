import { connect } from 'react-redux';
import Recipes from '../../components/Recipes';
import {
  isRecipesFetchingSelector,
  pagingAfterSelector,
  pagingBeforeSelector,
  recipeIdsSelector
} from '../../selectors/recipes';
import { Store } from '../../types';

export default connect(
  (state: Store) => ({
    recipeIds: recipeIdsSelector(state),
    pagingAfter: pagingAfterSelector(state),
    pagingBefore: pagingBeforeSelector(state),
    isFetching: isRecipesFetchingSelector(state)
  }),
  {}
)(Recipes);
