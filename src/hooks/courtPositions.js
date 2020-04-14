import React from 'react';
import PropTypes from 'prop-types';
import { lensProp, omit, remove, set, update } from 'ramda';

const CourtPositionsStateContext = React.createContext();
const CourtPositionsDispatchContext = React.createContext();

function courtPositionsReducer(state, action) {
  switch (action.type) {
    case 'ADD_COURT': {
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.id,
          value: [],
        },
      };
    }
    case 'DELETE_COURT': {
      return {
        ...omit(action.id, state),
      };
    }
    case 'DELETE_SHOT': {
      const { currentCourt, selectedPoistionIndex } = action;

      return {
        ...state,
        [currentCourt]: {
          ...state[currentCourt],
          value: remove(selectedPoistionIndex, 1, state[currentCourt].value)
        }
      };
    }
    case 'EDIT_COURT_NAME': {
      const newCourt = set(lensProp('name'), action.court, state[action.id]);

      return {
        ...state,
        [action.id]: newCourt
      };
    }
    case 'ADD_SHOT': {
      state[action.currentCourt].value = state[action.currentCourt].value.concat(action.positions);
      return state;
    }
    case 'UPDATE_SHOT': {
      const { currentCourt, selectedPoistionIndex, newShot } = action;

      return {
        ...state,
        [currentCourt]: {
          ...state[currentCourt],
          value: update(selectedPoistionIndex, newShot, state[currentCourt].value)
        }
      };
    }
    default: {
      throw new Error('Court Position Reducer needs action');
    }
  }
}

function CourtPositionsProvider({ children }) {
  const [state, dispatch] = React.useReducer(courtPositionsReducer, {
    1: {
      id: '1',
      name: '1',
      value: [],
    },
    2: {
      id: '2',
      name: '2',
      value: [],
    },
  })
  return (
    <CourtPositionsStateContext.Provider value={state}>
      <CourtPositionsDispatchContext.Provider value={dispatch}>
        {children}
      </CourtPositionsDispatchContext.Provider>
    </CourtPositionsStateContext.Provider>
  );
}

CourtPositionsProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

function useCourtPositionsState() {
  const context = React.useContext(CourtPositionsStateContext);
  if (context === undefined) {
    throw new Error(
      'useCourtPositionsState must be used within a CourtPositionsProvider'
    );
  }
  return context;
}

function useCourtPositionsDispatch() {
  const context = React.useContext(CourtPositionsDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCourtPositionsDispatch must be used within a CourtPositionsProvider'
    );
  }
  return context;
}

export { CourtPositionsProvider, useCourtPositionsState, useCourtPositionsDispatch };
