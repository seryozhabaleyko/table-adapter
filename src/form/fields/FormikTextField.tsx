import React from 'react';
import { useField } from 'formik';

import { FormHelperText, FormLabel } from '../../components';

type FormikTextFieldProps = {
    name: string;
    label?: string;
};

export const FormikTextField: React.FC<FormikTextFieldProps> = ({ name, label }) => {
    const [field, meta] = useField(name);

    return (
        <div>
            {label && (
                <FormLabel htmlFor={field.name}>{label}</FormLabel>
            )}

            <input
                type="text"
                id={field.name}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
            />

            {meta.touched && meta.error && (
                <FormHelperText>{meta.touched && meta.error}</FormHelperText>
            )}
        </div>
    );
};
