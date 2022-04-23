import { DefaultTheme } from 'styled-components';

import { createTransitions } from './transitions';

const transitions = createTransitions({});

export const theme: DefaultTheme = {
    transitions,
};
