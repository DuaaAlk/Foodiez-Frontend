import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";
import categoryStore from "../stores/categoryStore";
import CategoryList from "./CategoryList";
import RecipeList from "./RecipeList";

function CategoryDetails() {
  const { categoryId } = useParams();

  const category = categoryStore.categories.find(
    (category) => category._id === categoryId
  );

  if (!category) return <CategoryList />;

  return (
    <>
      <RecipeList categoryId={category._id} />
    </>
  );
}

export default observer(CategoryDetails);
