import { Article } from '../../types';

export type ArticleVm = {
    title: string;
    content: string;
};

export type WebHelpFormProps = {
    initialValues?: Partial<Article>;
    saveAsync: (article: Article) => Promise<void>;
};
