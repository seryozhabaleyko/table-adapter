import React from 'react';

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helperText?: string
};
