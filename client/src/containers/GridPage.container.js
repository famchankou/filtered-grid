import { connect } from 'react-redux';
import GridPage from '../components/grid-page';
import withError from '../components/hoc';
import { getWorkoutItems } from '../store/workouts';
import { setCategories, setDate } from '../store/filters';

const mapStateToProps = state => ({
  workouts: state.workouts,
  filters: state.filters,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: params => {
      dispatch(getWorkoutItems(params));
    },
    setCategoriesFilter: categories => {
      dispatch(setCategories(categories));
    },
    setDateFilter: date => {
      dispatch(setDate(date));
    },
  };
};

export default withError('grid')(
  connect(mapStateToProps, mapDispatchToProps)(GridPage)
);
