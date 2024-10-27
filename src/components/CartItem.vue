<script setup lang="ts">
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";
import { useCartStore } from "@/stores/cart";

import type { CartItem } from "@/types/cart";
const cartStore = useCartStore();
import { Trash } from "lucide-vue-next";

const props = defineProps<{
  item: CartItem;
}>();

const { item } = props;
</script>

<template>
  <div class="mb-4 bg-neutral-800 rounded-lg p-3">
    <div class="flex items-center space-x-4">
      <img
        :src="item.image"
        :alt="item.title"
        class="h-[50px] w-[50px] rounded-lg"
      />
      <div class="w-full">
        <p class="text-[14px]">{{ item.title }}</p>
        <div class="flex justify-between items-center mt-2">
          <p class="text-[14px] text-gray-200">$ {{ item.price }}</p>
          <Trash
            color="red"
            class="cursor-pointer"
            :size="20"
            @click="cartStore.removeFromCart(item.cartId)"
          />
        </div>
      </div>
    </div>

    <NumberField
      id="count"
      :default-value="item.quantity"
      :min="0"
      class="bg-neutral-800 mt-3"
    >
      <NumberFieldContent>
        <NumberFieldDecrement
          :disabled="item.quantity === 1"
          @click="cartStore.decreaseQuantity(item.cartId)"
        />
        <NumberFieldInput />
        <NumberFieldIncrement
          @click="cartStore.increaseQuantity(item.cartId)"
        />
      </NumberFieldContent>
    </NumberField>
  </div>
</template>
