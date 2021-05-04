import { connect } from 'react-redux';
import GridPage from '../components/grid-page';
import withError from '../components/hoc';
import { getWorkoutItems } from '../store/workouts';

const mapStateToProps = state => ({
  workouts: state.workouts,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: params => {
      dispatch(getWorkoutItems(params));
    },
  };
};

export default withError('grid')(
  connect(mapStateToProps, mapDispatchToProps)(GridPage)
);
