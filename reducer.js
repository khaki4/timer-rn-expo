// Actions
const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// Action Creators
const startTimer = () => ({ type: START_TIMER });
const restartTimer = () => ({ type: RESTART_TIMER });
const addSecond = () => ({ type: ADD_SECOND });

// Reducer
const TIME_DURATION = 1500;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timeDuration: TIME_DURATION
}

// Reducer Functions
const applyStartTimer = state => ({
  ...state,
  isPlaying: true,
});

const applyRestartTimer = state => ({
  ...state,
  isPlaying: false,
  elapsedTime: 0,
});

const applyAddSecond = state => {
  if(state.elapsedTime < TIME_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    }
  } else {
    return {
      ...state,
      isPlaying: false
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
};


// Export Action Creators
const actonCreators = {
  startTimer,
  restartTimer,
  addSecond
}

// Export Reducer
export default reducer;