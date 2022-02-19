import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import RecipeList from "./components/RecipeList";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <div>
      {/* <div id="bannerimage"></div>
      <header className="App-header">
      </header> */}
      <Routes>
        <Route path="/" element={<CategoryList />}></Route>
        <Route path="/recipes" element={<RecipeList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
