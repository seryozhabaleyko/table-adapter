import React from 'react';
import { isNumber, isString } from 'lodash';
import { Transition } from 'react-transition-group';

import { duration } from '@theming';
import { getTransitionProps } from '@utils';

import { ICollapseProps, State } from './types';
import {
    CollapseSC,
    CollapseWrapperInnerSC,
    CollapseWrapperSC,
} from './styles';

export const Collapse: React.FC<ICollapseProps> = ({
    in: inProp = false,
    timeout = duration.standard,
    collapsedSize: collapsedSizeProp = '0px',
    style,
    easing,
    children,
}) => {
    const collapsedSize = isNumber(collapsedSizeProp)
        ? `${collapsedSizeProp}px`
        : collapsedSizeProp;

    const wrapperRef = React.useRef<HTMLDivElement | null>(null);

    const getWrapperSize = () => {
        return wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    };

    const onEnter = (node: HTMLElement) => {
        node.style.height = collapsedSize;
    };

    const onEntering = (node: HTMLElement) => {
        const wrapperSize = getWrapperSize();
        const {
            duration: transitionDuration,
            easing: transitionTimingFunction,
        } = getTransitionProps(
            { style, timeout, easing },
            {
                mode: 'exit',
            },
        );

        node.style.transitionDuration = isString(transitionDuration)
            ? transitionDuration
            : `${transitionDuration}ms`;

        node.style.height = `${wrapperSize}px`;

        if (transitionTimingFunction) {
            node.style.transitionTimingFunction = transitionTimingFunction;
        }
    };

    const onEntered = (node: HTMLElement) => {
        node.style.height = 'auto';
    };

    const onExit = async (node: HTMLElement) => {
        const wrapperSize = getWrapperSize();

        node.style.height = 'auto';
        node.style.height = `${wrapperSize}px`;
    };

    const onExiting = (node: HTMLElement) => {
        const {
            duration: transitionDuration,
            easing: transitionTimingFunction,
        } = getTransitionProps(
            { style, timeout, easing },
            {
                mode: 'exit',
            },
        );

        node.style.transitionDuration = isString(transitionDuration)
            ? transitionDuration
            : `${transitionDuration}ms`;

        node.style.height = collapsedSize;

        if (transitionTimingFunction) {
            node.style.transitionTimingFunction = transitionTimingFunction;
        }
    };

    return (
        <Transition
            in={inProp}
            timeout={timeout}
            onEnter={onEnter}
            onEntering={onEntering}
            onEntered={onEntered}
            onExit={onExit}
            onExiting={onExiting}
        >
            {(state) => (
                <CollapseSC
                    inProp={inProp}
                    state={state as State}
                    collapsedSize={collapsedSize}
                    style={{
                        minHeight: collapsedSize,
                        ...style,
                    }}
                >
                    <CollapseWrapperSC ref={wrapperRef}>
                        <CollapseWrapperInnerSC>
                            {children}
                        </CollapseWrapperInnerSC>
                    </CollapseWrapperSC>
                </CollapseSC>
            )}
        </Transition>
    );
};
