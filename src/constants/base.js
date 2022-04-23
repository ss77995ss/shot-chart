export const SHOT_TYPE = {
  MADE: 'o',
  MISS: 'x',
};

export const shotTypes = {
  o: {
    value: 'o',
    name: 'made',
    color: 'red',
  },
  x: {
    value: 'x',
    name: 'miss',
    color: 'blue',
  },
  F: {
    value: 'F',
    name: 'foul',
    color: 'green',
  },
  T: {
    value: 'T',
    name: 'turnover',
    color: 'gray',
  },
};

export const MODE_TYPE = {
  INSERT: 'insert',
  DELETE: 'delete',
  DRAG: 'drag',
};

export const POINTS_TYPE = {
  TWO: 'two',
  THREE: 'three',
  INVALID: 'invalid',
};

export const PLAYER_POSITION = {
  DEFAULT: '',
  G: 'G',
  PG: 'PG',
  SG: 'SG',
  F: 'F',
  SF: 'SF',
  PF: 'PF',
  C: 'C',
};

export const DEFAULT_COURT = {
  selectedPosition: null,
  newCourtId: '3',
  currentCourt: '1',
  selectedCourts: ['1'],
  playerInfo: {
    team: 'Team',
    name: 'Player',
    number: '1',
    position: '',
    hand: 'none',
    gameCounts: '1',
  },
};

export const DEFAULT_COURT_POSITIONS = {
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
};

export const SAVE_DATA_VERSION = 1;
