export const SHOT_TYPE = {
  MADE: 'o',
  MISS: 'x',
};

export const MODE_TYPE = {
  INSERT: '加入',
  DELETE: '刪除',
  DRAG: '拖曳',
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
  newCourtId: 3,
  currentCourt: '1',
  selectedCourts: ['1'],
  playerInfo: {
    team: '隊伍',
    name: '球員',
    number: '1',
    position: '',
    hand: '無',
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
