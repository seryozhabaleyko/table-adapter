import React from 'react';
import { useField } from 'formik';

type FormikTextAreaFieldProps = {
    name: string;
    label?: string;
};

export const FormikTextAreaField: React.FC<FormikTextAreaFieldProps> = ({ name, label }) => {
    const [field, meta] = useField(name);

    return (
        <div>
            {label && (
                <label htmlFor={field.name}>{label}</label>
            )}

            <textarea
                id={field.name}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
            />

            {meta.touched && meta.error && (
                <div>{meta.touched && meta.error}</div>
            )}
        </div>
    );
};
