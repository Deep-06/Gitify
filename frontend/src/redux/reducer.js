import {
  SET_USER_DATA,
  SET_REPOS,
  SET_REPO_DETAILS,
  SET_FOLLOWERS,
  SELECT_REPO,
  UPDATE_USER_DATA
} from './actionTypes.js';

const initialState = {
  userData: null,
  repos: [],
  repoDetails: null,
  followers: [],
  selectedRepo: null,
};

export const rootReducer = (state = initialState, action) => {
  //  console.log('Dispatching action:', action);
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, userData: action.payload };
    case SET_REPOS:
      return { ...state, repos: action.payload };
    case SET_REPO_DETAILS:
      return { ...state, repoDetails: action.payload };
    case SET_FOLLOWERS:
      return { ...state, followers: action.payload };
    case SELECT_REPO:
      return { ...state, selectedRepo: action.payload };
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
      };

    default:
      return state;
  }
};
