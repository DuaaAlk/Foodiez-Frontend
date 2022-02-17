import React from "react";
import { observer } from "mobx-react";

function IngredientList() {
  const ingredientList = ingredientStore.ingredient.map((ingredient) => {
    return <IngredientItem ingredient={ingredient} />;
  });
  return <IngredientList />;
}
export default observer();
