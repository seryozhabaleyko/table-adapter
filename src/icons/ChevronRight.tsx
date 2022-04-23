import React from 'react';

import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const ChevronRight: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9.5 18L15.5 12L9.5 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
