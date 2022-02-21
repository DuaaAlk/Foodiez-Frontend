import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipeStore {
  recipe = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipes = async () => {
    try {
      const res = await instance.get("/recipes");
      this.recipe = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  fetchRecipesOfCategory = async (categoryId) => {
    try {
      const res = await instance.get("/recipes");
      this.recipe = res.data;
      this.recipe = this.recipe.filter((recipe) =>
        recipe.categories.filter((category) => category._id === categoryId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  createRecipe = async (newRecipe, categoryId) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);

      const res = await instance.post(
        `categories/${categoryId}/recipes`,
        formData
      );
      this.recipe.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;
