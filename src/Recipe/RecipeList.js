import RecipeItem from "./RecipeItem";
import recipeStore from "./RecipeStore";
import React from "react";
import { observer } from "mobx-react";

function RecipeList() {
  const recipeList = recipeStore.recipe.map((recipe) => {
    return <RecipeItem recipe={recipe} key={recipe.id} />;
  });
  return <RecipeList />;
}
export default observer();
