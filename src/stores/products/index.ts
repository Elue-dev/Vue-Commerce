import { httpRequest } from "@/services/axios";
import type { Product } from "@/types/products";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [] as Product[],
      isLoading: false,
    };
  },
  actions: {
    async getProducts() {
      this.isLoading = true;
      const response = await httpRequest.get("/products");
      this.products = response.data;
      this.isLoading = false;
    },
  },
});
