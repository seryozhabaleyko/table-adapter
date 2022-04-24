import React from 'react';

import {
    HomeCollection,
    WebHelpDetails,
    WebHelpEdit,
    WebHelpCreate,
    NotFound,
} from '@pages';

import { RouteConfig } from './types';
import { DefaultLayout } from './layouts';

export const routes: RouteConfig[] = [
    {
        element: <DefaultLayout />,
        children: [
            {
                path: 'webhelp',
                element: <WebHelpDetails />,
            },
            {
                path: 'webhelp/create',
                element: <WebHelpCreate />,
            },
            {
                path: 'webhelp/:articleId/edit',
                element: <WebHelpEdit />,
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
