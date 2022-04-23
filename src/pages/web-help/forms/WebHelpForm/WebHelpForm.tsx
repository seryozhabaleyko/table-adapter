import React from 'react';
import { Formik, FormikHelpers } from 'formik';

import { FormikTextField, FormikTextAreaField, FormikWysiwygField } from '../../../../form';

import { WebHelpFormProps, ArticleVm } from './types';
import { validationSchema } from './schema';

export const WebHelpForm: React.FC<WebHelpFormProps> = ({ initialValues, saveAsync }) => {
    const castedInitialValues = React.useMemo(() => (
        validationSchema.cast(initialValues)
    ), [initialValues]);

    const onSubmit = async (articleVm: ArticleVm, { setSubmitting }: FormikHelpers<ArticleVm>) => {
        setSubmitting(true);

        try {
            await saveAsync({});
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }

        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={castedInitialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <form
                autoComplete="off"
                noValidate
            >
                <FormikTextField
                    name="title"
                    label="Title"
                />

                <FormikTextAreaField
                    name="content"
                    label="Content"
                />

                <FormikWysiwygField
                    name="body"
                    label="Body"
                />
            </form>
        </Formik>
    );
};
