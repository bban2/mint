<template>
  <u-modal :model-value="open" prevent-close>
    <u-card :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Modal
          </h3>
          <u-button class="-my-1" color="gray" icon="i-heroicons-x-mark-20-solid" variant="ghost"
                    @click="$emit('close', open)"/>
        </div>
      </template>
      <u-skeleton class="h-32"/>
    </u-card>
  </u-modal>
</template>

<script lang="ts" setup>
const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close'])

const open = computed(() => {
  return props.isOpen;
})


</script>

