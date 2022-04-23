import React from 'react';

import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const ThumbDown: React.FC<SvgIconProps> = (props) => {
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
                d="M19.5 15V3H23.5V15H19.5ZM15.5 3C16.0304 3 16.5391 3.21071 16.9142 3.58579C17.2893 3.96086 17.5 4.46957 17.5 5V15C17.5 15.55 17.28 16.05 16.91 16.41L10.33 23L9.27 21.94C9 21.67 8.83 21.3 8.83 20.88L8.86 20.57L9.81 16H3.5C2.39 16 1.5 15.1 1.5 14V12C1.5 11.74 1.55 11.5 1.64 11.27L4.66 4.22C4.96 3.5 5.67 3 6.5 3H15.5ZM15.5 5H6.47L3.5 12V14H12.28L11.15 19.32L15.5 14.97V5Z"
                fill="currentColor"
            />
        </SvgIcon>
    );
};
