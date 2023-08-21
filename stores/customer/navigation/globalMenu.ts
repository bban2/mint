import {defineStore} from "pinia";
import {navigationApi} from "~/api/global/navigationApi";
import {MainBlock} from "~/models/navigation/menuItem";

export const useGlobalMenu = defineStore('globalMenu', () => {
    //TODO: add type here
    const menuList = ref<MainBlock>({} as MainBlock);

    async function fetMenuList(): Promise<void> {
        menuList.value = await navigationApi.getMenuItems();
    }

    return {
        menuList,
        fetMenuList
    }
})
