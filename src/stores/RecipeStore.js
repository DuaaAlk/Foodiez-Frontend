import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipeStore {
  recipe = [];

  constructor() {
    makeAutoObservable(this);
  }
  fetchRecipe = async () => {
    try {
      const res = await instance.get("/recipes");
      this.recipe = res.data;
    } catch (error) {}
  };

  createRecipe = async (newRecipe) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);

      const res = await instance.post("/recipes", formData);
      this.recipe.push(res.data);
    } catch (error) {}
  };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipe();

export default recipeStore;
