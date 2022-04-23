import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Router, routes } from './router';
import { theme } from './theming';

// code

export const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Router routes={routes} />
        </BrowserRouter>
    </ThemeProvider>
);
