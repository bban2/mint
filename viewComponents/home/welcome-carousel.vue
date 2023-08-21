<template>
  <div class="grid grid-cols-12 gap-3">
    <div class="col-span-8">
      <basic-carousel :show-pagination="true">
        <template #slide>
          <slide v-for="slide in 10" :key="slide">
            <div class="h-[200px] p-2 border shadow-sm">
              <nuxt-img fit="cover"
                        src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_iw,h_ih/spreads/258250-4.jpg"/>
            </div>
          </slide>
        </template>
      </basic-carousel>
    </div>
    <div class="col-span-4">
      <div :style="{
            backgroundImage: 'url(https://cloudfront-us-east-2.images.arcpublishing.com/reuters/BJBUWPPZV5JC5HIOLBRYQYQJXY.jpg)',
            backgroundSize: 'cover'
          }" class="h-[200px]">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Slide} from "vue3-carousel"
</script>
