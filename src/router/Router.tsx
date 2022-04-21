import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { RouterProps } from './types';

export const Router: React.FC<RouterProps> = ({ routes }) => (
    <Routes>
        {routes.map(function routeCallback(route, index) {
            return (
                <Route key={index} {...route}>
                    {route.routes?.map(routeCallback)}
                </Route>
            );
        })}
    </Routes>
);
