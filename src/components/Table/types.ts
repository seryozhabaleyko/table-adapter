export type TableProps<Data extends Record<string, unknown>> = {
    data: Data[];
    columns: any;
};
