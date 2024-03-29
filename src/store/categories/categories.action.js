// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// thunk fetch categories async function, replaced with saga
// export const fetchCategoriesAsync = () => async (disptach) => {
//   disptach(fetchCategoriesStart());

//   try {
//     const categoriesArray = await getCategoriesAndDocuments();
//     disptach(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     disptach(fetchCategoriesFailed(error));
//   }
// };

// redux reducer actions
// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
