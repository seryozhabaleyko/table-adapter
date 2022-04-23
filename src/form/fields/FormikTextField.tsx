import React from 'react';
import { useField } from 'formik';

import { TextField } from '../../components';

type FormikTextFieldProps = {
    name: string;
    label?: string;
};

export const FormikTextField: React.FC<FormikTextFieldProps> = ({ name, label }) => {
    const [field, meta] = useField(name);

    return (
        <TextField
            label={label}
            id={field.name}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            helperText={meta.touched ? meta.error : undefined}
        />
    );
};
