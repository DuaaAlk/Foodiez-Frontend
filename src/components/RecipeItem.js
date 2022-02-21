import React from "react";
import { Link } from "react-router-dom";

function RecipeItem({ recipe }) {
  return (
    <Link to={`/${recipe.category}/recipes/${recipe._id}`}>
      <div className="card col-md-3 card m-4" style={{ width: "14rem" }}>
        <div className="card-body">
          <img src={recipe.image} alt={recipe.name} class="image" />
          <div class="overlay">
            <div class="text">{recipe.name}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeItem;
