import { SVGProps } from 'react';

const PlayIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.25 1.708V.875h7.5v.833h-7.5Zm-2.5 2.313v-.833h12.5v.833H1.75ZM1.854 15.5A1.314 1.314 0 0 1 .5 14.146V6.854A1.314 1.314 0 0 1 1.854 5.5h12.292A1.316 1.316 0 0 1 15.5 6.854v7.292a1.316 1.316 0 0 1-1.354 1.354H1.854Zm0-.833h12.292a.5.5 0 0 0 .364-.157.498.498 0 0 0 .157-.364V6.854a.498.498 0 0 0-.157-.364.498.498 0 0 0-.364-.157H1.854a.498.498 0 0 0-.364.157.498.498 0 0 0-.157.364v7.292a.5.5 0 0 0 .157.364.498.498 0 0 0 .364.157Zm4.896-1.604 3.854-2.563L6.75 7.937v5.125Z"
      fill="inherit"
    />
  </svg>
);

export default PlayIcon;
