import React from 'react';
import {
    useTable, useFlexLayout, useResizeColumns,
} from 'react-table';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps } from 'react-window';

import {
    TableSC, TableHeadSC, TableBodySC, TableRowSC, TableCellSC,
} from './styles';
import { TableProps, Obj } from './types';
import { InfiniteList } from './InfiniteList';

export const Table = <Data extends Obj>({
    data,
    columns,
    loadMore,
    rowHeight = 32,
    isLoading,
}: TableProps<Data>): JSX.Element => {
    const options = React.useMemo(() => ({
        data,
        columns,
    }), [data, columns]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        totalColumnsWidth,
    } = useTable<Data>(options, useFlexLayout, useResizeColumns);

    const renderRow = React.useCallback(({ index, style }: ListChildComponentProps) => {
        const row = rows[index];

        prepareRow(row);

        return (
            <TableRowSC {...row.getRowProps({ style })}>
                {row.cells.map((cell) => (
                    <TableCellSC {...cell.getCellProps()}>
                        {cell.render('Cell')}
                    </TableCellSC>
                ))}
            </TableRowSC>
        );
    }, [rows, prepareRow]);

    const [isIncrementalLoad, setIsIncrementalLoad] = React.useState(false);

    const handleLoadMore = async (): Promise<void> => {
        setIsIncrementalLoad(true);

        try {
            await loadMore();
        } catch {
            // ignoring
        }

        setIsIncrementalLoad(false);
    };

    return (
        <TableSC {...getTableProps()}>
            <TableHeadSC>
                {headerGroups.map(({ getHeaderGroupProps, headers }) => (
                    <TableRowSC {...getHeaderGroupProps()}>
                        {headers.map((column) => (
                            <TableCellSC {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableCellSC>
                        ))}
                    </TableRowSC>
                ))}
            </TableHeadSC>
            <TableBodySC {...getTableBodyProps()}>
                <AutoSizer>
                    {({ width, height }) => (
                        <InfiniteList
                            itemsCount={rows.length}
                            loadMoreItems={handleLoadMore}
                            width={Math.max(totalColumnsWidth, width)}
                            height={height}
                            rowHeight={rowHeight}
                            renderRow={renderRow}
                            isLoading={isLoading}
                        />
                    )}
                </AutoSizer>

                {isIncrementalLoad && (
                    <div>loading...</div>
                )}
            </TableBodySC>
        </TableSC>
    );
};
