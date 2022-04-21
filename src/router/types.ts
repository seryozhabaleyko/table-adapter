import React from 'react';

export type RouteConfig = {
    caseSensitive?: boolean;
    children?: RouteConfig[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
};

export type RouterProps = {
    routes: RouteConfig[]
};
