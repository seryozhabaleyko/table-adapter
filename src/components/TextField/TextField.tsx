import React from 'react';

import { FormLabel } from '../FormLabel';
import { FormHelperText } from '../FormHelperText';

import { TextFieldProps } from './types';
import { TextFieldSC, InputSC } from './styles';

export const TextField: React.FC<TextFieldProps> = ({
    label, helperText, id, ...props
}) => {
    return (
        <TextFieldSC>
            {label && (
                <FormLabel htmlFor={id}>{label}</FormLabel>
            )}

            <InputSC
                type="text"
                id={id}
                {...props}
            />

            {helperText && (
                <FormHelperText>{helperText}</FormHelperText>
            )}
        </TextFieldSC>
    );
};
