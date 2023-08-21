import {MainBlock} from "~/models/navigation/menuItem";

export default class NavigationApi {

    public async getMenuItems(): Promise<MainBlock> {
        let menuItems: MainBlock = {} as MainBlock
        try {
            const {data} = await useFetch('https://api.tiki.vn/raiden/v2/menu-config?platform=desktop')
            menuItems = data.value as MainBlock
        } catch (error) {
            throw error
        }

        return menuItems
    }
}

//TODO: add token here
export const navigationApi = new NavigationApi();
