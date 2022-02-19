import instance from "./instance";
import { makeAutoObservable } from "mobx";

class IngredientStore {
  ingredients = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchIngredients = async () => {
    try {
      const res = await instance.get("./ingrediants");
      this.ingredients = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  createIngredient = async (newIngrediant) => {
    try {
      const formData = new FormData();
      for (const key in newIngrediant) formData.append(key, newIngrediant[key]);

      const response = await instance.post("/ingredients", formData);
      this.ingredients.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const ingredientStore = new IngredientStore();

export default ingredientStore;
