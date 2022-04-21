import React from 'react';

import { TableAdapterProps } from '../types';
import { ColumnDef, Table } from '../../../components/Table';
import { timeout } from '../../../utils';

type FlowTableVM = {
    col1: string,
    col2: string,
    col3: string,
    col4: string,
};

const init = [
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'Hello',
        col4: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'react-table',
        col4: 'rocks',
    },
    {
        col1: 'whatever',
        col2: 'you want',
        col3: 'whatever',
        col4: 'you want',
    },
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'Hello',
        col4: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'react-table',
        col4: 'rocks',
    },
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'Hello',
        col4: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'react-table',
        col4: 'rocks',
    },
    {
        col1: 'whatever',
        col2: 'you want',
        col3: 'whatever',
        col4: 'you want',
    },
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'Hello',
        col4: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'react-table',
        col4: 'rocks',
    },
];

export const HomeCollection: React.FC<TableAdapterProps> = () => {
    const [data, setData] = React.useState(init);

    const columns = React.useMemo<ColumnDef<FlowTableVM>[]>(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1',
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
            {
                Header: 'Column 3',
                accessor: 'col3',
            },
            {
                Header: 'Column 4',
                accessor: 'col4',
            },
        ],
        [],
    );

    return (
        <Table
            data={data}
            columns={columns}
            loadMore={async () => {
                await timeout(1500);
                setData((prev) => [...prev, ...init]);
            }}
        />
    );
};
