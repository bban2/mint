<template>
  <div class="border rounded m-1 bg-white">
    <div :style="{
         backgroundImage: 'url(https://bizweb.dktcdn.net/100/326/228/products/harry-potter-and-the-prisoner-of-azkaban-by-j-k-rowling-jpeg.jpg?v=1540630813240)',
         backgroundSize: 'cover'
         }"
         class="h-[170px] w-[150]"
    ></div>


    <div class="p-2 text-left">
      <u-badge class="gap-2" color="teal" variant="subtle">
        <u-icon class="text-md" name="i-heroicons-check-badge-solid"/>
        <span>OFFICIAL</span>
      </u-badge>
      <div class="text-sm line-clamp-2 mt-1">{{ props.title }}</div>
      <five-start-rate/>
      <div class="font-semibold mt-1">{{ numberWithCommas(props.cost) }}<sup v-html="currencySymbol"></sup></div>
      <div class="flex items-center gap-2 border-t mt-1 pt-1">
        <nuxt-img class="h-[18px]"
                  src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"/>
        <span :class="subTextClass">Flash delivery 2h</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

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

const subTextClass = 'text-sm leading-6 text-gray-400 line-clamp-1'
</script>
