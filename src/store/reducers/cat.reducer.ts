import { AnyAction } from "redux";

import { CatsActionTypes } from "../actionTypes/action.types";
import { ICatsInitialState } from "../types/cat.types";

const initialState: ICatsInitialState = {
  cats: [],
  categories: [],
  activeCategory: 0,
  activePage: 1,
  loadingCats: false
};

const catReducer = (state: ICatsInitialState = initialState, action: AnyAction) => {
  switch (action.type) {
    case CatsActionTypes.LOADING_CATS:
      return {
        ...state,
        loadingCats: action.loading
      };
    case CatsActionTypes.GET_CATS:
      return {
        ...state,
        cats: action.loadMore ? [...state.cats, ...action.cats] : action.cats
      };
    case CatsActionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    case CatsActionTypes.GET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.activeCategory
      };
    case CatsActionTypes.GET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage
      };
    default:
      return state;
  }
};

export default catReducer;
