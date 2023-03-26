import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Sketch = ({ width, height, fill }: IconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 21}
      height={height ?? 22}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.625"
        width="21"
        height="21"
        rx="8"
        fill={fill ?? 'black'}
      />
      <path
        d="M5.53125 15.625L6.52246 12.8359H10.501L11.4922 15.625H12.791L9.16797 5.72656H7.86914L4.24609 15.625H5.53125ZM6.89844 11.7559L8.4707 7.32617H8.55273L10.125 11.7559H6.89844ZM15.3613 5.72656H14.1309V15.625H15.3613V5.72656Z"
        fill="white"
      />
    </svg>
  )
}

export default Sketch;