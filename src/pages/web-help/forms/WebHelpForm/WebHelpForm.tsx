import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';

import {
    FormikTextField, FormikWysiwygField, FormikControls,
} from '@form';
import { FormGroup } from '@components';

import { WebHelpFormProps, ArticleVm } from './types';
import { useViewModel } from './useViewModel';

export const WebHelpForm: React.FC<WebHelpFormProps> = ({ initialValues, saveAsync }) => {
    const {
        initialValues: castedInitialValues,
        validationSchema,
        prepare,
    } = useViewModel(initialValues);

    const onSubmit = async (articleVm: ArticleVm, { setSubmitting }: FormikHelpers<ArticleVm>) => {
        setSubmitting(true);

        try {
            await saveAsync(prepare(articleVm));
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
            <Form
                autoComplete="off"
                noValidate
            >
                <FormGroup>
                    <FormikTextField
                        name="title"
                        label="Title"
                    />
                </FormGroup>

                <FormGroup>
                    <FormikWysiwygField
                        name="content"
                        label="Content"
                    />
                </FormGroup>

                <FormGroup>
                    <FormikControls />
                </FormGroup>
            </Form>
        </Formik>
    );
};
