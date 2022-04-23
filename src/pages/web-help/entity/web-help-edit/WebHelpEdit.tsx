import React from 'react';

import { WebHelpForm } from '../../forms';
import { Article } from '../../types';

export const WebHelpEdit: React.FC = () => {
    const saveAsync = async (article: Article) => {
        // eslint-disable-next-line no-console
        console.log('saveAsync -> article:', article);
    };

    return (
        <div>
            <h1>WebHelpEdit</h1>

            <WebHelpForm
                initialValues={{
                    title: 'title 1',
                    content: 'content 1',
                }}
                saveAsync={saveAsync}
            />
        </div>
    );
};
