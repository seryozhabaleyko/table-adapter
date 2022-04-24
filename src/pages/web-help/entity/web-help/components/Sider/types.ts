export type TreeItem = {
    id: string,
    name: string,
    children?: TreeItem[],
};

export type SiderProps = {
    items: TreeItem[]
};
