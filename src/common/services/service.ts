import axiosInstance from "../configs/axiosInstance";

export const getCategories = () => {
  return axiosInstance.get("categories");
};

export const getCats = (page = 1, limit = 10, categoryId?: number) => {
  const category_ids = categoryId ? `category_ids=${categoryId}` : "category_ids";

  return axiosInstance.get(`images/search?limit=${limit}&page=${page}&${category_ids}`);
};
