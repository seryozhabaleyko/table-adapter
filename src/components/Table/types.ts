import { Column } from 'react-table';

export type Obj = Record<string, unknown>;

export type ColumnDef<Data extends Obj> = Column<Data>;

export type TableProps<Data extends Obj> = {
    data: Data[];
    columns: ColumnDef<Data>[];
};
