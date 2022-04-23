import React from 'react';

import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const Article: React.FC<SvgIconProps> = (props) => {
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
                d="M20.5 22H4.5C4.23478 22 3.98043 21.8946 3.79289 21.7071C3.60536 21.5196 3.5 21.2652 3.5 21V3C3.5 2.73478 3.60536 2.48043 3.79289 2.29289C3.98043 2.10536 4.23478 2 4.5 2H20.5C20.7652 2 21.0196 2.10536 21.2071 2.29289C21.3946 2.48043 21.5 2.73478 21.5 3V21C21.5 21.2652 21.3946 21.5196 21.2071 21.7071C21.0196 21.8946 20.7652 22 20.5 22ZM19.5 20V4H5.5V20H19.5ZM8.5 7H16.5V9H8.5V7ZM8.5 11H16.5V13H8.5V11ZM8.5 15H16.5V17H8.5V15Z"
                fill="currentColor"
            />
        </SvgIcon>
    );
};
