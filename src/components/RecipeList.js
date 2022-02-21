import React, { useState } from "react";
import { Form, Stack, Button, Row } from "react-bootstrap";
import { observer } from "mobx-react";
import RecipeItem from "./RecipeItem";
import recipeStore from "../stores/RecipeStore";
import { Link } from "react-router-dom";
import categoryStore from "../stores/categoryStore";

function RecipeList({ categoryId }) {
  const [query, setQuery] = useState("");

  const categoryName = categoryId
    ? categoryStore.categories.find((category) => category._id === categoryId)
        .name
    : "";

  const recipeList = categoryId
    ? recipeStore.recipe
        .filter((recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((recipe) =>
          recipe.category === categoryId ? (
            <RecipeItem recipe={recipe} key={recipe.id} />
          ) : (
            false
          )
        )
    : recipeStore.recipe
        .filter((recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />);

  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        <Form.Control
          className="m-2"
          placeholder="Search for recipe"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Link to={`/${categoryId}/recipes/createRecipe`}>
          <Button variant="outline-light">Add Recipe</Button>
        </Link>
      </Stack>
      <h4>{categoryId ? categoryName : ""}</h4>
      <Row>{recipeList}</Row>
    </div>
  );
}
export default observer(RecipeList);
