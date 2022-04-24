import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '@components';

import { DefaultLayoutSC, MainSC } from './styles';
import { DefaultLayoutProps } from './types';

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children = <Outlet /> }) => {
    return (
        <DefaultLayoutSC>
            <Navbar />
            <MainSC>{children}</MainSC>
        </DefaultLayoutSC>
    );
};
