import React from "react";
import { observer } from "mobx-react";

function IngredientItem({ ingredient }) {
  return (
    <div>
      <h1>{ingredient.name}</h1>
    </div>
  );
}

export default observer(IngredientItem);
