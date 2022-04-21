import React from 'react';
import { useRoutes } from 'react-router-dom';

import { RouterProps } from './types';

export const Router: React.FC<RouterProps> = ({ routes }) => useRoutes(routes);
