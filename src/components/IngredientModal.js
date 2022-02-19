import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ingredientStore from "../stores/ingredientStore";

function IngredientModal({ show, handleClose }) {
  const [ingredient, setIngredient] = useState({
    name: "",
    unit: "",
  });

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
    console.log("Habdle Change:", ingredient);
  };
  // const handleImage = (event) => {
  //   // console.log(event.target.value);
  //   // console.log(event.target.files[0]);
  //   setIngredient({ ...ingredient, image: event.target.files[0] });
  //   console.log(ingredient);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handel Submit : ", ingredient);
    ingredientStore.createIngredient(ingredient);
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Unit</Form.Label>
              <Form.Control
                name="unit"
                type="text"
                placeholder=""
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default IngredientModal;
