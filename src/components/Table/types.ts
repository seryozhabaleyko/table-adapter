import { Column } from 'react-table';

export type Obj = Record<string, unknown>;

export type TableProps<Data extends Obj> = {
    data: Data[];
    columns: Column<Data>[];
};
