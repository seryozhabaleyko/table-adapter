import styled, { css } from 'styled-components';

import { State } from './types';

const stateMap = {
    [State.Entering]: css``,
    [State.Entered]: css`
        height: auto;
        overflow: visible;
    `,
    [State.Exiting]: css``,
    [State.Exited]: css`
        ${(props: { inProp: boolean; collapsedSize: string | number }) => !props.inProp
            && props.collapsedSize
            && css`
                visibility: hidden;
            `};
    `,
    [State.Unmounted]: css``,
};

export const CollapseSC = styled.div<{
    inProp: boolean;
    state: State;
    collapsedSize: string | number;
}>`
    height: 0;
    overflow: hidden;

    ${(props) => stateMap[props.state]};

    transition: ${(props) => props.theme.transitions.create('height')};
`;

export const CollapseWrapperSC = styled.div`
    display: flex;
    width: 100%;
`;

export const CollapseWrapperInnerSC = styled.div`
    width: 100%;
`;
