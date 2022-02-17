import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import RecipeList from "./Recipe/RecipeList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <Route path="/recipes">
          <RecipeList />
        </Route>
      </header>
    </div>
  );
}

export default App;
