import React from 'react';

import { FormGroupProps } from './types';
import { FormGroupSC } from './styles';

export const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
    return (
        <FormGroupSC>{children}</FormGroupSC>
    );
};
