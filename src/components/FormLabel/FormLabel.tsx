import React from 'react';

import { FormLabelProps } from './types';
import { FormLabelSC } from './styles';

export const FormLabel: React.FC<FormLabelProps> = (props) => {
    return (
        <FormLabelSC {...props} />
    );
};
