import React from 'react';

import { Content, Sider } from './components';
import { WebHelpDetailsSC } from './styles';

export const WebHelpDetails: React.FC = () => {
    return (
        <WebHelpDetailsSC>
            <Sider />
            <Content />
        </WebHelpDetailsSC>
    );
};
