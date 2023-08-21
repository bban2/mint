<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      if (to.path === '/') {
        return navigateTo('/home')
      }
    },
    'auth',
  ],
});
</script>
<template>
</template>
