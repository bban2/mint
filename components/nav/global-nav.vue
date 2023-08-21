<script lang="ts" setup>

import {useGlobalMenu} from "~/stores/customer/navigation/globalMenu";
import {storeToRefs} from "pinia";

const {fetMenuList} = useGlobalMenu();
const {menuList} = storeToRefs(useGlobalMenu())

const itemClassName = 'rounded-md py-2 px-4 hover:bg-gray-100 duration-300 ease-in-out'

const mainItemList = computed(() => {
  return {
    items: menuList.value?.menu_block?.items,
    title: menuList.value?.menu_block?.title
  }
})

const standOutItemList = computed(() => {
  return {
    items: menuList.value?.highlight_block?.items,
    title: menuList.value?.highlight_block?.title
  }
})

onBeforeMount(async () => {
  await fetMenuList();
  console.log(menuList.value)
})

</script>

<template>
  <div class="rounded h-full p-4">

    <div class="px-4 font-semibold">{{ mainItemList.title }}</div>
    <ul class="py-2">
      <li v-for="(item, index) in mainItemList.items" :key="index" :class="itemClassName">
        <nuxt-link :to="{ path: item.link }">
          <div class="flex gap-2">
            <u-avatar :src="item.icon_url" size="sm"/>
            <span>{{ item.text }}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>


    <div class="px-4 font-semibold">{{ standOutItemList.title }}</div>
    <ul class="py-2">
      <li v-for="(item, index) in standOutItemList.items" :key="index" :class="itemClassName">
        <nuxt-link :to="{ path: item.link }">
          <div class="flex gap-2">
            <u-avatar :src="item.icon_url" size="sm"/>
            <span>{{ item.text }}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>

    <!--salesman items-->
    <!--    <div class="px-4 font-semibold">Work with Tiki</div>-->
    <!--    <ul class="py-2">-->
    <!--      <li v-for="item in salesmanItemList" :key="item.id" :class="itemClassName">-->
    <!--        <nuxt-link :to="{ path: item.path }">-->
    <!--          <div class="flex gap-2">-->
    <!--            <u-avatar :src="item.image" size="sm"/>-->
    <!--            <span>{{ item.name }}</span>-->
    <!--          </div>-->
    <!--        </nuxt-link>-->
    <!--      </li>-->
    <!--    </ul>-->
  </div>
</template>

<style lang="scss" scoped>
.bg-active {
  background-color: blue;
}
</style>
