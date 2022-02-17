import React from "react";

function RecipeItem({ recipe }) {
  return (
    <div>
      <h1>{recipe.name}</h1>
    </div>
  );
}

export default RecipeItem;
