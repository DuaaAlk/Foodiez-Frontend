import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import CategoryList from "./components/CategoryList";
import CategoryDetails from "./components/CategoryDetails";
import CreateRecipe from "./components/CreateRecipe";
import RecipeDetails from "./components/RecipeDetails";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App-header">
      <div id="bannerimage" class="glow">
        Foodiez
      </div>
      <Navbar />
      <Routes>
        <Route path="/categories" element={<CategoryList />}></Route>
        <Route path="/recipes" element={<RecipeList />}></Route>
        <Route
          path="/:categoryId/recipes"
          element={<CategoryDetails />}
        ></Route>
        <Route
          path="/:categoryId/recipes/createRecipe"
          element={<CreateRecipe />}
        ></Route>
        <Route
          path="/:categoryId/recipes/:recipeId"
          element={<RecipeDetails />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
