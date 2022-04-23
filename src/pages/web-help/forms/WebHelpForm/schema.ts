import * as Yup from 'yup';

import { ArticleVm } from './types';

export const validationSchema: Yup.BaseSchema<ArticleVm> = Yup.object({
    title: Yup.string().ensure().required(),
    content: Yup.string().ensure().required(),
});
