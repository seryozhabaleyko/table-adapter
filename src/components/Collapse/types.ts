import React from 'react';

export interface ICollapseProps {
    in?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    appear?: boolean;
    timeout?: number;
    children: React.ReactNode;
    collapsedSize?: number | string;
    style?: React.CSSProperties;
    easing?: string | { enter?: string; exit?: string };
}

export enum State {
    Entering = 'entering',
    Entered = 'entered',
    Exiting = 'exiting',
    Exited = 'exited',
    Unmounted = 'unmounted',
}
