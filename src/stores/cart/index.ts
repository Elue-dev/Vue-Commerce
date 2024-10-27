import type { CartItem } from "@/types/cart";
import type { Product } from "@/types/products";
import iziToast from "izitoast";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    const productsInStorage = localStorage.getItem("products");
    const cartState = productsInStorage ? JSON.parse(productsInStorage) : [];

    return {
      cart: cartState as CartItem[],
    };
  },
  getters: {
    cartTotal(state) {
      return state.cart.length;
    },
  },
  actions: {
    addToCart(product: Product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      console.log({ existingItem });

      if (existingItem) {
        existingItem.quantity += 1;
        iziToast.success({
          title: "Quantity Increased",
          message: `${product.title} quantity increased in cart`,
          position: "topLeft",
        });
      } else {
        this.cart.push({
          ...product,
          cartId: Math.random().toString(),
          quantity: 1,
        } as CartItem);
        iziToast.success({
          title: "Added",
          message: `${product.title} successfully added to cart`,
          position: "topLeft",
        });
      }

      localStorage.setItem("products", JSON.stringify(this.cart));
    },
    removeFromCart(cartId: string) {
      console.log("hiii");

      this.cart = this.cart.filter((item) => item.cartId !== cartId);
      iziToast.info({
        title: "Removed",
        message: "Item removed from cart",
        position: "topLeft",
      });
      localStorage.setItem("products", JSON.stringify(this.cart));
    },
    decreaseQuantity(cartId: string) {
      const existingItem = this.cart.find((item) => item.cartId === cartId);
      console.log({ existingItem, cartId });

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          iziToast.info({
            title: "Quantity Decreased",
            message: `${existingItem.title} quantity decreased in cart`,
            position: "topLeft",
          });
        } else {
          this.removeFromCart(cartId);
          return;
        }

        localStorage.setItem("products", JSON.stringify(this.cart));
      }
    },
    increaseQuantity(cartId: string) {
      const existingItem = this.cart.find((item) => item.cartId === cartId);
      if (existingItem) {
        existingItem.quantity += 1;
        iziToast.success({
          title: "Quantity Increased",
          message: `${existingItem.title} quantity increased in cart`,
          position: "topLeft",
        });
      }

      localStorage.setItem("products", JSON.stringify(this.cart));
    },
  },
});
