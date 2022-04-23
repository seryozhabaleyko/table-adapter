import React from 'react';
import * as Yup from 'yup';

import { Article } from '../../types';

import { ArticleVm } from './types';
import { validationSchema } from './schema';

type UseViewModelHook = (initialValues?: Partial<Article>) => {
    initialValues: ArticleVm;
    validationSchema: Yup.BaseSchema<ArticleVm>;
    prepare: (articleVm: ArticleVm) => Article;
};

const makeViewModel: UseViewModelHook = (initialValues) => (
    {
        initialValues: validationSchema.cast(initialValues),
        validationSchema,
        prepare: (articleVm: ArticleVm) => ({
            title: articleVm.title,
            content: articleVm.content,
        }),
    }
);

export const useViewModel: UseViewModelHook = (initialValues) => (
    React.useMemo(() => makeViewModel(initialValues), [initialValues])
);
