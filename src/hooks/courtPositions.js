import React from 'react';
import PropTypes from 'prop-types';
import { lensProp, omit, reject, set } from 'ramda';

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
    case 'DELETE_POSITION': {
      const { currentCourt, selectedPosition } = action;
      const updatedCourt = reject(
        ({ position }) => JSON.stringify(position) === JSON.stringify(selectedPosition),
        state[currentCourt].value
      );
      state[currentCourt].value = updatedCourt;
      return state;
    }
    case 'EDIT_COURT_NAME': {
      const newCourt = set(lensProp('name'), action.court, state[action.id]);

      return {
        ...state,
        [action.id]: newCourt
      };
    }
    case 'UPDATE_COURT_POSITIONS': {
      state[action.currentCourt].value = state[action.currentCourt].value.concat(action.positions);
      return state;
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
