<script setup>
const page = ref(1);
const items = ref(Array(55));
</script>

<template>
  <u-pagination v-model="page" :total="items.length"
                :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }">
    <template #prev="{ onClick }">
      <u-tooltip text="Previous page">
        <u-button :ui="{ rounded: 'rounded-full' }" class="rtl:[&_span:first-child]:rotate-180 me-2" color="primary"
                  icon="i-heroicons-arrow-small-left-20-solid" @click="onClick"/>
      </u-tooltip>
    </template>

    <template #next="{ onClick }">
      <u-tooltip text="Next page">
        <u-button :ui="{ rounded: 'rounded-full' }" class="rtl:[&_span:last-child]:rotate-180 ms-2" color="primary"
                  icon="i-heroicons-arrow-small-right-20-solid" @click="onClick"/>
      </u-tooltip>
    </template>
  </u-pagination>
</template>
