import React from 'react';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-types
type DefaultLayoutProps = React.PropsWithChildren<{}>;

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children = <Outlet /> }) => (
    <div>
        <h1>DefaultLayout</h1>

        <div>{children}</div>
    </div>
);
