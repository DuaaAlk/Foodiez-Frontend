import React from "react";

function RecipeItem({ recipe }) {
  return (
    <div
      className="card col-md-3 card border-primary m-4"
      style={{ width: "14rem" }}
    >
      <div className="card-body">
        <h1>{recipe.name}</h1>
      </div>
    </div>
  );
}

export default RecipeItem;
