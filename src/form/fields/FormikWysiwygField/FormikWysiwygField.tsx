import React from 'react';
import { useField } from 'formik';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { FormikWysiwygFieldProps } from './types';

export const FormikWysiwygField: React.FC<FormikWysiwygFieldProps> = ({ name, label }) => {
    const [field, meta, helpers] = useField(name);

    const onChange = (event: Event, editor: ClassicEditor) => {
        helpers.setValue(editor.getData());
    };

    return (
        <div>
            {label && (
                <label htmlFor={field.name}>{label}</label>
            )}

            <CKEditor
                editor={ClassicEditor}
                data={field.value}
                onChange={onChange}
            />

            {meta.touched && meta.error && (
                <div>{meta.touched && meta.error}</div>
            )}
        </div>
    );
};
