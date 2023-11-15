import {useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.contexts";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
