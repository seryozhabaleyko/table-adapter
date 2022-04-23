import styled from 'styled-components';

export const SvgIconSC = styled.svg<{ fontSize?: number | string }>`
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: ${(props) => props.fontSize};
`;
