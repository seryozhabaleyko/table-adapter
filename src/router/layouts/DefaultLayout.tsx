import React from 'react';
import { Outlet } from 'react-router-dom';

type DefaultLayoutProps = {
    children?: React.ReactNode;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children = <Outlet /> }) => (
    <div>
        <h1>DefaultLayout</h1>

        {children}
    </div>
);
