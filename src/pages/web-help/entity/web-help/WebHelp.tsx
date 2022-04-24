import React from 'react';

import { Content, Sider } from './components';
import { TreeItem } from './components/Sider';
import { WebHelpSC } from './styles';

const items: TreeItem[] = [
    {
        id: 'foo',
        name: 'Foo',
        children: [
            {
                id: '1',
                name: 'Child - 1',
            },
            {
                id: '2',
                name: 'Child - 2',
                children: [
                    {
                        id: '1',
                        name: 'Child - 1',
                    },
                    {
                        id: '2',
                        name: 'Child - 2',
                        children: [
                            {
                                id: '1',
                                name: 'Child - 1',
                            },
                            {
                                id: '2',
                                name: 'Child - 2',
                            },
                            {
                                id: '3',
                                name: 'Child - 3',
                            },
                        ],
                    },
                    {
                        id: '3',
                        name: 'Child - 3',
                    },
                ],
            },
            {
                id: '3',
                name: 'Child - 3',
            },
        ],
    },
    {
        id: 'bar',
        name: 'Bar',
        children: [
            {
                id: '1',
                name: 'Child - 1',
            },
            {
                id: '2',
                name: 'Child - 2',
                children: [
                    {
                        id: '1',
                        name: 'Child - 1',
                    },
                    {
                        id: '2',
                        name: 'Child - 2',
                        children: [
                            {
                                id: '1',
                                name: 'Child - 1',
                            },
                            {
                                id: '2',
                                name: 'Child - 2',
                            },
                            {
                                id: '3',
                                name: 'Child - 3',
                            },
                        ],
                    },
                    {
                        id: '3',
                        name: 'Child - 3',
                    },
                ],
            },
            {
                id: '3',
                name: 'Child - 3',
            },
        ],
    },
    {
        id: '1100',
        name: 'Child - 1100',
    },
];

export const WebHelp: React.FC = () => {
    return (
        <WebHelpSC>
            <Sider items={items} />
            <Content />
        </WebHelpSC>
    );
};
