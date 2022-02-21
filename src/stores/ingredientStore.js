import { makeAutoObservable, action, observable } from "mobx";
import instance from "./instance";

class ingredientStore {
  ingredients = [];

  constructor() {
    makeAutoObservable(this, {
      ingredients: observable,
      fetchIngredients: action,
      createIngredients: action,
    });
  }

  fetchIngredients = async () => {
    try {
      const res = await instance.get("./ingrediants");
      this.ingredients = res.data;
    } catch (error) {}
  };
  createIngredients = async (ingrediant) => {
    try {
      const res = await instance.get("./ingrediants");
      this.ingredients.push(res.data);
    } catch (error) {}
  };
}

const ingredientStoreObject = new ingredientStore();
ingredientStoreObject.fetchIngredients();

export default ingredientStoreObject;
