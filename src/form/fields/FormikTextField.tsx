import React from 'react';
import { useField } from 'formik';

type FormikTextFieldProps = {
    name: string;
    label?: string;
};

export const FormikTextField: React.FC<FormikTextFieldProps> = ({ name, label }) => {
    const [field, meta] = useField(name);

    return (
        <div>
            {label && (
                <label htmlFor={field.name}>{label}</label>
            )}

            <input
                type="text"
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
