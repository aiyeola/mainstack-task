import { SVGProps } from 'react';

const DashboardIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.25 4.5V.333h5.417V4.5H8.25ZM.333 7V.333H5.75V7H.333Zm7.917 6.667V7h5.417v6.667H8.25Zm-7.917 0V9.5H5.75v4.167H.333Zm.834-7.5h3.75v-5h-3.75v5Zm7.916 6.666h3.75v-5h-3.75v5Zm0-9.166h3.75v-2.5h-3.75v2.5Zm-7.916 9.166h3.75v-2.5h-3.75v2.5Z"
      fill="inherit"
    />
  </svg>
);

export default DashboardIcon;
