import React, { useState } from "react";
import { Form, Stack, Button, Row } from "react-bootstrap";
import { observer } from "mobx-react";
import categoryStore from "../stores/categoryStore";
import CategoryItem from "./CategoryItem";
import CategoryModal from "./CategoryModal";
import RecipeItem from "./RecipeItem";
import recipeStore from "../stores/RecipeStore";
import RecipeModal from "./RecipeModal";

function CategoryList() {
  const [query, setQuery] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const handleCloseRecipeModal = () => setShowRecipeModal(false);
  const handleShowRecipeModal = () => setShowRecipeModal(true);

  const categoryList = categoryStore.categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem key={category._id} category={category} />);

  console.log(categoryList);

  const recipeList = recipeStore.recipe.map((recipe) => {
    return <RecipeItem recipe={recipe} key={recipe.id} />;
  });

  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        <Form.Control
          className="m-2"
          placeholder="Search for category"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button variant="outline-light" onClick={handleShow}>
          Add Category
        </Button>
        <CategoryModal show={show} handleClose={handleClose} />
        <Button variant="outline-light" onClick={handleShowRecipeModal}>
          Add Recipe
        </Button>
        <RecipeModal
          showRecipeModal={showRecipeModal}
          handleCloseRecipeModal={handleCloseRecipeModal}
        />
      </Stack>
      <Row>{categoryList}</Row>
      <Row>{recipeList}</Row>
    </div>
  );
}

export default observer(CategoryList);
