import { useState } from "react";
import recipeStore from "../stores/RecipeStore";
import CategoryList from "./CategoryList";
import ingredientList from "./ingredientList";
import { Button, Form, Modal, DropdownButton, Dropdown } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";

function RecipeCreate({ show, handleClose }) {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    description: "",
  });

  const [category, setCategory] = useState(null);
  const [ingrediant, setIngrediant] = useState([]);

  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleCategory = (event) => setCategory(event.target.id);
  const handleSubmit = (event) => {
    event.preventDefault();
    recipeStore.createRecipe({
      ...recipe,
      category: category,
    });
    handleClose();
  };

  const dropDownList = categoryStore.categories.map((category) => (
    <Dropdown.Item
      onClick={handleCategory}
      key={category._id}
      id={category._id}
    >
      {category.name}
    </Dropdown.Item>
  ));

  console.log(category);
  const selectedCategory = categoryStore.categories.find(
    (cat) => cat._id === category
  );
  let selectedCategoryTitle = "select title";
  if (selectedCategory) {
    selectedCategoryTitle = selectedCategory.name;
  }
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
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
              <Form.Group>
                <DropdownButton
                  id="dropdown-basic-button"
                  title={selectedCategoryTitle}
                >
                  {dropDownList}
                </DropdownButton>
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
      </>
    </div>
  );
}
export default RecipeCreate;

/* 
//   const [title, setTitle] = useState("");
//   const [cookTime, setCookTime] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [servings, setServings] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     {
//       type: ADD_RECIPE;
//     }
//     recipe: {
//       title,
//         (ingredients = ingredients.trim().split("\n")),
//         cookTime,
//         servings,
//         setTitle("");
//       setIngredients("");
//       setServings("");
//       setCookTime("");
//     }
//   };

//   return (
//     <div className="RecipeForm">
//       <h2>Create Recipe</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           className="RecipeForm-full"
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           className="RecipeForm-full"
//           rows="10"
//           placeholder="Ingredients"
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           name="cookTime"
//           placeholder="Cook Time"
//           value={cookTime}
//           onChange={(e) => setCookTime(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           name="servings"
//           placeholder="Servings"
//           value={servings}
//           onChange={(e) => setServings(e.target.value)}
//           required
//         />
//         <input
//           className="RecipeForm-full RecipeForm-btnSubmit"
//           type="submit"
//           value="add recipe"
//         />
//       </form>
//     </div>
//   );
// }; */
