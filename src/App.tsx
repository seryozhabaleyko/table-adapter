import React from 'react';
import styled from 'styled-components';

import { Table, ColumnDef } from './components/Table';

const Component = styled.div`
  display: grid;
  grid-template-rows: 50% 1fr;
  
  height: 100%;
`;

type FlowTableVM = {
    col1: string,
    col2: string,
};

const init = [
    {
        col1: 'Hello',
        col2: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
    },
    {
        col1: 'whatever',
        col2: 'you want',
    },
    {
        col1: 'Hello',
        col2: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
    },
    {
        col1: 'Hello',
        col2: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
    },
    {
        col1: 'whatever',
        col2: 'you want',
    },
    {
        col1: 'Hello',
        col2: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
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
                    setData((prev) => [...prev, ...init]);
                }}
            />
        </Component>
    );
};
