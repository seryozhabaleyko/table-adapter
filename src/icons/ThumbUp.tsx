import React from 'react';

import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const ThumbUp: React.FC<SvgIconProps> = (props) => {
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
                d="M5.5 9V21H1.5V9H5.5ZM9.5 21C8.96957 21 8.46086 20.7893 8.08579 20.4142C7.71071 20.0391 7.5 19.5304 7.5 19V9C7.5 8.45 7.72 7.95 8.09 7.59L14.67 1L15.73 2.06C16 2.33 16.17 2.7 16.17 3.11L16.14 3.43L15.19 8H21.5C22.61 8 23.5 8.9 23.5 10V12C23.5 12.26 23.45 12.5 23.36 12.73L20.34 19.78C20.04 20.5 19.33 21 18.5 21H9.5ZM9.5 19H18.53L21.5 12V10H12.71L13.84 4.68L9.5 9.03V19Z"
                fill="currentColor"
            />
        </SvgIcon>
    );
};
