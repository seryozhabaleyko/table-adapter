import React from 'react';

import { HomeCollection, NotFound } from '../pages';

import { RouteConfig } from './types';
import { DefaultLayout } from './layouts';

export const routes: RouteConfig[] = [
    {
        element: <DefaultLayout />,
        children: [
            {
                path: 'sent',
                element: <div>sent</div>,
            },
            {
                path: '/',
                element: <HomeCollection />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];
