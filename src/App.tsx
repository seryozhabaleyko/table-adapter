import React from 'react';
import styled from 'styled-components';

import { Table, ColumnDef } from './components/Table';
import { timeout } from './utils';

const Component = styled.div`
  display: grid;
  grid-template-rows: 50% 1fr;
  
  height: 100%;
`;

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

export const App: React.FC = () => {
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
        <Component>
            <h1>Table</h1>

            <Table
                data={data}
                columns={columns}
                loadMore={async () => {
                    console.log('loadMore');

                    await timeout(1500);

                    setData((prev) => [...prev, ...init]);
                }}
            />
        </Component>
    );
};
