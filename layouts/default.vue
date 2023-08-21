<script lang="ts" setup>
</script>
<template>
  <div class="bg-slate-100">
    <div class="pb-5">
      <global-header/>
    </div>
    <u-container class="overflow-hidden" style="padding: 0">
      <div class="grid grid-cols-12 gap-4">
        <div class="bg-white col-span-3 max-height-wrapper overflow-y-scroll no-scrollbar scroll-smooth">
          <global-nav/>
        </div>
        <div class="col-span-9 px-3 rounded max-height-wrapper overflow-y-scroll no-scrollbar scroll-smooth">
          <slot/>
        </div>
      </div>
    </u-container>
  </div>
</template>
<style scoped>
.max-height-wrapper {
  height: calc(100vh - 125px);
}

.h-inherit {
  height: inherit;
}
</style>
