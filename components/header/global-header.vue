<script lang="ts" setup>
const items = [
  {label: 'Analytics', content: 'Get a better understanding of your traffic', to: '#', icon: 'i-heroicons-phone'},
  {label: 'Engagement', content: 'Speak directly to your customers', to: '#', icon: 'i-heroicons-phone'},
  {label: 'Security', content: 'Your customers’ data will be safe and secure', to: '#', icon: 'i-heroicons-phone'},
  {label: 'Integrations', content: 'Connect with third-party tools', to: '#', icon: 'i-heroicons-phone'},
  {label: 'Automations', content: 'Build strategic funnels that will convert', to: '#', icon: 'i-heroicons-phone'},
]
const callsToAction = [
  {label: 'Watch demo', to: '#', icon: 'i-heroicons-play-circle'},
  {label: 'Contact sales', to: '#', icon: 'i-heroicons-phone'},
]

const linkItemClass = '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'

const searchContent = ref('')
const mobileMenuOpen = ref(false)
const searchPlaceHolderList = ['What are you looking for today', 'Flash sale up to 80%', 'In 24-hour delivery']

const searchPlaceHolder = ref(searchPlaceHolderList[0])

setInterval(() => {
  if (Math.random() * 10 % 2 === 1) {
    searchPlaceHolder.value = searchPlaceHolderList[0]
  } else if (Math.random() * 10 % 2 === 0) {
    searchPlaceHolder.value = searchPlaceHolderList[1]
  } else {
    searchPlaceHolder.value = searchPlaceHolderList[2]
  }
}, 2000)

</script>
<template>
  <div class="bg-white">
    <u-container class="flex items-center h-[60px] justify-between gap-4">
      <div class="flex items-center lg:flex-1 gap-4">
        <u-link class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <nuxt-img alt="" class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
        </u-link>
        <div class="flex lg:hidden">
          <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" type="button"
                  @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <u-icon aria-hidden="true" class="h-6 w-6" name="i-heroicons-bars-3"/>
          </button>
        </div>
        <div class="flex w-full justify-center">
          <div class="w-4/5">
            <u-input
                v-model="searchContent"
                :loading="false"
                :placeholder="searchPlaceHolder"
                :trailing="false"
                class="border-r-0 rounded-r-none"
                icon="i-heroicons-magnifying-glass-20-solid"
                name="searchContent"
                size="lg"
                type="text"
            >
              <template #trailing>
                <div class="flex gap-1">
                  <u-kbd>Ctrl</u-kbd>
                  <u-kbd>K</u-kbd>
                </div>
              </template>
            </u-input>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex lg:justify-end">
        <div
            class="sm:hidden flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 lg:flex lg:flex-1 lg:gap-x-2">
          <u-popover>
            <u-button variant="soft" icon="i-heroicons-swatch" size="sm" color="cyan" label="Product"
                      :trailing="false"/>
            <template #panel
                      class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in items" :key="item.label"
                     class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" aria-hidden="true"
                               class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"/>
                  </div>
                  <div class="flex-auto">
                    <u-link :to="item.to" class="block font-semibold text-gray-900">
                      {{ item.label }}
                      <span class="absolute inset-0"/>
                    </u-link>
                    <p class="mt-1 text-gray-600">{{ item.content }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <u-link v-for="item in callsToAction" :key="item.label" :to="item.to"
                        class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" aria-hidden="true" class="h-5 w-5 flex-none text-gray-400"/>
                  {{ item.label }}
                </u-link>
              </div>
            </template>
          </u-popover>
          <u-button icon="i-heroicons-home" size="sm" color="cyan" variant="ghost" label="Home"
                    :trailing="false"/>
          <u-button avatar="https://avatars.githubusercontent.com/u/739984?v=4" size="sm" color="cyan" variant="ghost"
                    label="Account"
                    :trailing="false"/>
          <u-button icon="i-heroicons-user-circle" size="sm" color="cyan" variant="ghost" label="Account"
                    :trailing="false"/>
          <div class="border-l">
            <u-button icon="i-heroicons-shopping-cart" size="sm" color="cyan" variant="ghost"
                      :trailing="false" class="ml-2"/>
          </div>
        </div>
      </div>
    </u-container>
    <div class="flex gap-2">
      <u-alert
          color="teal"
          variant="solid"
          class="rounded-none"
      >
        <template #description>
          <div class="flex justify-center items-center gap-1">
            <div>
              <u-icon name="i-heroicons-bolt-solid" color="yellow"/>
              <span class="font-bold italic text-[16px] text-yellow-200 px-2">FREE-SHIP</span> everyday, without any
              voucher
              <u-icon name="i-heroicons-chevron-right" class="animate-ping"/>
            </div>
          </div>
        </template>
      </u-alert>
    </div>
    <u-modal v-model="mobileMenuOpen" class="lg:hidden">
      <div class="fixed inset-0 z-10"/>
      <div
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <u-link class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <nuxt-img alt="" class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
          </u-link>
          <button class="-m-2.5 rounded-md p-2.5 text-gray-700" type="button" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <u-icon aria-hidden="true" class="h-6 w-6" name="i-heroicons-x-mark"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <u-link :class="linkItemClass">Product</u-link>
              <u-accordion :items="items" class="-mx-3">
              </u-accordion>
              <u-link :class="linkItemClass">
                Features
              </u-link>
              <u-link :class="linkItemClass">
                Marketplace
              </u-link>
              <u-link :class="linkItemClass">
                Company
              </u-link>
            </div>
            <div class="py-6">
              <u-link
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </u-link>
            </div>
          </div>
        </div>
      </div>
    </u-modal>
  </div>
</template>
