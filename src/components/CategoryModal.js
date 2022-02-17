import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";

function CategoryModal({ show, handleClose }) {
  const [category, setCategory] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setCategory((category.image = event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    categoryStore.createCategory(category);
    handleClose();
  };

  return (
    <div>
      {console.log("In the modal")}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Category name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                type="file"
                placeholder=""
                onChange={handleImage}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
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

export default CategoryModal;
