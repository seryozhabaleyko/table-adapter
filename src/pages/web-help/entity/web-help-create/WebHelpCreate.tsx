import React from 'react';

import { WebHelpForm } from '../../forms';
import { Article } from '../../types';

export const WebHelpCreate: React.FC = () => {
    const saveAsync = async (article: Article) => {
        // eslint-disable-next-line no-console
        console.log('saveAsync -> article:', article);
    };

    return (
        <div>
            <h1>WebHelpCreate</h1>

            <WebHelpForm saveAsync={saveAsync} />
        </div>
    );
};
