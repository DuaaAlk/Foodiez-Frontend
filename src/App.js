
import "./App.css";
import { Route } from "react-router";
import RecipeList from "./Recipe/RecipeList";
import CategoryList from "./components/CategoryList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <Route path="/recipes">
           <CategoryList />
          <RecipeList />
        </Route>
      </header>
    </div>
  )}



export default App;
