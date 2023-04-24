<template>
  <p>{{ props.message }}</p>
</template>

<script lang="ts" setup>
const props = defineProps({
  message: String
});
</script>
