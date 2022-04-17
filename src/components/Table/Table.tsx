import React from 'react';
import {
    useTable, useResizeColumns, useFlexLayout, TableOptions,
} from 'react-table';

import {
    TableSC, TheadSC, TbodySC, TrSC, ThSC, TdSC,
} from './styles';
import { TableProps, Obj } from './types';

export const Table = <Data extends Obj>({
    data,
    columns,
}: TableProps<Data>): JSX.Element => {
    const options = React.useMemo<TableOptions<Data>>(() => ({
        data,
        columns,
    }), [data, columns]);

    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
    } = useTable(options, useResizeColumns, useFlexLayout);

    return (
        <TableSC {...getTableProps()}>
            <TheadSC>
                {headerGroups.map(({ getHeaderGroupProps, headers }) => (
                    <TrSC {...getHeaderGroupProps()}>
                        {headers.map((column) => (
                            <ThSC {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </ThSC>
                        ))}
                    </TrSC>
                ))}
            </TheadSC>
            <TbodySC {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);

                    return (
                        <TrSC {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <TdSC
                                    {...cell.getCellProps()}
                                >
                                    {cell.render('Cell')}
                                </TdSC>
                            ))}
                        </TrSC>
                    );
                })}
            </TbodySC>
        </TableSC>
    );
};
