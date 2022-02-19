import React, { useState } from "react";
import { Stack, Form, Button, Row } from "react-bootstrap";
import { observer } from "mobx-react";
import ingredientStore from "../stores/ingredientStore";
import IngredientModal from "./IngredientModal";
import IngredientItem from "./IngredientItem";

function IngredientList() {
  const [query, setQuery] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const ingredientList = ingredientStore.ingredients
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem key={ingredient._id} ingredient={ingredient} />
    ));

  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        <Form.Control
          className="m-2"
          placeholder="Search for ingredient"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button variant="outline-light" onClick={handleShow}>
          Add Ingredient
        </Button>
        <IngredientModal show={show} handleClose={handleClose} />
      </Stack>
      <Row>{ingredientList}</Row>
    </div>
  );
}
export default observer(IngredientList);
