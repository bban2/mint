<template>
  <div class="flex items-center space-x-0.5">
    <u-icon id="star-1" name="i-heroicons-star-solid" :size="props.size" class="text-yellow-300" :class="props.cls"/>
    <u-icon id="star-2" name="i-heroicons-star-solid" :size="props.size" class="text-yellow-300" :class="props.cls"/>
    <u-icon id="star-3" name="i-heroicons-star-solid" :size="props.size" class="text-yellow-300" :class="props.cls"/>
    <u-icon id="star-4" name="i-heroicons-star-solid" :size="props.size" class="text-yellow-300" :class="props.cls"/>
    <u-icon id="star-5" name="i-heroicons-star-solid" :size="props.size" class="text-yellow-300" :class="props.cls"/>
  </div>
</template>
<script setup lang="ts">

const props = defineProps({
  size: {
    type: String,
    default: 'xs'
  },
  cls: {
    type: String,
    default: '',
  },
  starCount: {
    type: Number,
    default: 5,
  }
})

</script>
