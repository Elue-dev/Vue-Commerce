<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import "@/styles/main.css";
</script>

<template>
  <Header />
  <main class="container">
    <RouterView />
  </main>
</template>
