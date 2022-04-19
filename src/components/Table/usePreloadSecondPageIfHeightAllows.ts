import React from 'react';

import { useClosure } from '../../hooks';

import { UsePreloadSecondPageIfHeightAllowsProps } from './types';

/**
 For some reason, InfiniteLoader doesn't trigger `loadMore` when more than
 `itemsCount - 1` rows are visible.
 Ex: Visible 15 of 16 rows or visible all 16 rows but there is space for more rows
 */
export const usePreloadSecondPageIfHeightAllows = ({
    height,
    itemsCount,
    rowHeight,
    loadMoreItems,
    isLoading,
}: UsePreloadSecondPageIfHeightAllowsProps): void => {
    const loadMoreReffed = useClosure(loadMoreItems);

    React.useEffect(() => {
        let isActive = true;

        if (!isLoading && itemsCount > 0 && height > (itemsCount - 1) * rowHeight) {
            setTimeout(() => {
                if (isActive) {
                    loadMoreReffed(itemsCount, itemsCount);
                }
            });
        }

        return () => {
            isActive = false;
        };
    }, [height, isLoading, itemsCount, loadMoreReffed, rowHeight]);
};
