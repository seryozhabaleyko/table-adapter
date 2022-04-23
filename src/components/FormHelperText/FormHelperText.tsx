import React from 'react';

import { FormHelperTextProps } from './types';
import { FormHelperTextSC } from './styles';

export const FormHelperText: React.FC<FormHelperTextProps> = ({ children }) => (
    <FormHelperTextSC>{children}</FormHelperTextSC>
);
