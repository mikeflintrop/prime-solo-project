import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import exercises from './exercises.reducer';
import workTime from './workTime.reducer';
import restTime from './restTime.reducer';
import numberSets from './numberSets.reducer';
import duration from './duration.reducer';
import history from './history.reducer';
import deleteHistory from './deleteHistory.reducer';
import editHistory from './editHistory.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  exercises, // will have exercises for registered users
  workTime, // will have workTime for every exercise
  restTime, // will have restTime for every exercise
  numberSets, // will have numberSets for every exercise
  duration, // will have duration for all exercises
  history, // will have history for every workout
  deleteHistory, // will deleteHistory for every workout
  editHistory, // will have editHistory for every workout
});

export default rootReducer;
