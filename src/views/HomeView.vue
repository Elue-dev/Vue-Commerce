<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";
import ProductList from "@/components/ProductList.vue";

const productsStore = useProductsStore();

const { products } = storeToRefs(productsStore);

onMounted(async () => {
  await productsStore.getProducts();
});
</script>

<template>
  <main class="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="product in products" :key="product.id">
      <ProductList :product="product" />
    </div>
  </main>
</template>
