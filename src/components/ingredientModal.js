import { useState } from "react";
import ingredientStore from "../stores/ingredientStore";
import { Button, Form, Modal } from "react-bootstrap";
import React from "react";

function IngredientCreate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [IngredientCreate, setIngredientsCreate] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    setIngredientsCreate({
      ...IngredientCreate,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientStore.IngredientCreate(IngredientCreate);
    handleClose();
  };
  return (
    <>
      <Button variant="" onClick={handleShow}>
        Create New ingrediant
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title> Add your ingredient </Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Ingredients Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Category name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder=""
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default IngredientCreate;
