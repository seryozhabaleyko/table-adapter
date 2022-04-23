import React from 'react';
import { useField } from 'formik';

import { FormHelperText, FormLabel } from '../../components';

type FormikTextAreaFieldProps = {
    name: string;
    label?: string;
};

export const FormikTextAreaField: React.FC<FormikTextAreaFieldProps> = ({ name, label }) => {
    const [field, meta] = useField(name);

    return (
        <div>
            {label && (
                <FormLabel htmlFor={field.name}>{label}</FormLabel>
            )}

            <textarea
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
