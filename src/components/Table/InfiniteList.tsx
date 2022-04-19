import React from 'react';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList } from 'react-window';

import { InfiniteListProps } from './types';
import { usePreloadSecondPageIfHeightAllows } from './usePreloadSecondPageIfHeightAllows';

export const InfiniteList: React.FC<InfiniteListProps> = (props) => {
    const {
        width,
        height,
        itemsCount,
        rowHeight,
        loadMoreItems,
        renderRow,
    } = props;

    usePreloadSecondPageIfHeightAllows(props);

    return (
        <InfiniteLoader
            isItemLoaded={(index) => index < itemsCount}
            itemCount={itemsCount + 1}
            loadMoreItems={loadMoreItems}
            threshold={1}
        >
            {({ onItemsRendered, ref }) => (
                <FixedSizeList
                    width={width}
                    height={height}
                    itemCount={itemsCount}
                    itemSize={rowHeight}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                >
                    {renderRow}
                </FixedSizeList>
            )}
        </InfiniteLoader>
    );
};
