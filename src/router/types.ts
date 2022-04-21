import React from 'react';

export type RouteConfig = {
    caseSensitive?: boolean;
    children?: React.ReactNode;
    element?: React.ReactNode | null;
    index?: boolean;
    path?: string;
    routes?: RouteConfig[];
};

export type RouterProps = {
    routes: RouteConfig[]
};
