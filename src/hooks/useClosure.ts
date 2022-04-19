import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn<A extends any[] = any[], R = void> = (...args: A) => R;

/**
 * Works similar to useCallback, but keeps access to relevant components closure
 * Can be used in listeners, subscribing/unsubscribing from which might be expensive
 *
 * @param func - function to wrap
 */
export const useClosure = <F extends Fn>(func: F): F => {
    const funcRef = React.useRef<F>(func);

    funcRef.current = func;

    return React.useCallback((...args: Parameters<F>) => funcRef.current(...args), []) as F;
};
