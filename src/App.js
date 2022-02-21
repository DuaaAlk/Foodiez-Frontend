import "./App.css";
import { Route, Routes } from "react-router";
import CategoryList from "./components/CategoryList";
import RecipeList from "./components/RecipeList";
import IngredientList from "./components/ingredientList";
import CategoryItem from "./components/CategoryItem";
import RecipeModal from "./components/RecipeModal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CategoryList />}></Route>
        <Route path="/Categories/:categoryid" element={<RecipeList />}></Route>
        <Route path="/recipes" element={<RecipeList />}></Route>
        {/* <Route path="/categoryList/:categoryid">
          <CategoryItem />
        </Route>
      
        <Route path="/recipe">
          <RecipeModal />
        </Route> */}
        {/* <Route path="/ingredientList">
          <IngredientList />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
