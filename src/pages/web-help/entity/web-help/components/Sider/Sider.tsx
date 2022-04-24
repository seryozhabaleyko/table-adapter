import React from 'react';

import { Collapse } from '@components';

import { SiderSC } from './styles';
import { SiderProps, TreeItem } from './types';

type RenderGroupProps = React.PropsWithChildren<Pick<TreeItem, 'name'>>;

const RenderGroup: React.FC<RenderGroupProps> = ({ name, children }) => {
    const [open, setOpen] = React.useState(false);

    const onToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <button type="button" onClick={onToggle}>{name}</button>
            <ul role="group">
                <Collapse in={open}>
                    {children}
                </Collapse>
            </ul>
        </>
    );
};

const RenderTreeItem: React.FC<TreeItem> = ({ id, name, children }) => {
    return (
        <li key={id} role="treeitem">
            {children ? (
                <RenderGroup name={name}>
                    {children.map((treeItem, index) => (
                        <RenderTreeItem key={index} {...treeItem} />
                    ))}
                </RenderGroup>
            ) : (
                <div>{name}</div>
            )}
        </li>
    );
};

export const Sider: React.FC<SiderProps> = ({ items }) => {
    return (
        <SiderSC>
            Sider

            {/* <TreeView /> */}

            <ul role="tree">
                {items.map((treeItem, index) => (
                    <RenderTreeItem key={index} {...treeItem} />
                ))}
            </ul>
        </SiderSC>
    );
};
