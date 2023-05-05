<script setup lang="ts">
import { useRoute } from 'vue-router';

const { name } = useRoute();
</script>

<template>
  <div class="container">
    <span style="text-decoration: none; text-decoration-line: none">
      <router-link to="/">Todo App</router-link> - {{ name }}</span
    >
  </div>
</template>

<style scoped>
.container {
  width: auto;
  height: 80px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 30px 0;
}
</style>
