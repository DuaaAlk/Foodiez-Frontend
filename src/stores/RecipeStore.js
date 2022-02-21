import { makeAutoObservable, observable, action } from "mobx";
import instance from "./instance";

class RecipeStore {
  recipes = [];

  constructor() {
    makeAutoObservable(this, {
      recipes: observable,
      fetchRecipe: action,
      createRecipe: action,
    });
  }
  fetchRecipe = async () => {
    try {
      const res = await instance.get("/recipes");
      this.recipes = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  createRecipe = async (newRecipe) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) {
        formData.append(key, newRecipe[key]);
      }
      const res = await instance.post("/recipes", formData);
      this.recipes.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipe();

export default recipeStore;
