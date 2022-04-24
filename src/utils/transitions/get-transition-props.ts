import React from 'react';
import { isNumber, isObject } from 'lodash';

interface IComponentProps {
    easing: string | { enter?: string; exit?: string } | undefined;
    style: React.CSSProperties | undefined;
    timeout: number | { enter?: number; exit?: number };
}

interface IOptions {
    mode: 'enter' | 'exit';
}

interface ITransitionProps {
    duration: string | number;
    easing: string | undefined;
    delay: string | undefined;
}

export const getTransitionProps = (
    props: IComponentProps,
    options: IOptions,
): ITransitionProps => {
    const { timeout, easing, style = {} } = props;

    return {
        duration:
            style.transitionDuration
            || (isNumber(timeout) ? timeout : timeout[options.mode] || 0),
        easing:
            style.transitionTimingFunction
            || (isObject(easing) ? easing[options.mode] : easing),
        delay: style.transitionDelay,
    };
};
