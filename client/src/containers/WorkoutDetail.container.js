import { connect } from 'react-redux';
import WorkoutDetailPage from '../components/workout-detail-page';
import withError from '../components/hoc';

export default withError('workout-detail')(
  connect(null, null)(WorkoutDetailPage)
);
