import React from 'react';
import PropTypes from 'prop-types';
import { lensProp, omit, remove, set, update } from 'ramda';
import { DEFAULT_COURT_POSITIONS } from '../constants/base';

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
      const { currentCourt, positions } = action

      return {
        ...state,
        [currentCourt]: {
          ...state[currentCourt],
          value: state[currentCourt].value.concat(positions),
        }
      };
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
    case 'RESET': {
      return DEFAULT_COURT_POSITIONS;
    }
    default: {
      throw new Error('Court Position Reducer needs action');
    }
  }
}

function CourtPositionsProvider({ children }) {
  const [state, dispatch] = React.useReducer(courtPositionsReducer, DEFAULT_COURT_POSITIONS)
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
