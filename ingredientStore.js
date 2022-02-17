import { makeAutoObservable } from "mobx";

class ingredientStore {
  ingredients = [];

  constructor() {
    makeAutoObservable(this);
  }
}

fetchIngredients = async () => {
  try {
    const res = await instance.get("./ingrediants");
    this.ingredients = res.data;
  } catch (error) {}

  crateIngredients = async (ingrediant) => {
    try {
      const res = await instance.get("./ingrediants");
      this.ingredients.push(rew.data);
    } catch (error) {}
  };
};

const ingredientStore = new IngredientStore();
ingredientStore.fetchRecipe();

export default ingredientStore;
