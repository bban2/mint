interface MenuBlock {
    title: string;
    items: {
        text: string;
        icon_url: string;
        link: string;
    }[];
}

interface HighlightBlock {
    title: string;
    items: {
        text: string;
        icon_url: string;
        link: string;
    }[];
}

export interface MainBlock {
    menu_block: MenuBlock;
    highlight_block: HighlightBlock;
}
