import { useState } from "react";
import recipeStore from "../stores/RecipeStore";
import { Button, Form, Modal } from "react-bootstrap";
import CategoryModal from "../components/CategoryModal";

function RecipeModal({ showRecipeModal, handleCloseRecipeModal }) {
  const [recipe, setRecipe] = useState({
    name: "",
    Image: "",
    category: "",
    ingredient: CategoryModal,
  });

  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    recipeStore.RecipeCreate(recipe);
    handleCloseRecipeModal();
  };

  return (
    <div>
      <Modal show={showRecipeModal} onHide={handleCloseRecipeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Recipe name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                type="file"
                placeholder=""
                onChange={handleImage}
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default RecipeModal;
