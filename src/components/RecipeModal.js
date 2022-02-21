import { useState } from "react";
import { useParams } from "react-router-dom";
import recipeStore from "../stores/RecipeStore";
import { Button, Form, Modal } from "react-bootstrap";
import CategoryModal from "../components/CategoryModal";
import categoryStore from "../stores/categoryStore";

function RecipeModal({ showRecipeModal, handleCloseRecipeModal }) {
  const { categoryId } = useParams();

  const [recipe, setRecipe] = useState({
    name: "",
    Image: "",
    category: categoryId,
    // ingredient: CategoryModal,
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
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder={
                  categoryStore.categories.find(
                    (category) => category._id === categoryId
                  ).name
                }
                disabled
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Recipe name"
                onChange={handleChange}
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Instructions</Form.Label>
              <Form.Control as="textarea" rows={5} />
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
