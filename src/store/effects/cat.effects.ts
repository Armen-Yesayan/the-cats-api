import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState, ServiceType } from "src/store";
import {
  getActiveCategoryAction,
  getActivePageAction,
  getCategoriesAction,
  getCatsAction,
  setLoadingCatsAction
} from "src/store/actions/cat.action";

type Effect = ThunkAction<void, AppState, ServiceType, AnyAction>;

export const getCategoriesEffect = (): Effect => {
  return async (dispatch, getState, services) => {
    try {
      const result = await services.getCategories();

      dispatch(getCategoriesAction(result.data));
    } catch (error: any) {
      console.log("getCategoriesEffect", error.message);
    }
  };
};

export const getCatsEffect = (page = 1, limit = 10, categoryId?: number, loadMore = false): Effect => {
  return async (dispatch, getState, services) => {
    dispatch(setLoadingCatsAction(true));
    try {
      const { categories } = getState().catReducer;

      if (!categories.length) {
        dispatch(getCategoriesEffect());
      }

      if (categoryId) {
        dispatch(getActiveCategoryAction(categoryId));
      }

      dispatch(getActivePageAction(page));

      const result = await services.getCats(page, limit, categoryId);

      dispatch(getCatsAction(result.data, loadMore));

      dispatch(setLoadingCatsAction(false));
    } catch (error: any) {
      console.log("getCatsByLimitEffect", error.message);
      dispatch(setLoadingCatsAction(false));
    }
  };
};
