import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";
import recipeStore from "../stores/RecipeStore";

function RecipeDeatils() {
  const { recipeId } = useParams();

  const recipe = recipeStore.recipe.find((recipe) => recipe._id === recipeId);

  return (
    <>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </>
  );
}

export default observer(RecipeDeatils);
