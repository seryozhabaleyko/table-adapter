import React from 'react';

import { SiderSC } from './styles';
import { SiderProps } from './types';

export const Sider: React.FC<SiderProps> = ({ items }) => {
    return (
        <SiderSC>
            Sider

            {/* <TreeView /> */}

            {items.map(function renderTreeItem(item) {
                return (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        {item.children?.map((treeItem) => (
                            renderTreeItem(treeItem)
                        ))}
                    </div>
                );
            })}
        </SiderSC>
    );
};
