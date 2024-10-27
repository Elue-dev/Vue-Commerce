<script setup lang="ts">
import { defineProps } from "vue";

import type { Product } from "@/types/products";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

const props = defineProps<{
  product: Product;
}>();

const { product } = props;
</script>

<template>
  <div class="bg-neutral-800 rounded-lg p-4 flex flex-col h-full">
    <p class="text-white flex-grow">{{ product.title }}</p>
    <img
      :src="product.image"
      :alt="product.title"
      class="h-[200px] w-full mb-4 rounded"
    />

    <p>$ {{ product.price }}</p>
    <p>Category: {{ product.category }}</p>
    <!-- <p class="text-gray-300 mt-3">{{ product.description }}</p> -->

    <button
      @click="cartStore.addToCart(product)"
      class="bg-blue-500 p-2 rounded-lg mt-7 cursor-pointer"
    >
      Add To Cart
    </button>
  </div>
</template>
