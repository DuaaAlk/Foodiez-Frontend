import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  fetchSingleCategory = async (categoryId) => {
    const foundCategory = this.categories.find(
      (category) => category._id === categoryId
    );
    return foundCategory;
  };

  createCategory = async (newCategory) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);

      const response = await instance.post("/categories", formData);
      this.categories.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
const categoryStore = new CategoryStore();
categoryStore.fetchCategories();

export default categoryStore;
