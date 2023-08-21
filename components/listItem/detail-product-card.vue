<template>
  <div class="border m-1 bg-white">
    <nuxt-img
        class="py-4"
        :class="cls"
        fit="cover"
        height="150"
        src="https://bizweb.dktcdn.net/100/326/228/products/harry-potter-and-the-prisoner-of-azkaban-by-j-k-rowling-jpeg.jpg?v=1540630813240"
    />
    <div class="p-2 text-left">
      <div class="text-sm line-clamp-2">{{ props.title }}</div>
      <div class="text-sm font-semibold">{{ numberWithCommas(props.cost) }}<span v-html="currencySymbol"></span></div>
    </div>
  </div>
</template>
<script lang="ts" setup>

type PropsType = {
  title: string,
  cost: string,
  currency?: string,
}

const props = defineProps({
  title: String,
  cost: String,
  currency: String,
  cls: String
})

const currencySymbol = computed(() => {
  return '&#8363;'
})

function numberWithCommas(x: string | number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

</script>
