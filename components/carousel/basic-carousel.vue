<template>
  <carousel
      :autoplay="props.autoplay"
      :items-to-show="props.itemsToShow"
      :itemsToScroll="props.itemsToScroll"
      :pauseAutoplayOnHover="props.pauseAutoplayOnHover"
      :snapAlign="props.snapAlign"
      :wrapAround="props.wrapAround"
  >
    <slot name="slide"/>
    <template #addons>
      <div v-if="showNavigation">
        <navigation/>
      </div>
      <div v-if="showPagination">
        <pagination/>
      </div>
    </template>
  </carousel>
</template>

<script lang="ts" setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Navigation, Pagination} from 'vue3-carousel'

export interface Props {
  itemsToShow?: string,
  autoplay?: number,
  pauseAutoplayOnHover?: boolean,
  wrapAround?: boolean,
  showPagination?: boolean,
  showNavigation?: boolean,
  itemsToScroll?: number,
  snapAlign?: string,
}

const props = withDefaults(defineProps<Props>(), {
  itemsToShow: '1.5',
  autoplay: 2000,
  pauseAutoplayOnHover: true,
  wrapAround: true,
  showPagination: false,
  showNavigation: true,
  itemsToScroll: 1,
  snapAlign: 'center',
})

</script>
<style lang="scss" scoped>
:deep(.carousel__icon) {
  color: #67e8f9;
  background-color: #ffffff;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  box-shadow: #ecfeff;
}
</style>
