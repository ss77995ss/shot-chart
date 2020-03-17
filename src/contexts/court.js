import React from 'react';
import PropTypes from 'prop-types';
import { reject } from 'ramda';

const CourtStateContext = React.createContext();
const CourtDispatchContext = React.createContext();

function courtReducer(state, action) {
  switch (action.type) {
    case 'SELECT_COURTS': {
      return {
        ...state,
        currentCourt: action.courts.slice(-1)[0],
        selectedCourts: action.courts,
      }
    }
    case 'ADD_COURT': {
      return {
        ...state,
        newCourtId: state.newCourtId + 1,
      };
    }
    case 'DELETE_COURT': {
      const remainCourts = reject((court) => court === action.id, state.selectedCourts);
      return {
        ...state,
        currentCourt: remainCourts.slice(-1)[0],
        selectedCourts: remainCourts,
      }
    }
    default: {
      throw new Error('Court Position Reducer needs action');
    }
  }
}

function CourtProvider({ children }) {
  const [state, dispatch] = React.useReducer(courtReducer, {
    newCourtId: 3,
    currentCourt: '1',
    selectedCourts: ['1'],
  })
  return (
    <CourtStateContext.Provider value={state}>
      <CourtDispatchContext.Provider value={dispatch}>
        {children}
      </CourtDispatchContext.Provider>
    </CourtStateContext.Provider>
  );
}

CourtProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

function useCourtState() {
  const context = React.useContext(CourtStateContext);
  if (context === undefined) {
    throw new Error(
      'useCourtState must be used within a CourtProvider'
    );
  }
  return context;
}

function useCourtDispatch() {
  const context = React.useContext(CourtDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCourtDispatch must be used within a CourtProvider'
    );
  }
  return context;
}

export { CourtProvider, useCourtState, useCourtDispatch };
