import React from "react";
import { observer } from "mobx-react";
import ingredientStore from "../stores/ingredientStore";
import IngredientItem from "./ingredientItem";

function IngredientList() {
  const ingredientList = ingredientStore.ingredient.map((ingredient) => {
    return <IngredientItem ingredient={ingredient} />;
  });
  return <p>{ingredientList}</p>;
}
export default observer(IngredientList);
