<script lang="ts" setup>
import ContactItem from "~/components/listItem/contact-item.vue";

const interval = ref()
const onlineStatus = ref({
  status: 'active'
})
onMounted(() => {
  console.log('it mounted')
})

watch(() => Date.now(), () => {
  const time = Date.now()
  if (time % 5 === 4) {
    onlineStatus.value.status = 'inactive'
  }
  console.log('time % 5 === 4', time % 5 === 4)
})

</script>

<template>
  <u-container style="width: 60vw">
    <span class="my-2">Account Information</span>
    <u-card>
      <div class="grid grid-cols-12">
        <div class="col-span-7 border-r pr-3">
          <div>Personal information</div>
          <div class="flex gap-4">
            <u-avatar
                :chip-color="onlineStatus.status === 'active' ? 'primary' : 'secondary'"
                alt="profile image"
                chip-position="bottom-right"
                chip-text=""
                size="2xl"
                src="https://avatars.githubusercontent.com/u/739984?v=4"
            />
            <div class="flex flex-col gap-[20px] flex-1">
              <div class="flex justify-between items-center">
                <span>Name</span>
                <span>
                <u-input size="md" placeholder="add full name" type="text"/>
                </span>
              </div>
              <div class="flex justify-between items-center">
                <span>Nickname</span>
                <span>
                <u-input size="md" placeholder="add nickname" type="text"/>
              </span>
              </div>
            </div>
          </div>

          <div class="text-sm">People you may know</div>
          <contact-item/>

        </div>
        <div class="col-span-5 px-3">
          <div class="grid grid-cols-1 divide-y">
            <div class="p-2">
              <div>Phone and Email</div>
              <div class="grid grid-cols-1 divide-y">
                <div class="flex justify-between p-3">
                  <div class="flex gap-3 items-center">
                    <u-icon name="i-heroicons-phone"/>
                    <span>Phone</span>
                  </div>
                  <u-button color="blue" variant="outline" class="px-4">Update</u-button>
                </div>
                <div class="flex justify-between p-3">
                  <div class="flex gap-3 items-center">
                    <u-icon name="i-heroicons-envelope"/>
                    <span>Email</span>
                  </div>
                  <u-button color="blue" variant="outline" class="px-4">Update</u-button>
                </div>
              </div>
            </div>

            <div class="p-2">
              <div>Security</div>
              <div class="grid grid-cols-1 divide-y">
                <div class="flex justify-between p-3">
                  <div class="flex gap-3 items-center">
                    <u-icon name="i-heroicons-lock-closed"/>
                    <span>Change password</span>
                  </div>
                  <u-button color="blue" variant="outline" class="px-4">Update</u-button>
                </div>
                <div class="flex justify-between p-3">
                  <div class="flex gap-3 items-center">
                    <u-icon name="i-heroicons-shield-check"/>
                    <span>Add pin code</span>
                  </div>
                  <u-button color="blue" variant="outline" class="px-4">Update</u-button>
                </div>
              </div>
            </div>

            <div class="p-2">
              <div>Social links</div>
              <div class="grid grid-cols-1 divide-y">
                <div class="flex justify-between p-3">
                  <div class="flex gap-3 items-center">
                    <u-icon name="i-logos-facebook"/>
                    <span>Facebook</span>
                  </div>
                  <u-button color="blue" variant="outline" class="px-4">Update</u-button>
                </div>
                <div class="flex justify-between p-3">
                  <div class="flex gap-3 items-center">
                    <u-icon name="i-heroicons-google"/>
                    <span>Google</span>
                  </div>
                  <u-button color="blue" variant="outline" class="px-4">Update</u-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </u-card>
  </u-container>
</template>
