<script setup lang="ts">
import { ShoppingCart } from "lucide-vue-next";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartComponent from "./CartComponent.vue";
</script>

<template>
  <nav class="bg-neutral-900">
    <div class="flex justify-between items-center container py-4">
      <router-link to="/">
        <div class="font-bold text-white">V-Commerce</div>
      </router-link>

      <Sheet>
        <SheetTrigger>
          <div class="relative cursor-pointer">
            <!-- <router-link to="/cart"> -->
            <ShoppingCart class="w-6 h-6 text-white" />
            <span
              class="bg-red-500 h-[19px] w-[19px] rounded-full absolute -top-1 left-4 text-[12px] flex justify-center items-center text-white"
              >{{ cartStore.cartTotal }}</span
            >
            <!-- </router-link> -->
          </div>
        </SheetTrigger>
        <SheetContent class="bg-neutral-900">
          <CartComponent />
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</template>
