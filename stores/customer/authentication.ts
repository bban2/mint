import {defineStore} from "pinia";

export const useCustomerAuth = defineStore('customerAuth', () => {
    const customerAuth = ref();

    return {
        customerAuth
    }
})
