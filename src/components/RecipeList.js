import RecipeItem from "./RecipeItem";
import React, { useState } from "react";
import { observer } from "mobx-react";
import recipeStore from "../stores/RecipeStore";
import { Stack, Row, Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import RecipeModal from "./RecipeModal";

function RecipeList() {
  console.log(recipeStore.recipes);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const { categoryId } = useParams();
  console.log(categoryId);
  const recipeList = !categoryId
    ? recipeStore.recipes.map((recipe) => {
        console.log(recipe._id);
        return <RecipeItem recipe={recipe} key={recipe._id} />;
      })
    : recipeStore.recipes
        .filter((recipe) => recipe.category[0] === categoryId)
        .map((recipe) => {
          return <RecipeItem recipe={recipe} key={recipe._id} />;
        });

  console.log(recipeStore.recipes[recipeStore.recipes.length - 1]);
  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        <Form.Control
          className="m-2"
          placeholder="Search for recipe"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button variant="primary" onClick={handleShow} className="btn">
          create Recipe
        </Button>
        <RecipeModal show={show} handleClose={handleClose} />
      </Stack>
      <Row>{recipeList}</Row>
    </div>
  );
}
export default observer(RecipeList);
