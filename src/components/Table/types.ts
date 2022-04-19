import React from 'react';
import { Column } from 'react-table';
import { ListChildComponentProps } from 'react-window';

export type Obj = Record<string, unknown>;

export type ColumnDef<Data extends Obj> = Column<Data>;

export type TableProps<Data extends Obj> = {
    data: Data[];
    columns: ColumnDef<Data>[];
    loadMore: () => Promise<void>
    rowHeight?: number;
    isLoading?: boolean
};

export type InfiniteListProps = {
    width: number;
    height: number;
    itemsCount: number;
    rowHeight: number;
    renderRow: ({ index, style }: ListChildComponentProps) => React.ReactElement;
    loadMoreItems: (startIndex: number, stopIndex: number) => Promise<void> | void;
    isLoading?: boolean;
};

export type UsePreloadSecondPageIfHeightAllowsProps = {
    height: number;
    itemsCount: number;
    rowHeight: number;
    loadMoreItems: (startIndex: number, stopIndex: number) => Promise<void> | void;
    isLoading?: boolean;
};
