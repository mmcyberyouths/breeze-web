import { SVGProps } from "react";

const BackIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.0003 29.3337C23.3641 29.3337 29.3337 23.3641 29.3337 16.0003C29.3337 8.63653 23.3641 2.66699 16.0003 2.66699C8.63653 2.66699 2.66699 8.63653 2.66699 16.0003C2.66699 23.3641 8.63653 29.3337 16.0003 29.3337ZM18.7074 11.2932C19.098 11.6837 19.098 12.3169 18.7074 12.7074L15.4145 16.0003L18.7074 19.2932C19.098 19.6837 19.098 20.3169 18.7074 20.7074C18.3169 21.098 17.6837 21.098 17.2932 20.7074L13.2932 16.7074C12.9027 16.3169 12.9027 15.6837 13.2932 15.2932L17.2932 11.2932C17.6837 10.9027 18.3169 10.9027 18.7074 11.2932Z"
        fill="#323334"
      />
    </svg>
  );
};

export default BackIcon;