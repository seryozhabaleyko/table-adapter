import React from 'react';

import { Table } from './components/Table';
import { ColumnDef } from './components/Table/types';

type FlowTableVM = {
    col1: string,
    col2: string,
};

export const App: React.FC = () => {
    const data = React.useMemo<FlowTableVM[]>(
        () => [
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
        ],
        [],
    );

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
        <div>
            <Table
                data={data}
                columns={columns}
            />
        </div>
    );
};
