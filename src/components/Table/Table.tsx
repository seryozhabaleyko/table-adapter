import React from 'react';
import {
    useTable, useResizeColumns, useFlexLayout, TableOptions,
} from 'react-table';

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
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(({ getHeaderGroupProps, headers }) => (
                    <tr {...getHeaderGroupProps()}>
                        {headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);

                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td
                                    {...cell.getCellProps()}
                                >
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
