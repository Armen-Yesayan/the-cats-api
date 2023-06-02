import { Action } from "redux";

export interface ICatsInitialState {
  cats: Array<ICats>;
  categories: Array<ICategories>;
  activeCategory: number;
  activePage: number;
  loadingCats: boolean;
}

export interface ICats {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface ICategories {
  id: number;
  name: string;
}

export interface IGetCatsAction extends Action<string> {
  cats: Array<ICats>;
  loadMore: boolean;
}

export interface IGetCategoriesAction extends Action<string> {
  categories: Array<ICategories>;
}

export interface IGetActiveCategoryAction extends Action<string> {
  activeCategory: number;
}

export interface IGetActivePageAction extends Action<string> {
  activePage: number;
}

export interface ILoadingAction extends Action<string> {
  loading: boolean;
}
