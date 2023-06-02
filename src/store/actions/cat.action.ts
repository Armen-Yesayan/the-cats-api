import { CatsActionTypes } from "src/store/actionTypes/action.types";
import {
  ICategories,
  ICats,
  IGetActiveCategoryAction,
  IGetActivePageAction,
  IGetCategoriesAction,
  IGetCatsAction,
  ILoadingAction
} from "src/store/types/cat.types";

export const getCategoriesAction = (categories: Array<ICategories>): IGetCategoriesAction => ({
  type: CatsActionTypes.GET_CATEGORIES,
  categories
});

export const getCatsAction = (cats: Array<ICats>, loadMore: boolean): IGetCatsAction => ({
  type: CatsActionTypes.GET_CATS,
  cats,
  loadMore
});

export const getActiveCategoryAction = (activeCategory: number): IGetActiveCategoryAction => ({
  type: CatsActionTypes.GET_ACTIVE_CATEGORY,
  activeCategory
});

export const getActivePageAction = (activePage: number): IGetActivePageAction => ({
  type: CatsActionTypes.GET_ACTIVE_PAGE,
  activePage
});

export const setLoadingCatsAction = (loading: boolean): ILoadingAction => ({
  type: CatsActionTypes.LOADING_CATS,
  loading
});
