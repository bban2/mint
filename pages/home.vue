<template>
  <div>
    <div class="grid grid-cols-12 gap-3">
      <div class="col-span-8">
        <basic-carousel>
          <template #slide>
            <slide v-for="slide in 10" :key="slide">
              <div class="h-[200px] p-2 border shadow-sm">
                <nuxt-img
                    fit="cover"
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
    <!--    short keyword-->
    <div class="flex justify-between items-center bg-white mt-3">
      <div class="flex gap-6 p-2">
        <div class="flex gap-2 items-center py-2 px-3">
          <u-icon class="text-teal-600" name="i-heroicons-check-badge"/>
          Authentic
        </div>
        <div class="flex gap-2 items-center border-l py-2 px-3">
          <u-icon class="text-teal-600" name="i-heroicons-users"/>
          Personal
        </div>
        <div class="flex gap-2 items-center border-l py-2 px-3">
          <u-icon class="text-teal-600" name="i-heroicons-clock"/>
          Fast and Punctual
        </div>
      </div>
      <u-button variant="ghost" class="flex items-center gap-4 px-3"
                @click="isOpenShoppingSafetyModal = true">
        <div class="text-teal-600">Shopping with safety</div>
        <u-icon class="text-lg text-gray-500 font-semibold" name="i-heroicons-chevron-right"/>
      </u-button>
    </div>
    <!--  end of short keyword-->

    <shopping-safety :isOpen="isOpenShoppingSafetyModal" @close="isOpenShoppingSafetyModal = false"/>

    <u-card class="mt-3">
      <div class="font-semibold text-lg mb-2">Products you may like</div>
      <basic-carousel items-to-show="5" :autoplay="0">
        <template #slide>
          <slide v-for="slide in 10" :key="slide">
            <product-card
                title="Harry Potter Part 3: Harry Potter And The Prisoner Of Azkaban (Paperback) (Harry Potter và tù nhân ngục Azkaban) (English Book)"
                cost="192000"></product-card>
          </slide>
        </template>
      </basic-carousel>
    </u-card>

    <u-card class="mt-3">
      <div class="font-semibold text-lg mb-2">Products you viewed</div>
      <basic-carousel items-to-show="5" :autoplay="0">
        <template #slide>
          <slide v-for="slide in 10" :key="slide">
            <product-card
                title="Harry Potter Part 3: Harry Potter And The Prisoner Of Azkaban (Paperback) (Harry Potter và tù nhân ngục Azkaban) (English Book)"
                cost="192000"></product-card>
          </slide>
        </template>
      </basic-carousel>
    </u-card>

    <u-card class="mt-3">
      <div class="font-semibold text-lg mb-2">Outstanding brands</div>
      <basic-carousel items-to-show="5" :autoplay="0">
        <template #slide>
          <slide v-for="slide in 10" :key="slide">
            <product-card
                title="Harry Potter Part 3: Harry Potter And The Prisoner Of Azkaban (Paperback) (Harry Potter và tù nhân ngục Azkaban) (English Book)"
                cost="192000"></product-card>
          </slide>
        </template>
      </basic-carousel>
    </u-card>

  </div>
</template>
<script lang="ts" setup>
import {Slide} from "vue3-carousel";
import ShoppingSafety from "~/viewComponents/modal/home/shopping-safety.vue";

const isOpenShoppingSafetyModal = ref(false)
</script>
