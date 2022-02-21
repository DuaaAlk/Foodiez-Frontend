import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import recipeStore from "../stores/RecipeStore";

function CreateRecipe() {
  const { categoryId } = useParams();
  let navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    instructions: "",
    category: categoryId,
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };
  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    recipeStore.createRecipe(recipe, categoryId);
    alert(`${recipe.name} is created successfully`);
    navigate(`/${categoryId}/recipes`, { state: true });
    window.location.reload(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Recipe name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Category</Form.Label>
          <Form.Control
            placeholder="{
              categoryStore.categories.find(
                (category) => category._id === categoryId
              ).name
            }"
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Recipe Image</Form.Label>
          <Form.Control
            name="image"
            type="file"
            placeholder=""
            onChange={handleImage}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="instructions"
            placeholder="Write Instructions for your recipe"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default CreateRecipe;
