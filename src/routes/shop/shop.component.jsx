import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// import { setCategories } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
// import { fetchCategoriesAsync } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   const categoriesArray = await getCategoriesAndDocuments();
    //   dispatch(setCategories(categoriesArray));
    // };
    // getCategoriesMap();

    // dispatch(fetchCategoriesAsync()); used for thunk
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
