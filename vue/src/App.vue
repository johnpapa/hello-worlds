<template>
  <div>Hello {{ value }}</div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('World');
</script>
