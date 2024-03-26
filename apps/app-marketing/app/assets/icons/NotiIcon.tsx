import { SVGProps } from "react";

const NotiIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      {...props}
    >
      <path
        d="M5.25 23.75V21.875H7.75V12.375C7.75 10.625 8.26562 9.05729 9.29688 7.67188C10.3281 6.28646 11.6875 5.41667 13.375 5.0625V4.375C13.375 3.85417 13.5573 3.41146 13.9219 3.04688C14.2865 2.68229 14.7292 2.5 15.25 2.5C15.7708 2.5 16.2135 2.68229 16.5781 3.04688C16.9427 3.41146 17.125 3.85417 17.125 4.375V5.0625C18.8125 5.41667 20.1719 6.28646 21.2031 7.67188C22.2344 9.05729 22.75 10.625 22.75 12.375V21.875H25.25V23.75H5.25ZM15.25 27.5C14.5625 27.5 13.974 27.2552 13.4844 26.7656C12.9948 26.276 12.75 25.6875 12.75 25H17.75C17.75 25.6875 17.5052 26.276 17.0156 26.7656C16.526 27.2552 15.9375 27.5 15.25 27.5ZM9.625 21.875H20.875V12.375C20.875 10.8125 20.3281 9.48438 19.2344 8.39062C18.1406 7.29688 16.8125 6.75 15.25 6.75C13.6875 6.75 12.3594 7.29688 11.2656 8.39062C10.1719 9.48438 9.625 10.8125 9.625 12.375V21.875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NotiIcon;
