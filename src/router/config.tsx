import React from 'react';

import { HomeCollection } from '../pages';

import { RouteConfig } from './types';

export const routes: RouteConfig[] = [{
    path: '/',
    element: <HomeCollection />,
}];
