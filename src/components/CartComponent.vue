<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

import { storeToRefs } from "pinia";
import CartItem from "./CartItem.vue";
import { ShoppingBasket } from "lucide-vue-next";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
</script>

<template>
  <h1 class="text-2xl">Cart</h1>
  <p v-if="cartStore.cartTotal !== 0">
    {{ cartStore.cartTotal }} total
    <span>{{ cartStore.cartTotal === 1 ? "item" : "items" }}</span>
  </p>

  <div
    v-if="cart.length === 0"
    class="mt-6 flex flex-col items-center justify-center"
  >
    <ShoppingBasket />
    <h1 class="mt-2">Oops... Cart Empty!</h1>
  </div>

  <div v-else v-for="item in cart" :key="item.cartId" class="mt-6">
    <CartItem :item />
  </div>
</template>
