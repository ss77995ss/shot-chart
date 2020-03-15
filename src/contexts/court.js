import React from 'react';
import PropTypes from 'prop-types';

const CourtStateContext = React.createContext();
const CourtDispatchContext = React.createContext();

function courtReducer(state, action) {
  switch (action.type) {
    case 'SELECT_COURTS': {
      return {
        currentCourt: action.courts.slice(-1)[0],
        selectedCourts: action.courts,
      }
    }
    default: {
      throw new Error('Court Position Reducer needs action');
    }
  }
}

function CourtProvider({ children }) {
  const [state, dispatch] = React.useReducer(courtReducer, {
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
