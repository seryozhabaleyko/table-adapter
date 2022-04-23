import { isArray, isString } from 'lodash';

import {
    Easing,
    Duration,
    Create,
    Transitions,
    TransitionsOptions,
} from './types';

export const easing: Easing = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

export const duration: Duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
};

const formatMs = (milliseconds: number) => {
    return `${Math.round(milliseconds)}ms`;
};

const getAutoHeightDuration = (height: number) => {
    if (!height) {
        return 0;
    }

    const constant = height / 36;

    // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
};

export const createTransitions = (
    transitionsOptions: TransitionsOptions,
): Transitions => {
    const mergedEasing = {
        ...easing,
        ...transitionsOptions.easing,
    };

    const mergedDuration = {
        ...duration,
        ...transitionsOptions.duration,
    };

    const create: Create = (props = ['all'], options = {}) => {
        const {
            duration: durationOption = mergedDuration.standard,
            easing: easingOption = mergedEasing.easeInOut,
            delay = 0,
        } = options;

        return (isArray(props) ? props : [props])
            .map(
                (animatedProp) => `${animatedProp} ${
                    isString(durationOption)
                        ? durationOption
                        : formatMs(durationOption)
                } ${easingOption} ${
                    isString(delay) ? delay : formatMs(delay)
                }`,
            )
            .join(',');
    };

    return {
        getAutoHeightDuration,
        create,
        ...transitionsOptions,
        easing: mergedEasing,
        duration: mergedDuration,
    };
};
