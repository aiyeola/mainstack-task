import { SVGProps } from 'react';

const TrashIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 10 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.188 12.833h5.624a.5.5 0 0 0 .365-.156.497.497 0 0 0 .156-.364V4.5H1.667v7.813a.5.5 0 0 0 .156.364.498.498 0 0 0 .365.156Zm-2-10.312v-.833H2.25l.833-.834h3.834l.833.834h2.063v.833H.187Zm2 11.146a1.314 1.314 0 0 1-1.354-1.354V3.667h8.333v8.646a1.316 1.316 0 0 1-1.354 1.354H2.188Zm-.521-.834h6.666-6.666Z"
      fill="inherit"
    />
  </svg>
);

export default TrashIcon;
