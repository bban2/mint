// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: [
        "@nuxthq/ui", '@nuxt/image', ["@pinia/nuxt", {
            pinia: {
                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        }],
        "@pinia-plugin-persistedstate/nuxt"],

    components: [{
        path: '~/components', pathPrefix: false,
    },],

    css: [
        "~/assets/style/main.scss",
    ]
});

