import React from 'react';

import { SvgIconProps } from './types';
import { SvgIconSC } from './styles';

export const SvgIcon: React.FC<SvgIconProps> = ({
    children,
    color = 'inherit',
    viewBox = '0 0 24 24',
    fontSize = '1.5rem',
    ...other
}) => (
    <SvgIconSC
        focusable="false"
        viewBox={viewBox}
        color={color}
        fontSize={fontSize}
        {...other}
    >
        {children}
    </SvgIconSC>
);
