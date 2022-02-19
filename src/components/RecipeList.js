import RecipeItem from "./RecipeItem";
import recipeStore from "../stores/RecipeStore";
import React from "react";
import { observer } from "mobx-react";

function RecipeList() {
  const recipeList = recipeStore.recipe.map((recipe) => {
    return <RecipeItem recipe={recipe} key={recipe.id} />;
  });
  return (
    <>
      <h1>This is recipe list</h1>
      {recipeList}
    </>
  );
}
export default observer(RecipeList);
