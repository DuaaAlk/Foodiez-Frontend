import { useState } from "react";
import recipeStore from "./RecipeStore";

function RecipeCreate({}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [recipe, setRecipe] = useState({
    name: "",
    Image: "",
    category: "",
  });
}

const handleChange = (event) =>
  setRecipe({ ...recipe, [event.target.name]: event.target.value });
const handleImage = (event) =>
  setRecipe({ ...recipe, image: event.target.files[0] });

const handleSubmit = (event) => {
  event.preventDefault();
  recipeStore.RecipeCreate(recipe);
  handleClose();
};

return <div></div>;

// const RecipeForm = () => {
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
// };
